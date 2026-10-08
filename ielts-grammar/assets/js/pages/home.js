/* =====================================================================
   pages/home.js
   Renders the module index on index.html from content/modules.js.
   ===================================================================== */
(function () {
  const el = document.getElementById("home-grid"); if (!el) return;
  el.innerHTML = MODULES.map((m, i) => `
    <a class="hcard${m.key === "speaking" ? " spk" : ""}" href="${m.page}" style="--i:${i}">
      <span class="hnum">${m.num}</span>
      <span class="htitle">${m.title}</span>
      <span class="hen">${m.en}</span>
      <span class="hdesc">${m.desc}</span>
      <span class="hmeta">${m.meta}</span>
    </a>`).join("");
})();
