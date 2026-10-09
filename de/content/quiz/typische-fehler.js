/* de/content/quiz/typische-fehler.js: practice questions for
   Typische Fehler. Single exercise type: pick/produce the correct
   form in a classic confusion pair. Wrong answers can be retried
   (retry:true). */
(() => {
const FILL=[
 // weil vs denn
 ["Ich bleibe zu Hause, weil ich ___ (krank / sein).","krank / sein",["krank bin"],"de-fehler-weildenn","Sau weil, động từ (bin) đứng ở cuối."],
 ["Ich bleibe zu Hause, denn ich ___ (krank / sein).","krank / sein",["bin krank"],"de-fehler-weildenn","Sau denn, trật tự bình thường: động từ (bin) ở vị trí 2."],
 ["Er lernt Englisch, weil er ___ (nach Kanada / auswandern wollen).","nach Kanada / auswandern wollen",["nach Kanada auswandern will"],"de-fehler-weildenn","Sau weil, động từ chia (will) đứng cuối."],
 ["Er lernt Englisch, denn er ___ (nach Kanada / auswandern wollen).","nach Kanada / auswandern wollen",["will nach Kanada auswandern"],"de-fehler-weildenn","Sau denn, động từ chia (will) ở vị trí 2."],

 // seit/für/vor
 ["Ich wohne ___ (seit) 2020 in dieser Stadt.","seit",["seit"],"de-fehler-seitfuer","Việc còn tiếp diễn từ mốc 2020 đến nay: seit."],
 ["Ich war ___ (für) zwei Wochen in Spanien.","für",["für"],"de-fehler-seitfuer","Khoảng thời gian xác định trước (đã kết thúc): für."],
 ["Ich habe sie ___ (vor) drei Jahren kennengelernt.","vor",["vor"],"de-fehler-seitfuer","Mốc quá khứ đơn thuần, cách đây: vor."],
 ["Sie lernt ___ (seit) drei Monaten Deutsch.","seit",["seit"],"de-fehler-seitfuer","Việc còn tiếp diễn, tính từ mốc bắt đầu: seit."],

 // Wortstellung im Nebensatz
 ["Ich weiß, dass er morgen ___ (kommen).","kommen",["kommt"],"de-fehler-nebensatz","Động từ (kommt) đứng cuối mệnh đề dass."],
 ["Sie sagt, dass sie das Buch schon ___ (lesen, Partizip II).","lesen",["gelesen hat"],"de-fehler-nebensatz","Perfekt trong mệnh đề phụ: Partizip II + hat ở cuối."],
 ["Obwohl es regnet, ___ (wir / spazieren gehen).","wir / spazieren gehen",["gehen wir spazieren"],"de-fehler-nebensatz","Mệnh đề obwohl đứng trước: mệnh đề chính đảo động từ (gehen) lên ngay sau dấu phẩy."],
 ["Ich bin müde, weil ich die ganze Nacht nicht ___ (schlafen, Partizip II).","schlafen",["geschlafen habe"],"de-fehler-nebensatz","Perfekt trong mệnh đề weil: Partizip II + habe ở cuối."],

 // Adjektivendung
 ["Ich habe ein ___ (neu) Auto gekauft.","neu + đuôi",["neues"],"de-fehler-adjende","Nominativ/Akkusativ neutral sau “ein”: tính từ thêm -es."],
 ["Das ist ein ___ (interessant) Buch.","interessant + đuôi",["interessantes"],"de-fehler-adjende","Nominativ neutral sau “ein”: tính từ thêm -es."],
 ["Sie trägt eine ___ (schön) Jacke.","schön + đuôi",["schöne"],"de-fehler-adjende","Nominativ/Akkusativ feminin: tính từ thêm -e."],
 ["Wir haben ___ (gut) Nachrichten!","gut + đuôi",["gute"],"de-fehler-adjende","Không có mạo từ, Akkusativ số nhiều: tính từ thêm -e."],

 // Groß-/Kleinschreibung
 ["Ich lese jeden Tag ein ___ (buch).","buch",["Buch"],"de-fehler-grossschreibung","Danh từ luôn viết hoa, kể cả giữa câu."],
 ["Das ist meine große ___ (liebe) zum Lesen.","liebe",["Liebe"],"de-fehler-grossschreibung","“Liebe” ở đây là danh từ (tình yêu) nên viết hoa; tính từ “große” thì không."],
 ["Wir sprechen über die deutsche ___ (sprache).","sprache",["Sprache"],"de-fehler-grossschreibung","Danh từ (Sprache) viết hoa; tính từ (deutsche) không viết hoa."],
 ["___ (ich) gehe heute ins Kino.","ich",["Ich"],"de-fehler-grossschreibung","Đầu câu luôn viết hoa chữ cái đầu tiên, như mọi ngôn ngữ dùng chữ Latin."],
];

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Phân biệt các cặp dễ nhầm trong tiếng Đức"},
};
const POOL=[];
FILL.forEach(([s,v,acc,ref,ex])=>POOL.push({type:"fill",kind:"input",retry:true,prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Gõ đúng dạng.`,accept:acc,plain:acc[0],ref,expl:ex}));

const RUSH=[
 ["weil (V cuối)",["de-fehler-weildenn"]],["denn (V2)",["de-fehler-weildenn"]],
 ["seit (từ…đến nay)",["de-fehler-seitfuer"]],["für (khoảng xác định)",["de-fehler-seitfuer"]],["vor (cách đây)",["de-fehler-seitfuer"]],
 ["Nebensatz: V cuối",["de-fehler-nebensatz"]],
 ["Tính từ trước danh từ: có đuôi",["de-fehler-adjende"]],
 ["Danh từ: viết hoa",["de-fehler-grossschreibung"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["typische-fehler"] = { pool: POOL, types: TYPES, game: {title:"Welcher Fehler?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng chủ đề lỗi hay gặp",prompt:"Dấu hiệu này thuộc chủ đề nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"fehlerRushBest"} };
})();
