/* de/content/quiz/indirekte-rede.js: practice questions for Indirekte
   Rede. Single exercise type: transform direct speech into reported
   speech. Wrong answers can be retried (retry:true). */
(() => {
const FILL=[
 // Aussagesätze
 ["Er sagt: „Ich bin müde.“ → Er sagt, dass er ___ (müde / sein).","müde / sein",["müde sei"],"de-ind-aussage","Konjunktiv I của sein ngôi 3 số ít: sei."],
 ["Sie sagt: „Ich habe keine Zeit.“ → Sie sagt, sie ___ (keine Zeit / haben).","keine Zeit / haben",["habe keine Zeit"],"de-ind-aussage","Konjunktiv I của haben ngôi 3 số ít: habe."],
 ["Er sagt: „Ich komme später.“ → Er sagt, er ___ (später / kommen).","später / kommen",["komme später"],"de-ind-aussage","Konjunktiv I của kommen ngôi 3 số ít: komme."],
 ["Sie sagen: „Wir sind fertig.“ → Sie sagen, sie ___ (fertig / sein).","fertig / sein",["seien fertig"],"de-ind-aussage","Konjunktiv I của sein ngôi 3 số nhiều: seien."],

 // Ja/Nein-Fragen
 ["Sie fragt: „Kommst du morgen?“ → Sie fragt, ___ (ich / morgen / kommen).","ich / morgen / kommen",["ob ich morgen komme"],"de-ind-janein","Câu hỏi có/không dùng ob + động từ cuối."],
 ["Er fragt: „Hast du Zeit?“ → Er fragt, ___ (ich / Zeit / haben).","ich / Zeit / haben",["ob ich Zeit habe"],"de-ind-janein","ob + S + … + Verb (cuối)."],
 ["Sie fragt: „Bist du fertig?“ → Sie fragt, ___ (ich / fertig / sein).","ich / fertig / sein",["ob ich fertig bin"],"de-ind-janein","ob + S + … + Verb (cuối)."],

 // W-Fragen
 ["Er fragt: „Wo wohnst du?“ → Er fragt, ___ (ich / wohnen).","ich / wohnen",["wo ich wohne"],"de-ind-wfrage","Giữ nguyên từ để hỏi (wo), động từ cuối."],
 ["Sie fragt: „Warum kommst du zu spät?“ → Sie fragt, ___ (ich / zu spät / kommen).","ich / zu spät / kommen",["warum ich zu spät komme"],"de-ind-wfrage","Giữ nguyên từ để hỏi (warum), động từ cuối."],
 ["Er fragt: „Was machst du heute?“ → Er fragt, ___ (ich / heute / machen).","ich / heute / machen",["was ich heute mache"],"de-ind-wfrage","Giữ nguyên từ để hỏi (was), động từ cuối."],

 // Aufforderungen
 ["Der Lehrer sagt: „Macht die Hausaufgaben!“ → Der Lehrer sagt, wir ___ (die Hausaufgaben / machen).","die Hausaufgaben / machen",["sollen die Hausaufgaben machen"],"de-ind-auff","Câu mệnh lệnh tường thuật: sollen + Infinitiv."],
 ["Die Mutter sagt: „Seid leise!“ → Die Mutter sagt, die Kinder ___ (leise / sein).","leise / sein",["sollen leise sein"],"de-ind-auff","sollen + Infinitiv (sein)."],
 ["Der Chef sagt: „Schicken Sie die E-Mail!“ → Der Chef sagt, ich ___ (die E-Mail / schicken).","die E-Mail / schicken",["solle die E-Mail schicken"],"de-ind-auff","Ngôi ich: Konjunktiv I của sollen là solle."],
];

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Chuyển câu trực tiếp sang câu tường thuật"},
};
const POOL=[];
FILL.forEach(([s,v,acc,ref,ex])=>POOL.push({type:"fill",kind:"input",retry:true,prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Gõ đúng dạng tường thuật.`,accept:acc,plain:acc[0],ref,expl:ex}));

const RUSH=[
 ["dass + Konjunktiv I",["de-ind-aussage"]],["sagt, dass…",["de-ind-aussage"]],
 ["ob",["de-ind-janein"]],["câu hỏi có/không",["de-ind-janein"]],
 ["wo/wann/was/warum + V cuối",["de-ind-wfrage"]],
 ["sollen + Infinitiv",["de-ind-auff"]],["câu mệnh lệnh tường thuật",["de-ind-auff"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["indirekte-rede"] = { pool: POOL, types: TYPES, game: {title:"Welcher Satztyp?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng loại câu tường thuật",prompt:"Dấu hiệu này thuộc loại nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"indRushBest"} };
})();
