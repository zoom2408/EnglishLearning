/* nb/content/quiz/passiv.js: practice questions for Passiv. Single
   exercise type: context sentences, type the correctly conjugated
   passive form. Wrong answers can be retried (retry:true). */
(() => {
const FILL=[
 // S-passiv
 ["Norsk ___ (snakke) i Norge.","snakke",["snakkes"],"nb-pass-s","Phát biểu chung chung: động từ thêm -s."],
 ["Søknader ___ (sende) innen 1. mai.","sende",["sendes"],"nb-pass-s","Quy định trang trọng: s-passiv."],
 ["Denne boka ___ (lese) av mange mennesker.","lese",["leses"],"nb-pass-s","S-passiv presens: leses."],

 // Bli-passiv
 ["Huset ___ (bygge) i 1990.","bygge",["ble bygget"],"nb-pass-bli","Preteritum bị động: ble + partisipp."],
 ["Bilen min ___ (stjele) i går.","stjele",["ble stjålet"],"nb-pass-bli","Một sự việc cụ thể, một lần: ble + partisipp."],
 ["Boka ___ (skrive) av en kjent forfatter.","skrive",["ble skrevet"],"nb-pass-bli","ble + partisipp (skrevet)."],
 ["Døren ___ (åpne) akkurat nå.","åpne",["blir åpnet"],"nb-pass-bli","Presens bị động, sự việc cụ thể: blir + partisipp."],

 // Passiv med modalverb
 ["Oppgaven ___ (måtte / gjøre) i dag.","måtte / gjøre",["må bli gjort"],"nb-pass-modal","Modal verb + bli + partisipp."],
 ["Skjemaet ___ (måtte / fylle) ut innen fredag.","måtte / fylle",["må bli fylt"],"nb-pass-modal","Modal verb + bli + partisipp."],
 ["Dette problemet ___ (kunne / løse) lett.","kunne / løse",["kan bli løst"],"nb-pass-modal","Modal verb + bli + partisipp."],

 // Alternativ med "man"
 ["I Sveits ___ (man / fire språk / snakke).","man / fire språk / snakke",["snakker man fire språk"],"nb-pass-man","Thay vì bị động, dùng man + động từ chia bình thường."],
 ["___ (man / si), at det blir kaldt i vinter.","man / si",["Man sier"],"nb-pass-man","man + động từ chia: cách tự nhiên hơn “Det sies”."],
];

const TYPES={
 fill:{name:"Fyll inn",desc:"Câu ngữ cảnh, gõ đúng dạng bị động hoặc câu với man"},
};
const POOL=[];
FILL.forEach(([s,v,acc,ref,ex])=>POOL.push({type:"fill",kind:"input",retry:true,prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Gõ cả cụm động từ bị động.`,accept:acc,plain:acc[0],ref,expl:ex}));

const RUSH=[
 ["Verb + -s",["nb-pass-s"]],
 ["blir/ble + partisipp",["nb-pass-bli"]],
 ["Modal + bli + partisipp",["nb-pass-modal"]],
 ["man + Verb",["nb-pass-man"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["passiv"] = { pool: POOL, types: TYPES, game: {title:"Hvilken passivform?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng dạng bị động",prompt:"Dấu hiệu này thuộc dạng nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"passRushBest"} };
})();
