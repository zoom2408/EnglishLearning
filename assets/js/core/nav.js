/* =====================================================================
   core/nav.js
   Site header (module index), tabs and the sliding tab ink.
   ===================================================================== */

const LANGS = [
  { code: "en", flag: "🇬🇧", label: "English", home: "/" },
  { code: "de", flag: "🇩🇪", label: "Deutsch", home: "/de/" },
  { code: "nb", flag: "🇳🇴", label: "Norsk bokmål", home: "/nb/" },
  { code: "es", flag: "🇪🇸", label: "Español", home: "/es/" },
];
function currentLang() {
  const p = location.pathname;
  if (p.startsWith("/de/")) return "de";
  if (p.startsWith("/nb/")) return "nb";
  if (p.startsWith("/es/")) return "es";
  return "en";
}

function renderSite() {
  const el = document.getElementById("site"); if (!el) return;
  const cur = document.body.dataset.module;
  const L = LANGS.find(l => l.code === currentLang()) || LANGS[0];
  el.innerHTML = `
    <div class="brand" id="langswitch">
      <button class="brandbtn" type="button" aria-haspopup="true" aria-expanded="false">${SITE_BRAND || "Ngữ pháp"}<b>.</b></button>
      <div class="langmenu" role="menu">
        ${LANGS.map(l => `<a href="${l.home}" role="menuitem"${l.code === L.code ? ' aria-current="true"' : ""}>${l.flag} ${l.label}</a>`).join("")}
      </div>
    </div>
    <nav class="mods" aria-label="Chủ đề">
      ${MODULES.map(m => `<a href="${m.page}"${m.key === cur ? ' aria-current="page"' : ""}${m.key === "speaking" ? ' class="spk"' : ""}><span>${m.num}</span>${m.title}</a>`).join("")}
    </nav>
    <button id="themeBtn" class="theme" type="button" aria-label="Đổi giao diện sáng hoặc tối"><i></i><span>Tự động</span></button>`;
  const ls = document.getElementById("langswitch"), lb = ls.querySelector(".brandbtn");
  lb.addEventListener("click", e => { e.stopPropagation(); const was = ls.classList.contains("open"); document.dispatchEvent(new Event("dd:close")); const open = !was; ls.classList.toggle("open", open); lb.setAttribute("aria-expanded", open); });
  const closeLang = () => { ls.classList.remove("open"); lb.setAttribute("aria-expanded", "false"); };
  document.addEventListener("click", closeLang); document.addEventListener("dd:close", closeLang);
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeLang(); });
}

/** Replace each <select> under root with the shared Swiss dropdown (native select stays as source of truth). */
function enhanceSelects(root = document) {
  root.querySelectorAll("select:not([data-dd])").forEach(sel => {
    sel.dataset.dd = "1";
    const wrap = document.createElement("div"); wrap.className = "dd";
    sel.parentNode.insertBefore(wrap, sel); wrap.appendChild(sel);
    const btn = document.createElement("button"); btn.type = "button"; btn.className = "ddbtn";
    btn.setAttribute("aria-haspopup", "listbox"); btn.setAttribute("aria-expanded", "false");
    const lab = sel.id && document.querySelector(`label[for="${sel.id}"]`); if (lab) btn.setAttribute("aria-labelledby", lab.id || (lab.id = sel.id + "Lbl"));
    const menu = document.createElement("div"); menu.className = "ddmenu"; menu.setAttribute("role", "listbox");
    wrap.append(btn, menu);
    let hl = -1;
    const items = () => [...menu.children];
    const paint = () => {
      btn.innerHTML = `<span>${esc(sel.selectedOptions[0] ? sel.selectedOptions[0].textContent : "")}</span>`;
      items().forEach((it, i) => { it.setAttribute("aria-selected", i === sel.selectedIndex); it.classList.toggle("hl", i === hl); });
    };
    menu.innerHTML = [...sel.options].map(o => `<button type="button" role="option" data-i="${o.index}">${esc(o.textContent)}</button>`).join("");
    const close = () => { wrap.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); hl = -1; paint(); };
    const open = () => { document.dispatchEvent(new Event("dd:close")); wrap.classList.add("open"); btn.setAttribute("aria-expanded", "true"); hl = sel.selectedIndex; menu.classList.toggle("end", wrap.getBoundingClientRect().left + menu.offsetWidth > innerWidth - 8); paint(); items()[hl]?.scrollIntoView({ block: "nearest" }); };
    const pick = i => { if (i !== sel.selectedIndex) { sel.selectedIndex = i; sel.dispatchEvent(new Event("change", { bubbles: true })); } close(); btn.focus(); };
    btn.onclick = e => { e.stopPropagation(); wrap.classList.contains("open") ? close() : open(); };
    menu.onclick = e => { e.stopPropagation(); const it = e.target.closest("[data-i]"); if (it) pick(+it.dataset.i); };
    btn.onkeydown = e => {
      const n = sel.options.length, isOpen = wrap.classList.contains("open");
      if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); if (!isOpen) return open(); hl = (hl + (e.key === "ArrowDown" ? 1 : n - 1)) % n; paint(); items()[hl].scrollIntoView({ block: "nearest" }); }
      else if ((e.key === "Enter" || e.key === " ") && isOpen) { e.preventDefault(); pick(hl); }
      else if (e.key === "Escape" && isOpen) { e.preventDefault(); close(); }
    };
    document.addEventListener("click", close); document.addEventListener("dd:close", close);
    paint();
  });
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
