/* nb/content/quiz/adjektiv.js: practice questions for Adjektiv.
   Single exercise type: context sentences, type the correctly
   inflected adjective. Wrong answers can be retried (retry:true). */
(() => {
const FILL=[
 // Ubestemt form
 ["Jeg har en ___ (stor) bil.","stor",["stor"],"nb-adj-ubestemt","En-ord ubestemt: tính từ giữ nguyên."],
 ["Dette er et ___ (stor) hus.","stor",["stort"],"nb-adj-ubestemt","Et-ord ubestemt: tính từ thêm -t."],
 ["Vi har ___ (fin) biler.","fin",["fine"],"nb-adj-ubestemt","Flertall: tính từ thêm -e."],
 ["Hun bor i en ___ (liten) leilighet.","liten",["liten"],"nb-adj-ubestemt","En-ord ubestemt: tính từ giữ nguyên (liten không đổi ở en-ord)."],

 // Bestemt form
 ["___ (stor) bilen er min.","stor",["Den store"],"nb-adj-bestemt","Bestemt en-ord: den + tính từ -e."],
 ["___ (stor) huset ligger der borte.","stor",["Det store"],"nb-adj-bestemt","Bestemt et-ord: det + tính từ -e."],
 ["___ (fin) husene er nye.","fin",["De fine"],"nb-adj-bestemt","Bestemt flertall: de + tính từ -e."],
 ["Jeg liker ___ (gammel) boka best.","gammel",["den gamle"],"nb-adj-bestemt","Bestemt ei/en-ord: den + tính từ -e."],

 // Komparasjon
 ["Oslo er ___ (stor) enn Bergen.","stor",["større"],"nb-adj-komparasjon","So sánh hơn: stor → større."],
 ["Oslo er ___ (stor) byen i Norge.","stor",["den største"],"nb-adj-komparasjon","So sánh nhất xác định: den største."],
 ["Dette er ___ (god) enn forrige gang.","god",["bedre"],"nb-adj-komparasjon","Bất quy tắc: god → bedre."],
 ["Dette er den ___ (dårlig) filmen jeg har sett.","dårlig",["verste"],"nb-adj-komparasjon","Bất quy tắc: dårlig → verst → den verste."],
];

const TYPES={
 fill:{name:"Fyll inn",desc:"Câu ngữ cảnh, gõ đúng dạng tính từ"},
};
const POOL=[];
FILL.forEach(([s,v,acc,ref,ex])=>POOL.push({type:"fill",kind:"input",retry:true,prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Gõ đúng dạng tính từ.`,accept:acc,plain:acc[0],ref,expl:ex}));

const RUSH=[
 ["et-ord + -t",["nb-adj-ubestemt"]],["flertall + -e",["nb-adj-ubestemt"]],
 ["den/det/de + tính từ -e",["nb-adj-bestemt"]],
 ["-ere (komparativ)",["nb-adj-komparasjon"]],["-est (superlativ)",["nb-adj-komparasjon"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["adjektiv"] = { pool: POOL, types: TYPES, game: {title:"Hvilken form?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng dạng tính từ",prompt:"Dấu hiệu này cần dạng nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"adjRushBest"} };
})();
