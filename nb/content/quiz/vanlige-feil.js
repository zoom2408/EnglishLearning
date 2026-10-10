/* nb/content/quiz/vanlige-feil.js: practice questions for Vanlige
   feil. Single exercise type: pick/produce the correct form in a
   classic confusion pair. Wrong answers can be retried (retry:true). */
(() => {
const BANK = {
 "nb-feil-biff": [
  {q:"Jeg vet at han ___ (ikke / komme) i dag.",hint:"ikke / komme",accept:["ikke kommer"],level:"B1",expl:"Leddsetning (at): ikke đứng trước động từ."},
  {q:"Hun sa at hun ___ (ikke / ha) tid.",hint:"ikke / ha",accept:["ikke hadde"],level:"B1",expl:"Leddsetning: ikke trước động từ (hadde)."},
  {q:"Vi gikk ut selv om det ___ (ikke / være) varmt.",hint:"ikke / være",accept:["ikke var"],level:"B1",expl:"Leddsetning (selv om): ikke trước động từ."},
  {q:"Jeg tror at han ___ (ikke / like) meg.",hint:"ikke / like",accept:["ikke liker"],level:"B1",expl:"Leddsetning (at): ikke trước động từ."},
  {q:"Hun sier at hun ___ (ikke / ha) bil.",hint:"ikke / ha",accept:["ikke har"],level:"B1",expl:"Leddsetning (at): ikke trước động từ."},
  {q:"Vi vet at de ___ (ikke / bo) her.",hint:"ikke / bo",accept:["ikke bor"],level:"B1",expl:"Leddsetning (at): ikke trước động từ."},
  {q:"Han spurte om jeg ___ (ikke / kunne) hjelpe.",hint:"ikke / kunne",accept:["ikke kunne"],level:"B1",expl:"Leddsetning (om): ikke trước động từ khuyết thiếu."},
  {q:"Jeg synes at filmen ___ (ikke / være) bra.",hint:"ikke / være",accept:["ikke var"],level:"B1",expl:"Leddsetning (at): ikke trước động từ."},
  {q:"Hun fortalte at hun ___ (ikke / forstå) oppgaven.",hint:"ikke / forstå",accept:["ikke forsto"],level:"B1",expl:"Leddsetning (at): ikke trước động từ (forsto)."},
  {q:"Vi håper at det ___ (ikke / bli) regn.",hint:"ikke / bli",accept:["ikke blir"],level:"B1",expl:"Leddsetning (at): ikke trước động từ (blir)."},
  {q:"Han mener at vi ___ (ikke / øve) nok.",hint:"ikke / øve",accept:["ikke øver"],level:"B1",expl:"Leddsetning (at): ikke trước động từ (øver)."},
  {q:"Jeg vet at hun ___ (ikke / like) kaffe.",hint:"ikke / like",accept:["ikke liker"],level:"B1",expl:"Leddsetning (at): ikke trước động từ (liker)."},
 ],
 "nb-feil-sifortelle": [
  {q:"Kan du ___ (fortelle) meg om Norge?",hint:"fortelle",accept:["fortelle"],level:"A2",expl:"Kể cho ai nghe về điều gì: fortelle."},
  {q:"Hun ___ (si) at hun var syk.",hint:"si",accept:["sa"],level:"A2",expl:"Trích dẫn lời nói: si (quá khứ: sa)."},
  {q:"Vi ___ (snakke) om filmen i en time.",hint:"snakke",accept:["snakket"],level:"A2",expl:"Trò chuyện qua lại (om/med): snakke."},
  {q:"Kan du ___ (fortelle) meg en historie?",hint:"fortelle",accept:["fortelle"],level:"A2",expl:"Kể cho ai nghe về điều gì: fortelle."},
  {q:"Hun ___ (si) godmorgen til alle i morges.",hint:"si",accept:["sa"],level:"A1",expl:"Trích dẫn lời nói ngắn: si (quá khứ: sa)."},
  {q:"Han ___ (fortelle) oss om reisen sin.",hint:"fortelle",accept:["fortalte"],level:"A2",expl:"Kể cho ai nghe về điều gì: fortelle (quá khứ: fortalte)."},
  {q:"Kan du ___ (si) navnet ditt igjen?",hint:"si",accept:["si"],level:"A1",expl:"Trích dẫn/phát ra lời ngắn: si."},
  {q:"De ___ (snakke) lenge om fremtiden.",hint:"snakke",accept:["snakket"],level:"A2",expl:"Trò chuyện qua lại (om): snakke."},
  {q:"Hun ___ (fortelle) en vits på festen.",hint:"fortelle",accept:["fortalte"],level:"A2",expl:"Kể cho ai nghe về điều gì: fortelle (quá khứ: fortalte)."},
  {q:"Jeg ___ (si) ja til invitasjonen.",hint:"si",accept:["sa"],level:"A2",expl:"Trích dẫn lời nói: si (quá khứ: sa)."},
  {q:"Vi ___ (snakke) sammen hver dag.",hint:"snakke",accept:["snakker"],level:"A1",expl:"Trò chuyện qua lại: snakke."},
  {q:"Han ___ (fortelle) meg om turen sin i detalj.",hint:"fortelle",accept:["fortalte"],level:"B1",expl:"Kể cho ai nghe về điều gì: fortelle (quá khứ: fortalte)."},
 ],
 "nb-feil-ipaa": [
  {q:"Jeg bor ___ (i) Bergen.",hint:"i",accept:["i"],level:"A1",expl:"Thành phố: i."},
  {q:"Jeg er ___ (på) jobb nå.",hint:"på",accept:["på"],level:"A1",expl:"Địa điểm công cộng (nơi làm việc nói chung): på."},
  {q:"Hun studerer ___ (på) universitetet.",hint:"på",accept:["på"],level:"A2",expl:"Trường đại học: på (địa điểm công cộng)."},
  {q:"Jeg bor ___ (i) Trondheim.",hint:"i",accept:["i"],level:"A1",expl:"Thành phố: i."},
  {q:"Han er ___ (på) biblioteket nå.",hint:"på",accept:["på"],level:"A1",expl:"Địa điểm công cộng: på."},
  {q:"Vi er ___ (i) Norge for første gang.",hint:"i",accept:["i"],level:"A1",expl:"Quốc gia: i."},
  {q:"Hun jobber ___ (på) sykehuset.",hint:"på",accept:["på"],level:"A2",expl:"Địa điểm công cộng (nơi làm việc): på."},
  {q:"De bor ___ (i) en liten landsby.",hint:"i",accept:["i"],level:"A1",expl:"Trong thị trấn/làng: i."},
  {q:"Vi er ___ (i) Spania på ferie.",hint:"i",accept:["i"],level:"A1",expl:"Quốc gia: i."},
  {q:"Jeg møter henne ___ (på) kontoret.",hint:"på",accept:["på"],level:"A1",expl:"Địa điểm công cộng/nơi làm việc: på."},
  {q:"Vi bor ___ (i) en stor by nå.",hint:"i",accept:["i"],level:"A1",expl:"Thành phố: i."},
  {q:"Han studerer ___ (på) NTNU.",hint:"på",accept:["på"],level:"A2",expl:"Trường đại học: på (địa điểm công cộng)."},
 ],
 "nb-feil-forsiden": [
  {q:"Jeg flyttet hit ___ (for) tre år siden.",hint:"for",accept:["for"],level:"A2",expl:"Mốc cách đây: for … siden."},
  {q:"Hun har bodd her ___ (i) fem år.",hint:"i",accept:["i"],level:"A1",expl:"Khoảng thời gian kéo dài: i."},
  {q:"Jeg kom til Norge ___ (for) fem år siden.",hint:"for",accept:["for"],level:"A2",expl:"Mốc cách đây: for … siden."},
  {q:"Vi flyttet hit ___ (for) ett år siden.",hint:"for",accept:["for"],level:"A2",expl:"Mốc cách đây: for … siden."},
  {q:"De har bodd der ___ (i) lang tid.",hint:"i",accept:["i"],level:"A1",expl:"Khoảng thời gian kéo dài: i."},
  {q:"Han begynte på jobben ___ (for) en måned siden.",hint:"for",accept:["for"],level:"A2",expl:"Mốc cách đây: for … siden."},
  {q:"Vi har kjent hverandre ___ (i) mange år.",hint:"i",accept:["i"],level:"A1",expl:"Khoảng thời gian kéo dài: i."},
  {q:"Hun giftet seg ___ (for) to år siden.",hint:"for",accept:["for"],level:"A2",expl:"Mốc cách đây: for … siden."},
  {q:"Jeg har studert norsk ___ (i) seks måneder.",hint:"i",accept:["i"],level:"A1",expl:"Khoảng thời gian kéo dài: i."},
  {q:"De kjøpte huset ___ (for) ti år siden.",hint:"for",accept:["for"],level:"A2",expl:"Mốc cách đây: for … siden."},
  {q:"Vi har bodd i Norge ___ (i) et år nå.",hint:"i",accept:["i"],level:"A1",expl:"Khoảng thời gian kéo dài: i."},
  {q:"Han begynte på skolen ___ (for) to uker siden.",hint:"for",accept:["for"],level:"A2",expl:"Mốc cách đây: for … siden."},
 ],
 "nb-feil-forbokstav": [
  {q:"Jeg leser en ___ (bok) om Norge.",hint:"bok",accept:["bok"],level:"A1",expl:"Danh từ thường giữa câu: viết thường (bok, không phải Bok)."},
  {q:"Vi bor i ___ (oslo), hovedstaden i Norge.",hint:"oslo",accept:["Oslo"],level:"A1",expl:"Tên riêng (thành phố): viết hoa."},
  {q:"Vi reiser til ___ (bergen) i sommer.",hint:"bergen",accept:["Bergen"],level:"A1",expl:"Tên riêng (thành phố): viết hoa."},
  {q:"Han har en ny ___ (bil).",hint:"bil",accept:["bil"],level:"A1",expl:"Danh từ thường giữa câu: viết thường."},
  {q:"Vi besøkte ___ (paris) i fjor.",hint:"paris",accept:["Paris"],level:"A1",expl:"Tên riêng (thành phố): viết hoa."},
  {q:"Jeg kjøpte et ___ (hus) i fjor.",hint:"hus",accept:["hus"],level:"A1",expl:"Danh từ thường giữa câu: viết thường."},
  {q:"___ (anna) er vennen min.",hint:"anna",accept:["Anna"],level:"A1",expl:"Tên riêng (người): viết hoa."},
  {q:"Hun drakk litt ___ (melk) i morges.",hint:"melk",accept:["melk"],level:"A1",expl:"Danh từ thường giữa câu: viết thường."},
  {q:"Vi skal til ___ (london) i helgen.",hint:"london",accept:["London"],level:"A1",expl:"Tên riêng (thành phố): viết hoa."},
  {q:"Jeg har en ___ (venn) som heter Per.",hint:"venn",accept:["venn"],level:"A1",expl:"Danh từ thường giữa câu: viết thường."},
  {q:"Vi kjøpte en ny ___ (sykkel) i går.",hint:"sykkel",accept:["sykkel"],level:"A1",expl:"Danh từ thường giữa câu: viết thường."},
  {q:"___ (maria) bor i Bergen.",hint:"maria",accept:["Maria"],level:"A1",expl:"Tên riêng (người): viết hoa."},
 ],
};

const TYPES={
 fill:{name:"Fyll inn",desc:"Phân biệt các cặp dễ nhầm trong tiếng Na Uy"},
};
const POOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => POOL.push({
 type:"fill",kind:"input",retry:true,
 prompt:fmt(it.q.replace(/ \(.+?\)/,"")),
 hint:`Gợi ý: <b>${esc(it.hint)}</b>. Gõ đúng dạng.`,
 accept:it.accept,plain:it.accept[0],ref,level:it.level,expl:it.expl,
})));

const RUSH=[
 ["ikke trước động từ (leddsetning)",["nb-feil-biff"]],
 ["si (trích dẫn)",["nb-feil-sifortelle"]],["fortelle (kể cho ai)",["nb-feil-sifortelle"]],["snakke (trò chuyện)",["nb-feil-sifortelle"]],
 ["i (quốc gia/thành phố)",["nb-feil-ipaa"]],["på (địa điểm công cộng)",["nb-feil-ipaa"]],
 ["for…siden (cách đây)",["nb-feil-forsiden"]],["i (khoảng kéo dài)",["nb-feil-forsiden"]],
 ["danh từ thường: viết thường",["nb-feil-forbokstav"]],["tên riêng: viết hoa",["nb-feil-forbokstav"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["vanlige-feil"] = { pool: POOL, types: TYPES, game: {title:"Hvilken feil?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng chủ đề lỗi hay gặp",prompt:"Dấu hiệu này thuộc chủ đề nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"feilRushBest"} };
})();
