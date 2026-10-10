/* es/content/theory/pasiva.js
   Pasiva con ser, pasiva refleja con se, se impersonal y accidental,
   estilo indirecto. Uses the "table" diagram mode. */
(() => {
const T = [
 {id:"es-pv-ser",num:"01",en:"Pasiva con ser",vi:"Bị động với ser",short:"ser + participio (+ por + tác nhân)",
  core:"Bị động nhấn mạnh <strong>đối tượng chịu tác động</strong>. Cấu tạo: <strong>ser (chia theo thì) + phân từ + por + tác nhân</strong>. Phân từ <strong>khớp giống và số</strong> với chủ ngữ. Chủ yếu dùng trong văn viết, báo chí và văn phong trang trọng.",
  forms:[["Presente","es / son + participio","La carta <mark>es escrita</mark> por Ana."],["Indefinido","fue / fueron + participio","La casa <mark>fue construida</mark> en 1990."],["Futuro","será / serán + participio","El puente <mark>será inaugurado</mark> mañana."],["Tác nhân","por + người hoặc vật","Los libros <mark>son leídos por</mark> muchos jóvenes."],["Khớp giống số","participio đổi -o / -a / -os / -as","Las casas <mark>fueron vendidas</mark>."],["Không có tác nhân","bỏ por + …","La tienda <mark>fue cerrada</mark>."]],
  uses:[["Văn viết, báo chí","El presidente <mark>fue elegido</mark> ayer."],["Nhấn mạnh người chịu tác động","El cuadro <mark>fue pintado</mark> por Picasso."]],
  signals:["fue + participio","por + tác nhân","fue construido","será inaugurado"],
  speak:2,write:5,
  reg:"Trong văn nói, người Tây Ban Nha hiếm khi dùng pasiva con ser. Họ thường dùng câu chủ động hoặc “se” (Se construyó en 1990).",
  mistake:["La carta fue escrito por Ana.","La carta fue escrita por Ana.","Phân từ trong bị động khớp giống số với chủ ngữ (la carta → escrita)."],
  table:[{head:["Bị động"],rows:[["Ana escribió la carta.","La carta fue escrita por Ana."],["Picasso pintó el cuadro.","El cuadro fue pintado por Picasso."],["Venden las casas.","Las casas son vendidas."]]}]},

 {id:"es-pv-se",num:"02",en:"Pasiva refleja con se",vi:"Bị động với se",short:"Se + động từ ngôi 3 khớp với danh từ",
  core:"Cách bị động <strong>tự nhiên nhất</strong> trong tiếng nói. Cấu tạo: <strong>se + động từ ngôi thứ ba</strong>, động từ <strong>khớp số</strong> với danh từ đi sau (đóng vai chủ ngữ). Không nêu tác nhân.",
  forms:[["Số ít","se + động từ số ít","<mark>Se vende</mark> casa. <mark>Se habla</mark> español."],["Số nhiều","se + động từ số nhiều","<mark>Se venden</mark> casas. <mark>Se hablan</mark> dos idiomas."],["Quá khứ","se + indefinido / imperfecto","<mark>Se construyó</mark> en 1990. <mark>Se vendían</mark> libros."],["Phủ định","no se + động từ","<mark>No se permite</mark> fumar."],["Hướng dẫn, công thức","se + động từ","<mark>Se corta</mark> la cebolla y <mark>se añade</mark> sal."],["Biển báo","se + động từ","<mark>Se alquilan</mark> habitaciones."]],
  uses:[["Biển báo, quảng cáo","<mark>Se vende</mark> piso. <mark>Se alquilan</mark> coches."],["Công thức, hướng dẫn","<mark>Se bate</mark> el huevo y <mark>se fríe</mark>."],["Nói chung về nơi chốn","En España <mark>se come</mark> tarde."]],
  signals:["se vende","se alquila","se habla","se permite","no se puede"],
  speak:5,write:5,
  reg:"Động từ khớp với danh từ đi sau, không khớp với “se”: Se vende una casa, nhưng Se venden dos casas.",
  mistake:["Se vende casas.","Se venden casas.","Casas là số nhiều nên động từ phải ở số nhiều."],
  table:[{head:["Số ít","Số nhiều"],rows:[["vender","Se vende casa.","Se venden casas."],["hablar","Se habla español.","Se hablan varios idiomas."],["alquilar","Se alquila piso.","Se alquilan pisos."]]}]},

 {id:"es-pv-impersonal",num:"03",en:"Se impersonal y accidental",vi:"Se vô nhân xưng và se vô ý",short:"Se vive bien aquí · Se me cayó el vaso",
  core:"<strong>Se vô nhân xưng</strong> nói chung về “người ta”: <strong>se + động từ ngôi thứ ba số ít</strong>, không có chủ ngữ cụ thể. <strong>Se vô ý</strong> diễn tả việc xảy ra “ngoài ý muốn”: <strong>se + me / te / le / nos / les + động từ</strong>, động từ khớp với <strong>vật bị tác động</strong>.",
  forms:[["Vô nhân xưng","se + ngôi 3 số ít (không có tân ngữ)","<mark>Se vive</mark> bien aquí. <mark>Se trabaja</mark> mucho."],["Với tân ngữ là người","se + động từ + a + người","<mark>Se ve a</mark> los niños en el parque."],["se dice que","người ta nói rằng","<mark>Se dice que</mark> va a llover."],["Vô ý","se + me / te / le + động từ","<mark>Se me cayó</mark> el vaso."],["Động từ khớp với vật","vật số nhiều → động từ số nhiều","<mark>Se me cayeron</mark> los vasos."],["Nhiều động từ","caer, olvidar, perder, romper, acabar","<mark>Se me olvidó</mark> la llave. <mark>Se nos acabó</mark> el tiempo."]],
  uses:[["Nói về “người ta” nói chung","En esta ciudad <mark>se vive</mark> muy tranquilo."],["Nói việc xảy ra ngoài ý muốn","<mark>Se me perdió</mark> el móvil. <mark>Se le rompió</mark> el coche."]],
  signals:["se dice que","se vive","se me olvidó","se me cayó","se nos acabó"],
  speak:5,write:4,
  reg:"Cấu trúc “se me” giúp tránh đổ lỗi: thay vì “Olvidé la llave” (tôi quên), nói “Se me olvidó la llave” (chìa khóa bị quên).",
  mistake:["Se me cayeron el vaso.","Se me cayó el vaso.","Động từ khớp với vật (el vaso, số ít), không khớp với người."],
  table:[{head:["Vô nhân xưng","Vô ý"],rows:[["Ví dụ 1","Se vive bien aquí.","Se me cayó el vaso."],["Ví dụ 2","Se dice que llueve.","Se nos acabó el tiempo."],["Ví dụ 3","Se trabaja mucho.","Se le olvidaron las llaves."]]}]},

 {id:"es-pv-indirecto",num:"04",en:"Estilo indirecto",vi:"Câu tường thuật",short:"Dijo que + lùi một thì · preguntó si…",
  core:"Khi tường thuật lại lời nói <strong>trong quá khứ</strong>, động từ <strong>lùi một thì</strong>: presente → <strong>imperfecto</strong>, indefinido / perfecto → <strong>pluscuamperfecto</strong>, futuro → <strong>condicional</strong>, mệnh lệnh → <strong>subjuntivo imperfecto</strong>. Các từ chỉ thời gian, nơi chốn cũng đổi: hoy → ese día, mañana → al día siguiente, aquí → allí.",
  forms:[["presente → imperfecto","“Tengo hambre.”","Dijo que <mark>tenía</mark> hambre."],["indefinido / perfecto → pluscuamperfecto","“Comí en casa.”","Dijo que <mark>había comido</mark> en casa."],["futuro → condicional","“Vendré mañana.”","Dijo que <mark>vendría</mark> al día siguiente."],["mệnh lệnh → subjuntivo imperfecto","“¡Ven!”","Me pidió que <mark>viniera</mark>."],["câu hỏi có từ để hỏi","“¿Dónde vives?”","Preguntó <mark>dónde vivía</mark>."],["câu hỏi có / không","“¿Estás cansado?”","Preguntó <mark>si estaba</mark> cansado."]],
  uses:[["Kể lại lời người khác","Ana dijo que <mark>llegaría</mark> tarde."],["Kể lại câu hỏi","Me preguntó <mark>qué hacía</mark> allí."],["Kể lại yêu cầu","Nos pidió que <mark>habláramos</mark> más despacio."]],
  signals:["dijo que","preguntó si","me pidió que","explicó que","aseguró que"],
  speak:4,write:5,
  reg:"Nếu động từ tường thuật ở hiện tại (Dice que viene), động từ không lùi thì: Dice que viene mañana.",
  mistake:["Dijo que vendrá mañana.","Dijo que vendría al día siguiente.","Tường thuật lời nói quá khứ: futuro → condicional, mañana → al día siguiente."],
  table:[{head:["Lời nói trực tiếp","Tường thuật"],rows:[["presente","“Estudio.”","Dijo que estudiaba."],["indefinido","“Estudié.”","Dijo que había estudiado."],["futuro","“Estudiaré.”","Dijo que estudiaría."],["mệnh lệnh","“¡Estudia!”","Me pidió que estudiara."],["hoy / aquí","hoy · aquí","ese día · allí"]]}]},
];

registerRows("pasiva", T);
GRAMMAR.theory.pasiva = { rows: T, first: "es-pv-ser" };
})();
