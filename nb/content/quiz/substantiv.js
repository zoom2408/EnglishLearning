/* nb/content/quiz/substantiv.js: practice questions for Substantiv &
   Artikler. Single exercise type: context sentences, type the
   correctly inflected noun. Wrong answers can be retried
   (retry:true). */
(() => {
const FILL=[
 // Hankjønn
 ["Jeg har en bil. ___ (bil) er rød.","bil",["Bilen"],"nb-sub-hankjonn","Bestemt form hankjønn: thêm -en."],
 ["Jeg ser mange ___ (bil) på veien.","bil",["biler"],"nb-sub-hankjonn","Flertall ubestemt hankjønn: thêm -er."],
 ["___ (bil) på parkeringsplassen er nye.","bil",["Bilene"],"nb-sub-hankjonn","Flertall bestemt: thêm -ene."],
 ["Kan du se en ___ (bil) der borte?","bil",["bil"],"nb-sub-hankjonn","Ubestemt số ít: en + danh từ nguyên dạng."],

 // Hunkjønn
 ["Jeg leser ei bok. ___ (bok) er spennende.","bok",["Boka"],"nb-sub-hunkjonn","Bestemt form hunkjønn: thêm -a."],
 ["Biblioteket har mange ___ (bok) om Norge.","bok",["bøker"],"nb-sub-hunkjonn","Flertall ubestemt: bøker (nguyên âm o→ø)."],
 ["___ (bok) på hyllen er mine.","bok",["Bøkene"],"nb-sub-hunkjonn","Flertall bestemt: bøkene."],
 ["Jeg kjøpte ei ny ___ (bok) i går.","bok",["bok"],"nb-sub-hunkjonn","Ubestemt số ít: ei + danh từ nguyên dạng."],

 // Intetkjønn
 ["Jeg kjøpte et hus. ___ (hus) er stort.","hus",["Huset"],"nb-sub-intetkjonn","Bestemt form intetkjønn: thêm -et."],
 ["Det står to ___ (hus) på gaten.","hus",["hus"],"nb-sub-intetkjonn","Flertall ubestemt et-ord: KHÔNG thêm đuôi."],
 ["___ (hus) i denne gaten er gamle.","hus",["Husene"],"nb-sub-intetkjonn","Flertall bestemt: thêm -ene."],
 ["Vi skal bygge et nytt ___ (hus) neste år.","hus",["hus"],"nb-sub-intetkjonn","Ubestemt số ít: et + danh từ nguyên dạng."],
];

const TYPES={
 fill:{name:"Fyll inn",desc:"Câu ngữ cảnh, gõ đúng dạng danh từ"},
};
const POOL=[];
FILL.forEach(([s,v,acc,ref,ex])=>POOL.push({type:"fill",kind:"input",retry:true,prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Gõ đúng dạng của danh từ.`,accept:acc,plain:acc[0],ref,expl:ex}));

const RUSH=[
 ["en + danh từ",["nb-sub-hankjonn"]],["-en (bestemt)",["nb-sub-hankjonn"]],["-er/-ene (flertall)",["nb-sub-hankjonn"]],
 ["ei + danh từ",["nb-sub-hunkjonn"]],["-a (bestemt)",["nb-sub-hunkjonn"]],
 ["et + danh từ",["nb-sub-intetkjonn"]],["-et (bestemt)",["nb-sub-intetkjonn"]],["flertall ubestemt không đuôi",["nb-sub-intetkjonn"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["substantiv"] = { pool: POOL, types: TYPES, game: {title:"Hvilket kjønn?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng giống của danh từ",prompt:"Dấu hiệu này thuộc giống nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"subRushBest"} };
})();
