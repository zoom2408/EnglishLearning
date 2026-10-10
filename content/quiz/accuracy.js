/* content/quiz/accuracy.js: practice questions and game for this module.
   mcQ(type, prompt, hint, right, [wrong…], lessonId, explanation)
   inQ(type, prompt, hint, [accepted answers], lessonId, explanation) */
(() => {
// ---- Accuracy practice (60) ----
// BANK keyed by question-type then lesson ref; each flattens back into
// the tuples mcs already expects — no helper changes. Also adds a new
// "hedge" type for the ac-hedging lesson, which previously had no quiz
// coverage at all.
const BANK = {
 art: {
  "ac-articles": [
   {s:"___ technology has changed the way we live.",r:"Ø",w:["The","A","An"],expl:"Nói chung chung: không dùng mạo từ."},
   {s:"She is ___ engineer at a bank.",r:"an",w:["a","the","Ø"],expl:"Nghề nghiệp, bắt đầu bằng nguyên âm: an."},
   {s:"I bought a book. ___ book was very cheap.",r:"The",w:["A","An","Ø"],expl:"Nhắc lại thứ đã biết: the."},
   {s:"___ sun rises in the east.",r:"The",w:["A","Ø","An"],expl:"Thứ duy nhất: the."},
   {s:"We should help ___ elderly.",r:"the",w:["Ø","an","a"],expl:"the + adj chỉ nhóm người."},
   {s:"He lives in ___ United Kingdom.",r:"the",w:["Ø","a","an"],expl:"Tên nước có Kingdom, States: the."},
   {s:"___ children need a lot of sleep.",r:"Ø",w:["The","A","An"],expl:"Nói chung về trẻ em: không mạo từ."},
   {s:"It was ___ honour to meet you.",r:"an",w:["a","the","Ø"],expl:"honour đọc bắt đầu bằng nguyên âm: an."},
   {s:"She plays ___ piano very well.",r:"the",w:["a","Ø","an"],expl:"Chơi nhạc cụ: the."},
   {s:"I usually have ___ breakfast at 7.",r:"Ø",w:["the","a","an"],expl:"Bữa ăn nói chung: không mạo từ."},
  ],
 },
 count: {
  "ac-countable": [
   {s:"Can you give me some ___?",r:"information",w:["informations","an information","many information"],expl:"information không đếm được."},
   {s:"She gave me a useful piece of ___.",r:"advice",w:["advices","an advice","advise"],expl:"a piece of advice."},
   {s:"There isn't ___ traffic today.",r:"much",w:["many","a few","a number of"],expl:"traffic không đếm được: much."},
   {s:"___ students failed the test.",r:"A number of",w:["An amount of","Much","A little"],expl:"students đếm được: a number of."},
   {s:"We need new office ___.",r:"equipment",w:["equipments","an equipment","many equipment"],expl:"equipment không đếm được."},
   {s:"They spent a large ___ of money.",r:"amount",w:["number","many","few"],expl:"money: an amount of."},
   {s:"I have ___ homework tonight.",r:"a lot of",w:["many","a homework","homeworks"],expl:"homework không đếm được."},
   {s:"There are ___ people in the room.",r:"a few",w:["a little","much","an amount of"],expl:"people đếm được: a few."},
   {s:"Recent ___ shows that sleep matters.",r:"research",w:["researches","a research","many researches"],expl:"research thường không đếm được."},
   {s:"The ___ is good today.",r:"news",w:["new","a news","newses"],expl:"news không đếm được, động từ số ít."},
  ],
 },
 ger: {
  "ac-gerund": [
   {s:"I enjoy ___ to music.",r:"listening",w:["to listen","listen","listened"],expl:"enjoy + V-ing."},
   {s:"She decided ___ abroad.",r:"to study",w:["studying","study","studied"],expl:"decide + to V."},
   {s:"I look forward to ___ from you.",r:"hearing",w:["hear","to hear","heard"],expl:"look forward to + V-ing."},
   {s:"He suggested ___ a taxi.",r:"taking",w:["to take","take","us to take"],expl:"suggest + V-ing."},
   {s:"We can't afford ___ a new car.",r:"to buy",w:["buying","buy","bought"],expl:"afford + to V."},
   {s:"Please remember ___ the door when you leave.",r:"to lock",w:["locking","lock","locked"],expl:"remember to V: nhớ để làm (việc chưa làm)."},
   {s:"I remember ___ him at the party last year.",r:"meeting",w:["to meet","meet","met"],expl:"remember V-ing: nhớ đã làm."},
   {s:"He stopped ___ two years ago and feels healthier.",r:"smoking",w:["to smoke","smoke","smoked"],expl:"stop V-ing: bỏ hẳn."},
   {s:"Avoid ___ too much sugar.",r:"eating",w:["to eat","eat","ate"],expl:"avoid + V-ing."},
   {s:"She is interested in ___ a business.",r:"starting",w:["to start","start","started"],expl:"giới từ + V-ing."},
  ],
 },
 agree: {
  "ac-agreement": [
   {s:"The number of students ___ increasing.",r:"is",w:["are","were","have"],expl:"The number of: số ít."},
   {s:"A number of students ___ absent today.",r:"are",w:["is","was","has"],expl:"A number of: số nhiều."},
   {s:"Everyone ___ a smartphone these days.",r:"has",w:["have","are having","haven't"],expl:"Everyone: số ít."},
   {s:"One of my friends ___ in Hue.",r:"lives",w:["live","are living","have lived"],expl:"One of: số ít."},
   {s:"The information ___ very useful.",r:"was",w:["were","are","have been"],expl:"Không đếm được: số ít."},
   {s:"Each country ___ its own culture.",r:"has",w:["have","are having","were"],expl:"Each: số ít."},
   {s:"The people in my office ___ friendly.",r:"are",w:["is","was","has"],expl:"people: số nhiều."},
   {s:"Neither the teacher nor the students ___ ready.",r:"were",w:["was","is","has"],expl:"neither … nor: chia theo danh từ gần nhất (students)."},
   {s:"The majority of the students ___ happy with the new schedule.",r:"are",w:["is","was","has"],expl:"the majority of + N số nhiều: chia theo N."},
   {s:"Mathematics ___ my favorite subject at school.",r:"is",w:["are","were","have"],expl:"Tên môn học có -s nhưng chia số ít: Mathematics is."},
  ],
  "ac-there": [
   {s:"There ___ many parks in my city.",r:"are",w:["is","has","have"],expl:"There are + N số nhiều."},
   {s:"My city ___ a lot of street food.",r:"has",w:["have","there is","is having"],expl:"Chủ ngữ số ít + has."},
   {s:"There ___ a lot of traffic in the morning.",r:"is",w:["are","has","have"],expl:"traffic không đếm được: there is."},
   {s:"There ___ several good restaurants near here.",r:"are",w:["is","has","have"],expl:"There are + N số nhiều."},
   {s:"There ___ a problem with the printer.",r:"is",w:["are","has","have"],expl:"There is + N số ít."},
   {s:"There ___ a lot of people at the concert.",r:"were",w:["was","has been","have"],expl:"There were + N số nhiều (quá khứ)."},
   {s:"My company ___ over 200 employees.",r:"has",w:["have","there is","there are"],expl:"Chủ ngữ số ít + has."},
   {s:"There ___ no easy solution to this problem.",r:"is",w:["are","has","have"],expl:"There is + N số ít, không đếm được."},
   {s:"There ___ a lot of information online about this topic.",r:"is",w:["are","has","have"],expl:"information không đếm được: there is."},
   {s:"This city ___ a famous night market.",r:"has",w:["have","there is","there are"],expl:"Chủ ngữ số ít + has."},
  ],
 },
 hedge: {
  "ac-hedging": [
   {s:"This policy ___ increase costs in the short term.",r:"may",w:["must","will certainly","always"],expl:"Hedging với modal: may/might/could + V."},
   {s:"Students ___ perform better with less screen time.",r:"tend to",w:["always","never","must"],expl:"tend to + V: xu hướng chung, không khẳng định tuyệt đối."},
   {s:"Public transport is ___ the most practical solution.",r:"arguably",w:["definitely","certainly","always"],expl:"arguably: nói giảm, có thể tranh luận."},
   {s:"___ that remote work reduces productivity for some employees.",r:"It could be argued",w:["It is certain","Everyone agrees","It is proven"],expl:"It could be argued that: hedging mở đầu lập luận."},
   {s:"Young people ___ to prefer online shopping nowadays.",r:"appear",w:["must","always","definitely"],expl:"appear to + V: có vẻ như, không khẳng định chắc."},
   {s:"This approach is, ___, more effective than traditional methods.",r:"to some extent",w:["completely","always","never"],expl:"to some extent: ở một mức độ nào đó, không tuyệt đối."},
   {s:"It is ___ that the new policy will reduce traffic.",r:"likely",w:["certain","proven","guaranteed"],expl:"It is likely that: khả năng cao, không khẳng định tuyệt đối."},
   {s:"Rising costs ___ lead to higher prices for consumers.",r:"may",w:["will definitely","must","always"],expl:"may + V: khả năng, tránh khẳng định tuyệt đối."},
   {s:"Many experts ___ that social media affects mental health.",r:"seem to agree",w:["always agree","are certain","prove"],expl:"seem to + V: dường như, hedging."},
   {s:"___, this method saves both time and money.",r:"Generally",w:["Always","Never","Definitely"],expl:"Generally: nói chung, không phải tuyệt đối trong mọi trường hợp."},
  ],
 },
};

const ACPOOL=[];
const artList = Object.entries(BANK.art).flatMap(([ref,items]) => items.map(it => [it.s,it.r,it.w,ref,it.expl]));
mcs(ACPOOL,"art","Chọn mạo từ đúng (Ø = không dùng mạo từ).",artList);
const countList = Object.entries(BANK.count).flatMap(([ref,items]) => items.map(it => [it.s,it.r,it.w,ref,it.expl]));
mcs(ACPOOL,"count","Chọn đáp án đúng.",countList);
const gerList = Object.entries(BANK.ger).flatMap(([ref,items]) => items.map(it => [it.s,it.r,it.w,ref,it.expl]));
mcs(ACPOOL,"ger","Chọn dạng động từ đúng.",gerList);
const agreeList = Object.entries(BANK.agree).flatMap(([ref,items]) => items.map(it => [it.s,it.r,it.w,ref,it.expl]));
mcs(ACPOOL,"agree","Chọn động từ đúng.",agreeList);
const hedgeList = Object.entries(BANK.hedge).flatMap(([ref,items]) => items.map(it => [it.s,it.r,it.w,ref,it.expl]));
mcs(ACPOOL,"hedge","Chọn cách nói giảm, thận trọng đúng.",hedgeList);

const ACTYPES={art:{name:"Mạo từ",desc:"a, an, the hay không dùng"},count:{name:"Đếm được, không đếm được",desc:"information, advice, much, many"},ger:{name:"V-ing hay to V",desc:"enjoy doing, decide to do, remember"},agree:{name:"Hòa hợp chủ vị",desc:"The number of, everyone, There is / are"},hedge:{name:"Hedging",desc:"may, tend to, arguably, it could be argued"}};
const GI=["V-ing","to V","cả hai, đổi nghĩa","cả hai, không đổi nghĩa"];
const ACRUSH=[["enjoy",[GI[0]]],["avoid",[GI[0]]],["finish",[GI[0]]],["mind",[GI[0]]],["suggest",[GI[0]]],["consider",[GI[0]]],["keep",[GI[0]]],["deny",[GI[0]]],["admit",[GI[0]]],["practise",[GI[0]]],["look forward to",[GI[0]]],["want",[GI[1]]],["decide",[GI[1]]],["plan",[GI[1]]],["hope",[GI[1]]],["agree",[GI[1]]],["refuse",[GI[1]]],["promise",[GI[1]]],["afford",[GI[1]]],["manage",[GI[1]]],["stop",[GI[2]]],["remember",[GI[2]]],["forget",[GI[2]]],["try",[GI[2]]],["regret",[GI[2]]],["like",[GI[3]]],["love",[GI[3]]],["start",[GI[3]]],["begin",[GI[3]]],["continue",[GI[3]]]];

GRAMMAR.quiz["accuracy"] = { pool: ACPOOL, types: ACTYPES, game: {title:"V-ing hay to V?",desc:"60 giây. Thấy động từ, chọn dạng đi sau nó",prompt:"Sau động từ này dùng gì?",items:ACRUSH,all:GI,label:c=>`<span class="tl-vi">${c}</span>`,name:c=>c,bestKey:"acrushBest"} };
})();
