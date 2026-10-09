/* de/content/quiz/pronomen.js: practice questions for Pronomen.
   BANK groups items by row id (sub-topic). Single exercise type:
   context sentences, type the correctly declined pronoun. Wrong
   answers can be retried (retry:true). */
(() => {
const BANK = {
 "de-pron-personal": [
  {q:"Anna ist meine Freundin. ___ (sie) kommt aus Hanoi.",hint:"sie",accept:["Sie"],level:"A1",expl:"Chủ ngữ của câu mới: Nominativ, sie giữ nguyên."},
  {q:"Ich kenne Thomas gut. Ich sehe ___ (er) jeden Tag.",hint:"er",accept:["ihn"],level:"A1",expl:"Tân ngữ trực tiếp, ngôi thứ 3 giống đực: er → ihn."},
  {q:"Kannst du ___ (ich) bitte helfen?",hint:"ich",accept:["mir"],level:"A1",expl:"“helfen” đòi Dativ: ich → mir."},
  {q:"Das Buch gehört ___ (wir).",hint:"wir",accept:["uns"],level:"A2",expl:"“gehören” đòi Dativ: wir → uns (giống nhau ở Akk. và Dat.)."},
  {q:"Habt ihr ___ (ich) gesehen?",hint:"ich",accept:["mich"],level:"A1",expl:"Tân ngữ trực tiếp: ich → mich."},
  {q:"Wir mögen ___ (sie, họ) sehr.",hint:"sie",accept:["sie"],level:"A1",expl:"Tân ngữ trực tiếp số nhiều: sie giữ nguyên."},
  {q:"Er vertraut ___ (du) völlig.",hint:"du",accept:["dir"],level:"A2",expl:"“vertrauen” đòi Dativ: du → dir."},
  {q:"Das Geschenk ist für ___ (sie, cô ấy).",hint:"sie",accept:["sie"],level:"A1",expl:"“für” đòi Akkusativ: sie giữ nguyên."},
  {q:"Ich rufe ___ (er) morgen an.",hint:"er",accept:["ihn"],level:"A1",expl:"Tân ngữ trực tiếp giống đực: er → ihn."},
  {q:"Sie dankt ___ (wir) für die Hilfe.",hint:"wir",accept:["uns"],level:"A2",expl:"“danken” đòi Dativ: wir → uns."},
  {q:"Kommst du mit ___ (ich)?",hint:"ich",accept:["mir"],level:"A1",expl:"“mit” đòi Dativ: ich → mir."},
  {q:"Wir warten auf ___ (ihr).",hint:"ihr",accept:["euch"],level:"A2",expl:"“warten auf” đòi Akkusativ: ihr → euch."},
  {q:"Der Lehrer lobt ___ (sie, cô ấy).",hint:"sie",accept:["sie"],level:"A2",expl:"Tân ngữ trực tiếp giống cái: sie giữ nguyên."},
  {q:"Ich glaube ___ (du) nicht.",hint:"du",accept:["dir"],level:"A2",expl:"“glauben” đòi Dativ: du → dir."},
  {q:"Das gehört nicht ___ (ich).",hint:"ich",accept:["mir"],level:"A1",expl:"“gehören” đòi Dativ: ich → mir."},
  {q:"Wir besuchen ___ (sie, họ) am Sonntag.",hint:"sie",accept:["sie"],level:"A1",expl:"Tân ngữ trực tiếp số nhiều: sie giữ nguyên."},
  {q:"Er hilft ___ (ich) immer gern.",hint:"ich",accept:["mir"],level:"A1",expl:"“helfen” đòi Dativ: ich → mir."},
  {q:"Siehst du ___ (es)?",hint:"es",accept:["es"],level:"A1",expl:"Tân ngữ trực tiếp giống trung: es giữ nguyên."},
  {q:"Ich schreibe ___ (sie, cô ấy) eine E-Mail.",hint:"sie",accept:["ihr"],level:"A2",expl:"Tân ngữ gián tiếp giống cái: sie → ihr."},
  {q:"Vertraust du ___ (er)?",hint:"er",accept:["ihm"],level:"A2",expl:"“vertrauen” đòi Dativ: er → ihm."},
 ],
 "de-pron-possessiv": [
  {q:"Das ist ___ (mein) Vater.",hint:"mein",accept:["mein"],level:"A1",expl:"Vater là giống đực, Nominativ không thêm đuôi."},
  {q:"Ich rufe ___ (mein) Schwester an.",hint:"mein",accept:["meine"],level:"A1",expl:"Schwester là giống cái, Akkusativ thêm -e."},
  {q:"Siehst du ___ (dein) Bruder dort?",hint:"dein",accept:["deinen"],level:"A2",expl:"Bruder là giống đực, Akkusativ thêm -en: dein → deinen."},
  {q:"Wir besuchen ___ (unser) Großeltern am Wochenende.",hint:"unser",accept:["unsere"],level:"A1",expl:"Großeltern là số nhiều, thêm -e: unser → unsere."},
  {q:"Das ist nicht ___ (sein) Problem.",hint:"sein",accept:["sein"],level:"A2",expl:"Problem là giống trung, Nominativ không thêm đuôi."},
  {q:"Das ist ___ (dein) Buch.",hint:"dein",accept:["dein"],level:"A1",expl:"Buch là giống trung, Nominativ không thêm đuôi."},
  {q:"Das ist ___ (ihr, của cô ấy) Haus.",hint:"ihr",accept:["ihr"],level:"A2",expl:"Haus là giống trung, Nominativ không thêm đuôi."},
  {q:"Wo ist ___ (euer) Gepäck?",hint:"euer",accept:["euer"],level:"A2",expl:"Gepäck là giống trung, Nominativ không thêm đuôi."},
  {q:"Ich mag ___ (dein) Idee.",hint:"dein",accept:["deine"],level:"A2",expl:"Idee là giống cái, Akkusativ thêm -e."},
  {q:"Das ist ___ (unser) Haus.",hint:"unser",accept:["unser"],level:"A1",expl:"Haus là giống trung, Nominativ không thêm đuôi."},
  {q:"___ (sein) Auto ist kaputt.",hint:"sein",accept:["Sein"],level:"A2",expl:"Auto là giống trung, Nominativ không thêm đuôi."},
  {q:"Wir lieben ___ (unser) Kinder.",hint:"unser",accept:["unsere"],level:"A1",expl:"Kinder là số nhiều, Akkusativ thêm -e."},
  {q:"Ist das ___ (dein) Handy?",hint:"dein",accept:["dein"],level:"A1",expl:"Handy là giống trung, Nominativ không thêm đuôi."},
  {q:"Ich habe ___ (mein) Schlüssel verloren.",hint:"mein",accept:["meinen"],level:"A2",expl:"Schlüssel là giống đực, Akkusativ thêm -en."},
  {q:"Die Schüler sind fleißig. ___ (ihr, của họ) Lehrer ist stolz.",hint:"ihr",accept:["Ihr"],level:"B1",expl:"Lehrer là giống đực, Nominativ không thêm đuôi."},
  {q:"Das ist ___ (mein) Zimmer.",hint:"mein",accept:["mein"],level:"A1",expl:"Zimmer là giống trung, Nominativ không thêm đuôi."},
  {q:"Kennst du ___ (sein) Schwester?",hint:"sein",accept:["seine"],level:"A2",expl:"Schwester là giống cái, Akkusativ thêm -e."},
  {q:"___ (dein) Eltern sind nett.",hint:"dein",accept:["Deine"],level:"A2",expl:"Eltern là số nhiều, Nominativ thêm -e."},
  {q:"Ich finde ___ (ihr, của cô ấy) Meinung interessant.",hint:"ihr",accept:["ihre"],level:"B1",expl:"Meinung là giống cái, Akkusativ thêm -e."},
  {q:"Das ist ___ (unser) Auto.",hint:"unser",accept:["unser"],level:"A1",expl:"Auto là giống trung, Nominativ không thêm đuôi."},
 ],
 "de-pron-reflexiv": [
  {q:"Ich freue ___ (mich) auf den Urlaub.",hint:"mich",accept:["mich"],level:"A1",expl:"“sich freuen auf” luôn đi với Akkusativ: ich → mich."},
  {q:"Er zieht ___ (sich) schnell an.",hint:"sich",accept:["sich"],level:"A1",expl:"Ngôi thứ 3 (er) luôn dùng sich."},
  {q:"Ich wasche ___ (mir) jeden Morgen die Hände.",hint:"mir",accept:["mir"],level:"A2",expl:"Câu đã có tân ngữ Akkusativ (die Hände), nên phản thân ở Dativ: mir."},
  {q:"Interessierst du ___ (dich) für Musik?",hint:"dich",accept:["dich"],level:"A2",expl:"“sich interessieren für”: du → dich."},
  {q:"Wir erinnern ___ (uns) an diesen Tag.",hint:"uns",accept:["uns"],level:"B1",expl:"“sich erinnern an”: wir → uns."},
  {q:"Sie freut ___ (sich) über das Geschenk.",hint:"sich",accept:["sich"],level:"A1",expl:"Ngôi thứ 3 (sie) luôn dùng sich."},
  {q:"Wir waschen ___ (uns) vor dem Essen.",hint:"uns",accept:["uns"],level:"A1",expl:"“sich waschen”: wir → uns."},
  {q:"Ärgerst du ___ (dich) oft?",hint:"dich",accept:["dich"],level:"A2",expl:"“sich ärgern”: du → dich."},
  {q:"Ich kann ___ (mich) nicht entscheiden.",hint:"mich",accept:["mich"],level:"B1",expl:"“sich entscheiden”: ich → mich."},
  {q:"Wascht ___ (ihr) bitte die Hände!",hint:"ihr",accept:["euch"],level:"A1",expl:"“sich waschen”: ihr → euch."},
  {q:"Er kann ___ (sich) gut konzentrieren.",hint:"sich",accept:["sich"],level:"A2",expl:"“sich konzentrieren”: er → sich."},
  {q:"Ich dusche ___ (mich) jeden Morgen.",hint:"mich",accept:["mich"],level:"A1",expl:"“sich duschen”: ich → mich."},
  {q:"Freut ihr ___ (ihr) auf die Ferien?",hint:"ihr",accept:["euch"],level:"A1",expl:"“sich freuen auf”: ihr → euch."},
  {q:"Sie können ___ (sich) nicht erinnern.",hint:"sich",accept:["sich"],level:"B1",expl:"Ngôi thứ 3 số nhiều (sie) luôn dùng sich."},
  {q:"Wir interessieren ___ (wir) für Kunst.",hint:"wir",accept:["uns"],level:"A2",expl:"“sich interessieren für”: wir → uns."},
  {q:"Kämmst du ___ (du) die Haare?",hint:"du",accept:["dich"],level:"A1",expl:"“sich kämmen”: du → dich."},
  {q:"Er ärgert ___ (sich) über den Verkehr.",hint:"sich",accept:["sich"],level:"A2",expl:"Ngôi thứ 3 (er) luôn dùng sich."},
  {q:"Ich erhole ___ (mich) am Wochenende.",hint:"mich",accept:["mich"],level:"B1",expl:"“sich erholen”: ich → mich."},
  {q:"Sie entschuldigt ___ (sich) für die Verspätung.",hint:"sich",accept:["sich"],level:"A2",expl:"Ngôi thứ 3 (sie) luôn dùng sich."},
  {q:"Wir freuen ___ (wir) auf euren Besuch.",hint:"wir",accept:["uns"],level:"A1",expl:"“sich freuen auf”: wir → uns."},
 ],
};

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Câu ngữ cảnh, gõ đúng dạng đại từ"},
};
const POOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => POOL.push({
 type:"fill",kind:"input",retry:true,
 prompt:fmt(it.q.replace(/ \(.+?\)/,"")),
 hint:`Gợi ý: <b>${esc(it.hint)}</b>. Gõ đúng dạng đại từ.`,
 accept:it.accept,plain:it.accept[0],ref,level:it.level,expl:it.expl,
})));

const RUSH=[
 ["Chủ ngữ (Nominativ)",["de-pron-personal"]],["Tân ngữ trực tiếp (Akkusativ)",["de-pron-personal"]],["Tân ngữ gián tiếp (Dativ)",["de-pron-personal"]],
 ["của tôi / của bạn…",["de-pron-possessiv"]],["+ danh từ giống đực, Nominativ",["de-pron-possessiv"]],["+ danh từ giống cái/số nhiều",["de-pron-possessiv"]],
 ["sich freuen / sich interessieren",["de-pron-reflexiv"]],["sich waschen + tân ngữ khác",["de-pron-reflexiv"]],["ngôi thứ 3: er/sie/es/sie",["de-pron-reflexiv"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["pronomen"] = { pool: POOL, types: TYPES, game: {title:"Welches Pronomen?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng nhóm đại từ",prompt:"Dấu hiệu này thuộc nhóm nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"pronRushBest"} };
})();
