/* de/content/quiz/konditionalsaetze.js: practice questions for
   Konditionalsätze. BANK groups items by row id (sub-topic). Single
   exercise type: context sentences, type the correctly conjugated
   verb. Wrong answers can be retried (retry:true). */
(() => {
const BANK = {
 "de-kond-1": [
  {q:"Wenn es morgen ___ (regnen), bleiben wir zu Hause.",hint:"regnen",accept:["regnet"],level:"A1",expl:"Điều kiện thực tế, có thể xảy ra: wenn + Präsens."},
  {q:"Wenn du fleißig ___ (lernen), bestehst du die Prüfung sicher.",hint:"lernen",accept:["lernst"],level:"A1",expl:"Điều kiện khả thi: wenn + Präsens."},
  {q:"Wenn man Wasser ___ (erhitzen), kocht es.",hint:"erhitzen",accept:["erhitzt"],level:"A2",expl:"Quy luật chung, cả hai vế đều Präsens."},
  {q:"Wenn ich Zeit ___ (haben), komme ich morgen vorbei.",hint:"haben",accept:["habe"],level:"A1",expl:"Điều kiện thực tế có khả năng xảy ra: habe, không phải hätte."},
  {q:"Wenn er Zeit ___ (haben), hilft er mir immer.",hint:"haben",accept:["hat"],level:"A1",expl:"Điều kiện thực tế: wenn + Präsens."},
  {q:"Wenn die Sonne ___ (scheinen), gehen wir schwimmen.",hint:"scheinen",accept:["scheint"],level:"A1",expl:"Điều kiện thực tế: wenn + Präsens."},
  {q:"Wenn ihr früh ___ (kommen), bekommt ihr die besten Plätze.",hint:"kommen",accept:["kommt"],level:"A2",expl:"Điều kiện thực tế: wenn + Präsens."},
  {q:"Wenn man viel ___ (üben), wird man besser.",hint:"üben",accept:["übt"],level:"A2",expl:"Quy luật chung: wenn + Präsens."},
  {q:"Wenn es kalt ___ (werden), ziehe ich einen Mantel an.",hint:"werden",accept:["wird"],level:"A1",expl:"Điều kiện thực tế: wenn + Präsens."},
  {q:"Wenn du Hunger ___ (haben), können wir essen gehen.",hint:"haben",accept:["hast"],level:"A1",expl:"Điều kiện thực tế: wenn + Präsens."},
  {q:"Wenn wir genug Geld ___ (sparen), kaufen wir ein Haus.",hint:"sparen",accept:["sparen"],level:"A2",expl:"Điều kiện thực tế: wenn + Präsens."},
  {q:"Wenn das Taxi nicht ___ (kommen), nehmen wir den Bus.",hint:"kommen",accept:["kommt"],level:"A2",expl:"Điều kiện thực tế: wenn + Präsens."},
  {q:"Wenn sie Zeit ___ (finden), besucht sie uns.",hint:"finden",accept:["findet"],level:"A2",expl:"Điều kiện thực tế: wenn + Präsens."},
  {q:"Wenn der Zug Verspätung ___ (haben), rufe ich dich an.",hint:"haben",accept:["hat"],level:"B1",expl:"Điều kiện thực tế: wenn + Präsens."},
  {q:"Wenn ihr Fragen ___ (haben), meldet euch.",hint:"haben",accept:["habt"],level:"A2",expl:"Điều kiện thực tế: wenn + Präsens."},
  {q:"Wenn man sich ___ (anstrengen), erreicht man sein Ziel.",hint:"anstrengen",accept:["anstrengt"],level:"B1",expl:"Điều kiện thực tế: wenn + Präsens."},
  {q:"Wenn das Wetter schön ___ (bleiben), machen wir ein Picknick.",hint:"bleiben",accept:["bleibt"],level:"A2",expl:"Điều kiện thực tế: wenn + Präsens."},
  {q:"Wenn du mir nicht ___ (glauben), frag ihn selbst.",hint:"glauben",accept:["glaubst"],level:"A2",expl:"Điều kiện thực tế: wenn + Präsens."},
  {q:"Wenn wir uns ___ (beeilen), schaffen wir es noch.",hint:"beeilen",accept:["beeilen"],level:"A2",expl:"Điều kiện thực tế: wenn + Präsens."},
  {q:"Wenn alles gut ___ (gehen), sind wir bis Freitag fertig.",hint:"gehen",accept:["geht"],level:"B1",expl:"Điều kiện thực tế: wenn + Präsens."},
 ],
 "de-kond-2": [
  {q:"Wenn ich reich ___ (sein), würde ich die Welt bereisen.",hint:"sein",accept:["wäre"],level:"A2",expl:"Giả định trái thực tế hiện tại: Konjunktiv II của sein là wäre."},
  {q:"Wenn ich mehr Zeit hätte, ___ (ich / lernen) mehr Sprachen.",hint:"ich / lernen",accept:["würde ich"],level:"B1",expl:"Mệnh đề chính dùng würde + Infinitiv (lernen) cho giả định hiện tại."},
  {q:"___ (du / können) mir bitte helfen?",hint:"du / können",accept:["Könntest du"],level:"A2",expl:"Đề nghị lịch sự dùng Konjunktiv II trực tiếp: könntest."},
  {q:"Wenn ich an deiner Stelle ___ (sein), würde ich das nicht tun.",hint:"sein",accept:["wäre"],level:"B1",expl:"Giả định trái thực tế hiện tại: wäre."},
  {q:"Wenn ich mehr Geld ___ (haben), würde ich reisen.",hint:"haben",accept:["hätte"],level:"A2",expl:"Konjunktiv II của haben: hätte."},
  {q:"Wenn du mehr Geduld ___ (haben), würdest du es schaffen.",hint:"haben",accept:["hättest"],level:"B1",expl:"Konjunktiv II của haben, ngôi du: hättest."},
  {q:"Wenn wir ein Auto ___ (haben), könnten wir aufs Land fahren.",hint:"haben",accept:["hätten"],level:"B1",expl:"Konjunktiv II của haben, số nhiều: hätten."},
  {q:"Wenn sie Zeit ___ (haben), würde sie uns besuchen.",hint:"haben",accept:["hätte"],level:"A2",expl:"Konjunktiv II của haben: hätte."},
  {q:"___ (dürfen) ich dich kurz etwas fragen?",hint:"dürfen",accept:["Dürfte"],level:"B1",expl:"Konjunktiv II của dürfen dùng để hỏi lịch sự: Dürfte."},
  {q:"Wenn ich du ___ (sein), würde ich das nicht sagen.",hint:"sein",accept:["wäre"],level:"B1",expl:"Giả định trái thực tế hiện tại: wäre."},
  {q:"Wenn er netter ___ (sein), hätte er mehr Freunde.",hint:"sein",accept:["wäre"],level:"B1",expl:"Giả định trái thực tế hiện tại: wäre."},
  {q:"Was würdest du tun, wenn du Millionär ___ (sein)?",hint:"sein",accept:["wärst"],level:"B1",expl:"Konjunktiv II của sein, ngôi du: wärst."},
  {q:"Wenn wir mehr Platz ___ (haben), würden wir eine Katze nehmen.",hint:"haben",accept:["hätten"],level:"B1",expl:"Konjunktiv II của haben, số nhiều: hätten."},
  {q:"Wenn das Wetter besser ___ (sein), würden wir draußen essen.",hint:"sein",accept:["wäre"],level:"B1",expl:"Giả định trái thực tế hiện tại: wäre."},
  {q:"Wenn ich fliegen ___ (können), würde ich jeden Tag reisen.",hint:"können",accept:["könnte"],level:"B1",expl:"Konjunktiv II của können: könnte."},
  {q:"Wenn sie öfter üben ___ (würde), wäre sie besser.",hint:"üben, würde-Form",accept:["würde"],level:"B1",expl:"Động từ thường dùng würde + Infinitiv trong mệnh đề wenn giả định."},
  {q:"Wenn ich mehr Mut ___ (haben), würde ich kündigen.",hint:"haben",accept:["hätte"],level:"B1",expl:"Konjunktiv II của haben: hätte."},
  {q:"___ (können) ihr uns bitte helfen?",hint:"können",accept:["Könntet"],level:"B1",expl:"Konjunktiv II của können, ngôi ihr: Könntet."},
  {q:"Wenn wir reich ___ (sein), würden wir ein großes Haus bauen.",hint:"sein",accept:["wären"],level:"B1",expl:"Konjunktiv II của sein, số nhiều: wären."},
  {q:"Wenn du langsamer sprechen ___ (würde), würde ich dich besser verstehen.",hint:"sprechen, würde-Form",accept:["würdest"],level:"B2",expl:"Động từ mạnh (sprechen) ưu tiên dùng würde + Infinitiv trong lời nói hằng ngày."},
 ],
 "de-kond-3": [
  {q:"Wenn ich das gewusst ___ (haben), hätte ich anders reagiert.",hint:"haben",accept:["hätte"],level:"B1",expl:"Giả định trái thực tế quá khứ: wenn + Partizip II + hätte."},
  {q:"Wenn ich Zeit gehabt hätte, ___ (ich / kommen) vorbei.",hint:"ich / kommen",accept:["wäre ich"],level:"B1",expl:"Mệnh đề chính Konjunktiv II Plusquamperfekt: wäre + gekommen (kommen dùng sein)."},
  {q:"Wenn du mich gefragt hättest, ___ (ich / helfen) dir gern.",hint:"ich / helfen",accept:["hätte ich"],level:"B1",expl:"Mệnh đề chính: hätte + Partizip II (geholfen)."},
  {q:"Wenn sie früher losgefahren ___ (sein), hätten sie den Zug nicht verpasst.",hint:"sein",accept:["wären"],level:"B2",expl:"Giả định trái thực tế quá khứ, chủ ngữ số nhiều (sie = họ): wären + Partizip II."},
  {q:"Wenn ich das früher gewusst ___ (haben), hätte ich anders gehandelt.",hint:"haben",accept:["hätte"],level:"B1",expl:"Giả định trái thực tế quá khứ: hätte."},
  {q:"Wenn wir den Bus genommen ___ (haben), wären wir pünktlich gewesen.",hint:"haben",accept:["hätten"],level:"B2",expl:"Giả định trái thực tế quá khứ, số nhiều: hätten."},
  {q:"Wenn sie mich angerufen ___ (haben), hätte ich sofort geholfen.",hint:"haben",accept:["hätte"],level:"B2",expl:"Giả định trái thực tế quá khứ: hätte."},
  {q:"Wenn er schneller gefahren ___ (sein), hätten wir den Flug nicht verpasst.",hint:"sein",accept:["wäre"],level:"B2",expl:"Động từ chuyển động (fahren) dùng sein: wäre."},
  {q:"Wenn wir das gewusst ___ (haben), hätten wir anders geplant.",hint:"haben",accept:["hätten"],level:"B1",expl:"Giả định trái thực tế quá khứ, số nhiều: hätten."},
  {q:"Wenn du mir geschrieben ___ (haben), hätte ich geantwortet.",hint:"haben",accept:["hättest"],level:"B2",expl:"Giả định trái thực tế quá khứ, ngôi du: hättest."},
  {q:"Wenn sie früher angekommen ___ (sein), hätte sie den Zug noch erreicht.",hint:"sein",accept:["wäre"],level:"B2",expl:"Động từ chuyển động (ankommen) dùng sein: wäre."},
  {q:"Wenn wir mehr Geld gehabt ___ (haben), hätten wir das Haus gekauft.",hint:"haben",accept:["hätten"],level:"B2",expl:"Giả định trái thực tế quá khứ, số nhiều: hätten."},
  {q:"Wenn er die Regeln gekannt ___ (haben), hätte er nicht so reagiert.",hint:"haben",accept:["hätte"],level:"B2",expl:"Giả định trái thực tế quá khứ: hätte."},
  {q:"Wenn ich dich gesehen ___ (haben), hätte ich dich gegrüßt.",hint:"haben",accept:["hätte"],level:"B1",expl:"Giả định trái thực tế quá khứ: hätte."},
  {q:"Wenn wir nicht gestritten ___ (haben), wären wir noch Freunde.",hint:"haben",accept:["hätten"],level:"B2",expl:"Giả định trái thực tế quá khứ, số nhiều: hätten."},
  {q:"Wenn sie das Risiko erkannt ___ (haben), hätte sie anders entschieden.",hint:"haben",accept:["hätte"],level:"B2",expl:"Giả định trái thực tế quá khứ: hätte."},
  {q:"Wenn ich mehr geübt ___ (haben), hätte ich die Prüfung bestanden.",hint:"haben",accept:["hätte"],level:"B1",expl:"Giả định trái thực tế quá khứ: hätte."},
  {q:"Wenn wir früher losgefahren ___ (sein), hätten wir keinen Stau gehabt.",hint:"sein",accept:["wären"],level:"B2",expl:"Động từ chuyển động (losfahren) dùng sein, số nhiều: wären."},
  {q:"Wenn er ehrlich gewesen ___ (sein), hätte ich ihm vertraut.",hint:"sein",accept:["wäre"],level:"B2",expl:"Giả định trái thực tế quá khứ: wäre."},
  {q:"Wenn ich das gewusst ___ (haben), wäre ich nicht gekommen.",hint:"haben",accept:["hätte"],level:"B1",expl:"Giả định trái thực tế quá khứ: hätte."},
 ],
};

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Câu ngữ cảnh, gõ đúng dạng Konjunktiv hoặc Präsens"},
};
const POOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => POOL.push({
 type:"fill",kind:"input",retry:true,
 prompt:fmt(it.q.replace(/ \(.+?\)/,"")),
 hint:`Gợi ý: <b>${esc(it.hint)}</b>. Gõ đúng dạng đã chia.`,
 accept:it.accept,plain:it.accept[0],ref,level:it.level,expl:it.expl,
})));

const RUSH=[
 ["wenn + Präsens",["de-kond-1"]],["có thể xảy ra",["de-kond-1"]],
 ["wenn + Präteritum Konj. II",["de-kond-2"]],["würde",["de-kond-2"]],["giả định hiện tại",["de-kond-2"]],
 ["wenn + hätte/wäre + Partizip II",["de-kond-3"]],["giả định quá khứ",["de-kond-3"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["konditionalsaetze"] = { pool: POOL, types: TYPES, game: {title:"Welcher Typ?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng loại câu điều kiện",prompt:"Dấu hiệu này thuộc loại nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"kondRushBest"} };
})();
