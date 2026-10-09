/* nb/content/quiz/pronomen.js: practice questions for Pronomen.
   Single exercise type: context sentences, type the correctly
   declined pronoun. Wrong answers can be retried (retry:true). */
(() => {
const FILL=[
 // Personlig
 ["Anna er venninna mi. ___ (hun) kommer fra Hanoi.","hun",["Hun"],"nb-pron-personlig","Chủ ngữ của câu mới: hun giữ nguyên."],
 ["Jeg kjenner Thomas godt. Jeg ser ___ (han) hver dag.","han",["ham"],"nb-pron-personlig","Tân ngữ trực tiếp ngôi thứ 3: han → ham."],
 ["Kan du hjelpe ___ (jeg)?","jeg",["meg"],"nb-pron-personlig","Tân ngữ: jeg → meg."],
 ["Boka tilhører ___ (vi).","vi",["oss"],"nb-pron-personlig","Tân ngữ sau “tilhøre”: vi → oss."],
 ["Har dere sett ___ (jeg) i går?","jeg",["meg"],"nb-pron-personlig","Tân ngữ trực tiếp: jeg → meg."],

 // Possessiv
 ["Dette er ___ (min) bil.","min",["min"],"nb-pron-possessiv","Bil là hankjønn, Nominativ: min."],
 ["Jeg ringer til ___ (min) søster.","min",["min"],"nb-pron-possessiv","Søster là hunkjønn nhưng dùng hệ hai giống phổ biến: min cũng chấp nhận được, hoặc “mi”."],
 ["Ser du ___ (din) bror der borte?","din",["din"],"nb-pron-possessiv","Bror là hankjønn: din."],
 ["Vi besøker ___ (vår) besteforeldre i helgen.","vår",["våre"],"nb-pron-possessiv","Besteforeldre là số nhiều: thêm -e → våre."],
 ["Dette er ikke ___ (hans) problem.","hans",["hans"],"nb-pron-possessiv","Hans không đổi dạng theo giống/số của danh từ."],

 // Refleksiv
 ["Jeg gleder ___ (meg) til ferien.","meg",["meg"],"nb-pron-refleksiv","“glede seg til” luôn đi với refleksivt pronomen: jeg → meg."],
 ["Han kler ___ (seg) raskt om morgenen.","seg",["seg"],"nb-pron-refleksiv","Ngôi thứ 3 (han) luôn dùng seg."],
 ["Vasker du ___ (deg) hver dag?","deg",["deg"],"nb-pron-refleksiv","“vaske seg”: du → deg."],
 ["Interesserer du ___ (deg) for musikk?","deg",["deg"],"nb-pron-refleksiv","“interessere seg for”: du → deg."],
 ["Vi husker ___ (vi) godt fra den dagen.","vi",["oss"],"nb-pron-refleksiv","“huske seg”: vi → oss."],
];

const TYPES={
 fill:{name:"Fyll inn",desc:"Câu ngữ cảnh, gõ đúng dạng đại từ"},
};
const POOL=[];
FILL.forEach(([s,v,acc,ref,ex])=>POOL.push({type:"fill",kind:"input",retry:true,prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Gõ đúng dạng đại từ.`,accept:acc,plain:acc[0],ref,expl:ex}));

const RUSH=[
 ["Chủ ngữ",["nb-pron-personlig"]],["Tân ngữ",["nb-pron-personlig"]],
 ["của tôi/của bạn…",["nb-pron-possessiv"]],["+ hankjønn",["nb-pron-possessiv"]],["+ hunkjønn/intetkjønn/flertall",["nb-pron-possessiv"]],
 ["glede seg / interessere seg",["nb-pron-refleksiv"]],["ngôi thứ 3: seg",["nb-pron-refleksiv"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["pronomen"] = { pool: POOL, types: TYPES, game: {title:"Hvilket pronomen?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng nhóm đại từ",prompt:"Dấu hiệu này thuộc nhóm nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"pronRushBest"} };
})();
