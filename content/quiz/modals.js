/* content/quiz/modal.js: practice questions and game for this module.
   mcQ(type, prompt, hint, right, [wrong…], lessonId, explanation)
   inQ(type, prompt, hint, [accepted answers], lessonId, explanation) */
(() => {
// Modal (60) — BANK keyed by lesson ref; each item carries its own `kind`
// (choose / deduce / fill / meaning) since this module mixes several
// question builders, unlike the single-type "fill" banks in de/nb.
const BANK = {
 "m-deduction-present": [
  {kind:"deduce",q:"The lights are off. They ___ be at home.",right:"can't",wrong:["must","should","mustn't"],expl:"Chắc chắn không: can't."},
  {kind:"deduce",q:"She's been working all day. She ___ be exhausted.",right:"must",wrong:["can't","mustn't","needn't"],expl:"Gần như chắc chắn: must."},
  {kind:"deduce",q:"I'm not sure where he is. He ___ be in the library.",right:"might",wrong:["must","can't","has to"],expl:"Không chắc: might."},
  {kind:"deduce",q:"That ___ be Lan at the door. She's in Paris this week.",right:"can't",wrong:["must","might","should"],expl:"Chắc chắn không phải: can't."},
  {kind:"deduce",q:"You got full marks! You ___ be really happy.",right:"must",wrong:["can't","might not","mustn't"],expl:"Suy luận chắc chắn: must."},
  {kind:"deduce",q:"You've eaten nothing all day. You ___ be starving.",right:"must",wrong:["can't","might","mustn't"],expl:"Suy đoán chắc chắn ở hiện tại: must."},
  {kind:"deduce",q:"She never eats meat. She ___ be vegetarian.",right:"might",wrong:["must","can't","should"],expl:"Không chắc chắn, chỉ là khả năng: might."},
  {kind:"deduce",q:"They've lived here for 20 years. They ___ know the area well.",right:"must",wrong:["can't","might","needn't"],expl:"Chắc chắn dựa trên bằng chứng: must."},
  {kind:"fill",q:"I'm not sure, but she ___ (might / be) at work still.",accept:["might be"],expl:"Suy đoán không chắc ở hiện tại: might + V."},
 ],
 "m-deduction-past": [
  {kind:"deduce",q:"The road is wet. It ___ rained last night.",right:"must have",wrong:["can't have","must","should"],expl:"Suy đoán chắc chắn về quá khứ: must have + V3."},
  {kind:"deduce",q:"He ___ seen me. I was hiding behind the door.",right:"can't have",wrong:["must have","should have","might"],expl:"Chắc chắn không: can't have + V3."},
  {kind:"deduce",q:"She isn't here yet. She ___ missed the bus.",right:"might have",wrong:["must","can't","should have"],expl:"Có thể đã: might have + V3."},
  {kind:"deduce",q:"I can't find my wallet. I ___ dropped it in the taxi.",right:"must have",wrong:["must","can't have","should"],expl:"Giải thích chuyện đã xảy ra: must have + V3."},
  {kind:"deduce",q:"The window is broken. Someone ___ thrown a ball.",right:"must have",wrong:["can have","must","should"],expl:"Dấu hiệu rõ ràng: must have + V3."},
  {kind:"fill",q:"She ___ (might / forget) the meeting. Let's call her.",accept:["might have forgotten"],expl:"Có thể đã: might have + V3."},
  {kind:"meaning",a:"must have done",right:"chắc chắn đã làm",wrong:["đáng lẽ phải làm","bắt buộc đã làm","có thể đã làm"],expl:"must have V3 là suy đoán chắc chắn về quá khứ."},
  {kind:"meaning",a:"can't have done",right:"chắc chắn đã không làm",wrong:["không được phép làm","không cần làm","đáng lẽ không nên làm"],expl:"can't have V3 là loại trừ khả năng trong quá khứ."},
  {kind:"deduce",q:"The grass is wet but it isn't raining now. It ___ rained earlier.",right:"must have",wrong:["can't have","might","should have"],expl:"Bằng chứng rõ ràng: must have + V3."},
  {kind:"deduce",q:"He failed the exam? He ___ studied at all.",right:"can't have",wrong:["must have","might have","should have"],expl:"Chắc chắn không: can't have + V3."},
 ],
 "m-obligation": [
  {kind:"choose",q:"You ___ smoke in the hospital. It's forbidden.",right:"mustn't",wrong:["don't have to","needn't","shouldn't have"],expl:"Cấm: mustn't."},
  {kind:"choose",q:"You ___ bring food. We have plenty.",right:"don't have to",wrong:["mustn't","can't","shouldn't have"],expl:"Không cần: don't have to."},
  {kind:"choose",q:"I ___ wear a uniform at my new job. It's the rule.",right:"have to",wrong:["mustn't","needn't","could"],expl:"Quy định bên ngoài: have to."},
  {kind:"fill",q:"You ___ (not / need) come. We can manage.",accept:["don't have to","do not have to","needn't","need not","don't need to","do not need to"],expl:"Không cần: don't have to hoặc needn't."},
  {kind:"fill",q:"Yesterday I ___ (have to / work) late.",accept:["had to work"],expl:"Quá khứ của must/have to là had to."},
  {kind:"meaning",a:"mustn't",right:"cấm làm",wrong:["không cần làm","nên làm","chắc chắn không phải"],expl:"mustn't là cấm."},
  {kind:"meaning",a:"don't have to",right:"không cần làm",wrong:["cấm làm","bắt buộc làm","không thể làm"],expl:"don't have to là không cần."},
  {kind:"choose",q:"All passengers ___ fasten their seatbelt during takeoff.",right:"must",wrong:["don't have to","needn't","could"],expl:"Quy định bắt buộc, không có lựa chọn: must."},
  {kind:"fill",q:"In this country, drivers ___ (have to / wear) a seatbelt by law.",accept:["have to wear"],expl:"Quy định bắt buộc bên ngoài: have to + V."},
 ],
 "m-advice": [
  {kind:"choose",q:"You look ill. You ___ see a doctor.",right:"should",wrong:["must have","can't","might have"],expl:"Lời khuyên: should."},
  {kind:"choose",q:"You'd ___ hurry, or you'll miss the train.",right:"better",wrong:["rather","should","must"],expl:"had better + V: cảnh báo."},
  {kind:"meaning",a:"had better",right:"nên làm, nếu không sẽ có hậu quả",wrong:["thích hơn","đã từng làm","có thể làm"],expl:"had better mang ý cảnh báo."},
  {kind:"choose",q:"You ___ see a dentist about that tooth.",right:"should",wrong:["must","can't","might"],expl:"Lời khuyên nhẹ: should."},
  {kind:"fill",q:"You ___ (ought / apologize) to her as soon as possible.",accept:["ought to apologize"],expl:"ought to + V: lời khuyên, khách quan hơn should một chút."},
  {kind:"meaning",a:"ought to",right:"nên làm (gần giống should)",wrong:["bắt buộc phải làm","cấm làm","chắc chắn đã làm"],expl:"ought to tương đương should, mang tính khách quan/đạo đức hơn."},
 ],
 "m-permission": [
  {kind:"choose",q:"___ I use your phone, please?",right:"May",wrong:["Must","Should","Would"],expl:"Xin phép lịch sự: May I…?"},
  {kind:"choose",q:"___ you mind opening the window?",right:"Would",wrong:["Could","Will you","Do"],expl:"Would you mind + V-ing?"},
  {kind:"choose",q:"___ I borrow your pen for a second?",right:"Could",wrong:["Should","Must","Would rather"],expl:"Xin phép lịch sự: Could I…?"},
  {kind:"fill",q:"___ (would / you / mind) if I opened the window?",accept:["Would you mind"],expl:"Would you mind + if-clause (quá khứ giả định): xin phép lịch sự."},
  {kind:"meaning",a:"May I…?",right:"xin phép một cách lịch sự, trang trọng",wrong:["bắt buộc phải","chắc chắn có","khuyên nên làm"],expl:"May I…? xin phép lịch sự, trang trọng hơn Can I…?"},
  {kind:"meaning",a:"Could I…?",right:"xin phép, lịch sự và phổ biến",wrong:["cấm làm","chắc chắn không","đã có thể làm"],expl:"Could I…? xin phép lịch sự, phổ biến trong giao tiếp hằng ngày."},
  {kind:"meaning",a:"Would you mind…?",right:"xin phép hoặc yêu cầu rất lịch sự",wrong:["bắt buộc phải làm","nên làm","không cần làm"],expl:"Would you mind + V-ing/if-clause: yêu cầu/xin phép rất lịch sự; trả lời No nếu đồng ý."},
 ],
 "m-ability": [
  {kind:"choose",q:"When I was young, I ___ run very fast.",right:"could",wrong:["can","was able","must"],expl:"Khả năng chung trong quá khứ: could."},
  {kind:"choose",q:"Everyone ___ escape before the building collapsed.",right:"was able to",wrong:["could","can","must"],expl:"Làm được một lần cụ thể: was able to."},
  {kind:"fill",q:"After the course, you ___ (be able to / speak) basic Japanese.",accept:["will be able to speak"],expl:"Tương lai: will be able to + V."},
  {kind:"choose",q:"She ___ speak three languages fluently by the age of ten.",right:"could",wrong:["can","was able","must"],expl:"Khả năng chung trong quá khứ: could."},
  {kind:"fill",q:"By next year, I ___ (be able to / finish) my degree.",accept:["will be able to finish"],expl:"Khả năng ở tương lai: will be able to + V."},
  {kind:"meaning",a:"was able to",right:"đã có thể làm được (một lần cụ thể trong quá khứ)",wrong:["có khả năng chung trong quá khứ","chắc chắn đã làm","nên đã làm"],expl:"was able to dùng cho khả năng ở MỘT tình huống cụ thể, khác could (khả năng chung)."},
 ],
 "m-habits": [
  {kind:"choose",q:"I ___ go to school by bike, but now I drive.",right:"used to",wrong:["would to","use to","was used to"],expl:"Thói quen cũ: used to."},
  {kind:"fill",q:"My grandmother ___ (would / tell) us stories every night.",accept:["would tell"],expl:"Hành động lặp lại trong quá khứ: would + V."},
  {kind:"fill",q:"I'm ___ (used to / get) up early now.",accept:["used to getting"],expl:"be used to + V-ing: quen với."},
  {kind:"meaning",a:"used to",right:"đã từng (bây giờ không còn)",wrong:["quen với","bắt buộc phải","có thể"],expl:"used to + V là thói quen cũ."},
  {kind:"meaning",a:"be used to + V-ing",right:"quen với việc gì",wrong:["đã từng làm","bắt buộc làm","được sử dụng để"],expl:"be used to + V-ing là đã quen."},
  {kind:"choose",q:"We ___ spend every summer at my grandmother's house.",right:"used to",wrong:["would to","use to","are used to"],expl:"Thói quen cũ, không còn: used to."},
 ],
 "m-perfect": [
  {kind:"fill",q:"I failed. I ___ (should / study) harder.",accept:["should have studied"],expl:"Tiếc nuối: should have + V3."},
  {kind:"fill",q:"You ___ (shouldn't / say) that to her. She's upset now.",accept:["should not have said"],expl:"Trách móc: shouldn't have + V3."},
  {kind:"fill",q:"We ___ (could / win) if we had trained more.",accept:["could have won"],expl:"Đã có thể nhưng không: could have + V3."},
  {kind:"fill",q:"You ___ (needn't / buy) flowers, but thank you!",accept:["need not have bought"],expl:"Đã làm nhưng không cần: needn't have + V3."},
  {kind:"meaning",a:"should have done",right:"đáng lẽ nên làm (nhưng đã không làm)",wrong:["chắc chắn đã làm","đã có thể làm","không cần làm"],expl:"should have V3 là tiếc nuối."},
  {kind:"meaning",a:"could have done",right:"đã có thể làm (nhưng không làm)",wrong:["chắc chắn đã làm","đáng lẽ không nên làm","không cần làm"],expl:"could have V3 là khả năng không thành hiện thực."},
  {kind:"meaning",a:"needn't have done",right:"đã làm nhưng không cần",wrong:["không được làm","chưa làm","chắc chắn không làm"],expl:"needn't have V3 là làm thừa."},
 ],
};

const MTYPES={choose:{name:"Chọn modal theo nghĩa",desc:"Bắt buộc, cấm, khuyên, xin phép, khả năng"},deduce:{name:"Suy đoán",desc:"must, might, can't ở hiện tại và quá khứ"},fill:{name:"Điền vào chỗ trống",desc:"Tự gõ modal + have V3, used to, be able to"},meaning:{name:"Hiểu đúng nghĩa",desc:"Phân biệt các cặp dễ nhầm"}};

const MPOOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => {
 if (it.kind === "choose") MPOOL.push(mcQ("choose",fmt(it.q),"Chọn modal phù hợp với nghĩa.",it.right,it.wrong,ref,it.expl,true));
 else if (it.kind === "deduce") MPOOL.push(mcQ("deduce",fmt(it.q),"Bạn chắc chắn đến đâu? Chọn modal đúng.",it.right,it.wrong,ref,it.expl,true));
 else if (it.kind === "fill") MPOOL.push(inQ("fill",fmt(it.q.replace(/ \(.+?\)/,"")),`Gợi ý: <b>${esc(it.q.match(/\((.+?)\)/)[1])}</b>. Gõ phần điền vào chỗ trống.`,it.accept,ref,it.expl));
 else if (it.kind === "meaning") MPOOL.push(mcQ("meaning",`<span class="ask">Nghĩa là gì?</span><span class="mono big">${esc(it.a)}</span>`,"Chọn nghĩa đúng.",it.right,it.wrong,ref,it.expl));
}));

const MRUSH=[["mustn't",["cấm"]],["don't have to",["không cần"]],["needn't",["không cần"]],["must (I must go)",["bắt buộc"]],["have to",["bắt buộc"]],["should",["lời khuyên"]],["ought to",["lời khuyên"]],["had better",["lời khuyên"]],["She must be tired.",["chắc chắn có"]],["must have done",["chắc chắn có"]],["might be",["có thể"]],["could be",["có thể"]],["may be",["có thể"]],["might have done",["có thể"]],["can't be",["chắc chắn không"]],["can't have done",["chắc chắn không"]],["can (I can swim)",["khả năng"]],["was able to",["khả năng"]],["could (when I was 5)",["khả năng"]],["May I…?",["xin phép"]],["Could I…?",["xin phép"]],["Would you mind…?",["xin phép"]],["should have done",["tiếc nuối"]],["shouldn't have done",["tiếc nuối"]],["used to",["thói quen cũ"]],["would (every summer we would…)",["thói quen cũ"]]];
const MALL=[...new Set(MRUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["modal"] = { pool: MPOOL, types: MTYPES, game: {title:"Đoán nghĩa nhanh",desc:"60 giây. Thấy modal, chọn đúng nghĩa của nó",prompt:"Modal này mang nghĩa gì?",items:MRUSH,all:MALL,label:c=>`<span class="tl-vi">${esc(c)}</span>`,name:c=>c,bestKey:"mrushBest"} };
})();
