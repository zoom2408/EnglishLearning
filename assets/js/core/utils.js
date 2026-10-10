/* =====================================================================
   core/utils.js
   Shared helpers and the global content registry.
   Load order: content/modules.js → core/utils.js → content/theory/* → …
   ===================================================================== */

/** Global registry filled by files in /content */
const GRAMMAR = { theory: {}, quiz: {}, speaking: null };

/** Every lesson row from every loaded theory file, by id */
const byId = {};

/** Register lesson rows for a module and index them by id */
function registerRows(mod, rows) {
  rows.forEach(r => { r.mod = mod; if (!r.tenses) r.tenses = []; byId[r.id] = r; });
  return rows;
}

const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };

/** Japanese furigana: {漢字|かんじ} → <ruby>漢字<rt>かんじ</rt></ruby> (only in HTML fields, never in text that is escaped later) */
const rb = s => s.replace(/\{([^{}|]+)\|([^{}|]+)\}/g, "<ruby>$1<rt>$2</rt></ruby>");

/** **bold** → <mark>, ___ → blank, {漢字|かな} → furigana */
const fmt = s => rb(esc(s).replace(/\*\*(.+?)\*\*/g, "<mark>$1</mark>").replace(/___/g, '<span class="blank"></span>'));

/** Normalise a typed answer (contractions, punctuation, spacing) */
function norm(s) {
  return s.toLowerCase().replace(/[’‘`´]/g, "'").replace(/won't/g, "will not").replace(/can't/g, "cannot").replace(/n't\b/g, " not")
    .replace(/'m\b/g, " am").replace(/'re\b/g, " are").replace(/'ll\b/g, " will").replace(/'ve\b/g, " have").replace(/'d\b/g, " would")
    .replace(/[.!?,。、！？「」]/g, "").replace(/\s+/g, currentLang() === "ja" ? "" : " ").trim();
}

/** Two-line label for a tense id (needs content/theory/tenses.js) */
const tLabel = id => `<span class="tl-vi">${byId[id].vi}</span><span class="tl-en">${byId[id].en}</span>`;

/** Compact row builders used by several theory files */
const R_ = (id, num, en, vi, short, core, forms, uses, signals, speak, write, reg, mistake, vis) =>
  Object.assign({ id, num, en, vi, short, core, forms, uses, signals, tenses: [], speak, write, reg, mistake }, vis || {});
const X_ = (la, lb, a, b, note) => ({ xf: { la, lb, a, b, note } });

/** Which page owns a lesson id (for links across pages) */
function pageOf(id) {
  if (byId[id]) { const m = MODULES.find(m => m.key === byId[id].mod); if (m) return m.page; }
  const hit = MODULES.filter(m => m.prefix).sort((a, b) => b.prefix.length - a.prefix.length).find(m => id.startsWith(m.prefix));
  return hit ? hit.page : "tenses.html";
}
