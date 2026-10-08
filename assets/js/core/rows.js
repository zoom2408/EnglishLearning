/* =====================================================================
   core/rows.js
   Lesson row component (accordion), open/save state, cross-page links,
   delegated clicks and keyboard navigation.
   ===================================================================== */
const LV=["","Hiếm","Ít","Vừa","Nhiều","Rất nhiều"];
const meter=n=>`<div class="meter" aria-hidden="true">${[1,2,3,4,5].map(i=>`<i class="${i<=n?'on':''}" style="--i:${i}"></i>`).join("")}</div>`;

function rowHTML(t){
  const cond=t.mod!=="tenses";
  let i=0; const st=()=>`class="stage" style="--i:${i++}"`;
  const f0=t.short && cond ? t.short : t.forms[0][1];
  const tenseSec = cond && t.tenses.length ? `<div class="sec stage" style="--i:${i++}"><span class="lbl">${t.tensesLabel||"Thì trong mỗi vế"}</span><div class="content chips">${t.tenses.map(([lab,code])=>{ const id=TN[code]; return id?`<button class="chip" data-review="${id}"><span class="cl">${lab}</span> ${byId[id].vi} →</button>`:`<span class="chip static"><span class="cl">${lab}</span> ${esc(code)}</span>`; }).join("")}</div></div>` : "";
  return `<div class="row" data-id="${t.id}" data-g="${t.g||""}" data-real="${t.real===undefined?"":t.real}" id="row-${t.id}">
  <button class="rhead" aria-expanded="false" aria-controls="exp-${t.id}" id="btn-${t.id}">
    <span class="num">${esc(t.num)}</span>
    <span class="name"><b>${t.en}</b><small>${t.vi}</small></span>
    <span class="track${t.tl?"":" notl"}${t.scale?" scl":""}">${compact(t)}</span>
  </button>
  <div class="exp" id="exp-${t.id}" role="region" aria-labelledby="btn-${t.id}"><div class="exp-in"><div class="body">
    <div class="core"><p ${st()}>${t.core}</p><p class="stage f" style="--i:${i++}">${esc(f0)}</p></div>
    <div class="dia">${diagram(t)}</div>
    <div class="sec stage" style="--i:${i++}"><span class="lbl">Cấu trúc</span><div class="content forms">${t.forms.map(f=>`<div class="form"><span class="s">${f[0]}</span><code>${esc(f[1])}</code><em>${f[2]}</em></div>`).join("")}</div></div>
    <div class="sec stage" style="--i:${i++}"><span class="lbl">Khi nào dùng</span><ol class="content uses">${t.uses.map((u,k)=>`<li><span>${String(k+1).padStart(2,"0")}</span><p>${u[0]}<em>${u[1]}</em></p></li>`).join("")}</ol></div>
    ${tenseSec}
    <div class="sec stage" style="--i:${i++}"><span class="lbl">${cond?"Từ khóa":"Dấu hiệu"}</span><div class="content chips">${t.signals.map(s=>cond?`<span class="chip static">${esc(s)}</span>`:`<button class="chip" data-signal="${esc(s)}">${esc(s)}</button>`).join("")}</div></div>
    <div class="sec stage" style="--i:${i++}"><span class="lbl">Nói · Viết</span><div class="content">
      <div class="reg"><div class="r"><div>Văn nói <span>${LV[t.speak]}</span></div>${meter(t.speak)}</div><div class="r"><div>Văn viết <span>${LV[t.write]}</span></div>${meter(t.write)}</div></div>
      <p class="note">${t.reg}</p>${t.extra?`<div class="extra">${t.extra}</div>`:""}</div></div>
    <div class="sec stage" style="--i:${i++}"><span class="lbl">Lỗi hay gặp</span><div class="content mist"><s>${esc(t.mistake[0])}</s><span class="ok">${esc(t.mistake[1])}</span><small>${t.mistake[2]}</small></div></div>
  </div></div></div>
</div>`;
}


/* ---------- open / save / cross-page links ---------- */
const rowOf = id => document.getElementById("row-" + id);

function open(id, opts = {}) {
  const r = rowOf(id); if (!r) return;
  const box = r.parentElement, prev = box.dataset.current || "";
  box.querySelectorAll(".row.open").forEach(x => { x.classList.remove("open"); x.querySelector(".rhead").setAttribute("aria-expanded", "false"); });
  if (prev === id && !opts.force) { box.dataset.current = ""; save(null); return; }
  box.dataset.current = id; save(id);
  void r.offsetWidth;
  r.classList.add("open"); r.querySelector(".rhead").setAttribute("aria-expanded", "true");
  if (opts.scroll !== false) setTimeout(() => { const top = r.getBoundingClientRect().top; if (top < 0 || top > innerHeight * .55) r.scrollIntoView({ behavior: "smooth", block: "start" }); }, 620);
}
function save(id) {
  try { if (id) localStorage.setItem("last_" + document.body.dataset.module, id); } catch (e) {}
  try { history.replaceState(null, "", id ? "#" + id : location.pathname + location.search); } catch (e) {}
}

/** Open a lesson: on this page if it lives here, otherwise go to its page */
function goLearn(id) {
  if (byId[id] && byId[id].mod === document.body.dataset.module && rowOf(id)) {
    show("learn");
    if (typeof resetFilters === "function") resetFilters();
    open(id, { force: true, scroll: false });
    setTimeout(() => rowOf(id).scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  } else {
    location.href = pageOf(id) + "#" + id;
  }
}

/* ---------- delegated clicks ---------- */
document.addEventListener("click", e => {
  const g = e.target; let b;
  if (b = g.closest("nav.tabs [data-view]")) { show(b.dataset.view); return; }
  if ((b = g.closest("[data-signal]")) && typeof goFind === "function") { goFind(b.dataset.signal); return; }
  if (b = g.closest("[data-review]")) { goLearn(b.dataset.review); return; }
  if (b = g.closest(".rhead")) { open(b.closest(".row").dataset.id); return; }
});

/* ---------- keyboard: ↑ ↓ through lessons ---------- */
document.addEventListener("keydown", e => {
  if (e.target.matches("input,select,textarea")) return;
  if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
  const view = document.querySelector(".view.learnv:not([hidden])"); if (!view) return;
  e.preventDefault();
  const list = [...view.querySelectorAll(".row")].filter(r => !r.classList.contains("dim"));
  let i = list.indexOf(view.querySelector(".row.open"));
  i = i < 0 ? 0 : (e.key === "ArrowDown" ? Math.min(list.length - 1, i + 1) : Math.max(0, i - 1));
  open(list[i].dataset.id, { force: true }); list[i].querySelector(".rhead").focus({ preventScroll: true });
});
