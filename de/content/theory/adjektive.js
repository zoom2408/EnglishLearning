/* de/content/theory/adjektive.js
   Adjektivdeklination: schwach, gemischt, stark. Uses the "table"
   diagram mode. Example adjective throughout: gut (tốt), danh từ mẫu:
   Mann/Frau/Kind/Leute. */
(() => {
const T = [
 {id:"de-adj-schwach",num:"01",en:"Schwache Deklination",vi:"Chia yếu (sau mạo từ xác định)",short:"-e hoặc -en, sau der/die/das",
  core:"Khi có <strong>mạo từ xác định</strong> (der/die/das/dieser/jeder…) đứng trước, mạo từ đã thể hiện rõ giống/cách rồi, nên tính từ chỉ còn <strong>2 đuôi</strong>: <strong>-e</strong> hoặc <strong>-en</strong>.",
  forms:[["Nom. (cả 3 giống)","Mạo từ xác định + tính từ -e","der gut<mark>e</mark> Mann, die gut<mark>e</mark> Frau, das gut<mark>e</mark> Kind"],["Mọi ô còn lại","Hầu như luôn -en","den gut<mark>en</mark> Mann, dem gut<mark>en</mark> Kind"]],
  uses:[["Chủ ngữ với mạo từ xác định","<mark>Der</mark> klein<mark>e</mark> Hund schläft."],["Tân ngữ với mạo từ xác định","Ich sehe <mark>den</mark> klein<mark>en</mark> Hund."]],
  signals:["der/die/das + tính từ","dieser/jeder/welcher + tính từ"],
  speak:5,write:5,
  reg:"Mẹo nhớ: ở Nominativ cả 3 giống và Akkusativ feminin/neutral, tính từ chỉ cần -e; tất cả các ô còn lại là -en.",
  mistake:["der gutes Mann","der gute Mann","Sau mạo từ xác định ở Nominativ, tính từ luôn là -e, không phải -es."],
  table:[{head:["Fall","maskulin","feminin","neutral","Plural"],rows:[
   ["Nom.","der gut**e** Mann","die gut**e** Frau","das gut**e** Kind","die gut**en** Leute"],
   ["Akk.","den gut**en** Mann","die gut**e** Frau","das gut**e** Kind","die gut**en** Leute"],
   ["Dat.","dem gut**en** Mann","der gut**en** Frau","dem gut**en** Kind","den gut**en** Leuten"],
   ["Gen.","des gut**en** Mannes","der gut**en** Frau","des gut**en** Kindes","der gut**en** Leute"]]}]},

 {id:"de-adj-gemischt",num:"02",en:"Gemischte Deklination",vi:"Chia hỗn hợp (sau mạo từ không xác định)",short:"-er/-e/-es ở Nom., còn lại -en",
  core:"Sau <strong>mạo từ không xác định</strong> (ein/eine/kein/mein/dein…) — giống schwach ở hầu hết các ô, chỉ khác ở <strong>Nominativ và Akkusativ neutral, Nominativ maskulin</strong>, nơi mạo từ “ein” không tự thể hiện rõ giống nên tính từ phải gánh thêm đuôi (-er, -es).",
  forms:[["Nom. maskulin","-er (vì “ein” không rõ giống)","<mark>ein</mark> gut<mark>er</mark> Mann"],["Nom./Akk. neutral","-es (vì “ein” không rõ giống)","<mark>ein</mark> gut<mark>es</mark> Kind"],["Còn lại","Giống hệt schwach","<mark>eine</mark> gut<mark>e</mark> Frau, <mark>einen</mark> gut<mark>en</mark> Mann"]],
  uses:[["Chủ ngữ với mạo từ không xác định","<mark>Ein</mark> klein<mark>er</mark> Hund schläft."],["Phủ định với kein","<mark>Kein</mark> gut<mark>er</mark> Freund würde das tun."]],
  signals:["ein/eine + tính từ","kein/mein/dein/sein/ihr/unser/euer + tính từ"],
  speak:5,write:5,
  reg:"Chỉ cần nhớ 3 ô khác biệt (Nom. mask. -er, Nom./Akk. neutral -es); mọi ô còn lại học lại y hệt bảng schwach.",
  mistake:["ein gute Mann","ein guter Mann","Sau “ein” ở Nominativ giống đực, tính từ phải tự mang đuôi -er."],
  table:[{head:["Fall","maskulin","feminin","neutral","Plural"],rows:[
   ["Nom.","ein gut**er** Mann","eine gut**e** Frau","ein gut**es** Kind","keine gut**en** Leute"],
   ["Akk.","einen gut**en** Mann","eine gut**e** Frau","ein gut**es** Kind","keine gut**en** Leute"],
   ["Dat.","einem gut**en** Mann","einer gut**en** Frau","einem gut**en** Kind","keinen gut**en** Leuten"],
   ["Gen.","eines gut**en** Mannes","einer gut**en** Frau","eines gut**en** Kindes","keiner gut**en** Leute"]]}]},

 {id:"de-adj-stark",num:"03",en:"Starke Deklination",vi:"Chia mạnh (không có mạo từ)",short:"đuôi giống hệt mạo từ xác định",
  core:"Khi <strong>không có mạo từ</strong> nào đứng trước — tính từ phải tự mang đuôi để thể hiện giống/cách, đuôi này <strong>giống hệt đuôi của mạo từ xác định</strong> (der/die/das/den/dem…).",
  forms:[["Nom. maskulin","-er (giống der)","gut<mark>er</mark> Kaffee"],["Nom./Akk. neutral","-es (giống das)","gut<mark>es</mark> Brot"],["Dat. (mọi giống)","-em/-er/-en (giống dem/der/den)","mit gut<mark>em</mark> Kaffee"]],
  uses:[["Danh từ chung chung, không xác định cụ thể","Ich trinke gern <mark>heißen</mark> Tee."],["Sau số lượng (viele, einige, wenige…)","<mark>Viele</mark> jung<mark>e</mark> Leute lernen Deutsch."]],
  signals:["không có mạo từ + tính từ","viele/einige/wenige + tính từ"],
  speak:3,write:4,
  reg:"Bảng stark gần như là bản sao của bảng mạo từ xác định (der/die/das/den/dem/des…) — nếu nhớ bảng Artikel thì bảng này gần như miễn phí.",
  mistake:["mit gutem Kaffee → mit guten Kaffee","mit gutem Kaffee","Dativ giống đực/trung số ít luôn là -em, không phải -en."],
  table:[{head:["Fall","maskulin","feminin","neutral","Plural"],rows:[
   ["Nom.","gut**er** Kaffee","gut**e** Milch","gut**es** Brot","gut**e** Leute"],
   ["Akk.","gut**en** Kaffee","gut**e** Milch","gut**es** Brot","gut**e** Leute"],
   ["Dat.","gut**em** Kaffee","gut**er** Milch","gut**em** Brot","gut**en** Leuten"],
   ["Gen.","gut**en** Kaffees","gut**er** Milch","gut**en** Brotes","gut**er** Leute"]]}]},
];

registerRows("adjektive", T);
GRAMMAR.theory.adjektive = { rows: T, first: "de-adj-schwach" };
})();
