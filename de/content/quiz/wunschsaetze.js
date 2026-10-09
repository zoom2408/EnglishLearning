/* de/content/quiz/wunschsaetze.js: practice questions for
   Wunschsätze. Single exercise type: context sentences, type the
   correctly conjugated Konjunktiv II form. Wrong answers can be
   retried (retry:true). */
(() => {
const FILL=[
 // Wunsch Gegenwart
 ["Ich wünschte, ich ___ (haben) mehr Zeit für Hobbys.","haben",["hätte"],"de-wunsch-gegenwart","Ước hiện tại: Konjunktiv II của haben là hätte."],
 ["Ich wünschte, ich ___ (sein) jetzt am Strand.","sein",["wäre"],"de-wunsch-gegenwart","Ước hiện tại: Konjunktiv II của sein là wäre."],
 ["Ich wünschte, es ___ (regnen) nicht so viel.","regnen",["würde"],"de-wunsch-gegenwart","Động từ thường dùng würde + Infinitiv: würde regnen."],
 ["Ich wünschte, du ___ (zuhören) mir manchmal.","zuhören",["würdest"],"de-wunsch-gegenwart","Ngôi du: würdest + Infinitiv (zuhören)."],

 // Wunsch Vergangenheit
 ["Ich wünschte, ich ___ (lernen) mehr für die Prüfung.","lernen",["hätte"],"de-wunsch-vergangenheit","Tiếc nuối quá khứ: hätte + Partizip II (gelernt)."],
 ["Ich wünschte, ich ___ (kommen) früher.","kommen",["wäre"],"de-wunsch-vergangenheit","“kommen” dùng trợ động từ sein: wäre + gekommen."],
 ["Ich wünschte, ich ___ (sagen) das nicht.","sagen",["hätte"],"de-wunsch-vergangenheit","Tiếc nuối quá khứ: hätte + Partizip II (gesagt)."],
 ["Ich wünschte, wir ___ (bleiben) länger dort.","bleiben",["wären"],"de-wunsch-vergangenheit","“bleiben” dùng trợ động từ sein: wären + geblieben."],

 // Wenn…doch…!
 ["Wenn ich doch mehr Zeit ___ (haben)!","haben",["hätte"],"de-wunsch-wenndoch","Cảm thán ước hiện tại: Konjunktiv II hätte."],
 ["Wenn ich doch fliegen ___ (können)!","können",["könnte"],"de-wunsch-wenndoch","Cảm thán với modal verb: Konjunktiv II könnte."],
 ["Wenn ich doch nur ___ (zuhören, Partizip II)!","zuhören",["zugehört hätte"],"de-wunsch-wenndoch","Cảm thán tiếc nuối quá khứ: Partizip II + hätte ở cuối."],
 ["Wenn du doch früher ___ (kommen)!","kommen",["gekommen wärst"],"de-wunsch-wenndoch","“kommen” dùng sein; ngôi du: Partizip II + wärst."],
];

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Câu ngữ cảnh, gõ đúng dạng Konjunktiv II"},
};
const POOL=[];
FILL.forEach(([s,v,acc,ref,ex])=>POOL.push({type:"fill",kind:"input",retry:true,prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Gõ đúng dạng Konjunktiv II.`,accept:acc,plain:acc[0],ref,expl:ex}));

const RUSH=[
 ["Ich wünschte, … hätte/wäre",["de-wunsch-gegenwart"]],["Ich wünschte, … würde",["de-wunsch-gegenwart"]],
 ["Ich wünschte, … + Partizip II + hätte/wäre",["de-wunsch-vergangenheit"]],
 ["Wenn … doch … !",["de-wunsch-wenndoch"]],["Wenn … nur … !",["de-wunsch-wenndoch"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["wunschsaetze"] = { pool: POOL, types: TYPES, game: {title:"Welcher Wunschtyp?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng loại câu ước",prompt:"Dấu hiệu này thuộc loại nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"wunschRushBest"} };
})();
