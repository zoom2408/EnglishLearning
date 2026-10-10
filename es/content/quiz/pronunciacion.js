/* es/content/quiz/pronunciacion.js: phát âm, chữ cái, trọng âm.
   Mixed exercise types: type the answer (fill, retry allowed) or pick one
   (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "es-pron-alfabeto": [
  {
   "kind": "choose",
   "q": "Chữ nào luôn câm trong tiếng Tây Ban Nha?",
   "right": "h",
   "wrong": [
    "j",
    "v",
    "z"
   ],
   "level": "A1",
   "expl": "Chữ h luôn câm: hola đọc là “ô-la”."
  },
  {
   "kind": "fill",
   "q": "Chữ ñ có tên là ___.",
   "hint": "tên chữ cái (3 chữ)",
   "accept": [
    "eñe"
   ],
   "level": "A1",
   "expl": "Chữ ñ gọi là “eñe”."
  },
  {
   "kind": "fill",
   "q": "Chữ h có tên là ___.",
   "hint": "tên chữ cái (5 chữ)",
   "accept": [
    "hache"
   ],
   "level": "A1",
   "expl": "Chữ h gọi là “hache”, dù trong từ nó câm."
  },
  {
   "kind": "choose",
   "q": "Chữ nào có trong tiếng Tây Ban Nha mà tiếng Anh không có?",
   "right": "ñ",
   "wrong": [
    "ç",
    "ß",
    "å"
   ],
   "level": "A1",
   "expl": "Ñ là chữ riêng của tiếng Tây Ban Nha."
  },
  {
   "kind": "choose",
   "q": "Bảng chữ cái tiếng Tây Ban Nha hiện có bao nhiêu chữ?",
   "right": "27",
   "wrong": [
    "26",
    "28",
    "29"
   ],
   "level": "A1",
   "expl": "26 chữ Latinh cộng thêm ñ là 27."
  },
  {
   "kind": "fill",
   "q": "Chữ w có tên là uve ___.",
   "hint": "một từ, nghĩa là “đôi”",
   "accept": [
    "doble"
   ],
   "level": "A1",
   "expl": "W gọi là “uve doble” (v đôi)."
  },
  {
   "kind": "choose",
   "q": "Chữ “v” và “b” trong tiếng Tây Ban Nha đọc thế nào?",
   "right": "Giống nhau, đều là âm /b/",
   "wrong": [
    "v là /v/ như tiếng Việt, b là /b/",
    "v đọc như “f”",
    "b đọc như “p”"
   ],
   "level": "A1",
   "expl": "Hai chữ v và b đọc giống nhau: vino và bino nghe như nhau."
  },
  {
   "kind": "fill",
   "q": "Chữ q luôn đi cùng chữ ___.",
   "hint": "một chữ cái",
   "accept": [
    "u"
   ],
   "level": "A1",
   "expl": "Q luôn đi với u: que, quien, queso."
  },
  {
   "kind": "choose",
   "q": "Chữ j có tên là gì?",
   "right": "jota",
   "wrong": [
    "hota",
    "jay",
    "yota"
   ],
   "level": "A1",
   "expl": "Chữ j gọi là “jota”."
  },
  {
   "kind": "fill",
   "q": "Chữ r có tên là ___.",
   "hint": "tên chữ cái (5 chữ)",
   "accept": [
    "erre"
   ],
   "level": "A1",
   "expl": "Chữ r gọi là “erre”."
  }
 ],
 "es-pron-vocales": [
  {
   "kind": "choose",
   "q": "Tiếng Tây Ban Nha có bao nhiêu nguyên âm?",
   "right": "5",
   "wrong": [
    "4",
    "6",
    "7"
   ],
   "level": "A1",
   "expl": "Chỉ có a, e, i, o, u."
  },
  {
   "kind": "choose",
   "q": "Chữ e trong “mesa” đọc gần giống âm nào của tiếng Việt?",
   "right": "ê",
   "wrong": [
    "e (mở)",
    "ơ",
    "i"
   ],
   "level": "A1",
   "expl": "Nguyên âm e luôn đọc như “ê”."
  },
  {
   "kind": "choose",
   "q": "Chữ u trong “queso” có được đọc không?",
   "right": "Không, u câm",
   "wrong": [
    "Có, đọc “u”",
    "Có, đọc “ư”",
    "Đọc như “o”"
   ],
   "level": "A1",
   "expl": "Trong que/qui, chữ u câm."
  },
  {
   "kind": "choose",
   "q": "“bueno” có bao nhiêu âm tiết?",
   "right": "2 (bue-no)",
   "wrong": [
    "3",
    "1",
    "4"
   ],
   "level": "A1",
   "expl": "“ue” là nguyên âm đôi, đọc trong một âm tiết."
  },
  {
   "kind": "choose",
   "q": "Chữ u trong “guitarra” đọc thế nào?",
   "right": "Câm (gui đọc là “ghi”)",
   "wrong": [
    "Đọc “u”",
    "Đọc “ô”",
    "Đọc “v”"
   ],
   "level": "A1",
   "expl": "Trong gue/gui, chữ u câm để giữ âm g cứng."
  },
  {
   "kind": "choose",
   "q": "Từ nào có nguyên âm đôi?",
   "right": "tiene",
   "wrong": [
    "casa",
    "mano",
    "todo"
   ],
   "level": "A1",
   "expl": "Tiene có “ie” đọc liền trong một âm tiết."
  },
  {
   "kind": "choose",
   "q": "“gracias” có mấy âm tiết?",
   "right": "2 (gra-cias)",
   "wrong": [
    "1",
    "3",
    "4"
   ],
   "level": "A1",
   "expl": "“ia” là nguyên âm đôi nên cả “cias” là một âm tiết."
  },
  {
   "kind": "choose",
   "q": "Chữ o trong “loco” đọc giống âm nào?",
   "right": "ô",
   "wrong": [
    "ơ",
    "o (mở)",
    "u"
   ],
   "level": "A1",
   "expl": "Nguyên âm o luôn tròn môi như “ô”."
  },
  {
   "kind": "fill",
   "q": "Trong “ciudad”, cặp nguyên âm đôi là “___”.",
   "hint": "hai nguyên âm đứng cạnh nhau",
   "accept": [
    "iu"
   ],
   "level": "A1",
   "expl": "“iu” là nguyên âm đôi: ciu-dad."
  },
  {
   "kind": "choose",
   "q": "Khi chữ a không có trọng âm, nó đọc thế nào?",
   "right": "Vẫn là “a” rõ ràng",
   "wrong": [
    "Thành âm lửng “ơ”",
    "Bị lược bỏ",
    "Thành “e”"
   ],
   "level": "A1",
   "expl": "Tiếng Tây Ban Nha không rút gọn nguyên âm không nhấn."
  }
 ],
 "es-pron-consonantes": [
  {
   "kind": "choose",
   "q": "Chữ j trong “jamón” đọc giống âm nào?",
   "right": "Âm họng nhẹ (gần “kh/h”)",
   "wrong": [
    "g cứng",
    "d",
    "x như “xe”"
   ],
   "level": "A1",
   "expl": "J luôn là âm họng /x/."
  },
  {
   "kind": "choose",
   "q": "Chữ g trong “gente” đọc thế nào?",
   "right": "Âm họng như “khen-te”",
   "wrong": [
    "g cứng như “gen-te”",
    "đen-te",
    "chen-te"
   ],
   "level": "A1",
   "expl": "G trước e/i đọc như j."
  },
  {
   "kind": "choose",
   "q": "Chữ g trong “gato” đọc thế nào?",
   "right": "g cứng như “gà”",
   "wrong": [
    "Âm họng",
    "Như “kh”",
    "Như “d”"
   ],
   "level": "A1",
   "expl": "G trước a/o/u là âm g cứng."
  },
  {
   "kind": "choose",
   "q": "Chữ c trong “cine” đọc thế nào?",
   "right": "“th” (Tây Ban Nha) hoặc “s” (Mỹ Latinh)",
   "wrong": [
    "k",
    "ch",
    "x"
   ],
   "level": "A1",
   "expl": "C trước e/i không đọc là “k”."
  },
  {
   "kind": "choose",
   "q": "Chữ c trong “casa” đọc thế nào?",
   "right": "k",
   "wrong": [
    "th",
    "s",
    "ch"
   ],
   "level": "A1",
   "expl": "C trước a/o/u đọc là “k”."
  },
  {
   "kind": "fill",
   "q": "Muốn đọc g cứng trước e, ta viết g + ___ + e, như trong “guerra”.",
   "hint": "một chữ cái câm",
   "accept": [
    "u"
   ],
   "level": "A1",
   "expl": "Chữ u câm giữ cho g đọc cứng: gue, gui."
  },
  {
   "kind": "choose",
   "q": "Chữ h trong “hotel” đọc thế nào?",
   "right": "Câm",
   "wrong": [
    "h nhẹ",
    "kh",
    "g"
   ],
   "level": "A1",
   "expl": "H luôn câm trong tiếng Tây Ban Nha."
  },
  {
   "kind": "choose",
   "q": "“qu” trong “queso” đọc thế nào?",
   "right": "k (u câm)",
   "wrong": [
    "kw",
    "ku",
    "như tiếng Anh “qu”"
   ],
   "level": "A1",
   "expl": "Que/qui đọc là “kê/ki”."
  },
  {
   "kind": "fill",
   "q": "Chữ z đọc giống chữ ___ khi chữ này đứng trước e hoặc i.",
   "hint": "một chữ cái",
   "accept": [
    "c"
   ],
   "level": "A1",
   "expl": "Chữ z và c (trước e/i) đọc cùng âm."
  },
  {
   "kind": "choose",
   "q": "Từ nào có chữ c đọc là /k/?",
   "right": "cuatro",
   "wrong": [
    "cena",
    "cine",
    "cielo"
   ],
   "level": "A1",
   "expl": "C đọc /k/ trước a, o, u."
  }
 ],
 "es-pron-especiales": [
  {
   "kind": "choose",
   "q": "Chữ ñ đọc giống âm nào tiếng Việt?",
   "right": "nh",
   "wrong": [
    "n",
    "ng",
    "ni"
   ],
   "level": "A1",
   "expl": "Ñ đọc như “nh” trong “nhà”."
  },
  {
   "kind": "choose",
   "q": "Chữ ll trong “llamar” đọc giống âm nào?",
   "right": "y / gi",
   "wrong": [
    "l",
    "ll như tiếng Anh",
    "nh"
   ],
   "level": "A1",
   "expl": "Ll đọc gần như y."
  },
  {
   "kind": "choose",
   "q": "“perro” khác “pero” ở điểm nào?",
   "right": "rr rung lưỡi nhiều lần",
   "wrong": [
    "rr đọc như r đơn",
    "rr đọc như l",
    "rr đọc như g"
   ],
   "level": "A1",
   "expl": "R đơn búng một lần, rr rung nhiều lần."
  },
  {
   "kind": "choose",
   "q": "“pero” nghĩa là gì?",
   "right": "nhưng",
   "wrong": [
    "con chó",
    "và",
    "nếu"
   ],
   "level": "A1",
   "expl": "Pero là liên từ “nhưng”."
  },
  {
   "kind": "choose",
   "q": "“perro” nghĩa là gì?",
   "right": "con chó",
   "wrong": [
    "nhưng",
    "con mèo",
    "xe"
   ],
   "level": "A1",
   "expl": "Perro (rr) là con chó."
  },
  {
   "kind": "choose",
   "q": "Chữ nào điền vào “ma_ana” (ngày mai)?",
   "right": "ñ",
   "wrong": [
    "n",
    "nn",
    "ni"
   ],
   "level": "A1",
   "expl": "Mañana viết với ñ."
  },
  {
   "kind": "choose",
   "q": "Chữ r đầu từ “rojo” đọc thế nào?",
   "right": "Rung mạnh như rr",
   "wrong": [
    "Búng nhẹ một lần",
    "Như l",
    "Câm"
   ],
   "level": "A1",
   "expl": "R đầu từ luôn rung mạnh."
  },
  {
   "kind": "choose",
   "q": "“ch” trong “noche” đọc thế nào?",
   "right": "ch như tiếng Việt “ch”",
   "wrong": [
    "k",
    "sh",
    "x"
   ],
   "level": "A1",
   "expl": "Ch đọc như “ch” trong “cha”."
  },
  {
   "kind": "choose",
   "q": "Chữ y trong “yo” đọc giống âm nào?",
   "right": "y / gi, giống ll",
   "wrong": [
    "i",
    "kh",
    "ng"
   ],
   "level": "A1",
   "expl": "Y đầu từ đọc như ll."
  },
  {
   "kind": "choose",
   "q": "Từ nào có ll đọc giống y?",
   "right": "calle",
   "wrong": [
    "cola",
    "sala",
    "bala"
   ],
   "level": "A1",
   "expl": "Calle có ll; các từ còn lại chỉ có l đơn."
  }
 ],
 "es-pron-silabas": [
  {
   "kind": "fill",
   "q": "“mesa” có ___ âm tiết.",
   "hint": "số",
   "accept": [
    "2",
    "dos",
    "hai"
   ],
   "level": "A1",
   "expl": "me-sa: 2 âm tiết."
  },
  {
   "kind": "fill",
   "q": "“amigo” có ___ âm tiết.",
   "hint": "số",
   "accept": [
    "3",
    "tres",
    "ba"
   ],
   "level": "A1",
   "expl": "a-mi-go: 3 âm tiết."
  },
  {
   "kind": "fill",
   "q": "“escuela” có ___ âm tiết.",
   "hint": "số",
   "accept": [
    "3",
    "tres",
    "ba"
   ],
   "level": "A1",
   "expl": "es-cue-la: 3 âm tiết (cue là nguyên âm đôi)."
  },
  {
   "kind": "choose",
   "q": "Chia âm tiết của “ventana”",
   "right": "ven-ta-na",
   "wrong": [
    "vent-a-na",
    "ve-nta-na",
    "ven-tan-a"
   ],
   "level": "A1",
   "expl": "Một phụ âm giữa hai nguyên âm đi với nguyên âm sau."
  },
  {
   "kind": "choose",
   "q": "Chia âm tiết của “hablar”",
   "right": "ha-blar",
   "wrong": [
    "hab-lar",
    "h-a-blar",
    "hab-la-r"
   ],
   "level": "A1",
   "expl": "Nhóm bl không tách."
  },
  {
   "kind": "choose",
   "q": "Chia âm tiết của “leo”",
   "right": "le-o",
   "wrong": [
    "leo (1 âm tiết)",
    "l-e-o",
    "le-o-"
   ],
   "level": "A1",
   "expl": "Hai nguyên âm mạnh e-o tách thành hai âm tiết."
  },
  {
   "kind": "choose",
   "q": "Chia âm tiết của “bueno”",
   "right": "bue-no",
   "wrong": [
    "bu-e-no",
    "bu-eno",
    "bue-n-o"
   ],
   "level": "A1",
   "expl": "“ue” là nguyên âm đôi."
  },
  {
   "kind": "fill",
   "q": "“universidad” có ___ âm tiết.",
   "hint": "số",
   "accept": [
    "5",
    "cinco",
    "năm"
   ],
   "level": "A1",
   "expl": "u-ni-ver-si-dad: 5 âm tiết."
  },
  {
   "kind": "choose",
   "q": "Chia âm tiết của “campo”",
   "right": "cam-po",
   "wrong": [
    "ca-mpo",
    "camp-o",
    "c-am-po"
   ],
   "level": "A1",
   "expl": "Hai phụ âm liền nhau (mp) tách đôi."
  },
  {
   "kind": "choose",
   "q": "Chia âm tiết của “país”",
   "right": "pa-ís",
   "wrong": [
    "pais",
    "pa-i-s",
    "p-aís"
   ],
   "level": "A1",
   "expl": "Chữ í có dấu nên tách khỏi a: pa-ís."
  }
 ],
 "es-pron-acento": [
  {
   "kind": "choose",
   "q": "“hablar” nhấn âm tiết nào?",
   "right": "Cuối (ha-BLAR)",
   "wrong": [
    "Đầu",
    "Giữa",
    "Không nhấn"
   ],
   "level": "A1",
   "expl": "Tận cùng phụ âm khác n/s thì nhấn âm cuối."
  },
  {
   "kind": "choose",
   "q": "“mesa” nhấn âm tiết nào?",
   "right": "Áp chót (ME-sa)",
   "wrong": [
    "Cuối",
    "Cả hai âm",
    "Không nhấn"
   ],
   "level": "A1",
   "expl": "Tận cùng nguyên âm thì nhấn âm áp chót."
  },
  {
   "kind": "fill",
   "q": "Để nhấn âm cuối, “cafe” phải viết là caf___.",
   "hint": "nguyên âm có dấu",
   "accept": [
    "é"
   ],
   "level": "A1",
   "expl": "Muốn nhấn cuối khi tận cùng nguyên âm, phải có dấu: café."
  },
  {
   "kind": "choose",
   "q": "“ciudad” có cần dấu không?",
   "right": "Không, tận cùng d nên nhấn âm cuối",
   "wrong": [
    "Có, ciúdad",
    "Có, ciudád",
    "Có, cíudad"
   ],
   "level": "A1",
   "expl": "Từ tận cùng d nhấn âm cuối theo quy tắc."
  },
  {
   "kind": "choose",
   "q": "Vì sao “lápiz” có dấu?",
   "right": "Tận cùng z nhưng nhấn áp chót",
   "wrong": [
    "Tận cùng nguyên âm",
    "Nhấn âm cuối",
    "Là từ hỏi"
   ],
   "level": "A1",
   "expl": "Trái quy tắc thì phải có dấu."
  },
  {
   "kind": "choose",
   "q": "Dấu ¿ đặt ở đâu?",
   "right": "Đầu câu hỏi (cùng dấu ? ở cuối)",
   "wrong": [
    "Chỉ ở cuối",
    "Chỉ ở đầu, không có ? cuối",
    "Không dùng"
   ],
   "level": "A1",
   "expl": "Tiếng Tây Ban Nha dùng cặp ¿ … ?."
  },
  {
   "kind": "choose",
   "q": "“él” (anh ấy) khác “el” (mạo từ) nhờ gì?",
   "right": "Dấu sắc",
   "wrong": [
    "Dấu hỏi",
    "Viết hoa",
    "Chữ cái"
   ],
   "level": "A1",
   "expl": "Dấu phân biệt hai từ cùng chữ."
  },
  {
   "kind": "choose",
   "q": "“canción” nhấn âm tiết nào?",
   "right": "Cuối (can-CIÓN)",
   "wrong": [
    "Đầu",
    "Giữa",
    "Không nhấn"
   ],
   "level": "A1",
   "expl": "Tận cùng n lẽ ra nhấn áp chót, nên dấu ó chỉ ra ngoại lệ."
  },
  {
   "kind": "choose",
   "q": "“papá” và “papa” khác nhau thế nào?",
   "right": "papá = bố, papa = khoai tây",
   "wrong": [
    "Cùng là bố",
    "papá = khoai tây",
    "Cùng là khoai tây"
   ],
   "level": "A1",
   "expl": "Dấu sắc đổi nghĩa."
  },
  {
   "kind": "fill",
   "q": "“música”: âm tiết thứ ___ (số) bị nhấn.",
   "hint": "số thứ tự",
   "accept": [
    "1",
    "uno",
    "một",
    "primera"
   ],
   "level": "A1",
   "expl": "MÚ-si-ca: nhấn âm đầu."
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

const RUSH=[["deletrear · ¿Cómo se escribe?", ["es-pron-alfabeto"]], ["a e i o u", ["es-pron-vocales"]], ["ue · ie · ai", ["es-pron-vocales"]], ["ce · ci · ge · gi", ["es-pron-consonantes"]], ["j · qu · h câm", ["es-pron-consonantes"]], ["ñ · ll · rr", ["es-pron-especiales"]], ["perro / pero", ["es-pron-especiales"]], ["a-mi-go · es-cue-la", ["es-pron-silabas"]], ["café · lápiz", ["es-pron-acento"]], ["¿Qué? ¿Cómo?", ["es-pron-acento"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["pronunciacion"] = { pool: POOL, types: TYPES, game: {title:"¿Qué sonido?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng bài phát âm",prompt:"Dấu hiệu này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"pronRushBest"} };
})();
