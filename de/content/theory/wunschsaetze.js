/* de/content/theory/wunschsaetze.js
   Wunschsätze: Wunsch Gegenwart, Wunsch Vergangenheit, Wenn...doch...!
   Uses the "xf" diagram mode, framed as Thực tế → Ước muốn. */
(() => {
const T = [
 {id:"de-wunsch-gegenwart",num:"01",en:"Wunsch in der Gegenwart",vi:"Ước muốn hiện tại",short:"Ich wünschte, … + Präteritum Konj. II / würde",
  core:"Diễn tả <strong>ước muốn về hiện tại</strong> — điều không đúng với thực tế bây giờ. Dùng Konjunktiv II (Präteritum hoặc würde + Infinitiv), giống hệt cấu trúc mệnh đề wenn Loại 2.",
  forms:[["+","Ich wünschte, + Subjekt + … + Konjunktiv II (cuối)","Ich wünschte, ich <mark>hätte</mark> mehr Zeit."],["+ würde","Ich wünschte, + Subjekt + würde + Infinitiv","Ich wünschte, es <mark>würde</mark> nicht <mark>regnen</mark>."]],
  uses:[["Ước một điều khác với hiện tại","Ich wünschte, ich <mark>wäre</mark> größer."],["Ước thay đổi một tình huống đang gây khó chịu","Ich wünschte, du <mark>würdest</mark> mir <mark>zuhören</mark>."]],
  signals:["Ich wünschte, …","Wenn ich doch … wäre/hätte!"],
  speak:4,write:4,
  reg:"Cấu trúc này dùng Konjunktiv II y hệt mệnh đề wenn Loại 2 — nếu đã thuộc Konditionalsätze Typ II thì Wunschsätze gần như miễn phí.",
  mistake:["Ich wünschte, ich bin reich.","Ich wünschte, ich wäre reich.","Sau “Ich wünschte” luôn dùng Konjunktiv II, không dùng thì hiện tại thường."],
  xf:{la:"Thực tế",lb:"Ước muốn",a:"Ich habe keine Zeit.",b:"Ich wünschte, ich hätte mehr Zeit.",note:"Konjunktiv II (hätte) diễn tả điều trái với thực tế hiện tại."}},

 {id:"de-wunsch-vergangenheit",num:"02",en:"Wunsch in der Vergangenheit",vi:"Ước muốn quá khứ (tiếc nuối)",short:"Ich wünschte, … + Plusquamperfekt Konj. II",
  core:"Diễn tả <strong>tiếc nuối về quá khứ</strong> — điều đã không xảy ra như mong muốn. Dùng Konjunktiv II Plusquamperfekt: hätte/wäre + Partizip II.",
  forms:[["+","Ich wünschte, + Subjekt + … + Partizip II + hätte/wäre","Ich wünschte, ich <mark>hätte</mark> mehr <mark>gelernt</mark>."]],
  uses:[["Tiếc nuối về một việc đã/chưa xảy ra","Ich wünschte, ich <mark>wäre</mark> früher <mark>gekommen</mark>."]],
  signals:["Ich wünschte, … + Partizip II + hätte/wäre","Wenn ich doch … gewesen wäre!"],
  speak:3,write:4,
  reg:"Cấu trúc này giống hệt mệnh đề wenn Loại 3 — một cách khác để diễn tả tiếc nuối về quá khứ.",
  mistake:["Ich wünschte, ich hätte mehr Zeit gehabt haben.","Ich wünschte, ich hätte mehr Zeit gehabt.","Chỉ cần hätte + Partizip II, không lặp thêm haben."],
  xf:{la:"Thực tế",lb:"Ước muốn (tiếc nuối)",a:"Ich habe nicht genug gelernt.",b:"Ich wünschte, ich hätte mehr gelernt.",note:"Konjunktiv II Plusquamperfekt (hätte… gelernt) diễn tả tiếc nuối về quá khứ."}},

 {id:"de-wunsch-wenndoch",num:"03",en:"Wenn … doch …!",vi:"Câu cảm thán ước muốn",short:"Wenn + S + … + doch + Konj. II (cuối)!",
  core:"Cách diễn đạt ước muốn <strong>mang tính cảm thán</strong>, dùng từ nhấn mạnh “doch” (hoặc “nur”) — ý nghĩa giống hệt “Ich wünschte”, chỉ khác sắc thái cảm xúc mạnh hơn.",
  forms:[["Hiện tại","Wenn + S + … + doch + Konjunktiv II (cuối)!","<mark>Wenn</mark> ich <mark>doch</mark> mehr Zeit <mark>hätte</mark>!"],["Quá khứ","Wenn + S + … + doch + Partizip II + hätte/wäre!","<mark>Wenn</mark> ich <mark>doch</mark> früher <mark>gekommen wäre</mark>!"]],
  uses:[["Cảm thán, ước mạnh mẽ về hiện tại","<mark>Wenn</mark> ich <mark>doch</mark> fliegen <mark>könnte</mark>!"],["Cảm thán, tiếc nuối mạnh mẽ về quá khứ","<mark>Wenn</mark> ich <mark>doch</mark> nur <mark>zugehört hätte</mark>!"]],
  signals:["Wenn … doch …!","Wenn … nur …!"],
  speak:4,write:3,
  reg:"Thường nghe trong hội thoại khi ai đó than thở — mang sắc thái cảm xúc rõ hơn “Ich wünschte” trung tính.",
  mistake:["Wenn ich doch mehr Zeit habe!","Wenn ich doch mehr Zeit hätte!","Câu cảm thán ước muốn luôn dùng Konjunktiv II, không dùng thì hiện tại thường."],
  xf:{la:"Thực tế",lb:"Ước muốn (cảm thán)",a:"Ich habe leider keine Zeit.",b:"Wenn ich doch mehr Zeit hätte!",note:"“doch” nhấn mạnh sắc thái cảm thán; cấu trúc Konjunktiv II giữ nguyên như Ich wünschte."}},
];

registerRows("wunschsaetze", T);
GRAMMAR.theory.wunschsaetze = { rows: T, first: "de-wunsch-gegenwart" };
})();
