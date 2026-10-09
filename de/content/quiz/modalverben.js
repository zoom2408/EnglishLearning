/* de/content/quiz/modalverben.js: practice questions for Modalverben.
   BANK groups items by row id (sub-topic). Single exercise type:
   context sentences, type the correctly conjugated modal verb. Wrong
   answers can be retried (retry:true). */
(() => {
const BANK = {
 "de-modal-fähigkeit": [
  {q:"Meine Schwester ist erst vier, aber sie ___ (können) schon lesen.",hint:"können",accept:["kann"],level:"A1",expl:"Khả năng đã học được: können, chia theo er/sie/es."},
  {q:"Entschuldigung, ich ___ (können) heute leider nicht kommen, ich bin krank.",hint:"können",accept:["kann"],level:"A1",expl:"Khả năng bị giới hạn bởi hoàn cảnh (ốm): kann nicht."},
  {q:"___ (können) du mir bitte helfen?",hint:"können",accept:["Kannst"],level:"A1",expl:"Câu hỏi với du: kannst."},
  {q:"Er ___ (können) sehr gut Klavier spielen.",hint:"können",accept:["kann"],level:"A1",expl:"Khả năng đã học được: kann."},
  {q:"Wir ___ (können) leider nicht an der Party teilnehmen.",hint:"können",accept:["können"],level:"A2",expl:"Khả năng bị giới hạn bởi hoàn cảnh: können nicht."},
  {q:"___ (können) ihr schon schwimmen?",hint:"können",accept:["Könnt"],level:"A1",expl:"Câu hỏi với ihr: könnt."},
  {q:"Sie ___ (können) drei Fremdsprachen fließend sprechen.",hint:"können",accept:["kann"],level:"A2",expl:"Khả năng đã học được: kann."},
  {q:"Ich ___ (können, Präteritum) als Kind nicht Rad fahren.",hint:"können",accept:["konnte"],level:"A2",expl:"Quá khứ của können: konnte."},
  {q:"Mit diesem Programm ___ (können) man Dateien leicht bearbeiten.",hint:"können",accept:["kann"],level:"B1",expl:"Khả năng chung, chủ ngữ “man”: kann."},
  {q:"Er ___ (können, Präteritum) gestern nicht kommen, weil er krank war.",hint:"können",accept:["konnte"],level:"A2",expl:"Quá khứ của können: konnte."},
 ],
 "de-modal-erlaubnis": [
  {q:"___ (dürfen) ich bitte das Fenster öffnen? Es ist sehr warm.",hint:"dürfen",accept:["Darf"],level:"A1",expl:"Xin phép lịch sự: darf."},
  {q:"In der Bibliothek ___ (dürfen) man nicht laut sprechen.",hint:"dürfen",accept:["darf"],level:"A1",expl:"Quy định cấm: darf nicht (man + darf, ngôi thứ 3 số ít)."},
  {q:"Als Kind ___ (dürfen, Präteritum) ich abends nicht lange fernsehen.",hint:"dürfen",accept:["durfte"],level:"A2",expl:"Quá khứ của dürfen: durfte (không được phép, quy định của cha mẹ)."},
  {q:"___ (dürfen) wir hier parken?",hint:"dürfen",accept:["Dürfen"],level:"A1",expl:"Xin phép: Dürfen wir…?"},
  {q:"Du ___ (dürfen) nicht ohne Erlaubnis gehen.",hint:"dürfen",accept:["darfst"],level:"A2",expl:"Cấm (phủ định dürfen): darfst nicht."},
  {q:"___ (dürfen) ich Sie etwas fragen?",hint:"dürfen",accept:["Darf"],level:"A2",expl:"Xin phép lịch sự: Darf ich…?"},
  {q:"Hier ___ (dürfen) man nicht rauchen.",hint:"dürfen",accept:["darf"],level:"A1",expl:"Quy định cấm: darf nicht."},
  {q:"Die Kinder ___ (dürfen) heute länger aufbleiben.",hint:"dürfen",accept:["dürfen"],level:"A2",expl:"Được phép: dürfen."},
  {q:"___ (dürfen) ich mich kurz vorstellen?",hint:"dürfen",accept:["Darf"],level:"A2",expl:"Xin phép lịch sự: Darf ich…?"},
  {q:"Früher ___ (dürfen, Präteritum) Frauen nicht wählen.",hint:"dürfen",accept:["durften"],level:"B1",expl:"Quá khứ của dürfen, số nhiều: durften."},
 ],
 "de-modal-pflicht": [
  {q:"Für diesen Job ___ (müssen) man fließend Englisch sprechen.",hint:"müssen",accept:["muss"],level:"A1",expl:"Yêu cầu bắt buộc: muss."},
  {q:"Du ___ (müssen) das nicht sofort entscheiden, wir haben noch Zeit.",hint:"müssen",accept:["musst"],level:"A2",expl:"“nicht müssen” = không bắt buộc, KHÔNG phải bị cấm."},
  {q:"Hier ___ (dürfen) man nicht fotografieren — das ist streng verboten.",hint:"dürfen",accept:["darf"],level:"A2",expl:"Diễn tả cấm phải dùng “darf nicht”, không phải “muss nicht”."},
  {q:"Ich ___ (müssen) morgen früh zum Flughafen.",hint:"müssen",accept:["muss"],level:"A1",expl:"Bắt buộc: muss."},
  {q:"Wir ___ (müssen) die Rechnung bis Freitag bezahlen.",hint:"müssen",accept:["müssen"],level:"A2",expl:"Bắt buộc, số nhiều: müssen."},
  {q:"Du ___ (müssen) nicht alles sofort verstehen.",hint:"müssen",accept:["musst"],level:"A2",expl:"“nicht müssen” = không bắt buộc."},
  {q:"Man ___ (müssen) in Deutschland einen Ausweis mit sich tragen.",hint:"müssen",accept:["muss"],level:"B1",expl:"Quy định bắt buộc: muss."},
  {q:"Ihr ___ (müssen) die Hausaufgaben bis morgen machen.",hint:"müssen",accept:["müsst"],level:"A1",expl:"Bắt buộc, ngôi ihr: müsst."},
  {q:"Hier ___ (dürfen) man keinen Alkohol trinken — es ist verboten.",hint:"dürfen",accept:["darf"],level:"A2",expl:"Diễn tả cấm: darf nicht."},
  {q:"Wir ___ (müssen, Präteritum) letztes Jahr viel arbeiten.",hint:"müssen",accept:["mussten"],level:"A2",expl:"Quá khứ của müssen, số nhiều: mussten."},
 ],
 "de-modal-rat": [
  {q:"Du siehst müde aus. Du ___ (sollen, Konjunktiv II) wirklich früher schlafen gehen.",hint:"sollen",accept:["solltest"],level:"A2",expl:"Lời khuyên nhẹ nhàng: solltest (Konjunktiv II của sollen)."},
  {q:"Der Arzt sagt, ich ___ (sollen) weniger Fast Food essen.",hint:"sollen",accept:["soll"],level:"A2",expl:"Nhắc lại yêu cầu của người khác (bác sĩ): soll."},
  {q:"Du ___ (sollen, Konjunktiv II) mehr Wasser trinken.",hint:"sollen",accept:["solltest"],level:"A2",expl:"Lời khuyên: solltest."},
  {q:"Ihr ___ (sollen, Konjunktiv II) euch mehr bewegen.",hint:"sollen",accept:["solltet"],level:"B1",expl:"Lời khuyên, ngôi ihr: solltet."},
  {q:"Er ___ (sollen) laut seiner Mutter mehr lernen.",hint:"sollen",accept:["soll"],level:"A2",expl:"Nhắc lại yêu cầu của người khác: soll."},
  {q:"Wir ___ (sollen, Konjunktiv II) früher losfahren, um den Stau zu vermeiden.",hint:"sollen",accept:["sollten"],level:"B1",expl:"Lời khuyên, số nhiều: sollten."},
  {q:"Du ___ (sollen, Konjunktiv II) nicht so viel Stress haben.",hint:"sollen",accept:["solltest"],level:"B1",expl:"Lời khuyên: solltest."},
  {q:"Meine Eltern sagen, ich ___ (sollen) öfter anrufen.",hint:"sollen",accept:["soll"],level:"A2",expl:"Nhắc lại yêu cầu của người khác: soll."},
  {q:"Sie ___ (sollen, Konjunktiv II) wirklich einen Arzt aufsuchen.",hint:"sollen",accept:["sollte"],level:"B1",expl:"Lời khuyên: sollte."},
  {q:"___ (sollen, Konjunktiv II) wir das Fenster schließen? Es ist kalt.",hint:"sollen",accept:["Sollten"],level:"B1",expl:"Đề xuất lịch sự: Sollten wir…?"},
 ],
 "de-modal-wunsch": [
  {q:"Guten Tag, ich ___ (möchten) gern einen Tisch für zwei Personen reservieren.",hint:"möchten",accept:["möchte"],level:"A1",expl:"Yêu cầu lịch sự với người lạ (nhà hàng): möchte."},
  {q:"Mein Bruder ___ (wollen) unbedingt Fußballprofi werden.",hint:"wollen",accept:["will"],level:"A2",expl:"Ý định/mục tiêu cá nhân mạnh mẽ: will."},
  {q:"Ich ___ (möchten) gern einen Kaffee, bitte.",hint:"möchten",accept:["möchte"],level:"A1",expl:"Yêu cầu lịch sự: möchte."},
  {q:"___ (wollen) du wirklich schon gehen?",hint:"wollen",accept:["Willst"],level:"A1",expl:"Ý định rõ ràng, câu hỏi: willst."},
  {q:"Wir ___ (möchten) das Zimmer bitte wechseln.",hint:"möchten",accept:["möchten"],level:"A1",expl:"Yêu cầu lịch sự, số nhiều: möchten."},
  {q:"Sie ___ (wollen) unbedingt in Deutschland studieren.",hint:"wollen",accept:["will"],level:"A2",expl:"Ý định mạnh mẽ: will."},
  {q:"___ (möchten) Sie noch etwas bestellen?",hint:"möchten",accept:["Möchten"],level:"A1",expl:"Hỏi lịch sự: Möchten Sie…?"},
  {q:"Ich ___ (wollen) nächstes Jahr nach Norwegen reisen.",hint:"wollen",accept:["will"],level:"A2",expl:"Ý định cá nhân: will."},
  {q:"Die Kinder ___ (wollen) unbedingt ins Schwimmbad gehen.",hint:"wollen",accept:["wollen"],level:"A2",expl:"Mong muốn mạnh, số nhiều: wollen."},
  {q:"___ (möchten) ihr lieber Tee oder Kaffee?",hint:"möchten",accept:["Möchtet"],level:"A1",expl:"Hỏi lịch sự, ngôi ihr: Möchtet ihr…?"},
 ],
 "de-modal-vermutung": [
  {q:"Das Licht ist an und ihr Auto steht da. Sie ___ (müssen) zu Hause sein.",hint:"müssen",accept:["muss"],level:"B1",expl:"Suy đoán chắc chắn dựa trên bằng chứng rõ ràng: muss sein."},
  {q:"Ich bin nicht sicher, aber er ___ (können) im Büro sein.",hint:"können",accept:["könnte"],level:"B1",expl:"Suy đoán không chắc chắn: könnte sein."},
  {q:"Das ___ (können) nicht wahr sein! Das ist unglaublich.",hint:"können",accept:["kann"],level:"B1",expl:"Loại trừ khả năng, phủ định mạnh: kann nicht sein."},
  {q:"Er antwortet nicht. Er ___ (müssen) beschäftigt sein.",hint:"müssen",accept:["muss"],level:"B1",expl:"Suy đoán chắc chắn: muss sein."},
  {q:"Sie kommt oft zu spät. Sie ___ (können) im Stau stehen.",hint:"können",accept:["könnte"],level:"B1",expl:"Suy đoán không chắc chắn: könnte sein."},
  {q:"Das Zimmer ist leer. Sie ___ (müssen) schon gegangen sein.",hint:"müssen",accept:["muss"],level:"B2",expl:"Suy đoán quá khứ chắc chắn: muss + Partizip II + sein."},
  {q:"Er sieht müde aus. Er ___ (müssen) wenig geschlafen haben.",hint:"müssen",accept:["muss"],level:"B2",expl:"Suy đoán quá khứ: muss + Partizip II + haben."},
  {q:"Das ___ (können) nicht stimmen — das ist unmöglich.",hint:"können",accept:["kann"],level:"B1",expl:"Loại trừ khả năng: kann nicht stimmen."},
  {q:"Sie lächelt die ganze Zeit. Sie ___ (müssen) gute Nachrichten haben.",hint:"müssen",accept:["muss"],level:"B1",expl:"Suy đoán chắc chắn: muss."},
  {q:"Er ist nicht ans Telefon gegangen. Er ___ (können) beschäftigt sein.",hint:"können",accept:["könnte"],level:"B1",expl:"Suy đoán không chắc chắn: könnte sein."},
 ],
};

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Câu ngữ cảnh, gõ đúng dạng modal verb"},
};
const POOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => POOL.push({
 type:"fill",kind:"input",retry:true,
 prompt:fmt(it.q.replace(/ \(.+?\)/,"")),
 hint:`Gợi ý: <b>${esc(it.hint)}</b>. Gõ đúng dạng đã chia.`,
 accept:it.accept,plain:it.accept[0],ref,level:it.level,expl:it.expl,
})));

const RUSH=[
 ["khả năng làm được",["de-modal-fähigkeit"]],["kann",["de-modal-fähigkeit"]],
 ["xin phép / quy định cho phép",["de-modal-erlaubnis"]],["darf",["de-modal-erlaubnis"]],
 ["bắt buộc",["de-modal-pflicht"]],["muss",["de-modal-pflicht"]],["không bắt buộc (muss nicht)",["de-modal-pflicht"]],
 ["lời khuyên",["de-modal-rat"]],["sollte",["de-modal-rat"]],
 ["mong muốn lịch sự",["de-modal-wunsch"]],["möchte",["de-modal-wunsch"]],["ý định mạnh (will)",["de-modal-wunsch"]],
 ["suy đoán chắc chắn",["de-modal-vermutung"]],["suy đoán không chắc",["de-modal-vermutung"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["modalverben"] = { pool: POOL, types: TYPES, game: {title:"Welches Modalverb?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng nhóm nghĩa",prompt:"Dấu hiệu này thuộc nhóm nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"modalRushBest"} };
})();
