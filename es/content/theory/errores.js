/* es/content/theory/errores.js
   Errores comunes: falsos amigos, ser/estar nâng cao, giống ngoại lệ,
   giới từ hay nhầm, chính tả và dấu. Uses the "table" diagram mode. */
(() => {
const T = [
 {id:"es-err-falsos",num:"01",en:"Falsos amigos",vi:"Từ giống tiếng Anh nhưng khác nghĩa",short:"embarazada ≠ embarrassed · constipado ≠ constipated",
  core:"Nhiều từ tiếng Tây Ban Nha trông giống tiếng Anh nhưng <strong>nghĩa khác hẳn</strong>. Người học đã biết tiếng Anh dễ đoán nhầm. Hãy nhớ những cặp hay gây hiểu lầm nhất.",
  forms:[["embarazada","có thai (≠ xấu hổ)","Está <mark>embarazada</mark>. (xấu hổ: avergonzada)"],["constipado","bị cảm lạnh (≠ táo bón)","Estoy <mark>constipado</mark>."],["actual","hiện tại (≠ thực sự)","El presidente <mark>actual</mark>. (thực sự: real)"],["librería","hiệu sách (≠ thư viện)","Compro libros en la <mark>librería</mark>. (thư viện: biblioteca)"],["éxito","thành công (≠ lối ra)","Fue un <mark>éxito</mark>. (lối ra: salida)"],["sensible","nhạy cảm (≠ hợp lý)","Es muy <mark>sensible</mark>. (hợp lý: sensato)"]],
  uses:[["Nói về sức khỏe","Estoy <mark>constipado</mark>, tengo tos y fiebre."],["Mua sắm","Voy a la <mark>librería</mark> a comprar un diccionario."]],
  signals:["embarazada","constipado","actual","librería","éxito","sensible"],
  speak:4,write:4,
  reg:"Khi thấy một từ quen thuộc nhưng câu không hợp nghĩa, hãy nghi ngờ đó là “falso amigo” và tra từ điển.",
  mistake:["Estoy embarazada de mis errores.","Me da vergüenza mi error.","“Embarazada” chỉ có nghĩa là có thai. Xấu hổ là “avergonzado / me da vergüenza”."],
  table:[{head:["Nghĩa thật","Nghĩa đúng của từ tiếng Anh"],rows:[["embarazada","có thai","embarrassed → avergonzado"],["constipado","cảm lạnh","constipated → estreñido"],["actual","hiện tại","actual → real"],["librería","hiệu sách","library → biblioteca"],["éxito","thành công","exit → salida"]]}]},

 {id:"es-err-ser-estar",num:"02",en:"Ser y estar avanzado",vi:"Ser và estar: đổi nghĩa",short:"aburrido, listo, malo, rico, vivo",
  core:"Một số tính từ <strong>đổi nghĩa</strong> tùy dùng với <strong>ser</strong> (bản chất) hay <strong>estar</strong> (trạng thái tạm thời). Học theo cặp để không nhầm.",
  forms:[["aburrido","ser: chán (tính chất) · estar: buồn chán","Es <mark>aburrido</mark> (nhàm). Está <mark>aburrido</mark> (đang chán)."],["listo","ser: thông minh · estar: sẵn sàng","Es <mark>listo</mark>. Estoy <mark>listo</mark>."],["malo","ser: xấu (tính cách) · estar: ốm, hỏng","Es <mark>malo</mark>. Está <mark>malo</mark>."],["rico","ser: giàu · estar: ngon","Es <mark>rico</mark>. La sopa está <mark>rica</mark>."],["vivo","ser: lanh lợi · estar: còn sống","Es <mark>vivo</mark>. Está <mark>vivo</mark>."],["verde","ser: màu xanh · estar: chưa chín","Es <mark>verde</mark>. Está <mark>verde</mark>."]],
  uses:[["Mô tả tính cách (ser) và trạng thái (estar)","Mi hermano <mark>es</mark> callado, pero hoy <mark>está</mark> muy hablador."],["Món ăn","La paella <mark>es</mark> española y <mark>está</mark> riquísima."]],
  signals:["ser aburrido / estar aburrido","ser listo / estar listo","ser rico / estar rico","ser malo / estar malo"],
  speak:5,write:5,
  reg:"Mẹo: ser = “nó là như vậy”, estar = “nó đang như vậy”. Câu hỏi ngược lại giúp bạn chọn: “Điều này thay đổi được không?”",
  mistake:["La sopa es rica. (muốn nói: ngon lúc này)","La sopa está rica.","Ser rica nghĩa là giàu. Để nói món ăn ngon dùng estar rico."],
  table:[{head:["ser","estar"],rows:[["aburrido","nhàm chán","buồn chán"],["listo","thông minh","sẵn sàng"],["malo","xấu (người)","ốm / hỏng"],["rico","giàu","ngon"],["vivo","lanh lợi","còn sống"]]}]},

 {id:"es-err-genero",num:"03",en:"Género y número raros",vi:"Giống và số ngoại lệ",short:"el día · el mapa · la mano · el agua · los lunes",
  core:"Những danh từ đi <strong>ngược quy tắc</strong>: tận cùng -a nhưng giống đực, tận cùng -o nhưng giống cái, danh từ giống cái bắt đầu bằng <strong>a nhấn</strong> dùng <strong>el</strong>. Ngày trong tuần không đổi ở số nhiều.",
  forms:[["-a giống đực","el día, el mapa, el planeta, el idioma, el problema, el tema, el sistema","<mark>el</mark> día, <mark>el</mark> mapa, <mark>el</mark> problema"],["-o giống cái","la mano, la foto, la moto, la radio","<mark>la</mark> mano, <mark>la</mark> foto"],["a nhấn","el agua, el águila, el hacha, el aula","<mark>el</mark> agua fría, <mark>las</mark> aguas"],["Ngày không đổi","los lunes, los martes (số ít = số nhiều)","<mark>los</mark> lunes, <mark>los</mark> martes"],["Từ gốc Hy Lạp -ma","giống đực: el poema, el programa","<mark>el</mark> poema, <mark>el</mark> programa"],["Giống thay đổi nghĩa","el capital (tiền vốn) / la capital (thủ đô)","<mark>la</mark> capital de España"]],
  uses:[["Học từ mới kèm mạo từ","el mapa, la mano, el agua, el día"],["Viết đúng tính từ","el agua <mark>fría</mark> (tính từ vẫn giống cái)"]],
  signals:["el día","el mapa","la mano","el agua","los lunes"],
  speak:4,write:5,
  reg:"Khi gặp danh từ giống cái bắt đầu bằng a nhấn, mạo từ dùng el nhưng tính từ vẫn giống cái: el agua fría, không nói “el agua frío”.",
  mistake:["la problema","el problema","Problema tận cùng -ma gốc Hy Lạp nên là giống đực."],
  table:[{head:["Ví dụ"],rows:[["-a giống đực","el día, el mapa, el problema"],["-o giống cái","la mano, la foto"],["a nhấn","el agua fría, las aguas frías"],["ngày","el lunes, los lunes"]]}]},

 {id:"es-err-preposiciones",num:"04",en:"Preposiciones difíciles",vi:"Giới từ đi với động từ",short:"pensar en · soñar con · depender de · casarse con",
  core:"Nhiều động từ <strong>đi kèm giới từ cố định</strong> và thường khác tiếng Việt hoặc tiếng Anh. Phải học theo cụm: <strong>pensar en, soñar con, depender de, casarse con, enamorarse de</strong>.",
  forms:[["pensar en","nghĩ về","<mark>Pienso en</mark> ti."],["soñar con","mơ về","<mark>Sueño con</mark> viajar."],["depender de","phụ thuộc vào","<mark>Depende de</mark> ti."],["casarse con","kết hôn với","Se casó <mark>con</mark> Ana."],["enamorarse de","phải lòng","Se enamoró <mark>de</mark> ella."],["preocuparse por","lo lắng về","Me preocupo <mark>por</mark> el examen."]],
  uses:[["Nói về suy nghĩ và ước mơ","<mark>Pienso en</mark> el futuro y <mark>sueño con</mark> una casa."],["Nói về quan hệ","Se <mark>casó con</mark> su novio y <mark>se enamoró de</mark> él."]],
  signals:["pensar en","soñar con","depender de","casarse con","enamorarse de","preocuparse por"],
  speak:5,write:5,
  reg:"Khi học một động từ mới, hãy học luôn giới từ đi kèm. Tra từ điển tìm mục “+ prep.”.",
  mistake:["Sueño de viajar.","Sueño con viajar.","Soñar đi với con, không đi với de."],
  table:[{head:["Giới từ","Ví dụ"],rows:[["pensar","en","Pienso en ti."],["soñar","con","Sueño con viajar."],["depender","de","Depende de ti."],["casarse","con","Se casó con Ana."],["preocuparse","por","Me preocupo por ti."]]}]},

 {id:"es-err-ortografia",num:"05",en:"Ortografía y tildes",vi:"Chính tả và dấu hay sai",short:"haber / a ver · hay / ahí / ay · porque / por qué · sino / si no",
  core:"Các cặp từ <strong>đọc giống hệt nhau</strong> nhưng viết khác và nghĩa khác: <strong>haber / a ver</strong>, <strong>hay / ahí / ay</strong>, <strong>porque / por qué</strong>, <strong>sino / si no</strong>. Dấu sắc cũng phân biệt: <strong>tú / tu, mí / mi, sí / si, él / el</strong>.",
  forms:[["haber / a ver","động từ “có” / “để xem”","Hay que <mark>haber</mark> paciencia. <mark>A ver</mark> qué pasa."],["hay / ahí / ay","có / ở đó / ôi","<mark>Hay</mark> un libro <mark>ahí</mark>. ¡<mark>Ay</mark>, qué dolor!"],["porque / por qué","vì (trả lời) / tại sao (hỏi)","¿<mark>Por qué</mark> llegas tarde? <mark>Porque</mark> perdí el bus."],["sino / si no","mà là / nếu không","No es azul, <mark>sino</mark> verde. <mark>Si no</mark> llegas, te espero."],["tú / tu","bạn / của bạn","<mark>Tú</mark> tienes <mark>tu</mark> libro."],["sí / si","vâng / nếu","<mark>Sí</mark>, voy. <mark>Si</mark> llueve, no voy."]],
  uses:[["Viết đúng khi nhắn tin và email","¿<mark>Por qué</mark> no vienes? <mark>Porque</mark> estoy cansado."],["Đọc kỹ đề thi","<mark>Si no</mark> estudias, no aprobarás. No estudio, <mark>sino</mark> trabajo."]],
  signals:["haber / a ver","hay / ahí / ay","por qué / porque","sino / si no","tú / tu"],
  speak:2,write:5,
  reg:"Lỗi này chỉ thấy khi viết vì các cặp từ đọc giống hệt nhau. Đọc lại bài viết và kiểm tra từng cặp.",
  mistake:["Porque no vienes?","¿Por qué no vienes?","Câu hỏi dùng “por qué” (hai từ, có dấu) và có ¿ ở đầu."],
  table:[{head:["Nghĩa","Ví dụ"],rows:[["haber","động từ có","Debe haber tiempo."],["a ver","để xem","A ver qué pasa."],["sino","mà là","No es rojo, sino azul."],["si no","nếu không","Si no vienes, me voy."],["por qué","tại sao","¿Por qué lloras?"],["porque","vì","Porque estoy triste."]]}]},
];

registerRows("errores", T);
GRAMMAR.theory.errores = { rows: T, first: "es-err-falsos" };
})();
