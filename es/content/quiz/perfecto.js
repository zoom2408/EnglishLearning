/* es/content/quiz/perfecto.js: phân từ, perfecto, pluscuamperfecto.
   Mixed exercise types: type the answer (fill, retry allowed) or pick one
   (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "es-perf-participio": [
  {
   "kind": "fill",
   "q": "hablar → ___",
   "hint": "phân từ",
   "accept": [
    "hablado"
   ],
   "level": "A2",
   "expl": "-ar → -ado."
  },
  {
   "kind": "fill",
   "q": "comer → ___",
   "hint": "phân từ",
   "accept": [
    "comido"
   ],
   "level": "A2",
   "expl": "-er → -ido."
  },
  {
   "kind": "fill",
   "q": "vivir → ___",
   "hint": "phân từ",
   "accept": [
    "vivido"
   ],
   "level": "A2",
   "expl": "-ir → -ido."
  },
  {
   "kind": "fill",
   "q": "hacer → ___",
   "hint": "phân từ",
   "accept": [
    "hecho"
   ],
   "level": "A2",
   "expl": "Bất quy tắc."
  },
  {
   "kind": "fill",
   "q": "decir → ___",
   "hint": "phân từ",
   "accept": [
    "dicho"
   ],
   "level": "A2",
   "expl": "Bất quy tắc."
  },
  {
   "kind": "fill",
   "q": "escribir → ___",
   "hint": "phân từ",
   "accept": [
    "escrito"
   ],
   "level": "A2",
   "expl": "Bất quy tắc."
  },
  {
   "kind": "fill",
   "q": "ver → ___",
   "hint": "phân từ",
   "accept": [
    "visto"
   ],
   "level": "A2",
   "expl": "Bất quy tắc."
  },
  {
   "kind": "fill",
   "q": "poner → ___",
   "hint": "phân từ",
   "accept": [
    "puesto"
   ],
   "level": "A2",
   "expl": "Bất quy tắc."
  },
  {
   "kind": "fill",
   "q": "abrir → ___",
   "hint": "phân từ",
   "accept": [
    "abierto"
   ],
   "level": "A2",
   "expl": "Bất quy tắc."
  },
  {
   "kind": "fill",
   "q": "volver → ___",
   "hint": "phân từ",
   "accept": [
    "vuelto"
   ],
   "level": "A2",
   "expl": "Bất quy tắc."
  },
  {
   "kind": "fill",
   "q": "romper → ___",
   "hint": "phân từ",
   "accept": [
    "roto"
   ],
   "level": "A2",
   "expl": "Bất quy tắc."
  },
  {
   "kind": "fill",
   "q": "leer → ___",
   "hint": "phân từ, có dấu",
   "accept": [
    "leído"
   ],
   "level": "B1",
   "expl": "Gốc kết thúc bằng nguyên âm: -ído."
  },
  {
   "kind": "fill",
   "q": "La puerta está ___. (abrir, giống cái)",
   "hint": "phân từ làm tính từ",
   "accept": [
    "abierta"
   ],
   "level": "B1",
   "expl": "Phân từ làm tính từ khớp giống số."
  },
  {
   "kind": "choose",
   "q": "Phân từ của động từ -ar kết thúc bằng",
   "right": "-ado",
   "wrong": [
    "-ido",
    "-ando",
    "-ato"
   ],
   "level": "A2",
   "expl": "Hablar → hablado."
  },
  {
   "kind": "choose",
   "q": "Vì sao “he hacido” sai?",
   "right": "Hacer có phân từ bất quy tắc là hecho",
   "wrong": [
    "Hacer không có phân từ",
    "Phải dùng ha",
    "Phải dùng estar"
   ],
   "level": "A2",
   "expl": "He hecho."
  }
 ],
 "es-perf-presente": [
  {
   "kind": "fill",
   "q": "Yo ___ comido.",
   "hint": "haber, ngôi yo",
   "accept": [
    "he"
   ],
   "level": "A2",
   "expl": "Haber: he."
  },
  {
   "kind": "fill",
   "q": "Tú ___ visto esa película.",
   "hint": "haber, ngôi tú",
   "accept": [
    "has"
   ],
   "level": "A2",
   "expl": "Haber: has."
  },
  {
   "kind": "fill",
   "q": "Ella ___ llegado.",
   "hint": "haber, ngôi ella",
   "accept": [
    "ha"
   ],
   "level": "A2",
   "expl": "Haber: ha."
  },
  {
   "kind": "fill",
   "q": "Nosotros ___ hablado hoy.",
   "hint": "haber, ngôi nosotros",
   "accept": [
    "hemos"
   ],
   "level": "A2",
   "expl": "Haber: hemos."
  },
  {
   "kind": "fill",
   "q": "Vosotros ___ terminado.",
   "hint": "haber, ngôi vosotros",
   "accept": [
    "habéis"
   ],
   "level": "A2",
   "expl": "Haber: habéis."
  },
  {
   "kind": "fill",
   "q": "Ellos ___ salido.",
   "hint": "haber, ngôi ellos",
   "accept": [
    "han"
   ],
   "level": "A2",
   "expl": "Haber: han."
  },
  {
   "kind": "fill",
   "q": "Hoy he ___ mucho.",
   "hint": "trabajar",
   "accept": [
    "trabajado"
   ],
   "level": "A2",
   "expl": "Participio -ado."
  },
  {
   "kind": "fill",
   "q": "¿Alguna vez has ___ en Madrid?",
   "hint": "estar",
   "accept": [
    "estado"
   ],
   "level": "A2",
   "expl": "Participio -ado."
  },
  {
   "kind": "fill",
   "q": "Nunca he ___ paella.",
   "hint": "comer",
   "accept": [
    "comido"
   ],
   "level": "A2",
   "expl": "Participio -ido."
  },
  {
   "kind": "fill",
   "q": "Ya he ___ la tarea.",
   "hint": "hacer",
   "accept": [
    "hecho"
   ],
   "level": "A2",
   "expl": "Participio bất quy tắc."
  },
  {
   "kind": "fill",
   "q": "Todavía no ha ___.",
   "hint": "llegar",
   "accept": [
    "llegado"
   ],
   "level": "A2",
   "expl": "Participio -ado."
  },
  {
   "kind": "fill",
   "q": "Esta semana hemos ___ mucho.",
   "hint": "viajar",
   "accept": [
    "viajado"
   ],
   "level": "A2",
   "expl": "Participio -ado."
  },
  {
   "kind": "choose",
   "q": "Pretérito perfecto được tạo bởi",
   "right": "haber (hiện tại) + phân từ",
   "wrong": [
    "ser + phân từ",
    "haber (quá khứ) + phân từ",
    "estar + gerundio"
   ],
   "level": "A2",
   "expl": "He + hablado."
  },
  {
   "kind": "choose",
   "q": "Phân từ trong thì perfecto",
   "right": "không đổi giống và số",
   "wrong": [
    "đổi theo giống",
    "đổi theo số",
    "đổi theo ngôi"
   ],
   "level": "A2",
   "expl": "He comido, hemos comido."
  },
  {
   "kind": "choose",
   "q": "Câu đúng",
   "right": "No lo he visto",
   "wrong": [
    "No he lo visto",
    "He no lo visto",
    "No he visto lo"
   ],
   "level": "B1",
   "expl": "Đại từ và no đứng trước haber."
  }
 ],
 "es-perf-pluscuamperfecto": [
  {
   "kind": "fill",
   "q": "Yo ___ comido antes de salir.",
   "hint": "haber, ngôi yo",
   "accept": [
    "había"
   ],
   "level": "B1",
   "expl": "Imperfecto của haber."
  },
  {
   "kind": "fill",
   "q": "Antes del estreno, tú ya ___ visto esa película.",
   "hint": "haber, ngôi tú",
   "accept": [
    "habías"
   ],
   "level": "B1",
   "expl": "Habías."
  },
  {
   "kind": "fill",
   "q": "Ella ya ___ salido.",
   "hint": "haber, ngôi ella",
   "accept": [
    "había"
   ],
   "level": "B1",
   "expl": "Había."
  },
  {
   "kind": "fill",
   "q": "Nosotros ___ terminado a las tres.",
   "hint": "haber, ngôi nosotros",
   "accept": [
    "habíamos"
   ],
   "level": "B1",
   "expl": "Habíamos."
  },
  {
   "kind": "fill",
   "q": "Vosotros ___ hablado antes.",
   "hint": "haber, ngôi vosotros",
   "accept": [
    "habíais"
   ],
   "level": "B1",
   "expl": "Habíais."
  },
  {
   "kind": "fill",
   "q": "Ellos ya ___ llegado.",
   "hint": "haber, ngôi ellos",
   "accept": [
    "habían"
   ],
   "level": "B1",
   "expl": "Habían."
  },
  {
   "kind": "fill",
   "q": "Cuando llegué, ellos ya habían ___.",
   "hint": "salir",
   "accept": [
    "salido"
   ],
   "level": "B1",
   "expl": "Participio -ido."
  },
  {
   "kind": "fill",
   "q": "No ___ dormido y estaba cansado.",
   "hint": "haber, ngôi yo",
   "accept": [
    "había"
   ],
   "level": "B1",
   "expl": "Había + participio."
  },
  {
   "kind": "fill",
   "q": "Antes de viajar, ya ___ comprado el billete.",
   "hint": "haber, ngôi ellos",
   "accept": [
    "habían"
   ],
   "level": "B1",
   "expl": "Habían."
  },
  {
   "kind": "fill",
   "q": "Cuando llamó, yo ya había ___.",
   "hint": "comer",
   "accept": [
    "comido"
   ],
   "level": "B1",
   "expl": "Participio -ido."
  },
  {
   "kind": "fill",
   "q": "Ya ___ hecho la tarea cuando llegó.",
   "hint": "haber, ngôi yo",
   "accept": [
    "había"
   ],
   "level": "B1",
   "expl": "Había + hecho."
  },
  {
   "kind": "choose",
   "q": "Pluscuamperfecto được tạo bởi",
   "right": "haber (imperfecto) + phân từ",
   "wrong": [
    "haber (hiện tại) + phân từ",
    "ser + phân từ",
    "estar + gerundio"
   ],
   "level": "B1",
   "expl": "Había + hablado."
  },
  {
   "kind": "choose",
   "q": "Pluscuamperfecto diễn tả",
   "right": "hành động xảy ra trước một hành động quá khứ khác",
   "wrong": [
    "hành động ở hiện tại",
    "hành động trong tương lai",
    "mệnh lệnh"
   ],
   "level": "B1",
   "expl": "Quá khứ của quá khứ."
  },
  {
   "kind": "choose",
   "q": "Câu đúng",
   "right": "Cuando llegué, ya habían salido",
   "wrong": [
    "Cuando llegué, ya salieron",
    "Cuando llegué, ya han salido",
    "Cuando llegué, ya salen"
   ],
   "level": "B1",
   "expl": "Việc xảy ra trước mốc quá khứ."
  },
  {
   "kind": "choose",
   "q": "Cặp thường gặp khi kể chuyện",
   "right": "indefinido + pluscuamperfecto",
   "wrong": [
    "presente + futuro",
    "perfecto + presente",
    "imperfecto + futuro"
   ],
   "level": "B1",
   "expl": "Llegué y ya habían empezado."
  }
 ],
 "es-perf-contraste": [
  {
   "kind": "fill",
   "q": "Hoy ___ comido en casa.",
   "hint": "haber, ngôi yo",
   "accept": [
    "he"
   ],
   "level": "B1",
   "expl": "Hoy: perfecto."
  },
  {
   "kind": "fill",
   "q": "Ayer ___ en un restaurante.",
   "hint": "comer, ngôi yo",
   "accept": [
    "comí"
   ],
   "level": "B1",
   "expl": "Ayer: indefinido."
  },
  {
   "kind": "fill",
   "q": "Esta mañana ___ café.",
   "hint": "beber, ngôi yo, perfecto",
   "accept": [
    "he bebido"
   ],
   "level": "B1",
   "expl": "Esta mañana: perfecto."
  },
  {
   "kind": "fill",
   "q": "El año pasado ___ a Perú.",
   "hint": "viajar, ngôi yo",
   "accept": [
    "viajé"
   ],
   "level": "B1",
   "expl": "El año pasado: indefinido."
  },
  {
   "kind": "fill",
   "q": "¿Alguna vez ___ en Roma?",
   "hint": "estar, ngôi tú, perfecto",
   "accept": [
    "has estado"
   ],
   "level": "B1",
   "expl": "Alguna vez: perfecto."
  },
  {
   "kind": "fill",
   "q": "En 2019 ___ en Roma.",
   "hint": "estar, ngôi yo",
   "accept": [
    "estuve"
   ],
   "level": "B1",
   "expl": "Năm cụ thể: indefinido."
  },
  {
   "kind": "fill",
   "q": "Este año ___ mucho.",
   "hint": "trabajar, ngôi nosotros, perfecto",
   "accept": [
    "hemos trabajado"
   ],
   "level": "B1",
   "expl": "Este año: perfecto."
  },
  {
   "kind": "fill",
   "q": "Hace dos años ___ a Chile.",
   "hint": "ir, ngôi yo",
   "accept": [
    "fui"
   ],
   "level": "B1",
   "expl": "Hace + thời gian: indefinido."
  },
  {
   "kind": "fill",
   "q": "Ya ___ terminado.",
   "hint": "haber, ngôi yo",
   "accept": [
    "he"
   ],
   "level": "B1",
   "expl": "Ya: perfecto."
  },
  {
   "kind": "fill",
   "q": "El lunes pasado ___ clase.",
   "hint": "tener, ngôi nosotros",
   "accept": [
    "tuvimos"
   ],
   "level": "B1",
   "expl": "El lunes pasado: indefinido."
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
   "level": "B1",
   "expl": "Thời gian chưa kết thúc."
  },
  {
   "kind": "choose",
   "q": "“Ayer”, “el año pasado”, “en 2019” thường đi với",
   "right": "indefinido",
   "wrong": [
    "perfecto",
    "imperfecto",
    "futuro"
   ],
   "level": "B1",
   "expl": "Thời gian đã kết thúc."
  },
  {
   "kind": "choose",
   "q": "“Hace + thời gian” thường đi với",
   "right": "indefinido",
   "wrong": [
    "perfecto",
    "presente",
    "futuro"
   ],
   "level": "B1",
   "expl": "Hace dos años viajé."
  },
  {
   "kind": "choose",
   "q": "“Nunca” và “alguna vez” thường đi với",
   "right": "perfecto",
   "wrong": [
    "indefinido",
    "imperfecto",
    "futuro"
   ],
   "level": "B1",
   "expl": "Kinh nghiệm."
  },
  {
   "kind": "choose",
   "q": "Ở nhiều vùng Mỹ Latinh, với “hoy” thường dùng",
   "right": "indefinido",
   "wrong": [
    "perfecto",
    "pluscuamperfecto",
    "futuro"
   ],
   "level": "B1",
   "expl": "Vùng miền khác nhau."
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

const RUSH=[["hablado · comido · hecho", ["es-perf-participio"]], ["he · has · ha · hemos", ["es-perf-presente"]], ["hoy he … · nunca he …", ["es-perf-presente"]], ["había · habías · habían", ["es-perf-pluscuamperfecto"]], ["cuando llegué, ya habían …", ["es-perf-pluscuamperfecto"]], ["hoy · esta semana", ["es-perf-contraste"]], ["ayer · el año pasado", ["es-perf-contraste"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["perfecto"] = { pool: POOL, types: TYPES, game: {title:"¿Qué tiempo?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng bài",prompt:"Dấu hiệu này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"perRushBest"} };
})();
