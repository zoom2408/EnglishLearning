/* de/content/theory/konditionalsaetze.js
   Konditionalsätze: Typ I (real), Typ II (irreal Gegenwart), Typ III
   (irreal Vergangenheit). Uses the timeline mode with condStyle:true
   (if/res markers), the same mechanism as the English conditionals
   module. */
(() => {
const T = [
 {id:"de-kond-1",num:"01",en:"Typ I",vi:"Loại 1 (có thể xảy ra)",short:"wenn + Präsens, … Präsens/Futur",
  core:"Diễn tả điều kiện <strong>có thể xảy ra</strong> ở hiện tại hoặc tương lai — cả hai vế đều ở dạng hiện thực (Präsens hoặc Futur), không dùng Konjunktiv.",
  forms:[["wenn-Satz","wenn + Präsens (động từ cuối)","<mark>Wenn</mark> ich Zeit <mark>habe</mark>, …"],["Hauptsatz","Präsens hoặc Futur","…, <mark>komme</mark> ich vorbei."]],
  uses:[["Điều kiện thực tế, có khả năng xảy ra","<mark>Wenn</mark> es morgen <mark>regnet</mark>, <mark>bleiben</mark> wir zu Hause."],["Quy luật/sự thật chung (Präsens cả hai vế)","<mark>Wenn</mark> man Wasser <mark>erhitzt</mark>, <mark>kocht</mark> es."]],
  signals:["wenn + Präsens","falls"],
  speak:5,write:5,
  reg:"Loại phổ biến nhất, dùng cho mọi điều kiện còn khả năng xảy ra thật — không cần Konjunktiv II.",
  mistake:["Wenn ich Zeit hätte, komme ich vorbei (ý: điều kiện hoàn toàn khả thi).","Wenn ich Zeit habe, komme ich vorbei.","Điều kiện thực tế, có thể xảy ra dùng Präsens (habe), không dùng Konjunktiv II (hätte)."],
  condStyle:true,
  tl:[{t:"if",x:260,s:"wenn ich Zeit habe",real:true},{t:"res",x:460,s:"komme ich vorbei",real:true}]},

 {id:"de-kond-2",num:"02",en:"Typ II",vi:"Loại 2 (giả định hiện tại)",short:"wenn + Präteritum Konj. II, … würde + Infinitiv",
  core:"Diễn tả điều kiện <strong>không có thật ở hiện tại</strong> — giả định trái với thực tế bây giờ. Dùng Konjunktiv II: Präteritum (hoặc würde + Infinitiv cho hầu hết động từ).",
  forms:[["wenn-Satz","wenn + Präteritum Konjunktiv II","<mark>Wenn</mark> ich Zeit <mark>hätte</mark>, …"],["Hauptsatz","würde + Infinitiv (hoặc Konjunktiv II của sein/haben/modal)","…, <mark>würde</mark> ich <mark>kommen</mark>."]],
  uses:[["Giả định trái thực tế ở hiện tại","<mark>Wenn</mark> ich reich <mark>wäre</mark>, <mark>würde</mark> ich die Welt <mark>bereisen</mark>."],["Đề nghị/yêu cầu lịch sự","<mark>Würdest</mark> du mir helfen?"]],
  signals:["wenn + Präteritum Konj. II","würde"],
  speak:4,write:4,
  reg:"Với động từ sein, haben và modal verbs, ưu tiên dùng dạng Konjunktiv II trực tiếp (wäre, hätte, könnte…) thay vì würde + Infinitiv.",
  mistake:["Wenn ich Zeit habe, würde ich kommen (ý: không có thật).","Wenn ich Zeit hätte, würde ich kommen.","Giả định trái thực tế hiện tại cần Konjunktiv II (hätte) ở cả hai vế, không dùng Präsens thường."],
  condStyle:true,
  tl:[{t:"if",x:260,s:"wenn ich Zeit hätte",real:false},{t:"res",x:460,s:"würde ich kommen",real:false}]},

 {id:"de-kond-3",num:"03",en:"Typ III",vi:"Loại 3 (giả định quá khứ)",short:"wenn + Plusquamperfekt Konj. II, … hätte/wäre + Partizip II",
  core:"Diễn tả điều kiện <strong>không có thật ở quá khứ</strong> — giả định trái với những gì đã thực sự xảy ra. Dùng Konjunktiv II Plusquamperfekt ở cả hai vế.",
  forms:[["wenn-Satz","wenn + hätte/wäre + Partizip II","<mark>Wenn</mark> ich Zeit <mark>gehabt hätte</mark>, …"],["Hauptsatz","hätte/wäre + Partizip II","…, <mark>wäre</mark> ich <mark>gekommen</mark>."]],
  uses:[["Tiếc nuối, giả định ngược lại quá khứ","<mark>Wenn</mark> ich das <mark>gewusst hätte</mark>, <mark>hätte</mark> ich anders <mark>reagiert</mark>."]],
  signals:["wenn + hätte/wäre + Partizip II"],
  speak:2,write:4,
  reg:"Loại này hay dùng để diễn tả tiếc nuối — rất phổ biến trong văn viết kể chuyện và trong các câu than thở về quá khứ.",
  mistake:["Wenn ich Zeit gehabt hätte, komme ich vorbei.","Wenn ich Zeit gehabt hätte, wäre ich vorbeigekommen.","Mệnh đề chính cũng phải ở Konjunktiv II Plusquamperfekt (wäre…gekommen), không dùng Präsens."],
  condStyle:true,
  tl:[{t:"if",x:160,s:"wenn ich Zeit gehabt hätte",real:false},{t:"res",x:400,s:"wäre ich gekommen",real:false}]},
];

registerRows("konditionalsaetze", T);
GRAMMAR.theory.konditionalsaetze = { rows: T, first: "de-kond-1" };
})();
