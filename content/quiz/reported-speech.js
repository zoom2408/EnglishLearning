/* content/quiz/reported.js: practice questions and game for this module.
   mcQ(type, prompt, hint, right, [wrong…], lessonId, explanation)
   inQ(type, prompt, hint, [accepted answers], lessonId, explanation) */
(() => {
// Reported (60) — BANK keyed by lesson ref; each item carries its own
// `kind` (conv / shift / words / verbs) since this module mixes several
// question builders, unlike the single-type "fill" banks in de/nb.
const BANK = {
 "r-backshift": [
  {kind:"conv",a:"“I am tired,” she said.",right:"She said she was tired.",wrong:["She said she is tired.","She said I was tired.","She told she was tired."],expl:"am lùi thành was, I thành she."},
  {kind:"conv",a:"“I have finished my homework,” Nam said.",right:"Nam said he had finished his homework.",wrong:["Nam said he has finished his homework.","Nam said he finished my homework.","Nam said he had finish his homework."],expl:"have finished thành had finished; my thành his."},
  {kind:"shift",q:"“I am happy.” → She said she ___ happy.",accept:["was"],expl:"am → was."},
  {kind:"shift",q:"“I'm watching TV.” → He said he ___ TV.",accept:["was watching"],expl:"am watching → was watching."},
  {kind:"shift",q:"“I have lost my key.” → She said she ___ her key.",accept:["had lost"],expl:"have lost → had lost."},
  {kind:"shift",q:"“I will help.” → He said he ___ help.",accept:["would"],expl:"will → would."},
  {kind:"shift",q:"“I can drive.” → She said she ___ drive.",accept:["could"],expl:"can → could."},
  {kind:"shift",q:"“I bought a car.” → He said he ___ a car.",accept:["had bought"],expl:"Quá khứ đơn → quá khứ hoàn thành."},
  {kind:"shift",q:"“I must leave.” → She said she ___ leave.",accept:["had to"],expl:"must (bắt buộc) → had to."},
  {kind:"shift",q:"“We are moving house.” → They said they ___ house.",accept:["were moving"],expl:"are moving → were moving."},
  {kind:"shift",q:"“I may be late.” → He said he ___ be late.",accept:["might"],expl:"may → might."},
 ],
 "r-words": [
  {kind:"conv",a:"“I saw her yesterday,” he said.",right:"He said he had seen her the day before.",wrong:["He said he saw her yesterday.","He said he had seen her yesterday.","He said he has seen her the day before."],expl:"saw thành had seen; yesterday thành the day before."},
  {kind:"words",a:"now",right:"then",wrong:["there","that time ago","the next day"]},
  {kind:"words",a:"today",right:"that day",wrong:["the day before","yesterday","this day"]},
  {kind:"words",a:"yesterday",right:"the day before",wrong:["the next day","that day","today"]},
  {kind:"words",a:"tomorrow",right:"the next day",wrong:["the day before","that day","tomorrow"]},
  {kind:"words",a:"here",right:"there",wrong:["that","then","those"]},
  {kind:"words",a:"this",right:"that",wrong:["those","these","there"]},
  {kind:"words",a:"these",right:"those",wrong:["that","this","there"]},
  {kind:"words",a:"two days ago",right:"two days before",wrong:["two days later","the day before","two days next"]},
  {kind:"words",a:"last week",right:"the week before",wrong:["the following week","that week","next week"]},
  {kind:"words",a:"next month",right:"the following month",wrong:["the month before","that month","last month"]},
 ],
 "r-statements": [
  {kind:"conv",a:"“I will call you,” he said to me.",right:"He told me he would call me.",wrong:["He told me he will call you.","He said me he would call me.","He told me he would call you."],expl:"will thành would; you thành me; said to me thành told me."},
  {kind:"verbs",q:"She ___ me that she was leaving.",right:"told",wrong:["said","asked","spoke"],expl:"tell + người."},
  {kind:"conv",a:"“I live in Hanoi,” she said.",right:"She said she lived in Hanoi.",wrong:["She said she lives in Hanoi.","She said I lived in Hanoi.","She told she lived in Hanoi."],expl:"say (that): không cần tân ngữ người nghe; lùi thì."},
  {kind:"conv",a:"“I'm a teacher,” he told her.",right:"He told her he was a teacher.",wrong:["He told her he is a teacher.","He said her he was a teacher.","He told she was a teacher."],expl:"tell + O + (that): cần tân ngữ người nghe."},
  {kind:"verbs",q:"She ___ me that the train was late.",right:"told",wrong:["said","spoke","talked"],expl:"tell + O + that: 'said' không theo sau tân ngữ trực tiếp."},
 ],
 "r-yesno": [
  {kind:"conv",a:"“Are you hungry?” she asked.",right:"She asked if I was hungry.",wrong:["She asked was I hungry.","She asked if I am hungry.","She asked if was I hungry."],expl:"if + S + V, lùi thì."},
  {kind:"conv",a:"“Can you help me?” she asked.",right:"She asked if I could help her.",wrong:["She asked if I can help her.","She asked could I help her.","She asked if I could help me."],expl:"can thành could; me thành her."},
  {kind:"conv",a:"“Do you like coffee?” he asked.",right:"He asked if I liked coffee.",wrong:["He asked do I like coffee.","He asked if I like coffee.","He asked if did I like coffee."],expl:"asked if + S + V (lùi thì), bỏ trợ động từ do."},
  {kind:"conv",a:"“Have you finished?” she asked.",right:"She asked if I had finished.",wrong:["She asked have I finished.","She asked if I have finished.","She asked if had I finished."],expl:"have finished → had finished; trật tự câu kể, không phải câu hỏi."},
  {kind:"conv",a:"“Will you come to the party?” he asked.",right:"He asked if I would come to the party.",wrong:["He asked will I come to the party.","He asked if I will come to the party.","He asked whether would I come."],expl:"will → would; asked if/whether + S + would."},
 ],
 "r-wh": [
  {kind:"conv",a:"“Where do you live?” he asked.",right:"He asked where I lived.",wrong:["He asked where did I live.","He asked where I live.","He asked where do I live."],expl:"Bỏ do, chia lived."},
  {kind:"conv",a:"“What are you doing?” he asked.",right:"He asked what I was doing.",wrong:["He asked what was I doing.","He asked what I am doing.","He asked what I did."],expl:"are doing thành was doing, trật tự câu kể."},
  {kind:"conv",a:"“Why are you crying?” she asked.",right:"She asked why I was crying.",wrong:["She asked why was I crying.","She asked why I am crying.","She asked why did I cry."],expl:"Giữ trật tự câu kể sau từ hỏi, lùi thì."},
  {kind:"conv",a:"“How old are you?” he asked.",right:"He asked how old I was.",wrong:["He asked how old was I.","He asked how old am I.","He asked how old I am."],expl:"Trật tự câu kể: Wh + S + V."},
  {kind:"conv",a:"“What time does the train leave?” she asked.",right:"She asked what time the train left.",wrong:["She asked what time did the train leave.","She asked what time the train leaves.","She asked what time does the train leave."],expl:"Bỏ does, chia động từ ở quá khứ: left."},
 ],
 "r-commands": [
  {kind:"conv",a:"“Sit down,” the teacher said to us.",right:"The teacher told us to sit down.",wrong:["The teacher told us sit down.","The teacher said us to sit down.","The teacher told us that sit down."],expl:"told + O + to V."},
  {kind:"conv",a:"“Don't be late,” mum said to me.",right:"Mum told me not to be late.",wrong:["Mum told me don't be late.","Mum told me to not late.","Mum said me not to be late."],expl:"Phủ định: not to V."},
  {kind:"conv",a:"“Please help me,” she said to him.",right:"She asked him to help her.",wrong:["She asked him help her.","She said him to help her.","She told him please help her."],expl:"Lời yêu cầu lịch sự: asked + O + to V."},
  {kind:"conv",a:"“Turn off the lights,” the manager said to the staff.",right:"The manager told the staff to turn off the lights.",wrong:["The manager told the staff turn off the lights.","The manager said the staff to turn off the lights.","The manager told to the staff to turn off the lights."],expl:"told + O + to V."},
  {kind:"conv",a:"“Don't touch that,” the guide said to the tourists.",right:"The guide told the tourists not to touch that.",wrong:["The guide told the tourists don't touch that.","The guide told the tourists to not touch that.","The guide said the tourists not to touch that."],expl:"Phủ định mệnh lệnh: not to V."},
 ],
 "r-verbs": [
  {kind:"verbs",q:"“I'll definitely call you,” he said. → He ___ to call me.",right:"promised",wrong:["suggested","denied","advised"],expl:"promise + to V: hứa."},
  {kind:"verbs",q:"“You should rest,” the doctor said. → The doctor ___ me to rest.",right:"advised",wrong:["suggested","promised","admitted"],expl:"advise + O + to V."},
  {kind:"verbs",q:"“Let's go to the cinema,” she said. → She ___ going to the cinema.",right:"suggested",wrong:["advised","offered","told"],expl:"suggest + V-ing."},
  {kind:"verbs",q:"“I didn't break it!” he said. → He ___ breaking it.",right:"denied",wrong:["refused","apologised","admitted"],expl:"deny + V-ing: chối."},
  {kind:"verbs",q:"“I'm sorry I'm late,” she said. → She apologised ___ late.",right:"for being",wrong:["to be","being","for be"],expl:"apologise for + V-ing."},
  {kind:"verbs",q:"“Can I carry your bag?” he said. → He ___ to carry my bag.",right:"offered",wrong:["suggested","told","admitted"],expl:"offer + to V: đề nghị giúp."},
  {kind:"verbs",q:"“Don't forget to lock the door,” mum said. → Mum ___ me to lock the door.",right:"reminded",wrong:["suggested","denied","apologised"],expl:"remind + O + to V."},
  {kind:"verbs",q:"“I won't do it,” he said. → He ___ to do it.",right:"refused",wrong:["denied","suggested","admitted"],expl:"refuse + to V: từ chối."},
  {kind:"verbs",q:"“Yes, I took the money,” she said. → She ___ taking the money.",right:"admitted",wrong:["refused","promised","offered"],expl:"admit + V-ing: thừa nhận."},
  {kind:"verbs",q:"“I'm sorry I broke the vase,” he said. → He ___ breaking the vase.",right:"apologised for",wrong:["denied","admitted","insisted"],expl:"apologise for + V-ing: xin lỗi vì đã làm gì."},
  {kind:"verbs",q:"“You must come to my party!” she said. → She ___ me to come to her party.",right:"invited",wrong:["suggested","insisted","warned"],expl:"invite + O + to V: mời."},
  {kind:"verbs",q:"“Be careful, the floor is wet,” he said. → He ___ me that the floor was wet.",right:"warned",wrong:["advised","suggested","admitted"],expl:"warn + O + that: cảnh báo."},
  {kind:"verbs",q:"“I really think we should leave now,” she said. → She ___ that we leave now.",right:"insisted",wrong:["suggested","advised","denied"],expl:"insist + that: khẳng định, nhấn mạnh."},
 ],
 "r-nochange": [
  {kind:"shift",q:"“The Earth goes round the Sun.” → The teacher said the Earth ___ round the Sun.",accept:["goes","went"],expl:"Sự thật hiển nhiên có thể giữ nguyên hiện tại."},
  {kind:"shift",q:"“Water boils at 100°C.” → The teacher said water ___ at 100°C.",accept:["boils","boiled"],expl:"Sự thật khoa học luôn đúng: có thể giữ nguyên hiện tại."},
  {kind:"shift",q:"“I go to the gym every day.” → He said he ___ to the gym every day.",accept:["goes","went"],expl:"Thói quen vẫn đúng ở hiện tại: có thể giữ nguyên."},
  {kind:"conv",a:"“The meeting is at 5 pm,” she said just now.",right:"She says the meeting is at 5 pm.",wrong:["She said the meeting was at 5 pm.","She says the meeting was at 5 pm.","She said the meeting is at 5 pm yesterday."],expl:"Tường thuật ngay sau khi nghe (reporting verb ở hiện tại): không cần lùi thì."},
  {kind:"conv",a:"“I love this song,” my sister said.",right:"My sister said she loves this song.",wrong:["My sister said she loved this song.","My sister says she loved this song.","My sister told she loves this song."],expl:"Điều vẫn còn đúng ở hiện tại có thể giữ nguyên thì, dù động từ tường thuật ở quá khứ."},
 ],
};

const RTYPES={conv:{name:"Chuyển sang gián tiếp",desc:"Câu kể, câu hỏi, mệnh lệnh"},shift:{name:"Lùi thì",desc:"Tự gõ động từ sau khi lùi thì"},words:{name:"Đổi thời gian, nơi chốn",desc:"today, tomorrow, here, this…"},verbs:{name:"Động từ tường thuật",desc:"promise, advise, suggest, deny…"}};

const RPOOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => {
 if (it.kind === "conv") RPOOL.push(mcQ("conv",ask("Chuyển sang câu gián tiếp",it.a),"Chọn câu tường thuật đúng.",it.right,it.wrong,ref,it.expl));
 else if (it.kind === "shift") RPOOL.push(inQ("shift",fmt(it.q),"Gõ dạng động từ sau khi lùi thì.",it.accept,ref,it.expl));
 else if (it.kind === "words") RPOOL.push(mcQ("words",`<span class="ask">Đổi sang câu gián tiếp</span><span class="mono big">${esc(it.a)}</span> <span class="arrow">→</span> <span class="blank"></span>`,"Chọn cách đổi từ chỉ thời gian, nơi chốn.",it.right,it.wrong,ref,`${it.a} đổi thành ${it.right}.`,true));
 else if (it.kind === "verbs") RPOOL.push(mcQ("verbs",fmt(it.q),"Chọn động từ tường thuật phù hợp.",it.right,it.wrong,ref,it.expl,true));
}));

const RRUSH=[["am / is",["was"]],["are",["were"]],["will",["would"]],["can",["could"]],["may",["might"]],["must",["had to"]],["have done",["had done"]],["did",["had done"]],["is doing",["was doing"]],["shall",["should"]],["today",["that day"]],["tomorrow",["the next day"]],["yesterday",["the day before"]],["now",["then"]],["here",["there"]],["this",["that"]],["these",["those"]],["ago",["before"]],["next week",["the following week"]],["last week",["the week before"]]];
const RALL=[...new Set(RRUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["reported"] = { pool: RPOOL, types: RTYPES, game: {title:"Lùi một bước",desc:"60 giây. Thấy từ trong lời nói trực tiếp, chọn dạng gián tiếp đúng",prompt:"Chuyển sang câu gián tiếp thành gì?",items:RRUSH,all:RALL,label:c=>`<span class="tl-vi mono">${esc(c)}</span>`,name:c=>c,bestKey:"rrushBest"} };
})();
