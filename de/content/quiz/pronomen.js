/* de/content/quiz/pronomen.js: practice questions for Pronomen.
   Single exercise type: context sentences, type the correctly declined
   pronoun. Wrong answers can be retried (retry:true). */
(() => {
const FILL=[
 // Personalpronomen
 ["Anna ist meine Freundin. ___ (sie) kommt aus Hanoi.","sie",["Sie"],"de-pron-personal","Chủ ngữ của câu mới: Nominativ, sie giữ nguyên."],
 ["Ich kenne Thomas gut. Ich sehe ___ (er) jeden Tag.","er",["ihn"],"de-pron-personal","Tân ngữ trực tiếp, ngôi thứ 3 giống đực: er → ihn."],
 ["Kannst du ___ (ich) bitte helfen?","ich",["mir"],"de-pron-personal","“helfen” đòi Dativ: ich → mir."],
 ["Das Buch gehört ___ (wir).","wir",["uns"],"de-pron-personal","“gehören” đòi Dativ: wir → uns (giống nhau ở Akk. và Dat.)."],
 ["Habt ihr ___ (ich) gesehen?","ich",["mich"],"de-pron-personal","Tân ngữ trực tiếp: ich → mich."],

 // Possessivpronomen
 ["Das ist ___ (mein) Vater.","mein",["mein"],"de-pron-possessiv","Vater là giống đực, Nominativ không thêm đuôi."],
 ["Ich rufe ___ (mein) Schwester an.","mein",["meine"],"de-pron-possessiv","Schwester là giống cái, Akkusativ thêm -e."],
 ["Siehst du ___ (dein) Bruder dort?","dein",["deinen"],"de-pron-possessiv","Bruder là giống đực, Akkusativ thêm -en: dein → deinen."],
 ["Wir besuchen ___ (unser) Großeltern am Wochenende.","unser",["unsere"],"de-pron-possessiv","Großeltern là số nhiều, thêm -e: unser → unsere."],
 ["Das ist nicht ___ (sein) Problem.","sein",["sein"],"de-pron-possessiv","Problem là giống trung, Nominativ không thêm đuôi."],

 // Reflexivpronomen
 ["Ich freue ___ (mich) auf den Urlaub.","mich",["mich"],"de-pron-reflexiv","“sich freuen auf” luôn đi với Akkusativ: ich → mich."],
 ["Er zieht ___ (sich) schnell an.","sich",["sich"],"de-pron-reflexiv","Ngôi thứ 3 (er) luôn dùng sich."],
 ["Ich wasche ___ (mir) jeden Morgen die Hände.","mir",["mir"],"de-pron-reflexiv","Câu đã có tân ngữ Akkusativ (die Hände), nên phản thân ở Dativ: mir."],
 ["Interessierst du ___ (dich) für Musik?","dich",["dich"],"de-pron-reflexiv","“sich interessieren für”: du → dich."],
 ["Wir erinnern ___ (uns) an diesen Tag.","uns",["uns"],"de-pron-reflexiv","“sich erinnern an”: wir → uns."],
];

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Câu ngữ cảnh, gõ đúng dạng đại từ"},
};
const POOL=[];
FILL.forEach(([s,v,acc,ref,ex])=>POOL.push({type:"fill",kind:"input",retry:true,prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Gõ đúng dạng đại từ.`,accept:acc,plain:acc[0],ref,expl:ex}));

const RUSH=[
 ["Chủ ngữ (Nominativ)",["de-pron-personal"]],["Tân ngữ trực tiếp (Akkusativ)",["de-pron-personal"]],["Tân ngữ gián tiếp (Dativ)",["de-pron-personal"]],
 ["của tôi / của bạn…",["de-pron-possessiv"]],["+ danh từ giống đực, Nominativ",["de-pron-possessiv"]],["+ danh từ giống cái/số nhiều",["de-pron-possessiv"]],
 ["sich freuen / sich interessieren",["de-pron-reflexiv"]],["sich waschen + tân ngữ khác",["de-pron-reflexiv"]],["ngôi thứ 3: er/sie/es/sie",["de-pron-reflexiv"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["pronomen"] = { pool: POOL, types: TYPES, game: {title:"Welches Pronomen?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng nhóm đại từ",prompt:"Dấu hiệu này thuộc nhóm nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"pronRushBest"} };
})();
