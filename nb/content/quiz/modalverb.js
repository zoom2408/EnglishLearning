/* nb/content/quiz/modalverb.js: practice questions for Modalverb.
   Single exercise type: context sentences, type the correct modal
   verb. Wrong answers can be retried (retry:true). */
(() => {
const FILL=[
 // Evne
 ["Søsteren min er bare fire, men hun ___ (kan) allerede lese.","kan",["kan"],"nb-modal-kan","Khả năng đã học được: kan."],
 ["Beklager, jeg ___ (kan) dessverre ikke komme i dag.","kan",["kan"],"nb-modal-kan","Khả năng bị giới hạn bởi hoàn cảnh: kan ikke."],
 ["___ (kan) du hjelpe meg litt?","kan",["Kan"],"nb-modal-kan","Câu hỏi: Kan du…?"],

 // Tillatelse
 ["___ (få) jeg åpne vinduet? Det er veldig varmt.","få",["Får"],"nb-modal-faar","Xin phép lịch sự: Får jeg…?"],
 ["På biblioteket ___ (få) man ikke snakke høyt.","få",["får"],"nb-modal-faar","Quy định cấm: får ikke."],
 ["Som barn ___ (få) jeg ikke se på TV om kvelden.","få",["fikk"],"nb-modal-faar","Quá khứ của få: fikk (không được phép, quy định của cha mẹ)."],

 // Plikt & forbud
 ["For denne jobben ___ (måtte) man snakke flytende engelsk.","måtte",["må"],"nb-modal-maa","Yêu cầu bắt buộc: må."],
 ["Du ___ (trenge) ikke bestemme deg med en gang, vi har tid.","trenge",["trenger"],"nb-modal-maa","“trenger ikke” = không bắt buộc, KHÔNG phải bị cấm."],
 ["Her ___ (få) man ikke ta bilder — det er strengt forbudt.","få",["får"],"nb-modal-maa","Diễn tả cấm phải dùng “får ikke”, không phải “trenger ikke”."],

 // Råd
 ["Du ser trøtt ut. Du ___ (bør) virkelig legge deg tidligere.","bør",["bør"],"nb-modal-boer","Lời khuyên nhẹ nhàng: bør."],
 ["Legen sier at jeg ___ (bør) spise mindre sukker.","bør",["bør"],"nb-modal-boer","Nhắc lại lời khuyên của người khác (bác sĩ): bør."],

 // Ønske & plan
 ["God dag, jeg ___ (ville) gjerne bestille et bord til to.","ville",["vil"],"nb-modal-vilskal","Mong muốn lịch sự: vil gjerne."],
 ["Vi har bestemt oss. Vi ___ (skulle) flytte til Trondheim i august.","skulle",["skal"],"nb-modal-vilskal","Kế hoạch đã quyết định chắc chắn: skal."],
 ["Jeg tror det ___ (ville) regne i morgen.","ville",["vil"],"nb-modal-vilskal","Dự đoán: vil."],
];

const TYPES={
 fill:{name:"Fyll inn",desc:"Câu ngữ cảnh, gõ đúng dạng modal verb"},
};
const POOL=[];
FILL.forEach(([s,v,acc,ref,ex])=>POOL.push({type:"fill",kind:"input",retry:true,prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Gõ đúng dạng đã chia.`,accept:acc,plain:acc[0],ref,expl:ex}));

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
