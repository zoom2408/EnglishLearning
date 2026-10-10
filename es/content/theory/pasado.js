/* es/content/theory/pasado.js
   Pasado: pretérito indefinido (regular, irregular), imperfecto y su
   contraste. Uses the "table" diagram mode. */
(() => {
const H = ["yo","tú","él / ella","nosotros","vosotros","ellos"];
const T = [
 {id:"es-pas-indef-reg",num:"01",en:"Indefinido regular",vi:"Quá khứ đơn: động từ có quy tắc",short:"hablé · hablaste · habló · hablamos · hablasteis · hablaron",
  core:"<strong>Pretérito indefinido</strong> nói về hành động <strong>đã xảy ra và kết thúc</strong> tại một thời điểm xác định trong quá khứ. Động từ <strong>-ar</strong> dùng đuôi riêng. Động từ <strong>-er</strong> và <strong>-ir</strong> dùng chung một bộ đuôi.",
  forms:[["-ar","-é, -aste, -ó, -amos, -asteis, -aron","Ayer <mark>hablé</mark> con Ana."],["-er / -ir","-í, -iste, -ió, -imos, -isteis, -ieron","Anoche <mark>comí</mark> pizza. <mark>Viví</mark> en Lima."],["yo","dấu nhấn ở cuối: é / í","<mark>Trabajé</mark> mucho. <mark>Escribí</mark> un correo."],["él / ella","dấu nhấn ở cuối: ó / ió","Ella <mark>llamó</mark>. Él <mark>salió</mark>."],["nosotros -ar","giống hệt thì hiện tại","<mark>Hablamos</mark> ayer. (cần ngữ cảnh để phân biệt)"],["-car, -gar, -zar (yo)","c → qu, g → gu, z → c","<mark>busqué</mark>, <mark>llegué</mark>, <mark>empecé</mark>"]],
  uses:[["Hành động đã xong, có thời điểm rõ ràng","Ayer <mark>compré</mark> un libro."],["Chuỗi hành động nối tiếp","<mark>Entré</mark>, <mark>saludé</mark> y <mark>me senté</mark>."],["Hành động có thời hạn","<mark>Viví</mark> dos años en Chile."]],
  signals:["ayer","anoche","el año pasado","hace dos días","en 2020","una vez","de repente"],
  speak:5,write:5,
  reg:"Nosotros của động từ -ar và -ir giống y hệt thì hiện tại (hablamos, vivimos). Chỉ nhờ trạng từ như ayer, el año pasado mới biết là quá khứ.",
  mistake:["Ayer yo habló con Ana.","Ayer yo hablé con Ana.","Ngôi yo của -ar dùng đuôi -é. Đuôi -ó là của él / ella."],
  table:[{head:H,rows:[["hablar","hablé","hablaste","habló","hablamos","hablasteis","hablaron"],["comer","comí","comiste","comió","comimos","comisteis","comieron"],["vivir","viví","viviste","vivió","vivimos","vivisteis","vivieron"]]}]},

 {id:"es-pas-indef-irr",num:"02",en:"Indefinido irregular",vi:"Quá khứ đơn: động từ bất quy tắc",short:"fui · hice · tuve · estuve · dije · vine · puse · di · vi",
  core:"Nhiều động từ thông dụng bất quy tắc ở <strong>indefinido</strong>: đổi gốc và dùng đuôi riêng <strong>-e, -iste, -o, -imos, -isteis, -ieron</strong> <strong>không có dấu</strong>. <strong>Ser</strong> và <strong>ir</strong> có chung một dạng: <strong>fui, fuiste, fue…</strong>.",
  forms:[["ser / ir","fui, fuiste, fue, fuimos, fuisteis, fueron","<mark>Fui</mark> a Madrid. Ella <mark>fue</mark> médica."],["hacer","hice, hiciste, hizo, hicimos, hicisteis, hicieron","Ayer <mark>hice</mark> la cena. Él <mark>hizo</mark> la tarea."],["tener / estar / poder","tuve / estuve / pude (gốc tuv-, estuv-, pud-)","<mark>Tuve</mark> un examen. <mark>Estuve</mark> en casa."],["decir / traer","dije, dijiste, dijo, dijimos, dijisteis, dijeron","<mark>Dijeron</mark> la verdad. (ellos không có i)"],["venir / poner / querer / saber","vine / puse / quise / supe","<mark>Vine</mark> ayer. <mark>Supe</mark> la noticia."],["dar / ver","di, diste, dio, dimos… / vi, viste, vio, vimos…","<mark>Di</mark> un regalo. <mark>Vi</mark> una película."]],
  uses:[["Đi du lịch, kể chuyện chuyến đi","<mark>Fuimos</mark> a la playa y <mark>vimos</mark> el mar."],["Nói việc đã làm hôm qua","Ayer <mark>tuve</mark> clase y <mark>hice</mark> la compra."]],
  signals:["ayer","anoche","el lunes pasado","hace una semana","en 2019"],
  speak:5,write:5,
  reg:"Ser và ir giống nhau ở indefinido (fui). Ngữ cảnh cho biết nghĩa: Fui profesor (là) và Fui a Madrid (đi).",
  mistake:["Ayer yo hací la cena.","Ayer yo hice la cena.","Hacer là động từ bất quy tắc: gốc hic-, ngôi yo là hice."],
  table:[{head:H,rows:[["ser / ir","fui","fuiste","fue","fuimos","fuisteis","fueron"],["hacer","hice","hiciste","hizo","hicimos","hicisteis","hicieron"],["tener","tuve","tuviste","tuvo","tuvimos","tuvisteis","tuvieron"],["decir","dije","dijiste","dijo","dijimos","dijisteis","dijeron"],["dar","di","diste","dio","dimos","disteis","dieron"]]}]},

 {id:"es-pas-imperf",num:"03",en:"Imperfecto",vi:"Quá khứ tiếp diễn và thói quen",short:"hablaba · comía · era · iba · veía",
  core:"<strong>Pretérito imperfecto</strong> mô tả <strong>bối cảnh, thói quen và hành động đang diễn ra</strong> trong quá khứ, không nói điểm kết thúc. Rất đều: chỉ <strong>3 động từ bất quy tắc</strong> (<strong>ser, ir, ver</strong>).",
  forms:[["-ar","-aba, -abas, -aba, -ábamos, -abais, -aban","<mark>Hablaba</mark> con mi madre."],["-er / -ir","-ía, -ías, -ía, -íamos, -íais, -ían","<mark>Comía</mark> en casa. <mark>Vivíamos</mark> en Lima."],["ser","era, eras, era, éramos, erais, eran","<mark>Era</mark> alta. <mark>Éramos</mark> amigos."],["ir","iba, ibas, iba, íbamos, ibais, iban","<mark>Iba</mark> a la escuela a pie."],["ver","veía, veías, veía, veíamos, veíais, veían","<mark>Veía</mark> la tele."]],
  uses:[["Thói quen trong quá khứ","De niño, <mark>jugaba</mark> al fútbol todos los días."],["Mô tả người, vật, nơi chốn","La casa <mark>era</mark> grande y <mark>tenía</mark> un jardín."],["Tuổi và giờ giấc trong quá khứ","<mark>Tenía</mark> diez años. <mark>Eran</mark> las tres."],["Hành động đang diễn ra (bối cảnh)","<mark>Llovía</mark> y yo <mark>leía</mark> un libro."]],
  signals:["de niño","siempre","todos los días","a menudo","mientras","entonces","cuando era pequeño"],
  speak:5,write:5,
  reg:"Imperfecto của -ar và -er/-ir chỉ có 3 ngôi đặc biệt (ser, ir, ver). Còn lại hoàn toàn có quy tắc.",
  mistake:["De niño jugué al fútbol todos los días.","De niño jugaba al fútbol todos los días.","Thói quen lặp lại trong quá khứ dùng imperfecto, không dùng indefinido."],
  table:[{head:H,rows:[["hablar","hablaba","hablabas","hablaba","hablábamos","hablabais","hablaban"],["comer","comía","comías","comía","comíamos","comíais","comían"],["ser","era","eras","era","éramos","erais","eran"],["ir","iba","ibas","iba","íbamos","ibais","iban"],["ver","veía","veías","veía","veíamos","veíais","veían"]]}]},

 {id:"es-pas-contraste",num:"04",en:"Indefinido vs imperfecto",vi:"Chọn indefinido hay imperfecto",short:"hành động xong (indefinido) · bối cảnh, thói quen (imperfecto)",
  core:"<strong>Indefinido</strong> kể <strong>sự kiện</strong> (cái gì đã xảy ra), <strong>imperfecto</strong> kể <strong>bối cảnh</strong> (lúc đó thế nào). Khi một hành động <strong>ngắn xen vào</strong> hành động <strong>dài đang diễn ra</strong>: dài = imperfecto, ngắn = indefinido.",
  forms:[["Sự kiện, hành động xong","indefinido","Ayer <mark>compré</mark> un coche."],["Thói quen","imperfecto","Antes <mark>compraba</mark> en el mercado."],["Bối cảnh, mô tả","imperfecto","<mark>Hacía</mark> frío y <mark>nevaba</mark>."],["Hành động ngắn xen vào","imperfecto + cuando + indefinido","<mark>Dormía</mark> cuando <mark>sonó</mark> el teléfono."],["Hai hành động song song","mientras + imperfecto + imperfecto","<mark>Cocinaba</mark> mientras él <mark>leía</mark>."],["Chuỗi sự kiện","indefinido + indefinido","<mark>Llegué</mark>, <mark>abrí</mark> la puerta y <mark>entré</mark>."]],
  uses:[["Kể chuyện: nền (imperfecto) và cốt truyện (indefinido)","<mark>Era</mark> de noche y <mark>llovía</mark>. De repente, <mark>oí</mark> un ruido."],["Nói về thời thơ ấu và một sự kiện","Cuando <mark>era</mark> niño, <mark>viví</mark> un año en Perú."]],
  signals:["ayer · anoche · de repente","siempre · de niño · mientras","cuando + hành động ngắn","era + tính từ"],
  speak:5,write:5,
  reg:"Mẹo: tự hỏi “Câu này trả lời ‘cái gì đã xảy ra?’ (indefinido) hay ‘lúc đó thế nào?’ (imperfecto)?”.",
  mistake:["Mientras yo leí, él cocinó.","Mientras yo leía, él cocinaba.","Hai hành động xảy ra cùng lúc, kéo dài: dùng imperfecto."],
  table:[{head:["Indefinido","Imperfecto"],rows:[["Dùng cho","Sự kiện đã xong","Bối cảnh, thói quen"],["Trạng từ","ayer, anoche, de repente","siempre, de niño, mientras"],["Ví dụ","Compré un libro.","Compraba libros."]]}]},
];

registerRows("pasado", T);
GRAMMAR.theory.pasado = { rows: T, first: "es-pas-indef-reg" };
})();
