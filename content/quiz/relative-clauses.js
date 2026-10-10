/* content/quiz/relative.js: practice questions and game for this module.
   mcQ(type, prompt, hint, right, [wrong…], lessonId, explanation)
   inQ(type, prompt, hint, [accepted answers], lessonId, explanation) */
(() => {
// ---------- Relative practice (60) ----------
// BANK keyed by lesson ref; each item carries its own `kind` (pron /
// combine / omit / reduce) since this module mixes several builders.
const OM=["Bỏ được (làm tân ngữ)","Không bỏ được (làm chủ ngữ)","Không bỏ được (có dấu phẩy)","Không bỏ được (sau giới từ)"];

const BANK = {
 "rc-who": [
  {kind:"pron",q:"The woman ___ lives next door is a doctor.",right:"who",wrong:["which","whose","where"],expl:"Người, làm chủ ngữ: who."},
  {kind:"pron",q:"The person to ___ I spoke was very polite.",right:"whom",wrong:["who","that","which"],expl:"Sau giới từ, người dùng whom."},
  {kind:"combine",a:"The girl is my cousin. She is singing.",right:"The girl who is singing is my cousin.",wrong:["The girl which is singing is my cousin.","The girl who she is singing is my cousin.","The girl is singing who is my cousin."],expl:"who thay cho She, mệnh đề đứng sau The girl."},
  {kind:"combine",a:"The students passed. They studied hard.",right:"The students who studied hard passed.",wrong:["The students which studied hard passed.","The students, who studied hard passed.","The students who they studied hard passed."],expl:"who thay cho They."},
  {kind:"pron",q:"The children ___ are playing outside are my neighbours' kids.",right:"who",wrong:["which","whose","where"],expl:"Người làm chủ ngữ: who."},
  {kind:"pron",q:"The woman to ___ I gave the keys left early.",right:"whom",wrong:["who","that","which"],expl:"Sau giới từ, người dùng whom."},
  {kind:"combine",a:"The man is my uncle. He is talking to the teacher.",right:"The man who is talking to the teacher is my uncle.",wrong:["The man which is talking to the teacher is my uncle.","The man, who is talking to the teacher is my uncle.","The man who he is talking to the teacher is my uncle."],expl:"who thay cho He."},
 ],
 "rc-which": [
  {kind:"pron",q:"This is the book ___ I told you about.",right:"which",wrong:["who","whose","where"],expl:"Vật, làm tân ngữ: which (hoặc that)."},
  {kind:"pron",q:"He failed the test, ___ upset his parents.",right:"which",wrong:["that","what","who"],expl:", which thay cho cả mệnh đề."},
  {kind:"combine",a:"I lost the watch. My dad gave it to me.",right:"I lost the watch which my dad gave me.",wrong:["I lost the watch which my dad gave it to me.","I lost the watch who my dad gave me.","I lost the watch whose my dad gave me."],expl:"which thay cho it, không lặp lại it."},
  {kind:"pron",q:"I bought a laptop ___ was very expensive.",right:"which",wrong:["who","whose","where"],expl:"Vật làm chủ ngữ: which."},
  {kind:"combine",a:"She gave me a gift. I really loved it.",right:"She gave me a gift which I really loved.",wrong:["She gave me a gift which I really loved it.","She gave me a gift who I really loved.","She gave me a gift whose I really loved."],expl:"which thay cho it, không lặp lại it."},
  {kind:"combine",a:"He lost his job. This surprised everyone.",right:"He lost his job, which surprised everyone.",wrong:["He lost his job that surprised everyone.","He lost his job, that surprised everyone.","He lost his job which surprised everyone,"],expl:", which có thể thay cho cả một mệnh đề/ý trước đó."},
 ],
 "rc-that": [
  {kind:"pron",q:"It's the best phone ___ I've ever bought.",right:"that",wrong:["what","whose","where"],expl:"Sau so sánh nhất dùng that."},
  {kind:"pron",q:"This is the fastest car ___ I've ever driven.",right:"that",wrong:["which","whom","where"],expl:"Sau so sánh nhất (the fastest), thường dùng that."},
  {kind:"pron",q:"The only thing ___ matters now is your health.",right:"that",wrong:["which","who","whose"],expl:"Sau 'the only', thường dùng that."},
  {kind:"pron",q:"Is he the man ___ called you last night?",right:"that",wrong:["whom","whose","where"],expl:"that có thể thay who/which trong mệnh đề xác định."},
  {kind:"pron",q:"I need everything ___ was in that box.",right:"that",wrong:["which","who","whose"],expl:"Sau 'everything/all/nothing', dùng that, không dùng which."},
  {kind:"pron",q:"It was the worst movie ___ I've seen this year.",right:"that",wrong:["which","who","whose"],expl:"Sau so sánh nhất, dùng that."},
 ],
 "rc-whose": [
  {kind:"pron",q:"I met a man ___ son plays for the national team.",right:"whose",wrong:["who","which","whom"],expl:"Sở hữu (his son): whose."},
  {kind:"combine",a:"That's the man. His car was stolen.",right:"That's the man whose car was stolen.",wrong:["That's the man who his car was stolen.","That's the man which car was stolen.","That's the man whom car was stolen."],expl:"whose thay cho His."},
  {kind:"combine",a:"I work for a company. Its products are sold worldwide.",right:"I work for a company whose products are sold worldwide.",wrong:["I work for a company which its products are sold worldwide.","I work for a company who products are sold worldwide.","I work for a company whose its products are sold worldwide."],expl:"whose thay cho Its, dùng được cho vật."},
  {kind:"pron",q:"That's the teacher ___ class I really enjoy.",right:"whose",wrong:["who","which","whom"],expl:"Sở hữu (his/her class): whose."},
  {kind:"combine",a:"We visited a village. Its houses are made of wood.",right:"We visited a village whose houses are made of wood.",wrong:["We visited a village which its houses are made of wood.","We visited a village who houses are made of wood.","We visited a village whose its houses are made of wood."],expl:"whose thay cho Its, dùng được cho vật."},
  {kind:"combine",a:"I know a girl. Her brother is a famous singer.",right:"I know a girl whose brother is a famous singer.",wrong:["I know a girl who her brother is a famous singer.","I know a girl which brother is a famous singer.","I know a girl whom brother is a famous singer."],expl:"whose thay cho Her."},
 ],
 "rc-adverbs": [
  {kind:"pron",q:"Da Nang is the city ___ I was born.",right:"where",wrong:["which","when","who"],expl:"Nơi chốn: where."},
  {kind:"pron",q:"Do you remember the day ___ we first met?",right:"when",wrong:["where","which","who"],expl:"Thời gian: when."},
  {kind:"pron",q:"That's the reason ___ I called you.",right:"why",wrong:["which","where","when"],expl:"the reason why."},
  {kind:"combine",a:"This is the hotel. We stayed there last year.",right:"This is the hotel where we stayed last year.",wrong:["This is the hotel where we stayed there last year.","This is the hotel which we stayed last year.","This is the hotel when we stayed last year."],expl:"where thay cho there, không lặp lại there."},
  {kind:"combine",a:"I'll never forget the summer. I met you then.",right:"I'll never forget the summer when I met you.",wrong:["I'll never forget the summer where I met you.","I'll never forget the summer which I met you.","I'll never forget the summer when I met you then."],expl:"Thời gian: when, bỏ then."},
  {kind:"pron",q:"Tet is the time ___ families get together.",right:"when",wrong:["where","why","who"],expl:"Thời gian: when."},
  {kind:"combine",a:"This is the restaurant. We had our first date there.",right:"This is the restaurant where we had our first date.",wrong:["This is the restaurant where we had our first date there.","This is the restaurant which we had our first date.","This is the restaurant when we had our first date."],expl:"where thay cho there, không lặp lại there."},
  {kind:"combine",a:"I don't know the reason. He quit his job for that reason.",right:"I don't know the reason why he quit his job.",wrong:["I don't know the reason which he quit his job.","I don't know the reason where he quit his job.","I don't know the reason why he quit his job for that reason."],expl:"the reason why, không lặp lại cụm chỉ lý do."},
 ],
 "rc-defining": [
  {kind:"pron",q:"My father, ___ is 60, still goes jogging.",right:"who",wrong:["that","which","whose"],expl:"Sau dấu phẩy không dùng that; người dùng who."},
  {kind:"combine",a:"Hanoi is the capital of Vietnam. It has many lakes.",right:"Hanoi, which has many lakes, is the capital of Vietnam.",wrong:["Hanoi that has many lakes is the capital of Vietnam.","Hanoi, that has many lakes, is the capital of Vietnam.","Hanoi which has many lakes is the capital of Vietnam."],expl:"Tên riêng: dấu phẩy + which."},
  {kind:"combine",a:"My mother is a teacher. You met her yesterday.",right:"My mother, whom you met yesterday, is a teacher.",wrong:["My mother that you met yesterday is a teacher.","My mother, who you met her yesterday, is a teacher.","My mother, whose you met yesterday, is a teacher."],expl:"my mother là duy nhất: dấu phẩy, whom làm tân ngữ."},
  {kind:"pron",q:"The man, ___ you met at the party, is my boss.",right:"whom",wrong:["that","which","whose"],expl:"Có dấu phẩy (không xác định): không dùng that; người làm tân ngữ dùng whom."},
  {kind:"combine",a:"Vietnam is a beautiful country. It has a long coastline.",right:"Vietnam, which has a long coastline, is a beautiful country.",wrong:["Vietnam that has a long coastline is a beautiful country.","Vietnam, that has a long coastline, is a beautiful country.","Vietnam which has a long coastline is a beautiful country."],expl:"Tên riêng/duy nhất: dùng dấu phẩy + which, không bỏ dấu phẩy."},
  {kind:"combine",a:"My brother is a doctor. He works in London.",right:"My brother, who works in London, is a doctor.",wrong:["My brother who works in London is a doctor.","My brother, that works in London, is a doctor.","My brother, who he works in London, is a doctor."],expl:"'my brother' chỉ có một người: cần dấu phẩy (không xác định), không dùng that."},
 ],
 "rc-omit": [
  {kind:"combine",a:"He is the only person. He knows the answer.",right:"He is the only person who knows the answer.",wrong:["He is the only person which knows the answer.","He is the only person knows the answer.","He is the only person whose knows the answer."],expl:"Đại từ làm chủ ngữ không được bỏ."},
  {kind:"omit",q:"The film **that** we watched was boring.",k:0},
  {kind:"omit",q:"The man **who** called you is here.",k:1},
  {kind:"omit",q:"My car, **which** I bought last year, is red.",k:2},
  {kind:"omit",q:"The house in **which** I grew up is old.",k:3},
  {kind:"omit",q:"The girl **who** I like is in my class.",k:0},
  {kind:"omit",q:"The bus **which** goes to the airport is late.",k:1},
  {kind:"omit",q:"Mr Hai, **whom** we invited, didn't come.",k:2},
  {kind:"omit",q:"Is this the song **that** you wrote?",k:0},
  {kind:"omit",q:"The dog **that** bit me was huge.",k:1},
  {kind:"omit",q:"The person to **whom** I sent the email replied.",k:3},
 ],
 "rc-reduced": [
  {kind:"reduce",a:"The man who is standing over there is my boss.",r:"The man standing over there is my boss.",key:"standing",ws:["stood","is standing","to stand"]},
  {kind:"reduce",a:"The cars which are made in Japan are reliable.",r:"The cars made in Japan are reliable.",key:"made",ws:["making","which made","to make"]},
  {kind:"reduce",a:"She was the first person who arrived.",r:"She was the first person to arrive.",key:"to arrive",ws:["arrived","arriving","who arrive"]},
  {kind:"reduce",a:"Students who want to join should sign up.",r:"Students wanting to join should sign up.",key:"wanting",ws:["wanted","to want","want"]},
  {kind:"reduce",a:"The letter which was sent yesterday arrived today.",r:"The letter sent yesterday arrived today.",key:"sent",ws:["sending","was sent","to send"]},
  {kind:"reduce",a:"The girl who sits next to me is Lan.",r:"The girl sitting next to me is Lan.",key:"sitting",ws:["sat","sits","to sit"]},
  {kind:"reduce",a:"He was the last one who left the office.",r:"He was the last one to leave the office.",key:"to leave",ws:["leaving","left","to leaving"]},
  {kind:"reduce",a:"The houses which were built in 1990 are old.",r:"The houses built in 1990 are old.",key:"built",ws:["building","were built","to build"]},
  {kind:"reduce",a:"People who live here are friendly.",r:"People living here are friendly.",key:"living",ws:["lived","to live","live"]},
  {kind:"reduce",a:"The book which was written by Nam Cao is famous.",r:"The book written by Nam Cao is famous.",key:"written",ws:["writing","wrote","to write"]},
 ],
};

const RCTYPES={pron:{name:"Chọn đại từ quan hệ",desc:"who, whom, which, that, whose, where, when, why"},combine:{name:"Nối hai câu",desc:"Gộp hai câu bằng mệnh đề quan hệ"},omit:{name:"Bỏ được hay không?",desc:"Lược bỏ đại từ quan hệ"},reduce:{name:"Rút gọn mệnh đề",desc:"V-ing, V3, to V"}};

const RCPOOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => {
 if (it.kind === "pron") RCPOOL.push(mcQ("pron",fmt(it.q),"Chọn đại từ quan hệ đúng.",it.right,it.wrong,ref,it.expl,true));
 else if (it.kind === "combine") RCPOOL.push(mcQ("combine",ask("Nối thành một câu",it.a),"Chọn câu nối đúng.",it.right,it.wrong,ref,it.expl));
 else if (it.kind === "omit") RCPOOL.push(mcQ("omit",fmt(it.q),"Có bỏ được đại từ quan hệ được gạch chân không?",OM[it.k],OM.filter((_,i)=>i!==it.k),ref,it.k===0?"Sau đại từ là một chủ ngữ khác, đại từ làm tân ngữ nên bỏ được.":"Đại từ phải giữ lại: "+OM[it.k].replace("Không bỏ được ","")+"."));
 else if (it.kind === "reduce") RCPOOL.push(mcQ("reduce",ask("Rút gọn mệnh đề quan hệ",it.a),"Chọn câu rút gọn đúng.",it.r,it.ws.map(x=>it.r.replace(it.key,x)),ref,it.key.startsWith("to ")?"Sau the first / the last dùng to V.":/ing$/.test(it.key)?"Mệnh đề chủ động rút gọn thành V-ing.":"Mệnh đề bị động rút gọn thành V3."));
}));

const RCRUSH=[["the girl ___ won the prize",["who","that"]],["the phone ___ I bought",["which","that"]],["the man ___ car was stolen",["whose"]],["the city ___ I was born",["where"]],["the day ___ we met",["when"]],["the reason ___ she left",["why"]],["my mother, ___ is a nurse,",["who"]],["the book, ___ I read twice,",["which"]],["the person to ___ I spoke",["whom"]],["the best film ___ I've ever seen",["that"]],["the hotel ___ we stayed",["where"]],["the year ___ I graduated",["when"]],["a friend ___ dad is a pilot",["whose"]],["the dog ___ barks all night",["which","that"]],["He was late, ___ annoyed me.",["which"]],["the students ___ passed the exam",["who","that"]],["the house in ___ I grew up",["which"]],["the only thing ___ matters",["that","which"]],["a company ___ products are popular",["whose"]],["the café ___ we first met",["where"]],["the moment ___ I saw her",["when"]],["Lan, ___ you met yesterday,",["who","whom"]],["the reason ___ I'm calling",["why"]],["the man ___ lives next door",["who","that"]]];

GRAMMAR.quiz["relative"] = { pool: RCPOOL, types: RCTYPES, game: {title:"Điền đại từ nhanh",desc:"60 giây. Chọn đúng who, which, whose, where… cho chỗ trống",prompt:"Chọn đại từ quan hệ cho chỗ trống",sentence:true,items:RCRUSH,all:["who","whom","which","that","whose","where","when","why"],label:c=>`<span class="tl-vi mono">${c}</span>`,name:c=>c,bestKey:"rcrushBest"} };
})();
