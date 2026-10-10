/* content/quiz/compare.js: practice questions and game for this module.
   mcQ(type, prompt, hint, right, [wrong…], lessonId, explanation)
   inQ(type, prompt, hint, [accepted answers], lessonId, explanation) */
(() => {
// ---- Compare practice (60) ----
// BANK keyed by question-type then lesson ref; choose/task1/spot
// flatten back into the tuples mcs already expects, form keeps its
// own inQ loop (irregular comparative drill, always ref cp-forms).
const BANK = {
 form: {
  "cp-forms": [["big","bigger"],["happy","happier"],["good","better"],["bad","worse"],["far","further","farther"],["expensive","more expensive"],["thin","thinner"],["little (lượng)","less"],["many","more"],["easy","easier"]],
 },
 choose: {
  "cp-forms": [
   {s:"This phone is ___ than that one.",r:"cheaper",w:["more cheap","more cheaper","cheapest"],expl:"Tính từ ngắn: -er."},
   {s:"She is ___ student in the class.",r:"the most intelligent",w:["the more intelligent","most intelligent","the intelligentest"],expl:"Tính từ dài: the most."},
  ],
  "cp-asas": [
   {s:"My hometown is not ___ busy as Hanoi.",r:"as",w:["so much","more","than"],expl:"not as … as."},
   {s:"She is the same age ___ me.",r:"as",w:["than","like","with"],expl:"the same … as."},
   {s:"This laptop is not ___ fast as the new model.",r:"as",w:["so much","more","than"],expl:"not as … as."},
   {s:"He earns the same salary ___ I do.",r:"as",w:["than","like","with"],expl:"the same … as."},
  ],
  "cp-double": [
   {s:"___ you study, the better your score.",r:"The harder",w:["Harder","The hard","The hardest"],expl:"The + -er …, the + -er."},
   {s:"Life is getting ___.",r:"more and more expensive",w:["expensiver and expensiver","more expensive and more","most and most expensive"],expl:"more and more + adj dài."},
   {s:"The ___ we leave, the ___ we'll arrive.",r:"earlier … sooner",w:["early … soon","more early … more soon","earliest … soonest"],expl:"the + -er …, the + -er."},
   {s:"The more popular the app became, ___ the servers crashed.",r:"the more often",w:["more often","the most often","often more"],expl:"the + more + adv, vế 2 cũng dùng the."},
  ],
  "cp-superlative": [
   {s:"It's ___ best meal I've ever had.",r:"the",w:["a","most","more"],expl:"the + best."},
   {s:"Hue is one of the most beautiful ___ in Vietnam.",r:"cities",w:["city","city's","citys"],expl:"one of the + N số nhiều."},
   {s:"This is by far ___ restaurant in town.",r:"the best",w:["best","the better","more best"],expl:"by far + the + so sánh nhất."},
   {s:"She is among ___ students in the school.",r:"the most talented",w:["the more talented","most talented","the talentedest"],expl:"among the + nhất + N số nhiều."},
   {s:"It was ___ decision he had ever made.",r:"the hardest",w:["the harder","hardest","more hard"],expl:"the + so sánh nhất + N."},
  ],
  "cp-modifiers": [
   {s:"Rent is ___ more expensive in the city.",r:"much",w:["very","so","more"],expl:"much + so sánh hơn."},
   {s:"This is ___ the biggest market in the region.",r:"by far",w:["very","much","so"],expl:"by far + the + -est."},
  ],
 },
 task1: {
  "cp-multiples": [
   {s:"A = 200, B = 100. A was ___ B.",r:"twice as high as",w:["twice higher than","two times higher as","double as high than"],expl:"Gấp đôi: twice as high as."},
   {s:"A = 90, B = 30. A was ___ B.",r:"three times as high as",w:["three times higher as","triple higher than","three as high as"],expl:"Gấp ba: three times as high as."},
   {s:"A = 80, B = 40. B was ___ A.",r:"half as high as",w:["half higher than","a half as high than","twice lower than"],expl:"Bằng một nửa: half as high as."},
   {s:"A = 400, B = 200. A was ___ B.",r:"twice as high as",w:["twice higher than","two times higher as","double as high than"],expl:"Gấp đôi: twice as high as."},
   {s:"A = 15, B = 45. A was ___ B.",r:"a third as high as",w:["three times as low as","one third higher than","three as low as"],expl:"Bằng một phần ba: a third as high as."},
  ],
  "cp-modifiers": [
   {s:"A = 51%, B = 50%. A was ___ than B.",r:"slightly higher",w:["considerably higher","much higher","twice higher"],expl:"Chênh 1%: slightly."},
   {s:"A = 70, B = 40. A was ___ higher than B.",r:"considerably",w:["slightly","marginally","a bit"],expl:"Chênh lớn: considerably."},
   {s:"A = 55%, B = 20%. A was ___ higher than B.",r:"far",w:["slightly","a little","marginally"],expl:"Chênh rất lớn: far."},
  ],
  "cp-data": [
   {s:"Men spent $50 and women spent $30, ___.",r:"respectively",w:["accordingly","relatively","comparatively"],expl:"Theo thứ tự tương ứng: respectively."},
   {s:"Prices rose in May, ___ they fell in June.",r:"whereas",w:["despite","because","so that"],expl:"Đối lập hai số liệu: whereas."},
   {s:"___ 2010, sales in 2020 doubled.",r:"Compared with",w:["Compare with","Comparing to the","In compared with"],expl:"Compared with + N."},
   {s:"Cars ___ 40% of total sales.",r:"accounted for",w:["accounted","accounting of","made of"],expl:"account for + %."},
   {s:"The figure for Japan was the highest, ___ by Korea.",r:"followed",w:["following","follow","to follow"],expl:"…, followed by + N."},
   {s:"In 2015, exports rose, ___ imports declined.",r:"while",w:["because","so that","due to"],expl:"Đối lập hai số liệu: while (tương tự whereas)."},
   {s:"The figure for coffee was lowest, ___ by tea.",r:"followed",w:["following","follow","to follow"],expl:"…, followed by + N."},
   {s:"Overall, spending on education ___ steadily.",r:"increased",w:["increase","was increased","increasing"],expl:"Overall, + S + V + adv: câu tổng kết Task 1."},
  ],
 },
 spot: {
  "cp-forms": [
   {r:"It is cheaper than before.",w:["It is more cheaper than before.","It is more cheap than before.","It is cheaper as before."],expl:"Không dùng more với -er."},
   {r:"This is the worst film I've ever seen.",w:["This is the baddest film I've ever seen.","This is the worse film I've ever seen.","This is the most bad film I've ever seen."],expl:"bad → worse → worst."},
   {r:"He drives more carefully than his brother.",w:["He drives carefullier than his brother.","He drives more careful than his brother.","He drives most carefully than his brother."],expl:"Trạng từ dài: more + adv."},
  ],
  "cp-asas": [
   {r:"She is as tall as me.",w:["She is as tall than me.","She is so tall than me.","She is as taller as me."],expl:"as … as."},
   {r:"My plan is different from yours.",w:["My plan is different than yours.","My plan is difference from yours.","My plan is different with yours."],expl:"different from (chuẩn trong văn viết)."},
   {r:"This exam wasn't as difficult as the last one.",w:["This exam wasn't as difficult than the last one.","This exam wasn't so difficult than the last one.","This exam wasn't as difficulter as the last one."],expl:"not as … as."},
   {r:"Her English is as good as mine.",w:["Her English is as good than mine.","Her English is so good than mine.","Her English is as better as mine."],expl:"as + adj + as."},
  ],
  "cp-modifiers": [
   {r:"It is much cheaper.",w:["It is very cheaper.","It is too much cheaper.","It is so cheaper."],expl:"much + so sánh hơn."},
   {r:"The new phone is slightly more expensive.",w:["The new phone is slight more expensive.","The new phone is slightly much expensive.","The new phone is more slightly expensive."],expl:"slightly + so sánh hơn."},
  ],
  "cp-double": [
   {r:"The more you read, the more you learn.",w:["The more you read, you learn more.","More you read, more you learn.","The more you read, the most you learn."],expl:"Cả hai vế: the + -er."},
   {r:"Cities are getting bigger and bigger.",w:["Cities are getting more and more big.","Cities are getting big and bigger.","Cities are getting bigger and more bigger."],expl:"-er and -er."},
   {r:"The busier the restaurant, the slower the service.",w:["The busier the restaurant, slower the service.","The more busy the restaurant, the more slow the service.","The busier the restaurant, the more slow service."],expl:"Cả hai vế: the + -er."},
  ],
  "cp-superlative": [
   {r:"She is one of the best students.",w:["She is one of the best student.","She is one of best students.","She is one of the better students."],expl:"one of the + nhất + N số nhiều."},
   {r:"This is one of the most difficult exams in the country.",w:["This is one of the most difficult exam in the country.","This is one of most difficult exams in the country.","This is one of the more difficult exams in the country."],expl:"one of the + nhất + N số nhiều."},
   {r:"He is by far the tallest person in the room.",w:["He is by far tallest person in the room.","He is so far the tallest person in the room.","He is by far the taller person in the room."],expl:"by far + the + so sánh nhất."},
  ],
  "cp-multiples": [
   {r:"Sales were twice as high as in 2010.",w:["Sales were twice higher than in 2010.","Sales were two times higher as in 2010.","Sales were twice as higher as in 2010."],expl:"twice as + adj + as."},
   {r:"Profits were three times as high as last year.",w:["Profits were three times higher as last year.","Profits were triple higher than last year.","Profits were three as high as last year."],expl:"three times as + adj + as."},
  ],
 },
};

const CPPOOL=[];
Object.entries(BANK.form).forEach(([ref,items]) => items.forEach(([b,...acc]) =>
 CPPOOL.push(inQ("form",`<span class="ask">So sánh hơn</span><span class="mono big">${esc(b)}</span> <span class="arrow">→</span> <span class="blank"></span>`,"Gõ dạng so sánh hơn.",acc,ref,`${b} → ${acc.join(" / ")}.`))
));
const chooseList = Object.entries(BANK.choose).flatMap(([ref,items]) => items.map(it => [it.s,it.r,it.w,ref,it.expl]));
mcs(CPPOOL,"choose","Chọn đáp án đúng.",chooseList);
const task1List = Object.entries(BANK.task1).flatMap(([ref,items]) => items.map(it => [it.s,it.r,it.w,ref,it.expl]));
mcs(CPPOOL,"task1","Chọn cách so sánh số liệu đúng.",task1List);
const spotList = Object.entries(BANK.spot).flatMap(([ref,items]) => items.map(it => ["Chọn câu đúng: ___",it.r,it.w,ref,it.expl]));
mcs(CPPOOL,"spot","Chọn câu đúng ngữ pháp.",spotList);

const CPTYPES={form:{name:"Dạng so sánh",desc:"Tự gõ so sánh hơn, có và bất quy tắc"},choose:{name:"Chọn đáp án đúng",desc:"as … as, the more, one of the"},task1:{name:"So sánh số liệu Task 1",desc:"twice as, slightly, respectively, whereas"},spot:{name:"Chọn câu đúng",desc:"Tránh lỗi so sánh hay gặp"}};
const CPCAT=["slightly higher","considerably higher","twice as high","three times as high","as high as","half as high","slightly lower","considerably lower"];
const CPRUSH=[["A = 51 · B = 50",["slightly higher"]],["A = 102 · B = 100",["slightly higher"]],["A = 80 · B = 50",["considerably higher"]],["A = 70 · B = 40",["considerably higher"]],["A = 200 · B = 100",["twice as high"]],["A = 60 · B = 30",["twice as high"]],["A = 90 · B = 30",["three times as high"]],["A = 300 · B = 100",["three times as high"]],["A = 45 · B = 45",["as high as"]],["A = 12 · B = 12",["as high as"]],["A = 25 · B = 50",["half as high"]],["A = 40 · B = 80",["half as high"]],["A = 49 · B = 50",["slightly lower"]],["A = 98 · B = 100",["slightly lower"]],["A = 30 · B = 60",["half as high"]],["A = 40 · B = 70",["considerably lower"]],["A = 20 · B = 45",["considerably lower"]],["A = 150 · B = 50",["three times as high"]],["A = 10 · B = 5",["twice as high"]],["A = 76 · B = 75",["slightly higher"]]];

GRAMMAR.quiz["compare"] = { pool: CPPOOL, types: CPTYPES, game: {title:"Đọc số liệu nhanh",desc:"60 giây. Nhìn hai con số, chọn cách so sánh A với B",prompt:"So với B, A là…",items:CPRUSH,all:CPCAT,label:c=>`<span class="tl-vi mono">${c}</span>`,name:c=>c,bestKey:"cprushBest"} };
})();
