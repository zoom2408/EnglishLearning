/* content/quiz/passive.js: practice questions and game for this module.
   mcQ(type, prompt, hint, right, [wrong…], lessonId, explanation)
   inQ(type, prompt, hint, [accepted answers], lessonId, explanation) */
(() => {
// Passive (60) — BANK keyed by lesson ref; each item carries its own
// `kind` (conv / fill / v3 / pick) since this module mixes several
// question builders, unlike the single-type "fill" banks in de/nb.
const BANK = {
 "p-basic": [
  {kind:"conv",a:"Someone stole my phone.",right:"My phone was stolen.",wrong:["My phone was stole.","My phone is stolen.","My phone has stolen."],expl:"Quá khứ đơn: was + V3; bỏ by someone."},
  {kind:"pick",q:"My wallet ___ on the bus yesterday.",right:"was stolen",wrong:["stole","was stealing","has stolen"],expl:"Ví bị lấy: bị động quá khứ đơn."},
  {kind:"pick",q:"Rice ___ in many Asian countries.",right:"is grown",wrong:["grows by people","is growing by","grown"],expl:"Người làm không quan trọng: is + V3."},
  {kind:"v3",base:"write",v3:"written"},{kind:"v3",base:"speak",v3:"spoken"},{kind:"v3",base:"build",v3:"built"},
  {kind:"v3",base:"steal",v3:"stolen"},{kind:"v3",base:"break",v3:"broken"},{kind:"v3",base:"choose",v3:"chosen"},
  {kind:"v3",base:"make",v3:"made"},{kind:"v3",base:"teach",v3:"taught"},{kind:"v3",base:"give",v3:"given"},{kind:"v3",base:"take",v3:"taken"},
 ],
 "p-tenses": [
  {kind:"conv",a:"They clean the office every day.",right:"The office is cleaned every day.",wrong:["The office is clean every day.","The office was cleaned every day.","The office cleans every day."],expl:"Hiện tại đơn: is + V3."},
  {kind:"conv",a:"They are building a new school.",right:"A new school is being built.",wrong:["A new school is built.","A new school is being build.","A new school has being built."],expl:"Hiện tại tiếp diễn: is being + V3."},
  {kind:"conv",a:"People have sold all the tickets.",right:"All the tickets have been sold.",wrong:["All the tickets have sold.","All the tickets has been sold.","All the tickets were been sold."],expl:"Hiện tại hoàn thành: have been + V3."},
  {kind:"conv",a:"The company will announce the results tomorrow.",right:"The results will be announced tomorrow.",wrong:["The results will announced tomorrow.","The results will be announce tomorrow.","The results are announced tomorrow."],expl:"Tương lai đơn: will be + V3."},
  {kind:"fill",q:"English ___ (speak) in many countries.",v:"speak",accept:["is spoken"],expl:"Sự thật chung: is + V3."},
  {kind:"fill",q:"The Eiffel Tower ___ (build) in 1889.",v:"build",accept:["was built"],expl:"Mốc quá khứ: was + V3."},
  {kind:"fill",q:"The road ___ (repair) at the moment.",v:"repair",accept:["is being repaired"],expl:"at the moment: is being + V3."},
  {kind:"fill",q:"Your parcel ___ (deliver) already.",v:"deliver",accept:["has been delivered"],expl:"already: has been + V3."},
  {kind:"fill",q:"The winners ___ (announce) next week.",v:"announce",accept:["will be announced"],expl:"next week: will be + V3."},
  {kind:"fill",q:"When we arrived, the food ___ (eat) already.",v:"eat",accept:["had been eaten"],expl:"Trước một mốc quá khứ: had been + V3."},
  {kind:"fill",q:"The house ___ (paint) when I visited.",v:"paint",accept:["was being painted"],expl:"Đang diễn ra trong quá khứ: was being + V3."},
  {kind:"pick",q:"The new bridge ___ next year.",right:"will be opened",wrong:["will open by","is opening by","will be open by"],expl:"Tương lai bị động: will be + V3."},
  {kind:"pick",q:"The patient ___ to hospital an hour ago.",right:"was taken",wrong:["took","has been taken","was took"],expl:"an hour ago: was + V3."},
 ],
 "p-questions": [
  {kind:"conv",a:"Did they invite you to the party?",right:"Were you invited to the party?",wrong:["Did you invited to the party?","Was you invited to the party?","Were you invite to the party?"],expl:"Câu hỏi bị động: Were + S + V3?"},
  {kind:"pick",q:"Who ___ this song ___ by?",right:"was … written",wrong:["did … write","was … wrote","is … writing"],expl:"Who + be + S + V3 + by?"},
  {kind:"pick",q:"___ the car fixed yesterday?",right:"Was",wrong:["Did","Has","Is"],expl:"Câu hỏi Yes/No bị động quá khứ: Was + S + V3?"},
  {kind:"pick",q:"___ the project been finished yet?",right:"Has",wrong:["Did","Was","Have"],expl:"Hiện tại hoàn thành bị động, câu hỏi: Has + S + been + V3?"},
  {kind:"pick",q:"Who ___ invited to the meeting?",right:"was",wrong:["did","has","is"],expl:"Câu hỏi Wh- bị động: Who + was + V3?"},
  {kind:"pick",q:"___ this report ___ before Friday?",right:"Will … be finished",wrong:["Did … finish","Is … finished","Would … finished"],expl:"Câu hỏi bị động tương lai: Will + S + be + V3?"},
 ],
 "p-two-objects": [
  {kind:"conv",a:"They gave me a certificate.",right:"I was given a certificate.",wrong:["I was gave a certificate.","I gave a certificate.","I am given a certificate."],expl:"Người nhận làm chủ ngữ: was given."},
  {kind:"pick",q:"I was ___ a job in Da Nang.",right:"offered",wrong:["offer","offering","to offer"],expl:"be + V3: was offered."},
  {kind:"conv",a:"They awarded her a medal.",right:"She was awarded a medal.",wrong:["A medal was awarded her.","She was awarding a medal.","She had awarded a medal."],expl:"Người nhận lên làm chủ ngữ: was awarded."},
  {kind:"conv",a:"The teacher taught us grammar.",right:"We were taught grammar.",wrong:["We was taught grammar.","Grammar were taught us.","We were teaching grammar."],expl:"Người nhận làm chủ ngữ: were taught."},
  {kind:"fill",q:"She ___ (promise) a promotion next year.",v:"promise",accept:["was promised"],expl:"Người nhận làm chủ ngữ ở thì quá khứ: was/were + V3."},
 ],
 "p-modal": [
  {kind:"conv",a:"You must finish the report today.",right:"The report must be finished today.",wrong:["The report must finished today.","The report must be finish today.","The report must been finished today."],expl:"Modal + be + V3."},
  {kind:"fill",q:"Phones must ___ (switch) off during the exam.",v:"switch",accept:["be switched"],expl:"must + be + V3."},
  {kind:"fill",q:"This letter should ___ (send) yesterday.",v:"send",accept:["have been sent"],expl:"should have been + V3: đáng lẽ đã phải."},
  {kind:"conv",a:"You should finish the task by Friday.",right:"The task should be finished by Friday.",wrong:["The task should finished by Friday.","The task should be finish by Friday.","The task should being finished by Friday."],expl:"Modal + be + V3."},
  {kind:"fill",q:"This machine can ___ (repair) easily.",v:"repair",accept:["be repaired"],expl:"can + be + V3."},
  {kind:"fill",q:"The documents might ___ (lose) in the move.",v:"lose",accept:["have been lost"],expl:"might + have been + V3: suy đoán bị động ở quá khứ."},
 ],
 "p-reporting": [
  {kind:"conv",a:"People say that he is a genius.",right:"He is said to be a genius.",wrong:["He is said that he is a genius.","He says to be a genius.","He is saying to be a genius."],expl:"S + is said + to V."},
  {kind:"pick",q:"He ___ to have left the country.",right:"is believed",wrong:["believes","is believing","was believe"],expl:"S + is believed + to have V3."},
  {kind:"conv",a:"People believe that the bridge is unsafe.",right:"The bridge is believed to be unsafe.",wrong:["The bridge believes to be unsafe.","The bridge is believed that is unsafe.","The bridge is believing to be unsafe."],expl:"S + is believed + to V."},
  {kind:"conv",a:"They think she left the country last year.",right:"She is thought to have left the country last year.",wrong:["She is thought that left the country.","She thinks to have left.","She was thought leaving the country."],expl:"Hành động xảy ra trước: to have + V3."},
  {kind:"fill",q:"He ___ (report) to be the richest man in town.",v:"report",accept:["is reported"],expl:"S + is/are + reported + to V."},
  {kind:"fill",q:"It ___ (say) that the company will expand next year.",v:"say",accept:["is said"],expl:"It is said that…: mẫu tường thuật khách quan phổ biến."},
 ],
 "p-causative": [
  {kind:"conv",a:"A hairdresser cut my hair yesterday.",right:"I had my hair cut yesterday.",wrong:["I had cut my hair yesterday.","I had my hair cutting yesterday.","I cut my hair by a hairdresser."],expl:"Thể nhờ bảo: have + O + V3."},
  {kind:"fill",q:"I'm going to have my car ___ (wash).",v:"wash",accept:["washed"],expl:"have + O + V3."},
  {kind:"pick",q:"We need to get the roof ___.",right:"repaired",wrong:["repair","repairing","to repair"],expl:"get + O + V3."},
  {kind:"conv",a:"I will have a tailor make a suit for me.",right:"I will have a suit made for me.",wrong:["I will have made a suit for me.","I will have a suit make for me.","I had a suit made for me."],expl:"have + O + V3: nhờ ai làm gì."},
  {kind:"fill",q:"She needs to get her laptop ___ (repair).",v:"repair",accept:["repaired"],expl:"get + O + V3."},
  {kind:"fill",q:"We ___ (have) our house painted last month.",v:"have",accept:["had"],expl:"had + O + V3: thể nhờ bảo ở quá khứ."},
 ],
 "p-not": [
  {kind:"pick",q:"The accident ___ last night.",right:"happened",wrong:["was happened","is happened","was happening by"],expl:"happen là nội động từ, không có bị động."},
  {kind:"pick",q:"She ___ her mother very much.",right:"resembles",wrong:["is resembled","is resembling by","was resembled"],expl:"resemble là động từ trạng thái, không dùng bị động."},
  {kind:"pick",q:"This car ___ to my uncle.",right:"belongs",wrong:["is belonged","is belonging","was belonged"],expl:"belong to là nội động từ, không có bị động."},
  {kind:"pick",q:"The accident ___ near the bridge.",right:"occurred",wrong:["was occurred","is occurred","was occurring by"],expl:"occur không dùng ở bị động."},
  {kind:"pick",q:"This problem ___ of three parts.",right:"consists",wrong:["is consisted","is consisting","was consisted"],expl:"consist of không dùng bị động."},
 ],
};

const PTYPES={conv:{name:"Chuyển sang bị động",desc:"Chọn câu bị động đúng từ câu chủ động"},fill:{name:"Chia bị động theo thì",desc:"Tự gõ be + V3 đúng thì"},v3:{name:"V3 bất quy tắc",desc:"Ôn quá khứ phân từ hay dùng"},pick:{name:"Chọn đáp án đúng",desc:"Bị động hay chủ động, động từ nào không có bị động"}};

const PPOOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => {
 if (it.kind === "conv") PPOOL.push(mcQ("conv",ask("Chuyển sang bị động",it.a),"Chọn câu bị động đúng.",it.right,it.wrong,ref,it.expl));
 else if (it.kind === "fill") PPOOL.push(inQ("fill",fmt(it.q.replace(/ \(.+?\)/,"")),`Gợi ý: <b>${esc(it.v)}</b>. Gõ dạng bị động đúng.`,it.accept,ref,it.expl));
 else if (it.kind === "v3") PPOOL.push(inQ("v3",`<span class="ask">V3 bất quy tắc</span><span class="mono big">${it.base}</span> <span class="arrow">→</span> <span class="blank"></span>`,"Gõ quá khứ phân từ (V3) để dùng trong câu bị động.",[it.v3],ref,`${it.base} có V3 là ${it.v3}.`));
 else if (it.kind === "pick") PPOOL.push(mcQ("pick",fmt(it.q),"Chọn đáp án đúng.",it.right,it.wrong,ref,it.expl,true));
}));

const PRUSH=[["is spoken",["ps"]],["are made",["ps"]],["is being built",["pc"]],["are being repaired",["pc"]],["has been sold",["pp"]],["have been invited",["pp"]],["was stolen",["pas"]],["were taken",["pas"]],["was being washed",["pac"]],["were being painted",["pac"]],["had been eaten",["pap"]],["had been finished",["pap"]],["will be announced",["fs"]],["will be opened",["fs"]],["will have been completed",["fp"]],["will have been sent",["fp"]],["is taught",["ps"]],["has been cleaned",["pp"]],["was built",["pas"]],["will be given",["fs"]]];

GRAMMAR.quiz["passive"] = { pool: PPOOL, types: PTYPES, game: {title:"Bị động ở thì nào?",desc:"60 giây. Nhìn dạng bị động, đoán đúng thì gốc của nó",prompt:"Dạng bị động này thuộc thì nào?",items:PRUSH,all:["ps","pc","pp","pas","pac","pap","fs","fp"],label:c=>tLabel(TN[c]),name:c=>byId[TN[c]].vi,bestKey:"prushBest"} };
})();
