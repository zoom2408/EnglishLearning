/* content/quiz/compare.js: practice questions and game for this module.
   mcQ(type, prompt, hint, right, [wrong…], lessonId, explanation)
   inQ(type, prompt, hint, [accepted answers], lessonId, explanation) */
(() => {
// ---- Compare practice (40) ----
const CPPOOL=[];
[["big","bigger"],["happy","happier"],["good","better"],["bad","worse"],["far","further","farther"],["expensive","more expensive"],["thin","thinner"],["little (lượng)","less"],["many","more"],["easy","easier"]]
 .forEach(([b,...acc])=>CPPOOL.push(inQ("form",`<span class="ask">So sánh hơn</span><span class="mono big">${esc(b)}</span> <span class="arrow">→</span> <span class="blank"></span>`,"Gõ dạng so sánh hơn.",acc,"cp-forms",`${b} → ${acc.join(" / ")}.`)));
mcs(CPPOOL,"choose","Chọn đáp án đúng.",[
 ["This phone is ___ than that one.","cheaper",["more cheap","more cheaper","cheapest"],"cp-forms","Tính từ ngắn: -er."],
 ["She is ___ student in the class.","the most intelligent",["the more intelligent","most intelligent","the intelligentest"],"cp-forms","Tính từ dài: the most."],
 ["My hometown is not ___ busy as Hanoi.","as",["so much","more","than"],"cp-asas","not as … as."],
 ["___ you study, the better your score.","The harder",["Harder","The hard","The hardest"],"cp-double","The + -er …, the + -er."],
 ["Life is getting ___.","more and more expensive",["expensiver and expensiver","more expensive and more","most and most expensive"],"cp-double","more and more + adj dài."],
 ["It's ___ best meal I've ever had.","the",["a","most","more"],"cp-superlative","the + best."],
 ["Hue is one of the most beautiful ___ in Vietnam.","cities",["city","city's","citys"],"cp-superlative","one of the + N số nhiều."],
 ["Rent is ___ more expensive in the city.","much",["very","so","more"],"cp-modifiers","much + so sánh hơn."],
 ["She is the same age ___ me.","as",["than","like","with"],"cp-asas","the same … as."],
 ["This is ___ the biggest market in the region.","by far",["very","much","so"],"cp-modifiers","by far + the + -est."]]);
mcs(CPPOOL,"task1","Chọn cách so sánh số liệu đúng.",[
 ["A = 200, B = 100. A was ___ B.","twice as high as",["twice higher than","two times higher as","double as high than"],"cp-multiples","Gấp đôi: twice as high as."],
 ["A = 51%, B = 50%. A was ___ than B.","slightly higher",["considerably higher","much higher","twice higher"],"cp-modifiers","Chênh 1%: slightly."],
 ["A = 90, B = 30. A was ___ B.","three times as high as",["three times higher as","triple higher than","three as high as"],"cp-multiples","Gấp ba: three times as high as."],
 ["A = 80, B = 40. B was ___ A.","half as high as",["half higher than","a half as high than","twice lower than"],"cp-multiples","Bằng một nửa: half as high as."],
 ["Men spent $50 and women spent $30, ___.","respectively",["accordingly","relatively","comparatively"],"cp-data","Theo thứ tự tương ứng: respectively."],
 ["Prices rose in May, ___ they fell in June.","whereas",["despite","because","so that"],"cp-data","Đối lập hai số liệu: whereas."],
 ["___ 2010, sales in 2020 doubled.","Compared with",["Compare with","Comparing to the","In compared with"],"cp-data","Compared with + N."],
 ["Cars ___ 40% of total sales.","accounted for",["accounted","accounting of","made of"],"cp-data","account for + %."],
 ["A = 70, B = 40. A was ___ higher than B.","considerably",["slightly","marginally","a bit"],"cp-modifiers","Chênh lớn: considerably."],
 ["The figure for Japan was the highest, ___ by Korea.","followed",["following","follow","to follow"],"cp-data","…, followed by + N."]]);
mcs(CPPOOL,"spot","Chọn câu đúng ngữ pháp.",[
 ["Chọn câu đúng: ___","It is cheaper than before.",["It is more cheaper than before.","It is more cheap than before.","It is cheaper as before."],"cp-forms","Không dùng more với -er."],
 ["Chọn câu đúng: ___","She is as tall as me.",["She is as tall than me.","She is so tall than me.","She is as taller as me."],"cp-asas","as … as."],
 ["Chọn câu đúng: ___","It is much cheaper.",["It is very cheaper.","It is too much cheaper.","It is so cheaper."],"cp-modifiers","much + so sánh hơn."],
 ["Chọn câu đúng: ___","The more you read, the more you learn.",["The more you read, you learn more.","More you read, more you learn.","The more you read, the most you learn."],"cp-double","Cả hai vế: the + -er."],
 ["Chọn câu đúng: ___","She is one of the best students.",["She is one of the best student.","She is one of best students.","She is one of the better students."],"cp-superlative","one of the + nhất + N số nhiều."],
 ["Chọn câu đúng: ___","Sales were twice as high as in 2010.",["Sales were twice higher than in 2010.","Sales were two times higher as in 2010.","Sales were twice as higher as in 2010."],"cp-multiples","twice as + adj + as."],
 ["Chọn câu đúng: ___","This is the worst film I've ever seen.",["This is the baddest film I've ever seen.","This is the worse film I've ever seen.","This is the most bad film I've ever seen."],"cp-forms","bad → worse → worst."],
 ["Chọn câu đúng: ___","My plan is different from yours.",["My plan is different than yours.","My plan is difference from yours.","My plan is different with yours."],"cp-asas","different from (chuẩn trong văn viết)."],
 ["Chọn câu đúng: ___","He drives more carefully than his brother.",["He drives carefullier than his brother.","He drives more careful than his brother.","He drives most carefully than his brother."],"cp-forms","Trạng từ dài: more + adv."],
 ["Chọn câu đúng: ___","Cities are getting bigger and bigger.",["Cities are getting more and more big.","Cities are getting big and bigger.","Cities are getting bigger and more bigger."],"cp-double","-er and -er."]]);
const CPTYPES={form:{name:"Dạng so sánh",desc:"Tự gõ so sánh hơn, có và bất quy tắc"},choose:{name:"Chọn đáp án đúng",desc:"as … as, the more, one of the"},task1:{name:"So sánh số liệu Task 1",desc:"twice as, slightly, respectively, whereas"},spot:{name:"Chọn câu đúng",desc:"Tránh lỗi so sánh hay gặp"}};
const CPCAT=["slightly higher","considerably higher","twice as high","three times as high","as high as","half as high","slightly lower","considerably lower"];
const CPRUSH=[["A = 51 · B = 50",["slightly higher"]],["A = 102 · B = 100",["slightly higher"]],["A = 80 · B = 50",["considerably higher"]],["A = 70 · B = 40",["considerably higher"]],["A = 200 · B = 100",["twice as high"]],["A = 60 · B = 30",["twice as high"]],["A = 90 · B = 30",["three times as high"]],["A = 300 · B = 100",["three times as high"]],["A = 45 · B = 45",["as high as"]],["A = 12 · B = 12",["as high as"]],["A = 25 · B = 50",["half as high"]],["A = 40 · B = 80",["half as high"]],["A = 49 · B = 50",["slightly lower"]],["A = 98 · B = 100",["slightly lower"]],["A = 30 · B = 60",["half as high"]],["A = 40 · B = 70",["considerably lower"]],["A = 20 · B = 45",["considerably lower"]],["A = 150 · B = 50",["three times as high"]],["A = 10 · B = 5",["twice as high"]],["A = 76 · B = 75",["slightly higher"]]];

GRAMMAR.quiz["compare"] = { pool: CPPOOL, types: CPTYPES, game: {title:"Đọc số liệu nhanh",desc:"60 giây. Nhìn hai con số, chọn cách so sánh A với B",prompt:"So với B, A là…",items:CPRUSH,all:CPCAT,label:c=>`<span class="tl-vi mono">${c}</span>`,name:c=>c,bestKey:"cprushBest"} };
})();
