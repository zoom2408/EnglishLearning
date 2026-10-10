/* nb/content/quiz/substantiv.js: practice questions for Substantiv &
   Artikler. Single exercise type: context sentences, type the
   correctly inflected noun. Wrong answers can be retried
   (retry:true). */
(() => {
const BANK = {
 "nb-sub-hankjonn": [
  {q:"Jeg har en bil. ___ (bil) er rød.",hint:"bil",accept:["Bilen"],level:"A1",expl:"Bestemt form hankjønn: thêm -en."},
  {q:"Jeg ser mange ___ (bil) på veien.",hint:"bil",accept:["biler"],level:"A1",expl:"Flertall ubestemt hankjønn: thêm -er."},
  {q:"___ (bil) på parkeringsplassen er nye.",hint:"bil",accept:["Bilene"],level:"A2",expl:"Flertall bestemt: thêm -ene."},
  {q:"Kan du se en ___ (bil) der borte?",hint:"bil",accept:["bil"],level:"A1",expl:"Ubestemt số ít: en + danh từ nguyên dạng."},
  {q:"Kan du se en ___ (hund) i parken?",hint:"hund",accept:["hund"],level:"A1",expl:"Ubestemt số ít: en + danh từ nguyên dạng."},
  {q:"___ (hund) min heter Rex.",hint:"hund",accept:["Hunden"],level:"A1",expl:"Bestemt form hankjønn: thêm -en."},
  {q:"Vi så mange ___ (hund) i parken i dag.",hint:"hund",accept:["hunder"],level:"A1",expl:"Flertall ubestemt hankjønn: thêm -er."},
  {q:"___ (hund) i nabolaget bjeffer mye.",hint:"hund",accept:["Hundene"],level:"A2",expl:"Flertall bestemt: thêm -ene."},
  {q:"Det står en ___ (stol) ved bordet.",hint:"stol",accept:["stol"],level:"A1",expl:"Ubestemt số ít: en + danh từ nguyên dạng."},
  {q:"___ (stol) er ødelagt.",hint:"stol",accept:["Stolen"],level:"A1",expl:"Bestemt form hankjønn: thêm -en."},
  {q:"Vi trenger flere ___ (stol) til festen.",hint:"stol",accept:["stoler"],level:"A2",expl:"Flertall ubestemt: thêm -er."},
  {q:"___ (stol) i salen er nye.",hint:"stol",accept:["Stolene"],level:"A2",expl:"Flertall bestemt: thêm -ene."},
  {q:"Oslo er en ___ (by) i Norge.",hint:"by",accept:["by"],level:"A1",expl:"Ubestemt số ít: en + danh từ nguyên dạng."},
  {q:"___ (by) er veldig gammel.",hint:"by",accept:["Byen"],level:"A1",expl:"Bestemt form hankjønn: thêm -en (danh từ kết thúc bằng nguyên âm vẫn thêm -en)."},
  {q:"Norge har mange vakre ___ (by).",hint:"by",accept:["byer"],level:"A2",expl:"Flertall ubestemt: thêm -er (danh từ kết thúc bằng nguyên âm)."},
  {q:"___ (by) langs kysten er populære om sommeren.",hint:"by",accept:["Byene"],level:"A2",expl:"Flertall bestemt: thêm -ene."},
  {q:"Der borte står en ___ (gutt) jeg kjenner.",hint:"gutt",accept:["gutt"],level:"A1",expl:"Ubestemt số ít: en + danh từ nguyên dạng."},
  {q:"___ (gutt) heter Erik.",hint:"gutt",accept:["Gutten"],level:"A1",expl:"Bestemt form hankjønn: thêm -en."},
  {q:"Det var mange ___ (gutt) på fotballkampen.",hint:"gutt",accept:["gutter"],level:"A1",expl:"Flertall ubestemt: thêm -er."},
  {q:"___ (gutt) i klassen er veldig snille.",hint:"gutt",accept:["Guttene"],level:"A2",expl:"Flertall bestemt: thêm -ene."},
 ],
 "nb-sub-hunkjonn": [
  {q:"Jeg leser ei bok. ___ (bok) er spennende.",hint:"bok",accept:["Boka"],level:"A1",expl:"Bestemt form hunkjønn: thêm -a."},
  {q:"Biblioteket har mange ___ (bok) om Norge.",hint:"bok",accept:["bøker"],level:"A1",expl:"Flertall ubestemt: bøker (nguyên âm o→ø)."},
  {q:"___ (bok) på hyllen er mine.",hint:"bok",accept:["Bøkene"],level:"A2",expl:"Flertall bestemt: bøkene."},
  {q:"Jeg kjøpte ei ny ___ (bok) i går.",hint:"bok",accept:["bok"],level:"A1",expl:"Ubestemt số ít: ei + danh từ nguyên dạng."},
  {q:"Jeg kjenner ei ___ (jente) som heter Maria.",hint:"jente",accept:["jente"],level:"A1",expl:"Ubestemt số ít: ei + danh từ nguyên dạng."},
  {q:"___ (jente) heter Maria.",hint:"jente",accept:["Jenta"],level:"A1",expl:"Bestemt form hunkjønn: thêm -a."},
  {q:"Det var mange ___ (jente) på festen.",hint:"jente",accept:["jenter"],level:"A1",expl:"Flertall ubestemt: thêm -er."},
  {q:"___ (jente) i klassen er veldig snille.",hint:"jente",accept:["Jentene"],level:"A2",expl:"Flertall bestemt: thêm -ene."},
  {q:"Vi skal reise om ei ___ (uke).",hint:"uke",accept:["uke"],level:"A1",expl:"Ubestemt số ít: ei + danh từ nguyên dạng."},
  {q:"___ (uke) har gått fort.",hint:"uke",accept:["Uka"],level:"A1",expl:"Bestemt form hunkjønn: thêm -a."},
  {q:"Vi har ferie i to ___ (uke).",hint:"uke",accept:["uker"],level:"A2",expl:"Flertall ubestemt: thêm -er."},
  {q:"___ (uke) i desember er veldig travle.",hint:"uke",accept:["Ukene"],level:"A2",expl:"Flertall bestemt: thêm -ene."},
  {q:"Jeg har ei ny ___ (klokke).",hint:"klokke",accept:["klokke"],level:"A1",expl:"Ubestemt số ít: ei + danh từ nguyên dạng."},
  {q:"___ (klokke) på veggen er stoppet.",hint:"klokke",accept:["Klokka"],level:"A1",expl:"Bestemt form hunkjønn: thêm -a."},
  {q:"Butikken selger mange fine ___ (klokke).",hint:"klokke",accept:["klokker"],level:"A2",expl:"Flertall ubestemt: thêm -er."},
  {q:"___ (klokke) i butikken er dyre.",hint:"klokke",accept:["Klokkene"],level:"A2",expl:"Flertall bestemt: thêm -ene."},
  {q:"Jeg trenger ei ny ___ (seng).",hint:"seng",accept:["seng"],level:"A1",expl:"Ubestemt số ít: ei + danh từ nguyên dạng."},
  {q:"___ (seng) min er veldig komfortabel.",hint:"seng",accept:["Senga"],level:"A1",expl:"Bestemt form hunkjønn: thêm -a."},
  {q:"Hotellet har mange ___ (seng).",hint:"seng",accept:["senger"],level:"A2",expl:"Flertall ubestemt: thêm -er."},
  {q:"___ (seng) på hotellet er nye.",hint:"seng",accept:["Sengene"],level:"A2",expl:"Flertall bestemt: thêm -ene."},
 ],
 "nb-sub-intetkjonn": [
  {q:"Jeg kjøpte et hus. ___ (hus) er stort.",hint:"hus",accept:["Huset"],level:"A1",expl:"Bestemt form intetkjønn: thêm -et."},
  {q:"Det står to ___ (hus) på gaten.",hint:"hus",accept:["hus"],level:"A1",expl:"Flertall ubestemt et-ord: KHÔNG thêm đuôi."},
  {q:"___ (hus) i denne gaten er gamle.",hint:"hus",accept:["Husene"],level:"A2",expl:"Flertall bestemt: thêm -ene."},
  {q:"Vi skal bygge et nytt ___ (hus) neste år.",hint:"hus",accept:["hus"],level:"A1",expl:"Ubestemt số ít: et + danh từ nguyên dạng."},
  {q:"Jeg har et ___ (bord) i stuen.",hint:"bord",accept:["bord"],level:"A1",expl:"Ubestemt số ít: et + danh từ nguyên dạng."},
  {q:"___ (bord) er av tre.",hint:"bord",accept:["Bordet"],level:"A1",expl:"Bestemt form intetkjønn: thêm -et."},
  {q:"Vi trenger flere ___ (bord) til festen.",hint:"bord",accept:["bord"],level:"A2",expl:"Flertall ubestemt et-ord: KHÔNG thêm đuôi."},
  {q:"___ (bord) i restauranten er reservert.",hint:"bord",accept:["Bordene"],level:"A2",expl:"Flertall bestemt: thêm -ene."},
  {q:"Jeg vil ha et ___ (eple).",hint:"eple",accept:["eple"],level:"A1",expl:"Ubestemt số ít: et + danh từ nguyên dạng."},
  {q:"___ (eple) er rødt og søtt.",hint:"eple",accept:["Eplet"],level:"A1",expl:"Bestemt form intetkjønn: thêm -et."},
  {q:"Jeg kjøpte fem ___ (eple) på markedet.",hint:"eple",accept:["epler"],level:"A2",expl:"Trường hợp đặc biệt: et-ord kết thúc bằng -e (eple) thêm -r ở flertall ubestemt, không giữ nguyên như hus."},
  {q:"___ (eple) på bordet er ferske.",hint:"eple",accept:["Eplene"],level:"A2",expl:"Flertall bestemt: thêm -ene."},
  {q:"De har et ___ (barn).",hint:"barn",accept:["barn"],level:"A1",expl:"Ubestemt số ít: et + danh từ nguyên dạng."},
  {q:"___ (barn) sover nå.",hint:"barn",accept:["Barnet"],level:"A1",expl:"Bestemt form intetkjønn: thêm -et."},
  {q:"De har tre ___ (barn).",hint:"barn",accept:["barn"],level:"A2",expl:"Flertall ubestemt et-ord: KHÔNG thêm đuôi."},
  {q:"___ (barn) i hagen leker sammen.",hint:"barn",accept:["Barna"],level:"B1",expl:"Bất quy tắc: flertall bestemt của barn là barna, không phải “barnene”."},
  {q:"Han bodde der i et ___ (år).",hint:"år",accept:["år"],level:"A1",expl:"Ubestemt số ít: et + danh từ nguyên dạng."},
  {q:"___ (år) 2020 var spesielt.",hint:"år",accept:["Året"],level:"A1",expl:"Bestemt form intetkjønn: thêm -et."},
  {q:"Hun har bodd her i fem ___ (år).",hint:"år",accept:["år"],level:"A2",expl:"Flertall ubestemt et-ord: KHÔNG thêm đuôi (danh từ không đổi dạng)."},
  {q:"___ (år) etter krigen var vanskelige.",hint:"år",accept:["Årene"],level:"B1",expl:"Flertall bestemt: thêm -ene."},
 ],
};

const TYPES={
 fill:{name:"Fyll inn",desc:"Câu ngữ cảnh, gõ đúng dạng danh từ"},
};
const POOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => POOL.push({
 type:"fill",kind:"input",retry:true,
 prompt:fmt(it.q.replace(/ \(.+?\)/,"")),
 hint:`Gợi ý: <b>${esc(it.hint)}</b>. Gõ đúng dạng của danh từ.`,
 accept:it.accept,plain:it.accept[0],ref,level:it.level,expl:it.expl,
})));

const RUSH=[
 ["en + danh từ",["nb-sub-hankjonn"]],["-en (bestemt)",["nb-sub-hankjonn"]],["-er/-ene (flertall)",["nb-sub-hankjonn"]],
 ["ei + danh từ",["nb-sub-hunkjonn"]],["-a (bestemt)",["nb-sub-hunkjonn"]],
 ["et + danh từ",["nb-sub-intetkjonn"]],["-et (bestemt)",["nb-sub-intetkjonn"]],["flertall ubestemt không đuôi",["nb-sub-intetkjonn"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["substantiv"] = { pool: POOL, types: TYPES, game: {title:"Hvilket kjønn?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng giống của danh từ",prompt:"Dấu hiệu này thuộc giống nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"subRushBest"} };
})();
