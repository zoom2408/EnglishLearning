/* =====================================================================
   pages/home.js
   Renders the module index on index.html from content/modules.js.
   Modules with a `level` field (zh) are grouped under a level heading.
   ===================================================================== */
(function () {
  const el = document.getElementById("home-grid"); if (!el) return;
  const card = (m, i) => `
    <a class="hcard${m.key === "speaking" ? " spk" : ""}" href="${m.page}" style="--i:${i}">
      <span class="hnum">${m.num}</span>
      <span class="htitle">${m.title}</span>
      <span class="hen">${m.en}</span>
      <span class="hdesc">${m.desc}</span>
      <span class="hmeta">${m.meta}</span>
    </a>`;
  if (!MODULES.some(m => m.level)) { el.innerHTML = MODULES.map(card).join(""); return; }
  const order = [...new Set(MODULES.map(m => m.level))];
  let i = 0;
  el.innerHTML = order.map(l => {
    const ms = MODULES.filter(m => m.level === l);
    return `<h2 class="hlevel"><span>${l}</span><small>${ms.length} mục</small></h2>` + ms.map(m => card(m, i++)).join("");
  }).join("");
})();
