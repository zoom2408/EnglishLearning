/* =====================================================================
   core/nav.js
   Site header (module index), tabs and the sliding tab ink.
   ===================================================================== */

const LANGS = [
  { code: "en", flag: "🇬🇧", label: "English", home: "/english.html" },
  { code: "de", flag: "🇩🇪", label: "Deutsch", home: "/de/" },
  { code: "nb", flag: "🇳🇴", label: "Norsk bokmål", home: "/nb/" },
  { code: "es", flag: "🇪🇸", label: "Español", home: "/es/" },
  { code: "ja", flag: "🇯🇵", label: "日本語", home: "/ja/" },
  { code: "zh", flag: "🇨🇳", label: "中文", home: "/zh/" },
  { code: "th", flag: "🇹🇭", label: "ภาษาไทย", home: "/th/" },
];
function currentLang() {
  const p = location.pathname;
  if (p.startsWith("/de/")) return "de";
  if (p.startsWith("/nb/")) return "nb";
  if (p.startsWith("/es/")) return "es";
  if (p.startsWith("/ja/")) return "ja";
  if (p.startsWith("/zh/")) return "zh";
  if (p.startsWith("/th/")) return "th";
  return "en";
}

/** reading-aid toggle (romaji for ja, pinyin for zh, romanization for th): label + localStorage key */
const RO = { ja: { name: "Romaji", key: "romaji12" }, zh: { name: "Pinyin", key: "pinyin12" }, th: { name: "Phiên âm", key: "rom12" } }[currentLang()] || null;

function renderSite() {
  const el = document.getElementById("site"); if (!el) return;
  const cur = document.body.dataset.module;
  const L = LANGS.find(l => l.code === currentLang()) || LANGS[0];
  el.innerHTML = `
    <a class="backlink" href="/" aria-label="Về trang chủ Học mọi thứ"><svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M20 12H4M10 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Học mọi thứ</span></a>
    <div class="brand" id="langswitch">
      <button class="brandbtn" type="button" aria-haspopup="true" aria-expanded="false">${SITE_BRAND || "Ngữ pháp"}<b>.</b></button>
      <div class="langmenu" role="menu">
        ${LANGS.map(l => `<a href="${l.home}" role="menuitem"${l.code === L.code ? ' aria-current="true"' : ""}>${l.flag} ${l.label}</a>`).join("")}
      </div>
    </div>
    <nav class="mods" aria-label="Chủ đề">
      ${MODULES.map(m => `<a href="${m.page}"${m.key === cur ? ' aria-current="page"' : ""}${m.key === "speaking" ? ' class="spk"' : ""}><span>${m.num}</span>${m.title}</a>`).join("")}
    </nav>
    ${RO ? `<button id="roBtn" class="theme ro-toggle" type="button" aria-pressed="true" aria-label="Bật hoặc tắt ${RO.name}"><i></i><span>${RO.name}: Bật</span></button>` : ""}
    <div class="ttswrap" id="ttsWrap">
      <button id="ttsBtn" class="theme tts-toggle" type="button" aria-haspopup="true" aria-expanded="false" aria-label="Tuỳ chỉnh giọng đọc và tốc độ"><svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M3 9v6h4l5 4V5L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4z"/></svg><span>Giọng đọc</span></button>
      <div class="ttsmenu" id="ttsMenu" role="dialog" aria-label="Giọng đọc">
        <label class="lbl" for="ttsVoice">Giọng</label>
        <select id="ttsVoice"></select>
        <label class="lbl" for="ttsRate">Tốc độ <b id="ttsRateVal">0.9×</b></label>
        <input id="ttsRate" type="range" min="0.5" max="1.3" step="0.05" value="0.9">
        <div class="ttspresets" role="group" aria-label="Tốc độ nhanh"><button type="button" data-r="0.7">Chậm</button><button type="button" data-r="0.9">Vừa</button><button type="button" data-r="1.1">Nhanh</button></div>
        <button type="button" class="btn ghost ttstest" id="ttsTest">Nghe thử</button>
      </div>
    </div>
    <button id="themeBtn" class="theme" type="button" aria-label="Đổi giao diện sáng hoặc tối"><i></i><span>Tự động</span></button>`;
  const roBtn = document.getElementById("roBtn");
  if (roBtn) {
    const apply = on => { document.documentElement.dataset.romaji = on ? "on" : "off"; roBtn.setAttribute("aria-pressed", on); roBtn.dataset.mode = on ? "dark" : "light"; roBtn.querySelector("span").textContent = RO.name + (on ? ": Bật" : ": Tắt"); };
    let on = true; try { on = localStorage.getItem(RO.key) !== "off"; } catch (e) {}
    apply(on);
    roBtn.addEventListener("click", () => { on = !on; try { localStorage.setItem(RO.key, on ? "on" : "off"); } catch (e) {} apply(on); });
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
const SAY_LANG = { en: "en-US", de: "de-DE", nb: "nb-NO", es: "es-ES", ja: "ja-JP", zh: "zh-CN", th: "th-TH" };
const hasTTS = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
if (!hasTTS) document.documentElement.classList.add("no-tts");
const NOVELTY = /albert|bad news|bahh|bells|boing|bubbles|cellos|deranged|good news|hysterical|jester|junior|organ|superstar|trinoids|whisper|wobble|zarvox|fred|ralph|kathy|eddy|flo|grandma|grandpa|reed|rocko|sandy|shelley/i;
let ttsVoices = [], ttsLang = "", ttsPick = null;
let ttsPrefs = { voice: "", rate: 0.9 };
try { const p = JSON.parse(localStorage.getItem("tts12") || "{}"); if (p && typeof p === "object") ttsPrefs = { voice: String(p.voice || ""), rate: Math.min(1.3, Math.max(0.5, +p.rate || 0.9)) }; } catch (e) {}
function saveTtsPrefs() { try { localStorage.setItem("tts12", JSON.stringify(ttsPrefs)); } catch (e) {} }
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
  if (ttsPrefs.voice) { const chosen = vs.find(v => v.voiceURI === ttsPrefs.voice && voiceScore(v, lang) >= 0); if (chosen) { ttsPick = chosen; ttsLang = lang; return chosen; } }
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
let sayToken = 0, sayTimer = 0, audSeq = 0;
function stopSay() { audSeq++; sayToken++; clearTimeout(sayTimer); if (hasTTS) window.speechSynthesis.cancel(); }
function say(text, slow, done) {
  if (!hasTTS || !text) return;
  const lang = SAY_LANG[currentLang()] || "en-US", synth = window.speechSynthesis;
  stopSay();
  const token = sayToken, v = pickVoice(lang), chunks = speechChunks(text);
  const rate = slow ? Math.max(0.4, +(ttsPrefs.rate * 0.65).toFixed(2)) : ttsPrefs.rate;
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
/** play recordings one after another (urls = array of audio URLs); cancelled by any other playback */
function playSeq(urls, rate, done) {
  stopSay(); const t = audSeq; let i = 0;
  const next = () => {
    if (t !== audSeq) return;
    if (i >= urls.length) { if (done) done(true); return; }
    const a = new Audio(urls[i++]); a.playbackRate = rate || 1;
    a.onended = () => setTimeout(next, 80); a.onerror = () => { if (done) done(false); };
    a.play().catch(() => { if (done) done(false); });
  };
  next();
}
/** [data-aud="url|url"] buttons: recorded syllables, [data-rate] slows them, [data-say] fallback text is read by machine voice if audio fails */
document.addEventListener("click", e => {
  const b = e.target.closest("[data-aud]"); if (!b) return;
  e.stopPropagation();
  document.querySelectorAll(".say.playing").forEach(x => x.classList.remove("playing"));
  b.classList.add("playing");
  playSeq(b.dataset.aud.split("|"), +b.dataset.rate || 1, ok => { b.classList.remove("playing"); if (ok === false && b.dataset.fallback && typeof say === "function") say(b.dataset.fallback, !!b.dataset.rate); });
}, true);
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

/** header popover: voice + speed for the listen buttons, remembered per browser */
function initTtsPanel() {
  const wrap = document.getElementById("ttsWrap"); if (!wrap) return;
  if (!hasTTS) { wrap.hidden = true; return; }
  const btn = document.getElementById("ttsBtn"), sel = document.getElementById("ttsVoice"), rng = document.getElementById("ttsRate"), val = document.getElementById("ttsRateVal"), test = document.getElementById("ttsTest");
  const lang = SAY_LANG[currentLang()] || "en-US";
  const fill = () => {
    const vs = (ttsVoices.length ? ttsVoices : window.speechSynthesis.getVoices()).map(v => [v, voiceScore(v, lang)]).filter(x => x[1] >= 0).sort((a, b) => b[1] - a[1]);
    const auto = pickVoiceAuto(lang);
    sel.innerHTML = `<option value="">Tự động${auto ? " (" + esc(auto.name) + ")" : ""}</option>` + vs.map(([v]) => `<option value="${esc(v.voiceURI)}">${esc(v.name)} · ${esc(v.lang)}</option>`).join("");
    sel.value = vs.some(([v]) => v.voiceURI === ttsPrefs.voice) ? ttsPrefs.voice : "";
  };
  const paintRate = () => { rng.value = ttsPrefs.rate; val.textContent = ttsPrefs.rate.toFixed(2).replace(/0$/, "") + "×"; wrap.querySelectorAll(".ttspresets button").forEach(b => b.setAttribute("aria-pressed", Math.abs(+b.dataset.r - ttsPrefs.rate) < 0.01)); };
  const close = () => { wrap.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); };
  const demo = () => say(lang.startsWith("en") ? "Hello! This is how I sound. Let's practise speaking together." : "Hello, this is a test.", false);
  btn.addEventListener("click", e => { e.stopPropagation(); const was = wrap.classList.contains("open"); document.dispatchEvent(new Event("dd:close")); if (!was) { fill(); paintRate(); wrap.classList.add("open"); btn.setAttribute("aria-expanded", "true"); } });
  wrap.querySelector(".ttsmenu").addEventListener("click", e => e.stopPropagation());
  document.addEventListener("click", close); document.addEventListener("dd:close", close);
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
  sel.addEventListener("change", () => { ttsPrefs.voice = sel.value; ttsPick = null; saveTtsPrefs(); demo(); });
  rng.addEventListener("input", () => { ttsPrefs.rate = +rng.value; paintRate(); });
  rng.addEventListener("change", () => { saveTtsPrefs(); demo(); });
  wrap.querySelectorAll(".ttspresets button").forEach(b => b.addEventListener("click", () => { ttsPrefs.rate = +b.dataset.r; paintRate(); saveTtsPrefs(); demo(); }));
  test.addEventListener("click", demo);
  if (window.speechSynthesis.addEventListener) window.speechSynthesis.addEventListener("voiceschanged", () => { if (wrap.classList.contains("open")) fill(); });
}
function pickVoiceAuto(lang) {
  const saved = ttsPrefs.voice; ttsPrefs.voice = ""; const keep = ttsPick, keepLang = ttsLang; ttsPick = null;
  const v = pickVoice(lang); ttsPrefs.voice = saved; ttsPick = keep; ttsLang = keepLang; return v;
}

renderSite();
initTtsPanel();
addEventListener("resize", placeInk);
document.fonts && document.fonts.ready.then(placeInk);
