/* nb/content/quiz/betingelsessetninger.js: practice questions for
   Betingelsessetninger. Single exercise type: context sentences, type
   the correctly conjugated verb. Wrong answers can be retried
   (retry:true). */
(() => {
const BANK = {
 "nb-kond-1": [
  {q:"Hvis det ___ (regne) i morgen, blir vi hjemme.",hint:"regne",accept:["regner"],level:"A2",expl:"Điều kiện thực tế, có thể xảy ra: hvis + presens."},
  {q:"Hvis du ___ (studere) hardt, består du eksamen sikkert.",hint:"studere",accept:["studerer"],level:"A2",expl:"Điều kiện khả thi: hvis + presens."},
  {q:"Hvis man ___ (varme) vann, koker det.",hint:"varme",accept:["varmer"],level:"A2",expl:"Quy luật chung, cả hai vế đều presens."},
  {q:"Hvis jeg ___ (ha) tid, kommer jeg innom i morgen.",hint:"ha",accept:["har"],level:"A2",expl:"Điều kiện thực tế có khả năng xảy ra: har, không phải hadde."},
  {q:"Hvis jeg ___ (ha) tid, hjelper jeg deg.",hint:"ha",accept:["har"],level:"A1",expl:"Điều kiện thực tế có thể xảy ra: hvis + presens."},
  {q:"Hvis du ___ (spørre) læreren, får du svar.",hint:"spørre",accept:["spør"],level:"A2",expl:"Điều kiện thực tế: hvis + presens."},
  {q:"Hvis vi ___ (skynde) oss, når vi bussen.",hint:"skynde",accept:["skynder"],level:"A2",expl:"Điều kiện thực tế: hvis + presens."},
  {q:"Hvis det ___ (bli) kaldt, tar jeg på meg jakke.",hint:"bli",accept:["blir"],level:"A2",expl:"Điều kiện thực tế: hvis + presens."},
  {q:"Hvis hun ___ (komme) tidlig, kan vi spise sammen.",hint:"komme",accept:["kommer"],level:"A2",expl:"Điều kiện thực tế: hvis + presens."},
  {q:"Hvis prisen ___ (være) for høy, kjøper jeg den ikke.",hint:"være",accept:["er"],level:"A2",expl:"Điều kiện thực tế: hvis + presens."},
  {q:"Hvis du ___ (trene) hver dag, blir du sterkere.",hint:"trene",accept:["trener"],level:"A2",expl:"Điều kiện thực tế/quy luật chung: hvis + presens."},
  {q:"Hvis han ___ (ringe), svarer jeg.",hint:"ringe",accept:["ringer"],level:"A1",expl:"Điều kiện thực tế: hvis + presens."},
  {q:"Hvis vi ___ (ha) nok penger, reiser vi til Italia.",hint:"ha",accept:["har"],level:"A2",expl:"Điều kiện thực tế có khả năng xảy ra: har."},
  {q:"Hvis det ___ (snø), bygger vi en snømann.",hint:"snø",accept:["snør"],level:"A1",expl:"Điều kiện thực tế: hvis + presens."},
  {q:"Hvis du ___ (lese) boka, forstår du historien bedre.",hint:"lese",accept:["leser"],level:"A2",expl:"Điều kiện thực tế: hvis + presens."},
  {q:"Hvis jeg ___ (våkne) tidlig, går jeg en tur.",hint:"våkne",accept:["våkner"],level:"A2",expl:"Điều kiện thực tế: hvis + presens."},
  {q:"Hvis hun ___ (spise) for mye, blir hun dårlig.",hint:"spise",accept:["spiser"],level:"A2",expl:"Điều kiện thực tế/quy luật chung: hvis + presens."},
  {q:"Hvis vi ___ (vente), kommer bussen snart.",hint:"vente",accept:["venter"],level:"A2",expl:"Điều kiện thực tế: hvis + presens."},
  {q:"Hvis de ___ (øve) mer, blir de bedre.",hint:"øve",accept:["øver"],level:"A2",expl:"Điều kiện thực tế/quy luật chung: hvis + presens."},
  {q:"Hvis du ___ (spare) penger, kan du reise mer.",hint:"spare",accept:["sparer"],level:"A2",expl:"Điều kiện thực tế: hvis + presens."},
 ],
 "nb-kond-2": [
  {q:"Hvis jeg ___ (være) rik, ville jeg reise jorden rundt.",hint:"være",accept:["var"],level:"B1",expl:"Giả định trái thực tế hiện tại: preteritum của være là var."},
  {q:"Hvis jeg hadde mer tid, ___ (jeg / lære) flere språk.",hint:"jeg / lære",accept:["ville jeg lære"],level:"B1",expl:"Mệnh đề chính dùng ville + infinitiv cho giả định hiện tại."},
  {q:"___ (du / kunne) hjelpe meg, hvis du har tid?",hint:"du / kunne",accept:["Kunne du"],level:"B1",expl:"Đề nghị lịch sự dùng preteritum trực tiếp: kunne."},
  {q:"Hvis jeg var deg, ___ (jeg / gjøre) ikke det.",hint:"jeg / gjøre",accept:["ville jeg"],level:"B1",expl:"Giả định trái thực tế hiện tại: ville + infinitiv."},
  {q:"Hvis jeg ___ (ha) mer penger, ville jeg kjøpt et nytt hus.",hint:"ha",accept:["hadde"],level:"B1",expl:"Giả định trái thực tế hiện tại: preteritum của ha là hadde."},
  {q:"Hvis hun ___ (bo) nærmere, ville vi møttes oftere.",hint:"bo",accept:["bodde"],level:"B1",expl:"Giả định trái thực tế hiện tại: preteritum của bo là bodde."},
  {q:"Hvis vi ___ (kunne) fly, ville vi reist overalt.",hint:"kunne",accept:["kunne"],level:"B1",expl:"Giả định trái thực tế hiện tại: preteritum của kunne giữ nguyên dạng."},
  {q:"Hvis han ___ (vite) sannheten, ville han blitt sint.",hint:"vite",accept:["visste"],level:"B1",expl:"Giả định trái thực tế hiện tại: preteritum của vite là visste."},
  {q:"Hvis du ___ (spørre) meg, ville jeg si ja.",hint:"spørre",accept:["spurte"],level:"B1",expl:"Giả định trái thực tế hiện tại: preteritum của spørre là spurte."},
  {q:"Hvis jeg var deg, ___ (jeg / ikke / gjøre) det.",hint:"jeg / ikke / gjøre",accept:["ville jeg ikke gjøre"],level:"B1",expl:"Mệnh đề chính: ville + ikke + infinitiv."},
  {q:"Hvis det ___ (være) sommer nå, ville vi bade.",hint:"være",accept:["var"],level:"B1",expl:"Giả định trái thực tế hiện tại: preteritum của være là var."},
  {q:"Hvis vi ___ (ha) en bil, ville vi kjøre dit.",hint:"ha",accept:["hadde"],level:"B1",expl:"Giả định trái thực tế hiện tại: preteritum của ha là hadde."},
  {q:"Hvis jeg ___ (kunne) velge, ville jeg bo i Norge.",hint:"kunne",accept:["kunne"],level:"B1",expl:"Giả định trái thực tế hiện tại: preteritum của kunne giữ nguyên dạng."},
  {q:"Hvis hun ___ (ha) tid, ville hun hjelpe oss.",hint:"ha",accept:["hadde"],level:"B1",expl:"Giả định trái thực tế hiện tại: preteritum của ha là hadde."},
  {q:"Hvis han ___ (være) rikere, ville han reise mer.",hint:"være",accept:["var"],level:"B1",expl:"Giả định trái thực tế hiện tại: preteritum của være là var."},
  {q:"Hvis vi ___ (bo) i byen, ville vi gå til jobb.",hint:"bo",accept:["bodde"],level:"B1",expl:"Giả định trái thực tế hiện tại: preteritum của bo là bodde."},
  {q:"Hvis jeg ___ (vite) det, ville jeg fortelle deg det.",hint:"vite",accept:["visste"],level:"B1",expl:"Giả định trái thực tế hiện tại: preteritum của vite là visste."},
  {q:"Hvis du ___ (ha) vinger, kunne du fly.",hint:"ha",accept:["hadde"],level:"B1",expl:"Giả định trái thực tế hiện tại: preteritum của ha là hadde."},
  {q:"Hvis de ___ (bo) her, ville de like det.",hint:"bo",accept:["bodde"],level:"B1",expl:"Giả định trái thực tế hiện tại: preteritum của bo là bodde."},
  {q:"Hvis hun ___ (snakke) norsk, ville hun forstå alt.",hint:"snakke",accept:["snakket"],level:"B1",expl:"Giả định trái thực tế hiện tại: preteritum của snakke là snakket."},
 ],
 "nb-kond-3": [
  {q:"Hvis jeg ___ (vite) det, ville jeg ha reagert annerledes.",hint:"vite",accept:["hadde visst"],level:"B2",expl:"Giả định trái thực tế quá khứ: hvis + hadde + partisipp."},
  {q:"Hvis jeg hadde mer tid, ___ (jeg / lese) mer.",hint:"jeg / lese",accept:["ville jeg ha lest"],level:"B2",expl:"Mệnh đề chính: ville ha + partisipp."},
  {q:"Hvis du hadde spurt meg, ___ (jeg / hjelpe) deg gjerne.",hint:"jeg / hjelpe",accept:["ville jeg ha hjulpet"],level:"B2",expl:"Mệnh đề chính: ville ha + partisipp (hjulpet)."},
  {q:"Hvis de ___ (dra) tidligere, ville de ikke ha mistet toget.",hint:"dra",accept:["hadde dratt"],level:"B2",expl:"Giả định trái thực tế quá khứ với động từ chuyển động: hadde dratt."},
  {q:"Hvis jeg ___ (vite) om problemet, ville jeg ha løst det.",hint:"vite",accept:["hadde visst"],level:"B2",expl:"Giả định trái thực tế quá khứ: hvis + hadde + partisipp."},
  {q:"Hvis hun ___ (studere) mer, ville hun ha bestått eksamen.",hint:"studere",accept:["hadde studert"],level:"B2",expl:"Giả định trái thực tế quá khứ: hvis + hadde + partisipp."},
  {q:"Hvis vi ___ (dra) tidligere, ville vi ha unngått trafikken.",hint:"dra",accept:["hadde dratt"],level:"B2",expl:"Giả định trái thực tế quá khứ với động từ chuyển động: hadde dratt."},
  {q:"Hvis han ___ (lytte) til meg, ville han ha spart penger.",hint:"lytte",accept:["hadde lyttet"],level:"B2",expl:"Giả định trái thực tế quá khứ: hvis + hadde + partisipp."},
  {q:"Hvis de ___ (invitere) oss, ville vi ha kommet.",hint:"invitere",accept:["hadde invitert"],level:"B2",expl:"Giả định trái thực tế quá khứ: hvis + hadde + partisipp."},
  {q:"Hvis jeg ___ (ha) mer tid i går, ville jeg ha ringt deg.",hint:"ha",accept:["hadde hatt"],level:"B2",expl:"Giả định trái thực tế quá khứ: hvis + hadde + partisipp (hatt)."},
  {q:"Hvis hun ___ (ta) bussen, ville hun ha kommet i tide.",hint:"ta",accept:["hadde tatt"],level:"B2",expl:"Giả định trái thực tế quá khứ: hvis + hadde + partisipp."},
  {q:"Hvis vi ___ (booke) hotellet tidligere, ville vi ha fått bedre pris.",hint:"booke",accept:["hadde booket"],level:"B2",expl:"Giả định trái thực tế quá khứ: hvis + hadde + partisipp."},
  {q:"Hvis han ___ (se) faren, ville han ha stoppet bilen.",hint:"se",accept:["hadde sett"],level:"B2",expl:"Giả định trái thực tế quá khứ: hvis + hadde + partisipp."},
  {q:"Hvis jeg ___ (høre) alarmen, ville jeg ha våknet.",hint:"høre",accept:["hadde hørt"],level:"B2",expl:"Giả định trái thực tế quá khứ: hvis + hadde + partisipp."},
  {q:"Hvis de ___ (komme) tidligere, ville de ha fått gode plasser.",hint:"komme",accept:["hadde kommet"],level:"B2",expl:"Giả định trái thực tế quá khứ: hvis + hadde + partisipp."},
  {q:"Hvis hun ___ (spørre) om hjelp, ville vi ha hjulpet henne.",hint:"spørre",accept:["hadde spurt"],level:"B2",expl:"Giả định trái thực tế quá khứ: hvis + hadde + partisipp."},
  {q:"Hvis vi ___ (sjekke) værmeldingen, ville vi ha tatt med paraply.",hint:"sjekke",accept:["hadde sjekket"],level:"B2",expl:"Giả định trái thực tế quá khứ: hvis + hadde + partisipp."},
  {q:"Hvis han ___ (jobbe) hardere, ville han ha fått jobben.",hint:"jobbe",accept:["hadde jobbet"],level:"B2",expl:"Giả định trái thực tế quá khứ: hvis + hadde + partisipp."},
  {q:"Hvis jeg ___ (gå) en annen vei, ville jeg ha unngått kollisjonen.",hint:"gå",accept:["hadde gått"],level:"B2",expl:"Giả định trái thực tế quá khứ: hvis + hadde + partisipp."},
  {q:"Hvis de ___ (betale) regningen i tide, ville de ha unngått gebyret.",hint:"betale",accept:["hadde betalt"],level:"B2",expl:"Giả định trái thực tế quá khứ: hvis + hadde + partisipp."},
 ],
};

const TYPES={
 fill:{name:"Fyll inn",desc:"Câu ngữ cảnh, gõ đúng dạng động từ điều kiện"},
};
const POOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => POOL.push({
 type:"fill",kind:"input",retry:true,
 prompt:fmt(it.q.replace(/ \(.+?\)/,"")),
 hint:`Gợi ý: <b>${esc(it.hint)}</b>. Gõ đúng dạng đã chia.`,
 accept:it.accept,plain:it.accept[0],ref,level:it.level,expl:it.expl,
})));

const RUSH=[
 ["hvis + presens",["nb-kond-1"]],["có thể xảy ra",["nb-kond-1"]],
 ["hvis + preteritum",["nb-kond-2"]],["ville",["nb-kond-2"]],["giả định hiện tại",["nb-kond-2"]],
 ["hvis + hadde + partisipp",["nb-kond-3"]],["giả định quá khứ",["nb-kond-3"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["betingelsessetninger"] = { pool: POOL, types: TYPES, game: {title:"Hvilken type?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng loại câu điều kiện",prompt:"Dấu hiệu này thuộc loại nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"kondRushBest"} };
})();
