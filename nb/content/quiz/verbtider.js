/* nb/content/quiz/verbtider.js: practice questions for the Norwegian
   Bokmål tenses module. BANK groups items by tense code
   (ps/prt/pf/pqp/fut) — TN[c] maps each code to its row id (defined
   in content/theory/verbtider.js, loaded first). Single exercise
   type: context sentences, type the correct form of the verb in
   brackets. Wrong answers can be retried (retry:true) instead of
   being revealed immediately. */
(() => {
const BANK = {
 ps: [
  {q:"Hver dag står jeg opp klokken sju. Så ___ (drikke) jeg en kopp kaffe.",hint:"drikke",accept:["drikker"],level:"A1",expl:"Thói quen lặp lại hằng ngày: Presens."},
  {q:"Broren min bor i Bergen nå. Han ___ (jobbe) der som lærer.",hint:"jobbe",accept:["jobber"],level:"A1",expl:"Thực trạng hiện tại: Presens, tất cả các ngôi chia giống nhau (-r)."},
  {q:"Vi har ikke skole i morgen. Da ___ (reise) vi til hytta.",hint:"reise",accept:["reiser"],level:"A2",expl:"Trạng từ thời gian rõ ràng (i morgen) + Presens diễn tả kế hoạch tương lai gần."},
  {q:"Se ut vinduet! Det ___ (regne) igjen.",hint:"regne",accept:["regner"],level:"A1",expl:"Tiếng Na Uy không có thì tiếp diễn riêng: việc đang xảy ra ngay lúc nói vẫn dùng Presens."},
  {q:"Søsteren min ___ (lære) norsk hver kveld.",hint:"lære",accept:["lærer"],level:"A1",expl:"Thói quen lặp lại hằng ngày: Presens."},
  {q:"Hør! Babyen ___ (gråte) igjen.",hint:"gråte",accept:["gråter"],level:"A1",expl:"Việc đang xảy ra ngay lúc nói: Presens."},
  {q:"I helgen ___ (besøke) jeg besteforeldrene mine.",hint:"besøke",accept:["besøker"],level:"A2",expl:"Trạng từ thời gian rõ ràng + Presens diễn tả kế hoạch tương lai gần."},
  {q:"Vanligvis ___ (spise) vi middag klokken sju.",hint:"spise",accept:["spiser"],level:"A1",expl:"Thói quen lặp lại hằng ngày: Presens."},
  {q:"Neste sommer ___ (fly) vi til Spania.",hint:"fly",accept:["flyr"],level:"A2",expl:"Trạng từ thời gian rõ ràng + Presens diễn tả kế hoạch tương lai gần."},
  {q:"Han ___ (lese) akkurat nå en spennende bok.",hint:"lese",accept:["leser"],level:"A1",expl:"Việc đang xảy ra ngay lúc nói (akkurat nå): Presens."},
  {q:"Katten min ___ (sove) nesten hele dagen.",hint:"sove",accept:["sover"],level:"A1",expl:"Thói quen/sự thật chung: Presens."},
  {q:"___ (snakke) du norsk?",hint:"snakke",accept:["Snakker"],level:"A1",expl:"Câu hỏi: động từ lên đầu câu, Presens."},
 ],
 prt: [
  {q:"I går var det en lang dag. Jeg ___ (jobbe) til klokken åtte om kvelden.",hint:"jobbe",accept:["jobbet"],level:"A2",expl:"“I går”: mốc quá khứ xác định, dùng Preteritum (cả trong văn nói)."},
  {q:"Det var en gang en liten landsby ved elven. Folk der ___ (leve) veldig enkelt.",hint:"leve",accept:["levde"],level:"A2",expl:"Thì kể chuyện: Preteritum."},
  {q:"Da jeg var liten, ___ (ha) vi ikke TV hjemme.",hint:"ha",accept:["hadde"],level:"A2",expl:"“ha” chia ở Preteritum để kể về quá khứ, kể cả khi nói."},
  {q:"I fjor ___ (være) jeg i Italia for første gang.",hint:"være",accept:["var"],level:"A2",expl:"Mốc thời gian xác định (i fjor): Preteritum."},
  {q:"For to år siden ___ (flytte) vi til Trondheim.",hint:"flytte",accept:["flyttet"],level:"A2",expl:"Mốc quá khứ xác định: Preteritum."},
  {q:"Da jeg var barn, ___ (gå) jeg til skolen hver dag.",hint:"gå",accept:["gikk"],level:"A2",expl:"Thói quen trong quá khứ, kể chuyện: Preteritum (gå → gikk, bất quy tắc)."},
  {q:"Vi ___ (møte) hverandre i 2019.",hint:"møte",accept:["møtte"],level:"A2",expl:"Mốc thời gian xác định (i 2019): Preteritum."},
  {q:"Han ___ (komme) inn, satte seg og åpnet boken.",hint:"komme",accept:["kom"],level:"B1",expl:"Chuỗi hành động nối tiếp trong kể chuyện: Preteritum."},
  {q:"Vi ___ (bo) i en liten by da vi var unge.",hint:"bo",accept:["bodde"],level:"A2",expl:"Thói quen/trạng thái kéo dài trong quá khứ: Preteritum."},
  {q:"Hun ___ (skrive) et brev til moren sin i går.",hint:"skrive",accept:["skrev"],level:"B1",expl:"Mốc quá khứ xác định (i går): Preteritum, skrive bất quy tắc → skrev."},
  {q:"Vikingene ___ (seile) over store hav for mange hundre år siden.",hint:"seile",accept:["seilte"],level:"B1",expl:"Sự kiện lịch sử, mốc quá khứ xác định: Preteritum."},
  {q:"Jeg ___ (se) en gammel venn på gaten i forrige uke.",hint:"se",accept:["så"],level:"A2",expl:"Mốc quá khứ xác định (i forrige uke): Preteritum, se → så."},
 ],
 pf: [
  {q:"Hvordan var helgen din? Jeg ___ (se) en fantastisk film på lørdag.",hint:"se",accept:["har sett"],level:"A2",expl:"Kể lại việc đã xảy ra trong hội thoại: har + perfektum partisipp."},
  {q:"Unnskyld at jeg er sen. Toget mitt ___ (bli forsinket).",hint:"bli forsinket",accept:["har blitt forsinket"],level:"B1",expl:"Khẩu ngữ Na Uy cũng hay dùng Perfektum khi không nhấn mạnh thời điểm cụ thể."},
  {q:"I forrige uke ___ (flytte) søsteren min til Trondheim.",hint:"flytte",accept:["har flyttet"],level:"B1",expl:"Kết quả còn ý nghĩa đến hiện tại, dùng “har” với động từ chuyển động theo hướng thông thường."},
  {q:"___ (være) du noen gang i Japan?",hint:"være",accept:["har … vært","har du vært"],level:"B1",expl:"Trải nghiệm, không rõ thời điểm: Perfektum với “noen gang”."},
  {q:"Jeg ___ (miste) nøklene mine.",hint:"miste",accept:["har mistet"],level:"A2",expl:"Vừa xảy ra, kết quả còn ở hiện tại: Perfektum."},
  {q:"Vi ___ (bo) her siden 2015.",hint:"bo",accept:["har bodd"],level:"B1",expl:"Bắt đầu trong quá khứ, kéo dài đến nay (siden): Perfektum."},
  {q:"Hun ___ (besøke) Paris to ganger.",hint:"besøke",accept:["har besøkt"],level:"B1",expl:"Trải nghiệm, không rõ thời điểm cụ thể: Perfektum."},
  {q:"___ (du / lese) boken ennå?",hint:"du / lese",accept:["Har du lest"],level:"B1",expl:"Chưa hoàn thành đến hiện tại (ennå): Perfektum."},
  {q:"Han ___ (aldri / prøve) sushi før.",hint:"aldri / prøve",accept:["har aldri prøvd"],level:"B1",expl:"Trải nghiệm chưa từng có (aldri): Perfektum."},
  {q:"De ___ (nettopp / komme) hjem.",hint:"nettopp / komme",accept:["er nettopp kommet"],level:"B1",expl:"Động từ chỉ chuyển động (komme) dùng trợ động từ “er”."},
  {q:"Hun ___ (reise) til Oslo i dag, og hun er der nå.",hint:"reise",accept:["er reist"],level:"B1",expl:"Động từ chỉ chuyển động (reise) dùng trợ động từ “er”, kết quả còn ở hiện tại."},
  {q:"Jeg ___ (ikke / betale) regningen ennå.",hint:"ikke / betale",accept:["har ikke betalt"],level:"B1",expl:"Chưa hoàn thành đến hiện tại (ennå): Perfektum, ikke đứng trước phân từ."},
 ],
 pqp: [
  {q:"Da jeg kom til stasjonen, ___ (dra) toget allerede.",hint:"dra",accept:["hadde … dratt","hadde allerede dratt"],level:"B1",expl:"Việc đã xảy ra TRƯỚC một mốc quá khứ khác (kom): Pluskvamperfektum."},
  {q:"Før vi gikk på kino, ___ (spise) vi middag.",hint:"spise",accept:["hadde … spist","hadde allerede spist"],level:"B1",expl:"Trước mệnh đề “før” ở Preteritum: bữa tối đã xảy ra trước đó."},
  {q:"Etter at han ___ (bestå) eksamen, feiret han med vennene sine.",hint:"bestå",accept:["hadde bestått"],level:"B1",expl:"Mệnh đề “etter at” + việc xảy ra trước mệnh đề chính ở Preteritum: Pluskvamperfektum."},
  {q:"Hun var veldig trøtt fordi hun ikke ___ (sove) hele natten.",hint:"sove",accept:["hadde sovet"],level:"B1",expl:"Nguyên nhân cho một trạng thái quá khứ, xảy ra trước đó: Pluskvamperfektum."},
  {q:"Da vi kom dit, ___ (begynne) filmen allerede.",hint:"begynne",accept:["hadde … begynt","hadde allerede begynt"],level:"B1",expl:"Việc xảy ra TRƯỚC mốc quá khứ khác (kom dit): Pluskvamperfektum."},
  {q:"Han var trøtt fordi han ___ (jobbe) hele natten.",hint:"jobbe",accept:["hadde jobbet"],level:"B1",expl:"Nguyên nhân cho một trạng thái quá khứ, xảy ra trước đó: Pluskvamperfektum."},
  {q:"Før hun flyttet til Oslo, ___ (bo) hun i Bergen i ti år.",hint:"bo",accept:["hadde bodd"],level:"B2",expl:"Trạng thái kéo dài trước một mốc quá khứ khác (flyttet): Pluskvamperfektum."},
  {q:"Etter at de ___ (selge) huset, flyttet de til utlandet.",hint:"selge",accept:["hadde solgt"],level:"B2",expl:"Mệnh đề “etter at” + việc xảy ra trước mệnh đề chính ở Preteritum: Pluskvamperfektum."},
  {q:"Jeg skjønte at jeg ___ (glemme) nøklene hjemme.",hint:"glemme",accept:["hadde glemt"],level:"B1",expl:"Việc nhận ra (skjønte) xảy ra sau, nhưng việc quên xảy ra trước đó: Pluskvamperfektum."},
  {q:"Da regnet stoppet, ___ (vi / allerede / gå) hjem.",hint:"vi / allerede / gå",accept:["hadde vi allerede gått"],level:"B2",expl:"Trước mốc quá khứ khác (stoppet): Pluskvamperfektum."},
  {q:"Hun fortalte at hun ___ (aldri / se) en slik film før.",hint:"aldri / se",accept:["hadde aldri sett"],level:"B1",expl:"Trải nghiệm xảy ra trước một mốc kể chuyện khác trong quá khứ: Pluskvamperfektum."},
  {q:"Da læreren kom inn, ___ (vi / allerede / finne) plassene våre.",hint:"vi / allerede / finne",accept:["hadde vi allerede funnet"],level:"B2",expl:"Trước mốc quá khứ khác (kom inn): Pluskvamperfektum."},
 ],
 fut: [
  {q:"Jeg er ikke helt sikker, men jeg tror det ___ (regne) i morgen.",hint:"regne",accept:["vil regne"],level:"A2",expl:"Dự đoán không chắc chắn (jeg tror): “vil” + infinitiv."},
  {q:"Vi har bestemt oss. Vi ___ (flytte) til Trondheim i august.",hint:"flytte",accept:["skal flytte"],level:"A2",expl:"Kế hoạch/ý định đã quyết định: “skal” + infinitiv."},
  {q:"Jeg lover: Jeg ___ (ringe) deg så snart jeg kommer fram.",hint:"ringe",accept:["skal ringe"],level:"A2",expl:"Lời hứa: “skal” + infinitiv."},
  {q:"Prisene i byen ___ (fortsette å stige) de neste årene.",hint:"fortsette å stige",accept:["vil fortsette å stige"],level:"B1",expl:"Dự đoán xu hướng dài hạn: “vil” + infinitiv."},
  {q:"Hun ___ (reise) til Spania neste sommer — det er allerede bestemt.",hint:"reise",accept:["skal reise"],level:"A2",expl:"Kế hoạch/ý định đã quyết định: “skal” + infinitiv."},
  {q:"Jeg tror det ___ (bli) kaldt i vinter.",hint:"bli",accept:["vil bli"],level:"A2",expl:"Dự đoán: “vil” + infinitiv."},
  {q:"Vi ___ (møte) dere klokken åtte, det er avtalt.",hint:"møte",accept:["skal møte"],level:"A2",expl:"Kế hoạch đã quyết định, hẹn trước: “skal”."},
  {q:"Kanskje det ___ (snø) i morgen.",hint:"snø",accept:["vil snø"],level:"B1",expl:"Dự đoán không chắc chắn (kanskje): “vil” + infinitiv."},
  {q:"Jeg ___ (hjelpe) deg med flyttingen, det har jeg bestemt.",hint:"hjelpe",accept:["skal hjelpe"],level:"A2",expl:"Ý định chắc chắn đã quyết định: “skal”."},
  {q:"I fremtiden ___ (mennesker / jobbe) mer hjemmefra.",hint:"mennesker / jobbe",accept:["vil mennesker jobbe"],level:"B1",expl:"Dự đoán xu hướng dài hạn: “vil” + infinitiv."},
  {q:"Hva ___ (du / gjøre) i morgen?",hint:"du / gjøre",accept:["skal du gjøre"],level:"A2",expl:"Hỏi về kế hoạch: “skal”."},
  {q:"Han ___ (sannsynligvis / komme) litt sent.",hint:"sannsynligvis / komme",accept:["vil sannsynligvis komme"],level:"B1",expl:"Dự đoán với “sannsynligvis”: “vil” + infinitiv."},
 ],
};

const TYPES={
 fill:{name:"Fyll inn",desc:"Câu ngữ cảnh, gõ dạng đúng của động từ"},
};
const POOL=[];
Object.entries(BANK).forEach(([c, items]) => items.forEach(it => POOL.push({
 type:"fill",kind:"input",retry:true,
 prompt:fmt(it.q.replace(/ \(.+?\)/,"")),
 hint:`Gợi ý: <b>${esc(it.hint)}</b>. Gõ phần điền vào chỗ trống.`,
 accept:it.accept,plain:it.accept[0],tense:TN[c],ref:TN[c],level:it.level,expl:it.expl,
})));

const RUSH=[
 ["hver dag",["ps"]],["alltid",["ps"]],["ofte",["ps"]],["noen ganger",["ps"]],["vanligvis",["ps"]],["nå / akkurat nå",["ps"]],
 ["i går",["prt"]],["i fjor",["prt"]],["for to år siden",["prt"]],["den gang",["prt"]],["da jeg var barn",["prt"]],
 ["allerede",["pf","pqp"],"allerede có thể đi với Perfektum (đã xảy ra) hoặc Pluskvamperfektum (đã xảy ra trước một mốc quá khứ khác)."],
 ["ennå",["pf"]],["nettopp",["pf"]],["noensinne / aldri",["pf"]],["så langt",["pf"]],
 ["før",["pqp"]],["etter at",["pqp"]],["da (hai mốc quá khứ)",["pqp"]],
 ["i morgen",["fut"]],["neste uke",["fut"]],["snart",["fut"]],["sannsynligvis",["fut"]],
];

GRAMMAR.quiz["verbtider"] = { pool: POOL, types: TYPES, game: {title:"Hvilken tid?",desc:"60 giây. Thấy alltid, i går, allerede… chọn đúng thì càng nhanh càng tốt",prompt:"Thấy dấu hiệu này, dùng thì nào?",items:RUSH,all:CODES,label:c=>tLabel(TN[c]),name:c=>byId[TN[c]].vi,bestKey:"nbRushBest"} };
})();
