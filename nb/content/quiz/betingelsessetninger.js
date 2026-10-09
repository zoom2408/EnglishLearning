/* nb/content/quiz/betingelsessetninger.js: practice questions for
   Betingelsessetninger. Single exercise type: context sentences, type
   the correctly conjugated verb. Wrong answers can be retried
   (retry:true). */
(() => {
const FILL=[
 // Type 1
 ["Hvis det ___ (regne) i morgen, blir vi hjemme.","regne",["regner"],"nb-kond-1","Điều kiện thực tế, có thể xảy ra: hvis + presens."],
 ["Hvis du ___ (studere) hardt, består du eksamen sikkert.","studere",["studerer"],"nb-kond-1","Điều kiện khả thi: hvis + presens."],
 ["Hvis man ___ (varme) vann, koker det.","varme",["varmer"],"nb-kond-1","Quy luật chung, cả hai vế đều presens."],
 ["Hvis jeg ___ (ha) tid, kommer jeg innom i morgen.","ha",["har"],"nb-kond-1","Điều kiện thực tế có khả năng xảy ra: har, không phải hadde."],

 // Type 2
 ["Hvis jeg ___ (være) rik, ville jeg reise jorden rundt.","være",["var"],"nb-kond-2","Giả định trái thực tế hiện tại: preteritum của være là var."],
 ["Hvis jeg hadde mer tid, ___ (jeg / lære) flere språk.","jeg / lære",["ville jeg lære"],"nb-kond-2","Mệnh đề chính dùng ville + infinitiv cho giả định hiện tại."],
 ["___ (du / kunne) hjelpe meg, hvis du har tid?","du / kunne",["Kunne du"],"nb-kond-2","Đề nghị lịch sự dùng preteritum trực tiếp: kunne."],
 ["Hvis jeg var deg, ___ (jeg / gjøre) ikke det.","jeg / gjøre",["ville jeg"],"nb-kond-2","Giả định trái thực tế hiện tại: ville + infinitiv."],

 // Type 3
 ["Hvis jeg ___ (vite) det, ville jeg ha reagert annerledes.","vite",["hadde visst"],"nb-kond-3","Giả định trái thực tế quá khứ: hvis + hadde + partisipp."],
 ["Hvis jeg hadde hatt mer tid, ___ (jeg / lese) mer.","jeg / lese",["ville jeg ha lest"],"nb-kond-3","Mệnh đề chính: ville ha + partisipp."],
 ["Hvis du hadde spurt meg, ___ (jeg / hjelpe) deg gjerne.","jeg / hjelpe",["ville jeg ha hjulpet"],"nb-kond-3","Mệnh đề chính: ville ha + partisipp (hjulpet)."],
 ["Hvis de ___ (dra) tidligere, ville de ikke ha mistet toget.","dra",["hadde dratt"],"nb-kond-3","Giả định trái thực tế quá khứ với động từ chuyển động: hadde dratt."],
];

const TYPES={
 fill:{name:"Fyll inn",desc:"Câu ngữ cảnh, gõ đúng dạng động từ điều kiện"},
};
const POOL=[];
FILL.forEach(([s,v,acc,ref,ex])=>POOL.push({type:"fill",kind:"input",retry:true,prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Gõ đúng dạng đã chia.`,accept:acc,plain:acc[0],ref,expl:ex}));

const RUSH=[
 ["hvis + presens",["nb-kond-1"]],["có thể xảy ra",["nb-kond-1"]],
 ["hvis + preteritum",["nb-kond-2"]],["ville",["nb-kond-2"]],["giả định hiện tại",["nb-kond-2"]],
 ["hvis + hadde + partisipp",["nb-kond-3"]],["giả định quá khứ",["nb-kond-3"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["betingelsessetninger"] = { pool: POOL, types: TYPES, game: {title:"Hvilken type?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng loại câu điều kiện",prompt:"Dấu hiệu này thuộc loại nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"kondRushBest"} };
})();
