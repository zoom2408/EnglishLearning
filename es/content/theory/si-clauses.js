/* es/content/theory/si-clauses.js
   Subjuntivo imperfecto y oraciones con si (reales, irreales, pasadas).
   Uses the "table" diagram mode. */
(() => {
const H = ["yo","tú","él / ella","nosotros","vosotros","ellos"];
const T = [
 {id:"es-si-formas",num:"01",en:"Subjuntivo imperfecto",vi:"Subjuntivo quá khứ",short:"ellos del indefinido − ron + ra, ras, ra, ramos, rais, ran",
  core:"Cách tạo: lấy <strong>ngôi ellos của indefinido</strong>, <strong>bỏ -ron</strong>, thêm <strong>-ra, -ras, -ra, -ramos, -rais, -ran</strong>. Ngôi nosotros có dấu: <strong>habláramos</strong>. Có dạng song song -se (hablase) ít dùng hơn.",
  forms:[["hablar","hablaron → habla- + -ra","<mark>hablara</mark>, <mark>hablaras</mark>"],["comer","comieron → comie- + -ra","<mark>comiera</mark>, <mark>comieras</mark>"],["tener","tuvieron → tuvie- + -ra","<mark>tuviera</mark>, <mark>tuvieras</mark>"],["ser / ir","fueron → fue- + -ra","<mark>fuera</mark>, <mark>fueras</mark>"],["hacer","hicieron → hicie- + -ra","<mark>hiciera</mark>, <mark>hicieras</mark>"],["decir","dijeron → dije- + -ra","<mark>dijera</mark>, <mark>dijeras</mark>"]],
  uses:[["Giả định không có thật","Si <mark>tuviera</mark> dinero, viajaría."],["Mong muốn lịch sự (querer)","<mark>Quisiera</mark> un café, por favor."],["Sau quá khứ + que","Quería que <mark>vinieras</mark>. Era importante que <mark>hablaras</mark>."]],
  signals:["si + -ra","quisiera","quería que","ojalá + -ra","como si"],
  speak:3,write:5,
  reg:"Ngôi nosotros luôn có dấu để giữ trọng âm: habláramos, comiéramos, tuviéramos.",
  mistake:["Si tenía dinero, viajaría.","Si tuviera dinero, viajaría.","Giả định không có thật dùng si + subjuntivo imperfecto."],
  table:[{head:H,rows:[["hablar","hablara","hablaras","hablara","habláramos","hablarais","hablaran"],["comer","comiera","comieras","comiera","comiéramos","comierais","comieran"],["ser / ir","fuera","fueras","fuera","fuéramos","fuerais","fueran"],["tener","tuviera","tuvieras","tuviera","tuviéramos","tuvierais","tuvieran"],["hacer","hiciera","hicieras","hiciera","hiciéramos","hicierais","hicieran"]]}]},

 {id:"es-si-real",num:"02",en:"Si + presente",vi:"Câu điều kiện có thể xảy ra",short:"Si + presente → presente / futuro / imperativo",
  core:"Điều kiện <strong>có thể xảy ra</strong> trong thực tế: <strong>si + presente</strong> ở mệnh đề điều kiện, mệnh đề kết quả dùng <strong>presente, futuro hoặc imperativo</strong>. Không dùng futuro hoặc subjuntivo ngay sau <strong>si</strong>.",
  forms:[["si + presente → presente","sự thật chung, thói quen","<mark>Si llueve</mark>, <mark>me quedo</mark> en casa."],["si + presente → futuro","dự đoán, lời hứa","<mark>Si estudias</mark>, <mark>aprobarás</mark>."],["si + presente → imperativo","lời khuyên","<mark>Si tienes sed</mark>, <mark>bebe</mark> agua."],["Đảo vế","kết quả đứng trước, không cần dấu phẩy","<mark>Aprobarás</mark> si estudias."],["Không dùng","si + futuro","✗ Si <mark>lloverá</mark> → ✓ Si <mark>llueve</mark>"]],
  uses:[["Kế hoạch tùy điều kiện","<mark>Si hace buen tiempo</mark>, <mark>iremos</mark> a la playa."],["Lời khuyên","<mark>Si te duele la cabeza</mark>, <mark>toma</mark> una pastilla."]],
  signals:["si + presente","si llueve","si estudias","si tienes"],
  speak:5,write:5,
  reg:"Sau “si” không bao giờ dùng futuro. Đây là lỗi hay gặp ở người Việt vì tiếng Việt không phân biệt thì.",
  mistake:["Si lloverá, me quedaré.","Si llueve, me quedaré.","Sau si dùng presente, không dùng futuro."],
  table:[{head:["Mệnh đề si","Kết quả"],rows:[["Loại 1","Si llueve","me quedo / me quedaré / quédate"],["Ví dụ","Si estudias","aprobarás"],["Ví dụ","Si tienes sed","bebe agua"]]}]},

 {id:"es-si-irreal",num:"03",en:"Si + imperfecto de subjuntivo",vi:"Câu điều kiện không có thật ở hiện tại",short:"Si tuviera dinero, viajaría",
  core:"Điều kiện <strong>khó xảy ra hoặc trái sự thật hiện tại</strong>: <strong>si + subjuntivo imperfecto</strong> ở mệnh đề điều kiện, <strong>condicional simple</strong> ở mệnh đề kết quả. Không dùng condicional sau si.",
  forms:[["Cấu trúc","si + subjuntivo imperfecto → condicional","<mark>Si tuviera</mark> dinero, <mark>viajaría</mark>."],["Giả định bản thân","Si yo fuera tú…","<mark>Si yo fuera tú</mark>, <mark>hablaría</mark> con él."],["Điều ước","ojalá + subjuntivo imperfecto","<mark>Ojalá tuviera</mark> más tiempo."],["Như thể","como si + subjuntivo imperfecto","Habla <mark>como si fuera</mark> un experto."],["Không dùng","si + condicional","✗ Si <mark>tendría</mark> → ✓ Si <mark>tuviera</mark>"]],
  uses:[["Mơ ước","<mark>Si ganara</mark> la lotería, <mark>compraría</mark> una casa."],["Lời khuyên","<mark>Si yo fuera tú</mark>, <mark>estudiaría</mark> más."]],
  signals:["si + -ra","si yo fuera tú","ojalá + -ra","como si"],
  speak:4,write:5,
  reg:"“Si yo fuera tú” là cụm cố định để khuyên người khác: dùng “fuera”, không dùng “era” hoặc “sería”.",
  mistake:["Si tendría dinero, viajaría.","Si tuviera dinero, viajaría.","Mệnh đề si dùng subjuntivo imperfecto, không dùng condicional."],
  table:[{head:["Mệnh đề si","Kết quả"],rows:[["Giả định","Si tuviera dinero","viajaría"],["Giả định","Si fuera tú","hablaría con él"],["Giả định","Si ganara la lotería","compraría una casa"]]}]},

 {id:"es-si-pasado",num:"04",en:"Si + pluscuamperfecto de subjuntivo",vi:"Câu điều kiện không có thật ở quá khứ",short:"Si hubiera estudiado, habría aprobado",
  core:"Điều kiện <strong>trái sự thật trong quá khứ</strong> (đã không xảy ra): <strong>si + hubiera + phân từ</strong> ở mệnh đề điều kiện, <strong>habría + phân từ</strong> (condicional perfecto) ở mệnh đề kết quả. Thể hiện sự tiếc nuối.",
  forms:[["Cấu trúc","si + hubiera + participio → habría + participio","<mark>Si hubiera estudiado</mark>, <mark>habría aprobado</mark>."],["Tiếc nuối","ojalá + hubiera + participio","<mark>Ojalá hubiera ido</mark> contigo."],["Hối hận","si + hubiera → habría","<mark>Si hubiera sabido</mark>, no <mark>habría venido</mark>."],["hubiera","haber ở subjuntivo imperfecto","hubiera, hubieras, hubiera, hubiéramos…"],["habría","haber ở condicional","habría, habrías, habría, habríamos…"],["Không dùng","si + habría","✗ Si <mark>habría</mark> estudiado → ✓ Si <mark>hubiera</mark> estudiado"]],
  uses:[["Nói về điều đã không làm","<mark>Si hubiera llegado</mark> antes, <mark>habría visto</mark> la película."],["Than phiền, tiếc nuối","<mark>Si hubiéramos salido</mark> temprano, no <mark>habríamos perdido</mark> el tren."]],
  signals:["si hubiera + participio","habría + participio","ojalá hubiera","si hubiera sabido"],
  speak:3,write:5,
  reg:"Cặp “si hubiera + participio / habría + participio” chỉ dùng cho quá khứ không thể thay đổi. Nó diễn tả sự tiếc nuối hoặc trách móc.",
  mistake:["Si habría estudiado, habría aprobado.","Si hubiera estudiado, habría aprobado.","Mệnh đề si không dùng condicional. Dùng hubiera + participio."],
  table:[{head:["Mệnh đề si","Kết quả"],rows:[["Quá khứ","Si hubiera estudiado","habría aprobado"],["Quá khứ","Si hubiera sabido","no habría venido"],["Quá khứ","Si hubiéramos salido temprano","no habríamos perdido el tren"]]}]},
];

registerRows("si-clauses", T);
GRAMMAR.theory["si-clauses"] = { rows: T, first: "es-si-formas" };
})();
