/* es/content/theory/sustantivos.js
   Sustantivos & artículos: género, plural, definidos, indefinidos.
   Uses the "table" diagram mode. */
(() => {
const T = [
 {id:"es-sus-genero",num:"01",en:"El género",vi:"Giống đực và giống cái",short:"-o → el · -a → la · còn lại phải học thuộc",
  core:"Mọi danh từ đều có <strong>giống đực</strong> (masculino) hoặc <strong>giống cái</strong> (femenino), kể cả đồ vật. Danh từ tận cùng <strong>-o</strong> thường giống đực, <strong>-a</strong> thường giống cái.",
  forms:[["-o","thường giống đực","el libro, el niño, el vaso"],["-a","thường giống cái","la casa, la niña, la mesa"],["-ción, -sión, -dad, -tad","luôn giống cái","la <mark>canción</mark>, la <mark>ciudad</mark>, la <mark>libertad</mark>"],["-aje, -or, -án","thường giống đực","el <mark>viaje</mark>, el <mark>amor</mark>, el <mark>pan</mark>"],["Ngoại lệ -a giống đực","el día, el mapa, el problema, el idioma, el sofá","el <mark>problema</mark> es grande"],["Ngoại lệ -o giống cái","la mano, la foto, la moto","la <mark>mano</mark> derecha"]],
  uses:[["Người và động vật đổi -o thành -a","el <mark>amigo</mark> / la <mark>amiga</mark>, el <mark>gato</mark> / la <mark>gata</mark>"],["Một số từ giống nhau cho cả hai giới","el / la <mark>estudiante</mark>, el / la <mark>turista</mark>"]],
  signals:["-o → masculino","-a → femenino","-ción / -dad → femenino","el día","la mano"],
  speak:4,write:5,
  reg:"Khi học danh từ mới, hãy học luôn kèm mạo từ (el libro, la mesa) thay vì học riêng từ.",
  mistake:["la problema","el problema","Problema tận cùng -a nhưng giống đực (đuôi -ma có gốc Hy Lạp: el tema, el sistema, el programa)."],
  table:[{head:["Giống cái"],rows:[["el libro","la casa"],["el amigo","la amiga"],["el problema","la canción"],["el día","la mano"]]}]},

 {id:"es-sus-plural",num:"02",en:"El plural",vi:"Số nhiều",short:"+s sau nguyên âm · +es sau phụ âm · z → ces",
  core:"Số nhiều tạo bằng cách thêm <strong>-s</strong> khi từ kết thúc bằng nguyên âm, thêm <strong>-es</strong> khi kết thúc bằng phụ âm. Từ kết thúc bằng <strong>-z</strong> đổi thành <strong>-ces</strong>.",
  forms:[["Nguyên âm","+ s","libro → libro<mark>s</mark>, casa → casa<mark>s</mark>"],["Phụ âm","+ es","ciudad → ciudad<mark>es</mark>, papel → papel<mark>es</mark>"],["-z","z → ces","lápiz → lápi<mark>ces</mark>, luz → lu<mark>ces</mark>"],["-s sau âm tiết cuối không nhấn","không đổi","el lunes → los lunes, la crisis → las crisis"],["-í, -ú nhấn","+ es hoặc + s","rubí → rubí<mark>es</mark>, menú → menú<mark>s</mark>"],["Mất dấu","từ có dấu cuối bỏ dấu khi thêm -es","canción → cancion<mark>es</mark>, jardín → jardin<mark>es</mark>"]],
  uses:[["Mạo từ và tính từ cũng đổi theo","<mark>los</mark> libro<mark>s</mark> roj<mark>os</mark>"],["Dùng số nhiều chung cho cả nam và nữ","los <mark>padres</mark> (bố mẹ), los <mark>hijos</mark> (con cái)"]],
  signals:["+s","+es","z → ces","bỏ dấu","los / las"],
  speak:4,write:5,
  reg:"Từ kết thúc bằng nguyên âm có dấu nhấn như “café” chỉ thêm -s (cafés). Từ kết thúc bằng “-ción” đổi thành “-ciones” và mất dấu.",
  mistake:["los lápizes","los lápices","Từ kết thúc bằng -z đổi z thành c trước khi thêm -es."],
  table:[{head:["Số nhiều","Quy tắc"],rows:[["casa","casas","+ s"],["ciudad","ciudades","+ es"],["lápiz","lápices","z → ces"],["canción","canciones","bỏ dấu + es"]]}]},

 {id:"es-sus-definidos",num:"03",en:"Artículos definidos",vi:"Mạo từ xác định",short:"el · la · los · las",
  core:"Mạo từ xác định có <strong>4 dạng</strong>, phải khớp <strong>giống và số</strong> với danh từ: <strong>el, la, los, las</strong>. Dùng khi nói về vật <strong>đã xác định</strong> hoặc <strong>nói chung</strong>.",
  forms:[["Đực, số ít","el","<mark>el</mark> libro"],["Cái, số ít","la","<mark>la</mark> casa"],["Đực, số nhiều","los","<mark>los</mark> libros"],["Cái, số nhiều","las","<mark>las</mark> casas"],["a + el","al","Voy <mark>al</mark> parque."],["de + el","del","El libro <mark>del</mark> profesor."]],
  uses:[["Nói chung, tiếng Tây Ban Nha cần mạo từ nhiều hơn tiếng Việt","<mark>El</mark> español es fácil. <mark>Me gustan los</mark> perros."],["Giờ, ngày, tên bộ phận cơ thể","<mark>La</mark> clase es a <mark>las</mark> ocho. Me duele <mark>la</mark> cabeza."],["Trước danh từ cái bắt đầu bằng a nhấn: el agua, el águila","<mark>el</mark> agua fría, <mark>las</mark> aguas frías"]],
  signals:["el / la","los / las","al / del","el agua"],
  speak:5,write:5,
  reg:"“a + el = al” và “de + el = del” bắt buộc trong văn viết. Chỉ đúng với “el”, không áp dụng cho “la”.",
  mistake:["Voy a el parque.","Voy al parque.","a + el luôn rút gọn thành al. Tương tự de + el = del."],
  table:[{head:["Số ít","Số nhiều"],rows:[["Giống đực","el","los"],["Giống cái","la","las"]]}]},

 {id:"es-sus-indefinidos",num:"04",en:"Artículos indefinidos",vi:"Mạo từ bất định",short:"un · una · unos · unas",
  core:"Mạo từ bất định giới thiệu vật <strong>chưa xác định</strong> hoặc <strong>lần đầu nhắc đến</strong>: <strong>un, una, unos, unas</strong>. Số nhiều “unos/unas” nghĩa là “vài” hoặc “khoảng”.",
  forms:[["Đực, số ít","un","<mark>un</mark> libro"],["Cái, số ít","una","<mark>una</mark> casa"],["Đực, số nhiều","unos","<mark>unos</mark> libros (vài quyển sách)"],["Cái, số nhiều","unas","<mark>unas</mark> casas (vài ngôi nhà)"],["Trước a nhấn","un agua, un águila","<mark>un</mark> águila grande"],["Không dùng sau","ser + nghề, quốc tịch","Soy médico, no soy un médico."]],
  uses:[["Giới thiệu vật mới","Tengo <mark>un</mark> perro. <mark>El</mark> perro se llama Max."],["Số lượng ước chừng","Hay <mark>unos</mark> veinte alumnos."]],
  signals:["un / una","unos / unas","tengo un…","hay un…"],
  speak:5,write:4,
  reg:"Sau “ser” + nghề hoặc quốc tịch không dùng mạo từ bất định: “Soy profesora”, không nói “Soy una profesora”, trừ khi có tính từ đi kèm.",
  mistake:["Soy un estudiante vietnamita.","Soy estudiante vietnamita.","Nghề và quốc tịch sau ser không cần un/una."],
  table:[{head:["Số ít","Số nhiều"],rows:[["Giống đực","un","unos"],["Giống cái","una","unas"]]}]},
];

registerRows("sustantivos", T);
GRAMMAR.theory.sustantivos = { rows: T, first: "es-sus-genero" };
})();
