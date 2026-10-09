/* nb/content/quiz/relativsetninger.js: practice questions for
   Relativsetninger. Single exercise type: build the relative clause.
   Wrong answers can be retried (retry:true). */
(() => {
const FILL=[
 // som (subjekt)
 ["Mannen, ___ (han / bo her), er læreren min.","han / bo her",["som bor her"],"nb-rel-subjekt","“som” làm chủ ngữ, không thể lược bỏ."],
 ["Jenta, ___ (hun / le så høyt), er søsteren min.","hun / le så høyt",["som ler så høyt"],"nb-rel-subjekt","Chủ ngữ mệnh đề quan hệ: som."],
 ["Bilen, ___ (den / stå der), er min.","den / stå der",["som står der"],"nb-rel-subjekt","Chủ ngữ: som (bắt buộc)."],

 // som (objekt)
 ["Boka ___ (jeg / lese) er spennende.","jeg / lese",["som jeg leser","jeg leser"],"nb-rel-objekt","Tân ngữ: som có thể lược bỏ."],
 ["Filmen ___ (vi / se) i går, var bra.","vi / se",["som vi så","vi så"],"nb-rel-objekt","Tân ngữ (quá khứ): som có thể lược bỏ."],
 ["Mannen ___ (jeg / møte) på festen, var hyggelig.","jeg / møte",["som jeg møtte","jeg møtte"],"nb-rel-objekt","Tân ngữ: som (hoặc lược bỏ) + jeg møtte."],

 // der / hvis
 ["Byen ___ (der) jeg bor, er fin.","der",["der"],"nb-rel-dershvis","Nơi chốn: der."],
 ["Huset ___ (der) jeg vokste opp, er solgt nå.","der",["der"],"nb-rel-dershvis","Nơi chốn: der."],
 ["Forfatteren ___ (hvis) bok vi leser, er norsk.","hvis",["hvis"],"nb-rel-dershvis","Sở hữu trang trọng: hvis."],
];

const TYPES={
 fill:{name:"Fyll inn",desc:"Câu ngữ cảnh, gõ đúng đại từ quan hệ"},
};
const POOL=[];
FILL.forEach(([s,v,acc,ref,ex])=>POOL.push({type:"fill",kind:"input",retry:true,prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Gõ đúng đại từ quan hệ (hoặc lược bỏ nếu có thể).`,accept:acc,plain:acc[0],ref,expl:ex}));

const RUSH=[
 ["som làm chủ ngữ (bắt buộc)",["nb-rel-subjekt"]],
 ["som làm tân ngữ (có thể bỏ)",["nb-rel-objekt"]],
 ["der (nơi chốn)",["nb-rel-dershvis"]],["hvis (sở hữu)",["nb-rel-dershvis"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["relativsetninger"] = { pool: POOL, types: TYPES, game: {title:"Hvilken relativpronomen?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng loại",prompt:"Dấu hiệu này thuộc loại nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"relRushBest"} };
})();
