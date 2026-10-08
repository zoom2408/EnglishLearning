/* =====================================================================
   core/nav.js
   Site header (module index), tabs and the sliding tab ink.
   ===================================================================== */

function renderSite() {
  const el = document.getElementById("site"); if (!el) return;
  const cur = document.body.dataset.module;
  el.innerHTML = `
    <a class="brand" href="index.html">Ngữ pháp tiếng Anh<b>.</b></a>
    <button id="themeBtn" class="theme" type="button" aria-label="Đổi giao diện sáng hoặc tối"><i></i><span>Tự động</span></button>
    <nav class="mods" aria-label="Chủ đề">
      ${MODULES.map(m => `<a href="${m.page}"${m.key === cur ? ' aria-current="page"' : ""}${m.key === "speaking" ? ' class="spk"' : ""}><span>${m.num}</span>${m.title}</a>`).join("")}
    </nav>`;
}

function placeInk() {
  document.querySelectorAll("nav.tabs").forEach(nav => {
    const b = nav.querySelector('[aria-selected="true"]'), ink = nav.querySelector(".ink");
    if (b && ink) { ink.style.left = b.offsetLeft + "px"; ink.style.width = b.offsetWidth + "px"; }
  });
}

/** Switch to a view inside the page: "learn", "quiz", "find", "speak" */
function show(view) {
  const el = document.getElementById("view-" + view); if (!el) return;
  document.querySelectorAll("nav.tabs [data-view]").forEach(b => b.setAttribute("aria-selected", b.dataset.view === view));
  document.querySelectorAll("main .view").forEach(v => {
    const was = v.hidden; v.hidden = v !== el;
    if (was && !v.hidden) { v.classList.remove("enter"); void v.offsetWidth; v.classList.add("enter"); }
  });
  placeInk();
}

renderSite();
addEventListener("resize", placeInk);
document.fonts && document.fonts.ready.then(placeInk);
