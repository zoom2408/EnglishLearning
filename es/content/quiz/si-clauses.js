/* es/content/quiz/si-clauses.js: subjuntivo quá khứ và câu điều kiện.
   Mixed exercise types: type the answer (fill, retry allowed) or pick one
   (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "es-si-formas": [
  {
   "kind": "fill",
   "q": "hablar, ellos → yo ___ (subjuntivo imperfecto)",
   "hint": "hablaron → …",
   "accept": [
    "hablara"
   ],
   "level": "B2",
   "expl": "Hablaron − ron + ra."
  },
  {
   "kind": "fill",
   "q": "comer → tú ___",
   "hint": "comieron → …",
   "accept": [
    "comieras"
   ],
   "level": "B2",
   "expl": "Comieron − ron + ras."
  },
  {
   "kind": "fill",
   "q": "tener → yo ___",
   "hint": "tuvieron → …",
   "accept": [
    "tuviera"
   ],
   "level": "B2",
   "expl": "Tuvieron − ron + ra."
  },
  {
   "kind": "fill",
   "q": "ser → yo ___",
   "hint": "fueron → …",
   "accept": [
    "fuera"
   ],
   "level": "B2",
   "expl": "Fueron − ron + ra."
  },
  {
   "kind": "fill",
   "q": "ir → ellos ___",
   "hint": "fueron → …",
   "accept": [
    "fueran"
   ],
   "level": "B2",
   "expl": "Fueron − ron + ran."
  },
  {
   "kind": "fill",
   "q": "hacer → tú ___",
   "hint": "hicieron → …",
   "accept": [
    "hicieras"
   ],
   "level": "B2",
   "expl": "Hicieron − ron + ras."
  },
  {
   "kind": "fill",
   "q": "decir → ella ___",
   "hint": "dijeron → …",
   "accept": [
    "dijera"
   ],
   "level": "B2",
   "expl": "Dijeron − ron + ra."
  },
  {
   "kind": "fill",
   "q": "poder → yo ___",
   "hint": "pudieron → …",
   "accept": [
    "pudiera"
   ],
   "level": "B2",
   "expl": "Pudieron − ron + ra."
  },
  {
   "kind": "fill",
   "q": "querer → yo ___ (lịch sự)",
   "hint": "quisieron → …",
   "accept": [
    "quisiera"
   ],
   "level": "B2",
   "expl": "Quisieron − ron + ra."
  },
  {
   "kind": "fill",
   "q": "estar → nosotros ___",
   "hint": "estuvieron → …",
   "accept": [
    "estuviéramos"
   ],
   "level": "B2",
   "expl": "Có dấu ở nosotros."
  },
  {
   "kind": "fill",
   "q": "venir → tú ___",
   "hint": "vinieron → …",
   "accept": [
    "vinieras"
   ],
   "level": "B2",
   "expl": "Vinieron − ron + ras."
  },
  {
   "kind": "fill",
   "q": "saber → ellos ___",
   "hint": "supieron → …",
   "accept": [
    "supieran"
   ],
   "level": "B2",
   "expl": "Supieron − ron + ran."
  },
  {
   "kind": "choose",
   "q": "Cách tạo subjuntivo imperfecto",
   "right": "ellos indef − ron + ra, ras, ra…",
   "wrong": [
    "Bỏ -ar thêm -ase",
    "Thêm -ía vào nguyên mẫu",
    "haber + phân từ"
   ],
   "level": "B2",
   "expl": "Hablaron → hablara."
  },
  {
   "kind": "choose",
   "q": "Ngôi nosotros của subjuntivo imperfecto",
   "right": "có dấu: habláramos",
   "wrong": [
    "không dấu: hablaramos",
    "dùng -mos",
    "dùng -ríamos"
   ],
   "level": "B2",
   "expl": "Có dấu để giữ trọng âm."
  },
  {
   "kind": "choose",
   "q": "“Quisiera un café” dùng để",
   "right": "yêu cầu lịch sự",
   "wrong": [
    "kể quá khứ",
    "ra lệnh",
    "dự đoán"
   ],
   "level": "B2",
   "expl": "Quisiera = me gustaría."
  }
 ],
 "es-si-real": [
  {
   "kind": "fill",
   "q": "Si ___, me quedo en casa.",
   "hint": "llover",
   "accept": [
    "llueve"
   ],
   "level": "A2",
   "expl": "Si + presente."
  },
  {
   "kind": "fill",
   "q": "Si ___ (tú), aprobarás.",
   "hint": "estudiar",
   "accept": [
    "estudias"
   ],
   "level": "A2",
   "expl": "Si + presente."
  },
  {
   "kind": "fill",
   "q": "Si tienes sed, ___ agua.",
   "hint": "beber, imperativo tú",
   "accept": [
    "bebe"
   ],
   "level": "A2",
   "expl": "Mệnh lệnh."
  },
  {
   "kind": "fill",
   "q": "Si hace buen tiempo, ___ a la playa.",
   "hint": "ir, nosotros, futuro",
   "accept": [
    "iremos"
   ],
   "level": "B1",
   "expl": "Kết quả: futuro."
  },
  {
   "kind": "fill",
   "q": "Si ___ tiempo, te llamaré.",
   "hint": "tener, ngôi yo",
   "accept": [
    "tengo"
   ],
   "level": "A2",
   "expl": "Si + presente."
  },
  {
   "kind": "fill",
   "q": "Si no ___ pronto, perderás el tren.",
   "hint": "llegar, ngôi tú",
   "accept": [
    "llegas"
   ],
   "level": "A2",
   "expl": "Si + presente."
  },
  {
   "kind": "fill",
   "q": "Si ___, vamos.",
   "hint": "querer, ngôi tú",
   "accept": [
    "quieres"
   ],
   "level": "A2",
   "expl": "Si + presente."
  },
  {
   "kind": "fill",
   "q": "Si me ___, terminaré hoy.",
   "hint": "ayudar, ngôi tú",
   "accept": [
    "ayudas"
   ],
   "level": "A2",
   "expl": "Si + presente."
  },
  {
   "kind": "fill",
   "q": "Si ___ mucho, engordarás.",
   "hint": "comer, ngôi tú",
   "accept": [
    "comes"
   ],
   "level": "A2",
   "expl": "Si + presente."
  },
  {
   "kind": "fill",
   "q": "Si te duele la cabeza, ___ una pastilla.",
   "hint": "tomar, imperativo tú",
   "accept": [
    "toma"
   ],
   "level": "A2",
   "expl": "Mệnh lệnh."
  },
  {
   "kind": "fill",
   "q": "Si ___ posible, iré.",
   "hint": "ser",
   "accept": [
    "es"
   ],
   "level": "A2",
   "expl": "Si + presente."
  },
  {
   "kind": "choose",
   "q": "Sau “si” (điều kiện có thể xảy ra) dùng",
   "right": "presente",
   "wrong": [
    "futuro",
    "subjuntivo presente",
    "condicional"
   ],
   "level": "A2",
   "expl": "Si llueve…"
  },
  {
   "kind": "choose",
   "q": "Câu đúng",
   "right": "Si llueve, me quedo",
   "wrong": [
    "Si lloverá, me quedo",
    "Si lluevo, me quedo",
    "Si llovería, me quedo"
   ],
   "level": "A2",
   "expl": "Si + presente."
  },
  {
   "kind": "choose",
   "q": "Câu sai",
   "right": "Si lloverá, me quedaré",
   "wrong": [
    "Si llueve, me quedaré",
    "Si estudias, aprobarás",
    "Si tienes sed, bebe"
   ],
   "level": "A2",
   "expl": "Không dùng futuro sau si."
  },
  {
   "kind": "choose",
   "q": "Mệnh đề kết quả có thể là",
   "right": "presente, futuro hoặc mệnh lệnh",
   "wrong": [
    "chỉ condicional",
    "chỉ subjuntivo",
    "chỉ pretérito"
   ],
   "level": "B1",
   "expl": "Si hace sol, voy / iré / ven."
  }
 ],
 "es-si-irreal": [
  {
   "kind": "fill",
   "q": "Si ___ dinero, viajaría.",
   "hint": "tener, ngôi yo",
   "accept": [
    "tuviera"
   ],
   "level": "B2",
   "expl": "Si + subjuntivo imperfecto."
  },
  {
   "kind": "fill",
   "q": "Si yo ___ tú, hablaría con él.",
   "hint": "ser",
   "accept": [
    "fuera"
   ],
   "level": "B2",
   "expl": "Si yo fuera tú."
  },
  {
   "kind": "fill",
   "q": "Si ganara la lotería, ___ una casa.",
   "hint": "comprar, ngôi yo",
   "accept": [
    "compraría"
   ],
   "level": "B2",
   "expl": "Condicional."
  },
  {
   "kind": "fill",
   "q": "Si ___, te ayudaría.",
   "hint": "poder, ngôi yo",
   "accept": [
    "pudiera"
   ],
   "level": "B2",
   "expl": "Si + subjuntivo imperfecto."
  },
  {
   "kind": "fill",
   "q": "Si ___ en España, comeríamos más paella.",
   "hint": "vivir, ngôi nosotros",
   "accept": [
    "viviéramos"
   ],
   "level": "B2",
   "expl": "Có dấu ở nosotros."
  },
  {
   "kind": "fill",
   "q": "Si tú ___, podríamos ir.",
   "hint": "querer, ngôi tú",
   "accept": [
    "quisieras"
   ],
   "level": "B2",
   "expl": "Si + subjuntivo imperfecto."
  },
  {
   "kind": "fill",
   "q": "Si no ___ hoy, iríamos al parque.",
   "hint": "llover",
   "accept": [
    "lloviera"
   ],
   "level": "B2",
   "expl": "Si + subjuntivo imperfecto."
  },
  {
   "kind": "fill",
   "q": "Si ___ la respuesta, te la diría.",
   "hint": "saber, ngôi yo",
   "accept": [
    "supiera"
   ],
   "level": "B2",
   "expl": "Si + subjuntivo imperfecto."
  },
  {
   "kind": "fill",
   "q": "Si ___ deporte, estarías más sano.",
   "hint": "hacer, ngôi tú",
   "accept": [
    "hicieras"
   ],
   "level": "B2",
   "expl": "Si + subjuntivo imperfecto."
  },
  {
   "kind": "fill",
   "q": "Ojalá ___ más tiempo.",
   "hint": "tener, ngôi yo",
   "accept": [
    "tuviera"
   ],
   "level": "B2",
   "expl": "Ojalá + subjuntivo imperfecto."
  },
  {
   "kind": "fill",
   "q": "Si estudiaras más, ___.",
   "hint": "aprobar, ngôi tú",
   "accept": [
    "aprobarías"
   ],
   "level": "B2",
   "expl": "Condicional."
  },
  {
   "kind": "fill",
   "q": "Habla como si ___ un experto.",
   "hint": "ser",
   "accept": [
    "fuera"
   ],
   "level": "B2",
   "expl": "Como si + subjuntivo imperfecto."
  },
  {
   "kind": "choose",
   "q": "Sau “si” (không có thật ở hiện tại) dùng",
   "right": "subjuntivo imperfecto",
   "wrong": [
    "presente",
    "condicional",
    "futuro"
   ],
   "level": "B2",
   "expl": "Si tuviera…"
  },
  {
   "kind": "choose",
   "q": "Mệnh đề kết quả dùng",
   "right": "condicional",
   "wrong": [
    "subjuntivo",
    "futuro",
    "imperfecto"
   ],
   "level": "B2",
   "expl": "…viajaría."
  },
  {
   "kind": "choose",
   "q": "“Si yo fuera tú” dùng để",
   "right": "khuyên nhủ",
   "wrong": [
    "kể quá khứ",
    "ra lệnh",
    "hỏi đường"
   ],
   "level": "B2",
   "expl": "Cụm cố định."
  }
 ],
 "es-si-pasado": [
  {
   "kind": "fill",
   "q": "Si hubiera ___, habría aprobado.",
   "hint": "estudiar",
   "accept": [
    "estudiado"
   ],
   "level": "B2",
   "expl": "Hubiera + phân từ."
  },
  {
   "kind": "fill",
   "q": "Si ___ estudiado, habría aprobado.",
   "hint": "haber, subjuntivo imperfecto",
   "accept": [
    "hubiera"
   ],
   "level": "B2",
   "expl": "Hubiera."
  },
  {
   "kind": "fill",
   "q": "Si hubiera estudiado, ___ aprobado.",
   "hint": "haber, condicional",
   "accept": [
    "habría"
   ],
   "level": "B2",
   "expl": "Habría."
  },
  {
   "kind": "fill",
   "q": "Si hubiera sabido, no habría ___.",
   "hint": "venir",
   "accept": [
    "venido"
   ],
   "level": "B2",
   "expl": "Hubiera + phân từ."
  },
  {
   "kind": "fill",
   "q": "Ojalá ___ ido contigo.",
   "hint": "haber, subjuntivo imperfecto",
   "accept": [
    "hubiera"
   ],
   "level": "B2",
   "expl": "Tiếc nuối."
  },
  {
   "kind": "fill",
   "q": "Si hubiéramos salido temprano, no ___ perdido el tren.",
   "hint": "haber, nosotros",
   "accept": [
    "habríamos"
   ],
   "level": "B2",
   "expl": "Habríamos."
  },
  {
   "kind": "fill",
   "q": "Si hubieras llamado, te ___ ayudado.",
   "hint": "haber, ngôi yo, condicional",
   "accept": [
    "habría"
   ],
   "level": "B2",
   "expl": "Habría."
  },
  {
   "kind": "fill",
   "q": "Si ___ llegado antes, habría visto la película.",
   "hint": "haber, ngôi yo",
   "accept": [
    "hubiera"
   ],
   "level": "B2",
   "expl": "Hubiera."
  },
  {
   "kind": "fill",
   "q": "Si hubiera ___ la señal, habría parado.",
   "hint": "ver",
   "accept": [
    "visto"
   ],
   "level": "B2",
   "expl": "Visto."
  },
  {
   "kind": "fill",
   "q": "Si hubiéramos ___ a las ocho, habríamos llegado.",
   "hint": "salir",
   "accept": [
    "salido"
   ],
   "level": "B2",
   "expl": "Salido."
  },
  {
   "kind": "fill",
   "q": "Si no hubiera ___, habríamos ido.",
   "hint": "llover",
   "accept": [
    "llovido"
   ],
   "level": "B2",
   "expl": "Llovido."
  },
  {
   "kind": "choose",
   "q": "Si + hubiera + phân từ → ?",
   "right": "habría + phân từ",
   "wrong": [
    "presente",
    "futuro",
    "hubiera + phân từ"
   ],
   "level": "B2",
   "expl": "Si hubiera ido, habría visto…"
  },
  {
   "kind": "choose",
   "q": "Loại câu này dùng cho",
   "right": "quá khứ trái sự thật",
   "wrong": [
    "hiện tại có thật",
    "tương lai",
    "thói quen"
   ],
   "level": "B2",
   "expl": "Điều đã không xảy ra."
  },
  {
   "kind": "choose",
   "q": "Câu sai",
   "right": "Si habría estudiado, habría aprobado",
   "wrong": [
    "Si hubiera estudiado, habría aprobado",
    "Si hubiera ido, habría visto",
    "Si hubiera sabido, no habría ido"
   ],
   "level": "B2",
   "expl": "Không dùng condicional sau si."
  },
  {
   "kind": "choose",
   "q": "“Ojalá hubiera ido” diễn tả",
   "right": "tiếc nuối",
   "wrong": [
    "kế hoạch",
    "lời hứa",
    "mệnh lệnh"
   ],
   "level": "B2",
   "expl": "Điều ước trái quá khứ."
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

const RUSH=[["hablara · tuviera · fuera", ["es-si-formas"]], ["quisiera", ["es-si-formas"]], ["si llueve, …", ["es-si-real"]], ["si estudias, aprobarás", ["es-si-real"]], ["si tuviera, viajaría", ["es-si-irreal"]], ["si yo fuera tú", ["es-si-irreal"]], ["si hubiera estudiado, …", ["es-si-pasado"]], ["ojalá hubiera…", ["es-si-pasado"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["si-clauses"] = { pool: POOL, types: TYPES, game: {title:"¿Qué condición?",desc:"60 giây. Thấy dạng này, chọn đúng bài",prompt:"Dạng này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"siRushBest"} };
})();
