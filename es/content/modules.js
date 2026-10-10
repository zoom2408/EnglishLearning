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
 {key:"tiempos",num:"05",page:"tiempos.html",title:"7 thì (Tiempos)",en:"Tiempos",prefix:"es-t-",desc:"Trục thời gian, cấu trúc, dấu hiệu: presente, indefinido, imperfecto, perfecto, pluscuamperfecto, futuro, condicional",meta:"7 bài · 70 câu"},
 {key:"adjetivos",num:"06",page:"adjetivos.html",title:"Tính từ",en:"Adjetivos",prefix:"es-adj-",desc:"Hòa hợp giống và số, vị trí, sở hữu, chỉ định",meta:"4 bài · 60 câu"},
 {key:"preguntas",num:"07",page:"preguntas.html",title:"Câu hỏi, phủ định & giới từ",en:"Preguntas",prefix:"es-preg-",desc:"Từ để hỏi, phủ định kép, giới từ chỉ vị trí, a / de / en",meta:"4 bài · 60 câu"},
 {key:"reflexivos",num:"08",page:"reflexivos.html",title:"Phản thân & gustar",en:"Reflexivos",prefix:"es-ref-",desc:"Động từ phản thân, vị trí đại từ, gustar, también / tampoco",meta:"4 bài · 60 câu"},
 {key:"pronombres",num:"09",page:"pronombres.html",title:"Đại từ tân ngữ & por/para",en:"Pronombres",prefix:"es-obj-",desc:"Lo/la, le/les, se lo, por và para",meta:"4 bài · 60 câu"},
 {key:"comparativos",num:"10",page:"comparativos.html",title:"So sánh & tương lai gần",en:"Comparativos",prefix:"es-comp-",desc:"Más/menos que, mejor/peor, el más, ir a + inf.",meta:"4 bài · 60 câu"},
 {key:"subjuntivo",num:"11",page:"subjuntivo.html",title:"Subjuntivo hiện tại",en:"Subjuntivo",prefix:"es-sub-",desc:"Cách tạo, bất quy tắc, mong muốn, cảm xúc, nghi ngờ",meta:"4 bài · 60 câu"},
 {key:"imperativo",num:"12",page:"imperativo.html",title:"Mệnh lệnh & mệnh đề quan hệ",en:"Imperativo",prefix:"es-imp-",desc:"Mệnh lệnh khẳng định, phủ định, que / quien / lo que, relativas với subjuntivo",meta:"4 bài · 60 câu"},
 {key:"si-clauses",num:"13",page:"si-clauses.html",title:"Subjuntivo quá khứ & câu điều kiện",en:"Si-clauses",prefix:"es-si-",desc:"Subjuntivo imperfecto, si + presente, si + imperfecto, si + pluscuamperfecto",meta:"4 bài · 60 câu"},
];
