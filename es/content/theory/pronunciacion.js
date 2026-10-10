/* es/content/theory/pronunciacion.js
   Pronunciación: vowels, consonants, special letters, stress, alphabet.
   Uses the "table" diagram mode. */
(() => {
const T = [
 {id:"es-pron-alfabeto",num:"01",en:"El alfabeto",vi:"Bảng chữ cái",short:"27 chữ: a b c … ñ … z",
  core:"Bảng chữ cái tiếng Tây Ban Nha có <strong>27 chữ</strong>, giống bảng Latinh cộng thêm <strong>ñ</strong>. Chữ <strong>h</strong> luôn câm, còn <strong>k</strong> và <strong>w</strong> chỉ có trong từ mượn.",
  forms:[["Tên chữ","a (a), b (be), c (ce), d (de), e (e), f (efe), g (ge), h (hache)","<mark>h</mark> đọc là “a-chê”, nhưng trong từ thì câm"],["Tên chữ","i (i), j (jota), k (ka), l (ele), m (eme), n (ene), ñ (eñe)","<mark>ñ</mark> là một chữ riêng"],["Tên chữ","o (o), p (pe), q (cu), r (erre), s (ese), t (te), u (u)","<mark>q</mark> luôn đi với <mark>u</mark>: que, quien"],["Tên chữ","v (uve), w (uve doble), x (equis), y (ye), z (zeta)","<mark>v</mark> và <mark>b</mark> đọc giống nhau"]],
  uses:[["Đánh vần tên mình","Me llamo Nguyễn: ene, u, <mark>ge</mark>, u, <mark>i</mark>, e, ene."],["Đọc địa chỉ email","hola arroba gmail punto com"]],
  signals:["deletrear","¿Cómo se escribe?","con hache","con ñ"],
  speak:4,write:3,
  reg:"Khi bị hỏi “¿Cómo se escribe?” (viết thế nào?), bạn đánh vần từng chữ theo tên chữ cái ở trên.",
  mistake:["la hache se pronuncia “h”","la hache no se pronuncia","Chữ h trong từ luôn câm: hola đọc là “ô-la”, không phát âm /h/."],
  table:[{head:["Tên","Ví dụ"],rows:[["b / v","be / uve","**b**ien, **v**ino (cùng một âm)"],["h","hache","**h**ola (câm)"],["ñ","eñe","ma**ñ**ana"],["y","ye","**y**o"]]}]},

 {id:"es-pron-vocales",num:"02",en:"Las vocales",vi:"5 nguyên âm",short:"a e i o u: luôn ngắn, rõ, không đổi",
  core:"Tiếng Tây Ban Nha chỉ có <strong>5 nguyên âm</strong> và mỗi nguyên âm <strong>luôn đọc cùng một âm</strong>, dù đứng ở đâu hay có trọng âm hay không. Đọc dứt khoát, không kéo dài, không biến thành nguyên âm đôi như tiếng Anh.",
  forms:[["a","như “a” trong “ba”","m<mark>a</mark>m<mark>á</mark>, c<mark>a</mark>sa"],["e","như “ê” (miệng hơi mở)","m<mark>e</mark>s, <mark>e</mark>l"],["i","như “i” trong “đi”","s<mark>í</mark>, v<mark>i</mark>no"],["o","như “ô” (tròn môi)","n<mark>o</mark>, <mark>o</mark>tro"],["u","như “u” trong “tu”","t<mark>ú</mark>, <mark>u</mark>no"]],
  uses:[["Hai nguyên âm đứng cạnh nhau đọc liền (nguyên âm đôi)","b<mark>ue</mark>no, <mark>ai</mark>re, p<mark>ei</mark>ne"],["u câm sau q và trong gue/gui","<mark>qu</mark>e đọc “kê”, <mark>gu</mark>itarra đọc “ghi-ta-rra”"]],
  signals:["a, e, i, o, u","nguyên âm đôi","ue, ie, ai, ei","qu + e/i"],
  speak:5,write:2,
  reg:"Không rút gọn nguyên âm không có trọng âm thành âm lửng như tiếng Anh: “banana” đọc ba-na-na rõ từng âm.",
  mistake:["“gracias” đọc “grây-xi-ợt”","“gracias” đọc “gra-thias” (hoặc “gra-sias”)","Mỗi nguyên âm giữ nguyên âm của nó. Không kéo dài hoặc thêm âm đệm."],
  table:[{head:["Âm gần đúng","Ví dụ"],rows:[["a","a","casa"],["e","ê","mesa"],["i","i","vino"],["o","ô","loco"],["u","u","uno"]]}]},

 {id:"es-pron-consonantes",num:"03",en:"Consonantes clave",vi:"Phụ âm cần nhớ",short:"c, z, g, j, h, qu, v/b",
  core:"Phần lớn phụ âm đọc gần như tiếng Việt. Chỉ cần nhớ vài chữ đổi âm theo nguyên âm đi sau: <strong>c</strong> và <strong>g</strong> có hai cách đọc, <strong>j</strong> là âm họng, <strong>h</strong> câm, <strong>v</strong> đọc như <strong>b</strong>.",
  forms:[["c + a, o, u","đọc “k”","<mark>c</mark>asa, <mark>c</mark>omo, <mark>c</mark>uatro"],["c + e, i","đọc “th” (Tây Ban Nha) hoặc “x” (Mỹ Latinh)","<mark>c</mark>ena, <mark>c</mark>ine"],["g + a, o, u","đọc “g” cứng","<mark>g</mark>ato, <mark>g</mark>racias"],["g + e, i / j","đọc “kh” nhẹ từ họng","<mark>g</mark>ente, <mark>j</mark>amón"],["h","câm","<mark>h</mark>ola, <mark>h</mark>ombre"],["z","như c + e","<mark>z</mark>apato, <mark>z</mark>ona"],["qu","đọc “k” (u câm)","<mark>qu</mark>e, <mark>qu</mark>ién"]],
  uses:[["Giữ âm g cứng trước e/i bằng cách thêm u (câm)","<mark>gu</mark>erra, <mark>gu</mark>itarra"],["Giữ âm k trước e/i bằng qu","<mark>qu</mark>eso, <mark>qu</mark>ince"]],
  signals:["ce, ci","ge, gi","j","qu","h câm"],
  speak:5,write:4,
  reg:"Âm “th” của c/z là đặc trưng Tây Ban Nha. Mỹ Latinh đọc thành “s”. Cả hai đều đúng, chỉ cần chọn một cách và dùng nhất quán.",
  mistake:["gente đọc “gen-te” như “g” cứng","gente đọc “khen-te” (âm họng)","g trước e/i đọc âm họng, giống j. Muốn âm g cứng phải viết gue/gui."],
  table:[{head:["Trước a/o/u","Trước e/i"],rows:[["c","k: casa","th/s: cena"],["g","g: gato","kh: gente"],["z","th/s: zapato","— (hiếm gặp)"],["qu","—","k: queso"]]}]},

 {id:"es-pron-especiales",num:"04",en:"Letras especiales",vi:"ll, ñ, rr, ch, y",short:"ll = y, ñ = nh, rr rung, ch = ch",
  core:"Năm chữ khiến người Việt hay đọc sai: <strong>ll</strong>, <strong>ñ</strong> (giống “nh”), <strong>rr</strong> (rung lưỡi), <strong>ch</strong> và <strong>y</strong>.",
  forms:[["ñ","như “nh” trong “nhà”","ma<mark>ñ</mark>ana, espa<mark>ñ</mark>ol"],["ll","như “y” (hoặc “gi” nhẹ)","<mark>ll</mark>amar, po<mark>ll</mark>o"],["y","như ll khi đứng đầu hoặc giữa từ; đứng một mình đọc “i”","<mark>y</mark>o, ma<mark>y</mark>o, <mark>y</mark> (và)"],["rr","rung lưỡi mạnh","pe<mark>rr</mark>o, ca<mark>rr</mark>o"],["r đầu từ","rung lưỡi mạnh","<mark>r</mark>ojo, <mark>r</mark>ápido"],["r giữa từ","búng lưỡi một lần","pe<mark>r</mark>o, ca<mark>r</mark>o"],["ch","như “ch” trong “cha”","<mark>ch</mark>ico, no<mark>ch</mark>e"]],
  uses:[["Cặp từ chỉ khác r và rr","pe<mark>r</mark>o (nhưng) / pe<mark>rr</mark>o (con chó)"],["Cặp từ khác ñ và n","ca<mark>ñ</mark>a (ống) / ca<mark>n</mark>a (tóc bạc)"]],
  signals:["ñ","ll","rr","r đầu từ","ch"],
  speak:5,write:3,
  reg:"Phân biệt r đơn và rr rất quan trọng vì có thể đổi nghĩa: pero (nhưng) khác perro (con chó).",
  mistake:["caro và carro nghĩa giống nhau","caro (đắt) khác carro (xe)","r đơn búng lưỡi một lần, rr rung nhiều lần. Hai âm này phân biệt nghĩa."],
  table:[{head:["Âm gần nhất","Ví dụ"],rows:[["ñ","nh","ñoño"],["ll","y / gi","llave"],["rr","r rung","perro"],["ch","ch","chico"]]}]},

 {id:"es-pron-silabas",num:"05",en:"Sílabas",vi:"Âm tiết",short:"chia từ thành âm tiết: ca-sa, es-cue-la",
  core:"Tiếng Tây Ban Nha chia từ thành <strong>âm tiết</strong>, mỗi âm tiết có đúng một nguyên âm (hoặc một nguyên âm đôi). Biết chia âm tiết là bước đầu để tìm trọng âm.",
  forms:[["V","Một nguyên âm đứng một mình","<mark>a</mark>-mi-go, <mark>u</mark>-no"],["CV","Phụ âm đầu + nguyên âm","<mark>ca</mark>-sa, <mark>me</mark>-sa"],["CVC","Phụ âm + nguyên âm + phụ âm","<mark>mes</mark>, <mark>sol</mark>-da-do"],["Hai nguyên âm yếu/mạnh","ia, ie, io, ua, ue, ui… ở chung một âm tiết","<mark>bue</mark>-no, <mark>pia</mark>-no"],["Hai nguyên âm mạnh","a, e, o đứng cạnh nhau tách thành hai âm tiết","<mark>le</mark>-o, <mark>ma</mark>-es-tro"]],
  uses:[["Hai phụ âm giữa từ tách đôi","<mark>cam</mark>-po, <mark>ar</mark>-bol, <mark>ES</mark>-pa-ñol"],["Nhóm phụ âm bl, br, cl, cr, dr, fl, fr, gl, gr, pl, pr, tr không tách","<mark>ha</mark>-blar, <mark>li</mark>-bro"]],
  signals:["a-mi-go","es-cue-la","ca-sa","le-o"],
  speak:3,write:4,
  reg:"Từ có bao nhiêu nguyên âm (đơn hoặc đôi) thì có bấy nhiêu âm tiết: “escuela” có e-cue-a = es-cue-la, 3 âm tiết.",
  mistake:["pais (đọc thành 1 âm tiết)","país (pa-ís, 2 âm tiết)","Chữ í có dấu nên tách khỏi a thành hai âm tiết: pa-ís."],
  table:[{head:["Âm tiết","Số âm tiết"],rows:[["casa","ca-sa","2"],["amigo","a-mi-go","3"],["escuela","es-cue-la","3"],["país","pa-ís","2"]]}]},

 {id:"es-pron-acento",num:"06",en:"El acento",vi:"Trọng âm & dấu",short:"3 quy tắc: n/s/nguyên âm → âm tiết kế cuối",
  core:"Mỗi từ có một âm tiết đọc mạnh hơn. Quy tắc đoán trọng âm: từ kết thúc bằng <strong>nguyên âm, n hoặc s</strong> thì nhấn <strong>âm tiết áp chót</strong>; kết thúc bằng phụ âm khác thì nhấn <strong>âm tiết cuối</strong>. Nếu từ không theo quy tắc, nó mang <strong>dấu sắc (´)</strong> ngay trên nguyên âm cần nhấn.",
  forms:[["Kết thúc nguyên âm, n, s","nhấn âm tiết áp chót, không có dấu","ca-<mark>sa</mark>, ha-<mark>blan</mark>, <mark>lu</mark>-nes"],["Kết thúc phụ âm khác n, s","nhấn âm tiết cuối, không có dấu","ha-<mark>blar</mark>, ciu-<mark>dad</mark>"],["Trái với quy tắc","phải có dấu ´ trên âm tiết nhấn","ca-<mark>fé</mark>, <mark>lá</mark>-piz, <mark>mú</mark>-si-ca"],["Từ phân biệt nghĩa","dấu giúp phân biệt hai từ cùng chữ","el (the) / <mark>él</mark> (anh ấy), si (nếu) / <mark>sí</mark> (vâng)"]],
  uses:[["Từ hỏi luôn có dấu","¿<mark>Qué</mark>? ¿<mark>Cómo</mark>? ¿<mark>Dónde</mark>? ¿<mark>Cuándo</mark>?"],["Dấu hỏi và cảm thán mở đầu bằng ¿ và ¡","¿Cómo te llamas? ¡Hola!"]],
  signals:["acento","tilde","¿Qué?","café","ciudad"],
  speak:4,write:5,
  reg:"Khi viết, quên dấu có thể đổi nghĩa (papa = khoai tây, papá = bố). Khi nói, trọng âm sai khiến người nghe khó hiểu.",
  mistake:["cafe","café","Từ kết thúc bằng nguyên âm theo quy tắc nhấn âm áp chót (CA-fe). Muốn nhấn cuối (ca-FÉ) phải viết dấu."],
  table:[{head:["Kết thúc","Nhấn","Dấu?"],rows:[["casa","nguyên âm","ca-SA","không"],["hablar","r","ha-BLAR","không"],["café","nguyên âm","ca-FÉ","có"],["lápiz","z","LÁ-piz","có"]]}]},
];

registerRows("pronunciacion", T);
GRAMMAR.theory.pronunciacion = { rows: T, first: "es-pron-alfabeto" };
})();
