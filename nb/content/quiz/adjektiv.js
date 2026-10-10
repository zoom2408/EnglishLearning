/* nb/content/quiz/adjektiv.js: practice questions for Adjektiv.
   Single exercise type: context sentences, type the correctly
   inflected adjective. Wrong answers can be retried (retry:true). */
(() => {
const BANK = {
 "nb-adj-ubestemt": [
  {q:"Jeg har en ___ (stor) bil.",hint:"stor",accept:["stor"],level:"A1",expl:"En-ord ubestemt: tính từ giữ nguyên."},
  {q:"Dette er et ___ (stor) hus.",hint:"stor",accept:["stort"],level:"A1",expl:"Et-ord ubestemt: tính từ thêm -t."},
  {q:"Vi har ___ (fin) biler.",hint:"fin",accept:["fine"],level:"A1",expl:"Flertall: tính từ thêm -e."},
  {q:"Hun bor i en ___ (liten) leilighet.",hint:"liten",accept:["liten"],level:"A1",expl:"En-ord ubestemt: tính từ giữ nguyên (liten không đổi ở en-ord)."},
  {q:"Jeg kjøpte en ___ (ny) telefon.",hint:"ny",accept:["ny"],level:"A1",expl:"En-ord ubestemt: tính từ giữ nguyên."},
  {q:"Dette er et ___ (ny) problem.",hint:"ny",accept:["nytt"],level:"A1",expl:"Et-ord ubestemt: tính từ thêm -t."},
  {q:"Vi har ___ (ny) møbler.",hint:"ny",accept:["nye"],level:"A1",expl:"Flertall: tính từ thêm -e."},
  {q:"Hun bor i et ___ (gammel) hus.",hint:"gammel",accept:["gammelt"],level:"A1",expl:"Et-ord ubestemt: tính từ thêm -t (gammel → gammelt)."},
  {q:"Det er en ___ (gammel) bil.",hint:"gammel",accept:["gammel"],level:"A1",expl:"En-ord ubestemt: tính từ giữ nguyên."},
  {q:"Vi så ___ (gammel) bygninger i byen.",hint:"gammel",accept:["gamle"],level:"A2",expl:"Flertall: gammel → gamle (bất quy tắc, mất âm e gốc)."},
  {q:"Hun har et ___ (pen) smil.",hint:"pen",accept:["pent"],level:"A1",expl:"Et-ord ubestemt: tính từ thêm -t."},
  {q:"Det er en ___ (pen) kjole i vinduet.",hint:"pen",accept:["pen"],level:"A1",expl:"En-ord ubestemt: tính từ giữ nguyên."},
  {q:"Vi møtte ___ (pen) mennesker på reisen.",hint:"pen",accept:["pene"],level:"A2",expl:"Flertall: tính từ thêm -e."},
  {q:"Han har en ___ (rask) bil.",hint:"rask",accept:["rask"],level:"A1",expl:"En-ord ubestemt: tính từ giữ nguyên."},
  {q:"Dette er et ___ (rask) tog.",hint:"rask",accept:["raskt"],level:"A1",expl:"Et-ord ubestemt: tính từ thêm -t."},
  {q:"De er ___ (rask) løpere.",hint:"rask",accept:["raske"],level:"A2",expl:"Flertall: tính từ thêm -e."},
  {q:"Dette er en ___ (dyr) klokke.",hint:"dyr",accept:["dyr"],level:"A1",expl:"En-ord ubestemt: tính từ giữ nguyên."},
  {q:"Det er et ___ (dyr) hotell.",hint:"dyr",accept:["dyrt"],level:"A1",expl:"Et-ord ubestemt: tính từ thêm -t."},
  {q:"Vi så ___ (dyr) klær i butikken.",hint:"dyr",accept:["dyre"],level:"A2",expl:"Flertall: tính từ thêm -e."},
  {q:"Dette er et ___ (billig) alternativ.",hint:"billig",accept:["billig"],level:"B1",expl:"Tính từ kết thúc bằng -ig không trọng âm KHÔNG thêm -t ở et-ord (ví dụ: billig, vanlig, hyggelig)."},
 ],
 "nb-adj-bestemt": [
  {q:"___ (stor) bilen er min.",hint:"stor",accept:["Den store"],level:"A2",expl:"Bestemt en-ord: den + tính từ -e."},
  {q:"___ (stor) huset ligger der borte.",hint:"stor",accept:["Det store"],level:"A2",expl:"Bestemt et-ord: det + tính từ -e."},
  {q:"___ (fin) husene er nye.",hint:"fin",accept:["De fine"],level:"A2",expl:"Bestemt flertall: de + tính từ -e."},
  {q:"Jeg liker ___ (gammel) boka best.",hint:"gammel",accept:["den gamle"],level:"A2",expl:"Bestemt ei/en-ord: den + tính từ -e."},
  {q:"___ (pen) kjolen er veldig fin.",hint:"pen",accept:["Den pene"],level:"A2",expl:"Bestemt en-ord: den + tính từ -e."},
  {q:"___ (rask) bilen vant løpet.",hint:"rask",accept:["Den raske"],level:"A2",expl:"Bestemt en-ord: den + tính từ -e."},
  {q:"___ (dyr) hotellet ligger i sentrum.",hint:"dyr",accept:["Det dyre"],level:"A2",expl:"Bestemt et-ord: det + tính từ -e."},
  {q:"___ (billig) løsningen var den beste.",hint:"billig",accept:["Den billige"],level:"B1",expl:"Bestemt en-ord: den + tính từ -e (ở bestemt vẫn thêm -e dù ubestemt et-ord không thêm -t)."},
  {q:"___ (kald) vinden blåste hele dagen.",hint:"kald",accept:["Den kalde"],level:"A2",expl:"Bestemt en-ord: den + tính từ -e."},
  {q:"___ (varm) kaffen smaker godt.",hint:"varm",accept:["Den varme"],level:"A2",expl:"Bestemt en-ord: den + tính từ -e."},
  {q:"___ (grønn) eplene er friske.",hint:"grønn",accept:["De grønne"],level:"A2",expl:"Bestemt flertall: de + tính từ -e."},
  {q:"___ (hvit) huset er mitt.",hint:"hvit",accept:["Det hvite"],level:"A2",expl:"Bestemt et-ord: det + tính từ -e."},
  {q:"___ (liten) hunden er søt.",hint:"liten",accept:["Den lille"],level:"B1",expl:"Bất quy tắc: bestemt của liten là lille, không phải “litne”."},
  {q:"___ (liten) barna spiller i hagen.",hint:"liten",accept:["De små"],level:"B1",expl:"Bất quy tắc: flertall/bestemt của liten là små, không phải “litne”."},
  {q:"___ (god) maten var fantastisk.",hint:"god",accept:["Den gode"],level:"A2",expl:"Bestemt en-ord: god → gode (dạng bestemt đều đặn, dù so sánh của god bất quy tắc)."},
  {q:"___ (stor) jenta vant prisen.",hint:"stor",accept:["Den store"],level:"A2",expl:"Bestemt en/ei-ord: den + tính từ -e."},
  {q:"___ (gammel) trærne står i parken.",hint:"gammel",accept:["De gamle"],level:"A2",expl:"Bestemt flertall: de + tính từ -e (gamle)."},
  {q:"___ (ny) bøkene ligger på bordet.",hint:"ny",accept:["De nye"],level:"A2",expl:"Bestemt flertall: de + tính từ -e."},
  {q:"___ (fin) utsikten var vakker.",hint:"fin",accept:["Den fine"],level:"A2",expl:"Bestemt en-ord: den + tính từ -e."},
  {q:"___ (stor) husene i gaten er dyre.",hint:"stor",accept:["De store"],level:"A2",expl:"Bestemt flertall: de + tính từ -e."},
 ],
 "nb-adj-komparasjon": [
  {q:"Oslo er ___ (stor) enn Bergen.",hint:"stor",accept:["større"],level:"A2",expl:"So sánh hơn: stor → større."},
  {q:"Oslo er ___ (stor) byen i Norge.",hint:"stor",accept:["den største"],level:"A2",expl:"So sánh nhất xác định: den største."},
  {q:"Dette er ___ (god) enn forrige gang.",hint:"god",accept:["bedre"],level:"A2",expl:"Bất quy tắc: god → bedre."},
  {q:"Dette er den ___ (dårlig) filmen jeg har sett.",hint:"dårlig",accept:["verste"],level:"B1",expl:"Bất quy tắc: dårlig → verst → den verste."},
  {q:"Hun er ___ (ung) enn broren sin.",hint:"ung",accept:["yngre"],level:"A2",expl:"Bất quy tắc: ung → yngre → yngst."},
  {q:"Bestefar er den ___ (gammel) i familien.",hint:"gammel",accept:["eldste"],level:"B1",expl:"Bất quy tắc: gammel → eldre → eldst (không phải “gammelere”)."},
  {q:"Denne broen er ___ (lang) enn den andre.",hint:"lang",accept:["lengre"],level:"B1",expl:"Bất quy tắc: lang → lengre → lengst."},
  {q:"Dette er den ___ (lang) broen i landet.",hint:"lang",accept:["lengste"],level:"B1",expl:"Bất quy tắc: lang → lengre → lengst."},
  {q:"Jeg har ___ (mange) bøker enn deg.",hint:"mange",accept:["flere"],level:"A2",expl:"Bất quy tắc: mange → flere → flest."},
  {q:"Hun har ___ (mye) tid enn meg.",hint:"mye",accept:["mer"],level:"A2",expl:"Bất quy tắc: mye → mer → mest."},
  {q:"Dette er den ___ (liten) byen i Norge.",hint:"liten",accept:["minste"],level:"B1",expl:"Bất quy tắc: liten → mindre → minst."},
  {q:"Dette rommet er ___ (liten) enn det andre.",hint:"liten",accept:["mindre"],level:"B1",expl:"Bất quy tắc: liten → mindre → minst."},
  {q:"Denne oppgaven er ___ (vanskelig) enn den forrige.",hint:"vanskelig",accept:["vanskeligere"],level:"B1",expl:"Tính từ kết thúc -ig vẫn so sánh đều đặn: thêm -ere."},
  {q:"Dette er den ___ (vanskelig) oppgaven i boka.",hint:"vanskelig",accept:["vanskeligste"],level:"B1",expl:"So sánh đều đặn: thêm -est."},
  {q:"Denne jakken er ___ (varm) enn den gamle.",hint:"varm",accept:["varmere"],level:"A2",expl:"So sánh đều đặn: thêm -ere."},
  {q:"Dette er den ___ (varm) jakken jeg har.",hint:"varm",accept:["varmeste"],level:"A2",expl:"So sánh đều đặn: thêm -est."},
  {q:"Han er ___ (sterk) enn meg.",hint:"sterk",accept:["sterkere"],level:"A2",expl:"So sánh đều đặn: thêm -ere."},
  {q:"Hun er den ___ (sterk) i klassen.",hint:"sterk",accept:["sterkeste"],level:"A2",expl:"So sánh đều đặn: thêm -est."},
  {q:"Dette svaret er ___ (interessant) enn det forrige.",hint:"interessant",accept:["mer interessant"],level:"B1",expl:"Tính từ dài/gốc ngoại lai dùng mer/mest thay vì -ere/-est."},
  {q:"Dette er den ___ (interessant) boka jeg har lest.",hint:"interessant",accept:["mest interessante"],level:"B1",expl:"Mer/mest + tính từ, vẫn thêm -e ở dạng bestemt: mest interessante."},
 ],
};

const TYPES={
 fill:{name:"Fyll inn",desc:"Câu ngữ cảnh, gõ đúng dạng tính từ"},
};
const POOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => POOL.push({
 type:"fill",kind:"input",retry:true,
 prompt:fmt(it.q.replace(/ \(.+?\)/,"")),
 hint:`Gợi ý: <b>${esc(it.hint)}</b>. Gõ đúng dạng tính từ.`,
 accept:it.accept,plain:it.accept[0],ref,level:it.level,expl:it.expl,
})));

const RUSH=[
 ["et-ord + -t",["nb-adj-ubestemt"]],["flertall + -e",["nb-adj-ubestemt"]],
 ["den/det/de + tính từ -e",["nb-adj-bestemt"]],
 ["-ere (komparativ)",["nb-adj-komparasjon"]],["-est (superlativ)",["nb-adj-komparasjon"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["adjektiv"] = { pool: POOL, types: TYPES, game: {title:"Hvilken form?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng dạng tính từ",prompt:"Dấu hiệu này cần dạng nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"adjRushBest"} };
})();
