/* es/content/quiz/imperativo.js: mệnh lệnh và mệnh đề quan hệ.
   Mixed exercise types: type the answer (fill, retry allowed) or pick one
   (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "es-imp-afirmativo": [
  {
   "kind": "fill",
   "q": "___ más despacio. (hablar, tú)",
   "hint": "hablar, tú",
   "accept": [
    "Habla"
   ],
   "level": "A2",
   "expl": "Tú = ngôi él của presente."
  },
  {
   "kind": "fill",
   "q": "___ algo. (comer, tú)",
   "hint": "comer, tú",
   "accept": [
    "Come"
   ],
   "level": "A2",
   "expl": "Tú = ngôi él."
  },
  {
   "kind": "fill",
   "q": "___ la puerta. (abrir, tú)",
   "hint": "abrir, tú",
   "accept": [
    "Abre"
   ],
   "level": "A2",
   "expl": "Tú = ngôi él."
  },
  {
   "kind": "fill",
   "q": "___ la tarea. (hacer, tú)",
   "hint": "hacer, tú",
   "accept": [
    "Haz"
   ],
   "level": "A2",
   "expl": "Bất quy tắc."
  },
  {
   "kind": "fill",
   "q": "___ la verdad. (decir, tú)",
   "hint": "decir, tú",
   "accept": [
    "Di"
   ],
   "level": "A2",
   "expl": "Bất quy tắc."
  },
  {
   "kind": "fill",
   "q": "___ aquí. (venir, tú)",
   "hint": "venir, tú",
   "accept": [
    "Ven"
   ],
   "level": "A2",
   "expl": "Bất quy tắc."
  },
  {
   "kind": "fill",
   "q": "___ a casa. (ir, tú)",
   "hint": "ir, tú",
   "accept": [
    "Ve"
   ],
   "level": "A2",
   "expl": "Bất quy tắc."
  },
  {
   "kind": "fill",
   "q": "___ la mesa. (poner, tú)",
   "hint": "poner, tú",
   "accept": [
    "Pon"
   ],
   "level": "A2",
   "expl": "Bất quy tắc."
  },
  {
   "kind": "fill",
   "q": "___ más despacio, por favor. (hablar, usted)",
   "hint": "hablar, usted",
   "accept": [
    "Hable"
   ],
   "level": "A2",
   "expl": "Usted = subjuntivo."
  },
  {
   "kind": "fill",
   "q": "___ la carne. (comer, ustedes)",
   "hint": "comer, ustedes",
   "accept": [
    "Coman"
   ],
   "level": "A2",
   "expl": "Ustedes = subjuntivo."
  },
  {
   "kind": "fill",
   "q": "___ más alto. (hablar, vosotros)",
   "hint": "hablar, vosotros",
   "accept": [
    "Hablad"
   ],
   "level": "B1",
   "expl": "Vosotros: bỏ -r + d."
  },
  {
   "kind": "fill",
   "q": "___ ahora. (comer, vosotros)",
   "hint": "comer, vosotros",
   "accept": [
    "Comed"
   ],
   "level": "B1",
   "expl": "Vosotros: bỏ -r + d."
  },
  {
   "kind": "fill",
   "q": "___ de aquí. (salir, tú)",
   "hint": "salir, tú",
   "accept": [
    "Sal"
   ],
   "level": "A2",
   "expl": "Bất quy tắc."
  },
  {
   "kind": "fill",
   "q": "___ bueno. (ser, tú)",
   "hint": "ser, tú",
   "accept": [
    "Sé"
   ],
   "level": "A2",
   "expl": "Bất quy tắc."
  },
  {
   "kind": "choose",
   "q": "Mệnh lệnh tú khẳng định thường = ",
   "right": "ngôi él của presente",
   "wrong": [
    "ngôi yo",
    "subjuntivo",
    "nguyên mẫu"
   ],
   "level": "A2",
   "expl": "Habla, come, escribe."
  }
 ],
 "es-imp-negativo": [
  {
   "kind": "fill",
   "q": "No ___ tan alto. (hablar, tú)",
   "hint": "hablar, tú",
   "accept": [
    "hables"
   ],
   "level": "A2",
   "expl": "No + subjuntivo."
  },
  {
   "kind": "fill",
   "q": "No ___ eso. (comer, tú)",
   "hint": "comer, tú",
   "accept": [
    "comas"
   ],
   "level": "A2",
   "expl": "No + subjuntivo."
  },
  {
   "kind": "fill",
   "q": "No ___ ruido. (hacer, tú)",
   "hint": "hacer, tú",
   "accept": [
    "hagas"
   ],
   "level": "A2",
   "expl": "No + subjuntivo."
  },
  {
   "kind": "fill",
   "q": "No ___ aquí. (fumar, usted)",
   "hint": "fumar, usted",
   "accept": [
    "fume"
   ],
   "level": "A2",
   "expl": "No + subjuntivo."
  },
  {
   "kind": "fill",
   "q": "No ___ tonto. (ser, tú)",
   "hint": "ser, tú",
   "accept": [
    "seas"
   ],
   "level": "A2",
   "expl": "No + subjuntivo."
  },
  {
   "kind": "fill",
   "q": "No ___ mentiras. (decir, tú)",
   "hint": "decir, tú",
   "accept": [
    "digas"
   ],
   "level": "A2",
   "expl": "No + subjuntivo."
  },
  {
   "kind": "fill",
   "q": "No ___ solo. (ir, tú)",
   "hint": "ir, tú",
   "accept": [
    "vayas"
   ],
   "level": "A2",
   "expl": "No + subjuntivo."
  },
  {
   "kind": "fill",
   "q": "No ___ en clase. (hablar, vosotros)",
   "hint": "hablar, vosotros",
   "accept": [
    "habléis"
   ],
   "level": "B1",
   "expl": "No + subjuntivo."
  },
  {
   "kind": "fill",
   "q": "___ en esta silla. (sentarse, tú)",
   "hint": "sentarse, tú, khẳng định",
   "accept": [
    "Siéntate"
   ],
   "level": "B1",
   "expl": "Gắn đại từ, thêm dấu."
  },
  {
   "kind": "fill",
   "q": "No me lo ___. (dar, tú)",
   "hint": "dar, tú",
   "accept": [
    "des"
   ],
   "level": "B1",
   "expl": "Phủ định: đại từ đứng trước."
  },
  {
   "kind": "fill",
   "q": "No te ___ tarde. (levantar, tú)",
   "hint": "levantar, tú",
   "accept": [
    "levantes"
   ],
   "level": "B1",
   "expl": "No te + subjuntivo."
  },
  {
   "kind": "fill",
   "q": "No te ___. (preocupar, tú)",
   "hint": "preocupar, tú",
   "accept": [
    "preocupes"
   ],
   "level": "B1",
   "expl": "No te + subjuntivo."
  },
  {
   "kind": "choose",
   "q": "Mệnh lệnh phủ định luôn dùng",
   "right": "no + subjuntivo",
   "wrong": [
    "no + indicativo",
    "no + nguyên mẫu",
    "no + dạng khẳng định"
   ],
   "level": "A2",
   "expl": "No hables."
  },
  {
   "kind": "choose",
   "q": "Đại từ trong mệnh lệnh khẳng định",
   "right": "gắn vào cuối động từ",
   "wrong": [
    "đứng trước động từ",
    "đứng giữa",
    "tách rời"
   ],
   "level": "B1",
   "expl": "Dámelo."
  },
  {
   "kind": "choose",
   "q": "Đại từ trong mệnh lệnh phủ định",
   "right": "đứng trước động từ",
   "wrong": [
    "gắn vào cuối",
    "đứng cuối câu",
    "không dùng"
   ],
   "level": "B1",
   "expl": "No me lo des."
  }
 ],
 "es-imp-rel-que": [
  {
   "kind": "fill",
   "q": "El libro ___ leo es bueno.",
   "hint": "vật",
   "accept": [
    "que"
   ],
   "level": "A2",
   "expl": "Que: người hoặc vật."
  },
  {
   "kind": "fill",
   "q": "La persona con ___ hablo es mi jefe.",
   "hint": "người, sau giới từ",
   "accept": [
    "quien"
   ],
   "level": "B1",
   "expl": "Sau giới từ: quien."
  },
  {
   "kind": "fill",
   "q": "La ciudad ___ nací es pequeña.",
   "hint": "nơi chốn",
   "accept": [
    "donde",
    "en la que"
   ],
   "level": "A2",
   "expl": "Donde: nơi chốn."
  },
  {
   "kind": "fill",
   "q": "___ dices es verdad.",
   "hint": "điều mà",
   "accept": [
    "Lo que"
   ],
   "level": "B1",
   "expl": "Lo que: điều mà."
  },
  {
   "kind": "fill",
   "q": "El chico ___ padre es médico.",
   "hint": "của",
   "accept": [
    "cuyo"
   ],
   "level": "B2",
   "expl": "Cuyo: sở hữu."
  },
  {
   "kind": "fill",
   "q": "La casa en la ___ vivo es vieja.",
   "hint": "đại từ sau mạo từ",
   "accept": [
    "que"
   ],
   "level": "B1",
   "expl": "En la que."
  },
  {
   "kind": "fill",
   "q": "La mujer ___ habla es mi madre.",
   "hint": "người",
   "accept": [
    "que"
   ],
   "level": "A2",
   "expl": "Que: người."
  },
  {
   "kind": "fill",
   "q": "Las chicas con ___ estudio son amigas.",
   "hint": "người, số nhiều",
   "accept": [
    "quienes"
   ],
   "level": "B1",
   "expl": "Quien → quienes."
  },
  {
   "kind": "fill",
   "q": "El restaurante ___ comimos es bueno.",
   "hint": "nơi chốn",
   "accept": [
    "donde",
    "en el que"
   ],
   "level": "A2",
   "expl": "Donde: nơi chốn."
  },
  {
   "kind": "fill",
   "q": "Esto es ___ quiero.",
   "hint": "điều mà",
   "accept": [
    "lo que"
   ],
   "level": "B1",
   "expl": "Lo que: điều mà."
  },
  {
   "kind": "fill",
   "q": "La mujer ___ hijos son altos es profesora.",
   "hint": "của, số nhiều",
   "accept": [
    "cuyos"
   ],
   "level": "B2",
   "expl": "Cuyos khớp với hijos."
  },
  {
   "kind": "choose",
   "q": "Sau giới từ, đại từ quan hệ cần",
   "right": "el que / la que / quien",
   "wrong": [
    "que trần",
    "donde",
    "cuyo"
   ],
   "level": "B1",
   "expl": "La casa en la que vivo."
  },
  {
   "kind": "choose",
   "q": "“Lo que” thay cho",
   "right": "một ý, điều",
   "wrong": [
    "một người",
    "một nơi",
    "một danh từ giống cái"
   ],
   "level": "B1",
   "expl": "Lo que dices."
  },
  {
   "kind": "choose",
   "q": "“Que” dùng cho",
   "right": "người và vật",
   "wrong": [
    "chỉ người",
    "chỉ vật",
    "chỉ nơi chốn"
   ],
   "level": "A2",
   "expl": "Phổ biến nhất."
  },
  {
   "kind": "choose",
   "q": "“Cuyo” khớp giống số với",
   "right": "danh từ đi sau nó",
   "wrong": [
    "người sở hữu",
    "động từ",
    "chủ ngữ"
   ],
   "level": "B2",
   "expl": "Cuyo padre, cuyos hijos."
  }
 ],
 "es-imp-rel-sub": [
  {
   "kind": "fill",
   "q": "Busco un libro que ___ interesante.",
   "hint": "ser",
   "accept": [
    "sea"
   ],
   "level": "B1",
   "expl": "Chưa biết → subjuntivo."
  },
  {
   "kind": "fill",
   "q": "Tengo un libro que ___ interesante.",
   "hint": "ser",
   "accept": [
    "es"
   ],
   "level": "B1",
   "expl": "Đã biết → indicativo."
  },
  {
   "kind": "fill",
   "q": "No hay nadie que ___ la respuesta.",
   "hint": "saber",
   "accept": [
    "sepa"
   ],
   "level": "B1",
   "expl": "Không tồn tại → subjuntivo."
  },
  {
   "kind": "fill",
   "q": "Hay alguien que ___ la respuesta.",
   "hint": "saber",
   "accept": [
    "sabe"
   ],
   "level": "B1",
   "expl": "Tồn tại → indicativo."
  },
  {
   "kind": "fill",
   "q": "Necesito un piso que ___ terraza.",
   "hint": "tener",
   "accept": [
    "tenga"
   ],
   "level": "B1",
   "expl": "Muốn có → subjuntivo."
  },
  {
   "kind": "fill",
   "q": "¿Conoces a alguien que ___ japonés?",
   "hint": "hablar",
   "accept": [
    "hable"
   ],
   "level": "B1",
   "expl": "Chưa biết → subjuntivo."
  },
  {
   "kind": "fill",
   "q": "Conozco a alguien que ___ japonés.",
   "hint": "hablar",
   "accept": [
    "habla"
   ],
   "level": "B1",
   "expl": "Đã biết → indicativo."
  },
  {
   "kind": "fill",
   "q": "Quiero un coche que ___ barato.",
   "hint": "ser",
   "accept": [
    "sea"
   ],
   "level": "B1",
   "expl": "Muốn có → subjuntivo."
  },
  {
   "kind": "fill",
   "q": "No conozco a nadie que ___ allí.",
   "hint": "vivir",
   "accept": [
    "viva"
   ],
   "level": "B1",
   "expl": "Không có → subjuntivo."
  },
  {
   "kind": "fill",
   "q": "Tengo un amigo que ___ en Madrid.",
   "hint": "vivir",
   "accept": [
    "vive"
   ],
   "level": "B1",
   "expl": "Biết chắc → indicativo."
  },
  {
   "kind": "fill",
   "q": "Busco una casa que ___ jardín.",
   "hint": "tener",
   "accept": [
    "tenga"
   ],
   "level": "B1",
   "expl": "Đang tìm → subjuntivo."
  },
  {
   "kind": "fill",
   "q": "No hay nada que me ___.",
   "hint": "gustar",
   "accept": [
    "guste"
   ],
   "level": "B1",
   "expl": "Không có → subjuntivo."
  },
  {
   "kind": "choose",
   "q": "Vật chưa biết hoặc đang tìm dùng",
   "right": "subjuntivo",
   "wrong": [
    "indicativo",
    "nguyên mẫu",
    "gerundio"
   ],
   "level": "B1",
   "expl": "Busco un libro que sea…"
  },
  {
   "kind": "choose",
   "q": "Vật đã biết chắc dùng",
   "right": "indicativo",
   "wrong": [
    "subjuntivo",
    "nguyên mẫu",
    "condicional"
   ],
   "level": "B1",
   "expl": "Tengo un libro que es…"
  },
  {
   "kind": "choose",
   "q": "Sau “nadie que” dùng",
   "right": "subjuntivo",
   "wrong": [
    "indicativo",
    "nguyên mẫu",
    "futuro"
   ],
   "level": "B1",
   "expl": "No hay nadie que sepa."
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

const RUSH=[["habla · come · abre", ["es-imp-afirmativo"]], ["haz · di · ven · ve", ["es-imp-afirmativo"]], ["no hables · no comas", ["es-imp-negativo"]], ["dámelo · no me lo des", ["es-imp-negativo"]], ["que · quien · donde", ["es-imp-rel-que"]], ["lo que · cuyo", ["es-imp-rel-que"]], ["busco un… que sea", ["es-imp-rel-sub"]], ["no hay nadie que…", ["es-imp-rel-sub"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["imperativo"] = { pool: POOL, types: TYPES, game: {title:"¿Qué modo?",desc:"60 giây. Thấy dạng này, chọn đúng bài",prompt:"Dạng này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"impRushBest"} };
})();
