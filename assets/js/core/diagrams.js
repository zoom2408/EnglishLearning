/* =====================================================================
   core/diagrams.js
   SVG renderers: compact track (row header), annotated time diagram,
   scale diagram (modal, comparison, hedging), sentence transform (xf).
   ===================================================================== */
// ---------- compact track ----------
function compact(t){
  if(!t.tl) return t.scale?compactScale(t):`<span class="ttext">${esc(t.short)}</span>`;
  const Y=24; let s=`<svg viewBox="0 0 720 48" aria-hidden="true"><line class="base" x1="20" y1="${Y}" x2="700" y2="${Y}"/>`;
  for(const e of t.tl){
    if(e.t==="bar") s+=`<rect class="m" x="${e.x1}" y="${Y-5}" width="${e.x2-e.x1}" height="10"/>`;
    else if(e.t==="point") s+=`<circle class="m pt" cx="${e.x}" cy="${Y}" r="7"/>`;
    else if(e.t==="ref") s+=`<line class="rf" x1="${e.x}" y1="8" x2="${e.x}" y2="40"/>`;
    else if(e.t==="arrow") s+=`<path class="ma" d="M${e.x1} ${Y-9} Q${(e.x1+e.x2)/2} ${Y-24} ${e.x2} ${Y-9}"/>`;
    else if(e.t==="dots") for(const x of e.xs) s+=`<circle class="m" cx="${x}" cy="${Y}" r="4"/>`;
    else if(e.t==="band") s+=`<rect class="mb" x="${e.x1}" y="${Y-10}" width="${e.x2-e.x1}" height="20"/>`;
    else if(e.t==="link"){ const d=e.x2>e.x1?1:-1; s+=`<line class="ma" x1="${e.x1+d*10}" y1="${Y}" x2="${e.x2-d*12}" y2="${Y}" stroke-width="3"/>`; }
    else if(e.t==="if") s+=`<circle class="${e.real?'m pt':'mh'}" cx="${e.x}" cy="${Y}" r="7"/>`;
    else if(e.t==="res") s+=`<rect class="${e.real?'m pt':'mh'}" x="${e.x-7}" y="${Y-7}" width="14" height="14"/>`;
  }
  return s+`</svg>`;
}

// ---------- annotated diagram ----------
function diagram(t){
  if(!t.tl) return t.scale?scaleDia(t):t.xf?xfDia(t):t.table?tableDia(t):`<div class="bigf">${esc(t.big)}</div>`;
  const Y=100, A="var(--accent)", isCond=t.mod==="cond";
  let s=`<svg viewBox="0 0 720 ${isCond?184:168}" role="img" aria-label="Sơ đồ ${esc(t.vi)}" font-family="Be Vietnam Pro, Helvetica, Arial, sans-serif">`;
  s+=`<text x="20" y="20" font-size="10.5" font-weight="700" letter-spacing="1.4" fill="var(--muted)">QUÁ KHỨ</text>`+
     `<text x="700" y="20" text-anchor="end" font-size="10.5" font-weight="700" letter-spacing="1.4" fill="var(--muted)">TƯƠNG LAI</text>`+
     `<text x="360" y="20" text-anchor="middle" font-size="10.5" font-weight="700" letter-spacing="1.4" fill="${A}">BÂY GIỜ</text>`;
  s+=`<line x1="20" y1="${Y}" x2="692" y2="${Y}" stroke="var(--fg)" stroke-width="1.5"/><path d="M690 ${Y-5} L702 ${Y} L690 ${Y+5} Z" fill="var(--fg)"/>`;
  s+=`<line x1="360" y1="30" x2="360" y2="160" stroke="${A}" stroke-width="2"/>`;
  const T13=(x,y,txt,anchor="middle",w=600,col="var(--fg)")=>`<text class="d-txt" x="${x}" y="${y}" text-anchor="${anchor}" font-size="13" font-weight="${w}" fill="${col}">${esc(txt)}</text>`;
  for(const e of t.tl){
    if(e.t==="bar") s+=`<rect class="d-bar" x="${e.x1}" y="${Y-9}" width="${e.x2-e.x1}" height="18" fill="${A}"/>`;
    else if(e.t==="point") s+=`<circle class="d-pt" cx="${e.x}" cy="${Y}" r="9" fill="${A}" stroke="var(--surface)" stroke-width="3"/>`+T13(e.x,Y-22,e.s);
    else if(e.t==="ref"){ const end=e.x>600; s+=`<line class="d-ref" x1="${e.x}" y1="68" x2="${e.x}" y2="128" stroke="var(--fg)" stroke-width="1.5" stroke-dasharray="4 3"/>`+T13(e.x,end?150:58,e.s,end?"end":"middle"); }
    else if(e.t==="arrow") s+=`<path class="d-arrow" d="M${e.x1} ${Y+22} L${e.x2-8} ${Y+22}" stroke="${A}" stroke-width="2" fill="none"/><path class="d-head" d="M${e.x2-10} ${Y+17} L${e.x2} ${Y+22} L${e.x2-10} ${Y+27} Z" fill="${A}"/>`;
    else if(e.t==="dots") e.xs.forEach((x,i)=>{ s+=`<circle class="d-dot" style="--i:${i}" cx="${x}" cy="${Y}" r="6" fill="${A}"/>`; });
    else if(e.t==="label") s+=T13(e.x,e.y+15,e.s,"middle",400,"var(--muted)");
    else if(e.t==="band") s+=`<rect class="d-bar" x="${e.x1}" y="${Y-16}" width="${e.x2-e.x1}" height="32" fill="var(--accent-soft)"/>`+T13(e.x2-6,Y+30,e.s,"end",400,"var(--muted)");
    else if(e.t==="link"){ const d=e.x2>e.x1?1:-1, a=e.x1+d*14, b=e.x2-d*16; s+=`<path class="d-arrow" d="M${a} ${Y} L${b} ${Y}" stroke="${A}" stroke-width="3" fill="none"/><path class="d-head" d="M${b} ${Y-6} L${b+d*10} ${Y} L${b} ${Y+6} Z" fill="${A}"/>`; }
    else if(e.t==="if"){ s+=`<circle class="d-pt" cx="${e.x}" cy="${Y}" r="11" fill="${e.real?A:'var(--surface)'}" stroke="${A}" stroke-width="${e.real?0:2.5}" ${e.real?"":'stroke-dasharray="4 3"'}/>`+T13(e.x,Y-24,e.s); }
    else if(e.t==="res"){ s+=`<rect class="d-pt" x="${e.x-10}" y="${Y-10}" width="20" height="20" fill="${e.real?A:'var(--surface)'}" stroke="${A}" stroke-width="${e.real?0:2.5}" ${e.real?"":'stroke-dasharray="4 3"'}/>`+T13(e.x,Y+38,e.s); }
  }
  if(isCond){
    s+=`<g class="d-txt" font-size="11.5" fill="var(--muted)"><circle cx="26" cy="170" r="5" fill="${A}"/><text x="36" y="174">điều kiện</text><rect x="104" y="165" width="10" height="10" fill="${A}"/><text x="120" y="174">kết quả</text>`+
       `<circle cx="196" cy="170" r="5" fill="${A}"/><text x="206" y="174">có thật</text><circle cx="268" cy="170" r="5" fill="none" stroke="${A}" stroke-width="1.5" stroke-dasharray="3 2"/><text x="278" y="174">không có thật</text></g>`;
  }
  return s+`</svg>`;
}


const xpos=p=>40+p*6.4;
function compactScale(t){
  const Y=24; let s=`<svg viewBox="0 0 720 48" aria-hidden="true"><line class="base" x1="40" y1="${Y}" x2="680" y2="${Y}"/><line class="base" x1="40" y1="${Y-6}" x2="40" y2="${Y+6}"/><line class="base" x1="680" y1="${Y-6}" x2="680" y2="${Y+6}"/>`;
  t.scale.marks.forEach(([p])=>{ s+=`<circle class="m pt" cx="${xpos(p)}" cy="${Y}" r="7"/>`; });
  return s+`</svg>`;
}
function scaleDia(t){
  const Y=96, A="var(--accent)", sc=t.scale, gid="g-"+t.id;
  let s=`<svg viewBox="0 0 720 176" role="img" aria-label="Thang đo ${esc(t.vi)}" font-family="Be Vietnam Pro, Helvetica, Arial, sans-serif">`;
  s+=`<defs><linearGradient id="${gid}" x1="0" x2="1"><stop offset="0" stop-color="${A}" stop-opacity=".06"/><stop offset="1" stop-color="${A}" stop-opacity=".55"/></linearGradient></defs>`;
  s+=`<text x="40" y="22" font-size="10.5" font-weight="700" letter-spacing="1.4" fill="var(--muted)">← ${esc(sc.left.toUpperCase())}</text><text x="680" y="22" text-anchor="end" font-size="10.5" font-weight="700" letter-spacing="1.4" fill="${A}">${esc(sc.right.toUpperCase())} →</text>`;
  s+=`<rect class="d-bar" x="40" y="${Y-7}" width="640" height="14" fill="url(#${gid})"/>`;
  [0,25,50,75,100].forEach(p=>{ s+=`<line x1="${xpos(p)}" y1="${Y+12}" x2="${xpos(p)}" y2="${Y+18}" stroke="var(--muted)" stroke-width="1"/><text x="${xpos(p)}" y="${Y+31}" text-anchor="middle" font-size="10" fill="var(--muted)" font-family="JetBrains Mono, monospace">${p}%</text>`; });
  sc.marks.forEach(([p,w],i)=>{ const up=i%2===0, x=xpos(p);
    s+=`<circle class="d-dot" style="--i:${i}" cx="${x}" cy="${Y}" r="9" fill="${A}" stroke="var(--surface)" stroke-width="3"/>`;
    s+=`<line class="d-txt" x1="${x}" y1="${up?Y-12:Y+12}" x2="${x}" y2="${up?Y-30:Y+44}" stroke="${A}" stroke-width="1"/>`;
    s+=`<text class="d-txt" x="${x}" y="${up?Y-36:Y+60}" text-anchor="${p<8?'start':p>92?'end':'middle'}" font-size="14" font-weight="700" fill="var(--fg)" font-family="JetBrains Mono, monospace">${esc(w)}</text>`; });
  return s+`</svg>`;
}
function xfDia(t){
  const tok=s=>esc(s).replace(/\{(\d):([^}]+)\}/g,(m,n,w)=>`<span class="tk tk${n}" style="--i:${n}">${w}<sup>${n}</sup></span>`);
  return `<div class="xf"><div class="xrow"><span class="lbl">${t.xf.la}</span><p>${tok(t.xf.a)}</p></div><div class="xarrow" aria-hidden="true">↓</div><div class="xrow two"><span class="lbl">${t.xf.lb}</span><p>${tok(t.xf.b)}</p></div>${t.xf.note?`<p class="xnote">${t.xf.note}</p>`:""}</div>`;
}

/* ---------- declension / reference table (articles, pronouns, cases…) ---------- */
function tableDia(t){
  return t.table.map(tb=>`<div class="gtable">${tb.title?`<div class="gt-title">${esc(tb.title)}</div>`:""}<table><thead><tr><th></th>${tb.head.map(h=>`<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${tb.rows.map(r=>`<tr><th>${esc(r[0])}</th>${r.slice(1).map(c=>`<td>${fmt(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`).join("");
}
