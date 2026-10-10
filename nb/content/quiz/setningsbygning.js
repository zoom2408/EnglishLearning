/* nb/content/quiz/setningsbygning.js: practice questions for
   Setningsbygning. Single exercise type: build the correctly ordered
   clause (verb position / ikke placement). Wrong answers can be
   retried (retry:true). */
(() => {
const BANK = {
 "nb-satz-v2": [
  {q:"I dag ___ (jeg / reise) til Oslo.",hint:"jeg / reise",accept:["reiser jeg"],level:"A2",expl:"“I dag” chiếm vị trí 1 nên động từ ở vị trí 2, chủ ngữ đẩy xuống sau: reiser jeg."},
  {q:"I morgen ___ (vi / besøke) besteforeldrene våre.",hint:"vi / besøke",accept:["besøker vi"],level:"A2",expl:"Trạng từ thời gian ở vị trí 1, động từ vẫn vị trí 2."},
  {q:"Denne boka ___ (jeg / lese) i fjor.",hint:"jeg / lese",accept:["leste jeg"],level:"B1",expl:"Tân ngữ ở vị trí 1 để nhấn mạnh, động từ vẫn vị trí 2."},
  {q:"Nå ___ (jeg / forstå) problemet.",hint:"jeg / forstå",accept:["forstår jeg"],level:"A2",expl:"Trạng từ “nå” ở vị trí 1, động từ vị trí 2."},
  {q:"Her ___ (vi / bo) nå.",hint:"vi / bo",accept:["bor vi"],level:"A2",expl:"Trạng từ nơi chốn ở vị trí 1, động từ vị trí 2."},
  {q:"Senere ___ (hun / komme) tilbake.",hint:"hun / komme",accept:["kommer hun"],level:"A2",expl:"Trạng từ thời gian ở vị trí 1, động từ vị trí 2."},
  {q:"Denne filmen ___ (vi / like) veldig godt.",hint:"vi / like",accept:["liker vi"],level:"B1",expl:"Tân ngữ ở vị trí 1 để nhấn mạnh, động từ vẫn vị trí 2."},
  {q:"I dag ___ (de / ha) et møte.",hint:"de / ha",accept:["har de"],level:"A2",expl:"Trạng từ thời gian ở vị trí 1, động từ vị trí 2."},
  {q:"Dette brevet ___ (jeg / skrive) i går.",hint:"jeg / skrive",accept:["skrev jeg"],level:"B1",expl:"Tân ngữ ở vị trí 1, động từ vẫn vị trí 2."},
  {q:"Om sommeren ___ (vi / reise) ofte til sjøen.",hint:"vi / reise",accept:["reiser vi"],level:"B1",expl:"Trạng từ thời gian ở vị trí 1, động từ vị trí 2."},
  {q:"Kanskje ___ (han / ha) rett.",hint:"han / ha",accept:["har han"],level:"B1",expl:"Trạng từ “kanskje” ở vị trí 1, động từ vị trí 2."},
  {q:"Denne boken ___ (jeg / lese) i fjor.",hint:"jeg / lese",accept:["leste jeg"],level:"B1",expl:"Tân ngữ ở vị trí 1, động từ vẫn vị trí 2."},
 ],
 "nb-satz-biff": [
  {q:"Hun flyttet fordi leiligheten ___ (ikke / være) stor nok.",hint:"ikke / være",accept:["ikke var"],level:"B1",expl:"Leddsetning (fordi): ikke đứng trước động từ (var) theo BIFF."},
  {q:"Hun sa at hun ___ (ikke / ha) tid i dag.",hint:"ikke / ha",accept:["ikke hadde"],level:"B1",expl:"Leddsetning (at): ikke đứng trước động từ."},
  {q:"Vi går ut, selv om det ___ (ikke / være) varmt.",hint:"ikke / være",accept:["ikke er"],level:"B1",expl:"Leddsetning (selv om): ikke đứng trước động từ."},
  {q:"Jeg tror at han ___ (ikke / forstå) spørsmålet.",hint:"ikke / forstå",accept:["ikke forstår"],level:"B1",expl:"Leddsetning (at): ikke trước động từ (forstår)."},
  {q:"Jeg tror at hun ___ (ikke / komme) i dag.",hint:"ikke / komme",accept:["ikke kommer"],level:"B1",expl:"Leddsetning (at): ikke đứng trước động từ."},
  {q:"Han spurte om jeg ___ (ikke / ha) tid.",hint:"ikke / ha",accept:["ikke hadde"],level:"B1",expl:"Leddsetning (om): ikke đứng trước động từ."},
  {q:"Vi vet at de ___ (ikke / bo) her lenger.",hint:"ikke / bo",accept:["ikke bor"],level:"B1",expl:"Leddsetning (at): ikke trước động từ (bor)."},
  {q:"Hun sa at hun ___ (ikke / like) filmen.",hint:"ikke / like",accept:["ikke likte"],level:"B1",expl:"Leddsetning (at): ikke trước động từ (likte)."},
  {q:"Jeg lurer på om han ___ (ikke / forstå) spørsmålet.",hint:"ikke / forstå",accept:["ikke forstår"],level:"B1",expl:"Leddsetning (om): ikke trước động từ."},
  {q:"Læreren mener at vi ___ (ikke / øve) nok.",hint:"ikke / øve",accept:["ikke øver"],level:"B1",expl:"Leddsetning (at): ikke trước động từ."},
  {q:"Han sa at han ___ (ikke / kunne) komme.",hint:"ikke / kunne",accept:["ikke kunne"],level:"B1",expl:"Leddsetning (at): ikke trước động từ khuyết thiếu."},
  {q:"Jeg håper at det ___ (ikke / bli) regn i morgen.",hint:"ikke / bli",accept:["ikke blir"],level:"B1",expl:"Leddsetning (at): ikke trước động từ (blir)."},
 ],
 "nb-satz-fordifor": [
  {q:"Jeg blir hjemme fordi jeg ___ (ikke / være) frisk.",hint:"ikke / være",accept:["ikke er"],level:"B1",expl:"Sau fordi (leddsetning): ikke đứng trước động từ (var) theo BIFF."},
  {q:"Jeg blir hjemme, for jeg ___ (være / ikke) frisk.",hint:"være / ikke",accept:["er ikke"],level:"B1",expl:"Sau for (hovedsetning): ikke đứng sau động từ như bình thường."},
  {q:"Hun kom for sent fordi hun ___ (ikke / høre) vekkerklokka.",hint:"ikke / høre",accept:["ikke hørte"],level:"B1",expl:"fordi tạo leddsetning: ikke trước động từ (hørte)."},
  {q:"Hun ble hjemme fordi hun ___ (ikke / være) frisk.",hint:"ikke / være",accept:["ikke var"],level:"B1",expl:"Leddsetning (fordi): ikke trước động từ."},
  {q:"Jeg kom sent, for bussen ___ (være / ikke) i tide.",hint:"være / ikke",accept:["var ikke"],level:"B1",expl:"Sau for (hovedsetning): ikke đứng sau động từ."},
  {q:"Vi avlyste turen fordi det ___ (ikke / være) godt vær.",hint:"ikke / være",accept:["ikke var"],level:"B1",expl:"Leddsetning (fordi): ikke trước động từ."},
  {q:"Han sov lenge, for han ___ (være / trøtt).",hint:"være / trøtt",accept:["var trøtt"],level:"B1",expl:"Sau for (hovedsetning): trật tự từ bình thường, không đảo."},
  {q:"Hun kjøpte boken fordi hun ___ (ville / lese) den.",hint:"ville / lese",accept:["ville lese"],level:"B1",expl:"Leddsetning (fordi): trật tự chủ ngữ + động từ bình thường khi không có ikke."},
  {q:"Vi ble hjemme fordi vi ___ (ikke / ha) bil.",hint:"ikke / ha",accept:["ikke hadde"],level:"B1",expl:"Leddsetning (fordi): ikke trước động từ."},
  {q:"Jeg spiste ikke, for jeg ___ (være / ikke) sulten.",hint:"være / ikke",accept:["var ikke"],level:"B1",expl:"Sau for (hovedsetning): ikke đứng sau động từ."},
  {q:"Han ringte, for han ___ (ville / ikke / vente).",hint:"ville / ikke / vente",accept:["ville ikke vente"],level:"B1",expl:"Sau for (hovedsetning): ikke đứng sau trợ động từ (ville) như bình thường, không đảo."},
  {q:"Vi gikk tidlig fordi bussen ___ (ikke / komme).",hint:"ikke / komme",accept:["ikke kom"],level:"B1",expl:"Leddsetning (fordi): ikke trước động từ."},
 ],
 "nb-satz-at": [
  {q:"Jeg vet at han ___ (komme) i morgen.",hint:"komme",accept:["kommer"],level:"A2",expl:"Mệnh đề at: động từ chia bình thường (chỉ ikke mới di chuyển nếu có)."},
  {q:"Hun sier at hun ___ (være) trøtt.",hint:"være",accept:["er"],level:"A2",expl:"Mệnh đề at: động từ (er) theo sau chủ ngữ bình thường."},
  {q:"Jeg håper at du ___ (ikke / bli) sint.",hint:"ikke / bli",accept:["ikke blir"],level:"B1",expl:"Leddsetning (at): ikke trước động từ (blir)."},
  {q:"Jeg tror at hun ___ (være) norsk.",hint:"være",accept:["er"],level:"A2",expl:"Mệnh đề at: động từ chia bình thường."},
  {q:"Han vet at jeg ___ (bo) i Bergen.",hint:"bo",accept:["bor"],level:"A2",expl:"Mệnh đề at: động từ chia bình thường."},
  {q:"Vi hører at det ___ (regne) ute.",hint:"regne",accept:["regner"],level:"A2",expl:"Mệnh đề at: động từ chia bình thường."},
  {q:"Hun sier at hun ___ (ikke / ha) tid.",hint:"ikke / ha",accept:["ikke har"],level:"B1",expl:"Leddsetning (at): ikke trước động từ."},
  {q:"Jeg synes at maten ___ (smake) godt.",hint:"smake",accept:["smaker"],level:"A2",expl:"Mệnh đề at: động từ chia bình thường."},
  {q:"Han mener at vi ___ (burde / gå) nå.",hint:"burde / gå",accept:["burde gå"],level:"B1",expl:"Mệnh đề at: động từ khuyết thiếu + nguyên thể."},
  {q:"Vi tror at de ___ (komme) i morgen.",hint:"komme",accept:["kommer"],level:"A2",expl:"Mệnh đề at: động từ chia bình thường."},
  {q:"Hun forteller at hun ___ (studere) medisin.",hint:"studere",accept:["studerer"],level:"A2",expl:"Mệnh đề at: động từ chia bình thường."},
  {q:"Jeg vet at det ___ (ikke / bli) lett.",hint:"ikke / bli",accept:["ikke blir"],level:"B1",expl:"Leddsetning (at): ikke trước động từ."},
 ],
 "nb-satz-selvom": [
  {q:"Selv om det ___ (ikke / være) varmt, går vi en tur.",hint:"ikke / være",accept:["ikke er"],level:"B1",expl:"Leddsetning (selv om) đứng trước: ikke trước động từ (er)."},
  {q:"Han kjøpte bilen selv om han ___ (ikke / ha) nok penger.",hint:"ikke / ha",accept:["ikke hadde"],level:"B1",expl:"Leddsetning (selv om): ikke trước động từ (hadde)."},
  {q:"Selv om han ___ (være / trøtt), jobbet han videre.",hint:"være / trøtt",accept:["var trøtt"],level:"B1",expl:"Leddsetning (selv om) không có ikke: trật tự từ bình thường."},
  {q:"Vi gikk ut selv om det ___ (regne).",hint:"regne",accept:["regnet"],level:"B1",expl:"Leddsetning (selv om): động từ chia thường, không đảo."},
  {q:"Selv om hun ___ (ikke / ha) mye penger, reiste hun mye.",hint:"ikke / ha",accept:["ikke hadde"],level:"B1",expl:"Leddsetning (selv om): ikke trước động từ."},
  {q:"Han smilte selv om han ___ (være / lei seg).",hint:"være / lei seg",accept:["var lei seg"],level:"B1",expl:"Leddsetning (selv om) không có ikke: trật tự từ bình thường."},
  {q:"Vi fortsatte selv om vi ___ (være / trøtte).",hint:"være / trøtte",accept:["var trøtte"],level:"B1",expl:"Leddsetning (selv om): trật tự từ bình thường."},
  {q:"Selv om det ___ (være / sent), ringte hun likevel.",hint:"være / sent",accept:["var sent"],level:"B1",expl:"Leddsetning (selv om): trật tự từ bình thường."},
  {q:"Hun kjøpte huset selv om det ___ (være / dyrt).",hint:"være / dyrt",accept:["var dyrt"],level:"B1",expl:"Leddsetning (selv om): trật tự từ bình thường."},
  {q:"Vi spiste ute selv om det ___ (være / kaldt).",hint:"være / kaldt",accept:["var kaldt"],level:"B1",expl:"Leddsetning (selv om): trật tự từ bình thường."},
  {q:"Selv om han ___ (ikke / forstå) alt, nikket han.",hint:"ikke / forstå",accept:["ikke forsto"],level:"B1",expl:"Leddsetning (selv om): ikke trước động từ (forsto)."},
  {q:"Hun ble med selv om hun ___ (ikke / ville).",hint:"ikke / ville",accept:["ikke ville"],level:"B1",expl:"Leddsetning (selv om): ikke trước động từ khuyết thiếu."},
 ],
};

const TYPES={
 fill:{name:"Fyll inn",desc:"Câu ngữ cảnh, sắp đúng trật tự từ và vị trí ikke"},
};
const POOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => POOL.push({
 type:"fill",kind:"input",retry:true,
 prompt:fmt(it.q.replace(/ \(.+?\)/,"")),
 hint:`Gợi ý: <b>${esc(it.hint)}</b>. Sắp đúng trật tự từ.`,
 accept:it.accept,plain:it.accept[0],ref,level:it.level,expl:it.expl,
})));

const RUSH=[
 ["Trạng từ/tân ngữ + V + S…",["nb-satz-v2"]],
 ["fordi/at/selv om + S + ikke + V",["nb-satz-biff"]],
 ["fordi (leddsetning)",["nb-satz-fordifor"]],["for (hovedsetning)",["nb-satz-fordifor"]],
 ["at (mệnh đề danh từ)",["nb-satz-at"]],
 ["selv om (tương phản)",["nb-satz-selvom"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["setningsbygning"] = { pool: POOL, types: TYPES, game: {title:"Hvilken regel?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng quy tắc trật tự từ",prompt:"Dấu hiệu này theo quy tắc nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"satzRushBest"} };
})();
