/* de/content/quiz/inversion.js: practice questions for Inversion &
   Betonung. Single exercise type: build the correctly fronted/emphatic
   sentence. Wrong answers can be retried (retry:true). */
(() => {
const FILL=[
 // Vorfeld für Fokus
 ["Gestern ___ (ich / das Buch / lesen).","ich / das Buch / lesen",["habe ich das Buch gelesen"],"de-emph-vorfeld","“Gestern” ở vị trí 1, động từ (habe) ở vị trí 2, chủ ngữ (ich) đẩy xuống sau."],
 ["In Berlin ___ (ich / drei Jahre / leben).","ich / drei Jahre / leben",["habe ich drei Jahre gelebt"],"de-emph-vorfeld","“In Berlin” ở vị trí 1, động từ vẫn vị trí 2."],
 ["Das Buch ___ (ich / gestern / lesen).","ich / gestern / lesen",["habe ich gestern gelesen"],"de-emph-vorfeld","Tân ngữ “Das Buch” ở vị trí 1 để nhấn mạnh, động từ vẫn vị trí 2."],

 // Es als Platzhalter
 ["___ (viele Gäste / heute / kommen).","viele Gäste / heute / kommen",["Es kommen heute viele Gäste"],"de-emph-es","Không có thành phần nào khác chiếm vị trí 1 nên dùng “es” làm chỗ trống."],
 ["___ (einmal / ein König / sein).","einmal / ein König / sein",["Es war einmal ein König"],"de-emph-es","Mở đầu câu chuyện cổ tích: Es war einmal…"],
 ["___ (jemand / an der Tür / klopfen).","jemand / an der Tür / klopfen",["Es klopft jemand an der Tür"],"de-emph-es","Giới thiệu điều gì mới, chủ ngữ thực (jemand) đứng sau động từ."],

 // Nicht nur…sondern auch…
 ["Nicht nur ___ (er / Deutsch / lernen), sondern auch Französisch.","er / Deutsch / lernen",["lernt er Deutsch"],"de-emph-nichtnur","“Nicht nur” ở vị trí 1 nên động từ (lernt) đảo lên ngay sau."],
 ["Nicht nur ___ (die Firma / profitieren), sondern auch die Kunden.","die Firma / profitieren",["profitiert die Firma"],"de-emph-nichtnur","Đảo ngữ sau “Nicht nur” ở vị trí 1: động từ (profitiert) lên trước chủ ngữ."],
 ["Nicht nur ___ (das Wetter / schlecht sein), sondern auch kalt.","das Wetter / schlecht sein",["ist das Wetter schlecht"],"de-emph-nichtnur","Đảo ngữ: động từ (ist) lên ngay sau “Nicht nur”."],

 // nicht vs kein
 ["Ich habe ___ (kein) Auto.","kein",["kein"],"de-emph-negation","Phủ định danh từ không mạo từ xác định: kein."],
 ["Das Wetter ist heute ___ (nicht) schön.","nicht",["nicht"],"de-emph-negation","Phủ định tính từ: nicht."],
 ["Das ist ___ (keine) gute Idee.","keine",["keine"],"de-emph-negation","Phủ định danh từ giống cái không mạo từ xác định: keine."],
 ["Ich mag diesen Film ___ (nicht).","nicht",["nicht"],"de-emph-negation","Phủ định động từ (mag): nicht."],
];

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Câu ngữ cảnh, sắp đúng trật tự từ nhấn mạnh hoặc chọn nicht/kein"},
};
const POOL=[];
FILL.forEach(([s,v,acc,ref,ex])=>POOL.push({type:"fill",kind:"input",retry:true,prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Sắp đúng trật tự từ.`,accept:acc,plain:acc[0],ref,expl:ex}));

const RUSH=[
 ["Trạng từ/tân ngữ + V + S…",["de-emph-vorfeld"]],
 ["Es + V + chủ ngữ thực",["de-emph-es"]],
 ["Nicht nur…, sondern auch…",["de-emph-nichtnur"]],
 ["kein + danh từ",["de-emph-negation"]],["nicht + động từ/tính từ",["de-emph-negation"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["inversion"] = { pool: POOL, types: TYPES, game: {title:"Welche Struktur?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng cấu trúc nhấn mạnh",prompt:"Dấu hiệu này thuộc cấu trúc nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"invRushBest"} };
})();
