/* es/content/theory/tiempos.js
   7 Tiempos (Spanish indicative tenses). Loaded on every Spanish page.
   tl = marks on the timeline (x from 20 to 700, NOW at 360).
   timeline:true keeps rowHTML in "timeline" rendering mode (see
   core/rows.js), the same mode used by the English tenses module.
   Merges the former presente / pasado / perfecto / futuro modules. */
const TN={ps:"es-t-presente",ind:"es-t-indefinido",imp:"es-t-imperfecto",pf:"es-t-perfecto",pqp:"es-t-pluscuamperfecto",fut:"es-t-futuro",cond:"es-t-condicional"};
const CODES=Object.keys(TN);
(() => {
const T = [
 {id:"es-t-presente",g:"present",a:0,en:"Presente",vi:"Hiện tại",short:"-ar: o, as, a, amos, áis, an · -er/-ir: o, es, e…",
  core:"Diễn tả <strong>thói quen, sự thật, việc đang diễn ra</strong> và cả <strong>tương lai gần</strong> khi có trạng từ thời gian. Có 3 nhóm đuôi (-ar, -er, -ir). Nhiều động từ thông dụng <strong>đổi nguyên âm</strong> (querer → quiero) hoặc <strong>bất quy tắc ở ngôi yo</strong> (hago, voy). Có thể bỏ đại từ chủ ngữ vì đuôi đã cho biết ngôi.",
  forms:[["+","-ar: -o, -as, -a, -amos, -áis, -an","<mark>Hablo</mark> español. <mark>Trabajamos</mark> aquí."],["+","-er / -ir: -o, -es, -e, -emos / -imos, -éis / -ís, -en","<mark>Como</mark> arroz. <mark>Vivimos</mark> en Lima."],["★","đổi nguyên âm (e→ie, o→ue, e→i, trừ nosotros / vosotros) · yo: hago, pongo, salgo, sé, conozco, voy, doy, veo","<mark>Quiero</mark> café. <mark>Puedo</mark> ir. <mark>Hago</mark> la cena. <mark>Voy</mark> a casa."],["−","no + động từ","<mark>No hablo</mark> francés."],["?","¿ + động từ + chủ ngữ?","¿<mark>Hablas</mark> español?"]],
  uses:[["Thói quen, việc lặp lại","<mark>Bebo</mark> café todas las mañanas."],["Sự thật hiển nhiên","El sol <mark>sale</mark> por el este."],["Việc đang diễn ra","Ahora <mark>estudio</mark> español. (hoặc <mark>estoy estudiando</mark>)"],["Tương lai gần có trạng từ thời gian","Mañana <mark>viajo</mark> a Madrid."]],
  signals:["todos los días","siempre","normalmente","ahora","cada semana","mañana (ý tương lai)"],
  speak:5,write:5,
  reg:"Thì dùng nhiều nhất. Đại từ chủ ngữ thường bỏ: nói “Hablo español”, không cần “Yo hablo”.",
  mistake:["Yo hablas español.","Yo hablo español.","Đuôi động từ phải khớp với chủ ngữ: yo → -o, tú → -as."],
  timeline:true,
  tl:[{t:"dots",xs:[70,140,210,280,360,440,510,580,650]},{t:"label",x:360,y:130,s:"todos los días / ahora"}]},

 {id:"es-t-indefinido",g:"past",a:0,en:"Pretérito indefinido",vi:"Quá khứ đơn",short:"-ar: é, aste, ó… · -er/-ir: í, iste, ió…",
  core:"Hành động <strong>đã xảy ra và kết thúc</strong> tại một thời điểm xác định trong quá khứ. Dùng để <strong>kể sự kiện</strong> (cái gì đã xảy ra). Nhiều động từ thông dụng bất quy tắc: <strong>ser / ir → fui</strong>, <strong>hacer → hice</strong>, <strong>tener → tuve</strong>.",
  forms:[["+","-ar: -é, -aste, -ó, -amos, -asteis, -aron","Ayer <mark>hablé</mark> con Ana."],["+","-er / -ir: -í, -iste, -ió, -imos, -isteis, -ieron","Anoche <mark>comí</mark> pizza. <mark>Viví</mark> en Lima."],["★","fui (ser/ir), hice, tuve, estuve, dije (dijeron), vine, puse, di, vi · yo: busqué, llegué, empecé","<mark>Fui</mark> al cine. <mark>Tuve</mark> un examen. <mark>Llegué</mark> tarde."],["−","no + động từ","<mark>No comí</mark> ayer."],["?","¿ + động từ + chủ ngữ?","¿<mark>Fuiste</mark> al cine ayer?"]],
  uses:[["Đã xong, có thời điểm rõ ràng","Ayer <mark>compré</mark> un libro."],["Chuỗi hành động nối tiếp","<mark>Entré</mark>, <mark>saludé</mark> y <mark>me senté</mark>."],["Hành động có thời hạn","<mark>Viví</mark> dos años en Chile."],["Hành động ngắn xen vào hành động đang diễn ra","<mark>Dormía</mark> cuando <mark>sonó</mark> el teléfono."]],
  signals:["ayer","anoche","el año pasado","hace dos años","en 2019","de repente","el lunes pasado"],
  speak:5,write:5,
  reg:"Nosotros của -ar giống hệt presente (hablamos). Chỉ nhờ trạng từ như ayer mới biết là quá khứ. Mẹo chọn thì: indefinido kể SỰ KIỆN, imperfecto kể BỐI CẢNH.",
  mistake:["Ayer yo habló con Ana.","Ayer yo hablé con Ana.","Ngôi yo của -ar dùng đuôi -é. Đuôi -ó là của él / ella."],
  timeline:true,
  tl:[{t:"point",x:200,s:"ayer"}]},

 {id:"es-t-imperfecto",g:"past",a:1,en:"Pretérito imperfecto",vi:"Quá khứ tiếp diễn",short:"-ar: aba, abas… · -er/-ir: ía, ías…",
  core:"Mô tả <strong>bối cảnh, thói quen và hành động đang diễn ra</strong> trong quá khứ, không nói điểm kết thúc. Rất đều: chỉ <strong>3 động từ bất quy tắc</strong> là <strong>ser, ir, ver</strong>.",
  forms:[["+","-ar: -aba, -abas, -aba, -ábamos, -abais, -aban","<mark>Hablaba</mark> con mi madre."],["+","-er / -ir: -ía, -ías, -ía, -íamos, -íais, -ían","<mark>Comía</mark> en casa. <mark>Vivíamos</mark> en Lima."],["★","ser: era, eras, era, éramos · ir: iba, ibas, iba, íbamos · ver: veía, veías…","<mark>Era</mark> alta. <mark>Iba</mark> a pie. <mark>Veía</mark> la tele."],["−","no + động từ","<mark>No comía</mark> carne de niño."],["?","¿ + động từ + chủ ngữ?","¿<mark>Vivías</mark> en Lima?"]],
  uses:[["Thói quen trong quá khứ","De niño, <mark>jugaba</mark> al fútbol todos los días."],["Mô tả người, vật, nơi chốn","La casa <mark>era</mark> grande y <mark>tenía</mark> un jardín."],["Tuổi và giờ giấc trong quá khứ","<mark>Tenía</mark> diez años. <mark>Eran</mark> las tres."],["Hai hành động song song","<mark>Cocinaba</mark> mientras él <mark>leía</mark>."]],
  signals:["de niño","siempre","todos los días","a menudo","mientras","antes","cuando era pequeño"],
  speak:5,write:5,
  reg:"Thói quen lặp lại trong quá khứ dùng imperfecto, không dùng indefinido. Khi hành động ngắn xen vào hành động dài: dài = imperfecto, ngắn = indefinido.",
  mistake:["De niño jugué al fútbol todos los días.","De niño jugaba al fútbol todos los días.","Thói quen lặp lại trong quá khứ dùng imperfecto."],
  timeline:true,
  tl:[{t:"band",x1:80,x2:300,s:"de niño"},{t:"dots",xs:[100,140,180,220,260]}]},

 {id:"es-t-pluscuamperfecto",g:"past",a:2,en:"Pluscuamperfecto",vi:"Quá khứ hoàn thành",short:"había / habías / había… + participio",
  core:"Hành động xảy ra <strong>trước một hành động hoặc mốc khác</strong> trong quá khứ (quá khứ của quá khứ). Cấu tạo: <strong>haber ở imperfecto + phân từ</strong>.",
  forms:[["+","había, habías, había, habíamos, habíais, habían + participio","Cuando llegué, ellos ya <mark>habían salido</mark>."],["★","participio: -ado / -ido · bất quy tắc: hecho, dicho, escrito, visto, puesto, abierto, vuelto, roto","<mark>Había hecho</mark> la tarea. <mark>Había visto</mark> la película."],["−","no + había + participio","<mark>No había dormido</mark>, por eso estaba cansado."],["?","¿ + había + chủ ngữ + participio?","¿<mark>Habías estado</mark> allí antes?"]],
  uses:[["Xảy ra trước một hành động quá khứ khác","Cuando llegué, la película ya <mark>había empezado</mark>."],["Nguyên nhân cho kết quả trong quá khứ","Estaba cansado porque <mark>había trabajado</mark> mucho."]],
  signals:["ya","antes de + inf.","cuando llegué","todavía no","para entonces"],
  speak:2,write:4,
  reg:"Dùng khi kể chuyện để làm rõ thứ tự thời gian. Thường đi cặp với indefinido: Llegué y ya habían empezado la clase.",
  mistake:["Cuando llegué, ellos ya salieron.","Cuando llegué, ellos ya habían salido.","Việc xảy ra trước một mốc quá khứ cần pluscuamperfecto."],
  timeline:true,
  tl:[{t:"point",x:120,s:"① había salido"},{t:"ref",x:260,s:"② llegué"},{t:"arrow",x1:135,x2:252}]},

 {id:"es-t-perfecto",g:"present",a:1,en:"Pretérito perfecto",vi:"Hiện tại hoàn thành",short:"he / has / ha / hemos / habéis / han + participio",
  core:"Nối <strong>quá khứ với hiện tại</strong>: việc xảy ra trong <strong>khoảng thời gian chưa kết thúc</strong> (hôm nay, tuần này, năm nay), <strong>kinh nghiệm</strong> cho đến bây giờ, hoặc việc <strong>vừa xảy ra</strong>. Phân từ <strong>không đổi</strong> theo giống và số.",
  forms:[["+","he, has, ha, hemos, habéis, han + participio","<mark>He comido</mark> ya. <mark>Hemos hablado</mark> hoy."],["★","participio: -ado (-ar) · -ido (-er/-ir) · hecho, dicho, escrito, visto, puesto, abierto, vuelto, roto","<mark>He hecho</mark> la tarea. <mark>Han escrito</mark> un libro."],["−","no + he + participio","<mark>No he visto</mark> esa película."],["?","¿ + he + chủ ngữ + participio?","¿<mark>Has estado</mark> en Madrid alguna vez?"]],
  uses:[["Khoảng thời gian chưa kết thúc","Hoy <mark>he trabajado</mark> mucho. Esta semana <mark>hemos viajado</mark>."],["Kinh nghiệm","¿Alguna vez <mark>has comido</mark> paella? Nunca <mark>he estado</mark> en Roma."],["Việc vừa xảy ra","Ya <mark>he terminado</mark>. Todavía no <mark>ha llegado</mark>."]],
  signals:["hoy","esta mañana","esta semana","este año","ya","todavía no","nunca","alguna vez","últimamente"],
  speak:5,write:5,
  reg:"Chọn theo khoảng thời gian: chưa kết thúc (hoy, este año) → perfecto, đã kết thúc (ayer, el año pasado) → indefinido. Nhiều vùng Mỹ Latinh dùng indefinido ngay cả với “hoy”.",
  mistake:["Ayer he comido paella.","Ayer comí paella.","“Ayer” là thời gian đã kết thúc nên dùng indefinido."],
  timeline:true,
  tl:[{t:"point",x:190,s:"đã xảy ra"},{t:"arrow",x1:205,x2:352},{t:"label",x:280,y:130,s:"hoy · este año · nunca"}]},

 {id:"es-t-futuro",g:"future",a:0,en:"Futuro simple",vi:"Tương lai",short:"nguyên mẫu + é, ás, á, emos, éis, án",
  core:"Hành động <strong>sẽ xảy ra</strong>: dự đoán, lời hứa, kế hoạch xa. Giữ <strong>nguyên mẫu</strong> rồi thêm đuôi (giống nhau cho cả 3 nhóm). Một số động từ đổi gốc: <strong>tendré, podré, haré, diré, saldré, vendré</strong>. Trong văn nói, <strong>ir a + nguyên mẫu</strong> rất phổ biến để nói tương lai gần.",
  forms:[["+","nguyên mẫu + -é, -ás, -á, -emos, -éis, -án","<mark>Hablaré</mark> con él. <mark>Viajarán</mark> en verano."],["★","gốc bất quy tắc: tendr-, podr-, har-, dir-, saldr-, vendr-, pondr-, sabr-, querr-, habr-","<mark>Tendré</mark> tiempo. <mark>Haré</mark> la cena. <mark>Habrá</mark> una fiesta."],["+","ir a + nguyên mẫu (tương lai gần)","<mark>Voy a estudiar</mark> esta noche."],["−","no + futuro","<mark>No iré</mark> mañana."],["?","¿ + futuro + chủ ngữ?","¿<mark>Vendrás</mark> mañana?"]],
  uses:[["Dự đoán","Mañana <mark>lloverá</mark> en el norte."],["Lời hứa, kế hoạch xa","Te <mark>llamaré</mark> mañana. El año que viene <mark>estudiaré</mark> alemán."],["Điều kiện thật","Si estudias, <mark>aprobarás</mark>."],["Phỏng đoán về hiện tại","—¿Qué hora es? —<mark>Serán</mark> las ocho."]],
  signals:["mañana","el año que viene","algún día","dentro de + thời gian","pronto","seguramente"],
  speak:4,write:5,
  reg:"Trong văn nói thường dùng “ir a + nguyên mẫu” hoặc presente thay futuro. Futuro hay gặp hơn trong văn viết, bản tin và lời hứa.",
  mistake:["Hablarémos con él.","Hablaremos con él.","Ngôi nosotros của futuro (-emos) không có dấu. Các ngôi còn lại đều có dấu."],
  timeline:true,
  tl:[{t:"point",x:540,s:"mañana"}]},

 {id:"es-t-condicional",g:"future",a:1,en:"Condicional simple",vi:"Điều kiện",short:"nguyên mẫu + ía, ías, ía, íamos, íais, ían",
  core:"Dùng để <strong>lịch sự, khuyên nhủ, giả định</strong> và nói về <strong>tương lai trong quá khứ</strong> (dijo que vendría). Cùng gốc bất quy tắc với futuro. Còn dùng để <strong>phỏng đoán về quá khứ</strong> (serían las tres).",
  forms:[["+","nguyên mẫu + -ía, -ías, -ía, -íamos, -íais, -ían","<mark>Me gustaría</mark> un café. <mark>Iría</mark> contigo."],["★","gốc giống futuro: tendría, podría, haría, diría, saldría, vendría, pondría, sabría, querría, habría","<mark>Podrías</mark> ayudarme. <mark>Haría</mark> eso por ti."],["−","no + condicional","<mark>No vendría</mark> sin ti."],["?","¿ + condicional + chủ ngữ?","¿<mark>Podría</mark> abrir la ventana?"]],
  uses:[["Lịch sự","<mark>Me gustaría</mark> un café. ¿<mark>Podría</mark> ayudarme?"],["Khuyên nhủ","Yo que tú, <mark>hablaría</mark> con él."],["Giả định","Con más dinero, <mark>viajaría</mark> por el mundo."],["Tường thuật tương lai trong quá khứ","Dijo que <mark>vendría</mark> mañana."]],
  signals:["me gustaría","¿podrías…?","yo que tú","con más dinero","dijo que + condicional"],
  speak:5,write:5,
  reg:"“Me gustaría” và “¿Podría …?” lịch sự hơn “quiero” và “¿Puede …?”. Sau “si” KHÔNG dùng condicional: Si tuviera dinero, viajaría (xem module Subjuntivo quá khứ & câu điều kiện).",
  mistake:["Si tendría dinero, viajaría.","Si tuviera dinero, viajaría.","Sau “si” không dùng condicional. Mệnh đề si dùng subjuntivo imperfecto."],
  timeline:true,
  tl:[{t:"if",x:540,s:"giả định",real:false}]},
];

const TIME_ORDER = ["past","present","future"].flatMap(g=>T.filter(t=>t.g===g).sort((a,b)=>a.a-b.a));
TIME_ORDER.forEach((t,i)=>t.num=String(i+1).padStart(2,"0"));
registerRows("tiempos", T);
GRAMMAR.theory.tiempos = { rows: TIME_ORDER, first: "es-t-presente" };
})();
