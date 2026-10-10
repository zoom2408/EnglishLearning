/* nb/content/quiz/topikalisering.js: practice questions for
   Topikalisering & Betoning. Single exercise type: build the
   correctly fronted/emphatic sentence. Wrong answers can be retried
   (retry:true). */
(() => {
const BANK = {
 "nb-emph-forfelt": [
  {q:"I går ___ (jeg / lese) boka.",hint:"jeg / lese",accept:["leste jeg"],level:"A2",expl:"“I går” ở vị trí 1, động từ (leste) ở vị trí 2, chủ ngữ (jeg) đẩy xuống sau."},
  {q:"I Oslo ___ (jeg / bo) i tre år.",hint:"jeg / bo",accept:["har jeg bodd"],level:"B1",expl:"“I Oslo” ở vị trí 1, động từ vẫn vị trí 2."},
  {q:"Boka ___ (jeg / lese) i går.",hint:"jeg / lese",accept:["leste jeg"],level:"B1",expl:"Tân ngữ “Boka” ở vị trí 1 để nhấn mạnh, động từ vẫn vị trí 2."},
  {q:"I fjor ___ (vi / besøke) Italia.",hint:"vi / besøke",accept:["besøkte vi"],level:"A2",expl:"Trạng từ thời gian ở vị trí 1, động từ vị trí 2."},
  {q:"Nå ___ (jeg / forstå) hele problemet.",hint:"jeg / forstå",accept:["forstår jeg"],level:"A2",expl:"Trạng từ “nå” ở vị trí 1, động từ vị trí 2."},
  {q:"Senere ___ (hun / fortelle) hele historien.",hint:"hun / fortelle",accept:["fortalte hun"],level:"B1",expl:"Trạng từ thời gian ở vị trí 1, động từ vị trí 2 (fortelle → fortalte)."},
  {q:"Denne boken ___ (jeg / lese) to ganger.",hint:"jeg / lese",accept:["har jeg lest"],level:"B1",expl:"Tân ngữ ở vị trí 1, động từ vẫn vị trí 2."},
  {q:"I morgen ___ (vi / reise) til Bergen.",hint:"vi / reise",accept:["reiser vi"],level:"A2",expl:"Trạng từ thời gian ở vị trí 1, động từ vị trí 2."},
  {q:"Her ___ (han / bo) hele livet.",hint:"han / bo",accept:["har han bodd"],level:"B1",expl:"Trạng từ nơi chốn ở vị trí 1, động từ vị trí 2."},
  {q:"Om sommeren ___ (de / dra) til hytta.",hint:"de / dra",accept:["drar de"],level:"B1",expl:"Trạng từ thời gian ở vị trí 1, động từ vị trí 2."},
  {q:"Dette huset ___ (vi / kjøpe) i fjor.",hint:"vi / kjøpe",accept:["kjøpte vi"],level:"B1",expl:"Tân ngữ ở vị trí 1, động từ vẫn vị trí 2."},
  {q:"Kanskje ___ (hun / komme) senere.",hint:"hun / komme",accept:["kommer hun"],level:"B1",expl:"Trạng từ “kanskje” ở vị trí 1, động từ vị trí 2."},
  {q:"I går kveld ___ (jeg / se) en god film.",hint:"jeg / se",accept:["så jeg"],level:"A2",expl:"Trạng từ thời gian ở vị trí 1, động từ vị trí 2 (se → så)."},
  {q:"Denne sangen ___ (jeg / like) veldig godt.",hint:"jeg / like",accept:["liker jeg"],level:"B1",expl:"Tân ngữ ở vị trí 1, động từ vẫn vị trí 2."},
  {q:"Neste år ___ (de / flytte) til Oslo.",hint:"de / flytte",accept:["flytter de"],level:"A2",expl:"Trạng từ thời gian ở vị trí 1, động từ vị trí 2."},
 ],
 "nb-emph-det": [
  {q:"___ (mange gjester / i dag / komme).",hint:"mange gjester / i dag / komme",accept:["Det kommer mange gjester i dag"],level:"B1",expl:"Không có thành phần nào khác chiếm vị trí 1 nên dùng “det” làm chỗ trống."},
  {q:"___ (en gang / en konge / være).",hint:"en gang / en konge / være",accept:["Det var en gang en konge"],level:"B1",expl:"Mở đầu câu chuyện cổ tích: Det var en gang…"},
  {q:"___ (noen / på døren / banke).",hint:"noen / på døren / banke",accept:["Det banker noen på døren"],level:"B1",expl:"Giới thiệu điều gì mới, chủ ngữ thực (noen) đứng sau động từ."},
  {q:"___ (en kvinne / stå / utenfor huset).",hint:"en kvinne / stå / utenfor huset",accept:["Det står en kvinne utenfor huset"],level:"B1",expl:"Giới thiệu điều mới, dùng “det” làm chỗ trống."},
  {q:"___ (flere problemer / dukke opp / nå).",hint:"flere problemer / dukke opp / nå",accept:["Det dukker opp flere problemer nå"],level:"B2",expl:"Giới thiệu điều mới, dùng “det” làm chỗ trống."},
  {q:"___ (ingen / svare / på telefonen).",hint:"ingen / svare / på telefonen",accept:["Det svarer ingen på telefonen"],level:"B1",expl:"Giới thiệu điều mới, dùng “det” làm chỗ trống."},
  {q:"___ (en hund / bjeffe / ute).",hint:"en hund / bjeffe / ute",accept:["Det bjeffer en hund ute"],level:"B1",expl:"Giới thiệu điều mới, dùng “det” làm chỗ trống."},
  {q:"___ (mange turister / besøke / Norge hvert år).",hint:"mange turister / besøke / Norge hvert år",accept:["Det besøker mange turister Norge hvert år"],level:"B2",expl:"Giới thiệu điều mới, dùng “det” làm chỗ trống."},
  {q:"___ (et problem / oppstå / i går).",hint:"et problem / oppstå / i går",accept:["Det oppstod et problem i går"],level:"B2",expl:"Giới thiệu điều mới, dùng “det” làm chỗ trống."},
  {q:"___ (noen / rope / på gaten).",hint:"noen / rope / på gaten",accept:["Det roper noen på gaten"],level:"B1",expl:"Giới thiệu điều mới, dùng “det” làm chỗ trống."},
  {q:"___ (en gang / en prinsesse / bo / i et slott).",hint:"en gang / en prinsesse / bo / i et slott",accept:["Det bodde en gang en prinsesse i et slott"],level:"B1",expl:"Mở đầu câu chuyện cổ tích: Det bodde en gang…"},
  {q:"___ (flere gjester / komme / sent).",hint:"flere gjester / komme / sent",accept:["Det kom flere gjester sent"],level:"B1",expl:"Giới thiệu điều mới, dùng “det” làm chỗ trống."},
  {q:"___ (regn / falle / hele natten).",hint:"regn / falle / hele natten",accept:["Det falt regn hele natten"],level:"B1",expl:"Giới thiệu điều mới, dùng “det” làm chỗ trống."},
  {q:"___ (et barn / gråte / i naborommet).",hint:"et barn / gråte / i naborommet",accept:["Det gråter et barn i naborommet"],level:"B1",expl:"Giới thiệu điều mới, dùng “det” làm chỗ trống."},
  {q:"___ (mange spørsmål / komme / etter foredraget).",hint:"mange spørsmål / komme / etter foredraget",accept:["Det kom mange spørsmål etter foredraget"],level:"B2",expl:"Giới thiệu điều mới, dùng “det” làm chỗ trống."},
 ],
 "nb-emph-ikkebare": [
  {q:"Ikke bare ___ (han / norsk / lære), men også fransk.",hint:"han / norsk / lære",accept:["lærer han norsk"],level:"B1",expl:"“Ikke bare” ở vị trí 1 nên động từ (lærer) đảo lên ngay sau."},
  {q:"Ikke bare ___ (bedriften / tjene / mer), men også kundene.",hint:"bedriften / tjene / mer",accept:["tjener bedriften mer"],level:"B2",expl:"Đảo ngữ sau “Ikke bare” ở vị trí 1: động từ (tjener) lên trước chủ ngữ."},
  {q:"Ikke bare ___ (hun / synge), men også danse.",hint:"hun / synge",accept:["synger hun"],level:"B1",expl:"Đảo ngữ sau “Ikke bare”: động từ lên trước chủ ngữ."},
  {q:"Ikke bare ___ (vi / spare) penger, men også tid.",hint:"vi / spare",accept:["sparer vi"],level:"B1",expl:"Đảo ngữ sau “Ikke bare”: động từ lên trước chủ ngữ."},
  {q:"Ikke bare ___ (byen / være) stor, men også vakker.",hint:"byen / være",accept:["er byen"],level:"B1",expl:"Đảo ngữ sau “Ikke bare”: động từ lên trước chủ ngữ."},
  {q:"Ikke bare ___ (han / snakke) norsk, men også svensk.",hint:"han / snakke",accept:["snakker han"],level:"B1",expl:"Đảo ngữ sau “Ikke bare”: động từ lên trước chủ ngữ."},
  {q:"Ikke bare ___ (de / vinne) kampen, men også cupen.",hint:"de / vinne",accept:["vant de"],level:"B2",expl:"Đảo ngữ sau “Ikke bare”: động từ lên trước chủ ngữ (vinne → vant)."},
  {q:"Ikke bare ___ (jeg / lese) boken, men også anmeldelsen.",hint:"jeg / lese",accept:["leste jeg"],level:"B1",expl:"Đảo ngữ sau “Ikke bare”: động từ lên trước chủ ngữ."},
  {q:"Ikke bare ___ (hun / lage) maten, men også kaken.",hint:"hun / lage",accept:["lagde hun"],level:"B1",expl:"Đảo ngữ sau “Ikke bare”: động từ lên trước chủ ngữ."},
  {q:"Ikke bare ___ (vi / besøke) museet, men også slottet.",hint:"vi / besøke",accept:["besøkte vi"],level:"B1",expl:"Đảo ngữ sau “Ikke bare”: động từ lên trước chủ ngữ."},
  {q:"Ikke bare ___ (filmen / være) lang, men også kjedelig.",hint:"filmen / være",accept:["var filmen"],level:"B1",expl:"Đảo ngữ sau “Ikke bare”: động từ lên trước chủ ngữ."},
  {q:"Ikke bare ___ (de / studere) medisin, men også jus.",hint:"de / studere",accept:["studerte de"],level:"B2",expl:"Đảo ngữ sau “Ikke bare”: động từ lên trước chủ ngữ."},
  {q:"Ikke bare ___ (han / trene) hver dag, men også spise sunt.",hint:"han / trene",accept:["trener han"],level:"B1",expl:"Đảo ngữ sau “Ikke bare”: động từ lên trước chủ ngữ."},
  {q:"Ikke bare ___ (hun / male) huset, men også taket.",hint:"hun / male",accept:["malte hun"],level:"B1",expl:"Đảo ngữ sau “Ikke bare”: động từ lên trước chủ ngữ."},
  {q:"Ikke bare ___ (vi / møte) kongen, men også statsministeren.",hint:"vi / møte",accept:["møtte vi"],level:"B2",expl:"Đảo ngữ sau “Ikke bare”: động từ lên trước chủ ngữ."},
 ],
 "nb-emph-ikkeingen": [
  {q:"Jeg har ___ (ingen) bil.",hint:"ingen",accept:["ingen"],level:"A2",expl:"Phủ định danh từ không xác định: ingen."},
  {q:"Været er ___ (ikke) fint i dag.",hint:"ikke",accept:["ikke"],level:"A1",expl:"Phủ định tính từ: ikke."},
  {q:"Det er ___ (ingen) god idé.",hint:"ingen",accept:["ingen"],level:"A2",expl:"Phủ định danh từ: ingen."},
  {q:"Jeg liker ___ (ikke) denne filmen.",hint:"ikke",accept:["ikke"],level:"A1",expl:"Phủ định động từ (liker): ikke."},
  {q:"Jeg har ___ (ikke) tid i dag.",hint:"ikke",accept:["ikke"],level:"A1",expl:"Phủ định động từ/trạng từ: ikke."},
  {q:"Det er ___ (ingen) problemer med bilen.",hint:"ingen",accept:["ingen"],level:"A2",expl:"Phủ định danh từ: ingen."},
  {q:"Vi har ___ (ingen) penger igjen.",hint:"ingen",accept:["ingen"],level:"A2",expl:"Phủ định danh từ: ingen."},
  {q:"Han er ___ (ikke) sulten.",hint:"ikke",accept:["ikke"],level:"A1",expl:"Phủ định tính từ: ikke."},
  {q:"Det finnes ___ (ingen) løsning på dette.",hint:"ingen",accept:["ingen"],level:"B1",expl:"Phủ định danh từ: ingen."},
  {q:"Hun spiser ___ (ikke) kjøtt.",hint:"ikke",accept:["ikke"],level:"A1",expl:"Phủ định động từ: ikke."},
  {q:"Vi så ___ (ingen) mennesker på stranden.",hint:"ingen",accept:["ingen"],level:"A2",expl:"Phủ định danh từ: ingen."},
  {q:"Jeg vil ___ (ikke) gå ut i kveld.",hint:"ikke",accept:["ikke"],level:"A1",expl:"Phủ định động từ: ikke."},
  {q:"Det er ___ (ingen) tvil om dette.",hint:"ingen",accept:["ingen"],level:"B1",expl:"Phủ định danh từ: ingen."},
  {q:"Han har ___ (ingen) søsken.",hint:"ingen",accept:["ingen"],level:"A2",expl:"Phủ định danh từ: ingen."},
  {q:"Vi liker ___ (ikke) denne filmen.",hint:"ikke",accept:["ikke"],level:"A1",expl:"Phủ định động từ: ikke."},
 ],
};

const TYPES={
 fill:{name:"Fyll inn",desc:"Câu ngữ cảnh, sắp đúng trật tự từ nhấn mạnh hoặc chọn ikke/ingen"},
};
const POOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => POOL.push({
 type:"fill",kind:"input",retry:true,
 prompt:fmt(it.q.replace(/ \(.+?\)/,"")),
 hint:`Gợi ý: <b>${esc(it.hint)}</b>. Sắp đúng trật tự từ.`,
 accept:it.accept,plain:it.accept[0],ref,level:it.level,expl:it.expl,
})));

const RUSH=[
 ["Trạng từ/tân ngữ + V + S…",["nb-emph-forfelt"]],
 ["Det + V + chủ ngữ thực",["nb-emph-det"]],
 ["Ikke bare…, men også…",["nb-emph-ikkebare"]],
 ["ingen + danh từ",["nb-emph-ikkeingen"]],["ikke + động từ/tính từ",["nb-emph-ikkeingen"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["topikalisering"] = { pool: POOL, types: TYPES, game: {title:"Hvilken struktur?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng cấu trúc nhấn mạnh",prompt:"Dấu hiệu này thuộc cấu trúc nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"emphRushBest"} };
})();
