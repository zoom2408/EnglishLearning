/* es/content/theory/perfecto.js
   Participio, pretérito perfecto, pluscuamperfecto y contraste.
   Uses the "table" diagram mode. */
(() => {
const H = ["yo","tú","él / ella","nosotros","vosotros","ellos"];
const T = [
 {id:"es-perf-participio",num:"01",en:"El participio",vi:"Phân từ quá khứ",short:"-ar → -ado · -er / -ir → -ido · hecho · dicho · escrito",
  core:"Phân từ quá khứ là nền tảng của mọi thì hoàn thành. Có quy tắc: <strong>-ar → -ado</strong>, <strong>-er / -ir → -ido</strong>. Có <strong>một số bất quy tắc</strong> cần học thuộc: <strong>hecho, dicho, escrito, visto, puesto, abierto, vuelto, roto</strong>.",
  forms:[["-ar","gốc + -ado","hablar → <mark>hablado</mark>, trabajar → <mark>trabajado</mark>"],["-er / -ir","gốc + -ido","comer → <mark>comido</mark>, vivir → <mark>vivido</mark>"],["hacer · decir","hecho · dicho","<mark>hecho</mark>, <mark>dicho</mark>"],["escribir · ver · poner","escrito · visto · puesto","<mark>escrito</mark>, <mark>visto</mark>, <mark>puesto</mark>"],["abrir · volver · romper","abierto · vuelto · roto","<mark>abierto</mark>, <mark>vuelto</mark>, <mark>roto</mark>"],["Gốc kết thúc bằng nguyên âm","thêm dấu ở -ído","leer → <mark>leído</mark>, oír → <mark>oído</mark>, traer → <mark>traído</mark>"]],
  uses:[["Dùng trong thì hoàn thành","He <mark>hablado</mark>. Había <mark>escrito</mark>."],["Dùng như tính từ (khớp giống số)","La puerta está <mark>abierta</mark>. Los libros están <mark>escritos</mark>."]],
  signals:["-ado","-ido","hecho","dicho","escrito","visto"],
  speak:4,write:5,
  reg:"Khi phân từ đóng vai trò tính từ (estar + participio) nó phải khớp giống và số: la ventana está cerrada.",
  mistake:["He hacido la tarea.","He hecho la tarea.","Hacer có phân từ bất quy tắc là hecho."],
  table:[{head:["Phân từ"],rows:[["hablar","hablado"],["comer","comido"],["vivir","vivido"],["hacer","hecho"],["decir","dicho"],["escribir","escrito"],["ver","visto"],["abrir","abierto"]]}]},

 {id:"es-perf-presente",num:"02",en:"Pretérito perfecto",vi:"Hiện tại hoàn thành",short:"he · has · ha · hemos · habéis · han + participio",
  core:"<strong>Pretérito perfecto</strong> = <strong>haber (chia ở hiện tại) + phân từ</strong>. Dùng cho việc đã xảy ra <strong>trong khoảng thời gian chưa kết thúc</strong> (hôm nay, tuần này, năm nay) hoặc <strong>kinh nghiệm</strong> cho đến bây giờ. Phân từ <strong>không đổi</strong> theo giống và số.",
  forms:[["yo","he + participio","<mark>He comido</mark> ya."],["tú","has + participio","¿<mark>Has visto</mark> esa película?"],["él / ella / usted","ha + participio","Ella <mark>ha llegado</mark> tarde."],["nosotros","hemos + participio","<mark>Hemos hablado</mark> hoy."],["vosotros","habéis + participio","¿<mark>Habéis terminado</mark>?"],["ellos / ustedes","han + participio","<mark>Han salido</mark> de casa."]],
  uses:[["Việc trong khoảng thời gian chưa kết thúc","Hoy <mark>he trabajado</mark> mucho. Esta semana <mark>hemos viajado</mark>."],["Kinh nghiệm","¿Alguna vez <mark>has estado</mark> en Madrid? Nunca <mark>he comido</mark> paella."],["Việc vừa xảy ra","Ya <mark>he terminado</mark>. Todavía no <mark>ha llegado</mark>."]],
  signals:["hoy","esta mañana","esta semana","este año","ya","todavía no","nunca","alguna vez","últimamente"],
  speak:5,write:5,
  reg:"Giữa haber và phân từ không chèn gì khác. Đại từ và phủ định đứng trước haber: No lo he visto.",
  mistake:["He comida.","He comido.","Phân từ trong thì hoàn thành luôn dạng -o, không đổi giống số."],
  table:[{head:H,rows:[["hablar","he hablado","has hablado","ha hablado","hemos hablado","habéis hablado","han hablado"],["comer","he comido","has comido","ha comido","hemos comido","habéis comido","han comido"],["hacer","he hecho","has hecho","ha hecho","hemos hecho","habéis hecho","han hecho"]]}]},

 {id:"es-perf-pluscuamperfecto",num:"03",en:"Pluscuamperfecto",vi:"Quá khứ hoàn thành",short:"había · habías · había · habíamos · habíais · habían + participio",
  core:"<strong>Pluscuamperfecto</strong> = <strong>haber (chia ở imperfecto) + phân từ</strong>. Diễn tả hành động <strong>đã xảy ra trước một hành động quá khứ khác</strong> (hoặc trước một mốc thời gian trong quá khứ).",
  forms:[["yo","había + participio","<mark>Había comido</mark> antes de salir."],["tú","habías + participio","¿<mark>Habías visto</mark> esa película?"],["él / ella / usted","había + participio","Ella ya <mark>había salido</mark>."],["nosotros","habíamos + participio","<mark>Habíamos terminado</mark> a las tres."],["vosotros","habíais + participio","¿<mark>Habíais hablado</mark> antes?"],["ellos / ustedes","habían + participio","Ya <mark>habían llegado</mark>."]],
  uses:[["Hành động xảy ra trước hành động quá khứ khác","Cuando llegué, ellos ya <mark>habían salido</mark>."],["Giải thích lý do trong quá khứ","Estaba cansado porque no <mark>había dormido</mark>."]],
  signals:["ya","todavía no","antes de + inf.","cuando llegué","para entonces"],
  speak:4,write:5,
  reg:"Dùng cặp “indefinido + pluscuamperfecto” để kể sự việc: Llegué a las ocho, pero ya habían empezado la clase.",
  mistake:["Cuando llegué, ellos ya salieron.","Cuando llegué, ellos ya habían salido.","Việc xảy ra trước một mốc quá khứ cần pluscuamperfecto."],
  table:[{head:H,rows:[["hablar","había hablado","habías hablado","había hablado","habíamos hablado","habíais hablado","habían hablado"],["ver","había visto","habías visto","había visto","habíamos visto","habíais visto","habían visto"]]}]},

 {id:"es-perf-contraste",num:"04",en:"Perfecto vs indefinido",vi:"Phân biệt perfecto và indefinido",short:"hoy, esta semana → perfecto · ayer, el año pasado → indefinido",
  core:"Chọn theo <strong>khoảng thời gian</strong>. Thời gian <strong>chưa kết thúc</strong> (hoy, esta mañana, este año) dùng <strong>perfecto</strong>. Thời gian <strong>đã kết thúc</strong> (ayer, la semana pasada, en 2019) dùng <strong>indefinido</strong>. Nhiều vùng Mỹ Latinh dùng indefinido thay perfecto ngay cả với “hoy”.",
  forms:[["Chưa kết thúc","pretérito perfecto","<mark>Hoy he comido</mark> en casa."],["Đã kết thúc","pretérito indefinido","<mark>Ayer comí</mark> en un restaurante."],["Kinh nghiệm (chưa nói lúc nào)","perfecto","<mark>He estado</mark> en Roma."],["Một thời điểm cụ thể","indefinido","<mark>Estuve</mark> en Roma en 2019."],["ya / todavía no","perfecto","Ya <mark>he terminado</mark>."],["en + năm / hace + thời gian","indefinido","<mark>Hace dos años</mark> viajé a Perú."]],
  uses:[["Nói về hôm nay và tuần này","Esta semana <mark>he tenido</mark> mucho trabajo."],["Kể chuyện đã qua","El año pasado <mark>tuve</mark> un accidente."]],
  signals:["hoy · esta mañana · este año","ya · todavía no · nunca","ayer · el año pasado","hace + thời gian","en + năm"],
  speak:5,write:5,
  reg:"Ở Tây Ban Nha, perfecto thường dùng cho cả “hôm nay”. Ở Mỹ Latinh, indefinido phổ biến hơn. Cả hai đều được chấp nhận, nên chọn một cách và nhất quán.",
  mistake:["Ayer he comido paella.","Ayer comí paella.","“Ayer” là thời gian đã kết thúc nên dùng indefinido."],
  table:[{head:["Perfecto","Indefinido"],rows:[["Thời gian","hoy, esta semana, este año","ayer, el año pasado, en 2019"],["Ví dụ","Hoy he trabajado.","Ayer trabajé."],["Kinh nghiệm","Nunca he comido paella.","El lunes comí paella."]]}]},
];

registerRows("perfecto", T);
GRAMMAR.theory.perfecto = { rows: T, first: "es-perf-participio" };
})();
