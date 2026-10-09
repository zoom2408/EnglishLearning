/* de/content/theory/modalverben.js
   Modalverben: können, dürfen, müssen, sollen, wollen/möchten, and
   Vermutung (modal + Infinitiv for guesses). Uses the "scale" diagram
   mode, same mechanism as the English modals module. */
(() => {
const T = [
 {id:"de-modal-fähigkeit",num:"01",en:"Fähigkeit",vi:"Khả năng",short:"kann / kann nicht",
  core:"<strong>können</strong> diễn tả khả năng làm được việc gì — về thể chất, đã học được, hoặc do hoàn cảnh cho phép.",
  forms:[["+","ich kann, du kannst, er/sie/es kann, wir können, ihr könnt, sie können + Infinitiv (cuối câu)","Ich <mark>kann</mark> gut <mark>schwimmen</mark>."],["−","nicht trước Infinitiv hoặc sau modal","Ich <mark>kann</mark> heute <mark>nicht kommen</mark>."]],
  uses:[["Khả năng bẩm sinh hoặc đã học","Sie <mark>kann</mark> drei Sprachen <mark>sprechen</mark>."],["Khả năng do hoàn cảnh","Ich <mark>kann</mark> dir leider nicht <mark>helfen</mark>, ich bin krank."]],
  signals:["können","kann","konnte (quá khứ)"],
  speak:5,write:4,
  reg:"Modal verb luôn đứng ở vị trí 2, động từ chính ở dạng Infinitiv dồn về cuối câu — không chia, không có “zu”.",
  mistake:["Ich kann zu schwimmen.","Ich kann schwimmen.","Sau modal verb là Infinitiv trần, không có “zu”."],
  scale:{left:"không thể",right:"thành thạo",marks:[[8,"kann nicht"],[50,"kann"],[92,"kann sehr gut"]]}},

 {id:"de-modal-erlaubnis",num:"02",en:"Erlaubnis",vi:"Xin phép / được phép",short:"darf / darf nicht",
  core:"<strong>dürfen</strong> diễn tả được phép làm gì; ở dạng phủ định (darf nicht) là <strong>bị cấm</strong> — khác hẳn “không bắt buộc”.",
  forms:[["+","ich darf, du darfst, er/sie/es darf, wir dürfen, ihr dürft, sie dürfen + Infinitiv","<mark>Darf</mark> ich reinkommen?"],["−","darf nicht = bị cấm","Hier <mark>darf</mark> man <mark>nicht</mark> rauchen."]],
  uses:[["Xin phép lịch sự","<mark>Darf</mark> ich das Fenster <mark>öffnen</mark>?"],["Quy định, luật lệ (cấm ở dạng phủ định)","Man <mark>darf</mark> hier <mark>nicht</mark> parken."]],
  signals:["dürfen","darf","durfte (quá khứ)"],
  speak:4,write:4,
  reg:"Phân biệt rõ: “kann nicht” = không có khả năng làm, còn “darf nicht” = bị cấm làm. Hai lý do hoàn toàn khác nhau.",
  mistake:["Hier kann man nicht rauchen (vì luật cấm).","Hier darf man nicht rauchen.","Luật cấm dùng “darf nicht”, không phải “kann nicht” (vốn chỉ khả năng vật lý)."],
  scale:{left:"cấm",right:"được phép",marks:[[6,"darf nicht"],[50,"darf"],[90,"darf gerne"]]}},

 {id:"de-modal-pflicht",num:"03",en:"Pflicht & Verbot",vi:"Bắt buộc & cấm",short:"muss / muss nicht / darf nicht",
  core:"<strong>müssen</strong> diễn tả bắt buộc. Điểm dễ nhầm nhất: <strong>“nicht müssen”</strong> (không bắt buộc) hoàn toàn khác <strong>“nicht dürfen”</strong> (bị cấm).",
  forms:[["+","ich muss, du musst, er/sie/es muss, wir müssen, ihr müsst, sie müssen + Infinitiv","Ich <mark>muss</mark> morgen früh <mark>aufstehen</mark>."],["− (không bắt buộc)","nicht müssen / nicht brauchen zu","Du <mark>musst</mark> das <mark>nicht</mark> machen, wenn du keine Zeit hast."],["− (bị cấm)","nicht dürfen","Du <mark>darfst</mark> das <mark>nicht</mark> machen — es ist verboten."]],
  uses:[["Bắt buộc, nghĩa vụ","Man <mark>muss</mark> hier einen Ausweis <mark>zeigen</mark>."],["Không bắt buộc (được tự do chọn)","Du <mark>musst</mark> <mark>nicht</mark> kommen, es ist freiwillig."]],
  signals:["müssen","muss","musste (quá khứ)","nicht müssen ≠ nicht dürfen"],
  speak:5,write:4,
  reg:"Đây là lỗi kinh điển của người học: “must not” trong tiếng Anh nghĩa là bị cấm, nhưng “muss nicht” trong tiếng Đức lại có nghĩa là KHÔNG bắt buộc — phải dùng “darf nicht” mới đúng nghĩa cấm.",
  mistake:["Du musst nicht rauchen (ý: bị cấm).","Du darfst nicht rauchen.","Diễn tả cấm phải dùng “darf nicht”; “musst nicht” chỉ có nghĩa “không bắt buộc”."],
  scale:{left:"cấm (darf nicht)",right:"bắt buộc (muss)",marks:[[6,"darf nicht"],[45,"muss nicht"],[95,"muss"]]}},

 {id:"de-modal-rat",num:"04",en:"Rat",vi:"Lời khuyên",short:"sollte (Konjunktiv II)",
  core:"<strong>sollen</strong> ở dạng thường (soll) nghĩa là “được yêu cầu/bảo phải làm”; dạng <strong>sollte</strong> (Konjunktiv II) dùng để <strong>khuyên</strong>, nhẹ nhàng hơn müssen.",
  forms:[["sollte + Infinitiv","Lời khuyên","Du <mark>solltest</mark> mehr Sport <mark>machen</mark>."],["soll + Infinitiv","Được người khác yêu cầu","Ich <mark>soll</mark> um 8 Uhr zu Hause <mark>sein</mark> — meine Mutter hat das gesagt."]],
  uses:[["Lời khuyên cá nhân","Du <mark>solltest</mark> früher <mark>schlafen</mark> gehen."],["Nhắc lại yêu cầu của người khác","Der Arzt sagt, ich <mark>soll</mark> weniger Zucker <mark>essen</mark>."]],
  signals:["sollte","sollen","soll"],
  speak:4,write:4,
  reg:"sollte nhẹ nhàng hơn müssen rất nhiều — giống “nên” trong tiếng Việt, không phải mệnh lệnh.",
  mistake:["Du musst mehr Wasser trinken (chỉ là một lời khuyên nhẹ).","Du solltest mehr Wasser trinken.","Lời khuyên nhẹ dùng sollte, müssen nghe như mệnh lệnh bắt buộc."],
  scale:{left:"gợi ý nhẹ",right:"khuyên mạnh",marks:[[20,"könnte"],[55,"sollte"],[90,"solltest unbedingt"]]}},

 {id:"de-modal-wunsch",num:"05",en:"Wunsch & Höflichkeit",vi:"Mong muốn & lịch sự",short:"will (mạnh) / möchte (lịch sự)",
  core:"<strong>wollen</strong> diễn tả mong muốn rõ ràng, khá thẳng; <strong>möchten</strong> (Konjunktiv II của mögen) lịch sự hơn, dùng khi nói với người lạ hoặc trong nhà hàng, cửa hàng.",
  forms:[["möchte + Infinitiv/Nomen","Mong muốn lịch sự","Ich <mark>möchte</mark> einen Kaffee, bitte."],["will + Infinitiv","Ý định rõ ràng, dứt khoát","Ich <mark>will</mark> Ärztin <mark>werden</mark>."]],
  uses:[["Gọi món, mua hàng lịch sự","Ich <mark>möchte</mark> das bitte <mark>bezahlen</mark>."],["Ý định/mục tiêu cá nhân mạnh mẽ","Er <mark>will</mark> unbedingt nach Deutschland <mark>ziehen</mark>."]],
  signals:["möchte","möchten","will","wollen"],
  speak:5,write:3,
  reg:"Với người lạ hoặc trong tình huống trang trọng (nhà hàng, cửa hàng, công sở), luôn ưu tiên möchte thay vì will — will nghe khá cộc nếu dùng sai ngữ cảnh.",
  mistake:["Ich will einen Kaffee. (nói với nhân viên quán cà phê)","Ich möchte einen Kaffee, bitte.","Với người lạ/phục vụ, möchte lịch sự hơn will."],
  scale:{left:"muốn mạnh (will)",right:"lịch sự (möchte)",marks:[[15,"will"],[80,"möchte"]]}},

 {id:"de-modal-vermutung",num:"06",en:"Vermutung",vi:"Suy đoán",short:"muss / könnte / kann nicht + Infinitiv",
  core:"Modal verb + Infinitiv (hiện tại) hoặc + Partizip II + haben/sein (quá khứ) dùng để <strong>suy đoán</strong> mức độ chắc chắn về một sự việc.",
  forms:[["Hiện tại","modal + Infinitiv","Das <mark>muss</mark> ein Irrtum <mark>sein</mark>."],["Quá khứ","modal + Partizip II + haben/sein","Er <mark>muss</mark> krank <mark>gewesen sein</mark>."]],
  uses:[["Suy đoán chắc chắn","Sie <mark>muss</mark> zu Hause <mark>sein</mark> — das Licht ist an."],["Suy đoán không chắc","Er <mark>könnte</mark> im Stau <mark>sein</mark>."],["Loại trừ khả năng","Das <mark>kann</mark> <mark>nicht</mark> wahr <mark>sein</mark>."]],
  signals:["muss sein","könnte sein","dürfte sein","kann nicht sein"],
  speak:3,write:3,
  reg:"Suy đoán về quá khứ luôn cần thêm haben/sein sau Partizip II — rất hay bị quên.",
  mistake:["Er muss krank gewesen.","Er muss krank gewesen sein.","Suy đoán quá khứ cần modal + Partizip II + sein/haben, không được thiếu sein/haben."],
  scale:{left:"chắc chắn không",right:"chắc chắn có",marks:[[5,"kann nicht sein"],[45,"könnte / dürfte sein"],[95,"muss sein"]]}},
];

registerRows("modalverben", T);
GRAMMAR.theory.modalverben = { rows: T, first: "de-modal-fähigkeit" };
})();
