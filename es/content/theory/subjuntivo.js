/* es/content/theory/subjuntivo.js
   Subjuntivo presente: formas, irregulares, deseo/influencia y
   emoción/duda/conjunciones. Uses the "table" diagram mode. */
(() => {
const H = ["yo","tú","él / ella","nosotros","vosotros","ellos"];
const T = [
 {id:"es-sub-formas",num:"01",en:"Formación",vi:"Cách tạo subjuntivo hiện tại",short:"-ar → e, es, e, emos, éis, en · -er/-ir → a, as, a, amos, áis, an",
  core:"Subjuntivo diễn tả <strong>điều chưa chắc chắn</strong>: mong muốn, nghi ngờ, cảm xúc. Cách tạo: lấy <strong>ngôi yo của presente</strong>, bỏ <strong>-o</strong>, rồi thêm <strong>đuôi “ngược”</strong>: động từ -ar dùng -e, động từ -er/-ir dùng -a.",
  forms:[["-ar","-e, -es, -e, -emos, -éis, -en","Quiero que <mark>hables</mark> español."],["-er","-a, -as, -a, -amos, -áis, -an","Espero que <mark>comas</mark> bien."],["-ir","-a, -as, -a, -amos, -áis, -an","Es importante que <mark>vivas</mark> bien."],["yo bất quy tắc","dùng gốc yo: tengo → teng-","Quiero que <mark>tengas</mark> suerte. (tener → tenga)"],["yo bất quy tắc","hago → hag-, digo → dig-, salgo → salg-, pongo → pong-","Espero que <mark>hagas</mark> la tarea. Que <mark>digas</mark> la verdad."],["Đổi chính tả","c → qu, g → gu, z → c","<mark>busque</mark>, <mark>llegue</mark>, <mark>empiece</mark>"]],
  uses:[["Mong muốn","Quiero que <mark>vengas</mark> a mi fiesta."],["Lời chúc","¡Que <mark>tengas</mark> un buen día!"],["Mệnh lệnh lịch sự (usted)","<mark>Hable</mark> más despacio, por favor."]],
  signals:["que + subjuntivo","quiero que","espero que","ojalá","para que"],
  speak:4,write:5,
  reg:"Subjuntivo thường đi sau “que” khi hai mệnh đề có chủ ngữ khác nhau. Một chủ ngữ thì dùng nguyên mẫu: Quiero viajar (cùng chủ ngữ).",
  mistake:["Quiero que hablas.","Quiero que hables.","Sau “querer que” phải dùng subjuntivo, không dùng indicativo."],
  table:[{head:H,rows:[["hablar","hable","hables","hable","hablemos","habléis","hablen"],["comer","coma","comas","coma","comamos","comáis","coman"],["vivir","viva","vivas","viva","vivamos","viváis","vivan"],["tener","tenga","tengas","tenga","tengamos","tengáis","tengan"],["hacer","haga","hagas","haga","hagamos","hagáis","hagan"]]}]},

 {id:"es-sub-irr",num:"02",en:"Subjuntivo irregular",vi:"Subjuntivo bất quy tắc",short:"sea · esté · vaya · sepa · dé · haya",
  core:"Sáu động từ không theo quy tắc “bỏ -o”: <strong>ser → sea</strong>, <strong>estar → esté</strong>, <strong>ir → vaya</strong>, <strong>saber → sepa</strong>, <strong>dar → dé</strong>, <strong>haber → haya</strong>. Động từ đổi nguyên âm giữ quy tắc “chiếc ủng”, riêng <strong>-ir</strong> đổi thêm ở nosotros và vosotros.",
  forms:[["ser","sea, seas, sea, seamos, seáis, sean","Quiero que <mark>seas</mark> feliz."],["estar","esté, estés, esté, estemos, estéis, estén","Espero que <mark>estés</mark> bien."],["ir","vaya, vayas, vaya, vayamos, vayáis, vayan","Quiero que <mark>vayas</mark> al médico."],["saber","sepa, sepas, sepa, sepamos, sepáis, sepan","Espero que <mark>sepas</mark> la respuesta."],["dar","dé, des, dé, demos, deis, den","Quiero que me <mark>des</mark> tu número."],["e → ie / o → ue","quiera, pueda, duerma… (ủng)","Espero que <mark>puedas</mark> venir. Que <mark>quieras</mark> ayudar."]],
  uses:[["Mong muốn đối với người khác","Quiero que <mark>vayamos</mark> juntos."],["Chúc và hy vọng","Ojalá que <mark>sepas</mark> la verdad."]],
  signals:["sea","esté","vaya","sepa","dé","haya"],
  speak:4,write:5,
  reg:"Dấu trên “dé” (subjuntivo của dar) phân biệt với giới từ “de”. Tương tự, “esté” có dấu để phân biệt với “este”.",
  mistake:["Quiero que vas al médico.","Quiero que vayas al médico.","Ir có subjuntivo bất quy tắc là vaya, không dùng vas."],
  table:[{head:H,rows:[["ser","sea","seas","sea","seamos","seáis","sean"],["estar","esté","estés","esté","estemos","estéis","estén"],["ir","vaya","vayas","vaya","vayamos","vayáis","vayan"],["saber","sepa","sepas","sepa","sepamos","sepáis","sepan"],["dar","dé","des","dé","demos","deis","den"]]}]},

 {id:"es-sub-deseo",num:"03",en:"Deseo e influencia",vi:"Mong muốn và tác động",short:"quiero que · espero que · prefiero que · te pido que",
  core:"Sau các động từ <strong>mong muốn, yêu cầu, khuyên, ra lệnh</strong> mà <strong>chủ ngữ khác nhau</strong>, dùng subjuntivo: <strong>querer que, esperar que, preferir que, pedir que, recomendar que, necesitar que</strong>. <strong>Ojalá</strong> không cần “que”.",
  forms:[["querer que","muốn ai làm gì","<mark>Quiero que</mark> vengas."],["esperar que","hy vọng","<mark>Espero que</mark> te guste."],["preferir que","muốn hơn","<mark>Prefiero que</mark> hables tú."],["pedir / recomendar que","yêu cầu, khuyên","<mark>Te pido que</mark> me ayudes."],["ojalá (que)","mong là","<mark>Ojalá</mark> llueva mañana."],["cùng chủ ngữ","dùng nguyên mẫu","<mark>Quiero</mark> ir. (không dùng que)"]],
  uses:[["Mong người khác làm gì","<mark>Quiero que</mark> estudies más. <mark>Necesito que</mark> me ayudes."],["Khuyên nhủ","<mark>Te recomiendo que</mark> visites Granada."]],
  signals:["quiero que","espero que","prefiero que","te pido que","te recomiendo que","ojalá"],
  speak:5,write:5,
  reg:"Mẹo: chủ ngữ khác nhau + mong muốn → subjuntivo. Chủ ngữ giống nhau → nguyên mẫu (Quiero comer vs Quiero que comas).",
  mistake:["Quiero que voy.","Quiero ir. / Quiero que vayas.","Cùng chủ ngữ dùng nguyên mẫu. Chủ ngữ khác nhau mới dùng que + subjuntivo."],
  table:[{head:["Cùng chủ ngữ","Chủ ngữ khác"],rows:[["querer","Quiero comer.","Quiero que comas."],["esperar","Espero llegar.","Espero que llegues."],["preferir","Prefiero salir.","Prefiero que salgas."]]}]},

 {id:"es-sub-duda",num:"04",en:"Emoción, duda y conjunciones",vi:"Cảm xúc, nghi ngờ và liên từ",short:"me alegro de que · dudo que · no creo que · para que",
  core:"Subjuntivo cũng dùng sau <strong>cảm xúc</strong> (me alegro de que), <strong>nghi ngờ / phủ nhận</strong> (dudo que, no creo que), <strong>đánh giá</strong> (es importante que) và một số <strong>liên từ</strong> (para que, antes de que, cuando + tương lai). Chắc chắn (creo que, es verdad que) dùng <strong>indicativo</strong>.",
  forms:[["Cảm xúc","me alegro de que, es una pena que, me gusta que","<mark>Me alegro de que</mark> estés aquí."],["Nghi ngờ","dudo que, no creo que, no pienso que","<mark>Dudo que</mark> venga. <mark>No creo que</mark> sea verdad."],["Có thể","es posible que, quizás, tal vez","<mark>Es posible que</mark> llueva. <mark>Quizás</mark> venga."],["Chắc chắn (indicativo)","creo que, pienso que, es verdad que","<mark>Creo que</mark> viene. <mark>Es verdad que</mark> está aquí."],["Liên từ","para que, antes de que, sin que","Te lo explico <mark>para que</mark> lo entiendas."],["cuando + tương lai","cuando + subjuntivo","<mark>Cuando</mark> llegues, llámame."]],
  uses:[["Phản ứng cảm xúc","<mark>Es una pena que</mark> no puedas venir."],["Nghi ngờ lịch sự","<mark>No creo que</mark> tenga tiempo hoy."],["Mục đích và thời gian","Trabajo <mark>para que</mark> mis hijos estudien. <mark>Antes de que</mark> te vayas, dime."]],
  signals:["me alegro de que","es una pena que","dudo que","no creo que","quizás","para que","antes de que","cuando + tương lai"],
  speak:4,write:5,
  reg:"“Creo que + indicativo” nhưng “no creo que + subjuntivo”: Creo que viene (chắc chắn), No creo que venga (nghi ngờ).",
  mistake:["No creo que viene.","No creo que venga.","Phủ định niềm tin (no creo que) cần subjuntivo."],
  table:[{head:["Indicativo (chắc chắn)","Subjuntivo (không chắc / cảm xúc)"],rows:[["creer","Creo que viene.","No creo que venga."],["pensar","Pienso que es verdad.","No pienso que sea verdad."],["ser verdad","Es verdad que llueve.","No es verdad que llueva."],["cuando","Cuando llegué, comí.","Cuando llegues, llámame."]]}]},
];

registerRows("subjuntivo", T);
GRAMMAR.theory.subjuntivo = { rows: T, first: "es-sub-formas" };
})();
