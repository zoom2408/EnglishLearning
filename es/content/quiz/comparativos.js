/* es/content/quiz/comparativos.js: so sánh, so sánh nhất, tương lai gần.
   Mixed exercise types: type the answer (fill, retry allowed) or pick one
   (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "es-comp-comparar": [
  {
   "kind": "fill",
   "q": "Ana es ___ alta que Luis.",
   "hint": "hơn",
   "accept": [
    "más"
   ],
   "level": "A2",
   "expl": "Hơn: más."
  },
  {
   "kind": "fill",
   "q": "Este libro es ___ caro que ese.",
   "hint": "kém",
   "accept": [
    "menos"
   ],
   "level": "A2",
   "expl": "Kém: menos."
  },
  {
   "kind": "fill",
   "q": "Soy tan alto ___ tú.",
   "hint": "bằng",
   "accept": [
    "como"
   ],
   "level": "A2",
   "expl": "Tan … como."
  },
  {
   "kind": "fill",
   "q": "Tengo tantos libros ___ tú.",
   "hint": "bằng",
   "accept": [
    "como"
   ],
   "level": "A2",
   "expl": "Tanto … como."
  },
  {
   "kind": "fill",
   "q": "Tengo ___ libros como tú.",
   "hint": "bằng, đực số nhiều",
   "accept": [
    "tantos"
   ],
   "level": "A2",
   "expl": "Tantos + danh từ đực số nhiều."
  },
  {
   "kind": "fill",
   "q": "Hay más ___ veinte personas.",
   "hint": "trước số",
   "accept": [
    "de"
   ],
   "level": "A2",
   "expl": "Más de + số."
  },
  {
   "kind": "fill",
   "q": "Soy más alto ___ tú.",
   "hint": "so sánh hai đối tượng",
   "accept": [
    "que"
   ],
   "level": "A2",
   "expl": "Más + tính từ + que."
  },
  {
   "kind": "fill",
   "q": "Ella tiene ___ amigas como yo.",
   "hint": "bằng, cái số nhiều",
   "accept": [
    "tantas"
   ],
   "level": "A2",
   "expl": "Tantas + danh từ cái số nhiều."
  },
  {
   "kind": "fill",
   "q": "Trabajo ___ que mi hermano.",
   "hint": "hơn",
   "accept": [
    "más"
   ],
   "level": "A2",
   "expl": "Más que."
  },
  {
   "kind": "fill",
   "q": "Mi casa es tan ___ como la tuya.",
   "hint": "grande",
   "accept": [
    "grande"
   ],
   "level": "A2",
   "expl": "Tan + tính từ nguyên dạng."
  },
  {
   "kind": "fill",
   "q": "Es tan simpática ___ su madre.",
   "hint": "bằng",
   "accept": [
    "como"
   ],
   "level": "A2",
   "expl": "Tan … como."
  },
  {
   "kind": "fill",
   "q": "Hay menos ___ diez alumnos.",
   "hint": "trước số",
   "accept": [
    "de"
   ],
   "level": "A2",
   "expl": "Menos de + số."
  },
  {
   "kind": "choose",
   "q": "Khi nào dùng “más de”?",
   "right": "Trước số lượng",
   "wrong": [
    "Khi so sánh hai người",
    "Trước động từ",
    "Cuối câu"
   ],
   "level": "A2",
   "expl": "Más de diez."
  },
  {
   "kind": "choose",
   "q": "Câu đúng",
   "right": "Ella es más alta que yo",
   "wrong": [
    "Ella es más alta de yo",
    "Ella es más alta como yo",
    "Ella es tan alta que yo"
   ],
   "level": "A2",
   "expl": "Más + adj + que."
  },
  {
   "kind": "choose",
   "q": "Trước danh từ để so sánh bằng, dùng",
   "right": "tanto / tanta / tantos / tantas",
   "wrong": [
    "tan",
    "tanto bất biến",
    "tantos luôn"
   ],
   "level": "A2",
   "expl": "Phải khớp giống và số."
  }
 ],
 "es-comp-irregulares": [
  {
   "kind": "fill",
   "q": "Este restaurante es ___ que aquel.",
   "hint": "tốt hơn",
   "accept": [
    "mejor"
   ],
   "level": "A2",
   "expl": "Bueno → mejor."
  },
  {
   "kind": "fill",
   "q": "Hoy hace ___ tiempo que ayer.",
   "hint": "tệ hơn",
   "accept": [
    "peor"
   ],
   "level": "A2",
   "expl": "Malo → peor."
  },
  {
   "kind": "fill",
   "q": "Mi hermana es ___ que yo.",
   "hint": "lớn tuổi hơn",
   "accept": [
    "mayor"
   ],
   "level": "A2",
   "expl": "Grande (tuổi) → mayor."
  },
  {
   "kind": "fill",
   "q": "Mi hermano es ___ que yo.",
   "hint": "nhỏ tuổi hơn",
   "accept": [
    "menor"
   ],
   "level": "A2",
   "expl": "Pequeño (tuổi) → menor."
  },
  {
   "kind": "fill",
   "q": "Hablo ___ que antes.",
   "hint": "tốt hơn (trạng từ)",
   "accept": [
    "mejor"
   ],
   "level": "A2",
   "expl": "Bien → mejor."
  },
  {
   "kind": "fill",
   "q": "Canta ___ que ella.",
   "hint": "tệ hơn (trạng từ)",
   "accept": [
    "peor"
   ],
   "level": "A2",
   "expl": "Mal → peor."
  },
  {
   "kind": "fill",
   "q": "Estas películas son ___ que esas.",
   "hint": "tốt hơn, số nhiều",
   "accept": [
    "mejores"
   ],
   "level": "A2",
   "expl": "Số nhiều: mejores."
  },
  {
   "kind": "fill",
   "q": "Mis hijos son ___ que tus hijos.",
   "hint": "nhỏ tuổi hơn, số nhiều",
   "accept": [
    "menores"
   ],
   "level": "A2",
   "expl": "Số nhiều: menores."
  },
  {
   "kind": "fill",
   "q": "Mis primas son ___ que yo.",
   "hint": "lớn tuổi hơn, số nhiều",
   "accept": [
    "mayores"
   ],
   "level": "A2",
   "expl": "Số nhiều: mayores."
  },
  {
   "kind": "fill",
   "q": "Estas ideas son ___ que aquellas.",
   "hint": "tệ hơn, số nhiều",
   "accept": [
    "peores"
   ],
   "level": "A2",
   "expl": "Số nhiều: peores."
  },
  {
   "kind": "choose",
   "q": "Vì sao không nói “más bueno”?",
   "right": "Bueno có dạng riêng là mejor",
   "wrong": [
    "Bueno là danh từ",
    "Más chỉ dùng với số",
    "Là lỗi chính tả"
   ],
   "level": "A2",
   "expl": "Mejor, peor, mayor, menor."
  },
  {
   "kind": "choose",
   "q": "“Mayor” dùng cho",
   "right": "tuổi tác",
   "wrong": [
    "kích thước vật",
    "màu sắc",
    "khoảng cách"
   ],
   "level": "A2",
   "expl": "Mi hermano mayor."
  },
  {
   "kind": "choose",
   "q": "“Mi casa es ___ que la tuya” (to hơn)",
   "right": "más grande",
   "wrong": [
    "mayor",
    "más mayor",
    "tan mayor"
   ],
   "level": "A2",
   "expl": "Kích thước dùng más grande."
  },
  {
   "kind": "choose",
   "q": "Câu nào sai?",
   "right": "Es más bueno que tú",
   "wrong": [
    "Es mejor que tú",
    "Es más alto que tú",
    "Es peor que tú"
   ],
   "level": "A2",
   "expl": "Bueno → mejor."
  },
  {
   "kind": "choose",
   "q": "“Menor” nghĩa là",
   "right": "nhỏ tuổi hơn",
   "wrong": [
    "to hơn",
    "tệ hơn",
    "tốt hơn"
   ],
   "level": "A2",
   "expl": "Menor = younger."
  }
 ],
 "es-comp-superlativo": [
  {
   "kind": "fill",
   "q": "Es el ___ alto de la clase.",
   "hint": "nhất",
   "accept": [
    "más"
   ],
   "level": "B1",
   "expl": "El más + adj."
  },
  {
   "kind": "fill",
   "q": "Es la ___ cara de la tienda.",
   "hint": "kém nhất",
   "accept": [
    "menos"
   ],
   "level": "B1",
   "expl": "La menos + adj."
  },
  {
   "kind": "fill",
   "q": "Madrid es la ciudad más grande ___ España.",
   "hint": "phạm vi",
   "accept": [
    "de"
   ],
   "level": "B1",
   "expl": "Superlativo + de."
  },
  {
   "kind": "fill",
   "q": "Es el ___ amigo del mundo.",
   "hint": "tốt nhất",
   "accept": [
    "mejor"
   ],
   "level": "B1",
   "expl": "El mejor."
  },
  {
   "kind": "fill",
   "q": "Es la ___ idea.",
   "hint": "tệ nhất",
   "accept": [
    "peor"
   ],
   "level": "B1",
   "expl": "La peor."
  },
  {
   "kind": "fill",
   "q": "La comida está ___.",
   "hint": "rất ngon: buena + ísima",
   "accept": [
    "buenísima"
   ],
   "level": "B1",
   "expl": "Bỏ nguyên âm cuối + -ísima."
  },
  {
   "kind": "fill",
   "q": "El examen es ___.",
   "hint": "rất dễ: fácil + ísimo",
   "accept": [
    "facilísimo"
   ],
   "level": "B1",
   "expl": "Fácil + ísimo = facilísimo."
  },
  {
   "kind": "fill",
   "q": "Es ___ simpático.",
   "hint": "rất",
   "accept": [
    "muy"
   ],
   "level": "A2",
   "expl": "Muy + tính từ."
  },
  {
   "kind": "fill",
   "q": "Esta película es ___.",
   "hint": "rất hay: interesante + ísima",
   "accept": [
    "interesantísima"
   ],
   "level": "B1",
   "expl": "Bỏ -e rồi thêm -ísima."
  },
  {
   "kind": "fill",
   "q": "Son los ___ rápidos del equipo.",
   "hint": "nhất",
   "accept": [
    "más"
   ],
   "level": "B1",
   "expl": "Los más + adj."
  },
  {
   "kind": "fill",
   "q": "Es la mujer más alta ___ la clase.",
   "hint": "phạm vi",
   "accept": [
    "de"
   ],
   "level": "B1",
   "expl": "Superlativo + de."
  },
  {
   "kind": "fill",
   "q": "El libro es ___.",
   "hint": "rất đắt: caro + ísimo",
   "accept": [
    "carísimo"
   ],
   "level": "B1",
   "expl": "Caro + ísimo = carísimo."
  },
  {
   "kind": "choose",
   "q": "Sau superlativo, giới từ chỉ phạm vi là",
   "right": "de",
   "wrong": [
    "en",
    "que",
    "como"
   ],
   "level": "B1",
   "expl": "El más alto de la clase."
  },
  {
   "kind": "choose",
   "q": "-ísimo nghĩa là",
   "right": "rất, ở mức cao nhất",
   "wrong": [
    "hơi",
    "không",
    "hơn một chút"
   ],
   "level": "B1",
   "expl": "Grandísimo = rất lớn."
  },
  {
   "kind": "choose",
   "q": "Cách nói chuẩn",
   "right": "el más alto de la clase",
   "wrong": [
    "el más alto que la clase",
    "el alto más de la clase",
    "más el alto de la clase"
   ],
   "level": "B1",
   "expl": "El + más + adj + de."
  }
 ],
 "es-comp-ir-a": [
  {
   "kind": "fill",
   "q": "Yo ___ a estudiar.",
   "hint": "ir, ngôi yo",
   "accept": [
    "voy"
   ],
   "level": "A2",
   "expl": "Ir: voy."
  },
  {
   "kind": "fill",
   "q": "Tú ___ a venir.",
   "hint": "ir, ngôi tú",
   "accept": [
    "vas"
   ],
   "level": "A2",
   "expl": "Ir: vas."
  },
  {
   "kind": "fill",
   "q": "Ella ___ a viajar.",
   "hint": "ir, ngôi ella",
   "accept": [
    "va"
   ],
   "level": "A2",
   "expl": "Ir: va."
  },
  {
   "kind": "fill",
   "q": "Nosotros ___ a comer fuera.",
   "hint": "ir, ngôi nosotros",
   "accept": [
    "vamos"
   ],
   "level": "A2",
   "expl": "Ir: vamos."
  },
  {
   "kind": "fill",
   "q": "Vosotros ___ a ver la película.",
   "hint": "ir, ngôi vosotros",
   "accept": [
    "vais"
   ],
   "level": "A2",
   "expl": "Ir: vais."
  },
  {
   "kind": "fill",
   "q": "Ellos ___ a llegar tarde.",
   "hint": "ir, ngôi ellos",
   "accept": [
    "van"
   ],
   "level": "A2",
   "expl": "Ir: van."
  },
  {
   "kind": "fill",
   "q": "Voy ___ estudiar mañana.",
   "hint": "giới từ",
   "accept": [
    "a"
   ],
   "level": "A2",
   "expl": "Ir a + inf."
  },
  {
   "kind": "fill",
   "q": "Mañana ___ a llover.",
   "hint": "ir, ngôi ella",
   "accept": [
    "va"
   ],
   "level": "A2",
   "expl": "Ir: va."
  },
  {
   "kind": "fill",
   "q": "¿Qué ___ a hacer tú?",
   "hint": "ir, ngôi tú",
   "accept": [
    "vas"
   ],
   "level": "A2",
   "expl": "Ir: vas."
  },
  {
   "kind": "fill",
   "q": "Este verano voy a ___ a mi abuela.",
   "hint": "visitar",
   "accept": [
    "visitar"
   ],
   "level": "A2",
   "expl": "Ir a + nguyên mẫu."
  },
  {
   "kind": "fill",
   "q": "Mira esas nubes, ___ a llover.",
   "hint": "ir, ngôi ella",
   "accept": [
    "va"
   ],
   "level": "A2",
   "expl": "Việc sắp xảy ra."
  },
  {
   "kind": "fill",
   "q": "Vamos ___ bailar.",
   "hint": "giới từ",
   "accept": [
    "a"
   ],
   "level": "A2",
   "expl": "Vamos a + inf."
  },
  {
   "kind": "choose",
   "q": "Ir a + nguyên mẫu diễn tả",
   "right": "dự định hoặc việc sắp xảy ra",
   "wrong": [
    "thói quen",
    "quá khứ",
    "mệnh lệnh"
   ],
   "level": "A2",
   "expl": "Tương lai gần."
  },
  {
   "kind": "choose",
   "q": "Câu đúng",
   "right": "Voy a estudiar",
   "wrong": [
    "Voy estudiar",
    "Voy de estudiar",
    "Voy en estudiar"
   ],
   "level": "A2",
   "expl": "Phải có a."
  },
  {
   "kind": "choose",
   "q": "“Vamos a + inf.” còn có thể nghĩa",
   "right": "Chúng ta hãy …",
   "wrong": [
    "Chúng tôi đã …",
    "Chúng tôi không …",
    "Họ sẽ …"
   ],
   "level": "A2",
   "expl": "Gợi ý cùng làm."
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

const RUSH=[["más … que · menos … que", ["es-comp-comparar"]], ["tan … como · tanto … como", ["es-comp-comparar"]], ["mejor · peor", ["es-comp-irregulares"]], ["mayor · menor", ["es-comp-irregulares"]], ["el más … de", ["es-comp-superlativo"]], ["-ísimo", ["es-comp-superlativo"]], ["voy a + inf.", ["es-comp-ir-a"]], ["vamos a + inf.", ["es-comp-ir-a"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["comparativos"] = { pool: POOL, types: TYPES, game: {title:"¿Qué comparación?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng bài",prompt:"Dấu hiệu này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"comRushBest"} };
})();
