/* es/content/quiz/tiempos.js: practice questions for the Spanish
   tenses module. BANK groups items by tense code
   (ps/ind/imp/pf/pqp/fut/cond) — TN[c] maps each code to its row id
   (defined in content/theory/tiempos.js, loaded first). Mixed types:
   type the correct form of the verb in brackets (fill) or pick one
   (choose). Wrong answers can be retried (retry:true). */
(() => {
const BANK = {
 "ps": [
  {
   "kind": "fill",
   "q": "Todos los días ___ (desayunar, yo) a las ocho.",
   "hint": "desayunar, ngôi yo",
   "accept": [
    "desayuno"
   ],
   "level": "A1",
   "expl": "Thói quen hằng ngày: presente."
  },
  {
   "kind": "fill",
   "q": "Mi hermana ___ (vivir) en Lima ahora.",
   "hint": "vivir, ngôi ella",
   "accept": [
    "vive"
   ],
   "level": "A1",
   "expl": "Thực trạng hiện tại: presente."
  },
  {
   "kind": "fill",
   "q": "Nosotros ___ (querer) un café, por favor.",
   "hint": "querer, ngôi nosotros",
   "accept": [
    "queremos"
   ],
   "level": "A1",
   "expl": "Nosotros không đổi nguyên âm."
  },
  {
   "kind": "fill",
   "q": "Siempre ___ (hacer, yo) la cena a las nueve.",
   "hint": "hacer, ngôi yo",
   "accept": [
    "hago"
   ],
   "level": "A1",
   "expl": "Hacer bất quy tắc ở yo: hago."
  },
  {
   "kind": "fill",
   "q": "¿A qué hora ___ (empezar, tú) la clase?",
   "hint": "empezar, ngôi tú",
   "accept": [
    "empiezas"
   ],
   "level": "A2",
   "expl": "Empezar: e → ie."
  },
  {
   "kind": "fill",
   "q": "Los lunes ellos ___ (ir) al gimnasio.",
   "hint": "ir, ngôi ellos",
   "accept": [
    "van"
   ],
   "level": "A1",
   "expl": "Ir: van."
  },
  {
   "kind": "fill",
   "q": "Mañana ___ (viajar, yo) a Madrid.",
   "hint": "viajar, ngôi yo",
   "accept": [
    "viajo"
   ],
   "level": "A2",
   "expl": "Presente có thể diễn tả tương lai gần."
  },
  {
   "kind": "fill",
   "q": "Yo ___ (saber) la respuesta.",
   "hint": "saber, ngôi yo",
   "accept": [
    "sé"
   ],
   "level": "A1",
   "expl": "Saber: yo sé."
  },
  {
   "kind": "fill",
   "q": "¿___ (poder, tú) venir hoy?",
   "hint": "poder, ngôi tú",
   "accept": [
    "Puedes"
   ],
   "level": "A1",
   "expl": "Poder: o → ue."
  },
  {
   "kind": "choose",
   "q": "Presente dùng để diễn tả",
   "right": "thói quen, sự thật và tương lai gần",
   "wrong": [
    "chỉ quá khứ",
    "chỉ mệnh lệnh",
    "chỉ điều giả định"
   ],
   "level": "A1",
   "expl": "Presente rất đa năng."
  }
 ],
 "ind": [
  {
   "kind": "fill",
   "q": "Ayer ___ (comer, yo) en un restaurante.",
   "hint": "comer, ngôi yo",
   "accept": [
    "comí"
   ],
   "level": "A2",
   "expl": "-er, yo: -í."
  },
  {
   "kind": "fill",
   "q": "Anoche ella ___ (ver) una película.",
   "hint": "ver, ngôi ella",
   "accept": [
    "vio"
   ],
   "level": "A2",
   "expl": "Ver: vio (không dấu)."
  },
  {
   "kind": "fill",
   "q": "El año pasado nosotros ___ (viajar) a Perú.",
   "hint": "viajar, ngôi nosotros",
   "accept": [
    "viajamos"
   ],
   "level": "A2",
   "expl": "-ar, nosotros: -amos (giống presente)."
  },
  {
   "kind": "fill",
   "q": "Ayer yo ___ (ir) al cine.",
   "hint": "ir, ngôi yo",
   "accept": [
    "fui"
   ],
   "level": "A2",
   "expl": "Ir: fui."
  },
  {
   "kind": "fill",
   "q": "La semana pasada ellos ___ (hacer) un examen.",
   "hint": "hacer, ngôi ellos",
   "accept": [
    "hicieron"
   ],
   "level": "A2",
   "expl": "Hacer: hicieron."
  },
  {
   "kind": "fill",
   "q": "Ayer yo ___ (tener) mucho trabajo.",
   "hint": "tener, ngôi yo",
   "accept": [
    "tuve"
   ],
   "level": "A2",
   "expl": "Tener: tuve."
  },
  {
   "kind": "fill",
   "q": "Hace dos años ___ (llegar, yo) a Madrid.",
   "hint": "llegar, ngôi yo",
   "accept": [
    "llegué"
   ],
   "level": "B1",
   "expl": "-gar: g → gu ở yo."
  },
  {
   "kind": "fill",
   "q": "El lunes tú me ___ (decir) la verdad.",
   "hint": "decir, ngôi tú",
   "accept": [
    "dijiste"
   ],
   "level": "B1",
   "expl": "Decir: dijiste."
  },
  {
   "kind": "fill",
   "q": "Ayer ella ___ (venir) a mi casa.",
   "hint": "venir, ngôi ella",
   "accept": [
    "vino"
   ],
   "level": "A2",
   "expl": "Venir: vino."
  },
  {
   "kind": "choose",
   "q": "“Ayer” và “anoche” thường đi với",
   "right": "indefinido",
   "wrong": [
    "imperfecto",
    "perfecto",
    "futuro"
   ],
   "level": "A2",
   "expl": "Thời điểm đã xong."
  }
 ],
 "imp": [
  {
   "kind": "fill",
   "q": "De niño ___ (jugar, yo) al fútbol todos los días.",
   "hint": "jugar, ngôi yo",
   "accept": [
    "jugaba"
   ],
   "level": "A2",
   "expl": "Thói quen quá khứ: imperfecto."
  },
  {
   "kind": "fill",
   "q": "Cuando ___ (ser, yo) pequeño, vivía en Lima.",
   "hint": "ser, ngôi yo",
   "accept": [
    "era"
   ],
   "level": "A2",
   "expl": "Mô tả lúc nhỏ: era."
  },
  {
   "kind": "fill",
   "q": "Mientras ella ___ (cocinar), yo leía.",
   "hint": "cocinar, ngôi ella",
   "accept": [
    "cocinaba"
   ],
   "level": "B1",
   "expl": "Mientras: imperfecto."
  },
  {
   "kind": "fill",
   "q": "Antes ___ (ir, nosotros) a la playa cada verano.",
   "hint": "ir, ngôi nosotros",
   "accept": [
    "íbamos"
   ],
   "level": "A2",
   "expl": "Ir: íbamos."
  },
  {
   "kind": "fill",
   "q": "Hacía frío y ___ (nevar).",
   "hint": "nevar",
   "accept": [
    "nevaba"
   ],
   "level": "B1",
   "expl": "Bối cảnh: imperfecto."
  },
  {
   "kind": "fill",
   "q": "Mi abuela siempre ___ (hablar) mucho de niña.",
   "hint": "hablar, ngôi ella",
   "accept": [
    "hablaba"
   ],
   "level": "A2",
   "expl": "Thói quen quá khứ."
  },
  {
   "kind": "fill",
   "q": "Todas las noches ellos ___ (ver) la tele.",
   "hint": "ver, ngôi ellos",
   "accept": [
    "veían"
   ],
   "level": "A2",
   "expl": "Ver: veían."
  },
  {
   "kind": "fill",
   "q": "___ (ser) las tres cuando llegué.",
   "hint": "ser, giờ giấc",
   "accept": [
    "Eran"
   ],
   "level": "A2",
   "expl": "Giờ giấc trong quá khứ: imperfecto."
  },
  {
   "kind": "fill",
   "q": "De niña ___ (tener, yo) un perro.",
   "hint": "tener, ngôi yo",
   "accept": [
    "tenía"
   ],
   "level": "A2",
   "expl": "Tener: tenía."
  },
  {
   "kind": "choose",
   "q": "Imperfecto dùng để",
   "right": "mô tả bối cảnh và thói quen quá khứ",
   "wrong": [
    "kể sự kiện đã xong",
    "nói tương lai",
    "ra lệnh"
   ],
   "level": "A2",
   "expl": "Bối cảnh = imperfecto."
  }
 ],
 "pf": [
  {
   "kind": "fill",
   "q": "Hoy ___ (trabajar, yo) mucho.",
   "hint": "trabajar, ngôi yo",
   "accept": [
    "he trabajado"
   ],
   "level": "A2",
   "expl": "Hoy: perfecto."
  },
  {
   "kind": "fill",
   "q": "¿Alguna vez ___ (estar, tú) en Madrid?",
   "hint": "estar, ngôi tú",
   "accept": [
    "has estado"
   ],
   "level": "A2",
   "expl": "Alguna vez: perfecto."
  },
  {
   "kind": "fill",
   "q": "Nunca ___ (comer, yo) paella.",
   "hint": "comer, ngôi yo",
   "accept": [
    "he comido"
   ],
   "level": "A2",
   "expl": "Nunca: perfecto."
  },
  {
   "kind": "fill",
   "q": "Esta semana nosotros ___ (viajar) mucho.",
   "hint": "viajar, ngôi nosotros",
   "accept": [
    "hemos viajado"
   ],
   "level": "A2",
   "expl": "Esta semana: perfecto."
  },
  {
   "kind": "fill",
   "q": "Ya ___ (hacer, yo) la tarea.",
   "hint": "hacer, ngôi yo",
   "accept": [
    "he hecho"
   ],
   "level": "A2",
   "expl": "Participio bất quy tắc: hecho."
  },
  {
   "kind": "fill",
   "q": "Todavía no ___ (llegar) ella.",
   "hint": "llegar, ngôi ella",
   "accept": [
    "ha llegado"
   ],
   "level": "A2",
   "expl": "Todavía no: perfecto."
  },
  {
   "kind": "fill",
   "q": "Este año ellos ___ (escribir) dos libros.",
   "hint": "escribir, ngôi ellos",
   "accept": [
    "han escrito"
   ],
   "level": "B1",
   "expl": "Escribir: escrito."
  },
  {
   "kind": "fill",
   "q": "Esta mañana ___ (ver, yo) a tu hermano.",
   "hint": "ver, ngôi yo",
   "accept": [
    "he visto"
   ],
   "level": "B1",
   "expl": "Ver: visto."
  },
  {
   "kind": "fill",
   "q": "Últimamente ___ (dormir, yo) poco.",
   "hint": "dormir, ngôi yo",
   "accept": [
    "he dormido"
   ],
   "level": "B1",
   "expl": "Últimamente: perfecto."
  },
  {
   "kind": "choose",
   "q": "“Hoy”, “esta semana”, “este año” thường đi với",
   "right": "perfecto",
   "wrong": [
    "indefinido",
    "imperfecto",
    "futuro"
   ],
   "level": "A2",
   "expl": "Thời gian chưa kết thúc."
  }
 ],
 "pqp": [
  {
   "kind": "fill",
   "q": "Cuando llegué, ellos ya ___ (salir).",
   "hint": "salir, ngôi ellos",
   "accept": [
    "habían salido"
   ],
   "level": "B1",
   "expl": "Xảy ra trước mốc quá khứ."
  },
  {
   "kind": "fill",
   "q": "Antes de viajar, yo ya ___ (comprar) el billete.",
   "hint": "comprar, ngôi yo",
   "accept": [
    "había comprado"
   ],
   "level": "B1",
   "expl": "Había + participio."
  },
  {
   "kind": "fill",
   "q": "No ___ (dormir, yo) y estaba cansado.",
   "hint": "dormir, ngôi yo",
   "accept": [
    "había dormido"
   ],
   "level": "B1",
   "expl": "Nguyên nhân trong quá khứ."
  },
  {
   "kind": "fill",
   "q": "Ya ___ (terminar, nosotros) cuando llamó.",
   "hint": "terminar, ngôi nosotros",
   "accept": [
    "habíamos terminado"
   ],
   "level": "B1",
   "expl": "Habíamos + participio."
  },
  {
   "kind": "fill",
   "q": "Ella nunca ___ (estar) en Roma antes de 2019.",
   "hint": "estar, ngôi ella",
   "accept": [
    "había estado"
   ],
   "level": "B1",
   "expl": "Việc xảy ra trước một mốc quá khứ."
  },
  {
   "kind": "fill",
   "q": "Cuando llamó, yo ya ___ (comer).",
   "hint": "comer, ngôi yo",
   "accept": [
    "había comido"
   ],
   "level": "B1",
   "expl": "Había + participio."
  },
  {
   "kind": "fill",
   "q": "¿___ (ver, tú) esa película antes?",
   "hint": "ver, ngôi tú",
   "accept": [
    "Habías visto"
   ],
   "level": "B1",
   "expl": "Habías + participio."
  },
  {
   "kind": "fill",
   "q": "Ellos ya ___ (hacer) la tarea cuando llegó.",
   "hint": "hacer, ngôi ellos",
   "accept": [
    "habían hecho"
   ],
   "level": "B1",
   "expl": "Habían + participio."
  },
  {
   "kind": "fill",
   "q": "Cuando llegamos, la película ya ___ (empezar).",
   "hint": "empezar, ngôi ella",
   "accept": [
    "había empezado"
   ],
   "level": "B1",
   "expl": "Había + participio."
  },
  {
   "kind": "choose",
   "q": "Pluscuamperfecto diễn tả",
   "right": "việc xảy ra trước một hành động quá khứ khác",
   "wrong": [
    "thói quen hiện tại",
    "việc sắp xảy ra",
    "mệnh lệnh"
   ],
   "level": "B1",
   "expl": "Quá khứ của quá khứ."
  }
 ],
 "fut": [
  {
   "kind": "fill",
   "q": "Mañana ___ (llover).",
   "hint": "llover",
   "accept": [
    "lloverá"
   ],
   "level": "A2",
   "expl": "Nguyên mẫu + -á."
  },
  {
   "kind": "fill",
   "q": "El año que viene yo ___ (estudiar) alemán.",
   "hint": "estudiar, ngôi yo",
   "accept": [
    "estudiaré"
   ],
   "level": "A2",
   "expl": "Nguyên mẫu + -é."
  },
  {
   "kind": "fill",
   "q": "Tú ___ (tener) tiempo mañana.",
   "hint": "tener, ngôi tú",
   "accept": [
    "tendrás"
   ],
   "level": "A2",
   "expl": "Tener: tendr-."
  },
  {
   "kind": "fill",
   "q": "Ella ___ (venir) a la fiesta.",
   "hint": "venir, ngôi ella",
   "accept": [
    "vendrá"
   ],
   "level": "A2",
   "expl": "Venir: vendr-."
  },
  {
   "kind": "fill",
   "q": "Nosotros ___ (hacer) la cena.",
   "hint": "hacer, ngôi nosotros",
   "accept": [
    "haremos"
   ],
   "level": "A2",
   "expl": "Hacer: har-."
  },
  {
   "kind": "fill",
   "q": "Te ___ (llamar, yo) mañana.",
   "hint": "llamar, ngôi yo",
   "accept": [
    "llamaré"
   ],
   "level": "A2",
   "expl": "Lời hứa: futuro."
  },
  {
   "kind": "fill",
   "q": "Ellos ___ (poder) ayudarte.",
   "hint": "poder, ngôi ellos",
   "accept": [
    "podrán"
   ],
   "level": "A2",
   "expl": "Poder: podr-."
  },
  {
   "kind": "fill",
   "q": "Yo ___ (salir) a las ocho.",
   "hint": "salir, ngôi yo",
   "accept": [
    "saldré"
   ],
   "level": "A2",
   "expl": "Salir: saldr-."
  },
  {
   "kind": "fill",
   "q": "Si estudias, ___ (aprobar, tú).",
   "hint": "aprobar, ngôi tú",
   "accept": [
    "aprobarás"
   ],
   "level": "A2",
   "expl": "Si + presente → futuro."
  },
  {
   "kind": "fill",
   "q": "Mañana voy a ___ (estudiar).",
   "hint": "ir a + nguyên mẫu",
   "accept": [
    "estudiar"
   ],
   "level": "A2",
   "expl": "Ir a + nguyên mẫu: tương lai gần."
  }
 ],
 "cond": [
  {
   "kind": "fill",
   "q": "Me ___ (gustar) un café.",
   "hint": "gustar, lịch sự",
   "accept": [
    "gustaría"
   ],
   "level": "A2",
   "expl": "Lịch sự: condicional."
  },
  {
   "kind": "fill",
   "q": "¿___ (poder, tú) ayudarme?",
   "hint": "poder, ngôi tú",
   "accept": [
    "Podrías"
   ],
   "level": "A2",
   "expl": "Poder: podr- + -ías."
  },
  {
   "kind": "fill",
   "q": "Yo que tú, ___ (ir) al médico.",
   "hint": "ir, ngôi yo",
   "accept": [
    "iría"
   ],
   "level": "B1",
   "expl": "Khuyên nhủ: condicional."
  },
  {
   "kind": "fill",
   "q": "Con más dinero, yo ___ (viajar) más.",
   "hint": "viajar, ngôi yo",
   "accept": [
    "viajaría"
   ],
   "level": "B1",
   "expl": "Giả định: condicional."
  },
  {
   "kind": "fill",
   "q": "Ella ___ (tener) más tiempo si no trabajara.",
   "hint": "tener, ngôi ella",
   "accept": [
    "tendría"
   ],
   "level": "B1",
   "expl": "Tener: tendr- + -ía."
  },
  {
   "kind": "fill",
   "q": "Dijo que ___ (venir) mañana.",
   "hint": "venir, ngôi él",
   "accept": [
    "vendría"
   ],
   "level": "B1",
   "expl": "Tường thuật: condicional."
  },
  {
   "kind": "fill",
   "q": "Nosotros ___ (comer) fuera.",
   "hint": "comer, ngôi nosotros",
   "accept": [
    "comeríamos"
   ],
   "level": "B1",
   "expl": "Nguyên mẫu + -íamos."
  },
  {
   "kind": "fill",
   "q": "Me dijo que me ___ (llamar).",
   "hint": "llamar, ngôi él",
   "accept": [
    "llamaría"
   ],
   "level": "B1",
   "expl": "Tường thuật: condicional."
  },
  {
   "kind": "fill",
   "q": "¿___ (poder, usted) abrir la ventana?",
   "hint": "poder, ngôi usted",
   "accept": [
    "Podría"
   ],
   "level": "B1",
   "expl": "Lịch sự: condicional."
  },
  {
   "kind": "choose",
   "q": "Condicional dùng để",
   "right": "lịch sự, khuyên nhủ, giả định",
   "wrong": [
    "thói quen quá khứ",
    "mệnh lệnh",
    "việc đã xong"
   ],
   "level": "A2",
   "expl": "Me gustaría, yo iría."
  }
 ]
};

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Câu ngữ cảnh, gõ dạng đúng của động từ"},
 choose:{name:"Chọn đáp án",desc:"Chọn một trong bốn lựa chọn"},
};
const POOL=[];
Object.entries(BANK).forEach(([c, items]) => items.forEach(it => {
 const extra = {retry:true, level:it.level, tense:TN[c]};
 if (it.kind === "fill") POOL.push(Object.assign(inQ("fill", fmt(it.q.replace(/ \(.+?\)/,"")), `Gợi ý: <b>${esc(it.hint)}</b>. Gõ phần điền vào chỗ trống.`, it.accept, TN[c], it.expl), extra));
 else POOL.push(Object.assign(mcQ("choose", fmt(it.q), "Chọn đáp án đúng.", it.right, it.wrong, TN[c], it.expl), extra));
}));

const RUSH=[["todos los días", ["ps"]], ["normalmente", ["ps"]], ["ahora", ["ps"]], ["cada semana", ["ps"]], ["ayer", ["ind"]], ["anoche", ["ind"]], ["el año pasado", ["ind"]], ["hace dos años", ["ind"]], ["en 2019", ["ind"]], ["de repente", ["ind"]], ["de niño", ["imp"]], ["mientras", ["imp"]], ["cuando era pequeño", ["imp"]], ["siempre", ["ps", "imp"], "siempre có thể đi với presente (thói quen hiện tại) hoặc imperfecto (thói quen trong quá khứ)."], ["hoy", ["pf"]], ["esta semana", ["pf"]], ["este año", ["pf"]], ["alguna vez", ["pf"]], ["nunca", ["pf"]], ["todavía no", ["pf"]], ["últimamente", ["pf"]], ["ya", ["pf", "pqp"], "ya có thể đi với perfecto (đã xảy ra) hoặc pluscuamperfecto (đã xảy ra trước một mốc quá khứ khác)."], ["antes de + inf.", ["pqp"]], ["cuando llegué, ya…", ["pqp"]], ["mañana", ["fut"]], ["el año que viene", ["fut"]], ["algún día", ["fut"]], ["dentro de + thời gian", ["fut"]], ["me gustaría", ["cond"]], ["yo que tú", ["cond"]], ["¿podrías…?", ["cond"]], ["dijo que + condicional", ["cond"]]];

GRAMMAR.quiz["tiempos"] = { pool: POOL, types: TYPES, game: {title:"¿Qué tiempo?",desc:"60 giây. Thấy ayer, siempre, ya… chọn đúng thì càng nhanh càng tốt",prompt:"Thấy dấu hiệu này, dùng thì nào?",items:RUSH,all:CODES,label:c=>tLabel(TN[c]),name:c=>byId[TN[c]].vi,bestKey:"esRushBest"} };
})();
