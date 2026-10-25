/* =====================================================================
   pages/kewen.js
   Bài khóa (zh, th): reading texts with pinyin / romanization over every word, tap a word to
   hear it and see its meaning, play a line or the whole text, Vietnamese
   translation toggle. Data: GRAMMAR.kewen (content/kewen/kewen.js).
   ===================================================================== */
(function () {
  const el = document.getElementById("kewen"); if (!el || !GRAMMAR.kewen) return;
  const T = GRAMMAR.kewen, LEVELS = [...new Set(T.map(t => t.level))];
  const S = { level: LEVELS[0], vi: true };
  try { const l = localStorage.getItem("kewenLevel"); if (LEVELS.includes(l)) S.level = l; if (localStorage.getItem("kewenVi") === "off") S.vi = false; } catch (e) {}
  const qa = s => esc(s).replace(/"/g, "&quot;");
  const plain = line => line.w.map(t => (Array.isArray(t) ? t[0] : t)).join("");
  const word = t => Array.isArray(t)
    ? `<button type="button" class="kw" data-w="${qa(t[0])}" data-py="${qa(t[1])}" data-gl="${qa(t[2])}"><ruby>${esc(t[0])}<rt>${esc(t[1])}</rt></ruby></button>`
    : `<span class="kp">${esc(t)}</span>`;
  const lineHtml = (l, i) => `<div class="kl${l.who ? "" : " kl--solo"}" data-i="${i}">
      ${l.who ? `<span class="kwho">${esc(l.who)}</span>` : ""}
      <div class="kbody"><p class="kzh">${l.w.map(word).join("")}${sayBtn(plain(l))}</p>${l.vi ? `<p class="tr kvi">${esc(l.vi)}</p>` : ""}</div>
    </div>`;
  const wordsHtml = t => `<details class="kwords"><summary>Từ trong bài (${t.words.length})</summary>
      <ul>${t.words.map(w => `<li><button type="button" class="kw kw--list" data-w="${qa(w[0])}" data-py="${qa(w[1])}" data-gl="${qa(w[2])}"><span class="kwh">${esc(w[0])}</span><span class="kwp vro">${esc(w[1])}</span></button><span class="kwm">${esc(w[2])}</span></li>`).join("")}</ul></details>`;
  const textHtml = (t, n) => `<article class="ktext" id="${t.id}">
      <header class="khead"><span class="hnum2">${String(n).padStart(2, "0")}</span>
        <h2 class="ktitle">${esc(t.title)}<small>${esc(t.vi)}</small></h2>
        <span class="kkind">${t.kind === "dialog" ? "Hội thoại" : "Đoạn văn"}</span>
        <button type="button" class="kall" data-all="${t.id}">Nghe cả bài</button></header>
      <div class="klines">${t.lines.map(lineHtml).join("")}</div>
      ${wordsHtml(t)}
    </article>`;
  function render() {
    const list = T.filter(t => t.level === S.level);
    el.classList.toggle("no-vi", !S.vi);
    el.innerHTML = `
      <div class="vtop">
        <div class="seg" id="kLevel"><span class="lbl">Trình độ</span>${LEVELS.map(l => `<button data-level="${l}" aria-pressed="${l === S.level}">${l}</button>`).join("")}</div>
        <div class="seg" id="kVi"><span class="lbl">Bản dịch</span><button data-vi="on" aria-pressed="${S.vi}">Hiện</button><button data-vi="off" aria-pressed="${!S.vi}">Ẩn</button></div>
      </div>
      <p class="hint khint">Bấm vào một từ để nghe và xem nghĩa. Bấm biểu tượng loa cuối câu để nghe cả câu.</p>
      <div class="kgloss" id="kGloss" aria-live="polite" hidden></div>
      ${list.map((t, i) => textHtml(t, i + 1)).join("")}`;
  }
  let playing = 0;
  function readAll(id, btn) {
    const t = T.find(x => x.id === id); if (!t || typeof say !== "function") return;
    const my = ++playing, lines = t.lines.map(plain);
    document.querySelectorAll(".kall.playing").forEach(b => b.classList.remove("playing"));
    btn.classList.add("playing");
    let i = 0; const next = () => { if (my !== playing) return; if (i >= lines.length) { btn.classList.remove("playing"); return; } say(lines[i++], false, () => setTimeout(next, 250)); };
    next();
  }
  render();
  el.addEventListener("click", e => {
    const lv = e.target.closest("#kLevel [data-level]");
    if (lv) { S.level = lv.dataset.level; try { localStorage.setItem("kewenLevel", S.level); } catch (er) {} playing++; render(); return; }
    const vi = e.target.closest("#kVi [data-vi]");
    if (vi) { S.vi = vi.dataset.vi === "on"; try { localStorage.setItem("kewenVi", S.vi ? "on" : "off"); } catch (er) {} render(); return; }
    const all = e.target.closest("[data-all]");
    if (all) { e.stopPropagation(); readAll(all.dataset.all, all); return; }
    const w = e.target.closest(".kw");
    if (w) {
      playing++;
      const g = document.getElementById("kGloss");
      g.hidden = false; g.innerHTML = `<b class="kgh">${esc(w.dataset.w)}</b><span class="vro">${esc(w.dataset.py)}</span><span>${esc(w.dataset.gl)}</span>`;
      document.querySelectorAll(".kw.on").forEach(x => x.classList.remove("on")); w.classList.add("on");
      if (typeof say === "function") say(w.dataset.w, false);
    }
  });
  // lines/words use data-say: nav.js handles playback (capture phase)
  document.addEventListener("click", e => { if (e.target.closest("[data-say]") && !e.target.closest("[data-all]")) playing++; }, true);
})();
