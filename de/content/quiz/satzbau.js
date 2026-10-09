/* de/content/quiz/satzbau.js: practice questions for Satzbau &
   Nebensätze. Single exercise type: build the correctly-ordered
   clause (verb position). Wrong answers can be retried (retry:true). */
(() => {
const FILL=[
 // V2-Regel
 ["Heute ___ (ich / gehen) ins Kino.","ich / gehen",["gehe ich"],"de-satz-v2","“Heute” chiếm vị trí 1 nên động từ phải ở vị trí 2, chủ ngữ đẩy xuống sau: gehe ich."],
 ["Nach der Arbeit ___ (ich / fahren) nach Hause.","ich / fahren",["fahre ich"],"de-satz-v2","Cụm trạng từ ở vị trí 1, động từ vẫn giữ vị trí 2: fahre ich."],
 ["Morgen ___ (wir / besuchen) unsere Oma.","wir / besuchen",["besuchen wir"],"de-satz-v2","“Morgen” ở vị trí 1, động từ vị trí 2: besuchen wir."],

 // weil
 ["Ich bleibe zu Hause, weil ___ (ich / krank / sein).","ich / krank / sein",["ich krank bin"],"de-satz-weil","Sau weil, động từ chia (bin) đứng ở cuối mệnh đề."],
 ["Sie lernt Deutsch, weil ___ (sie / in Berlin / leben).","sie / in Berlin / leben",["sie in Berlin lebt"],"de-satz-weil","Sau weil, động từ (lebt) đứng cuối, chủ ngữ + trạng từ đứng trước."],
 ["Wir gehen nicht raus, weil ___ (es / regnen).","es / regnen",["es regnet"],"de-satz-weil","Sau weil, động từ (regnet) đứng ở cuối mệnh đề."],

 // dass
 ["Ich weiß, dass ___ (er / morgen / kommen).","er / morgen / kommen",["er morgen kommt"],"de-satz-dass","Sau dass, động từ (kommt) đứng cuối mệnh đề."],
 ["Sie sagt, dass ___ (sie / müde / sein).","sie / müde / sein",["sie müde ist"],"de-satz-dass","Sau dass, động từ (ist) đứng ở cuối mệnh đề."],
 ["Ich glaube, dass ___ (das / nicht / stimmen).","das / nicht / stimmen",["das nicht stimmt"],"de-satz-dass","“nicht” đứng ngay trước động từ cuối câu: nicht stimmt."],

 // obwohl
 ["Wir gehen spazieren, obwohl ___ (es / regnen).","es / regnen",["es regnet"],"de-satz-obwohl","Sau obwohl, động từ (regnet) đứng ở cuối mệnh đề."],
 ["Obwohl ___ (es / regnen), gehen wir trotzdem spazieren.","es / regnen",["es regnet"],"de-satz-obwohl","Mệnh đề obwohl đứng trước: động từ (regnet) vẫn ở cuối mệnh đề phụ, trước dấu phẩy."],
 ["Er kauft das Auto, obwohl ___ (es / sehr teuer / sein).","es / sehr teuer / sein",["es sehr teuer ist"],"de-satz-obwohl","Sau obwohl, động từ (ist) đứng ở cuối mệnh đề."],

 // damit / um…zu
 ["Ich lerne jeden Tag, ___ (die Prüfung / bestehen).","die Prüfung / bestehen",["um die Prüfung zu bestehen"],"de-satz-damit","Chủ ngữ hai mệnh đề giống nhau (ich … ich) → um…zu + Infinitiv."],
 ["Ich spreche langsam, ___ (du / mich / verstehen).","du / mich / verstehen",["damit du mich verstehst"],"de-satz-damit","Chủ ngữ hai mệnh đề khác nhau (ich / du) → damit + mệnh đề đầy đủ, động từ cuối câu."],
 ["Sie spart Geld, ___ (ein Auto / kaufen).","ein Auto / kaufen",["um ein Auto zu kaufen"],"de-satz-damit","Chủ ngữ giống nhau (sie … sie) → um…zu + Infinitiv."],
 ["Ich gehe früh ins Bett, ___ (meine Kinder / nicht gestört werden).","meine Kinder / nicht gestört werden",["damit meine Kinder nicht gestört werden"],"de-satz-damit","Chủ ngữ khác nhau (ich / meine Kinder) → damit + mệnh đề đầy đủ, động từ (werden) cuối câu."],
];

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Câu ngữ cảnh, sắp đúng trật tự từ và vị trí động từ"},
};
const POOL=[];
FILL.forEach(([s,v,acc,ref,ex])=>POOL.push({type:"fill",kind:"input",retry:true,prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Sắp đúng trật tự từ và chia động từ.`,accept:acc,plain:acc[0],ref,expl:ex}));

const RUSH=[
 ["Chủ ngữ/trạng từ + V...",["de-satz-v2"]],
 ["weil / da",["de-satz-weil"]],["Warum?",["de-satz-weil"]],
 ["dass",["de-satz-dass"]],["wissen/glauben/sagen, dass…",["de-satz-dass"]],
 ["obwohl",["de-satz-obwohl"]],["trotzdem (trạng từ)",["de-satz-obwohl"]],
 ["um…zu (cùng chủ ngữ)",["de-satz-damit"]],["damit (chủ ngữ khác)",["de-satz-damit"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["satzbau"] = { pool: POOL, types: TYPES, game: {title:"Welcher Satztyp?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng loại mệnh đề",prompt:"Dấu hiệu này thuộc loại mệnh đề nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"satzRushBest"} };
})();
