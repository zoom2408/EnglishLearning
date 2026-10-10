/* es/content/theory/preguntas.js
   Preguntas, negación y preposiciones: interrogativos, negación doble,
   preposiciones de lugar, a/de/en. Uses the "table" diagram mode. */
(() => {
const T = [
 {id:"es-preg-interrogativos",num:"01",en:"Interrogativos",vi:"Từ để hỏi",short:"qué · quién · dónde · cuándo · cómo · cuánto · por qué · cuál",
  core:"Câu hỏi bắt đầu bằng <strong>¿</strong> và kết thúc bằng <strong>?</strong>. Mọi từ để hỏi đều <strong>có dấu sắc</strong>. Câu hỏi có/không giữ nguyên trật tự câu khẳng định, chỉ đổi giọng điệu.",
  forms:[["qué","cái gì","¿<mark>Qué</mark> haces?"],["quién / quiénes","ai","¿<mark>Quién</mark> es?"],["dónde","ở đâu (adónde: đi đâu)","¿<mark>Dónde</mark> vives?"],["cuándo","khi nào","¿<mark>Cuándo</mark> llegas?"],["cómo","như thế nào","¿<mark>Cómo</mark> estás?"],["cuánto / cuánta / cuántos / cuántas","bao nhiêu","¿<mark>Cuántos</mark> años tienes?"],["por qué / porque","tại sao / bởi vì","¿<mark>Por qué</mark> estudias? <mark>Porque</mark> me gusta."],["cuál / cuáles","cái nào","¿<mark>Cuál</mark> prefieres?"]],
  uses:[["Hỏi thông tin cá nhân","¿<mark>Cómo</mark> te llamas? ¿<mark>De dónde</mark> eres?"],["Câu hỏi có / không","¿Hablas español? (không đổi trật tự từ)"]],
  signals:["¿ … ?","qué","dónde","cuándo","cómo","por qué","cuánto"],
  speak:5,write:5,
  reg:"Phân biệt “por qué” (hai từ, có dấu, để hỏi) và “porque” (một từ, không dấu, để trả lời).",
  mistake:["¿Que haces?","¿Qué haces?","Từ để hỏi luôn có dấu sắc: qué, quién, dónde, cuándo, cómo."],
  table:[{head:["Trả lời"],rows:[["qué","cái gì: Es un libro."],["quién","ai: Es mi madre."],["dónde","ở đâu: En casa."],["cuándo","khi nào: Mañana."],["cómo","thế nào: Muy bien."],["por qué","tại sao: Porque estoy cansado."]]}]},

 {id:"es-preg-negacion",num:"02",en:"La negación",vi:"Phủ định",short:"no + động từ · no… nada / nunca / nadie · tampoco",
  core:"Phủ định đơn giản: đặt <strong>no</strong> ngay trước động từ. Tiếng Tây Ban Nha cho phép <strong>phủ định kép</strong>: <strong>no … nada, no … nunca, no … nadie</strong>. Nếu từ phủ định đứng trước động từ thì bỏ “no”.",
  forms:[["no","no + động từ","<mark>No</mark> hablo francés."],["nada","không gì cả","<mark>No</mark> como <mark>nada</mark>."],["nunca","không bao giờ","<mark>Nunca</mark> bebo café. / <mark>No</mark> bebo café <mark>nunca</mark>."],["nadie","không ai","<mark>No</mark> viene <mark>nadie</mark>."],["tampoco","cũng không","Yo <mark>tampoco</mark>. / <mark>No</mark> como carne <mark>tampoco</mark>."],["ningún / ninguna","không … nào","<mark>No</mark> tengo <mark>ningún</mark> problema."]],
  uses:[["Từ chối lịch sự","<mark>No</mark>, gracias. <mark>No</mark> puedo hoy."],["Phủ định kép tự nhiên","<mark>No</mark> veo <mark>a nadie</mark>. <mark>No</mark> tengo <mark>nada</mark>."]],
  signals:["no","nada","nunca","nadie","tampoco","ningún"],
  speak:5,write:5,
  reg:"Khác tiếng Anh, phủ định kép trong tiếng Tây Ban Nha là bắt buộc: “No tengo nada” là đúng, không nói “Tengo nada”.",
  mistake:["Tengo nada.","No tengo nada. / Nada tengo.","Từ phủ định như nada, nunca, nadie đứng sau động từ thì phải có “no” trước động từ."],
  table:[{head:["Phủ định"],rows:[["algo / nada","Tengo algo → No tengo nada"],["alguien / nadie","Veo a alguien → No veo a nadie"],["siempre / nunca","Siempre llego → Nunca llego / No llego nunca"],["también / tampoco","Yo también → Yo tampoco"]]}]},

 {id:"es-preg-lugar",num:"03",en:"Preposiciones de lugar",vi:"Giới từ chỉ vị trí",short:"en · sobre · debajo de · delante de · detrás de · al lado de · entre",
  core:"Giới từ chỉ vị trí thường đi với <strong>estar</strong>. Nhiều giới từ ghép kết thúc bằng <strong>de</strong> (delante de, cerca de), nên <strong>de + el = del</strong>.",
  forms:[["en","ở, trong, trên (chung)","El libro está <mark>en</mark> la mesa."],["sobre / encima de","ở trên","El gato está <mark>sobre</mark> la silla."],["debajo de / bajo","ở dưới","La pelota está <mark>debajo de</mark> la mesa."],["delante de / detrás de","phía trước / phía sau","El parque está <mark>delante de</mark> la escuela."],["al lado de / cerca de / lejos de","bên cạnh / gần / xa","Vivo <mark>cerca del</mark> centro."],["entre / dentro de / fuera de","giữa / bên trong / bên ngoài","La farmacia está <mark>entre</mark> el banco y el bar."]],
  uses:[["Hỏi và chỉ đường","¿Dónde está el baño? Está <mark>al lado de</mark> la cocina."],["Mô tả căn phòng","Hay una lámpara <mark>encima de</mark> la mesa."]],
  signals:["¿Dónde está?","al lado de","cerca de","entre","delante de"],
  speak:5,write:4,
  reg:"Khi giới từ kết thúc bằng “de” gặp “el”, luôn rút gọn: cerca del parque, lejos del centro.",
  mistake:["cerca de el parque","cerca del parque","de + el luôn rút gọn thành del."],
  table:[{head:["Ví dụ"],rows:[["en","en la mesa"],["encima de","encima del armario"],["debajo de","debajo de la cama"],["al lado de","al lado del banco"],["entre","entre Ana y Luis"]]}]},

 {id:"es-preg-a-de-en",num:"04",en:"A, de, en",vi:"Ba giới từ nền tảng: a, de, en",short:"a = đến / giờ · de = từ / của · en = ở / trong",
  core:"Ba giới từ nền tảng. <strong>A</strong>: chuyển động đến, giờ giấc, tân ngữ chỉ người (a cá nhân). <strong>De</strong>: nguồn gốc, sở hữu, chất liệu. <strong>En</strong>: vị trí, phương tiện, thời gian chung.",
  forms:[["a","đến, hướng tới","Voy <mark>a</mark> la escuela."],["a","giờ giấc","Llego <mark>a</mark> las ocho."],["a cá nhân","trước tân ngữ trực tiếp là người","Veo <mark>a</mark> María. Conozco <mark>a</mark> tu hermano."],["de","từ, nguồn gốc","Soy <mark>de</mark> Vietnam."],["de","của, chất liệu","El libro <mark>de</mark> Ana. Una mesa <mark>de</mark> madera."],["en","ở, trong, bằng (phương tiện)","Vivo <mark>en</mark> Madrid. Voy <mark>en</mark> autobús."]],
  uses:[["Di chuyển","Voy <mark>a</mark> casa. Vengo <mark>de</mark> la oficina."],["Phương tiện","Viajo <mark>en</mark> tren, pero voy <mark>a</mark> pie."]],
  signals:["ir a","venir de","ser de","vivir en","a las + giờ","a + người"],
  speak:5,write:5,
  reg:"A cá nhân chỉ dùng trước người hoặc thú cưng được nêu cụ thể: Veo a María, nhưng Veo la tele (không phải người).",
  mistake:["Voy en la escuela.","Voy a la escuela.","Chuyển động đến một nơi dùng a, không dùng en."],
  table:[{head:["Ví dụ"],rows:[["a (hướng tới)","Voy a Madrid."],["a (giờ)","a las tres"],["de (nguồn gốc)","de Vietnam"],["de (sở hữu)","el libro de Ana"],["en (nơi chốn)","en casa"],["en (phương tiện)","en coche"]]}]},
];

registerRows("preguntas", T);
GRAMMAR.theory.preguntas = { rows: T, first: "es-preg-interrogativos" };
})();
