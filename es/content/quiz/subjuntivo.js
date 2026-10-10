/* es/content/quiz/subjuntivo.js: subjuntivo hiện tại.
   Mixed exercise types: type the answer (fill, retry allowed) or pick one
   (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "es-sub-formas": [
  {
   "kind": "fill",
   "q": "Quiero que tú ___ español.",
   "hint": "hablar, ngôi tú",
   "accept": [
    "hables"
   ],
   "level": "B1",
   "expl": "-ar → -es."
  },
  {
   "kind": "fill",
   "q": "Espero que yo ___ bien.",
   "hint": "comer, ngôi yo",
   "accept": [
    "coma"
   ],
   "level": "B1",
   "expl": "-er → -a."
  },
  {
   "kind": "fill",
   "q": "Es importante que ella ___ bien.",
   "hint": "vivir, ngôi ella",
   "accept": [
    "viva"
   ],
   "level": "B1",
   "expl": "-ir → -a."
  },
  {
   "kind": "fill",
   "q": "Quiero que tú ___ suerte.",
   "hint": "tener, ngôi tú",
   "accept": [
    "tengas"
   ],
   "level": "B1",
   "expl": "Tener → teng-."
  },
  {
   "kind": "fill",
   "q": "Espero que tú ___ la tarea.",
   "hint": "hacer, ngôi tú",
   "accept": [
    "hagas"
   ],
   "level": "B1",
   "expl": "Hacer → hag-."
  },
  {
   "kind": "fill",
   "q": "Quiero que ella ___ la verdad.",
   "hint": "decir, ngôi ella",
   "accept": [
    "diga"
   ],
   "level": "B1",
   "expl": "Decir → dig-."
  },
  {
   "kind": "fill",
   "q": "Espero que tú ___ temprano.",
   "hint": "salir, ngôi tú",
   "accept": [
    "salgas"
   ],
   "level": "B1",
   "expl": "Salir → salg-."
  },
  {
   "kind": "fill",
   "q": "Quiero que ellos ___ una carta.",
   "hint": "escribir, ngôi ellos",
   "accept": [
    "escriban"
   ],
   "level": "B1",
   "expl": "-ir → -an."
  },
  {
   "kind": "fill",
   "q": "Es importante que nosotros ___ más.",
   "hint": "trabajar, ngôi nosotros",
   "accept": [
    "trabajemos"
   ],
   "level": "B1",
   "expl": "-ar → -emos."
  },
  {
   "kind": "fill",
   "q": "Espero que vosotros ___ mucho.",
   "hint": "estudiar, ngôi vosotros",
   "accept": [
    "estudiéis"
   ],
   "level": "B1",
   "expl": "-ar → -éis."
  },
  {
   "kind": "fill",
   "q": "Quiero que yo ___ mis llaves.",
   "hint": "buscar, ngôi yo",
   "accept": [
    "busque"
   ],
   "level": "B1",
   "expl": "c → qu."
  },
  {
   "kind": "fill",
   "q": "Espero que tú ___ a tiempo.",
   "hint": "llegar, ngôi tú",
   "accept": [
    "llegues"
   ],
   "level": "B1",
   "expl": "g → gu."
  },
  {
   "kind": "fill",
   "q": "Quiero que ella ___ a estudiar.",
   "hint": "empezar, ngôi ella",
   "accept": [
    "empiece"
   ],
   "level": "B1",
   "expl": "z → c, e → ie."
  },
  {
   "kind": "choose",
   "q": "Cách tạo subjuntivo hiện tại",
   "right": "Bỏ -o của yo, thêm đuôi “ngược”",
   "wrong": [
    "Thêm -ría",
    "Bỏ -r, thêm -d",
    "Dùng haber + phân từ"
   ],
   "level": "A1",
   "expl": "Hablo → hable."
  },
  {
   "kind": "choose",
   "q": "Subjuntivo thường dùng khi",
   "right": "hai mệnh đề có chủ ngữ khác nhau",
   "wrong": [
    "cùng chủ ngữ",
    "câu hỏi",
    "số đếm"
   ],
   "level": "A1",
   "expl": "Quiero que vengas."
  }
 ],
 "es-sub-irr": [
  {
   "kind": "fill",
   "q": "Quiero que tú ___ feliz.",
   "hint": "ser, ngôi tú",
   "accept": [
    "seas"
   ],
   "level": "B1",
   "expl": "Ser: seas."
  },
  {
   "kind": "fill",
   "q": "Espero que ella ___ bien.",
   "hint": "ser, ngôi ella",
   "accept": [
    "sea"
   ],
   "level": "B1",
   "expl": "Ser: sea."
  },
  {
   "kind": "fill",
   "q": "Espero que tú ___ bien.",
   "hint": "estar, ngôi tú",
   "accept": [
    "estés"
   ],
   "level": "B1",
   "expl": "Estar: estés."
  },
  {
   "kind": "fill",
   "q": "Quiero que ellos ___ aquí.",
   "hint": "estar, ngôi ellos",
   "accept": [
    "estén"
   ],
   "level": "B1",
   "expl": "Estar: estén."
  },
  {
   "kind": "fill",
   "q": "Quiero que tú ___ al médico.",
   "hint": "ir, ngôi tú",
   "accept": [
    "vayas"
   ],
   "level": "B1",
   "expl": "Ir: vayas."
  },
  {
   "kind": "fill",
   "q": "Quiero que nosotros ___ juntos.",
   "hint": "ir, ngôi nosotros",
   "accept": [
    "vayamos"
   ],
   "level": "B1",
   "expl": "Ir: vayamos."
  },
  {
   "kind": "fill",
   "q": "Espero que tú ___ la respuesta.",
   "hint": "saber, ngôi tú",
   "accept": [
    "sepas"
   ],
   "level": "B1",
   "expl": "Saber: sepas."
  },
  {
   "kind": "fill",
   "q": "Ojalá que yo ___ la verdad.",
   "hint": "saber, ngôi yo",
   "accept": [
    "sepa"
   ],
   "level": "B1",
   "expl": "Saber: sepa."
  },
  {
   "kind": "fill",
   "q": "Quiero que tú me ___ tu número.",
   "hint": "dar, ngôi tú",
   "accept": [
    "des"
   ],
   "level": "B1",
   "expl": "Dar: des."
  },
  {
   "kind": "fill",
   "q": "Quiero que él me ___ su número.",
   "hint": "dar, ngôi él",
   "accept": [
    "dé"
   ],
   "level": "B1",
   "expl": "Dar: dé (có dấu)."
  },
  {
   "kind": "fill",
   "q": "Espero que tú ___ ayudar.",
   "hint": "querer, ngôi tú",
   "accept": [
    "quieras"
   ],
   "level": "B1",
   "expl": "Querer: e → ie."
  },
  {
   "kind": "fill",
   "q": "Espero que tú ___ venir.",
   "hint": "poder, ngôi tú",
   "accept": [
    "puedas"
   ],
   "level": "B1",
   "expl": "Poder: o → ue."
  },
  {
   "kind": "fill",
   "q": "Quiero que nosotros ___ amigos.",
   "hint": "ser, ngôi nosotros",
   "accept": [
    "seamos"
   ],
   "level": "B1",
   "expl": "Ser: seamos."
  },
  {
   "kind": "fill",
   "q": "Quiero que ellos ___ a la fiesta.",
   "hint": "ir, ngôi ellos",
   "accept": [
    "vayan"
   ],
   "level": "B1",
   "expl": "Ir: vayan."
  },
  {
   "kind": "choose",
   "q": "Vì sao “dé” có dấu?",
   "right": "Phân biệt với giới từ “de”",
   "wrong": [
    "Là lỗi chính tả",
    "Là số nhiều",
    "Trọng âm giữa"
   ],
   "level": "A1",
   "expl": "Dé (dar) khác de (giới từ)."
  }
 ],
 "es-sub-deseo": [
  {
   "kind": "fill",
   "q": "Quiero que tú ___.",
   "hint": "venir, ngôi tú",
   "accept": [
    "vengas"
   ],
   "level": "B1",
   "expl": "Venir → vengas."
  },
  {
   "kind": "fill",
   "q": "Espero que te ___ el regalo.",
   "hint": "gustar",
   "accept": [
    "guste"
   ],
   "level": "B1",
   "expl": "Gustar → guste."
  },
  {
   "kind": "fill",
   "q": "Prefiero que ___ tú.",
   "hint": "hablar, ngôi tú",
   "accept": [
    "hables"
   ],
   "level": "B1",
   "expl": "Hablar → hables."
  },
  {
   "kind": "fill",
   "q": "Te pido que me ___.",
   "hint": "ayudar, ngôi tú",
   "accept": [
    "ayudes"
   ],
   "level": "B1",
   "expl": "Ayudar → ayudes."
  },
  {
   "kind": "fill",
   "q": "Te recomiendo que ___ Granada.",
   "hint": "visitar, ngôi tú",
   "accept": [
    "visites"
   ],
   "level": "B1",
   "expl": "Visitar → visites."
  },
  {
   "kind": "fill",
   "q": "Ojalá ___ mañana.",
   "hint": "llover",
   "accept": [
    "llueva"
   ],
   "level": "B1",
   "expl": "Llover → llueva."
  },
  {
   "kind": "fill",
   "q": "Necesito que me ___.",
   "hint": "escuchar, ngôi tú",
   "accept": [
    "escuches"
   ],
   "level": "B1",
   "expl": "Escuchar → escuches."
  },
  {
   "kind": "fill",
   "q": "Quiero que ellos ___ a la fiesta de mañana.",
   "hint": "ir, ngôi ellos",
   "accept": [
    "vayan"
   ],
   "level": "B1",
   "expl": "Ir → vayan."
  },
  {
   "kind": "fill",
   "q": "Espero que ___ buen tiempo.",
   "hint": "hacer",
   "accept": [
    "haga"
   ],
   "level": "B1",
   "expl": "Hacer → haga."
  },
  {
   "kind": "fill",
   "q": "Mi madre quiere que yo ___.",
   "hint": "estudiar, ngôi yo",
   "accept": [
    "estudie"
   ],
   "level": "B1",
   "expl": "Estudiar → estudie."
  },
  {
   "kind": "fill",
   "q": "Quiero ___ al cine.",
   "hint": "ir, cùng chủ ngữ",
   "accept": [
    "ir"
   ],
   "level": "B1",
   "expl": "Cùng chủ ngữ dùng nguyên mẫu."
  },
  {
   "kind": "fill",
   "q": "Espero ___ pronto.",
   "hint": "llegar, cùng chủ ngữ",
   "accept": [
    "llegar"
   ],
   "level": "B1",
   "expl": "Cùng chủ ngữ dùng nguyên mẫu."
  },
  {
   "kind": "choose",
   "q": "Cùng chủ ngữ thì sau “querer” dùng",
   "right": "nguyên mẫu",
   "wrong": [
    "subjuntivo",
    "indicativo",
    "gerundio"
   ],
   "level": "A1",
   "expl": "Quiero comer."
  },
  {
   "kind": "choose",
   "q": "Sau “ojalá” dùng",
   "right": "subjuntivo",
   "wrong": [
    "indicativo",
    "nguyên mẫu",
    "gerundio"
   ],
   "level": "A1",
   "expl": "Ojalá llueva."
  },
  {
   "kind": "choose",
   "q": "Câu đúng",
   "right": "Quiero que vengas",
   "wrong": [
    "Quiero que vienes",
    "Quiero que venir",
    "Quiero vengas"
   ],
   "level": "A1",
   "expl": "Que + subjuntivo."
  }
 ],
 "es-sub-duda": [
  {
   "kind": "fill",
   "q": "Me alegro de que tú ___ aquí.",
   "hint": "estar, ngôi tú",
   "accept": [
    "estés"
   ],
   "level": "B1",
   "expl": "Cảm xúc → subjuntivo."
  },
  {
   "kind": "fill",
   "q": "Dudo que él ___.",
   "hint": "venir",
   "accept": [
    "venga"
   ],
   "level": "B1",
   "expl": "Nghi ngờ → subjuntivo."
  },
  {
   "kind": "fill",
   "q": "No creo que ___ verdad.",
   "hint": "ser",
   "accept": [
    "sea"
   ],
   "level": "B1",
   "expl": "No creo que → subjuntivo."
  },
  {
   "kind": "fill",
   "q": "Es posible que ___.",
   "hint": "llover",
   "accept": [
    "llueva"
   ],
   "level": "B1",
   "expl": "Es posible que → subjuntivo."
  },
  {
   "kind": "fill",
   "q": "Creo que él ___.",
   "hint": "venir, indicativo",
   "accept": [
    "viene"
   ],
   "level": "B1",
   "expl": "Creo que → indicativo."
  },
  {
   "kind": "fill",
   "q": "Es verdad que ella ___ aquí.",
   "hint": "estar, indicativo",
   "accept": [
    "está"
   ],
   "level": "B1",
   "expl": "Es verdad que → indicativo."
  },
  {
   "kind": "fill",
   "q": "Te lo explico para que lo ___.",
   "hint": "entender, ngôi tú",
   "accept": [
    "entiendas"
   ],
   "level": "B1",
   "expl": "Para que → subjuntivo."
  },
  {
   "kind": "fill",
   "q": "Cuando ___, llámame.",
   "hint": "llegar, ngôi tú",
   "accept": [
    "llegues"
   ],
   "level": "B1",
   "expl": "Cuando + tương lai → subjuntivo."
  },
  {
   "kind": "fill",
   "q": "Antes de que te ___, dime.",
   "hint": "ir, ngôi tú",
   "accept": [
    "vayas"
   ],
   "level": "B1",
   "expl": "Antes de que → subjuntivo."
  },
  {
   "kind": "fill",
   "q": "Es una pena que no ___ venir.",
   "hint": "poder, ngôi tú",
   "accept": [
    "puedas"
   ],
   "level": "B1",
   "expl": "Đánh giá → subjuntivo."
  },
  {
   "kind": "fill",
   "q": "Quizás ___ mañana.",
   "hint": "venir, ngôi ella",
   "accept": [
    "venga"
   ],
   "level": "B1",
   "expl": "Quizás → subjuntivo."
  },
  {
   "kind": "fill",
   "q": "Me gusta que ___ así.",
   "hint": "hablar, ngôi tú",
   "accept": [
    "hables"
   ],
   "level": "B1",
   "expl": "Me gusta que → subjuntivo."
  },
  {
   "kind": "choose",
   "q": "“No creo que” + ?",
   "right": "subjuntivo",
   "wrong": [
    "indicativo",
    "nguyên mẫu",
    "gerundio"
   ],
   "level": "A1",
   "expl": "Phủ định niềm tin cần subjuntivo."
  },
  {
   "kind": "choose",
   "q": "“Creo que” + ?",
   "right": "indicativo",
   "wrong": [
    "subjuntivo",
    "nguyên mẫu",
    "gerundio"
   ],
   "level": "A1",
   "expl": "Chắc chắn dùng indicativo."
  },
  {
   "kind": "choose",
   "q": "“Cuando” chỉ tương lai + ?",
   "right": "subjuntivo",
   "wrong": [
    "indicativo",
    "condicional",
    "imperfecto"
   ],
   "level": "A1",
   "expl": "Cuando llegues, llámame."
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

const RUSH=[["que hables · que comas", ["es-sub-formas"]], ["tenga · haga · salga", ["es-sub-formas"]], ["sea · esté · vaya", ["es-sub-irr"]], ["sepa · dé · haya", ["es-sub-irr"]], ["quiero que · espero que", ["es-sub-deseo"]], ["ojalá", ["es-sub-deseo"]], ["dudo que · no creo que", ["es-sub-duda"]], ["para que · antes de que", ["es-sub-duda"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["subjuntivo"] = { pool: POOL, types: TYPES, game: {title:"¿Qué subjuntivo?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng bài",prompt:"Dấu hiệu này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"subRushBest"} };
})();
