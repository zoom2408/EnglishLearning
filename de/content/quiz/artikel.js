/* de/content/quiz/artikel.js: practice questions for Artikel & Nomen.
   Single exercise type: context sentences, type the correctly declined
   article + noun. Wrong answers can be retried (retry:true). */
(() => {
const FILL=[
 // Nominativ
 ["___ (der Lehrer) erklärt die Grammatik sehr gut.","der Lehrer",["Der Lehrer"],"de-art-nom","Chủ ngữ của câu: giữ nguyên Nominativ."],
 ["Hier ist ___ (die Frau), die gestern angerufen hat.","die Frau",["die Frau"],"de-art-nom","Sau “ist” (predicate), chỉ ra danh tính: Nominativ."],
 ["___ (das Kind) spielt im Garten.","das Kind",["Das Kind"],"de-art-nom","Chủ ngữ của câu: Nominativ."],
 ["Das sind ___ (die Leute), von denen ich erzählt habe.","die Leute",["die Leute"],"de-art-nom","Vị ngữ số nhiều sau “sind”: Nominativ."],

 // Akkusativ
 ["Ich sehe ___ (der Mann) jeden Tag im Park.","der Mann",["den Mann"],"de-art-akk","Tân ngữ trực tiếp, giống đực: der → den."],
 ["Wir kaufen ___ (ein Auto) für die Familie.","ein Auto",["ein Auto"],"de-art-akk","Giống trung (neutral) không đổi ở Akkusativ: ein → ein."],
 ["Das Geschenk ist für ___ (die Mutter).","die Mutter",["die Mutter"],"de-art-akk","“für” luôn đòi Akkusativ; giống cái (feminin) không đổi."],
 ["Siehst du ___ (die Kinder) da drüben?","die Kinder",["die Kinder"],"de-art-akk","Số nhiều không đổi ở Akkusativ."],

 // Dativ
 ["Ich gebe ___ (der Mann) das Buch.","der Mann",["dem Mann"],"de-art-dat","Tân ngữ gián tiếp, giống đực: der → dem."],
 ["Sie hilft ___ (die Frau) beim Einkaufen.","die Frau",["der Frau"],"de-art-dat","“helfen” đòi Dativ; giống cái: die → der."],
 ["Wir fahren mit ___ (der Zug) nach Berlin.","der Zug",["dem Zug"],"de-art-dat","“mit” luôn đòi Dativ; giống đực: der → dem."],
 ["Das Auto gehört ___ (die Kinder).","die Kinder",["den Kindern"],"de-art-dat","“gehören” đòi Dativ; số nhiều Dativ thêm -n: Kinder → Kindern."],

 // Genitiv
 ["Das ist das Auto ___ (der Lehrer).","der Lehrer",["des Lehrers"],"de-art-gen","Sở hữu, giống đực số ít: der → des, danh từ thêm -s."],
 ["Wegen ___ (das Wetter) bleiben wir zu Hause.","das Wetter",["des Wetters"],"de-art-gen","“wegen” đòi Genitiv; giống trung: das → des, danh từ thêm -s."],
 ["Das ist das Haus ___ (die Eltern).","die Eltern",["der Eltern"],"de-art-gen","Số nhiều ở Genitiv luôn là der, danh từ không thêm đuôi."],
 ["Trotz ___ (der Regen) gehen wir spazieren.","der Regen",["des Regens"],"de-art-gen","“trotz” đòi Genitiv; giống đực: der → des, danh từ thêm -s."],
];

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Câu ngữ cảnh, gõ đúng mạo từ + danh từ theo cách"},
};
const POOL=[];
FILL.forEach(([s,v,acc,ref,ex])=>POOL.push({type:"fill",kind:"input",retry:true,prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Gõ đúng mạo từ cho cách này.`,accept:acc,plain:acc[0],ref,expl:ex}));

const RUSH=[
 ["Wer? / Was? (chủ ngữ)",["de-art-nom"]],["Sau sein/werden",["de-art-nom"]],
 ["Wen? (tân ngữ trực tiếp)",["de-art-akk"]],["für / durch / ohne / gegen / um",["de-art-akk"]],
 ["Wem? (tân ngữ gián tiếp)",["de-art-dat"]],["mit / nach / bei / von / zu / aus / seit",["de-art-dat"]],["helfen / danken / gefallen / gehören",["de-art-dat"]],
 ["Wessen? (sở hữu)",["de-art-gen"]],["trotz / während / wegen / statt",["de-art-gen"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["artikel"] = { pool: POOL, types: TYPES, game: {title:"Welcher Fall?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng cách (Fall)",prompt:"Dấu hiệu này dùng cách nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"artRushBest"} };
})();
