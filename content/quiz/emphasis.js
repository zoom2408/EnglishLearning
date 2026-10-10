/* content/quiz/emphasis.js: practice questions and game for this module.
   mcQ(type, prompt, hint, right, [wrong…], lessonId, explanation)
   inQ(type, prompt, hint, [accepted answers], lessonId, explanation) */
(() => {
// ---- Emphasis practice (60) ----
// BANK keyed by question-type then lesson ref; inv/cleft flatten back
// into the tuples mcs/mcr expect, aux/spot are built directly.
const BANK = {
 inv: {
  "em-neg-inversion": [
   {a:"I have never seen such a beautiful view.",r:"Never have I seen such a beautiful view.",w:["Never I have seen such a beautiful view.","Never did I have seen such a beautiful view.","Never have seen I such a beautiful view."],expl:"Never + have + S + V3."},
   {a:"We rarely go out at weekends.",r:"Rarely do we go out at weekends.",w:["Rarely we go out at weekends.","Rarely we do go out at weekends.","Rarely go we out at weekends."],expl:"Rarely + do + S + V."},
   {a:"He didn't know the truth at all.",r:"Little did he know the truth.",w:["Little he knew the truth.","Little did he knew the truth.","Little knew he the truth."],expl:"Little + did + S + V nguyên mẫu."},
  ],
  "em-not-only": [
   {a:"She sings and she also dances.",r:"Not only does she sing, but she also dances.",w:["Not only she sings, but she also dances.","Not only does she sings, but she also dances.","Not only sings she, but she also dances."],expl:"Not only + does + S + V."},
   {a:"The hotel is cheap and it is also central.",r:"Not only is the hotel cheap, but it is also central.",w:["Not only the hotel is cheap, but it is also central.","Not only is the hotel cheap, but also it central.","Not only cheap is the hotel, but it is also central."],expl:"Not only + be + S."},
   {a:"They won the match and they also broke the record.",r:"Not only did they win the match, but they also broke the record.",w:["Not only they won the match, but they also broke the record.","Not only did they won the match, but they also broke the record.","Not only won they the match, but they also broke the record."],expl:"Not only + did + S + V nguyên mẫu."},
  ],
  "em-only": [
   {a:"I understood only when she explained.",r:"Only when she explained did I understand.",w:["Only when did she explain I understood.","Only when she explained I understood.","Only when she explained I did understand."],expl:"Đảo ngữ ở vế chính."},
   {a:"He came home at midnight, not before.",r:"Not until midnight did he come home.",w:["Not until midnight he came home.","Not until midnight did he came home.","Not until midnight came he home."],expl:"Not until + mốc + did + S + V."},
   {a:"We can solve this only by working together.",r:"Only by working together can we solve this.",w:["Only by working together we can solve this.","Only by working together we solve can this.","Only by work together can we solve this."],expl:"Only by + V-ing + can + S + V."},
   {a:"I felt relieved only after the results came out.",r:"Only after the results came out did I feel relieved.",w:["Only after the results came out I felt relieved.","Only after the results came out I did feel relieved.","Only after did the results come out I feel relieved."],expl:"Only after + N + did + S + V."},
  ],
  "em-no-sooner": [
   {a:"As soon as I arrived, it started to rain.",r:"No sooner had I arrived than it started to rain.",w:["No sooner had I arrived when it started to rain.","No sooner I had arrived than it started to rain.","No sooner did I arrive than it had started to rain."],expl:"No sooner had S V3 than."},
   {a:"We had just sat down when the lights went out.",r:"Hardly had we sat down when the lights went out.",w:["Hardly had we sat down than the lights went out.","Hardly we had sat down when the lights went out.","Hardly did we sit down when the lights went out."],expl:"Hardly had S V3 when."},
   {a:"As soon as the bell rang, the students rushed out.",r:"No sooner had the bell rung than the students rushed out.",w:["No sooner had the bell rung when the students rushed out.","No sooner the bell had rung than the students rushed out.","No sooner did the bell ring than it had rushed the students out."],expl:"No sooner had S V3 than."},
  ],
  "em-so-such": [
   {a:"The film was so boring that I fell asleep.",r:"So boring was the film that I fell asleep.",w:["So boring the film was that I fell asleep.","So was boring the film that I fell asleep.","So boring did the film that I fell asleep."],expl:"So + adj + be + S."},
   {a:"The exam was so hard that many students failed.",r:"So hard was the exam that many students failed.",w:["So hard the exam was that many students failed.","So was hard the exam that many students failed.","So hard did the exam that many students failed."],expl:"So + adj + be + S."},
  ],
 },
 cleft: {
  "em-it-cleft": [
   {a:"LAN broke the vase.",r:"It was Lan who broke the vase.",w:["It was Lan that she broke the vase.","It is Lan broke the vase.","Lan was who broke the vase."],expl:"It was + người + who + V."},
   {a:"I moved here IN 2020.",r:"It was in 2020 that I moved here.",w:["It was 2020 when I moved here in.","In 2020 was that I moved here.","It is in 2020 that I had moved here."],expl:"It was + thời gian + that."},
   {a:"EDUCATION changes lives.",r:"It is education that changes lives.",w:["It is education changes lives.","Education is it that changes lives.","It is education what changes lives."],expl:"It is + N + that + V."},
   {a:"The government should act. (nhấn mạnh chủ thể)",r:"It is the government that should act.",w:["It is the government should act.","It is the government who it should act.","The government is that should act."],expl:"It is + N + that."},
   {a:"I left because of THE SALARY.",r:"It was the salary that made me leave.",w:["It was the salary made me leave.","It was the salary what made me leave.","The salary was it that made me leave."],expl:"It was + N + that."},
   {a:"MY SISTER fixed the computer.",r:"It was my sister who fixed the computer.",w:["It was my sister that she fixed the computer.","It is my sister fixed the computer.","My sister was who fixed the computer."],expl:"It was + người + who + V."},
  ],
  "em-what-cleft": [
   {a:"I need A HOLIDAY.",r:"What I need is a holiday.",w:["What I need it is a holiday.","That I need is a holiday.","What do I need is a holiday."],expl:"What + S + V + is."},
   {a:"I only want SOME SLEEP.",r:"All I want is some sleep.",w:["All I want it is some sleep.","All what I want is some sleep.","All I want are some sleep."],expl:"All + S + V + is."},
   {a:"I love its peaceful pace about Hue.",r:"What I love about Hue is its peaceful pace.",w:["What I love about Hue it is its peaceful pace.","That I love about Hue is its peaceful pace.","What do I love about Hue is its peaceful pace."],expl:"What + S + V + is."},
   {a:"I NEED MORE TIME.",r:"What I need is more time.",w:["What I need it is more time.","That I need is more time.","What do I need is more time."],expl:"What + S + V + is."},
   {a:"HER ATTITUDE annoyed me.",r:"What annoyed me was her attitude.",w:["What annoyed me it was her attitude.","What did annoy me was her attitude.","That annoyed me was her attitude."],expl:"What + V + was (chủ ngữ bị chẻ ra sau is/was)."},
   {a:"I LOVE THE FOOD here.",r:"What I love here is the food.",w:["What I love here it is the food.","That I love here is the food.","What do I love here is the food."],expl:"What + S + V + is."},
  ],
  "em-do": [
   {a:"I like your idea. (nhấn mạnh)",r:"I do like your idea.",w:["I do liked your idea.","I does like your idea.","I am like your idea."],expl:"do + V nguyên mẫu."},
   {a:"She called you. (khẳng định mạnh)",r:"She did call you.",w:["She did called you.","She does called you.","She did calls you."],expl:"did + V nguyên mẫu."},
   {a:"I like your plan. (nhấn mạnh)",r:"I do like your plan.",w:["I do liked your plan.","I does like your plan.","I am like your plan."],expl:"do + V nguyên mẫu."},
   {a:"She enjoys her job. (khẳng định mạnh)",r:"She does enjoy her job.",w:["She does enjoys her job.","She did enjoy her job.","She is enjoy her job."],expl:"does + V nguyên mẫu (ngôi thứ 3 số ít)."},
  ],
 },
 aux: {
  "em-neg-inversion": [
   {s:"Never ___ I seen such a mess.",a:"have"},
   {s:"Little ___ he know what was coming.",a:"did"},
   {s:"Rarely ___ we eat out these days.",a:"do"},
  ],
  "em-not-only": [
   {s:"Not only ___ she sing, but she also dances.",a:"does"},
   {s:"Not only ___ he play the guitar, but he also sings.",a:"does"},
  ],
  "em-only": [
   {s:"Only when he left ___ I realise the truth.",a:"did"},
   {s:"Not until midnight ___ she come home.",a:"did"},
  ],
  "em-no-sooner": [
   {s:"No sooner ___ we arrived than the show began.",a:"had"},
   {s:"Hardly ___ I sat down when the phone rang.",a:"had"},
  ],
  "em-so-such": [
   {s:"So difficult ___ the test that nobody passed.",a:"was"},
   {s:"Such ___ the noise that we couldn't sleep.",a:"was"},
   {s:"So angry ___ she that she slammed the door.",a:"was"},
   {s:"Such ___ his surprise that he couldn't speak.",a:"was"},
  ],
 },
 spot: {
  "em-neg-inversion": [
   {r:"Never have I been so tired.",w:["Never I have been so tired.","Never I had been so tired.","Never been have I so tired."],expl:"Never + have + S + V3."},
   {r:"Seldom does he complain.",w:["Seldom he complains.","Seldom does he complains.","Seldom complains he."],expl:"Seldom + does + S + V."},
   {r:"At no time did she complain.",w:["At no time she complained.","At no time did she complained.","At no time complained she."],expl:"At no time + did + S + V."},
  ],
  "em-it-cleft": [
   {r:"It was Nam who called.",w:["It was Nam who he called.","It was Nam called.","Nam was who called it."],expl:"Không lặp chủ ngữ."},
  ],
  "em-not-only": [
   {r:"Not only is it cheap, but it is also fast.",w:["Not only it is cheap, but it is also fast.","Not only is it cheap, but also it fast.","Not only cheap is it, but also fast."],expl:"Not only + be + S."},
   {r:"Not only did she apologise, but she also paid for the damage.",w:["Not only she apologised, but she also paid for the damage.","Not only did she apologise, but also she paid for the damage.","Not only apologised she, but she also paid for the damage."],expl:"Not only + did + S + V."},
  ],
  "em-what-cleft": [
   {r:"What surprised me was the price.",w:["What surprised me it was the price.","What did surprise me was the price.","That surprised me was the price."],expl:"What + V + was."},
   {r:"All she wants is some peace and quiet.",w:["All she wants it is some peace and quiet.","All what she wants is some peace and quiet.","All she wants are some peace and quiet."],expl:"All + S + V + is."},
  ],
  "em-only": [
   {r:"Only after the meeting did I understand.",w:["Only after the meeting I understood.","Only after the meeting I did understand.","Only after did the meeting I understand."],expl:"Only after + N + did + S + V."},
  ],
  "em-no-sooner": [
   {r:"No sooner had she left than he arrived.",w:["No sooner she had left than he arrived.","No sooner had she left when he arrived.","No sooner did she leave when he arrived."],expl:"No sooner … than."},
   {r:"Hardly had I opened the door when the dog ran out.",w:["Hardly I had opened the door when the dog ran out.","Hardly had I opened the door than the dog ran out.","Hardly did I open the door when the dog had run out."],expl:"Hardly had S V3 when."},
  ],
  "em-do": [
   {r:"I do miss my hometown.",w:["I do missed my hometown.","I does miss my hometown.","I am miss my hometown."],expl:"do + V."},
   {r:"We did enjoy the concert last night.",w:["We did enjoyed the concert last night.","We does enjoy the concert last night.","We were enjoy the concert last night."],expl:"did + V nguyên mẫu."},
   {r:"He does care about his family, even if he doesn't show it.",w:["He does cares about his family, even if he doesn't show it.","He do care about his family, even if he doesn't show it.","He is care about his family, even if he doesn't show it."],expl:"does + V nguyên mẫu."},
  ],
  "em-so-such": [
   {r:"Such was his anger that he left.",w:["Such his anger was that he left.","So was his anger that he left.","Such anger he was that he left."],expl:"Such + be + N."},
   {r:"So fast did he drive that he got a ticket.",w:["So fast he drove that he got a ticket.","So fast drove he that he got a ticket.","So did fast he drive that he got a ticket."],expl:"So + adv + did + S + V (nguyên mẫu)."},
  ],
 },
};

const EMPOOL=[];
const invList = Object.entries(BANK.inv).flatMap(([ref,items]) => items.map(it => [it.a,it.r,it.w,ref,it.expl]));
mcr(EMPOOL,"inv","Chọn câu đảo ngữ đúng.","Viết lại bằng đảo ngữ",invList);
const cleftList = Object.entries(BANK.cleft).flatMap(([ref,items]) => items.map(it => [it.a,it.r,it.w,ref,it.expl]));
mcr(EMPOOL,"cleft","Chọn câu nhấn mạnh đúng.","Nhấn mạnh phần viết hoa",cleftList);
Object.entries(BANK.aux).forEach(([ref,items]) => items.forEach(it =>
 EMPOOL.push(inQ("aux",fmt(it.s),"Gõ trợ động từ còn thiếu.",[it.a],ref,`Trợ động từ đúng là ${it.a}.`))
));
const spotList = Object.entries(BANK.spot).flatMap(([ref,items]) => items.map(it => ["Chọn câu đúng: ___",it.r,it.w,ref,it.expl]));
mcs(EMPOOL,"spot","Chọn câu đúng ngữ pháp.",spotList);

const EMTYPES={inv:{name:"Viết lại bằng đảo ngữ",desc:"Never, Not only, Only when, No sooner, So…"},cleft:{name:"Câu chẻ",desc:"It is … that, What … is, do nhấn mạnh"},aux:{name:"Điền trợ động từ",desc:"Tự gõ do, does, did, have, had, was"},spot:{name:"Chọn câu đúng",desc:"Nhận ra câu nhấn mạnh viết đúng"}};
const EMRUSH=[["Never before ___ I seen this.",["have"]],["Rarely ___ she cook at home.",["does"]],["Little ___ they know.",["did"]],["Not only ___ he rich, but he's kind.",["is"]],["Only then ___ I understand.",["did"]],["No sooner ___ I sat down than…",["had"]],["Hardly ___ we started when…",["had"]],["So tired ___ I that I slept.",["was"]],["Such ___ the crowd that…",["was"]],["Not until 2010 ___ they meet.",["did"]],["Seldom ___ we see snow here.",["do"]],["Never ___ I forget that day.",["will"]],["Only by practising ___ you improve.",["can"]],["At no time ___ he apologise.",["did"]],["Not only ___ they won, but…",["have"]],["Under no circumstances ___ you open it.",["should"]],["Never ___ she been so happy.",["has"]],["Rarely ___ he late for work.",["is"]],["Little ___ she realise.",["did"]],["So difficult ___ the exam that…",["was"]]];

GRAMMAR.quiz["emphasis"] = { pool: EMPOOL, types: EMTYPES, game: {title:"Đảo trợ động từ",desc:"60 giây. Chọn đúng trợ động từ cho câu đảo ngữ",prompt:"Trợ động từ nào?",sentence:true,items:EMRUSH,all:["do","does","did","have","has","had","is","was","will","can","should"],label:c=>`<span class="tl-vi mono">${c}</span>`,name:c=>c,bestKey:"emrushBest"} };
})();
