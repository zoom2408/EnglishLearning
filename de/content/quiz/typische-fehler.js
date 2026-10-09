/* de/content/quiz/typische-fehler.js: practice questions for
   Typische Fehler. BANK groups items by row id (sub-topic). Single
   exercise type: pick/produce the correct form in a classic
   confusion pair. Wrong answers can be retried (retry:true). */
(() => {
const BANK = {
 "de-fehler-weildenn": [
  {q:"Ich bleibe zu Hause, weil ich ___ (krank / sein).",hint:"krank / sein",accept:["krank bin"],level:"A2",expl:"Sau weil, động từ (bin) đứng ở cuối."},
  {q:"Ich bleibe zu Hause, denn ich ___ (krank / sein).",hint:"krank / sein",accept:["bin krank"],level:"A2",expl:"Sau denn, trật tự bình thường: động từ (bin) ở vị trí 2."},
  {q:"Er lernt Englisch, weil er ___ (nach Kanada / auswandern wollen).",hint:"nach Kanada / auswandern wollen",accept:["nach Kanada auswandern will"],level:"B1",expl:"Sau weil, động từ chia (will) đứng cuối."},
  {q:"Er lernt Englisch, denn er ___ (nach Kanada / auswandern wollen).",hint:"nach Kanada / auswandern wollen",accept:["will nach Kanada auswandern"],level:"B1",expl:"Sau denn, động từ chia (will) ở vị trí 2."},
  {q:"Sie geht früh schlafen, weil sie ___ (morgen / früh aufstehen müssen).",hint:"morgen / früh aufstehen müssen",accept:["morgen früh aufstehen muss"],level:"B1",expl:"Sau weil, động từ chia (muss) đứng cuối."},
  {q:"Sie geht früh schlafen, denn sie ___ (morgen / früh aufstehen müssen).",hint:"morgen / früh aufstehen müssen",accept:["muss morgen früh aufstehen"],level:"B1",expl:"Sau denn, động từ chia (muss) ở vị trí 2."},
  {q:"Wir bleiben drinnen, weil es ___ (draußen / regnen).",hint:"draußen / regnen",accept:["draußen regnet"],level:"A2",expl:"Sau weil, động từ (regnet) đứng cuối."},
  {q:"Wir bleiben drinnen, denn es ___ (draußen / regnen).",hint:"draußen / regnen",accept:["regnet draußen"],level:"A2",expl:"Sau denn, động từ (regnet) ở vị trí 2."},
  {q:"Ich lerne viel, weil ich ___ (die Prüfung / bestehen wollen).",hint:"die Prüfung / bestehen wollen",accept:["die Prüfung bestehen will"],level:"B1",expl:"Sau weil, động từ chia (will) đứng cuối."},
  {q:"Ich lerne viel, denn ich ___ (die Prüfung / bestehen wollen).",hint:"die Prüfung / bestehen wollen",accept:["will die Prüfung bestehen"],level:"B1",expl:"Sau denn, động từ chia (will) ở vị trí 2."},
  {q:"Er ist müde, weil er ___ (viel / arbeiten).",hint:"viel / arbeiten",accept:["viel arbeitet"],level:"A2",expl:"Sau weil, động từ (arbeitet) đứng cuối."},
  {q:"Er ist müde, denn er ___ (viel / arbeiten).",hint:"viel / arbeiten",accept:["arbeitet viel"],level:"A2",expl:"Sau denn, động từ (arbeitet) ở vị trí 2."},
 ],
 "de-fehler-seitfuer": [
  {q:"Ich wohne ___ (seit) 2020 in dieser Stadt.",hint:"seit",accept:["seit"],level:"A2",expl:"Việc còn tiếp diễn từ mốc 2020 đến nay: seit."},
  {q:"Ich war ___ (für) zwei Wochen in Spanien.",hint:"für",accept:["für"],level:"A2",expl:"Khoảng thời gian xác định trước (đã kết thúc): für."},
  {q:"Ich habe sie ___ (vor) drei Jahren kennengelernt.",hint:"vor",accept:["vor"],level:"A2",expl:"Mốc quá khứ đơn thuần, cách đây: vor."},
  {q:"Sie lernt ___ (seit) drei Monaten Deutsch.",hint:"seit",accept:["seit"],level:"A2",expl:"Việc còn tiếp diễn, tính từ mốc bắt đầu: seit."},
  {q:"Er arbeitet ___ (seit) fünf Jahren hier.",hint:"seit",accept:["seit"],level:"A2",expl:"Việc còn tiếp diễn đến hiện tại: seit."},
  {q:"Wir waren ___ (für) einen Monat in Italien.",hint:"für",accept:["für"],level:"A2",expl:"Khoảng thời gian xác định, đã kết thúc: für."},
  {q:"Ich habe das Auto ___ (vor) zwei Tagen gekauft.",hint:"vor",accept:["vor"],level:"A2",expl:"Mốc quá khứ, cách đây: vor."},
  {q:"Sie wohnt ___ (seit) ihrer Geburt in Hamburg.",hint:"seit",accept:["seit"],level:"B1",expl:"Việc còn tiếp diễn từ một mốc trong quá khứ: seit."},
  {q:"Der Kurs dauert ___ (für) sechs Wochen.",hint:"für",accept:["für"],level:"B1",expl:"Khoảng thời gian xác định: für."},
  {q:"Wir haben uns ___ (vor) einem Jahr kennengelernt.",hint:"vor",accept:["vor"],level:"A2",expl:"Mốc quá khứ, cách đây: vor."},
  {q:"Ich warte ___ (seit) einer Stunde auf den Bus.",hint:"seit",accept:["seit"],level:"A2",expl:"Việc còn tiếp diễn, tính từ mốc bắt đầu: seit."},
  {q:"Sie war ___ (für) drei Tage krank.",hint:"für",accept:["für"],level:"A2",expl:"Khoảng thời gian xác định, đã kết thúc: für."},
 ],
 "de-fehler-nebensatz": [
  {q:"Ich weiß, dass er morgen ___ (kommen).",hint:"kommen",accept:["kommt"],level:"A2",expl:"Động từ (kommt) đứng cuối mệnh đề dass."},
  {q:"Sie sagt, dass sie das Buch schon ___ (lesen, Partizip II).",hint:"lesen",accept:["gelesen hat"],level:"B1",expl:"Perfekt trong mệnh đề phụ: Partizip II + hat ở cuối."},
  {q:"Obwohl es regnet, ___ (wir / spazieren gehen).",hint:"wir / spazieren gehen",accept:["gehen wir spazieren"],level:"B1",expl:"Mệnh đề obwohl đứng trước: mệnh đề chính đảo động từ (gehen) lên ngay sau dấu phẩy."},
  {q:"Ich bin müde, weil ich die ganze Nacht nicht ___ (schlafen, Partizip II).",hint:"schlafen",accept:["geschlafen habe"],level:"B1",expl:"Perfekt trong mệnh đề weil: Partizip II + habe ở cuối."},
  {q:"Ich glaube, dass sie heute ___ (kommen).",hint:"kommen",accept:["kommt"],level:"A2",expl:"Động từ (kommt) đứng cuối mệnh đề dass."},
  {q:"Er sagt, dass er das Projekt schon ___ (beenden, Partizip II).",hint:"beenden",accept:["beendet hat"],level:"B1",expl:"Perfekt trong mệnh đề dass: Partizip II + hat ở cuối."},
  {q:"Obwohl er krank ist, ___ (er / arbeiten gehen).",hint:"er / arbeiten gehen",accept:["geht er arbeiten"],level:"B1",expl:"Mệnh đề obwohl đứng trước: mệnh đề chính đảo động từ (geht) lên ngay sau dấu phẩy."},
  {q:"Wir bleiben zu Hause, weil wir das Haus noch nicht ___ (aufräumen, Partizip II).",hint:"aufräumen",accept:["aufgeräumt haben"],level:"B1",expl:"Perfekt trong mệnh đề weil: Partizip II + haben ở cuối."},
  {q:"Ich hoffe, dass du mir ___ (helfen können).",hint:"helfen können",accept:["helfen kannst"],level:"B1",expl:"Động từ khiếm định chia (kannst) đứng cuối mệnh đề dass."},
  {q:"Sie weiß, dass ich die Prüfung schon ___ (bestehen, Partizip II).",hint:"bestehen",accept:["bestanden habe"],level:"B1",expl:"Perfekt trong mệnh đề dass: Partizip II + habe ở cuối."},
  {q:"Obwohl sie müde ist, ___ (sie / weiterarbeiten).",hint:"sie / weiterarbeiten",accept:["arbeitet sie weiter"],level:"B1",expl:"Mệnh đề obwohl đứng trước: mệnh đề chính đảo động từ (arbeitet) lên ngay sau dấu phẩy."},
  {q:"Ich bin froh, weil ich die Stelle ___ (bekommen, Partizip II).",hint:"bekommen",accept:["bekommen habe"],level:"B1",expl:"Perfekt trong mệnh đề weil: Partizip II + habe ở cuối."},
 ],
 "de-fehler-adjende": [
  {q:"Ich habe ein ___ (neu) Auto gekauft.",hint:"neu + đuôi",accept:["neues"],level:"A2",expl:"Nominativ/Akkusativ neutral sau “ein”: tính từ thêm -es."},
  {q:"Das ist ein ___ (interessant) Buch.",hint:"interessant + đuôi",accept:["interessantes"],level:"A2",expl:"Nominativ neutral sau “ein”: tính từ thêm -es."},
  {q:"Sie trägt eine ___ (schön) Jacke.",hint:"schön + đuôi",accept:["schöne"],level:"A2",expl:"Nominativ/Akkusativ feminin: tính từ thêm -e."},
  {q:"Wir haben ___ (gut) Nachrichten!",hint:"gut + đuôi",accept:["gute"],level:"A2",expl:"Không có mạo từ, Akkusativ số nhiều: tính từ thêm -e."},
  {q:"Er hat einen ___ (groß) Hund.",hint:"groß + đuôi",accept:["großen"],level:"A2",expl:"Akkusativ maskulin sau “einen”: tính từ thêm -en."},
  {q:"Das ist eine ___ (lang) Geschichte.",hint:"lang + đuôi",accept:["lange"],level:"A2",expl:"Nominativ feminin sau “eine”: tính từ thêm -e."},
  {q:"Ich trinke gern ___ (kalt) Wasser.",hint:"kalt + đuôi",accept:["kaltes"],level:"B1",expl:"Không có mạo từ, Akkusativ neutral: tính từ thêm -es."},
  {q:"Sie hat ein ___ (klein) Problem.",hint:"klein + đuôi",accept:["kleines"],level:"A2",expl:"Akkusativ neutral sau “ein”: tính từ thêm -es."},
  {q:"Wir brauchen ___ (frisch) Luft.",hint:"frisch + đuôi",accept:["frische"],level:"B1",expl:"Không có mạo từ, Akkusativ feminin: tính từ thêm -e."},
  {q:"Das ist ein ___ (teuer) Geschenk.",hint:"teuer + đuôi",accept:["teures"],level:"B1",expl:"Nominativ neutral sau “ein”: tính từ thêm -es."},
  {q:"Ich habe einen ___ (alt) Freund getroffen.",hint:"alt + đuôi",accept:["alten"],level:"A2",expl:"Akkusativ maskulin sau “einen”: tính từ thêm -en."},
  {q:"Sie kocht ein ___ (lecker) Essen.",hint:"lecker + đuôi",accept:["leckeres"],level:"B1",expl:"Akkusativ neutral sau “ein”: tính từ thêm -es."},
 ],
 "de-fehler-grossschreibung": [
  {q:"Ich lese jeden Tag ein ___ (buch).",hint:"buch",accept:["Buch"],level:"A1",expl:"Danh từ luôn viết hoa, kể cả giữa câu."},
  {q:"Das ist meine große ___ (liebe) zum Lesen.",hint:"liebe",accept:["Liebe"],level:"B1",expl:"“Liebe” ở đây là danh từ (tình yêu) nên viết hoa; tính từ “große” thì không."},
  {q:"Wir sprechen über die deutsche ___ (sprache).",hint:"sprache",accept:["Sprache"],level:"A2",expl:"Danh từ (Sprache) viết hoa; tính từ (deutsche) không viết hoa."},
  {q:"___ (ich) gehe heute ins Kino.",hint:"ich",accept:["Ich"],level:"A1",expl:"Đầu câu luôn viết hoa chữ cái đầu tiên, như mọi ngôn ngữ dùng chữ Latin."},
  {q:"Er kauft ein neues ___ (auto).",hint:"auto",accept:["Auto"],level:"A1",expl:"Danh từ luôn viết hoa, kể cả giữa câu."},
  {q:"Das ist eine gute ___ (idee).",hint:"idee",accept:["Idee"],level:"A2",expl:"Danh từ luôn viết hoa, kể cả giữa câu."},
  {q:"Wir reden über das ___ (wetter).",hint:"wetter",accept:["Wetter"],level:"A2",expl:"Danh từ luôn viết hoa, kể cả giữa câu."},
  {q:"___ (du) bist mein bester Freund.",hint:"du",accept:["Du"],level:"A1",expl:"Đầu câu luôn viết hoa chữ cái đầu tiên."},
  {q:"Sie hat große ___ (angst) vor Spinnen.",hint:"angst",accept:["Angst"],level:"A2",expl:"Danh từ luôn viết hoa, kể cả giữa câu."},
  {q:"Das ist die richtige ___ (antwort).",hint:"antwort",accept:["Antwort"],level:"A1",expl:"Danh từ luôn viết hoa, kể cả giữa câu."},
  {q:"___ (wir) fahren morgen nach Berlin.",hint:"wir",accept:["Wir"],level:"A1",expl:"Đầu câu luôn viết hoa chữ cái đầu tiên."},
  {q:"Ich brauche mehr ___ (geduld).",hint:"geduld",accept:["Geduld"],level:"B1",expl:"Danh từ luôn viết hoa, kể cả giữa câu."},
 ],
};

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Phân biệt các cặp dễ nhầm trong tiếng Đức"},
};
const POOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => POOL.push({
 type:"fill",kind:"input",retry:true,
 prompt:fmt(it.q.replace(/ \(.+?\)/,"")),
 hint:`Gợi ý: <b>${esc(it.hint)}</b>. Gõ đúng dạng.`,
 accept:it.accept,plain:it.accept[0],ref,level:it.level,expl:it.expl,
})));

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
