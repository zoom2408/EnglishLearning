/* es/content/theory/presente.js
   Presente de indicativo: regulares -ar/-er/-ir, cambios vocálicos,
   irregulares en yo y muy irregulares. Uses the "table" diagram mode. */
(() => {
const H = ["yo","tú","él / ella","nosotros","vosotros","ellos"];
const T = [
 {id:"es-pres-ar",num:"01",en:"Verbos en -ar",vi:"Động từ đuôi -ar",short:"hablar → hablo · hablas · habla · hablamos · habláis · hablan",
  core:"Bỏ <strong>-ar</strong> ở nguyên mẫu để lấy gốc động từ, rồi thêm đuôi theo ngôi: <strong>-o, -as, -a, -amos, -áis, -an</strong>. Đây là nhóm động từ phổ biến nhất trong tiếng Tây Ban Nha.",
  forms:[["yo","gốc + -o","<mark>hablo</mark> español."],["tú","gốc + -as","¿<mark>Hablas</mark> inglés?"],["él / ella / usted","gốc + -a","Ella <mark>habla</mark> mucho."],["nosotros","gốc + -amos","<mark>Hablamos</mark> por teléfono."],["vosotros","gốc + -áis","¿<mark>Habláis</mark> francés?"],["ellos / ustedes","gốc + -an","Ellos <mark>hablan</mark> rápido."]],
  uses:[["Thói quen và việc lặp lại","<mark>Trabajo</mark> todos los días."],["Việc đang diễn ra hoặc sự thật chung","<mark>Estudio</mark> ahora. El sol <mark>brilla</mark>."],["Tương lai gần khi có từ chỉ thời gian","Mañana <mark>viajo</mark> a Madrid."]],
  signals:["siempre","todos los días","normalmente","ahora","hoy","mañana (tương lai gần)"],
  speak:5,write:5,
  reg:"Tiếng Tây Ban Nha thường bỏ đại từ chủ ngữ vì đuôi động từ đã cho biết ngôi: nói “Hablo español”, không cần “Yo hablo”.",
  mistake:["Yo hablas español.","Yo hablo español.","Đuôi động từ phải khớp với chủ ngữ: yo → -o, tú → -as."],
  table:[{head:H,rows:[["hablar","hablo","hablas","habla","hablamos","habláis","hablan"],["trabajar","trabajo","trabajas","trabaja","trabajamos","trabajáis","trabajan"],["estudiar","estudio","estudias","estudia","estudiamos","estudiáis","estudian"]]}]},

 {id:"es-pres-erir",num:"02",en:"Verbos en -er / -ir",vi:"Động từ đuôi -er và -ir",short:"comer: como, comes… · vivir: vivo, vives…",
  core:"Động từ <strong>-er</strong> và <strong>-ir</strong> chia gần giống nhau: chỉ khác ở ngôi <strong>nosotros</strong> (-emos / -imos) và <strong>vosotros</strong> (-éis / -ís). Các ngôi còn lại cùng đuôi: <strong>-o, -es, -e, -en</strong>.",
  forms:[["yo","gốc + -o","<mark>como</mark> arroz. / <mark>vivo</mark> en Hanói."],["tú","gốc + -es","¿<mark>Comes</mark> carne? / ¿<mark>Vives</mark> solo?"],["él / ella / usted","gốc + -e","Ella <mark>come</mark> poco. / <mark>Vive</mark> aquí."],["nosotros","-emos (er) / -imos (ir)","<mark>Comemos</mark> juntos. / <mark>Vivimos</mark> cerca."],["vosotros","-éis (er) / -ís (ir)","¿<mark>Coméis</mark> aquí? / ¿<mark>Vivís</mark> allí?"],["ellos / ustedes","gốc + -en","<mark>Comen</mark> a las dos. / <mark>Viven</mark> en Madrid."]],
  uses:[["Thói quen hằng ngày","<mark>Bebo</mark> café por la mañana."],["Nơi ở và công việc","<mark>Vivo</mark> en Sevilla. <mark>Escribo</mark> informes."],["Sự thật chung","Los gatos <mark>comen</mark> pescado."]],
  signals:["todos los días","siempre","a menudo","nunca","cada día"],
  speak:5,write:5,
  reg:"Nhớ nhanh: -er và -ir chỉ khác nhau ở nosotros và vosotros. Ngôi tú, él, ellos hoàn toàn giống nhau.",
  mistake:["Nosotros comamos pizza.","Nosotros comemos pizza.","“-amos” chỉ dành cho -ar. Động từ -er dùng -emos, động từ -ir dùng -imos."],
  table:[{head:H,rows:[["comer","como","comes","come","comemos","coméis","comen"],["beber","bebo","bebes","bebe","bebemos","bebéis","beben"],["vivir","vivo","vives","vive","vivimos","vivís","viven"],["escribir","escribo","escribes","escribe","escribimos","escribís","escriben"]]}]},

 {id:"es-pres-cambio",num:"03",en:"Cambios vocálicos",vi:"Động từ đổi nguyên âm",short:"e→ie · o→ue · e→i (trừ nosotros, vosotros)",
  core:"Một số động từ đổi nguyên âm trong gốc khi nguyên âm đó <strong>được nhấn</strong>. Quy tắc “chiếc ủng”: đổi ở <strong>yo, tú, él, ellos</strong>, giữ nguyên ở <strong>nosotros, vosotros</strong>. Có 3 kiểu: <strong>e→ie, o→ue, e→i</strong>.",
  forms:[["e → ie","querer, pensar, empezar, preferir, cerrar, entender","<mark>quiero</mark>, <mark>piensas</mark>, <mark>empieza</mark>"],["o → ue","poder, dormir, volver, encontrar, costar, contar","<mark>puedo</mark>, <mark>duermes</mark>, <mark>vuelve</mark>"],["e → i","pedir, servir, repetir, seguir","<mark>pido</mark>, <mark>sirves</mark>, <mark>repite</mark>"],["u → ue","jugar (chỉ riêng động từ này)","<mark>juego</mark>, <mark>juegas</mark>"],["Nosotros / vosotros","không đổi nguyên âm","<mark>queremos</mark>, <mark>podéis</mark>"]],
  uses:[["Muốn, có thể, thích hơn (động từ + động từ nguyên mẫu)","<mark>Quiero</mark> viajar. <mark>Puedo</mark> ayudarte. <mark>Prefiero</mark> té."],["Hỏi và gọi món","<mark>Pido</mark> una paella. ¿Cuánto <mark>cuesta</mark>?"],["Giờ giấc và sở thích","<mark>Empiezo</mark> a las nueve. <mark>Juego</mark> al fútbol."]],
  signals:["querer + inf.","poder + inf.","preferir","dormir","pedir","jugar"],
  speak:5,write:5,
  reg:"Khi tra từ điển, động từ đổi nguyên âm ghi kèm (ie), (ue) hoặc (i). Đừng quên áp dụng cho cả “yo”.",
  mistake:["Yo quero un café.","Yo quiero un café.","Querer đổi e → ie ở ngôi yo: quiero, không phải quero."],
  table:[{head:H,rows:[["querer (e→ie)","quiero","quieres","quiere","queremos","queréis","quieren"],["poder (o→ue)","puedo","puedes","puede","podemos","podéis","pueden"],["pedir (e→i)","pido","pides","pide","pedimos","pedís","piden"],["jugar (u→ue)","juego","juegas","juega","jugamos","jugáis","juegan"]]}]},

 {id:"es-pres-yo",num:"04",en:"Irregulares",vi:"Bất quy tắc ở yo và rất bất quy tắc",short:"hago, pongo, salgo, sé, voy, soy, digo, vengo…",
  core:"Nhiều động từ thông dụng chỉ bất quy tắc ở <strong>ngôi yo</strong> (hacer → hago), các ngôi khác chia đều. Một số ít động từ bất quy tắc ở nhiều ngôi: <strong>ir, decir, venir, oír</strong>. Cần học thuộc.",
  forms:[["yo + -go","hacer → hago, poner → pongo, salir → salgo, traer → traigo, tener → tengo","<mark>Hago</mark> la cena. <mark>Salgo</mark> a las ocho."],["yo + -zco","conocer → conozco, traducir → traduzco","<mark>Conozco</mark> a tu hermano."],["yo ngắn","saber → sé, dar → doy, ver → veo, estar → estoy, ser → soy","<mark>Sé</mark> la respuesta. <mark>Veo</mark> la tele."],["ir","voy, vas, va, vamos, vais, van","<mark>Voy</mark> al trabajo."],["decir","digo, dices, dice, decimos, decís, dicen","¿Qué <mark>dices</mark>?"],["venir","vengo, vienes, viene, venimos, venís, vienen","<mark>Vengo</mark> de la escuela."]],
  uses:[["Hành động hằng ngày","<mark>Hago</mark> deporte. <mark>Salgo</mark> a las siete. <mark>Pongo</mark> la mesa."],["Hiểu biết và quen biết","<mark>Sé</mark> nadar. <mark>Conozco</mark> Madrid. (saber = biết làm, conocer = quen biết)"],["Di chuyển","<mark>Voy</mark> a casa. <mark>Vengo</mark> de la oficina."]],
  signals:["hacer","poner","salir","saber","conocer","ir","decir","venir"],
  speak:5,write:5,
  reg:"Saber dùng cho kiến thức và kỹ năng, conocer dùng cho người, nơi chốn. Cả hai đều dịch là “biết” trong tiếng Việt.",
  mistake:["Yo hacó la cena.","Yo hago la cena.","Hacer bất quy tắc ở ngôi yo: hago, không phải hacó."],
  table:[{head:H,rows:[["hacer","hago","haces","hace","hacemos","hacéis","hacen"],["salir","salgo","sales","sale","salimos","salís","salen"],["ir","voy","vas","va","vamos","vais","van"],["decir","digo","dices","dice","decimos","decís","dicen"],["venir","vengo","vienes","viene","venimos","venís","vienen"]]}]},
];

registerRows("presente", T);
GRAMMAR.theory.presente = { rows: T, first: "es-pres-ar" };
})();
