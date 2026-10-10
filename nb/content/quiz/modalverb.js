/* nb/content/quiz/modalverb.js: practice questions for Modalverb.
   Single exercise type: context sentences, type the correct modal
   verb. Wrong answers can be retried (retry:true). */
(() => {
const BANK = {
 "nb-modal-kan": [
  {q:"Søsteren min er bare fire, men hun ___ (kan) allerede lese.",hint:"kan",accept:["kan"],level:"A1",expl:"Khả năng đã học được: kan."},
  {q:"Beklager, jeg ___ (kan) dessverre ikke komme i dag.",hint:"kan",accept:["kan"],level:"A1",expl:"Khả năng bị giới hạn bởi hoàn cảnh: kan ikke."},
  {q:"___ (kan) du hjelpe meg litt?",hint:"kan",accept:["Kan"],level:"A1",expl:"Câu hỏi: Kan du…?"},
  {q:"Jeg ___ (kan) svømme veldig godt.",hint:"kan",accept:["kan"],level:"A1",expl:"Khả năng đã học được: kan."},
  {q:"Han ___ (kan) ikke kjøre bil ennå.",hint:"kan",accept:["kan"],level:"A1",expl:"Khả năng chưa có: kan ikke."},
  {q:"___ (kan) jeg få litt mer vann?",hint:"kan",accept:["Kan"],level:"A1",expl:"Xin phép/yêu cầu lịch sự: Kan jeg…?"},
  {q:"Det ___ (kan) skje at toget blir forsinket.",hint:"kan",accept:["kan"],level:"A2",expl:"Khả năng xảy ra (possibility): kan."},
  {q:"Vi ___ (kan) møtes klokken fem hvis det passer.",hint:"kan",accept:["kan"],level:"A2",expl:"Khả năng/đề xuất: kan."},
  {q:"Hun ___ (kan) fransk, tysk og engelsk.",hint:"kan",accept:["kan"],level:"A1",expl:"Khả năng ngôn ngữ: kan."},
  {q:"Dette ___ (kan) ikke være sant!",hint:"kan",accept:["kan"],level:"A2",expl:"Khả năng/sự ngờ vực: kan ikke."},
  {q:"___ (kan) du norsk?",hint:"kan",accept:["Kan"],level:"A1",expl:"Câu hỏi khả năng: Kan du…?"},
  {q:"Barn ___ (kan) lære flere språk samtidig.",hint:"kan",accept:["kan"],level:"A2",expl:"Khả năng chung: kan."},
 ],
 "nb-modal-faar": [
  {q:"___ (få) jeg åpne vinduet? Det er veldig varmt.",hint:"få",accept:["Får"],level:"A1",expl:"Xin phép lịch sự: Får jeg…?"},
  {q:"På biblioteket ___ (få) man ikke snakke høyt.",hint:"få",accept:["får"],level:"A1",expl:"Quy định cấm: får ikke."},
  {q:"Som barn ___ (få) jeg ikke se på TV om kvelden.",hint:"få",accept:["fikk"],level:"A2",expl:"Quá khứ của få: fikk (không được phép, quy định của cha mẹ)."},
  {q:"___ (få) jeg komme inn?",hint:"få",accept:["Får"],level:"A1",expl:"Xin phép lịch sự: Får jeg…?"},
  {q:"Du ___ (få) ikke parkere her.",hint:"få",accept:["får"],level:"A1",expl:"Quy định cấm: får ikke."},
  {q:"___ (få) vi ta en pause nå?",hint:"få",accept:["Får"],level:"A1",expl:"Xin phép (số nhiều): Får vi…?"},
  {q:"Elevene ___ (få) ikke bruke mobiltelefon i timen.",hint:"få",accept:["får"],level:"A2",expl:"Quy định cấm trong lớp: får ikke."},
  {q:"Som student ___ (få) du rabatt på billetter.",hint:"få",accept:["får"],level:"A2",expl:"Được phép/được hưởng quyền lợi: får."},
  {q:"___ (få) jeg presentere meg?",hint:"få",accept:["Får"],level:"A1",expl:"Xin phép lịch sự: Får jeg…?"},
  {q:"I Norge ___ (få) man kjøre bil fra man er 18.",hint:"få",accept:["får"],level:"A2",expl:"Quy định cho phép theo luật: får."},
  {q:"Hun ___ (få) ikke reise alene så ung.",hint:"få",accept:["får"],level:"A2",expl:"Quy định/giới hạn do cha mẹ: får ikke."},
  {q:"Som barn ___ (få) vi ikke spise godteri hver dag.",hint:"få",accept:["fikk"],level:"A2",expl:"Quá khứ của få: fikk (không được phép theo quy định thời nhỏ)."},
 ],
 "nb-modal-maa": [
  {q:"For denne jobben ___ (måtte) man snakke flytende engelsk.",hint:"måtte",accept:["må"],level:"A2",expl:"Yêu cầu bắt buộc: må."},
  {q:"Du ___ (trenge) ikke bestemme deg med en gang, vi har tid.",hint:"trenge",accept:["trenger"],level:"A2",expl:"“trenger ikke” = không bắt buộc, KHÔNG phải bị cấm."},
  {q:"Her ___ (få) man ikke ta bilder — det er strengt forbudt.",hint:"få",accept:["får"],level:"A2",expl:"Diễn tả cấm phải dùng “får ikke”, không phải “trenger ikke”."},
  {q:"Du ___ (måtte) vise pass på flyplassen.",hint:"måtte",accept:["må"],level:"A2",expl:"Yêu cầu bắt buộc: må."},
  {q:"Vi ___ (måtte) betale skatt hvert år.",hint:"måtte",accept:["må"],level:"A2",expl:"Nghĩa vụ bắt buộc: må."},
  {q:"Du ___ (trenge) ikke å svare nå, vi har tid.",hint:"trenge",accept:["trenger"],level:"A2",expl:"“trenger ikke” = không bắt buộc."},
  {q:"Her ___ (få) man ikke røyke.",hint:"få",accept:["får"],level:"A2",expl:"Cấm theo quy định: får ikke."},
  {q:"Alle elever ___ (måtte) møte opp til eksamen.",hint:"måtte",accept:["må"],level:"A2",expl:"Nghĩa vụ bắt buộc: må."},
  {q:"Du ___ (trenge) ikke å bekymre deg, alt går bra.",hint:"trenge",accept:["trenger"],level:"B1",expl:"Không cần thiết/không bắt buộc: trenger ikke."},
  {q:"I denne bygningen ___ (få) man ikke ta bilder.",hint:"få",accept:["får"],level:"A2",expl:"Cấm theo quy định: får ikke."},
  {q:"Vi ___ (måtte) gå nå, bussen kommer snart.",hint:"måtte",accept:["må"],level:"A2",expl:"Bắt buộc do hoàn cảnh: må."},
  {q:"Han ___ (trenge) ikke jobbe i helgen, han har allerede gjort alt.",hint:"trenge",accept:["trenger"],level:"B1",expl:"Không bắt buộc: trenger ikke."},
 ],
 "nb-modal-boer": [
  {q:"Du ser trøtt ut. Du ___ (bør) virkelig legge deg tidligere.",hint:"bør",accept:["bør"],level:"A2",expl:"Lời khuyên nhẹ nhàng: bør."},
  {q:"Legen sier at jeg ___ (bør) spise mindre sukker.",hint:"bør",accept:["bør"],level:"A2",expl:"Nhắc lại lời khuyên của người khác (bác sĩ): bør."},
  {q:"Vi ___ (bør) spise mer grønnsaker.",hint:"bør",accept:["bør"],level:"A2",expl:"Lời khuyên: bør."},
  {q:"Du ___ (bør) ikke jobbe så mye, det er ikke sunt.",hint:"bør",accept:["bør"],level:"A2",expl:"Lời khuyên phủ định: bør ikke."},
  {q:"Man ___ (bør) alltid si sannheten.",hint:"bør",accept:["bør"],level:"A2",expl:"Lời khuyên chung: bør."},
  {q:"Hun ___ (bør) kanskje søke en annen jobb.",hint:"bør",accept:["bør"],level:"B1",expl:"Lời khuyên nhẹ nhàng: bør."},
  {q:"Dere ___ (bør) komme tidlig til møtet.",hint:"bør",accept:["bør"],level:"A2",expl:"Lời khuyên: bør."},
  {q:"Du ___ (bør) drikke mer vann hver dag.",hint:"bør",accept:["bør"],level:"A2",expl:"Lời khuyên về sức khỏe: bør."},
  {q:"Vi ___ (bør) ikke vente lenger.",hint:"bør",accept:["bør"],level:"A2",expl:"Lời khuyên phủ định: bør ikke."},
  {q:"Han ___ (bør) be om unnskyldning.",hint:"bør",accept:["bør"],level:"A2",expl:"Lời khuyên: bør."},
  {q:"Du ___ (bør) lese kontrakten nøye før du skriver under.",hint:"bør",accept:["bør"],level:"B1",expl:"Lời khuyên quan trọng: bør."},
  {q:"Elevene ___ (bør) øve mer før prøven.",hint:"bør",accept:["bør"],level:"A2",expl:"Lời khuyên cho học sinh: bør."},
 ],
 "nb-modal-vilskal": [
  {q:"God dag, jeg ___ (ville) gjerne bestille et bord til to.",hint:"ville",accept:["vil"],level:"A2",expl:"Mong muốn lịch sự: vil gjerne."},
  {q:"Vi har bestemt oss. Vi ___ (skulle) flytte til Trondheim i august.",hint:"skulle",accept:["skal"],level:"A2",expl:"Kế hoạch đã quyết định chắc chắn: skal."},
  {q:"Jeg tror det ___ (ville) regne i morgen.",hint:"ville",accept:["vil"],level:"A2",expl:"Dự đoán: vil."},
  {q:"Jeg ___ (ville) gjerne bestille et bord til fire.",hint:"ville",accept:["vil"],level:"A2",expl:"Mong muốn lịch sự: vil gjerne."},
  {q:"Vi ___ (skulle) møtes klokken sju i kveld.",hint:"skulle",accept:["skal"],level:"A2",expl:"Kế hoạch/hẹn đã quyết định: skal."},
  {q:"Hva ___ (ville) du gjøre i helgen?",hint:"ville",accept:["vil"],level:"A2",expl:"Hỏi về mong muốn/ý định: vil."},
  {q:"Jeg tror det ___ (ville) bli en fin dag.",hint:"ville",accept:["vil"],level:"A2",expl:"Dự đoán: vil."},
  {q:"Vi ___ (skulle) reise til Italia neste år.",hint:"skulle",accept:["skal"],level:"A2",expl:"Kế hoạch đã quyết định chắc chắn: skal."},
  {q:"___ (ville) du ha litt mer kaffe?",hint:"ville",accept:["Vil"],level:"A1",expl:"Mời lịch sự: Vil du…?"},
  {q:"Barnet ___ (ville) ikke sove.",hint:"ville",accept:["vil"],level:"A2",expl:"Ý muốn/sự miễn cưỡng: vil ikke."},
  {q:"Jeg ___ (skulle) ringe deg i morgen, det har jeg bestemt.",hint:"skulle",accept:["skal"],level:"A2",expl:"Lời hứa/kế hoạch chắc chắn: skal."},
  {q:"Han ___ (ville) helst bli lege.",hint:"ville",accept:["vil"],level:"B1",expl:"Mong muốn/nguyện vọng: vil helst."},
 ],
};

const TYPES={
 fill:{name:"Fyll inn",desc:"Câu ngữ cảnh, gõ đúng dạng modal verb"},
};
const POOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => POOL.push({
 type:"fill",kind:"input",retry:true,
 prompt:fmt(it.q.replace(/ \(.+?\)/,"")),
 hint:`Gợi ý: <b>${esc(it.hint)}</b>. Gõ đúng dạng đã chia.`,
 accept:it.accept,plain:it.accept[0],ref,level:it.level,expl:it.expl,
})));

const RUSH=[
 ["khả năng làm được",["nb-modal-kan"]],["kan",["nb-modal-kan"]],
 ["xin phép / quy định cho phép",["nb-modal-faar"]],["får",["nb-modal-faar"]],
 ["bắt buộc",["nb-modal-maa"]],["må",["nb-modal-maa"]],["không bắt buộc (trenger ikke)",["nb-modal-maa"]],
 ["lời khuyên",["nb-modal-boer"]],["bør",["nb-modal-boer"]],
 ["mong muốn (vil)",["nb-modal-vilskal"]],["kế hoạch chắc chắn (skal)",["nb-modal-vilskal"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["modalverb"] = { pool: POOL, types: TYPES, game: {title:"Hvilket modalverb?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng nhóm nghĩa",prompt:"Dấu hiệu này thuộc nhóm nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"modalRushBest"} };
})();
