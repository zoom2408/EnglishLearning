/* =====================================================================
   pages/conditionals.js
   Filter real / unreal conditionals.
   ===================================================================== */
let filterR = "all";
function setFilterR(v) {
  filterR = v;
  document.querySelectorAll("#cfilter button").forEach(b => b.setAttribute("aria-pressed", b.dataset.cf === v));
  $("#rows").querySelectorAll(".row").forEach(r => r.classList.toggle("dim", v !== "all" && r.dataset.real !== (v === "real" ? "true" : "false")));
}
function resetFilters() { if (filterR !== "all") setFilterR("all"); }
function pageInit() {
  document.addEventListener("click", e => { const b = e.target.closest("#cfilter [data-cf]"); if (b) setFilterR(b.dataset.cf); });
}
