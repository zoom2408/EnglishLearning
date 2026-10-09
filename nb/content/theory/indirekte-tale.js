/* nb/content/theory/indirekte-tale.js
   Indirekte tale: Påstander, Ja/Nei-spørsmål, Hv-spørsmål,
   Oppfordringer. No subjunctive mood needed (simpler than German) —
   just tense backshift. Uses the "xf" diagram mode. */
(() => {
const T = [
 {id:"nb-ind-paastand",num:"01",en:"Påstander",vi:"Câu trần thuật",short:"at + S + V (lùi một thì)",
  core:"Tường thuật lại một câu trần thuật — dùng <strong>at</strong>, động từ <strong>lùi một thì</strong> (presens→preteritum), không cần mood giả định như tiếng Đức.",
  forms:[["+","S + sier/sa, at + S + V (lùi thì)","Hun sier **at** hun **er** trøtt. (không lùi nếu câu tường thuật ở hiện tại)"],["Khi câu giới thiệu ở quá khứ","S + sa, at + S + V (preteritum)","Hun **sa** **at** hun **var** trøtt."]],
  uses:[["Tường thuật ngay sau khi nghe (hiện tại)","Han sier at han **kommer** i morgen."],["Tường thuật việc đã nói trước đó (quá khứ)","Han **sa** at han **kom** dagen etter."]],
  signals:["at + lùi thì nếu động từ giới thiệu ở quá khứ"],
  speak:4,write:5,
  reg:"Đơn giản hơn tiếng Đức rất nhiều: không cần Konjunktiv I/II, chỉ cần lùi thì giống quy tắc tường thuật tiếng Anh.",
  mistake:["Hun sa at hun er trøtt.","Hun sa at hun var trøtt.","Khi động từ giới thiệu (sa) ở quá khứ, động từ trong mệnh đề at cũng lùi về preteritum."],
  xf:{la:"Trực tiếp",lb:"Gián tiếp (at)",a:"Hun sa: „Jeg er trøtt.“",b:"Hun sa at hun var trøtt.",note:"Động từ “er” lùi về preteritum “var” vì động từ giới thiệu (sa) ở quá khứ."}},

 {id:"nb-ind-janei",num:"02",en:"Ja/Nei-spørsmål",vi:"Câu hỏi có/không",short:"om + S + V (lùi thì)",
  core:"Tường thuật câu hỏi có/không — dùng <strong>om</strong> để giới thiệu mệnh đề, động từ lùi thì nếu cần.",
  forms:[["+","S + spør/spurte, om + S + V","Hun spurte **om** jeg **kom** neste dag."]],
  uses:[["Tường thuật câu hỏi Ja/Nei","Han spør **om** hun **har** tid."]],
  signals:["om"],
  speak:4,write:5,
  reg:"“om” tương đương “if/whether” trong câu hỏi gián tiếp tiếng Anh — không nhầm với “hvis” (nếu, điều kiện).",
  mistake:["Hun spurte, kommer jeg i morgen.","Hun spurte om jeg kom neste dag.","Câu hỏi có/không tường thuật phải có “om”, không giữ nguyên trật tự câu hỏi trực tiếp."],
  xf:{la:"Trực tiếp",lb:"Gián tiếp (om)",a:"Hun spurte: „Kommer du i morgen?“",b:"Hun spurte om jeg kom neste dag.",note:"Câu hỏi có/không dùng “om”; “i morgen” đổi thành “neste dag” khi tường thuật ở quá khứ; động từ lùi thì."}},

 {id:"nb-ind-hvsporsmaal",num:"03",en:"Hv-spørsmål",vi:"Câu hỏi có từ để hỏi",short:"Hv-ord + S + V (lùi thì)",
  core:"Tường thuật câu hỏi có từ để hỏi (hvor, når, hva, hvorfor…) — giữ nguyên từ để hỏi, bỏ dấu hỏi, động từ lùi thì nếu cần.",
  forms:[["+","S + spør/spurte, Hv-ord + S + V","Han spurte **hvor** jeg **bodde**."]],
  uses:[["Tường thuật câu hỏi có từ để hỏi","Hun spør **hvorfor** jeg **kommer** for sent."]],
  signals:["hvor, når, hva, hvorfor, hvordan… + S + V"],
  speak:4,write:5,
  reg:"Giữ nguyên từ để hỏi gốc (hvor, når…) — đây là điểm giống hệt tiếng Đức và tiếng Anh.",
  mistake:["Han spurte, hvor bor jeg.","Han spurte hvor jeg bodde.","Sau từ để hỏi, trật tự là mệnh đề phụ (chủ ngữ trước động từ), không giữ trật tự câu hỏi trực tiếp."],
  xf:{la:"Trực tiếp",lb:"Gián tiếp (Hv-ord)",a:"Han spurte: „Hvor bor du?“",b:"Han spurte hvor jeg bodde.",note:"Giữ nguyên từ để hỏi (hvor); “bor” lùi thành “bodde” vì câu giới thiệu (spurte) ở quá khứ."}},

 {id:"nb-ind-oppfordring",num:"04",en:"Oppfordringer",vi:"Câu mệnh lệnh",short:"skulle + infinitiv",
  core:"Tường thuật câu mệnh lệnh (imperativ) — dùng <strong>skulle</strong> + infinitiv.",
  forms:[["+","S + sa, at + S + skulle + infinitiv","Læreren sa **at** vi **skulle gjøre** leksene."]],
  uses:[["Tường thuật yêu cầu/mệnh lệnh","Moren sa **at** barna **skulle være** stille."]],
  signals:["skulle + infinitiv"],
  speak:4,write:4,
  reg:"skulle thay thế hoàn toàn cho imperativ khi tường thuật — không cần mood giả định.",
  mistake:["Læreren sa at vi gjør leksene!","Læreren sa at vi skulle gjøre leksene.","Câu mệnh lệnh tường thuật dùng skulle + infinitiv, không giữ nguyên dạng mệnh lệnh."],
  xf:{la:"Trực tiếp",lb:"Gián tiếp (skulle)",a:"Læreren sa: „Gjør leksene!“",b:"Læreren sa at vi skulle gjøre leksene.",note:"Câu mệnh lệnh tường thuật dùng “skulle” + infinitiv."}},
];

registerRows("indirekte-tale", T);
GRAMMAR.theory["indirekte-tale"] = { rows: T, first: "nb-ind-paastand" };
})();
