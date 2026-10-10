/* nb/content/quiz/indirekte-tale.js: practice questions for
   Indirekte tale. Single exercise type: transform direct speech into
   reported speech. Wrong answers can be retried (retry:true). */
(() => {
const BANK = {
 "nb-ind-paastand": [
  {q:"Hun sa: „Jeg er trøtt.“ → Hun sa at hun ___ (være) trøtt.",hint:"være",accept:["var"],level:"B1",expl:"Lùi thì: er → var (vì “sa” ở quá khứ)."},
  {q:"Han sa: „Jeg har ikke tid.“ → Han sa at han ___ (ha) ikke tid.",hint:"ha",accept:["hadde"],level:"B1",expl:"Lùi thì: har → hadde."},
  {q:"De sa: „Vi kommer snart.“ → De sa at de ___ (komme) snart.",hint:"komme",accept:["kom"],level:"B1",expl:"Lùi thì: kommer → kom."},
  {q:"Hun sa: „Jeg skal reise til Spania.“ → Hun sa at hun ___ (skulle) reise til Spania.",hint:"skulle",accept:["skulle"],level:"B1",expl:"Lùi thì: skal → skulle."},
  {q:"Han sa: „Jeg vil hjelpe deg.“ → Han sa at han ___ (ville) hjelpe meg.",hint:"ville",accept:["ville"],level:"B1",expl:"Lùi thì: vil → ville."},
  {q:"De sa: „Vi har sett filmen.“ → De sa at de ___ (hadde) sett filmen.",hint:"hadde",accept:["hadde"],level:"B1",expl:"Lùi thì: har sett → hadde sett."},
  {q:"Hun sa: „Jeg kan ikke komme.“ → Hun sa at hun ___ (kunne) ikke komme.",hint:"kunne",accept:["kunne"],level:"B1",expl:"Lùi thì: kan → kunne."},
  {q:"Han sa: „Jeg jobber hjemmefra.“ → Han sa at han ___ (jobbe) hjemmefra.",hint:"jobbe",accept:["jobbet"],level:"B1",expl:"Lùi thì: jobber → jobbet."},
  {q:"De sa: „Vi bor sammen.“ → De sa at de ___ (bo) sammen.",hint:"bo",accept:["bodde"],level:"B1",expl:"Lùi thì: bor → bodde."},
  {q:"Hun sa: „Jeg forstår ikke.“ → Hun sa at hun ikke ___ (forstå).",hint:"forstå",accept:["forsto"],level:"B1",expl:"Lùi thì: forstår → forsto."},
  {q:"Han sa: „Jeg har mye å gjøre.“ → Han sa at han ___ (ha) mye å gjøre.",hint:"ha",accept:["hadde"],level:"B1",expl:"Lùi thì: har → hadde."},
  {q:"Hun sa: „Jeg trenger hjelp.“ → Hun sa at hun ___ (trenge) hjelp.",hint:"trenge",accept:["trengte"],level:"B1",expl:"Lùi thì: trenger → trengte."},
  {q:"Han sa: „Jeg liker denne byen.“ → Han sa at han ___ (like) byen.",hint:"like",accept:["likte"],level:"B1",expl:"Lùi thì: liker → likte."},
  {q:"De sa: „Vi er ferdige.“ → De sa at de ___ (være) ferdige.",hint:"være",accept:["var"],level:"B1",expl:"Lùi thì: er → var."},
  {q:"Hun sa: „Jeg vet ikke.“ → Hun sa at hun ikke ___ (vite).",hint:"vite",accept:["visste"],level:"B1",expl:"Lùi thì: vet → visste."},
 ],
 "nb-ind-janei": [
  {q:"Hun spurte: „Kommer du i morgen?“ → Hun spurte ___ (jeg / komme) neste dag.",hint:"jeg / komme",accept:["om jeg kom"],level:"B1",expl:"Câu hỏi có/không dùng om + lùi thì + đổi “i morgen”→“neste dag”."},
  {q:"Han spurte: „Har du tid?“ → Han spurte ___ (jeg / ha) tid.",hint:"jeg / ha",accept:["om jeg hadde"],level:"B1",expl:"om + S + V (lùi thì)."},
  {q:"Hun spurte: „Er du sulten?“ → Hun spurte ___ (jeg / være) sulten.",hint:"jeg / være",accept:["om jeg var"],level:"B1",expl:"om + S + V (lùi thì)."},
  {q:"Han spurte: „Bor du her?“ → Han spurte ___ (jeg / bo) her.",hint:"jeg / bo",accept:["om jeg bodde"],level:"B1",expl:"om + S + V (lùi thì)."},
  {q:"De spurte: „Kommer dere i morgen?“ → De spurte ___ (vi / komme) neste dag.",hint:"vi / komme",accept:["om vi kom"],level:"B1",expl:"om + S + V (lùi thì) + đổi “i morgen”→“neste dag”."},
  {q:"Hun spurte: „Liker du filmen?“ → Hun spurte ___ (jeg / like) filmen.",hint:"jeg / like",accept:["om jeg likte"],level:"B1",expl:"om + S + V (lùi thì)."},
  {q:"Han spurte: „Kan du hjelpe meg?“ → Han spurte ___ (jeg / kunne) hjelpe ham.",hint:"jeg / kunne",accept:["om jeg kunne"],level:"B1",expl:"om + S + V (lùi thì)."},
  {q:"De spurte: „Har dere tid?“ → De spurte ___ (vi / ha) tid.",hint:"vi / ha",accept:["om vi hadde"],level:"B1",expl:"om + S + V (lùi thì)."},
  {q:"Hun spurte: „Skal du reise?“ → Hun spurte ___ (jeg / skulle) reise.",hint:"jeg / skulle",accept:["om jeg skulle"],level:"B1",expl:"om + S + V (lùi thì)."},
  {q:"Han spurte: „Vil du ha kaffe?“ → Han spurte ___ (jeg / ville) ha kaffe.",hint:"jeg / ville",accept:["om jeg ville"],level:"B1",expl:"om + S + V (lùi thì)."},
  {q:"De spurte: „Bor dere i Norge?“ → De spurte ___ (vi / bo) i Norge.",hint:"vi / bo",accept:["om vi bodde"],level:"B1",expl:"om + S + V (lùi thì)."},
  {q:"Hun spurte: „Jobber du mye?“ → Hun spurte ___ (jeg / jobbe) mye.",hint:"jeg / jobbe",accept:["om jeg jobbet"],level:"B1",expl:"om + S + V (lùi thì)."},
  {q:"Han spurte: „Snakker du norsk?“ → Han spurte ___ (jeg / snakke) norsk.",hint:"jeg / snakke",accept:["om jeg snakket"],level:"B1",expl:"om + S + V (lùi thì)."},
  {q:"Han spurte: „Er dere ferdige?“ → Han spurte ___ (vi / være) ferdige.",hint:"vi / være",accept:["om vi var"],level:"B1",expl:"om + S + V (lùi thì)."},
  {q:"Hun spurte: „Kommer han også?“ → Hun spurte ___ (han / komme) også.",hint:"han / komme",accept:["om han kom"],level:"B1",expl:"om + S + V (lùi thì)."},
 ],
 "nb-ind-hvsporsmaal": [
  {q:"Han spurte: „Hvor bor du?“ → Han spurte ___ (jeg / bo).",hint:"jeg / bo",accept:["hvor jeg bodde"],level:"B1",expl:"Giữ từ để hỏi (hvor), lùi thì: bor → bodde."},
  {q:"Hun spurte: „Hvorfor kommer du for sent?“ → Hun spurte ___ (jeg / komme) for sent.",hint:"jeg / komme",accept:["hvorfor jeg kom"],level:"B1",expl:"Giữ từ để hỏi (hvorfor), lùi thì: kommer → kom."},
  {q:"Han spurte: „Hva heter du?“ → Han spurte ___ (jeg / hete).",hint:"jeg / hete",accept:["hva jeg het"],level:"B1",expl:"Giữ từ để hỏi (hva), lùi thì: heter → het."},
  {q:"Hun spurte: „Når kommer du?“ → Hun spurte ___ (jeg / komme).",hint:"jeg / komme",accept:["når jeg kom"],level:"B1",expl:"Giữ từ để hỏi (når), lùi thì: kommer → kom."},
  {q:"De spurte: „Hvem er han?“ → De spurte ___ (han / være).",hint:"han / være",accept:["hvem han var"],level:"B1",expl:"Giữ từ để hỏi (hvem), lùi thì: er → var."},
  {q:"Han spurte: „Hva gjør du?“ → Han spurte ___ (jeg / gjøre).",hint:"jeg / gjøre",accept:["hva jeg gjorde"],level:"B1",expl:"Giữ từ để hỏi (hva), lùi thì: gjør → gjorde."},
  {q:"Hun spurte: „Hvordan går det?“ → Hun spurte ___ (det / gå).",hint:"det / gå",accept:["hvordan det gikk"],level:"B1",expl:"Giữ từ để hỏi (hvordan), lùi thì: går → gikk."},
  {q:"De spurte: „Hvor jobber du?“ → De spurte ___ (jeg / jobbe).",hint:"jeg / jobbe",accept:["hvor jeg jobbet"],level:"B1",expl:"Giữ từ để hỏi (hvor), lùi thì: jobber → jobbet."},
  {q:"Han spurte: „Hvorfor er du sen?“ → Han spurte ___ (jeg / være) sen.",hint:"jeg / være",accept:["hvorfor jeg var"],level:"B1",expl:"Giữ từ để hỏi (hvorfor), lùi thì: er → var."},
  {q:"Hun spurte: „Hvem bor her?“ → Hun spurte ___ (hvem / bo) her.",hint:"hvem / bo",accept:["hvem som bodde"],level:"B2",expl:"Khi hvem là chủ ngữ của câu hỏi, phải thêm “som”: hvem som bodde."},
  {q:"De spurte: „Hva skjedde?“ → De spurte ___ (hva / skje).",hint:"hva / skje",accept:["hva som skjedde"],level:"B2",expl:"Khi hva là chủ ngữ của câu hỏi, phải thêm “som”: hva som skjedde."},
  {q:"Hun spurte: „Hvor lenge har du bodd her?“ → Hun spurte ___ (jeg / ha) bodd her.",hint:"jeg / ha",accept:["hvor lenge jeg hadde"],level:"B2",expl:"Giữ từ để hỏi (hvor lenge), lùi thì: har → hadde."},
  {q:"Han spurte: „Hvordan fant du oss?“ → Han spurte ___ (jeg / finne) dem.",hint:"jeg / finne",accept:["hvordan jeg fant"],level:"B1",expl:"Giữ từ để hỏi (hvordan), lùi thì: finner → fant."},
  {q:"Hun spurte: „Hva heter byen?“ → Hun spurte ___ (byen / hete).",hint:"byen / hete",accept:["hva byen het"],level:"B1",expl:"Giữ từ để hỏi (hva), lùi thì: heter → het."},
  {q:"Han spurte: „Hvilken dag passer deg?“ → Han spurte ___ (hvilken dag / passe) meg.",hint:"hvilken dag / passe",accept:["hvilken dag som passet"],level:"B2",expl:"Khi cụm hỏi (hvilken dag) là chủ ngữ, phải thêm “som”: hvilken dag som passet."},
 ],
 "nb-ind-oppfordring": [
  {q:"Læreren sa: „Gjør leksene!“ → Læreren sa at vi ___ (gjøre) leksene.",hint:"gjøre",accept:["skulle gjøre"],level:"B1",expl:"Câu mệnh lệnh tường thuật: skulle + infinitiv."},
  {q:"Moren sa: „Vær stille!“ → Moren sa at barna ___ (være) stille.",hint:"være",accept:["skulle være"],level:"B1",expl:"skulle + infinitiv (være)."},
  {q:"Hun sa: „Kom hit!“ → Hun sa at jeg ___ (komme) dit.",hint:"komme",accept:["skulle komme"],level:"B1",expl:"Câu mệnh lệnh tường thuật: skulle + infinitiv."},
  {q:"Sjefen sa: „Send rapporten!“ → Sjefen sa at jeg ___ (sende) rapporten.",hint:"sende",accept:["skulle sende"],level:"B1",expl:"Câu mệnh lệnh tường thuật: skulle + infinitiv."},
  {q:"Moren sa: „Rydd rommet ditt!“ → Moren sa at jeg ___ (rydde) rommet mitt.",hint:"rydde",accept:["skulle rydde"],level:"B1",expl:"Câu mệnh lệnh tường thuật: skulle + infinitiv."},
  {q:"Treneren sa: „Løp fortere!“ → Treneren sa at vi ___ (løpe) fortere.",hint:"løpe",accept:["skulle løpe"],level:"B1",expl:"Câu mệnh lệnh tường thuật: skulle + infinitiv."},
  {q:"Læreren sa: „Lytt godt!“ → Læreren sa at vi ___ (lytte) godt.",hint:"lytte",accept:["skulle lytte"],level:"B1",expl:"Câu mệnh lệnh tường thuật: skulle + infinitiv."},
  {q:"Hun sa: „Vent her!“ → Hun sa at jeg ___ (vente) der.",hint:"vente",accept:["skulle vente"],level:"B1",expl:"Câu mệnh lệnh tường thuật: skulle + infinitiv."},
  {q:"Sjefen sa: „Ikke kom sent!“ → Sjefen sa at jeg ___ (ikke / komme) sent.",hint:"ikke / komme",accept:["ikke skulle komme"],level:"B2",expl:"Câu mệnh lệnh phủ định tường thuật: ikke skulle + infinitiv."},
  {q:"Moren sa: „Spis opp maten!“ → Moren sa at barna ___ (spise) opp maten.",hint:"spise",accept:["skulle spise"],level:"B1",expl:"Câu mệnh lệnh tường thuật: skulle + infinitiv."},
  {q:"Læreren sa: „Lever oppgaven i morgen!“ → Læreren sa at vi ___ (levere) oppgaven neste dag.",hint:"levere",accept:["skulle levere"],level:"B2",expl:"Câu mệnh lệnh tường thuật: skulle + infinitiv, đổi “i morgen”→“neste dag”."},
  {q:"Hun sa: „Ring meg senere!“ → Hun sa at jeg ___ (ringe) henne senere.",hint:"ringe",accept:["skulle ringe"],level:"B1",expl:"Câu mệnh lệnh tường thuật: skulle + infinitiv."},
  {q:"Treneren sa: „Øv mer!“ → Treneren sa at de ___ (øve) mer.",hint:"øve",accept:["skulle øve"],level:"B1",expl:"Câu mệnh lệnh tường thuật: skulle + infinitiv."},
  {q:"Hun sa: „Møt opp i tide!“ → Hun sa at vi ___ (møte) opp i tide.",hint:"møte",accept:["skulle møte"],level:"B1",expl:"Câu mệnh lệnh tường thuật: skulle + infinitiv."},
  {q:"Læreren sa: „Ikke snakk i timen!“ → Læreren sa at vi ___ (ikke / snakke) i timen.",hint:"ikke / snakke",accept:["ikke skulle snakke"],level:"B2",expl:"Câu mệnh lệnh phủ định tường thuật: ikke skulle + infinitiv."},
 ],
};

const TYPES={
 fill:{name:"Fyll inn",desc:"Chuyển câu trực tiếp sang câu tường thuật"},
};
const POOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => POOL.push({
 type:"fill",kind:"input",retry:true,
 prompt:fmt(it.q.replace(/ \(.+?\)/,"")),
 hint:`Gợi ý: <b>${esc(it.hint)}</b>. Gõ đúng dạng tường thuật.`,
 accept:it.accept,plain:it.accept[0],ref,level:it.level,expl:it.expl,
})));

const RUSH=[
 ["at + lùi thì",["nb-ind-paastand"]],
 ["om",["nb-ind-janei"]],["câu hỏi có/không",["nb-ind-janei"]],
 ["hvor/når/hva/hvorfor + lùi thì",["nb-ind-hvsporsmaal"]],
 ["skulle + infinitiv",["nb-ind-oppfordring"]],["câu mệnh lệnh tường thuật",["nb-ind-oppfordring"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["indirekte-tale"] = { pool: POOL, types: TYPES, game: {title:"Hvilken setningstype?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng loại câu tường thuật",prompt:"Dấu hiệu này thuộc loại nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"indRushBest"} };
})();
