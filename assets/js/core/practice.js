/* =====================================================================
   core/practice.js
   Practice engine: menu, multiple choice and typed questions, results,
   60-second game. Question builders used by content/quiz/*.js.
   ===================================================================== */
const PRACS = [];

/* ---------- question builders ---------- */
const mcQ=(type,prompt,hint,right,wrongs,ref,expl,mono)=>({type,kind:"mc",prompt,hint,options:[right,...wrongs].map(o=>mono?`<span class="mono">${esc(o)}</span>`:esc(o)),plain:right,answer:0,ref,expl});
const inQ=(type,prompt,hint,accept,ref,expl)=>({type,kind:"input",prompt,hint,accept,plain:accept[0],ref,expl});
const ask=(a,b)=>`<span class="ask">${esc(a)}</span>${esc(b)}`;

const mcs=(pool,type,hint,list)=>list.forEach(([s,r,w,ref,ex])=>pool.push(mcQ(type,fmt(s),hint,r,w,ref,ex,true)));
const mcr=(pool,type,hint,askT,list)=>list.forEach(([a,r,w,ref,ex])=>pool.push(mcQ(type,ask(askT,a),hint,r,w,ref,ex)));


/* ---------- engine ---------- */
function Practice(cfg){
  const el=cfg.el, q$=s=>el.querySelector(s);
  const P={run:null,G:null,cfg};
  let savedCount; try{ savedCount=localStorage.getItem("practiceCount"); }catch(e){}
  P.count = savedCount==="all" ? "all" : (savedCount && +savedCount ? +savedCount : 10);
  const roundN=n=>n==="all"?cfg.pool.length:Math.min(n,cfg.pool.length);
  function menu(){
    const counts=Object.fromEntries(Object.keys(cfg.types).map(k=>[k,cfg.pool.filter(q=>q.type===k).length]));
    const total=cfg.pool.length, nOpts=[10,20,50].filter(n=>n<total), n=roundN(P.count);
    el.innerHTML=`<div class="pmenu">
     <div class="phead"><span class="lbl">Ngân hàng câu hỏi</span><span class="pcount">${total}<small>câu</small></span></div>
     <div class="pcounts"><span class="plbl">Số câu mỗi lượt</span><div class="pcwrap">${nOpts.map(c=>`<button class="pchip${P.count===c?" on":""}" data-count="${c}">${c}</button>`).join("")}<button class="pchip${P.count==="all"?" on":""}" data-count="all">Tất cả · ${total}</button></div></div>
     <button class="prow feature" data-mode="mix"><span class="pn">⁎</span><span><b>Trộn ngẫu nhiên</b><small>${n} câu bất kỳ từ tất cả các dạng</small></span><span class="pc">${n}</span></button>
     ${Object.entries(cfg.types).map(([k,t],i)=>`<button class="prow" data-mode="${k}"><span class="pn">${String(i+1).padStart(2,"0")}</span><span><b>${t.name}</b><small>${t.desc}</small></span><span class="pc">${Math.min(n,counts[k])}</span></button>`).join("")}
     <button class="prow game" data-mode="rush"><span class="pn">▶</span><span><b>Trò chơi: ${cfg.game.title}</b><small>${cfg.game.desc}</small></span><span class="pc">60s</span></button>
    </div>`;
  }
  el.addEventListener("click",e=>{
    const c=e.target.closest("[data-count]"); if(c){ P.count=c.dataset.count==="all"?"all":+c.dataset.count; try{localStorage.setItem("practiceCount",String(P.count));}catch(err){} menu(); return; }
    const m=e.target.closest("[data-mode]"); if(m){ m.dataset.mode==="rush"?rush():start(m.dataset.mode); return; }
    if(e.target.closest("[data-menu]")){ stopRush(); P.run=null; menu(); }
  });
  function start(mode){
    const src=mode==="mix"?cfg.pool:cfg.pool.filter(q=>q.type===mode);
    const n=P.count==="all"?src.length:Math.min(P.count,src.length);
    P.run={mode,qs:shuffle(src).slice(0,n),i:0,score:0,missed:[]}; renderQ();
  }
  function renderQ(){
    const R=P.run; if(R.i>=R.qs.length) return result();
    const q=R.qs[R.i]; R.done=false; R.attempts=0;
    R.order=q.kind==="mc"?shuffle(q.options.map((_,k)=>k)):null;
    el.innerHTML=`<div class="qmeta"><button class="back" data-menu>← Dạng bài</button><span>${String(R.i+1).padStart(2,"0")} / ${R.qs.length}</span><div class="bar"><i style="width:${R.i/R.qs.length*100}%"></i></div><span>Đúng ${R.score}</span></div>
     <span class="lbl qtype">${cfg.types[q.type].name}</span>
     <div class="qtext">${q.prompt}</div>
     <p class="qhint">${q.hint}</p>
     ${q.kind==="mc"
       ? `<div class="opts">${R.order.map((k,n)=>`<button class="opt" data-k="${k}" data-n="${n}"><span>${"ABCD"[n]}</span><span class="ot">${q.options[k]}</span><span class="tag"></span></button>`).join("")}</div>`
       : `<form class="typein"><input class="ans" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Gõ đáp án…" aria-label="Đáp án"><button class="btn" type="submit">Kiểm tra</button></form>`}
     <div class="explain-slot"></div>`;
    if(q.kind==="mc") el.querySelectorAll(".opt").forEach(b=>b.onclick=()=>check(+b.dataset.k));
    else { const f=q$(".typein"); f.onsubmit=ev=>{ev.preventDefault(); const v=q$(".ans").value; if(v.trim()) check(v);}; q$(".ans").focus({preventScroll:true}); }
  }
  function check(val){
    const R=P.run; if(!R||R.done) return;
    const q=R.qs[R.i]; let ok;
    if(q.kind==="mc") ok=val===q.answer;
    else ok=q.accept.some(a=>norm(a)===norm(val));

    if(!ok && q.retry){
      R.attempts++;
      if(q.kind==="mc"){
        const b=el.querySelector(`.opt[data-k="${val}"]`); if(b){ b.disabled=true; b.classList.add("wrong"); }
      } else {
        const inp=q$(".ans"); inp.classList.add("wrong");
        setTimeout(()=>{ inp.classList.remove("wrong"); inp.value=""; inp.focus({preventScroll:true}); },350);
      }
      q$(".explain-slot").innerHTML=`<div class="explain retry"><div class="verdict no">Chưa đúng, thử lại.</div></div>`;
      return;
    }
    R.done=true;

    if(q.kind==="mc"){
      el.querySelectorAll(".opt").forEach(b=>{ b.disabled=true; const k=+b.dataset.k; if(k===q.answer) b.classList.add("right"); else if(k===val) b.classList.add("wrong"); });
    } else {
      const inp=q$(".ans"); inp.readOnly=true; inp.classList.add(ok?"right":"wrong"); q$(".typein .btn").disabled=true;
    }
    if(ok){ R.score++; if(R.attempts>0) R.missed.push({q,given:null,retried:true}); }
    else R.missed.push({q,given:q.kind==="mc"?null:val});
    const t=q.ref?byId[q.ref]:null;
    const ansTxt=q.kind==="input"?q.accept.join(" / "):q.plain;
    q$(".explain-slot").innerHTML=`<div class="explain"><div class="verdict ${ok?'':'no'}">${ok?'Chính xác.':'Chưa đúng. Đáp án: “'+esc(ansTxt)+'”.'}</div>
     <p>${t?`<b>${t.vi}</b> (${t.en}). `:""}${q.expl}</p>${t&&t.tl?`<div class="track">${compact(t)}</div>`:""}
     <div class="acts"><button class="btn nextq">${R.i+1<R.qs.length?'Câu tiếp':'Xem kết quả'}</button>${t?`<button class="link" data-review="${t.id}">Xem lại lý thuyết</button>`:""}</div></div>`;
    const nx=q$(".nextq"); nx.onclick=()=>{ R.i++; renderQ(); }; nx.focus({preventScroll:true});
  }
  function result(){
    const R=P.run, n=R.qs.length;
    const msg=R.score>=9?"Rất chắc tay. Làm thêm vòng nữa để gặp câu mới.":R.score>=6?"Khá tốt. Xem lại các câu sai bên dưới.":"Cứ từ từ. Mở lại phần lý thuyết của các câu sai rồi làm lại nhé.";
    el.innerHTML=`<div class="result"><span class="lbl">${R.mode==="mix"?"Trộn ngẫu nhiên":cfg.types[R.mode].name}</span><div class="big">${R.score}<span>/</span>${n}</div><p>${msg}</p>
     <div class="acts"><button class="btn" data-mode="${R.mode}">Làm vòng mới</button><button class="link" data-menu>Chọn dạng khác</button></div>
     ${R.missed.length?`<div class="missed"><span class="lbl">Câu cần xem lại</span>${R.missed.map(m=>`<div class="mrow"><div class="mq">${m.q.prompt}</div><div class="ma"><span>${m.given?`<s>${esc(m.given)}</s> `:""}→ ${esc(m.q.kind==="input"?m.q.accept[0]:m.q.plain)}</span>${m.q.ref?`<button class="link sm" data-review="${m.q.ref}">${byId[m.q.ref].vi}</button>`:""}</div></div>`).join("")}</div>`:""}
    </div>`;
    P.run=null;
  }
  // ---- game ----
  const GM=cfg.game;
  const best=()=>{ try{ return +localStorage.getItem(GM.bestKey)||0; }catch(e){ return 0; } };
  function rush(){
    stopRush(); P.run=null;
    const G=P.G={score:0,streak:0,maxStreak:0,right:0,total:0,end:performance.now()+60000,last:null,missed:[],lock:false};
    el.innerHTML=`<div class="rush">
     <div class="qmeta"><button class="back" data-menu>← Dạng bài</button><span class="rtime">60s</span><div class="bar"><i class="rbar" style="width:100%"></i></div><span class="rscore">0 điểm</span></div>
     <div class="rstage"><span class="lbl">${GM.prompt}</span><div class="rword ${GM.sentence?"sentence":""}"></div><div class="rstreak"></div></div>
     <div class="ropts"></div>
     <p class="hint">Mẹo: bấm phím 1 đến 4. Sai bị trừ 3 giây. Đúng liên tiếp được cộng thêm điểm.</p></div>`;
    next(); G.raf=requestAnimationFrame(tick);
  }
  function stopRush(){ if(P.G){ P.G.over=true; if(P.G.raf) cancelAnimationFrame(P.G.raf); } }
  function tick(){
    const G=P.G; if(!G||G.over) return;
    const left=Math.max(0,G.end-performance.now()), tEl=q$(".rtime"), bEl=q$(".rbar");
    if(!tEl) return;
    tEl.textContent=Math.ceil(left/1000)+"s"; bEl.style.width=(left/600)+"%"; bEl.classList.toggle("low",left<10000);
    if(left<=0) return end();
    G.raf=requestAnimationFrame(tick);
  }
  function next(){
    const G=P.G; let w; do{ w=GM.items[Math.random()*GM.items.length|0]; }while(w===G.last&&GM.items.length>1);
    G.last=w; G.lock=false;
    const right=w[1][Math.random()*w[1].length|0];
    const opts=shuffle([right,...shuffle(GM.all.filter(c=>!w[1].includes(c))).slice(0,3)]);
    G.cur={w,right};
    const word=q$(".rword"); word.classList.remove("pop"); void word.offsetWidth; word.textContent=w[0]; word.classList.add("pop");
    q$(".ropts").innerHTML=opts.map((c,i)=>`<button class="ropt" data-c="${c}"><span class="key">${i+1}</span>${GM.label(c)}</button>`).join("");
    el.querySelectorAll(".ropt").forEach(b=>b.onclick=()=>pick(b.dataset.c));
  }
  function pick(c){
    const G=P.G; if(!G||G.over||G.lock) return; G.lock=true; G.total++;
    const {w,right}=G.cur, ok=w[1].includes(c);
    el.querySelectorAll(".ropt").forEach(b=>{ if(b.dataset.c===right) b.classList.add("right"); else if(b.dataset.c===c) b.classList.add("wrong"); });
    if(ok){ G.right++; G.streak++; G.maxStreak=Math.max(G.maxStreak,G.streak); G.score+=10+Math.min(G.streak-1,5)*2; }
    else { G.streak=0; G.end-=3000; G.missed.push(w); }
    q$(".rscore").textContent=G.score+" điểm";
    const st=q$(".rstreak"); st.textContent=G.streak>=2?`Chuỗi ${G.streak} ✓`:(ok?"":"−3 giây"); st.className="rstreak "+(ok?"up":"down");
    setTimeout(()=>{ if(P.G===G&&!G.over) next(); }, ok?260:1000);
  }
  function end(){
    const G=P.G; G.over=true; const b=best(), nb=G.score>b; if(nb){ try{ localStorage.setItem(GM.bestKey,G.score); }catch(e){} }
    const uniq=[...new Map(G.missed.map(w=>[w[0],w])).values()];
    el.innerHTML=`<div class="result"><span class="lbl">${GM.title} · hết giờ</span><div class="big">${G.score}<span>.</span></div>
     <p>${nb?"Kỷ lục mới của bạn.":`Kỷ lục: ${Math.max(b,G.score)} điểm.`} Đúng ${G.right}/${G.total}, chuỗi dài nhất ${G.maxStreak}.</p>
     <div class="acts"><button class="btn" data-mode="rush">Chơi lại</button><button class="link" data-menu>Chọn dạng khác</button></div>
     ${uniq.length?`<div class="missed"><span class="lbl">Cần nhớ</span>${uniq.map(w=>`<div class="mrow"><div class="mq"><b>${esc(w[0])}</b></div><div class="ma"><span>→ ${w[1].map(GM.name).join(" hoặc ")}</span>${w[2]?`<small>${w[2]}</small>`:""}</div></div>`).join("")}</div>`:""}
    </div>`;
  }
  P.key=e=>{
    if(P.G&&!P.G.over&&/^[1-4]$/.test(e.key)){ const b=el.querySelectorAll(".ropt")[+e.key-1]; if(b) pick(b.dataset.c); return; }
    if(P.run&&!P.run.done&&!e.target.matches("input")&&/^[1-4a-dA-D]$/.test(e.key)){ const i="1234".includes(e.key)?+e.key-1:"abcd".indexOf(e.key.toLowerCase()); const b=el.querySelector(`.opt[data-n="${i}"]`); if(b&&!b.disabled) b.click(); }
  };
  P.menu=menu;
  return P;
}


/* ---------- keyboard for the visible practice ---------- */
document.addEventListener("keydown",e=>{
  const p=PRACS.find(p=>{ const v=document.getElementById("view-"+p.view); return v&&!v.hidden; });
  if(p) p.key(e);
});
