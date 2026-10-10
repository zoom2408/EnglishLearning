/* es/content/quiz/futuro.js: futuro, condicional, phỏng đoán.
   Mixed exercise types: type the answer (fill, retry allowed) or pick one
   (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "es-fut-simple": [
  {
   "kind": "fill",
   "q": "Mañana yo ___ con él.",
   "hint": "hablar, ngôi yo",
   "accept": [
    "hablaré"
   ],
   "level": "A2",
   "expl": "Nguyên mẫu + -é."
  },
  {
   "kind": "fill",
   "q": "¿Tú ___ la cena?",
   "hint": "comer, ngôi tú",
   "accept": [
    "comerás"
   ],
   "level": "A2",
   "expl": "Nguyên mẫu + -ás."
  },
  {
   "kind": "fill",
   "q": "Ella ___ en Madrid.",
   "hint": "vivir, ngôi ella",
   "accept": [
    "vivirá"
   ],
   "level": "A2",
   "expl": "Nguyên mẫu + -á."
  },
  {
   "kind": "fill",
   "q": "Nosotros ___ en verano.",
   "hint": "viajar, ngôi nosotros",
   "accept": [
    "viajaremos"
   ],
   "level": "A2",
   "expl": "Nguyên mẫu + -emos."
  },
  {
   "kind": "fill",
   "q": "Vosotros ___ tarde.",
   "hint": "llegar, ngôi vosotros",
   "accept": [
    "llegaréis"
   ],
   "level": "A2",
   "expl": "Nguyên mẫu + -éis."
  },
  {
   "kind": "fill",
   "q": "Ellos ___ para el examen.",
   "hint": "estudiar, ngôi ellos",
   "accept": [
    "estudiarán"
   ],
   "level": "A2",
   "expl": "Nguyên mẫu + -án."
  },
  {
   "kind": "fill",
   "q": "El año que viene yo ___ en un banco.",
   "hint": "trabajar, ngôi yo",
   "accept": [
    "trabajaré"
   ],
   "level": "A2",
   "expl": "Nguyên mẫu + -é."
  },
  {
   "kind": "fill",
   "q": "Tú ___ una carta.",
   "hint": "escribir, ngôi tú",
   "accept": [
    "escribirás"
   ],
   "level": "A2",
   "expl": "Nguyên mẫu + -ás."
  },
  {
   "kind": "fill",
   "q": "Mañana ella ___ la película.",
   "hint": "ver, ngôi ella",
   "accept": [
    "verá"
   ],
   "level": "A2",
   "expl": "Ver → verá."
  },
  {
   "kind": "fill",
   "q": "Mañana ___ difícil.",
   "hint": "ser, ngôi él",
   "accept": [
    "será"
   ],
   "level": "A2",
   "expl": "Ser → será."
  },
  {
   "kind": "fill",
   "q": "Mañana yo ___ en casa.",
   "hint": "estar, ngôi yo",
   "accept": [
    "estaré"
   ],
   "level": "A2",
   "expl": "Estar → estaré."
  },
  {
   "kind": "fill",
   "q": "El próximo año nosotros ___ a Perú.",
   "hint": "ir, ngôi nosotros",
   "accept": [
    "iremos"
   ],
   "level": "A2",
   "expl": "Ir → iremos."
  },
  {
   "kind": "choose",
   "q": "Futuro simple được tạo bằng",
   "right": "nguyên mẫu + đuôi",
   "wrong": [
    "bỏ -r + đuôi",
    "gốc + -ré",
    "haber + phân từ"
   ],
   "level": "A2",
   "expl": "Hablar + é = hablaré."
  },
  {
   "kind": "choose",
   "q": "Ngôi nosotros của futuro có dấu không?",
   "right": "Không (-emos)",
   "wrong": [
    "Có (-émos)",
    "Có (-ámos)",
    "Tùy ý"
   ],
   "level": "A2",
   "expl": "Chỉ các ngôi yo, tú, él, vosotros, ellos có dấu."
  },
  {
   "kind": "choose",
   "q": "Futuro thường dùng để",
   "right": "dự đoán và lời hứa",
   "wrong": [
    "thói quen quá khứ",
    "mệnh lệnh",
    "hành động đã xong"
   ],
   "level": "A2",
   "expl": "Lloverá, te llamaré."
  }
 ],
 "es-fut-irr": [
  {
   "kind": "fill",
   "q": "Mañana yo ___ tiempo.",
   "hint": "tener, ngôi yo",
   "accept": [
    "tendré"
   ],
   "level": "B1",
   "expl": "Tener: tendr-."
  },
  {
   "kind": "fill",
   "q": "¿Tú ___ venir?",
   "hint": "poder, ngôi tú",
   "accept": [
    "podrás"
   ],
   "level": "B1",
   "expl": "Poder: podr-."
  },
  {
   "kind": "fill",
   "q": "Ella ___ la cena.",
   "hint": "hacer, ngôi ella",
   "accept": [
    "hará"
   ],
   "level": "B1",
   "expl": "Hacer: har-."
  },
  {
   "kind": "fill",
   "q": "Nosotros te lo ___.",
   "hint": "decir, ngôi nosotros",
   "accept": [
    "diremos"
   ],
   "level": "B1",
   "expl": "Decir: dir-."
  },
  {
   "kind": "fill",
   "q": "Vosotros ___ pronto.",
   "hint": "salir, ngôi vosotros",
   "accept": [
    "saldréis"
   ],
   "level": "B1",
   "expl": "Salir: saldr-."
  },
  {
   "kind": "fill",
   "q": "Ellos ___ mañana.",
   "hint": "venir, ngôi ellos",
   "accept": [
    "vendrán"
   ],
   "level": "B1",
   "expl": "Venir: vendr-."
  },
  {
   "kind": "fill",
   "q": "Yo ___ la mesa.",
   "hint": "poner, ngôi yo",
   "accept": [
    "pondré"
   ],
   "level": "B1",
   "expl": "Poner: pondr-."
  },
  {
   "kind": "fill",
   "q": "Tú ___ la respuesta.",
   "hint": "saber, ngôi tú",
   "accept": [
    "sabrás"
   ],
   "level": "B1",
   "expl": "Saber: sabr-."
  },
  {
   "kind": "fill",
   "q": "Ella no ___ ir.",
   "hint": "querer, ngôi ella",
   "accept": [
    "querrá"
   ],
   "level": "B1",
   "expl": "Querer: querr-."
  },
  {
   "kind": "fill",
   "q": "Mañana ___ una fiesta.",
   "hint": "haber, không ngôi",
   "accept": [
    "habrá"
   ],
   "level": "B1",
   "expl": "Haber: habrá."
  },
  {
   "kind": "fill",
   "q": "Nosotros ___ clase.",
   "hint": "tener, ngôi nosotros",
   "accept": [
    "tendremos"
   ],
   "level": "B1",
   "expl": "Tener: tendr-."
  },
  {
   "kind": "fill",
   "q": "Yo lo ___ mañana.",
   "hint": "hacer, ngôi yo",
   "accept": [
    "haré"
   ],
   "level": "B1",
   "expl": "Hacer: har-."
  },
  {
   "kind": "fill",
   "q": "Yo ___ a las ocho.",
   "hint": "salir, ngôi yo",
   "accept": [
    "saldré"
   ],
   "level": "B1",
   "expl": "Salir: saldr-."
  },
  {
   "kind": "fill",
   "q": "Yo te lo ___.",
   "hint": "decir, ngôi yo",
   "accept": [
    "diré"
   ],
   "level": "B1",
   "expl": "Decir: dir-."
  },
  {
   "kind": "choose",
   "q": "Vì sao “tenderé” sai?",
   "right": "Tener đổi gốc thành tendr- ở futuro",
   "wrong": [
    "Tener không có futuro",
    "Phải dùng ha",
    "Phải dùng estar"
   ],
   "level": "A1",
   "expl": "Tendré, tendrás…"
  }
 ],
 "es-fut-cond": [
  {
   "kind": "fill",
   "q": "Yo ___ con él.",
   "hint": "hablar, ngôi yo",
   "accept": [
    "hablaría"
   ],
   "level": "B1",
   "expl": "Nguyên mẫu + -ía."
  },
  {
   "kind": "fill",
   "q": "Tú ___ mucho.",
   "hint": "comer, ngôi tú",
   "accept": [
    "comerías"
   ],
   "level": "B1",
   "expl": "Nguyên mẫu + -ías."
  },
  {
   "kind": "fill",
   "q": "Si pudiera, ella ___ en Madrid.",
   "hint": "vivir, ngôi ella",
   "accept": [
    "viviría"
   ],
   "level": "B1",
   "expl": "Nguyên mẫu + -ía."
  },
  {
   "kind": "fill",
   "q": "Nosotros ___ más.",
   "hint": "viajar, ngôi nosotros",
   "accept": [
    "viajaríamos"
   ],
   "level": "B1",
   "expl": "Nguyên mẫu + -íamos."
  },
  {
   "kind": "fill",
   "q": "¿___ ayudarme? (lịch sự)",
   "hint": "poder, ngôi tú",
   "accept": [
    "Podrías"
   ],
   "level": "B1",
   "expl": "Poder: podr- + -ías."
  },
  {
   "kind": "fill",
   "q": "Yo ___ más tiempo.",
   "hint": "tener, ngôi yo",
   "accept": [
    "tendría"
   ],
   "level": "B1",
   "expl": "Tener: tendr- + -ía."
  },
  {
   "kind": "fill",
   "q": "Ellos ___ un gran trabajo.",
   "hint": "hacer, ngôi ellos",
   "accept": [
    "harían"
   ],
   "level": "B1",
   "expl": "Hacer: har- + -ían."
  },
  {
   "kind": "fill",
   "q": "Yo que tú, ___ al médico.",
   "hint": "ir, ngôi yo",
   "accept": [
    "iría"
   ],
   "level": "B1",
   "expl": "Ir + -ía."
  },
  {
   "kind": "fill",
   "q": "Me ___ un café.",
   "hint": "gustar, lịch sự",
   "accept": [
    "gustaría"
   ],
   "level": "B1",
   "expl": "Gustar + -ía."
  },
  {
   "kind": "fill",
   "q": "¿___ abrir la ventana?",
   "hint": "poder, ngôi usted",
   "accept": [
    "Podría"
   ],
   "level": "B1",
   "expl": "Poder: podr- + -ía."
  },
  {
   "kind": "fill",
   "q": "Con más dinero, yo ___ más.",
   "hint": "viajar, ngôi yo",
   "accept": [
    "viajaría"
   ],
   "level": "B1",
   "expl": "Giả định."
  },
  {
   "kind": "fill",
   "q": "Yo ___ eso por ti.",
   "hint": "hacer, ngôi yo",
   "accept": [
    "haría"
   ],
   "level": "B1",
   "expl": "Hacer: har- + -ía."
  },
  {
   "kind": "choose",
   "q": "Condicional dùng để",
   "right": "lịch sự, khuyên, giả định",
   "wrong": [
    "thói quen quá khứ",
    "mệnh lệnh",
    "hành động đã xong"
   ],
   "level": "A1",
   "expl": "Me gustaría, yo iría."
  },
  {
   "kind": "choose",
   "q": "Câu lịch sự hơn",
   "right": "¿Podría ayudarme?",
   "wrong": [
    "¿Puedes ayudarme?",
    "¡Ayúdame!",
    "Ayuda"
   ],
   "level": "A1",
   "expl": "Condicional làm câu nhã nhặn hơn."
  },
  {
   "kind": "choose",
   "q": "“Yo que tú, hablaría con él” nghĩa là",
   "right": "Nếu tôi là bạn, tôi sẽ nói chuyện với anh ấy",
   "wrong": [
    "Tôi đã nói chuyện với anh ấy",
    "Tôi sẽ không nói",
    "Bạn hãy nói đi"
   ],
   "level": "A1",
   "expl": "Cấu trúc khuyên nhủ."
  }
 ],
 "es-fut-usos": [
  {
   "kind": "fill",
   "q": "—¿Qué hora es? —___ las ocho.",
   "hint": "ser, đoán hiện tại",
   "accept": [
    "Serán"
   ],
   "level": "B1",
   "expl": "Futuro dùng để đoán hiện tại."
  },
  {
   "kind": "fill",
   "q": "¿Dónde ___ Ana?",
   "hint": "estar, đoán hiện tại",
   "accept": [
    "estará"
   ],
   "level": "B1",
   "expl": "Futuro đoán hiện tại."
  },
  {
   "kind": "fill",
   "q": "Cuando llegó, ___ las tres.",
   "hint": "ser, đoán quá khứ",
   "accept": [
    "serían"
   ],
   "level": "B1",
   "expl": "Condicional đoán quá khứ."
  },
  {
   "kind": "fill",
   "q": "Dijo que ___ mañana.",
   "hint": "venir, ngôi él",
   "accept": [
    "vendría"
   ],
   "level": "B1",
   "expl": "Tường thuật: condicional."
  },
  {
   "kind": "fill",
   "q": "Prometió que lo ___.",
   "hint": "hacer, ngôi él",
   "accept": [
    "haría"
   ],
   "level": "B1",
   "expl": "Tường thuật: condicional."
  },
  {
   "kind": "fill",
   "q": "Me dijo que me ___.",
   "hint": "llamar, ngôi él",
   "accept": [
    "llamaría"
   ],
   "level": "B1",
   "expl": "Tường thuật: condicional."
  },
  {
   "kind": "fill",
   "q": "Dijo que ___ tarde.",
   "hint": "llegar, ngôi ella",
   "accept": [
    "llegaría"
   ],
   "level": "B1",
   "expl": "Tường thuật: condicional."
  },
  {
   "kind": "fill",
   "q": "Pensaba que ___ fácil.",
   "hint": "ser, ngôi él",
   "accept": [
    "sería"
   ],
   "level": "B1",
   "expl": "Tường thuật: condicional."
  },
  {
   "kind": "fill",
   "q": "Dijeron que ___ a la fiesta.",
   "hint": "ir, ngôi ellos",
   "accept": [
    "irían"
   ],
   "level": "B1",
   "expl": "Tường thuật: condicional."
  },
  {
   "kind": "fill",
   "q": "Ya ___ las diez.",
   "hint": "ser, đoán hiện tại",
   "accept": [
    "serán"
   ],
   "level": "B1",
   "expl": "Futuro đoán hiện tại."
  },
  {
   "kind": "choose",
   "q": "Futuro dùng để đoán về",
   "right": "hiện tại",
   "wrong": [
    "quá khứ",
    "tương lai xa",
    "thói quen"
   ],
   "level": "A1",
   "expl": "Estará en casa."
  },
  {
   "kind": "choose",
   "q": "Condicional dùng để đoán về",
   "right": "quá khứ",
   "wrong": [
    "hiện tại",
    "tương lai",
    "mệnh lệnh"
   ],
   "level": "A1",
   "expl": "Estaría en casa."
  },
  {
   "kind": "choose",
   "q": "Tường thuật “Voy mañana” → “Dijo que ___ mañana”",
   "right": "iría",
   "wrong": [
    "voy",
    "iré",
    "fue"
   ],
   "level": "A1",
   "expl": "Tương lai → condicional."
  },
  {
   "kind": "choose",
   "q": "Câu đúng",
   "right": "Dijo que vendría mañana",
   "wrong": [
    "Dijo que vendrá mañana",
    "Dijo que viene mañana",
    "Dijo que vino mañana"
   ],
   "level": "A1",
   "expl": "Tường thuật quá khứ."
  },
  {
   "kind": "choose",
   "q": "“Serán las tres” nghĩa là",
   "right": "Chắc là 3 giờ",
   "wrong": [
    "Sẽ có 3 giờ",
    "Đã là 3 giờ",
    "Sẽ là 3 giờ"
   ],
   "level": "A1",
   "expl": "Phỏng đoán hiện tại."
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

const RUSH=[["hablaré · comerás", ["es-fut-simple"]], ["mañana · el año que viene", ["es-fut-simple"]], ["tendré · podré · haré", ["es-fut-irr"]], ["saldré · vendré · diré", ["es-fut-irr"]], ["me gustaría · ¿podrías…?", ["es-fut-cond"]], ["yo que tú…", ["es-fut-cond"]], ["será · estará · serían", ["es-fut-usos"]], ["dijo que + condicional", ["es-fut-usos"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["futuro"] = { pool: POOL, types: TYPES, game: {title:"¿Qué tiempo?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng bài",prompt:"Dấu hiệu này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"futRushBest"} };
})();
