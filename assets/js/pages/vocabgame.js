/* =====================================================================
   pages/vocabgame.js
   Word-matching game for the vocabulary page (data-driven, every language).
   10 words from mixed topics, draw a line from each word to its meaning,
   submit. All right: confetti. Any wrong: lose 1 heart (5 max, +1 every
   30 minutes, timestamp based). Won rounds are counted for the future
   streak system. State: localStorage "vg:<lang>:v1".
   ===================================================================== */
(() => {
  const host = document.getElementById("vocab"); if (!host || !GRAMMAR.vocab) return;
  const LANG = typeof currentLang === "function" ? currentLang() : "en";
  const KEY = `vg:${LANG}:v1`, MAXH = 5, REGEN = 30 * 60 * 1000, N = 10, UNLOCK = 3;
  const { list } = GRAMMAR.vocab;
  const reduce = () => window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- persistent state ---------- */
  let ST = { h: MAXH, t: Date.now(), wins: 0, miss: [], seen: [], level: "all" };
  try { Object.assign(ST, JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(ST)); } catch (e) {} };
  function regen() {
    const now = Date.now();
    if (ST.h >= MAXH) { ST.h = MAXH; ST.t = now; return; }
    if (ST.t > now) ST.t = now;
    const g = Math.floor((now - ST.t) / REGEN);
    if (g > 0) { ST.h = Math.min(MAXH, ST.h + g); ST.t = ST.h >= MAXH ? now : ST.t + g * REGEN; save(); }
  }
  function loseHeart() { regen(); if (ST.h >= MAXH) ST.t = Date.now(); ST.h = Math.max(0, ST.h - 1); save(); }
  const nextIn = () => ST.h >= MAXH ? 0 : Math.max(0, REGEN - (Date.now() - ST.t));
  const mmss = ms => { const s = Math.ceil(ms / 1000); return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0"); };

  /* ---------- deck: 10 words, mixed topics, unique short meanings ---------- */
  const shortMean = m => { const p = String(m).split(/\s*[;,]\s*/).filter(Boolean); let s = p[0] || m; if (p[1] && (s + ", " + p[1]).length <= 30) s += ", " + p[1]; return s; };
  function buildDeck() {
    const pool = list.filter(w => ST.level === "all" || w.level === ST.level).map(w => ({ w, m: shortMean(w.meaning) }));
    const used = new Set(), byT = {};
    shuffle(pool).forEach(x => { const k = x.m.toLowerCase(); if (used.has(k) || k === x.w.term.toLowerCase()) return; used.add(k); (byT[x.w.topic] = byT[x.w.topic] || []).push(x); });
    const miss = new Set(ST.miss), seen = new Set(ST.seen);
    const score = x => (miss.has(x.w.term) ? 0 : seen.has(x.w.term) ? 2 : 1) + Math.random() * 0.9;
    Object.values(byT).forEach(a => a.sort((p, q) => score(p) - score(q)));
    const topics = shuffle(Object.keys(byT)), out = [];
    for (let r = 0; out.length < N && r < 6; r++) topics.forEach(t => { if (out.length < N && byT[t][r]) out.push(byT[t][r]); });
    return out.slice(0, N);
  }

  /* ---------- UI shell: tabs + game container ---------- */
  const tabs = document.createElement("nav");
  tabs.className = "tabs vg-tabs"; tabs.setAttribute("role", "tablist");
  tabs.innerHTML = `<button role="tab" data-vt="list" aria-selected="true">Danh sách</button><button role="tab" data-vt="game" aria-selected="false">Chơi nối từ</button><i class="ink" aria-hidden="true"></i>`;
  const game = document.createElement("div"); game.className = "vgame"; game.id = "vgame"; game.hidden = true;
  host.before(tabs); host.after(game);
  const ink = tabs.querySelector(".ink");
  const moveInk = () => { const b = tabs.querySelector('[aria-selected="true"]'); ink.style.left = b.offsetLeft + "px"; ink.style.width = b.offsetWidth + "px"; };
  tabs.addEventListener("click", e => {
    const b = e.target.closest("[data-vt]"); if (!b) return;
    tabs.querySelectorAll("[data-vt]").forEach(x => x.setAttribute("aria-selected", x === b ? "true" : "false"));
    const g = b.dataset.vt === "game"; host.hidden = g; game.hidden = !g; moveInk();
    if (g) screen(); else stopTimer();
  });
  requestAnimationFrame(moveInk); addEventListener("resize", moveInk);


  /* ---------- sound (Web Audio, no files). Global on/off, remembered. ---------- */
  const SKEY = "vg:sound";
  let SOUND = true; try { SOUND = localStorage.getItem(SKEY) !== "off"; } catch (e) {}
  let AC = null;
  const tone = (t, d, f, type, vol, f2) => {
    const o = AC.createOscillator(), g = AC.createGain();
    o.type = type; o.frequency.setValueAtTime(f, t); if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + d);
    o.connect(g); g.connect(AC.destination);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + .015); g.gain.exponentialRampToValueAtTime(.0001, t + d);
    o.start(t); o.stop(t + d + .03);
  };
  function sfx(kind) {
    if (!SOUND) return;
    try {
      AC = AC || new (window.AudioContext || window.webkitAudioContext)(); if (AC.state === "suspended") AC.resume();
      const t = AC.currentTime + .02;
      if (kind === "win") [523.25, 659.25, 783.99, 1046.5].forEach((f, k) => tone(t + k * .1, .32, f, "triangle", .22));
      else if (kind === "bad") { tone(t, .22, 330, "sawtooth", .12, 240); tone(t + .2, .34, 220, "sawtooth", .12, 150); }
    } catch (e) {}
  }
      const sndBtn = () => `<button type="button" class="link sm" data-snd aria-pressed="${SOUND}" title="Âm thanh đúng sai">Âm thanh: ${SOUND ? "bật" : "tắt"}</button>`;

  /* ---------- helpers ---------- */
  let tick = null;
  const stopTimer = () => { clearInterval(tick); tick = null; };
  const hearts = () => `<span class="vg-hearts" aria-label="${ST.h} trên ${MAXH} mạng">${Array.from({ length: MAXH }, (_, i) => `<i class="${i < ST.h ? "on" : ""}">♥</i>`).join("")}</span>`;
  const streakLine = () => ST.wins >= UNLOCK
    ? `<span class="vg-streak on">Streak đã mở · cơ chế đang xây dựng</span>`
    : `<span class="vg-streak">Thắng ${ST.wins}/${UNLOCK} ván để mở streak</span>`;
  const head = () => `<div class="vg-top">${hearts()}<span class="vg-top-r">${streakLine()}${sndBtn()}</span></div>`;
  const termHtml = w => (w.tf && typeof rb === "function") ? rb(esc(w.tf)) : esc(w.term);
  function celebrate(big) {
    if (reduce()) return;
    const go = () => {
      if (!window.confetti) return;
      confetti({ particleCount: big ? 160 : 90, spread: 80, origin: { y: .65 } });
      if (big) setTimeout(() => confetti({ particleCount: 80, angle: 60, spread: 60, origin: { x: 0, y: .7 } }) || confetti({ particleCount: 80, angle: 120, spread: 60, origin: { x: 1, y: .7 } }), 250);
    };
    if (window.confetti) return go();
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js";
    s.onload = go; document.head.appendChild(s);
  }

  game.addEventListener("click", e => {
    const b = e.target.closest("[data-snd]"); if (!b) return;
    SOUND = !SOUND; try { localStorage.setItem(SKEY, SOUND ? "on" : "off"); } catch (er) {}
    game.querySelectorAll("[data-snd]").forEach(x => { x.setAttribute("aria-pressed", SOUND); x.textContent = "Âm thanh: " + (SOUND ? "bật" : "tắt"); });
    if (SOUND) sfx("win");
  });

  /* ---------- screens ---------- */
  function screen() {
    stopTimer(); regen();
    const lv = ["all", ...new Set(list.map(w => w.level))];
    if (ST.h <= 0) {
      game.innerHTML = `${head()}<div class="vg-card vg-wait"><h2>Hết mạng rồi</h2><p>Mỗi 30 phút hồi 1 mạng, nên bạn không cần vội. Có thể xem danh sách từ trong lúc chờ.</p><output class="vg-count" id="vgCount">${mmss(nextIn())}</output><small>cho đến mạng kế tiếp</small><div class="vg-actions"><button class="btn ghost" id="vgList">Xem danh sách</button></div></div>`;
      document.getElementById("vgList").onclick = () => tabs.querySelector('[data-vt="list"]').click();
      tick = setInterval(() => { regen(); if (ST.h > 0) return screen(); const o = document.getElementById("vgCount"); if (o) o.textContent = mmss(nextIn()); }, 1000);
      return;
    }
    game.innerHTML = `${head()}<div class="vg-card vg-start"><h2>Nối từ với nghĩa</h2>
      <p>10 từ trộn từ nhiều chủ đề. Kéo dây từ từ sang nghĩa (hoặc bấm lần lượt hai ô), rồi nộp bài. Nộp sai mất 1 mạng, đúng hết thì thắng ván.</p>
      <div class="seg" id="vgLevel"><span class="lbl">Trình độ</span>${lv.map(l => `<button data-lv="${esc(l)}" aria-pressed="${l === ST.level}">${l === "all" ? "Tất cả" : esc(l)}</button>`).join("")}</div>
      <div class="vg-actions"><button class="btn" id="vgPlay">Chơi</button></div></div>`;
    document.getElementById("vgPlay").onclick = play;
    document.getElementById("vgLevel").onclick = e => { const b = e.target.closest("[data-lv]"); if (!b) return; ST.level = b.dataset.lv; save(); screen(); };
  }

  /* ---------- the round ---------- */
  function play() {
    regen(); if (ST.h <= 0) return screen();
    const deck = buildDeck();
    if (deck.length < 4) { game.innerHTML = `${head()}<div class="vg-card"><p>Chưa đủ từ cho trình độ này. Chọn trình độ khác nhé.</p><div class="vg-actions"><button class="btn" id="vgBack">Quay lại</button></div></div>`; document.getElementById("vgBack").onclick = screen; return; }
    const n = deck.length, rOrder = shuffle(deck.map((_, i) => i));   // rOrder[row] = word index shown in that meaning row
    const link = new Map();      // word index -> row index
    const locked = new Set();    // word indexes already confirmed right
    let subs = 0, drag = null, busy = false;
    game.innerHTML = `${head()}<div class="vg-card vg-play">
      <div class="vg-bar"><span class="vg-prog" id="vgProg"></span><span class="vg-hint">Kéo dây hoặc bấm từ rồi bấm nghĩa. Bấm vào dây để gỡ.</span></div>
      <div class="vg-board" id="vgBoard">
        <svg class="vg-svg" id="vgSvg" aria-hidden="true"></svg>
        <div class="vg-col vg-l">${deck.map((d, i) => `<div class="vg-item vg-w" data-i="${i}" role="button" tabindex="0"><span class="vg-t">${termHtml(d.w)}</span>${typeof sayBtn === "function" ? sayBtn(d.w.term) : ""}<i class="vg-dot"></i></div>`).join("")}</div>
        <div class="vg-col vg-r">${rOrder.map((wi, r) => `<div class="vg-item vg-m" data-r="${r}" role="button" tabindex="0"><i class="vg-dot"></i><span class="vg-t">${esc(deck[wi].m)}</span></div>`).join("")}</div>
      </div>
      <div class="vg-actions"><button class="btn" id="vgSubmit" disabled>Nộp bài</button></div></div>`;
    const board = document.getElementById("vgBoard"), svg = document.getElementById("vgSvg"), btn = document.getElementById("vgSubmit");
    const W = i => board.querySelector(`.vg-w[data-i="${i}"]`), M = r => board.querySelector(`.vg-m[data-r="${r}"]`);
    const hue = i => Math.round((i * 360 / n + 8) % 360);
    const pt = (el, side) => { const b = board.getBoundingClientRect(), r = el.getBoundingClientRect(); return [(side === "r" ? r.right : r.left) - b.left, r.top + r.height / 2 - b.top]; };
    const path = (a, b) => { const dx = Math.max(40, Math.abs(b[0] - a[0]) * .5); return `M${a[0]},${a[1]} C${a[0] + dx},${a[1]} ${b[0] - dx},${b[1]} ${b[0]},${b[1]}`; };
    const state = new Map();     // word index -> "ok" | "bad"
    function draw() {
      const rect = board.getBoundingClientRect(); svg.setAttribute("viewBox", `0 0 ${rect.width} ${rect.height}`);
      let h = "";
      link.forEach((r, i) => {
        const d = path(pt(W(i), "r"), pt(M(r), "l")), st = state.get(i) || "";
        h += `<path class="vg-ln ${st}" d="${d}" style="--h:${hue(i)}"/><path class="vg-hit" data-del="${i}" d="${d}"/>`;
      });
      if (drag && drag.to) { const a = drag.from.side === "w" ? pt(W(drag.from.i), "r") : pt(M(drag.from.r), "l"); h += `<path class="vg-ln tmp" d="${drag.from.side === "w" ? path(a, drag.to) : path(drag.to, a)}"/>`; }
      svg.innerHTML = h;
    }
    function paint() {
      board.querySelectorAll(".vg-item").forEach(el => {
        const i = el.dataset.i !== undefined ? +el.dataset.i : null, r = el.dataset.r !== undefined ? +el.dataset.r : null;
        const wi = i !== null ? i : rOrder[r], on = i !== null ? link.has(i) : [...link.values()].includes(r);
        el.classList.toggle("linked", on); el.style.setProperty("--h", hue(wi));
        el.classList.toggle("ok", locked.has(wi)); el.classList.toggle("bad", state.get(wi) === "bad" && on);
      });
      const todo = n - locked.size;
      document.getElementById("vgProg").textContent = `${link.size - [...link.keys()].filter(i => locked.has(i)).length}/${todo} đã nối`;
      btn.disabled = busy || [...Array(n).keys()].some(i => !locked.has(i) && !link.has(i));
      draw();
    }
    function connect(i, r) {
      if (locked.has(i) || locked.has(rOrder[r])) return;
      link.delete(i); link.forEach((rr, ii) => { if (rr === r) link.delete(ii); });
      link.set(i, r); state.delete(i); paint();
    }
    /* pointer: drag a wire from either column, or tap-tap */
    let sel = null;
    const target = e => document.elementFromPoint(e.clientX, e.clientY)?.closest(".vg-item");
    board.addEventListener("pointerdown", e => {
      if (busy || e.target.closest(".say") || e.target.closest(".vg-hit")) return;
      const el = e.target.closest(".vg-item"); if (!el) return;
      const side = el.dataset.i !== undefined ? "w" : "m", from = side === "w" ? { side, i: +el.dataset.i } : { side, r: +el.dataset.r };
      if ((side === "w" && locked.has(from.i)) || (side === "m" && locked.has(rOrder[from.r]))) return;
      drag = { from, moved: false, to: null, x: e.clientX, y: e.clientY }; el.setPointerCapture?.(e.pointerId); e.preventDefault();
      el.classList.add("src");
    });
    board.addEventListener("pointermove", e => {
      if (!drag) return;
      if (!drag.moved && Math.hypot(e.clientX - drag.x, e.clientY - drag.y) < 6) return;
      drag.moved = true; const b = board.getBoundingClientRect(); drag.to = [e.clientX - b.left, e.clientY - b.top];
      /* hover feedback: light up the valid target under the pointer and snap the wire to its port */
      const t = target(e), side = t ? (t.dataset.i !== undefined ? "w" : "m") : null;
      const wi = t ? (side === "w" ? +t.dataset.i : rOrder[+t.dataset.r]) : null;
      const ok = t && side !== drag.from.side && !locked.has(wi);
      if (drag.hot !== (ok ? t : null)) { drag.hot?.classList.remove("hot", "swap"); drag.hot = ok ? t : null; }
      if (drag.hot) {
        drag.hot.classList.add("hot");
        const taken = side === "w" ? link.has(+t.dataset.i) : [...link.values()].includes(+t.dataset.r);
        drag.hot.classList.toggle("swap", taken);
        drag.to = pt(t, side === "w" ? "r" : "l");
      }
      board.classList.add("dragging"); draw();
    });
    const finish = e => {
      if (!drag) return; const d = drag; drag = null;
      clearHot(d);
      const t = target(e);
      if (d.moved) { if (t) tryPair(d.from, t); paint(); return; }
      /* tap */
      if (!sel) { sel = d.from; markSel(); return; }
      if (sel.side === d.from.side) { sel = d.from; markSel(); return; }
      tryPair(sel, t || board.querySelector(d.from.side === "w" ? `.vg-w[data-i="${d.from.i}"]` : `.vg-m[data-r="${d.from.r}"]`)); sel = null; markSel(); paint();
    };
    function clearHot(d) { board.querySelectorAll(".src").forEach(x => x.classList.remove("src")); board.querySelectorAll(".hot,.swap").forEach(x => x.classList.remove("hot", "swap")); board.classList.remove("dragging"); if (d) d.hot = null; }
    function tryPair(a, el) {
      const side = el.dataset.i !== undefined ? "w" : "m"; if (side === a.side) return;
      const b = side === "w" ? { side, i: +el.dataset.i } : { side, r: +el.dataset.r };
      const i = a.side === "w" ? a.i : b.i, r = a.side === "m" ? a.r : b.r; connect(i, r);
    }
    function markSel() {
      board.querySelectorAll(".sel").forEach(x => x.classList.remove("sel"));
      if (!sel) return; (sel.side === "w" ? W(sel.i) : M(sel.r)).classList.add("sel");
    }
    board.addEventListener("pointerup", finish);
    board.addEventListener("pointercancel", () => { clearHot(drag); drag = null; draw(); });
    board.addEventListener("keydown", e => {
      const el = e.target.closest(".vg-item"); if (!el || (e.key !== "Enter" && e.key !== " ")) return; e.preventDefault();
      const side = el.dataset.i !== undefined ? "w" : "m", me = side === "w" ? { side, i: +el.dataset.i } : { side, r: +el.dataset.r };
      if (!sel || sel.side === side) { sel = me; markSel(); } else { tryPair(sel, el); sel = null; markSel(); paint(); }
    });
    svg.addEventListener("pointerdown", e => { const h = e.target.closest("[data-del]"); if (!h || busy) return; const i = +h.dataset.del; if (locked.has(i)) return; link.delete(i); state.delete(i); paint(); e.stopPropagation(); });
    svg.style.pointerEvents = "none";
    const ro = new ResizeObserver(() => draw()); ro.observe(board);

    /* submit */
    btn.onclick = () => {
      busy = true; subs++; btn.disabled = true;
      const wrong = [];
      link.forEach((r, i) => { if (locked.has(i)) return; if (rOrder[r] === i) { locked.add(i); state.set(i, "ok"); } else { wrong.push(i); state.set(i, "bad"); } });
      deck.forEach((d, i) => { const t = d.w.term; if (locked.has(i) && !wrong.length) { /* cleared */ } if (!ST.seen.includes(t)) ST.seen.push(t); });
      if (!wrong.length) {
        deck.forEach(d => { ST.miss = ST.miss.filter(t => t !== d.w.term); });
        ST.wins++; save(); paint();
        sfx("win"); celebrate(subs === 1); setTimeout(() => { ro.disconnect(); result(true, deck, subs); }, reduce() ? 300 : 1100); return;
      }
      wrong.forEach(i => { if (!ST.miss.includes(deck[i].w.term)) ST.miss.push(deck[i].w.term); });
      ST.miss = ST.miss.slice(-120); ST.seen = ST.seen.slice(-600);
      sfx("bad"); loseHeart(); paint();
      document.querySelector(".vg-hearts").outerHTML = hearts();
      board.classList.add("shake");
      setTimeout(() => {
        board.classList.remove("shake");
        wrong.forEach(i => { link.delete(i); state.delete(i); });
        busy = false;
        if (ST.h <= 0) { ro.disconnect(); result(false, deck, subs); return; }
        paint();
      }, 900);
    };
    paint();
  }

  /* ---------- result ---------- */
  function result(win, deck, subs) {
    stopTimer(); regen();
    const rows = deck.map(d => `<li><span class="vg-rw">${termHtml(d.w)}</span><span class="vg-rm">${esc(d.m)}</span></li>`).join("");
    game.innerHTML = `${head()}<div class="vg-card vg-res ${win ? "win" : "lose"}"><h2>${win ? "Hoàn thành ván" : "Hết mạng rồi"}</h2>
      <p>${win ? `Nối đúng cả ${deck.length} cặp sau ${subs} lần nộp. Còn ${ST.h}/${MAXH} mạng.` : "Đây là đáp án của ván vừa rồi. Mạng sẽ hồi dần, mỗi 30 phút 1 mạng."}</p>
      <ul class="vg-ans">${rows}</ul>
      <div class="vg-actions">${ST.h > 0 ? `<button class="btn" id="vgAgain">Chơi ván mới</button>` : `<output class="vg-count" id="vgCount">${mmss(nextIn())}</output>`}<button class="btn ghost" id="vgList2">Xem danh sách</button></div></div>`;
    const a = document.getElementById("vgAgain"); if (a) a.onclick = play;
    document.getElementById("vgList2").onclick = () => tabs.querySelector('[data-vt="list"]').click();
    if (ST.h <= 0) tick = setInterval(() => { regen(); if (ST.h > 0) return result(win, deck, subs); const o = document.getElementById("vgCount"); if (o) o.textContent = mmss(nextIn()); }, 1000);
  }
})();
