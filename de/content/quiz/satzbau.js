/* de/content/quiz/satzbau.js: practice questions for Satzbau &
   Nebensätze. BANK groups items by row id (sub-topic). Single
   exercise type: build the correctly-ordered clause (verb position).
   Wrong answers can be retried (retry:true). */
(() => {
const BANK = {
 "de-satz-v2": [
  {q:"Heute ___ (ich / gehen) ins Kino.",hint:"ich / gehen",accept:["gehe ich"],level:"A1",expl:"“Heute” chiếm vị trí 1 nên động từ phải ở vị trí 2, chủ ngữ đẩy xuống sau: gehe ich."},
  {q:"Nach der Arbeit ___ (ich / fahren) nach Hause.",hint:"ich / fahren",accept:["fahre ich"],level:"A1",expl:"Cụm trạng từ ở vị trí 1, động từ vẫn giữ vị trí 2: fahre ich."},
  {q:"Morgen ___ (wir / besuchen) unsere Oma.",hint:"wir / besuchen",accept:["besuchen wir"],level:"A1",expl:"“Morgen” ở vị trí 1, động từ vị trí 2: besuchen wir."},
  {q:"In der Schule ___ (ich / lernen) Deutsch.",hint:"ich / lernen",accept:["lerne ich"],level:"A1",expl:"Cụm trạng từ ở vị trí 1, động từ vị trí 2: lerne ich."},
  {q:"Am Wochenende ___ (ich / arbeiten) nicht.",hint:"ich / arbeiten",accept:["arbeite ich"],level:"A1",expl:"Trạng từ ở vị trí 1, động từ vị trí 2: arbeite ich."},
  {q:"Im Sommer ___ (wir / reisen) nach Italien.",hint:"wir / reisen",accept:["reisen wir"],level:"A2",expl:"Cụm trạng từ ở vị trí 1, động từ vị trí 2: reisen wir."},
  {q:"Jeden Tag ___ (ich / trinken) Kaffee.",hint:"ich / trinken",accept:["trinke ich"],level:"A1",expl:"Trạng từ tần suất ở vị trí 1, động từ vị trí 2: trinke ich."},
  {q:"Plötzlich ___ (das Telefon / klingeln).",hint:"das Telefon / klingeln",accept:["klingelte das Telefon"],level:"A2",expl:"“Plötzlich” ở vị trí 1, động từ vị trí 2, chủ ngữ đẩy xuống sau."},
  {q:"Leider ___ (ich / können) nicht kommen.",hint:"ich / können",accept:["kann ich"],level:"A2",expl:"“Leider” ở vị trí 1, động từ vị trí 2: kann ich."},
  {q:"Zuerst ___ (wir / machen) die Hausaufgaben.",hint:"wir / machen",accept:["machen wir"],level:"A1",expl:"“Zuerst” ở vị trí 1, động từ vị trí 2: machen wir."},
  {q:"Am Montag ___ (die Schule / beginnen) wieder.",hint:"die Schule / beginnen",accept:["beginnt die Schule"],level:"A1",expl:"Cụm trạng từ ở vị trí 1, động từ vị trí 2, chủ ngữ đẩy xuống sau."},
  {q:"Trotzdem ___ (wir / gehen) spazieren.",hint:"wir / gehen",accept:["gehen wir"],level:"B1",expl:"“Trotzdem” ở vị trí 1, động từ vị trí 2: gehen wir."},
 ],
 "de-satz-weil": [
  {q:"Ich bleibe zu Hause, weil ___ (ich / krank / sein).",hint:"ich / krank / sein",accept:["ich krank bin"],level:"A1",expl:"Sau weil, động từ chia (bin) đứng ở cuối mệnh đề."},
  {q:"Sie lernt Deutsch, weil ___ (sie / in Berlin / leben).",hint:"sie / in Berlin / leben",accept:["sie in Berlin lebt"],level:"A2",expl:"Sau weil, động từ (lebt) đứng cuối, chủ ngữ + trạng từ đứng trước."},
  {q:"Wir gehen nicht raus, weil ___ (es / regnen).",hint:"es / regnen",accept:["es regnet"],level:"A1",expl:"Sau weil, động từ (regnet) đứng ở cuối mệnh đề."},
  {q:"Er ist müde, weil ___ (er / wenig / schlafen, Partizip II).",hint:"er / wenig / schlafen",accept:["er wenig geschlafen hat"],level:"B1",expl:"Perfekt trong mệnh đề weil: Partizip II + hat ở cuối."},
  {q:"Ich kaufe das Auto nicht, weil ___ (es / zu teuer / sein).",hint:"es / zu teuer / sein",accept:["es zu teuer ist"],level:"A2",expl:"Sau weil, động từ (ist) đứng cuối mệnh đề."},
  {q:"Wir feiern heute, weil ___ (wir / gewinnen, Partizip II).",hint:"wir / gewinnen",accept:["wir gewonnen haben"],level:"B1",expl:"Perfekt trong mệnh đề weil: Partizip II + haben ở cuối."},
  {q:"Sie kommt nicht, weil ___ (sie / krank / sein).",hint:"sie / krank / sein",accept:["sie krank ist"],level:"A1",expl:"Sau weil, động từ (ist) đứng cuối mệnh đề."},
  {q:"Ich lerne Deutsch, weil ___ (ich / in Deutschland / arbeiten möchten).",hint:"ich / in Deutschland / arbeiten möchten",accept:["ich in Deutschland arbeiten möchte"],level:"B1",expl:"Modal verb (möchte) đứng cuối mệnh đề weil."},
  {q:"Er ruft nicht an, weil ___ (er / sein Handy / vergessen, Partizip II).",hint:"er / sein Handy / vergessen",accept:["er sein Handy vergessen hat"],level:"B1",expl:"Perfekt trong mệnh đề weil: Partizip II + hat ở cuối."},
  {q:"Wir bleiben hier, weil ___ (wir / auf dich / warten).",hint:"wir / auf dich / warten",accept:["wir auf dich warten"],level:"A2",expl:"Sau weil, động từ (warten) đứng cuối mệnh đề."},
  {q:"Sie weint, weil ___ (sie / sehr traurig / sein).",hint:"sie / sehr traurig / sein",accept:["sie sehr traurig ist"],level:"A1",expl:"Sau weil, động từ (ist) đứng cuối mệnh đề."},
  {q:"Ich esse nichts, weil ___ (ich / keinen Hunger / haben).",hint:"ich / keinen Hunger / haben",accept:["ich keinen Hunger habe"],level:"A2",expl:"Sau weil, động từ (habe) đứng cuối mệnh đề."},
 ],
 "de-satz-dass": [
  {q:"Ich weiß, dass ___ (er / morgen / kommen).",hint:"er / morgen / kommen",accept:["er morgen kommt"],level:"A1",expl:"Sau dass, động từ (kommt) đứng cuối mệnh đề."},
  {q:"Sie sagt, dass ___ (sie / müde / sein).",hint:"sie / müde / sein",accept:["sie müde ist"],level:"A1",expl:"Sau dass, động từ (ist) đứng ở cuối mệnh đề."},
  {q:"Ich glaube, dass ___ (das / nicht / stimmen).",hint:"das / nicht / stimmen",accept:["das nicht stimmt"],level:"A2",expl:"“nicht” đứng ngay trước động từ cuối câu: nicht stimmt."},
  {q:"Er hofft, dass ___ (das Wetter / morgen / gut werden).",hint:"das Wetter / morgen / gut werden",accept:["das Wetter morgen gut wird"],level:"B1",expl:"Sau dass, động từ (wird) đứng cuối mệnh đề."},
  {q:"Wir wissen, dass ___ (sie / viel / arbeiten).",hint:"sie / viel / arbeiten",accept:["sie viel arbeitet"],level:"A2",expl:"Sau dass, động từ (arbeitet) đứng cuối mệnh đề."},
  {q:"Ich denke, dass ___ (wir / recht / haben).",hint:"wir / recht / haben",accept:["wir recht haben"],level:"A2",expl:"Sau dass, động từ (haben) đứng cuối mệnh đề."},
  {q:"Sie meint, dass ___ (das Projekt / funktionieren).",hint:"das Projekt / funktionieren",accept:["das Projekt funktioniert"],level:"B1",expl:"Sau dass, động từ (funktioniert) đứng cuối mệnh đề."},
  {q:"Ich fürchte, dass ___ (wir / zu spät / kommen).",hint:"wir / zu spät / kommen",accept:["wir zu spät kommen"],level:"B1",expl:"Sau dass, động từ (kommen) đứng cuối mệnh đề."},
  {q:"Er erzählt, dass ___ (er / nach Berlin / ziehen).",hint:"er / nach Berlin / ziehen",accept:["er nach Berlin zieht"],level:"B1",expl:"Sau dass, động từ (zieht) đứng cuối mệnh đề."},
  {q:"Wir hoffen, dass ___ (alles / gut / gehen).",hint:"alles / gut / gehen",accept:["alles gut geht"],level:"A2",expl:"Sau dass, động từ (geht) đứng cuối mệnh đề."},
  {q:"Sie glaubt, dass ___ (ich / lügen).",hint:"ich / lügen",accept:["ich lüge"],level:"B1",expl:"Sau dass, động từ (lüge) đứng cuối mệnh đề."},
  {q:"Ich weiß, dass ___ (du / mir / helfen können).",hint:"du / mir / helfen können",accept:["du mir helfen kannst"],level:"B1",expl:"Modal verb (kannst) đứng cuối mệnh đề dass."},
 ],
 "de-satz-obwohl": [
  {q:"Wir gehen spazieren, obwohl ___ (es / regnen).",hint:"es / regnen",accept:["es regnet"],level:"A2",expl:"Sau obwohl, động từ (regnet) đứng ở cuối mệnh đề."},
  {q:"Obwohl ___ (es / regnen), gehen wir trotzdem spazieren.",hint:"es / regnen",accept:["es regnet"],level:"A2",expl:"Mệnh đề obwohl đứng trước: động từ (regnet) vẫn ở cuối mệnh đề phụ, trước dấu phẩy."},
  {q:"Er kauft das Auto, obwohl ___ (es / sehr teuer / sein).",hint:"es / sehr teuer / sein",accept:["es sehr teuer ist"],level:"B1",expl:"Sau obwohl, động từ (ist) đứng ở cuối mệnh đề."},
  {q:"Sie geht zur Arbeit, obwohl ___ (sie / krank / sein).",hint:"sie / krank / sein",accept:["sie krank ist"],level:"A2",expl:"Sau obwohl, động từ (ist) đứng cuối mệnh đề."},
  {q:"Obwohl ___ (er / müde / sein), arbeitet er weiter.",hint:"er / müde / sein",accept:["er müde ist"],level:"B1",expl:"Mệnh đề obwohl đứng trước, động từ (ist) ở cuối mệnh đề phụ."},
  {q:"Wir bleiben draußen, obwohl ___ (es / kalt / sein).",hint:"es / kalt / sein",accept:["es kalt ist"],level:"A2",expl:"Sau obwohl, động từ (ist) đứng cuối mệnh đề."},
  {q:"Obwohl ___ (sie / wenig Geld / haben), ist sie glücklich.",hint:"sie / wenig Geld / haben",accept:["sie wenig Geld hat"],level:"B1",expl:"Mệnh đề obwohl đứng trước, động từ (hat) ở cuối mệnh đề phụ."},
  {q:"Er lächelt, obwohl ___ (er / traurig / sein).",hint:"er / traurig / sein",accept:["er traurig ist"],level:"B1",expl:"Sau obwohl, động từ (ist) đứng cuối mệnh đề."},
  {q:"Obwohl ___ (wir / spät dran / sein), bleiben wir ruhig.",hint:"wir / spät dran / sein",accept:["wir spät dran sind"],level:"B1",expl:"Mệnh đề obwohl đứng trước, động từ (sind) ở cuối mệnh đề phụ."},
  {q:"Sie isst viel, obwohl ___ (sie / eine Diät / machen).",hint:"sie / eine Diät / machen",accept:["sie eine Diät macht"],level:"B1",expl:"Sau obwohl, động từ (macht) đứng cuối mệnh đề."},
  {q:"Obwohl ___ (das Spiel / langweilig / sein), haben wir es zu Ende gesehen.",hint:"das Spiel / langweilig / sein",accept:["das Spiel langweilig war"],level:"B2",expl:"Mệnh đề obwohl đứng trước, động từ (war) ở cuối mệnh đề phụ."},
  {q:"Er fährt mit dem Rad, obwohl ___ (es / weit / sein).",hint:"es / weit / sein",accept:["es weit ist"],level:"A2",expl:"Sau obwohl, động từ (ist) đứng cuối mệnh đề."},
 ],
 "de-satz-damit": [
  {q:"Ich lerne jeden Tag, ___ (die Prüfung / bestehen).",hint:"die Prüfung / bestehen",accept:["um die Prüfung zu bestehen"],level:"A2",expl:"Chủ ngữ hai mệnh đề giống nhau (ich … ich) → um…zu + Infinitiv."},
  {q:"Ich spreche langsam, ___ (du / mich / verstehen).",hint:"du / mich / verstehen",accept:["damit du mich verstehst"],level:"B1",expl:"Chủ ngữ hai mệnh đề khác nhau (ich / du) → damit + mệnh đề đầy đủ, động từ cuối câu."},
  {q:"Sie spart Geld, ___ (ein Auto / kaufen).",hint:"ein Auto / kaufen",accept:["um ein Auto zu kaufen"],level:"A2",expl:"Chủ ngữ giống nhau (sie … sie) → um…zu + Infinitiv."},
  {q:"Ich gehe früh ins Bett, ___ (meine Kinder / nicht gestört werden).",hint:"meine Kinder / nicht gestört werden",accept:["damit meine Kinder nicht gestört werden"],level:"B1",expl:"Chủ ngữ khác nhau (ich / meine Kinder) → damit + mệnh đề đầy đủ, động từ (werden) cuối câu."},
  {q:"Wir machen Sport, ___ (gesund / bleiben).",hint:"gesund / bleiben",accept:["um gesund zu bleiben"],level:"A2",expl:"Chủ ngữ giống nhau (wir … wir) → um…zu + Infinitiv."},
  {q:"Die Lehrerin spricht laut, ___ (alle / sie / hören können).",hint:"alle / sie / hören können",accept:["damit alle sie hören können"],level:"B1",expl:"Chủ ngữ khác nhau (die Lehrerin / alle) → damit + mệnh đề đầy đủ."},
  {q:"Er arbeitet viel, ___ (befördert werden).",hint:"befördert werden",accept:["um befördert zu werden"],level:"B2",expl:"Chủ ngữ giống nhau → um…zu + Infinitiv (kể cả dạng bị động)."},
  {q:"Wir schließen die Tür, ___ (die Kinder / schlafen können).",hint:"die Kinder / schlafen können",accept:["damit die Kinder schlafen können"],level:"B1",expl:"Chủ ngữ khác nhau (wir / die Kinder) → damit + mệnh đề đầy đủ."},
  {q:"Ich übe jeden Tag, ___ (besser Deutsch sprechen).",hint:"besser Deutsch sprechen",accept:["um besser Deutsch zu sprechen"],level:"A2",expl:"Chủ ngữ giống nhau → um…zu + Infinitiv."},
  {q:"Sie ruft an, ___ (wir / Bescheid wissen).",hint:"wir / Bescheid wissen",accept:["damit wir Bescheid wissen"],level:"B1",expl:"Chủ ngữ khác nhau (sie / wir) → damit + mệnh đề đầy đủ."},
  {q:"Er nimmt ein Taxi, ___ (pünktlich sein).",hint:"pünktlich sein",accept:["um pünktlich zu sein"],level:"A2",expl:"Chủ ngữ giống nhau → um…zu + Infinitiv."},
  {q:"Die Eltern sparen, ___ (ihre Kinder / studieren können).",hint:"ihre Kinder / studieren können",accept:["damit ihre Kinder studieren können"],level:"B1",expl:"Chủ ngữ khác nhau (die Eltern / ihre Kinder) → damit + mệnh đề đầy đủ."},
 ],
};

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Câu ngữ cảnh, sắp đúng trật tự từ và vị trí động từ"},
};
const POOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => POOL.push({
 type:"fill",kind:"input",retry:true,
 prompt:fmt(it.q.replace(/ \(.+?\)/,"")),
 hint:`Gợi ý: <b>${esc(it.hint)}</b>. Sắp đúng trật tự từ và chia động từ.`,
 accept:it.accept,plain:it.accept[0],ref,level:it.level,expl:it.expl,
})));

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
