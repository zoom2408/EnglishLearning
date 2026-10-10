/* es/content/theory/imperativo.js
   Imperativo (afirmativo, negativo, pronombres) y oraciones de relativo.
   Uses the "table" diagram mode. */
(() => {
const T = [
 {id:"es-imp-afirmativo",num:"01",en:"Imperativo afirmativo",vi:"Mệnh lệnh khẳng định",short:"tú: habla · usted: hable · vosotros: hablad",
  core:"Mệnh lệnh khẳng định: <strong>tú</strong> dùng dạng <strong>él của presente</strong> (habla, come, escribe). <strong>Usted / ustedes</strong> dùng <strong>subjuntivo</strong> (hable, hablen). <strong>Vosotros</strong>: bỏ <strong>-r</strong> thêm <strong>-d</strong> (hablad). <strong>Nosotros</strong>: <strong>hablemos</strong> hoặc <strong>vamos a hablar</strong>.",
  forms:[["tú","= ngôi él của presente","<mark>Habla</mark> más despacio. <mark>Come</mark> algo."],["usted","= subjuntivo ngôi usted","<mark>Hable</mark> más despacio. <mark>Coma</mark> algo."],["ustedes","= subjuntivo ngôi ustedes","<mark>Hablen</mark> más alto."],["vosotros","nguyên mẫu bỏ -r + d","<mark>Hablad</mark>, <mark>comed</mark>, <mark>escribid</mark>."],["nosotros","subjuntivo ngôi nosotros","<mark>Hablemos</mark>. <mark>Vamos a comer</mark>."],["tú bất quy tắc","di, haz, ve, pon, sal, sé, ten, ven","<mark>Di</mark> la verdad. <mark>Haz</mark> la tarea. <mark>Ven</mark> aquí."]],
  uses:[["Ra lệnh, nhờ vả","<mark>Abre</mark> la ventana, por favor. <mark>Pasa</mark>."],["Hướng dẫn, chỉ đường","<mark>Gira</mark> a la derecha. <mark>Sigue</mark> recto."],["Công thức nấu ăn","<mark>Corta</mark> la cebolla y <mark>añade</mark> sal."]],
  signals:["por favor","¡ven!","¡di!","¡haz!","abre","sigue recto"],
  speak:5,write:5,
  reg:"Tú bất quy tắc là 8 từ cần thuộc: di, haz, ve, pon, sal, sé, ten, ven. Ve vừa là ir vừa là ver (ve = đi / hãy nhìn).",
  mistake:["Hace la tarea.","Haz la tarea.","Hacer có mệnh lệnh bất quy tắc là haz."],
  table:[{head:["tú","usted","vosotros"],rows:[["hablar","habla","hable","hablad"],["comer","come","coma","comed"],["escribir","escribe","escriba","escribid"],["hacer","haz","haga","haced"],["decir","di","diga","decid"],["venir","ven","venga","venid"]]}]},

 {id:"es-imp-negativo",num:"02",en:"Imperativo negativo",vi:"Mệnh lệnh phủ định và đại từ",short:"no + subjuntivo · dámelo · no me lo des",
  core:"Mệnh lệnh <strong>phủ định</strong> luôn là <strong>no + subjuntivo</strong> cho mọi ngôi (no hables, no comas, no hagas). Về đại từ: <strong>khẳng định gắn vào cuối động từ</strong> (dámelo, siéntate); <strong>phủ định đứng trước</strong> (no me lo des, no te sientes).",
  forms:[["tú phủ định","no + subjuntivo tú","<mark>No hables</mark> tan alto. <mark>No comas</mark> eso."],["usted phủ định","no + subjuntivo usted","<mark>No hable</mark> tan alto."],["vosotros phủ định","no + subjuntivo vosotros","<mark>No habléis</mark> aquí."],["Khẳng định + đại từ","gắn vào cuối, thêm dấu nếu cần","<mark>Dámelo</mark>. <mark>Siéntate</mark>. <mark>Dime</mark>."],["Phủ định + đại từ","no + đại từ + động từ","<mark>No me lo des</mark>. <mark>No te sientes</mark>."],["Bất quy tắc","no hagas, no digas, no vayas, no seas","<mark>No hagas</mark> ruido. <mark>No seas</mark> tonto."]],
  uses:[["Cấm đoán","<mark>No fumes</mark> aquí. <mark>No toques</mark> eso."],["Khuyên can","<mark>No te preocupes</mark>. <mark>No te levantes</mark> tarde."],["Nhờ vả có đại từ","<mark>Dímelo</mark>. <mark>Cómpramelo</mark>, por favor."]],
  signals:["no + subjuntivo","dámelo","siéntate","no me lo des","no te preocupes"],
  speak:5,write:5,
  reg:"Khi gắn đại từ vào mệnh lệnh khẳng định, thêm dấu để giữ trọng âm: da → dámelo, siente → siéntate.",
  mistake:["No habla tan alto.","No hables tan alto.","Mệnh lệnh phủ định dùng subjuntivo, không dùng dạng khẳng định."],
  table:[{head:["Khẳng định","Phủ định"],rows:[["hablar (tú)","habla","no hables"],["comer (tú)","come","no comas"],["hacer (tú)","haz","no hagas"],["dar + me + lo","dámelo","no me lo des"],["sentarse (tú)","siéntate","no te sientes"]]}]},

 {id:"es-imp-rel-que",num:"03",en:"Pronombres relativos",vi:"Mệnh đề quan hệ",short:"que · quien · el que · donde · lo que · cuyo",
  core:"Mệnh đề quan hệ <strong>bổ nghĩa cho danh từ</strong>. <strong>Que</strong> dùng cho người và vật (phổ biến nhất). <strong>Quien</strong> dùng cho người, thường sau giới từ. <strong>Donde</strong> chỉ nơi chốn. <strong>Lo que</strong> thay cho một ý. <strong>Cuyo</strong> chỉ sở hữu.",
  forms:[["que","người, vật (chủ ngữ hoặc tân ngữ)","El libro <mark>que</mark> leo es bueno. La chica <mark>que</mark> habla es mi amiga."],["quien / quienes","người (sau giới từ, hoặc mệnh đề mở rộng)","La persona con <mark>quien</mark> hablo es mi jefe."],["el que / la que / los que","người, vật (sau giới từ)","La casa en <mark>la que</mark> vivo es vieja."],["donde","nơi chốn","La ciudad <mark>donde</mark> nací es pequeña."],["lo que","điều mà (cả một ý)","<mark>Lo que</mark> dices es verdad."],["cuyo / cuya","của người, vật mà","El chico <mark>cuyo</mark> padre es médico."]],
  uses:[["Xác định người, vật","El hombre <mark>que</mark> vive aquí es profesor."],["Nối hai câu","Tengo un amigo. Mi amigo vive en Madrid. → Tengo un amigo <mark>que</mark> vive en Madrid."]],
  signals:["que","quien","el que","donde","lo que","cuyo"],
  speak:4,write:5,
  reg:"Sau giới từ, tiếng Tây Ban Nha cần “el que / la que” hoặc “quien” (cho người), không dùng “que” trần: la casa en la que vivo.",
  mistake:["La casa en que vivo.","La casa en la que vivo.","Sau giới từ, đại từ quan hệ cần mạo từ: en la que."],
  table:[{head:["Dùng cho","Ví dụ"],rows:[["que","người, vật","el libro que leo"],["quien","người","con quien hablo"],["donde","nơi chốn","donde vivo"],["lo que","một ý","lo que dices"],["cuyo","sở hữu","cuyo padre"]]}]},

 {id:"es-imp-rel-sub",num:"04",en:"Relativas con subjuntivo",vi:"Mệnh đề quan hệ với subjuntivo",short:"Busco un libro que sea… · No hay nadie que…",
  core:"Khi người hoặc vật được nhắc <strong>không tồn tại, chưa biết hoặc đang tìm</strong>, động từ trong mệnh đề quan hệ dùng <strong>subjuntivo</strong>. Khi đã <strong>biết chắc</strong>, dùng <strong>indicativo</strong>. Câu có “nadie, nada, ningún” hoặc “no hay” thường cần subjuntivo.",
  forms:[["Tìm kiếm, chưa biết","subjuntivo","<mark>Busco</mark> un libro que <mark>sea</mark> interesante."],["Đã biết chắc","indicativo","<mark>Tengo</mark> un libro que <mark>es</mark> interesante."],["Không tồn tại","subjuntivo","<mark>No hay nadie</mark> que <mark>sepa</mark> la respuesta."],["Có tồn tại","indicativo","<mark>Hay alguien</mark> que <mark>sabe</mark> la respuesta."],["Muốn có","subjuntivo","<mark>Necesito</mark> un piso que <mark>tenga</mark> terraza."],["Câu hỏi","subjuntivo (chưa biết)","¿<mark>Conoces</mark> a alguien que <mark>hable</mark> japonés?"]],
  uses:[["Nói về điều mong muốn","<mark>Quiero</mark> un coche que <mark>sea</mark> barato."],["Nói về điều không có","<mark>No conozco a nadie</mark> que <mark>viva</mark> allí."]],
  signals:["busco un… que","necesito un… que","no hay nadie que","¿conoces a alguien que…?"],
  speak:3,write:5,
  reg:"Mẹo: nếu bạn có thể chỉ ra vật cụ thể → indicativo. Nếu vật chưa biết, đang tìm hoặc không tồn tại → subjuntivo.",
  mistake:["Busco un libro que es interesante.","Busco un libro que sea interesante.","Vật đang tìm chưa xác định nên cần subjuntivo."],
  table:[{head:["Indicativo (biết)","Subjuntivo (chưa biết / không có)"],rows:[["Tìm","Tengo un libro que es bueno.","Busco un libro que sea bueno."],["Có / không có","Hay alguien que habla inglés.","No hay nadie que hable inglés."],["Hỏi","Conozco a alguien que vive aquí.","¿Conoces a alguien que viva aquí?"]]}]},
];

registerRows("imperativo", T);
GRAMMAR.theory.imperativo = { rows: T, first: "es-imp-afirmativo" };
})();
