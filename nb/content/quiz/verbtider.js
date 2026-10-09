/* nb/content/quiz/verbtider.js: practice questions for the Norwegian
   Bokmål tenses module. Single exercise type: context sentences, type
   the correct form of the verb in brackets. Wrong answers can be
   retried (retry:true) instead of being revealed immediately. */
(() => {
// Fyll inn (20): [câu (có ngữ cảnh), gợi ý, [đáp án chấp nhận], thì, giải thích]
const FILL=[
 // Presens
 ["Hver dag står jeg opp klokken sju. Så ___ (drikke) jeg en kopp kaffe.","drikke",["drikker"],"ps","Thói quen lặp lại hằng ngày: Presens."],
 ["Broren min bor i Bergen nå. Han ___ (jobbe) der som lærer.","jobbe",["jobber"],"ps","Thực trạng hiện tại: Presens, tất cả các ngôi chia giống nhau (-r)."],
 ["Vi har ikke skole i morgen. Da ___ (reise) vi til hytta.","reise",["reiser"],"ps","Trạng từ thời gian rõ ràng (i morgen) + Presens diễn tả kế hoạch tương lai gần."],
 ["Se ut vinduet! Det ___ (regne) igjen.","regne",["regner"],"ps","Tiếng Na Uy không có thì tiếp diễn riêng: việc đang xảy ra ngay lúc nói vẫn dùng Presens."],

 // Preteritum
 ["I går var det en lang dag. Jeg ___ (jobbe) til klokken åtte om kvelden.","jobbe",["jobbet"],"prt","“I går”: mốc quá khứ xác định, dùng Preteritum (cả trong văn nói)."],
 ["Det var en gang en liten landsby ved elven. Folk der ___ (leve) veldig enkelt.","leve",["levde"],"prt","Thì kể chuyện: Preteritum."],
 ["Da jeg var liten, ___ (ha) vi ikke TV hjemme.","ha",["hadde"],"prt","“ha” chia ở Preteritum để kể về quá khứ, kể cả khi nói."],
 ["I fjor ___ (være) jeg i Italia for første gang.","være",["var"],"prt","Mốc thời gian xác định (i fjor): Preteritum."],

 // Perfektum
 ["Hvordan var helgen din? Jeg ___ (se) en fantastisk film på lørdag.","se",["har sett"],"pf","Kể lại việc đã xảy ra trong hội thoại: har + perfektum partisipp."],
 ["Unnskyld at jeg er sen. Toget mitt ___ (bli forsinket).","bli forsinket",["har blitt forsinket"],"pf","Khẩu ngữ Na Uy cũng hay dùng Perfektum khi không nhấn mạnh thời điểm cụ thể."],
 ["I forrige uke ___ (flytte) søsteren min til Trondheim.","flytte",["har flyttet"],"pf","Kết quả còn ý nghĩa đến hiện tại, dùng “har” với động từ chuyển động theo hướng thông thường."],
 ["___ (være) du noen gang i Japan?","være",["har … vært","har du vært"],"pf","Trải nghiệm, không rõ thời điểm: Perfektum với “noen gang”."],

 // Pluskvamperfektum
 ["Da jeg kom til stasjonen, ___ (dra) toget allerede.","dra",["hadde … dratt","hadde allerede dratt"],"pqp","Việc đã xảy ra TRƯỚC một mốc quá khứ khác (kom): Pluskvamperfektum."],
 ["Før vi gikk på kino, ___ (spise) vi middag.","spise",["hadde … spist","hadde allerede spist"],"pqp","Trước mệnh đề “før” ở Preteritum: bữa tối đã xảy ra trước đó."],
 ["Etter at han ___ (bestå) eksamen, feiret han med vennene sine.","bestå",["hadde bestått"],"pqp","Mệnh đề “etter at” + việc xảy ra trước mệnh đề chính ở Preteritum: Pluskvamperfektum."],
 ["Hun var veldig trøtt fordi hun ikke ___ (sove) hele natten.","sove",["hadde sovet"],"pqp","Nguyên nhân cho một trạng thái quá khứ, xảy ra trước đó: Pluskvamperfektum."],

 // Futurum
 ["Jeg er ikke helt sikker, men jeg tror det ___ (regne) i morgen.","regne",["vil regne"],"fut","Dự đoán không chắc chắn (jeg tror): “vil” + infinitiv."],
 ["Vi har bestemt oss. Vi ___ (flytte) til Trondheim i august.","flytte",["skal flytte"],"fut","Kế hoạch/ý định đã quyết định: “skal” + infinitiv."],
 ["Jeg lover: Jeg ___ (ringe) deg så snart jeg kommer fram.","ringe",["skal ringe"],"fut","Lời hứa: “skal” + infinitiv."],
 ["Prisene i byen ___ (fortsette å stige) de neste årene.","fortsette å stige",["vil fortsette å stige"],"fut","Dự đoán xu hướng dài hạn: “vil” + infinitiv."],
];

const TYPES={
 fill:{name:"Fyll inn",desc:"Câu ngữ cảnh, gõ dạng đúng của động từ"},
};
const POOL=[];
FILL.forEach(([s,v,acc,c,ex])=>POOL.push({type:"fill",kind:"input",retry:true,prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Gõ phần điền vào chỗ trống.`,accept:acc,plain:acc[0],tense:TN[c],expl:ex}));
POOL.forEach(q=>q.ref=q.tense);

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
