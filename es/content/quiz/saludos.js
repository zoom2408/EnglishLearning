/* es/content/quiz/saludos.js: chào hỏi, giới thiệu, số đếm, ngày tháng giờ.
   Mixed exercise types: type the answer (fill, retry allowed) or pick one
   (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "es-sal-saludos": [
  {
   "kind": "fill",
   "q": "Lúc 9 giờ sáng bạn chào: Buenos ___.",
   "hint": "một từ, số nhiều",
   "accept": [
    "días"
   ],
   "level": "A1",
   "expl": "Buenos días dùng buổi sáng."
  },
  {
   "kind": "fill",
   "q": "Lúc 4 giờ chiều bạn chào: Buenas ___.",
   "hint": "một từ",
   "accept": [
    "tardes"
   ],
   "level": "A1",
   "expl": "Buenas tardes dùng buổi chiều."
  },
  {
   "kind": "fill",
   "q": "Lúc 10 giờ tối bạn chào: Buenas ___.",
   "hint": "một từ",
   "accept": [
    "noches"
   ],
   "level": "A1",
   "expl": "Buenas noches dùng buổi tối và trước khi ngủ."
  },
  {
   "kind": "choose",
   "q": "Cách nói “hẹn gặp lại ngày mai”",
   "right": "Hasta mañana",
   "wrong": [
    "Hasta luego",
    "Buenos días",
    "Mucho gusto"
   ],
   "level": "A1",
   "expl": "Mañana nghĩa là ngày mai."
  },
  {
   "kind": "choose",
   "q": "Cách nói “cảm ơn”",
   "right": "Gracias",
   "wrong": [
    "Perdón",
    "Por favor",
    "De nada"
   ],
   "level": "A1",
   "expl": "Gracias là cảm ơn."
  },
  {
   "kind": "choose",
   "q": "Người ta nói “Gracias”, bạn đáp",
   "right": "De nada",
   "wrong": [
    "Por favor",
    "Perdón",
    "Adiós"
   ],
   "level": "A1",
   "expl": "De nada nghĩa là không có gì."
  },
  {
   "kind": "fill",
   "q": "Hỏi bạn thân: ¿Cómo ___ tú?",
   "hint": "estar, ngôi tú",
   "accept": [
    "estás"
   ],
   "level": "A1",
   "expl": "Ngôi tú của estar là estás."
  },
  {
   "kind": "fill",
   "q": "Hỏi người lớn tuổi: ¿Cómo ___ usted?",
   "hint": "estar, ngôi usted",
   "accept": [
    "está"
   ],
   "level": "A1",
   "expl": "Usted đi với dạng ngôi thứ ba: está."
  },
  {
   "kind": "choose",
   "q": "Cách nói “xin lỗi” khi va vào ai",
   "right": "Perdón",
   "wrong": [
    "Gracias",
    "De nada",
    "Hola"
   ],
   "level": "A1",
   "expl": "Perdón dùng khi xin lỗi nhanh."
  },
  {
   "kind": "choose",
   "q": "Cách nói “làm ơn” khi nhờ ai",
   "right": "Por favor",
   "wrong": [
    "Perdón",
    "Gracias",
    "Adiós"
   ],
   "level": "A1",
   "expl": "Por favor là làm ơn."
  },
  {
   "kind": "choose",
   "q": "“Más o menos” nghĩa là gì?",
   "right": "Tạm được",
   "wrong": [
    "Rất tốt",
    "Rất tệ",
    "Cảm ơn"
   ],
   "level": "A1",
   "expl": "Dùng để trả lời “khỏe không?” khi không tốt lắm."
  },
  {
   "kind": "fill",
   "q": "Hỏi thân mật “Khỏe không?”: ¿Qué ___?",
   "hint": "một từ",
   "accept": [
    "tal"
   ],
   "level": "A1",
   "expl": "¿Qué tal? là câu chào hỏi thân mật."
  },
  {
   "kind": "choose",
   "q": "Cách chào trang trọng với bác sĩ",
   "right": "¿Cómo está usted?",
   "wrong": [
    "¿Cómo estás?",
    "¿Qué tal?",
    "¿Qué pasa?"
   ],
   "level": "A1",
   "expl": "Người lớn tuổi hoặc xã giao dùng usted."
  },
  {
   "kind": "choose",
   "q": "Câu nào sai ngữ pháp?",
   "right": "Buenas días",
   "wrong": [
    "Buenos días",
    "Buenas tardes",
    "Buenas noches"
   ],
   "level": "A1",
   "expl": "Día giống đực nên đi với buenos."
  },
  {
   "kind": "choose",
   "q": "“Hasta luego” nghĩa là gì?",
   "right": "Hẹn gặp lại",
   "wrong": [
    "Xin chào",
    "Cảm ơn",
    "Xin lỗi"
   ],
   "level": "A1",
   "expl": "Hasta luego là hẹn gặp lại."
  }
 ],
 "es-sal-presentarse": [
  {
   "kind": "fill",
   "q": "Me ___ Linh.",
   "hint": "llamarse, ngôi yo",
   "accept": [
    "llamo"
   ],
   "level": "A1",
   "expl": "Me llamo + tên."
  },
  {
   "kind": "fill",
   "q": "¿Cómo te ___?",
   "hint": "llamarse, ngôi tú",
   "accept": [
    "llamas"
   ],
   "level": "A1",
   "expl": "Ngôi tú: te llamas."
  },
  {
   "kind": "fill",
   "q": "___ de Vietnam.",
   "hint": "ser, ngôi yo",
   "accept": [
    "Soy"
   ],
   "level": "A1",
   "expl": "Soy de + nơi."
  },
  {
   "kind": "fill",
   "q": "¿De dónde ___?",
   "hint": "ser, ngôi tú",
   "accept": [
    "eres"
   ],
   "level": "A1",
   "expl": "Ngôi tú của ser là eres."
  },
  {
   "kind": "fill",
   "q": "Yo ___ veinte años.",
   "hint": "tener, ngôi yo",
   "accept": [
    "tengo"
   ],
   "level": "A1",
   "expl": "Tuổi dùng tener: tengo veinte años."
  },
  {
   "kind": "fill",
   "q": "¿Cuántos años ___?",
   "hint": "tener, ngôi tú",
   "accept": [
    "tienes"
   ],
   "level": "A1",
   "expl": "Ngôi tú của tener là tienes."
  },
  {
   "kind": "choose",
   "q": "Nam giới nói “rất vui được gặp bạn”",
   "right": "Encantado",
   "wrong": [
    "Encantada",
    "Encantados",
    "Encantadas"
   ],
   "level": "A1",
   "expl": "Nam: encantado."
  },
  {
   "kind": "choose",
   "q": "Nữ giới nói “rất vui được gặp bạn”",
   "right": "Encantada",
   "wrong": [
    "Encantado",
    "Encantados",
    "Encantadas"
   ],
   "level": "A1",
   "expl": "Nữ: encantada."
  },
  {
   "kind": "choose",
   "q": "Cách hỏi quê quán",
   "right": "¿De dónde eres?",
   "wrong": [
    "¿Cómo te llamas?",
    "¿Cuántos años tienes?",
    "¿Qué hora es?"
   ],
   "level": "A1",
   "expl": "De dónde = từ đâu."
  },
  {
   "kind": "choose",
   "q": "Người nói “Soy diseñadora” là",
   "right": "Nữ",
   "wrong": [
    "Nam",
    "Cả hai",
    "Không xác định"
   ],
   "level": "A1",
   "expl": "Đuôi -a chỉ nữ."
  },
  {
   "kind": "fill",
   "q": "Rất vui được gặp bạn: Mucho ___.",
   "hint": "một từ",
   "accept": [
    "gusto"
   ],
   "level": "A1",
   "expl": "Mucho gusto."
  },
  {
   "kind": "fill",
   "q": "Hablo español y ___ poco de inglés.",
   "hint": "mạo từ, nghĩa là “một”",
   "accept": [
    "un"
   ],
   "level": "A1",
   "expl": "Un poco de = một chút."
  },
  {
   "kind": "choose",
   "q": "Cách nói tuổi đúng",
   "right": "Tengo diez años",
   "wrong": [
    "Soy diez años",
    "Estoy diez años",
    "Hay diez años"
   ],
   "level": "A1",
   "expl": "Tuổi dùng tener."
  },
  {
   "kind": "choose",
   "q": "Quốc tịch của một phụ nữ Việt Nam",
   "right": "vietnamita",
   "wrong": [
    "vietnamito",
    "vietnamitas",
    "vietnamés"
   ],
   "level": "A1",
   "expl": "Vietnamita không đổi theo giới."
  },
  {
   "kind": "fill",
   "q": "Soy de España. Soy ___.",
   "hint": "quốc tịch, nam, tiếng Tây Ban Nha",
   "accept": [
    "español"
   ],
   "level": "A1",
   "expl": "Español là người Tây Ban Nha."
  }
 ],
 "es-sal-numeros": [
  {
   "kind": "fill",
   "q": "Số 3 là ___.",
   "hint": "viết bằng chữ",
   "accept": [
    "tres"
   ],
   "level": "A1",
   "expl": "3 = tres."
  },
  {
   "kind": "fill",
   "q": "Số 8 là ___.",
   "hint": "viết bằng chữ",
   "accept": [
    "ocho"
   ],
   "level": "A1",
   "expl": "8 = ocho."
  },
  {
   "kind": "fill",
   "q": "Số 12 là ___.",
   "hint": "viết bằng chữ",
   "accept": [
    "doce"
   ],
   "level": "A1",
   "expl": "12 = doce."
  },
  {
   "kind": "fill",
   "q": "Số 16 là ___.",
   "hint": "viết liền một từ",
   "accept": [
    "dieciséis"
   ],
   "level": "A1",
   "expl": "16 = dieciséis."
  },
  {
   "kind": "fill",
   "q": "Số 21 là ___.",
   "hint": "viết liền một từ",
   "accept": [
    "veintiuno",
    "veintiún"
   ],
   "level": "A1",
   "expl": "21 = veintiuno."
  },
  {
   "kind": "fill",
   "q": "Số 30 là ___.",
   "hint": "viết bằng chữ",
   "accept": [
    "treinta"
   ],
   "level": "A1",
   "expl": "30 = treinta."
  },
  {
   "kind": "fill",
   "q": "Số 45 là ___.",
   "hint": "ba từ",
   "accept": [
    "cuarenta y cinco"
   ],
   "level": "A1",
   "expl": "45 = cuarenta y cinco."
  },
  {
   "kind": "fill",
   "q": "Số 58 là ___.",
   "hint": "ba từ",
   "accept": [
    "cincuenta y ocho"
   ],
   "level": "A1",
   "expl": "58 = cincuenta y ocho."
  },
  {
   "kind": "fill",
   "q": "Số 100 là ___.",
   "hint": "một từ",
   "accept": [
    "cien"
   ],
   "level": "A1",
   "expl": "100 = cien."
  },
  {
   "kind": "fill",
   "q": "Số 79 là ___.",
   "hint": "ba từ",
   "accept": [
    "setenta y nueve"
   ],
   "level": "A1",
   "expl": "79 = setenta y nueve."
  },
  {
   "kind": "choose",
   "q": "“quince” là số mấy?",
   "right": "15",
   "wrong": [
    "5",
    "50",
    "14"
   ],
   "level": "A1",
   "expl": "Quince = 15."
  },
  {
   "kind": "choose",
   "q": "“sesenta” là số mấy?",
   "right": "60",
   "wrong": [
    "16",
    "6",
    "66"
   ],
   "level": "A1",
   "expl": "Sesenta = 60."
  },
  {
   "kind": "choose",
   "q": "Cách viết đúng của số 21",
   "right": "veintiuno",
   "wrong": [
    "veinte uno",
    "veinteuno",
    "veintiún uno"
   ],
   "level": "A1",
   "expl": "Từ 16 đến 29 viết liền."
  },
  {
   "kind": "choose",
   "q": "Từ 31 trở đi, giữa chục và đơn vị có từ gì?",
   "right": "y",
   "wrong": [
    "e",
    "con",
    "de"
   ],
   "level": "A1",
   "expl": "Treinta y uno."
  },
  {
   "kind": "fill",
   "q": "Tôi 16 tuổi: Tengo ___ años.",
   "hint": "viết bằng chữ",
   "accept": [
    "dieciséis"
   ],
   "level": "A1",
   "expl": "16 = dieciséis."
  }
 ],
 "es-sal-tiempo": [
  {
   "kind": "fill",
   "q": "Thứ Hai là ___.",
   "hint": "viết thường",
   "accept": [
    "lunes"
   ],
   "level": "A1",
   "expl": "Lunes = thứ Hai."
  },
  {
   "kind": "fill",
   "q": "Thứ Sáu là ___.",
   "hint": "viết thường",
   "accept": [
    "viernes"
   ],
   "level": "A1",
   "expl": "Viernes = thứ Sáu."
  },
  {
   "kind": "fill",
   "q": "Chủ nhật là ___.",
   "hint": "viết thường",
   "accept": [
    "domingo"
   ],
   "level": "A1",
   "expl": "Domingo = Chủ nhật."
  },
  {
   "kind": "fill",
   "q": "Tháng 1 là ___.",
   "hint": "viết thường",
   "accept": [
    "enero"
   ],
   "level": "A1",
   "expl": "Enero = tháng 1."
  },
  {
   "kind": "fill",
   "q": "Tháng 12 là ___.",
   "hint": "viết thường",
   "accept": [
    "diciembre"
   ],
   "level": "A1",
   "expl": "Diciembre = tháng 12."
  },
  {
   "kind": "fill",
   "q": "1:00 giờ: ___ la una.",
   "hint": "es hay son",
   "accept": [
    "Es"
   ],
   "level": "A1",
   "expl": "Chỉ 1 giờ dùng es."
  },
  {
   "kind": "fill",
   "q": "5:00 giờ: ___ las cinco.",
   "hint": "es hay son",
   "accept": [
    "Son"
   ],
   "level": "A1",
   "expl": "Từ 2 giờ trở lên dùng son las."
  },
  {
   "kind": "fill",
   "q": "2:30: Son las dos y ___.",
   "hint": "một từ, nghĩa là “rưỡi”",
   "accept": [
    "media"
   ],
   "level": "A1",
   "expl": "Y media = rưỡi."
  },
  {
   "kind": "fill",
   "q": "3:15: Son las tres y ___.",
   "hint": "một từ, nghĩa là “một phần tư”",
   "accept": [
    "cuarto"
   ],
   "level": "A1",
   "expl": "Y cuarto = 15 phút."
  },
  {
   "kind": "fill",
   "q": "4:50: Son las cinco ___ diez.",
   "hint": "một từ, nghĩa là “kém”",
   "accept": [
    "menos"
   ],
   "level": "A1",
   "expl": "Menos = kém."
  },
  {
   "kind": "choose",
   "q": "Tên ngày và tháng trong tiếng Tây Ban Nha",
   "right": "Không viết hoa",
   "wrong": [
    "Luôn viết hoa",
    "Chỉ viết hoa thứ Hai",
    "Viết hoa chữ cuối"
   ],
   "level": "A1",
   "expl": "Ngày và tháng viết thường."
  },
  {
   "kind": "choose",
   "q": "Cách nói ngày 14 tháng 7",
   "right": "el 14 de julio",
   "wrong": [
    "14 julio",
    "el julio 14",
    "a 14 de julio"
   ],
   "level": "A1",
   "expl": "el + số + de + tháng."
  },
  {
   "kind": "choose",
   "q": "Cách hỏi giờ",
   "right": "¿Qué hora es?",
   "wrong": [
    "¿Cuánto es?",
    "¿Cómo es?",
    "¿Cuándo es?"
   ],
   "level": "A1",
   "expl": "Qué hora es = mấy giờ."
  },
  {
   "kind": "choose",
   "q": "“Son las ocho y media” là mấy giờ?",
   "right": "8:30",
   "wrong": [
    "8:15",
    "7:30",
    "8:45"
   ],
   "level": "A1",
   "expl": "Y media = rưỡi."
  },
  {
   "kind": "choose",
   "q": "“Son las nueve menos cuarto” là mấy giờ?",
   "right": "8:45",
   "wrong": [
    "9:15",
    "9:45",
    "8:15"
   ],
   "level": "A1",
   "expl": "Menos cuarto = kém 15."
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

const RUSH=[["Buenos días · Buenas tardes", ["es-sal-saludos"]], ["Gracias · De nada · Perdón", ["es-sal-saludos"]], ["Me llamo…", ["es-sal-presentarse"]], ["Soy de…", ["es-sal-presentarse"]], ["Tengo … años", ["es-sal-presentarse"]], ["treinta y uno", ["es-sal-numeros"]], ["veintiuno · dieciséis", ["es-sal-numeros"]], ["¿Qué hora es?", ["es-sal-tiempo"]], ["lunes · enero", ["es-sal-tiempo"]], ["Son las tres y media", ["es-sal-tiempo"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["saludos"] = { pool: POOL, types: TYPES, game: {title:"¿Qué toca?",desc:"60 giây. Thấy mẫu câu này, chọn đúng bài",prompt:"Mẫu câu này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"salRushBest"} };
})();
