/* es/content/quiz/pasiva.js: bị động, se vô nhân xưng, tường thuật.
   Mixed exercise types: type the answer (fill, retry allowed) or pick one
   (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "es-pv-ser": [
  {
   "kind": "fill",
   "q": "La carta ___ escrita por Ana.",
   "hint": "ser, indefinido, ngôi ella",
   "accept": [
    "fue"
   ],
   "level": "B1",
   "expl": "Ser (indefinido) + phân từ."
  },
  {
   "kind": "fill",
   "q": "Las casas ___ vendidas el año pasado.",
   "hint": "ser, indefinido, ngôi ellos",
   "accept": [
    "fueron"
   ],
   "level": "B1",
   "expl": "Ser (indefinido) + phân từ."
  },
  {
   "kind": "fill",
   "q": "El puente ___ inaugurado mañana.",
   "hint": "ser, futuro, ngôi él",
   "accept": [
    "será"
   ],
   "level": "B1",
   "expl": "Ser (futuro) + phân từ."
  },
  {
   "kind": "fill",
   "q": "Los libros ___ leídos por muchos jóvenes.",
   "hint": "ser, presente, ngôi ellos",
   "accept": [
    "son"
   ],
   "level": "B1",
   "expl": "Ser (presente) + phân từ."
  },
  {
   "kind": "fill",
   "q": "El cuadro fue ___ por Picasso.",
   "hint": "pintar",
   "accept": [
    "pintado"
   ],
   "level": "B1",
   "expl": "Phân từ khớp giống số: el cuadro → pintado."
  },
  {
   "kind": "fill",
   "q": "La ley fue ___ por el parlamento.",
   "hint": "aprobar",
   "accept": [
    "aprobada"
   ],
   "level": "B1",
   "expl": "Phân từ khớp giống số: la ley → aprobada."
  },
  {
   "kind": "fill",
   "q": "Las ventanas fueron ___ ayer.",
   "hint": "cerrar",
   "accept": [
    "cerradas"
   ],
   "level": "B1",
   "expl": "Phân từ khớp số giống: las ventanas → cerradas."
  },
  {
   "kind": "fill",
   "q": "El libro fue ___ por una autora famosa.",
   "hint": "escribir",
   "accept": [
    "escrito"
   ],
   "level": "B1",
   "expl": "Phân từ bất quy tắc: escrito."
  },
  {
   "kind": "fill",
   "q": "La carta fue escrita ___ Ana.",
   "hint": "giới từ chỉ tác nhân",
   "accept": [
    "por"
   ],
   "level": "B1",
   "expl": "Tác nhân: por."
  },
  {
   "kind": "fill",
   "q": "Las cartas fueron ___ ayer.",
   "hint": "enviar",
   "accept": [
    "enviadas"
   ],
   "level": "B1",
   "expl": "Phân từ khớp: enviadas."
  },
  {
   "kind": "fill",
   "q": "El ladrón fue ___ por la policía.",
   "hint": "detener",
   "accept": [
    "detenido"
   ],
   "level": "B1",
   "expl": "Phân từ -ido: detenido."
  },
  {
   "kind": "fill",
   "q": "Estas obras serán ___ el próximo año.",
   "hint": "terminar",
   "accept": [
    "terminadas"
   ],
   "level": "B1",
   "expl": "Phân từ khớp: terminadas."
  },
  {
   "kind": "choose",
   "q": "Phân từ trong bị động khớp với",
   "right": "giống và số của chủ ngữ",
   "wrong": [
    "động từ ser",
    "tác nhân",
    "thì của câu"
   ],
   "level": "A1",
   "expl": "La carta → escrita."
  },
  {
   "kind": "choose",
   "q": "Câu đúng",
   "right": "La carta fue escrita por Ana",
   "wrong": [
    "La carta fue escrito por Ana",
    "La carta fue escribida por Ana",
    "La carta fue escrita de Ana"
   ],
   "level": "A1",
   "expl": "Phân từ khớp giống số, tác nhân dùng por."
  },
  {
   "kind": "choose",
   "q": "Bị động với ser thường gặp trong",
   "right": "văn viết và báo chí",
   "wrong": [
    "hội thoại hằng ngày",
    "tin nhắn",
    "biển báo"
   ],
   "level": "B2",
   "expl": "Văn nói hay dùng se hoặc chủ động."
  }
 ],
 "es-pv-se": [
  {
   "kind": "fill",
   "q": "Se ___ casa.",
   "hint": "vender, số ít",
   "accept": [
    "vende"
   ],
   "level": "B1",
   "expl": "Se + động từ ngôi 3 số ít."
  },
  {
   "kind": "fill",
   "q": "Se ___ casas.",
   "hint": "vender, số nhiều",
   "accept": [
    "venden"
   ],
   "level": "B1",
   "expl": "Danh từ số nhiều → động từ số nhiều."
  },
  {
   "kind": "fill",
   "q": "Se ___ español.",
   "hint": "hablar, số ít",
   "accept": [
    "habla"
   ],
   "level": "B1",
   "expl": "Español số ít → habla."
  },
  {
   "kind": "fill",
   "q": "Se ___ dos idiomas aquí.",
   "hint": "hablar, số nhiều",
   "accept": [
    "hablan"
   ],
   "level": "B1",
   "expl": "Dos idiomas số nhiều → hablan."
  },
  {
   "kind": "fill",
   "q": "No se ___ fumar.",
   "hint": "permitir",
   "accept": [
    "permite"
   ],
   "level": "B1",
   "expl": "Động từ nguyên mẫu đi sau → số ít."
  },
  {
   "kind": "fill",
   "q": "Se ___ habitaciones.",
   "hint": "alquilar, số nhiều",
   "accept": [
    "alquilan"
   ],
   "level": "B1",
   "expl": "Habitaciones số nhiều."
  },
  {
   "kind": "fill",
   "q": "Se ___ la cebolla.",
   "hint": "cortar, số ít",
   "accept": [
    "corta"
   ],
   "level": "B1",
   "expl": "La cebolla số ít."
  },
  {
   "kind": "fill",
   "q": "La casa se ___ en 1990.",
   "hint": "construir, indefinido",
   "accept": [
    "construyó"
   ],
   "level": "B1",
   "expl": "Indefinido: construyó."
  },
  {
   "kind": "fill",
   "q": "Aquí se ___ mucho vino.",
   "hint": "beber, số ít",
   "accept": [
    "bebe"
   ],
   "level": "B1",
   "expl": "Mucho vino số ít."
  },
  {
   "kind": "fill",
   "q": "Se ___ muchos libros.",
   "hint": "leer, số nhiều",
   "accept": [
    "leen"
   ],
   "level": "B1",
   "expl": "Muchos libros số nhiều."
  },
  {
   "kind": "fill",
   "q": "Se ___ piso.",
   "hint": "alquilar, số ít",
   "accept": [
    "alquila"
   ],
   "level": "B1",
   "expl": "Piso số ít."
  },
  {
   "kind": "fill",
   "q": "En España se ___ tarde.",
   "hint": "cenar, số ít",
   "accept": [
    "cena"
   ],
   "level": "B1",
   "expl": "Se + ngôi 3 số ít (không tân ngữ)."
  },
  {
   "kind": "choose",
   "q": "Trong “se vende/venden”, động từ khớp với",
   "right": "danh từ đi sau",
   "wrong": [
    "chữ se",
    "người nói",
    "thì"
   ],
   "level": "A1",
   "expl": "Se venden casas."
  },
  {
   "kind": "choose",
   "q": "Câu đúng",
   "right": "Se venden casas",
   "wrong": [
    "Se vende casas",
    "Se vendo casas",
    "Se vendemos casas"
   ],
   "level": "A1",
   "expl": "Casas số nhiều → venden."
  },
  {
   "kind": "choose",
   "q": "Dùng “se” bị động khi",
   "right": "không cần nêu tác nhân",
   "wrong": [
    "luôn có tác nhân",
    "chỉ trong quá khứ",
    "chỉ cho người"
   ],
   "level": "A1",
   "expl": "Se habla español."
  }
 ],
 "es-pv-impersonal": [
  {
   "kind": "fill",
   "q": "Aquí se ___ bien.",
   "hint": "vivir",
   "accept": [
    "vive"
   ],
   "level": "B1",
   "expl": "Se vô nhân xưng + ngôi 3 số ít."
  },
  {
   "kind": "fill",
   "q": "Se ___ mucho en esta empresa.",
   "hint": "trabajar",
   "accept": [
    "trabaja"
   ],
   "level": "B1",
   "expl": "Se vô nhân xưng + ngôi 3 số ít."
  },
  {
   "kind": "fill",
   "q": "Se ___ que va a llover.",
   "hint": "decir",
   "accept": [
    "dice"
   ],
   "level": "B1",
   "expl": "Se dice que = người ta nói rằng."
  },
  {
   "kind": "fill",
   "q": "Se ___ cayó el vaso.",
   "hint": "đại từ cho ngôi yo",
   "accept": [
    "me"
   ],
   "level": "B1",
   "expl": "Se vô ý: se + me."
  },
  {
   "kind": "fill",
   "q": "Se ___ olvidó la llave.",
   "hint": "đại từ cho ngôi yo",
   "accept": [
    "me"
   ],
   "level": "B1",
   "expl": "Se vô ý: se + me."
  },
  {
   "kind": "fill",
   "q": "Se ___ acabó el tiempo.",
   "hint": "đại từ cho ngôi nosotros",
   "accept": [
    "nos"
   ],
   "level": "B1",
   "expl": "Se vô ý: se + nos."
  },
  {
   "kind": "fill",
   "q": "Se me ___ los vasos.",
   "hint": "caer, indefinido, số nhiều",
   "accept": [
    "cayeron"
   ],
   "level": "B1",
   "expl": "Động từ khớp với vật (los vasos)."
  },
  {
   "kind": "fill",
   "q": "A ella se ___ rompió el coche.",
   "hint": "đại từ cho ngôi ella",
   "accept": [
    "le"
   ],
   "level": "B1",
   "expl": "Se vô ý: se + le."
  },
  {
   "kind": "fill",
   "q": "Se me ___ la llave.",
   "hint": "olvidar, indefinido",
   "accept": [
    "olvidó"
   ],
   "level": "B1",
   "expl": "Động từ khớp với vật (la llave)."
  },
  {
   "kind": "fill",
   "q": "Se le ___ las gafas.",
   "hint": "perder, indefinido, số nhiều",
   "accept": [
    "perdieron"
   ],
   "level": "B1",
   "expl": "Động từ khớp với vật (las gafas)."
  },
  {
   "kind": "fill",
   "q": "Se ___ a los niños en el parque.",
   "hint": "ver",
   "accept": [
    "ve"
   ],
   "level": "B1",
   "expl": "Se + ngôi 3 số ít với tân ngữ là người."
  },
  {
   "kind": "fill",
   "q": "A nosotros se ___ olvidaron las entradas.",
   "hint": "đại từ cho ngôi nosotros",
   "accept": [
    "nos"
   ],
   "level": "B2",
   "expl": "Se vô ý: se + nos."
  },
  {
   "kind": "choose",
   "q": "“Se me cayó el vaso” diễn tả",
   "right": "việc xảy ra ngoài ý muốn",
   "wrong": [
    "việc cố ý",
    "mệnh lệnh",
    "thói quen"
   ],
   "level": "A1",
   "expl": "Se vô ý."
  },
  {
   "kind": "choose",
   "q": "Trong se vô ý, động từ khớp với",
   "right": "vật bị tác động",
   "wrong": [
    "người nói",
    "chữ se",
    "thì"
   ],
   "level": "A1",
   "expl": "Se me cayeron los vasos."
  },
  {
   "kind": "choose",
   "q": "Câu đúng",
   "right": "Se me cayó el vaso",
   "wrong": [
    "Se me cayeron el vaso",
    "Se mi cayó el vaso",
    "Me se cayó el vaso"
   ],
   "level": "A1",
   "expl": "El vaso số ít → cayó."
  }
 ],
 "es-pv-indirecto": [
  {
   "kind": "fill",
   "q": "“Tengo hambre.” → Dijo que ___ hambre.",
   "hint": "tener",
   "accept": [
    "tenía"
   ],
   "level": "B1",
   "expl": "Presente → imperfecto."
  },
  {
   "kind": "fill",
   "q": "“Comí en casa.” → Dijo que ___ comido en casa.",
   "hint": "haber",
   "accept": [
    "había"
   ],
   "level": "B1",
   "expl": "Indefinido → pluscuamperfecto."
  },
  {
   "kind": "fill",
   "q": "“Vendré mañana.” → Dijo que ___ al día siguiente.",
   "hint": "venir",
   "accept": [
    "vendría"
   ],
   "level": "B1",
   "expl": "Futuro → condicional."
  },
  {
   "kind": "fill",
   "q": "“¡Ven!” → Me pidió que ___.",
   "hint": "venir",
   "accept": [
    "viniera"
   ],
   "level": "B2",
   "expl": "Mệnh lệnh → subjuntivo imperfecto."
  },
  {
   "kind": "fill",
   "q": "“¿Dónde vives?” → Preguntó dónde ___.",
   "hint": "vivir",
   "accept": [
    "vivía"
   ],
   "level": "B1",
   "expl": "Presente → imperfecto."
  },
  {
   "kind": "fill",
   "q": "“¿Estás cansado?” → Preguntó ___ estaba cansado.",
   "hint": "từ nối cho câu hỏi có/không",
   "accept": [
    "si"
   ],
   "level": "B1",
   "expl": "Câu hỏi có/không dùng si."
  },
  {
   "kind": "fill",
   "q": "“Hablo español.” → Dijo que ___ español.",
   "hint": "hablar",
   "accept": [
    "hablaba"
   ],
   "level": "B1",
   "expl": "Presente → imperfecto."
  },
  {
   "kind": "fill",
   "q": "“Iré mañana.” → Dijo que ___ al día siguiente.",
   "hint": "ir",
   "accept": [
    "iría"
   ],
   "level": "B1",
   "expl": "Futuro → condicional."
  },
  {
   "kind": "fill",
   "q": "“Estudio hoy.” → Dijo que estudiaba ___ día.",
   "hint": "hoy → ?",
   "accept": [
    "ese"
   ],
   "level": "B1",
   "expl": "Hoy → ese día."
  },
  {
   "kind": "fill",
   "q": "“Estoy aquí.” → Dijo que estaba ___.",
   "hint": "aquí → ?",
   "accept": [
    "allí"
   ],
   "level": "B1",
   "expl": "Aquí → allí."
  },
  {
   "kind": "fill",
   "q": "“¡Habla más despacio!” → Me pidió que ___ más despacio.",
   "hint": "hablar",
   "accept": [
    "hablara"
   ],
   "level": "B2",
   "expl": "Mệnh lệnh → subjuntivo imperfecto."
  },
  {
   "kind": "fill",
   "q": "“He terminado.” → Dijo que ___ terminado.",
   "hint": "haber",
   "accept": [
    "había"
   ],
   "level": "B1",
   "expl": "Perfecto → pluscuamperfecto."
  },
  {
   "kind": "choose",
   "q": "Tường thuật quá khứ: presente → ?",
   "right": "imperfecto",
   "wrong": [
    "indefinido",
    "futuro",
    "presente"
   ],
   "level": "A1",
   "expl": "Lùi một thì."
  },
  {
   "kind": "choose",
   "q": "Tường thuật quá khứ: futuro → ?",
   "right": "condicional",
   "wrong": [
    "imperfecto",
    "indefinido",
    "presente"
   ],
   "level": "A1",
   "expl": "Vendré → vendría."
  },
  {
   "kind": "choose",
   "q": "“Mañana” trong lời tường thuật quá khứ → ?",
   "right": "al día siguiente",
   "wrong": [
    "hoy",
    "ayer",
    "ahora"
   ],
   "level": "A1",
   "expl": "Mốc thời gian cũng đổi."
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

const RUSH=[["fue + participio · por", ["es-pv-ser"]], ["será inaugurado", ["es-pv-ser"]], ["se vende · se venden", ["es-pv-se"]], ["se habla español", ["es-pv-se"]], ["se vive bien · se dice que", ["es-pv-impersonal"]], ["se me cayó · se nos acabó", ["es-pv-impersonal"]], ["dijo que + imperfecto", ["es-pv-indirecto"]], ["preguntó si · me pidió que", ["es-pv-indirecto"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["pasiva"] = { pool: POOL, types: TYPES, game: {title:"¿Qué construcción?",desc:"60 giây. Thấy dạng này, chọn đúng bài",prompt:"Dạng này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"pvRushBest"} };
})();
