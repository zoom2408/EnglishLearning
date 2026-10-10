/* es/content/quiz/adjetivos.js: tính từ, sở hữu, chỉ định.
   Mixed exercise types: type the answer (fill, retry allowed) or pick one
   (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "es-adj-concordancia": [
  {
   "kind": "fill",
   "q": "Mi hermana es ___.",
   "hint": "alto",
   "accept": [
    "alta"
   ],
   "level": "A1",
   "expl": "Giống cái số ít: -a."
  },
  {
   "kind": "fill",
   "q": "Los libros son ___.",
   "hint": "interesante",
   "accept": [
    "interesantes"
   ],
   "level": "A1",
   "expl": "Số nhiều: thêm -s."
  },
  {
   "kind": "fill",
   "q": "Ellas son ___.",
   "hint": "español",
   "accept": [
    "españolas"
   ],
   "level": "A1",
   "expl": "Giống cái số nhiều: -as."
  },
  {
   "kind": "fill",
   "q": "Es un chico ___.",
   "hint": "simpático",
   "accept": [
    "simpático"
   ],
   "level": "A1",
   "expl": "Giống đực số ít: -o."
  },
  {
   "kind": "fill",
   "q": "Las chicas son ___.",
   "hint": "trabajador",
   "accept": [
    "trabajadoras"
   ],
   "level": "A1",
   "expl": "-or thêm -a, số nhiều thêm -s."
  },
  {
   "kind": "fill",
   "q": "Mis amigos son ___.",
   "hint": "alto",
   "accept": [
    "altos"
   ],
   "level": "A1",
   "expl": "Giống đực số nhiều: -os."
  },
  {
   "kind": "fill",
   "q": "El examen es ___.",
   "hint": "difícil",
   "accept": [
    "difícil"
   ],
   "level": "A1",
   "expl": "Tính từ đuôi phụ âm không đổi giống."
  },
  {
   "kind": "fill",
   "q": "Los exámenes son ___.",
   "hint": "difícil",
   "accept": [
    "difíciles"
   ],
   "level": "A1",
   "expl": "Số nhiều: thêm -es."
  },
  {
   "kind": "fill",
   "q": "Mi madre es ___.",
   "hint": "vietnamita",
   "accept": [
    "vietnamita"
   ],
   "level": "A1",
   "expl": "Đuôi -a nhưng không đổi giống."
  },
  {
   "kind": "fill",
   "q": "Ana y Pedro son ___.",
   "hint": "simpático",
   "accept": [
    "simpáticos"
   ],
   "level": "A1",
   "expl": "Nam và nữ: dạng giống đực số nhiều."
  },
  {
   "kind": "fill",
   "q": "Tengo unas camisas ___.",
   "hint": "blanco",
   "accept": [
    "blancas"
   ],
   "level": "A1",
   "expl": "Giống cái số nhiều: -as."
  },
  {
   "kind": "fill",
   "q": "Es una mujer ___.",
   "hint": "joven",
   "accept": [
    "joven"
   ],
   "level": "A1",
   "expl": "Đuôi phụ âm không đổi giống."
  },
  {
   "kind": "choose",
   "q": "Tính từ đuôi -e (grande) có đổi giống không?",
   "right": "Không đổi giống",
   "wrong": [
    "Đổi thành -a",
    "Thêm -o",
    "Luôn là số nhiều"
   ],
   "level": "A1",
   "expl": "Grande dùng cho cả giống đực và cái."
  },
  {
   "kind": "choose",
   "q": "Tính từ bổ nghĩa cho cả nam và nữ dùng dạng",
   "right": "giống đực số nhiều",
   "wrong": [
    "giống cái số nhiều",
    "giống đực số ít",
    "giống cái số ít"
   ],
   "level": "A1",
   "expl": "Quy tắc mặc định."
  },
  {
   "kind": "choose",
   "q": "Câu đúng",
   "right": "Las casas son grandes",
   "wrong": [
    "Las casas son grande",
    "Las casas es grandes",
    "Las casas son grandas"
   ],
   "level": "A1",
   "expl": "Số nhiều: grandes."
  }
 ],
 "es-adj-posicion": [
  {
   "kind": "fill",
   "q": "un ___ amigo",
   "hint": "bueno",
   "accept": [
    "buen"
   ],
   "level": "A1",
   "expl": "Bueno rút gọn thành buen trước danh từ giống đực số ít."
  },
  {
   "kind": "fill",
   "q": "un ___ día",
   "hint": "malo",
   "accept": [
    "mal"
   ],
   "level": "A1",
   "expl": "Malo rút gọn thành mal."
  },
  {
   "kind": "fill",
   "q": "un ___ hombre (vĩ đại)",
   "hint": "grande",
   "accept": [
    "gran"
   ],
   "level": "A1",
   "expl": "Grande rút gọn thành gran trước danh từ số ít."
  },
  {
   "kind": "fill",
   "q": "el ___ día",
   "hint": "primero",
   "accept": [
    "primer"
   ],
   "level": "A1",
   "expl": "Primero rút gọn thành primer."
  },
  {
   "kind": "fill",
   "q": "una ___ idea",
   "hint": "bueno",
   "accept": [
    "buena"
   ],
   "level": "A1",
   "expl": "Giống cái không rút gọn."
  },
  {
   "kind": "fill",
   "q": "un coche ___",
   "hint": "rojo",
   "accept": [
    "rojo"
   ],
   "level": "A1",
   "expl": "Màu sắc đứng sau danh từ."
  },
  {
   "kind": "fill",
   "q": "una casa ___",
   "hint": "blanco",
   "accept": [
    "blanca"
   ],
   "level": "A1",
   "expl": "Màu sắc đứng sau và khớp giống."
  },
  {
   "kind": "fill",
   "q": "el ___ piso",
   "hint": "tercero",
   "accept": [
    "tercer"
   ],
   "level": "A1",
   "expl": "Tercero rút gọn thành tercer."
  },
  {
   "kind": "fill",
   "q": "una ___ noticia",
   "hint": "malo",
   "accept": [
    "mala"
   ],
   "level": "A1",
   "expl": "Giống cái không rút gọn."
  },
  {
   "kind": "choose",
   "q": "Số đếm (dos, tres…) đứng",
   "right": "Trước danh từ",
   "wrong": [
    "Sau danh từ",
    "Cuối câu",
    "Tùy ý"
   ],
   "level": "A1",
   "expl": "Dos libros, tres casas."
  },
  {
   "kind": "choose",
   "q": "Màu sắc thường đứng",
   "right": "Sau danh từ",
   "wrong": [
    "Trước danh từ",
    "Cuối câu",
    "Tách riêng"
   ],
   "level": "A1",
   "expl": "Un coche rojo."
  },
  {
   "kind": "choose",
   "q": "Câu đúng",
   "right": "un buen libro",
   "wrong": [
    "un bueno libro",
    "un libro buen",
    "una buen casa"
   ],
   "level": "A1",
   "expl": "Buen trước danh từ đực số ít."
  },
  {
   "kind": "choose",
   "q": "Câu nào sai?",
   "right": "una mal noticia",
   "wrong": [
    "una mala noticia",
    "un mal día",
    "un buen amigo"
   ],
   "level": "A2",
   "expl": "Giống cái dùng mala nguyên dạng."
  },
  {
   "kind": "choose",
   "q": "“una gran casa” khác “una casa grande” ở điểm nào?",
   "right": "gran: ấn tượng, vĩ đại · grande: to về kích thước",
   "wrong": [
    "Cùng nghĩa hoàn toàn",
    "gran: nhỏ",
    "grande: sai ngữ pháp"
   ],
   "level": "B1",
   "expl": "Vị trí tính từ đôi khi đổi nghĩa."
  },
  {
   "kind": "choose",
   "q": "“primero” rút gọn khi nào?",
   "right": "Trước danh từ giống đực số ít",
   "wrong": [
    "Sau danh từ",
    "Trước danh từ giống cái",
    "Luôn rút gọn"
   ],
   "level": "A1",
   "expl": "El primer día, la primera vez."
  }
 ],
 "es-adj-posesivos": [
  {
   "kind": "fill",
   "q": "___ madre trabaja.",
   "hint": "của tôi",
   "accept": [
    "Mi"
   ],
   "level": "A1",
   "expl": "Mi + danh từ số ít."
  },
  {
   "kind": "fill",
   "q": "___ padres viven aquí.",
   "hint": "của tôi, số nhiều",
   "accept": [
    "Mis"
   ],
   "level": "A1",
   "expl": "Mis + danh từ số nhiều."
  },
  {
   "kind": "fill",
   "q": "¿Dónde está ___ libro?",
   "hint": "của bạn",
   "accept": [
    "tu"
   ],
   "level": "A1",
   "expl": "Tu + danh từ số ít."
  },
  {
   "kind": "fill",
   "q": "___ amigos son simpáticos.",
   "hint": "của bạn, số nhiều",
   "accept": [
    "Tus"
   ],
   "level": "A1",
   "expl": "Tus + danh từ số nhiều."
  },
  {
   "kind": "fill",
   "q": "Ana y ___ hermano viven aquí.",
   "hint": "của cô ấy",
   "accept": [
    "su"
   ],
   "level": "A1",
   "expl": "Su: của anh ấy, cô ấy, họ."
  },
  {
   "kind": "fill",
   "q": "___ casa es grande.",
   "hint": "của chúng tôi, giống cái",
   "accept": [
    "Nuestra"
   ],
   "level": "A1",
   "expl": "Nuestra + danh từ cái số ít."
  },
  {
   "kind": "fill",
   "q": "___ hijos son altos.",
   "hint": "của chúng tôi, số nhiều đực",
   "accept": [
    "Nuestros"
   ],
   "level": "A1",
   "expl": "Nuestros + danh từ đực số nhiều."
  },
  {
   "kind": "fill",
   "q": "¿Dónde están ___ llaves?",
   "hint": "của các bạn (vosotros), cái số nhiều",
   "accept": [
    "vuestras"
   ],
   "level": "A1",
   "expl": "Vuestras + danh từ cái số nhiều."
  },
  {
   "kind": "fill",
   "q": "Pedro y ___ padres.",
   "hint": "của anh ấy, số nhiều",
   "accept": [
    "sus"
   ],
   "level": "A1",
   "expl": "Sus + danh từ số nhiều."
  },
  {
   "kind": "fill",
   "q": "___ coche es rojo.",
   "hint": "của chúng tôi, giống đực",
   "accept": [
    "Nuestro"
   ],
   "level": "A1",
   "expl": "Nuestro + danh từ đực số ít."
  },
  {
   "kind": "choose",
   "q": "“su casa” có thể là nhà của",
   "right": "anh ấy, cô ấy, ông/bà hoặc họ",
   "wrong": [
    "chỉ của tôi",
    "chỉ của bạn",
    "chỉ của chúng tôi"
   ],
   "level": "A1",
   "expl": "Su khá mơ hồ."
  },
  {
   "kind": "choose",
   "q": "Vì sao “mi hermanos” sai?",
   "right": "Hermanos số nhiều nên phải dùng mis",
   "wrong": [
    "Hermanos giống cái",
    "Mi chỉ dùng cho nữ",
    "Phải dùng tu"
   ],
   "level": "A1",
   "expl": "Tính từ sở hữu khớp số với vật sở hữu."
  },
  {
   "kind": "choose",
   "q": "Cách nói rõ ràng thay cho su casa",
   "right": "la casa de ella",
   "wrong": [
    "la casa ella",
    "ella casa",
    "su ella casa"
   ],
   "level": "A1",
   "expl": "Dùng de + người."
  },
  {
   "kind": "choose",
   "q": "Tính từ sở hữu hòa hợp với",
   "right": "vật được sở hữu",
   "wrong": [
    "người sở hữu",
    "động từ",
    "giới tính người nói"
   ],
   "level": "A1",
   "expl": "Mi casa dù người nói là nam hay nữ."
  },
  {
   "kind": "choose",
   "q": "“Của các bạn (vosotros)” là",
   "right": "vuestro",
   "wrong": [
    "nuestro",
    "su",
    "tuyo"
   ],
   "level": "A1",
   "expl": "Vuestro/a/os/as."
  }
 ],
 "es-adj-demostrativos": [
  {
   "kind": "fill",
   "q": "___ libro",
   "hint": "gần, đực số ít",
   "accept": [
    "este"
   ],
   "level": "A1",
   "expl": "Este: gần, giống đực."
  },
  {
   "kind": "fill",
   "q": "___ casa",
   "hint": "gần, cái số ít",
   "accept": [
    "esta"
   ],
   "level": "A1",
   "expl": "Esta: gần, giống cái."
  },
  {
   "kind": "fill",
   "q": "___ chicos",
   "hint": "vừa, đực số nhiều",
   "accept": [
    "esos"
   ],
   "level": "A1",
   "expl": "Esos: vừa, đực số nhiều."
  },
  {
   "kind": "fill",
   "q": "___ mesa",
   "hint": "vừa, cái số ít",
   "accept": [
    "esa"
   ],
   "level": "A1",
   "expl": "Esa: vừa, giống cái."
  },
  {
   "kind": "fill",
   "q": "___ edificio",
   "hint": "xa, đực số ít",
   "accept": [
    "aquel"
   ],
   "level": "A1",
   "expl": "Aquel: xa, giống đực."
  },
  {
   "kind": "fill",
   "q": "___ montañas",
   "hint": "xa, cái số nhiều",
   "accept": [
    "aquellas"
   ],
   "level": "A1",
   "expl": "Aquellas: xa, cái số nhiều."
  },
  {
   "kind": "fill",
   "q": "___ libros",
   "hint": "gần, đực số nhiều",
   "accept": [
    "estos"
   ],
   "level": "A1",
   "expl": "Estos: gần, đực số nhiều."
  },
  {
   "kind": "fill",
   "q": "___ chicas",
   "hint": "gần, cái số nhiều",
   "accept": [
    "estas"
   ],
   "level": "A1",
   "expl": "Estas: gần, cái số nhiều."
  },
  {
   "kind": "fill",
   "q": "¿Qué es ___?",
   "hint": "cái này, trung tính",
   "accept": [
    "esto"
   ],
   "level": "A1",
   "expl": "Esto: trung tính, gần."
  },
  {
   "kind": "fill",
   "q": "¿Cuánto cuesta ___?",
   "hint": "cái đó, trung tính",
   "accept": [
    "eso"
   ],
   "level": "A1",
   "expl": "Eso: trung tính, vừa."
  },
  {
   "kind": "fill",
   "q": "El libro está ___.",
   "hint": "ở đây",
   "accept": [
    "aquí"
   ],
   "level": "A1",
   "expl": "Aquí: ở đây."
  },
  {
   "kind": "fill",
   "q": "La tienda está ___.",
   "hint": "ở kia, xa",
   "accept": [
    "allí"
   ],
   "level": "A1",
   "expl": "Allí: ở xa cả hai."
  },
  {
   "kind": "choose",
   "q": "“Este” dùng cho vật",
   "right": "gần người nói",
   "wrong": [
    "xa người nói",
    "gần người nghe",
    "không xác định"
   ],
   "level": "A1",
   "expl": "Este: gần tôi."
  },
  {
   "kind": "choose",
   "q": "Vì sao “esta libro” sai?",
   "right": "Libro giống đực nên phải là este",
   "wrong": [
    "Libro số nhiều",
    "Esta chỉ dùng cho người",
    "Phải dùng aquel"
   ],
   "level": "A1",
   "expl": "Hòa hợp giống."
  },
  {
   "kind": "choose",
   "q": "Esto, eso, aquello dùng khi",
   "right": "chưa biết hoặc không nêu tên vật",
   "wrong": [
    "Vật là giống cái",
    "Vật là số nhiều",
    "Vật là con người"
   ],
   "level": "A1",
   "expl": "Dạng trung tính không đi với danh từ."
  }
 ]
};

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Câu ngữ cảnh, gõ đáp án đúng"},
 choose:{name:"Chọn đáp án",desc:"Chọn một trong bốn lựa chọn"},
};
const POOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => {
 if (it.kind === "fill") POOL.push(Object.assign(inQ("fill", fmt(it.q.replace(/ \(.+?\)/,"")), `Gợi ý: <b>${esc(it.hint)}</b>. Gõ phần điền vào chỗ trống.`, it.accept, ref, it.expl), {retry:true, level:it.level}));
 else POOL.push(Object.assign(mcQ("choose", fmt(it.q), "Chọn đáp án đúng.", it.right, it.wrong, ref, it.expl), {retry:true, level:it.level}));
}));

const RUSH=[["alto · alta · altos", ["es-adj-concordancia"]], ["grande · fácil", ["es-adj-concordancia"]], ["un buen amigo · un mal día", ["es-adj-posicion"]], ["un coche rojo", ["es-adj-posicion"]], ["mi · tu · su", ["es-adj-posesivos"]], ["nuestro · vuestras", ["es-adj-posesivos"]], ["este · ese · aquel", ["es-adj-demostrativos"]], ["esto · eso", ["es-adj-demostrativos"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["adjetivos"] = { pool: POOL, types: TYPES, game: {title:"¿Qué adjetivo?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng bài",prompt:"Dấu hiệu này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"adjRushBest"} };
})();
