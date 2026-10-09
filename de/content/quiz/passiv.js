/* de/content/quiz/passiv.js: practice questions for Passiv. BANK
   groups items by row id (sub-topic). Single exercise type: context
   sentences, type the correctly conjugated passive form. Wrong
   answers can be retried (retry:true). */
(() => {
const BANK = {
 "de-pass-vorgang": [
  {q:"Jedes Jahr ___ (dieses Fest / feiern) in der ganzen Stadt.",hint:"dieses Fest / feiern",accept:["wird dieses Fest gefeiert"],level:"B1",expl:"Vorgangspassiv Präsens: werden (chia) + Partizip II."},
  {q:"Das Schloss ___ (bauen) im 18. Jahrhundert.",hint:"bauen",accept:["wurde gebaut"],level:"A2",expl:"Vorgangspassiv Präteritum: wurde + Partizip II."},
  {q:"Die Fenster ___ (jeden Freitag / putzen).",hint:"jeden Freitag / putzen",accept:["werden jeden Freitag geputzt"],level:"A2",expl:"Vorgangspassiv Präsens: werden + Partizip II."},
  {q:"Dieses Buch ___ (von einem berühmten Autor / schreiben).",hint:"von einem berühmten Autor / schreiben",accept:["wurde von einem berühmten Autor geschrieben"],level:"B1",expl:"Chủ thể nêu rõ bằng von + Dativ; Präteritum Passiv: wurde + Partizip II."},
  {q:"Die Straße ___ (reparieren).",hint:"reparieren",accept:["wird repariert"],level:"A2",expl:"Vorgangspassiv Präsens: wird + Partizip II."},
  {q:"Der Brief ___ (gestern / schreiben).",hint:"gestern / schreiben",accept:["wurde gestern geschrieben"],level:"A2",expl:"Vorgangspassiv Präteritum: wurde + Partizip II."},
  {q:"Die Kinder ___ (jeden Tag / abholen).",hint:"jeden Tag / abholen",accept:["werden jeden Tag abgeholt"],level:"A2",expl:"Vorgangspassiv Präsens: werden + Partizip II."},
  {q:"Das Lied ___ (von vielen / singen).",hint:"von vielen / singen",accept:["wird von vielen gesungen"],level:"B1",expl:"Vorgangspassiv Präsens: wird + Partizip II."},
  {q:"Die Produkte ___ (exportieren).",hint:"exportieren",accept:["werden exportiert"],level:"B1",expl:"Vorgangspassiv Präsens: werden + Partizip II."},
  {q:"Das Haus ___ (letztes Jahr / renovieren).",hint:"letztes Jahr / renovieren",accept:["wurde letztes Jahr renoviert"],level:"B1",expl:"Vorgangspassiv Präteritum: wurde + Partizip II."},
  {q:"Die Nachricht ___ (sofort / verbreiten).",hint:"sofort / verbreiten",accept:["wurde sofort verbreitet"],level:"B1",expl:"Vorgangspassiv Präteritum: wurde + Partizip II."},
  {q:"Die Regeln ___ (streng / kontrollieren).",hint:"streng / kontrollieren",accept:["werden streng kontrolliert"],level:"B1",expl:"Vorgangspassiv Präsens: werden + Partizip II."},
 ],
 "de-pass-perfekt": [
  {q:"Die E-Mail ___ (bereits / senden).",hint:"bereits / senden",accept:["ist bereits gesendet worden"],level:"B1",expl:"Perfekt Passiv: sein + Partizip II + worden."},
  {q:"Das Problem ___ (schon / lösen).",hint:"schon / lösen",accept:["ist schon gelöst worden"],level:"B1",expl:"Perfekt Passiv: ist + Partizip II + worden, không phải geworden."},
  {q:"Die neuen Regeln ___ (letzte Woche / einführen).",hint:"letzte Woche / einführen",accept:["sind letzte Woche eingeführt worden"],level:"B1",expl:"Perfekt Passiv số nhiều: sind + Partizip II + worden."},
  {q:"Das Paket ___ (schon / liefern).",hint:"schon / liefern",accept:["ist schon geliefert worden"],level:"B1",expl:"Perfekt Passiv: ist + Partizip II + worden."},
  {q:"Die Tickets ___ (verkaufen).",hint:"verkaufen",accept:["sind verkauft worden"],level:"B1",expl:"Perfekt Passiv số nhiều: sind + Partizip II + worden."},
  {q:"Der Vertrag ___ (unterschreiben).",hint:"unterschreiben",accept:["ist unterschrieben worden"],level:"B1",expl:"Perfekt Passiv: ist + Partizip II + worden."},
  {q:"Die Fehler ___ (korrigieren).",hint:"korrigieren",accept:["sind korrigiert worden"],level:"B1",expl:"Perfekt Passiv số nhiều: sind + Partizip II + worden."},
  {q:"Das Projekt ___ (abschließen).",hint:"abschließen",accept:["ist abgeschlossen worden"],level:"B2",expl:"Perfekt Passiv: ist + Partizip II + worden."},
  {q:"Die Einladung ___ (verschicken).",hint:"verschicken",accept:["ist verschickt worden"],level:"B1",expl:"Perfekt Passiv: ist + Partizip II + worden."},
  {q:"Die Wohnung ___ (vermieten).",hint:"vermieten",accept:["ist vermietet worden"],level:"B1",expl:"Perfekt Passiv: ist + Partizip II + worden."},
  {q:"Die Entscheidung ___ (treffen).",hint:"treffen",accept:["ist getroffen worden"],level:"B2",expl:"Perfekt Passiv: ist + Partizip II + worden."},
  {q:"Die Preise ___ (erhöhen).",hint:"erhöhen",accept:["sind erhöht worden"],level:"B1",expl:"Perfekt Passiv số nhiều: sind + Partizip II + worden."},
 ],
 "de-pass-zustand": [
  {q:"Der Laden ___ (schließen) schon — komm morgen wieder.",hint:"schließen",accept:["ist geschlossen"],level:"A2",expl:"Trạng thái kết quả (đã đóng rồi): Zustandspassiv với sein."},
  {q:"Das Fenster ___ (öffnen) — es ist kalt im Zimmer.",hint:"öffnen",accept:["ist geöffnet"],level:"A2",expl:"Trạng thái kết quả (đang mở sẵn): sein + Partizip II."},
  {q:"Die Tür ___ (jetzt / verschließen).",hint:"jetzt / verschließen",accept:["ist jetzt verschlossen"],level:"A2",expl:"Mô tả trạng thái hiện tại (đã khóa): Zustandspassiv."},
  {q:"Das Geschäft ___ (seit zehn Uhr / öffnen).",hint:"seit zehn Uhr / öffnen",accept:["ist seit zehn Uhr geöffnet"],level:"A2",expl:"Trạng thái kết quả: sein + Partizip II."},
  {q:"Die Aufgabe ___ (bereits / erledigen).",hint:"bereits / erledigen",accept:["ist bereits erledigt"],level:"A2",expl:"Trạng thái kết quả: sein + Partizip II."},
  {q:"Das Licht ___ (ausschalten).",hint:"ausschalten",accept:["ist ausgeschaltet"],level:"A1",expl:"Trạng thái kết quả: sein + Partizip II."},
  {q:"Die Rechnung ___ (bezahlen).",hint:"bezahlen",accept:["ist bezahlt"],level:"A2",expl:"Trạng thái kết quả: sein + Partizip II."},
  {q:"Der Tisch ___ (reservieren).",hint:"reservieren",accept:["ist reserviert"],level:"A2",expl:"Trạng thái kết quả: sein + Partizip II."},
  {q:"Das Zimmer ___ (aufräumen).",hint:"aufräumen",accept:["ist aufgeräumt"],level:"A1",expl:"Trạng thái kết quả: sein + Partizip II."},
  {q:"Die Tür ___ (abschließen).",hint:"abschließen",accept:["ist abgeschlossen"],level:"A2",expl:"Trạng thái kết quả: sein + Partizip II."},
  {q:"Das Auto ___ (reparieren).",hint:"reparieren",accept:["ist repariert"],level:"A2",expl:"Trạng thái kết quả: sein + Partizip II."},
  {q:"Die Flasche ___ (öffnen).",hint:"öffnen",accept:["ist geöffnet"],level:"A1",expl:"Trạng thái kết quả: sein + Partizip II."},
 ],
 "de-pass-modal": [
  {q:"Die Aufgabe ___ (müssen / heute / erledigen).",hint:"müssen / heute / erledigen",accept:["muss heute erledigt werden"],level:"B1",expl:"Modal verb (muss) + Partizip II + werden ở cuối câu."},
  {q:"Das Formular ___ (müssen / vollständig / ausfüllen).",hint:"müssen / vollständig / ausfüllen",accept:["muss vollständig ausgefüllt werden"],level:"B1",expl:"Modal verb + Partizip II + werden."},
  {q:"Dieses Problem ___ (können / leicht / lösen).",hint:"können / leicht / lösen",accept:["kann leicht gelöst werden"],level:"A2",expl:"Modal verb (kann) + Partizip II + werden."},
  {q:"Die Hausaufgaben ___ (müssen / bis morgen / abgeben).",hint:"müssen / bis morgen / abgeben",accept:["müssen bis morgen abgegeben werden"],level:"B1",expl:"Modal verb + Partizip II + werden."},
  {q:"Das Zimmer ___ (sollen / sauber halten).",hint:"sollen / sauber halten",accept:["soll sauber gehalten werden"],level:"B1",expl:"Modal verb (soll) + Partizip II + werden."},
  {q:"Die Tür ___ (dürfen / nicht öffnen).",hint:"dürfen / nicht öffnen",accept:["darf nicht geöffnet werden"],level:"A2",expl:"Modal verb (darf) + Partizip II + werden."},
  {q:"Der Bericht ___ (müssen / sofort schreiben).",hint:"müssen / sofort schreiben",accept:["muss sofort geschrieben werden"],level:"B1",expl:"Modal verb + Partizip II + werden."},
  {q:"Diese Regel ___ (müssen / respektieren).",hint:"müssen / respektieren",accept:["muss respektiert werden"],level:"B1",expl:"Modal verb + Partizip II + werden."},
  {q:"Das Auto ___ (können / morgen abholen).",hint:"können / morgen abholen",accept:["kann morgen abgeholt werden"],level:"A2",expl:"Modal verb + Partizip II + werden."},
  {q:"Die Daten ___ (müssen / schützen).",hint:"müssen / schützen",accept:["müssen geschützt werden"],level:"B1",expl:"Modal verb + Partizip II + werden."},
  {q:"Das Fenster ___ (können / öffnen).",hint:"können / öffnen",accept:["kann geöffnet werden"],level:"A2",expl:"Modal verb + Partizip II + werden."},
  {q:"Die Rechnung ___ (müssen / bis Freitag bezahlen).",hint:"müssen / bis Freitag bezahlen",accept:["muss bis Freitag bezahlt werden"],level:"B1",expl:"Modal verb + Partizip II + werden."},
 ],
 "de-pass-man": [
  {q:"In der Schweiz ___ (man / vier Sprachen / sprechen).",hint:"man / vier Sprachen / sprechen",accept:["spricht man vier Sprachen"],level:"A2",expl:"Thay vì bị động, dùng man + động từ chia bình thường."},
  {q:"___ (man / sagen), dass es morgen regnet.",hint:"man / sagen",accept:["Man sagt"],level:"A2",expl:"man + động từ chia: cách tự nhiên hơn “Es wird gesagt”."},
  {q:"Hier ___ (man / Deutsch / sprechen).",hint:"man / Deutsch / sprechen",accept:["spricht man Deutsch"],level:"A2",expl:"man + động từ chia thay cho bị động."},
  {q:"In diesem Restaurant ___ (man / gut / essen).",hint:"man / gut / essen",accept:["isst man gut"],level:"A2",expl:"man + động từ chia."},
  {q:"___ (man / das / nicht / machen)!",hint:"man / das / nicht / machen",accept:["Das macht man nicht"],level:"A2",expl:"man + động từ chia, mang tính khuyên răn."},
  {q:"In Deutschland ___ (man / das Fahrrad oft / benutzen).",hint:"man / das Fahrrad oft / benutzen",accept:["benutzt man das Fahrrad oft"],level:"A2",expl:"man + động từ chia."},
  {q:"___ (man / mir / sagen), dass die Prüfung schwer sei.",hint:"man / mir / sagen",accept:["Man hat mir gesagt"],level:"B1",expl:"man + Perfekt, tự nhiên hơn bị động."},
  {q:"Hier ___ (man / nicht / rauchen dürfen).",hint:"man / nicht / rauchen dürfen",accept:["darf man nicht rauchen"],level:"A2",expl:"man + modal verb + Infinitiv."},
  {q:"___ (man / hier / Englisch / sprechen)?",hint:"man / hier / Englisch / sprechen",accept:["Spricht man hier Englisch"],level:"A1",expl:"man + động từ chia, dạng câu hỏi."},
  {q:"Im Büro ___ (man / viel / arbeiten).",hint:"man / viel / arbeiten",accept:["arbeitet man viel"],level:"A2",expl:"man + động từ chia."},
  {q:"___ (man / das Problem schnell / lösen können).",hint:"man / das Problem schnell / lösen können",accept:["Man kann das Problem schnell lösen"],level:"B1",expl:"man + modal verb + Infinitiv."},
  {q:"Auf der Party ___ (man / viel / tanzen).",hint:"man / viel / tanzen",accept:["tanzt man viel"],level:"A2",expl:"man + động từ chia."},
 ],
};

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Câu ngữ cảnh, gõ đúng dạng bị động hoặc câu với man"},
};
const POOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => POOL.push({
 type:"fill",kind:"input",retry:true,
 prompt:fmt(it.q.replace(/ \(.+?\)/,"")),
 hint:`Gợi ý: <b>${esc(it.hint)}</b>. Gõ cả cụm động từ bị động.`,
 accept:it.accept,plain:it.accept[0],ref,level:it.level,expl:it.expl,
})));

const RUSH=[
 ["wird/wurde + Partizip II",["de-pass-vorgang"]],
 ["ist/sind + Partizip II + worden",["de-pass-perfekt"]],
 ["ist/sind + Partizip II (trạng thái)",["de-pass-zustand"]],
 ["muss/kann + Partizip II + werden",["de-pass-modal"]],
 ["man + Verb",["de-pass-man"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["passiv"] = { pool: POOL, types: TYPES, game: {title:"Welche Passivform?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng dạng bị động",prompt:"Dấu hiệu này thuộc dạng nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"passRushBest"} };
})();
