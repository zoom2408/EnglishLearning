/* es/content/modules.js
   Site map for the Spanish track (A0 → B2, one flat list ordered by
   difficulty). Add a module here, then create its page, its theory file
   and its quiz file (see /es/content/theory and /es/content/quiz). */
const SITE_BRAND = "Ngữ pháp tiếng Tây Ban Nha";
const MODULES = [
 {key:"pronunciacion",num:"01",page:"pronunciacion.html",title:"Phát âm & chữ cái",en:"Pronunciación",prefix:"es-pron-",desc:"Nguyên âm, phụ âm đặc biệt, ll/ñ/rr, trọng âm và dấu",meta:"6 bài · 60 câu"},
 {key:"saludos",num:"02",page:"saludos.html",title:"Chào hỏi & số đếm",en:"Saludos",prefix:"es-sal-",desc:"Chào hỏi, giới thiệu bản thân, số 0-100, ngày, tháng, giờ",meta:"4 bài · 60 câu"},
 {key:"sustantivos",num:"03",page:"sustantivos.html",title:"Danh từ & mạo từ",en:"Sustantivos",prefix:"es-sus-",desc:"Giống đực/cái, số nhiều, el/la/los/las, un/una",meta:"4 bài · 60 câu"},
 {key:"ser-estar",num:"04",page:"ser-estar.html",title:"Ser, Estar, Tener, Hay",en:"Ser · Estar",prefix:"es-ser-",desc:"Bốn động từ nền tảng và cách chọn ser hay estar",meta:"4 bài · 60 câu"},
 {key:"presente",num:"05",page:"presente.html",title:"Thì hiện tại",en:"Presente",prefix:"es-pres-",desc:"Động từ -ar, -er, -ir, đổi nguyên âm, bất quy tắc ở yo",meta:"4 bài · 60 câu"},
 {key:"adjetivos",num:"06",page:"adjetivos.html",title:"Tính từ",en:"Adjetivos",prefix:"es-adj-",desc:"Hòa hợp giống và số, vị trí, sở hữu, chỉ định",meta:"4 bài · 60 câu"},
 {key:"preguntas",num:"07",page:"preguntas.html",title:"Câu hỏi, phủ định & giới từ",en:"Preguntas",prefix:"es-preg-",desc:"Từ để hỏi, phủ định kép, giới từ chỉ vị trí, a / de / en",meta:"4 bài · 60 câu"},
 {key:"reflexivos",num:"08",page:"reflexivos.html",title:"Phản thân & gustar",en:"Reflexivos",prefix:"es-ref-",desc:"Động từ phản thân, vị trí đại từ, gustar, también / tampoco",meta:"4 bài · 60 câu"},
 {key:"pasado",num:"09",page:"pasado.html",title:"Quá khứ",en:"Pasado",prefix:"es-pas-",desc:"Indefinido, imperfecto và cách chọn giữa hai thì",meta:"4 bài · 60 câu"},
 {key:"pronombres",num:"10",page:"pronombres.html",title:"Đại từ tân ngữ & por/para",en:"Pronombres",prefix:"es-obj-",desc:"Lo/la, le/les, se lo, por và para",meta:"4 bài · 60 câu"},
 {key:"comparativos",num:"11",page:"comparativos.html",title:"So sánh & tương lai gần",en:"Comparativos",prefix:"es-comp-",desc:"Más/menos que, mejor/peor, el más, ir a + inf.",meta:"4 bài · 60 câu"},
 {key:"perfecto",num:"12",page:"perfecto.html",title:"Thì hoàn thành",en:"Perfecto",prefix:"es-perf-",desc:"Phân từ, he hablado, había hablado, perfecto vs indefinido",meta:"4 bài · 60 câu"},
];
