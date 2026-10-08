/* content/quiz/accuracy.js: practice questions and game for this module.
   mcQ(type, prompt, hint, right, [wrong…], lessonId, explanation)
   inQ(type, prompt, hint, [accepted answers], lessonId, explanation) */
(() => {
// ---- Accuracy practice (40) ----
const ACPOOL=[];
mcs(ACPOOL,"art","Chọn mạo từ đúng (Ø = không dùng mạo từ).",[
 ["___ technology has changed the way we live.","Ø",["The","A","An"],"ac-articles","Nói chung chung: không dùng mạo từ."],
 ["She is ___ engineer at a bank.","an",["a","the","Ø"],"ac-articles","Nghề nghiệp, bắt đầu bằng nguyên âm: an."],
 ["I bought a book. ___ book was very cheap.","The",["A","An","Ø"],"ac-articles","Nhắc lại thứ đã biết: the."],
 ["___ sun rises in the east.","The",["A","Ø","An"],"ac-articles","Thứ duy nhất: the."],
 ["We should help ___ elderly.","the",["Ø","an","a"],"ac-articles","the + adj chỉ nhóm người."],
 ["He lives in ___ United Kingdom.","the",["Ø","a","an"],"ac-articles","Tên nước có Kingdom, States: the."],
 ["___ children need a lot of sleep.","Ø",["The","A","An"],"ac-articles","Nói chung về trẻ em: không mạo từ."],
 ["It was ___ honour to meet you.","an",["a","the","Ø"],"ac-articles","honour đọc bắt đầu bằng nguyên âm: an."],
 ["She plays ___ piano very well.","the",["a","Ø","an"],"ac-articles","Chơi nhạc cụ: the."],
 ["I usually have ___ breakfast at 7.","Ø",["the","a","an"],"ac-articles","Bữa ăn nói chung: không mạo từ."]]);
mcs(ACPOOL,"count","Chọn đáp án đúng.",[
 ["Can you give me some ___?","information",["informations","an information","many information"],"ac-countable","information không đếm được."],
 ["She gave me a useful piece of ___.","advice",["advices","an advice","advise"],"ac-countable","a piece of advice."],
 ["There isn't ___ traffic today.","much",["many","a few","a number of"],"ac-countable","traffic không đếm được: much."],
 ["___ students failed the test.","A number of",["An amount of","Much","A little"],"ac-countable","students đếm được: a number of."],
 ["We need new office ___.","equipment",["equipments","an equipment","many equipment"],"ac-countable","equipment không đếm được."],
 ["They spent a large ___ of money.","amount",["number","many","few"],"ac-countable","money: an amount of."],
 ["I have ___ homework tonight.","a lot of",["many","a homework","homeworks"],"ac-countable","homework không đếm được."],
 ["There are ___ people in the room.","a few",["a little","much","an amount of"],"ac-countable","people đếm được: a few."],
 ["Recent ___ shows that sleep matters.","research",["researches","a research","many researches"],"ac-countable","research thường không đếm được."],
 ["The ___ is good today.","news",["new","a news","newses"],"ac-countable","news không đếm được, động từ số ít."]]);
mcs(ACPOOL,"ger","Chọn dạng động từ đúng.",[
 ["I enjoy ___ to music.","listening",["to listen","listen","listened"],"ac-gerund","enjoy + V-ing."],
 ["She decided ___ abroad.","to study",["studying","study","studied"],"ac-gerund","decide + to V."],
 ["I look forward to ___ from you.","hearing",["hear","to hear","heard"],"ac-gerund","look forward to + V-ing."],
 ["He suggested ___ a taxi.","taking",["to take","take","us to take"],"ac-gerund","suggest + V-ing."],
 ["We can't afford ___ a new car.","to buy",["buying","buy","bought"],"ac-gerund","afford + to V."],
 ["Please remember ___ the door when you leave.","to lock",["locking","lock","locked"],"ac-gerund","remember to V: nhớ để làm (việc chưa làm)."],
 ["I remember ___ him at the party last year.","meeting",["to meet","meet","met"],"ac-gerund","remember V-ing: nhớ đã làm."],
 ["He stopped ___ two years ago and feels healthier.","smoking",["to smoke","smoke","smoked"],"ac-gerund","stop V-ing: bỏ hẳn."],
 ["Avoid ___ too much sugar.","eating",["to eat","eat","ate"],"ac-gerund","avoid + V-ing."],
 ["She is interested in ___ a business.","starting",["to start","start","started"],"ac-gerund","giới từ + V-ing."]]);
mcs(ACPOOL,"agree","Chọn động từ đúng.",[
 ["The number of students ___ increasing.","is",["are","were","have"],"ac-agreement","The number of: số ít."],
 ["A number of students ___ absent today.","are",["is","was","has"],"ac-agreement","A number of: số nhiều."],
 ["Everyone ___ a smartphone these days.","has",["have","are having","haven't"],"ac-agreement","Everyone: số ít."],
 ["One of my friends ___ in Hue.","lives",["live","are living","have lived"],"ac-agreement","One of: số ít."],
 ["The information ___ very useful.","was",["were","are","have been"],"ac-agreement","Không đếm được: số ít."],
 ["Each country ___ its own culture.","has",["have","are having","were"],"ac-agreement","Each: số ít."],
 ["There ___ many parks in my city.","are",["is","has","have"],"ac-there","There are + N số nhiều."],
 ["My city ___ a lot of street food.","has",["have","there is","is having"],"ac-there","Chủ ngữ số ít + has."],
 ["The people in my office ___ friendly.","are",["is","was","has"],"ac-agreement","people: số nhiều."],
 ["Neither the teacher nor the students ___ ready.","were",["was","is","has"],"ac-agreement","neither … nor: chia theo danh từ gần nhất (students)."]]);
const ACTYPES={art:{name:"Mạo từ",desc:"a, an, the hay không dùng"},count:{name:"Đếm được, không đếm được",desc:"information, advice, much, many"},ger:{name:"V-ing hay to V",desc:"enjoy doing, decide to do, remember"},agree:{name:"Hòa hợp chủ vị",desc:"The number of, everyone, There is / are"}};
const GI=["V-ing","to V","cả hai, đổi nghĩa","cả hai, không đổi nghĩa"];
const ACRUSH=[["enjoy",[GI[0]]],["avoid",[GI[0]]],["finish",[GI[0]]],["mind",[GI[0]]],["suggest",[GI[0]]],["consider",[GI[0]]],["keep",[GI[0]]],["deny",[GI[0]]],["admit",[GI[0]]],["practise",[GI[0]]],["look forward to",[GI[0]]],["want",[GI[1]]],["decide",[GI[1]]],["plan",[GI[1]]],["hope",[GI[1]]],["agree",[GI[1]]],["refuse",[GI[1]]],["promise",[GI[1]]],["afford",[GI[1]]],["manage",[GI[1]]],["stop",[GI[2]]],["remember",[GI[2]]],["forget",[GI[2]]],["try",[GI[2]]],["regret",[GI[2]]],["like",[GI[3]]],["love",[GI[3]]],["start",[GI[3]]],["begin",[GI[3]]],["continue",[GI[3]]]];

GRAMMAR.quiz["accuracy"] = { pool: ACPOOL, types: ACTYPES, game: {title:"V-ing hay to V?",desc:"60 giây. Thấy động từ, chọn dạng đi sau nó",prompt:"Sau động từ này dùng gì?",items:ACRUSH,all:GI,label:c=>`<span class="tl-vi">${c}</span>`,name:c=>c,bestKey:"acrushBest"} };
})();
