/* de/content/quiz/relativsaetze.js: practice questions for
   Relativsätze. BANK groups items by row id (sub-topic). Single
   exercise type: build the relative clause with the correctly
   declined pronoun + verb-final order. Wrong answers can be retried
   (retry:true). */
(() => {
const BANK = {
 "de-rel-nom": [
  {q:"Der Mann, ___ (er / nebenan wohnen), ist mein Nachbar.",hint:"er / nebenan wohnen",accept:["der nebenan wohnt"],level:"A2",expl:"Chủ ngữ giống đực của mệnh đề quan hệ: der."},
  {q:"Die Frau, ___ (sie / das Geschäft leiten), ist sehr freundlich.",hint:"sie / das Geschäft leiten",accept:["die das Geschäft leitet"],level:"A2",expl:"Chủ ngữ giống cái: die."},
  {q:"Das Kind, ___ (es / so laut lachen), ist meine Nichte.",hint:"es / so laut lachen",accept:["das so laut lacht"],level:"A2",expl:"Chủ ngữ giống trung: das."},
  {q:"Die Leute, ___ (sie / nebenan wohnen), sind sehr nett.",hint:"sie / nebenan wohnen",accept:["die nebenan wohnen"],level:"A2",expl:"Chủ ngữ số nhiều: die."},
  {q:"Der Lehrer, ___ (er / Deutsch unterrichten), ist sehr geduldig.",hint:"er / Deutsch unterrichten",accept:["der Deutsch unterrichtet"],level:"A2",expl:"Chủ ngữ giống đực: der."},
  {q:"Die Ärztin, ___ (sie / im Krankenhaus arbeiten), ist sehr bekannt.",hint:"sie / im Krankenhaus arbeiten",accept:["die im Krankenhaus arbeitet"],level:"A2",expl:"Chủ ngữ giống cái: die."},
  {q:"Das Auto, ___ (es / so schnell fahren), gehört meinem Bruder.",hint:"es / so schnell fahren",accept:["das so schnell fährt"],level:"B1",expl:"Chủ ngữ giống trung: das."},
  {q:"Die Schüler, ___ (sie / immer pünktlich kommen), bekommen ein Lob.",hint:"sie / immer pünktlich kommen",accept:["die immer pünktlich kommen"],level:"A2",expl:"Chủ ngữ số nhiều: die."},
  {q:"Der Zug, ___ (er / nach Berlin fahren), fährt um acht Uhr ab.",hint:"er / nach Berlin fahren",accept:["der nach Berlin fährt"],level:"A2",expl:"Chủ ngữ giống đực: der."},
  {q:"Die Frau, ___ (sie / neben mir sitzen), heißt Anna.",hint:"sie / neben mir sitzen",accept:["die neben mir sitzt"],level:"A2",expl:"Chủ ngữ giống cái: die."},
  {q:"Das Mädchen, ___ (es / Klavier spielen), ist meine Tochter.",hint:"es / Klavier spielen",accept:["das Klavier spielt"],level:"A2",expl:"Chủ ngữ giống trung: das."},
  {q:"Die Männer, ___ (sie / dort arbeiten), sind alle freundlich.",hint:"sie / dort arbeiten",accept:["die dort arbeiten"],level:"B1",expl:"Chủ ngữ số nhiều: die."},
 ],
 "de-rel-akk": [
  {q:"Das Buch, ___ (ich / es / gerade lesen), ist sehr spannend.",hint:"ich / es / gerade lesen",accept:["das ich gerade lese"],level:"A2",expl:"Tân ngữ trực tiếp giống trung: das."},
  {q:"Der Film, ___ (wir / ihn / sehen wollen), läuft im Kino.",hint:"wir / ihn / sehen wollen",accept:["den wir sehen wollen"],level:"B1",expl:"Tân ngữ trực tiếp giống đực: den."},
  {q:"Die Tasche, ___ (ich / sie / tragen), ist neu.",hint:"ich / sie / tragen",accept:["die ich trage"],level:"A2",expl:"Tân ngữ trực tiếp giống cái: die."},
  {q:"Die Schuhe, ___ (ich / sie / mögen), sind leider ausverkauft.",hint:"ich / sie / mögen",accept:["die ich mag"],level:"A2",expl:"Tân ngữ trực tiếp số nhiều: die."},
  {q:"Das Auto, ___ (ich / es / kaufen wollen), ist zu teuer.",hint:"ich / es / kaufen wollen",accept:["das ich kaufen will"],level:"B1",expl:"Tân ngữ trực tiếp giống trung: das."},
  {q:"Der Mann, ___ (sie / ihn / lieben), lebt in Berlin.",hint:"sie / ihn / lieben",accept:["den sie liebt"],level:"B1",expl:"Tân ngữ trực tiếp giống đực: den."},
  {q:"Die Katze, ___ (wir / sie / füttern), schläft viel.",hint:"wir / sie / füttern",accept:["die wir füttern"],level:"A2",expl:"Tân ngữ trực tiếp giống cái: die."},
  {q:"Die Bücher, ___ (ich / sie / lesen), sind sehr interessant.",hint:"ich / sie / lesen",accept:["die ich lese"],level:"A2",expl:"Tân ngữ trực tiếp số nhiều: die."},
  {q:"Der Kuchen, ___ (sie / ihn / backen), schmeckt köstlich.",hint:"sie / ihn / backen",accept:["den sie backt"],level:"A2",expl:"Tân ngữ trực tiếp giống đực: den."},
  {q:"Das Geschenk, ___ (ich / es / bekommen), gefällt mir sehr.",hint:"ich / es / bekommen",accept:["das ich bekomme"],level:"A2",expl:"Tân ngữ trực tiếp giống trung: das."},
  {q:"Die Wohnung, ___ (wir / sie / mieten wollen), ist schon vergeben.",hint:"wir / sie / mieten wollen",accept:["die wir mieten wollen"],level:"B1",expl:"Tân ngữ trực tiếp giống cái: die."},
  {q:"Den Film, ___ (ich / ihn / gestern sehen, Perfekt), fand ich spannend.",hint:"ich / ihn / gestern sehen",accept:["den ich gestern gesehen habe"],level:"B1",expl:"Tân ngữ trực tiếp giống đực: den; động từ ở Perfekt vẫn đứng cuối mệnh đề."},
 ],
 "de-rel-dat": [
  {q:"Die Frau, ___ (ich / ihr / helfen), ist Ärztin.",hint:"ich / ihr / helfen",accept:["der ich helfe"],level:"B1",expl:"“helfen” đòi Dativ; giống cái: der."},
  {q:"Der Kollege, ___ (ich / ihm / vertrauen), hat gekündigt.",hint:"ich / ihm / vertrauen",accept:["dem ich vertraue"],level:"B1",expl:"“vertrauen” đòi Dativ; giống đực: dem."},
  {q:"Das Kind, ___ (ich / ihm / ein Geschenk geben), freut sich sehr.",hint:"ich / ihm / ein Geschenk geben",accept:["dem ich ein Geschenk gebe"],level:"B1",expl:"Tân ngữ gián tiếp giống trung: dem."},
  {q:"Die Freunde, ___ (ich / ihnen / schreiben), antworten schnell.",hint:"ich / ihnen / schreiben",accept:["denen ich schreibe"],level:"B1",expl:"Tân ngữ gián tiếp số nhiều: denen (không phải die)."},
  {q:"Der Nachbar, ___ (ich / ihm / vertrauen), ist sehr hilfsbereit.",hint:"ich / ihm / vertrauen",accept:["dem ich vertraue"],level:"B1",expl:"“vertrauen” đòi Dativ; giống đực: dem."},
  {q:"Die Lehrerin, ___ (die Schüler / ihr / zuhören), ist sehr beliebt.",hint:"die Schüler / ihr / zuhören",accept:["der die Schüler zuhören"],level:"B1",expl:"“zuhören” đòi Dativ; giống cái: der."},
  {q:"Das Team, ___ (wir / ihm / gratulieren), hat gewonnen.",hint:"wir / ihm / gratulieren",accept:["dem wir gratulieren"],level:"B1",expl:"“gratulieren” đòi Dativ; giống trung: dem."},
  {q:"Die Kollegin, ___ (ich / ihr / danken), hat mir sehr geholfen.",hint:"ich / ihr / danken",accept:["der ich danke"],level:"B1",expl:"“danken” đòi Dativ; giống cái: der."},
  {q:"Der Chef, ___ (alle / ihm / folgen), ist sehr respektiert.",hint:"alle / ihm / folgen",accept:["dem alle folgen"],level:"B1",expl:"“folgen” đòi Dativ; giống đực: dem."},
  {q:"Die Studentin, ___ (der Professor / ihr / antworten), war zufrieden.",hint:"der Professor / ihr / antworten",accept:["der der Professor antwortet"],level:"B2",expl:"“antworten” đòi Dativ; giống cái: der."},
  {q:"Die Eltern, ___ (ich / ihnen / schreiben), freuen sich immer.",hint:"ich / ihnen / schreiben",accept:["denen ich schreibe"],level:"B1",expl:"Tân ngữ gián tiếp số nhiều: denen."},
  {q:"Der Mann, ___ (das Auto / ihm / gehören), ist mein Nachbar.",hint:"das Auto / ihm / gehören",accept:["dem das Auto gehört"],level:"B1",expl:"“gehören” đòi Dativ; giống đực: dem."},
 ],
 "de-rel-gen": [
  {q:"Der Mann, ___ (sein / Auto / rot sein), ist mein Chef.",hint:"sein / Auto / rot sein",accept:["dessen Auto rot ist"],level:"B1",expl:"Sở hữu giống đực: dessen, danh từ sau không có mạo từ."},
  {q:"Die Frau, ___ (ihr / Sohn / in Berlin studieren), ist stolz.",hint:"ihr / Sohn / in Berlin studieren",accept:["deren Sohn in Berlin studiert"],level:"B1",expl:"Sở hữu giống cái: deren."},
  {q:"Das Unternehmen, ___ (sein / Gewinn / steigen), expandiert.",hint:"sein / Gewinn / steigen",accept:["dessen Gewinn steigt"],level:"B2",expl:"Sở hữu giống trung: dessen."},
  {q:"Die Kinder, ___ (ihre / Eltern / arbeiten), spielen im Park.",hint:"ihre / Eltern / arbeiten",accept:["deren Eltern arbeiten"],level:"B1",expl:"Sở hữu số nhiều: deren."},
  {q:"Der Student, ___ (seine / Noten / sehr gut sein), bekommt ein Stipendium.",hint:"seine / Noten / sehr gut sein",accept:["dessen Noten sehr gut sind"],level:"B2",expl:"Sở hữu giống đực: dessen."},
  {q:"Die Firma, ___ (ihr / Produkt / sehr beliebt sein), wächst schnell.",hint:"ihr / Produkt / sehr beliebt sein",accept:["deren Produkt sehr beliebt ist"],level:"B2",expl:"Sở hữu giống cái: deren."},
  {q:"Das Kind, ___ (seine / Eltern / im Ausland leben), vermisst sie.",hint:"seine / Eltern / im Ausland leben",accept:["dessen Eltern im Ausland leben"],level:"B2",expl:"Sở hữu giống trung: dessen."},
  {q:"Die Künstlerin, ___ (ihre / Bilder / weltberühmt sein), lebt in Paris.",hint:"ihre / Bilder / weltberühmt sein",accept:["deren Bilder weltberühmt sind"],level:"B2",expl:"Sở hữu giống cái: deren."},
  {q:"Der Politiker, ___ (seine / Rede / viel Kritik bekommen), trat zurück.",hint:"seine / Rede / viel Kritik bekommen",accept:["dessen Rede viel Kritik bekam"],level:"B2",expl:"Sở hữu giống đực: dessen."},
  {q:"Die Familie, ___ (ihr / Haus / abbrennen), bekam Hilfe von Nachbarn.",hint:"ihr / Haus / abbrennen",accept:["deren Haus abbrannte"],level:"B2",expl:"Sở hữu giống cái: deren."},
  {q:"Der Schriftsteller, ___ (sein / Buch / einen Preis gewinnen), war sehr stolz.",hint:"sein / Buch / einen Preis gewinnen",accept:["dessen Buch einen Preis gewann"],level:"B2",expl:"Sở hữu giống đực: dessen."},
  {q:"Die Studenten, ___ (ihre / Arbeit / fertig sein), dürfen gehen.",hint:"ihre / Arbeit / fertig sein",accept:["deren Arbeit fertig ist"],level:"B1",expl:"Sở hữu số nhiều: deren."},
 ],
 "de-rel-prep": [
  {q:"Das ist der Kollege, ___ (mit / ich / oft arbeiten).",hint:"mit / ich / oft arbeiten",accept:["mit dem ich oft arbeite"],level:"B1",expl:"“mit” đòi Dativ: mit dem."},
  {q:"Das ist die Firma, ___ (für / ich / arbeiten).",hint:"für / ich / arbeiten",accept:["für die ich arbeite"],level:"B1",expl:"“für” đòi Akkusativ; giống cái: für die."},
  {q:"Das ist das Thema, ___ (über / wir / sprechen).",hint:"über / wir / sprechen",accept:["über das wir sprechen"],level:"B1",expl:"“über” + Akkusativ giống trung: über das."},
  {q:"Das sind die Freunde, ___ (mit / ich / reisen).",hint:"mit / ich / reisen",accept:["mit denen ich reise"],level:"B1",expl:"“mit” đòi Dativ số nhiều: mit denen."},
  {q:"Das ist die Freundin, ___ (mit / ich / telefonieren).",hint:"mit / ich / telefonieren",accept:["mit der ich telefoniere"],level:"B1",expl:"“mit” đòi Dativ; giống cái: mit der."},
  {q:"Das ist das Hotel, ___ (in / wir / übernachten).",hint:"in / wir / übernachten",accept:["in dem wir übernachten"],level:"B1",expl:"“in” + Dativ (vị trí tĩnh) giống trung: in dem."},
  {q:"Das sind die Probleme, ___ (über / wir / diskutieren).",hint:"über / wir / diskutieren",accept:["über die wir diskutieren"],level:"B1",expl:"“über” + Akkusativ số nhiều: über die."},
  {q:"Das ist der Grund, ___ (aus / ich / das machen).",hint:"aus / ich / das machen",accept:["aus dem ich das mache"],level:"B2",expl:"“aus” đòi Dativ; giống đực: aus dem."},
  {q:"Das ist die Stadt, ___ (aus / ich / kommen).",hint:"aus / ich / kommen",accept:["aus der ich komme"],level:"B1",expl:"“aus” đòi Dativ; giống cái: aus der."},
  {q:"Das ist das Ziel, ___ (für / wir / arbeiten).",hint:"für / wir / arbeiten",accept:["für das wir arbeiten"],level:"B1",expl:"“für” + Akkusativ giống trung: für das."},
  {q:"Das sind die Leute, ___ (von / ich / Hilfe bekommen).",hint:"von / ich / Hilfe bekommen",accept:["von denen ich Hilfe bekomme"],level:"B2",expl:"“von” đòi Dativ số nhiều: von denen."},
  {q:"Das ist der Tisch, ___ (an / wir / sitzen).",hint:"an / wir / sitzen",accept:["an dem wir sitzen"],level:"B1",expl:"“an” + Dativ (vị trí tĩnh) giống đực: an dem."},
 ],
};

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Câu ngữ cảnh, gõ đúng relative pronoun + động từ cuối câu"},
};
const POOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => POOL.push({
 type:"fill",kind:"input",retry:true,
 prompt:fmt(it.q.replace(/ \(.+?\)/,"")),
 hint:`Gợi ý: <b>${esc(it.hint)}</b>. Gõ đúng đại từ quan hệ và trật tự từ.`,
 accept:it.accept,plain:it.accept[0],ref,level:it.level,expl:it.expl,
})));

const RUSH=[
 ["Chủ ngữ mệnh đề quan hệ",["de-rel-nom"]],["Tân ngữ trực tiếp",["de-rel-akk"]],
 ["Tân ngữ gián tiếp (helfen, danken…)",["de-rel-dat"]],["dessen/deren (sở hữu)",["de-rel-gen"]],
 ["Giới từ + Relativpronomen",["de-rel-prep"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["relativsaetze"] = { pool: POOL, types: TYPES, game: {title:"Welcher Fall?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng cách của đại từ quan hệ",prompt:"Dấu hiệu này thuộc cách nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"relRushBest"} };
})();
