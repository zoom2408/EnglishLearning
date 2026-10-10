/* es/content/theory/futuro.js
   Futuro simple, irregulares, condicional y sus usos de conjetura.
   Uses the "table" diagram mode. */
(() => {
const H = ["yo","tú","él / ella","nosotros","vosotros","ellos"];
const T = [
 {id:"es-fut-simple",num:"01",en:"Futuro simple",vi:"Tương lai đơn",short:"nguyên mẫu + é · ás · á · emos · éis · án",
  core:"<strong>Futuro simple</strong> tạo bằng cách <strong>giữ nguyên mẫu</strong> rồi thêm đuôi: <strong>-é, -ás, -á, -emos, -éis, -án</strong>. Đuôi giống nhau cho cả ba nhóm -ar, -er, -ir. Dùng cho <strong>dự đoán, kế hoạch xa và lời hứa</strong>.",
  forms:[["yo","nguyên mẫu + -é","<mark>Hablaré</mark> con él."],["tú","nguyên mẫu + -ás","¿<mark>Vendrás</mark> mañana?"],["él / ella / usted","nguyên mẫu + -á","Ella <mark>viajará</mark> en verano."],["nosotros","nguyên mẫu + -emos","<mark>Comeremos</mark> juntos."],["vosotros","nguyên mẫu + -éis","¿<mark>Viviréis</mark> aquí?"],["ellos / ustedes","nguyên mẫu + -án","<mark>Llegarán</mark> tarde."]],
  uses:[["Dự đoán","Mañana <mark>lloverá</mark> en el norte."],["Lời hứa và kế hoạch xa","Te <mark>llamaré</mark> mañana. El año que viene <mark>estudiaré</mark> alemán."],["Câu điều kiện thật","Si estudias, <mark>aprobarás</mark>."]],
  signals:["mañana","el año que viene","algún día","dentro de + thời gian","pronto","seguramente"],
  speak:4,write:5,
  reg:"Trong văn nói, người ta thường dùng “ir a + nguyên mẫu” thay futuro. Futuro hay gặp hơn trong văn viết, bản tin và lời hứa.",
  mistake:["Hablarémos con él mañana.","Hablaremos con él mañana.","Ngôi nosotros của futuro (-emos) không có dấu. Các ngôi còn lại đều có dấu."],
  table:[{head:H,rows:[["hablar","hablaré","hablarás","hablará","hablaremos","hablaréis","hablarán"],["comer","comeré","comerás","comerá","comeremos","comeréis","comerán"],["vivir","viviré","vivirás","vivirá","viviremos","viviréis","vivirán"]]}]},

 {id:"es-fut-irr",num:"02",en:"Futuro irregular",vi:"Tương lai bất quy tắc",short:"tendré · podré · haré · diré · saldré · vendré",
  core:"Một số động từ đổi <strong>gốc</strong> ở futuro nhưng vẫn dùng <strong>cùng đuôi</strong> (-é, -ás, -á…). Có 3 kiểu đổi: <strong>mất nguyên âm</strong> (poder → podr-), <strong>thêm d</strong> (tener → tendr-), <strong>rút ngắn</strong> (hacer → har-, decir → dir-).",
  forms:[["Mất nguyên âm","poder → podr-, saber → sabr-, querer → querr-, haber → habr-","<mark>podré</mark>, <mark>sabrás</mark>, <mark>querrá</mark>"],["Thêm d","tener → tendr-, venir → vendr-, poner → pondr-, salir → saldr-","<mark>tendré</mark>, <mark>vendrás</mark>, <mark>pondrá</mark>, <mark>saldremos</mark>"],["Rút ngắn","hacer → har-, decir → dir-","<mark>haré</mark>, <mark>dirás</mark>"],["Các hợp chất","deshacer → desharé, prevenir → prevendré","<mark>mantendré</mark>, <mark>contendrá</mark>"]],
  uses:[["Kế hoạch và lời hứa","Mañana <mark>tendré</mark> tiempo. <mark>Saldré</mark> temprano."],["Dự đoán","<mark>Habrá</mark> mucha gente. <mark>Será</mark> difícil."]],
  signals:["tendré","podré","haré","diré","saldré","vendré"],
  speak:4,write:5,
  reg:"Haber ở futuro có dạng “habrá” (sẽ có). Ví dụ: Mañana habrá una fiesta.",
  mistake:["Yo tenderé tiempo.","Yo tendré tiempo.","Tener bất quy tắc ở futuro: gốc là tendr-, không phải tener-."],
  table:[{head:H,rows:[["tener","tendré","tendrás","tendrá","tendremos","tendréis","tendrán"],["poder","podré","podrás","podrá","podremos","podréis","podrán"],["hacer","haré","harás","hará","haremos","haréis","harán"],["decir","diré","dirás","dirá","diremos","diréis","dirán"],["salir","saldré","saldrás","saldrá","saldremos","saldréis","saldrán"]]}]},

 {id:"es-fut-cond",num:"03",en:"Condicional simple",vi:"Điều kiện đơn",short:"nguyên mẫu + ía · ías · ía · íamos · íais · ían",
  core:"<strong>Condicional simple</strong> tạo bằng <strong>nguyên mẫu + -ía, -ías, -ía, -íamos, -íais, -ían</strong>. Cùng gốc bất quy tắc với futuro. Dùng để <strong>lịch sự, khuyên nhủ, giả định</strong> và nói về <strong>tương lai trong quá khứ</strong>.",
  forms:[["yo","nguyên mẫu + -ía","<mark>Hablaría</mark> con él."],["tú","nguyên mẫu + -ías","¿<mark>Podrías</mark> ayudarme?"],["él / ella / usted","nguyên mẫu + -ía","Ella <mark>viajaría</mark> más."],["nosotros","nguyên mẫu + -íamos","<mark>Comeríamos</mark> fuera."],["vosotros","nguyên mẫu + -íais","¿<mark>Vendríais</mark> con nosotros?"],["ellos / ustedes","nguyên mẫu + -ían","<mark>Harían</mark> un gran trabajo."]],
  uses:[["Lịch sự","<mark>Me gustaría</mark> un café. ¿<mark>Podría</mark> abrir la ventana?"],["Khuyên nhủ","Yo <mark>iría</mark> al médico. Yo que tú, <mark>hablaría</mark> con él."],["Giả định","Con más dinero, <mark>viajaría</mark> por el mundo."]],
  signals:["me gustaría","¿podrías…?","yo que tú","yo en tu lugar","con más dinero"],
  speak:5,write:5,
  reg:"“Me gustaría” và “¿Podría …?” là cách hỏi lịch sự rất phổ biến, nên dùng thay cho “quiero” và “¿Puede …?” khi giao tiếp trang trọng.",
  mistake:["Si tendría dinero, viajaría.","Si tuviera dinero, viajaría.","Sau “si” không dùng condicional. Mệnh đề si dùng subjuntivo imperfecto (xem module 16)."],
  table:[{head:H,rows:[["hablar","hablaría","hablarías","hablaría","hablaríamos","hablaríais","hablarían"],["comer","comería","comerías","comería","comeríamos","comeríais","comerían"],["tener","tendría","tendrías","tendría","tendríamos","tendríais","tendrían"],["hacer","haría","harías","haría","haríamos","haríais","harían"]]}]},

 {id:"es-fut-usos",num:"04",en:"Conjetura y discurso indirecto",vi:"Phỏng đoán và tường thuật",short:"Serán las tres · Serían las tres · Dijo que vendría",
  core:"Futuro và condicional còn dùng để <strong>phỏng đoán</strong>. <strong>Futuro</strong> phỏng đoán về <strong>hiện tại</strong> (“chắc là …”). <strong>Condicional</strong> phỏng đoán về <strong>quá khứ</strong>. Khi tường thuật lời nói quá khứ, tương lai chuyển thành <strong>condicional</strong>.",
  forms:[["Futuro: đoán hiện tại","futuro","<mark>Serán</mark> las tres. (chắc là 3 giờ)"],["Futuro: đoán hiện tại","futuro","¿Dónde <mark>estará</mark> Ana? (không biết cô ấy ở đâu)"],["Condicional: đoán quá khứ","condicional","<mark>Serían</mark> las tres cuando llegó."],["Tường thuật","dijo que + condicional","Dijo que <mark>vendría</mark> mañana."],["Tường thuật","prometió que + condicional","<mark>Prometió</mark> que lo <mark>haría</mark>."],["Giả định nhẹ","condicional","<mark>Sería</mark> mejor esperar."]],
  uses:[["Đoán điều chưa chắc","—¿Qué hora es? —<mark>Serán</mark> las ocho."],["Kể lại lời hứa","Me dijo que me <mark>llamaría</mark>, pero no lo hizo."]],
  signals:["será","estará","dijo que + condicional","prometió que","quizás"],
  speak:3,write:4,
  reg:"Futuro và condicional dùng để đoán còn thay được bằng “debe de + nguyên mẫu” hoặc “quizás + subjuntivo”.",
  mistake:["Dijo que vendrá mañana.","Dijo que vendría mañana.","Lời nói trong quá khứ được tường thuật, tương lai đổi thành condicional."],
  table:[{head:["Thì","Ví dụ"],rows:[["Đoán hiện tại","futuro","Estará en casa."],["Đoán quá khứ","condicional","Estaría en casa."],["Tường thuật","condicional","Dijo que estaría en casa."]]}]},
];

registerRows("futuro", T);
GRAMMAR.theory.futuro = { rows: T, first: "es-fut-simple" };
})();
