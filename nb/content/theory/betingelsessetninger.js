/* nb/content/theory/betingelsessetninger.js
   Betingelsessetninger: Type 1 (reell), Type 2 (hypotetisk nåtid),
   Type 3 (hypotetisk fortid). Uses the timeline mode with
   condStyle:true (if/res markers), same mechanism as German
   Konditionalsätze. */
(() => {
const T = [
 {id:"nb-kond-1",num:"01",en:"Type 1",vi:"Loại 1 (có thể xảy ra)",short:"hvis + presens, … presens/futurum",
  core:"Diễn tả điều kiện <strong>có thể xảy ra</strong> ở hiện tại hoặc tương lai — cả hai vế đều ở dạng hiện thực (presens), không dùng dạng giả định.",
  forms:[["hvis-setning","hvis + presens","**Hvis** jeg **har** tid, …"],["Hovedsetning","presens hoặc skal/vil","…, **kommer** jeg innom."]],
  uses:[["Điều kiện thực tế, có khả năng xảy ra","**Hvis** det regner i morgen, **blir** vi hjemme."],["Quy luật/sự thật chung","**Hvis** du varmer vann, **koker** det."]],
  signals:["hvis + presens"],
  speak:5,write:5,
  reg:"Loại phổ biến nhất, dùng cho mọi điều kiện còn khả năng xảy ra thật — không cần dạng giả định đặc biệt.",
  mistake:["Hvis jeg hadde tid, kommer jeg innom (ý: điều kiện hoàn toàn khả thi).","Hvis jeg har tid, kommer jeg innom.","Điều kiện thực tế dùng presens (har), không dùng dạng giả định (hadde)."],
  condStyle:true,
  tl:[{t:"if",x:260,s:"hvis jeg har tid",real:true},{t:"res",x:460,s:"kommer jeg innom",real:true}]},

 {id:"nb-kond-2",num:"02",en:"Type 2",vi:"Loại 2 (giả định hiện tại)",short:"hvis + preteritum, … ville + infinitiv",
  core:"Diễn tả điều kiện <strong>không có thật ở hiện tại</strong> — giả định trái với thực tế bây giờ. Dùng <strong>preteritum</strong> trong mệnh đề hvis, <strong>ville</strong> + infinitiv ở mệnh đề chính.",
  forms:[["hvis-setning","hvis + preteritum","**Hvis** jeg **hadde** tid, …"],["Hovedsetning","ville + infinitiv","…, **ville** jeg **komme**."]],
  uses:[["Giả định trái thực tế ở hiện tại","**Hvis** jeg **var** rik, **ville** jeg **reise** jorden rundt."],["Đề nghị/yêu cầu lịch sự","**Ville** du **hjelpe** meg?"]],
  signals:["hvis + preteritum","ville"],
  speak:4,write:4,
  reg:"Không có mood giả định riêng như tiếng Đức (Konjunktiv II) — chỉ cần dùng thì preteritum trong mệnh đề hvis, rất dễ nhớ.",
  mistake:["Hvis jeg har tid, ville jeg komme (ý: không có thật).","Hvis jeg hadde tid, ville jeg komme.","Giả định trái thực tế hiện tại cần preteritum (hadde) trong mệnh đề hvis."],
  condStyle:true,
  tl:[{t:"if",x:260,s:"hvis jeg hadde tid",real:false},{t:"res",x:460,s:"ville jeg komme",real:false}]},

 {id:"nb-kond-3",num:"03",en:"Type 3",vi:"Loại 3 (giả định quá khứ)",short:"hvis + pluskvamperfektum, … ville ha + partisipp",
  core:"Diễn tả điều kiện <strong>không có thật ở quá khứ</strong> — giả định trái với những gì đã thực sự xảy ra. Dùng <strong>pluskvamperfektum</strong> trong mệnh đề hvis, <strong>ville ha</strong> + partisipp ở mệnh đề chính.",
  forms:[["hvis-setning","hvis + hadde + partisipp","**Hvis** jeg **hadde visst** det, …"],["Hovedsetning","ville ha + partisipp","…, **ville** jeg **ha reagert** annerledes."]],
  uses:[["Tiếc nuối, giả định ngược lại quá khứ","**Hvis** jeg **hadde hatt** mer tid, **ville** jeg **ha lest** mer."]],
  signals:["hvis + hadde + partisipp","ville ha + partisipp"],
  speak:2,write:4,
  reg:"Loại này hay dùng để diễn tả tiếc nuối — rất phổ biến trong văn viết kể chuyện và trong các câu than thở về quá khứ.",
  mistake:["Hvis jeg hadde visst det, reagerer jeg annerledes.","Hvis jeg hadde visst det, ville jeg ha reagert annerledes.","Mệnh đề chính cũng phải ở dạng ville ha + partisipp, không dùng presens."],
  condStyle:true,
  tl:[{t:"if",x:160,s:"hvis jeg hadde visst det",real:false},{t:"res",x:400,s:"ville jeg ha reagert",real:false}]},
];

registerRows("betingelsessetninger", T);
GRAMMAR.theory.betingelsessetninger = { rows: T, first: "nb-kond-1" };
})();
