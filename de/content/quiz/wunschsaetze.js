/* de/content/quiz/wunschsaetze.js: practice questions for
   Wunschsätze. BANK groups items by row id (sub-topic). Single
   exercise type: context sentences, type the correctly conjugated
   Konjunktiv II form. Wrong answers can be retried (retry:true). */
(() => {
const BANK = {
 "de-wunsch-gegenwart": [
  {q:"Ich wünschte, ich ___ (haben) mehr Zeit für Hobbys.",hint:"haben",accept:["hätte"],level:"A2",expl:"Ước hiện tại: Konjunktiv II của haben là hätte."},
  {q:"Ich wünschte, ich ___ (sein) jetzt am Strand.",hint:"sein",accept:["wäre"],level:"A2",expl:"Ước hiện tại: Konjunktiv II của sein là wäre."},
  {q:"Ich wünschte, es ___ (regnen) nicht so viel.",hint:"regnen",accept:["würde"],level:"A2",expl:"Động từ thường dùng würde + Infinitiv: würde regnen."},
  {q:"Ich wünschte, du ___ (zuhören) mir manchmal.",hint:"zuhören",accept:["würdest"],level:"B1",expl:"Ngôi du: würdest + Infinitiv (zuhören)."},
  {q:"Ich wünschte, ich ___ (können) besser kochen.",hint:"können",accept:["könnte"],level:"B1",expl:"Konjunktiv II của können: könnte."},
  {q:"Ich wünschte, ich ___ (haben) ein eigenes Auto.",hint:"haben",accept:["hätte"],level:"A2",expl:"Konjunktiv II của haben: hätte."},
  {q:"Ich wünschte, wir ___ (sein) jetzt im Urlaub.",hint:"sein",accept:["wären"],level:"A2",expl:"Konjunktiv II của sein, số nhiều: wären."},
  {q:"Ich wünschte, er ___ (sein) ehrlicher.",hint:"sein",accept:["wäre"],level:"B1",expl:"Konjunktiv II của sein: wäre."},
  {q:"Ich wünschte, ich ___ (müssen) nicht arbeiten.",hint:"müssen",accept:["müsste"],level:"B1",expl:"Konjunktiv II của müssen: müsste."},
  {q:"Ich wünschte, sie ___ (würde) öfter anrufen.",hint:"anrufen, würde-Form",accept:["würde"],level:"B1",expl:"Động từ thường dùng würde + Infinitiv."},
  {q:"Ich wünschte, ich ___ (sein) nicht so müde.",hint:"sein",accept:["wäre"],level:"A2",expl:"Konjunktiv II của sein: wäre."},
  {q:"Ich wünschte, wir ___ (haben) mehr Platz.",hint:"haben",accept:["hätten"],level:"A2",expl:"Konjunktiv II của haben, số nhiều: hätten."},
  {q:"Ich wünschte, ich ___ (können) fliegen.",hint:"können",accept:["könnte"],level:"A2",expl:"Konjunktiv II của können: könnte."},
  {q:"Ich wünschte, das Wetter ___ (sein) besser.",hint:"sein",accept:["wäre"],level:"A2",expl:"Konjunktiv II của sein: wäre."},
  {q:"Ich wünschte, ich ___ (haben) keine Angst.",hint:"haben",accept:["hätte"],level:"B1",expl:"Konjunktiv II của haben: hätte."},
  {q:"Ich wünschte, du ___ (sein) hier.",hint:"sein",accept:["wärst"],level:"A2",expl:"Konjunktiv II của sein, ngôi du: wärst."},
  {q:"Ich wünschte, ich ___ (wissen) die Antwort.",hint:"wissen",accept:["wüsste"],level:"B1",expl:"Konjunktiv II của wissen: wüsste."},
  {q:"Ich wünschte, ich ___ (haben) mehr Geduld.",hint:"haben",accept:["hätte"],level:"B1",expl:"Konjunktiv II của haben: hätte."},
  {q:"Ich wünschte, wir ___ (können) öfter reisen.",hint:"können",accept:["könnten"],level:"B1",expl:"Konjunktiv II của können, số nhiều: könnten."},
  {q:"Ich wünschte, es ___ (sein) schon Wochenende.",hint:"sein",accept:["wäre"],level:"A2",expl:"Konjunktiv II của sein: wäre."},
 ],
 "de-wunsch-vergangenheit": [
  {q:"Ich wünschte, ich ___ (lernen) mehr für die Prüfung.",hint:"lernen",accept:["hätte"],level:"B1",expl:"Tiếc nuối quá khứ: hätte + Partizip II (gelernt)."},
  {q:"Ich wünschte, ich ___ (kommen) früher.",hint:"kommen",accept:["wäre"],level:"B1",expl:"“kommen” dùng trợ động từ sein: wäre + gekommen."},
  {q:"Ich wünschte, ich ___ (sagen) das nicht.",hint:"sagen",accept:["hätte"],level:"B1",expl:"Tiếc nuối quá khứ: hätte + Partizip II (gesagt)."},
  {q:"Ich wünschte, wir ___ (bleiben) länger dort.",hint:"bleiben",accept:["wären"],level:"B1",expl:"“bleiben” dùng trợ động từ sein: wären + geblieben."},
  {q:"Ich wünschte, ich ___ (üben) mehr.",hint:"üben",accept:["hätte"],level:"B1",expl:"Tiếc nuối quá khứ: hätte + Partizip II (geübt)."},
  {q:"Ich wünschte, ich ___ (annehmen) das Angebot.",hint:"annehmen",accept:["hätte"],level:"B1",expl:"Tiếc nuối quá khứ: hätte + Partizip II (angenommen)."},
  {q:"Ich wünschte, wir ___ (fahren) früher.",hint:"fahren",accept:["wären"],level:"B1",expl:"“fahren” dùng trợ động từ sein: wären + gefahren."},
  {q:"Ich wünschte, ich ___ (zuhören) besser.",hint:"zuhören",accept:["hätte"],level:"B1",expl:"Tiếc nuối quá khứ: hätte + Partizip II (zugehört)."},
  {q:"Ich wünschte, sie ___ (sagen) mir die Wahrheit.",hint:"sagen",accept:["hätte"],level:"B1",expl:"Tiếc nuối quá khứ: hätte + Partizip II (gesagt)."},
  {q:"Ich wünschte, ich ___ (lesen) das Buch.",hint:"lesen",accept:["hätte"],level:"B1",expl:"Tiếc nuối quá khứ: hätte + Partizip II (gelesen)."},
  {q:"Ich wünschte, wir ___ (haben) mehr Zeit gehabt.",hint:"haben",accept:["hätten"],level:"B1",expl:"Tiếc nuối quá khứ, số nhiều: hätten."},
  {q:"Ich wünschte, er ___ (gehen) nicht.",hint:"gehen",accept:["wäre"],level:"B1",expl:"“gehen” dùng trợ động từ sein: wäre + gegangen."},
  {q:"Ich wünschte, ich ___ (ausgeben) nicht so viel Geld.",hint:"ausgeben",accept:["hätte"],level:"B1",expl:"Tiếc nuối quá khứ: hätte + Partizip II (ausgegeben)."},
  {q:"Ich wünschte, du ___ (helfen) mir.",hint:"helfen",accept:["hättest"],level:"B1",expl:"Tiếc nuối quá khứ, ngôi du: hättest + Partizip II (geholfen)."},
  {q:"Ich wünschte, ich ___ (nutzen) diese Chance.",hint:"nutzen",accept:["hätte"],level:"B1",expl:"Tiếc nuối quá khứ: hätte + Partizip II (genutzt)."},
  {q:"Ich wünschte, wir ___ (kennenlernen) uns früher.",hint:"kennenlernen",accept:["hätten"],level:"B1",expl:"Tiếc nuối quá khứ, số nhiều: hätten + Partizip II (kennengelernt)."},
  {q:"Ich wünschte, ich ___ (kommen) nicht so spät.",hint:"kommen",accept:["wäre"],level:"B1",expl:"“kommen” dùng trợ động từ sein: wäre + gekommen."},
  {q:"Ich wünschte, sie ___ (einladen) mich.",hint:"einladen",accept:["hätten"],level:"B1",expl:"Tiếc nuối quá khứ, số nhiều: hätten + Partizip II (eingeladen)."},
  {q:"Ich wünschte, ich ___ (sagen) nichts.",hint:"sagen",accept:["hätte"],level:"B1",expl:"Tiếc nuối quá khứ: hätte + Partizip II (gesagt)."},
  {q:"Ich wünschte, wir ___ (wissen) das vorher.",hint:"wissen",accept:["hätten"],level:"B1",expl:"Tiếc nuối quá khứ, số nhiều: hätten + Partizip II (gewusst)."},
 ],
 "de-wunsch-wenndoch": [
  {q:"Wenn ich doch mehr Zeit ___ (haben)!",hint:"haben",accept:["hätte"],level:"B1",expl:"Cảm thán ước hiện tại: Konjunktiv II hätte."},
  {q:"Wenn ich doch fliegen ___ (können)!",hint:"können",accept:["könnte"],level:"B1",expl:"Cảm thán với modal verb: Konjunktiv II könnte."},
  {q:"Wenn ich doch nur ___ (zuhören, Partizip II)!",hint:"zuhören",accept:["zugehört hätte"],level:"B2",expl:"Cảm thán tiếc nuối quá khứ: Partizip II + hätte ở cuối."},
  {q:"Wenn du doch früher ___ (kommen)!",hint:"kommen",accept:["gekommen wärst"],level:"B2",expl:"“kommen” dùng sein; ngôi du: Partizip II + wärst."},
  {q:"Wenn ich doch mehr Geld ___ (haben)!",hint:"haben",accept:["hätte"],level:"B1",expl:"Cảm thán ước hiện tại: hätte."},
  {q:"Wenn ich doch jetzt zu Hause ___ (sein)!",hint:"sein",accept:["wäre"],level:"B1",expl:"Cảm thán ước hiện tại: wäre."},
  {q:"Wenn ich doch besser kochen ___ (können)!",hint:"können",accept:["könnte"],level:"B1",expl:"Cảm thán với modal verb: könnte."},
  {q:"Wenn wir doch mehr Zeit ___ (haben)!",hint:"haben",accept:["hätten"],level:"B1",expl:"Cảm thán, số nhiều: hätten."},
  {q:"Wenn er doch ehrlicher ___ (sein)!",hint:"sein",accept:["wäre"],level:"B1",expl:"Cảm thán ước hiện tại: wäre."},
  {q:"Wenn ich doch schwimmen ___ (können)!",hint:"können",accept:["könnte"],level:"B1",expl:"Cảm thán với modal verb: könnte."},
  {q:"Wenn du doch hier ___ (sein)!",hint:"sein",accept:["wärst"],level:"B1",expl:"Cảm thán, ngôi du: wärst."},
  {q:"Wenn ich doch nur ruhiger ___ (sein)!",hint:"sein",accept:["wäre"],level:"B1",expl:"Cảm thán ước hiện tại: wäre."},
  {q:"Wenn wir doch öfter reisen ___ (können)!",hint:"können",accept:["könnten"],level:"B1",expl:"Cảm thán, số nhiều: könnten."},
  {q:"Wenn ich doch nur mehr ___ (lernen, Partizip II)!",hint:"lernen",accept:["gelernt hätte"],level:"B2",expl:"Cảm thán tiếc nuối quá khứ: Partizip II + hätte."},
  {q:"Wenn sie doch früher ___ (kommen, Partizip II)!",hint:"kommen",accept:["gekommen wäre"],level:"B2",expl:"“kommen” dùng sein: Partizip II + wäre."},
  {q:"Wenn wir doch nicht ___ (streiten, Partizip II)!",hint:"streiten",accept:["gestritten hätten"],level:"B2",expl:"Cảm thán tiếc nuối quá khứ, số nhiều: Partizip II + hätten."},
  {q:"Wenn ich doch die Wahrheit ___ (sagen, Partizip II)!",hint:"sagen",accept:["gesagt hätte"],level:"B2",expl:"Cảm thán tiếc nuối quá khứ: Partizip II + hätte."},
  {q:"Wenn er doch vorsichtiger ___ (sein, Partizip II)!",hint:"sein",accept:["gewesen wäre"],level:"B2",expl:"Cảm thán tiếc nuối quá khứ: Partizip II + wäre."},
  {q:"Wenn ich doch nicht so viel Geld ___ (ausgeben, Partizip II)!",hint:"ausgeben",accept:["ausgegeben hätte"],level:"B2",expl:"Cảm thán tiếc nuối quá khứ: Partizip II + hätte."},
  {q:"Wenn wir doch früher ___ (losfahren, Partizip II)!",hint:"losfahren",accept:["losgefahren wären"],level:"B2",expl:"“losfahren” dùng sein, số nhiều: Partizip II + wären."},
 ],
};

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Câu ngữ cảnh, gõ đúng dạng Konjunktiv II"},
};
const POOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => POOL.push({
 type:"fill",kind:"input",retry:true,
 prompt:fmt(it.q.replace(/ \(.+?\)/,"")),
 hint:`Gợi ý: <b>${esc(it.hint)}</b>. Gõ đúng dạng Konjunktiv II.`,
 accept:it.accept,plain:it.accept[0],ref,level:it.level,expl:it.expl,
})));

const RUSH=[
 ["Ich wünschte, … hätte/wäre",["de-wunsch-gegenwart"]],["Ich wünschte, … würde",["de-wunsch-gegenwart"]],
 ["Ich wünschte, … + Partizip II + hätte/wäre",["de-wunsch-vergangenheit"]],
 ["Wenn … doch … !",["de-wunsch-wenndoch"]],["Wenn … nur … !",["de-wunsch-wenndoch"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["wunschsaetze"] = { pool: POOL, types: TYPES, game: {title:"Welcher Wunschtyp?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng loại câu ước",prompt:"Dấu hiệu này thuộc loại nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"wunschRushBest"} };
})();
