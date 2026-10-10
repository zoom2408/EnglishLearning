/* nb/content/quiz/passiv.js: practice questions for Passiv. Single
   exercise type: context sentences, type the correctly conjugated
   passive form. Wrong answers can be retried (retry:true). */
(() => {
const BANK = {
 "nb-pass-s": [
  {q:"Norsk ___ (snakke) i Norge.",hint:"snakke",accept:["snakkes"],level:"A2",expl:"Phát biểu chung chung: động từ thêm -s."},
  {q:"Søknader ___ (sende) innen 1. mai.",hint:"sende",accept:["sendes"],level:"B1",expl:"Quy định trang trọng: s-passiv."},
  {q:"Denne boka ___ (lese) av mange mennesker.",hint:"lese",accept:["leses"],level:"A2",expl:"S-passiv presens: leses."},
  {q:"Avisen ___ (lese) av mange hver morgen.",hint:"lese",accept:["leses"],level:"A2",expl:"Phát biểu chung chung: động từ thêm -s."},
  {q:"Denne regelen ___ (følge) av alle ansatte.",hint:"følge",accept:["følges"],level:"B1",expl:"Quy định trang trọng: s-passiv."},
  {q:"Møtet ___ (holde) hver fredag.",hint:"holde",accept:["holdes"],level:"B1",expl:"Việc lặp lại đều đặn, chung chung: s-passiv."},
  {q:"Varene ___ (sende) samme dag.",hint:"sende",accept:["sendes"],level:"A2",expl:"Phát biểu chung chung: s-passiv."},
  {q:"Norsk ___ (undervise) på skolen.",hint:"undervise",accept:["undervises"],level:"B1",expl:"Phát biểu chung chung: s-passiv."},
  {q:"Billettene ___ (selge) i resepsjonen.",hint:"selge",accept:["selges"],level:"A2",expl:"Phát biểu chung chung: s-passiv."},
  {q:"Døren ___ (låse) hver kveld.",hint:"låse",accept:["låses"],level:"B1",expl:"Việc lặp lại đều đặn: s-passiv."},
  {q:"Problemet ___ (diskutere) på møtet.",hint:"diskutere",accept:["diskuteres"],level:"B1",expl:"Phát biểu chung chung: s-passiv."},
  {q:"Søknaden ___ (behandle) innen to uker.",hint:"behandle",accept:["behandles"],level:"B1",expl:"Quy định trang trọng: s-passiv."},
  {q:"Produktene ___ (produsere) i Norge.",hint:"produsere",accept:["produseres"],level:"B1",expl:"Phát biểu chung chung: s-passiv."},
  {q:"Maten ___ (servere) klokken sju.",hint:"servere",accept:["serveres"],level:"A2",expl:"Việc lặp lại đều đặn: s-passiv."},
  {q:"Reglene ___ (forandre) ofte.",hint:"forandre",accept:["forandres"],level:"B1",expl:"Phát biểu chung chung: s-passiv."},
 ],
 "nb-pass-bli": [
  {q:"Huset ___ (bygge) i 1990.",hint:"bygge",accept:["ble bygget"],level:"B1",expl:"Preteritum bị động: ble + partisipp."},
  {q:"Bilen min ___ (stjele) i går.",hint:"stjele",accept:["ble stjålet"],level:"B1",expl:"Một sự việc cụ thể, một lần: ble + partisipp."},
  {q:"Boka ___ (skrive) av en kjent forfatter.",hint:"skrive",accept:["ble skrevet"],level:"B1",expl:"ble + partisipp (skrevet)."},
  {q:"Døren ___ (åpne) akkurat nå.",hint:"åpne",accept:["blir åpnet"],level:"B1",expl:"Presens bị động, sự việc cụ thể: blir + partisipp."},
  {q:"Vinduet ___ (knuse) i stormen.",hint:"knuse",accept:["ble knust"],level:"B1",expl:"Một sự việc cụ thể, một lần: ble + partisipp."},
  {q:"Brevet ___ (sende) i går.",hint:"sende",accept:["ble sendt"],level:"B1",expl:"Một sự việc cụ thể, một lần: ble + partisipp."},
  {q:"Hunden ___ (finne) av en nabo.",hint:"finne",accept:["ble funnet"],level:"B1",expl:"Một sự việc cụ thể, một lần: ble + partisipp."},
  {q:"Rapporten ___ (skrive) ferdig i natt.",hint:"skrive",accept:["ble skrevet"],level:"B1",expl:"Một sự việc cụ thể, một lần: ble + partisipp."},
  {q:"Bilen ___ (reparere) på verkstedet.",hint:"reparere",accept:["ble reparert"],level:"B1",expl:"Một sự việc cụ thể: ble + partisipp."},
  {q:"Pakken ___ (levere) i morges.",hint:"levere",accept:["ble levert"],level:"B1",expl:"Một sự việc cụ thể, một lần: ble + partisipp."},
  {q:"Festen ___ (avlyse) på grunn av regn.",hint:"avlyse",accept:["ble avlyst"],level:"B1",expl:"Một sự việc cụ thể, một lần: ble + partisipp."},
  {q:"Prisen ___ (heve) i fjor.",hint:"heve",accept:["ble hevet"],level:"B1",expl:"Một sự việc cụ thể, một lần: ble + partisipp."},
  {q:"Møtet ___ (flytte) til neste uke.",hint:"flytte",accept:["ble flyttet"],level:"B1",expl:"Một sự việc cụ thể, một lần: ble + partisipp."},
  {q:"Barnet ___ (rose) av læreren.",hint:"rose",accept:["ble rost"],level:"B1",expl:"Một sự việc cụ thể, một lần: ble + partisipp."},
  {q:"Søknaden ___ (avslå) av kommunen.",hint:"avslå",accept:["ble avslått"],level:"B2",expl:"Một sự việc cụ thể, một lần: ble + partisipp."},
 ],
 "nb-pass-modal": [
  {q:"Oppgaven ___ (måtte / gjøre) i dag.",hint:"måtte / gjøre",accept:["må bli gjort"],level:"B1",expl:"Modal verb + bli + partisipp."},
  {q:"Skjemaet ___ (måtte / fylle) ut innen fredag.",hint:"måtte / fylle",accept:["må bli fylt"],level:"B1",expl:"Modal verb + bli + partisipp."},
  {q:"Dette problemet ___ (kunne / løse) lett.",hint:"kunne / løse",accept:["kan bli løst"],level:"B1",expl:"Modal verb + bli + partisipp."},
  {q:"Denne feilen ___ (måtte / rette) før i morgen.",hint:"måtte / rette",accept:["må bli rettet"],level:"B1",expl:"Modal verb + bli + partisipp."},
  {q:"Huset ___ (burde / male) snart.",hint:"burde / male",accept:["bør bli malt"],level:"B1",expl:"Modal verb + bli + partisipp."},
  {q:"Rapporten ___ (måtte / levere) i dag.",hint:"måtte / levere",accept:["må bli levert"],level:"B1",expl:"Modal verb + bli + partisipp."},
  {q:"Vinduet ___ (kunne / reparere) billig.",hint:"kunne / reparere",accept:["kan bli reparert"],level:"B1",expl:"Modal verb + bli + partisipp."},
  {q:"Dette ___ (måtte / forklare) nøye.",hint:"måtte / forklare",accept:["må bli forklart"],level:"B1",expl:"Modal verb + bli + partisipp."},
  {q:"Søppelet ___ (måtte / kaste) i dag.",hint:"måtte / kaste",accept:["må bli kastet"],level:"B1",expl:"Modal verb + bli + partisipp."},
  {q:"Problemet ___ (kunne / løse) raskt.",hint:"kunne / løse",accept:["kan bli løst"],level:"B1",expl:"Modal verb + bli + partisipp."},
  {q:"Boken ___ (burde / oversette) til flere språk.",hint:"burde / oversette",accept:["bør bli oversatt"],level:"B2",expl:"Modal verb + bli + partisipp."},
  {q:"Varene ___ (måtte / sjekke) før levering.",hint:"måtte / sjekke",accept:["må bli sjekket"],level:"B1",expl:"Modal verb + bli + partisipp."},
  {q:"Denne regelen ___ (kunne / endre) i fremtiden.",hint:"kunne / endre",accept:["kan bli endret"],level:"B2",expl:"Modal verb + bli + partisipp."},
  {q:"Pengene ___ (måtte / betale) tilbake.",hint:"måtte / betale",accept:["må bli betalt"],level:"B1",expl:"Modal verb + bli + partisipp."},
  {q:"Avtalen ___ (burde / signere) i dag.",hint:"burde / signere",accept:["bør bli signert"],level:"B2",expl:"Modal verb + bli + partisipp."},
 ],
 "nb-pass-man": [
  {q:"I Sveits ___ (man / fire språk / snakke).",hint:"man / fire språk / snakke",accept:["snakker man fire språk"],level:"B1",expl:"Thay vì bị động, dùng man + động từ chia bình thường."},
  {q:"___ (man / si), at det blir kaldt i vinter.",hint:"man / si",accept:["Man sier"],level:"B1",expl:"man + động từ chia: cách tự nhiên hơn “Det sies”."},
  {q:"I Norge ___ (man / spise / mye fisk).",hint:"man / spise / mye fisk",accept:["spiser man mye fisk"],level:"B1",expl:"man + động từ chia bình thường thay cho câu bị động."},
  {q:"___ (man / kunne / se) nordlys i nord.",hint:"man / kunne / se",accept:["Man kan se"],level:"B1",expl:"man + modal verb + nguyên thể."},
  {q:"I denne byen ___ (man / snakke / flere språk).",hint:"man / snakke / flere språk",accept:["snakker man flere språk"],level:"B1",expl:"man + động từ chia bình thường."},
  {q:"___ (man / må / betale / skatt) i Norge.",hint:"man / må / betale / skatt",accept:["Man må betale skatt"],level:"B1",expl:"man + modal verb + nguyên thể."},
  {q:"Her ___ (man / få / ikke / parkere).",hint:"man / få / ikke / parkere",accept:["får man ikke parkere"],level:"B1",expl:"man + động từ chia + ikke."},
  {q:"___ (man / bruke / denne appen / for å betale).",hint:"man / bruke / denne appen / for å betale",accept:["Man bruker denne appen"],level:"B1",expl:"man + động từ chia bình thường."},
  {q:"I Japan ___ (man / ta av / skoene / innendørs).",hint:"man / ta av / skoene / innendørs",accept:["tar man av skoene"],level:"B1",expl:"man + động từ chia bình thường."},
  {q:"___ (man / kan / lære / norsk / raskt).",hint:"man / kan / lære / norsk / raskt",accept:["Man kan lære norsk raskt"],level:"B1",expl:"man + modal verb + nguyên thể."},
  {q:"I denne jobben ___ (man / trenge / tålmodighet).",hint:"man / trenge / tålmodighet",accept:["trenger man tålmodighet"],level:"B1",expl:"man + động từ chia bình thường."},
  {q:"I Norge ___ (man / drikke / mye kaffe).",hint:"man / drikke / mye kaffe",accept:["drikker man mye kaffe"],level:"B1",expl:"man + động từ chia bình thường."},
  {q:"___ (man / bør / respektere / naturen).",hint:"man / bør / respektere / naturen",accept:["Man bør respektere naturen"],level:"B1",expl:"man + modal verb + nguyên thể."},
  {q:"På kontoret ___ (man / må / møte / opp klokken åtte).",hint:"man / må / møte / opp klokken åtte",accept:["må man møte opp klokken åtte"],level:"B1",expl:"man + modal verb + nguyên thể."},
  {q:"Her ___ (man / få / ikke / røyke).",hint:"man / få / ikke / røyke",accept:["får man ikke røyke"],level:"B1",expl:"man + động từ chia + ikke."},
 ],
};

const TYPES={
 fill:{name:"Fyll inn",desc:"Câu ngữ cảnh, gõ đúng dạng bị động hoặc câu với man"},
};
const POOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => POOL.push({
 type:"fill",kind:"input",retry:true,
 prompt:fmt(it.q.replace(/ \(.+?\)/,"")),
 hint:`Gợi ý: <b>${esc(it.hint)}</b>. Gõ cả cụm động từ bị động.`,
 accept:it.accept,plain:it.accept[0],ref,level:it.level,expl:it.expl,
})));

const RUSH=[
 ["Verb + -s",["nb-pass-s"]],
 ["blir/ble + partisipp",["nb-pass-bli"]],
 ["Modal + bli + partisipp",["nb-pass-modal"]],
 ["man + Verb",["nb-pass-man"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["passiv"] = { pool: POOL, types: TYPES, game: {title:"Hvilken passivform?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng dạng bị động",prompt:"Dấu hiệu này thuộc dạng nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"passRushBest"} };
})();
