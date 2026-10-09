/* nb/content/quiz/preposisjoner.js: practice questions for
   Preposisjoner. Single exercise type: context sentences, type the
   correct preposition. Wrong answers can be retried (retry:true). */
(() => {
const FILL=[
 // Tid
 ["Jeg bodde i Bergen ___ (i) fem år.","i",["i"],"nb-prep-tid","Khoảng thời gian kéo dài: i."],
 ["Vi møtes ___ (om) en time.","om",["om"],"nb-prep-tid","Thời điểm trong tương lai gần: om."],
 ["Jeg flyttet hit ___ (for) tre år siden.","for",["for"],"nb-prep-tid","Mốc quá khứ cách đây: for … siden."],
 ["Jeg har møte ___ (på) mandag.","på",["på"],"nb-prep-tid","Thứ trong tuần cụ thể: på."],

 // Sted: stasjonær
 ["Jeg bor ___ (i) Oslo.","i",["i"],"nb-prep-sted-i","Trong thành phố: i."],
 ["Jeg er ___ (på) skolen nå.","på",["på"],"nb-prep-sted-i","Địa điểm công cộng: på."],
 ["Boka ligger ___ (på) bordet.","på",["på"],"nb-prep-sted-i","Bề mặt: på."],
 ["Jeg spiser middag ___ (hos) en venn i kveld.","hos",["hos"],"nb-prep-sted-i","Ở nhà/chỗ của ai: hos."],

 // Sted: retning
 ["Jeg reiser ___ (til) Bergen neste uke.","til",["til"],"nb-prep-sted-retning","Đích đến: til."],
 ["Hun kommer ___ (fra) Vietnam.","fra",["fra"],"nb-prep-sted-retning","Xuất xứ: fra."],
 ["Vi går ___ (mot) sentrum.","mot",["mot"],"nb-prep-sted-retning","Về phía: mot."],

 // Andre
 ["Jeg kommer ___ (med) bussen.","med",["med"],"nb-prep-andre","Phương tiện di chuyển: med."],
 ["Dette brevet er ___ (for) deg.","for",["for"],"nb-prep-andre","Dành cho ai: for."],
 ["Jeg drikker kaffe ___ (uten) melk.","uten",["uten"],"nb-prep-andre","Không có: uten."],
 ["Vi snakker ___ (om) været.","om",["om"],"nb-prep-andre","Chủ đề nói đến: om."],
];

const TYPES={
 fill:{name:"Fyll inn",desc:"Câu ngữ cảnh, gõ đúng giới từ"},
};
const POOL=[];
FILL.forEach(([s,v,acc,ref,ex])=>POOL.push({type:"fill",kind:"input",retry:true,prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Gõ đúng giới từ.`,accept:acc,plain:acc[0],ref,expl:ex}));

const RUSH=[
 ["i (khoảng thời gian)",["nb-prep-tid"]],["om (tương lai gần)",["nb-prep-tid"]],["for … siden",["nb-prep-tid"]],
 ["i (vị trí trong)",["nb-prep-sted-i"]],["på (bề mặt/công cộng)",["nb-prep-sted-i"]],["hos (chỗ ai)",["nb-prep-sted-i"]],
 ["til (đến)",["nb-prep-sted-retning"]],["fra (từ)",["nb-prep-sted-retning"]],
 ["med (phương tiện)",["nb-prep-andre"]],["om (chủ đề)",["nb-prep-andre"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["preposisjoner"] = { pool: POOL, types: TYPES, game: {title:"Hvilken preposisjon?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng giới từ",prompt:"Dấu hiệu này thuộc nhóm nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"prepRushBest"} };
})();
