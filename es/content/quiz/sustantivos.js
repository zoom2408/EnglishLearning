/* es/content/quiz/sustantivos.js: giống, số nhiều, mạo từ.
   Mixed exercise types: type the answer (fill, retry allowed) or pick one
   (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "es-sus-genero": [
  {
   "kind": "fill",
   "q": "___ casa",
   "hint": "el hoặc la",
   "accept": [
    "la"
   ],
   "level": "A1",
   "expl": "Casa tận cùng -a, giống cái."
  },
  {
   "kind": "fill",
   "q": "___ libro",
   "hint": "el hoặc la",
   "accept": [
    "el"
   ],
   "level": "A1",
   "expl": "Libro tận cùng -o, giống đực."
  },
  {
   "kind": "fill",
   "q": "___ problema",
   "hint": "el hoặc la",
   "accept": [
    "el"
   ],
   "level": "A2",
   "expl": "Ngoại lệ: đuôi -ma gốc Hy Lạp là giống đực."
  },
  {
   "kind": "fill",
   "q": "___ día",
   "hint": "el hoặc la",
   "accept": [
    "el"
   ],
   "level": "A2",
   "expl": "Día là giống đực dù tận cùng -a."
  },
  {
   "kind": "fill",
   "q": "___ ciudad",
   "hint": "el hoặc la",
   "accept": [
    "la"
   ],
   "level": "A1",
   "expl": "Đuôi -dad luôn giống cái."
  },
  {
   "kind": "fill",
   "q": "___ canción",
   "hint": "el hoặc la",
   "accept": [
    "la"
   ],
   "level": "A1",
   "expl": "Đuôi -ción luôn giống cái."
  },
  {
   "kind": "fill",
   "q": "___ mano",
   "hint": "el hoặc la",
   "accept": [
    "la"
   ],
   "level": "A2",
   "expl": "Mano là ngoại lệ: tận cùng -o nhưng giống cái."
  },
  {
   "kind": "fill",
   "q": "___ mapa",
   "hint": "el hoặc la",
   "accept": [
    "el"
   ],
   "level": "A2",
   "expl": "Mapa tận cùng -a nhưng giống đực."
  },
  {
   "kind": "fill",
   "q": "___ amor",
   "hint": "el hoặc la",
   "accept": [
    "el"
   ],
   "level": "A1",
   "expl": "Đuôi -or thường giống đực."
  },
  {
   "kind": "fill",
   "q": "___ libertad",
   "hint": "el hoặc la",
   "accept": [
    "la"
   ],
   "level": "A1",
   "expl": "Đuôi -tad luôn giống cái."
  },
  {
   "kind": "fill",
   "q": "___ viaje",
   "hint": "el hoặc la",
   "accept": [
    "el"
   ],
   "level": "A1",
   "expl": "Đuôi -aje thường giống đực."
  },
  {
   "kind": "fill",
   "q": "___ foto",
   "hint": "el hoặc la",
   "accept": [
    "la"
   ],
   "level": "A2",
   "expl": "Foto là rút gọn của fotografía nên giống cái."
  },
  {
   "kind": "choose",
   "q": "Từ nào giống đực dù tận cùng bằng -a?",
   "right": "el día",
   "wrong": [
    "la casa",
    "la mesa",
    "la niña"
   ],
   "level": "A1",
   "expl": "Día là ngoại lệ."
  },
  {
   "kind": "choose",
   "q": "Giống cái của “amigo” là gì?",
   "right": "amiga",
   "wrong": [
    "amigue",
    "amigua",
    "amigoa"
   ],
   "level": "A1",
   "expl": "Đổi -o thành -a."
  },
  {
   "kind": "choose",
   "q": "“estudiante” có giống gì?",
   "right": "Dùng cho cả nam và nữ (el/la estudiante)",
   "wrong": [
    "Chỉ giống đực",
    "Chỉ giống cái",
    "Không có giống"
   ],
   "level": "A2",
   "expl": "Danh từ tận cùng -e hay -ante thường không đổi theo giới."
  }
 ],
 "es-sus-plural": [
  {
   "kind": "fill",
   "q": "Số nhiều của libro: ___",
   "hint": "viết số nhiều",
   "accept": [
    "libros"
   ],
   "level": "A1",
   "expl": "Tận cùng nguyên âm: thêm -s."
  },
  {
   "kind": "fill",
   "q": "Số nhiều của casa: ___",
   "hint": "viết số nhiều",
   "accept": [
    "casas"
   ],
   "level": "A1",
   "expl": "Tận cùng nguyên âm: thêm -s."
  },
  {
   "kind": "fill",
   "q": "Số nhiều của ciudad: ___",
   "hint": "viết số nhiều",
   "accept": [
    "ciudades"
   ],
   "level": "A1",
   "expl": "Tận cùng phụ âm: thêm -es."
  },
  {
   "kind": "fill",
   "q": "Số nhiều của papel: ___",
   "hint": "viết số nhiều",
   "accept": [
    "papeles"
   ],
   "level": "A1",
   "expl": "Tận cùng phụ âm: thêm -es."
  },
  {
   "kind": "fill",
   "q": "Số nhiều của lápiz: ___",
   "hint": "viết số nhiều",
   "accept": [
    "lápices"
   ],
   "level": "A1",
   "expl": "z đổi thành c trước -es."
  },
  {
   "kind": "fill",
   "q": "Số nhiều của luz: ___",
   "hint": "viết số nhiều",
   "accept": [
    "luces"
   ],
   "level": "A1",
   "expl": "z đổi thành c trước -es."
  },
  {
   "kind": "fill",
   "q": "Số nhiều của canción: ___",
   "hint": "viết số nhiều",
   "accept": [
    "canciones"
   ],
   "level": "A1",
   "expl": "Thêm -es và bỏ dấu."
  },
  {
   "kind": "fill",
   "q": "Số nhiều của el lunes: los ___",
   "hint": "viết số nhiều",
   "accept": [
    "lunes"
   ],
   "level": "A2",
   "expl": "Từ tận cùng -s ở âm tiết không nhấn không đổi."
  },
  {
   "kind": "fill",
   "q": "Số nhiều của café: ___",
   "hint": "viết số nhiều",
   "accept": [
    "cafés"
   ],
   "level": "A2",
   "expl": "Tận cùng nguyên âm có dấu: thêm -s."
  },
  {
   "kind": "fill",
   "q": "Số nhiều của mujer: ___",
   "hint": "viết số nhiều",
   "accept": [
    "mujeres"
   ],
   "level": "A1",
   "expl": "Tận cùng phụ âm: thêm -es."
  },
  {
   "kind": "fill",
   "q": "Số nhiều của tren: ___",
   "hint": "viết số nhiều",
   "accept": [
    "trenes"
   ],
   "level": "A1",
   "expl": "Tận cùng phụ âm: thêm -es."
  },
  {
   "kind": "fill",
   "q": "Số nhiều của examen: ___",
   "hint": "viết số nhiều",
   "accept": [
    "exámenes"
   ],
   "level": "B1",
   "expl": "Thêm -es và dấu chuyển sang âm tiết áp chót để giữ trọng âm."
  },
  {
   "kind": "choose",
   "q": "Từ tận cùng -z thì số nhiều thế nào?",
   "right": "Đổi z thành c rồi thêm -es",
   "wrong": [
    "Chỉ thêm -s",
    "Chỉ thêm -es",
    "Không đổi"
   ],
   "level": "A1",
   "expl": "lápiz → lápices."
  },
  {
   "kind": "choose",
   "q": "Số nhiều của “la crisis” là",
   "right": "las crisis",
   "wrong": [
    "las crises",
    "las crisises",
    "las crisis es"
   ],
   "level": "B1",
   "expl": "Từ tận cùng -is không nhấn cuối không đổi."
  },
  {
   "kind": "choose",
   "q": "Số nhiều của “el sofá”",
   "right": "los sofás",
   "wrong": [
    "los sofáes",
    "los sofás-",
    "los sofaes"
   ],
   "level": "B1",
   "expl": "Nguyên âm á nhấn: thêm -s."
  }
 ],
 "es-sus-definidos": [
  {
   "kind": "fill",
   "q": "___ libro es interesante.",
   "hint": "el, la, los hoặc las",
   "accept": [
    "el"
   ],
   "level": "A1",
   "expl": "Giống đực, số ít."
  },
  {
   "kind": "fill",
   "q": "___ mesa",
   "hint": "el, la, los hoặc las",
   "accept": [
    "la"
   ],
   "level": "A1",
   "expl": "Giống cái, số ít."
  },
  {
   "kind": "fill",
   "q": "___ amigos",
   "hint": "el, la, los hoặc las",
   "accept": [
    "los"
   ],
   "level": "A1",
   "expl": "Giống đực, số nhiều."
  },
  {
   "kind": "fill",
   "q": "___ casas",
   "hint": "el, la, los hoặc las",
   "accept": [
    "las"
   ],
   "level": "A1",
   "expl": "Giống cái, số nhiều."
  },
  {
   "kind": "fill",
   "q": "___ problema es difícil.",
   "hint": "el, la, los hoặc las",
   "accept": [
    "el"
   ],
   "level": "A2",
   "expl": "Problema là giống đực."
  },
  {
   "kind": "fill",
   "q": "___ ciudad es grande.",
   "hint": "el, la, los hoặc las",
   "accept": [
    "la"
   ],
   "level": "A1",
   "expl": "Giống cái."
  },
  {
   "kind": "fill",
   "q": "___ manos",
   "hint": "el, la, los hoặc las",
   "accept": [
    "las"
   ],
   "level": "A1",
   "expl": "Mano giống cái, số nhiều."
  },
  {
   "kind": "fill",
   "q": "___ lápices",
   "hint": "el, la, los hoặc las",
   "accept": [
    "los"
   ],
   "level": "A1",
   "expl": "Lápiz giống đực."
  },
  {
   "kind": "fill",
   "q": "Voy ___ cine. (a + el)",
   "hint": "dạng rút gọn",
   "accept": [
    "al"
   ],
   "level": "A1",
   "expl": "a + el = al."
  },
  {
   "kind": "fill",
   "q": "El libro ___ profesor. (de + el)",
   "hint": "dạng rút gọn",
   "accept": [
    "del"
   ],
   "level": "A1",
   "expl": "de + el = del."
  },
  {
   "kind": "fill",
   "q": "Voy a ___ escuela.",
   "hint": "el, la, los hoặc las",
   "accept": [
    "la"
   ],
   "level": "A2",
   "expl": "a + la không rút gọn."
  },
  {
   "kind": "fill",
   "q": "___ agua está fría.",
   "hint": "el/la",
   "accept": [
    "El"
   ],
   "level": "B1",
   "expl": "Danh từ cái bắt đầu bằng a nhấn dùng el ở số ít."
  },
  {
   "kind": "choose",
   "q": "a + el viết thành",
   "right": "al",
   "wrong": [
    "a el",
    "ael",
    "ale"
   ],
   "level": "A1",
   "expl": "Bắt buộc rút gọn."
  },
  {
   "kind": "choose",
   "q": "de + la viết thành",
   "right": "de la",
   "wrong": [
    "del",
    "dela",
    "de el"
   ],
   "level": "A1",
   "expl": "Chỉ el mới rút gọn."
  },
  {
   "kind": "choose",
   "q": "Số nhiều của “el agua”",
   "right": "las aguas",
   "wrong": [
    "los aguas",
    "las agua",
    "los agua"
   ],
   "level": "B1",
   "expl": "Số nhiều quay lại dùng las."
  }
 ],
 "es-sus-indefinidos": [
  {
   "kind": "fill",
   "q": "___ libro",
   "hint": "un, una, unos hoặc unas",
   "accept": [
    "un"
   ],
   "level": "A1",
   "expl": "Giống đực, số ít."
  },
  {
   "kind": "fill",
   "q": "___ casa",
   "hint": "un, una, unos hoặc unas",
   "accept": [
    "una"
   ],
   "level": "A1",
   "expl": "Giống cái, số ít."
  },
  {
   "kind": "fill",
   "q": "___ amigos",
   "hint": "un, una, unos hoặc unas",
   "accept": [
    "unos"
   ],
   "level": "A1",
   "expl": "Giống đực, số nhiều."
  },
  {
   "kind": "fill",
   "q": "___ mesas",
   "hint": "un, una, unos hoặc unas",
   "accept": [
    "unas"
   ],
   "level": "A1",
   "expl": "Giống cái, số nhiều."
  },
  {
   "kind": "fill",
   "q": "___ problema",
   "hint": "un, una, unos hoặc unas",
   "accept": [
    "un"
   ],
   "level": "A2",
   "expl": "Giống đực."
  },
  {
   "kind": "fill",
   "q": "___ ciudad",
   "hint": "un, una, unos hoặc unas",
   "accept": [
    "una"
   ],
   "level": "A1",
   "expl": "Giống cái."
  },
  {
   "kind": "fill",
   "q": "___ manos",
   "hint": "un, una, unos hoặc unas",
   "accept": [
    "unas"
   ],
   "level": "A1",
   "expl": "Giống cái, số nhiều."
  },
  {
   "kind": "fill",
   "q": "___ día",
   "hint": "un, una, unos hoặc unas",
   "accept": [
    "un"
   ],
   "level": "A2",
   "expl": "Giống đực."
  },
  {
   "kind": "fill",
   "q": "___ foto",
   "hint": "un, una, unos hoặc unas",
   "accept": [
    "una"
   ],
   "level": "A2",
   "expl": "Giống cái."
  },
  {
   "kind": "fill",
   "q": "___ águila",
   "hint": "un/una",
   "accept": [
    "un"
   ],
   "level": "B1",
   "expl": "Danh từ cái bắt đầu bằng a nhấn dùng un."
  },
  {
   "kind": "fill",
   "q": "Có vài quyển sách trên bàn: Hay ___ libros en la mesa.",
   "hint": "unos hoặc unas",
   "accept": [
    "unos"
   ],
   "level": "A1",
   "expl": "Unos = vài."
  },
  {
   "kind": "fill",
   "q": "Quiero ___ café, por favor.",
   "hint": "un/una",
   "accept": [
    "un"
   ],
   "level": "A1",
   "expl": "Café giống đực."
  },
  {
   "kind": "choose",
   "q": "“unos libros” nghĩa là",
   "right": "vài quyển sách",
   "wrong": [
    "những quyển sách đó",
    "một quyển sách",
    "quyển sách"
   ],
   "level": "A1",
   "expl": "Unos/unas = vài."
  },
  {
   "kind": "choose",
   "q": "“unas veinte personas” nghĩa là",
   "right": "khoảng 20 người",
   "wrong": [
    "đúng 20 người",
    "vài người",
    "20 người nữa"
   ],
   "level": "B1",
   "expl": "Unos/unas trước số = khoảng."
  },
  {
   "kind": "choose",
   "q": "Điền vào “Tengo ___ perro. El perro se llama Max.”",
   "right": "un",
   "wrong": [
    "el",
    "unos",
    "la"
   ],
   "level": "A1",
   "expl": "Lần đầu nhắc: un; lần sau: el."
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

const RUSH=[["-o → el · -a → la", ["es-sus-genero"]], ["-ción · -dad → la", ["es-sus-genero"]], ["libro → libros", ["es-sus-plural"]], ["lápiz → lápices", ["es-sus-plural"]], ["el / la / los / las", ["es-sus-definidos"]], ["a + el = al", ["es-sus-definidos"]], ["un / una", ["es-sus-indefinidos"]], ["unos / unas = vài", ["es-sus-indefinidos"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["sustantivos"] = { pool: POOL, types: TYPES, game: {title:"¿Qué artículo?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng bài",prompt:"Dấu hiệu này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"susRushBest"} };
})();
