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
  const S = { level: "all", type: "all", topic: "all", q: "" };

  function filtered() {
    const q = S.q.trim().toLowerCase();
    return list.filter(w =>
      (S.level === "all" || w.level === S.level) &&
      (S.type === "all" || w.type === S.type) &&
      (S.topic === "all" || w.topic === S.topic) &&
      (!q || w.term.toLowerCase().includes(q) || w.meaning.toLowerCase().includes(q))
    );
  }

  function renderShell() {
    el.innerHTML = `
     <div class="vtop">
       <div class="seg" id="vLevel"><span class="lbl">Trình độ</span>
         <button data-level="all" aria-pressed="true">Tất cả</button>
         ${levels.map(l => `<button data-level="${esc(l)}" aria-pressed="false">${esc(l)}</button>`).join("")}
       </div>
       <div class="seg" id="vType"><span class="lbl">Loại từ</span>
         <button data-type="all" aria-pressed="true">Tất cả</button>
         ${types.map(t => `<button data-type="${esc(t)}" aria-pressed="false">${esc(t)}</button>`).join("")}
       </div>
     </div>
     <div class="vbar">
       <input class="search" id="vSearch" type="search" placeholder="Tìm từ hoặc nghĩa…" autocomplete="off">
       <select id="vTopic"><option value="all">Tất cả chủ đề (${list.length})</option>${topics.map(t => `<option value="${esc(t)}">${esc(t)} (${list.filter(w => w.topic === t).length})</option>`).join("")}</select>
     </div>
     <div class="vcount" id="vCount"></div>
     <div class="vlist" id="vList"></div>`;
    $("#vSearch").oninput = e => { S.q = e.target.value; renderList(); };
    $("#vTopic").onchange = e => { S.topic = e.target.value; renderList(); };
    el.addEventListener("click", e => {
      const lb = e.target.closest("#vLevel [data-level]");
      if (lb) { S.level = lb.dataset.level; syncSeg("vLevel", "level"); renderList(); return; }
      const tb = e.target.closest("#vType [data-type]");
      if (tb) { S.type = tb.dataset.type; syncSeg("vType", "type"); renderList(); return; }
    });
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
        <div class="vterm">${esc(w.term)}${w.ipa ? ` <span class="vipa">${esc(w.ipa)}</span>` : ""}</div>
        <div class="vmean">${esc(w.meaning)}</div>
        ${w.forms ? `<div class="vforms">${esc(w.forms)}</div>` : ""}
        <div class="vex">${esc(w.example)}</div>
      </div>`).join("") : `<p class="hint">Không tìm thấy từ nào khớp. Thử từ khóa khác hoặc bỏ bớt bộ lọc.</p>`;
  }

  renderShell();
  renderList();
})();
