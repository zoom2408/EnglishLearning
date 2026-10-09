/* nb/content/quiz/setningsbygning.js: practice questions for
   Setningsbygning. Single exercise type: build the correctly ordered
   clause (verb position / ikke placement). Wrong answers can be
   retried (retry:true). */
(() => {
const FILL=[
 // V2-regel
 ["I dag ___ (jeg / reise) til Oslo.","jeg / reise",["reiser jeg"],"nb-satz-v2","“I dag” chiếm vị trí 1 nên động từ ở vị trí 2, chủ ngữ đẩy xuống sau: reiser jeg."],
 ["I morgen ___ (vi / besøke) besteforeldrene våre.","vi / besøke",["besøker vi"],"nb-satz-v2","Trạng từ thời gian ở vị trí 1, động từ vẫn vị trí 2."],
 ["Denne boka ___ (jeg / lese) i fjor.","jeg / lese",["leste jeg"],"nb-satz-v2","Tân ngữ ở vị trí 1 để nhấn mạnh, động từ vẫn vị trí 2."],

 // BIFF-regelen
 ["Hun flyttet fordi leiligheten ___ (ikke / være) stor nok.","ikke / være",["ikke var"],"nb-satz-biff","Leddsetning (fordi): ikke đứng trước động từ (var) theo BIFF."],
 ["Hun sa at hun ___ (ikke / ha) tid i dag.","ikke / ha",["ikke hadde"],"nb-satz-biff","Leddsetning (at): ikke đứng trước động từ."],
 ["Vi går ut, selv om det ___ (ikke / være) varmt.","ikke / være",["ikke er"],"nb-satz-biff","Leddsetning (selv om): ikke đứng trước động từ."],
 ["Jeg tror at han ___ (ikke / forstå) spørsmålet.","ikke / forstå",["ikke forstår"],"nb-satz-biff","Leddsetning (at): ikke trước động từ (forstår)."],

 // fordi vs for
 ["Jeg blir hjemme fordi jeg ___ (ikke / være) frisk.","ikke / være",["ikke er"],"nb-satz-fordifor","Sau fordi (leddsetning): ikke trước động từ theo BIFF."],
 ["Jeg blir hjemme, for jeg ___ (være / ikke) frisk.","være / ikke",["er ikke"],"nb-satz-fordifor","Sau for (hovedsetning): ikke đứng sau động từ như bình thường."],
 ["Hun kom for sent fordi hun ___ (ikke / høre) vekkerklokka.","ikke / høre",["ikke hørte"],"nb-satz-fordifor","fordi tạo leddsetning: ikke trước động từ (hørte)."],

 // at
 ["Jeg vet at han ___ (komme) i morgen.","komme",["kommer"],"nb-satz-at","Mệnh đề at: động từ chia bình thường (chỉ ikke mới di chuyển nếu có)."],
 ["Hun sier at hun ___ (være) trøtt.","være",["er"],"nb-satz-at","Mệnh đề at: động từ (er) theo sau chủ ngữ bình thường."],
 ["Jeg håper at du ___ (ikke / bli) sint.","ikke / bli",["ikke blir"],"nb-satz-at","Leddsetning (at): ikke trước động từ (blir)."],

 // selv om
 ["Selv om det ___ (ikke / være) varmt, går vi en tur.","ikke / være",["ikke er"],"nb-satz-selvom","Leddsetning (selv om) đứng trước: ikke trước động từ (er)."],
 ["Han kjøpte bilen selv om han ___ (ikke / ha) nok penger.","ikke / ha",["ikke hadde"],"nb-satz-selvom","Leddsetning (selv om): ikke trước động từ (hadde)."],
];

const TYPES={
 fill:{name:"Fyll inn",desc:"Câu ngữ cảnh, sắp đúng trật tự từ và vị trí ikke"},
};
const POOL=[];
FILL.forEach(([s,v,acc,ref,ex])=>POOL.push({type:"fill",kind:"input",retry:true,prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Sắp đúng trật tự từ.`,accept:acc,plain:acc[0],ref,expl:ex}));

const RUSH=[
 ["Trạng từ/tân ngữ + V + S…",["nb-satz-v2"]],
 ["fordi/at/selv om + S + ikke + V",["nb-satz-biff"]],
 ["fordi (leddsetning)",["nb-satz-fordifor"]],["for (hovedsetning)",["nb-satz-fordifor"]],
 ["at (mệnh đề danh từ)",["nb-satz-at"]],
 ["selv om (tương phản)",["nb-satz-selvom"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["setningsbygning"] = { pool: POOL, types: TYPES, game: {title:"Hvilken regel?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng quy tắc trật tự từ",prompt:"Dấu hiệu này theo quy tắc nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"satzRushBest"} };
})();
