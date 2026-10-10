/* es/content/theory/comparativos.js
   Comparativos, superlativos e "ir a + infinitivo".
   Uses the "table" diagram mode. */
(() => {
const T = [
 {id:"es-comp-comparar",num:"01",en:"Comparativos",vi:"So sánh hơn, bằng và kém",short:"más … que · menos … que · tan … como · tanto … como",
  core:"So sánh <strong>hơn</strong>: <strong>más + tính từ + que</strong>. So sánh <strong>kém</strong>: <strong>menos + tính từ + que</strong>. So sánh <strong>bằng</strong>: <strong>tan + tính từ + como</strong>, hoặc <strong>tanto/a/os/as + danh từ + como</strong>.",
  forms:[["Hơn","más + tính từ + que","Ana es <mark>más alta que</mark> Luis."],["Kém","menos + tính từ + que","Este libro es <mark>menos caro que</mark> ese."],["Bằng (tính từ)","tan + tính từ + como","Soy <mark>tan alto como</mark> tú."],["Bằng (danh từ)","tanto/a/os/as + danh từ + como","Tengo <mark>tantos libros como</mark> tú."],["Với động từ","động từ + más / menos que","Trabajo <mark>más que</mark> mi hermano."],["Với số lượng","más de / menos de + số","Hay <mark>más de</mark> veinte personas."]],
  uses:[["So sánh người","Mi hermana es <mark>más simpática que</mark> yo."],["So sánh số lượng","Tiene <mark>tantos amigos como</mark> yo."]],
  signals:["más … que","menos … que","tan … como","tanto … como","más de + số"],
  speak:5,write:5,
  reg:"“Más de” dùng trước số, “más que” dùng khi so sánh hai thứ. Ví dụ: Tengo más de diez libros, nhưng Tengo más libros que tú.",
  mistake:["Soy más alto de tú.","Soy más alto que tú.","So sánh hai đối tượng dùng que, không dùng de."],
  table:[{head:["Cấu trúc","Ví dụ"],rows:[["hơn","más + adj + que","más alto que"],["kém","menos + adj + que","menos caro que"],["bằng","tan + adj + como","tan alto como"],["bằng (danh từ)","tanto/a/os/as + n + como","tantos libros como"]]}]},

 {id:"es-comp-irregulares",num:"02",en:"Comparativos irregulares",vi:"So sánh bất quy tắc",short:"mejor · peor · mayor · menor",
  core:"Bốn tính từ có <strong>dạng so sánh riêng</strong>: <strong>bueno → mejor</strong>, <strong>malo → peor</strong>, <strong>grande → mayor</strong> (tuổi, cấp bậc), <strong>pequeño → menor</strong> (tuổi). Không nói “más bueno”. Số nhiều thêm <strong>-es</strong>.",
  forms:[["bueno → mejor","tốt hơn","Este restaurante es <mark>mejor que</mark> aquel."],["malo → peor","tệ hơn","Hoy hace <mark>peor</mark> tiempo que ayer."],["grande → mayor","lớn tuổi hơn","Mi hermana es <mark>mayor que</mark> yo."],["pequeño → menor","trẻ tuổi hơn","Mi hermano es <mark>menor que</mark> yo."],["bien → mejor (trạng từ)","tốt hơn (cách làm)","Hablo <mark>mejor</mark> que antes."],["mal → peor (trạng từ)","tệ hơn","Canta <mark>peor</mark> que ella."]],
  uses:[["So sánh chất lượng","Esta película es <mark>mejor</mark> que la otra."],["So sánh tuổi tác","Mi primo es <mark>menor</mark> que yo."]],
  signals:["mejor","peor","mayor","menor","más grande (kích thước)"],
  speak:5,write:5,
  reg:"“Mayor / menor” dùng cho tuổi. Với kích thước vật chất vẫn dùng “más grande / más pequeño”: Mi casa es más grande que la tuya.",
  mistake:["Es más bueno que tú.","Es mejor que tú.","Bueno có dạng so sánh riêng là mejor, không dùng más bueno."],
  table:[{head:["Dạng so sánh","Ví dụ"],rows:[["bueno","mejor","mejor que"],["malo","peor","peor que"],["grande (tuổi)","mayor","mayor que"],["pequeño (tuổi)","menor","menor que"]]}]},

 {id:"es-comp-superlativo",num:"03",en:"Superlativo",vi:"So sánh nhất",short:"el más + adj + de · -ísimo",
  core:"So sánh nhất: <strong>el / la / los / las + más / menos + tính từ + de</strong>. Dạng <strong>-ísimo</strong> diễn tả mức độ cao nhất (rất rất): <strong>grande → grandísimo</strong>. Dạng bất quy tắc: <strong>el mejor, el peor</strong>.",
  forms:[["Nhất (hơn)","el / la + más + tính từ + de","Es <mark>el más alto de</mark> la clase."],["Nhất (kém)","el / la + menos + tính từ + de","Es <mark>la menos cara de</mark> la tienda."],["Bất quy tắc","el mejor / la peor / el mayor","Es <mark>el mejor</mark> amigo del mundo."],["-ísimo","bỏ nguyên âm cuối + -ísimo","<mark>grandísimo</mark>, <mark>facilísimo</mark>, <mark>riquísimo</mark>"],["muy + tính từ","rất (mức thường)","Es <mark>muy</mark> simpático."]],
  uses:[["Nói người, vật vượt trội","Madrid es <mark>la ciudad más grande de</mark> España."],["Nhấn mạnh cảm xúc","La comida estaba <mark>buenísima</mark>."]],
  signals:["el / la más … de","el mejor","-ísimo","muy + adj."],
  speak:5,write:4,
  reg:"Sau “el más + tính từ” dùng “de” để chỉ tập hợp, không dùng “en”: el más alto de la clase.",
  mistake:["la ciudad más grande en España","la ciudad más grande de España","Superlativo dùng de để chỉ phạm vi so sánh."],
  table:[{head:["Cấu trúc","Ví dụ"],rows:[["nhất","el más + adj + de","el más alto de la clase"],["kém nhất","la menos + adj + de","la menos cara de la tienda"],["mejor","el / la mejor","la mejor idea"],["-ísimo","adj + ísimo","riquísimo"]]}]},

 {id:"es-comp-ir-a",num:"04",en:"Ir a + infinitivo",vi:"Tương lai gần",short:"voy a · vas a · va a · vamos a · vais a · van a + inf.",
  core:"<strong>Ir a + nguyên mẫu</strong> diễn tả <strong>dự định, kế hoạch hoặc việc sắp xảy ra</strong>. Chia <strong>ir</strong> theo ngôi, giữ nguyên <strong>a</strong>, rồi thêm động từ nguyên mẫu. Đây là cách nói tương lai dễ nhất.",
  forms:[["yo","voy a + inf.","<mark>Voy a estudiar</mark> esta noche."],["tú","vas a + inf.","¿<mark>Vas a venir</mark> mañana?"],["él / ella / usted","va a + inf.","Ella <mark>va a viajar</mark> a México."],["nosotros","vamos a + inf.","<mark>Vamos a comer</mark> fuera."],["vosotros","vais a + inf.","¿<mark>Vais a ver</mark> la película?"],["ellos / ustedes","van a + inf.","<mark>Van a llegar</mark> tarde."]],
  uses:[["Kế hoạch","Este verano <mark>voy a visitar</mark> a mi abuela."],["Việc sắp xảy ra","Mira esas nubes, <mark>va a llover</mark>."],["Gợi ý cùng làm (vamos a + inf.)","<mark>Vamos a bailar</mark>."]],
  signals:["mañana","esta noche","la semana que viene","el próximo año","pronto"],
  speak:5,write:5,
  reg:"“Vamos a + inf.” cũng có nghĩa “chúng ta hãy …”: ¡Vamos a comer!",
  mistake:["Voy estudiar mañana.","Voy a estudiar mañana.","Cấu trúc bắt buộc có giới từ a giữa ir và động từ nguyên mẫu."],
  table:[{head:["Ir a + inf."],rows:[["yo","voy a comer"],["tú","vas a comer"],["él / ella","va a comer"],["nosotros","vamos a comer"],["vosotros","vais a comer"],["ellos","van a comer"]]}]},
];

registerRows("comparativos", T);
GRAMMAR.theory.comparativos = { rows: T, first: "es-comp-comparar" };
})();
