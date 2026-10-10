/* nb/content/quiz/onskesetninger.js: practice questions for
   Ønskesetninger. Single exercise type: context sentences, type the
   correctly conjugated verb. Wrong answers can be retried
   (retry:true). */
(() => {
const BANK = {
 "nb-onske-naatid": [
  {q:"Jeg skulle ønske jeg ___ (ha) mer tid til hobbyer.",hint:"ha",accept:["hadde"],level:"B1",expl:"Ước hiện tại: preteritum của ha là hadde."},
  {q:"Jeg skulle ønske jeg ___ (være) på stranda nå.",hint:"være",accept:["var"],level:"B1",expl:"Ước hiện tại: preteritum của være là var."},
  {q:"Jeg skulle ønske det ___ (ikke / regne) så mye.",hint:"ikke / regne",accept:["ikke regnet"],level:"B1",expl:"Preteritum của regne: regnet."},
  {q:"Jeg skulle ønske du ___ (høre) på meg noen ganger.",hint:"høre",accept:["hørte"],level:"B1",expl:"Preteritum của høre: hørte."},
  {q:"Jeg skulle ønske jeg ___ (bo) nærmere familien.",hint:"bo",accept:["bodde"],level:"B1",expl:"Ước hiện tại: preteritum của bo là bodde."},
  {q:"Jeg skulle ønske jeg ___ (kunne) synge bedre.",hint:"kunne",accept:["kunne"],level:"B1",expl:"Ước hiện tại: preteritum của kunne giữ nguyên dạng."},
  {q:"Jeg skulle ønske han ___ (være) her nå.",hint:"være",accept:["var"],level:"B1",expl:"Ước hiện tại: preteritum của være là var."},
  {q:"Jeg skulle ønske vi ___ (ha) mer tid sammen.",hint:"ha",accept:["hadde"],level:"B1",expl:"Ước hiện tại: preteritum của ha là hadde."},
  {q:"Jeg skulle ønske jeg ___ (vite) svaret.",hint:"vite",accept:["visste"],level:"B1",expl:"Ước hiện tại: preteritum của vite là visste."},
  {q:"Jeg skulle ønske sola ___ (skinne) i dag.",hint:"skinne",accept:["skinte"],level:"B1",expl:"Ước hiện tại: preteritum của skinne là skinte."},
  {q:"Jeg skulle ønske jeg ___ (bo) i et varmere land.",hint:"bo",accept:["bodde"],level:"B1",expl:"Ước hiện tại: preteritum của bo là bodde."},
  {q:"Jeg skulle ønske du ___ (forstå) meg bedre.",hint:"forstå",accept:["forsto"],level:"B1",expl:"Ước hiện tại: preteritum của forstå là forsto."},
  {q:"Jeg skulle ønske jeg ___ (kunne) reise mer.",hint:"kunne",accept:["kunne"],level:"B1",expl:"Ước hiện tại: preteritum của kunne giữ nguyên dạng."},
  {q:"Jeg skulle ønske hun ___ (bli) med oss.",hint:"bli",accept:["ble"],level:"B1",expl:"Ước hiện tại: preteritum của bli là ble."},
  {q:"Jeg skulle ønske det ___ (være) sommer hele året.",hint:"være",accept:["var"],level:"B1",expl:"Ước hiện tại: preteritum của være là var."},
  {q:"Jeg skulle ønske jeg ___ (ha) flere venner her.",hint:"ha",accept:["hadde"],level:"B1",expl:"Ước hiện tại: preteritum của ha là hadde."},
  {q:"Jeg skulle ønske barna ___ (sove) lenger om morgenen.",hint:"sove",accept:["sov"],level:"B1",expl:"Ước hiện tại: preteritum của sove là sov."},
  {q:"Jeg skulle ønske jeg ___ (snakke) bedre engelsk.",hint:"snakke",accept:["snakket"],level:"B1",expl:"Ước hiện tại: preteritum của snakke là snakket."},
  {q:"Jeg skulle ønske vi ___ (bo) nærmere havet.",hint:"bo",accept:["bodde"],level:"B1",expl:"Ước hiện tại: preteritum của bo là bodde."},
  {q:"Jeg skulle ønske jeg ___ (slippe) å jobbe i dag.",hint:"slippe",accept:["slapp"],level:"B1",expl:"Ước hiện tại: preteritum của slippe là slapp."},
 ],
 "nb-onske-fortid": [
  {q:"Jeg skulle ønske jeg ___ (lære) mer til eksamen.",hint:"lære",accept:["hadde lært"],level:"B1",expl:"Tiếc nuối quá khứ: hadde + partisipp (lært)."},
  {q:"Jeg skulle ønske jeg ___ (komme) tidligere.",hint:"komme",accept:["hadde kommet"],level:"B1",expl:"Tiếc nuối quá khứ: hadde + partisipp (kommet)."},
  {q:"Jeg skulle ønske jeg ikke ___ (si) det.",hint:"si",accept:["hadde sagt"],level:"B1",expl:"Tiếc nuối quá khứ: hadde + partisipp (sagt)."},
  {q:"Jeg skulle ønske vi ___ (bli) lenger der.",hint:"bli",accept:["hadde blitt"],level:"B1",expl:"Tiếc nuối quá khứ: hadde + partisipp (blitt)."},
  {q:"Jeg skulle ønske jeg ___ (studere) mer før eksamen.",hint:"studere",accept:["hadde studert"],level:"B1",expl:"Tiếc nuối quá khứ: hadde + partisipp (studert)."},
  {q:"Jeg skulle ønske jeg ___ (ta) den jobben.",hint:"ta",accept:["hadde tatt"],level:"B1",expl:"Tiếc nuối quá khứ: hadde + partisipp (tatt)."},
  {q:"Jeg skulle ønske vi ___ (reise) mer da vi var unge.",hint:"reise",accept:["hadde reist"],level:"B1",expl:"Tiếc nuối quá khứ: hadde + partisipp (reist)."},
  {q:"Jeg skulle ønske jeg ___ (lytte) til rådet ditt.",hint:"lytte",accept:["hadde lyttet"],level:"B1",expl:"Tiếc nuối quá khứ: hadde + partisipp (lyttet)."},
  {q:"Jeg skulle ønske hun ___ (fortelle) meg sannheten.",hint:"fortelle",accept:["hadde fortalt"],level:"B1",expl:"Tiếc nuối quá khứ: hadde + partisipp (fortalt)."},
  {q:"Jeg skulle ønske jeg ___ (kjøpe) huset da det var billig.",hint:"kjøpe",accept:["hadde kjøpt"],level:"B1",expl:"Tiếc nuối quá khứ: hadde + partisipp (kjøpt)."},
  {q:"Jeg skulle ønske jeg ___ (møte) deg tidligere.",hint:"møte",accept:["hadde møtt"],level:"B1",expl:"Tiếc nuối quá khứ: hadde + partisipp (møtt)."},
  {q:"Jeg skulle ønske vi ___ (besøke) dem oftere.",hint:"besøke",accept:["hadde besøkt"],level:"B1",expl:"Tiếc nuối quá khứ: hadde + partisipp (besøkt)."},
  {q:"Jeg skulle ønske jeg ___ (gjøre) leksene i går.",hint:"gjøre",accept:["hadde gjort"],level:"B1",expl:"Tiếc nuối quá khứ: hadde + partisipp (gjort)."},
  {q:"Jeg skulle ønske han ___ (ringe) før han kom.",hint:"ringe",accept:["hadde ringt"],level:"B1",expl:"Tiếc nuối quá khứ: hadde + partisipp (ringt)."},
  {q:"Jeg skulle ønske jeg ___ (ta) bedre vare på helsa.",hint:"ta",accept:["hadde tatt"],level:"B1",expl:"Tiếc nuối quá khứ: hadde + partisipp (tatt)."},
  {q:"Jeg skulle ønske de ___ (spørre) om hjelp tidligere.",hint:"spørre",accept:["hadde spurt"],level:"B1",expl:"Tiếc nuối quá khứ: hadde + partisipp (spurt)."},
  {q:"Jeg skulle ønske jeg ___ (velge) et annet fag.",hint:"velge",accept:["hadde valgt"],level:"B1",expl:"Tiếc nuối quá khứ: hadde + partisipp (valgt)."},
  {q:"Jeg skulle ønske vi ___ (se) den filmen på kino.",hint:"se",accept:["hadde sett"],level:"B1",expl:"Tiếc nuối quá khứ: hadde + partisipp (sett)."},
  {q:"Jeg skulle ønske jeg ___ (spare) mer penger før reisen.",hint:"spare",accept:["hadde spart"],level:"B1",expl:"Tiếc nuối quá khứ: hadde + partisipp (spart)."},
  {q:"Jeg skulle ønske hun ___ (bli) lenger på besøket.",hint:"bli",accept:["hadde blitt"],level:"B1",expl:"Tiếc nuối quá khứ: hadde + partisipp (blitt)."},
 ],
 "nb-onske-hvisbare": [
  {q:"Hvis bare jeg ___ (ha) mer tid!",hint:"ha",accept:["hadde"],level:"B1",expl:"Cảm thán ước hiện tại: preteritum hadde."},
  {q:"Hvis bare jeg ___ (kunne) fly!",hint:"kunne",accept:["kunne"],level:"B1",expl:"Cảm thán với modal verb: preteritum kunne."},
  {q:"Hvis bare jeg ___ (høre) etter!",hint:"høre",accept:["hadde hørt"],level:"B1",expl:"Cảm thán tiếc nuối quá khứ: hadde + partisipp."},
  {q:"Hvis bare du ___ (komme) tidligere!",hint:"komme",accept:["hadde kommet"],level:"B1",expl:"Cảm thán tiếc nuối quá khứ: hadde + partisipp."},
  {q:"Hvis bare jeg ___ (ha) mer tid i dag!",hint:"ha",accept:["hadde"],level:"B1",expl:"Cảm thán ước hiện tại: preteritum hadde."},
  {q:"Hvis bare hun ___ (være) her nå!",hint:"være",accept:["var"],level:"B1",expl:"Cảm thán ước hiện tại: preteritum var."},
  {q:"Hvis bare jeg ___ (kunne) hjelpe deg!",hint:"kunne",accept:["kunne"],level:"B1",expl:"Cảm thán với modal verb: preteritum kunne."},
  {q:"Hvis bare vi ___ (vite) svaret!",hint:"vite",accept:["visste"],level:"B1",expl:"Cảm thán ước hiện tại: preteritum visste."},
  {q:"Hvis bare jeg ___ (snakke) bedre norsk!",hint:"snakke",accept:["snakket"],level:"B1",expl:"Cảm thán ước hiện tại: preteritum snakket."},
  {q:"Hvis bare han ___ (lytte) til oss!",hint:"lytte",accept:["hadde lyttet"],level:"B1",expl:"Cảm thán tiếc nuối quá khứ: hadde + partisipp."},
  {q:"Hvis bare jeg ___ (ta) den sjansen!",hint:"ta",accept:["hadde tatt"],level:"B1",expl:"Cảm thán tiếc nuối quá khứ: hadde + partisipp."},
  {q:"Hvis bare de ___ (komme) i tide!",hint:"komme",accept:["hadde kommet"],level:"B1",expl:"Cảm thán tiếc nuối quá khứ: hadde + partisipp."},
  {q:"Hvis bare jeg ___ (vite) det tidligere!",hint:"vite",accept:["hadde visst"],level:"B1",expl:"Cảm thán tiếc nuối quá khứ: hadde + partisipp (visst)."},
  {q:"Hvis bare solen ___ (skinne) i dag!",hint:"skinne",accept:["skinte"],level:"B1",expl:"Cảm thán ước hiện tại: preteritum skinte."},
  {q:"Hvis bare jeg ___ (ha) nok penger nå!",hint:"ha",accept:["hadde"],level:"B1",expl:"Cảm thán ước hiện tại: preteritum hadde."},
  {q:"Hvis bare du ___ (spørre) meg først!",hint:"spørre",accept:["hadde spurt"],level:"B1",expl:"Cảm thán tiếc nuối quá khứ: hadde + partisipp."},
  {q:"Hvis bare vi ___ (bo) nærmere hverandre!",hint:"bo",accept:["bodde"],level:"B1",expl:"Cảm thán ước hiện tại: preteritum bodde."},
  {q:"Hvis bare jeg ___ (kunne) reise tilbake i tid!",hint:"kunne",accept:["kunne"],level:"B1",expl:"Cảm thán với modal verb: preteritum kunne."},
  {q:"Hvis bare hun ___ (si) sannheten!",hint:"si",accept:["hadde sagt"],level:"B1",expl:"Cảm thán tiếc nuối quá khứ: hadde + partisipp (sagt)."},
  {q:"Hvis bare jeg ___ (forstå) dette bedre!",hint:"forstå",accept:["forsto"],level:"B1",expl:"Cảm thán ước hiện tại: preteritum forsto."},
 ],
};

const TYPES={
 fill:{name:"Fyll inn",desc:"Câu ngữ cảnh, gõ đúng dạng động từ ước muốn"},
};
const POOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => POOL.push({
 type:"fill",kind:"input",retry:true,
 prompt:fmt(it.q.replace(/ \(.+?\)/,"")),
 hint:`Gợi ý: <b>${esc(it.hint)}</b>. Gõ đúng dạng đã chia.`,
 accept:it.accept,plain:it.accept[0],ref,level:it.level,expl:it.expl,
})));

const RUSH=[
 ["Jeg skulle ønske … (preteritum)",["nb-onske-naatid"]],
 ["Jeg skulle ønske … hadde + partisipp",["nb-onske-fortid"]],
 ["Hvis bare …!",["nb-onske-hvisbare"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["onskesetninger"] = { pool: POOL, types: TYPES, game: {title:"Hvilken ønsketype?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng loại câu ước",prompt:"Dấu hiệu này thuộc loại nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"onskeRushBest"} };
})();
