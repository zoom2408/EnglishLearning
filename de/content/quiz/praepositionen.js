/* de/content/quiz/praepositionen.js: practice questions for
   Präpositionen. Single exercise type: context sentences, type the
   correctly declined noun phrase. Wrong answers can be retried
   (retry:true). */
(() => {
const FILL=[
 // Akkusativ-Präpositionen
 ["Das Geschenk ist für ___ (mein Bruder).","mein Bruder",["meinen Bruder"],"de-prep-akk","für luôn đòi Akkusativ; giống đực: mein → meinen."],
 ["Wir laufen durch ___ (der Park).","der Park",["den Park"],"de-prep-akk","durch luôn đòi Akkusativ; giống đực: der → den."],
 ["Ich komme ohne ___ (meine Schwester).","meine Schwester",["meine Schwester"],"de-prep-akk","ohne đòi Akkusativ; giống cái không đổi dạng."],
 ["Sie bleibt bis ___ (nächste Woche) hier.","nächste Woche",["nächste Woche"],"de-prep-akk","bis đòi Akkusativ; giống cái/thời gian không đổi dạng."],

 // Dativ-Präpositionen
 ["Wir fahren mit ___ (der Zug) nach München.","der Zug",["dem Zug"],"de-prep-dat","mit luôn đòi Dativ; giống đực: der → dem."],
 ["Nach ___ (die Arbeit) gehe ich ins Fitnessstudio.","die Arbeit",["der Arbeit"],"de-prep-dat","nach đòi Dativ; giống cái: die → der."],
 ["Ich wohne bei ___ (meine Eltern).","meine Eltern",["meinen Eltern"],"de-prep-dat","bei đòi Dativ; số nhiều thêm -n: meine → meinen Eltern."],
 ["Das Geschenk ist von ___ (mein Freund).","mein Freund",["meinem Freund"],"de-prep-dat","von đòi Dativ; giống đực: mein → meinem."],

 // Wechselpräpositionen
 ["Ich lege das Buch in ___ (die Tasche).","die Tasche",["die Tasche"],"de-prep-wechsel","Chuyển động có đích đến (Wohin?): Akkusativ, die không đổi (feminin)."],
 ["Das Buch liegt in ___ (die Tasche).","die Tasche",["der Tasche"],"de-prep-wechsel","Vị trí tĩnh (Wo?): Dativ, giống cái die → der."],
 ["Er hängt das Bild an ___ (die Wand).","die Wand",["die Wand"],"de-prep-wechsel","Chuyển động (hängen = treo lên): Wohin? → Akkusativ."],
 ["Das Bild hängt an ___ (die Wand).","die Wand",["der Wand"],"de-prep-wechsel","Vị trí tĩnh (đã treo sẵn): Wo? → Dativ."],

 // Genitiv-Präpositionen
 ["Wegen ___ (das Wetter) bleiben wir zu Hause.","das Wetter",["des Wetters"],"de-prep-gen","wegen đòi Genitiv; giống trung: das → des, thêm -s."],
 ["Trotz ___ (der Regen) gehen wir spazieren.","der Regen",["des Regens"],"de-prep-gen","trotz đòi Genitiv; giống đực: der → des, thêm -s."],
 ["Während ___ (die Reise) haben wir viele Fotos gemacht.","die Reise",["der Reise"],"de-prep-gen","während đòi Genitiv; giống cái: die → der."],
 ["Statt ___ (ein Auto) kaufen wir ein Fahrrad.","ein Auto",["eines Autos"],"de-prep-gen","statt đòi Genitiv; giống trung: ein → eines, thêm -s."],
];

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Câu ngữ cảnh, gõ đúng mạo từ sau giới từ"},
};
const POOL=[];
FILL.forEach(([s,v,acc,ref,ex])=>POOL.push({type:"fill",kind:"input",retry:true,prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Gõ đúng cách sau giới từ.`,accept:acc,plain:acc[0],ref,expl:ex}));

const RUSH=[
 ["für / durch / ohne / gegen / um / bis",["de-prep-akk"]],
 ["mit / nach / bei / von / zu / aus / seit",["de-prep-dat"]],
 ["Wohin? (chuyển động)",["de-prep-wechsel"]],["Wo? (vị trí tĩnh)",["de-prep-wechsel"]],["an / auf / in / unter / vor / zwischen",["de-prep-wechsel"]],
 ["wegen / trotz / während / statt",["de-prep-gen"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["praepositionen"] = { pool: POOL, types: TYPES, game: {title:"Welcher Fall?",desc:"60 giây. Thấy giới từ này, chọn đúng cách nó đòi hỏi",prompt:"Giới từ này đòi cách nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"prepRushBest"} };
})();
