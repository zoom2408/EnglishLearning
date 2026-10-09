/* nb/content/quiz/topikalisering.js: practice questions for
   Topikalisering & Betoning. Single exercise type: build the
   correctly fronted/emphatic sentence. Wrong answers can be retried
   (retry:true). */
(() => {
const FILL=[
 // Forfelt for fokus
 ["I går ___ (jeg / lese) boka.","jeg / lese",["leste jeg"],"nb-emph-forfelt","“I går” ở vị trí 1, động từ (leste) ở vị trí 2, chủ ngữ (jeg) đẩy xuống sau."],
 ["I Oslo ___ (jeg / bo) i tre år.","jeg / bo",["har jeg bodd"],"nb-emph-forfelt","“I Oslo” ở vị trí 1, động từ vẫn vị trí 2."],
 ["Boka ___ (jeg / lese) i går.","jeg / lese",["leste jeg"],"nb-emph-forfelt","Tân ngữ “Boka” ở vị trí 1 để nhấn mạnh, động từ vẫn vị trí 2."],

 // Det som plassholder
 ["___ (mange gjester / i dag / komme).","mange gjester / i dag / komme",["Det kommer mange gjester i dag"],"nb-emph-det","Không có thành phần nào khác chiếm vị trí 1 nên dùng “det” làm chỗ trống."],
 ["___ (en gang / en konge / være).","en gang / en konge / være",["Det var en gang en konge"],"nb-emph-det","Mở đầu câu chuyện cổ tích: Det var en gang…"],
 ["___ (noen / på døren / banke).","noen / på døren / banke",["Det banker noen på døren"],"nb-emph-det","Giới thiệu điều gì mới, chủ ngữ thực (noen) đứng sau động từ."],

 // Ikke bare…men også…
 ["Ikke bare ___ (han / norsk / lære), men også fransk.","han / norsk / lære",["lærer han norsk"],"nb-emph-ikkebare","“Ikke bare” ở vị trí 1 nên động từ (lærer) đảo lên ngay sau."],
 ["Ikke bare ___ (bedriften / tjene / mer), men også kundene.","bedriften / tjene / mer",["tjener bedriften mer"],"nb-emph-ikkebare","Đảo ngữ sau “Ikke bare” ở vị trí 1: động từ (tjener) lên trước chủ ngữ."],

 // ikke vs ingen
 ["Jeg har ___ (ingen) bil.","ingen",["ingen"],"nb-emph-ikkeingen","Phủ định danh từ không xác định: ingen."],
 ["Været er ___ (ikke) fint i dag.","ikke",["ikke"],"nb-emph-ikkeingen","Phủ định tính từ: ikke."],
 ["Det er ___ (ingen) god idé.","ingen",["ingen"],"nb-emph-ikkeingen","Phủ định danh từ: ingen."],
 ["Jeg liker ___ (ikke) denne filmen.","ikke",["ikke"],"nb-emph-ikkeingen","Phủ định động từ (liker): ikke."],
];

const TYPES={
 fill:{name:"Fyll inn",desc:"Câu ngữ cảnh, sắp đúng trật tự từ nhấn mạnh hoặc chọn ikke/ingen"},
};
const POOL=[];
FILL.forEach(([s,v,acc,ref,ex])=>POOL.push({type:"fill",kind:"input",retry:true,prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Sắp đúng trật tự từ.`,accept:acc,plain:acc[0],ref,expl:ex}));

const RUSH=[
 ["Trạng từ/tân ngữ + V + S…",["nb-emph-forfelt"]],
 ["Det + V + chủ ngữ thực",["nb-emph-det"]],
 ["Ikke bare…, men også…",["nb-emph-ikkebare"]],
 ["ingen + danh từ",["nb-emph-ikkeingen"]],["ikke + động từ/tính từ",["nb-emph-ikkeingen"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["topikalisering"] = { pool: POOL, types: TYPES, game: {title:"Hvilken struktur?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng cấu trúc nhấn mạnh",prompt:"Dấu hiệu này thuộc cấu trúc nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"emphRushBest"} };
})();
