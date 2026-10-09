/* de/content/quiz/zeiten.js: practice questions for the German tenses
   module. Single exercise type: context sentences, type the correct
   form of the verb in brackets. Wrong answers can be retried
   (retry:true) instead of being revealed immediately. */
(() => {
// Điền vào chỗ trống (24): [câu (có ngữ cảnh), gợi ý, [đáp án chấp nhận], thì, giải thích]
const FILL=[
 // Präsens
 ["Jeden Morgen stehe ich um sechs Uhr auf. Danach ___ (trinken) ich einen Kaffee und lese die Zeitung.","trinken",["trinke"],"ps","Thói quen lặp lại hằng ngày: Präsens."],
 ["Mein Bruder wohnt seit zwei Jahren in München. Er ___ (arbeiten) dort als Ingenieur.","arbeiten",["arbeitet"],"ps","Thực trạng hiện tại, chủ ngữ ngôi thứ ba số ít: thêm -t."],
 ["Wir haben morgen keinen Unterricht. Am Nachmittag ___ (fahren) wir an den See.","fahren",["fahren"],"ps","Trạng từ thời gian rõ ràng (morgen) + Präsens diễn tả kế hoạch tương lai gần."],
 ["Schau mal aus dem Fenster! Es ___ (regnen) schon wieder.","regnen",["regnet"],"ps","Tiếng Đức không có thì tiếp diễn riêng: việc đang xảy ra ngay lúc nói vẫn dùng Präsens."],

 // Präteritum
 ["Gestern war ein langer Tag. Ich ___ (arbeiten) bis acht Uhr abends im Büro.","arbeiten",["arbeitete"],"prt","“Gestern”: mốc quá khứ xác định, văn phong kể chuyện/báo cáo dùng Präteritum."],
 ["Es war einmal ein kleines Dorf am Fluss. Die Menschen dort ___ (leben) sehr einfach.","leben",["lebten"],"prt","Thì kể chuyện trong văn viết: Präteritum."],
 ["Als ich ein Kind war, ___ (haben) wir keinen Fernseher zu Hause.","haben",["hatten"],"prt","“haben” luôn chia ở Präteritum ngay cả trong khẩu ngữ, không dùng Perfekt."],
 ["Letztes Jahr ___ (sein) ich zum ersten Mal in Italien.","sein",["war"],"prt","“sein” là một trong số ít động từ luôn chia ở Präteritum kể cả khi nói."],

 // Perfekt
 ["Wie war dein Wochenende? Ich ___ (sehen) am Samstag einen tollen Film.","sehen",["habe gesehen"],"pf","Kể lại việc đã xảy ra trong hội thoại hằng ngày: haben + Partizip II."],
 ["Entschuldigung, ich bin spät. Mein Zug ___ (verspäten) sich leider.","verspäten",["hat verspätet"],"pf","Khẩu ngữ Đức ưu tiên Perfekt để kể về quá khứ, dù không có mốc thời gian cụ thể."],
 ["Letzte Woche ___ (umziehen) meine Schwester nach Hamburg.","umziehen",["ist umgezogen"],"pf","Động từ chỉ sự thay đổi trạng thái/di chuyển (umziehen) dùng trợ động từ “sein”, không phải “haben”."],
 ["___ (sein) du schon einmal in Japan?","sein",["bist … gewesen","bist du gewesen"],"pf","Trải nghiệm, không gắn mốc thời gian cụ thể: Perfekt với “schon einmal”."],

 // Plusquamperfekt
 ["Als ich am Bahnhof ankam, ___ (abfahren) der Zug schon.","abfahren",["war … abgefahren","war schon abgefahren"],"pqp","Việc đã xảy ra TRƯỚC một mốc quá khứ khác (ankam): Plusquamperfekt."],
 ["Bevor wir ins Kino gingen, ___ (essen) wir schon zu Abend.","essen",["hatten … gegessen","hatten schon gegessen"],"pqp","Trước mệnh đề “bevor” ở Präteritum: việc ăn tối xảy ra trước đó."],
 ["Nachdem er die Prüfung ___ (bestehen), feierte er mit seinen Freunden.","bestehen",["bestanden hatte"],"pqp","Mệnh đề “nachdem” + việc xảy ra trước mệnh đề chính ở Präteritum: Plusquamperfekt."],
 ["Sie war sehr müde, weil sie die ganze Nacht nicht ___ (schlafen).","schlafen",["geschlafen hatte"],"pqp","Nguyên nhân cho một trạng thái trong quá khứ, xảy ra trước đó: Plusquamperfekt."],

 // Futur I
 ["Ich bin mir nicht sicher, aber ich glaube, es ___ (regnen) morgen.","regnen",["wird regnen"],"f1","Dự đoán không chắc chắn (ich glaube): Futur I."],
 ["Wenn du fleißig lernst, ___ (bestehen) du die Prüfung sicher.","bestehen",["wirst … bestehen","wirst bestehen"],"f1","Dự đoán có suy luận, mệnh đề điều kiện: Futur I ở mệnh đề chính."],
 ["Ich verspreche dir: Ich ___ (anrufen) dich, sobald ich ankomme.","anrufen",["werde … anrufen","werde anrufen"],"f1","Lời hứa trang trọng: Futur I."],
 ["Die Mieten in der Stadt ___ (weiter / steigen) in den nächsten Jahren.","weiter / steigen",["werden weiter steigen"],"f1","Dự đoán xu hướng dài hạn, không có trạng từ thời gian cụ thể: ưu tiên Futur I thay vì Präsens."],

 // Futur II
 ["Bis nächsten Freitag ___ (abschließen) wir das Projekt.","abschließen",["werden … abgeschlossen haben","werden abgeschlossen haben"],"f2","“Bis + mốc tương lai”: việc sẽ hoàn thành trước mốc đó, Futur II."],
 ["Bis Mitternacht ___ (beenden) ich meine Hausarbeit bestimmt.","beenden",["werde … beendet haben","werde beendet haben"],"f2","“Bis + mốc tương lai” + “bestimmt”: dự đoán việc sẽ hoàn thành, Futur II."],
 ["Er antwortet nicht. Er ___ (vielleicht / schon / einschlafen).","vielleicht / schon / einschlafen",["wird vielleicht schon eingeschlafen sein"],"f2","Phỏng đoán về một việc đã xảy ra trong quá khứ gần: Futur II."],
 ["Bis du zurückkommst, ___ (ich / das Haus / aufräumen).","ich / das Haus / aufräumen",["werde ich das Haus aufgeräumt haben"],"f2","“Bis + mệnh đề tương lai”: việc sẽ hoàn thành trước mốc đó, Futur II."],
];

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Câu ngữ cảnh, gõ dạng đúng của động từ"},
};
const POOL=[];
FILL.forEach(([s,v,acc,c,ex])=>POOL.push({type:"fill",kind:"input",retry:true,prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Gõ phần điền vào chỗ trống.`,accept:acc,plain:acc[0],tense:TN[c],expl:ex}));
POOL.forEach(q=>q.ref=q.tense);

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
