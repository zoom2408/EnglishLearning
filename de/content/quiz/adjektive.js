/* de/content/quiz/adjektive.js: practice questions for
   Adjektivdeklination. BANK groups items by row id (sub-topic), each
   covering Nominativ/Akkusativ/Dativ/Genitiv across all genders and
   plural so the full declension table gets exercised. Single
   exercise type: context sentences, type the correct adjective
   ending. Wrong answers can be retried (retry:true). */
(() => {
const BANK = {
 "de-adj-schwach": [
  {q:"Der klein___ (klein) Hund schläft auf dem Sofa.",hint:"klein + đuôi",accept:["kleine"],level:"A1",expl:"Nominativ maskulin sau mạo từ xác định (der): tính từ -e."},
  {q:"Ich sehe den klein___ (klein) Hund im Garten.",hint:"klein + đuôi",accept:["kleinen"],level:"A1",expl:"Akkusativ maskulin sau mạo từ xác định (den): tính từ -en."},
  {q:"Die neu___ (neu) Studentin kommt aus Vietnam.",hint:"neu + đuôi",accept:["neue"],level:"A1",expl:"Nominativ feminin sau mạo từ xác định (die): tính từ -e."},
  {q:"Ich gebe dem alt___ (alt) Mann das Buch.",hint:"alt + đuôi",accept:["alten"],level:"A2",expl:"Dativ sau mạo từ xác định (dem): tính từ luôn -en."},
  {q:"Das klein___ (klein) Kind lacht.",hint:"klein + đuôi",accept:["kleine"],level:"A2",expl:"Nominativ neutral sau “das”: tính từ -e."},
  {q:"Ich sehe das klein___ (klein) Kind.",hint:"klein + đuôi",accept:["kleine"],level:"A2",expl:"Akkusativ neutral sau “das”: tính từ -e."},
  {q:"Die klein___ (klein) Kinder spielen.",hint:"klein + đuôi",accept:["kleinen"],level:"A2",expl:"Nominativ số nhiều sau “die”: tính từ -en."},
  {q:"Ich sehe die klein___ (klein) Kinder.",hint:"klein + đuôi",accept:["kleinen"],level:"A2",expl:"Akkusativ số nhiều sau “die”: tính từ -en."},
  {q:"Ich helfe der neu___ (neu) Studentin.",hint:"neu + đuôi",accept:["neuen"],level:"B1",expl:"Dativ sau mạo từ xác định (der): tính từ luôn -en."},
  {q:"Ich helfe dem klein___ (klein) Kind.",hint:"klein + đuôi",accept:["kleinen"],level:"B1",expl:"Dativ sau mạo từ xác định (dem): tính từ luôn -en."},
  {q:"Ich helfe den klein___ (klein) Kindern.",hint:"klein + đuôi",accept:["kleinen"],level:"B1",expl:"Dativ số nhiều: tính từ luôn -en."},
  {q:"Das ist das Auto des alt___ (alt) Mannes.",hint:"alt + đuôi",accept:["alten"],level:"B1",expl:"Genitiv sau mạo từ xác định (des): tính từ luôn -en."},
  {q:"Das ist die Tasche der neu___ (neu) Studentin.",hint:"neu + đuôi",accept:["neuen"],level:"B1",expl:"Genitiv sau mạo từ xác định (der): tính từ luôn -en."},
  {q:"Das ist das Spielzeug des klein___ (klein) Kindes.",hint:"klein + đuôi",accept:["kleinen"],level:"B1",expl:"Genitiv sau mạo từ xác định (des): tính từ luôn -en."},
  {q:"Das sind die Bücher der klein___ (klein) Kinder.",hint:"klein + đuôi",accept:["kleinen"],level:"B1",expl:"Genitiv số nhiều: tính từ luôn -en."},
  {q:"Die alt___ (alt) Frau wohnt nebenan.",hint:"alt + đuôi",accept:["alte"],level:"A2",expl:"Nominativ feminin sau “die”: tính từ -e."},
  {q:"Ich sehe die alt___ (alt) Frau jeden Tag.",hint:"alt + đuôi",accept:["alte"],level:"A2",expl:"Akkusativ feminin sau “die”: tính từ -e."},
  {q:"Der neu___ (neu) Student lernt fleißig.",hint:"neu + đuôi",accept:["neue"],level:"A1",expl:"Nominativ maskulin sau “der”: tính từ -e."},
  {q:"Ich kenne den neu___ (neu) Studenten gut.",hint:"neu + đuôi",accept:["neuen"],level:"A2",expl:"Akkusativ maskulin sau “den”: tính từ -en."},
  {q:"Das groß___ (groß) Haus gehört uns.",hint:"groß + đuôi",accept:["große"],level:"A1",expl:"Nominativ neutral sau “das”: tính từ -e."},
 ],
 "de-adj-gemischt": [
  {q:"Ein klein___ (klein) Hund schläft auf dem Sofa.",hint:"klein + đuôi",accept:["kleiner"],level:"A1",expl:"Nominativ maskulin sau “ein” (không rõ giống): tính từ phải thêm -er."},
  {q:"Das ist ein gut___ (gut) Kind.",hint:"gut + đuôi",accept:["gutes"],level:"A1",expl:"Nominativ neutral sau “ein”: tính từ phải thêm -es."},
  {q:"Ich habe eine neu___ (neu) Kollegin kennengelernt.",hint:"neu + đuôi",accept:["neue"],level:"A2",expl:"Akkusativ feminin sau “eine”: tính từ -e, giống hệt schwach."},
  {q:"Kein gut___ (gut) Freund würde das tun.",hint:"gut + đuôi",accept:["guter"],level:"A2",expl:"Nominativ maskulin sau “kein” (nhóm ein-Wörter): tính từ thêm -er."},
  {q:"Ich sehe einen klein___ (klein) Hund.",hint:"klein + đuôi",accept:["kleinen"],level:"A2",expl:"Akkusativ maskulin sau “einen”: tính từ -en."},
  {q:"Ich sehe ein klein___ (klein) Kind.",hint:"klein + đuôi",accept:["kleines"],level:"A2",expl:"Akkusativ neutral sau “ein”: tính từ -es."},
  {q:"Das sind keine klein___ (klein) Kinder.",hint:"klein + đuôi",accept:["kleinen"],level:"B1",expl:"Nominativ số nhiều sau “keine”: tính từ -en."},
  {q:"Ich sehe keine klein___ (klein) Kinder.",hint:"klein + đuôi",accept:["kleinen"],level:"B1",expl:"Akkusativ số nhiều sau “keine”: tính từ -en."},
  {q:"Ich helfe einer neu___ (neu) Kollegin.",hint:"neu + đuôi",accept:["neuen"],level:"B1",expl:"Dativ sau “einer”: tính từ luôn -en."},
  {q:"Ich helfe einem klein___ (klein) Kind.",hint:"klein + đuôi",accept:["kleinen"],level:"B1",expl:"Dativ sau “einem”: tính từ luôn -en."},
  {q:"Ich helfe keinen klein___ (klein) Kindern.",hint:"klein + đuôi",accept:["kleinen"],level:"B1",expl:"Dativ số nhiều: tính từ luôn -en."},
  {q:"Das ist das Auto eines alt___ (alt) Mannes.",hint:"alt + đuôi",accept:["alten"],level:"B2",expl:"Genitiv sau “eines”: tính từ luôn -en."},
  {q:"Das ist die Tasche einer neu___ (neu) Kollegin.",hint:"neu + đuôi",accept:["neuen"],level:"B2",expl:"Genitiv sau “einer”: tính từ luôn -en."},
  {q:"Das ist das Spielzeug eines klein___ (klein) Kindes.",hint:"klein + đuôi",accept:["kleinen"],level:"B2",expl:"Genitiv sau “eines”: tính từ luôn -en."},
  {q:"Eine alt___ (alt) Frau wohnt nebenan.",hint:"alt + đuôi",accept:["alte"],level:"A2",expl:"Nominativ feminin sau “eine”: tính từ -e."},
  {q:"Ich sehe eine alt___ (alt) Frau.",hint:"alt + đuôi",accept:["alte"],level:"A2",expl:"Akkusativ feminin sau “eine”: tính từ -e."},
  {q:"Mein neu___ (neu) Kollege ist sehr nett.",hint:"neu + đuôi",accept:["neuer"],level:"A2",expl:"Nominativ maskulin sau “mein” (ein-Wort): tính từ thêm -er."},
  {q:"Ich kenne meinen neu___ (neu) Kollegen gut.",hint:"neu + đuôi",accept:["neuen"],level:"A2",expl:"Akkusativ maskulin sau “meinen”: tính từ -en."},
  {q:"Dein groß___ (groß) Haus ist wunderschön.",hint:"groß + đuôi",accept:["großes"],level:"A2",expl:"Nominativ neutral sau “dein” (ein-Wort): tính từ thêm -es."},
  {q:"Unser klein___ (klein) Garten ist gemütlich.",hint:"klein + đuôi",accept:["kleiner"],level:"A2",expl:"Nominativ maskulin sau “unser” (ein-Wort): tính từ thêm -er."},
 ],
 "de-adj-stark": [
  {q:"Ich trinke gern heiß___ (heiß) Tee.",hint:"heiß + đuôi",accept:["heißen"],level:"B1",expl:"Không có mạo từ, Akkusativ maskulin: tính từ mang đuôi -en (giống “den”)."},
  {q:"Gut___ (gut) Kaffee riecht wunderbar.",hint:"gut + đuôi",accept:["Guter"],level:"B1",expl:"Không có mạo từ, Nominativ maskulin: tính từ mang đuôi -er (giống “der”)."},
  {q:"Viele jung___ (jung) Leute lernen heute Deutsch.",hint:"jung + đuôi",accept:["junge"],level:"B1",expl:"Sau “viele”, Nominativ số nhiều: tính từ -e (giống “die”)."},
  {q:"Mit frisch___ (frisch) Brot schmeckt das Frühstück besser.",hint:"frisch + đuôi",accept:["frischem"],level:"B1",expl:"Không có mạo từ, Dativ neutral: tính từ mang đuôi -em (giống “dem”)."},
  {q:"Kalt___ (kalt) Wasser ist erfrischend.",hint:"kalt + đuôi",accept:["Kaltes"],level:"B1",expl:"Không có mạo từ, Nominativ neutral: tính từ -es (giống “das”)."},
  {q:"Ich trinke kalt___ (kalt) Wasser.",hint:"kalt + đuôi",accept:["kaltes"],level:"B1",expl:"Không có mạo từ, Akkusativ neutral: tính từ -es."},
  {q:"Frisch___ (frisch) Milch schmeckt besser.",hint:"frisch + đuôi",accept:["Frische"],level:"B1",expl:"Không có mạo từ, Nominativ feminin: tính từ -e (giống “die”)."},
  {q:"Ich kaufe frisch___ (frisch) Milch.",hint:"frisch + đuôi",accept:["frische"],level:"B1",expl:"Không có mạo từ, Akkusativ feminin: tính từ -e."},
  {q:"Mit heiß___ (heiß) Tee wird mir warm.",hint:"heiß + đuôi",accept:["heißem"],level:"B1",expl:"Không có mạo từ, Dativ maskulin: tính từ -em (giống “dem”)."},
  {q:"Mit frisch___ (frisch) Milch schmeckt der Kaffee besser.",hint:"frisch + đuôi",accept:["frischer"],level:"B1",expl:"Không có mạo từ, Dativ feminin: tính từ -er (giống “der”)."},
  {q:"Viele jung___ (jung) Leute reisen gern.",hint:"jung + đuôi",accept:["junge"],level:"B1",expl:"Nominativ số nhiều: tính từ -e."},
  {q:"Ich mag jung___ (jung) Leute.",hint:"jung + đuôi",accept:["junge"],level:"B1",expl:"Akkusativ số nhiều: tính từ -e."},
  {q:"Mit jung___ (jung) Leuten macht die Arbeit Spaß.",hint:"jung + đuôi",accept:["jungen"],level:"B1",expl:"Dativ số nhiều: tính từ -en (giống “den”)."},
  {q:"Gut___ (gut) Kaffee und stark___ (stark) Tee sind beide beliebt.",hint:"stark + đuôi",accept:["starker"],level:"B1",expl:"Không có mạo từ, Nominativ maskulin: tính từ -er."},
  {q:"Ich trinke stark___ (stark) Kaffee.",hint:"stark + đuôi",accept:["starken"],level:"B1",expl:"Không có mạo từ, Akkusativ maskulin: tính từ -en."},
  {q:"Einige neu___ (neu) Produkte sind schon da.",hint:"neu + đuôi",accept:["neue"],level:"B2",expl:"Sau “einige”, Nominativ số nhiều: tính từ -e."},
  {q:"Wir testen einige neu___ (neu) Produkte.",hint:"neu + đuôi",accept:["neue"],level:"B2",expl:"Sau “einige”, Akkusativ số nhiều: tính từ -e."},
  {q:"Trotz stark___ (stark) Regens blieben wir draußen.",hint:"stark + đuôi",accept:["starken"],level:"B2",expl:"Không có mạo từ, Genitiv maskulin: tính từ -en (ngoại lệ, giống Dativ)."},
  {q:"Wegen schlecht___ (schlecht) Wetters bleiben wir zu Hause.",hint:"schlecht + đuôi",accept:["schlechten"],level:"B2",expl:"Không có mạo từ, Genitiv neutral: tính từ -en."},
  {q:"Der Duft frisch___ (frisch) Brotes ist herrlich.",hint:"frisch + đuôi",accept:["frischen"],level:"B2",expl:"Không có mạo từ, Genitiv neutral: tính từ -en."},
 ],
};

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Câu ngữ cảnh, gõ đúng tính từ + đuôi"},
};
const POOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => POOL.push({
 type:"fill",kind:"input",retry:true,
 prompt:fmt(it.q.replace(/ \(.+?\)/,"")),
 hint:`Gợi ý: <b>${esc(it.hint)}</b>. Gõ cả tính từ kèm đuôi đúng.`,
 accept:it.accept,plain:it.accept[0],ref,level:it.level,expl:it.expl,
})));

const RUSH=[
 ["der/die/das + tính từ",["de-adj-schwach"]],["Nom. → -e (schwach)",["de-adj-schwach"]],
 ["ein/eine/kein + tính từ",["de-adj-gemischt"]],["Nom. mask. → -er (gemischt)",["de-adj-gemischt"]],
 ["không có mạo từ + tính từ",["de-adj-stark"]],["viele/einige + tính từ",["de-adj-stark"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["adjektive"] = { pool: POOL, types: TYPES, game: {title:"Welche Deklination?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng kiểu chia tính từ",prompt:"Dấu hiệu này thuộc kiểu chia nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"adjRushBest"} };
})();
