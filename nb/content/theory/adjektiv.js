/* nb/content/theory/adjektiv.js
   Adjektiv: Ubestemt form (gender agreement), Bestemt form, and
   Komparasjon. Uses the "table" diagram mode. */
(() => {
const T = [
 {id:"nb-adj-ubestemt",num:"01",en:"Ubestemt form",vi:"Dạng không xác định (hòa hợp giống)",short:"en/ei + Ø, et + -t, flertall + -e",
  core:"Ở dạng <strong>ubestemt</strong>, tính từ hòa hợp theo <strong>giống</strong> của danh từ: et-ord thêm <strong>-t</strong>, số nhiều (mọi giống) thêm <strong>-e</strong>, en/ei-ord giữ nguyên dạng gốc.",
  forms:[["en/ei-ord","Giữ nguyên dạng gốc","en **stor** bil, ei **stor** bok"],["et-ord","Thêm -t","et **stort** hus"],["Flertall (mọi giống)","Thêm -e","**store** biler/bøker/hus"]],
  uses:[["Mô tả danh từ số ít giống đực/cái","Dette er en **fin** dag."],["Mô tả danh từ số ít giống trung","Dette er et **fint** hus."],["Mô tả danh từ số nhiều","Dette er **fine** biler."]],
  signals:["et-ord → +t","flertall → +e"],
  speak:5,write:5,
  reg:"Đây là điểm khác lớn nhất so với tiếng Đức: tính từ tiếng Na Uy KHÔNG chia theo cách (Fall), chỉ chia theo giống và số — đơn giản hơn nhiều.",
  mistake:["et stor hus","et stort hus","Et-ord ở dạng ubestemt phải thêm -t cho tính từ."],
  table:[{head:["Giống","Ví dụ"],rows:[["en-ord","en **stor** bil"],["ei-ord","ei **stor** bok"],["et-ord","et **stort** hus"],["Flertall","**store** hus/biler/bøker"]]}]},

 {id:"nb-adj-bestemt",num:"02",en:"Bestemt form",vi:"Dạng xác định",short:"luôn thêm -e, bất kể giống/số",
  core:"Ở dạng <strong>bestemt</strong> (có den/det/de + danh từ bestemt), tính từ <strong>luôn thêm -e</strong> — không phân biệt giống hay số, đơn giản hơn ubestemt.",
  forms:[["+","den/det/de + tính từ -e + danh từ (bestemt)","**den** stor**e** bilen"],["Giống trung","det + tính từ -e + danh từ (bestemt)","**det** stor**e** huset"],["Số nhiều","de + tính từ -e + danh từ (bestemt)","**de** stor**e** husene"]],
  uses:[["Nói về một vật cụ thể, đã biết","**Den** stor**e** bilen er min."],["Luôn cần den/det/de phía trước khi có tính từ","**Det** fin**e** huset ligger der."]],
  signals:["den/det/de + tính từ -e + danh từ (bestemt)"],
  speak:5,write:5,
  reg:"Khi tính từ đứng trước danh từ bestemt, BẮT BUỘC phải có den/det/de ở đầu cụm — khác với tiếng Anh không cần từ tương đương.",
  mistake:["stor bilen","den store bilen","Khi có tính từ trước danh từ bestemt, phải thêm den/det/de ở đầu cụm."],
  table:[{head:["Giống","Ví dụ"],rows:[["en-ord","**den** store bilen"],["ei-ord","**den** store boka"],["et-ord","**det** store huset"],["Flertall","**de** store husene"]]}]},

 {id:"nb-adj-komparasjon",num:"03",en:"Komparasjon",vi:"So sánh hơn, nhất",short:"stor → større → størst",
  core:"So sánh hơn thêm <strong>-ere</strong>, so sánh nhất thêm <strong>-est</strong> — một số tính từ thông dụng có dạng bất quy tắc (god → bedre → best).",
  forms:[["Positiv","Dạng gốc","**stor**"],["Komparativ","+ -ere","**større**"],["Superlativ","+ -est (+ den/det/de … -este khi xác định)","**størst** / den **største**"]],
  uses:[["So sánh hơn giữa hai đối tượng","Oslo er **større** enn Bergen."],["So sánh nhất","Oslo er den **største** byen i Norge."]],
  signals:["-ere (komparativ)","-est/-este (superlativ)"],
  speak:5,write:5,
  reg:"Các tính từ bất quy tắc hay gặp: god→bedre→best, dårlig→verre→verst, liten→mindre→minst, mye→mer→mest, gammel→eldre→eldst.",
  mistake:["Oslo er mer stor enn Bergen.","Oslo er større enn Bergen.","Tính từ ngắn dùng đuôi -ere, không dùng “mer” (chỉ dùng cho tính từ dài/phân từ)."],
  table:[{head:["Positiv","Komparativ","Superlativ"],rows:[["stor","større","størst"],["god","bedre","best"],["dårlig","verre","verst"],["liten","mindre","minst"],["gammel","eldre","eldst"]]}]},
];

registerRows("adjektiv", T);
GRAMMAR.theory.adjektiv = { rows: T, first: "nb-adj-ubestemt" };
})();
