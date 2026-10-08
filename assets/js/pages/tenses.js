/* =====================================================================
   pages/tenses.js
   Extras for the tenses page: sort (time / aspect) with FLIP animation,
   past / present / future filter, and the signal-word finder.
   ===================================================================== */
let sortMode = "time", filterG = "all";

function setSort(mode) {
  if (mode === sortMode) return; sortMode = mode;
  const rowsEl = $("#rows"), TH = GRAMMAR.theory.tenses;
  document.querySelectorAll("#sort button").forEach(b => b.setAttribute("aria-pressed", b.dataset.sort === mode));
  const rows = [...rowsEl.children], first = new Map(rows.map(r => [r, r.getBoundingClientRect().top]));
  (mode === "time" ? TH.rows : TH.aspectOrder).forEach(t => rowsEl.appendChild(rowOf(t.id)));
  rows.forEach(r => { const d = first.get(r) - r.getBoundingClientRect().top; if (d && r.animate) r.animate([{ transform: `translateY(${d}px)` }, { transform: "none" }], { duration: 700, easing: "cubic-bezier(.22,.8,.2,1)" }); });
}
function setFilter(g) {
  filterG = (g === filterG && g !== "all") ? "all" : g;
  document.querySelectorAll("#filter button, .zones [data-f]").forEach(b => b.setAttribute("aria-pressed", b.dataset.f === filterG));
  $("#rows").querySelectorAll(".row").forEach(r => r.classList.toggle("dim", filterG !== "all" && r.dataset.g !== filterG));
}
function resetFilters() { if (filterG !== "all") setFilter("all"); }

/* ---------- finder ---------- */
function runFind() {
  const q = $("#q").value.trim().toLowerCase(), out = $("#found");
  if (!q) { out.innerHTML = ""; return; }
  const hits = GRAMMAR.theory.tenses.rows.filter(t => t.signals.some(s => s.toLowerCase().includes(q)));
  out.innerHTML = hits.length ? hits.map((t, i) => `<button class="frow" style="--i:${i}" data-review="${t.id}"><span><b>${t.vi}</b><small>${t.en} · ${esc(t.signals.filter(s => s.toLowerCase().includes(q)).join(", "))}</small></span><span class="track">${compact(t)}</span></button>`).join("")
    : `<p class="hint">Chưa có dấu hiệu nào khớp với “${esc(q)}”. Thử một từ ngắn hơn.</p>`;
}
function goFind(s) { show("find"); const q = $("#q"); q.value = s; runFind(); q.focus({ preventScroll: true }); }

function pageInit() {
  const ALL = [...new Set(GRAMMAR.theory.tenses.rows.flatMap(t => t.signals))].sort((a, b) => a.localeCompare(b));
  $("#allsignals").innerHTML = ALL.map(s => `<button class="chip" data-signal="${esc(s)}">${esc(s)}</button>`).join("");
  $("#q").addEventListener("input", runFind);
  document.addEventListener("click", e => {
    let b;
    if (b = e.target.closest("#sort [data-sort]")) setSort(b.dataset.sort);
    else if (b = e.target.closest("#filter [data-f], .zones [data-f]")) setFilter(b.dataset.f);
  });
}
