/* nb/content/quiz/vanlige-feil.js: practice questions for Vanlige
   feil. Single exercise type: pick/produce the correct form in a
   classic confusion pair. Wrong answers can be retried (retry:true). */
(() => {
const FILL=[
 // BIFF-regelen
 ["Jeg vet at han ___ (ikke / komme) i dag.","ikke / komme",["ikke kommer"],"nb-feil-biff","Leddsetning (at): ikke đứng trước động từ."],
 ["Hun sa at hun ___ (ikke / ha) tid.","ikke / ha",["ikke hadde"],"nb-feil-biff","Leddsetning: ikke trước động từ (hadde)."],
 ["Vi gikk ut selv om det ___ (ikke / være) varmt.","ikke / være",["ikke var"],"nb-feil-biff","Leddsetning (selv om): ikke trước động từ."],

 // si/fortelle/snakke
 ["Kan du ___ (fortelle) meg om Norge?","fortelle",["fortelle"],"nb-feil-sifortelle","Kể cho ai nghe về điều gì: fortelle."],
 ["Hun ___ (si) at hun var syk.","si",["sa"],"nb-feil-sifortelle","Trích dẫn lời nói: si (quá khứ: sa)."],
 ["Vi ___ (snakke) om filmen i en time.","snakke",["snakket"],"nb-feil-sifortelle","Trò chuyện qua lại (om/med): snakke."],

 // i vs på
 ["Jeg bor ___ (i) Bergen.","i",["i"],"nb-feil-ipaa","Thành phố: i."],
 ["Jeg er ___ (på) jobb nå.","på",["på"],"nb-feil-ipaa","Địa điểm công cộng (nơi làm việc nói chung): på."],
 ["Hun studerer ___ (på) universitetet.","på",["på"],"nb-feil-ipaa","Trường đại học: på (địa điểm công cộng)."],

 // for…siden vs i
 ["Jeg flyttet hit ___ (for) tre år siden.","for",["for"],"nb-feil-forsiden","Mốc cách đây: for … siden."],
 ["Hun har bodd her ___ (i) fem år.","i",["i"],"nb-feil-forsiden","Khoảng thời gian kéo dài: i."],

 // Stor forbokstav
 ["Jeg leser en ___ (bok) om Norge.","bok",["bok"],"nb-feil-forbokstav","Danh từ thường giữa câu: viết thường (bok, không phải Bok)."],
 ["Vi bor i ___ (oslo), hovedstaden i Norge.","oslo",["Oslo"],"nb-feil-forbokstav","Tên riêng (thành phố): viết hoa."],
];

const TYPES={
 fill:{name:"Fyll inn",desc:"Phân biệt các cặp dễ nhầm trong tiếng Na Uy"},
};
const POOL=[];
FILL.forEach(([s,v,acc,ref,ex])=>POOL.push({type:"fill",kind:"input",retry:true,prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Gõ đúng dạng.`,accept:acc,plain:acc[0],ref,expl:ex}));

const RUSH=[
 ["ikke trước động từ (leddsetning)",["nb-feil-biff"]],
 ["si (trích dẫn)",["nb-feil-sifortelle"]],["fortelle (kể cho ai)",["nb-feil-sifortelle"]],["snakke (trò chuyện)",["nb-feil-sifortelle"]],
 ["i (quốc gia/thành phố)",["nb-feil-ipaa"]],["på (địa điểm công cộng)",["nb-feil-ipaa"]],
 ["for…siden (cách đây)",["nb-feil-forsiden"]],["i (khoảng kéo dài)",["nb-feil-forsiden"]],
 ["danh từ thường: viết thường",["nb-feil-forbokstav"]],["tên riêng: viết hoa",["nb-feil-forbokstav"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["vanlige-feil"] = { pool: POOL, types: TYPES, game: {title:"Hvilken feil?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng chủ đề lỗi hay gặp",prompt:"Dấu hiệu này thuộc chủ đề nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"feilRushBest"} };
})();
