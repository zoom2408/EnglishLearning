/* =====================================================================
   pages/timeline.js
   Generic page script for any single-axis "verb tenses" module that has
   no aspect grid (German Zeiten, Norwegian Verbtider, ...): past/present/
   future filter plus the signal-word finder. Driven entirely by
   document.body.dataset.module, so the same file serves every language.
   For English tenses (which also sorts by aspect), see pages/tenses.js.
   ===================================================================== */
let filterG = "all";

function setFilter(g) {
  filterG = (g === filterG && g !== "all") ? "all" : g;
  document.querySelectorAll("#filter button, .zones [data-f]").forEach(b => b.setAttribute("aria-pressed", b.dataset.f === filterG));
  $("#rows").querySelectorAll(".row").forEach(r => r.classList.toggle("dim", filterG !== "all" && r.dataset.g !== filterG));
}
function resetFilters() { if (filterG !== "all") setFilter("all"); }

/* ---------- finder ---------- */
function runFind() {
  const KEY = document.body.dataset.module, TH = GRAMMAR.theory[KEY];
  const q = $("#q").value.trim().toLowerCase(), out = $("#found");
  if (!q) { out.innerHTML = ""; return; }
  const hits = TH.rows.filter(t => t.signals.some(s => s.toLowerCase().includes(q)));
  out.innerHTML = hits.length ? hits.map((t, i) => `<button class="frow" style="--i:${i}" data-review="${t.id}"><span><b>${t.vi}</b><small>${t.en} · ${esc(t.signals.filter(s => s.toLowerCase().includes(q)).join(", "))}</small></span><span class="track">${compact(t)}</span></button>`).join("")
    : `<p class="hint">Chưa có dấu hiệu nào khớp với “${esc(q)}”. Thử một từ ngắn hơn.</p>`;
}
function goFind(s) { show("find"); const q = $("#q"); q.value = s; runFind(); q.focus({ preventScroll: true }); }

function pageInit() {
  const KEY = document.body.dataset.module, TH = GRAMMAR.theory[KEY];
  const ALL = [...new Set(TH.rows.flatMap(t => t.signals))].sort((a, b) => a.localeCompare(b));
  $("#allsignals").innerHTML = ALL.map(s => `<button class="chip" data-signal="${esc(s)}">${esc(s)}</button>`).join("");
  $("#q").addEventListener("input", runFind);
  document.addEventListener("click", e => {
    const b = e.target.closest("#filter [data-f], .zones [data-f]");
    if (b) setFilter(b.dataset.f);
  });
}
