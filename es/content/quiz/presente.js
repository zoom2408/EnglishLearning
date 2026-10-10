/* es/content/quiz/presente.js: presente de indicativo.
   Mixed exercise types: type the answer (fill, retry allowed) or pick one
   (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "es-pres-ar": [
  {
   "kind": "fill",
   "q": "Yo ___ español.",
   "hint": "hablar, ngôi yo",
   "accept": [
    "hablo"
   ],
   "level": "A1",
   "expl": "Gốc habl- + -o."
  },
  {
   "kind": "fill",
   "q": "Tú ___ en una oficina.",
   "hint": "trabajar, ngôi tú",
   "accept": [
    "trabajas"
   ],
   "level": "A1",
   "expl": "Gốc trabaj- + -as."
  },
  {
   "kind": "fill",
   "q": "Ella ___ inglés.",
   "hint": "estudiar, ngôi ella",
   "accept": [
    "estudia"
   ],
   "level": "A1",
   "expl": "Gốc estudi- + -a."
  },
  {
   "kind": "fill",
   "q": "Nosotros ___ en el coro.",
   "hint": "cantar, ngôi nosotros",
   "accept": [
    "cantamos"
   ],
   "level": "A1",
   "expl": "Gốc cant- + -amos."
  },
  {
   "kind": "fill",
   "q": "Vosotros ___ la comida.",
   "hint": "comprar, ngôi vosotros",
   "accept": [
    "compráis"
   ],
   "level": "A1",
   "expl": "Gốc compr- + -áis."
  },
  {
   "kind": "fill",
   "q": "Ellos ___ muy bien.",
   "hint": "bailar, ngôi ellos",
   "accept": [
    "bailan"
   ],
   "level": "A1",
   "expl": "Gốc bail- + -an."
  },
  {
   "kind": "fill",
   "q": "Yo ___ un diccionario.",
   "hint": "necesitar, ngôi yo",
   "accept": [
    "necesito"
   ],
   "level": "A1",
   "expl": "Gốc necesit- + -o."
  },
  {
   "kind": "fill",
   "q": "¿Cómo te ___ tú?",
   "hint": "llamar, ngôi tú",
   "accept": [
    "llamas"
   ],
   "level": "A1",
   "expl": "Gốc llam- + -as."
  },
  {
   "kind": "fill",
   "q": "Ella ___ la cena.",
   "hint": "cocinar, ngôi ella",
   "accept": [
    "cocina"
   ],
   "level": "A1",
   "expl": "Gốc cocin- + -a."
  },
  {
   "kind": "fill",
   "q": "Ellos ___ español en la escuela.",
   "hint": "estudiar, ngôi ellos",
   "accept": [
    "estudian"
   ],
   "level": "A1",
   "expl": "Gốc estudi- + -an."
  },
  {
   "kind": "choose",
   "q": "Dạng yo của “escuchar”",
   "right": "escucho",
   "wrong": [
    "escuchas",
    "escucha",
    "escuchan"
   ],
   "level": "A1",
   "expl": "Gốc escuch- + -o."
  },
  {
   "kind": "choose",
   "q": "Câu đúng",
   "right": "Ella trabaja en un banco",
   "wrong": [
    "Ella trabajo en un banco",
    "Ella trabajas en un banco",
    "Ella trabajan en un banco"
   ],
   "level": "A1",
   "expl": "Ngôi ella dùng -a."
  },
  {
   "kind": "choose",
   "q": "“Mañana viajo a Madrid” dùng presente để diễn tả",
   "right": "Tương lai gần",
   "wrong": [
    "Quá khứ",
    "Việc đã hoàn thành",
    "Mệnh lệnh"
   ],
   "level": "A2",
   "expl": "Presente có thể nói về tương lai gần khi có từ chỉ thời gian."
  },
  {
   "kind": "choose",
   "q": "Đuôi của nosotros với động từ -ar",
   "right": "-amos",
   "wrong": [
    "-emos",
    "-imos",
    "-áis"
   ],
   "level": "A1",
   "expl": "Hablamos, trabajamos…"
  },
  {
   "kind": "choose",
   "q": "Vì sao “Hablo español” không cần “yo”?",
   "right": "Đuôi -o đã cho biết ngôi yo",
   "wrong": [
    "Tiếng Tây Ban Nha cấm dùng yo",
    "Vì là câu hỏi",
    "Vì động từ không chia"
   ],
   "level": "A1",
   "expl": "Đuôi động từ cho biết chủ ngữ."
  }
 ],
 "es-pres-erir": [
  {
   "kind": "fill",
   "q": "Yo ___ arroz.",
   "hint": "comer, ngôi yo",
   "accept": [
    "como"
   ],
   "level": "A1",
   "expl": "Gốc com- + -o."
  },
  {
   "kind": "fill",
   "q": "Tú ___ agua.",
   "hint": "beber, ngôi tú",
   "accept": [
    "bebes"
   ],
   "level": "A1",
   "expl": "Gốc beb- + -es."
  },
  {
   "kind": "fill",
   "q": "Ella ___ un libro.",
   "hint": "leer, ngôi ella",
   "accept": [
    "lee"
   ],
   "level": "A1",
   "expl": "Gốc le- + -e."
  },
  {
   "kind": "fill",
   "q": "Nosotros ___ por el parque.",
   "hint": "correr, ngôi nosotros",
   "accept": [
    "corremos"
   ],
   "level": "A1",
   "expl": "Gốc corr- + -emos."
  },
  {
   "kind": "fill",
   "q": "Vosotros ___ rápido.",
   "hint": "aprender, ngôi vosotros",
   "accept": [
    "aprendéis"
   ],
   "level": "A1",
   "expl": "Gốc aprend- + -éis."
  },
  {
   "kind": "fill",
   "q": "Ellos ___ frutas.",
   "hint": "vender, ngôi ellos",
   "accept": [
    "venden"
   ],
   "level": "A1",
   "expl": "Gốc vend- + -en."
  },
  {
   "kind": "fill",
   "q": "Yo ___ en Hanói.",
   "hint": "vivir, ngôi yo",
   "accept": [
    "vivo"
   ],
   "level": "A1",
   "expl": "Gốc viv- + -o."
  },
  {
   "kind": "fill",
   "q": "Tú ___ una carta.",
   "hint": "escribir, ngôi tú",
   "accept": [
    "escribes"
   ],
   "level": "A1",
   "expl": "Gốc escrib- + -es."
  },
  {
   "kind": "fill",
   "q": "Nosotros ___ la puerta.",
   "hint": "abrir, ngôi nosotros",
   "accept": [
    "abrimos"
   ],
   "level": "A1",
   "expl": "Động từ -ir: -imos."
  },
  {
   "kind": "fill",
   "q": "Vosotros ___ muchos regalos.",
   "hint": "recibir, ngôi vosotros",
   "accept": [
    "recibís"
   ],
   "level": "A1",
   "expl": "Động từ -ir: -ís."
  },
  {
   "kind": "fill",
   "q": "Ellos ___ el piso.",
   "hint": "compartir, ngôi ellos",
   "accept": [
    "comparten"
   ],
   "level": "A1",
   "expl": "Gốc compart- + -en."
  },
  {
   "kind": "fill",
   "q": "Ella ___ pronto.",
   "hint": "decidir, ngôi ella",
   "accept": [
    "decide"
   ],
   "level": "A1",
   "expl": "Gốc decid- + -e."
  },
  {
   "kind": "choose",
   "q": "Ngôi nosotros của “comer”",
   "right": "comemos",
   "wrong": [
    "comamos",
    "comáis",
    "comen"
   ],
   "level": "A1",
   "expl": "Động từ -er: -emos."
  },
  {
   "kind": "choose",
   "q": "Ngôi vosotros của “vivir”",
   "right": "vivís",
   "wrong": [
    "vivéis",
    "vivais",
    "vives"
   ],
   "level": "A1",
   "expl": "Động từ -ir: -ís."
  },
  {
   "kind": "choose",
   "q": "Động từ -er và -ir khác nhau ở ngôi nào?",
   "right": "nosotros và vosotros",
   "wrong": [
    "yo và tú",
    "él và ellos",
    "Tất cả các ngôi"
   ],
   "level": "A1",
   "expl": "Các ngôi còn lại dùng chung đuôi."
  }
 ],
 "es-pres-cambio": [
  {
   "kind": "fill",
   "q": "Yo ___ un café.",
   "hint": "querer, ngôi yo",
   "accept": [
    "quiero"
   ],
   "level": "A1",
   "expl": "Querer: e → ie."
  },
  {
   "kind": "fill",
   "q": "Tú ___ venir mañana.",
   "hint": "poder, ngôi tú",
   "accept": [
    "puedes"
   ],
   "level": "A1",
   "expl": "Poder: o → ue."
  },
  {
   "kind": "fill",
   "q": "Ella ___ ocho horas.",
   "hint": "dormir, ngôi ella",
   "accept": [
    "duerme"
   ],
   "level": "A1",
   "expl": "Dormir: o → ue."
  },
  {
   "kind": "fill",
   "q": "Ellos ___ en el viaje.",
   "hint": "pensar, ngôi ellos",
   "accept": [
    "piensan"
   ],
   "level": "A1",
   "expl": "Pensar: e → ie."
  },
  {
   "kind": "fill",
   "q": "Yo ___ a casa a las seis.",
   "hint": "volver, ngôi yo",
   "accept": [
    "vuelvo"
   ],
   "level": "A1",
   "expl": "Volver: o → ue."
  },
  {
   "kind": "fill",
   "q": "Tú ___ una pizza.",
   "hint": "pedir, ngôi tú",
   "accept": [
    "pides"
   ],
   "level": "A1",
   "expl": "Pedir: e → i."
  },
  {
   "kind": "fill",
   "q": "La clase ___ a las nueve.",
   "hint": "empezar, ngôi ella",
   "accept": [
    "empieza"
   ],
   "level": "A1",
   "expl": "Empezar: e → ie."
  },
  {
   "kind": "fill",
   "q": "Nosotros ___ el té.",
   "hint": "preferir, ngôi nosotros",
   "accept": [
    "preferimos"
   ],
   "level": "A1",
   "expl": "Ngôi nosotros không đổi nguyên âm."
  },
  {
   "kind": "fill",
   "q": "Ellos ___ platos típicos.",
   "hint": "servir, ngôi ellos",
   "accept": [
    "sirven"
   ],
   "level": "A1",
   "expl": "Servir: e → i."
  },
  {
   "kind": "fill",
   "q": "Yo ___ al fútbol los sábados.",
   "hint": "jugar, ngôi yo",
   "accept": [
    "juego"
   ],
   "level": "A1",
   "expl": "Jugar: u → ue."
  },
  {
   "kind": "fill",
   "q": "Tú ___ tus llaves.",
   "hint": "encontrar, ngôi tú",
   "accept": [
    "encuentras"
   ],
   "level": "A1",
   "expl": "Encontrar: o → ue."
  },
  {
   "kind": "fill",
   "q": "Ella ___ la puerta.",
   "hint": "cerrar, ngôi ella",
   "accept": [
    "cierra"
   ],
   "level": "A1",
   "expl": "Cerrar: e → ie."
  },
  {
   "kind": "fill",
   "q": "Nosotros ___ la frase.",
   "hint": "repetir, ngôi nosotros",
   "accept": [
    "repetimos"
   ],
   "level": "A2",
   "expl": "Ngôi nosotros giữ nguyên."
  },
  {
   "kind": "choose",
   "q": "Ngôi nosotros của “poder”",
   "right": "podemos",
   "wrong": [
    "puedemos",
    "podamos",
    "podéis"
   ],
   "level": "A1",
   "expl": "Nosotros và vosotros không đổi nguyên âm."
  },
  {
   "kind": "choose",
   "q": "Hai ngôi nào KHÔNG đổi nguyên âm?",
   "right": "nosotros, vosotros",
   "wrong": [
    "yo, tú",
    "él, ellos",
    "yo, ellos"
   ],
   "level": "A1",
   "expl": "Quy tắc chiếc ủng."
  }
 ],
 "es-pres-yo": [
  {
   "kind": "fill",
   "q": "Yo ___ la cena.",
   "hint": "hacer, ngôi yo",
   "accept": [
    "hago"
   ],
   "level": "A1",
   "expl": "Hacer: yo hago."
  },
  {
   "kind": "fill",
   "q": "Yo ___ la mesa.",
   "hint": "poner, ngôi yo",
   "accept": [
    "pongo"
   ],
   "level": "A1",
   "expl": "Poner: yo pongo."
  },
  {
   "kind": "fill",
   "q": "Yo ___ a las ocho.",
   "hint": "salir, ngôi yo",
   "accept": [
    "salgo"
   ],
   "level": "A1",
   "expl": "Salir: yo salgo."
  },
  {
   "kind": "fill",
   "q": "Yo ___ la respuesta.",
   "hint": "saber, ngôi yo",
   "accept": [
    "sé"
   ],
   "level": "A1",
   "expl": "Saber: yo sé."
  },
  {
   "kind": "fill",
   "q": "Yo ___ a tu hermano.",
   "hint": "conocer, ngôi yo",
   "accept": [
    "conozco"
   ],
   "level": "A1",
   "expl": "Conocer: yo conozco."
  },
  {
   "kind": "fill",
   "q": "Yo ___ la tele.",
   "hint": "ver, ngôi yo",
   "accept": [
    "veo"
   ],
   "level": "A1",
   "expl": "Ver: yo veo."
  },
  {
   "kind": "fill",
   "q": "Yo te ___ un libro.",
   "hint": "dar, ngôi yo",
   "accept": [
    "doy"
   ],
   "level": "A1",
   "expl": "Dar: yo doy."
  },
  {
   "kind": "fill",
   "q": "Yo ___ la comida.",
   "hint": "traer, ngôi yo",
   "accept": [
    "traigo"
   ],
   "level": "A1",
   "expl": "Traer: yo traigo."
  },
  {
   "kind": "fill",
   "q": "Yo ___ al trabajo.",
   "hint": "ir, ngôi yo",
   "accept": [
    "voy"
   ],
   "level": "A1",
   "expl": "Ir: voy."
  },
  {
   "kind": "fill",
   "q": "Ellos ___ a la playa.",
   "hint": "ir, ngôi ellos",
   "accept": [
    "van"
   ],
   "level": "A1",
   "expl": "Ir: van."
  },
  {
   "kind": "fill",
   "q": "¿Qué ___ tú?",
   "hint": "decir, ngôi tú",
   "accept": [
    "dices"
   ],
   "level": "A1",
   "expl": "Decir: e → i, dices."
  },
  {
   "kind": "fill",
   "q": "Nosotros ___ de la escuela.",
   "hint": "venir, ngôi nosotros",
   "accept": [
    "venimos"
   ],
   "level": "A1",
   "expl": "Venir: nosotros venimos."
  },
  {
   "kind": "fill",
   "q": "Yo ___ de la oficina.",
   "hint": "venir, ngôi yo",
   "accept": [
    "vengo"
   ],
   "level": "A1",
   "expl": "Venir: yo vengo."
  },
  {
   "kind": "fill",
   "q": "Yo ___ la verdad.",
   "hint": "decir, ngôi yo",
   "accept": [
    "digo"
   ],
   "level": "A1",
   "expl": "Decir: yo digo."
  },
  {
   "kind": "choose",
   "q": "Để nói “quen một người”, dùng động từ nào?",
   "right": "conocer",
   "wrong": [
    "saber",
    "ver",
    "tener"
   ],
   "level": "A2",
   "expl": "Conocer cho người và nơi chốn; saber cho kiến thức và kỹ năng."
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

const RUSH=[["hablo · hablas · habla", ["es-pres-ar"]], ["-amos · -áis · -an", ["es-pres-ar"]], ["como · vives", ["es-pres-erir"]], ["comemos · vivimos", ["es-pres-erir"]], ["quiero · puedo", ["es-pres-cambio"]], ["pido · sirvo", ["es-pres-cambio"]], ["hago · pongo · salgo", ["es-pres-yo"]], ["voy · digo · vengo", ["es-pres-yo"]], ["sé · conozco", ["es-pres-yo"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["presente"] = { pool: POOL, types: TYPES, game: {title:"¿Qué verbo?",desc:"60 giây. Thấy dạng động từ này, chọn đúng bài",prompt:"Dạng này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"preRushBest"} };
})();
