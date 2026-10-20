/* =====================================================================
   pages/vocab.js
   Generic vocabulary browser: filter by level, word type and topic,
   plus free-text search across term + meaning. Fully data-driven —
   content: GRAMMAR.vocab = { list, types, levels, topics }, provided
   per language by content/vocab/*.js. Shared across every language
   track, no per-language code needed.
   ===================================================================== */
(() => {
  const { list, types, levels, topics } = GRAMMAR.vocab;
  const el = document.getElementById("vocab"); if (!el) return;
  const S = { level: "all", type: "all", topic: "all", q: "", acc: "us" };
  /** optional per-word extras (GRAMMAR.vocabExtra = { src, base, d: { term: [ipaUK, audioUS, audioUK] } }): UK IPA and recorded audio */
  const XT = GRAMMAR.vocabExtra || null, X = XT ? XT.d : null;
  if (X) { try { const a = localStorage.getItem("vocAcc"); if (a === "uk" || a === "us") S.acc = a; } catch (e) {} }
  const audUrl = f => XT.base + encodeURIComponent(f.replace(/ /g, "_"));
  const speak = w => {
    const x = X && X[w.term], f = x && (S.acc === "uk" ? x[2] : x[1]);
    const btn = (slow) => f
      ? `<button type="button" class="say${slow ? " slow" : ""}" data-audio="${esc(audUrl(f)).replace(/"/g, "&quot;")}" data-term="${esc(w.term).replace(/"/g, "&quot;")}"${slow ? ' data-rate="0.65"' : ""} aria-label="${slow ? "Nghe chậm" : "Nghe"}: ${esc(w.term).replace(/"/g, "&quot;")}" title="${slow ? "Nghe chậm" : "Nghe giọng thật"}">${slow ? "×0.6" : ""}</button>`
      : sayBtn(w.term, w.term, slow);
    return currentLang() === "zh" ? btn(false) : btn(false) + btn(true);
  };
  /** recorded syllable-by-syllable playback (GRAMMAR.syl.f[syllable] = file) when every syllable has a recording */
  const SYL = GRAMMAR.syl || null;
  const sylBtn = w => {
    if (!SYL || /…/.test(w.term) || !w.ipa) return "";
    const parts = w.ipa.split(/\s+/).filter(Boolean), files = parts.map(sy => SYL.f[sy]);
    if (!files.length || files.some(x => !x)) return "";
    const urls = files.map(f => SYL.base + encodeURIComponent(f.replace(/ /g, "_"))).join("|");
    return ` <button type="button" class="say slow" data-aud="${esc(urls).replace(/"/g, "&quot;")}" data-fallback="${esc(w.term).replace(/"/g, "&quot;")}" aria-label="Nghe từng âm thu thật: ${esc(w.term).replace(/"/g, "&quot;")}" title="Nghe từng âm tiết thu âm thật">từng âm</button>`;
  };
  const ipaOf = w => { const x = X && X[w.term]; return S.acc === "uk" && x && x[0] ? x[0] : w.ipa; };

  /** accent-insensitive compare for the reading field (pinyin tones: ni hao finds nǐ hǎo) */
  const plain = s => String(s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  function filtered() {
    const q = S.q.trim().toLowerCase();
    return list.filter(w =>
      (S.level === "all" || w.level === S.level) &&
      (S.type === "all" || w.type === S.type) &&
      (S.topic === "all" || w.topic === S.topic) &&
      (!q || w.term.toLowerCase().includes(q) || w.meaning.toLowerCase().includes(q) || plain(w.ipa).includes(plain(q)))
    );
  }

  /** optional link to a real dictionary (GRAMMAR.vocab.dict = { name, url(word) }) */
  const dict = GRAMMAR.vocab.dict;
  const dictLink = t => dict ? ` <a class="dictlink" href="${esc(dict.url(t)).replace(/"/g, "&quot;")}" target="_blank" rel="noopener noreferrer" aria-label="Tra ${esc(dict.name)}: ${esc(t).replace(/"/g, "&quot;")}" title="Tra ${esc(dict.name)}: IPA Anh, Mỹ và nghe giọng thật">${esc(dict.name)} ↗</a>` : "";
  function renderShell() {
    el.innerHTML = `
     <div class="vtop">
       <div class="seg" id="vLevel"><span class="lbl">Trình độ</span>
         <button data-level="all" aria-pressed="true">Tất cả</button>
         ${levels.map(l => `<button data-level="${esc(l)}" aria-pressed="false">${esc(l)}</button>`).join("")}
       </div>
       ${X ? `<div class="seg" id="vAcc"><span class="lbl">Giọng</span>
         <button data-acc="us" aria-pressed="${S.acc === "us"}">Mỹ</button>
         <button data-acc="uk" aria-pressed="${S.acc === "uk"}">Anh</button>
       </div>` : ""}
       <div class="seg" id="vType"><span class="lbl">Loại từ</span>
         <button data-type="all" aria-pressed="true">Tất cả</button>
         ${types.map(t => `<button data-type="${esc(t)}" aria-pressed="false">${esc(t)}</button>`).join("")}
       </div>
     </div>
     <div class="vbar">
       <input class="input input--lg" id="vSearch" type="search" placeholder="Tìm từ hoặc nghĩa…" autocomplete="off">
       <select id="vTopic"><option value="all">Tất cả chủ đề (${list.length})</option>${topics.map(t => `<option value="${esc(t)}">${esc(t)} (${list.filter(w => w.topic === t).length})</option>`).join("")}</select>
     </div>
     <div class="vcount" id="vCount"></div>
     <div class="vlist" id="vList"></div>${X ? `<p class="hint">${esc(XT.note)}</p>` : ""}${SYL ? `<p class="hint">${esc(SYL.note)}</p>` : ""}`;
    enhanceSelects(el);
    $("#vSearch").oninput = e => { S.q = e.target.value; renderList(); };
    $("#vTopic").onchange = e => { S.topic = e.target.value; renderList(); };
    el.addEventListener("click", e => {
      const lb = e.target.closest("#vLevel [data-level]");
      if (lb) { S.level = lb.dataset.level; syncSeg("vLevel", "level"); renderList(); return; }
      const ab = e.target.closest("#vAcc [data-acc]");
      if (ab) { S.acc = ab.dataset.acc; try { localStorage.setItem("vocAcc", S.acc); } catch (er) {} syncSeg("vAcc", "acc"); renderList(); return; }
      const au = e.target.closest("[data-audio]");
      if (au) { e.stopPropagation(); playAudio(au); return; }
      const tb = e.target.closest("#vType [data-type]");
      if (tb) { S.type = tb.dataset.type; syncSeg("vType", "type"); renderList(); return; }
    });
  }
  let AUD = null;
  function playAudio(b) {
    if (typeof stopSay === "function") stopSay();
    if (AUD) { AUD.pause(); document.querySelectorAll("[data-audio].playing").forEach(x => x.classList.remove("playing")); }
    const a = AUD = new Audio(b.dataset.audio); a.playbackRate = +b.dataset.rate || 1;
    b.classList.add("playing");
    const fb = () => { b.classList.remove("playing"); if (typeof say === "function") say(b.dataset.term, !!b.dataset.rate); };
    a.onended = () => b.classList.remove("playing"); a.onerror = fb;
    a.play().catch(fb);
  }
  function syncSeg(id, key) {
    document.querySelectorAll(`#${id} button`).forEach(b => b.setAttribute("aria-pressed", b.dataset[key] === S[key] ? "true" : "false"));
  }
  function renderList() {
    const rows = filtered();
    $("#vCount").textContent = `${rows.length} / ${list.length} từ`;
    $("#vList").innerHTML = rows.length ? rows.map((w, i) => `
      <div class="vrow" style="--i:${i % 40}">
        <div class="vmeta"><span class="vlvl">${esc(w.level)}</span><span class="vtype">${esc(w.type)}</span></div>
        <div class="vterm">${w.tf ? rb(esc(w.tf)) : esc(w.term)}${w.ipa ? (w.tf || w.er ? ` <span class="vipa vro">${esc(w.ipa.split(" · ").slice(1).join(" · "))}</span>` : ` <span class="vipa">${esc(ipaOf(w))}</span>`) : ""}${speak(w)}${sylBtn(w)}${dictLink(w.term)}</div>
        <div class="vmean">${esc(w.meaning)}</div>
        ${w.forms ? `<div class="vforms">${esc(w.forms)}</div>` : ""}
        <div class="vex">${w.ef ? rb(esc(w.ef)) : esc(w.example)}${sayBtn(w.example)}${w.er ? `<span class="ro">${esc(w.er)}</span>` : ""}</div>
      </div>`).join("") : `<p class="hint">Không tìm thấy từ nào khớp. Thử từ khóa khác hoặc bỏ bớt bộ lọc.</p>`;
  }

  renderShell();
  renderList();
})();
