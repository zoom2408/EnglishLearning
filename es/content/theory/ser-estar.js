/* es/content/theory/ser-estar.js
   Ser, Estar, Tener, Hay: the four foundation verbs (present tense).
   Uses the "table" diagram mode. */
(() => {
const T = [
 {id:"es-ser-ser",num:"01",en:"Ser",vi:"Ser: bản chất, danh tính",short:"soy · eres · es · somos · sois · son",
  core:"<strong>Ser</strong> nói về điều <strong>cố định</strong>: danh tính, nghề nghiệp, quốc tịch, đặc điểm, nguồn gốc, chất liệu, giờ giấc, ngày tháng. Mẹo: <strong>DOCTOR</strong> (Description, Occupation, Characteristic, Time, Origin, Relationship).",
  forms:[["yo","soy","<mark>Soy</mark> estudiante."],["tú","eres","¿<mark>Eres</mark> de Vietnam?"],["él / ella / usted","es","Ella <mark>es</mark> alta."],["nosotros","somos","<mark>Somos</mark> amigos."],["vosotros","sois","¿<mark>Sois</mark> españoles?"],["ellos / ustedes","son","<mark>Son</mark> las tres."]],
  uses:[["Nghề, quốc tịch, quê quán","<mark>Es</mark> médico. <mark>Soy</mark> de Hanói."],["Đặc điểm lâu dài","La casa <mark>es</mark> grande. Mi hermano <mark>es</mark> simpático."],["Giờ, ngày, ngày tháng","<mark>Es</mark> lunes. <mark>Son</mark> las ocho."],["Chất liệu, sở hữu","La mesa <mark>es</mark> de madera. El libro <mark>es</mark> de Ana."]],
  signals:["nghề nghiệp","quốc tịch","đặc điểm","giờ","chất liệu","de + nguồn gốc"],
  speak:5,write:5,
  reg:"Nói chung “ser” cho điều “là gì”, còn “estar” cho điều “đang ở trạng thái nào / ở đâu”.",
  mistake:["Estoy médico.","Soy médico.","Nghề nghiệp là danh tính cố định nên dùng ser."],
  table:[{head:["Ser"],rows:[["yo","soy"],["tú","eres"],["él / ella / usted","es"],["nosotros","somos"],["vosotros","sois"],["ellos / ustedes","son"]]}]},

 {id:"es-ser-estar",num:"02",en:"Estar",vi:"Estar: trạng thái, vị trí",short:"estoy · estás · está · estamos · estáis · están",
  core:"<strong>Estar</strong> nói về điều <strong>có thể thay đổi</strong>: vị trí, cảm xúc, trạng thái tạm thời và hành động đang diễn ra. Mẹo: <strong>PLACE</strong> (Position, Location, Action, Condition, Emotion).",
  forms:[["yo","estoy","<mark>Estoy</mark> cansado."],["tú","estás","¿Cómo <mark>estás</mark>?"],["él / ella / usted","está","Madrid <mark>está</mark> en España."],["nosotros","estamos","<mark>Estamos</mark> en casa."],["vosotros","estáis","¿<mark>Estáis</mark> listos?"],["ellos / ustedes","están","Los niños <mark>están</mark> contentos."]],
  uses:[["Vị trí của người và vật","El libro <mark>está</mark> en la mesa. <mark>Estoy</mark> en la oficina."],["Cảm xúc, trạng thái tạm thời","<mark>Estoy</mark> feliz. La sopa <mark>está</mark> fría."],["Sức khỏe","¿Cómo <mark>estás</mark>? <mark>Estoy</mark> bien."],["Hành động đang diễn ra (estar + gerundio)","<mark>Estoy</mark> estudiando español."]],
  signals:["¿Dónde está?","¿Cómo estás?","en + nơi","bien / mal / cansado","estar + -ando/-iendo"],
  speak:5,write:5,
  reg:"Vị trí của người và vật luôn dùng estar. Vị trí của một sự kiện (diễn ra ở đâu) lại dùng ser: La fiesta es en mi casa.",
  mistake:["Soy en casa.","Estoy en casa.","Vị trí của người và vật dùng estar, không dùng ser."],
  table:[{head:["Estar"],rows:[["yo","estoy"],["tú","estás"],["él / ella / usted","está"],["nosotros","estamos"],["vosotros","estáis"],["ellos / ustedes","están"]]}]},

 {id:"es-ser-tener",num:"03",en:"Tener",vi:"Tener: có, sở hữu, tuổi",short:"tengo · tienes · tiene · tenemos · tenéis · tienen",
  core:"<strong>Tener</strong> nghĩa là “có”: sở hữu, tuổi, cảm giác thể chất. Nó <strong>bất quy tắc</strong>: ngôi yo là <strong>tengo</strong>, các ngôi còn lại đổi <strong>e → ie</strong> (trừ nosotros và vosotros).",
  forms:[["yo","tengo","<mark>Tengo</mark> un perro."],["tú","tienes","¿<mark>Tienes</mark> hermanos?"],["él / ella / usted","tiene","Ella <mark>tiene</mark> veinte años."],["nosotros","tenemos","<mark>Tenemos</mark> clase."],["vosotros","tenéis","¿<mark>Tenéis</mark> hambre?"],["ellos / ustedes","tienen","<mark>Tienen</mark> mucho trabajo."]],
  uses:[["Tuổi","<mark>Tengo</mark> 25 años."],["Cảm giác thể chất: hambre, sed, frío, calor, sueño, miedo","<mark>Tengo</mark> hambre. <mark>Tiene</mark> frío."],["Nghĩa vụ: tener que + động từ","<mark>Tengo que</mark> estudiar."]],
  signals:["tengo … años","tener hambre / sed / frío","tener que + inf."],
  speak:5,write:5,
  reg:"Cảm giác thể chất dùng “tener + danh từ” (tengo hambre = tôi có đói). Tuyệt đối không nói “estoy hambre” hay “soy hambre”.",
  mistake:["Estoy hambre.","Tengo hambre.","Hambre là danh từ nên dùng tener (có đói), không dùng estar."],
  table:[{head:["Tener"],rows:[["yo","tengo"],["tú","tienes"],["él / ella / usted","tiene"],["nosotros","tenemos"],["vosotros","tenéis"],["ellos / ustedes","tienen"]]}]},

 {id:"es-ser-hay",num:"04",en:"Hay",vi:"Hay: có (tồn tại)",short:"hay = có, không đổi theo số",
  core:"<strong>Hay</strong> (từ haber) nói về <strong>sự tồn tại</strong>: “có” cái gì ở đâu. Nó <strong>không đổi dạng</strong> dù danh từ số ít hay số nhiều. Hỏi “có … không?” dùng <strong>¿Hay …?</strong>, phủ định dùng <strong>No hay</strong>.",
  forms:[["Khẳng định","Hay + danh từ","<mark>Hay</mark> un libro en la mesa."],["Số nhiều","Hay + danh từ số nhiều","<mark>Hay</mark> dos libros."],["Phủ định","No hay + danh từ","<mark>No hay</mark> leche."],["Câu hỏi","¿Hay + danh từ…?","¿<mark>Hay</mark> un banco cerca?"],["Số lượng","Hay muchos / pocos / varios","<mark>Hay muchos</mark> estudiantes."],["Có … nào?","¿Cuántos hay?","¿<mark>Cuántos hay</mark>?"]],
  uses:[["Mô tả nơi chốn","En mi ciudad <mark>hay</mark> un parque grande."],["Hỏi dịch vụ gần đây","¿<mark>Hay</mark> un baño por aquí?"]],
  signals:["hay un / una","hay + số nhiều","no hay","¿Hay…?"],
  speak:5,write:5,
  reg:"Khi vật đã xác định (có el/la/mi…) thì dùng estar, không dùng hay: El banco está cerca. Hay un banco cerca.",
  mistake:["Hay el libro en la mesa.","El libro está en la mesa.","Hay đi với danh từ chưa xác định (un, dos, mucho). Vật đã xác định (el libro) dùng estar."],
  table:[{head:["Estar (đã xác định)"],rows:[["Hay un libro en la mesa.","El libro está en la mesa."],["Hay dos bancos cerca.","Los bancos están cerca."],["No hay leche.","La leche no está."]]}]},
];

registerRows("ser-estar", T);
GRAMMAR.theory["ser-estar"] = { rows: T, first: "es-ser-ser" };
})();
