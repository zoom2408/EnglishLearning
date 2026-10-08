/* =====================================================================
   main.js
   Boots a module page: renders lessons, starts practice, opens the
   lesson from the URL hash (or the last one viewed).
   Page markup provides: body[data-module], #rows, optional #vrows, #quiz.
   ===================================================================== */
(function boot() {
  const KEY = document.body.dataset.module;
  const TH = GRAMMAR.theory[KEY];
  const QZ = GRAMMAR.quiz[KEY];

  if (TH) {
    $("#rows").innerHTML = TH.rows.map(rowHTML).join("");
    if (TH.extra && $("#vrows")) $("#vrows").innerHTML = TH.extra.map(rowHTML).join("");
  }
  if (QZ && $("#quiz")) {
    const P = Practice(Object.assign({ el: $("#quiz") }, QZ));
    P.view = "quiz"; PRACS.push(P); P.menu();
  }
  if (typeof pageInit === "function") pageInit();

  let h = ""; try { h = decodeURIComponent(location.hash.slice(1)); } catch (e) {}
  if (TH) {
    let last = null; try { last = localStorage.getItem("last_" + KEY); } catch (e) {}
    const mine = id => id && byId[id] && byId[id].mod === KEY;
    open(mine(h) ? h : mine(last) ? last : TH.first, { force: true, scroll: false });
    if (mine(h)) setTimeout(() => rowOf(h).scrollIntoView({ block: "start" }), 60);
  }
  if (h && document.getElementById("view-" + h)) show(h);
  placeInk();
})();
