/* =====================================================================
   pages/speaking.js
   Part 1 flashcards: flip, timer, topic filter, progress.
   Content: content/speaking/part1.js
   ===================================================================== */
const { FW, SPK } = GRAMMAR.speaking;
const FURI = GRAMMAR.speaking.FURI || {}, ROMA = GRAMMAR.speaking.ROMA || {};
/** text with furigana (if known) and optional romaji line */
const J = (t, ro) => (FURI[t] ? rb(esc(FURI[t])) : esc(t)) + (ro && ROMA[t] ? `<span class="ro">${esc(ROMA[t])}</span>` : "");
const spkEl=document.getElementById("speak");
const TOPICS=[...new Set(SPK.map(s=>s[0]))];
let S={topic:"all",deck:[],pos:0,flipped:false,done:new Set(),timer:null,cd:null,bell:null,cdMin:1,cdLeft:60};
try{ const m=+localStorage.getItem("spkCdMin"); if([1,2,3].includes(m)){ S.cdMin=m; S.cdLeft=m*60; } }catch(e){}
try{ S.done=new Set(JSON.parse(localStorage.getItem("spkDone")||"[]")); }catch(e){}
function saveDone(){ try{ localStorage.setItem("spkDone",JSON.stringify([...S.done])); }catch(e){} }
function buildDeck(){
  const idx=SPK.map((_,i)=>i).filter(i=>S.topic==="all"||SPK[i][0]===S.topic);
  S.deck=shuffle(idx); S.pos=0;
}
function renderSpeakShell(){
  spkEl.innerHTML=`
   <div class="sp-top">
     <div class="sp-intro"><span class="lbl">${esc(GRAMMAR.speaking.label||"IELTS · VSTEP · Part 1")}</span></div>
     <div class="sp-stats"><span class="pcount" id="spDone">0<small>/ ${SPK.length} đã luyện</small></span></div>
   </div>
   <div class="sp-bar">
     <label class="lbl" for="spTopic">Chủ đề</label>
     <select id="spTopic"><option value="all">Tất cả (${SPK.length})</option>${TOPICS.map(t=>`<option value="${esc(t)}">${esc(t)} (${SPK.filter(s=>s[0]===t).length})</option>`).join("")}</select>
     <button class="link sm" id="spShuffle">Xáo lại</button>
   </div>
   <div class="card" id="card"></div>
   <div class="sp-ctrl">
     <button class="link" id="spPrev">← Trước</button>
     <button class="btn" id="spFlip">Lật thẻ</button>
     <button class="btn ghost" id="spTimer"><span>Bắt đầu nói · 30s</span><i></i></button>
     <button class="link" id="spNext">Thẻ tiếp →</button>
     <div class="sp-cd" id="spCd" role="group" aria-label="Đếm ngược chuẩn bị">
       <div class="sp-cd-pre">${[1,2,3].map(m=>`<button type="button" data-m="${m}" aria-pressed="${m===S.cdMin}">${m} phút</button>`).join("")}</div>
       <output class="sp-cd-time" id="spCdTime" aria-live="off">00:00</output>
       <button class="btn ghost" id="spCdGo">Bắt đầu</button>
     </div>
   </div>
   <p class="hint">Phím tắt: Space để lật thẻ, ← → để chuyển thẻ.</p>
   <div class="sp-fw"><span class="lbl">${Object.keys(FW).length} khung trả lời dùng trong bộ thẻ</span><div class="fwgrid">${Object.entries(FW).map(([k,f])=>`<div class="fwi"><b>${J(f.name)}</b><span>${f.steps.join(" → ")}</span></div>`).join("")}</div></div>`;
  document.getElementById("spTopic").onchange=e=>{ S.topic=e.target.value; buildDeck(); renderCard(1); };
  document.getElementById("spShuffle").onclick=()=>{ buildDeck(); renderCard(1); };
  document.getElementById("spPrev").onclick=()=>move(-1);
  document.getElementById("spNext").onclick=()=>move(1);
  document.getElementById("spFlip").onclick=flip;
  document.getElementById("spTimer").onclick=toggleTimer;
  document.querySelectorAll("#spCd .sp-cd-pre button").forEach(b=>b.onclick=()=>{ stopCd(); S.cdMin=+b.dataset.m; S.cdLeft=S.cdMin*60; try{ localStorage.setItem("spkCdMin",S.cdMin); }catch(e){} drawCd(); });
  document.getElementById("spCdGo").onclick=()=>(S.cd||S.bell)?stopCd():startCd();
  enhanceSelects(spkEl);
  drawCd();
}
function updDone(){ const d=document.getElementById("spDone"); d.innerHTML=`${S.done.size}<small>/ ${SPK.length} đã luyện</small>`; }
function renderCard(dir){
  if(typeof stopSay==="function") stopSay();
  stopTimer(); stopCd();
  const i=S.deck[S.pos], [topic,q,fwk,tc,sample,note]=SPK[i], f=FW[fwk], t=tc?byId[TN[tc]]:null;
  S.flipped=false;
  const c=document.getElementById("card");
  c.className="card"+(dir?(dir>0?" in-next":" in-prev"):"");
  c.innerHTML=`<div class="inner">
    <div class="face front">
      <div class="fmeta"><span>${J(topic)}</span><span>${String(S.pos+1).padStart(2,"0")} / ${S.deck.length}</span></div>
      <div class="fq">${J(q,true)}${sayBtn(q)}</div>
      <div class="fmeta"><span>Khung gợi ý: ${J(f.name)}</span><button class="donebtn" id="spMark" aria-pressed="${S.done.has(i)}">${S.done.has(i)?"✓ Đã luyện":"Đánh dấu đã luyện"}</button></div>
    </div>
    <div class="face bk">
      <div class="fmeta"><span>${J(topic)}</span><span>${J(q)}</span></div>
      <div class="bgrid">
        <div><span class="lbl">Khung trả lời</span><ol class="steps">${f.steps.map((s,k)=>`<li><b>${J(f.name.split(" · ")[k])}</b><span>${s}</span></li>`).join("")}</ol>
          ${t?`<span class="lbl" style="margin-top:16px;display:block">Thì chính nên dùng</span><button class="chip tchip" data-review="${t.id}">${t.vi} · ${t.en}</button>`:`<span class="lbl" style="margin-top:16px;display:block">Lưu ý</span><p class="small">${esc(note||"Dùng would / I'd love to để nói điều mong muốn.")}</p>`}</div>
        <div><span class="lbl">Mẫu câu nên nói</span><ul class="pats">${f.pat.map(p=>`<li>${J(p,true)}</li>`).join("")}</ul></div>
      </div>
      <div class="sample"><span class="lbl">Câu trả lời mẫu</span><p>${J(sample,true)}${sayBtn(sample)}${sayBtn(sample, sample, true)}</p></div>
    </div></div>`;
  c.querySelector("#spMark").onclick=e=>{ e.stopPropagation(); S.done.has(i)?S.done.delete(i):S.done.add(i); saveDone(); updDone(); const b=e.currentTarget; b.setAttribute("aria-pressed",S.done.has(i)); b.textContent=S.done.has(i)?"✓ Đã luyện":"Đánh dấu đã luyện"; };
  c.querySelector(".front").onclick=flip;
  const tch=c.querySelector(".tchip"); if(tch) tch.onclick=e=>{ e.stopPropagation(); goLearn(tch.dataset.review); };
  document.getElementById("spFlip").textContent="Lật thẻ";
  updDone();
}
function flip(){
  S.flipped=!S.flipped;
  document.getElementById("card").classList.toggle("flipped",S.flipped);
  document.getElementById("spFlip").textContent=S.flipped?"Xem câu hỏi":"Lật thẻ";
  if(S.flipped){ stopTimer(); const i=S.deck[S.pos]; if(!S.done.has(i)){ S.done.add(i); saveDone(); updDone(); const b=document.getElementById("spMark"); b.setAttribute("aria-pressed","true"); b.textContent="✓ Đã luyện"; } }
}
function move(d){ S.pos=(S.pos+d+S.deck.length)%S.deck.length; renderCard(d); }
function toggleTimer(){ S.timer?stopTimer():startTimer(); }
function startTimer(){
  const b=document.getElementById("spTimer"), end=performance.now()+30000;
  b.classList.add("running");
  const step=()=>{ const left=Math.max(0,end-performance.now()); b.querySelector("span").textContent=left>0?`Đang nói · ${Math.ceil(left/1000)}s`:"Hết giờ · lật thẻ xem gợi ý"; b.querySelector("i").style.width=(left/300)+"%";
    if(left<=0){ S.timer=null; b.classList.remove("running"); b.classList.add("over"); return; } S.timer=requestAnimationFrame(step); };
  S.timer=requestAnimationFrame(step);
}
function stopTimer(){ if(S.timer) cancelAnimationFrame(S.timer); S.timer=null; const b=document.getElementById("spTimer"); if(b){ b.classList.remove("running","over"); b.querySelector("span").textContent="Bắt đầu nói · 30s"; b.querySelector("i").style.width="0"; } }
/* Countdown chuẩn bị: preset 1/2/3 phút, chuông khi hết giờ (Web Audio, không cần file âm thanh) */
let AC=null;
/* Âm báo: mỗi kiểu là một chu kỳ ngắn, lặp lại đến khi bấm "Tắt chuông" */
const tone=(t,d,f,type,vol,f2)=>{
  const o=AC.createOscillator(), g=AC.createGain();
  o.type=type; o.frequency.setValueAtTime(f,t); if(f2) o.frequency.linearRampToValueAtTime(f2,t+d);
  o.connect(g); g.connect(AC.destination);
  g.gain.setValueAtTime(0,t); g.gain.linearRampToValueAtTime(vol,t+.01); g.gain.setValueAtTime(vol,t+d-.02); g.gain.linearRampToValueAtTime(0,t+d);
  o.start(t); o.stop(t+d+.02);
};
const BEEP_GAP=1.3; /* giây giữa các chu kỳ */
function ring(){
  try{
    AC=AC||new (window.AudioContext||window.webkitAudioContext)(); if(AC.state==="suspended") AC.resume();
    { const t=AC.currentTime+0.05; for(let k=0;k<4;k++) tone(t+k*.2,.1,1000,"square",.22); }
  }catch(e){}
}
function drawCd(){
  const t=document.getElementById("spCdTime"), g=document.getElementById("spCdGo"); if(!t) return;
  t.textContent=String(Math.floor(S.cdLeft/60)).padStart(2,"0")+":"+String(S.cdLeft%60).padStart(2,"0");
  const box=document.getElementById("spCd"); box.classList.toggle("running",!!S.cd); box.classList.toggle("over",!!S.bell);
  g.textContent=S.cd?"Dừng lại":(S.bell?"Tắt chuông":"Bắt đầu");
  box.querySelectorAll(".sp-cd-pre button").forEach(b=>{ b.setAttribute("aria-pressed",+b.dataset.m===S.cdMin); b.disabled=!!(S.cd||S.bell); });
}
function startCd(){
  if(S.cdLeft===0) S.cdLeft=S.cdMin*60;
  try{ AC=AC||new (window.AudioContext||window.webkitAudioContext)(); if(AC.state==="suspended") AC.resume(); }catch(e){} /* mở khoá âm thanh bằng thao tác bấm */
  const end=performance.now()+S.cdLeft*1000;
  S.cd=setInterval(()=>{
    const left=Math.max(0,Math.ceil((end-performance.now())/1000));
    if(left!==S.cdLeft){ S.cdLeft=left; if(left===0){ clearInterval(S.cd); S.cd=null; ring(); S.bell=setInterval(ring,BEEP_GAP*1000); } drawCd(); }
  },200);
  drawCd();
}
function stopCd(){ if(S.cd) clearInterval(S.cd); if(S.bell) clearInterval(S.bell); S.cd=S.bell=null; S.cdLeft=S.cdMin*60; drawCd(); }
document.addEventListener("keydown",e=>{
  if(document.getElementById("view-speak").hidden||e.target.matches("input,select,textarea")) return;
  if(e.key===" "){ e.preventDefault(); flip(); }
  else if(e.key==="ArrowRight") move(1);
  else if(e.key==="ArrowLeft") move(-1);
});
renderSpeakShell(); buildDeck(); renderCard(0);
