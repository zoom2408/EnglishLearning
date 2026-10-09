/* nb/content/quiz/indirekte-tale.js: practice questions for
   Indirekte tale. Single exercise type: transform direct speech into
   reported speech. Wrong answers can be retried (retry:true). */
(() => {
const FILL=[
 // Påstander
 ["Hun sa: „Jeg er trøtt.“ → Hun sa at hun ___ (være) trøtt.","være",["var"],"nb-ind-paastand","Lùi thì: er → var (vì “sa” ở quá khứ)."],
 ["Han sa: „Jeg har ikke tid.“ → Han sa at han ___ (ha) ikke tid.","ha",["hadde"],"nb-ind-paastand","Lùi thì: har → hadde."],
 ["De sa: „Vi kommer snart.“ → De sa at de ___ (komme) snart.","komme",["kom"],"nb-ind-paastand","Lùi thì: kommer → kom."],

 // Ja/Nei-spørsmål
 ["Hun spurte: „Kommer du i morgen?“ → Hun spurte ___ (jeg / komme) neste dag.","jeg / komme",["om jeg kom"],"nb-ind-janei","Câu hỏi có/không dùng om + lùi thì + đổi “i morgen”→“neste dag”."],
 ["Han spurte: „Har du tid?“ → Han spurte ___ (jeg / ha) tid.","jeg / ha",["om jeg hadde"],"nb-ind-janei","om + S + V (lùi thì)."],

 // Hv-spørsmål
 ["Han spurte: „Hvor bor du?“ → Han spurte ___ (jeg / bo).","jeg / bo",["hvor jeg bodde"],"nb-ind-hvsporsmaal","Giữ từ để hỏi (hvor), lùi thì: bor → bodde."],
 ["Hun spurte: „Hvorfor kommer du for sent?“ → Hun spurte ___ (jeg / komme) for sent.","jeg / komme",["hvorfor jeg kom"],"nb-ind-hvsporsmaal","Giữ từ để hỏi (hvorfor), lùi thì: kommer → kom."],

 // Oppfordringer
 ["Læreren sa: „Gjør leksene!“ → Læreren sa at vi ___ (gjøre) leksene.","gjøre",["skulle gjøre"],"nb-ind-oppfordring","Câu mệnh lệnh tường thuật: skulle + infinitiv."],
 ["Moren sa: „Vær stille!“ → Moren sa at barna ___ (være) stille.","være",["skulle være"],"nb-ind-oppfordring","skulle + infinitiv (være)."],
];

const TYPES={
 fill:{name:"Fyll inn",desc:"Chuyển câu trực tiếp sang câu tường thuật"},
};
const POOL=[];
FILL.forEach(([s,v,acc,ref,ex])=>POOL.push({type:"fill",kind:"input",retry:true,prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Gõ đúng dạng tường thuật.`,accept:acc,plain:acc[0],ref,expl:ex}));

const RUSH=[
 ["at + lùi thì",["nb-ind-paastand"]],
 ["om",["nb-ind-janei"]],["câu hỏi có/không",["nb-ind-janei"]],
 ["hvor/når/hva/hvorfor + lùi thì",["nb-ind-hvsporsmaal"]],
 ["skulle + infinitiv",["nb-ind-oppfordring"]],["câu mệnh lệnh tường thuật",["nb-ind-oppfordring"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["indirekte-tale"] = { pool: POOL, types: TYPES, game: {title:"Hvilken setningstype?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng loại câu tường thuật",prompt:"Dấu hiệu này thuộc loại nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"indRushBest"} };
})();
