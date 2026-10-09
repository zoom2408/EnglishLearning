/* de/content/quiz/passiv.js: practice questions for Passiv. Single
   exercise type: context sentences, type the correctly conjugated
   passive form. Wrong answers can be retried (retry:true). */
(() => {
const FILL=[
 // Vorgangspassiv
 ["Jedes Jahr ___ (dieses Fest / feiern) in der ganzen Stadt.","dieses Fest / feiern",["wird dieses Fest gefeiert"],"de-pass-vorgang","Vorgangspassiv Präsens: werden (chia) + Partizip II."],
 ["Das Schloss ___ (bauen) im 18. Jahrhundert.","bauen",["wurde gebaut"],"de-pass-vorgang","Vorgangspassiv Präteritum: wurde + Partizip II."],
 ["Die Fenster ___ (jeden Freitag / putzen).","jeden Freitag / putzen",["werden jeden Freitag geputzt"],"de-pass-vorgang","Vorgangspassiv Präsens: werden + Partizip II."],
 ["Dieses Buch ___ (von einem berühmten Autor / schreiben).","von einem berühmten Autor / schreiben",["wurde von einem berühmten Autor geschrieben"],"de-pass-vorgang","Chủ thể nêu rõ bằng von + Dativ; Präteritum Passiv: wurde + Partizip II."],

 // Vorgangspassiv Perfekt
 ["Die E-Mail ___ (bereits / senden).","bereits / senden",["ist bereits gesendet worden"],"de-pass-perfekt","Perfekt Passiv: sein + Partizip II + worden."],
 ["Das Problem ___ (schon / lösen).","schon / lösen",["ist schon gelöst worden"],"de-pass-perfekt","Perfekt Passiv: ist + Partizip II + worden, không phải geworden."],
 ["Die neuen Regeln ___ (letzte Woche / einführen).","letzte Woche / einführen",["sind letzte Woche eingeführt worden"],"de-pass-perfekt","Perfekt Passiv số nhiều: sind + Partizip II + worden."],

 // Zustandspassiv
 ["Der Laden ___ (schließen) schon — komm morgen wieder.","schließen",["ist geschlossen"],"de-pass-zustand","Trạng thái kết quả (đã đóng rồi): Zustandspassiv với sein."],
 ["Das Fenster ___ (öffnen) — es ist kalt im Zimmer.","öffnen",["ist geöffnet"],"de-pass-zustand","Trạng thái kết quả (đang mở sẵn): sein + Partizip II."],
 ["Die Tür ___ (jetzt / verschließen).","jetzt / verschließen",["ist jetzt verschlossen"],"de-pass-zustand","Mô tả trạng thái hiện tại (đã khóa): Zustandspassiv."],

 // Passiv mit Modalverben
 ["Die Aufgabe ___ (müssen / heute / erledigen).","müssen / heute / erledigen",["muss heute erledigt werden"],"de-pass-modal","Modal verb (muss) + Partizip II + werden ở cuối câu."],
 ["Das Formular ___ (müssen / vollständig / ausfüllen).","müssen / vollständig / ausfüllen",["muss vollständig ausgefüllt werden"],"de-pass-modal","Modal verb + Partizip II + werden."],
 ["Dieses Problem ___ (können / leicht / lösen).","können / leicht / lösen",["kann leicht gelöst werden"],"de-pass-modal","Modal verb (kann) + Partizip II + werden."],

 // Alternative mit "man"
 ["In der Schweiz ___ (man / vier Sprachen / sprechen).","man / vier Sprachen / sprechen",["spricht man vier Sprachen"],"de-pass-man","Thay vì bị động, dùng man + động từ chia bình thường."],
 ["___ (man / sagen), dass es morgen regnet.","man / sagen",["Man sagt"],"de-pass-man","man + động từ chia: cách tự nhiên hơn “Es wird gesagt”."],
];

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Câu ngữ cảnh, gõ đúng dạng bị động hoặc câu với man"},
};
const POOL=[];
FILL.forEach(([s,v,acc,ref,ex])=>POOL.push({type:"fill",kind:"input",retry:true,prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Gõ cả cụm động từ bị động.`,accept:acc,plain:acc[0],ref,expl:ex}));

const RUSH=[
 ["wird/wurde + Partizip II",["de-pass-vorgang"]],
 ["ist/sind + Partizip II + worden",["de-pass-perfekt"]],
 ["ist/sind + Partizip II (trạng thái)",["de-pass-zustand"]],
 ["muss/kann + Partizip II + werden",["de-pass-modal"]],
 ["man + Verb",["de-pass-man"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["passiv"] = { pool: POOL, types: TYPES, game: {title:"Welche Passivform?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng dạng bị động",prompt:"Dấu hiệu này thuộc dạng nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"passRushBest"} };
})();
