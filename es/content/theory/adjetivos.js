/* es/content/theory/adjetivos.js
   Adjetivos: concordancia, posición, posesivos, demostrativos.
   Uses the "table" diagram mode. */
(() => {
const T = [
 {id:"es-adj-concordancia",num:"01",en:"Concordancia",vi:"Tính từ hòa hợp giống và số",short:"alto / alta / altos / altas · grande / grandes",
  core:"Tính từ phải <strong>khớp giống và số</strong> với danh từ nó bổ nghĩa. Tính từ đuôi <strong>-o</strong> có 4 dạng (-o, -a, -os, -as). Tính từ đuôi <strong>-e</strong> hoặc phụ âm chỉ có 2 dạng (số ít, số nhiều).",
  forms:[["-o","alto, alta, altos, altas","un chico <mark>alto</mark>, una chica <mark>alta</mark>"],["-e","grande, grandes (không đổi giống)","una casa <mark>grande</mark>, casas <mark>grandes</mark>"],["Phụ âm","fácil, fáciles · joven, jóvenes","un examen <mark>fácil</mark>"],["-or","trabajador, trabajadora (thêm -a cho giống cái)","una mujer <mark>trabajadora</mark>"],["Quốc tịch","español, española · vietnamita (không đổi)","una amiga <mark>española</mark>"],["Nhiều danh từ","dạng giống đực số nhiều","Ana y Pedro son <mark>altos</mark>"]],
  uses:[["Mô tả người","Mi hermana es <mark>alta</mark> y <mark>simpática</mark>."],["Mô tả vật","Los libros son <mark>interesantes</mark>."],["Quốc tịch","Somos <mark>vietnamitas</mark>. Ellas son <mark>mexicanas</mark>."]],
  signals:["-o / -a","-os / -as","-e (không đổi giống)","-or → -ora"],
  speak:5,write:5,
  reg:"Khi tính từ bổ nghĩa cho cả nam và nữ, dùng dạng giống đực số nhiều: Ana y Pedro son simpáticos.",
  mistake:["Una casa grando.","Una casa grande.","Tính từ đuôi -e không đổi theo giống: grande dùng cho cả giống đực lẫn cái."],
  table:[{head:["Số ít","Số nhiều"],rows:[["đực, -o","alto","altos"],["cái, -a","alta","altas"],["đực/cái, -e","grande","grandes"],["đực/cái, phụ âm","fácil","fáciles"]]}]},

 {id:"es-adj-posicion",num:"02",en:"Posición",vi:"Vị trí của tính từ",short:"danh từ + tính từ (thường) · bueno/malo/grande đổi ngắn",
  core:"Thông thường tính từ đứng <strong>sau danh từ</strong> (un coche <strong>rojo</strong>). Một số tính từ đứng <strong>trước</strong> và <strong>rút gọn</strong>: <strong>bueno → buen, malo → mal, grande → gran</strong>.",
  forms:[["Sau danh từ","màu sắc, quốc tịch, hình dáng","un coche <mark>rojo</mark>, una amiga <mark>española</mark>"],["Trước danh từ","số đếm, nhiều/ít, mucho/poco","<mark>dos</mark> libros, <mark>mucha</mark> gente"],["bueno","buen + danh từ giống đực số ít","un <mark>buen</mark> amigo"],["malo","mal + danh từ giống đực số ít","un <mark>mal</mark> día"],["grande","gran + danh từ số ít (nghĩa “vĩ đại / lớn”)","un <mark>gran</mark> hombre"],["primero, tercero","primer, tercer + danh từ giống đực","el <mark>primer</mark> día"]],
  uses:[["Đặc điểm khách quan (sau danh từ)","una casa <mark>blanca</mark>, un libro <mark>interesante</mark>"],["Đánh giá chủ quan (trước danh từ)","una <mark>buena</mark> idea, una <mark>mala</mark> noticia"]],
  signals:["buen / mal / gran","primer / tercer","màu sắc sau danh từ","mucho / poco trước danh từ"],
  speak:4,write:5,
  reg:"Bueno và malo chỉ rút gọn trước danh từ giống đực số ít. Với giống cái vẫn dùng buena / mala nguyên dạng.",
  mistake:["un bueno amigo","un buen amigo","Bueno rút gọn thành buen trước danh từ giống đực số ít."],
  table:[{head:["Trước danh từ","Sau danh từ"],rows:[["bueno","un buen libro","un libro bueno"],["malo","un mal día","un día malo"],["grande","un gran hombre","un hombre grande"],["primero","el primer día","—"]]}]},

 {id:"es-adj-posesivos",num:"03",en:"Posesivos",vi:"Tính từ sở hữu",short:"mi · tu · su · nuestro · vuestro · su",
  core:"Tính từ sở hữu đứng <strong>trước danh từ</strong> và khớp với <strong>vật được sở hữu</strong> (không phải người sở hữu): mi, tu, su đổi số; nuestro, vuestro đổi cả giống lẫn số.",
  forms:[["của tôi","mi / mis","<mark>mi</mark> casa, <mark>mis</mark> libros"],["của bạn","tu / tus","<mark>tu</mark> hermano, <mark>tus</mark> amigos"],["của anh/chị ấy, của ông/bà","su / sus","<mark>su</mark> padre, <mark>sus</mark> hijos"],["của chúng tôi","nuestro / nuestra / nuestros / nuestras","<mark>nuestra</mark> escuela"],["của các bạn (vosotros)","vuestro / vuestra / vuestros / vuestras","<mark>vuestros</mark> amigos"],["của họ, của các ông/bà","su / sus","<mark>su</mark> coche, <mark>sus</mark> coches"]],
  uses:[["Gia đình và đồ vật","<mark>Mi</mark> madre trabaja. <mark>Mis</mark> padres viven aquí."],["Làm rõ “su” bằng de + người","<mark>su</mark> casa → la casa <mark>de Ana</mark>"]],
  signals:["mi / mis","tu / tus","su / sus","nuestro / nuestra"],
  speak:5,write:5,
  reg:"“Su” rất dễ gây hiểu nhầm (của anh ấy, của cô ấy, của họ hay của ông bà), nên khi cần rõ ràng ta nói “la casa de él / de ella / de ellos”.",
  mistake:["mi hermanos","mis hermanos","Tính từ sở hữu phải khớp số với danh từ: hermanos là số nhiều nên dùng mis."],
  table:[{head:["Số ít","Số nhiều"],rows:[["của tôi","mi","mis"],["của bạn","tu","tus"],["của anh/cô ấy","su","sus"],["của chúng tôi (đực/cái)","nuestro / nuestra","nuestros / nuestras"]]}]},

 {id:"es-adj-demostrativos",num:"04",en:"Demostrativos",vi:"Tính từ chỉ định",short:"este · ese · aquel (gần · vừa · xa)",
  core:"Ba mức độ khoảng cách: <strong>este</strong> (gần người nói), <strong>ese</strong> (gần người nghe, vừa), <strong>aquel</strong> (xa cả hai). Chúng phải khớp giống và số với danh từ.",
  forms:[["Gần (đây)","este / esta / estos / estas","<mark>este</mark> libro, <mark>estas</mark> casas"],["Vừa (đó)","ese / esa / esos / esas","<mark>ese</mark> chico, <mark>esas</mark> mesas"],["Xa (kia)","aquel / aquella / aquellos / aquellas","<mark>aquel</mark> edificio"],["Trung tính","esto / eso / aquello (không đi với danh từ)","¿Qué es <mark>esto</mark>?"],["Trạng từ chỉ nơi chốn","aquí (đây) · ahí (đó) · allí (kia)","El libro está <mark>aquí</mark>."]],
  uses:[["Chỉ vật đang thấy","<mark>Este</mark> libro es mío, <mark>ese</mark> es tuyo."],["Hỏi “cái này là gì”","¿Qué es <mark>esto</mark>? ¿Cuánto cuesta <mark>eso</mark>?"]],
  signals:["este / esta","ese / esa","aquel / aquella","esto / eso","aquí / ahí / allí"],
  speak:5,write:4,
  reg:"Chỉ riêng “esto, eso, aquello” là dạng trung tính, dùng khi bạn chưa biết hoặc không nêu tên vật.",
  mistake:["esta libro","este libro","Libro giống đực nên dùng este. Esta chỉ dùng cho danh từ giống cái."],
  table:[{head:["Số ít","Số nhiều"],rows:[["gần, đực","este","estos"],["gần, cái","esta","estas"],["vừa, đực/cái","ese / esa","esos / esas"],["xa, đực/cái","aquel / aquella","aquellos / aquellas"]]}]},
];

registerRows("adjetivos", T);
GRAMMAR.theory.adjetivos = { rows: T, first: "es-adj-concordancia" };
})();
