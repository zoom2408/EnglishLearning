/* es/content/theory/reflexivos.js
   Reflexivos y gustar: verbos reflexivos, posición del pronombre,
   gustar y verbos como gustar, coincidir (también / tampoco).
   Uses the "table" diagram mode. */
(() => {
const T = [
 {id:"es-ref-reflexivos",num:"01",en:"Verbos reflexivos",vi:"Động từ phản thân",short:"me levanto · te levantas · se levanta · nos levantamos · os levantáis · se levantan",
  core:"Động từ phản thân có <strong>đại từ phản thân</strong> (me, te, se, nos, os, se) đi trước động từ đã chia. Hành động quay lại chính chủ ngữ: chúng ta <strong>tự</strong> thức dậy, <strong>tự</strong> tắm. Nguyên mẫu có đuôi <strong>-se</strong>: levantarse, ducharse.",
  forms:[["yo","me + động từ","<mark>Me</mark> levanto a las siete."],["tú","te + động từ","¿A qué hora <mark>te</mark> acuestas?"],["él / ella / usted","se + động từ","Ella <mark>se</mark> ducha por la mañana."],["nosotros","nos + động từ","<mark>Nos</mark> vestimos rápido."],["vosotros","os + động từ","¿<mark>Os</mark> levantáis temprano?"],["ellos / ustedes","se + động từ","Ellos <mark>se</mark> acuestan tarde."]],
  uses:[["Thói quen hằng ngày","<mark>Me levanto</mark>, <mark>me ducho</mark> y <mark>me visto</mark>."],["Tên và cảm xúc","<mark>Me llamo</mark> Linh. <mark>Se llama</mark> Pedro. <mark>Me siento</mark> bien."],["Hành động đổi nghĩa khi có se","dormir (ngủ) → dormirse (ngủ thiếp đi); ir (đi) → irse (đi mất)"]],
  signals:["levantarse","ducharse","vestirse","acostarse","llamarse","sentirse"],
  speak:5,write:5,
  reg:"Nhiều động từ phản thân vẫn đổi nguyên âm: acostarse (o→ue) → me acuesto, vestirse (e→i) → me visto.",
  mistake:["Yo levanto a las siete.","Yo me levanto a las siete.","Levantarse là động từ phản thân nên cần đại từ me trước động từ."],
  table:[{head:["Đại từ","Ví dụ"],rows:[["yo","me","me levanto"],["tú","te","te levantas"],["él / ella","se","se levanta"],["nosotros","nos","nos levantamos"],["vosotros","os","os levantáis"],["ellos","se","se levantan"]]}]},

 {id:"es-ref-posicion",num:"02",en:"Posición del pronombre",vi:"Vị trí của đại từ phản thân",short:"Me levanto · Voy a levantarme · No me levanto",
  core:"Đại từ phản thân đứng <strong>trước động từ đã chia</strong>. Với <strong>nguyên mẫu</strong> hoặc <strong>gerundio</strong>, nó có thể gắn vào cuối, hoặc đứng trước cả cụm động từ. Câu phủ định đặt <strong>no</strong> trước đại từ.",
  forms:[["Động từ đã chia","pronombre + động từ","<mark>Me</mark> ducho."],["Phủ định","no + pronombre + động từ","<mark>No me</mark> ducho por la noche."],["Ir a + nguyên mẫu","gắn vào nguyên mẫu hoặc đứng trước ir","Voy a duchar<mark>me</mark>. / <mark>Me</mark> voy a duchar."],["Querer / poder / tener que + nguyên mẫu","gắn vào nguyên mẫu hoặc đứng trước","Quiero acostar<mark>me</mark>. / <mark>Me</mark> quiero acostar."],["Estar + gerundio","gắn vào gerundio (có dấu) hoặc đứng trước estar","Estoy duchándo<mark>me</mark>. / <mark>Me</mark> estoy duchando."],["Mệnh lệnh khẳng định","gắn vào động từ","¡Levánta<mark>te</mark>!"]],
  uses:[["Nói về kế hoạch","<mark>Me</mark> voy a acostar temprano esta noche."],["Nói không làm","<mark>No me</mark> levanto antes de las ocho."]],
  signals:["no me","voy a + inf. + me","me + voy a + inf.","estoy + gerundio + me"],
  speak:5,write:5,
  reg:"Cả hai vị trí (trước hoặc gắn sau) đều đúng với ir a, querer, poder: Me quiero ir = Quiero irme.",
  mistake:["Voy a me duchar.","Voy a ducharme. / Me voy a duchar.","Đại từ không đứng giữa “a” và nguyên mẫu. Gắn vào cuối nguyên mẫu hoặc đứng trước cả cụm."],
  table:[{head:["Cách 1","Cách 2"],rows:[["ir a + inf.","Me voy a duchar","Voy a ducharme"],["querer + inf.","Me quiero acostar","Quiero acostarme"],["poder + inf.","Me puedo ir","Puedo irme"],["estar + gerundio","Me estoy duchando","Estoy duchándome"]]}]},

 {id:"es-ref-gustar",num:"03",en:"Gustar",vi:"Gustar và các động từ tương tự",short:"me gusta (số ít) · me gustan (số nhiều)",
  core:"<strong>Gustar</strong> hoạt động ngược với tiếng Việt: “thích” là <strong>chủ thể được thích</strong>. Cấu trúc: <strong>me / te / le / nos / os / les + gusta(n) + thứ được thích</strong>. Động từ <strong>gusta</strong> khi thứ được thích là số ít hoặc động từ, <strong>gustan</strong> khi số nhiều.",
  forms:[["me gusta","thích (số ít / động từ)","<mark>Me gusta</mark> el café. <mark>Me gusta</mark> bailar."],["me gustan","thích (số nhiều)","<mark>Me gustan</mark> los gatos."],["te gusta(n)","bạn thích","¿<mark>Te gusta</mark> la música?"],["le gusta(n)","anh/cô ấy / ông/bà thích","<mark>Le gustan</mark> las películas."],["nos gusta(n)","chúng tôi thích","<mark>Nos gusta</mark> viajar."],["les gusta(n)","họ thích","<mark>Les gustan</mark> los deportes."]],
  uses:[["Nói sở thích","<mark>Me gusta</mark> leer y <mark>me gustan</mark> las series."],["Nhấn mạnh người","<mark>A mí</mark> me gusta el té, pero <mark>a ella</mark> le gusta el café."],["Tương tự gustar: encantar, interesar, doler, importar","<mark>Me encanta</mark> la pizza. <mark>Me duele</mark> la cabeza."]],
  signals:["me gusta","me gustan","a mí","encantar","interesar","doler"],
  speak:5,write:5,
  reg:"Với gustar, động từ chia theo thứ được thích, không chia theo người thích. Người thích nằm ở đại từ me/te/le…",
  mistake:["Me gusto los gatos.","Me gustan los gatos.","Los gatos là số nhiều nên động từ là gustan, không phải gusto."],
  table:[{head:["Số ít / động từ","Số nhiều"],rows:[["a mí","me gusta","me gustan"],["a ti","te gusta","te gustan"],["a él / ella / usted","le gusta","le gustan"],["a nosotros","nos gusta","nos gustan"],["a vosotros","os gusta","os gustan"],["a ellos / ustedes","les gusta","les gustan"]]}]},

 {id:"es-ref-coincidir",num:"04",en:"También y tampoco",vi:"Đồng ý và không đồng ý",short:"a mí también · a mí tampoco · a mí sí · a mí no",
  core:"Dùng <strong>también / tampoco</strong> để nói bạn <strong>giống</strong> người kia, và <strong>sí / no</strong> để nói <strong>khác</strong>. Với gustar, thêm <strong>a mí / a ti / a él…</strong> trước.",
  forms:[["Giống (khẳng định)","A mí también.","Me gusta el té. → <mark>A mí también</mark>."],["Giống (phủ định)","A mí tampoco.","No me gusta el frío. → <mark>A mí tampoco</mark>."],["Khác (khẳng định)","A mí sí.","No me gusta el té. → <mark>A mí sí</mark>."],["Khác (phủ định)","A mí no.","Me gusta el frío. → <mark>A mí no</mark>."],["Với động từ thường","Yo también / Yo tampoco","Trabajo mucho. → <mark>Yo también</mark>."],["Từ chối rõ ràng","Yo no","¿Estudias? → <mark>Yo no</mark>."]],
  uses:[["Phản hồi khi trò chuyện","—Me encanta viajar. —<mark>A mí también</mark>."],["Phản đối nhẹ nhàng","—No me gusta madrugar. —<mark>A mí sí</mark>."]],
  signals:["también","tampoco","a mí sí","a mí no"],
  speak:5,write:4,
  reg:"“También” dùng khi bạn đồng ý với câu khẳng định, “tampoco” khi bạn đồng ý với câu phủ định. Không dùng “también” cho câu phủ định.",
  mistake:["No me gusta el frío. — A mí también.","No me gusta el frío. — A mí tampoco.","Với câu phủ định, “cũng vậy” phải là tampoco."],
  table:[{head:["Đồng ý","Không đồng ý"],rows:[["Me gusta el té","A mí también","A mí no"],["No me gusta el té","A mí tampoco","A mí sí"],["Trabajo mucho","Yo también","Yo no"],["No trabajo hoy","Yo tampoco","Yo sí"]]}]},
];

registerRows("reflexivos", T);
GRAMMAR.theory.reflexivos = { rows: T, first: "es-ref-reflexivos" };
})();
