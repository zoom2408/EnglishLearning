/* =====================================================================
   core/nav.js
   Site header (module index), tabs and the sliding tab ink.
   ===================================================================== */

const LANGS = [
  { code: "en", flag: "🇬🇧", label: "English", home: "/" },
  { code: "de", flag: "🇩🇪", label: "Deutsch", home: "/de/" },
  { code: "nb", flag: "🇳🇴", label: "Norsk bokmål", home: "/nb/" },
];
function currentLang() {
  const p = location.pathname;
  if (p.startsWith("/de/")) return "de";
  if (p.startsWith("/nb/")) return "nb";
  return "en";
}

function renderSite() {
  const el = document.getElementById("site"); if (!el) return;
  const cur = document.body.dataset.module;
  const L = LANGS.find(l => l.code === currentLang()) || LANGS[0];
  el.innerHTML = `
    <a class="brand" href="index.html">${SITE_BRAND || "Ngữ pháp"}<b>.</b></a>
    <nav class="mods" aria-label="Chủ đề">
      ${MODULES.map(m => `<a href="${m.page}"${m.key === cur ? ' aria-current="page"' : ""}${m.key === "speaking" ? ' class="spk"' : ""}><span>${m.num}</span>${m.title}</a>`).join("")}
    </nav>
    <div class="lang" id="langswitch">
      <button class="langbtn" type="button" aria-haspopup="true" aria-expanded="false">${L.flag} ${L.code.toUpperCase()}</button>
      <div class="langmenu" role="menu">
        ${LANGS.map(l => `<a href="${l.home}" role="menuitem"${l.code === L.code ? ' aria-current="true"' : ""}>${l.flag} ${l.label}</a>`).join("")}
      </div>
    </div>
    <button id="themeBtn" class="theme" type="button" aria-label="Đổi giao diện sáng hoặc tối"><i></i><span>Tự động</span></button>`;
  const ls = document.getElementById("langswitch"), lb = ls.querySelector(".langbtn");
  lb.addEventListener("click", e => { e.stopPropagation(); const open = ls.classList.toggle("open"); lb.setAttribute("aria-expanded", open); });
  document.addEventListener("click", () => { ls.classList.remove("open"); lb.setAttribute("aria-expanded", "false"); });
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
