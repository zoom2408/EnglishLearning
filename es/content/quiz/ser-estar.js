/* es/content/quiz/ser-estar.js: ser, estar, tener, hay.
   Mixed exercise types: type the answer (fill, retry allowed) or pick one
   (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "es-ser-ser": [
  {
   "kind": "fill",
   "q": "Yo ___ estudiante.",
   "hint": "ser, ngôi yo",
   "accept": [
    "soy"
   ],
   "level": "A1",
   "expl": "Yo soy."
  },
  {
   "kind": "fill",
   "q": "Tú ___ de Vietnam.",
   "hint": "ser, ngôi tú",
   "accept": [
    "eres"
   ],
   "level": "A1",
   "expl": "Tú eres."
  },
  {
   "kind": "fill",
   "q": "Ella ___ doctora.",
   "hint": "ser, ngôi ella",
   "accept": [
    "es"
   ],
   "level": "A1",
   "expl": "Nghề nghiệp dùng ser."
  },
  {
   "kind": "fill",
   "q": "Nosotros ___ amigos.",
   "hint": "ser, ngôi nosotros",
   "accept": [
    "somos"
   ],
   "level": "A1",
   "expl": "Nosotros somos."
  },
  {
   "kind": "fill",
   "q": "Vosotros ___ españoles.",
   "hint": "ser, ngôi vosotros",
   "accept": [
    "sois"
   ],
   "level": "A1",
   "expl": "Vosotros sois."
  },
  {
   "kind": "fill",
   "q": "Ellos ___ altos.",
   "hint": "ser, ngôi ellos",
   "accept": [
    "son"
   ],
   "level": "A1",
   "expl": "Ellos son."
  },
  {
   "kind": "fill",
   "q": "Hoy ___ lunes.",
   "hint": "ser",
   "accept": [
    "es"
   ],
   "level": "A1",
   "expl": "Ngày trong tuần dùng ser."
  },
  {
   "kind": "fill",
   "q": "___ las dos.",
   "hint": "ser, giờ",
   "accept": [
    "Son"
   ],
   "level": "A1",
   "expl": "Giờ dùng son las (trừ 1 giờ)."
  },
  {
   "kind": "fill",
   "q": "La mesa ___ de madera.",
   "hint": "ser, chất liệu",
   "accept": [
    "es"
   ],
   "level": "A1",
   "expl": "Chất liệu dùng ser."
  },
  {
   "kind": "fill",
   "q": "Mi madre ___ profesora.",
   "hint": "ser",
   "accept": [
    "es"
   ],
   "level": "A1",
   "expl": "Nghề nghiệp dùng ser."
  },
  {
   "kind": "fill",
   "q": "El libro ___ de Ana.",
   "hint": "ser, sở hữu",
   "accept": [
    "es"
   ],
   "level": "A1",
   "expl": "Sở hữu dùng ser."
  },
  {
   "kind": "fill",
   "q": "La fiesta ___ en mi casa.",
   "hint": "ser, sự kiện",
   "accept": [
    "es"
   ],
   "level": "B1",
   "expl": "Sự kiện diễn ra ở đâu dùng ser."
  },
  {
   "kind": "choose",
   "q": "Câu đúng về nghề nghiệp",
   "right": "Mi padre es ingeniero",
   "wrong": [
    "Mi padre está ingeniero",
    "Mi padre tiene ingeniero",
    "Mi padre hay ingeniero"
   ],
   "level": "A1",
   "expl": "Nghề nghiệp dùng ser."
  },
  {
   "kind": "choose",
   "q": "Câu đúng về quê quán",
   "right": "Somos de Vietnam",
   "wrong": [
    "Estamos de Vietnam",
    "Tenemos de Vietnam",
    "Hay de Vietnam"
   ],
   "level": "A1",
   "expl": "Nguồn gốc dùng ser + de."
  },
  {
   "kind": "choose",
   "q": "Ser dùng để nói về",
   "right": "Điều cố định: danh tính, nghề, quê quán",
   "wrong": [
    "Vị trí tạm thời",
    "Cảm giác đói, khát",
    "Sự tồn tại của vật"
   ],
   "level": "A1",
   "expl": "Ser = bản chất."
  }
 ],
 "es-ser-estar": [
  {
   "kind": "fill",
   "q": "Yo ___ cansado.",
   "hint": "estar, ngôi yo",
   "accept": [
    "estoy"
   ],
   "level": "A1",
   "expl": "Trạng thái tạm thời dùng estar."
  },
  {
   "kind": "fill",
   "q": "¿Cómo ___ tú?",
   "hint": "estar, ngôi tú",
   "accept": [
    "estás"
   ],
   "level": "A1",
   "expl": "Tú estás."
  },
  {
   "kind": "fill",
   "q": "Ella ___ en casa.",
   "hint": "estar, vị trí",
   "accept": [
    "está"
   ],
   "level": "A1",
   "expl": "Vị trí dùng estar."
  },
  {
   "kind": "fill",
   "q": "Nosotros ___ en el parque.",
   "hint": "estar, ngôi nosotros",
   "accept": [
    "estamos"
   ],
   "level": "A1",
   "expl": "Nosotros estamos."
  },
  {
   "kind": "fill",
   "q": "Vosotros ___ listos.",
   "hint": "estar, ngôi vosotros",
   "accept": [
    "estáis"
   ],
   "level": "A1",
   "expl": "Vosotros estáis."
  },
  {
   "kind": "fill",
   "q": "Ellos ___ contentos.",
   "hint": "estar, ngôi ellos",
   "accept": [
    "están"
   ],
   "level": "A1",
   "expl": "Ellos están."
  },
  {
   "kind": "fill",
   "q": "Madrid ___ en España.",
   "hint": "estar, vị trí",
   "accept": [
    "está"
   ],
   "level": "A1",
   "expl": "Vị trí địa lý dùng estar."
  },
  {
   "kind": "fill",
   "q": "El libro ___ en la mesa.",
   "hint": "estar, vị trí",
   "accept": [
    "está"
   ],
   "level": "A1",
   "expl": "Vị trí của vật dùng estar."
  },
  {
   "kind": "fill",
   "q": "La sopa ___ fría.",
   "hint": "estar, trạng thái",
   "accept": [
    "está"
   ],
   "level": "A1",
   "expl": "Trạng thái tạm thời dùng estar."
  },
  {
   "kind": "fill",
   "q": "Yo ___ estudiando.",
   "hint": "estar, đang diễn ra",
   "accept": [
    "estoy"
   ],
   "level": "A1",
   "expl": "Estar + gerundio diễn tả hành động đang diễn ra."
  },
  {
   "kind": "fill",
   "q": "¿Dónde ___ los libros?",
   "hint": "estar, số nhiều",
   "accept": [
    "están"
   ],
   "level": "A1",
   "expl": "Hỏi vị trí dùng estar."
  },
  {
   "kind": "fill",
   "q": "Las llaves ___ en la mesa.",
   "hint": "estar, số nhiều",
   "accept": [
    "están"
   ],
   "level": "A1",
   "expl": "Vị trí dùng estar."
  },
  {
   "kind": "choose",
   "q": "Câu đúng về vị trí",
   "right": "Mi casa está cerca",
   "wrong": [
    "Mi casa es cerca",
    "Mi casa tiene cerca",
    "Mi casa hay cerca"
   ],
   "level": "A1",
   "expl": "Vị trí dùng estar."
  },
  {
   "kind": "choose",
   "q": "Câu đúng cho “Tôi đang học”",
   "right": "Estoy estudiando",
   "wrong": [
    "Soy estudiando",
    "Tengo estudiando",
    "Hay estudiando"
   ],
   "level": "A1",
   "expl": "Estar + gerundio."
  },
  {
   "kind": "choose",
   "q": "Cách hỏi “Nhà vệ sinh ở đâu?”",
   "right": "¿Dónde está el baño?",
   "wrong": [
    "¿Dónde es el baño?",
    "¿Dónde hay el baño?",
    "¿Dónde tiene el baño?"
   ],
   "level": "A1",
   "expl": "Vị trí dùng estar."
  }
 ],
 "es-ser-tener": [
  {
   "kind": "fill",
   "q": "Yo ___ un perro.",
   "hint": "tener, ngôi yo",
   "accept": [
    "tengo"
   ],
   "level": "A1",
   "expl": "Yo tengo."
  },
  {
   "kind": "fill",
   "q": "Tú ___ dos hermanos.",
   "hint": "tener, ngôi tú",
   "accept": [
    "tienes"
   ],
   "level": "A1",
   "expl": "Tú tienes."
  },
  {
   "kind": "fill",
   "q": "Ella ___ veinte años.",
   "hint": "tener, ngôi ella",
   "accept": [
    "tiene"
   ],
   "level": "A1",
   "expl": "Tuổi dùng tener."
  },
  {
   "kind": "fill",
   "q": "Nosotros ___ clase.",
   "hint": "tener, ngôi nosotros",
   "accept": [
    "tenemos"
   ],
   "level": "A1",
   "expl": "Nosotros tenemos."
  },
  {
   "kind": "fill",
   "q": "Vosotros ___ hambre.",
   "hint": "tener, ngôi vosotros",
   "accept": [
    "tenéis"
   ],
   "level": "A1",
   "expl": "Vosotros tenéis."
  },
  {
   "kind": "fill",
   "q": "Ellos ___ frío.",
   "hint": "tener, ngôi ellos",
   "accept": [
    "tienen"
   ],
   "level": "A1",
   "expl": "Ellos tienen."
  },
  {
   "kind": "fill",
   "q": "Yo ___ sed.",
   "hint": "tener, ngôi yo",
   "accept": [
    "tengo"
   ],
   "level": "A1",
   "expl": "Cảm giác thể chất dùng tener."
  },
  {
   "kind": "fill",
   "q": "Él ___ mucho trabajo.",
   "hint": "tener, ngôi él",
   "accept": [
    "tiene"
   ],
   "level": "A1",
   "expl": "Él tiene."
  },
  {
   "kind": "fill",
   "q": "Tengo ___ estudiar.",
   "hint": "từ ngắn, nghĩa là “phải”",
   "accept": [
    "que"
   ],
   "level": "A2",
   "expl": "Tener que + động từ nguyên mẫu = phải làm gì."
  },
  {
   "kind": "fill",
   "q": "¿Cuántos años ___ usted?",
   "hint": "tener, ngôi usted",
   "accept": [
    "tiene"
   ],
   "level": "A1",
   "expl": "Usted đi với dạng ngôi thứ ba."
  },
  {
   "kind": "fill",
   "q": "Mi hermano ___ sueño.",
   "hint": "tener, ngôi él",
   "accept": [
    "tiene"
   ],
   "level": "A1",
   "expl": "Tener sueño = buồn ngủ."
  },
  {
   "kind": "fill",
   "q": "Nosotros ___ miedo.",
   "hint": "tener, ngôi nosotros",
   "accept": [
    "tenemos"
   ],
   "level": "A1",
   "expl": "Tener miedo = sợ."
  },
  {
   "kind": "choose",
   "q": "Cách nói “Tôi đói”",
   "right": "Tengo hambre",
   "wrong": [
    "Estoy hambre",
    "Soy hambre",
    "Hay hambre"
   ],
   "level": "A1",
   "expl": "Cảm giác thể chất dùng tener."
  },
  {
   "kind": "choose",
   "q": "Cách nói “Tôi 30 tuổi”",
   "right": "Tengo treinta años",
   "wrong": [
    "Soy treinta años",
    "Estoy treinta años",
    "Hay treinta años"
   ],
   "level": "A1",
   "expl": "Tuổi dùng tener."
  },
  {
   "kind": "choose",
   "q": "Cách nói “Tôi phải làm việc”",
   "right": "Tengo que trabajar",
   "wrong": [
    "Tengo trabajar",
    "Tengo de trabajar",
    "Tengo a trabajar"
   ],
   "level": "A2",
   "expl": "Tener que + inf."
  }
 ],
 "es-ser-hay": [
  {
   "kind": "fill",
   "q": "___ un libro en la mesa.",
   "hint": "từ “có”",
   "accept": [
    "Hay"
   ],
   "level": "A1",
   "expl": "Hay + danh từ chưa xác định."
  },
  {
   "kind": "fill",
   "q": "___ dos gatos en el jardín.",
   "hint": "từ “có”",
   "accept": [
    "Hay"
   ],
   "level": "A1",
   "expl": "Hay không đổi theo số nhiều."
  },
  {
   "kind": "fill",
   "q": "No ___ leche.",
   "hint": "từ “có”",
   "accept": [
    "hay"
   ],
   "level": "A1",
   "expl": "Phủ định: no hay."
  },
  {
   "kind": "fill",
   "q": "¿___ un banco cerca?",
   "hint": "từ “có”",
   "accept": [
    "Hay"
   ],
   "level": "A1",
   "expl": "Hỏi: ¿Hay …?"
  },
  {
   "kind": "fill",
   "q": "En mi ciudad ___ un parque grande.",
   "hint": "từ “có”",
   "accept": [
    "hay"
   ],
   "level": "A1",
   "expl": "Hay giới thiệu cái có trong nơi chốn."
  },
  {
   "kind": "fill",
   "q": "¿Cuántos estudiantes ___ en la clase?",
   "hint": "từ “có”",
   "accept": [
    "hay"
   ],
   "level": "A1",
   "expl": "¿Cuántos … hay?"
  },
  {
   "kind": "fill",
   "q": "En la clase ___ veinte estudiantes.",
   "hint": "từ “có”",
   "accept": [
    "hay"
   ],
   "level": "A1",
   "expl": "Hay + số lượng."
  },
  {
   "kind": "fill",
   "q": "Aquí no ___ nadie.",
   "hint": "từ “có”",
   "accept": [
    "hay"
   ],
   "level": "A1",
   "expl": "No hay nadie = không có ai."
  },
  {
   "kind": "fill",
   "q": "¿Hay ___ baño por aquí?",
   "hint": "un/una",
   "accept": [
    "un"
   ],
   "level": "A1",
   "expl": "Baño giống đực, chưa xác định."
  },
  {
   "kind": "fill",
   "q": "¿Dónde ___ el banco?",
   "hint": "estar",
   "accept": [
    "está"
   ],
   "level": "A1",
   "expl": "Vật đã xác định dùng estar."
  },
  {
   "kind": "fill",
   "q": "No ___ problema.",
   "hint": "từ “có”",
   "accept": [
    "hay"
   ],
   "level": "A1",
   "expl": "No hay problema = không sao."
  },
  {
   "kind": "choose",
   "q": "Câu đúng khi vật đã xác định",
   "right": "El libro está en la mesa",
   "wrong": [
    "El libro hay en la mesa",
    "Hay el libro en la mesa",
    "Es el libro en la mesa"
   ],
   "level": "A1",
   "expl": "Vật có el/la/mi… dùng estar."
  },
  {
   "kind": "choose",
   "q": "Hay có đổi dạng theo số nhiều không?",
   "right": "Không, luôn là hay",
   "wrong": [
    "Có, thành “hayn”",
    "Có, thành “han”",
    "Chỉ đổi với danh từ cái"
   ],
   "level": "A1",
   "expl": "Hay bất biến."
  },
  {
   "kind": "choose",
   "q": "Dạng phủ định của hay",
   "right": "No hay",
   "wrong": [
    "Hay no",
    "No es",
    "No tiene"
   ],
   "level": "A1",
   "expl": "No đứng trước hay."
  },
  {
   "kind": "choose",
   "q": "Cách hỏi “Gần đây có công viên không?”",
   "right": "¿Hay un parque cerca?",
   "wrong": [
    "¿Es un parque cerca?",
    "¿Está un parque cerca?",
    "¿Tiene un parque cerca?"
   ],
   "level": "A1",
   "expl": "Hỏi sự tồn tại dùng hay."
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

const RUSH=[["Soy · eres · es", ["es-ser-ser"]], ["nghề nghiệp · quốc tịch", ["es-ser-ser"]], ["Estoy · estás · está", ["es-ser-estar"]], ["vị trí · cảm xúc", ["es-ser-estar"]], ["Tengo … años", ["es-ser-tener"]], ["tener hambre · sed · frío", ["es-ser-tener"]], ["tener que + inf.", ["es-ser-tener"]], ["Hay un… · No hay…", ["es-ser-hay"]], ["¿Hay…?", ["es-ser-hay"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["ser-estar"] = { pool: POOL, types: TYPES, game: {title:"¿Cuál verbo?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng động từ",prompt:"Dấu hiệu này thuộc động từ nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"serRushBest"} };
})();
