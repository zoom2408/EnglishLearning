/* de/content/quiz/modalverben.js: practice questions for Modalverben.
   Single exercise type: context sentences, type the correctly
   conjugated modal verb. Wrong answers can be retried (retry:true). */
(() => {
const FILL=[
 // Fähigkeit
 ["Meine Schwester ist erst vier, aber sie ___ (können) schon lesen.","können",["kann"],"de-modal-fähigkeit","Khả năng đã học được: können, chia theo er/sie/es."],
 ["Entschuldigung, ich ___ (können) heute leider nicht kommen, ich bin krank.","können",["kann"],"de-modal-fähigkeit","Khả năng bị giới hạn bởi hoàn cảnh (ốm): kann nicht."],
 ["___ (können) du mir bitte helfen?","können",["Kannst"],"de-modal-fähigkeit","Câu hỏi với du: kannst."],

 // Erlaubnis
 ["___ (dürfen) ich bitte das Fenster öffnen? Es ist sehr warm.","dürfen",["Darf"],"de-modal-erlaubnis","Xin phép lịch sự: darf."],
 ["In der Bibliothek ___ (dürfen) man nicht laut sprechen.","dürfen",["darf"],"de-modal-erlaubnis","Quy định cấm: darf nicht (man + darf, ngôi thứ 3 số ít)."],
 ["Als Kind ___ (dürfen, Präteritum) ich abends nicht lange fernsehen.","dürfen",["durfte"],"de-modal-erlaubnis","Quá khứ của dürfen: durfte (không được phép, quy định của cha mẹ)."],

 // Pflicht & Verbot
 ["Für diesen Job ___ (müssen) man fließend Englisch sprechen.","müssen",["muss"],"de-modal-pflicht","Yêu cầu bắt buộc: muss."],
 ["Du ___ (müssen) das nicht sofort entscheiden, wir haben noch Zeit.","müssen",["musst"],"de-modal-pflicht","“nicht müssen” = không bắt buộc, KHÔNG phải bị cấm."],
 ["Hier ___ (dürfen) man nicht fotografieren — das ist streng verboten.","dürfen",["darf"],"de-modal-pflicht","Diễn tả cấm phải dùng “darf nicht”, không phải “muss nicht”."],

 // Rat
 ["Du siehst müde aus. Du ___ (sollen, Konjunktiv II) wirklich früher schlafen gehen.","sollen",["solltest"],"de-modal-rat","Lời khuyên nhẹ nhàng: solltest (Konjunktiv II của sollen)."],
 ["Der Arzt sagt, ich ___ (sollen) weniger Fast Food essen.","sollen",["soll"],"de-modal-rat","Nhắc lại yêu cầu của người khác (bác sĩ): soll."],

 // Wunsch & Höflichkeit
 ["Guten Tag, ich ___ (möchten) gern einen Tisch für zwei Personen reservieren.","möchten",["möchte"],"de-modal-wunsch","Yêu cầu lịch sự với người lạ (nhà hàng): möchte."],
 ["Mein Bruder ___ (wollen) unbedingt Fußballprofi werden.","wollen",["will"],"de-modal-wunsch","Ý định/mục tiêu cá nhân mạnh mẽ: will."],

 // Vermutung
 ["Das Licht ist an und ihr Auto steht da. Sie ___ (müssen) zu Hause sein.","müssen",["muss"],"de-modal-vermutung","Suy đoán chắc chắn dựa trên bằng chứng rõ ràng: muss sein."],
 ["Ich bin nicht sicher, aber er ___ (können) im Büro sein.","können",["könnte"],"de-modal-vermutung","Suy đoán không chắc chắn: könnte sein."],
 ["Das ___ (können) nicht wahr sein! Das ist unglaublich.","können",["kann"],"de-modal-vermutung","Loại trừ khả năng, phủ định mạnh: kann nicht sein."],
];

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Câu ngữ cảnh, gõ đúng dạng modal verb"},
};
const POOL=[];
FILL.forEach(([s,v,acc,ref,ex])=>POOL.push({type:"fill",kind:"input",retry:true,prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Gõ đúng dạng đã chia.`,accept:acc,plain:acc[0],ref,expl:ex}));

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
