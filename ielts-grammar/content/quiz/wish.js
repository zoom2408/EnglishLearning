/* content/quiz/wish.js: practice questions and game for this module.
   mcQ(type, prompt, hint, right, [wrong…], lessonId, explanation)
   inQ(type, prompt, hint, [accepted answers], lessonId, explanation) */
(() => {
// ---------- Wish practice (40) ----------
const WPOOL=[];
[["I wish I ___ taller.","were",["am","will be","had been"],"w-present","Ước trái hiện tại: were."],
 ["I wish I ___ harder for the exam last month.","had studied",["studied","study","would study"],"w-past","last month: tiếc nuối quá khứ, had + V3."],
 ["I wish you ___ making that noise.","would stop",["will stop","stops","had stop"],"w-would","Phàn nàn người khác: would + V."],
 ["She wishes she ___ speak French.","could",["can","will","could have"],"w-could","Khả năng hiện tại: could."],
 ["If only I ___ the answer now!","knew",["know","had known","will know"],"w-ifonly","now: trái hiện tại, quá khứ đơn."],
 ["I wish I ___ so much yesterday.","hadn't eaten",["didn't eat","don't eat","wouldn't eat"],"w-past","yesterday: hadn't + V3."],
 ["It's time we ___ home.","went",["go","will go","had gone"],"w-similar","It's time + S + V2."],
 ["I'd rather you ___ tell anyone.","didn't",["don't","won't","hadn't"],"w-similar","would rather + S + V2."],
 ["He talks as if he ___ the boss.","were",["is being","will be","has been"],"w-similar","as if (không có thật) + V2 / were."],
 ["I wish it ___ raining. I want to go out.","would stop",["stops","will stop","stopped to"],"w-would","Mong tình huống thay đổi: would + V."],
].forEach(([s,r,w,ref,ex])=>WPOOL.push(mcQ("form",fmt(s),"Chọn dạng động từ đúng.",r,w,ref,ex,true)));
[["I wish I ___ (have) a bigger flat.",["had"],"w-present","Trái hiện tại: had."],
 ["She wishes she ___ (not / say) that to him yesterday.",["had not said"],"w-past","yesterday: had not + V3."],
 ["I wish I ___ (can) drive.",["could"],"w-could","can lùi thành could."],
 ["If only I ___ (be) on holiday now!",["were","was"],"w-ifonly","now: were (văn nói có thể dùng was)."],
 ["I wish my brother ___ (stop) borrowing my clothes.",["would stop"],"w-would","Phàn nàn người khác: would + V."],
 ["We wish we ___ (buy) that house ten years ago.",["had bought"],"w-past","ten years ago: had + V3."],
 ["I wish I ___ (not / have) to work tomorrow.",["did not have"],"w-present","Trái với tình huống hiện tại: didn't have to."],
 ["It's high time you ___ (start) studying.",["started"],"w-similar","It's high time + S + V2."],
 ["I'd rather you ___ (come) earlier next time.",["came"],"w-similar","would rather + S + V2."],
 ["If only she ___ (listen) to my advice last week!",["had listened"],"w-ifonly","last week: had + V3."],
].forEach(([s,acc,ref,ex])=>WPOOL.push(inQ("fill",fmt(s.replace(/ \(.+?\)/,"")),`Gợi ý: <b>${esc(s.match(/\((.+?)\)/)[1])}</b>. Gõ phần điền vào chỗ trống.`,acc,ref,ex)));
[["I don't have a car.","I wish I had a car.",["I wish I have a car.","I wish I had had a car.","I wish I would have a car."],"w-present","Trái hiện tại: V2."],
 ["I didn't go to the party.","I wish I had gone to the party.",["I wish I went to the party.","I wish I would go to the party.","I wish I have gone to the party."],"w-past","Tiếc quá khứ: had + V3."],
 ["My neighbour plays loud music every night.","I wish my neighbour wouldn't play loud music every night.",["I wish my neighbour doesn't play loud music every night.","I wish my neighbour hadn't played loud music every night.","I wish my neighbour won't play loud music every night."],"w-would","Phàn nàn thói quen người khác: wouldn't + V."],
 ["I can't swim.","I wish I could swim.",["I wish I can swim.","I wish I could have swim.","I wish I would swim."],"w-could","can't thành could."],
 ["I'm not good at maths.","I wish I were good at maths.",["I wish I am good at maths.","I wish I had been good at maths now.","I wish I would be good at maths."],"w-present","be dùng were."],
 ["I told her the secret.","I wish I hadn't told her the secret.",["I wish I didn't tell her the secret.","I wish I don't tell her the secret.","I wish I wouldn't tell her the secret."],"w-past","Tiếc việc đã làm: hadn't + V3."],
 ["It's raining.","I wish it weren't raining.",["I wish it isn't raining.","I wish it hadn't rained now.","I wish it doesn't rain."],"w-present","Trái hiện tại: weren't + V-ing."],
 ["I'm sorry I missed the bus.","If only I hadn't missed the bus.",["If only I didn't miss the bus.","If only I don't miss the bus.","If only I wouldn't miss the bus."],"w-ifonly","If only + hadn't + V3."],
 ["You should go to bed now. It's late.","It's time you went to bed.",["It's time you go to bed.","It's time you had gone to bed.","It's time you will go to bed."],"w-similar","It's time + S + V2."],
 ["I live far from my family.","I wish I didn't live so far from my family.",["I wish I don't live so far from my family.","I wish I hadn't lived so far from my family now.","I wish I wouldn't live so far from my family."],"w-present","Trái hiện tại: didn't + V."],
].forEach(([a,r,w,ref,ex])=>WPOOL.push(mcQ("rewrite",ask("Viết câu ước từ thực tế",a),"Chọn câu ước đúng.",r,w,ref,ex)));
const WT=["Hiện tại","Quá khứ","Muốn thay đổi (would)","Khả năng (could)"];
const WTREF=["w-present","w-past","w-would","w-could"];
[["I wish I had more friends.",0],["I wish I had called her.",1],["I wish he would stop complaining.",2],["I wish I could fly.",3],["If only I were rich.",0],["She wishes she hadn't sold her bike.",1],["I wish the bus would come.",2],["I wish I could speak Korean.",3],["If only I had listened to you.",1],["I wish it weren't so cold today.",0]]
 .forEach(([s,k])=>WPOOL.push(mcQ("time",esc(s),"Câu ước này nói về điều gì?",WT[k],WT.filter((_,i)=>i!==k),WTREF[k],["V2 / were: ước trái hiện tại.","had + V3: tiếc nuối quá khứ.","O + would + V: mong người khác, sự việc thay đổi.","could + V: ước có khả năng."][k])));
const WTYPES={form:{name:"Chọn dạng đúng",desc:"wish, If only, It's time, would rather, as if"},fill:{name:"Điền vào chỗ trống",desc:"Tự gõ động từ sau wish"},rewrite:{name:"Viết câu ước",desc:"Từ một sự thật, viết điều ước ngược lại"},time:{name:"Ước về điều gì?",desc:"Hiện tại, quá khứ, would hay could"}};
const WRUSH=[["I wish I had more friends.",[WT[0]]],["I wish I had called her.",[WT[1]]],["I wish he would stop complaining.",[WT[2]]],["I wish I could fly.",[WT[3]]],["If only I were rich.",[WT[0]]],["She wishes she hadn't sold her bike.",[WT[1]]],["I wish the bus would come.",[WT[2]]],["I wish I could speak Korean.",[WT[3]]],["If only I had listened to you.",[WT[1]]],["I wish it weren't so cold today.",[WT[0]]],["I wish I lived by the sea.",[WT[0]]],["I wish I hadn't said that.",[WT[1]]],["I wish you would be quiet.",[WT[2]]],["I wish I could dance.",[WT[3]]],["If only I knew her name.",[WT[0]]],["If only we had left earlier.",[WT[1]]],["I wish they would hurry up.",[WT[2]]],["She wishes she could drive.",[WT[3]]],["I wish I weren't so tired.",[WT[0]]],["He wishes he had studied medicine.",[WT[1]]],["I wish it would stop snowing.",[WT[2]]],["I wish I could remember.",[WT[3]]],["I wish I had a dog.",[WT[0]]],["I wish I hadn't eaten that.",[WT[1]]]];

GRAMMAR.quiz["wish"] = { pool: WPOOL, types: WTYPES, game: {title:"Ước về điều gì?",desc:"60 giây. Đọc câu ước, chọn đúng: hiện tại, quá khứ, would hay could",prompt:"Câu ước này nói về điều gì?",sentence:true,items:WRUSH,all:WT,label:c=>`<span class="tl-vi">${c}</span>`,name:c=>c,bestKey:"wrushBest"} };
})();
