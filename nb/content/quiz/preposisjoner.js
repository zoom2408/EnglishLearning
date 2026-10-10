/* nb/content/quiz/preposisjoner.js: practice questions for
   Preposisjoner. Single exercise type: context sentences, type the
   correct preposition. Wrong answers can be retried (retry:true). */
(() => {
const BANK = {
 "nb-prep-tid": [
  {q:"Jeg bodde i Bergen ___ (i) fem år.",hint:"i",accept:["i"],level:"A1",expl:"Khoảng thời gian kéo dài: i."},
  {q:"Vi møtes ___ (om) en time.",hint:"om",accept:["om"],level:"A1",expl:"Thời điểm trong tương lai gần: om."},
  {q:"Jeg flyttet hit ___ (for) tre år siden.",hint:"for",accept:["for"],level:"A2",expl:"Mốc quá khứ cách đây: for … siden."},
  {q:"Jeg har møte ___ (på) mandag.",hint:"på",accept:["på"],level:"A1",expl:"Thứ trong tuần cụ thể: på."},
  {q:"Vi møttes ___ (for) ti år siden.",hint:"for",accept:["for"],level:"A2",expl:"Mốc quá khứ cách đây: for … siden."},
  {q:"Jeg skal bli her ___ (til) fredag.",hint:"til",accept:["til"],level:"A1",expl:"Đến một thời điểm: til."},
  {q:"Butikken er åpen ___ (fra) ni til fem.",hint:"fra",accept:["fra"],level:"A1",expl:"Từ một thời điểm: fra."},
  {q:"Vi må levere oppgaven ___ (innen) mandag.",hint:"innen",accept:["innen"],level:"A2",expl:"Hạn trước một thời điểm: innen."},
  {q:"Jeg ringer deg ___ (etter) middag.",hint:"etter",accept:["etter"],level:"A1",expl:"Sau một thời điểm: etter."},
  {q:"Vi skal spise ___ (før) klokken sju.",hint:"før",accept:["før"],level:"A1",expl:"Trước một thời điểm: før."},
  {q:"Hun kommer ___ (ved) midnatt.",hint:"ved",accept:["ved"],level:"A2",expl:"Thời điểm khoảng chừng: ved."},
  {q:"Jeg har ferie ___ (i) to uker.",hint:"i",accept:["i"],level:"A1",expl:"Khoảng thời gian kéo dài: i."},
  {q:"Vi sees ___ (om) to dager.",hint:"om",accept:["om"],level:"A1",expl:"Thời điểm trong tương lai: om."},
  {q:"Konserten er ___ (på) lørdag.",hint:"på",accept:["på"],level:"A1",expl:"Thứ trong tuần cụ thể: på."},
  {q:"Jeg jobbet der ___ (i) ti år.",hint:"i",accept:["i"],level:"A1",expl:"Khoảng thời gian kéo dài: i."},
 ],
 "nb-prep-sted-i": [
  {q:"Jeg bor ___ (i) Oslo.",hint:"i",accept:["i"],level:"A1",expl:"Trong thành phố: i."},
  {q:"Jeg er ___ (på) skolen nå.",hint:"på",accept:["på"],level:"A1",expl:"Địa điểm công cộng: på."},
  {q:"Boka ligger ___ (på) bordet.",hint:"på",accept:["på"],level:"A1",expl:"Bề mặt: på."},
  {q:"Jeg spiser middag ___ (hos) en venn i kveld.",hint:"hos",accept:["hos"],level:"A2",expl:"Ở nhà/chỗ của ai: hos."},
  {q:"Boken ligger ___ (i) skuffen.",hint:"i",accept:["i"],level:"A1",expl:"Trong hộp/ngăn kéo: i."},
  {q:"Vi er ___ (i) Norge nå.",hint:"i",accept:["i"],level:"A1",expl:"Trong quốc gia: i."},
  {q:"Han er ___ (på) kontoret.",hint:"på",accept:["på"],level:"A1",expl:"Địa điểm công cộng/nơi làm việc: på."},
  {q:"Nøklene er ___ (i) lommen min.",hint:"i",accept:["i"],level:"A1",expl:"Trong túi: i."},
  {q:"Jeg er ___ (hos) mine foreldre i dag.",hint:"hos",accept:["hos"],level:"A2",expl:"Ở nhà/chỗ của ai: hos."},
  {q:"Maten står ___ (på) kjøkkenbordet.",hint:"på",accept:["på"],level:"A1",expl:"Trên bề mặt: på."},
  {q:"Hun bor ___ (i) en liten by.",hint:"i",accept:["i"],level:"A1",expl:"Trong thành phố/thị trấn: i."},
  {q:"Vi er ___ (på) kino akkurat nå.",hint:"på",accept:["på"],level:"A2",expl:"Địa điểm công cộng (rạp chiếu phim): på."},
  {q:"Katten sitter ___ (i) vinduet.",hint:"i",accept:["i"],level:"A1",expl:"Trong/ở khung cửa sổ: i."},
  {q:"Jeg spiser lunsj ___ (hos) en kollega i dag.",hint:"hos",accept:["hos"],level:"A2",expl:"Ở chỗ của ai: hos."},
  {q:"Boka ligger ___ (på) nattbordet.",hint:"på",accept:["på"],level:"A1",expl:"Trên bề mặt: på."},
 ],
 "nb-prep-sted-retning": [
  {q:"Jeg reiser ___ (til) Bergen neste uke.",hint:"til",accept:["til"],level:"A1",expl:"Đích đến: til."},
  {q:"Hun kommer ___ (fra) Vietnam.",hint:"fra",accept:["fra"],level:"A1",expl:"Xuất xứ: fra."},
  {q:"Vi går ___ (mot) sentrum.",hint:"mot",accept:["mot"],level:"A2",expl:"Về phía: mot."},
  {q:"Vi kjører ___ (gjennom) tunnelen.",hint:"gjennom",accept:["gjennom"],level:"A2",expl:"Xuyên qua: gjennom."},
  {q:"Han gikk ___ (inn i) butikken.",hint:"inn i",accept:["inn i"],level:"A2",expl:"Vào trong: inn i."},
  {q:"De kom ___ (ut av) huset.",hint:"ut av",accept:["ut av"],level:"A2",expl:"Ra khỏi: ut av."},
  {q:"Fuglen flyr ___ (over) fjellet.",hint:"over",accept:["over"],level:"A2",expl:"Qua phía trên: over."},
  {q:"Vi går ___ (langs) stranden.",hint:"langs",accept:["langs"],level:"A2",expl:"Dọc theo: langs."},
  {q:"Bilen kjører ___ (forbi) skolen.",hint:"forbi",accept:["forbi"],level:"A2",expl:"Đi qua/vượt qua: forbi."},
  {q:"Hun reiser ___ (til) Bergen i morgen.",hint:"til",accept:["til"],level:"A1",expl:"Đích đến: til."},
  {q:"Han kommer ___ (fra) Tyskland.",hint:"fra",accept:["fra"],level:"A1",expl:"Xuất xứ: fra."},
  {q:"Vi går ___ (mot) stasjonen.",hint:"mot",accept:["mot"],level:"A2",expl:"Về phía: mot."},
  {q:"Toget kjører ___ (gjennom) byen uten å stoppe.",hint:"gjennom",accept:["gjennom"],level:"B1",expl:"Xuyên qua: gjennom."},
  {q:"De hoppet ___ (over) gjerdet.",hint:"over",accept:["over"],level:"A2",expl:"Qua phía trên/qua: over."},
  {q:"Hun gikk ___ (ut av) rommet uten å si noe.",hint:"ut av",accept:["ut av"],level:"B1",expl:"Ra khỏi: ut av."},
 ],
 "nb-prep-andre": [
  {q:"Jeg kommer ___ (med) bussen.",hint:"med",accept:["med"],level:"A1",expl:"Phương tiện di chuyển: med."},
  {q:"Dette brevet er ___ (for) deg.",hint:"for",accept:["for"],level:"A1",expl:"Dành cho ai: for."},
  {q:"Jeg drikker kaffe ___ (uten) melk.",hint:"uten",accept:["uten"],level:"A1",expl:"Không có: uten."},
  {q:"Vi snakker ___ (om) været.",hint:"om",accept:["om"],level:"A1",expl:"Chủ đề nói đến: om."},
  {q:"Denne gaven er ___ (til) deg.",hint:"til",accept:["til"],level:"A1",expl:"Dành cho ai (quà tặng): til."},
  {q:"Jeg er stolt ___ (av) deg.",hint:"av",accept:["av"],level:"A2",expl:"Tự hào về: stolt av."},
  {q:"Vi er interessert ___ (i) norsk kultur.",hint:"i",accept:["i"],level:"A2",expl:"“interessert i”: i."},
  {q:"Hun er gift ___ (med) en nordmann.",hint:"med",accept:["med"],level:"A2",expl:"Kết hôn với: gift med."},
  {q:"Jeg venter ___ (på) bussen.",hint:"på",accept:["på"],level:"A1",expl:"Chờ: vente på."},
  {q:"Han skrev en bok ___ (om) Norge.",hint:"om",accept:["om"],level:"A1",expl:"Viết về chủ đề: om."},
  {q:"Dette brevet er ___ (fra) bestemor.",hint:"fra",accept:["fra"],level:"A1",expl:"Từ ai gửi: fra."},
  {q:"Jeg er glad ___ (i) deg.",hint:"i",accept:["i"],level:"A2",expl:"“glad i” = yêu thích/yêu quý: i."},
  {q:"Vi er avhengige ___ (av) hverandre.",hint:"av",accept:["av"],level:"B1",expl:"Phụ thuộc vào: avhengig av."},
  {q:"Hun er flink ___ (til) å synge.",hint:"til",accept:["til"],level:"A2",expl:"Giỏi về việc gì: flink til å."},
  {q:"Jeg drikker te ___ (uten) sukker.",hint:"uten",accept:["uten"],level:"A1",expl:"Không có: uten."},
 ],
};

const TYPES={
 fill:{name:"Fyll inn",desc:"Câu ngữ cảnh, gõ đúng giới từ"},
};
const POOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => POOL.push({
 type:"fill",kind:"input",retry:true,
 prompt:fmt(it.q.replace(/ \(.+?\)/,"")),
 hint:`Gợi ý: <b>${esc(it.hint)}</b>. Gõ đúng giới từ.`,
 accept:it.accept,plain:it.accept[0],ref,level:it.level,expl:it.expl,
})));

const RUSH=[
 ["i (khoảng thời gian)",["nb-prep-tid"]],["om (tương lai gần)",["nb-prep-tid"]],["for … siden",["nb-prep-tid"]],
 ["i (vị trí trong)",["nb-prep-sted-i"]],["på (bề mặt/công cộng)",["nb-prep-sted-i"]],["hos (chỗ ai)",["nb-prep-sted-i"]],
 ["til (đến)",["nb-prep-sted-retning"]],["fra (từ)",["nb-prep-sted-retning"]],
 ["med (phương tiện)",["nb-prep-andre"]],["om (chủ đề)",["nb-prep-andre"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["preposisjoner"] = { pool: POOL, types: TYPES, game: {title:"Hvilken preposisjon?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng giới từ",prompt:"Dấu hiệu này thuộc nhóm nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"prepRushBest"} };
})();
