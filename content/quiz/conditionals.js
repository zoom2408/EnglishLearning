/* content/quiz/cond.js: practice questions and game for this module.
   mcQ(type, prompt, hint, right, [wrong…], lessonId, explanation)
   inQ(type, prompt, hint, [accepted answers], lessonId, explanation) */
(() => {
const CK={c0:"c-zero",c1:"c-first",c2:"c-second",c3:"c-third",m32:"c-mix-past",m23:"c-mix-present",un:"c-unless",inv:"c-inversion",alt:"c-alt",wish:"c-wish"};
const cLabel=k=>{ const t=byId[CK[k]]; return `<span class="tl-vi">${t.vi}</span><span class="tl-en">${esc(t.short)}</span>`; };

// BANK keyed by question-type then the short loop code (c0/c1/.../wish,
// each maps 1:1 to a lesson ref via CK) — schema conversion only, no
// question added or removed; everything below just flattens BANK back
// into the exact tuple shapes the original CID/CCONJ/CFILL/CRW arrays
// already had, so all downstream code is unchanged.
const BANK = {
 id: {
  c0: [["If you mix red and blue, you get purple.","Sự thật luôn đúng: hai vế đều hiện tại đơn."],["Plants die if they don't get water.","Quy luật tự nhiên, hai vế hiện tại đơn."],["If you press this button, the machine stops.","Hướng dẫn sử dụng, kết quả luôn xảy ra."]],
  c1: [["If it rains tomorrow, we'll cancel the picnic.","Có thể xảy ra trong tương lai: If + hiện tại đơn, will + V."],["If you need help, I'll be in my office.","Tình huống có thể xảy ra, vế chính dùng will."],["If you study hard, you will pass.","Khả năng có thật: If + hiện tại đơn, will + V."]],
  c2: [["If I were taller, I would play basketball.","Trái với hiện tại: If + were, would + V."],["What would you do if you saw a ghost?","Tình huống tưởng tượng: saw + would do."],["If I knew her number, I would call her.","Thực tế là tôi không biết số: trái với hiện tại."]],
  c3: [["If she had left earlier, she wouldn't have missed the train.","Trái với quá khứ: had + V3, would have + V3."],["We would have won if our best player hadn't been injured.","Trái với quá khứ, hai vế đều mang dấu hiệu hoàn thành."]],
  m32: [["If I had saved money last year, I would have a car now.","Quá khứ (had saved) ảnh hưởng hiện tại (would have … now)."],["If they hadn't moved to Canada, they would still live next door.","still live chỉ hiện tại; hadn't moved là quá khứ."]],
  m23: [["If he weren't so lazy, he would have finished the report yesterday.","Tính cách hiện tại (weren't lazy) giải thích việc đã qua (yesterday)."],["If she were more careful, she wouldn't have lost her keys last night.","Đặc điểm lâu dài (careful) + việc đã qua (last night)."]],
 },
 conj: {
  c0: [["If you ___ water to 100°C, it boils.","heat",["heat","will heat","heated","had heated"],0,"Loại 0: hai vế hiện tại đơn."],["Ice ___ if the temperature drops below zero.","form",["forms","will form","formed","would form"],0,"Quy luật tự nhiên: hiện tại đơn."]],
  c1: [["If it ___ sunny tomorrow, we will go to the beach.","be",["is","will be","were","would be"],0,"Loại 1: vế If dùng hiện tại đơn dù nói về ngày mai."],["I ___ you if I hear any news.","call",["will call","would call","call","would have called"],0,"Vế If hiện tại đơn (hear) nên vế chính dùng will."]],
  c2: [["If I ___ you, I would apologise.","be",["am","was being","were","had been"],2,"If I were you là mẫu câu khuyên của loại 2."],["If she ___ harder, she would pass the test.","study",["studies","studied","had studied","would study"],1,"Vế chính would + V nên vế If dùng quá khứ đơn."],["If they ___ more money, they would buy a bigger house.","have",["have","had","will have","had had"],1,"Loại 2: If + V2."]],
  c3: [["If we had booked earlier, we ___ better seats.","get",["would get","will get","would have got","had got"],2,"Vế If là had + V3 nên vế chính là would have + V3."],["If he ___ the warning, he wouldn't have been hurt.","hear",["heard","had heard","would hear","has heard"],1,"Loại 3: vế If dùng had + V3."],["If you had asked me, I ___ you.","help",["would help","will help","would have helped","helped"],2,"Loại 3: would have + V3."]],
  m32: [["If I had gone to bed earlier, I ___ so tired now.","not be",["won't be","wouldn't be","wouldn't have been","hadn't been"],1,"Có now ở vế chính: hỗn hợp, dùng would + V."]],
  m23: [["If I spoke French, I ___ that job in Paris last year.","accept",["would accept","would have accepted","will accept","accepted"],1,"Khả năng hiện tại (spoke French) + việc đã qua (last year)."]],
  un: [["Unless you ___, you'll be late.","hurry",["hurry","don't hurry","will hurry","hurried"],0,"Unless đã mang nghĩa phủ định, động từ ở dạng khẳng định."]],
  wish: [["I wish I ___ how to swim.","know",["know","knew","had known","will know"],1,"Ước trái hiện tại: lùi về quá khứ đơn."]],
  inv: [["___ I known about the meeting, I would have come.","đảo ngữ",["If","Had","Were","Should"],1,"Đảo ngữ loại 3: Had + S + V3."]],
 },
 fill: {
  c0: [["If you ___ (not / water) plants, they die.","not / water",["do not water"],"Loại 0: hiện tại đơn, you đi với don't."],["If you ___ (heat) butter, it melts.","heat",["heat"],"Loại 0: hiện tại đơn."]],
  c1: [["If I see Minh, I ___ (tell) him the news.","tell",["will tell"],"Loại 1: vế chính will + V."],["If we ___ (leave) now, we'll catch the bus.","leave",["leave"],"Loại 1: vế If hiện tại đơn."],["If you ___ (finish) early, you can go home.","finish",["finish"],"Loại 1, vế chính dùng can."]],
  c2: [["If I ___ (be) rich, I would travel the world.","be",["were","was"],"Loại 2: chuẩn là were cho mọi ngôi; was gặp trong văn nói."],["He would buy a new phone if he ___ (have) enough money.","have",["had"],"Loại 2: If + V2."],["What would you ___ (do) if you lost your job?","do",["do"],"Sau would là động từ nguyên mẫu."]],
  c3: [["If she had known the truth, she ___ (be) angry.","be",["would have been"],"Loại 3: would have + V3."],["If they ___ (not / miss) the flight, they would have arrived on time.","not / miss",["had not missed"],"Loại 3: had not + V3."],["If I ___ (know) you were in hospital, I would have visited you.","know",["had known"],"Loại 3: had + V3."]],
  m32: [["If I had studied medicine, I ___ (be) a doctor now.","be",["would be"],"Có now: hỗn hợp, would + V."]],
  un: [["Unless it ___ (rain), we will play football.","rain",["rains"],"Vế unless: hiện tại đơn khẳng định."]],
  wish: [["I wish I ___ (can) speak Korean.","can",["could"],"Ước trái hiện tại: can lùi thành could."],["She wishes she ___ (not / eat) so much last night.","not / eat",["had not eaten"],"Ước trái quá khứ: had not + V3."]],
 },
 rw: {
  un: [["Dùng Unless","If you don't study, you will fail.","Unless you study, you will fail.",["Unless you don't study, you will fail.","Unless you will study, you fail.","Unless you studied, you will fail."],"Unless + khẳng định, giữ nguyên vế chính."],["Dùng Unless","If it doesn't rain, we'll go out.","Unless it rains, we'll go out.",["Unless it doesn't rain, we'll go out.","Unless it will rain, we'll go out.","Unless it rained, we'll go out."],"Bỏ doesn't, chia động từ khẳng định."]],
  c2: [["Nối thành câu điều kiện","I don't have a car. I can't drive to work.","If I had a car, I could drive to work.",["If I have a car, I can drive to work.","If I had had a car, I could drive to work.","If I would have a car, I could drive to work."],"Sự thật ở hiện tại nên viết câu trái hiện tại: loại 2."],["Nối thành câu điều kiện","It's raining. We can't play outside.","If it weren't raining, we could play outside.",["If it isn't raining, we can't play outside.","If it hadn't rained, we could have played outside now.","If it wouldn't rain, we could play outside."],"Trái với hiện tại: loại 2 (were + V-ing vẫn dùng được)."]],
  c3: [["Nối thành câu điều kiện","She didn't take a taxi. She was late.","If she had taken a taxi, she wouldn't have been late.",["If she took a taxi, she wouldn't be late.","If she had taken a taxi, she wouldn't be late.","If she would take a taxi, she wouldn't have been late."],"Cả hai việc đều ở quá khứ: loại 3."]],
  m32: [["Nối thành câu điều kiện","He didn't learn English. He can't work abroad now.","If he had learnt English, he could work abroad now.",["If he learnt English, he could have worked abroad now.","If he had learnt English, he could have worked abroad now.","If he learns English, he can work abroad now."],"Quá khứ ảnh hưởng hiện tại (now): hỗn hợp."]],
  inv: [["Đảo ngữ","If I had known, I would have helped.","Had I known, I would have helped.",["Had I knew, I would have helped.","If had I known, I would have helped.","Did I know, I would have helped."],"Bỏ If, đưa Had lên đầu, giữ V3."],["Đảo ngữ","If you need help, please call us.","Should you need help, please call us.",["Should you needed help, please call us.","Do you need help, please call us.","Were you need help, please call us."],"Đảo ngữ loại 1 dùng Should + S + V."],["Đảo ngữ","If I were you, I would accept the offer.","Were I you, I would accept the offer.",["Was I you, I would accept the offer.","Had I been you, I would accept the offer.","Should I be you, I would accept the offer."],"Đảo ngữ loại 2 dùng Were cho mọi ngôi."]],
  wish: [["Dùng I wish","I'm sorry I don't have a bike.","I wish I had a bike.",["I wish I have a bike.","I wish I had had a bike.","I wish I would have a bike."],"Ước trái hiện tại: quá khứ đơn."],["Dùng I wish","I regret shouting at my sister yesterday.","I wish I hadn't shouted at my sister yesterday.",["I wish I didn't shout at my sister yesterday.","I wish I don't shout at my sister yesterday.","I wish I wouldn't shout at my sister yesterday."],"Ước trái quá khứ: had + V3."]],
  alt: [["Dùng in case","Take a jacket. It might get cold.","Take a jacket in case it gets cold.",["Take a jacket in case it will get cold.","Take a jacket if case it gets cold.","Take a jacket unless it gets cold."],"in case + hiện tại đơn, nghĩa là phòng khi."],["Dùng as long as","You can borrow my laptop, but you must be careful.","You can borrow my laptop as long as you are careful.",["You can borrow my laptop as long as you will be careful.","You can borrow my laptop as long you are careful.","You can borrow my laptop unless you are careful."],"as long as + hiện tại đơn, nghĩa là với điều kiện là."],["Dùng But for","If it hadn't been for your help, I would have failed.","But for your help, I would have failed.",["But for you helped, I would have failed.","But your help, I would have failed.","But for your help, I would fail yesterday."],"But for + danh từ, vế chính giữ nguyên."],["Dùng otherwise","If you don't leave now, you'll miss the train.","Leave now, otherwise you'll miss the train.",["Leave now, otherwise you won't miss the train.","Otherwise leave now, you'll miss the train.","Leave now, otherwise you missed the train."],"otherwise nghĩa là nếu không thì, đứng giữa hai vế."]],
 },
};

// 1. Nhận diện loại (15)
const CID = Object.entries(BANK.id).flatMap(([k,items]) => items.map(([s,ex]) => [s,k,ex]));
// 2. Chia động từ (15): [câu, gợi ý, options, index, loại, giải thích]
const CCONJ = Object.entries(BANK.conj).flatMap(([k,items]) => items.map(([s,hint,options,idx,ex]) => [s,hint,options,idx,k,ex]));
// 3. Điền vào chỗ trống (15): [câu, gợi ý, đáp án, loại, giải thích]
const CFILL = Object.entries(BANK.fill).flatMap(([k,items]) => items.map(([s,v,acc,ex]) => [s,v,acc,k,ex]));
// 4. Viết lại câu (15): [yêu cầu, câu gốc, đúng, [sai], loại, giải thích]
const CRW = Object.entries(BANK.rw).flatMap(([k,items]) => items.map(([ask,b,r,w,ex]) => [ask,b,r,w,k,ex]));

const CTYPES={
 id:{name:"Nhận diện loại câu",desc:"Đọc câu, chọn đúng loại điều kiện"},
 conj:{name:"Chia động từ",desc:"Chọn dạng động từ đúng cho từng vế"},
 fill:{name:"Điền vào chỗ trống",desc:"Tự gõ động từ đã chia"},
 rw:{name:"Viết lại câu",desc:"Unless, đảo ngữ, I wish, nối hai câu"},
};
const CPOOL=[];
const CIDK=["c0","c1","c2","c3","m32","m23"];
CID.forEach(([s,k,ex])=>CPOOL.push({type:"id",kind:"mc",prompt:esc(s),hint:"Câu này thuộc loại nào?",options:[k,...shuffle(CIDK.filter(x=>x!==k)).slice(0,3)].map(cLabel),plain:byId[CK[k]].vi,answer:0,ref:CK[k],expl:ex}));
CCONJ.forEach(q=>CPOOL.push({type:"conj",kind:"mc",prompt:fmt(q[0]),hint:`Gợi ý: <b>${esc(q[1])}</b>`,options:q[2].map(o=>`<span class="mono">${esc(o)}</span>`),plain:q[2][q[3]],answer:q[3],ref:CK[q[4]],expl:q[5]}));
CFILL.forEach(([s,v,acc,k,ex])=>CPOOL.push({type:"fill",kind:"input",prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Gõ phần điền vào chỗ trống.`,accept:acc,plain:acc[0],ref:CK[k],expl:ex}));
CRW.forEach(([ask,b,r,w,k,ex])=>CPOOL.push({type:"rw",kind:"mc",prompt:`<span class="ask">${esc(ask)}</span>${esc(b)}`,hint:"Chọn câu viết lại đúng và giữ nguyên nghĩa.",options:[r,...w].map(esc),plain:r,answer:0,ref:CK[k],expl:ex}));
const CRUSH=CID.map(([s,k])=>[s,[k]]).concat([
 ["If you freeze water, it turns to ice.",["c0"]],["If I see her, I'll say hi.",["c1"]],["If I had wings, I would fly.",["c2"]],
 ["If I had known, I would have come.",["c3"]],["If I hadn't eaten so much, I wouldn't feel sick now.",["m32"]],
 ["If she were more organised, she wouldn't have missed the deadline.",["m23"]],["If you don't hurry, you'll miss it.",["c1"]],
 ["If I lived in Paris, I'd visit the Louvre every week.",["c2"]],["If we had left on time, we would have caught the plane.",["c3"]],
 ["If you mix oil and water, they separate.",["c0"]],["If he calls, I'll tell him.",["c1"]],["If I were a bird, I would sing all day.",["c2"]],
 ["If you had listened, you wouldn't have made that mistake.",["c3"]],["If I had learnt to drive, I could drive you home now.",["m32"]],["If people exercise, they feel better.",["c0"]],
]);

GRAMMAR.quiz["cond"] = { pool: CPOOL, types: CTYPES, game: {title:"Đoán loại nhanh",desc:"60 giây. Đọc câu, chọn đúng loại điều kiện càng nhanh càng tốt",prompt:"Câu này thuộc loại nào?",sentence:true,items:CRUSH,all:CIDK,label:cLabel,name:k=>byId[CK[k]].vi,bestKey:"crushBest"} };
})();
