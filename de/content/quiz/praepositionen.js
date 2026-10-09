/* de/content/quiz/praepositionen.js: practice questions for
   Präpositionen. BANK groups items by row id (sub-topic). Single
   exercise type: context sentences, type the correctly declined noun
   phrase. Wrong answers can be retried (retry:true). */
(() => {
const BANK = {
 "de-prep-akk": [
  {q:"Das Geschenk ist für ___ (mein Bruder).",hint:"mein Bruder",accept:["meinen Bruder"],level:"A1",expl:"für luôn đòi Akkusativ; giống đực: mein → meinen."},
  {q:"Wir laufen durch ___ (der Park).",hint:"der Park",accept:["den Park"],level:"A1",expl:"durch luôn đòi Akkusativ; giống đực: der → den."},
  {q:"Ich komme ohne ___ (meine Schwester).",hint:"meine Schwester",accept:["meine Schwester"],level:"A1",expl:"ohne đòi Akkusativ; giống cái không đổi dạng."},
  {q:"Sie bleibt bis ___ (nächste Woche) hier.",hint:"nächste Woche",accept:["nächste Woche"],level:"A2",expl:"bis đòi Akkusativ; giống cái/thời gian không đổi dạng."},
  {q:"Das ist ein Geschenk für ___ (meine Mutter).",hint:"meine Mutter",accept:["meine Mutter"],level:"A1",expl:"für đòi Akkusativ; giống cái không đổi dạng."},
  {q:"Wir gehen durch ___ (der Wald) spazieren.",hint:"der Wald",accept:["den Wald"],level:"A2",expl:"durch đòi Akkusativ; giống đực: der → den."},
  {q:"Ich kann nicht ohne ___ (mein Handy) leben.",hint:"mein Handy",accept:["mein Handy"],level:"A2",expl:"ohne đòi Akkusativ; giống trung không đổi dạng."},
  {q:"Er ist gegen ___ (der Plan) der Regierung.",hint:"der Plan",accept:["den Plan"],level:"B1",expl:"gegen đòi Akkusativ; giống đực: der → den."},
  {q:"Wir treffen uns um ___ (der Tisch) herum.",hint:"der Tisch",accept:["den Tisch"],level:"A2",expl:"um đòi Akkusativ; giống đực: der → den."},
  {q:"Der Zug fährt bis ___ (die Endstation).",hint:"die Endstation",accept:["die Endstation"],level:"A2",expl:"bis đòi Akkusativ; giống cái không đổi dạng."},
  {q:"Sie läuft den Fluss ___ (entlang).",hint:"entlang",accept:["entlang"],level:"B1",expl:"entlang đòi Akkusativ, thường đứng sau danh từ."},
  {q:"Das Paket ist für ___ (die Nachbarin).",hint:"die Nachbarin",accept:["die Nachbarin"],level:"A1",expl:"für đòi Akkusativ; giống cái không đổi dạng."},
  {q:"Wir fahren durch ___ (die Stadt), um Zeit zu sparen.",hint:"die Stadt",accept:["die Stadt"],level:"A2",expl:"durch đòi Akkusativ; giống cái không đổi dạng."},
  {q:"Ohne ___ (ein Regenschirm) werde ich nass.",hint:"ein Regenschirm",accept:["einen Regenschirm"],level:"A2",expl:"ohne đòi Akkusativ; giống đực: ein → einen."},
  {q:"Die Mannschaft spielt gegen ___ (der Gegner) aus Berlin.",hint:"der Gegner",accept:["den Gegner"],level:"B1",expl:"gegen đòi Akkusativ; giống đực: der → den."},
 ],
 "de-prep-dat": [
  {q:"Wir fahren mit ___ (der Zug) nach München.",hint:"der Zug",accept:["dem Zug"],level:"A1",expl:"mit luôn đòi Dativ; giống đực: der → dem."},
  {q:"Nach ___ (die Arbeit) gehe ich ins Fitnessstudio.",hint:"die Arbeit",accept:["der Arbeit"],level:"A1",expl:"nach đòi Dativ; giống cái: die → der."},
  {q:"Ich wohne bei ___ (meine Eltern).",hint:"meine Eltern",accept:["meinen Eltern"],level:"A1",expl:"bei đòi Dativ; số nhiều thêm -n: meine → meinen Eltern."},
  {q:"Das Geschenk ist von ___ (mein Freund).",hint:"mein Freund",accept:["meinem Freund"],level:"A1",expl:"von đòi Dativ; giống đực: mein → meinem."},
  {q:"Ich komme aus ___ (die Schweiz).",hint:"die Schweiz",accept:["der Schweiz"],level:"A1",expl:"aus đòi Dativ; giống cái: die → der."},
  {q:"Wir gehen zu ___ (der Arzt).",hint:"der Arzt",accept:["dem Arzt"],level:"A1",expl:"zu đòi Dativ; giống đực: der → dem."},
  {q:"Sie wohnt seit ___ (ein Jahr) in Berlin.",hint:"ein Jahr",accept:["einem Jahr"],level:"A2",expl:"seit đòi Dativ; giống trung: ein → einem."},
  {q:"Außer ___ (ich) war niemand pünktlich.",hint:"ich",accept:["mir"],level:"B1",expl:"außer đòi Dativ; ich → mir."},
  {q:"Das Café liegt gegenüber ___ (die Kirche).",hint:"die Kirche",accept:["der Kirche"],level:"B1",expl:"gegenüber đòi Dativ; giống cái: die → der."},
  {q:"Ich erzähle von ___ (meine Reise).",hint:"meine Reise",accept:["meiner Reise"],level:"A2",expl:"von đòi Dativ; giống cái: meine → meiner."},
  {q:"Nach ___ (das Essen) gehen wir spazieren.",hint:"das Essen",accept:["dem Essen"],level:"A1",expl:"nach đòi Dativ; giống trung: das → dem."},
  {q:"Sie kommt gerade von ___ (die Arbeit).",hint:"die Arbeit",accept:["der Arbeit"],level:"A1",expl:"von đòi Dativ; giống cái: die → der."},
  {q:"Wir fahren mit ___ (das Fahrrad) zur Schule.",hint:"das Fahrrad",accept:["dem Fahrrad"],level:"A1",expl:"mit đòi Dativ; giống trung: das → dem."},
  {q:"Das Geschäft ist bei ___ (der Bahnhof).",hint:"der Bahnhof",accept:["dem Bahnhof"],level:"A2",expl:"bei đòi Dativ; giống đực: der → dem."},
  {q:"Außer ___ (die Kinder) waren alle da.",hint:"die Kinder",accept:["den Kindern"],level:"B1",expl:"außer đòi Dativ; số nhiều thêm -n: die Kinder → den Kindern."},
 ],
 "de-prep-wechsel": [
  {q:"Ich lege das Buch in ___ (die Tasche).",hint:"die Tasche",accept:["die Tasche"],level:"A2",expl:"Chuyển động có đích đến (Wohin?): Akkusativ, die không đổi (feminin)."},
  {q:"Das Buch liegt in ___ (die Tasche).",hint:"die Tasche",accept:["der Tasche"],level:"A2",expl:"Vị trí tĩnh (Wo?): Dativ, giống cái die → der."},
  {q:"Er hängt das Bild an ___ (die Wand).",hint:"die Wand",accept:["die Wand"],level:"A2",expl:"Chuyển động (hängen = treo lên): Wohin? → Akkusativ."},
  {q:"Das Bild hängt an ___ (die Wand).",hint:"die Wand",accept:["der Wand"],level:"A2",expl:"Vị trí tĩnh (đã treo sẵn): Wo? → Dativ."},
  {q:"Ich stelle die Vase auf ___ (der Tisch).",hint:"der Tisch",accept:["den Tisch"],level:"A2",expl:"Chuyển động (stellen = đặt lên): Wohin? → Akkusativ."},
  {q:"Die Vase steht auf ___ (der Tisch).",hint:"der Tisch",accept:["dem Tisch"],level:"A2",expl:"Vị trí tĩnh (stehen = đang đứng/đặt sẵn): Wo? → Dativ."},
  {q:"Die Katze springt auf ___ (das Sofa).",hint:"das Sofa",accept:["das Sofa"],level:"A2",expl:"Chuyển động (springen = nhảy lên): Wohin? → Akkusativ."},
  {q:"Die Katze sitzt auf ___ (das Sofa).",hint:"das Sofa",accept:["dem Sofa"],level:"A2",expl:"Vị trí tĩnh (sitzen = đang ngồi): Wo? → Dativ."},
  {q:"Wir gehen in ___ (das Kino).",hint:"das Kino",accept:["das Kino"],level:"A1",expl:"Chuyển động (gehen): Wohin? → Akkusativ."},
  {q:"Wir sind in ___ (das Kino).",hint:"das Kino",accept:["dem Kino"],level:"A1",expl:"Vị trí tĩnh (sein): Wo? → Dativ."},
  {q:"Er setzt sich neben ___ (seine Freundin).",hint:"seine Freundin",accept:["seine Freundin"],level:"B1",expl:"Chuyển động (sich setzen = ngồi xuống): Wohin? → Akkusativ."},
  {q:"Er sitzt neben ___ (seine Freundin).",hint:"seine Freundin",accept:["seiner Freundin"],level:"B1",expl:"Vị trí tĩnh (sitzen): Wo? → Dativ."},
  {q:"Das Flugzeug fliegt über ___ (die Stadt).",hint:"die Stadt",accept:["die Stadt"],level:"B1",expl:"Chuyển động (fliegen qua): Wohin? → Akkusativ."},
  {q:"Die Wolken hängen über ___ (die Stadt).",hint:"die Stadt",accept:["der Stadt"],level:"B1",expl:"Vị trí tĩnh (hängen = đang lơ lửng): Wo? → Dativ."},
  {q:"Sie legt den Schlüssel unter ___ (die Matte).",hint:"die Matte",accept:["die Matte"],level:"A2",expl:"Chuyển động (legen = đặt xuống): Wohin? → Akkusativ."},
 ],
 "de-prep-gen": [
  {q:"Wegen ___ (das Wetter) bleiben wir zu Hause.",hint:"das Wetter",accept:["des Wetters"],level:"B1",expl:"wegen đòi Genitiv; giống trung: das → des, thêm -s."},
  {q:"Trotz ___ (der Regen) gehen wir spazieren.",hint:"der Regen",accept:["des Regens"],level:"B1",expl:"trotz đòi Genitiv; giống đực: der → des, thêm -s."},
  {q:"Während ___ (die Reise) haben wir viele Fotos gemacht.",hint:"die Reise",accept:["der Reise"],level:"B1",expl:"während đòi Genitiv; giống cái: die → der."},
  {q:"Statt ___ (ein Auto) kaufen wir ein Fahrrad.",hint:"ein Auto",accept:["eines Autos"],level:"B1",expl:"statt đòi Genitiv; giống trung: ein → eines, thêm -s."},
  {q:"Innerhalb ___ (eine Woche) bekommen Sie eine Antwort.",hint:"eine Woche",accept:["einer Woche"],level:"B1",expl:"innerhalb đòi Genitiv; giống cái: eine → einer."},
  {q:"Außerhalb ___ (die Stadt) ist es ruhiger.",hint:"die Stadt",accept:["der Stadt"],level:"B1",expl:"außerhalb đòi Genitiv; giống cái: die → der."},
  {q:"Wegen ___ (der Stau) kamen wir zu spät.",hint:"der Stau",accept:["des Staus"],level:"B1",expl:"wegen đòi Genitiv; giống đực: der → des, thêm -s."},
  {q:"Trotz ___ (die Schwierigkeiten) haben wir gewonnen.",hint:"die Schwierigkeiten",accept:["der Schwierigkeiten"],level:"B2",expl:"trotz đòi Genitiv; số nhiều: die → der."},
  {q:"Während ___ (der Unterricht) darf man nicht sprechen.",hint:"der Unterricht",accept:["des Unterrichts"],level:"B1",expl:"während đòi Genitiv; giống đực: der → des, thêm -s."},
  {q:"Statt ___ (eine E-Mail) hat er angerufen.",hint:"eine E-Mail",accept:["einer E-Mail"],level:"B2",expl:"statt đòi Genitiv; giống cái: eine → einer."},
  {q:"Aufgrund ___ (das Wetter) wurde das Spiel verschoben.",hint:"das Wetter",accept:["des Wetters"],level:"B2",expl:"aufgrund đòi Genitiv; giống trung: das → des, thêm -s."},
  {q:"Wegen ___ (die Preise) kaufen wir weniger.",hint:"die Preise",accept:["der Preise"],level:"B1",expl:"wegen đòi Genitiv; số nhiều: die → der."},
  {q:"Trotz ___ (sein Erfolg) blieb er bescheiden.",hint:"sein Erfolg",accept:["seines Erfolgs"],level:"B2",expl:"trotz đòi Genitiv; giống đực: sein → seines, thêm -s."},
  {q:"Innerhalb ___ (das Jahr) hat sich viel verändert.",hint:"das Jahr",accept:["des Jahres"],level:"B1",expl:"innerhalb đòi Genitiv; giống trung: das → des, thêm -es."},
  {q:"Während ___ (die Ferien) arbeite ich in einem Café.",hint:"die Ferien",accept:["der Ferien"],level:"B1",expl:"während đòi Genitiv; số nhiều: die → der."},
 ],
};

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Câu ngữ cảnh, gõ đúng mạo từ sau giới từ"},
};
const POOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => POOL.push({
 type:"fill",kind:"input",retry:true,
 prompt:fmt(it.q.replace(/ \(.+?\)/,"")),
 hint:`Gợi ý: <b>${esc(it.hint)}</b>. Gõ đúng cách sau giới từ.`,
 accept:it.accept,plain:it.accept[0],ref,level:it.level,expl:it.expl,
})));

const RUSH=[
 ["für / durch / ohne / gegen / um / bis",["de-prep-akk"]],
 ["mit / nach / bei / von / zu / aus / seit",["de-prep-dat"]],
 ["Wohin? (chuyển động)",["de-prep-wechsel"]],["Wo? (vị trí tĩnh)",["de-prep-wechsel"]],["an / auf / in / unter / vor / zwischen",["de-prep-wechsel"]],
 ["wegen / trotz / während / statt",["de-prep-gen"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["praepositionen"] = { pool: POOL, types: TYPES, game: {title:"Welcher Fall?",desc:"60 giây. Thấy giới từ này, chọn đúng cách nó đòi hỏi",prompt:"Giới từ này đòi cách nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"prepRushBest"} };
})();
