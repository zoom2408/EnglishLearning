/* es/content/quiz/pasado.js: indefinido, imperfecto và cách chọn.
   Mixed exercise types: type the answer (fill, retry allowed) or pick one
   (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "es-pas-indef-reg": [
  {
   "kind": "fill",
   "q": "Ayer yo ___ con Ana.",
   "hint": "hablar, ngôi yo",
   "accept": [
    "hablé"
   ],
   "level": "A2",
   "expl": "-ar, yo: -é."
  },
  {
   "kind": "fill",
   "q": "Anoche tú ___ pizza.",
   "hint": "comer, ngôi tú",
   "accept": [
    "comiste"
   ],
   "level": "A2",
   "expl": "-er, tú: -iste."
  },
  {
   "kind": "fill",
   "q": "Ella ___ en Lima dos años.",
   "hint": "vivir, ngôi ella",
   "accept": [
    "vivió"
   ],
   "level": "A2",
   "expl": "-ir, ella: -ió."
  },
  {
   "kind": "fill",
   "q": "El año pasado nosotros ___ en un banco.",
   "hint": "trabajar, ngôi nosotros",
   "accept": [
    "trabajamos"
   ],
   "level": "A2",
   "expl": "-ar, nosotros: -amos (giống presente)."
  },
  {
   "kind": "fill",
   "q": "Ayer vosotros ___ un correo.",
   "hint": "escribir, ngôi vosotros",
   "accept": [
    "escribisteis"
   ],
   "level": "A2",
   "expl": "-ir, vosotros: -isteis."
  },
  {
   "kind": "fill",
   "q": "Ellos me ___ ayer.",
   "hint": "llamar, ngôi ellos",
   "accept": [
    "llamaron"
   ],
   "level": "A2",
   "expl": "-ar, ellos: -aron."
  },
  {
   "kind": "fill",
   "q": "Ayer yo ___ un libro.",
   "hint": "comprar, ngôi yo",
   "accept": [
    "compré"
   ],
   "level": "A2",
   "expl": "-ar, yo: -é."
  },
  {
   "kind": "fill",
   "q": "Tú ___ de casa a las ocho.",
   "hint": "salir, ngôi tú",
   "accept": [
    "saliste"
   ],
   "level": "A2",
   "expl": "-ir, tú: -iste."
  },
  {
   "kind": "fill",
   "q": "Él ___ un vaso de agua.",
   "hint": "beber, ngôi él",
   "accept": [
    "bebió"
   ],
   "level": "A2",
   "expl": "-er, él: -ió."
  },
  {
   "kind": "fill",
   "q": "Ellos ___ para el examen.",
   "hint": "estudiar, ngôi ellos",
   "accept": [
    "estudiaron"
   ],
   "level": "A2",
   "expl": "-ar, ellos: -aron."
  },
  {
   "kind": "fill",
   "q": "Ayer yo ___ mis llaves.",
   "hint": "buscar, ngôi yo",
   "accept": [
    "busqué"
   ],
   "level": "B1",
   "expl": "-car: c → qu ở ngôi yo."
  },
  {
   "kind": "fill",
   "q": "Ayer yo ___ tarde.",
   "hint": "llegar, ngôi yo",
   "accept": [
    "llegué"
   ],
   "level": "B1",
   "expl": "-gar: g → gu ở ngôi yo."
  },
  {
   "kind": "fill",
   "q": "Ayer yo ___ a estudiar a las ocho.",
   "hint": "empezar, ngôi yo",
   "accept": [
    "empecé"
   ],
   "level": "B1",
   "expl": "-zar: z → c ở ngôi yo."
  },
  {
   "kind": "choose",
   "q": "Dạng đúng của “él hablar” ở indefinido",
   "right": "habló",
   "wrong": [
    "hablo",
    "hablé",
    "hablaba"
   ],
   "level": "A1",
   "expl": "Ngôi él -ar: -ó (có dấu)."
  },
  {
   "kind": "choose",
   "q": "Nosotros của động từ -ar ở indefinido giống thì nào?",
   "right": "presente (hablamos)",
   "wrong": [
    "imperfecto",
    "perfecto",
    "futuro"
   ],
   "level": "A1",
   "expl": "Cần trạng từ như ayer để phân biệt."
  }
 ],
 "es-pas-indef-irr": [
  {
   "kind": "fill",
   "q": "Ayer yo ___ al cine.",
   "hint": "ir, ngôi yo",
   "accept": [
    "fui"
   ],
   "level": "A2",
   "expl": "Ir ở indefinido: fui."
  },
  {
   "kind": "fill",
   "q": "Ella ___ mi profesora.",
   "hint": "ser, ngôi ella",
   "accept": [
    "fue"
   ],
   "level": "A2",
   "expl": "Ser ở indefinido: fue."
  },
  {
   "kind": "fill",
   "q": "Ayer yo ___ la cena.",
   "hint": "hacer, ngôi yo",
   "accept": [
    "hice"
   ],
   "level": "A2",
   "expl": "Hacer: hice."
  },
  {
   "kind": "fill",
   "q": "Él ___ la tarea.",
   "hint": "hacer, ngôi él",
   "accept": [
    "hizo"
   ],
   "level": "A2",
   "expl": "Hacer: hizo (c → z)."
  },
  {
   "kind": "fill",
   "q": "Ayer yo ___ un examen.",
   "hint": "tener, ngôi yo",
   "accept": [
    "tuve"
   ],
   "level": "A2",
   "expl": "Tener: tuve."
  },
  {
   "kind": "fill",
   "q": "Nosotros ___ en casa.",
   "hint": "estar, ngôi nosotros",
   "accept": [
    "estuvimos"
   ],
   "level": "A2",
   "expl": "Estar: estuvimos."
  },
  {
   "kind": "fill",
   "q": "Yo le ___ la verdad.",
   "hint": "decir, ngôi yo",
   "accept": [
    "dije"
   ],
   "level": "A2",
   "expl": "Decir: dije."
  },
  {
   "kind": "fill",
   "q": "Ellos me ___ la verdad.",
   "hint": "decir, ngôi ellos",
   "accept": [
    "dijeron"
   ],
   "level": "A2",
   "expl": "Decir: dijeron (không có i)."
  },
  {
   "kind": "fill",
   "q": "Ayer yo ___ a tu casa.",
   "hint": "venir, ngôi yo",
   "accept": [
    "vine"
   ],
   "level": "A2",
   "expl": "Venir: vine."
  },
  {
   "kind": "fill",
   "q": "Tú ___ el libro en la mesa.",
   "hint": "poner, ngôi tú",
   "accept": [
    "pusiste"
   ],
   "level": "A2",
   "expl": "Poner: pusiste."
  },
  {
   "kind": "fill",
   "q": "Ella no ___ venir.",
   "hint": "poder, ngôi ella",
   "accept": [
    "pudo"
   ],
   "level": "A2",
   "expl": "Poder: pudo."
  },
  {
   "kind": "fill",
   "q": "Yo te ___ un regalo.",
   "hint": "dar, ngôi yo",
   "accept": [
    "di"
   ],
   "level": "A2",
   "expl": "Dar: di."
  },
  {
   "kind": "choose",
   "q": "“Fui profesor” và “Fui a Madrid” khác nhau thế nào?",
   "right": "Cùng dạng fui, nghĩa do ngữ cảnh",
   "wrong": [
    "Sai: ser là sui",
    "Khác dạng",
    "Chỉ ir dùng fui"
   ],
   "level": "A1",
   "expl": "Ser và ir giống nhau ở indefinido."
  },
  {
   "kind": "choose",
   "q": "Vì sao “hizo” viết z?",
   "right": "Giữ âm /th/ trước chữ o",
   "wrong": [
    "Là lỗi chính tả",
    "Là dạng cổ",
    "Là số nhiều"
   ],
   "level": "B1",
   "expl": "Hic- + o đổi c thành z."
  },
  {
   "kind": "choose",
   "q": "Vì sao “dijeron” không có i như “dijieron”?",
   "right": "Gốc dij- đã có j nên bỏ i",
   "wrong": [
    "Là lỗi chính tả",
    "Là dạng cổ",
    "Là số ít"
   ],
   "level": "B1",
   "expl": "Decir, traer: -eron."
  }
 ],
 "es-pas-imperf": [
  {
   "kind": "fill",
   "q": "De niño, yo ___ con mi madre.",
   "hint": "hablar, ngôi yo",
   "accept": [
    "hablaba"
   ],
   "level": "A2",
   "expl": "-ar: -aba."
  },
  {
   "kind": "fill",
   "q": "De niño, tú ___ en casa.",
   "hint": "comer, ngôi tú",
   "accept": [
    "comías"
   ],
   "level": "A2",
   "expl": "-er: -ías."
  },
  {
   "kind": "fill",
   "q": "De niño, ella ___ en Lima.",
   "hint": "vivir, ngôi ella",
   "accept": [
    "vivía"
   ],
   "level": "A2",
   "expl": "-ir: -ía."
  },
  {
   "kind": "fill",
   "q": "De niño, nosotros ___ al fútbol.",
   "hint": "jugar, ngôi nosotros",
   "accept": [
    "jugábamos"
   ],
   "level": "A2",
   "expl": "-ar, nosotros: -ábamos."
  },
  {
   "kind": "fill",
   "q": "De niño, vosotros ___ mucho.",
   "hint": "trabajar, ngôi vosotros",
   "accept": [
    "trabajabais"
   ],
   "level": "A2",
   "expl": "-ar, vosotros: -abais."
  },
  {
   "kind": "fill",
   "q": "De niño, ellos ___ para el examen.",
   "hint": "estudiar, ngôi ellos",
   "accept": [
    "estudiaban"
   ],
   "level": "A2",
   "expl": "-ar, ellos: -aban."
  },
  {
   "kind": "fill",
   "q": "De niño, yo ___ muy alto.",
   "hint": "ser, ngôi yo",
   "accept": [
    "era"
   ],
   "level": "A2",
   "expl": "Ser: era."
  },
  {
   "kind": "fill",
   "q": "De niño, nosotros ___ amigos.",
   "hint": "ser, ngôi nosotros",
   "accept": [
    "éramos"
   ],
   "level": "A2",
   "expl": "Ser: éramos."
  },
  {
   "kind": "fill",
   "q": "De niño, yo ___ a la escuela a pie.",
   "hint": "ir, ngôi yo",
   "accept": [
    "iba"
   ],
   "level": "A2",
   "expl": "Ir: iba."
  },
  {
   "kind": "fill",
   "q": "De niño, ellos ___ a la playa en verano.",
   "hint": "ir, ngôi ellos",
   "accept": [
    "iban"
   ],
   "level": "A2",
   "expl": "Ir: iban."
  },
  {
   "kind": "fill",
   "q": "De niño, tú ___ la tele.",
   "hint": "ver, ngôi tú",
   "accept": [
    "veías"
   ],
   "level": "A2",
   "expl": "Ver: veías."
  },
  {
   "kind": "fill",
   "q": "De niño, él ___ diez años.",
   "hint": "tener, ngôi él",
   "accept": [
    "tenía"
   ],
   "level": "A2",
   "expl": "Tener: tenía."
  },
  {
   "kind": "fill",
   "q": "De niño, ellos ___ la cena.",
   "hint": "hacer, ngôi ellos",
   "accept": [
    "hacían"
   ],
   "level": "A2",
   "expl": "Hacer: hacían."
  },
  {
   "kind": "choose",
   "q": "Imperfecto dùng cho",
   "right": "thói quen và bối cảnh trong quá khứ",
   "wrong": [
    "sự kiện đã xong",
    "tương lai",
    "mệnh lệnh"
   ],
   "level": "A1",
   "expl": "Mô tả và thói quen."
  },
  {
   "kind": "choose",
   "q": "Ba động từ bất quy tắc ở imperfecto",
   "right": "ser, ir, ver",
   "wrong": [
    "hacer, tener, estar",
    "ser, estar, tener",
    "ir, venir, ver"
   ],
   "level": "A1",
   "expl": "Các động từ khác đều đều."
  }
 ],
 "es-pas-contraste": [
  {
   "kind": "fill",
   "q": "Ayer por la tarde yo ___ al cine.",
   "hint": "ir, ngôi yo",
   "accept": [
    "fui"
   ],
   "level": "A2",
   "expl": "Ayer + sự kiện đã xong: indefinido."
  },
  {
   "kind": "fill",
   "q": "De niño yo ___ al parque.",
   "hint": "ir, ngôi yo",
   "accept": [
    "iba"
   ],
   "level": "A2",
   "expl": "De niño + thói quen: imperfecto."
  },
  {
   "kind": "fill",
   "q": "Cuando yo ___ niño, vivía en Lima.",
   "hint": "ser, ngôi yo",
   "accept": [
    "era"
   ],
   "level": "A2",
   "expl": "Mô tả lúc nhỏ: imperfecto."
  },
  {
   "kind": "fill",
   "q": "Anoche yo ___ una película.",
   "hint": "ver, ngôi yo",
   "accept": [
    "vi"
   ],
   "level": "A2",
   "expl": "Anoche + sự kiện: indefinido."
  },
  {
   "kind": "fill",
   "q": "Mientras yo ___, él cocinaba.",
   "hint": "leer, ngôi yo",
   "accept": [
    "leía"
   ],
   "level": "A2",
   "expl": "Mientras: imperfecto."
  },
  {
   "kind": "fill",
   "q": "Dormía cuando ___ el teléfono.",
   "hint": "sonar, ngôi él",
   "accept": [
    "sonó"
   ],
   "level": "B1",
   "expl": "Hành động ngắn xen vào: indefinido."
  },
  {
   "kind": "fill",
   "q": "Siempre ___ café por la mañana.",
   "hint": "beber, ngôi yo",
   "accept": [
    "bebía"
   ],
   "level": "A2",
   "expl": "Siempre: imperfecto."
  },
  {
   "kind": "fill",
   "q": "De repente, yo ___ un ruido.",
   "hint": "oír, ngôi yo",
   "accept": [
    "oí"
   ],
   "level": "B1",
   "expl": "De repente: indefinido."
  },
  {
   "kind": "fill",
   "q": "___ las tres cuando llegué.",
   "hint": "ser",
   "accept": [
    "Eran"
   ],
   "level": "A2",
   "expl": "Giờ giấc trong quá khứ: imperfecto."
  },
  {
   "kind": "fill",
   "q": "Hacía frío y ___.",
   "hint": "nevar, ngôi ella",
   "accept": [
    "nevaba"
   ],
   "level": "B1",
   "expl": "Bối cảnh: imperfecto."
  },
  {
   "kind": "choose",
   "q": "“Ayer” thường đi với",
   "right": "indefinido",
   "wrong": [
    "imperfecto",
    "pluscuamperfecto",
    "perfecto"
   ],
   "level": "A1",
   "expl": "Thời điểm đã xong."
  },
  {
   "kind": "choose",
   "q": "“Siempre” và “de niño” thường đi với",
   "right": "imperfecto",
   "wrong": [
    "indefinido",
    "perfecto",
    "futuro"
   ],
   "level": "A1",
   "expl": "Thói quen."
  },
  {
   "kind": "choose",
   "q": "Mô tả bối cảnh (thời tiết, tuổi, giờ) dùng",
   "right": "imperfecto",
   "wrong": [
    "indefinido",
    "perfecto",
    "presente"
   ],
   "level": "A1",
   "expl": "Bối cảnh = imperfecto."
  },
  {
   "kind": "choose",
   "q": "Hành động ngắn xen vào hành động dài thì hành động ngắn dùng",
   "right": "indefinido",
   "wrong": [
    "imperfecto",
    "perfecto",
    "presente"
   ],
   "level": "B1",
   "expl": "Dormía cuando sonó el teléfono."
  },
  {
   "kind": "choose",
   "q": "“Mientras” thường đi với",
   "right": "imperfecto + imperfecto",
   "wrong": [
    "indefinido + indefinido",
    "presente + presente",
    "perfecto + indefinido"
   ],
   "level": "B1",
   "expl": "Hai hành động song song."
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

const RUSH=[["hablé · comiste · vivió", ["es-pas-indef-reg"]], ["busqué · llegué · empecé", ["es-pas-indef-reg"]], ["fui · hice · tuve", ["es-pas-indef-irr"]], ["dije · vine · pusiste", ["es-pas-indef-irr"]], ["hablaba · comía", ["es-pas-imperf"]], ["era · iba · veía", ["es-pas-imperf"]], ["ayer · anoche", ["es-pas-contraste"]], ["siempre · de niño · mientras", ["es-pas-contraste"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["pasado"] = { pool: POOL, types: TYPES, game: {title:"¿Qué pasado?",desc:"60 giây. Thấy dạng này, chọn đúng bài",prompt:"Dạng này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"pasRushBest"} };
})();
