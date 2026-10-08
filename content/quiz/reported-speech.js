/* content/quiz/reported.js: practice questions and game for this module.
   mcQ(type, prompt, hint, right, [wrong…], lessonId, explanation)
   inQ(type, prompt, hint, [accepted answers], lessonId, explanation) */
(() => {
// Reported (40)
const RPOOL=[];
[["“I am tired,” she said.","She said she was tired.",["She said she is tired.","She said I was tired.","She told she was tired."],"r-backshift","am lùi thành was, I thành she."],
 ["“I will call you,” he said to me.","He told me he would call me.",["He told me he will call you.","He said me he would call me.","He told me he would call you."],"r-statements","will thành would; you thành me; said to me thành told me."],
 ["“Are you hungry?” she asked.","She asked if I was hungry.",["She asked was I hungry.","She asked if I am hungry.","She asked if was I hungry."],"r-yesno","if + S + V, lùi thì."],
 ["“Where do you live?” he asked.","He asked where I lived.",["He asked where did I live.","He asked where I live.","He asked where do I live."],"r-wh","Bỏ do, chia lived."],
 ["“Sit down,” the teacher said to us.","The teacher told us to sit down.",["The teacher told us sit down.","The teacher said us to sit down.","The teacher told us that sit down."],"r-commands","told + O + to V."],
 ["“Don't be late,” mum said to me.","Mum told me not to be late.",["Mum told me don't be late.","Mum told me to not late.","Mum said me not to be late."],"r-commands","Phủ định: not to V."],
 ["“I have finished my homework,” Nam said.","Nam said he had finished his homework.",["Nam said he has finished his homework.","Nam said he finished my homework.","Nam said he had finish his homework."],"r-backshift","have finished thành had finished; my thành his."],
 ["“I saw her yesterday,” he said.","He said he had seen her the day before.",["He said he saw her yesterday.","He said he had seen her yesterday.","He said he has seen her the day before."],"r-words","saw thành had seen; yesterday thành the day before."],
 ["“Can you help me?” she asked.","She asked if I could help her.",["She asked if I can help her.","She asked could I help her.","She asked if I could help me."],"r-yesno","can thành could; me thành her."],
 ["“What are you doing?” he asked.","He asked what I was doing.",["He asked what was I doing.","He asked what I am doing.","He asked what I did."],"r-wh","are doing thành was doing, trật tự câu kể."],
].forEach(([a,r,w,ref,ex])=>RPOOL.push(mcQ("conv",ask("Chuyển sang câu gián tiếp",a),"Chọn câu tường thuật đúng.",r,w,ref,ex)));
[["“I am happy.” → She said she ___ happy.",["was"],"r-backshift","am → was."],
 ["“I'm watching TV.” → He said he ___ TV.",["was watching"],"r-backshift","am watching → was watching."],
 ["“I have lost my key.” → She said she ___ her key.",["had lost"],"r-backshift","have lost → had lost."],
 ["“I will help.” → He said he ___ help.",["would"],"r-backshift","will → would."],
 ["“I can drive.” → She said she ___ drive.",["could"],"r-backshift","can → could."],
 ["“I bought a car.” → He said he ___ a car.",["had bought"],"r-backshift","Quá khứ đơn → quá khứ hoàn thành."],
 ["“I must leave.” → She said she ___ leave.",["had to"],"r-backshift","must (bắt buộc) → had to."],
 ["“We are moving house.” → They said they ___ house.",["were moving"],"r-backshift","are moving → were moving."],
 ["“I may be late.” → He said he ___ be late.",["might"],"r-backshift","may → might."],
 ["“The Earth goes round the Sun.” → The teacher said the Earth ___ round the Sun.",["goes","went"],"r-nochange","Sự thật hiển nhiên có thể giữ nguyên hiện tại."],
].forEach(([s,acc,ref,ex])=>RPOOL.push(inQ("shift",fmt(s),"Gõ dạng động từ sau khi lùi thì.",acc,ref,ex)));
[["now","then",["there","that time ago","the next day"]],["today","that day",["the day before","yesterday","this day"]],["yesterday","the day before",["the next day","that day","today"]],["tomorrow","the next day",["the day before","that day","tomorrow"]],["here","there",["that","then","those"]],["this","that",["those","these","there"]],["these","those",["that","this","there"]],["two days ago","two days before",["two days later","the day before","two days next"]],["last week","the week before",["the following week","that week","next week"]],["next month","the following month",["the month before","that month","last month"]]]
 .forEach(([a,r,w])=>RPOOL.push(mcQ("words",`<span class="ask">Đổi sang câu gián tiếp</span><span class="mono big">${esc(a)}</span> <span class="arrow">→</span> <span class="blank"></span>`,"Chọn cách đổi từ chỉ thời gian, nơi chốn.",r,w,"r-words",`${a} đổi thành ${r}.`,true)));
[["“I'll definitely call you,” he said. → He ___ to call me.","promised",["suggested","denied","advised"],"r-verbs","promise + to V: hứa."],
 ["“You should rest,” the doctor said. → The doctor ___ me to rest.","advised",["suggested","promised","admitted"],"r-verbs","advise + O + to V."],
 ["“Let's go to the cinema,” she said. → She ___ going to the cinema.","suggested",["advised","offered","told"],"r-verbs","suggest + V-ing."],
 ["“I didn't break it!” he said. → He ___ breaking it.","denied",["refused","apologised","admitted"],"r-verbs","deny + V-ing: chối."],
 ["“I'm sorry I'm late,” she said. → She apologised ___ late.","for being",["to be","being","for be"],"r-verbs","apologise for + V-ing."],
 ["“Can I carry your bag?” he said. → He ___ to carry my bag.","offered",["suggested","told","admitted"],"r-verbs","offer + to V: đề nghị giúp."],
 ["“Don't forget to lock the door,” mum said. → Mum ___ me to lock the door.","reminded",["suggested","denied","apologised"],"r-verbs","remind + O + to V."],
 ["“I won't do it,” he said. → He ___ to do it.","refused",["denied","suggested","admitted"],"r-verbs","refuse + to V: từ chối."],
 ["“Yes, I took the money,” she said. → She ___ taking the money.","admitted",["refused","promised","offered"],"r-verbs","admit + V-ing: thừa nhận."],
 ["She ___ me that she was leaving.","told",["said","asked","spoke"],"r-statements","tell + người."],
].forEach(([s,r,w,ref,ex])=>RPOOL.push(mcQ("verbs",fmt(s),"Chọn động từ tường thuật phù hợp.",r,w,ref,ex,true)));
const RTYPES={conv:{name:"Chuyển sang gián tiếp",desc:"Câu kể, câu hỏi, mệnh lệnh"},shift:{name:"Lùi thì",desc:"Tự gõ động từ sau khi lùi thì"},words:{name:"Đổi thời gian, nơi chốn",desc:"today, tomorrow, here, this…"},verbs:{name:"Động từ tường thuật",desc:"promise, advise, suggest, deny…"}};
const RRUSH=[["am / is",["was"]],["are",["were"]],["will",["would"]],["can",["could"]],["may",["might"]],["must",["had to"]],["have done",["had done"]],["did",["had done"]],["is doing",["was doing"]],["shall",["should"]],["today",["that day"]],["tomorrow",["the next day"]],["yesterday",["the day before"]],["now",["then"]],["here",["there"]],["this",["that"]],["these",["those"]],["ago",["before"]],["next week",["the following week"]],["last week",["the week before"]]];
const RALL=[...new Set(RRUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["reported"] = { pool: RPOOL, types: RTYPES, game: {title:"Lùi một bước",desc:"60 giây. Thấy từ trong lời nói trực tiếp, chọn dạng gián tiếp đúng",prompt:"Chuyển sang câu gián tiếp thành gì?",items:RRUSH,all:RALL,label:c=>`<span class="tl-vi mono">${esc(c)}</span>`,name:c=>c,bestKey:"rrushBest"} };
})();
