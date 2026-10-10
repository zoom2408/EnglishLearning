/* nb/content/quiz/pronomen.js: practice questions for Pronomen.
   Single exercise type: context sentences, type the correctly
   declined pronoun. Wrong answers can be retried (retry:true). */
(() => {
const BANK = {
 "nb-pron-personlig": [
  {q:"Anna er venninna mi. ___ (hun) kommer fra Hanoi.",hint:"hun",accept:["Hun"],level:"A1",expl:"Chủ ngữ của câu mới: hun giữ nguyên."},
  {q:"Jeg kjenner Thomas godt. Jeg ser ___ (han) hver dag.",hint:"han",accept:["ham"],level:"A1",expl:"Tân ngữ trực tiếp ngôi thứ 3: han → ham."},
  {q:"Kan du hjelpe ___ (jeg)?",hint:"jeg",accept:["meg"],level:"A1",expl:"Tân ngữ: jeg → meg."},
  {q:"Boka tilhører ___ (vi).",hint:"vi",accept:["oss"],level:"A1",expl:"Tân ngữ sau “tilhøre”: vi → oss."},
  {q:"Har dere sett ___ (jeg) i går?",hint:"jeg",accept:["meg"],level:"A1",expl:"Tân ngữ trực tiếp: jeg → meg."},
  {q:"___ (du) kommer for sent igjen.",hint:"du",accept:["Du"],level:"A1",expl:"Chủ ngữ: du giữ nguyên."},
  {q:"Jeg liker ___ (de) godt.",hint:"de",accept:["dem"],level:"A2",expl:"Tân ngữ ngôi thứ 3 số nhiều: de → dem."},
  {q:"___ (vi) skal reise til Bergen.",hint:"vi",accept:["Vi"],level:"A1",expl:"Chủ ngữ số nhiều: vi giữ nguyên."},
  {q:"Hun inviterte ___ (dere) til festen.",hint:"dere",accept:["dere"],level:"A2",expl:"Tân ngữ ngôi thứ hai số nhiều: dere giữ nguyên dạng (chủ ngữ và tân ngữ giống nhau)."},
  {q:"Kan du gi ___ (hun) boka?",hint:"hun",accept:["henne"],level:"A1",expl:"Tân ngữ ngôi thứ 3 số ít giống cái: hun → henne."},
  {q:"___ (den) ligger på bordet.",hint:"den",accept:["Den"],level:"A1",expl:"Chủ ngữ cho vật/con vật hankjønn/hunkjønn: den."},
  {q:"Jeg så ___ (det) i går.",hint:"det",accept:["det"],level:"A1",expl:"Tân ngữ cho vật intetkjønn: det giữ nguyên."},
  {q:"Vi kjenner ___ (han) godt.",hint:"han",accept:["ham"],level:"A1",expl:"Tân ngữ ngôi thứ 3 số ít giống đực: han → ham."},
  {q:"___ (jeg) elsker å reise.",hint:"jeg",accept:["Jeg"],level:"A1",expl:"Chủ ngữ: jeg giữ nguyên."},
  {q:"Læreren ga ___ (vi) mye lekser.",hint:"vi",accept:["oss"],level:"A2",expl:"Tân ngữ số nhiều ngôi thứ nhất: vi → oss."},
  {q:"Hører du ___ (jeg)?",hint:"jeg",accept:["meg"],level:"A1",expl:"Tân ngữ ngôi thứ nhất số ít: jeg → meg."},
  {q:"___ (de) bor i Oslo.",hint:"de",accept:["De"],level:"A1",expl:"Chủ ngữ số nhiều ngôi thứ 3: de giữ nguyên."},
  {q:"Hun snakker med ___ (han) hver dag.",hint:"han",accept:["ham"],level:"A2",expl:"Tân ngữ sau giới từ “med”: han → ham."},
  {q:"Vi ringte til ___ (de) i går.",hint:"de",accept:["dem"],level:"A2",expl:"Tân ngữ sau giới từ “til”: de → dem."},
  {q:"Snakker læreren til ___ (dere) nå?",hint:"dere",accept:["dere"],level:"A2",expl:"Tân ngữ sau giới từ “til”: dere giữ nguyên dạng."},
 ],
 "nb-pron-possessiv": [
  {q:"Dette er ___ (min) bil.",hint:"min",accept:["min"],level:"A1",expl:"Bil là hankjønn, Nominativ: min."},
  {q:"Jeg ringer til ___ (min) søster.",hint:"min",accept:["min"],level:"A1",expl:"Søster là hunkjønn nhưng dùng hệ hai giống phổ biến: min cũng chấp nhận được, hoặc “mi”."},
  {q:"Ser du ___ (din) bror der borte?",hint:"din",accept:["din"],level:"A1",expl:"Bror là hankjønn: din."},
  {q:"Vi besøker ___ (vår) besteforeldre i helgen.",hint:"vår",accept:["våre"],level:"A2",expl:"Besteforeldre là số nhiều: thêm -e → våre."},
  {q:"Dette er ikke ___ (hans) problem.",hint:"hans",accept:["hans"],level:"A1",expl:"Hans không đổi dạng theo giống/số của danh từ."},
  {q:"Dette er ___ (mitt) hus.",hint:"mitt",accept:["mitt"],level:"A1",expl:"Hus là intetkjønn, Nominativ: mitt."},
  {q:"Jeg liker ___ (min) jobb.",hint:"min",accept:["min"],level:"A1",expl:"Jobb là hankjønn: min."},
  {q:"Er dette ___ (din) bok?",hint:"din",accept:["din","di"],level:"A2",expl:"Bok là hunkjønn: dùng “din” (phổ biến) hoặc “di” (hệ 3 giống truyền thống)."},
  {q:"___ (mine) bøker ligger på bordet.",hint:"mine",accept:["Mine"],level:"A2",expl:"Số nhiều (mọi giống): mine."},
  {q:"Er disse ___ (dine) sko?",hint:"dine",accept:["dine"],level:"A2",expl:"Số nhiều (mọi giống): dine."},
  {q:"Dette er ikke ___ (hennes) feil.",hint:"hennes",accept:["hennes"],level:"A1",expl:"Hennes không đổi dạng theo giống/số của danh từ."},
  {q:"___ (deres) hus er stort, ikke sant?",hint:"deres",accept:["Deres"],level:"A2",expl:"Sở hữu ngôi thứ hai số nhiều/lịch sự: deres, không đổi dạng."},
  {q:"Barna liker ___ (deres) lærer veldig godt.",hint:"deres",accept:["deres"],level:"B1",expl:"Sở hữu ngôi thứ ba số nhiều (của họ): deres, không đổi dạng."},
  {q:"Er dette ___ (vårt) problem?",hint:"vårt",accept:["vårt"],level:"A2",expl:"Problem là intetkjønn: vårt."},
  {q:"Vi elsker ___ (våre) barn.",hint:"våre",accept:["våre"],level:"A2",expl:"Số nhiều: thêm -e → våre."},
  {q:"Han kjørte ___ (sin) bil til jobben.",hint:"sin",accept:["sin"],level:"B1",expl:"“sin” phản thân chỉ sở hữu của chính chủ ngữ (han); bil là hankjønn."},
  {q:"Hun elsker ___ (sitt) hus.",hint:"sitt",accept:["sitt"],level:"B1",expl:"“sitt” phản thân (intetkjønn) chỉ sở hữu của chính chủ ngữ (hun)."},
  {q:"De tok med ___ (sine) barn på turen.",hint:"sine",accept:["sine"],level:"B1",expl:"“sine” phản thân số nhiều chỉ sở hữu của chính chủ ngữ (de)."},
  {q:"Petter så at bilen var ___ (hans).",hint:"hans",accept:["hans"],level:"B1",expl:"Chỉ sở hữu của một người khác (không phải chủ ngữ của mệnh đề): dùng hans, không dùng “sin”."},
  {q:"Petter så at Anna tok ___ (hennes) veske.",hint:"hennes",accept:["hennes"],level:"B2",expl:"Chủ ngữ mệnh đề là Petter, không phải Anna, nên không dùng “sin” — phải dùng “hennes” chỉ rõ veske của Anna."},
 ],
 "nb-pron-refleksiv": [
  {q:"Jeg gleder ___ (meg) til ferien.",hint:"meg",accept:["meg"],level:"A1",expl:"“glede seg til” luôn đi với refleksivt pronomen: jeg → meg."},
  {q:"Han kler ___ (seg) raskt om morgenen.",hint:"seg",accept:["seg"],level:"A1",expl:"Ngôi thứ 3 (han) luôn dùng seg."},
  {q:"Vasker du ___ (deg) hver dag?",hint:"deg",accept:["deg"],level:"A1",expl:"“vaske seg”: du → deg."},
  {q:"Interesserer du ___ (deg) for musikk?",hint:"deg",accept:["deg"],level:"A2",expl:"“interessere seg for”: du → deg."},
  {q:"Vi husker ___ (vi) godt fra den dagen.",hint:"vi",accept:["oss"],level:"A2",expl:"Phản thân số nhiều: vi → oss."},
  {q:"Jeg skynder ___ (meg) til jobb hver morgen.",hint:"meg",accept:["meg"],level:"A1",expl:"“skynde seg”: jeg → meg."},
  {q:"Hun setter ___ (seg) ved bordet.",hint:"seg",accept:["seg"],level:"A1",expl:"Ngôi thứ 3 (hun) luôn dùng seg."},
  {q:"Vi legger ___ (oss) klokken ti.",hint:"oss",accept:["oss"],level:"A1",expl:"“legge seg”: vi → oss."},
  {q:"Dere må oppføre ___ (dere) ordentlig.",hint:"dere",accept:["dere"],level:"A2",expl:"Phản thân ngôi thứ hai số nhiều: dere giữ nguyên dạng."},
  {q:"Barna konsentrerer ___ (seg) om leksene.",hint:"seg",accept:["seg"],level:"A2",expl:"Ngôi thứ 3 số nhiều (barna) luôn dùng seg."},
  {q:"Jeg kjeder ___ (meg) på denne filmen.",hint:"meg",accept:["meg"],level:"A1",expl:"“kjede seg”: jeg → meg."},
  {q:"Kler du på ___ (deg) selv om morgenen?",hint:"deg",accept:["deg"],level:"A1",expl:"“kle på seg”: du → deg."},
  {q:"Han undrer ___ (seg) på hva som skjedde.",hint:"seg",accept:["seg"],level:"A2",expl:"Ngôi thứ 3 (han) luôn dùng seg."},
  {q:"Vi morer ___ (oss) veldig godt på festen.",hint:"oss",accept:["oss"],level:"A2",expl:"“more seg”: vi → oss."},
  {q:"Hun forandrer ___ (seg) mye hvert år.",hint:"seg",accept:["seg"],level:"A2",expl:"Ngôi thứ 3 (hun) luôn dùng seg."},
  {q:"Jeg forbereder ___ (meg) til eksamen.",hint:"meg",accept:["meg"],level:"A2",expl:"“forberede seg til”: jeg → meg."},
  {q:"Du må ikke skamme ___ (deg) over det.",hint:"deg",accept:["deg"],level:"B1",expl:"“skamme seg over”: du → deg."},
  {q:"De beklager ___ (seg) for forsinkelsen.",hint:"seg",accept:["seg"],level:"B1",expl:"Ngôi thứ 3 số nhiều (de) luôn dùng seg."},
  {q:"Vi interesserer ___ (oss) for norsk kultur.",hint:"oss",accept:["oss"],level:"A2",expl:"“interessere seg for”: vi → oss."},
  {q:"De skynder ___ (seg) for å nå bussen.",hint:"seg",accept:["seg"],level:"A1",expl:"Ngôi thứ 3 số nhiều (de) luôn dùng seg."},
 ],
};

const TYPES={
 fill:{name:"Fyll inn",desc:"Câu ngữ cảnh, gõ đúng dạng đại từ"},
};
const POOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => POOL.push({
 type:"fill",kind:"input",retry:true,
 prompt:fmt(it.q.replace(/ \(.+?\)/,"")),
 hint:`Gợi ý: <b>${esc(it.hint)}</b>. Gõ đúng dạng đại từ.`,
 accept:it.accept,plain:it.accept[0],ref,level:it.level,expl:it.expl,
})));

const RUSH=[
 ["Chủ ngữ",["nb-pron-personlig"]],["Tân ngữ",["nb-pron-personlig"]],
 ["của tôi/của bạn…",["nb-pron-possessiv"]],["+ hankjønn",["nb-pron-possessiv"]],["+ hunkjønn/intetkjønn/flertall",["nb-pron-possessiv"]],
 ["glede seg / interessere seg",["nb-pron-refleksiv"]],["ngôi thứ 3: seg",["nb-pron-refleksiv"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["pronomen"] = { pool: POOL, types: TYPES, game: {title:"Hvilket pronomen?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng nhóm đại từ",prompt:"Dấu hiệu này thuộc nhóm nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"pronRushBest"} };
})();
