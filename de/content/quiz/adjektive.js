/* de/content/quiz/adjektive.js: practice questions for
   Adjektivdeklination. Single exercise type: context sentences, type
   the correct adjective ending (just the ending, e.g. "e" or "en").
   Wrong answers can be retried (retry:true). */
(() => {
const FILL=[
 // Schwache Deklination
 ["Der klein___ (klein) Hund schläft auf dem Sofa.","klein + đuôi",["kleine"],"de-adj-schwach","Nominativ maskulin sau mạo từ xác định (der): tính từ -e."],
 ["Ich sehe den klein___ (klein) Hund im Garten.","klein + đuôi",["kleinen"],"de-adj-schwach","Akkusativ maskulin sau mạo từ xác định (den): tính từ -en."],
 ["Die neu___ (neu) Studentin kommt aus Vietnam.","neu + đuôi",["neue"],"de-adj-schwach","Nominativ feminin sau mạo từ xác định (die): tính từ -e."],
 ["Ich gebe dem alt___ (alt) Mann das Buch.","alt + đuôi",["alten"],"de-adj-schwach","Dativ sau mạo từ xác định (dem): tính từ luôn -en."],

 // Gemischte Deklination
 ["Ein klein___ (klein) Hund schläft auf dem Sofa.","klein + đuôi",["kleiner"],"de-adj-gemischt","Nominativ maskulin sau “ein” (không rõ giống): tính từ phải thêm -er."],
 ["Das ist ein gut___ (gut) Kind.","gut + đuôi",["gutes"],"de-adj-gemischt","Nominativ neutral sau “ein”: tính từ phải thêm -es."],
 ["Ich habe eine neu___ (neu) Kollegin kennengelernt.","neu + đuôi",["neue"],"de-adj-gemischt","Akkusativ feminin sau “eine”: tính từ -e, giống hệt schwach."],
 ["Kein gut___ (gut) Freund würde das tun.","gut + đuôi",["guter"],"de-adj-gemischt","Nominativ maskulin sau “kein” (nhóm ein-Wörter): tính từ thêm -er."],

 // Starke Deklination
 ["Ich trinke gern heiß___ (heiß) Tee.","heiß + đuôi",["heißen"],"de-adj-stark","Không có mạo từ, Akkusativ maskulin: tính từ mang đuôi -en (giống “den”)."],
 ["Gut___ (gut) Kaffee riecht wunderbar.","gut + đuôi",["Guter"],"de-adj-stark","Không có mạo từ, Nominativ maskulin: tính từ mang đuôi -er (giống “der”)."],
 ["Viele jung___ (jung) Leute lernen heute Deutsch.","jung + đuôi",["junge"],"de-adj-stark","Sau “viele”, Nominativ số nhiều: tính từ -e (giống “die”)."],
 ["Mit frisch___ (frisch) Brot schmeckt das Frühstück besser.","frisch + đuôi",["frischem"],"de-adj-stark","Không có mạo từ, Dativ neutral: tính từ mang đuôi -em (giống “dem”)."],
];

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Câu ngữ cảnh, gõ đúng tính từ + đuôi"},
};
const POOL=[];
FILL.forEach(([s,v,acc,ref,ex])=>POOL.push({type:"fill",kind:"input",retry:true,prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Gõ cả tính từ kèm đuôi đúng.`,accept:acc,plain:acc[0],ref,expl:ex}));

const RUSH=[
 ["der/die/das + tính từ",["de-adj-schwach"]],["Nom. → -e (schwach)",["de-adj-schwach"]],
 ["ein/eine/kein + tính từ",["de-adj-gemischt"]],["Nom. mask. → -er (gemischt)",["de-adj-gemischt"]],
 ["không có mạo từ + tính từ",["de-adj-stark"]],["viele/einige + tính từ",["de-adj-stark"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["adjektive"] = { pool: POOL, types: TYPES, game: {title:"Welche Deklination?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng kiểu chia tính từ",prompt:"Dấu hiệu này thuộc kiểu chia nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"adjRushBest"} };
})();
