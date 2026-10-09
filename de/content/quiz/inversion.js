/* de/content/quiz/inversion.js: practice questions for Inversion &
   Betonung. BANK groups items by row id (sub-topic). Single exercise
   type: build the correctly fronted/emphatic sentence. Wrong answers
   can be retried (retry:true). */
(() => {
const BANK = {
 "de-emph-vorfeld": [
  {q:"Gestern ___ (ich / das Buch / lesen).",hint:"ich / das Buch / lesen",accept:["habe ich das Buch gelesen"],level:"A2",expl:"“Gestern” ở vị trí 1, động từ (habe) ở vị trí 2, chủ ngữ (ich) đẩy xuống sau."},
  {q:"In Berlin ___ (ich / drei Jahre / leben).",hint:"ich / drei Jahre / leben",accept:["habe ich drei Jahre gelebt"],level:"A2",expl:"“In Berlin” ở vị trí 1, động từ vẫn vị trí 2."},
  {q:"Das Buch ___ (ich / gestern / lesen).",hint:"ich / gestern / lesen",accept:["habe ich gestern gelesen"],level:"A2",expl:"Tân ngữ “Das Buch” ở vị trí 1 để nhấn mạnh, động từ vẫn vị trí 2."},
  {q:"Heute ___ (wir / ins Kino / gehen).",hint:"wir / ins Kino / gehen",accept:["gehen wir ins Kino"],level:"A1",expl:"“Heute” ở vị trí 1, động từ (gehen) ở vị trí 2."},
  {q:"Morgen ___ (sie / nach Hamburg / fahren).",hint:"sie / nach Hamburg / fahren",accept:["fährt sie nach Hamburg"],level:"A1",expl:"“Morgen” ở vị trí 1, động từ (fährt) ở vị trí 2."},
  {q:"Letztes Jahr ___ (ich / in Spanien / arbeiten).",hint:"ich / in Spanien / arbeiten",accept:["habe ich in Spanien gearbeitet"],level:"A2",expl:"“Letztes Jahr” ở vị trí 1, động từ (habe) vị trí 2."},
  {q:"Nächste Woche ___ (wir / Urlaub / machen).",hint:"wir / Urlaub / machen",accept:["machen wir Urlaub"],level:"A1",expl:"“Nächste Woche” ở vị trí 1, động từ (machen) vị trí 2."},
  {q:"Am Wochenende ___ (ich / meine Eltern / besuchen).",hint:"ich / meine Eltern / besuchen",accept:["besuche ich meine Eltern"],level:"A2",expl:"“Am Wochenende” ở vị trí 1, động từ (besuche) vị trí 2."},
  {q:"Zuerst ___ (wir / einkaufen / gehen).",hint:"wir / einkaufen / gehen",accept:["gehen wir einkaufen"],level:"A1",expl:"“Zuerst” ở vị trí 1, động từ (gehen) vị trí 2."},
  {q:"Diesen Film ___ (ich / schon / sehen).",hint:"ich / schon / sehen",accept:["habe ich schon gesehen"],level:"B1",expl:"Tân ngữ “Diesen Film” ở vị trí 1, động từ (habe) vị trí 2."},
  {q:"Meiner Mutter ___ (ich / ein Geschenk / schenken).",hint:"ich / ein Geschenk / schenken",accept:["schenke ich ein Geschenk"],level:"B1",expl:"Tân ngữ gián tiếp “Meiner Mutter” ở vị trí 1, động từ (schenke) vị trí 2."},
  {q:"Jeden Tag ___ (er / eine Stunde / joggen).",hint:"er / eine Stunde / joggen",accept:["joggt er eine Stunde"],level:"A2",expl:"“Jeden Tag” ở vị trí 1, động từ (joggt) vị trí 2."},
  {q:"Im Sommer ___ (wir / ans Meer / fahren).",hint:"wir / ans Meer / fahren",accept:["fahren wir ans Meer"],level:"A2",expl:"“Im Sommer” ở vị trí 1, động từ (fahren) vị trí 2."},
  {q:"Plötzlich ___ (es / anfangen / regnen).",hint:"es / anfangen / regnen",accept:["fängt es an zu regnen"],level:"B1",expl:"“Plötzlich” ở vị trí 1, động từ tách (fängt…an) vị trí 2."},
  {q:"Diese Aufgabe ___ (ich / schon / lösen).",hint:"ich / schon / lösen",accept:["habe ich schon gelöst"],level:"B1",expl:"Tân ngữ “Diese Aufgabe” ở vị trí 1, động từ (habe) vị trí 2."},
 ],
 "de-emph-es": [
  {q:"___ (viele Gäste / heute / kommen).",hint:"viele Gäste / heute / kommen",accept:["Es kommen heute viele Gäste"],level:"A2",expl:"Không có thành phần nào khác chiếm vị trí 1 nên dùng “es” làm chỗ trống."},
  {q:"___ (einmal / ein König / sein).",hint:"einmal / ein König / sein",accept:["Es war einmal ein König"],level:"A2",expl:"Mở đầu câu chuyện cổ tích: Es war einmal…"},
  {q:"___ (jemand / an der Tür / klopfen).",hint:"jemand / an der Tür / klopfen",accept:["Es klopft jemand an der Tür"],level:"A2",expl:"Giới thiệu điều gì mới, chủ ngữ thực (jemand) đứng sau động từ."},
  {q:"___ (regnen / draußen).",hint:"regnen / draußen",accept:["Es regnet draußen"],level:"A1",expl:"“Es” là chủ ngữ hình thức với động từ thời tiết regnen."},
  {q:"___ (viele Leute / auf der Straße / stehen).",hint:"viele Leute / auf der Straße / stehen",accept:["Es stehen viele Leute auf der Straße"],level:"A2",expl:"“Es” giữ vị trí 1, chủ ngữ thực (viele Leute) đứng sau động từ."},
  {q:"___ (ein Problem / geben).",hint:"ein Problem / geben",accept:["Es gibt ein Problem"],level:"A1",expl:"Cấu trúc cố định “es gibt” + Akkusativ."},
  {q:"___ (niemand / zu Hause / sein).",hint:"niemand / zu Hause / sein",accept:["Es ist niemand zu Hause"],level:"A2",expl:"“Es” giữ vị trí 1, chủ ngữ thực (niemand) đứng sau động từ."},
  {q:"___ (jemand / anrufen).",hint:"jemand / anrufen",accept:["Es ruft jemand an"],level:"A2",expl:"“Es” giữ vị trí 1, chủ ngữ thực (jemand) đứng sau động từ tách."},
  {q:"___ (zwei Kinder / im Garten / spielen).",hint:"zwei Kinder / im Garten / spielen",accept:["Es spielen zwei Kinder im Garten"],level:"A2",expl:"“Es” giữ vị trí 1, chủ ngữ thực (zwei Kinder) đứng sau động từ."},
  {q:"___ (schneien / seit gestern).",hint:"schneien / seit gestern",accept:["Es schneit seit gestern"],level:"A1",expl:"“Es” là chủ ngữ hình thức với động từ thời tiết schneien."},
  {q:"___ (ein Mann / vor der Tür / stehen).",hint:"ein Mann / vor der Tür / stehen",accept:["Es steht ein Mann vor der Tür"],level:"A2",expl:"“Es” giữ vị trí 1, chủ ngữ thực (ein Mann) đứng sau động từ."},
  {q:"___ (viele Fragen / offen bleiben).",hint:"viele Fragen / offen bleiben",accept:["Es bleiben viele Fragen offen"],level:"B1",expl:"“Es” giữ vị trí 1, chủ ngữ thực (viele Fragen) đứng sau động từ."},
  {q:"___ (nichts / passieren).",hint:"nichts / passieren",accept:["Es passiert nichts"],level:"A2",expl:"“Es” giữ vị trí 1, chủ ngữ thực (nichts) đứng sau động từ."},
  {q:"___ (ein Fehler / passieren, Perfekt).",hint:"ein Fehler / passieren",accept:["Es ist ein Fehler passiert"],level:"B1",expl:"“Es” giữ vị trí 1, chủ ngữ thực (ein Fehler) đứng sau động từ ở Perfekt."},
  {q:"___ (viele Touristen / die Stadt / besuchen).",hint:"viele Touristen / die Stadt / besuchen",accept:["Es besuchen viele Touristen die Stadt"],level:"B1",expl:"“Es” giữ vị trí 1, chủ ngữ thực (viele Touristen) đứng sau động từ."},
 ],
 "de-emph-nichtnur": [
  {q:"Nicht nur ___ (er / Deutsch / lernen), sondern auch Französisch.",hint:"er / Deutsch / lernen",accept:["lernt er Deutsch"],level:"B1",expl:"“Nicht nur” ở vị trí 1 nên động từ (lernt) đảo lên ngay sau."},
  {q:"Nicht nur ___ (die Firma / profitieren), sondern auch die Kunden.",hint:"die Firma / profitieren",accept:["profitiert die Firma"],level:"B1",expl:"Đảo ngữ sau “Nicht nur” ở vị trí 1: động từ (profitiert) lên trước chủ ngữ."},
  {q:"Nicht nur ___ (das Wetter / schlecht sein), sondern auch kalt.",hint:"das Wetter / schlecht sein",accept:["ist das Wetter schlecht"],level:"B1",expl:"Đảo ngữ: động từ (ist) lên ngay sau “Nicht nur”."},
  {q:"Nicht nur ___ (ich / Deutsch / sprechen), sondern auch Englisch.",hint:"ich / Deutsch / sprechen",accept:["spreche ich Deutsch"],level:"B1",expl:"Đảo ngữ: động từ (spreche) lên ngay sau “Nicht nur”."},
  {q:"Nicht nur ___ (sie / klug sein), sondern auch sehr freundlich.",hint:"sie / klug sein",accept:["ist sie klug"],level:"B1",expl:"Đảo ngữ: động từ (ist) lên ngay sau “Nicht nur”."},
  {q:"Nicht nur ___ (wir / viel arbeiten), sondern auch viel reisen.",hint:"wir / viel arbeiten",accept:["arbeiten wir viel"],level:"B1",expl:"Đảo ngữ: động từ (arbeiten) lên ngay sau “Nicht nur”."},
  {q:"Nicht nur ___ (er / Fußball / spielen), sondern auch Tennis.",hint:"er / Fußball / spielen",accept:["spielt er Fußball"],level:"B1",expl:"Đảo ngữ: động từ (spielt) lên ngay sau “Nicht nur”."},
  {q:"Nicht nur ___ (das Essen / lecker sein), sondern auch günstig.",hint:"das Essen / lecker sein",accept:["ist das Essen lecker"],level:"B1",expl:"Đảo ngữ: động từ (ist) lên ngay sau “Nicht nur”."},
  {q:"Nicht nur ___ (die Kinder / lachen), sondern auch die Erwachsenen.",hint:"die Kinder / lachen",accept:["lachen die Kinder"],level:"B1",expl:"Đảo ngữ: động từ (lachen) lên ngay sau “Nicht nur”."},
  {q:"Nicht nur ___ (ich / Musik / mögen), sondern auch Kunst.",hint:"ich / Musik / mögen",accept:["mag ich Musik"],level:"B1",expl:"Đảo ngữ: động từ (mag) lên ngay sau “Nicht nur”."},
  {q:"Nicht nur ___ (die Studenten / fleißig sein), sondern auch sehr motiviert.",hint:"die Studenten / fleißig sein",accept:["sind die Studenten fleißig"],level:"B2",expl:"Đảo ngữ: động từ (sind) lên ngay sau “Nicht nur”."},
  {q:"Nicht nur ___ (er / viel Geld / verdienen), sondern auch viel sparen.",hint:"er / viel Geld / verdienen",accept:["verdient er viel Geld"],level:"B2",expl:"Đảo ngữ: động từ (verdient) lên ngay sau “Nicht nur”."},
  {q:"Nicht nur ___ (das Hotel / teuer sein), sondern auch sehr klein.",hint:"das Hotel / teuer sein",accept:["ist das Hotel teuer"],level:"B1",expl:"Đảo ngữ: động từ (ist) lên ngay sau “Nicht nur”."},
  {q:"Nicht nur ___ (wir / das Projekt / planen), sondern auch umsetzen.",hint:"wir / das Projekt / planen",accept:["planen wir das Projekt"],level:"B2",expl:"Đảo ngữ: động từ (planen) lên ngay sau “Nicht nur”."},
  {q:"Nicht nur ___ (sie / gut kochen können), sondern auch backen.",hint:"sie / gut kochen können",accept:["kann sie gut kochen"],level:"B2",expl:"Đảo ngữ với động từ khiếm định: modal (kann) lên ngay sau “Nicht nur”."},
 ],
 "de-emph-negation": [
  {q:"Ich habe ___ (kein) Auto.",hint:"kein",accept:["kein"],level:"A1",expl:"Phủ định danh từ không mạo từ xác định: kein."},
  {q:"Das Wetter ist heute ___ (nicht) schön.",hint:"nicht",accept:["nicht"],level:"A1",expl:"Phủ định tính từ: nicht."},
  {q:"Das ist ___ (keine) gute Idee.",hint:"keine",accept:["keine"],level:"A1",expl:"Phủ định danh từ giống cái không mạo từ xác định: keine."},
  {q:"Ich mag diesen Film ___ (nicht).",hint:"nicht",accept:["nicht"],level:"A1",expl:"Phủ định động từ (mag): nicht."},
  {q:"Er hat ___ (kein) Geld.",hint:"kein",accept:["kein"],level:"A1",expl:"Phủ định danh từ giống trung không mạo từ xác định: kein."},
  {q:"Sie trinkt ___ (keinen) Kaffee.",hint:"keinen",accept:["keinen"],level:"A2",expl:"Phủ định danh từ giống đực ở Akkusativ không mạo từ xác định: keinen."},
  {q:"Wir haben ___ (keine) Zeit.",hint:"keine",accept:["keine"],level:"A1",expl:"Phủ định danh từ giống cái: keine."},
  {q:"Das Buch ist ___ (nicht) interessant.",hint:"nicht",accept:["nicht"],level:"A1",expl:"Phủ định tính từ: nicht."},
  {q:"Ich komme heute ___ (nicht).",hint:"nicht",accept:["nicht"],level:"A1",expl:"Phủ định động từ (komme): nicht."},
  {q:"Das ist ___ (kein) Problem.",hint:"kein",accept:["kein"],level:"A1",expl:"Phủ định danh từ giống trung: kein."},
  {q:"Sie hat ___ (keine) Geschwister.",hint:"keine",accept:["keine"],level:"A2",expl:"Phủ định danh từ số nhiều: keine."},
  {q:"Er trinkt ___ (nicht) gern Tee.",hint:"nicht",accept:["nicht"],level:"A2",expl:"Phủ định trạng từ (gern): nicht."},
  {q:"Das sind ___ (keine) guten Nachrichten.",hint:"keine",accept:["keine"],level:"A2",expl:"Phủ định danh từ số nhiều: keine."},
  {q:"Ich verstehe das ___ (nicht).",hint:"nicht",accept:["nicht"],level:"A1",expl:"Phủ định toàn câu (das verstehe ich nicht): nicht."},
  {q:"Wir haben ___ (keinen) Hund.",hint:"keinen",accept:["keinen"],level:"A2",expl:"Phủ định danh từ giống đực ở Akkusativ: keinen."},
 ],
};

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Câu ngữ cảnh, sắp đúng trật tự từ nhấn mạnh hoặc chọn nicht/kein"},
};
const POOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => POOL.push({
 type:"fill",kind:"input",retry:true,
 prompt:fmt(it.q.replace(/ \(.+?\)/,"")),
 hint:`Gợi ý: <b>${esc(it.hint)}</b>. Sắp đúng trật tự từ.`,
 accept:it.accept,plain:it.accept[0],ref,level:it.level,expl:it.expl,
})));

const RUSH=[
 ["Trạng từ/tân ngữ + V + S…",["de-emph-vorfeld"]],
 ["Es + V + chủ ngữ thực",["de-emph-es"]],
 ["Nicht nur…, sondern auch…",["de-emph-nichtnur"]],
 ["kein + danh từ",["de-emph-negation"]],["nicht + động từ/tính từ",["de-emph-negation"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["inversion"] = { pool: POOL, types: TYPES, game: {title:"Welche Struktur?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng cấu trúc nhấn mạnh",prompt:"Dấu hiệu này thuộc cấu trúc nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"invRushBest"} };
})();
