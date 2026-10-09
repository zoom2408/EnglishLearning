/* de/content/quiz/indirekte-rede.js: practice questions for Indirekte
   Rede. BANK groups items by row id (sub-topic). Single exercise
   type: transform direct speech into reported speech. Wrong answers
   can be retried (retry:true). */
(() => {
const BANK = {
 "de-ind-aussage": [
  {q:"Er sagt: „Ich bin müde.“ → Er sagt, dass er ___ (müde / sein).",hint:"müde / sein",accept:["müde sei"],level:"A2",expl:"Konjunktiv I của sein ngôi 3 số ít: sei."},
  {q:"Sie sagt: „Ich habe keine Zeit.“ → Sie sagt, sie ___ (keine Zeit / haben).",hint:"keine Zeit / haben",accept:["habe keine Zeit"],level:"A2",expl:"Konjunktiv I của haben ngôi 3 số ít: habe."},
  {q:"Er sagt: „Ich komme später.“ → Er sagt, er ___ (später / kommen).",hint:"später / kommen",accept:["komme später"],level:"A2",expl:"Konjunktiv I của kommen ngôi 3 số ít: komme."},
  {q:"Sie sagen: „Wir sind fertig.“ → Sie sagen, sie ___ (fertig / sein).",hint:"fertig / sein",accept:["seien fertig"],level:"B1",expl:"Konjunktiv I của sein ngôi 3 số nhiều: seien."},
  {q:"Er sagt: „Ich arbeite viel.“ → Er sagt, er ___ (viel / arbeiten).",hint:"viel / arbeiten",accept:["arbeite viel"],level:"A2",expl:"Konjunktiv I của arbeiten ngôi 3 số ít: arbeite."},
  {q:"Sie sagt: „Ich wohne in Berlin.“ → Sie sagt, sie ___ (in Berlin / wohnen).",hint:"in Berlin / wohnen",accept:["wohne in Berlin"],level:"A2",expl:"Konjunktiv I của wohnen: wohne."},
  {q:"Er sagt: „Ich habe ein neues Auto.“ → Er sagt, er ___ (ein neues Auto / haben).",hint:"ein neues Auto / haben",accept:["habe ein neues Auto"],level:"A2",expl:"Konjunktiv I của haben: habe."},
  {q:"Sie sagt: „Ich bin krank.“ → Sie sagt, sie ___ (krank / sein).",hint:"krank / sein",accept:["sei krank"],level:"A2",expl:"Konjunktiv I của sein: sei."},
  {q:"Er sagt: „Ich kann gut kochen.“ → Er sagt, er ___ (gut kochen können).",hint:"gut kochen können",accept:["könne gut kochen"],level:"B1",expl:"Konjunktiv I của können: könne."},
  {q:"Sie sagt: „Ich will nach Hause gehen.“ → Sie sagt, sie ___ (nach Hause gehen wollen).",hint:"nach Hause gehen wollen",accept:["wolle nach Hause gehen"],level:"B1",expl:"Konjunktiv I của wollen: wolle."},
  {q:"Er sagt: „Ich muss früh aufstehen.“ → Er sagt, er ___ (früh aufstehen müssen).",hint:"früh aufstehen müssen",accept:["müsse früh aufstehen"],level:"B1",expl:"Konjunktiv I của müssen: müsse."},
  {q:"Sie sagt: „Ich darf nicht rauchen.“ → Sie sagt, sie ___ (nicht rauchen dürfen).",hint:"nicht rauchen dürfen",accept:["dürfe nicht rauchen"],level:"B1",expl:"Konjunktiv I của dürfen: dürfe."},
  {q:"Er sagt: „Ich mag keinen Fisch.“ → Er sagt, er ___ (keinen Fisch / mögen).",hint:"keinen Fisch / mögen",accept:["möge keinen Fisch"],level:"B1",expl:"Konjunktiv I của mögen: möge."},
  {q:"Sie sagt: „Ich brauche mehr Zeit.“ → Sie sagt, sie ___ (mehr Zeit / brauchen).",hint:"mehr Zeit / brauchen",accept:["brauche mehr Zeit"],level:"A2",expl:"Konjunktiv I của brauchen: brauche."},
  {q:"Sie sagen: „Wir sind glücklich.“ → Sie sagen, sie ___ (glücklich / sein).",hint:"glücklich / sein",accept:["seien glücklich"],level:"B1",expl:"Konjunktiv I của sein ngôi 3 số nhiều: seien."},
 ],
 "de-ind-janein": [
  {q:"Sie fragt: „Kommst du morgen?“ → Sie fragt, ___ (ich / morgen / kommen).",hint:"ich / morgen / kommen",accept:["ob ich morgen komme"],level:"A2",expl:"Câu hỏi có/không dùng ob + động từ cuối."},
  {q:"Er fragt: „Hast du Zeit?“ → Er fragt, ___ (ich / Zeit / haben).",hint:"ich / Zeit / haben",accept:["ob ich Zeit habe"],level:"A2",expl:"ob + S + … + Verb (cuối)."},
  {q:"Sie fragt: „Bist du fertig?“ → Sie fragt, ___ (ich / fertig / sein).",hint:"ich / fertig / sein",accept:["ob ich fertig bin"],level:"A2",expl:"ob + S + … + Verb (cuối)."},
  {q:"Er fragt: „Arbeitest du heute?“ → Er fragt, ___ (ich / heute / arbeiten).",hint:"ich / heute / arbeiten",accept:["ob ich heute arbeite"],level:"A2",expl:"ob + S + … + Verb (cuối)."},
  {q:"Sie fragt: „Wohnst du in München?“ → Sie fragt, ___ (ich / in München / wohnen).",hint:"ich / in München / wohnen",accept:["ob ich in München wohne"],level:"A2",expl:"ob + S + … + Verb (cuối)."},
  {q:"Er fragt: „Kannst du schwimmen?“ → Er fragt, ___ (ich / schwimmen können).",hint:"ich / schwimmen können",accept:["ob ich schwimmen kann"],level:"B1",expl:"ob + S + … + modal (cuối)."},
  {q:"Sie fragt: „Magst du Kaffee?“ → Sie fragt, ___ (ich / Kaffee / mögen).",hint:"ich / Kaffee / mögen",accept:["ob ich Kaffee mag"],level:"A2",expl:"ob + S + … + Verb (cuối)."},
  {q:"Er fragt: „Hast du ein Auto?“ → Er fragt, ___ (ich / ein Auto / haben).",hint:"ich / ein Auto / haben",accept:["ob ich ein Auto habe"],level:"A2",expl:"ob + S + … + Verb (cuối)."},
  {q:"Sie fragt: „Bist du müde?“ → Sie fragt, ___ (ich / müde / sein).",hint:"ich / müde / sein",accept:["ob ich müde bin"],level:"A2",expl:"ob + S + … + Verb (cuối)."},
  {q:"Er fragt: „Kommst du mit?“ → Er fragt, ___ (ich / mitkommen).",hint:"ich / mitkommen",accept:["ob ich mitkomme"],level:"A2",expl:"Động từ tách “mitkommen” viết liền ở cuối mệnh đề phụ."},
  {q:"Sie fragt: „Brauchst du Hilfe?“ → Sie fragt, ___ (ich / Hilfe / brauchen).",hint:"ich / Hilfe / brauchen",accept:["ob ich Hilfe brauche"],level:"A2",expl:"ob + S + … + Verb (cuối)."},
  {q:"Er fragt: „Willst du etwas essen?“ → Er fragt, ___ (ich / etwas essen wollen).",hint:"ich / etwas essen wollen",accept:["ob ich etwas essen will"],level:"B1",expl:"ob + S + … + modal (cuối)."},
  {q:"Sie fragt: „Musst du arbeiten?“ → Sie fragt, ___ (ich / arbeiten müssen).",hint:"ich / arbeiten müssen",accept:["ob ich arbeiten muss"],level:"B1",expl:"ob + S + … + modal (cuối)."},
  {q:"Er fragt: „Lebst du allein?“ → Er fragt, ___ (ich / allein / leben).",hint:"ich / allein / leben",accept:["ob ich allein lebe"],level:"A2",expl:"ob + S + … + Verb (cuối)."},
  {q:"Sie fragt: „Spielst du Fußball?“ → Sie fragt, ___ (ich / Fußball / spielen).",hint:"ich / Fußball / spielen",accept:["ob ich Fußball spiele"],level:"A2",expl:"ob + S + … + Verb (cuối)."},
 ],
 "de-ind-wfrage": [
  {q:"Er fragt: „Wo wohnst du?“ → Er fragt, ___ (ich / wohnen).",hint:"ich / wohnen",accept:["wo ich wohne"],level:"A2",expl:"Giữ nguyên từ để hỏi (wo), động từ cuối."},
  {q:"Sie fragt: „Warum kommst du zu spät?“ → Sie fragt, ___ (ich / zu spät / kommen).",hint:"ich / zu spät / kommen",accept:["warum ich zu spät komme"],level:"A2",expl:"Giữ nguyên từ để hỏi (warum), động từ cuối."},
  {q:"Er fragt: „Was machst du heute?“ → Er fragt, ___ (ich / heute / machen).",hint:"ich / heute / machen",accept:["was ich heute mache"],level:"A2",expl:"Giữ nguyên từ để hỏi (was), động từ cuối."},
  {q:"Sie fragt: „Wann beginnt der Kurs?“ → Sie fragt, ___ (der Kurs / beginnen).",hint:"der Kurs / beginnen",accept:["wann der Kurs beginnt"],level:"A2",expl:"Giữ nguyên từ để hỏi (wann), động từ cuối."},
  {q:"Er fragt: „Wie heißt du?“ → Er fragt, ___ (ich / heißen).",hint:"ich / heißen",accept:["wie ich heiße"],level:"A2",expl:"Giữ nguyên từ để hỏi (wie), động từ cuối."},
  {q:"Sie fragt: „Woher kommst du?“ → Sie fragt, ___ (ich / kommen).",hint:"ich / kommen",accept:["woher ich komme"],level:"A2",expl:"Giữ nguyên từ để hỏi (woher), động từ cuối."},
  {q:"Er fragt: „Wie viel kostet das?“ → Er fragt, ___ (das / kosten).",hint:"das / kosten",accept:["wie viel das kostet"],level:"B1",expl:"Giữ nguyên từ để hỏi (wie viel), động từ cuối."},
  {q:"Sie fragt: „Wen triffst du heute?“ → Sie fragt, ___ (ich / heute / treffen).",hint:"ich / heute / treffen",accept:["wen ich heute treffe"],level:"B1",expl:"Giữ nguyên từ để hỏi (wen), động từ cuối."},
  {q:"Er fragt: „Wem gehört das Buch?“ → Er fragt, ___ (das Buch / gehören).",hint:"das Buch / gehören",accept:["wem das Buch gehört"],level:"B1",expl:"Giữ nguyên từ để hỏi (wem), động từ cuối."},
  {q:"Sie fragt: „Welches Auto gefällt dir?“ → Sie fragt, ___ (mir / welches Auto / gefallen).",hint:"mir / welches Auto / gefallen",accept:["welches Auto mir gefällt"],level:"B1",expl:"Giữ nguyên từ để hỏi (welches Auto), động từ cuối."},
  {q:"Er fragt: „Wie lange bleibst du?“ → Er fragt, ___ (ich / bleiben).",hint:"ich / bleiben",accept:["wie lange ich bleibe"],level:"A2",expl:"Giữ nguyên từ để hỏi (wie lange), động từ cuối."},
  {q:"Sie fragt: „Mit wem sprichst du?“ → Sie fragt, ___ (ich / sprechen).",hint:"ich / sprechen",accept:["mit wem ich spreche"],level:"B1",expl:"Giữ nguyên từ để hỏi (mit wem), động từ cuối."},
  {q:"Er fragt: „Wohin fährst du?“ → Er fragt, ___ (ich / fahren).",hint:"ich / fahren",accept:["wohin ich fahre"],level:"A2",expl:"Giữ nguyên từ để hỏi (wohin), động từ cuối."},
  {q:"Sie fragt: „Was für ein Auto hast du?“ → Sie fragt, ___ (ich / haben).",hint:"ich / haben",accept:["was für ein Auto ich habe"],level:"B2",expl:"Giữ nguyên cụm từ để hỏi (was für ein Auto), động từ cuối."},
  {q:"Er fragt: „Wie oft trainierst du?“ → Er fragt, ___ (ich / trainieren).",hint:"ich / trainieren",accept:["wie oft ich trainiere"],level:"A2",expl:"Giữ nguyên từ để hỏi (wie oft), động từ cuối."},
 ],
 "de-ind-auff": [
  {q:"Der Lehrer sagt: „Macht die Hausaufgaben!“ → Der Lehrer sagt, wir ___ (die Hausaufgaben / machen).",hint:"die Hausaufgaben / machen",accept:["sollen die Hausaufgaben machen"],level:"B1",expl:"Câu mệnh lệnh tường thuật: sollen + Infinitiv."},
  {q:"Die Mutter sagt: „Seid leise!“ → Die Mutter sagt, die Kinder ___ (leise / sein).",hint:"leise / sein",accept:["sollen leise sein"],level:"B1",expl:"sollen + Infinitiv (sein)."},
  {q:"Der Chef sagt: „Schicken Sie die E-Mail!“ → Der Chef sagt, ich ___ (die E-Mail / schicken).",hint:"die E-Mail / schicken",accept:["solle die E-Mail schicken"],level:"B1",expl:"Ngôi ich: Konjunktiv I của sollen là solle."},
  {q:"Der Trainer sagt: „Lauft schneller!“ → Der Trainer sagt, wir ___ (schneller / laufen).",hint:"schneller / laufen",accept:["sollen schneller laufen"],level:"B1",expl:"sollen + Infinitiv."},
  {q:"Die Lehrerin sagt: „Öffnet die Bücher!“ → Die Lehrerin sagt, wir ___ (die Bücher / öffnen).",hint:"die Bücher / öffnen",accept:["sollen die Bücher öffnen"],level:"B1",expl:"sollen + Infinitiv."},
  {q:"Der Arzt sagt: „Trinken Sie mehr Wasser!“ → Der Arzt sagt, ich ___ (mehr Wasser / trinken).",hint:"mehr Wasser / trinken",accept:["solle mehr Wasser trinken"],level:"B1",expl:"Ngôi ich: solle + Infinitiv."},
  {q:"Die Mutter sagt: „Räum dein Zimmer auf!“ → Die Mutter sagt, ich ___ (mein Zimmer / aufräumen).",hint:"mein Zimmer / aufräumen",accept:["solle mein Zimmer aufräumen"],level:"B1",expl:"Ngôi ich: solle + Infinitiv (động từ tách)."},
  {q:"Der Chef sagt: „Kommen Sie pünktlich!“ → Der Chef sagt, ich ___ (pünktlich / kommen).",hint:"pünktlich / kommen",accept:["solle pünktlich kommen"],level:"B1",expl:"Ngôi ich: solle + Infinitiv."},
  {q:"Der Lehrer sagt: „Seid ruhig!“ → Der Lehrer sagt, wir ___ (ruhig / sein).",hint:"ruhig / sein",accept:["sollen ruhig sein"],level:"B1",expl:"sollen + Infinitiv (sein)."},
  {q:"Die Polizei sagt: „Fahren Sie langsamer!“ → Die Polizei sagt, ich ___ (langsamer / fahren).",hint:"langsamer / fahren",accept:["solle langsamer fahren"],level:"B1",expl:"Ngôi ich: solle + Infinitiv."},
  {q:"Der Vater sagt: „Hilf deiner Schwester!“ → Der Vater sagt, ich ___ (meiner Schwester / helfen).",hint:"meiner Schwester / helfen",accept:["solle meiner Schwester helfen"],level:"B2",expl:"“helfen” đòi Dativ; ngôi ich: solle + Infinitiv."},
  {q:"Die Chefin sagt: „Melden Sie sich morgen!“ → Die Chefin sagt, ich ___ (mich morgen / melden).",hint:"mich morgen / melden",accept:["solle mich morgen melden"],level:"B2",expl:"Động từ phản thân: solle mich melden."},
  {q:"Der Lehrer sagt: „Schreibt den Test!“ → Der Lehrer sagt, wir ___ (den Test / schreiben).",hint:"den Test / schreiben",accept:["sollen den Test schreiben"],level:"B1",expl:"sollen + Infinitiv."},
  {q:"Die Eltern sagen: „Esst euer Gemüse!“ → Die Eltern sagen, wir ___ (unser Gemüse / essen).",hint:"unser Gemüse / essen",accept:["sollen unser Gemüse essen"],level:"B1",expl:"sollen + Infinitiv."},
  {q:"Der Kunde sagt: „Rufen Sie mich zurück!“ → Der Kunde sagt, ich ___ (ihn / zurückrufen).",hint:"ihn / zurückrufen",accept:["solle ihn zurückrufen"],level:"B2",expl:"Động từ tách “zurückrufen”: solle ihn zurückrufen."},
 ],
};

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Chuyển câu trực tiếp sang câu tường thuật"},
};
const POOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => POOL.push({
 type:"fill",kind:"input",retry:true,
 prompt:fmt(it.q.replace(/ \(.+?\)/,"")),
 hint:`Gợi ý: <b>${esc(it.hint)}</b>. Gõ đúng dạng tường thuật.`,
 accept:it.accept,plain:it.accept[0],ref,level:it.level,expl:it.expl,
})));

const RUSH=[
 ["dass + Konjunktiv I",["de-ind-aussage"]],["sagt, dass…",["de-ind-aussage"]],
 ["ob",["de-ind-janein"]],["câu hỏi có/không",["de-ind-janein"]],
 ["wo/wann/was/warum + V cuối",["de-ind-wfrage"]],
 ["sollen + Infinitiv",["de-ind-auff"]],["câu mệnh lệnh tường thuật",["de-ind-auff"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["indirekte-rede"] = { pool: POOL, types: TYPES, game: {title:"Welcher Satztyp?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng loại câu tường thuật",prompt:"Dấu hiệu này thuộc loại nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"indRushBest"} };
})();
