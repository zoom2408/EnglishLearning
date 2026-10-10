/* es/content/quiz/preguntas.js: từ để hỏi, phủ định, giới từ.
   Mixed exercise types: type the answer (fill, retry allowed) or pick one
   (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "es-preg-interrogativos": [
  {
   "kind": "fill",
   "q": "¿___ te llamas?",
   "hint": "như thế nào",
   "accept": [
    "Cómo"
   ],
   "level": "A1",
   "expl": "Cómo = như thế nào."
  },
  {
   "kind": "fill",
   "q": "¿___ vives?",
   "hint": "ở đâu",
   "accept": [
    "Dónde"
   ],
   "level": "A1",
   "expl": "Dónde = ở đâu."
  },
  {
   "kind": "fill",
   "q": "¿___ llegas?",
   "hint": "khi nào",
   "accept": [
    "Cuándo"
   ],
   "level": "A1",
   "expl": "Cuándo = khi nào."
  },
  {
   "kind": "fill",
   "q": "¿___ es tu madre?",
   "hint": "ai",
   "accept": [
    "Quién"
   ],
   "level": "A1",
   "expl": "Quién = ai."
  },
  {
   "kind": "fill",
   "q": "¿___ años tienes?",
   "hint": "bao nhiêu, số nhiều",
   "accept": [
    "Cuántos"
   ],
   "level": "A1",
   "expl": "Cuántos khớp với años (số nhiều)."
  },
  {
   "kind": "fill",
   "q": "¿___ hora es?",
   "hint": "gì",
   "accept": [
    "Qué"
   ],
   "level": "A1",
   "expl": "Qué hora es = mấy giờ."
  },
  {
   "kind": "fill",
   "q": "¿___ estudias español?",
   "hint": "tại sao",
   "accept": [
    "Por qué"
   ],
   "level": "A1",
   "expl": "Por qué (hai từ) dùng để hỏi."
  },
  {
   "kind": "fill",
   "q": "Estudio español ___ me gusta.",
   "hint": "vì",
   "accept": [
    "porque"
   ],
   "level": "A1",
   "expl": "Porque (một từ) dùng để trả lời."
  },
  {
   "kind": "fill",
   "q": "¿___ prefieres, té o café?",
   "hint": "cái nào",
   "accept": [
    "Cuál"
   ],
   "level": "A1",
   "expl": "Cuál dùng khi chọn trong nhiều thứ."
  },
  {
   "kind": "fill",
   "q": "¿De ___ eres?",
   "hint": "đâu",
   "accept": [
    "dónde"
   ],
   "level": "A1",
   "expl": "De dónde eres = bạn từ đâu."
  },
  {
   "kind": "fill",
   "q": "¿___ cuesta?",
   "hint": "bao nhiêu (giá)",
   "accept": [
    "Cuánto"
   ],
   "level": "A1",
   "expl": "Cuánto cuesta = bao nhiêu tiền."
  },
  {
   "kind": "choose",
   "q": "Câu hỏi tiếng Tây Ban Nha mở đầu bằng",
   "right": "¿",
   "wrong": [
    "¡",
    "?",
    "«"
   ],
   "level": "A1",
   "expl": "Dấu ¿ ở đầu và ? ở cuối."
  },
  {
   "kind": "choose",
   "q": "Từ để hỏi (qué, cómo, dónde…) luôn",
   "right": "có dấu sắc",
   "wrong": [
    "viết hoa",
    "đứng cuối câu",
    "không có dấu"
   ],
   "level": "A1",
   "expl": "Phân biệt với que, como, donde là từ nối."
  },
  {
   "kind": "choose",
   "q": "“Porque” (một từ) dùng để",
   "right": "trả lời “vì”",
   "wrong": [
    "hỏi “tại sao”",
    "hỏi “ai”",
    "hỏi “khi nào”"
   ],
   "level": "A1",
   "expl": "Por qué hỏi, porque trả lời."
  },
  {
   "kind": "choose",
   "q": "Câu hỏi có / không đúng",
   "right": "¿Hablas español?",
   "wrong": [
    "¿Hablas tú español qué?",
    "¿Qué hablas español?",
    "Hablas español?"
   ],
   "level": "A1",
   "expl": "Giữ nguyên trật tự khẳng định, thêm ¿?."
  }
 ],
 "es-preg-negacion": [
  {
   "kind": "fill",
   "q": "Yo no ___ francés.",
   "hint": "hablar, ngôi yo",
   "accept": [
    "hablo"
   ],
   "level": "A1",
   "expl": "No + động từ."
  },
  {
   "kind": "fill",
   "q": "No como ___.",
   "hint": "không gì cả",
   "accept": [
    "nada"
   ],
   "level": "A1",
   "expl": "No … nada."
  },
  {
   "kind": "fill",
   "q": "___ bebo café.",
   "hint": "không bao giờ",
   "accept": [
    "Nunca"
   ],
   "level": "A1",
   "expl": "Nunca trước động từ thì không cần no."
  },
  {
   "kind": "fill",
   "q": "No veo a ___.",
   "hint": "không ai",
   "accept": [
    "nadie"
   ],
   "level": "A1",
   "expl": "No … nadie."
  },
  {
   "kind": "fill",
   "q": "No tengo ___ problema.",
   "hint": "không … nào",
   "accept": [
    "ningún"
   ],
   "level": "A1",
   "expl": "Ningún + danh từ giống đực số ít."
  },
  {
   "kind": "fill",
   "q": "Yo no fumo. Mi hermano ___ fuma.",
   "hint": "cũng không",
   "accept": [
    "tampoco"
   ],
   "level": "A1",
   "expl": "Tampoco = cũng không."
  },
  {
   "kind": "fill",
   "q": "No voy ___ al cine.",
   "hint": "không bao giờ",
   "accept": [
    "nunca"
   ],
   "level": "A1",
   "expl": "No … nunca."
  },
  {
   "kind": "fill",
   "q": "No viene ___.",
   "hint": "không ai",
   "accept": [
    "nadie"
   ],
   "level": "A1",
   "expl": "Nadie = không ai."
  },
  {
   "kind": "fill",
   "q": "___ tengo nada.",
   "hint": "Tôi không có gì",
   "accept": [
    "No"
   ],
   "level": "A1",
   "expl": "Nada sau động từ thì phải có no."
  },
  {
   "kind": "fill",
   "q": "Nunca ___ nada.",
   "hint": "hacer, ngôi yo, phủ định kép",
   "accept": [
    "hago"
   ],
   "level": "A1",
   "expl": "Nunca đứng trước nên không cần no."
  },
  {
   "kind": "fill",
   "q": "No quiero ___ más.",
   "hint": "không gì",
   "accept": [
    "nada"
   ],
   "level": "A1",
   "expl": "No … nada."
  },
  {
   "kind": "choose",
   "q": "Phủ định kép trong tiếng Tây Ban Nha",
   "right": "Bắt buộc nếu từ phủ định đứng sau động từ",
   "wrong": [
    "Bị cấm",
    "Chỉ dùng trong văn nói",
    "Chỉ dùng với nadie"
   ],
   "level": "A1",
   "expl": "No tengo nada là đúng."
  },
  {
   "kind": "choose",
   "q": "Câu đúng",
   "right": "No hablo nunca con él",
   "wrong": [
    "Hablo no nunca con él",
    "No hablo con él no",
    "Nunca no hablo con él"
   ],
   "level": "A1",
   "expl": "No + động từ + từ phủ định."
  },
  {
   "kind": "choose",
   "q": "Khi từ phủ định đứng trước động từ thì",
   "right": "bỏ no",
   "wrong": [
    "thêm no",
    "thêm hai no",
    "đổi thành tampoco"
   ],
   "level": "A1",
   "expl": "Nunca bebo café."
  },
  {
   "kind": "choose",
   "q": "Đồng ý với câu phủ định (“tôi cũng vậy”) dùng",
   "right": "tampoco",
   "wrong": [
    "también",
    "sí",
    "nunca"
   ],
   "level": "A1",
   "expl": "Tampoco = cũng không."
  }
 ],
 "es-preg-lugar": [
  {
   "kind": "fill",
   "q": "El libro está ___ la mesa.",
   "hint": "trên (chung)",
   "accept": [
    "en",
    "sobre"
   ],
   "level": "A1",
   "expl": "En = ở, trên, trong."
  },
  {
   "kind": "fill",
   "q": "El gato está ___ la silla.",
   "hint": "ở trên",
   "accept": [
    "sobre"
   ],
   "level": "A1",
   "expl": "Sobre = ở trên."
  },
  {
   "kind": "fill",
   "q": "La pelota está ___ de la mesa.",
   "hint": "ở dưới",
   "accept": [
    "debajo"
   ],
   "level": "A1",
   "expl": "Debajo de = dưới."
  },
  {
   "kind": "fill",
   "q": "El parque está ___ de la escuela.",
   "hint": "phía trước",
   "accept": [
    "delante"
   ],
   "level": "A1",
   "expl": "Delante de = phía trước."
  },
  {
   "kind": "fill",
   "q": "La farmacia está ___ el banco y el bar.",
   "hint": "giữa",
   "accept": [
    "entre"
   ],
   "level": "A1",
   "expl": "Entre = giữa."
  },
  {
   "kind": "fill",
   "q": "Vivo ___ de aquí.",
   "hint": "gần",
   "accept": [
    "cerca"
   ],
   "level": "A1",
   "expl": "Cerca de = gần."
  },
  {
   "kind": "fill",
   "q": "Mi casa está ___ de la ciudad.",
   "hint": "xa",
   "accept": [
    "lejos"
   ],
   "level": "A1",
   "expl": "Lejos de = xa."
  },
  {
   "kind": "fill",
   "q": "Estoy al ___ de ti.",
   "hint": "bên cạnh",
   "accept": [
    "lado"
   ],
   "level": "A1",
   "expl": "Al lado de = bên cạnh."
  },
  {
   "kind": "fill",
   "q": "El perro está ___ de la casa.",
   "hint": "bên ngoài",
   "accept": [
    "fuera"
   ],
   "level": "A1",
   "expl": "Fuera de = bên ngoài."
  },
  {
   "kind": "fill",
   "q": "La lámpara está ___ de la mesa.",
   "hint": "phía trên bề mặt",
   "accept": [
    "encima"
   ],
   "level": "A1",
   "expl": "Encima de = bên trên."
  },
  {
   "kind": "fill",
   "q": "Vivo cerca ___ parque.",
   "hint": "de + el",
   "accept": [
    "del"
   ],
   "level": "A1",
   "expl": "de + el = del."
  },
  {
   "kind": "choose",
   "q": "“detrás de” nghĩa là",
   "right": "phía sau",
   "wrong": [
    "phía trước",
    "bên cạnh",
    "giữa"
   ],
   "level": "A1",
   "expl": "Detrás de = phía sau."
  },
  {
   "kind": "choose",
   "q": "Cách viết đúng",
   "right": "cerca del parque",
   "wrong": [
    "cerca de el parque",
    "cerca el parque",
    "cerca al parque"
   ],
   "level": "A1",
   "expl": "de + el = del."
  },
  {
   "kind": "choose",
   "q": "Giới từ chỉ vị trí thường đi với",
   "right": "estar",
   "wrong": [
    "ser",
    "tener",
    "hay"
   ],
   "level": "A1",
   "expl": "Hỏi vị trí dùng estar."
  },
  {
   "kind": "choose",
   "q": "Đối nghĩa của “lejos de”",
   "right": "cerca de",
   "wrong": [
    "detrás de",
    "entre",
    "sobre"
   ],
   "level": "A1",
   "expl": "Cerca ≠ lejos."
  }
 ],
 "es-preg-a-de-en": [
  {
   "kind": "fill",
   "q": "Voy ___ la escuela.",
   "hint": "đến",
   "accept": [
    "a"
   ],
   "level": "A1",
   "expl": "Chuyển động đến: a."
  },
  {
   "kind": "fill",
   "q": "Soy ___ Vietnam.",
   "hint": "từ",
   "accept": [
    "de"
   ],
   "level": "A1",
   "expl": "Nguồn gốc: de."
  },
  {
   "kind": "fill",
   "q": "Vivo ___ Madrid.",
   "hint": "ở",
   "accept": [
    "en"
   ],
   "level": "A1",
   "expl": "Vị trí: en."
  },
  {
   "kind": "fill",
   "q": "Llego ___ las ocho.",
   "hint": "lúc",
   "accept": [
    "a"
   ],
   "level": "A1",
   "expl": "Giờ giấc: a."
  },
  {
   "kind": "fill",
   "q": "El libro es ___ Ana.",
   "hint": "của",
   "accept": [
    "de"
   ],
   "level": "A1",
   "expl": "Sở hữu: de."
  },
  {
   "kind": "fill",
   "q": "Viajo ___ tren.",
   "hint": "bằng",
   "accept": [
    "en"
   ],
   "level": "A1",
   "expl": "Phương tiện: en."
  },
  {
   "kind": "fill",
   "q": "Una mesa ___ madera.",
   "hint": "bằng chất liệu",
   "accept": [
    "de"
   ],
   "level": "A1",
   "expl": "Chất liệu: de."
  },
  {
   "kind": "fill",
   "q": "Veo ___ María.",
   "hint": "a cá nhân",
   "accept": [
    "a"
   ],
   "level": "A1",
   "expl": "Trước tân ngữ là người: a."
  },
  {
   "kind": "fill",
   "q": "Vengo ___ la oficina.",
   "hint": "từ",
   "accept": [
    "de"
   ],
   "level": "A1",
   "expl": "Xuất phát từ: de."
  },
  {
   "kind": "fill",
   "q": "Estamos ___ casa.",
   "hint": "ở",
   "accept": [
    "en"
   ],
   "level": "A1",
   "expl": "Vị trí: en."
  },
  {
   "kind": "fill",
   "q": "Conozco ___ tu hermano.",
   "hint": "a cá nhân",
   "accept": [
    "a"
   ],
   "level": "A1",
   "expl": "Người quen biết: a."
  },
  {
   "kind": "fill",
   "q": "Voy ___ pie.",
   "hint": "đi bộ",
   "accept": [
    "a"
   ],
   "level": "A1",
   "expl": "Cụm cố định: a pie."
  },
  {
   "kind": "choose",
   "q": "“A cá nhân” dùng trước",
   "right": "tân ngữ trực tiếp là người",
   "wrong": [
    "mọi danh từ",
    "chủ ngữ",
    "tính từ"
   ],
   "level": "A1",
   "expl": "Veo a María."
  },
  {
   "kind": "choose",
   "q": "Câu đúng",
   "right": "Voy a la escuela",
   "wrong": [
    "Voy en la escuela",
    "Voy de la escuela",
    "Voy la escuela"
   ],
   "level": "A1",
   "expl": "Chuyển động đến dùng a."
  },
  {
   "kind": "choose",
   "q": "Vì sao “Veo la tele” không có a?",
   "right": "Tele không phải người",
   "wrong": [
    "Tele là số nhiều",
    "Tele giống cái",
    "Động từ ver cấm dùng a"
   ],
   "level": "A2",
   "expl": "A cá nhân chỉ dùng cho người."
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

const RUSH=[["¿Qué? ¿Dónde? ¿Cuándo?", ["es-preg-interrogativos"]], ["por qué · porque", ["es-preg-interrogativos"]], ["no … nada · no … nunca", ["es-preg-negacion"]], ["tampoco", ["es-preg-negacion"]], ["al lado de · entre", ["es-preg-lugar"]], ["cerca del parque", ["es-preg-lugar"]], ["voy a · soy de · vivo en", ["es-preg-a-de-en"]], ["a cá nhân", ["es-preg-a-de-en"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["preguntas"] = { pool: POOL, types: TYPES, game: {title:"¿Qué preposición?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng bài",prompt:"Dấu hiệu này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"pregRushBest"} };
})();
