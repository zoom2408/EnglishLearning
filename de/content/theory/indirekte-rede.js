/* de/content/theory/indirekte-rede.js
   Indirekte Rede: Aussagesätze, Ja/Nein-Fragen, W-Fragen,
   Aufforderungen. Uses the "xf" diagram mode. */
(() => {
const T = [
 {id:"de-ind-aussage",num:"01",en:"Aussagesätze",vi:"Câu trần thuật",short:"dass + Konjunktiv I (hoặc II)",
  core:"Tường thuật lại một câu trần thuật — dùng <strong>Konjunktiv I</strong> (trang trọng, báo chí) hoặc <strong>Konjunktiv II</strong> khi dạng Konjunktiv I trùng với thì hiện tại thường.",
  forms:[["+ dass","Er sagt, dass + S + … + Konjunktiv I (cuối)","Er sagt, <mark>dass</mark> er müde <mark>sei</mark>."],["không dass","Er sagt, + S + Konjunktiv I + …","Er sagt, er <mark>sei</mark> müde."]],
  uses:[["Tường thuật lời nói trang trọng, báo chí","Die Firma erklärt, sie <mark>werde</mark> das Problem lösen."],["Khẩu ngữ hay dùng Konjunktiv II hoặc giữ nguyên thì gốc","Er sagt, er <mark>ist</mark> müde. (khẩu ngữ, không trang trọng)"]],
  signals:["Konjunktiv I: sei, habe, werde, könne…"],
  speak:2,write:5,
  reg:"Konjunktiv I chủ yếu xuất hiện trong văn viết trang trọng (báo chí, văn bản hành chính); trong khẩu ngữ hằng ngày người Đức thường giữ nguyên thì gốc hoặc dùng dass + Indikativ.",
  mistake:["Er sagt, dass er ist müde.","Er sagt, dass er müde sei.","Câu tường thuật trang trọng dùng Konjunktiv I (sei), không giữ nguyên “ist”."],
  xf:{la:"Trực tiếp",lb:"Gián tiếp (dass)",a:"Er sagt: „Ich bin müde.“",b:"Er sagt, dass er müde sei.",note:"Konjunktiv I của sein ở ngôi 3 số ít là “sei”; dass + động từ cuối câu."}},

 {id:"de-ind-janein",num:"02",en:"Ja/Nein-Fragen",vi:"Câu hỏi có/không",short:"ob + Konjunktiv I (cuối)",
  core:"Tường thuật câu hỏi có/không — dùng <strong>ob</strong> để giới thiệu mệnh đề, động từ (Konjunktiv I) đứng cuối.",
  forms:[["+","S + fragt, + ob + S + … + Konjunktiv I (cuối)","Sie fragt, <mark>ob</mark> ich morgen <mark>komme</mark>."]],
  uses:[["Tường thuật câu hỏi Ja/Nein","Er fragt, <mark>ob</mark> sie Zeit <mark>habe</mark>."]],
  signals:["ob"],
  speak:3,write:5,
  reg:"ob tương đương “if/whether” trong câu hỏi gián tiếp tiếng Anh — không được nhầm với wenn (nếu, điều kiện).",
  mistake:["Sie fragt, komme ich morgen.","Sie fragt, ob ich morgen komme.","Câu hỏi có/không tường thuật phải có “ob”, không giữ nguyên trật tự câu hỏi trực tiếp."],
  xf:{la:"Trực tiếp",lb:"Gián tiếp (ob)",a:"Sie fragt: „Kommst du morgen?“",b:"Sie fragt, ob ich morgen komme.",note:"Câu hỏi có/không dùng “ob” để giới thiệu mệnh đề tường thuật, động từ đứng cuối."}},

 {id:"de-ind-wfrage",num:"03",en:"W-Fragen",vi:"Câu hỏi có từ để hỏi",short:"W-Wort + … + Konjunktiv I (cuối)",
  core:"Tường thuật câu hỏi có từ để hỏi (wo, wann, was, warum…) — giữ nguyên từ để hỏi, bỏ dấu hỏi, động từ đứng cuối mệnh đề.",
  forms:[["+","S + fragt, + W-Wort + S + … + Konjunktiv I (cuối)","Er fragt, <mark>wo</mark> ich <mark>wohne</mark>."]],
  uses:[["Tường thuật câu hỏi có từ để hỏi","Sie fragt, <mark>warum</mark> ich zu spät <mark>komme</mark>."]],
  signals:["wo, wann, was, warum, wie… + Verb (cuối)"],
  speak:3,write:5,
  reg:"Giữ nguyên từ để hỏi gốc (wo, wann…) — đây là điểm khác với câu hỏi Ja/Nein (vốn dùng ob thay vì giữ cấu trúc câu hỏi).",
  mistake:["Er fragt, wo wohne ich.","Er fragt, wo ich wohne.","Sau từ để hỏi, trật tự từ là mệnh đề phụ (động từ cuối), không giữ trật tự câu hỏi trực tiếp."],
  xf:{la:"Trực tiếp",lb:"Gián tiếp (W-Wort)",a:"Er fragt: „Wo wohnst du?“",b:"Er fragt, wo ich wohne.",note:"Giữ nguyên từ để hỏi (wo), bỏ dấu hỏi trực tiếp, động từ đứng cuối mệnh đề."}},

 {id:"de-ind-auff",num:"04",en:"Aufforderungen",vi:"Câu mệnh lệnh",short:"sollen + Infinitiv",
  core:"Tường thuật câu mệnh lệnh (Imperativ) — dùng <strong>sollen</strong> + Infinitiv, không dùng Konjunktiv I.",
  forms:[["+","S + sagt, + S + sollen (chia) + … + Infinitiv","Der Lehrer sagt, wir <mark>sollen</mark> die Hausaufgaben <mark>machen</mark>."]],
  uses:[["Tường thuật yêu cầu/mệnh lệnh","Die Mutter sagt, die Kinder <mark>sollen</mark> leise <mark>sein</mark>."]],
  signals:["sollen + Infinitiv"],
  speak:4,write:4,
  reg:"sollen thay thế hoàn toàn cho Imperativ khi tường thuật — không cần Konjunktiv ở đây.",
  mistake:["Der Lehrer sagt, wir machen die Hausaufgaben!","Der Lehrer sagt, wir sollen die Hausaufgaben machen.","Câu mệnh lệnh tường thuật dùng sollen + Infinitiv, không giữ nguyên dạng mệnh lệnh."],
  xf:{la:"Trực tiếp",lb:"Gián tiếp (sollen)",a:"Der Lehrer sagt: „Macht die Hausaufgaben!“",b:"Der Lehrer sagt, wir sollen die Hausaufgaben machen.",note:"Câu mệnh lệnh tường thuật dùng “sollen” + Infinitiv, không dùng Konjunktiv I."}},
];

registerRows("indirekte-rede", T);
GRAMMAR.theory["indirekte-rede"] = { rows: T, first: "de-ind-aussage" };
})();
