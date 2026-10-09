/* nb/content/theory/onskesetninger.js
   Ønskesetninger: Ønske nåtid, Ønske fortid, Hvis bare...!
   Uses the "xf" diagram mode, framed as Virkelighet → Ønske. */
(() => {
const T = [
 {id:"nb-onske-naatid",num:"01",en:"Ønske i nåtid",vi:"Ước muốn hiện tại",short:"Jeg skulle ønske … + preteritum",
  core:"Diễn tả <strong>ước muốn về hiện tại</strong> — điều không đúng với thực tế bây giờ. Dùng “skulle ønske” + <strong>preteritum</strong> (giống mệnh đề hvis Loại 2).",
  forms:[["+","Jeg skulle ønske + S + … + preteritum","Jeg skulle ønske jeg **hadde** mer tid."]],
  uses:[["Ước một điều khác với hiện tại","Jeg skulle ønske jeg **var** høyere."],["Ước thay đổi một tình huống đang gây khó chịu","Jeg skulle ønske du **hørte** på meg."]],
  signals:["Jeg skulle ønske … (preteritum)","Hvis bare … (preteritum)!"],
  speak:4,write:4,
  reg:"Cấu trúc này dùng preteritum y hệt mệnh đề hvis Loại 2 — nếu đã thuộc Betingelsessetninger Type 2 thì Ønskesetninger gần như miễn phí.",
  mistake:["Jeg skulle ønske jeg er rik.","Jeg skulle ønske jeg var rik.","Sau “skulle ønske” luôn dùng preteritum, không dùng presens."],
  xf:{la:"Thực tế",lb:"Ước muốn",a:"Jeg har ikke mye tid.",b:"Jeg skulle ønske jeg hadde mer tid.",note:"Preteritum (hadde) diễn tả điều trái với thực tế hiện tại."}},

 {id:"nb-onske-fortid",num:"02",en:"Ønske i fortid",vi:"Ước muốn quá khứ (tiếc nuối)",short:"Jeg skulle ønske … + pluskvamperfektum",
  core:"Diễn tả <strong>tiếc nuối về quá khứ</strong> — điều đã không xảy ra như mong muốn. Dùng “skulle ønske” + <strong>pluskvamperfektum</strong> (hadde + partisipp).",
  forms:[["+","Jeg skulle ønske + S + hadde + partisipp","Jeg skulle ønske jeg **hadde lært** mer."]],
  uses:[["Tiếc nuối về một việc đã/chưa xảy ra","Jeg skulle ønske jeg **hadde kommet** tidligere."]],
  signals:["Jeg skulle ønske … + hadde + partisipp"],
  speak:3,write:4,
  reg:"Cấu trúc này giống hệt mệnh đề hvis Loại 3 — một cách khác để diễn tả tiếc nuối về quá khứ.",
  mistake:["Jeg skulle ønske jeg hadde mer tid hatt.","Jeg skulle ønske jeg hadde hatt mer tid.","Trật tự đúng là hadde + partisipp (hadde hatt), không đảo ngược."],
  xf:{la:"Thực tế",lb:"Ước muốn (tiếc nuối)",a:"Jeg lærte ikke nok.",b:"Jeg skulle ønske jeg hadde lært mer.",note:"Pluskvamperfektum (hadde lært) diễn tả tiếc nuối về quá khứ."}},

 {id:"nb-onske-hvisbare",num:"03",en:"Hvis bare …!",vi:"Câu cảm thán ước muốn",short:"Hvis bare + S + … (preteritum/pluskvamperfektum)!",
  core:"Cách diễn đạt ước muốn <strong>mang tính cảm thán</strong>, dùng “bare” để nhấn mạnh — ý nghĩa giống hệt “Jeg skulle ønske”, chỉ khác sắc thái cảm xúc mạnh hơn.",
  forms:[["Hiện tại","Hvis bare + S + … (preteritum)!","**Hvis bare** jeg **hadde** mer tid!"],["Quá khứ","Hvis bare + S + hadde + partisipp!","**Hvis bare** jeg **hadde visst** det!"]],
  uses:[["Cảm thán, ước mạnh mẽ về hiện tại","**Hvis bare** jeg **kunne** fly!"],["Cảm thán, tiếc nuối mạnh mẽ về quá khứ","**Hvis bare** jeg **hadde hørt** etter!"]],
  signals:["Hvis bare …!"],
  speak:4,write:3,
  reg:"Thường nghe trong hội thoại khi ai đó than thở — mang sắc thái cảm xúc rõ hơn “Jeg skulle ønske” trung tính.",
  mistake:["Hvis bare jeg har mer tid!","Hvis bare jeg hadde mer tid!","Câu cảm thán ước muốn luôn dùng preteritum, không dùng presens."],
  xf:{la:"Thực tế",lb:"Ước muốn (cảm thán)",a:"Jeg har dessverre ikke tid.",b:"Hvis bare jeg hadde mer tid!",note:"“bare” nhấn mạnh sắc thái cảm thán; cấu trúc preteritum giữ nguyên như Jeg skulle ønske."}},
];

registerRows("onskesetninger", T);
GRAMMAR.theory.onskesetninger = { rows: T, first: "nb-onske-naatid" };
})();
