/* de/content/quiz/relativsaetze.js: practice questions for
   Relativsätze. Single exercise type: build the relative clause with
   the correctly declined pronoun + verb-final order. Wrong answers
   can be retried (retry:true). */
(() => {
const FILL=[
 // Nominativ
 ["Der Mann, ___ (er / nebenan wohnen), ist mein Nachbar.","er / nebenan wohnen",["der nebenan wohnt"],"de-rel-nom","Chủ ngữ giống đực của mệnh đề quan hệ: der."],
 ["Die Frau, ___ (sie / das Geschäft leiten), ist sehr freundlich.","sie / das Geschäft leiten",["die das Geschäft leitet"],"de-rel-nom","Chủ ngữ giống cái: die."],
 ["Das Kind, ___ (es / so laut lachen), ist meine Nichte.","es / so laut lachen",["das so laut lacht"],"de-rel-nom","Chủ ngữ giống trung: das."],
 ["Die Leute, ___ (sie / nebenan wohnen), sind sehr nett.","sie / nebenan wohnen",["die nebenan wohnen"],"de-rel-nom","Chủ ngữ số nhiều: die."],

 // Akkusativ
 ["Das Buch, ___ (ich / es / gerade lesen), ist sehr spannend.","ich / es / gerade lesen",["das ich gerade lese"],"de-rel-akk","Tân ngữ trực tiếp giống trung: das."],
 ["Der Film, ___ (wir / ihn / sehen wollen), läuft im Kino.","wir / ihn / sehen wollen",["den wir sehen wollen"],"de-rel-akk","Tân ngữ trực tiếp giống đực: den."],
 ["Die Tasche, ___ (ich / sie / tragen), ist neu.","ich / sie / tragen",["die ich trage"],"de-rel-akk","Tân ngữ trực tiếp giống cái: die."],
 ["Die Schuhe, ___ (ich / sie / mögen), sind leider ausverkauft.","ich / sie / mögen",["die ich mag"],"de-rel-akk","Tân ngữ trực tiếp số nhiều: die."],

 // Dativ
 ["Die Frau, ___ (ich / ihr / helfen), ist Ärztin.","ich / ihr / helfen",["der ich helfe"],"de-rel-dat","“helfen” đòi Dativ; giống cái: der."],
 ["Der Kollege, ___ (ich / ihm / vertrauen), hat gekündigt.","ich / ihm / vertrauen",["dem ich vertraue"],"de-rel-dat","“vertrauen” đòi Dativ; giống đực: dem."],
 ["Das Kind, ___ (ich / ihm / ein Geschenk geben), freut sich sehr.","ich / ihm / ein Geschenk geben",["dem ich ein Geschenk gebe"],"de-rel-dat","Tân ngữ gián tiếp giống trung: dem."],
 ["Die Freunde, ___ (ich / ihnen / schreiben), antworten schnell.","ich / ihnen / schreiben",["denen ich schreibe"],"de-rel-dat","Tân ngữ gián tiếp số nhiều: denen (không phải die)."],

 // Genitiv
 ["Der Mann, ___ (sein / Auto / rot sein), ist mein Chef.","sein / Auto / rot sein",["dessen Auto rot ist"],"de-rel-gen","Sở hữu giống đực: dessen, danh từ sau không có mạo từ."],
 ["Die Frau, ___ (ihr / Sohn / in Berlin studieren), ist stolz.","ihr / Sohn / in Berlin studieren",["deren Sohn in Berlin studiert"],"de-rel-gen","Sở hữu giống cái: deren."],
 ["Das Unternehmen, ___ (sein / Gewinn / steigen), expandiert.","sein / Gewinn / steigen",["dessen Gewinn steigt"],"de-rel-gen","Sở hữu giống trung: dessen."],
 ["Die Kinder, ___ (ihre / Eltern / arbeiten), spielen im Park.","ihre / Eltern / arbeiten",["deren Eltern arbeiten"],"de-rel-gen","Sở hữu số nhiều: deren."],

 // mit Präposition
 ["Das ist der Kollege, ___ (mit / ich / oft arbeiten).","mit / ich / oft arbeiten",["mit dem ich oft arbeite"],"de-rel-prep","“mit” đòi Dativ: mit dem."],
 ["Das ist die Firma, ___ (für / ich / arbeiten).","für / ich / arbeiten",["für die ich arbeite"],"de-rel-prep","“für” đòi Akkusativ; giống cái: für die."],
 ["Das ist das Thema, ___ (über / wir / sprechen).","über / wir / sprechen",["über das wir sprechen"],"de-rel-prep","“über” + Akkusativ giống trung: über das."],
 ["Das sind die Freunde, ___ (mit / ich / reisen).","mit / ich / reisen",["mit denen ich reise"],"de-rel-prep","“mit” đòi Dativ số nhiều: mit denen."],
];

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Câu ngữ cảnh, gõ đúng relative pronoun + động từ cuối câu"},
};
const POOL=[];
FILL.forEach(([s,v,acc,ref,ex])=>POOL.push({type:"fill",kind:"input",retry:true,prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Gõ đúng đại từ quan hệ và trật tự từ.`,accept:acc,plain:acc[0],ref,expl:ex}));

const RUSH=[
 ["Chủ ngữ mệnh đề quan hệ",["de-rel-nom"]],["Tân ngữ trực tiếp",["de-rel-akk"]],
 ["Tân ngữ gián tiếp (helfen, danken…)",["de-rel-dat"]],["dessen/deren (sở hữu)",["de-rel-gen"]],
 ["Giới từ + Relativpronomen",["de-rel-prep"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["relativsaetze"] = { pool: POOL, types: TYPES, game: {title:"Welcher Fall?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng cách của đại từ quan hệ",prompt:"Dấu hiệu này thuộc cách nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"relRushBest"} };
})();
