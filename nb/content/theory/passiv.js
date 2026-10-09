/* nb/content/theory/passiv.js
   Passiv: s-passiv, bli-passiv, Passiv med modalverb, Alternative med
   "man". Uses the "xf" diagram mode (Aktiv → Passiv). */
(() => {
const T = [
 {id:"nb-pass-s",num:"01",en:"S-passiv",vi:"Bị động thêm -s",short:"Verb + -s",
  core:"<strong>S-passiv</strong> thêm <strong>-s</strong> trực tiếp vào động từ — phổ biến trong văn viết trang trọng, quy định, và các phát biểu chung chung (không chỉ một sự việc cụ thể).",
  forms:[["+","Verb (infinitiv) + s","Boka **leses** av mange."],["Presens","Stamm + -s","Døren **åpnes** klokka åtte."]],
  uses:[["Phát biểu chung chung, quy định","Norsk **snakkes** i Norge."],["Văn viết trang trọng, báo chí, quy định","Søknader **sendes** innen 1. mai."]],
  signals:["Verb + -s (phát biểu chung)"],
  speak:2,write:5,
  reg:"S-passiv nghe trang trọng hơn và thường dùng cho sự việc LẶP LẠI/chung chung, ít dùng để kể một sự việc cụ thể đã xảy ra một lần.",
  mistake:["Boka les av mange.","Boka leses av mange.","Động từ bị động phải thêm -s (leses), không giữ nguyên dạng chủ động (les)."],
  xf:{la:"Aktiv",lb:"S-passiv",a:"{1:Mange} leser {2:boka}.",b:"{2:Boka} leses {1:av mange}.",note:"Tân ngữ của câu chủ động (boka) trở thành chủ ngữ câu bị động; động từ thêm -s."}},

 {id:"nb-pass-bli",num:"02",en:"Bli-passiv",vi:"Bị động với bli",short:"bli (chia) + partisipp",
  core:"<strong>Bli-passiv</strong> dùng <strong>bli</strong> + partisipp — phổ biến trong khẩu ngữ và khi kể về một <strong>sự việc cụ thể, một lần</strong> (khác với s-passiv vốn mang tính chung chung).",
  forms:[["Presens","blir + partisipp","Døren **blir åpnet** nå."],["Preteritum","ble + partisipp","Huset **ble bygget** i 1990."]],
  uses:[["Kể một sự việc cụ thể đã xảy ra","Boka **ble skrevet** av en kjent forfatter."],["Khẩu ngữ tự nhiên hơn s-passiv","Bilen min **ble stjålet** i går."]],
  signals:["blir/ble + partisipp"],
  speak:5,write:3,
  reg:"Trong khẩu ngữ hằng ngày, bli-passiv tự nhiên hơn hẳn s-passiv — ưu tiên học cấu trúc này trước khi dùng s-passiv.",
  mistake:["Huset bygget i 1990.","Huset ble bygget i 1990.","Bị động Preteritum cần “ble” trước partisipp, không chỉ dùng partisipp một mình."],
  xf:{la:"Aktiv",lb:"Bli-passiv",a:"{1:En kjent forfatter} skrev {2:boka}.",b:"{2:Boka} ble skrevet {1:av en kjent forfatter}.",note:"Preteritum bị động: ble + partisipp (skrevet)."}},

 {id:"nb-pass-modal",num:"03",en:"Passiv med modalverb",vi:"Bị động với động từ khuyết thiếu",short:"Modalverb + bli + partisipp",
  core:"Khi câu bị động có <strong>modal verb</strong>, dùng modal + <strong>bli</strong> + partisipp (không dùng s-passiv sau modal verb).",
  forms:[["+","Modalverb + bli + partisipp","Oppgaven **må bli gjort** i dag."]],
  uses:[["Bắt buộc ở dạng bị động","Skjemaet **må bli fylt** ut."],["Khả năng ở dạng bị động","Problemet **kan bli løst** lett."]],
  signals:["må/kan/skal + bli + partisipp"],
  speak:4,write:4,
  reg:"Sau modal verb, luôn dùng “bli + partisipp”, không dùng s-passiv (må gjøres nghe cứng hơn, ít tự nhiên hơn må bli gjort trong khẩu ngữ).",
  mistake:["Oppgaven må gjøres av meg i dag (ít tự nhiên trong khẩu ngữ).","Oppgaven må bli gjort av meg i dag.","Sau modal verb, bli-passiv tự nhiên hơn trong khẩu ngữ, dù s-passiv vẫn đúng ngữ pháp."],
  xf:{la:"Aktiv",lb:"Passiv med modalverb",a:"{1:Noen må} gjøre {2:oppgaven} i dag.",b:"{2:Oppgaven} må bli gjort i dag.",note:"Modal verb giữ vị trí 2; bli + partisipp đứng cuối câu."}},

 {id:"nb-pass-man",num:"04",en:"Alternativ med “man”",vi:"Thay thế bằng man",short:"man + Aktivsetning",
  core:"Trong khẩu ngữ, người Na Uy thường tránh câu bị động bằng cách dùng <strong>man</strong> làm chủ ngữ giả ở câu chủ động — nghe tự nhiên và gần gũi hơn.",
  forms:[["Passiv","s-passiv/bli-passiv","Her **snakkes** norsk."],["Aktiv med man","man + V (chia bình thường)","**Man snakker** norsk her."]],
  uses:[["Thay thế bị động không rõ chủ thể trong khẩu ngữ","**Man sier** at det blir kaldt i vinter. (= Det sies at…)"]],
  signals:["man + Verb (chia)"],
  speak:5,write:2,
  reg:"man rất phổ biến trong hội thoại hằng ngày; bị động (đặc biệt s-passiv) trang trọng hơn và hay gặp trong văn viết, biển báo, hướng dẫn.",
  mistake:["Det sies at han er syk (nghe trang trọng hơn khi trò chuyện bình thường).","Man sier at han er syk.","Trong khẩu ngữ, man + câu chủ động tự nhiên hơn câu bị động tương đương."],
  xf:{la:"Passiv",lb:"Aktiv med man",a:"{1:Her} snakkes norsk.",b:"{1:Man} snakker norsk her.",note:"Trong khẩu ngữ, “man” + câu chủ động nghe tự nhiên hơn bị động."}},
];

registerRows("passiv", T);
GRAMMAR.theory.passiv = { rows: T, first: "nb-pass-bli" };
})();
