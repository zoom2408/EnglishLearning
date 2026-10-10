/* es/content/quiz/reflexivos.js: phản thân, gustar, đồng ý / không đồng ý.
   Mixed exercise types: type the answer (fill, retry allowed) or pick one
   (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "es-ref-reflexivos": [
  {
   "kind": "fill",
   "q": "Yo ___ levanto a las siete.",
   "hint": "đại từ phản thân",
   "accept": [
    "me"
   ],
   "level": "A1",
   "expl": "Ngôi yo: me."
  },
  {
   "kind": "fill",
   "q": "Tú ___ duchas por la noche.",
   "hint": "đại từ phản thân",
   "accept": [
    "te"
   ],
   "level": "A1",
   "expl": "Ngôi tú: te."
  },
  {
   "kind": "fill",
   "q": "Ella ___ viste rápido.",
   "hint": "đại từ phản thân",
   "accept": [
    "se"
   ],
   "level": "A1",
   "expl": "Ngôi ella: se."
  },
  {
   "kind": "fill",
   "q": "Nosotros ___ acostamos tarde.",
   "hint": "đại từ phản thân",
   "accept": [
    "nos"
   ],
   "level": "A1",
   "expl": "Ngôi nosotros: nos."
  },
  {
   "kind": "fill",
   "q": "Vosotros ___ levantáis temprano.",
   "hint": "đại từ phản thân",
   "accept": [
    "os"
   ],
   "level": "A1",
   "expl": "Ngôi vosotros: os."
  },
  {
   "kind": "fill",
   "q": "Ellos ___ llaman Ana y Luis.",
   "hint": "đại từ phản thân",
   "accept": [
    "se"
   ],
   "level": "A1",
   "expl": "Ngôi ellos: se."
  },
  {
   "kind": "fill",
   "q": "Yo me ___ a las seis.",
   "hint": "despertar, ngôi yo",
   "accept": [
    "despierto"
   ],
   "level": "A1",
   "expl": "Despertarse: e → ie."
  },
  {
   "kind": "fill",
   "q": "Tú te ___ pronto.",
   "hint": "acostar, ngôi tú",
   "accept": [
    "acuestas"
   ],
   "level": "A1",
   "expl": "Acostarse: o → ue."
  },
  {
   "kind": "fill",
   "q": "Ella se ___ de azul.",
   "hint": "vestir, ngôi ella",
   "accept": [
    "viste"
   ],
   "level": "A1",
   "expl": "Vestirse: e → i."
  },
  {
   "kind": "fill",
   "q": "Me ___ Linh.",
   "hint": "llamarse, ngôi yo",
   "accept": [
    "llamo"
   ],
   "level": "A1",
   "expl": "Me llamo = tên tôi là."
  },
  {
   "kind": "fill",
   "q": "Nos ___ muy bien.",
   "hint": "sentir, ngôi nosotros",
   "accept": [
    "sentimos"
   ],
   "level": "A1",
   "expl": "Sentirse: nosotros không đổi nguyên âm."
  },
  {
   "kind": "choose",
   "q": "Nguyên mẫu của động từ phản thân kết thúc bằng",
   "right": "-se",
   "wrong": [
    "-me",
    "-te",
    "-lo"
   ],
   "level": "A1",
   "expl": "Levantarse, ducharse."
  },
  {
   "kind": "choose",
   "q": "Câu đúng",
   "right": "Me levanto a las siete",
   "wrong": [
    "Levanto me a las siete",
    "Yo levanto a las siete",
    "Me levantas a las siete"
   ],
   "level": "A1",
   "expl": "Đại từ đứng trước động từ chia."
  },
  {
   "kind": "choose",
   "q": "“dormirse” nghĩa là",
   "right": "ngủ thiếp đi",
   "wrong": [
    "ngủ",
    "thức dậy",
    "mơ"
   ],
   "level": "A2",
   "expl": "Thêm se đổi nghĩa."
  },
  {
   "kind": "choose",
   "q": "Động từ phản thân diễn tả hành động",
   "right": "quay lại chính chủ ngữ",
   "wrong": [
    "làm cho người khác",
    "trong quá khứ",
    "bắt buộc"
   ],
   "level": "A1",
   "expl": "Tự tắm, tự mặc đồ."
  }
 ],
 "es-ref-posicion": [
  {
   "kind": "fill",
   "q": "Voy a duchar___.",
   "hint": "me",
   "accept": [
    "me"
   ],
   "level": "A1",
   "expl": "Gắn me vào cuối nguyên mẫu."
  },
  {
   "kind": "fill",
   "q": "___ voy a duchar.",
   "hint": "tôi sẽ tắm",
   "accept": [
    "Me"
   ],
   "level": "A1",
   "expl": "Hoặc đứng trước ir."
  },
  {
   "kind": "fill",
   "q": "No ___ levanto temprano.",
   "hint": "me",
   "accept": [
    "me"
   ],
   "level": "A1",
   "expl": "No đứng trước đại từ."
  },
  {
   "kind": "fill",
   "q": "Quiero acostar___.",
   "hint": "me",
   "accept": [
    "me"
   ],
   "level": "A1",
   "expl": "Gắn vào nguyên mẫu."
  },
  {
   "kind": "fill",
   "q": "___ quiero acostar.",
   "hint": "me",
   "accept": [
    "Me"
   ],
   "level": "A1",
   "expl": "Đứng trước cả cụm."
  },
  {
   "kind": "fill",
   "q": "Estoy duchándo___.",
   "hint": "me",
   "accept": [
    "me"
   ],
   "level": "A1",
   "expl": "Gắn vào gerundio (có dấu)."
  },
  {
   "kind": "fill",
   "q": "¡Levánta___!",
   "hint": "mệnh lệnh, ngôi tú",
   "accept": [
    "te"
   ],
   "level": "A1",
   "expl": "Mệnh lệnh khẳng định gắn đại từ."
  },
  {
   "kind": "fill",
   "q": "No ___ acuesto tarde.",
   "hint": "me",
   "accept": [
    "me"
   ],
   "level": "A1",
   "expl": "No + me + động từ."
  },
  {
   "kind": "fill",
   "q": "¿Puedes levantar___?",
   "hint": "te",
   "accept": [
    "te"
   ],
   "level": "A1",
   "expl": "Gắn vào nguyên mẫu."
  },
  {
   "kind": "fill",
   "q": "Mañana ___ voy a levantar tarde.",
   "hint": "me",
   "accept": [
    "me"
   ],
   "level": "A1",
   "expl": "Đứng trước ir a."
  },
  {
   "kind": "choose",
   "q": "Đại từ phản thân đứng",
   "right": "trước động từ đã chia",
   "wrong": [
    "sau chủ ngữ",
    "cuối câu",
    "giữa hai động từ"
   ],
   "level": "A1",
   "expl": "Me levanto."
  },
  {
   "kind": "choose",
   "q": "Câu nào sai?",
   "right": "Voy a me duchar",
   "wrong": [
    "Voy a ducharme",
    "Me voy a duchar",
    "No me ducho"
   ],
   "level": "A1",
   "expl": "Không đặt đại từ giữa a và nguyên mẫu."
  },
  {
   "kind": "choose",
   "q": "Câu phủ định đúng",
   "right": "No me ducho",
   "wrong": [
    "Me no ducho",
    "Me ducho no",
    "Ducho no me"
   ],
   "level": "A1",
   "expl": "No đứng trước đại từ."
  },
  {
   "kind": "choose",
   "q": "Gắn me vào gerundio “duchando” thì",
   "right": "thêm dấu: duchándome",
   "wrong": [
    "không đổi",
    "bỏ -ndo",
    "thêm s"
   ],
   "level": "B1",
   "expl": "Giữ trọng âm nên thêm dấu."
  },
  {
   "kind": "choose",
   "q": "“Me quiero ir” tương đương",
   "right": "Quiero irme",
   "wrong": [
    "Quiero me ir",
    "Me quiero irme",
    "Quiero irse"
   ],
   "level": "A1",
   "expl": "Cả hai vị trí đều đúng."
  }
 ],
 "es-ref-gustar": [
  {
   "kind": "fill",
   "q": "Me ___ el café.",
   "hint": "gustar",
   "accept": [
    "gusta"
   ],
   "level": "A1",
   "expl": "Danh từ số ít: gusta."
  },
  {
   "kind": "fill",
   "q": "Me ___ los gatos.",
   "hint": "gustar",
   "accept": [
    "gustan"
   ],
   "level": "A1",
   "expl": "Danh từ số nhiều: gustan."
  },
  {
   "kind": "fill",
   "q": "¿___ gusta la música?",
   "hint": "cho bạn",
   "accept": [
    "Te"
   ],
   "level": "A1",
   "expl": "Te = cho bạn."
  },
  {
   "kind": "fill",
   "q": "A ella ___ gustan las películas.",
   "hint": "cho cô ấy",
   "accept": [
    "le"
   ],
   "level": "A1",
   "expl": "Le = cho anh/cô ấy."
  },
  {
   "kind": "fill",
   "q": "A nosotros ___ gusta viajar.",
   "hint": "cho chúng tôi",
   "accept": [
    "nos"
   ],
   "level": "A1",
   "expl": "Nos = cho chúng tôi."
  },
  {
   "kind": "fill",
   "q": "A ellos ___ gustan los deportes.",
   "hint": "cho họ",
   "accept": [
    "les"
   ],
   "level": "A1",
   "expl": "Les = cho họ."
  },
  {
   "kind": "fill",
   "q": "A ___ me gusta el té.",
   "hint": "tôi",
   "accept": [
    "mí"
   ],
   "level": "A1",
   "expl": "A mí = nhấn mạnh người nói."
  },
  {
   "kind": "fill",
   "q": "A ti te ___ bailar.",
   "hint": "gustar",
   "accept": [
    "gusta"
   ],
   "level": "A1",
   "expl": "Động từ nguyên mẫu: gusta."
  },
  {
   "kind": "fill",
   "q": "Me ___ la pizza.",
   "hint": "encantar, rất thích",
   "accept": [
    "encanta"
   ],
   "level": "A1",
   "expl": "Encantar chia như gustar."
  },
  {
   "kind": "fill",
   "q": "Me ___ la cabeza.",
   "hint": "doler",
   "accept": [
    "duele"
   ],
   "level": "A1",
   "expl": "Doler: o → ue."
  },
  {
   "kind": "fill",
   "q": "Me ___ los idiomas.",
   "hint": "interesar, số nhiều",
   "accept": [
    "interesan"
   ],
   "level": "A1",
   "expl": "Interesar chia như gustar."
  },
  {
   "kind": "fill",
   "q": "A vosotros ___ gusta cantar.",
   "hint": "cho các bạn",
   "accept": [
    "os"
   ],
   "level": "A1",
   "expl": "Os = cho các bạn."
  },
  {
   "kind": "choose",
   "q": "Với gustar, động từ chia theo",
   "right": "thứ được thích",
   "wrong": [
    "người thích",
    "thì",
    "giới tính"
   ],
   "level": "A1",
   "expl": "Me gustan los gatos."
  },
  {
   "kind": "choose",
   "q": "Vì sao “Me gusto los gatos” sai?",
   "right": "Phải là gustan vì los gatos số nhiều",
   "wrong": [
    "Phải dùng yo",
    "Phải dùng le",
    "Gatos giống cái"
   ],
   "level": "A1",
   "expl": "Gustan khớp với los gatos."
  },
  {
   "kind": "choose",
   "q": "Câu đúng",
   "right": "Me gusta bailar",
   "wrong": [
    "Me gustan bailar",
    "Gusto bailar",
    "Me gusto bailar"
   ],
   "level": "A1",
   "expl": "Động từ nguyên mẫu đi với gusta."
  }
 ],
 "es-ref-coincidir": [
  {
   "kind": "fill",
   "q": "Me gusta el té. —A mí ___.",
   "hint": "cũng vậy",
   "accept": [
    "también"
   ],
   "level": "A1",
   "expl": "Giống và khẳng định: también."
  },
  {
   "kind": "fill",
   "q": "No me gusta el frío. —A mí ___.",
   "hint": "cũng không",
   "accept": [
    "tampoco"
   ],
   "level": "A1",
   "expl": "Giống và phủ định: tampoco."
  },
  {
   "kind": "fill",
   "q": "No me gusta el té. —A mí ___.",
   "hint": "tôi thì có",
   "accept": [
    "sí"
   ],
   "level": "A1",
   "expl": "Khác: sí."
  },
  {
   "kind": "fill",
   "q": "Me gusta el frío. —A mí ___.",
   "hint": "tôi thì không",
   "accept": [
    "no"
   ],
   "level": "A1",
   "expl": "Khác: no."
  },
  {
   "kind": "fill",
   "q": "Trabajo mucho. —Yo ___.",
   "hint": "cũng vậy",
   "accept": [
    "también"
   ],
   "level": "A1",
   "expl": "Yo también."
  },
  {
   "kind": "fill",
   "q": "No trabajo hoy. —Yo ___.",
   "hint": "cũng không",
   "accept": [
    "tampoco"
   ],
   "level": "A1",
   "expl": "Yo tampoco."
  },
  {
   "kind": "fill",
   "q": "¿Estudias? —Yo ___.",
   "hint": "không",
   "accept": [
    "no"
   ],
   "level": "A1",
   "expl": "Yo no = tôi không."
  },
  {
   "kind": "fill",
   "q": "Me encanta viajar. —A mí ___.",
   "hint": "cũng vậy",
   "accept": [
    "también"
   ],
   "level": "A1",
   "expl": "A mí también."
  },
  {
   "kind": "fill",
   "q": "No me gusta madrugar. —A mí ___.",
   "hint": "tôi thì có",
   "accept": [
    "sí"
   ],
   "level": "A1",
   "expl": "A mí sí."
  },
  {
   "kind": "fill",
   "q": "No como carne. —Yo ___.",
   "hint": "cũng không",
   "accept": [
    "tampoco"
   ],
   "level": "A1",
   "expl": "Yo tampoco."
  },
  {
   "kind": "choose",
   "q": "Đồng ý với câu phủ định dùng",
   "right": "tampoco",
   "wrong": [
    "también",
    "sí",
    "no"
   ],
   "level": "A1",
   "expl": "Giống phủ định: tampoco."
  },
  {
   "kind": "choose",
   "q": "“También” dùng cho",
   "right": "câu khẳng định",
   "wrong": [
    "câu phủ định",
    "câu hỏi",
    "mệnh lệnh"
   ],
   "level": "A1",
   "expl": "Đồng ý với điều khẳng định."
  },
  {
   "kind": "choose",
   "q": "Câu nào sai?",
   "right": "No me gusta el frío. —A mí también.",
   "wrong": [
    "No me gusta el frío. —A mí tampoco.",
    "Me gusta el frío. —A mí también.",
    "No me gusta el té. —A mí sí."
   ],
   "level": "A1",
   "expl": "Câu phủ định cần tampoco."
  },
  {
   "kind": "choose",
   "q": "“A mí sí” dùng khi",
   "right": "tôi KHÁC: tôi có thích / có làm",
   "wrong": [
    "tôi cũng không",
    "tôi cũng có",
    "tôi không biết"
   ],
   "level": "A1",
   "expl": "Sí đối lập với câu phủ định."
  },
  {
   "kind": "choose",
   "q": "“A mí no” dùng khi",
   "right": "tôi KHÁC: tôi không thích",
   "wrong": [
    "tôi cũng thích",
    "tôi cũng không",
    "tôi không nghe"
   ],
   "level": "A1",
   "expl": "No đối lập với câu khẳng định."
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

const RUSH=[["me · te · se · nos · os", ["es-ref-reflexivos"]], ["levantarse · ducharse", ["es-ref-reflexivos"]], ["voy a ducharme", ["es-ref-posicion"]], ["no me levanto", ["es-ref-posicion"]], ["me gusta · me gustan", ["es-ref-gustar"]], ["me encanta · me duele", ["es-ref-gustar"]], ["a mí también · a mí tampoco", ["es-ref-coincidir"]], ["a mí sí · a mí no", ["es-ref-coincidir"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["reflexivos"] = { pool: POOL, types: TYPES, game: {title:"¿Qué toca?",desc:"60 giây. Thấy mẫu câu này, chọn đúng bài",prompt:"Mẫu câu này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"refRushBest"} };
})();
