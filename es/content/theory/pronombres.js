/* es/content/theory/pronombres.js
   Pronombres de objeto y por/para. Uses the "table" diagram mode. */
(() => {
const T = [
 {id:"es-obj-directo",num:"01",en:"Objeto directo",vi:"Đại từ tân ngữ trực tiếp",short:"me · te · lo/la · nos · os · los/las",
  core:"Đại từ tân ngữ trực tiếp <strong>thay cho danh từ</strong> chịu tác động của hành động: <strong>lo, la, los, las</strong> cho ngôi thứ ba. Chúng đứng <strong>trước động từ đã chia</strong>, hoặc gắn vào <strong>cuối nguyên mẫu hoặc gerundio</strong>.",
  forms:[["me · te","tôi · bạn","<mark>Me</mark> ves. <mark>Te</mark> llamo."],["lo","anh ấy, nó (giống đực)","Compro el libro → <mark>Lo</mark> compro."],["la","cô ấy, nó (giống cái)","Compro la camisa → <mark>La</mark> compro."],["los · las","họ, chúng (đực / cái)","Veo los coches → <mark>Los</mark> veo."],["nos · os","chúng tôi · các bạn","<mark>Nos</mark> conocen. ¿<mark>Os</mark> llamo?"],["Với nguyên mẫu","gắn vào cuối hoặc đặt trước","Quiero verlo. / <mark>Lo</mark> quiero ver."]],
  uses:[["Tránh lặp danh từ","—¿Compraste el pan? —Sí, <mark>lo</mark> compré."],["Câu phủ định","No <mark>lo</mark> veo. No <mark>la</mark> conozco."]],
  signals:["lo","la","los","las","no lo…","verlo"],
  speak:5,write:5,
  reg:"Lo / la / los / las phải khớp giống và số với danh từ được thay, không phải với người nói.",
  mistake:["Veo lo el libro.","Lo veo.","Đại từ thay hoàn toàn cho danh từ, không dùng chung với danh từ trong cùng một câu."],
  table:[{head:["Số ít","Số nhiều"],rows:[["ngôi 1","me","nos"],["ngôi 2","te","os"],["ngôi 3 đực","lo","los"],["ngôi 3 cái","la","las"]]}]},

 {id:"es-obj-indirecto",num:"02",en:"Objeto indirecto",vi:"Đại từ tân ngữ gián tiếp",short:"me · te · le · nos · os · les",
  core:"Tân ngữ gián tiếp là <strong>người nhận</strong> hành động: <strong>cho ai, nói với ai, viết cho ai</strong>. Dạng: <strong>me, te, le, nos, os, les</strong>. “Le” và “les” dùng cho cả nam và nữ. Thường lặp lại bằng <strong>a + người</strong>.",
  forms:[["me · te","cho tôi · cho bạn","<mark>Me</mark> das un libro. <mark>Te</mark> escribo."],["le","cho anh/cô ấy, ông/bà","<mark>Le</mark> doy el regalo a Ana."],["nos · os","cho chúng tôi · các bạn","<mark>Nos</mark> dicen la verdad."],["les","cho họ, các ông/bà","<mark>Les</mark> mando un correo."],["Lặp lại","le + động từ + a + người","<mark>Le</mark> hablo <mark>a Pedro</mark>."],["Động từ thường dùng","dar, decir, escribir, mandar, regalar, explicar, preguntar","<mark>Le</mark> pregunto <mark>a mi madre</mark>."]],
  uses:[["Cho và nhận","<mark>Le</mark> regalo flores <mark>a mi madre</mark>."],["Nói và hỏi","<mark>Me</mark> dijo la verdad. ¿<mark>Te</mark> explico?"]],
  signals:["le","les","a + người","dar","decir","escribir"],
  speak:5,write:5,
  reg:"Tiếng Tây Ban Nha thường lặp lại tân ngữ gián tiếp: vừa có “le” vừa có “a Ana” (Le doy el libro a Ana). Cách này rất tự nhiên.",
  mistake:["Les doy el libro a Ana.","Le doy el libro a Ana.","Ana là một người (số ít) nên dùng le. Les dành cho nhiều người."],
  table:[{head:["Số ít","Số nhiều"],rows:[["ngôi 1","me","nos"],["ngôi 2","te","os"],["ngôi 3","le","les"]]}]},

 {id:"es-obj-doble",num:"03",en:"Dos pronombres",vi:"Hai đại từ cùng lúc",short:"me lo · te la · se lo · se la",
  core:"Khi có <strong>cả tân ngữ gián tiếp và trực tiếp</strong>, thứ tự luôn là <strong>gián tiếp + trực tiếp</strong> (“I before D”). Quy tắc đặc biệt: <strong>le / les + lo / la / los / las</strong> đổi thành <strong>se lo / se la / se los / se las</strong>.",
  forms:[["Thứ tự","gián tiếp + trực tiếp","<mark>Me lo</mark> das."],["Ngôi 1, 2","me / te / nos / os + lo / la…","<mark>Te la</mark> doy."],["Ngôi 3","le / les + lo → se lo","Doy el libro a Ana → <mark>Se lo</mark> doy."],["Với nguyên mẫu","gắn cả hai và thêm dấu","Voy a dár<mark>selo</mark>. / <mark>Se lo</mark> voy a dar."],["Với phủ định","no + hai đại từ + động từ","No <mark>me lo</mark> dijo."],["Không bao giờ","le lo, le la, les lo","✗ <mark>Le lo</mark> doy → ✓ <mark>Se lo</mark> doy"]],
  uses:[["Tặng quà, nhờ vả","—¿Me prestas el libro? —Sí, <mark>te lo</mark> presto."],["Báo tin","—¿Le dijiste la noticia? —Sí, <mark>se la</mark> dije."]],
  signals:["me lo","te la","se lo","se la","se los"],
  speak:4,write:5,
  reg:"“Se” trong “se lo” không phải phản thân. Nó chỉ thay le / les để tránh âm “le lo” khó đọc.",
  mistake:["Le lo doy.","Se lo doy.","Le / les đứng trước lo / la / los / las phải đổi thành se."],
  table:[{head:["lo","la","los","las"],rows:[["me","me lo","me la","me los","me las"],["te","te lo","te la","te los","te las"],["le / les","se lo","se la","se los","se las"],["nos","nos lo","nos la","nos los","nos las"]]}]},

 {id:"es-obj-por-para",num:"04",en:"Por y para",vi:"Por và para",short:"para = mục đích, người nhận, hạn · por = nguyên nhân, phương tiện, thời lượng",
  core:"Cả hai thường dịch là “vì, cho”. <strong>Para</strong> hướng <strong>tới đích</strong>: mục đích, người nhận, hạn chót, điểm đến. <strong>Por</strong> chỉ <strong>nguyên nhân hoặc phương tiện</strong>: lý do, kênh, thời lượng, nơi đi qua, trao đổi.",
  forms:[["para: mục đích","để làm gì","Estudio <mark>para</mark> aprender."],["para: người nhận","dành cho ai","Este regalo es <mark>para</mark> ti."],["para: hạn chót","trước khi nào","Es <mark>para</mark> mañana."],["para: điểm đến","đi về đâu","Salgo <mark>para</mark> Madrid."],["por: nguyên nhân","vì (lý do)","No salgo <mark>por</mark> la lluvia."],["por: phương tiện, thời lượng, nơi đi qua","bằng, trong, qua","Hablo <mark>por</mark> teléfono. Camino <mark>por</mark> el parque. Estudio <mark>por</mark> una hora."]],
  uses:[["Mục đích và người nhận","Trabajo <mark>para</mark> ganar dinero. Es un regalo <mark>para</mark> mi hermana."],["Lý do và phương tiện","Gracias <mark>por</mark> tu ayuda. Hablamos <mark>por</mark> WhatsApp."],["Trao đổi, buổi trong ngày","Pagué diez euros <mark>por</mark> el libro. Trabajo <mark>por</mark> la mañana."]],
  signals:["para + inf.","para + người","por + nguyên nhân","por teléfono","por la mañana","gracias por"],
  speak:5,write:5,
  reg:"Mẹo: “para” có mũi tên hướng tới tương lai (mục đích), còn “por” nhìn lại phía sau (nguyên nhân).",
  mistake:["Estudio por aprender español.","Estudio para aprender español.","Mục đích (để làm gì) dùng para + động từ nguyên mẫu."],
  table:[{head:["Para","Por"],rows:[["Mục đích","para aprender","—"],["Người nhận","para ti","—"],["Nguyên nhân","—","por la lluvia"],["Phương tiện","—","por teléfono"],["Thời lượng","—","por una hora"],["Trao đổi","—","por diez euros"]]}]},
];

registerRows("pronombres", T);
GRAMMAR.theory.pronombres = { rows: T, first: "es-obj-directo" };
})();
