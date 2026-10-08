/* content/quiz/relative.js: practice questions and game for this module.
   mcQ(type, prompt, hint, right, [wrong…], lessonId, explanation)
   inQ(type, prompt, hint, [accepted answers], lessonId, explanation) */
(() => {
// ---------- Relative practice (40) ----------
const RCPOOL=[];
[["The woman ___ lives next door is a doctor.","who",["which","whose","where"],"rc-who","Người, làm chủ ngữ: who."],
 ["This is the book ___ I told you about.","which",["who","whose","where"],"rc-which","Vật, làm tân ngữ: which (hoặc that)."],
 ["I met a man ___ son plays for the national team.","whose",["who","which","whom"],"rc-whose","Sở hữu (his son): whose."],
 ["Da Nang is the city ___ I was born.","where",["which","when","who"],"rc-adverbs","Nơi chốn: where."],
 ["Do you remember the day ___ we first met?","when",["where","which","who"],"rc-adverbs","Thời gian: when."],
 ["That's the reason ___ I called you.","why",["which","where","when"],"rc-adverbs","the reason why."],
 ["My father, ___ is 60, still goes jogging.","who",["that","which","whose"],"rc-defining","Sau dấu phẩy không dùng that; người dùng who."],
 ["He failed the test, ___ upset his parents.","which",["that","what","who"],"rc-which",", which thay cho cả mệnh đề."],
 ["It's the best phone ___ I've ever bought.","that",["what","whose","where"],"rc-that","Sau so sánh nhất dùng that."],
 ["The person to ___ I spoke was very polite.","whom",["who","that","which"],"rc-who","Sau giới từ, người dùng whom."],
].forEach(([s,r,w,ref,ex])=>RCPOOL.push(mcQ("pron",fmt(s),"Chọn đại từ quan hệ đúng.",r,w,ref,ex,true)));
[["The girl is my cousin. She is singing.","The girl who is singing is my cousin.",["The girl which is singing is my cousin.","The girl who she is singing is my cousin.","The girl is singing who is my cousin."],"rc-who","who thay cho She, mệnh đề đứng sau The girl."],
 ["I lost the watch. My dad gave it to me.","I lost the watch which my dad gave me.",["I lost the watch which my dad gave it to me.","I lost the watch who my dad gave me.","I lost the watch whose my dad gave me."],"rc-which","which thay cho it, không lặp lại it."],
 ["That's the man. His car was stolen.","That's the man whose car was stolen.",["That's the man who his car was stolen.","That's the man which car was stolen.","That's the man whom car was stolen."],"rc-whose","whose thay cho His."],
 ["This is the hotel. We stayed there last year.","This is the hotel where we stayed last year.",["This is the hotel where we stayed there last year.","This is the hotel which we stayed last year.","This is the hotel when we stayed last year."],"rc-adverbs","where thay cho there, không lặp lại there."],
 ["Hanoi is the capital of Vietnam. It has many lakes.","Hanoi, which has many lakes, is the capital of Vietnam.",["Hanoi that has many lakes is the capital of Vietnam.","Hanoi, that has many lakes, is the capital of Vietnam.","Hanoi which has many lakes is the capital of Vietnam."],"rc-defining","Tên riêng: dấu phẩy + which."],
 ["I'll never forget the summer. I met you then.","I'll never forget the summer when I met you.",["I'll never forget the summer where I met you.","I'll never forget the summer which I met you.","I'll never forget the summer when I met you then."],"rc-adverbs","Thời gian: when, bỏ then."],
 ["The students passed. They studied hard.","The students who studied hard passed.",["The students which studied hard passed.","The students, who studied hard passed.","The students who they studied hard passed."],"rc-who","who thay cho They."],
 ["My mother is a teacher. You met her yesterday.","My mother, whom you met yesterday, is a teacher.",["My mother that you met yesterday is a teacher.","My mother, who you met her yesterday, is a teacher.","My mother, whose you met yesterday, is a teacher."],"rc-defining","my mother là duy nhất: dấu phẩy, whom làm tân ngữ."],
 ["He is the only person. He knows the answer.","He is the only person who knows the answer.",["He is the only person which knows the answer.","He is the only person knows the answer.","He is the only person whose knows the answer."],"rc-omit","Đại từ làm chủ ngữ không được bỏ."],
 ["I work for a company. Its products are sold worldwide.","I work for a company whose products are sold worldwide.",["I work for a company which its products are sold worldwide.","I work for a company who products are sold worldwide.","I work for a company whose its products are sold worldwide."],"rc-whose","whose thay cho Its, dùng được cho vật."],
].forEach(([a,r,w,ref,ex])=>RCPOOL.push(mcQ("combine",ask("Nối thành một câu",a),"Chọn câu nối đúng.",r,w,ref,ex)));
const OM=["Bỏ được (làm tân ngữ)","Không bỏ được (làm chủ ngữ)","Không bỏ được (có dấu phẩy)","Không bỏ được (sau giới từ)"];
[["The film **that** we watched was boring.",0],["The man **who** called you is here.",1],["My car, **which** I bought last year, is red.",2],["The house in **which** I grew up is old.",3],["The girl **who** I like is in my class.",0],["The bus **which** goes to the airport is late.",1],["Mr Hai, **whom** we invited, didn't come.",2],["Is this the song **that** you wrote?",0],["The dog **that** bit me was huge.",1],["The person to **whom** I sent the email replied.",3]]
 .forEach(([s,k])=>RCPOOL.push(mcQ("omit",fmt(s),"Có bỏ được đại từ quan hệ được gạch chân không?",OM[k],OM.filter((_,i)=>i!==k),"rc-omit",k===0?"Sau đại từ là một chủ ngữ khác, đại từ làm tân ngữ nên bỏ được.":"Đại từ phải giữ lại: "+OM[k].replace("Không bỏ được ","")+".")));
[["The man who is standing over there is my boss.","The man standing over there is my boss.","standing",["stood","is standing","to stand"]],
 ["The cars which are made in Japan are reliable.","The cars made in Japan are reliable.","made",["making","which made","to make"]],
 ["She was the first person who arrived.","She was the first person to arrive.","to arrive",["arrived","arriving","who arrive"]],
 ["Students who want to join should sign up.","Students wanting to join should sign up.","wanting",["wanted","to want","want"]],
 ["The letter which was sent yesterday arrived today.","The letter sent yesterday arrived today.","sent",["sending","was sent","to send"]],
 ["The girl who sits next to me is Lan.","The girl sitting next to me is Lan.","sitting",["sat","sits","to sit"]],
 ["He was the last one who left the office.","He was the last one to leave the office.","to leave",["leaving","left","to leaving"]],
 ["The houses which were built in 1990 are old.","The houses built in 1990 are old.","built",["building","were built","to build"]],
 ["People who live here are friendly.","People living here are friendly.","living",["lived","to live","live"]],
 ["The book which was written by Nam Cao is famous.","The book written by Nam Cao is famous.","written",["writing","wrote","to write"]],
].forEach(([a,r,key,ws])=>RCPOOL.push(mcQ("reduce",ask("Rút gọn mệnh đề quan hệ",a),"Chọn câu rút gọn đúng.",r,ws.map(x=>r.replace(key,x)),"rc-reduced",key.startsWith("to ")?"Sau the first / the last dùng to V.":/ing$/.test(key)?"Mệnh đề chủ động rút gọn thành V-ing.":"Mệnh đề bị động rút gọn thành V3.")));
const RCTYPES={pron:{name:"Chọn đại từ quan hệ",desc:"who, whom, which, that, whose, where, when, why"},combine:{name:"Nối hai câu",desc:"Gộp hai câu bằng mệnh đề quan hệ"},omit:{name:"Bỏ được hay không?",desc:"Lược bỏ đại từ quan hệ"},reduce:{name:"Rút gọn mệnh đề",desc:"V-ing, V3, to V"}};
const RCRUSH=[["the girl ___ won the prize",["who","that"]],["the phone ___ I bought",["which","that"]],["the man ___ car was stolen",["whose"]],["the city ___ I was born",["where"]],["the day ___ we met",["when"]],["the reason ___ she left",["why"]],["my mother, ___ is a nurse,",["who"]],["the book, ___ I read twice,",["which"]],["the person to ___ I spoke",["whom"]],["the best film ___ I've ever seen",["that"]],["the hotel ___ we stayed",["where"]],["the year ___ I graduated",["when"]],["a friend ___ dad is a pilot",["whose"]],["the dog ___ barks all night",["which","that"]],["He was late, ___ annoyed me.",["which"]],["the students ___ passed the exam",["who","that"]],["the house in ___ I grew up",["which"]],["the only thing ___ matters",["that","which"]],["a company ___ products are popular",["whose"]],["the café ___ we first met",["where"]],["the moment ___ I saw her",["when"]],["Lan, ___ you met yesterday,",["who","whom"]],["the reason ___ I'm calling",["why"]],["the man ___ lives next door",["who","that"]]];

GRAMMAR.quiz["relative"] = { pool: RCPOOL, types: RCTYPES, game: {title:"Điền đại từ nhanh",desc:"60 giây. Chọn đúng who, which, whose, where… cho chỗ trống",prompt:"Chọn đại từ quan hệ cho chỗ trống",sentence:true,items:RCRUSH,all:["who","whom","which","that","whose","where","when","why"],label:c=>`<span class="tl-vi mono">${c}</span>`,name:c=>c,bestKey:"rcrushBest"} };
})();
