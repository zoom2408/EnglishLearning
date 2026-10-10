/* content/quiz/wish.js: practice questions and game for this module.
   mcQ(type, prompt, hint, right, [wrong…], lessonId, explanation)
   inQ(type, prompt, hint, [accepted answers], lessonId, explanation) */
(() => {
// ---------- Wish practice (60) ----------
// BANK keyed by lesson ref; each item carries its own `kind` (form /
// fill / rewrite / time) since this module mixes several builders.
const WT=["Hiện tại","Quá khứ","Muốn thay đổi (would)","Khả năng (could)"];
const TIME_EXPL=["V2 / were: ước trái hiện tại.","had + V3: tiếc nuối quá khứ.","O + would + V: mong người khác, sự việc thay đổi.","could + V: ước có khả năng."];

const BANK = {
 "w-present": [
  {kind:"form",q:"I wish I ___ taller.",right:"were",wrong:["am","will be","had been"],expl:"Ước trái hiện tại: were."},
  {kind:"fill",q:"I wish I ___ (have) a bigger flat.",accept:["had"],expl:"Trái hiện tại: had."},
  {kind:"fill",q:"I wish I ___ (not / have) to work tomorrow.",accept:["did not have"],expl:"Trái với tình huống hiện tại: didn't have to."},
  {kind:"rewrite",a:"I don't have a car.",right:"I wish I had a car.",wrong:["I wish I have a car.","I wish I had had a car.","I wish I would have a car."],expl:"Trái hiện tại: V2."},
  {kind:"rewrite",a:"I'm not good at maths.",right:"I wish I were good at maths.",wrong:["I wish I am good at maths.","I wish I had been good at maths now.","I wish I would be good at maths."],expl:"be dùng were."},
  {kind:"rewrite",a:"It's raining.",right:"I wish it weren't raining.",wrong:["I wish it isn't raining.","I wish it hadn't rained now.","I wish it doesn't rain."],expl:"Trái hiện tại: weren't + V-ing."},
  {kind:"rewrite",a:"I live far from my family.",right:"I wish I didn't live so far from my family.",wrong:["I wish I don't live so far from my family.","I wish I hadn't lived so far from my family now.","I wish I wouldn't live so far from my family."],expl:"Trái hiện tại: didn't + V."},
  {kind:"time",s:"I wish I had more friends.",k:0},
  {kind:"time",s:"If only I were rich.",k:0},
  {kind:"time",s:"I wish it weren't so cold today.",k:0},
 ],
 "w-past": [
  {kind:"form",q:"I wish I ___ harder for the exam last month.",right:"had studied",wrong:["studied","study","would study"],expl:"last month: tiếc nuối quá khứ, had + V3."},
  {kind:"form",q:"I wish I ___ so much yesterday.",right:"hadn't eaten",wrong:["didn't eat","don't eat","wouldn't eat"],expl:"yesterday: hadn't + V3."},
  {kind:"fill",q:"She wishes she ___ (not / say) that to him yesterday.",accept:["had not said"],expl:"yesterday: had not + V3."},
  {kind:"fill",q:"We wish we ___ (buy) that house ten years ago.",accept:["had bought"],expl:"ten years ago: had + V3."},
  {kind:"rewrite",a:"I didn't go to the party.",right:"I wish I had gone to the party.",wrong:["I wish I went to the party.","I wish I would go to the party.","I wish I have gone to the party."],expl:"Tiếc quá khứ: had + V3."},
  {kind:"rewrite",a:"I told her the secret.",right:"I wish I hadn't told her the secret.",wrong:["I wish I didn't tell her the secret.","I wish I don't tell her the secret.","I wish I wouldn't tell her the secret."],expl:"Tiếc việc đã làm: hadn't + V3."},
  {kind:"time",s:"I wish I had called her.",k:1},
  {kind:"time",s:"She wishes she hadn't sold her bike.",k:1},
  {kind:"time",s:"If only I had listened to you.",k:1},
  {kind:"time",s:"She wishes she had taken that job offer.",k:1},
 ],
 "w-would": [
  {kind:"form",q:"I wish you ___ making that noise.",right:"would stop",wrong:["will stop","stops","had stop"],expl:"Phàn nàn người khác: would + V."},
  {kind:"form",q:"I wish it ___ raining. I want to go out.",right:"would stop",wrong:["stops","will stop","stopped to"],expl:"Mong tình huống thay đổi: would + V."},
  {kind:"fill",q:"I wish my brother ___ (stop) borrowing my clothes.",accept:["would stop"],expl:"Phàn nàn người khác: would + V."},
  {kind:"rewrite",a:"My neighbour plays loud music every night.",right:"I wish my neighbour wouldn't play loud music every night.",wrong:["I wish my neighbour doesn't play loud music every night.","I wish my neighbour hadn't played loud music every night.","I wish my neighbour won't play loud music every night."],expl:"Phàn nàn thói quen người khác: wouldn't + V."},
  {kind:"time",s:"I wish he would stop complaining.",k:2},
  {kind:"time",s:"I wish the bus would come.",k:2},
  {kind:"form",q:"I wish my sister ___ leaving her clothes everywhere.",right:"would stop",wrong:["will stop","stops","had stop"],expl:"Phàn nàn người khác: would + V."},
  {kind:"fill",q:"I wish you ___ (stop) interrupting me.",accept:["would stop"],expl:"Phàn nàn: would + V."},
  {kind:"rewrite",a:"My roommate never washes the dishes.",right:"I wish my roommate would wash the dishes.",wrong:["I wish my roommate washes the dishes.","I wish my roommate had washed the dishes.","I wish my roommate washed the dishes."],expl:"Mong người khác thay đổi hành vi: would + V."},
  {kind:"time",s:"I wish the neighbours would turn the music down.",k:2},
 ],
 "w-could": [
  {kind:"form",q:"She wishes she ___ speak French.",right:"could",wrong:["can","will","could have"],expl:"Khả năng hiện tại: could."},
  {kind:"fill",q:"I wish I ___ (can) drive.",accept:["could"],expl:"can lùi thành could."},
  {kind:"rewrite",a:"I can't swim.",right:"I wish I could swim.",wrong:["I wish I can swim.","I wish I could have swim.","I wish I would swim."],expl:"can't thành could."},
  {kind:"time",s:"I wish I could fly.",k:3},
  {kind:"time",s:"I wish I could speak Korean.",k:3},
  {kind:"form",q:"I wish I ___ sing as well as her.",right:"could",wrong:["can","will","could have"],expl:"Khả năng hiện tại: could."},
  {kind:"fill",q:"He wishes he ___ (can) play the guitar.",accept:["could"],expl:"can lùi thành could."},
  {kind:"fill",q:"I wish she ___ (can) cook Vietnamese food.",accept:["could"],expl:"can lùi thành could."},
  {kind:"rewrite",a:"I can't afford a new phone.",right:"I wish I could afford a new phone.",wrong:["I wish I can afford a new phone.","I wish I could have afforded a new phone.","I wish I would afford a new phone."],expl:"can't thành could."},
  {kind:"time",s:"I wish I could understand Japanese.",k:3},
 ],
 "w-ifonly": [
  {kind:"form",q:"If only I ___ the answer now!",right:"knew",wrong:["know","had known","will know"],expl:"now: trái hiện tại, quá khứ đơn."},
  {kind:"fill",q:"If only I ___ (be) on holiday now!",accept:["were","was"],expl:"now: were (văn nói có thể dùng was)."},
  {kind:"fill",q:"If only she ___ (listen) to my advice last week!",accept:["had listened"],expl:"last week: had + V3."},
  {kind:"rewrite",a:"I'm sorry I missed the bus.",right:"If only I hadn't missed the bus.",wrong:["If only I didn't miss the bus.","If only I don't miss the bus.","If only I wouldn't miss the bus."],expl:"If only + hadn't + V3."},
  {kind:"form",q:"If only he ___ more careful, the accident wouldn't have happened.",right:"had been",wrong:["was","is","would be"],expl:"If only + had + V3: tiếc quá khứ."},
  {kind:"form",q:"If only she ___ more patient with the children.",right:"were",wrong:["is","will be","had been"],expl:"If only + V2/were: trái hiện tại."},
  {kind:"fill",q:"If only I ___ (know) about the meeting earlier!",accept:["had known"],expl:"If only + had + V3: tiếc quá khứ."},
  {kind:"fill",q:"If only it ___ (not / be) so expensive!",accept:["were not","was not","weren't","wasn't"],expl:"If only + V2/were: trái hiện tại."},
  {kind:"rewrite",a:"I don't have enough time.",right:"If only I had enough time.",wrong:["If only I have enough time.","If only I had had enough time.","If only I would have enough time."],expl:"If only + V2: trái hiện tại."},
  {kind:"rewrite",a:"I didn't apply for that scholarship.",right:"If only I had applied for that scholarship.",wrong:["If only I applied for that scholarship.","If only I would apply for that scholarship.","If only I have applied for that scholarship."],expl:"If only + had + V3: tiếc quá khứ."},
 ],
 "w-similar": [
  {kind:"form",q:"It's time we ___ home.",right:"went",wrong:["go","will go","had gone"],expl:"It's time + S + V2."},
  {kind:"form",q:"I'd rather you ___ tell anyone.",right:"didn't",wrong:["don't","won't","hadn't"],expl:"would rather + S + V2."},
  {kind:"form",q:"He talks as if he ___ the boss.",right:"were",wrong:["is being","will be","has been"],expl:"as if (không có thật) + V2 / were."},
  {kind:"fill",q:"It's high time you ___ (start) studying.",accept:["started"],expl:"It's high time + S + V2."},
  {kind:"fill",q:"I'd rather you ___ (come) earlier next time.",accept:["came"],expl:"would rather + S + V2."},
  {kind:"rewrite",a:"You should go to bed now. It's late.",right:"It's time you went to bed.",wrong:["It's time you go to bed.","It's time you had gone to bed.","It's time you will go to bed."],expl:"It's time + S + V2."},
  {kind:"form",q:"You look exhausted. It's time you ___ a break.",right:"took",wrong:["take","will take","had taken"],expl:"It's time + S + V2."},
  {kind:"fill",q:"She talks as if she ___ (know) everything.",accept:["knew"],expl:"as if + V2 (không thật): knew."},
  {kind:"rewrite",a:"You should apologise now.",right:"It's time you apologised.",wrong:["It's time you apologise.","It's time you had apologised.","It's time you will apologise."],expl:"It's time + S + V2."},
  {kind:"rewrite",a:"I'd prefer you to stay quiet.",right:"I'd rather you stayed quiet.",wrong:["I'd rather you stay quiet.","I'd rather you had stayed quiet.","I'd rather you will stay quiet."],expl:"would rather + S + V2 (quá khứ giả định)."},
 ],
};

const WTYPES={form:{name:"Chọn dạng đúng",desc:"wish, If only, It's time, would rather, as if"},fill:{name:"Điền vào chỗ trống",desc:"Tự gõ động từ sau wish"},rewrite:{name:"Viết câu ước",desc:"Từ một sự thật, viết điều ước ngược lại"},time:{name:"Ước về điều gì?",desc:"Hiện tại, quá khứ, would hay could"}};

const WPOOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => {
 if (it.kind === "form") WPOOL.push(mcQ("form",fmt(it.q),"Chọn dạng động từ đúng.",it.right,it.wrong,ref,it.expl,true));
 else if (it.kind === "fill") WPOOL.push(inQ("fill",fmt(it.q.replace(/ \(.+?\)/,"")),`Gợi ý: <b>${esc(it.q.match(/\((.+?)\)/)[1])}</b>. Gõ phần điền vào chỗ trống.`,it.accept,ref,it.expl));
 else if (it.kind === "rewrite") WPOOL.push(mcQ("rewrite",ask("Viết câu ước từ thực tế",it.a),"Chọn câu ước đúng.",it.right,it.wrong,ref,it.expl));
 else if (it.kind === "time") WPOOL.push(mcQ("time",esc(it.s),"Câu ước này nói về điều gì?",WT[it.k],WT.filter((_,i)=>i!==it.k),ref,TIME_EXPL[it.k]));
}));

const WRUSH=[["I wish I had more friends.",[WT[0]]],["I wish I had called her.",[WT[1]]],["I wish he would stop complaining.",[WT[2]]],["I wish I could fly.",[WT[3]]],["If only I were rich.",[WT[0]]],["She wishes she hadn't sold her bike.",[WT[1]]],["I wish the bus would come.",[WT[2]]],["I wish I could speak Korean.",[WT[3]]],["If only I had listened to you.",[WT[1]]],["I wish it weren't so cold today.",[WT[0]]],["I wish I lived by the sea.",[WT[0]]],["I wish I hadn't said that.",[WT[1]]],["I wish you would be quiet.",[WT[2]]],["I wish I could dance.",[WT[3]]],["If only I knew her name.",[WT[0]]],["If only we had left earlier.",[WT[1]]],["I wish they would hurry up.",[WT[2]]],["She wishes she could drive.",[WT[3]]],["I wish I weren't so tired.",[WT[0]]],["He wishes he had studied medicine.",[WT[1]]],["I wish it would stop snowing.",[WT[2]]],["I wish I could remember.",[WT[3]]],["I wish I had a dog.",[WT[0]]],["I wish I hadn't eaten that.",[WT[1]]]];

GRAMMAR.quiz["wish"] = { pool: WPOOL, types: WTYPES, game: {title:"Ước về điều gì?",desc:"60 giây. Đọc câu ước, chọn đúng: hiện tại, quá khứ, would hay could",prompt:"Câu ước này nói về điều gì?",sentence:true,items:WRUSH,all:WT,label:c=>`<span class="tl-vi">${c}</span>`,name:c=>c,bestKey:"wrushBest"} };
})();
