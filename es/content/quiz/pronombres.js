/* es/content/quiz/pronombres.js: đại từ tân ngữ, por và para.
   Mixed exercise types: type the answer (fill, retry allowed) or pick one
   (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "es-obj-directo": [
  {
   "kind": "fill",
   "q": "Compro el pan. ___ compro.",
   "hint": "thay el pan",
   "accept": [
    "Lo"
   ],
   "level": "A2",
   "expl": "El pan là giống đực số ít: lo."
  },
  {
   "kind": "fill",
   "q": "Compro la fruta. ___ compro.",
   "hint": "thay la fruta",
   "accept": [
    "La"
   ],
   "level": "A2",
   "expl": "La fruta là giống cái số ít: la."
  },
  {
   "kind": "fill",
   "q": "Veo los coches. ___ veo.",
   "hint": "thay los coches",
   "accept": [
    "Los"
   ],
   "level": "A2",
   "expl": "Giống đực số nhiều: los."
  },
  {
   "kind": "fill",
   "q": "Veo las casas. ___ veo.",
   "hint": "thay las casas",
   "accept": [
    "Las"
   ],
   "level": "A2",
   "expl": "Giống cái số nhiều: las."
  },
  {
   "kind": "fill",
   "q": "Ella ___ ve. (a mí)",
   "hint": "ngôi yo",
   "accept": [
    "me"
   ],
   "level": "A2",
   "expl": "Tân ngữ ngôi yo: me."
  },
  {
   "kind": "fill",
   "q": "Yo ___ quiero. (a ti)",
   "hint": "ngôi tú",
   "accept": [
    "te"
   ],
   "level": "A2",
   "expl": "Tân ngữ ngôi tú: te."
  },
  {
   "kind": "fill",
   "q": "Ellos ___ conocen. (a nosotros)",
   "hint": "ngôi nosotros",
   "accept": [
    "nos"
   ],
   "level": "A2",
   "expl": "Tân ngữ ngôi nosotros: nos."
  },
  {
   "kind": "fill",
   "q": "Quiero ver el libro. ___ quiero ver.",
   "hint": "thay el libro",
   "accept": [
    "Lo"
   ],
   "level": "A2",
   "expl": "Đặt trước cả cụm động từ."
  },
  {
   "kind": "fill",
   "q": "No ___ conozco. (a ella)",
   "hint": "thay ella",
   "accept": [
    "la"
   ],
   "level": "A2",
   "expl": "Người nữ: la."
  },
  {
   "kind": "fill",
   "q": "¿Dónde está el libro? ___ busco.",
   "hint": "thay el libro",
   "accept": [
    "Lo"
   ],
   "level": "A2",
   "expl": "Lo thay el libro."
  },
  {
   "kind": "fill",
   "q": "Hago la tarea. ___ hago.",
   "hint": "thay la tarea",
   "accept": [
    "La"
   ],
   "level": "A2",
   "expl": "La tarea giống cái."
  },
  {
   "kind": "fill",
   "q": "Leo los libros. ___ leo.",
   "hint": "thay los libros",
   "accept": [
    "Los"
   ],
   "level": "A2",
   "expl": "Giống đực số nhiều."
  },
  {
   "kind": "choose",
   "q": "“Lo” thay cho",
   "right": "danh từ giống đực số ít (hoặc người nam)",
   "wrong": [
    "danh từ giống cái",
    "danh từ số nhiều",
    "chủ ngữ"
   ],
   "level": "A2",
   "expl": "Lo = nó / anh ấy."
  },
  {
   "kind": "choose",
   "q": "“Lo quiero ver” tương đương",
   "right": "Quiero verlo",
   "wrong": [
    "Quiero lo ver",
    "Quiero ver lo",
    "Lo quiero verlo"
   ],
   "level": "A2",
   "expl": "Gắn vào nguyên mẫu hoặc đặt trước."
  },
  {
   "kind": "choose",
   "q": "Vì sao “Veo lo el libro” sai?",
   "right": "Đại từ thay hoàn toàn cho danh từ",
   "wrong": [
    "Lo chỉ dùng số nhiều",
    "Phải dùng la",
    "Ver không cần tân ngữ"
   ],
   "level": "A2",
   "expl": "Chỉ dùng một trong hai."
  }
 ],
 "es-obj-indirecto": [
  {
   "kind": "fill",
   "q": "___ doy un libro a Ana.",
   "hint": "cho cô ấy",
   "accept": [
    "Le"
   ],
   "level": "A2",
   "expl": "Người nhận số ít: le."
  },
  {
   "kind": "fill",
   "q": "___ escribo a mis padres.",
   "hint": "cho họ",
   "accept": [
    "Les"
   ],
   "level": "A2",
   "expl": "Người nhận số nhiều: les."
  },
  {
   "kind": "fill",
   "q": "¿___ das el libro?",
   "hint": "cho tôi",
   "accept": [
    "Me"
   ],
   "level": "A2",
   "expl": "Cho tôi: me."
  },
  {
   "kind": "fill",
   "q": "Yo ___ regalo flores.",
   "hint": "cho bạn",
   "accept": [
    "te"
   ],
   "level": "A2",
   "expl": "Cho bạn: te."
  },
  {
   "kind": "fill",
   "q": "Ellos ___ dicen la verdad.",
   "hint": "cho chúng tôi",
   "accept": [
    "nos"
   ],
   "level": "A2",
   "expl": "Cho chúng tôi: nos."
  },
  {
   "kind": "fill",
   "q": "___ mando un correo a mi jefe.",
   "hint": "cho ông ấy",
   "accept": [
    "Le"
   ],
   "level": "A2",
   "expl": "Người nhận số ít: le."
  },
  {
   "kind": "fill",
   "q": "___ explico la lección a los alumnos.",
   "hint": "cho họ",
   "accept": [
    "Les"
   ],
   "level": "A2",
   "expl": "Người nhận số nhiều: les."
  },
  {
   "kind": "fill",
   "q": "Ella ___ habla a Pedro.",
   "hint": "cho anh ấy",
   "accept": [
    "le"
   ],
   "level": "A2",
   "expl": "Người nhận số ít: le."
  },
  {
   "kind": "fill",
   "q": "¿___ preguntas a tu madre?",
   "hint": "cho bà ấy",
   "accept": [
    "Le"
   ],
   "level": "A2",
   "expl": "Người nhận số ít: le."
  },
  {
   "kind": "fill",
   "q": "Nos ___ un regalo.",
   "hint": "dar, ngôi ellos",
   "accept": [
    "dan"
   ],
   "level": "A2",
   "expl": "Dan = ngôi ellos của dar."
  },
  {
   "kind": "choose",
   "q": "“Le” và “les” dùng cho",
   "right": "cả nam lẫn nữ",
   "wrong": [
    "chỉ nam",
    "chỉ nữ",
    "chỉ vật"
   ],
   "level": "A2",
   "expl": "Le = anh/cô ấy."
  },
  {
   "kind": "choose",
   "q": "Vì sao có cả “le” lẫn “a Ana” trong “Le doy el libro a Ana”?",
   "right": "Lặp lại tân ngữ gián tiếp là tự nhiên",
   "wrong": [
    "Là lỗi",
    "Chỉ dùng trong văn viết",
    "Chỉ dùng với số nhiều"
   ],
   "level": "A2",
   "expl": "Cấu trúc rất phổ biến."
  },
  {
   "kind": "choose",
   "q": "Câu đúng",
   "right": "Le doy el libro a Ana",
   "wrong": [
    "Les doy el libro a Ana",
    "Lo doy el libro a Ana",
    "La doy el libro a Ana"
   ],
   "level": "A2",
   "expl": "Ana là một người: le."
  },
  {
   "kind": "choose",
   "q": "Động từ thường đi với tân ngữ gián tiếp",
   "right": "dar, decir, escribir",
   "wrong": [
    "comer, beber, ver",
    "ser, estar, tener",
    "correr, saltar, nadar"
   ],
   "level": "A2",
   "expl": "Có người nhận."
  },
  {
   "kind": "choose",
   "q": "Tân ngữ gián tiếp của vosotros",
   "right": "os",
   "wrong": [
    "les",
    "le",
    "se"
   ],
   "level": "A1",
   "expl": "Nos / os."
  }
 ],
 "es-obj-doble": [
  {
   "kind": "fill",
   "q": "—¿Me prestas el libro? —Sí, ___ presto.",
   "hint": "te + lo",
   "accept": [
    "te lo"
   ],
   "level": "B1",
   "expl": "Gián tiếp + trực tiếp."
  },
  {
   "kind": "fill",
   "q": "—¿Me das la llave? —Sí, ___ doy.",
   "hint": "te + la",
   "accept": [
    "te la"
   ],
   "level": "B1",
   "expl": "Gián tiếp + trực tiếp."
  },
  {
   "kind": "fill",
   "q": "Doy el libro a Ana. ___ doy.",
   "hint": "le + lo",
   "accept": [
    "Se lo"
   ],
   "level": "B1",
   "expl": "Le + lo → se lo."
  },
  {
   "kind": "fill",
   "q": "Doy la carta a Ana. ___ doy.",
   "hint": "le + la",
   "accept": [
    "Se la"
   ],
   "level": "B1",
   "expl": "Le + la → se la."
  },
  {
   "kind": "fill",
   "q": "Doy los libros a ellos. ___ doy.",
   "hint": "les + los",
   "accept": [
    "Se los"
   ],
   "level": "B1",
   "expl": "Les + los → se los."
  },
  {
   "kind": "fill",
   "q": "Ella me dio el regalo. Ella ___ dio.",
   "hint": "me + lo",
   "accept": [
    "me lo"
   ],
   "level": "B1",
   "expl": "Gián tiếp + trực tiếp."
  },
  {
   "kind": "fill",
   "q": "Nos das las llaves. ___ das.",
   "hint": "nos + las",
   "accept": [
    "Nos las"
   ],
   "level": "B1",
   "expl": "Gián tiếp + trực tiếp."
  },
  {
   "kind": "fill",
   "q": "Te explico la regla. ___ explico.",
   "hint": "te + la",
   "accept": [
    "Te la"
   ],
   "level": "B1",
   "expl": "Gián tiếp + trực tiếp."
  },
  {
   "kind": "fill",
   "q": "Les mando las fotos. ___ mando.",
   "hint": "les + las",
   "accept": [
    "Se las"
   ],
   "level": "B1",
   "expl": "Les + las → se las."
  },
  {
   "kind": "fill",
   "q": "Le cuento el secreto. ___ cuento.",
   "hint": "le + lo",
   "accept": [
    "Se lo"
   ],
   "level": "B1",
   "expl": "Le + lo → se lo."
  },
  {
   "kind": "fill",
   "q": "Voy a dár___. (el libro a ella)",
   "hint": "se + lo",
   "accept": [
    "selo"
   ],
   "level": "B1",
   "expl": "Gắn vào nguyên mẫu và thêm dấu."
  },
  {
   "kind": "fill",
   "q": "Te ___ dije ayer. (la noticia)",
   "hint": "lo / la",
   "accept": [
    "la"
   ],
   "level": "B1",
   "expl": "Gián tiếp + trực tiếp: te la."
  },
  {
   "kind": "choose",
   "q": "Thứ tự hai đại từ",
   "right": "gián tiếp + trực tiếp",
   "wrong": [
    "trực tiếp + gián tiếp",
    "tùy ý",
    "tách rời hai bên"
   ],
   "level": "B1",
   "expl": "Me lo, te la."
  },
  {
   "kind": "choose",
   "q": "Dạng đúng",
   "right": "Se lo doy",
   "wrong": [
    "Le lo doy",
    "Les lo doy",
    "Lo le doy"
   ],
   "level": "B1",
   "expl": "Le / les + lo → se lo."
  },
  {
   "kind": "choose",
   "q": "“Se” trong “se lo” là",
   "right": "thay le / les, không phải phản thân",
   "wrong": [
    "đại từ phản thân",
    "giới từ",
    "động từ"
   ],
   "level": "B1",
   "expl": "Tránh âm le lo."
  }
 ],
 "es-obj-por-para": [
  {
   "kind": "fill",
   "q": "Estudio ___ aprender español.",
   "hint": "mục đích",
   "accept": [
    "para"
   ],
   "level": "A2",
   "expl": "Mục đích: para + nguyên mẫu."
  },
  {
   "kind": "fill",
   "q": "Este regalo es ___ ti.",
   "hint": "người nhận",
   "accept": [
    "para"
   ],
   "level": "A2",
   "expl": "Người nhận: para."
  },
  {
   "kind": "fill",
   "q": "Gracias ___ tu ayuda.",
   "hint": "vì",
   "accept": [
    "por"
   ],
   "level": "A2",
   "expl": "Cảm ơn vì: por."
  },
  {
   "kind": "fill",
   "q": "Hablamos ___ teléfono.",
   "hint": "bằng",
   "accept": [
    "por"
   ],
   "level": "A2",
   "expl": "Phương tiện: por."
  },
  {
   "kind": "fill",
   "q": "Salgo ___ Madrid mañana.",
   "hint": "điểm đến",
   "accept": [
    "para"
   ],
   "level": "A2",
   "expl": "Điểm đến: para."
  },
  {
   "kind": "fill",
   "q": "Es ___ mañana.",
   "hint": "hạn chót",
   "accept": [
    "para"
   ],
   "level": "A2",
   "expl": "Hạn chót: para."
  },
  {
   "kind": "fill",
   "q": "Camino ___ el parque.",
   "hint": "đi qua",
   "accept": [
    "por"
   ],
   "level": "A2",
   "expl": "Nơi đi qua: por."
  },
  {
   "kind": "fill",
   "q": "Pagué diez euros ___ el libro.",
   "hint": "trao đổi",
   "accept": [
    "por"
   ],
   "level": "A2",
   "expl": "Trao đổi: por."
  },
  {
   "kind": "fill",
   "q": "No salgo ___ la lluvia.",
   "hint": "vì (nguyên nhân)",
   "accept": [
    "por"
   ],
   "level": "A2",
   "expl": "Nguyên nhân: por."
  },
  {
   "kind": "fill",
   "q": "Estudio ___ una hora.",
   "hint": "thời lượng",
   "accept": [
    "por"
   ],
   "level": "A2",
   "expl": "Thời lượng: por."
  },
  {
   "kind": "fill",
   "q": "Trabajo ___ la mañana.",
   "hint": "buổi sáng",
   "accept": [
    "por"
   ],
   "level": "A2",
   "expl": "Buổi trong ngày: por la mañana."
  },
  {
   "kind": "fill",
   "q": "Trabajo ___ ganar dinero.",
   "hint": "mục đích",
   "accept": [
    "para"
   ],
   "level": "A2",
   "expl": "Mục đích: para + nguyên mẫu."
  },
  {
   "kind": "choose",
   "q": "Mục đích (để làm gì) dùng",
   "right": "para",
   "wrong": [
    "por",
    "de",
    "en"
   ],
   "level": "A2",
   "expl": "Para + nguyên mẫu."
  },
  {
   "kind": "choose",
   "q": "Nguyên nhân (vì sao) dùng",
   "right": "por",
   "wrong": [
    "para",
    "de",
    "en"
   ],
   "level": "A2",
   "expl": "Por + danh từ."
  },
  {
   "kind": "choose",
   "q": "Mẹo phân biệt",
   "right": "para hướng tới đích, por nhìn lại nguyên nhân hoặc phương tiện",
   "wrong": [
    "para = nguyên nhân",
    "por = mục đích",
    "cả hai giống nhau"
   ],
   "level": "A2",
   "expl": "Para = tương lai, por = nguyên nhân."
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

const RUSH=[["lo · la · los · las", ["es-obj-directo"]], ["me · te · nos", ["es-obj-directo"]], ["le · les · a + người", ["es-obj-indirecto"]], ["dar · decir · escribir", ["es-obj-indirecto"]], ["me lo · te la", ["es-obj-doble"]], ["se lo · se la", ["es-obj-doble"]], ["para + inf.", ["es-obj-por-para"]], ["por teléfono · por la mañana", ["es-obj-por-para"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["pronombres"] = { pool: POOL, types: TYPES, game: {title:"¿Qué pronombre?",desc:"60 giây. Thấy dạng này, chọn đúng bài",prompt:"Dạng này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"proRushBest"} };
})();
