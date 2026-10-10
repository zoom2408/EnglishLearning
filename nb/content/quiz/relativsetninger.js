/* nb/content/quiz/relativsetninger.js: practice questions for
   Relativsetninger. Single exercise type: build the relative clause.
   Wrong answers can be retried (retry:true). */
(() => {
const BANK = {
 "nb-rel-subjekt": [
  {q:"Mannen, ___ (han / bo her), er læreren min.",hint:"han / bo her",accept:["som bor her"],level:"A2",expl:"“som” làm chủ ngữ, không thể lược bỏ."},
  {q:"Jenta, ___ (hun / le så høyt), er søsteren min.",hint:"hun / le så høyt",accept:["som ler så høyt"],level:"A2",expl:"Chủ ngữ mệnh đề quan hệ: som."},
  {q:"Bilen, ___ (den / stå der), er min.",hint:"den / stå der",accept:["som står der"],level:"A2",expl:"Chủ ngữ: som (bắt buộc)."},
  {q:"Læreren, ___ (hun / undervise oss), er veldig snill.",hint:"hun / undervise oss",accept:["som underviser oss"],level:"A2",expl:"Chủ ngữ mệnh đề quan hệ: som."},
  {q:"Boken, ___ (den / ligge på bordet), er min.",hint:"den / ligge på bordet",accept:["som ligger på bordet"],level:"A2",expl:"Chủ ngữ: som (bắt buộc)."},
  {q:"Hunden, ___ (den / bjeffe mye), tilhører naboen.",hint:"den / bjeffe mye",accept:["som bjeffer mye"],level:"A2",expl:"Chủ ngữ: som (bắt buộc)."},
  {q:"Kvinnen, ___ (hun / bo der), er lærer.",hint:"hun / bo der",accept:["som bor der"],level:"A2",expl:"Chủ ngữ mệnh đề quan hệ: som."},
  {q:"Bilen, ___ (den / stå i gata), er rød.",hint:"den / stå i gata",accept:["som står i gata"],level:"A2",expl:"Chủ ngữ: som (bắt buộc)."},
  {q:"Studenten, ___ (han / studere medisin), er veldig flink.",hint:"han / studere medisin",accept:["som studerer medisin"],level:"B1",expl:"Chủ ngữ mệnh đề quan hệ: som."},
  {q:"Katten, ___ (den / sove hele dagen), heter Findus.",hint:"den / sove hele dagen",accept:["som sover hele dagen"],level:"A2",expl:"Chủ ngữ: som (bắt buộc)."},
  {q:"Mannen, ___ (han / jobbe på sykehuset), er lege.",hint:"han / jobbe på sykehuset",accept:["som jobber på sykehuset"],level:"B1",expl:"Chủ ngữ mệnh đề quan hệ: som."},
  {q:"Filmen, ___ (den / vinne prisen), var veldig bra.",hint:"den / vinne prisen",accept:["som vant prisen"],level:"B1",expl:"Chủ ngữ: som (bắt buộc), vinne → vant."},
  {q:"Jenta, ___ (hun / synge så vakkert), heter Nora.",hint:"hun / synge så vakkert",accept:["som synger så vakkert"],level:"A2",expl:"Chủ ngữ mệnh đề quan hệ: som."},
  {q:"Boken, ___ (den / handle om Norge), er interessant.",hint:"den / handle om Norge",accept:["som handler om Norge"],level:"B1",expl:"Chủ ngữ: som (bắt buộc)."},
  {q:"Læreren, ___ (han / komme fra Bergen), er ny.",hint:"han / komme fra Bergen",accept:["som kommer fra Bergen"],level:"A2",expl:"Chủ ngữ mệnh đề quan hệ: som."},
  {q:"Butikken, ___ (den / ligge i sentrum), er stengt nå.",hint:"den / ligge i sentrum",accept:["som ligger i sentrum"],level:"A2",expl:"Chủ ngữ: som (bắt buộc)."},
  {q:"Forfatteren, ___ (hun / skrive boken), er kjent.",hint:"hun / skrive boken",accept:["som skrev boken"],level:"B1",expl:"Chủ ngữ mệnh đề quan hệ: som, skrive → skrev."},
  {q:"Toget, ___ (det / kjøre til Oslo), er forsinket.",hint:"det / kjøre til Oslo",accept:["som kjører til Oslo"],level:"A2",expl:"Chủ ngữ: som (bắt buộc)."},
  {q:"Gutten, ___ (han / spille fotball), er broren min.",hint:"han / spille fotball",accept:["som spiller fotball"],level:"A2",expl:"Chủ ngữ mệnh đề quan hệ: som."},
  {q:"Huset, ___ (det / ligge ved sjøen), er til salgs.",hint:"det / ligge ved sjøen",accept:["som ligger ved sjøen"],level:"A2",expl:"Chủ ngữ: som (bắt buộc)."},
 ],
 "nb-rel-objekt": [
  {q:"Boka ___ (jeg / lese) er spennende.",hint:"jeg / lese",accept:["som jeg leser","jeg leser"],level:"A2",expl:"Tân ngữ: som có thể lược bỏ."},
  {q:"Filmen ___ (vi / se) i går, var bra.",hint:"vi / se",accept:["som vi så","vi så"],level:"A2",expl:"Tân ngữ (quá khứ): som có thể lược bỏ."},
  {q:"Mannen ___ (jeg / møte) på festen, var hyggelig.",hint:"jeg / møte",accept:["som jeg møtte","jeg møtte"],level:"B1",expl:"Tân ngữ: som (hoặc lược bỏ) + jeg møtte."},
  {q:"Maten ___ (vi / lage) var god.",hint:"vi / lage",accept:["som vi laget","vi laget"],level:"A2",expl:"Tân ngữ: som có thể lược bỏ."},
  {q:"Huset ___ (de / kjøpe) er stort.",hint:"de / kjøpe",accept:["som de kjøpte","de kjøpte"],level:"A2",expl:"Tân ngữ: som có thể lược bỏ."},
  {q:"Boken ___ (hun / skrive) ble en bestselger.",hint:"hun / skrive",accept:["som hun skrev","hun skrev"],level:"B1",expl:"Tân ngữ: som có thể lược bỏ, skrive → skrev."},
  {q:"Bilen ___ (han / selge) var gammel.",hint:"han / selge",accept:["som han solgte","han solgte"],level:"B1",expl:"Tân ngữ: som có thể lược bỏ, selge → solgte."},
  {q:"Sangen ___ (de / synge) var vakker.",hint:"de / synge",accept:["som de sang","de sang"],level:"B1",expl:"Tân ngữ: som có thể lược bỏ, synge → sang."},
  {q:"Jobben ___ (jeg / søke på) var interessant.",hint:"jeg / søke på",accept:["som jeg søkte på","jeg søkte på"],level:"B1",expl:"Tân ngữ: som có thể lược bỏ."},
  {q:"Personen ___ (vi / møte) var veldig hyggelig.",hint:"vi / møte",accept:["som vi møtte","vi møtte"],level:"A2",expl:"Tân ngữ: som có thể lược bỏ."},
  {q:"Oppgaven ___ (hun / løse) var vanskelig.",hint:"hun / løse",accept:["som hun løste","hun løste"],level:"B1",expl:"Tân ngữ: som có thể lược bỏ."},
  {q:"Brevet ___ (han / sende) kom frem i dag.",hint:"han / sende",accept:["som han sendte","han sendte"],level:"B1",expl:"Tân ngữ: som có thể lược bỏ."},
  {q:"Gaven ___ (de / gi meg) var fin.",hint:"de / gi meg",accept:["som de gav meg","de gav meg"],level:"B1",expl:"Tân ngữ: som có thể lược bỏ, gi → gav."},
  {q:"Prisen ___ (vi / betale) var høy.",hint:"vi / betale",accept:["som vi betalte","vi betalte"],level:"A2",expl:"Tân ngữ: som có thể lược bỏ."},
  {q:"Rommet ___ (hun / rydde) ser rent ut nå.",hint:"hun / rydde",accept:["som hun ryddet","hun ryddet"],level:"A2",expl:"Tân ngữ: som có thể lược bỏ."},
  {q:"Maleriet ___ (han / male) hang på veggen.",hint:"han / male",accept:["som han malte","han malte"],level:"B1",expl:"Tân ngữ: som có thể lược bỏ."},
  {q:"Historien ___ (de / fortelle) var spennende.",hint:"de / fortelle",accept:["som de fortalte","de fortalte"],level:"B1",expl:"Tân ngữ: som có thể lược bỏ, fortelle → fortalte."},
  {q:"Spørsmålet ___ (jeg / stille) fikk ikke svar.",hint:"jeg / stille",accept:["som jeg stilte","jeg stilte"],level:"B1",expl:"Tân ngữ: som có thể lược bỏ."},
  {q:"Planen ___ (vi / lage) fungerte bra.",hint:"vi / lage",accept:["som vi laget","vi laget"],level:"A2",expl:"Tân ngữ: som có thể lược bỏ."},
  {q:"Kaken ___ (hun / bake) smakte fantastisk.",hint:"hun / bake",accept:["som hun bakte","hun bakte"],level:"A2",expl:"Tân ngữ: som có thể lược bỏ."},
 ],
 "nb-rel-dershvis": [
  {q:"Byen ___ (der) jeg bor, er fin.",hint:"der",accept:["der"],level:"B1",expl:"Nơi chốn: der."},
  {q:"Huset ___ (der) jeg vokste opp, er solgt nå.",hint:"der",accept:["der"],level:"B1",expl:"Nơi chốn: der."},
  {q:"Forfatteren ___ (hvis) bok vi leser, er norsk.",hint:"hvis",accept:["hvis"],level:"B2",expl:"Sở hữu trang trọng: hvis."},
  {q:"Stedet ___ (der) vi møttes, er nå en park.",hint:"der",accept:["der"],level:"B1",expl:"Nơi chốn: der."},
  {q:"Skolen ___ (der) jeg gikk, er stengt nå.",hint:"der",accept:["der"],level:"B1",expl:"Nơi chốn: der."},
  {q:"Landsbyen ___ (der) han ble født, er langt borte.",hint:"der",accept:["der"],level:"B1",expl:"Nơi chốn: der."},
  {q:"Huset ___ (der) de bor, er veldig gammelt.",hint:"der",accept:["der"],level:"B1",expl:"Nơi chốn: der."},
  {q:"Byen ___ (der) vi bodde, var liten.",hint:"der",accept:["der"],level:"B1",expl:"Nơi chốn: der."},
  {q:"Mannen ___ (hvis) bil ble stjålet, ringte politiet.",hint:"hvis",accept:["hvis"],level:"B2",expl:"Sở hữu trang trọng: hvis."},
  {q:"Kvinnen ___ (hvis) datter studerer i Oslo, er lærer.",hint:"hvis",accept:["hvis"],level:"B2",expl:"Sở hữu trang trọng: hvis."},
  {q:"Forfatteren ___ (hvis) bøker jeg elsker, bor i Bergen.",hint:"hvis",accept:["hvis"],level:"B2",expl:"Sở hữu trang trọng: hvis."},
  {q:"Familien ___ (hvis) hus brant ned, fikk hjelp fra naboene.",hint:"hvis",accept:["hvis"],level:"B2",expl:"Sở hữu trang trọng: hvis."},
  {q:"Stedet ___ (der) festivalen holdes, er i sentrum.",hint:"der",accept:["der"],level:"B1",expl:"Nơi chốn: der."},
  {q:"Rommet ___ (der) jeg sover, er lite men koselig.",hint:"der",accept:["der"],level:"B1",expl:"Nơi chốn: der."},
  {q:"Gutten ___ (hvis) far er lærer, går i min klasse.",hint:"hvis",accept:["hvis"],level:"B2",expl:"Sở hữu trang trọng: hvis."},
  {q:"Hytta ___ (der) vi var i helgen, ligger i fjellet.",hint:"der",accept:["der"],level:"B1",expl:"Nơi chốn: der."},
  {q:"Firmaet ___ (hvis) produkter er populære, ligger i Trondheim.",hint:"hvis",accept:["hvis"],level:"B2",expl:"Sở hữu trang trọng: hvis."},
  {q:"Parken ___ (der) barna leker, er stor.",hint:"der",accept:["der"],level:"B1",expl:"Nơi chốn: der."},
  {q:"Studenten ___ (hvis) oppgave vant prisen, er veldig flink.",hint:"hvis",accept:["hvis"],level:"B2",expl:"Sở hữu trang trọng: hvis."},
  {q:"Kafeen ___ (der) vi drikker kaffe, er ny.",hint:"der",accept:["der"],level:"B1",expl:"Nơi chốn: der."},
 ],
};

const TYPES={
 fill:{name:"Fyll inn",desc:"Câu ngữ cảnh, gõ đúng đại từ quan hệ"},
};
const POOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => POOL.push({
 type:"fill",kind:"input",retry:true,
 prompt:fmt(it.q.replace(/ \(.+?\)/,"")),
 hint:`Gợi ý: <b>${esc(it.hint)}</b>. Gõ đúng đại từ quan hệ (hoặc lược bỏ nếu có thể).`,
 accept:it.accept,plain:it.accept[0],ref,level:it.level,expl:it.expl,
})));

const RUSH=[
 ["som làm chủ ngữ (bắt buộc)",["nb-rel-subjekt"]],
 ["som làm tân ngữ (có thể bỏ)",["nb-rel-objekt"]],
 ["der (nơi chốn)",["nb-rel-dershvis"]],["hvis (sở hữu)",["nb-rel-dershvis"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["relativsetninger"] = { pool: POOL, types: TYPES, game: {title:"Hvilken relativpronomen?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng loại",prompt:"Dấu hiệu này thuộc loại nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"relRushBest"} };
})();
