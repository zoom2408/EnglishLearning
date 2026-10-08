/* content/quiz/complex.js: practice questions and game for this module.
   mcQ(type, prompt, hint, right, [wrong…], lessonId, explanation)
   inQ(type, prompt, hint, [accepted answers], lessonId, explanation) */
(() => {
// ---- Complex practice (40) ----
const CXPOOL=[];
mcs(CXPOOL,"link","Chọn từ nối đúng.",[
 ["___ the heavy rain, the match continued.","Despite",["Although","Because","However"],"cx-contrast","Theo sau là danh từ (the heavy rain): Despite."],
 ["___ it was expensive, she bought it.","Although",["Despite","In spite of","Because of"],"cx-contrast","Theo sau là mệnh đề: Although."],
 ["The flight was cancelled ___ the storm.","because of",["because","although","so that"],"cx-reason","Theo sau là danh từ: because of."],
 ["I left early ___ I could catch the bus.","so that",["in order to","because of","despite"],"cx-purpose","Có S + could: so that."],
 ["She studies hard ___ get a scholarship.","in order to",["so that","because","although"],"cx-purpose","Theo sau là động từ nguyên mẫu: in order to."],
 ["It was ___ a long journey that we slept all day.","such",["so","too","very"],"cx-reason","such + a + adj + N."],
 ["The test was ___ difficult that nobody passed.","so",["such","too","enough"],"cx-reason","so + adj + that."],
 ["Cities are crowded, ___ villages are quiet.","whereas",["despite","because","so that"],"cx-contrast","So sánh hai vế trái ngược: whereas."],
 ["I'll call you as soon as I ___ home.","get",["will get","got","am getting"],"cx-time","Mệnh đề thời gian nói tương lai dùng hiện tại đơn."],
 ["The plan is cheap. ___, it will take a long time.","However",["Moreover","Therefore","For instance"],"cx-linkers","Ý trái ngược: However."]]);
mcs(CXPOOL,"noun","Chọn mệnh đề danh từ đúng.",[
 ["I don't know where ___.","he lives",["does he live","he does live","lives he"],"cx-noun","Mệnh đề danh từ giữ trật tự S + V."],
 ["___ I need is a long holiday.","What",["That","Which","It"],"cx-noun","What + S + V làm chủ ngữ."],
 ["___ prices are rising worries many families.","The fact that",["What","The fact what","That fact"],"cx-noun","The fact that + mệnh đề."],
 ["Can you tell me what time ___?","the shop opens",["does the shop open","opens the shop","the shop does opens"],"cx-noun","Câu hỏi gián tiếp: S + V."],
 ["I'm not sure ___ she will come.","whether",["what","that","which"],"cx-noun","Không chắc có hay không: whether / if."],
 ["It is clear ___ education is important.","that",["what","which","whether"],"cx-noun","It is + adj + that."],
 ["___ he said surprised everyone.","What",["That","Which","It"],"cx-noun","Điều anh ấy nói: What."],
 ["I wonder why ___ so late.","she is",["is she","she does be","does she"],"cx-noun","Mệnh đề danh từ không đảo ngữ."],
 ["Nobody knows ___ the money went.","where",["what","that","whether"],"cx-noun","Nơi chốn: where."],
 ["The problem is ___ we don't have enough time.","that",["what","which","whether"],"cx-noun","Bổ ngữ: that + mệnh đề."]]);
mcr(CXPOOL,"part","Chọn câu rút gọn đúng.","Rút gọn mệnh đề trạng ngữ",[
 ["After she had finished the report, she went home.","Having finished the report, she went home.",["Finished the report, she went home.","Having finish the report, she went home.","Finishing the report, she had gone home."],"cx-participle","Việc xảy ra trước: Having + V3."],
 ["While I was walking home, I met an old friend.","Walking home, I met an old friend.",["Walked home, I met an old friend.","Walking home, an old friend met me by chance.","Having walk home, I met an old friend."],"cx-participle","Cùng lúc, chủ động: V-ing; chủ ngữ vế chính phải là I."],
 ["The bridge was built in 1990, and it is still strong.","Built in 1990, the bridge is still strong.",["Building in 1990, the bridge is still strong.","Having built in 1990, the bridge is still strong.","Built in 1990, it is still a strong bridge was."],"cx-participle","Bị động: V3."],
 ["Because he felt tired, he went to bed early.","Feeling tired, he went to bed early.",["Felt tired, he went to bed early.","Tired feeling, he went to bed early.","Having feel tired, he went to bed early."],"cx-participle","Nguyên nhân, chủ động: V-ing."],
 ["When he was asked about the plan, he refused to comment.","When asked about the plan, he refused to comment.",["When asking about the plan, he refused to comment.","When being ask about the plan, he refused to comment.","Asked when about the plan, he refused to comment."],"cx-participle","Bị động sau when: When + V3."],
 ["Because they were faced with high costs, many families moved.","Faced with high costs, many families moved.",["Facing with high costs, many families moved.","Having faced by high costs, many families moved.","Faced high costs, many families moved."],"cx-participle","Bị động: Faced with."],
 ["After I read the book, I watched the film.","After reading the book, I watched the film.",["After read the book, I watched the film.","After to read the book, I watched the film.","After readed the book, I watched the film."],"cx-time","after + V-ing."],
 ["Since I had lost my keys, I waited outside.","Having lost my keys, I waited outside.",["Lost my keys, I waited outside.","Having losing my keys, I waited outside.","Losing my keys, I had waited outside."],"cx-participle","Xảy ra trước: Having + V3."],
 ["Before you leave, turn off the lights.","Before leaving, turn off the lights.",["Before leave, turn off the lights.","Before left, turn off the lights.","Before to leave, turn off the lights."],"cx-time","before + V-ing."],
 ["The students who were invited to the event arrived early.","The students invited to the event arrived early.",["The students inviting to the event arrived early.","The students were invited to the event arrived early.","The students having invite to the event arrived early."],"cx-participle","Bị động: V3."]]);
mcr(CXPOOL,"rw","Chọn câu nối đúng.","Nối thành một câu",[
 ["It rained. We went out.","Although it rained, we went out.",["Although it rained, but we went out.","Despite it rained, we went out.","Because it rained, we went out."],"cx-contrast","Although + mệnh đề, không thêm but."],
 ["He was ill. He went to work.","Despite being ill, he went to work.",["Despite he was ill, he went to work.","Although being ill, he went to work.","In spite of ill, he went to work."],"cx-contrast","Despite + V-ing."],
 ["The coffee was very hot. I couldn't drink it.","The coffee was so hot that I couldn't drink it.",["The coffee was such hot that I couldn't drink it.","The coffee was too hot that I couldn't drink it.","The coffee was so hot so I couldn't drink it."],"cx-reason","so + adj + that."],
 ["It was a very good film. I watched it twice.","It was such a good film that I watched it twice.",["It was so a good film that I watched it twice.","It was such good film that I watched it twice.","It was a such good film that I watched it twice."],"cx-reason","such + a + adj + N + that."],
 ["I saved money. I wanted to buy a laptop.","I saved money in order to buy a laptop.",["I saved money in order to buying a laptop.","I saved money so that buy a laptop.","I saved money for buy a laptop."],"cx-purpose","in order to + V."],
 ["Speak slowly. Then everyone can understand.","Speak slowly so that everyone can understand.",["Speak slowly in order to everyone can understand.","Speak slowly so as everyone understand.","Speak slowly so that everyone understanding."],"cx-purpose","Khác chủ ngữ: so that + S + can."],
 ["The traffic was heavy. We were late.","We were late because of the heavy traffic.",["We were late because the heavy traffic.","We were late although the heavy traffic.","We were late because of the traffic was heavy."],"cx-reason","because of + danh từ."],
 ["Prices rose. Sales fell.","Prices rose. As a result, sales fell.",["Prices rose, as a result sales fell.","Prices rose. However, sales fell.","Prices rose. As a result sales, fell."],"cx-linkers","Kết quả: As a result, + câu mới."],
 ["I'll finish this. Then I'll call you.","I'll call you when I finish this.",["I'll call you when I will finish this.","I'll call you when I finished this.","I call you when I will finish this."],"cx-time","Mệnh đề thời gian không dùng will."],
 ["He lives somewhere. I don't know.","I don't know where he lives.",["I don't know where does he live.","I don't know where he does live.","I don't know he lives where."],"cx-noun","Mệnh đề danh từ: S + V."]]);
const CXTYPES={link:{name:"Chọn từ nối",desc:"although, despite, because of, so that, such … that"},noun:{name:"Mệnh đề danh từ",desc:"What, that, whether, câu hỏi gián tiếp"},part:{name:"Rút gọn mệnh đề",desc:"V-ing, Having V3, V3"},rw:{name:"Nối hai câu",desc:"Viết lại thành câu phức đúng"}};
const CXF=["tương phản","nguyên nhân","kết quả","mục đích","thời gian","bổ sung","ví dụ"];
const CXRUSH=[["although",["tương phản"]],["despite",["tương phản"]],["in spite of",["tương phản"]],["whereas",["tương phản"]],["However,",["tương phản"]],["Nevertheless,",["tương phản"]],["because",["nguyên nhân"]],["since (= because)",["nguyên nhân"]],["due to",["nguyên nhân"]],["owing to",["nguyên nhân"]],["because of",["nguyên nhân"]],["Therefore,",["kết quả"]],["As a result,",["kết quả"]],["Consequently,",["kết quả"]],["so … that",["kết quả"]],["in order to",["mục đích"]],["so that",["mục đích"]],["so as to",["mục đích"]],["as soon as",["thời gian"]],["by the time",["thời gian"]],["until",["thời gian"]],["while (= trong khi đang)",["thời gian"]],["Moreover,",["bổ sung"]],["Furthermore,",["bổ sung"]],["In addition,",["bổ sung"]],["For instance,",["ví dụ"]],["such as",["ví dụ"]],["For example,",["ví dụ"]]];

GRAMMAR.quiz["complex"] = { pool: CXPOOL, types: CXTYPES, game: {title:"Từ nối nhanh",desc:"60 giây. Thấy từ nối, chọn đúng chức năng của nó",prompt:"Từ nối này dùng để làm gì?",items:CXRUSH,all:CXF,label:c=>`<span class="tl-vi">${c}</span>`,name:c=>c,bestKey:"cxrushBest"} };
})();
