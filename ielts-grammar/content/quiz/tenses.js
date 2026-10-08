/* content/quiz/tenses.js: practice questions and game for this module.
   mcQ(type, prompt, hint, right, [wrong…], lessonId, explanation)
   inQ(type, prompt, hint, [accepted answers], lessonId, explanation) */
(() => {
const Q = [
 ["Look! The baby ___ .","sleep",["sleeps","is sleeping","has slept","slept"],1,"present-continuous","“Look!” báo hiệu việc đang diễn ra ngay lúc nói."],
 ["She ___ to Japan three times so far.","be",["went","has been","was going","had been"],1,"present-perfect","“so far” và đếm số lần tính đến hiện tại: hiện tại hoàn thành."],
 ["I ___ my keys yesterday.","lose",["lost","have lost","had lost","was losing"],0,"past-simple","“yesterday” là thời điểm xác định đã qua: quá khứ đơn."],
 ["When I got to the station, the train ___ .","already / leave",["already left","has already left","had already left","was already leaving"],2,"past-perfect","Tàu rời đi trước khi tôi đến (một mốc quá khứ khác): quá khứ hoàn thành."],
 ["Water ___ at 100°C.","boil",["is boiling","boils","will boil","has boiled"],1,"present-simple","Sự thật hiển nhiên: hiện tại đơn."],
 ["By the end of this year, we ___ the app.","launch",["will launch","are launching","will have launched","have launched"],2,"future-perfect","“By the end of this year” là mốc tương lai, việc hoàn thành trước mốc đó."],
 ["I ___ TV when the power went out.","watch",["watched","was watching","have watched","had watched"],1,"past-continuous","Việc đang diễn ra thì bị việc khác chen vào (when + quá khứ đơn)."],
 ["How long ___ for the bus? Over an hour now!","you / wait",["did you wait","are you waiting","have you been waiting","had you waited"],2,"present-perfect-continuous","“How long” + vẫn đang chờ đến bây giờ: nhấn mạnh quá trình kéo dài."],
 ["This time tomorrow, I ___ on the beach.","lie",["will lie","will be lying","will have lain","am lying"],1,"future-continuous","“This time tomorrow”: đang diễn ra tại một mốc tương lai."],
 ["A: The phone is ringing. B: I ___ it.","get",["'ll get","'m going to get","get","got"],0,"future-simple","Quyết định ngay lúc nói: will."],
 ["By next month, she ___ here for ten years.","work",["will work","will have worked","will have been working","has been working"],2,"future-perfect-continuous","“By + mốc tương lai” + “for ten years”: nhấn mạnh độ dài đến mốc đó."],
 ["He was exhausted because he ___ for hours.","run",["ran","had been running","has been running","was running"],1,"past-perfect-continuous","Nguyên nhân kéo dài trước một kết quả trong quá khứ."],
 ["She usually ___ coffee in the morning.","drink",["drinks","is drinking","drank","has drunk"],0,"present-simple","“usually” chỉ thói quen: hiện tại đơn."],
 ["We ___ the client at 10 tomorrow. It's in my calendar.","meet",["meet","will meet","are meeting","will have met"],2,"present-continuous","Kế hoạch đã sắp xếp cụ thể trong tương lai gần: hiện tại tiếp diễn."],
 ["I ___ him since we were at university.","know",["knew","have known","have been knowing","am knowing"],1,"present-perfect","“since” + động từ trạng thái know: hiện tại hoàn thành, không dùng tiếp diễn."],
 ["When I ___ home, I'll call you.","get",["will get","get","got","am getting"],1,"present-simple","Sau when trong mệnh đề thời gian nói về tương lai, dùng hiện tại đơn."],
];

// 1. Dấu hiệu nhận biết (20): [câu, động từ, đáp án, [nhiễu], giải thích]
const SIG=[
 ["I ___ (go) to the gym **every Monday**.","go","ps",["pc","pas","pp"],"“every + thời gian” chỉ thói quen lặp lại."],
 ["Be quiet! The baby ___ (sleep) **right now**.","sleep","pc",["ps","pp","fs"],"“right now” là việc đang diễn ra ngay lúc nói."],
 ["We ___ (move) to Da Nang **two years ago**.","move","pas",["pp","ps","pap"],"“ago” gắn với một mốc đã qua và kết thúc."],
 ["She ___ (**just** finish) her homework.","finish","pp",["pas","pc","pap"],"“just” nói việc vừa xong, kết quả còn ở hiện tại."],
 ["**By the time** we arrived, the film ___ (start).","start","pap",["pas","pp","pac"],"“By the time + quá khứ đơn”: việc kia đã xong trước đó."],
 ["**This time tomorrow**, I ___ (fly) to Tokyo.","fly","fc",["fs","pc","fp"],"“This time tomorrow” là một thời điểm tương lai, việc đang diễn ra lúc đó."],
 ["**By 2030**, they ___ (build) the new metro line.","build","fp",["fs","fc","pp"],"“By + mốc tương lai” chỉ việc hoàn thành trước mốc đó."],
 ["I ___ (wait) here **for two hours** and the bus still hasn't come.","wait","ppc",["pac","pas","ps"],"“for two hours” và việc vẫn còn tiếp diễn đến bây giờ."],
 ["**At 8 p.m. last night**, I ___ (watch) a movie.","watch","pac",["pas","pc","pap"],"Một giờ cụ thể trong quá khứ, việc đang diễn ra lúc đó."],
 ["**I think** it ___ (rain) **tomorrow**.","rain","fs",["pc","ps","fc"],"“I think” + tương lai: dự đoán với will."],
 ["He **rarely** ___ (eat) fast food.","eat","ps",["pc","pas","pp"],"Trạng từ tần suất (rarely, often, usually) đi với hiện tại đơn."],
 ["**Look!** The bus ___ (come).","come","pc",["ps","fs","pp"],"“Look!” kéo sự chú ý vào việc đang xảy ra."],
 ["They ___ (not finish) the project **yet**.","finish","pp",["pas","pc","ps"],"“yet” trong câu phủ định: chưa xong tính đến hiện tại."],
 ["**By next June**, I ___ (work) here **for five years**.","work","fpc",["fp","ppc","fc"],"“By + mốc tương lai” cộng “for + khoảng”: nhấn mạnh độ dài đến mốc đó."],
 ["She was tired because she ___ (run) **for an hour**.","run","papc",["pac","ppc","pap"],"Một việc kéo dài trước một kết quả trong quá khứ."],
 ["**Last summer**, we ___ (visit) Hoi An.","visit","pas",["pp","pap","pac"],"“Last summer” là mốc quá khứ xác định."],
 ["**While** I ___ (cook), the phone rang.","cook","pac",["pas","pc","pap"],"“While” đi với hành động nền đang diễn ra, bị một việc khác chen vào."],
 ["**So far**, I ___ (read) three books this month.","read","pp",["pas","ps","ppc"],"“So far” và đếm số lượng tính đến hiện tại."],
 ["Water **always** ___ (boil) at 100°C.","boil","ps",["pc","fs","pp"],"Sự thật hiển nhiên dùng hiện tại đơn."],
 ["**Currently**, she ___ (live) with her aunt.","live","pc",["ps","pp","pas"],"“Currently” chỉ tình huống tạm thời đang diễn ra."],
];

// 2. Chia thì (20): Q cũ (16) + 4 câu mới
const CONJ=Q.concat([
 ["If it ___ tomorrow, we will stay home.","rain",["rains","will rain","rained","is raining"],0,"present-simple","Điều kiện loại 1: mệnh đề if dùng hiện tại đơn."],
 ["My father ___ for this company since 2010.","work",["works","worked","has worked","is working"],2,"present-perfect","“since 2010” và vẫn đang làm: hiện tại hoàn thành."],
 ["I ___ dinner when you called me.","have",["had","was having","have had","am having"],1,"past-continuous","Đang ăn thì cuộc gọi chen vào."],
 ["She said she ___ the film before.","see",["saw","has seen","had seen","sees"],2,"past-perfect","Câu tường thuật lùi thì: has seen thành had seen."],
]);

// 3. Phủ định & câu hỏi (20): [yêu cầu, câu gốc, đáp án đúng, [sai], thì, giải thích]
const TR=[
 ["N","She works on Sundays.","She doesn't work on Sundays.",["She doesn't works on Sundays.","She don't work on Sundays.","She isn't work on Sundays."],"ps","Sau does/doesn't, động từ về nguyên mẫu."],
 ["Q","They play football every weekend.","Do they play football every weekend?",["Does they play football every weekend?","Are they play football every weekend?","Do they plays football every weekend?"],"ps","They đi với do, động từ giữ nguyên mẫu."],
 ["N","I went to the market yesterday.","I didn't go to the market yesterday.",["I didn't went to the market yesterday.","I wasn't go to the market yesterday.","I don't went to the market yesterday."],"pas","didn't + V nguyên mẫu, không chia went."],
 ["Q","He has finished his report.","Has he finished his report?",["Does he has finished his report?","Have he finished his report?","Did he finished his report?"],"pp","Đảo has lên trước chủ ngữ, giữ V3."],
 ["N","We are watching TV.","We aren't watching TV.",["We don't watching TV.","We aren't watch TV.","We not are watching TV."],"pc","Thêm not sau am/is/are, giữ V-ing."],
 ["Q","She was sleeping at 10 p.m.","Was she sleeping at 10 p.m.?",["Did she sleeping at 10 p.m.?","Were she sleeping at 10 p.m.?","Was she sleep at 10 p.m.?"],"pac","Đảo was lên trước she, giữ V-ing."],
 ["N","They will come to the party.","They won't come to the party.",["They willn't come to the party.","They will not to come to the party.","They don't will come to the party."],"fs","will not viết tắt là won't."],
 ["Where","You live in Hanoi.","Where do you live?",["Where you live?","Where are you live?","Where does you live?"],"ps","Từ để hỏi + do/does + S + V."],
 ["N","He had left before I arrived.","He hadn't left before I arrived.",["He didn't had left before I arrived.","He hadn't leave before I arrived.","He has not left before I arrived."],"pap","had not + V3."],
 ["Q","It is raining outside.","Is it raining outside?",["Does it raining outside?","Is it rain outside?","Do it is raining outside?"],"pc","Đảo is lên đầu câu."],
 ["What","She bought a new phone.","What did she buy?",["What did she bought?","What she bought?","What does she bought?"],"pas","Có did thì động từ chính về nguyên mẫu: buy."],
 ["N","I have been working all day.","I haven't been working all day.",["I haven't being working all day.","I don't have been working all day.","I hasn't been working all day."],"ppc","have not + been + V-ing."],
 ["Q","They will be travelling this time next week.","Will they be travelling this time next week?",["Will they travelling this time next week?","Are they will be travelling this time next week?","Do they will be travelling this time next week?"],"fc","Chỉ đảo will lên đầu, giữ be + V-ing."],
 ["N","My brother likes coffee.","My brother doesn't like coffee.",["My brother don't like coffee.","My brother doesn't likes coffee.","My brother isn't like coffee."],"ps","Chủ ngữ số ít dùng doesn't, động từ bỏ s."],
 ["How long","You have known her for years.","How long have you known her?",["How long do you know her?","How long have you know her?","How long you have known her?"],"pp","How long + have + S + V3."],
 ["N","We were playing chess.","We weren't playing chess.",["We didn't playing chess.","We wasn't playing chess.","We weren't play chess."],"pac","We đi với were, phủ định là weren't."],
 ["Q","She will have finished by 5 p.m.","Will she have finished by 5 p.m.?",["Will she has finished by 5 p.m.?","Has she will finished by 5 p.m.?","Will she have finish by 5 p.m.?"],"fp","Sau will luôn là have (không phải has)."],
 ["N","The train leaves at 7.","The train doesn't leave at 7.",["The train don't leave at 7.","The train doesn't leaves at 7.","The train not leaves at 7."],"ps","The train là số ít: doesn't + V."],
 ["Why","He was late.","Why was he late?",["Why did he was late?","Why he was late?","Why was he lated?"],"pas","Với to be, chỉ cần đảo was lên trước chủ ngữ."],
 ["Who","Somebody called you.","Who called you?",["Who did called you?","Who you called?","Whom called you?"],"pas","Hỏi chủ ngữ thì không dùng trợ động từ, giữ called."],
];

// 4. Điền vào chỗ trống (20): [câu, gợi ý, [đáp án chấp nhận], thì, giải thích]
const FILL=[
 ["My mother ___ (cook) dinner every evening.","cook",["cooks"],"ps","every evening là thói quen; chủ ngữ số ít thêm s."],
 ["Listen! Someone ___ (knock) at the door.","knock",["is knocking"],"pc","Listen! báo hiệu việc đang xảy ra."],
 ["We ___ (not / see) him since last Christmas.","not / see",["have not seen"],"pp","since + mốc: hiện tại hoàn thành."],
 ["I ___ (buy) this laptop two years ago.","buy",["bought"],"pas","ago: quá khứ đơn. buy là bất quy tắc: bought."],
 ["When I came home, my sister ___ (do) her homework.","do",["was doing"],"pac","Việc đang diễn ra khi tôi về."],
 ["She ___ (study) English for three years now.","study",["has been studying","has studied"],"ppc","for three years now: kéo dài đến hiện tại."],
 ["By the time the police arrived, the thief ___ (escape).","escape",["had escaped"],"pap","Xảy ra trước một mốc quá khứ."],
 ["Don't worry. I ___ (help) you with the boxes.","help",["will help"],"fs","Đề nghị giúp đỡ ngay lúc nói: will."],
 ["This time next month, we ___ (live) in our new flat.","live",["will be living"],"fc","Đang diễn ra tại một mốc tương lai."],
 ["By Friday, I ___ (finish) all my exams.","finish",["will have finished"],"fp","By + mốc tương lai: tương lai hoàn thành."],
 ["Have you ever ___ (be) to Hue?","be",["been"],"pp","Have + V3. be có V3 là been."],
 ["He ___ (not / like) spicy food.","not / like",["does not like"],"ps","Sở thích chung: hiện tại đơn, he đi với doesn't."],
 ["They ___ (play) tennis when it started to rain.","play",["were playing"],"pac","Đang chơi thì mưa chen vào."],
 ["The kids are dirty because they ___ (play) in the garden.","play",["have been playing"],"ppc","Vừa dừng, để lại dấu hiệu ở hiện tại."],
 ["He ___ (work) at the bank for ten years before he retired.","work",["had worked","had been working"],"pap","Kéo dài trước một mốc quá khứ (retired)."],
 ["Look at those dark clouds! It ___ (rain).","rain",["is going to rain"],"fs","Dự đoán có căn cứ trước mắt: be going to."],
 ["The sun ___ (rise) in the east.","rise",["rises"],"ps","Sự thật hiển nhiên."],
 ["So far today, I ___ (write) five emails.","write",["have written"],"pp","So far + đếm số lượng. write có V3 là written."],
 ["By next year, she ___ (teach) here for twenty years.","teach",["will have been teaching","will have taught"],"fpc","By + mốc tương lai + for + khoảng thời gian."],
 ["What were you ___ (do) at 9 p.m. last night?","do",["doing"],"pac","were + V-ing: quá khứ tiếp diễn."],
];

// 5. Dạng động từ (20): [nhóm, gốc, [đáp án], quy tắc]
const VF=[
 ["V-s/es (he, she, it)","watch",["watches"],"Tận cùng ch, sh, s, x, o, z: thêm es."],
 ["V-s/es (he, she, it)","go",["goes"],"Tận cùng o: thêm es."],
 ["V-s/es (he, she, it)","study",["studies"],"Phụ âm + y: đổi y thành ies."],
 ["V-s/es (he, she, it)","play",["plays"],"Nguyên âm + y: chỉ thêm s."],
 ["V-s/es (he, she, it)","fix",["fixes"],"Tận cùng x: thêm es."],
 ["V-s/es (he, she, it)","have",["has"],"Bất quy tắc: have thành has."],
 ["V-ing","run",["running"],"Một nguyên âm + một phụ âm ở âm tiết nhấn: gấp đôi phụ âm cuối."],
 ["V-ing","make",["making"],"Tận cùng e câm: bỏ e rồi thêm ing."],
 ["V-ing","lie",["lying"],"Tận cùng ie: đổi thành y rồi thêm ing."],
 ["V-ing","swim",["swimming"],"Gấp đôi m vì có một nguyên âm + một phụ âm."],
 ["V-ing","open",["opening"],"Trọng âm ở âm đầu (O-pen) nên không gấp đôi n."],
 ["V2 có quy tắc","stop",["stopped"],"Gấp đôi phụ âm cuối rồi thêm ed."],
 ["V2 có quy tắc","try",["tried"],"Phụ âm + y: đổi y thành ied."],
 ["V2 có quy tắc","plan",["planned"],"Gấp đôi n rồi thêm ed."],
 ["V2 bất quy tắc","think",["thought"],"think, thought, thought."],
 ["V2 bất quy tắc","buy",["bought"],"buy, bought, bought."],
 ["V2 bất quy tắc","teach",["taught"],"teach, taught, taught."],
 ["V3 bất quy tắc","write",["written"],"write, wrote, written."],
 ["V3 bất quy tắc","be",["been"],"be, was/were, been."],
 ["V3 bất quy tắc","eat",["eaten"],"eat, ate, eaten."],
];

const TYPES={
 sig:{name:"Dấu hiệu nhận biết",desc:"Nhìn từ gạch chân, chọn thì phù hợp"},
 conj:{name:"Chia thì",desc:"Chọn dạng động từ đúng cho câu"},
 tr:{name:"Phủ định & câu hỏi",desc:"Chọn câu biến đổi đúng ngữ pháp"},
 fill:{name:"Điền vào chỗ trống",desc:"Tự gõ động từ đã chia"},
 verb:{name:"Dạng động từ",desc:"V-s/es, V-ing, V2, V3, có và bất quy tắc"},
};
const POOL=[];
SIG.forEach(([s,v,a,ds,ex])=>POOL.push({type:"sig",kind:"mc",prompt:fmt(s),hint:"Câu này dùng thì nào?",options:[a,...ds].map(c=>tLabel(TN[c])),plain:byId[TN[a]].vi,answer:0,tense:TN[a],expl:ex}));
CONJ.forEach(q=>POOL.push({type:"conj",kind:"mc",prompt:fmt(q[0]),hint:`Động từ gốc: <b>${esc(q[1])}</b>`,options:q[2].map(o=>`<span class="mono">${esc(o)}</span>`),plain:q[2][q[3]],answer:q[3],tense:q[4],expl:q[5]}));
TR.forEach(([m,b,r,w,c,ex])=>{
  const ask=m==="N"?"Chuyển sang phủ định":m==="Q"?"Chuyển sang câu hỏi Yes/No":`Đặt câu hỏi với “${m}”`;
  POOL.push({type:"tr",kind:"mc",prompt:`<span class="ask">${ask}</span>${esc(b)}`,hint:"Chọn câu đúng ngữ pháp.",options:[r,...w].map(esc),plain:r,answer:0,tense:TN[c],expl:ex});
});
FILL.forEach(([s,v,acc,c,ex])=>POOL.push({type:"fill",kind:"input",prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Gõ phần điền vào chỗ trống.`,accept:acc,plain:acc[0],tense:TN[c],expl:ex}));
VF.forEach(([g,b,acc,ex])=>POOL.push({type:"verb",kind:"input",prompt:`<span class="ask">${esc(g)}</span><span class="mono big">${esc(b)}</span> <span class="arrow">→</span> <span class="blank"></span>`,hint:"Gõ dạng đúng của động từ.",accept:acc,plain:acc[0],tense:null,expl:ex}));


POOL.forEach(q=>q.ref=q.tense);
const RUSH=[
 ["usually",["ps"]],["often",["ps"]],["always",["ps"]],["sometimes",["ps"]],["seldom",["ps"]],["every day",["ps"]],["once a week",["ps"]],["on Mondays",["ps"]],["twice a month",["ps"]],
 ["never",["ps","pp"],"never chỉ thói quen (hiện tại đơn) hoặc chưa từng tính đến nay (hiện tại hoàn thành)."],
 ["now",["pc"]],["right now",["pc"]],["at the moment",["pc"]],["Look!",["pc"]],["Listen!",["pc"]],["currently",["pc"]],["at present",["pc"]],
 ["just",["pp"]],["already",["pp"]],["yet",["pp"]],["ever",["pp"]],["so far",["pp"]],["up to now",["pp"]],["this is the first time",["pp"]],
 ["recently",["pp","ppc"],"recently đi được với cả hiện tại hoàn thành và HTHT tiếp diễn."],["lately",["pp","ppc"],"lately đi được với cả hai thì hoàn thành của hiện tại."],
 ["since 2020",["pp","ppc"],"since + mốc dùng cho hiện tại hoàn thành hoặc HTHT tiếp diễn."],["for three years (đến nay)",["pp","ppc"],"for + khoảng thời gian kéo dài đến nay."],
 ["all day (đến giờ vẫn làm)",["ppc"]],
 ["yesterday",["pas"]],["last night",["pas"]],["two days ago",["pas"]],["in 1999",["pas"]],["last summer",["pas"]],["when I was a child",["pas"]],
 ["at this time yesterday",["pac"]],["at 8 p.m. last night",["pac"]],["while (đang… thì…, quá khứ)",["pac"]],
 ["by the time he arrived",["pap","papc"],"By the time + quá khứ đơn: việc kia đã xong hoặc đã kéo dài trước đó."],["by the end of last year",["pap"]],
 ["for 2 hours before he called",["papc"]],
 ["tomorrow",["fs"]],["next week",["fs"]],["soon",["fs"]],["I think…",["fs"]],["probably",["fs"]],["I promise",["fs"]],
 ["this time tomorrow",["fc"]],["at 9 a.m. next Monday",["fc"]],["this time next week",["fc"]],
 ["by 2030",["fp"]],["by the end of next year",["fp"]],["by the time you arrive",["fp"]],
 ["by next June … for 5 years",["fpc"]],
];

GRAMMAR.quiz["tenses"] = { pool: POOL, types: TYPES, game: {title:"Đoán thì nhanh",desc:"60 giây. Thấy usually, often, never… chọn thì đúng càng nhanh càng tốt",prompt:"Thấy dấu hiệu này, dùng thì nào?",items:RUSH,all:CODES,label:c=>tLabel(TN[c]),name:c=>byId[TN[c]].vi,bestKey:"rushBest"} };
})();
