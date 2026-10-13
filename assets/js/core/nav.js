/* =====================================================================
   core/nav.js
   Site header (module index), tabs and the sliding tab ink.
   ===================================================================== */

const LANGS = [
  { code: "en", flag: "🇬🇧", label: "English", home: "/" },
  { code: "de", flag: "🇩🇪", label: "Deutsch", home: "/de/" },
  { code: "nb", flag: "🇳🇴", label: "Norsk bokmål", home: "/nb/" },
  { code: "es", flag: "🇪🇸", label: "Español", home: "/es/" },
  { code: "ja", flag: "🇯🇵", label: "日本語", home: "/ja/" },
];
function currentLang() {
  const p = location.pathname;
  if (p.startsWith("/de/")) return "de";
  if (p.startsWith("/nb/")) return "nb";
  if (p.startsWith("/es/")) return "es";
  if (p.startsWith("/ja/")) return "ja";
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
    ${currentLang() === "ja" ? '<button id="roBtn" class="theme ro-toggle" type="button" aria-pressed="true" aria-label="Bật hoặc tắt romaji"><i></i><span>Romaji: Bật</span></button>' : ""}
    <button id="themeBtn" class="theme" type="button" aria-label="Đổi giao diện sáng hoặc tối"><i></i><span>Tự động</span></button>`;
  const roBtn = document.getElementById("roBtn");
  if (roBtn) {
    const apply = on => { document.documentElement.dataset.romaji = on ? "on" : "off"; roBtn.setAttribute("aria-pressed", on); roBtn.dataset.mode = on ? "dark" : "light"; roBtn.querySelector("span").textContent = on ? "Romaji: Bật" : "Romaji: Tắt"; };
    let on = true; try { on = localStorage.getItem("romaji12") !== "off"; } catch (e) {}
    apply(on);
    roBtn.addEventListener("click", () => { on = !on; try { localStorage.setItem("romaji12", on ? "on" : "off"); } catch (e) {} apply(on); });
  }
  const ls = document.getElementById("langswitch"), lb = ls.querySelector(".brandbtn");
  lb.addEventListener("click", e => { e.stopPropagation(); const was = ls.classList.contains("open"); document.dispatchEvent(new Event("dd:close")); const open = !was; ls.classList.toggle("open", open); lb.setAttribute("aria-expanded", open); });
  const closeLang = () => { ls.classList.remove("open"); lb.setAttribute("aria-expanded", "false"); };
  document.addEventListener("click", closeLang); document.addEventListener("dd:close", closeLang);
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeLang(); });
}

/* ---------- text-to-speech (listen buttons) ----------
   Any element with [data-say="text"] plays that text in the page's
   language through the browser's speech engine. [data-slow] reads slower. */
const SAY_LANG = { en: "en-US", de: "de-DE", nb: "nb-NO", es: "es-ES", ja: "ja-JP" };
const hasTTS = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
if (!hasTTS) document.documentElement.classList.add("no-tts");
const NOVELTY = /albert|bad news|bahh|bells|boing|bubbles|cellos|deranged|good news|hysterical|jester|junior|organ|superstar|trinoids|whisper|wobble|zarvox|fred|ralph|kathy|eddy|flo|grandma|grandpa|reed|rocko|sandy|shelley/i;
let ttsVoices = [], ttsLang = "", ttsPick = null;
/** score a voice for the page language: exact locale, then neural / premium engines, then plain system voices */
function voiceScore(v, lang) {
  const vl = v.lang.replace("_", "-"), ll = lang.toLowerCase();
  let n = 0;
  if (vl.toLowerCase() === ll) n += 100; else if (vl.toLowerCase().startsWith(ll.slice(0, 2))) n += 40; else return -1;
  if (/natural|online/i.test(v.name)) n += 60;
  if (/premium|enhanced|neural|siri/i.test(v.name)) n += 50;
  if (/google/i.test(v.name)) n += 30;
  if (/samantha|ava|allison|evan|nicky|aria|jenny|guy|zira|daniel|karen|moira|serena|tessa/i.test(v.name)) n += 15;
  if (NOVELTY.test(v.name)) n -= 80;
  if (!v.localService) n += 5;
  return n;
}
function pickVoice(lang) {
  if (ttsPick && ttsLang === lang) return ttsPick;
  const vs = ttsVoices.length ? ttsVoices : window.speechSynthesis.getVoices();
  ttsVoices = vs;
  let best = null, top = -1;
  for (const v of vs) { const sc = voiceScore(v, lang); if (sc > top) { top = sc; best = v; } }
  if (best) { ttsPick = best; ttsLang = lang; }
  return best;
}
/** long text is read sentence by sentence: Chrome silently stops utterances longer than about 15 seconds */
function speechChunks(text) {
  const parts = text.match(/[^.!?。！？]+[.!?。！？]*\s*/g) || [text];
  const out = [];
  for (const p of parts) { const t = p.trim(); if (t) out.push(t); }
  return out;
}
let sayToken = 0, sayTimer = 0;
function stopSay() { sayToken++; clearTimeout(sayTimer); if (hasTTS) window.speechSynthesis.cancel(); }
function say(text, slow, done) {
  if (!hasTTS || !text) return;
  const lang = SAY_LANG[currentLang()] || "en-US", synth = window.speechSynthesis;
  stopSay();
  const token = sayToken, v = pickVoice(lang), chunks = speechChunks(text);
  const rate = slow ? 0.6 : 0.9;
  // Chrome needs a short gap after cancel() or the next utterance is dropped
  sayTimer = setTimeout(() => {
    chunks.forEach((c, i) => {
      const u = new SpeechSynthesisUtterance(c);
      u.lang = (v && v.lang) || lang; u.rate = rate; u.pitch = 1;
      if (v) u.voice = v;
      if (i === chunks.length - 1 && done) { u.onend = u.onerror = () => { if (token === sayToken) done(); }; }
      synth.speak(u);
    });
    if (synth.paused) synth.resume();
  }, 60);
}
if (hasTTS) {
  const load = () => { ttsVoices = window.speechSynthesis.getVoices(); ttsPick = null; };
  load();
  if (window.speechSynthesis.addEventListener) window.speechSynthesis.addEventListener("voiceschanged", load);
  else window.speechSynthesis.onvoiceschanged = load;
  window.addEventListener("pagehide", stopSay);
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-say]"); if (!b) return;
    e.stopPropagation();
    document.querySelectorAll(".say.playing").forEach(x => x.classList.remove("playing"));
    b.classList.add("playing");
    say(b.dataset.say, b.hasAttribute("data-slow"), () => b.classList.remove("playing"));
  }, true);
}
const sayBtn = (text, label, slow) => `<button type="button" class="say${slow ? " slow" : ""}" data-say="${esc(text).replace(/"/g, "&quot;")}"${slow ? " data-slow" : ""} aria-label="${slow ? "Nghe chậm" : "Nghe"}: ${esc(label || text).replace(/"/g, "&quot;")}" title="${slow ? "Nghe chậm" : "Nghe"}">${slow ? "×0.6" : ""}</button>`;

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
