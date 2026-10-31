/* =====================================================================
   pages/start.js
   Landing hub. CATS defines every category (mosaic tile, filter chip); SUBJECTS is one flat list tagged with a category key. A
   subject with a `home` is live, without one it renders as a "Sắp ra
   mắt" card. A category with no subject renders muted ("Sắp có").
   Add a subject or a category by editing the two arrays only.
   Language module counts mirror each track's content/modules.js.
   Standalone: does not load core/nav.js.
   ===================================================================== */
(function () {
  /* key = css hook (.mt[data-k], --c-<key>); en = tile label; shape = decorative mosaic shape */
  const CATS = [
    { key: "lang",   label: "Ngôn ngữ",    en: "Languages",  shape: "circle", icon: '<path d="M4 6h9M8.5 4v2M6 6c0 4 3 7 6 8M12 6c0 3-3 6-7 8M12 20l4-9 4 9M13.5 17h5"/>' },
    { key: "psy",    label: "Tâm lý học",  en: "Psychology", shape: "blob",   icon: '<path d="M12 4a6 6 0 0 0-6 6c0 2 1 3 1 5v3h7v-3l2-1v-3l-1-1a6 6 0 0 0-3-6z"/><path d="M10 10c1-1 3 0 2 2"/>' },
    { key: "health", label: "Y tế & Dược", en: "Health & medicine", shape: "ring", icon: '<path d="M9 4h6v5h5v6h-5v5H9v-5H4V9h5z"/>' },
    { key: "biz",    label: "Kinh doanh",  en: "Business",   shape: "bars",   icon: '<path d="M5 20v-6M12 20V6M19 20v-10"/>' },
    { key: "tech",   label: "Công nghệ",   en: "Technology", shape: "tri",    icon: '<rect x="5" y="6" width="14" height="10" rx="1"/><path d="M3 19h18"/>' },
    { key: "sci",    label: "Khoa học",    en: "Science",    shape: "dome",   icon: '<path d="M9 4h6M10 4v6l-5 9h14l-5-9V4"/>' },
    { key: "create", label: "Sáng tạo",    en: "Creativity", shape: "tri",    icon: '<path d="M5 19l1-4L16 5l3 3L9 18z"/>' },
  ];
  const cat = k => CATS.find(c => c.key === k);

  const SUBJECTS = [
    { cat: "lang", code: "en", name: "English", home: "/english.html", n: 14 },
    { cat: "lang", code: "de", name: "Deutsch", home: "/de/", n: 16 },
    { cat: "lang", code: "nb", name: "Norsk", home: "/nb/", n: 16 },
    { cat: "lang", code: "es", name: "Español", home: "/es/", n: 17 },
    { cat: "lang", code: "ja", name: "日本語", home: "/ja/", n: 18 },
    { cat: "lang", code: "zh", name: "中文", home: "/zh/", n: 19 },
    { cat: "lang", code: "th", name: "ภาษาไทย", home: "/th/", n: 17 },
    { cat: "psy", code: "psy", name: "Nhập môn tâm lý" },
    { cat: "health", code: "pha", name: "Dược lý cơ bản" },
  ];

  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const live = s => !!s.home;
  const has = k => SUBJECTS.some(s => s.cat === k);
  const $ = id => document.getElementById(id);
  const ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h16M14 6l6 6-6 6"/></svg>';

  /* ---------- subject cards ---------- */
  const grid = $("st-grid");
  grid.innerHTML = SUBJECTS.map((s, i) => {
    const num = String(i + 1).padStart(2, "0"), code = s.code.toUpperCase(), c = cat(s.cat);
    const lang = s.cat === "lang" ? ` lang="${s.code}"` : "";
    const main = `
      <div class="st-main">
        <span class="st-top"><b>${num}</b><i>/</i><span>${code}</span></span>
        <span class="st-name">${s.name}</span>
        ${live(s) ? "" : `<span class="st-badge">Sắp ra mắt</span>`}
        <span class="st-go"><span>${live(s) ? `${s.n} module, vào học` : "Đang chuẩn bị"}</span>${live(s) ? ARROW : ""}</span>
      </div>
      <div class="st-side2" aria-hidden="true">
        <span class="st-catl">${c.label}</span>
        <span class="st-bignum">${num}</span>
        <span class="st-bigcode">${code}</span>
      </div>`;
    return live(s)
      ? `<a class="st-tile" href="${s.home}"${lang} data-k="${s.cat}" style="--i:${i}" aria-label="${s.name}, ${c.label}, ${s.n} module">${main}</a>`
      : `<div class="st-tile soon" data-k="${s.cat}" style="--i:${i}" aria-label="${s.name}, ${c.label}, sắp ra mắt">${main}</div>`;
  }).join("");
  const tiles = [...grid.children];

  if (reduce || !("IntersectionObserver" in window)) tiles.forEach(t => t.classList.add("in"));
  else {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
    tiles.forEach(t => io.observe(t));
  }

  /* ---------- filter (shared by chips and nav menu) ---------- */
  const bar = $("st-count"), chips = $("st-chips");
  let current = "all";

  /* category chips next to the count: "Tất cả" + every category that has subjects */
  chips.innerHTML = [["all", "Tất cả", SUBJECTS.length], ...CATS.filter(c => has(c.key)).map(c => [c.key, c.label, SUBJECTS.filter(s => s.cat === c.key).length])]
    .map(([k, l, n]) => `<button type="button" class="st-chip" data-k="${k}" aria-pressed="false"${k === "all" ? "" : ` style="--cat:var(--c-${k})"`}>${k === "all" ? "" : "<i></i>"}${l}<small>${n}</small></button>`).join("");
  chips.addEventListener("click", e => { const b = e.target.closest(".st-chip"); if (b) filter(b.dataset.k); });

  const filter = (k, scroll) => {
    current = k;
    let shown = 0;
    tiles.forEach(t => { const on = k === "all" || t.dataset.k === k; t.hidden = !on; if (on) { shown++; t.classList.add("in"); } });
    chips.querySelectorAll(".st-chip").forEach(b => b.setAttribute("aria-pressed", b.dataset.k === k));
    bar.textContent = `${shown} môn`;
    if (scroll) $("tracks").scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  /* ---------- mosaic: decorative, hover only (no click, no anchor) ---------- */
  $("st-mosaic").innerHTML = `<div class="mt-core"><b>LEARN</b><span>Anything</span>${ARROW}</div>` +
    CATS.map(c => `<div class="mt" data-k="${c.key}" data-s="${c.shape}${has(c.key) ? "" : '" data-off="'}">
        <span class="sh"></span>
        <span class="mt-l">${has(c.key) ? "" : "Sắp có · "}${c.en}</span>
        <svg class="ic" viewBox="0 0 24 24">${c.icon}</svg>
      </div>`).join("");

  /* ---------- nav dropdown "Học gì?" ---------- */
  const dd = $("st-dd"), ddbtn = $("st-ddbtn"), menu = $("st-menu");
  menu.innerHTML = `<button type="button" role="menuitem" data-k="all"><i></i>Tất cả<small>${SUBJECTS.length}</small></button>` +
    CATS.filter(c => has(c.key)).map(c => `<button type="button" role="menuitem" data-k="${c.key}" style="--cat:var(--c-${c.key})"><i></i>${c.label}<small>${SUBJECTS.filter(s => s.cat === c.key).length}</small></button>`).join("");
  const close = () => { dd.classList.remove("open"); ddbtn.setAttribute("aria-expanded", "false"); };
  ddbtn.addEventListener("click", e => { e.stopPropagation(); const o = !dd.classList.contains("open"); dd.classList.toggle("open", o); ddbtn.setAttribute("aria-expanded", o); });
  menu.addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; close(); filter(b.dataset.k, true); });
  document.addEventListener("click", close);
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });

  /* ---------- stats: computed from the arrays, counted up ---------- */
  const liveS = SUBJECTS.filter(live);
  const stats = [
    [liveS.length, "Môn đã mở"],
    [liveS.reduce((a, s) => a + s.n, 0), "Module"],
    [CATS.filter(c => has(c.key)).length, "Lĩnh vực"],
    ["60+", "Câu mỗi module"],
  ];
  const sEl = $("st-stats");
  sEl.innerHTML = stats.map(([v, l]) => `<div><dd>${typeof v === "number" ? 0 : v}</dd><dt>${l}</dt></div>`).join("");
  sEl.querySelectorAll("dd").forEach((el, i) => {
    const to = stats[i][0]; if (typeof to !== "number") return;
    if (reduce) { el.textContent = to; return; }
    const t0 = performance.now(), dur = 900;
    const tick = now => { const p = Math.min(1, (now - t0) / dur); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  });

  filter("all");
})();
