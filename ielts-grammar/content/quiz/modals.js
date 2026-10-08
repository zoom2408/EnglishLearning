/* content/quiz/modal.js: practice questions and game for this module.
   mcQ(type, prompt, hint, right, [wrong…], lessonId, explanation)
   inQ(type, prompt, hint, [accepted answers], lessonId, explanation) */
(() => {
// Modal (40)
const MPOOL=[];
[["You ___ smoke in the hospital. It's forbidden.","mustn't",["don't have to","needn't","shouldn't have"],"m-obligation","Cấm: mustn't."],
 ["You ___ bring food. We have plenty.","don't have to",["mustn't","can't","shouldn't have"],"m-obligation","Không cần: don't have to."],
 ["You look ill. You ___ see a doctor.","should",["must have","can't","might have"],"m-advice","Lời khuyên: should."],
 ["___ I use your phone, please?","May",["Must","Should","Would"],"m-permission","Xin phép lịch sự: May I…?"],
 ["When I was young, I ___ run very fast.","could",["can","was able","must"],"m-ability","Khả năng chung trong quá khứ: could."],
 ["I ___ go to school by bike, but now I drive.","used to",["would to","use to","was used to"],"m-habits","Thói quen cũ: used to."],
 ["You'd ___ hurry, or you'll miss the train.","better",["rather","should","must"],"m-advice","had better + V: cảnh báo."],
 ["___ you mind opening the window?","Would",["Could","Will you","Do"],"m-permission","Would you mind + V-ing?"],
 ["Everyone ___ escape before the building collapsed.","was able to",["could","can","must"],"m-ability","Làm được một lần cụ thể: was able to."],
 ["I ___ wear a uniform at my new job. It's the rule.","have to",["mustn't","needn't","could"],"m-obligation","Quy định bên ngoài: have to."],
].forEach(([s,r,w,ref,ex])=>MPOOL.push(mcQ("choose",fmt(s),"Chọn modal phù hợp với nghĩa.",r,w,ref,ex,true)));
[["The lights are off. They ___ be at home.","can't",["must","should","mustn't"],"m-deduction-present","Chắc chắn không: can't."],
 ["She's been working all day. She ___ be exhausted.","must",["can't","mustn't","needn't"],"m-deduction-present","Gần như chắc chắn: must."],
 ["I'm not sure where he is. He ___ be in the library.","might",["must","can't","has to"],"m-deduction-present","Không chắc: might."],
 ["The road is wet. It ___ rained last night.","must have",["can't have","must","should"],"m-deduction-past","Suy đoán chắc chắn về quá khứ: must have + V3."],
 ["He ___ seen me. I was hiding behind the door.","can't have",["must have","should have","might"],"m-deduction-past","Chắc chắn không: can't have + V3."],
 ["She isn't here yet. She ___ missed the bus.","might have",["must","can't","should have"],"m-deduction-past","Có thể đã: might have + V3."],
 ["That ___ be Lan at the door. She's in Paris this week.","can't",["must","might","should"],"m-deduction-present","Chắc chắn không phải: can't."],
 ["You got full marks! You ___ be really happy.","must",["can't","might not","mustn't"],"m-deduction-present","Suy luận chắc chắn: must."],
 ["I can't find my wallet. I ___ dropped it in the taxi.","must have",["must","can't have","should"],"m-deduction-past","Giải thích chuyện đã xảy ra: must have + V3."],
 ["The window is broken. Someone ___ thrown a ball.","must have",["can have","must","should"],"m-deduction-past","Dấu hiệu rõ ràng: must have + V3."],
].forEach(([s,r,w,ref,ex])=>MPOOL.push(mcQ("deduce",fmt(s),"Bạn chắc chắn đến đâu? Chọn modal đúng.",r,w,ref,ex,true)));
[["You ___ (not / need) come. We can manage.",["don't have to","do not have to","needn't","need not","don't need to","do not need to"],"m-obligation","Không cần: don't have to hoặc needn't."],
 ["I failed. I ___ (should / study) harder.",["should have studied"],"m-perfect","Tiếc nuối: should have + V3."],
 ["You ___ (shouldn't / say) that to her. She's upset now.",["should not have said"],"m-perfect","Trách móc: shouldn't have + V3."],
 ["We ___ (could / win) if we had trained more.",["could have won"],"m-perfect","Đã có thể nhưng không: could have + V3."],
 ["After the course, you ___ (be able to / speak) basic Japanese.",["will be able to speak"],"m-ability","Tương lai: will be able to + V."],
 ["My grandmother ___ (would / tell) us stories every night.",["would tell"],"m-habits","Hành động lặp lại trong quá khứ: would + V."],
 ["I'm ___ (used to / get) up early now.",["used to getting"],"m-habits","be used to + V-ing: quen với."],
 ["Yesterday I ___ (have to / work) late.",["had to work"],"m-obligation","Quá khứ của must/have to là had to."],
 ["You ___ (needn't / buy) flowers, but thank you!",["need not have bought"],"m-perfect","Đã làm nhưng không cần: needn't have + V3."],
 ["She ___ (might / forget) the meeting. Let's call her.",["might have forgotten"],"m-deduction-past","Có thể đã: might have + V3."],
].forEach(([s,acc,ref,ex])=>MPOOL.push(inQ("fill",fmt(s.replace(/ \(.+?\)/,"")),`Gợi ý: <b>${esc(s.match(/\((.+?)\)/)[1])}</b>. Gõ phần điền vào chỗ trống.`,acc,ref,ex)));
[["mustn't","cấm làm",["không cần làm","nên làm","chắc chắn không phải"],"m-obligation","mustn't là cấm."],
 ["don't have to","không cần làm",["cấm làm","bắt buộc làm","không thể làm"],"m-obligation","don't have to là không cần."],
 ["should have done","đáng lẽ nên làm (nhưng đã không làm)",["chắc chắn đã làm","đã có thể làm","không cần làm"],"m-perfect","should have V3 là tiếc nuối."],
 ["must have done","chắc chắn đã làm",["đáng lẽ phải làm","bắt buộc đã làm","có thể đã làm"],"m-deduction-past","must have V3 là suy đoán chắc chắn về quá khứ."],
 ["could have done","đã có thể làm (nhưng không làm)",["chắc chắn đã làm","đáng lẽ không nên làm","không cần làm"],"m-perfect","could have V3 là khả năng không thành hiện thực."],
 ["needn't have done","đã làm nhưng không cần",["không được làm","chưa làm","chắc chắn không làm"],"m-perfect","needn't have V3 là làm thừa."],
 ["had better","nên làm, nếu không sẽ có hậu quả",["thích hơn","đã từng làm","có thể làm"],"m-advice","had better mang ý cảnh báo."],
 ["used to","đã từng (bây giờ không còn)",["quen với","bắt buộc phải","có thể"],"m-habits","used to + V là thói quen cũ."],
 ["be used to + V-ing","quen với việc gì",["đã từng làm","bắt buộc làm","được sử dụng để"],"m-habits","be used to + V-ing là đã quen."],
 ["can't have done","chắc chắn đã không làm",["không được phép làm","không cần làm","đáng lẽ không nên làm"],"m-deduction-past","can't have V3 là loại trừ khả năng trong quá khứ."],
].forEach(([a,r,w,ref,ex])=>MPOOL.push(mcQ("meaning",`<span class="ask">Nghĩa là gì?</span><span class="mono big">${esc(a)}</span>`,"Chọn nghĩa đúng.",r,w,ref,ex)));
const MTYPES={choose:{name:"Chọn modal theo nghĩa",desc:"Bắt buộc, cấm, khuyên, xin phép, khả năng"},deduce:{name:"Suy đoán",desc:"must, might, can't ở hiện tại và quá khứ"},fill:{name:"Điền vào chỗ trống",desc:"Tự gõ modal + have V3, used to, be able to"},meaning:{name:"Hiểu đúng nghĩa",desc:"Phân biệt các cặp dễ nhầm"}};
const MRUSH=[["mustn't",["cấm"]],["don't have to",["không cần"]],["needn't",["không cần"]],["must (I must go)",["bắt buộc"]],["have to",["bắt buộc"]],["should",["lời khuyên"]],["ought to",["lời khuyên"]],["had better",["lời khuyên"]],["She must be tired.",["chắc chắn có"]],["must have done",["chắc chắn có"]],["might be",["có thể"]],["could be",["có thể"]],["may be",["có thể"]],["might have done",["có thể"]],["can't be",["chắc chắn không"]],["can't have done",["chắc chắn không"]],["can (I can swim)",["khả năng"]],["was able to",["khả năng"]],["could (when I was 5)",["khả năng"]],["May I…?",["xin phép"]],["Could I…?",["xin phép"]],["Would you mind…?",["xin phép"]],["should have done",["tiếc nuối"]],["shouldn't have done",["tiếc nuối"]],["used to",["thói quen cũ"]],["would (every summer we would…)",["thói quen cũ"]]];
const MALL=[...new Set(MRUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["modal"] = { pool: MPOOL, types: MTYPES, game: {title:"Đoán nghĩa nhanh",desc:"60 giây. Thấy modal, chọn đúng nghĩa của nó",prompt:"Modal này mang nghĩa gì?",items:MRUSH,all:MALL,label:c=>`<span class="tl-vi">${esc(c)}</span>`,name:c=>c,bestKey:"mrushBest"} };
})();
