/* es/content/theory/saludos.js
   Saludos: greetings, introductions, numbers 0-100, days/months/time.
   Uses the "table" diagram mode. */
(() => {
const T = [
 {id:"es-sal-saludos",num:"01",en:"Saludos y despedidas",vi:"Chào hỏi & tạm biệt",short:"Hola · Buenos días · Adiós · Hasta luego",
  core:"Chào theo <strong>thời điểm trong ngày</strong> và theo <strong>mức độ trang trọng</strong>. Với người lớn tuổi hoặc người lạ dùng <strong>usted</strong>, với bạn bè dùng <strong>tú</strong>.",
  forms:[["Sáng","Buenos días","<mark>Buenos días</mark>, señora García."],["Chiều","Buenas tardes","<mark>Buenas tardes</mark>, ¿qué tal?"],["Tối / đêm","Buenas noches","<mark>Buenas noches</mark>, hasta mañana."],["Thân mật","Hola, ¿qué tal? / ¿Cómo estás?","<mark>Hola</mark>, ¿cómo estás?"],["Trang trọng","¿Cómo está usted?","¿<mark>Cómo está usted</mark>, doctor?"],["Tạm biệt","Adiós / Hasta luego / Hasta mañana / Nos vemos","<mark>Hasta luego</mark>, Ana."]],
  uses:[["Trả lời “khỏe không?”","Muy bien, gracias, ¿y tú? / Más o menos. / Mal."],["Cảm ơn và xin lỗi","<mark>Gracias</mark>. De nada. <mark>Perdón</mark>. <mark>Por favor</mark>."]],
  signals:["Buenos días","Buenas tardes","Buenas noches","Hola","Adiós","Hasta luego"],
  speak:5,write:3,
  reg:"“Buenos días” dùng đến khoảng 12 giờ trưa, “buenas tardes” từ trưa đến tối, “buenas noches” khi trời tối hoặc trước khi ngủ.",
  mistake:["Buenas días","Buenos días","“Día” là danh từ giống đực nên đi với “buenos”. “Tardes” và “noches” giống cái nên đi với “buenas”."],
  table:[{head:["Chào","Tạm biệt"],rows:[["Sáng","Buenos días","Hasta luego"],["Chiều","Buenas tardes","Hasta pronto"],["Tối","Buenas noches","Hasta mañana"]]}]},

 {id:"es-sal-presentarse",num:"02",en:"Presentarse",vi:"Giới thiệu bản thân",short:"Me llamo… Soy de… Tengo… años",
  core:"Ba mẫu câu cốt lõi: <strong>Me llamo + tên</strong>, <strong>Soy de + nơi</strong>, <strong>Tengo + số + años</strong>. Tuổi dùng <strong>tener</strong>, không dùng “ser”.",
  forms:[["Tên","Me llamo… / Mi nombre es… / Soy…","<mark>Me llamo</mark> Linh."],["Hỏi tên","¿Cómo te llamas? / ¿Cómo se llama usted?","¿<mark>Cómo te llamas</mark>?"],["Quê quán","Soy de + nơi / ¿De dónde eres?","<mark>Soy de</mark> Vietnam."],["Tuổi","Tengo + số + años / ¿Cuántos años tienes?","<mark>Tengo</mark> veinticinco <mark>años</mark>."],["Nghề","Soy + nghề / Trabajo en…","<mark>Soy</mark> diseñadora."],["Gặp lần đầu","Mucho gusto / Encantado(a)","<mark>Mucho gusto</mark>, Pedro."]],
  uses:[["Nói quốc tịch","Soy <mark>vietnamita</mark>. Soy <mark>español</mark>."],["Nói ngôn ngữ","<mark>Hablo</mark> español y un poco de inglés."]],
  signals:["Me llamo","Soy de","Tengo … años","Mucho gusto","¿Cómo te llamas?"],
  speak:5,write:4,
  reg:"Nam nói “encantado”, nữ nói “encantada”. Nghề và quốc tịch cũng đổi đuôi -o/-a theo giới tính người nói.",
  mistake:["Soy veinte años.","Tengo veinte años.","Tuổi trong tiếng Tây Ban Nha dùng tener (có … tuổi), không dùng ser."],
  table:[{head:["Trả lời"],rows:[["¿Cómo te llamas?","Me llamo Linh."],["¿De dónde eres?","Soy de Vietnam."],["¿Cuántos años tienes?","Tengo 25 años."],["¿A qué te dedicas?","Soy diseñadora."]]}]},

 {id:"es-sal-numeros",num:"03",en:"Los números",vi:"Số đếm 0-100",short:"cero, uno, dos … diez, veinte … cien",
  core:"Số 0-15 phải học thuộc, <strong>16-29</strong> viết liền một từ (dieciséis, veintiuno), từ <strong>31</strong> trở đi ghép bằng <strong>y</strong>: treinta <strong>y</strong> uno.",
  forms:[["0-10","cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez","Tengo <mark>dos</mark> hermanos."],["11-15","once, doce, trece, catorce, quince","Son las <mark>doce</mark>."],["16-19","dieciséis, diecisiete, dieciocho, diecinueve","Tiene <mark>dieciséis</mark> años."],["20-29","veinte, veintiuno, veintidós … veintinueve","<mark>Veintiún</mark> años."],["30-99","treinta y uno, cuarenta y dos, cincuenta, sesenta, setenta, ochenta, noventa","<mark>Treinta y cinco</mark> euros."],["100","cien (số tròn) / ciento (+ số lẻ)","<mark>Cien</mark> personas. <mark>Ciento</mark> uno."]],
  uses:[["Uno đổi thành un/una trước danh từ","<mark>un</mark> libro, <mark>una</mark> casa, veintiún libros"],["Đọc số điện thoại theo cặp","612 34 56 78: seis-doce, treinta y cuatro…"]],
  signals:["uno / un / una","veinte","treinta y","cien","ciento"],
  speak:5,write:5,
  reg:"Từ 31 đến 99 luôn có “y” và viết thành ba từ rời: treinta y uno. Riêng 16-29 viết liền một từ.",
  mistake:["treinta uno","treinta y uno","Từ 31 trở đi phải có “y” giữa chục và đơn vị."],
  table:[{head:["Từ","Ví dụ"],rows:[["20","veinte","veintidós"],["30","treinta","treinta y tres"],["40","cuarenta","cuarenta y cinco"],["50","cincuenta","cincuenta y nueve"],["60-90","sesenta, setenta, ochenta, noventa","setenta y ocho"]]}]},

 {id:"es-sal-tiempo",num:"04",en:"Días, meses y hora",vi:"Ngày, tháng và giờ",short:"lunes… domingo · enero… diciembre · Son las tres",
  core:"Tên <strong>ngày</strong> và <strong>tháng</strong> <strong>không viết hoa</strong>. Hỏi giờ dùng <strong>¿Qué hora es?</strong>. Trả lời <strong>Es la una</strong> (1 giờ) và <strong>Son las + số</strong> (các giờ khác).",
  forms:[["Ngày","lunes, martes, miércoles, jueves, viernes, sábado, domingo","El <mark>lunes</mark> tengo clase."],["Tháng","enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre","Mi cumpleaños es en <mark>mayo</mark>."],["Ngày tháng","el + số + de + tháng","Hoy es <mark>el 5 de junio</mark>."],["1 giờ","Es la una","<mark>Es la una</mark> y media."],["Các giờ khác","Son las + số","<mark>Son las</mark> tres."],["Phút","y (hơn) / menos (kém) / y cuarto / y media","Son las dos <mark>y cuarto</mark>. Son las cinco <mark>menos diez</mark>."]],
  uses:[["Hỏi giờ","¿<mark>Qué hora es</mark>? ¿A qué hora empieza la clase?"],["Nói giờ làm việc","La clase es <mark>a las</mark> ocho."]],
  signals:["¿Qué hora es?","Es la una","Son las","y media","menos cuarto","el + ngày + de + tháng"],
  speak:5,write:4,
  reg:"Ngày dùng mạo từ “el”: el lunes. Nói “vào các thứ Hai” dùng số nhiều: los lunes.",
  mistake:["Es las tres.","Son las tres.","Từ 2 giờ trở lên số nhiều nên dùng “son las”. Chỉ 1 giờ dùng “es la una”."],
  table:[{head:["Tiếng Tây Ban Nha"],rows:[["1:00","Es la una"],["3:15","Son las tres y cuarto"],["6:30","Son las seis y media"],["8:45","Son las nueve menos cuarto"]]}]},
];

registerRows("saludos", T);
GRAMMAR.theory.saludos = { rows: T, first: "es-sal-saludos" };
})();
