/* de/content/quiz/konditionalsaetze.js: practice questions for
   Konditionalsätze. Single exercise type: context sentences, type the
   correctly conjugated verb. Wrong answers can be retried
   (retry:true). */
(() => {
const FILL=[
 // Typ I
 ["Wenn es morgen ___ (regnen), bleiben wir zu Hause.","regnen",["regnet"],"de-kond-1","Điều kiện thực tế, có thể xảy ra: wenn + Präsens."],
 ["Wenn du fleißig ___ (lernen), bestehst du die Prüfung sicher.","lernen",["lernst"],"de-kond-1","Điều kiện khả thi: wenn + Präsens."],
 ["Wenn man Wasser ___ (erhitzen), kocht es.","erhitzen",["erhitzt"],"de-kond-1","Quy luật chung, cả hai vế đều Präsens."],
 ["Wenn ich Zeit ___ (haben), komme ich morgen vorbei.","haben",["habe"],"de-kond-1","Điều kiện thực tế có khả năng xảy ra: habe, không phải hätte."],

 // Typ II
 ["Wenn ich reich ___ (sein), würde ich die Welt bereisen.","sein",["wäre"],"de-kond-2","Giả định trái thực tế hiện tại: Konjunktiv II của sein là wäre."],
 ["Wenn ich mehr Zeit hätte, ___ (ich / lernen) mehr Sprachen.","ich / lernen",["würde ich"],"de-kond-2","Mệnh đề chính dùng würde + Infinitiv (lernen) cho giả định hiện tại."],
 ["___ (du / können) mir bitte helfen?","du / können",["Könntest du"],"de-kond-2","Đề nghị lịch sự dùng Konjunktiv II trực tiếp: könntest."],
 ["Wenn ich an deiner Stelle ___ (sein), würde ich das nicht tun.","sein",["wäre"],"de-kond-2","Giả định trái thực tế hiện tại: wäre."],

 // Typ III
 ["Wenn ich das gewusst ___ (haben), hätte ich anders reagiert.","haben",["hätte"],"de-kond-3","Giả định trái thực tế quá khứ: wenn + Partizip II + hätte."],
 ["Wenn ich Zeit gehabt hätte, ___ (ich / kommen) vorbei.","ich / kommen",["wäre ich"],"de-kond-3","Mệnh đề chính Konjunktiv II Plusquamperfekt: wäre + gekommen (kommen dùng sein)."],
 ["Wenn du mich gefragt hättest, ___ (ich / helfen) dir gern.","ich / helfen",["hätte ich"],"de-kond-3","Mệnh đề chính: hätte + Partizip II (geholfen)."],
 ["Wenn sie früher losgefahren ___ (sein), hätten sie den Zug nicht verpasst.","sein",["wäre"],"de-kond-3","Giả định trái thực tế quá khứ với động từ chuyển động (losfahren): wäre + Partizip II."],
];

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Câu ngữ cảnh, gõ đúng dạng Konjunktiv hoặc Präsens"},
};
const POOL=[];
FILL.forEach(([s,v,acc,ref,ex])=>POOL.push({type:"fill",kind:"input",retry:true,prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Gõ đúng dạng đã chia.`,accept:acc,plain:acc[0],ref,expl:ex}));

const RUSH=[
 ["wenn + Präsens",["de-kond-1"]],["có thể xảy ra",["de-kond-1"]],
 ["wenn + Präteritum Konj. II",["de-kond-2"]],["würde",["de-kond-2"]],["giả định hiện tại",["de-kond-2"]],
 ["wenn + hätte/wäre + Partizip II",["de-kond-3"]],["giả định quá khứ",["de-kond-3"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["konditionalsaetze"] = { pool: POOL, types: TYPES, game: {title:"Welcher Typ?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng loại câu điều kiện",prompt:"Dấu hiệu này thuộc loại nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"kondRushBest"} };
})();
