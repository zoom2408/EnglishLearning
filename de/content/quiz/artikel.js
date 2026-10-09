/* de/content/quiz/artikel.js: practice questions for Artikel & Nomen.

   Data shape: BANK groups items by row id (sub-topic) as an object,
   not one flat array — this keeps `ref` from being repeated on every
   row, and makes per-topic coverage countable at a glance (just read
   each array's length; Object.values(BANK).map(a=>a.length) sums to
   the pool size). Each item also carries a `level` (A1-B2) for future
   level-filtered practice. This is the standard shape going forward
   for every module's quiz bank — see also de/content/quiz/*.js and
   nb/content/quiz/*.js as they get expanded to match.

   Single exercise type: context sentences, type the correctly
   declined article + noun. Wrong answers can be retried
   (retry:true). */
(() => {
const BANK = {
 "de-art-nom": [
  {q:"___ (der Lehrer) erklärt die Grammatik sehr gut.",hint:"der Lehrer",accept:["Der Lehrer"],level:"A1",expl:"Chủ ngữ của câu: giữ nguyên Nominativ."},
  {q:"Hier ist ___ (die Frau), die gestern angerufen hat.",hint:"die Frau",accept:["die Frau"],level:"A2",expl:"Sau “ist” (predicate), chỉ ra danh tính: Nominativ."},
  {q:"___ (das Kind) spielt im Garten.",hint:"das Kind",accept:["Das Kind"],level:"A1",expl:"Chủ ngữ của câu: Nominativ."},
  {q:"Das sind ___ (die Leute), von denen ich erzählt habe.",hint:"die Leute",accept:["die Leute"],level:"B1",expl:"Vị ngữ số nhiều sau “sind”: Nominativ."},
  {q:"___ (der Hund) bellt die ganze Nacht.",hint:"der Hund",accept:["Der Hund"],level:"A1",expl:"Chủ ngữ giống đực: Nominativ, giữ nguyên der."},
  {q:"___ (die Katze) schläft auf dem Sofa.",hint:"die Katze",accept:["Die Katze"],level:"A1",expl:"Chủ ngữ giống cái: Nominativ, giữ nguyên die."},
  {q:"___ (das Auto) steht vor dem Haus.",hint:"das Auto",accept:["Das Auto"],level:"A1",expl:"Chủ ngữ giống trung: Nominativ, giữ nguyên das."},
  {q:"Das ist ___ (der Arzt), der mich behandelt hat.",hint:"der Arzt",accept:["der Arzt"],level:"A2",expl:"Vị ngữ sau “ist”, chỉ danh tính: Nominativ."},
  {q:"___ (die Sonne) scheint heute sehr stark.",hint:"die Sonne",accept:["Die Sonne"],level:"A1",expl:"Chủ ngữ giống cái: Nominativ."},
  {q:"Wer ist ___ (der Mann) da drüben?",hint:"der Mann",accept:["der Mann"],level:"A1",expl:"Vị ngữ sau “ist” trong câu hỏi: Nominativ."},
  {q:"___ (das Wetter) wird morgen besser.",hint:"das Wetter",accept:["Das Wetter"],level:"A2",expl:"Chủ ngữ giống trung: Nominativ."},
  {q:"Das war ___ (die Idee), die uns gerettet hat.",hint:"die Idee",accept:["die Idee"],level:"B1",expl:"Vị ngữ sau “war”: Nominativ."},
  {q:"___ (der Zug) fährt pünktlich ab.",hint:"der Zug",accept:["Der Zug"],level:"A2",expl:"Chủ ngữ giống đực: Nominativ."},
  {q:"Hier sind ___ (die Dokumente), die Sie brauchen.",hint:"die Dokumente",accept:["die Dokumente"],level:"B1",expl:"Vị ngữ số nhiều sau “sind”: Nominativ."},
  {q:"___ (das Problem) lässt sich leicht lösen.",hint:"das Problem",accept:["Das Problem"],level:"B1",expl:"Chủ ngữ giống trung: Nominativ."},
 ],
 "de-art-akk": [
  {q:"Ich sehe ___ (der Mann) jeden Tag im Park.",hint:"der Mann",accept:["den Mann"],level:"A1",expl:"Tân ngữ trực tiếp, giống đực: der → den."},
  {q:"Wir kaufen ___ (ein Auto) für die Familie.",hint:"ein Auto",accept:["ein Auto"],level:"A1",expl:"Giống trung (neutral) không đổi ở Akkusativ: ein → ein."},
  {q:"Das Geschenk ist für ___ (die Mutter).",hint:"die Mutter",accept:["die Mutter"],level:"A1",expl:"“für” luôn đòi Akkusativ; giống cái (feminin) không đổi."},
  {q:"Siehst du ___ (die Kinder) da drüben?",hint:"die Kinder",accept:["die Kinder"],level:"A1",expl:"Số nhiều không đổi ở Akkusativ."},
  {q:"Ich brauche ___ (ein Stift) zum Schreiben.",hint:"ein Stift",accept:["einen Stift"],level:"A1",expl:"Tân ngữ trực tiếp giống đực: ein → einen."},
  {q:"Wir besuchen ___ (der Großvater) am Wochenende.",hint:"der Großvater",accept:["den Großvater"],level:"A1",expl:"Tân ngữ trực tiếp giống đực: der → den."},
  {q:"Er liest ___ (das Buch) jeden Abend.",hint:"das Buch",accept:["das Buch"],level:"A1",expl:"Giống trung không đổi ở Akkusativ."},
  {q:"Ich suche ___ (eine Wohnung) in der Stadtmitte.",hint:"eine Wohnung",accept:["eine Wohnung"],level:"A2",expl:"Giống cái không đổi ở Akkusativ: eine → eine."},
  {q:"Kannst du ___ (der Tisch) bitte sauber machen?",hint:"der Tisch",accept:["den Tisch"],level:"A2",expl:"Tân ngữ trực tiếp giống đực: der → den."},
  {q:"Sie trägt oft ___ (eine Brille).",hint:"eine Brille",accept:["eine Brille"],level:"A2",expl:"Giống cái không đổi ở Akkusativ."},
  {q:"Wir planen ___ (die Reise) schon seit Monaten.",hint:"die Reise",accept:["die Reise"],level:"A2",expl:"Giống cái không đổi ở Akkusativ."},
  {q:"Ich habe gestern ___ (ein Fehler) gemacht.",hint:"ein Fehler",accept:["einen Fehler"],level:"A2",expl:"Tân ngữ trực tiếp giống đực: ein → einen."},
  {q:"Die Firma sucht ___ (ein Mitarbeiter).",hint:"ein Mitarbeiter",accept:["einen Mitarbeiter"],level:"B1",expl:"Tân ngữ trực tiếp giống đực: ein → einen."},
  {q:"Wir unterstützen ___ (das Projekt) finanziell.",hint:"das Projekt",accept:["das Projekt"],level:"B1",expl:"Giống trung không đổi ở Akkusativ."},
  {q:"Ich habe ___ (die Prüfung) endlich bestanden.",hint:"die Prüfung",accept:["die Prüfung"],level:"A2",expl:"Giống cái không đổi ở Akkusativ."},
 ],
 "de-art-dat": [
  {q:"Ich gebe ___ (der Mann) das Buch.",hint:"der Mann",accept:["dem Mann"],level:"A1",expl:"Tân ngữ gián tiếp, giống đực: der → dem."},
  {q:"Sie hilft ___ (die Frau) beim Einkaufen.",hint:"die Frau",accept:["der Frau"],level:"A1",expl:"“helfen” đòi Dativ; giống cái: die → der."},
  {q:"Wir fahren mit ___ (der Zug) nach Berlin.",hint:"der Zug",accept:["dem Zug"],level:"A1",expl:"“mit” luôn đòi Dativ; giống đực: der → dem."},
  {q:"Das Auto gehört ___ (die Kinder).",hint:"die Kinder",accept:["den Kindern"],level:"A2",expl:"“gehören” đòi Dativ; số nhiều Dativ thêm -n: Kinder → Kindern."},
  {q:"Ich danke ___ (der Lehrer) für seine Geduld.",hint:"der Lehrer",accept:["dem Lehrer"],level:"A2",expl:"“danken” đòi Dativ; giống đực: der → dem."},
  {q:"Er schreibt ___ (die Freundin) jeden Tag.",hint:"die Freundin",accept:["der Freundin"],level:"A1",expl:"Tân ngữ gián tiếp giống cái: die → der."},
  {q:"Das Haus gehört ___ (mein Onkel).",hint:"mein Onkel",accept:["meinem Onkel"],level:"A2",expl:"“gehören” đòi Dativ; giống đực: mein → meinem."},
  {q:"Sie folgt ___ (der Weg) bis zum Ende.",hint:"der Weg",accept:["dem Weg"],level:"B1",expl:"“folgen” đòi Dativ; giống đực: der → dem."},
  {q:"Ich gratuliere ___ (die Gewinnerin) herzlich.",hint:"die Gewinnerin",accept:["der Gewinnerin"],level:"B1",expl:"“gratulieren” đòi Dativ; giống cái: die → der."},
  {q:"Wir glauben ___ (der Zeuge) nicht wirklich.",hint:"der Zeuge",accept:["dem Zeugen"],level:"B1",expl:"“glauben” đòi Dativ; danh từ yếu (der Zeuge) thêm -n ở Dativ."},
  {q:"Das Kleid passt ___ (die Schwester) perfekt.",hint:"die Schwester",accept:["der Schwester"],level:"A2",expl:"“passen” đòi Dativ; giống cái: die → der."},
  {q:"Er begegnet ___ (sein Freund) auf der Straße.",hint:"sein Freund",accept:["seinem Freund"],level:"B1",expl:"“begegnen” đòi Dativ; giống đực: sein → seinem."},
  {q:"Ich antworte ___ (die Kunden) so schnell wie möglich.",hint:"die Kunden",accept:["den Kunden"],level:"A2",expl:"“antworten” đòi Dativ; số nhiều Dativ thêm -n."},
  {q:"Der Kuchen schmeckt ___ (die Kinder) sehr gut.",hint:"die Kinder",accept:["den Kindern"],level:"A2",expl:"“schmecken” đòi Dativ; số nhiều Dativ thêm -n."},
  {q:"Sie dankt ___ (ihre Eltern) für die Unterstützung.",hint:"ihre Eltern",accept:["ihren Eltern"],level:"A2",expl:"“danken” đòi Dativ; số nhiều Dativ thêm -n."},
 ],
 "de-art-gen": [
  {q:"Das ist das Auto ___ (der Lehrer).",hint:"der Lehrer",accept:["des Lehrers"],level:"B1",expl:"Sở hữu, giống đực số ít: der → des, danh từ thêm -s."},
  {q:"Wegen ___ (das Wetter) bleiben wir zu Hause.",hint:"das Wetter",accept:["des Wetters"],level:"B1",expl:"“wegen” đòi Genitiv; giống trung: das → des, danh từ thêm -s."},
  {q:"Das ist das Haus ___ (die Eltern).",hint:"die Eltern",accept:["der Eltern"],level:"B1",expl:"Số nhiều ở Genitiv luôn là der, danh từ không thêm đuôi."},
  {q:"Trotz ___ (der Regen) gehen wir spazieren.",hint:"der Regen",accept:["des Regens"],level:"B1",expl:"“trotz” đòi Genitiv; giống đực: der → des, danh từ thêm -s."},
  {q:"Das ist die Tasche ___ (die Studentin).",hint:"die Studentin",accept:["der Studentin"],level:"B1",expl:"Sở hữu giống cái: die → der, danh từ không thêm đuôi."},
  {q:"Der Titel ___ (das Buch) ist sehr lang.",hint:"das Buch",accept:["des Buches","des Buchs"],level:"B2",expl:"Sở hữu giống trung: das → des, danh từ thêm -s/-es."},
  {q:"Während ___ (die Pause) habe ich einen Kaffee getrunken.",hint:"die Pause",accept:["der Pause"],level:"B1",expl:"“während” đòi Genitiv; giống cái: die → der."},
  {q:"Innerhalb ___ (eine Woche) müssen Sie antworten.",hint:"eine Woche",accept:["einer Woche"],level:"B1",expl:"“innerhalb” đòi Genitiv; giống cái: eine → einer."},
  {q:"Der Preis ___ (das Produkt) ist gestiegen.",hint:"das Produkt",accept:["des Produktes","des Produkts"],level:"B2",expl:"Sở hữu giống trung: das → des, danh từ thêm -(e)s."},
  {q:"Statt ___ (ein Geschenk) habe ich ihr Blumen gebracht.",hint:"ein Geschenk",accept:["eines Geschenks","eines Geschenkes"],level:"B2",expl:"“statt” đòi Genitiv; giống trung: ein → eines, danh từ thêm -(e)s."},
  {q:"Außerhalb ___ (die Stadt) ist es ruhiger.",hint:"die Stadt",accept:["der Stadt"],level:"B1",expl:"“außerhalb” đòi Genitiv; giống cái: die → der."},
  {q:"Das Ergebnis ___ (die Untersuchung) war positiv.",hint:"die Untersuchung",accept:["der Untersuchung"],level:"B2",expl:"Sở hữu giống cái: die → der."},
  {q:"Wegen ___ (der Verkehr) bin ich zu spät gekommen.",hint:"der Verkehr",accept:["des Verkehrs"],level:"B1",expl:"“wegen” đòi Genitiv; giống đực: der → des, danh từ thêm -s."},
  {q:"Der Name ___ (das Kind) ist noch nicht entschieden.",hint:"das Kind",accept:["des Kindes"],level:"B1",expl:"Sở hữu giống trung: das → des, danh từ thêm -es."},
  {q:"Trotz ___ (die Schwierigkeiten) haben wir es geschafft.",hint:"die Schwierigkeiten",accept:["der Schwierigkeiten"],level:"B2",expl:"“trotz” đòi Genitiv; số nhiều: die → der."},
 ],
};

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Câu ngữ cảnh, gõ đúng mạo từ + danh từ theo cách"},
};
const POOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => POOL.push({
 type:"fill",kind:"input",retry:true,
 prompt:fmt(it.q.replace(/ \(.+?\)/,"")),
 hint:`Gợi ý: <b>${esc(it.hint)}</b>. Gõ đúng mạo từ cho cách này.`,
 accept:it.accept,plain:it.accept[0],ref,level:it.level,expl:it.expl,
})));

const RUSH=[
 ["Wer? / Was? (chủ ngữ)",["de-art-nom"]],["Sau sein/werden",["de-art-nom"]],
 ["Wen? (tân ngữ trực tiếp)",["de-art-akk"]],["für / durch / ohne / gegen / um",["de-art-akk"]],
 ["Wem? (tân ngữ gián tiếp)",["de-art-dat"]],["mit / nach / bei / von / zu / aus / seit",["de-art-dat"]],["helfen / danken / gefallen / gehören",["de-art-dat"]],
 ["Wessen? (sở hữu)",["de-art-gen"]],["trotz / während / wegen / statt",["de-art-gen"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["artikel"] = { pool: POOL, types: TYPES, game: {title:"Welcher Fall?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng cách (Fall)",prompt:"Dấu hiệu này dùng cách nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"artRushBest"} };
})();
