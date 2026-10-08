/* content/quiz/passive.js: practice questions and game for this module.
   mcQ(type, prompt, hint, right, [wrong…], lessonId, explanation)
   inQ(type, prompt, hint, [accepted answers], lessonId, explanation) */
(() => {
// Passive (40)
const PPOOL=[];
[["They clean the office every day.","The office is cleaned every day.",["The office is clean every day.","The office was cleaned every day.","The office cleans every day."],"p-tenses","Hiện tại đơn: is + V3."],
 ["Someone stole my phone.","My phone was stolen.",["My phone was stole.","My phone is stolen.","My phone has stolen."],"p-basic","Quá khứ đơn: was + V3; bỏ by someone."],
 ["They are building a new school.","A new school is being built.",["A new school is built.","A new school is being build.","A new school has being built."],"p-tenses","Hiện tại tiếp diễn: is being + V3."],
 ["People have sold all the tickets.","All the tickets have been sold.",["All the tickets have sold.","All the tickets has been sold.","All the tickets were been sold."],"p-tenses","Hiện tại hoàn thành: have been + V3."],
 ["The company will announce the results tomorrow.","The results will be announced tomorrow.",["The results will announced tomorrow.","The results will be announce tomorrow.","The results are announced tomorrow."],"p-tenses","Tương lai đơn: will be + V3."],
 ["You must finish the report today.","The report must be finished today.",["The report must finished today.","The report must be finish today.","The report must been finished today."],"p-modal","Modal + be + V3."],
 ["Did they invite you to the party?","Were you invited to the party?",["Did you invited to the party?","Was you invited to the party?","Were you invite to the party?"],"p-questions","Câu hỏi bị động: Were + S + V3?"],
 ["They gave me a certificate.","I was given a certificate.",["I was gave a certificate.","I gave a certificate.","I am given a certificate."],"p-two-objects","Người nhận làm chủ ngữ: was given."],
 ["People say that he is a genius.","He is said to be a genius.",["He is said that he is a genius.","He says to be a genius.","He is saying to be a genius."],"p-reporting","S + is said + to V."],
 ["A hairdresser cut my hair yesterday.","I had my hair cut yesterday.",["I had cut my hair yesterday.","I had my hair cutting yesterday.","I cut my hair by a hairdresser."],"p-causative","Thể nhờ bảo: have + O + V3."],
].forEach(([a,r,w,ref,ex])=>PPOOL.push(mcQ("conv",ask("Chuyển sang bị động",a),"Chọn câu bị động đúng.",r,w,ref,ex)));
[["English ___ (speak) in many countries.","speak",["is spoken"],"p-tenses","Sự thật chung: is + V3."],
 ["The Eiffel Tower ___ (build) in 1889.","build",["was built"],"p-tenses","Mốc quá khứ: was + V3."],
 ["The road ___ (repair) at the moment.","repair",["is being repaired"],"p-tenses","at the moment: is being + V3."],
 ["Your parcel ___ (deliver) already.","deliver",["has been delivered"],"p-tenses","already: has been + V3."],
 ["The winners ___ (announce) next week.","announce",["will be announced"],"p-tenses","next week: will be + V3."],
 ["When we arrived, the food ___ (eat) already.","eat",["had been eaten"],"p-tenses","Trước một mốc quá khứ: had been + V3."],
 ["Phones must ___ (switch) off during the exam.","switch",["be switched"],"p-modal","must + be + V3."],
 ["The house ___ (paint) when I visited.","paint",["was being painted"],"p-tenses","Đang diễn ra trong quá khứ: was being + V3."],
 ["This letter should ___ (send) yesterday.","send",["have been sent"],"p-modal","should have been + V3: đáng lẽ đã phải."],
 ["I'm going to have my car ___ (wash).","wash",["washed"],"p-causative","have + O + V3."],
].forEach(([s,v,acc,ref,ex])=>PPOOL.push(inQ("fill",fmt(s.replace(/ \(.+?\)/,"")),`Gợi ý: <b>${esc(v)}</b>. Gõ dạng bị động đúng.`,acc,ref,ex)));
[["write","written"],["speak","spoken"],["build","built"],["steal","stolen"],["break","broken"],["choose","chosen"],["make","made"],["teach","taught"],["give","given"],["take","taken"]]
 .forEach(([b,v3])=>PPOOL.push(inQ("v3",`<span class="ask">V3 bất quy tắc</span><span class="mono big">${b}</span> <span class="arrow">→</span> <span class="blank"></span>`,"Gõ quá khứ phân từ (V3) để dùng trong câu bị động.",[v3],"p-basic",`${b} có V3 là ${v3}.`)));
[["The accident ___ last night.","happened",["was happened","is happened","was happening by"],"p-not","happen là nội động từ, không có bị động."],
 ["My wallet ___ on the bus yesterday.","was stolen",["stole","was stealing","has stolen"],"p-basic","Ví bị lấy: bị động quá khứ đơn."],
 ["She ___ her mother very much.","resembles",["is resembled","is resembling by","was resembled"],"p-not","resemble là động từ trạng thái, không dùng bị động."],
 ["Rice ___ in many Asian countries.","is grown",["grows by people","is growing by","grown"],"p-basic","Người làm không quan trọng: is + V3."],
 ["The new bridge ___ next year.","will be opened",["will open by","is opening by","will be open by"],"p-tenses","Tương lai bị động: will be + V3."],
 ["Who ___ this song ___ by?","was … written",["did … write","was … wrote","is … writing"],"p-questions","Who + be + S + V3 + by?"],
 ["I was ___ a job in Da Nang.","offered",["offer","offering","to offer"],"p-two-objects","be + V3: was offered."],
 ["He ___ to have left the country.","is believed",["believes","is believing","was believe"],"p-reporting","S + is believed + to have V3."],
 ["We need to get the roof ___.","repaired",["repair","repairing","to repair"],"p-causative","get + O + V3."],
 ["The patient ___ to hospital an hour ago.","was taken",["took","has been taken","was took"],"p-tenses","an hour ago: was + V3."],
].forEach(([s,r,w,ref,ex])=>PPOOL.push(mcQ("pick",fmt(s),"Chọn đáp án đúng.",r,w,ref,ex,true)));
const PTYPES={conv:{name:"Chuyển sang bị động",desc:"Chọn câu bị động đúng từ câu chủ động"},fill:{name:"Chia bị động theo thì",desc:"Tự gõ be + V3 đúng thì"},v3:{name:"V3 bất quy tắc",desc:"Ôn quá khứ phân từ hay dùng"},pick:{name:"Chọn đáp án đúng",desc:"Bị động hay chủ động, động từ nào không có bị động"}};
const PRUSH=[["is spoken",["ps"]],["are made",["ps"]],["is being built",["pc"]],["are being repaired",["pc"]],["has been sold",["pp"]],["have been invited",["pp"]],["was stolen",["pas"]],["were taken",["pas"]],["was being washed",["pac"]],["were being painted",["pac"]],["had been eaten",["pap"]],["had been finished",["pap"]],["will be announced",["fs"]],["will be opened",["fs"]],["will have been completed",["fp"]],["will have been sent",["fp"]],["is taught",["ps"]],["has been cleaned",["pp"]],["was built",["pas"]],["will be given",["fs"]]];

GRAMMAR.quiz["passive"] = { pool: PPOOL, types: PTYPES, game: {title:"Bị động ở thì nào?",desc:"60 giây. Nhìn dạng bị động, đoán đúng thì gốc của nó",prompt:"Dạng bị động này thuộc thì nào?",items:PRUSH,all:["ps","pc","pp","pas","pac","pap","fs","fp"],label:c=>tLabel(TN[c]),name:c=>byId[TN[c]].vi,bestKey:"prushBest"} };
})();
