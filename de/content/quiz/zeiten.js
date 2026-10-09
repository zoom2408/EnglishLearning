/* de/content/quiz/zeiten.js: practice questions for the German tenses
   module. BANK groups items by tense code (ps/prt/pf/pqp/f1/f2) —
   TN[c] maps each code to its row id (defined in
   content/theory/zeiten.js, loaded first). Single exercise type:
   context sentences, type the correct form of the verb in brackets.
   Wrong answers can be retried (retry:true) instead of being
   revealed immediately. */
(() => {
const BANK = {
 ps: [
  {q:"Jeden Morgen stehe ich um sechs Uhr auf. Danach ___ (trinken) ich einen Kaffee und lese die Zeitung.",hint:"trinken",accept:["trinke"],level:"A1",expl:"Thói quen lặp lại hằng ngày: Präsens."},
  {q:"Mein Bruder wohnt seit zwei Jahren in München. Er ___ (arbeiten) dort als Ingenieur.",hint:"arbeiten",accept:["arbeitet"],level:"A1",expl:"Thực trạng hiện tại, chủ ngữ ngôi thứ ba số ít: thêm -t."},
  {q:"Wir haben morgen keinen Unterricht. Am Nachmittag ___ (fahren) wir an den See.",hint:"fahren",accept:["fahren"],level:"A2",expl:"Trạng từ thời gian rõ ràng (morgen) + Präsens diễn tả kế hoạch tương lai gần."},
  {q:"Schau mal aus dem Fenster! Es ___ (regnen) schon wieder.",hint:"regnen",accept:["regnet"],level:"A1",expl:"Tiếng Đức không có thì tiếp diễn riêng: việc đang xảy ra ngay lúc nói vẫn dùng Präsens."},
  {q:"Meine Schwester ___ (lernen) jeden Abend Englisch.",hint:"lernen",accept:["lernt"],level:"A1",expl:"Thói quen lặp lại hằng ngày: Präsens."},
  {q:"Hör mal zu! Das Baby ___ (weinen) schon wieder.",hint:"weinen",accept:["weint"],level:"A1",expl:"Việc đang xảy ra ngay lúc nói: Präsens."},
  {q:"Am Wochenende ___ (besuchen) ich meine Großeltern.",hint:"besuchen",accept:["besuche"],level:"A2",expl:"Trạng từ thời gian rõ ràng + Präsens diễn tả kế hoạch tương lai gần."},
  {q:"Normalerweise ___ (essen) wir um sieben Uhr Abendbrot.",hint:"essen",accept:["essen"],level:"A1",expl:"Thói quen lặp lại hằng ngày: Präsens."},
  {q:"Übermorgen ___ (fliegen) wir nach Spanien.",hint:"fliegen",accept:["fliegen"],level:"A2",expl:"Trạng từ thời gian rõ ràng + Präsens diễn tả kế hoạch tương lai gần."},
  {q:"Er ___ (lesen) gerade ein spannendes Buch.",hint:"lesen",accept:["liest"],level:"A1",expl:"Việc đang xảy ra ngay lúc nói (gerade): Präsens."},
 ],
 prt: [
  {q:"Gestern war ein langer Tag. Ich ___ (arbeiten) bis acht Uhr abends im Büro.",hint:"arbeiten",accept:["arbeitete"],level:"A2",expl:"“Gestern”: mốc quá khứ xác định, văn phong kể chuyện/báo cáo dùng Präteritum."},
  {q:"Es war einmal ein kleines Dorf am Fluss. Die Menschen dort ___ (leben) sehr einfach.",hint:"leben",accept:["lebten"],level:"A2",expl:"Thì kể chuyện trong văn viết: Präteritum."},
  {q:"Als ich ein Kind war, ___ (haben) wir keinen Fernseher zu Hause.",hint:"haben",accept:["hatten"],level:"A2",expl:"“haben” luôn chia ở Präteritum ngay cả trong khẩu ngữ, không dùng Perfekt."},
  {q:"Letztes Jahr ___ (sein) ich zum ersten Mal in Italien.",hint:"sein",accept:["war"],level:"A2",expl:"“sein” là một trong số ít động từ luôn chia ở Präteritum kể cả khi nói."},
  {q:"Damals ___ (wohnen) wir noch in einem kleinen Dorf.",hint:"wohnen",accept:["wohnten"],level:"A2",expl:"“Damals”: mốc quá khứ xa, văn phong kể chuyện dùng Präteritum."},
  {q:"Der König ___ (haben) drei Töchter, die alle sehr klug waren.",hint:"haben",accept:["hatte"],level:"B1",expl:"“haben” luôn chia ở Präteritum; thì kể chuyện cổ tích."},
  {q:"Letzte Woche ___ (besuchen) uns unsere Freunde aus Köln.",hint:"besuchen",accept:["besuchten"],level:"A2",expl:"“Letzte Woche”: mốc quá khứ xác định, Präteritum trong văn viết/báo cáo."},
  {q:"Als Kind ___ (spielen) ich jeden Tag im Garten.",hint:"spielen",accept:["spielte"],level:"A2",expl:"Kể lại một giai đoạn trong quá khứ: Präteritum."},
  {q:"Vor zwei Jahren ___ (kaufen) meine Eltern ein neues Haus.",hint:"kaufen",accept:["kauften"],level:"A2",expl:"“Vor zwei Jahren”: mốc quá khứ xác định, Präteritum trong văn viết."},
  {q:"Einmal ___ (gehen) ein Mann durch den Wald.",hint:"gehen",accept:["ging"],level:"B1",expl:"Mở đầu kể chuyện (“einmal”): Präteritum."},
 ],
 pf: [
  {q:"Wie war dein Wochenende? Ich ___ (sehen) am Samstag einen tollen Film.",hint:"sehen",accept:["habe gesehen"],level:"A2",expl:"Kể lại việc đã xảy ra trong hội thoại hằng ngày: haben + Partizip II."},
  {q:"Entschuldigung, ich bin spät. Mein Zug ___ (verspäten) sich leider.",hint:"verspäten",accept:["hat verspätet"],level:"B1",expl:"Khẩu ngữ Đức ưu tiên Perfekt để kể về quá khứ, dù không có mốc thời gian cụ thể."},
  {q:"Letzte Woche ___ (umziehen) meine Schwester nach Hamburg.",hint:"umziehen",accept:["ist umgezogen"],level:"B1",expl:"Động từ chỉ sự thay đổi trạng thái/di chuyển (umziehen) dùng trợ động từ “sein”, không phải “haben”."},
  {q:"___ (sein) du schon einmal in Japan?",hint:"sein",accept:["bist … gewesen","bist du gewesen"],level:"B1",expl:"Trải nghiệm, không gắn mốc thời gian cụ thể: Perfekt với “schon einmal”."},
  {q:"Gestern Abend ___ (kochen) ich ein leckeres Essen.",hint:"kochen",accept:["habe gekocht"],level:"A2",expl:"Kể lại việc đã xảy ra trong hội thoại hằng ngày: haben + Partizip II."},
  {q:"Meine Eltern ___ (reisen) letztes Jahr nach Thailand.",hint:"reisen",accept:["sind gereist"],level:"B1",expl:"Động từ chỉ sự di chuyển (reisen) dùng trợ động từ “sein”."},
  {q:"Noch nie ___ (essen) ich so gutes Sushi.",hint:"essen",accept:["habe … gegessen","habe gegessen"],level:"B1",expl:"Trải nghiệm chưa từng có: Perfekt với “noch nie”."},
  {q:"Heute Morgen ___ (aufstehen) ich sehr früh.",hint:"aufstehen",accept:["bin aufgestanden"],level:"A2",expl:"Động từ chỉ sự thay đổi trạng thái (aufstehen) dùng trợ động từ “sein”."},
  {q:"Wir ___ (sprechen) gerade eben über das Projekt.",hint:"sprechen",accept:["haben gesprochen"],level:"B1",expl:"Việc vừa mới xảy ra: Perfekt với “gerade eben”."},
  {q:"Sie ___ (ankommen) vor einer Stunde am Flughafen.",hint:"ankommen",accept:["ist angekommen"],level:"A2",expl:"Động từ chỉ sự di chuyển (ankommen) dùng trợ động từ “sein”."},
 ],
 pqp: [
  {q:"Als ich am Bahnhof ankam, ___ (abfahren) der Zug schon.",hint:"abfahren",accept:["war … abgefahren","war schon abgefahren"],level:"B1",expl:"Việc đã xảy ra TRƯỚC một mốc quá khứ khác (ankam): Plusquamperfekt."},
  {q:"Bevor wir ins Kino gingen, ___ (essen) wir schon zu Abend.",hint:"essen",accept:["hatten … gegessen","hatten schon gegessen"],level:"B1",expl:"Trước mệnh đề “bevor” ở Präteritum: việc ăn tối xảy ra trước đó."},
  {q:"Nachdem er die Prüfung ___ (bestehen), feierte er mit seinen Freunden.",hint:"bestehen",accept:["bestanden hatte"],level:"B1",expl:"Mệnh đề “nachdem” + việc xảy ra trước mệnh đề chính ở Präteritum: Plusquamperfekt."},
  {q:"Sie war sehr müde, weil sie die ganze Nacht nicht ___ (schlafen).",hint:"schlafen",accept:["geschlafen hatte"],level:"B1",expl:"Nguyên nhân cho một trạng thái trong quá khứ, xảy ra trước đó: Plusquamperfekt."},
  {q:"Bevor sie nach Hause ging, ___ (anrufen) sie schon ihre Mutter.",hint:"anrufen",accept:["hatte … angerufen","hatte schon angerufen"],level:"B1",expl:"Trước mệnh đề “bevor” ở Präteritum: việc gọi điện xảy ra trước đó."},
  {q:"Nachdem wir das Haus ___ (verkaufen), zogen wir in eine neue Stadt.",hint:"verkaufen",accept:["verkauft hatten"],level:"B2",expl:"Mệnh đề “nachdem” + việc xảy ra trước mệnh đề chính ở Präteritum: Plusquamperfekt."},
  {q:"Als der Film begann, ___ (ankommen) wir schon im Kino.",hint:"ankommen",accept:["waren … angekommen","waren schon angekommen"],level:"B2",expl:"Việc đã xảy ra TRƯỚC một mốc quá khứ khác (begann): Plusquamperfekt với “sein”."},
  {q:"Er war traurig, weil sein Hund ___ (weglaufen).",hint:"weglaufen",accept:["weggelaufen war"],level:"B2",expl:"Nguyên nhân cho một trạng thái trong quá khứ, xảy ra trước đó: Plusquamperfekt với “sein”."},
  {q:"Nachdem sie die Arbeit ___ (beenden), ging sie schlafen.",hint:"beenden",accept:["beendet hatte"],level:"B1",expl:"Mệnh đề “nachdem” + việc xảy ra trước mệnh đề chính ở Präteritum: Plusquamperfekt."},
  {q:"Bevor der Zug abfuhr, ___ (einsteigen) ich gerade noch.",hint:"einsteigen",accept:["war … eingestiegen","war gerade noch eingestiegen"],level:"B2",expl:"Trước mệnh đề “bevor” ở Präteritum: việc lên tàu xảy ra ngay trước đó."},
 ],
 f1: [
  {q:"Ich bin mir nicht sicher, aber ich glaube, es ___ (regnen) morgen.",hint:"regnen",accept:["wird regnen"],level:"A2",expl:"Dự đoán không chắc chắn (ich glaube): Futur I."},
  {q:"Wenn du fleißig lernst, ___ (bestehen) du die Prüfung sicher.",hint:"bestehen",accept:["wirst … bestehen","wirst bestehen"],level:"B1",expl:"Dự đoán có suy luận, mệnh đề điều kiện: Futur I ở mệnh đề chính."},
  {q:"Ich verspreche dir: Ich ___ (anrufen) dich, sobald ich ankomme.",hint:"anrufen",accept:["werde … anrufen","werde anrufen"],level:"B1",expl:"Lời hứa trang trọng: Futur I."},
  {q:"Die Mieten in der Stadt ___ (weiter / steigen) in den nächsten Jahren.",hint:"weiter / steigen",accept:["werden weiter steigen"],level:"B1",expl:"Dự đoán xu hướng dài hạn, không có trạng từ thời gian cụ thể: ưu tiên Futur I thay vì Präsens."},
  {q:"Wahrscheinlich ___ (kommen) er morgen etwas später.",hint:"kommen",accept:["wird kommen"],level:"A2",expl:"Dự đoán với “wahrscheinlich”: Futur I."},
  {q:"Ich ___ (helfen) dir bestimmt beim Umzug.",hint:"helfen",accept:["werde helfen"],level:"A2",expl:"Lời hứa chắc chắn (“bestimmt”): Futur I."},
  {q:"Nächstes Jahr ___ (studieren) sie an der Universität Berlin.",hint:"studieren",accept:["wird studieren"],level:"B1",expl:"Kế hoạch xa trong tương lai, nhấn mạnh dự định: Futur I."},
  {q:"Er ___ (vielleicht / mitkommen) morgen.",hint:"vielleicht / mitkommen",accept:["wird vielleicht mitkommen"],level:"B1",expl:"Dự đoán không chắc chắn (“vielleicht”): Futur I."},
  {q:"In Zukunft ___ (arbeiten) die Menschen mehr von zu Hause aus.",hint:"arbeiten",accept:["werden arbeiten"],level:"B1",expl:"Dự đoán xu hướng dài hạn: Futur I."},
  {q:"Die Firma ___ (bald / expandieren).",hint:"bald / expandieren",accept:["wird bald expandieren"],level:"B2",expl:"Dự đoán về tương lai gần: Futur I."},
 ],
 f2: [
  {q:"Bis nächsten Freitag ___ (abschließen) wir das Projekt.",hint:"abschließen",accept:["werden … abgeschlossen haben","werden abgeschlossen haben"],level:"B2",expl:"“Bis + mốc tương lai”: việc sẽ hoàn thành trước mốc đó, Futur II."},
  {q:"Bis Mitternacht ___ (beenden) ich meine Hausarbeit bestimmt.",hint:"beenden",accept:["werde … beendet haben","werde beendet haben"],level:"B2",expl:"“Bis + mốc tương lai” + “bestimmt”: dự đoán việc sẽ hoàn thành, Futur II."},
  {q:"Er antwortet nicht. Er ___ (vielleicht / schon / einschlafen).",hint:"vielleicht / schon / einschlafen",accept:["wird vielleicht schon eingeschlafen sein"],level:"B2",expl:"Phỏng đoán về một việc đã xảy ra trong quá khứ gần: Futur II."},
  {q:"Bis du zurückkommst, ___ (ich / das Haus / aufräumen).",hint:"ich / das Haus / aufräumen",accept:["werde ich das Haus aufgeräumt haben"],level:"B2",expl:"“Bis + mệnh đề tương lai”: việc sẽ hoàn thành trước mốc đó, Futur II."},
  {q:"Bis morgen Abend ___ (ich / den Bericht / schreiben).",hint:"ich / den Bericht / schreiben",accept:["werde ich den Bericht geschrieben haben"],level:"B2",expl:"“Bis + mốc tương lai”: việc sẽ hoàn thành trước mốc đó, Futur II."},
  {q:"Bis zum Sommer ___ (wir / das Haus / renovieren).",hint:"wir / das Haus / renovieren",accept:["werden wir das Haus renoviert haben"],level:"B2",expl:"“Bis + mốc tương lai”: việc sẽ hoàn thành trước mốc đó, Futur II."},
  {q:"Sie meldet sich nicht. Sie ___ (wohl / schon / abreisen).",hint:"wohl / schon / abreisen",accept:["wird wohl schon abgereist sein"],level:"B2",expl:"Phỏng đoán về một việc đã xảy ra trong quá khứ gần: Futur II."},
  {q:"Bis nächste Woche ___ (er / die Prüfung / machen).",hint:"er / die Prüfung / machen",accept:["wird er die Prüfung gemacht haben"],level:"B2",expl:"“Bis + mốc tương lai”: việc sẽ hoàn thành trước mốc đó, Futur II."},
  {q:"Er ist nicht da. Er ___ (vielleicht / schon / weggehen).",hint:"vielleicht / schon / weggehen",accept:["wird vielleicht schon weggegangen sein"],level:"B2",expl:"Phỏng đoán về một việc đã xảy ra trong quá khứ gần: Futur II."},
  {q:"Bis Ende des Monats ___ (sie / das Buch / fertigschreiben).",hint:"sie / das Buch / fertigschreiben",accept:["wird sie das Buch fertiggeschrieben haben"],level:"B2",expl:"“Bis + mốc tương lai”: việc sẽ hoàn thành trước mốc đó, Futur II."},
 ],
};

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Câu ngữ cảnh, gõ dạng đúng của động từ"},
};
const POOL=[];
Object.entries(BANK).forEach(([c, items]) => items.forEach(it => POOL.push({
 type:"fill",kind:"input",retry:true,
 prompt:fmt(it.q.replace(/ \(.+?\)/,"")),
 hint:`Gợi ý: <b>${esc(it.hint)}</b>. Gõ phần điền vào chỗ trống.`,
 accept:it.accept,plain:it.accept[0],tense:TN[c],ref:TN[c],level:it.level,expl:it.expl,
})));

const RUSH=[
 ["jeden Tag",["ps"]],["immer",["ps"]],["oft",["ps"]],["manchmal",["ps"]],["normalerweise",["ps"]],["jetzt / gerade",["ps"]],
 ["gestern",["prt"]],["letzte Woche",["prt"]],["letztes Jahr",["prt"]],["damals",["prt"]],["als ich ein Kind war",["prt"]],["einmal (kể chuyện quá khứ)",["prt"]],
 ["schon",["pf","pqp"],"schon có thể đi với Perfekt (đã xảy ra) hoặc Plusquamperfekt (đã xảy ra trước một mốc quá khứ khác)."],
 ["noch nie",["pf"]],["gerade eben",["pf"]],["in den letzten Tagen",["pf"]],
 ["bevor",["pqp"]],["nachdem",["pqp"]],["als (hai mốc quá khứ)",["pqp"]],
 ["morgen",["f1"]],["wohl",["f1"]],["wahrscheinlich",["f1"]],["in Zukunft",["f1"]],
 ["bis + mốc tương lai",["f2"]],["bis dahin",["f2"]],
];

GRAMMAR.quiz["zeiten"] = { pool: POOL, types: TYPES, game: {title:"Welche Zeit?",desc:"60 giây. Thấy immer, gestern, schon… chọn đúng thì càng nhanh càng tốt",prompt:"Thấy dấu hiệu này, dùng thì nào?",items:RUSH,all:CODES,label:c=>tLabel(TN[c]),name:c=>byId[TN[c]].vi,bestKey:"deRushBest"} };
})();
