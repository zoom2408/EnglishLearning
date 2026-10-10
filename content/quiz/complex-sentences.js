/* content/quiz/complex.js: practice questions and game for this module.
   mcQ(type, prompt, hint, right, [wrong…], lessonId, explanation)
   inQ(type, prompt, hint, [accepted answers], lessonId, explanation) */
(() => {
// ---- Complex practice (60) ----
// BANK keyed by question-type then lesson ref; each sub-object is
// flattened back into the [s/a, r, w, ref, ex] tuples that the shared
// mcs/mcr helpers (core/practice.js) already expect — no helper changes.
const BANK = {
 link: {
  "cx-contrast": [
   {s:"___ the heavy rain, the match continued.",r:"Despite",w:["Although","Because","However"],expl:"Theo sau là danh từ (the heavy rain): Despite."},
   {s:"___ it was expensive, she bought it.",r:"Although",w:["Despite","In spite of","Because of"],expl:"Theo sau là mệnh đề: Although."},
   {s:"Cities are crowded, ___ villages are quiet.",r:"whereas",w:["despite","because","so that"],expl:"So sánh hai vế trái ngược: whereas."},
   {s:"___ the bad weather, they went hiking.",r:"Despite",w:["Although","Because","However"],expl:"Theo sau là danh từ: Despite."},
   {s:"He passed the exam ___ he hadn't studied much.",r:"although",w:["despite","because","so that"],expl:"Theo sau là mệnh đề: although."},
  ],
  "cx-reason": [
   {s:"The flight was cancelled ___ the storm.",r:"because of",w:["because","although","so that"],expl:"Theo sau là danh từ: because of."},
   {s:"It was ___ a long journey that we slept all day.",r:"such",w:["so","too","very"],expl:"such + a + adj + N."},
   {s:"The test was ___ difficult that nobody passed.",r:"so",w:["such","too","enough"],expl:"so + adj + that."},
   {s:"She left the company ___ a better offer elsewhere.",r:"because of",w:["because","so that","despite"],expl:"Theo sau là danh từ: because of."},
   {s:"It was ___ cold that the lake froze.",r:"so",w:["such","too","enough"],expl:"so + adj + that."},
  ],
  "cx-purpose": [
   {s:"I left early ___ I could catch the bus.",r:"so that",w:["in order to","because of","despite"],expl:"Có S + could: so that."},
   {s:"She studies hard ___ get a scholarship.",r:"in order to",w:["so that","because","although"],expl:"Theo sau là động từ nguyên mẫu: in order to."},
   {s:"He whispered ___ not wake the baby.",r:"so as to",w:["so that","because","in order"],expl:"so as to + V (nguyên mẫu) diễn tả mục đích."},
   {s:"I wrote everything down ___ I wouldn't forget.",r:"so that",w:["in order to","because of","despite"],expl:"Khác chủ ngữ/có could,would: so that + S + V."},
  ],
  "cx-time": [
   {s:"I'll call you as soon as I ___ home.",r:"get",w:["will get","got","am getting"],expl:"Mệnh đề thời gian nói tương lai dùng hiện tại đơn."},
   {s:"I'll text you ___ I arrive.",r:"as soon as",w:["until","by the time","so that"],expl:"Mệnh đề thời gian, hiện tại đơn cho ý tương lai."},
   {s:"___ we arrived, the film had already started.",r:"By the time",w:["As soon as","Until","While"],expl:"by the time + mệnh đề quá khứ đơn, mệnh đề chính dùng quá khứ hoàn thành."},
  ],
  "cx-linkers": [
   {s:"The plan is cheap. ___, it will take a long time.",r:"However",w:["Moreover","Therefore","For instance"],expl:"Ý trái ngược: However."},
   {s:"The hotel was cheap. ___, the service was excellent.",r:"Moreover",w:["However","Therefore","For instance"],expl:"Bổ sung thông tin cùng chiều: Moreover."},
   {s:"Sales dropped sharply. ___, the company cut jobs.",r:"Therefore",w:["However","Moreover","For instance"],expl:"Kết quả: Therefore."},
   {s:"Many fruits, ___ mangoes and bananas, grow well here.",r:"such as",w:["for instance","however","moreover"],expl:"Liệt kê ví dụ ngay trong câu: such as."},
   {s:"The company grew fast; ___, profits remained low.",r:"however",w:["therefore","moreover","for example"],expl:"Trái ngược trong cùng câu, dùng dấu chấm phẩy + however,."},
  ],
 },
 noun: {
  "cx-noun": [
   {s:"I don't know where ___.",r:"he lives",w:["does he live","he does live","lives he"],expl:"Mệnh đề danh từ giữ trật tự S + V."},
   {s:"___ I need is a long holiday.",r:"What",w:["That","Which","It"],expl:"What + S + V làm chủ ngữ."},
   {s:"___ prices are rising worries many families.",r:"The fact that",w:["What","The fact what","That fact"],expl:"The fact that + mệnh đề."},
   {s:"Can you tell me what time ___?",r:"the shop opens",w:["does the shop open","opens the shop","the shop does opens"],expl:"Câu hỏi gián tiếp: S + V."},
   {s:"I'm not sure ___ she will come.",r:"whether",w:["what","that","which"],expl:"Không chắc có hay không: whether / if."},
   {s:"It is clear ___ education is important.",r:"that",w:["what","which","whether"],expl:"It is + adj + that."},
   {s:"___ he said surprised everyone.",r:"What",w:["That","Which","It"],expl:"Điều anh ấy nói: What."},
   {s:"I wonder why ___ so late.",r:"she is",w:["is she","she does be","does she"],expl:"Mệnh đề danh từ không đảo ngữ."},
   {s:"Nobody knows ___ the money went.",r:"where",w:["what","that","whether"],expl:"Nơi chốn: where."},
   {s:"The problem is ___ we don't have enough time.",r:"that",w:["what","which","whether"],expl:"Bổ ngữ: that + mệnh đề."},
  ],
 },
 part: {
  "cx-participle": [
   {a:"After she had finished the report, she went home.",r:"Having finished the report, she went home.",w:["Finished the report, she went home.","Having finish the report, she went home.","Finishing the report, she had gone home."],expl:"Việc xảy ra trước: Having + V3."},
   {a:"While I was walking home, I met an old friend.",r:"Walking home, I met an old friend.",w:["Walked home, I met an old friend.","Walking home, an old friend met me by chance.","Having walk home, I met an old friend."],expl:"Cùng lúc, chủ động: V-ing; chủ ngữ vế chính phải là I."},
   {a:"The bridge was built in 1990, and it is still strong.",r:"Built in 1990, the bridge is still strong.",w:["Building in 1990, the bridge is still strong.","Having built in 1990, the bridge is still strong.","Built in 1990, it is still a strong bridge was."],expl:"Bị động: V3."},
   {a:"Because he felt tired, he went to bed early.",r:"Feeling tired, he went to bed early.",w:["Felt tired, he went to bed early.","Tired feeling, he went to bed early.","Having feel tired, he went to bed early."],expl:"Nguyên nhân, chủ động: V-ing."},
   {a:"When he was asked about the plan, he refused to comment.",r:"When asked about the plan, he refused to comment.",w:["When asking about the plan, he refused to comment.","When being ask about the plan, he refused to comment.","Asked when about the plan, he refused to comment."],expl:"Bị động sau when: When + V3."},
   {a:"Because they were faced with high costs, many families moved.",r:"Faced with high costs, many families moved.",w:["Facing with high costs, many families moved.","Having faced by high costs, many families moved.","Faced high costs, many families moved."],expl:"Bị động: Faced with."},
   {a:"Since I had lost my keys, I waited outside.",r:"Having lost my keys, I waited outside.",w:["Lost my keys, I waited outside.","Having losing my keys, I waited outside.","Losing my keys, I had waited outside."],expl:"Xảy ra trước: Having + V3."},
   {a:"The students who were invited to the event arrived early.",r:"The students invited to the event arrived early.",w:["The students inviting to the event arrived early.","The students were invited to the event arrived early.","The students having invite to the event arrived early."],expl:"Bị động: V3."},
  ],
  "cx-time": [
   {a:"After I read the book, I watched the film.",r:"After reading the book, I watched the film.",w:["After read the book, I watched the film.","After to read the book, I watched the film.","After readed the book, I watched the film."],expl:"after + V-ing."},
   {a:"Before you leave, turn off the lights.",r:"Before leaving, turn off the lights.",w:["Before leave, turn off the lights.","Before left, turn off the lights.","Before to leave, turn off the lights."],expl:"before + V-ing."},
   {a:"After he finished his shift, he went straight home.",r:"After finishing his shift, he went straight home.",w:["After finish his shift, he went straight home.","After to finish his shift, he went straight home.","After finished his shift, he went straight home."],expl:"after + V-ing."},
  ],
 },
 rw: {
  "cx-contrast": [
   {a:"It rained. We went out.",r:"Although it rained, we went out.",w:["Although it rained, but we went out.","Despite it rained, we went out.","Because it rained, we went out."],expl:"Although + mệnh đề, không thêm but."},
   {a:"He was ill. He went to work.",r:"Despite being ill, he went to work.",w:["Despite he was ill, he went to work.","Although being ill, he went to work.","In spite of ill, he went to work."],expl:"Despite + V-ing."},
   {a:"She was exhausted. She kept working.",r:"Although she was exhausted, she kept working.",w:["Although she was exhausted, but she kept working.","Despite she was exhausted, she kept working.","Because she was exhausted, she kept working."],expl:"Although + mệnh đề, không thêm but."},
  ],
  "cx-reason": [
   {a:"The coffee was very hot. I couldn't drink it.",r:"The coffee was so hot that I couldn't drink it.",w:["The coffee was such hot that I couldn't drink it.","The coffee was too hot that I couldn't drink it.","The coffee was so hot so I couldn't drink it."],expl:"so + adj + that."},
   {a:"It was a very good film. I watched it twice.",r:"It was such a good film that I watched it twice.",w:["It was so a good film that I watched it twice.","It was such good film that I watched it twice.","It was a such good film that I watched it twice."],expl:"such + a + adj + N + that."},
   {a:"The traffic was heavy. We were late.",r:"We were late because of the heavy traffic.",w:["We were late because the heavy traffic.","We were late although the heavy traffic.","We were late because of the traffic was heavy."],expl:"because of + danh từ."},
   {a:"The music was very loud. We couldn't hear each other.",r:"The music was so loud that we couldn't hear each other.",w:["The music was such loud that we couldn't hear each other.","The music was too loud that we couldn't hear each other.","The music was so loud so we couldn't hear each other."],expl:"so + adj + that."},
  ],
  "cx-purpose": [
   {a:"I saved money. I wanted to buy a laptop.",r:"I saved money in order to buy a laptop.",w:["I saved money in order to buying a laptop.","I saved money so that buy a laptop.","I saved money for buy a laptop."],expl:"in order to + V."},
   {a:"Speak slowly. Then everyone can understand.",r:"Speak slowly so that everyone can understand.",w:["Speak slowly in order to everyone can understand.","Speak slowly so as everyone understand.","Speak slowly so that everyone understanding."],expl:"Khác chủ ngữ: so that + S + can."},
   {a:"I took notes. I wanted to remember the lecture.",r:"I took notes in order to remember the lecture.",w:["I took notes in order to remembering the lecture.","I took notes so that remember the lecture.","I took notes for remember the lecture."],expl:"in order to + V."},
   {a:"She whispered. She didn't want to wake anyone.",r:"She whispered so as not to wake anyone.",w:["She whispered so as to not wake anyone.","She whispered in order not wake anyone.","She whispered so that not wake anyone."],expl:"so as not to + V: mục đích phủ định."},
  ],
  "cx-linkers": [
   {a:"Prices rose. Sales fell.",r:"Prices rose. As a result, sales fell.",w:["Prices rose, as a result sales fell.","Prices rose. However, sales fell.","Prices rose. As a result sales, fell."],expl:"Kết quả: As a result, + câu mới."},
   {a:"It rained all day. We still enjoyed the trip.",r:"It rained all day. Nevertheless, we still enjoyed the trip.",w:["It rained all day, nevertheless we still enjoyed the trip.","It rained all day. As a result, we still enjoyed the trip.","It rained all day nevertheless we still enjoyed the trip."],expl:"Ý trái ngược: Nevertheless, + câu mới."},
   {a:"The plan saved money. For example, it cut travel costs.",r:"The plan saved money. For instance, it cut travel costs.",w:["The plan saved money, for instance it cut travel costs.","The plan saved money. As a result, it cut travel costs.","The plan saved money for instance it cut travel costs."],expl:"Đưa ra ví dụ cụ thể: For instance, + câu mới."},
  ],
  "cx-time": [
   {a:"I'll finish this. Then I'll call you.",r:"I'll call you when I finish this.",w:["I'll call you when I will finish this.","I'll call you when I finished this.","I call you when I will finish this."],expl:"Mệnh đề thời gian không dùng will."},
   {a:"Wait here. Then I'll come back.",r:"Wait here until I come back.",w:["Wait here until I will come back.","Wait here until I came back.","Wait here by the time I come back."],expl:"until + mệnh đề thời gian, không dùng will."},
  ],
  "cx-noun": [
   {a:"He lives somewhere. I don't know.",r:"I don't know where he lives.",w:["I don't know where does he live.","I don't know where he does live.","I don't know he lives where."],expl:"Mệnh đề danh từ: S + V."},
  ],
 },
};

const CXPOOL=[];
const linkList = Object.entries(BANK.link).flatMap(([ref,items]) => items.map(it => [it.s,it.r,it.w,ref,it.expl]));
mcs(CXPOOL,"link","Chọn từ nối đúng.",linkList);
const nounList = Object.entries(BANK.noun).flatMap(([ref,items]) => items.map(it => [it.s,it.r,it.w,ref,it.expl]));
mcs(CXPOOL,"noun","Chọn mệnh đề danh từ đúng.",nounList);
const partList = Object.entries(BANK.part).flatMap(([ref,items]) => items.map(it => [it.a,it.r,it.w,ref,it.expl]));
mcr(CXPOOL,"part","Chọn câu rút gọn đúng.","Rút gọn mệnh đề trạng ngữ",partList);
const rwList = Object.entries(BANK.rw).flatMap(([ref,items]) => items.map(it => [it.a,it.r,it.w,ref,it.expl]));
mcr(CXPOOL,"rw","Chọn câu nối đúng.","Nối thành một câu",rwList);

const CXTYPES={link:{name:"Chọn từ nối",desc:"although, despite, because of, so that, such … that"},noun:{name:"Mệnh đề danh từ",desc:"What, that, whether, câu hỏi gián tiếp"},part:{name:"Rút gọn mệnh đề",desc:"V-ing, Having V3, V3"},rw:{name:"Nối hai câu",desc:"Viết lại thành câu phức đúng"}};
const CXF=["tương phản","nguyên nhân","kết quả","mục đích","thời gian","bổ sung","ví dụ"];
const CXRUSH=[["although",["tương phản"]],["despite",["tương phản"]],["in spite of",["tương phản"]],["whereas",["tương phản"]],["However,",["tương phản"]],["Nevertheless,",["tương phản"]],["because",["nguyên nhân"]],["since (= because)",["nguyên nhân"]],["due to",["nguyên nhân"]],["owing to",["nguyên nhân"]],["because of",["nguyên nhân"]],["Therefore,",["kết quả"]],["As a result,",["kết quả"]],["Consequently,",["kết quả"]],["so … that",["kết quả"]],["in order to",["mục đích"]],["so that",["mục đích"]],["so as to",["mục đích"]],["as soon as",["thời gian"]],["by the time",["thời gian"]],["until",["thời gian"]],["while (= trong khi đang)",["thời gian"]],["Moreover,",["bổ sung"]],["Furthermore,",["bổ sung"]],["In addition,",["bổ sung"]],["For instance,",["ví dụ"]],["such as",["ví dụ"]],["For example,",["ví dụ"]]];

GRAMMAR.quiz["complex"] = { pool: CXPOOL, types: CXTYPES, game: {title:"Từ nối nhanh",desc:"60 giây. Thấy từ nối, chọn đúng chức năng của nó",prompt:"Từ nối này dùng để làm gì?",items:CXRUSH,all:CXF,label:c=>`<span class="tl-vi">${c}</span>`,name:c=>c,bestKey:"cxrushBest"} };
})();
