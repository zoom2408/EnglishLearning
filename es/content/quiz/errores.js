/* es/content/quiz/errores.js: lỗi hay gặp.
   Mixed exercise types: type the answer (fill, retry allowed) or pick one
   (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "es-err-falsos": [
  {
   "kind": "fill",
   "q": "Está ___. (có thai)",
   "hint": "bắt đầu bằng em-",
   "accept": [
    "embarazada"
   ],
   "level": "A2",
   "expl": "Embarazada = có thai."
  },
  {
   "kind": "fill",
   "q": "Estoy ___ y tengo tos. (bị cảm lạnh)",
   "hint": "bắt đầu bằng con-",
   "accept": [
    "constipado"
   ],
   "level": "A2",
   "expl": "Constipado = cảm lạnh."
  },
  {
   "kind": "fill",
   "q": "El presidente ___ es Ana. (hiện tại)",
   "hint": "bắt đầu bằng ac-",
   "accept": [
    "actual"
   ],
   "level": "A2",
   "expl": "Actual = hiện tại."
  },
  {
   "kind": "fill",
   "q": "Compro libros en la ___. (hiệu sách)",
   "hint": "bắt đầu bằng li-",
   "accept": [
    "librería"
   ],
   "level": "A2",
   "expl": "Librería = hiệu sách."
  },
  {
   "kind": "fill",
   "q": "Fue un gran ___. (thành công)",
   "hint": "bắt đầu bằng ex-",
   "accept": [
    "éxito"
   ],
   "level": "A2",
   "expl": "Éxito = thành công."
  },
  {
   "kind": "fill",
   "q": "Es muy ___ con los animales. (nhạy cảm)",
   "hint": "bắt đầu bằng sen-",
   "accept": [
    "sensible"
   ],
   "level": "A2",
   "expl": "Sensible = nhạy cảm."
  },
  {
   "kind": "fill",
   "q": "Estudio en la ___ de la universidad. (thư viện)",
   "hint": "bắt đầu bằng bi-",
   "accept": [
    "biblioteca"
   ],
   "level": "A2",
   "expl": "Biblioteca = thư viện."
  },
  {
   "kind": "fill",
   "q": "La ___ está a la derecha. (lối ra)",
   "hint": "bắt đầu bằng sa-",
   "accept": [
    "salida"
   ],
   "level": "A2",
   "expl": "Salida = lối ra."
  },
  {
   "kind": "choose",
   "q": "“Embarazada” nghĩa là",
   "right": "có thai",
   "wrong": [
    "xấu hổ",
    "bối rối",
    "mệt mỏi"
   ],
   "level": "A2",
   "expl": "Xấu hổ: avergonzada."
  },
  {
   "kind": "choose",
   "q": "“Constipado” nghĩa là",
   "right": "bị cảm lạnh",
   "wrong": [
    "bị táo bón",
    "bị ngạt mũi",
    "bị đau bụng"
   ],
   "level": "A2",
   "expl": "Táo bón: estreñido."
  },
  {
   "kind": "choose",
   "q": "“Librería” là",
   "right": "hiệu sách",
   "wrong": [
    "thư viện",
    "nhà sách cũ",
    "sách giáo khoa"
   ],
   "level": "A2",
   "expl": "Thư viện: biblioteca."
  },
  {
   "kind": "choose",
   "q": "“Actual” nghĩa là",
   "right": "hiện tại",
   "wrong": [
    "thực sự",
    "chính xác",
    "tương lai"
   ],
   "level": "A2",
   "expl": "Thực sự: real."
  }
 ],
 "es-err-ser-estar": [
  {
   "kind": "fill",
   "q": "La sopa ___ rica. (ngon)",
   "hint": "ser hoặc estar",
   "accept": [
    "está"
   ],
   "level": "B1",
   "expl": "Estar rico = ngon."
  },
  {
   "kind": "fill",
   "q": "Mi tío ___ rico. (giàu)",
   "hint": "ser hoặc estar",
   "accept": [
    "es"
   ],
   "level": "B1",
   "expl": "Ser rico = giàu."
  },
  {
   "kind": "fill",
   "q": "El niño ___ listo. (thông minh)",
   "hint": "ser hoặc estar",
   "accept": [
    "es"
   ],
   "level": "B1",
   "expl": "Ser listo = thông minh."
  },
  {
   "kind": "fill",
   "q": "Ya ___ listo. (sẵn sàng, ngôi yo)",
   "hint": "ser hoặc estar",
   "accept": [
    "estoy"
   ],
   "level": "B1",
   "expl": "Estar listo = sẵn sàng."
  },
  {
   "kind": "fill",
   "q": "La película ___ aburrida. (nhàm chán)",
   "hint": "ser hoặc estar",
   "accept": [
    "es"
   ],
   "level": "B1",
   "expl": "Ser aburrido = nhàm chán."
  },
  {
   "kind": "fill",
   "q": "Hoy estoy ___. (buồn chán)",
   "hint": "bắt đầu bằng abu-",
   "accept": [
    "aburrido"
   ],
   "level": "B1",
   "expl": "Estar aburrido = buồn chán."
  },
  {
   "kind": "fill",
   "q": "Mi abuelo ___ vivo. (còn sống)",
   "hint": "ser hoặc estar",
   "accept": [
    "está"
   ],
   "level": "B1",
   "expl": "Estar vivo = còn sống."
  },
  {
   "kind": "fill",
   "q": "El tomate ___ verde. (chưa chín)",
   "hint": "ser hoặc estar",
   "accept": [
    "está"
   ],
   "level": "B1",
   "expl": "Estar verde = chưa chín."
  },
  {
   "kind": "fill",
   "q": "El coche ___ verde. (màu xanh)",
   "hint": "ser hoặc estar",
   "accept": [
    "es"
   ],
   "level": "B1",
   "expl": "Ser verde = màu xanh."
  },
  {
   "kind": "fill",
   "q": "Hoy el niño ___ malo. (ốm)",
   "hint": "ser hoặc estar",
   "accept": [
    "está"
   ],
   "level": "B1",
   "expl": "Estar malo = ốm."
  },
  {
   "kind": "fill",
   "q": "Ese hombre ___ malo. (xấu tính)",
   "hint": "ser hoặc estar",
   "accept": [
    "es"
   ],
   "level": "B1",
   "expl": "Ser malo = xấu tính."
  },
  {
   "kind": "choose",
   "q": "“Estar rico” nghĩa là",
   "right": "ngon",
   "wrong": [
    "giàu",
    "đẹp",
    "tốt bụng"
   ],
   "level": "B1",
   "expl": "Ser rico = giàu."
  }
 ],
 "es-err-genero": [
  {
   "kind": "fill",
   "q": "___ problema",
   "hint": "el hoặc la",
   "accept": [
    "el"
   ],
   "level": "A2",
   "expl": "Tận cùng -ma gốc Hy Lạp: giống đực."
  },
  {
   "kind": "fill",
   "q": "___ mano",
   "hint": "el hoặc la",
   "accept": [
    "la"
   ],
   "level": "A2",
   "expl": "Ngoại lệ: tận cùng -o nhưng giống cái."
  },
  {
   "kind": "fill",
   "q": "___ día",
   "hint": "el hoặc la",
   "accept": [
    "el"
   ],
   "level": "A2",
   "expl": "Ngoại lệ: tận cùng -a nhưng giống đực."
  },
  {
   "kind": "fill",
   "q": "___ mapa",
   "hint": "el hoặc la",
   "accept": [
    "el"
   ],
   "level": "A2",
   "expl": "Tận cùng -a nhưng giống đực."
  },
  {
   "kind": "fill",
   "q": "___ foto",
   "hint": "el hoặc la",
   "accept": [
    "la"
   ],
   "level": "A2",
   "expl": "Foto = fotografía: giống cái."
  },
  {
   "kind": "fill",
   "q": "___ agua fría",
   "hint": "el hoặc la",
   "accept": [
    "El"
   ],
   "level": "B1",
   "expl": "Danh từ cái bắt đầu bằng a nhấn dùng el."
  },
  {
   "kind": "fill",
   "q": "Las ___ están frías.",
   "hint": "agua, số nhiều",
   "accept": [
    "aguas"
   ],
   "level": "B1",
   "expl": "Số nhiều quay lại dùng las."
  },
  {
   "kind": "fill",
   "q": "___ lunes",
   "hint": "los hoặc las",
   "accept": [
    "Los"
   ],
   "level": "A2",
   "expl": "Ngày trong tuần giống đực, số nhiều không đổi."
  },
  {
   "kind": "fill",
   "q": "___ capital de España",
   "hint": "el hoặc la (thủ đô)",
   "accept": [
    "La"
   ],
   "level": "B1",
   "expl": "La capital = thủ đô; el capital = vốn."
  },
  {
   "kind": "fill",
   "q": "___ idioma",
   "hint": "el hoặc la",
   "accept": [
    "el"
   ],
   "level": "A2",
   "expl": "Tận cùng -ma gốc Hy Lạp: giống đực."
  },
  {
   "kind": "fill",
   "q": "___ programa",
   "hint": "el hoặc la",
   "accept": [
    "el"
   ],
   "level": "A2",
   "expl": "Tận cùng -ma gốc Hy Lạp: giống đực."
  },
  {
   "kind": "fill",
   "q": "___ moto",
   "hint": "el hoặc la",
   "accept": [
    "la"
   ],
   "level": "A2",
   "expl": "Moto = motocicleta: giống cái."
  }
 ],
 "es-err-preposiciones": [
  {
   "kind": "fill",
   "q": "Pienso ___ ti.",
   "hint": "giới từ",
   "accept": [
    "en"
   ],
   "level": "A2",
   "expl": "Pensar en."
  },
  {
   "kind": "fill",
   "q": "Sueño ___ viajar.",
   "hint": "giới từ",
   "accept": [
    "con"
   ],
   "level": "A2",
   "expl": "Soñar con."
  },
  {
   "kind": "fill",
   "q": "Depende ___ ti.",
   "hint": "giới từ",
   "accept": [
    "de"
   ],
   "level": "A2",
   "expl": "Depender de."
  },
  {
   "kind": "fill",
   "q": "Se casó ___ Ana.",
   "hint": "giới từ",
   "accept": [
    "con"
   ],
   "level": "A2",
   "expl": "Casarse con."
  },
  {
   "kind": "fill",
   "q": "Se enamoró ___ ella.",
   "hint": "giới từ",
   "accept": [
    "de"
   ],
   "level": "A2",
   "expl": "Enamorarse de."
  },
  {
   "kind": "fill",
   "q": "Me preocupo ___ el examen.",
   "hint": "giới từ",
   "accept": [
    "por"
   ],
   "level": "A2",
   "expl": "Preocuparse por."
  },
  {
   "kind": "fill",
   "q": "Tardo mucho ___ llegar.",
   "hint": "giới từ",
   "accept": [
    "en"
   ],
   "level": "B1",
   "expl": "Tardar en."
  },
  {
   "kind": "fill",
   "q": "Voy ___ Madrid.",
   "hint": "giới từ",
   "accept": [
    "a"
   ],
   "level": "A1",
   "expl": "Ir a."
  },
  {
   "kind": "fill",
   "q": "Voy ___ autobús.",
   "hint": "giới từ",
   "accept": [
    "en"
   ],
   "level": "A1",
   "expl": "Phương tiện: en."
  },
  {
   "kind": "fill",
   "q": "Consiste ___ practicar mucho.",
   "hint": "giới từ",
   "accept": [
    "en"
   ],
   "level": "B1",
   "expl": "Consistir en."
  },
  {
   "kind": "fill",
   "q": "Se parece ___ su madre.",
   "hint": "giới từ",
   "accept": [
    "a"
   ],
   "level": "B1",
   "expl": "Parecerse a."
  },
  {
   "kind": "fill",
   "q": "Insisto ___ pagar yo.",
   "hint": "giới từ",
   "accept": [
    "en"
   ],
   "level": "B1",
   "expl": "Insistir en."
  }
 ],
 "es-err-ortografia": [
  {
   "kind": "fill",
   "q": "¿___ no vienes?",
   "hint": "tại sao",
   "accept": [
    "Por qué"
   ],
   "level": "A2",
   "expl": "Câu hỏi: por qué (hai từ, có dấu)."
  },
  {
   "kind": "fill",
   "q": "No voy ___ estoy cansado.",
   "hint": "vì",
   "accept": [
    "porque"
   ],
   "level": "A2",
   "expl": "Câu trả lời: porque."
  },
  {
   "kind": "fill",
   "q": "Hay que ___ paciencia.",
   "hint": "động từ có",
   "accept": [
    "haber"
   ],
   "level": "B1",
   "expl": "Haber = động từ."
  },
  {
   "kind": "fill",
   "q": "___ ver qué pasa.",
   "hint": "để xem",
   "accept": [
    "A"
   ],
   "level": "B1",
   "expl": "A ver = để xem."
  },
  {
   "kind": "fill",
   "q": "No es azul, ___ verde.",
   "hint": "mà là",
   "accept": [
    "sino"
   ],
   "level": "B1",
   "expl": "Sino = mà là."
  },
  {
   "kind": "fill",
   "q": "___ no llegas, me voy.",
   "hint": "nếu không",
   "accept": [
    "Si no"
   ],
   "level": "B1",
   "expl": "Si no = nếu không."
  },
  {
   "kind": "fill",
   "q": "___ libro está en la mesa.",
   "hint": "của bạn",
   "accept": [
    "Tu"
   ],
   "level": "A2",
   "expl": "Tu = của bạn (không dấu)."
  },
  {
   "kind": "fill",
   "q": "___ eres mi amigo.",
   "hint": "bạn",
   "accept": [
    "Tú"
   ],
   "level": "A2",
   "expl": "Tú = bạn (có dấu)."
  },
  {
   "kind": "fill",
   "q": "___, voy.",
   "hint": "vâng",
   "accept": [
    "Sí"
   ],
   "level": "A2",
   "expl": "Sí = vâng (có dấu)."
  },
  {
   "kind": "fill",
   "q": "___ llueve, no voy.",
   "hint": "nếu",
   "accept": [
    "Si"
   ],
   "level": "A2",
   "expl": "Si = nếu (không dấu)."
  },
  {
   "kind": "fill",
   "q": "___ hay un libro.",
   "hint": "ở đó",
   "accept": [
    "Ahí"
   ],
   "level": "B1",
   "expl": "Ahí = ở đó."
  },
  {
   "kind": "fill",
   "q": "¡___, qué dolor!",
   "hint": "ôi",
   "accept": [
    "Ay"
   ],
   "level": "B1",
   "expl": "Ay = ôi."
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

const RUSH=[["embarazada · constipado", ["es-err-falsos"]], ["librería · éxito · actual", ["es-err-falsos"]], ["estar rico · ser rico", ["es-err-ser-estar"]], ["ser listo · estar listo", ["es-err-ser-estar"]], ["el día · la mano · el agua", ["es-err-genero"]], ["los lunes", ["es-err-genero"]], ["pensar en · soñar con", ["es-err-preposiciones"]], ["casarse con · depender de", ["es-err-preposiciones"]], ["por qué · porque", ["es-err-ortografia"]], ["sino · si no · a ver", ["es-err-ortografia"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["errores"] = { pool: POOL, types: TYPES, game: {title:"¿Qué error?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng bài",prompt:"Dấu hiệu này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"errRushBest"} };
})();
