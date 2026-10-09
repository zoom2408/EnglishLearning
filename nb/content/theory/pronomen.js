/* nb/content/theory/pronomen.js
   Pronomen: Personlig, Possessiv, Refleksiv. Uses "table" mode. */
(() => {
const T = [
 {id:"nb-pron-personlig",num:"01",en:"Personlig pronomen",vi:"Đại từ nhân xưng",short:"jeg/meg, du/deg, han/ham, hun/henne…",
  core:"Đại từ thay cho danh từ, chia theo <strong>2 dạng</strong>: chủ ngữ (subjektsform) và tân ngữ (objektsform) — đơn giản hơn tiếng Đức vì không có Dativ riêng.",
  forms:[["Chủ ngữ","Làm chủ ngữ của động từ","**Jeg** liker Norge."],["Tân ngữ","Làm tân ngữ (trực tiếp hoặc gián tiếp, hoặc sau giới từ)","Hun liker **meg**. / Dette er til **deg**."]],
  uses:[["Thay danh từ đã nhắc ở câu trước","Dette er Anna. **Hun** kommer fra Hanoi."],["Sau giới từ, luôn dùng dạng tân ngữ","Boka er til **ham**."]],
  signals:["jeg/du/han/hun/den/det/vi/dere/de"],
  speak:5,write:5,
  reg:"Khác tiếng Đức, tiếng Na Uy chỉ có 2 dạng (chủ ngữ/tân ngữ), không phân biệt Akkusativ và Dativ riêng — đơn giản hơn nhiều.",
  mistake:["Hun liker jeg.","Hun liker meg.","Tân ngữ của động từ phải dùng dạng tân ngữ (meg), không dùng dạng chủ ngữ (jeg)."],
  table:[{head:["Chủ ngữ","Tân ngữ"],rows:[["jeg","meg"],["du","deg"],["han","ham/han"],["hun","henne"],["den/det","den/det"],["vi","oss"],["dere","dere"],["de","dem"]]}]},

 {id:"nb-pron-possessiv",num:"02",en:"Possessivt pronomen",vi:"Đại từ sở hữu",short:"min/mi/mitt/mine (chia theo giống/số của danh từ)",
  core:"Đại từ sở hữu chia theo <strong>giống và số</strong> của danh từ sở hữu — có thể đứng <strong>trước</strong> danh từ (trang trọng/văn viết) hoặc <strong>sau</strong> danh từ ở dạng bestemt (khẩu ngữ tự nhiên hơn).",
  forms:[["Trước danh từ","min/mi/mitt/mine + danh từ (ubestemt)","**min** bil, **mi** bok, **mitt** hus"],["Sau danh từ (tự nhiên hơn)","danh từ (bestemt) + min/mi/mitt/mine","bil**en** min, bok**a** mi, hus**et** mitt"]],
  uses:[["Văn nói tự nhiên, danh từ trước","Dette er bil**en** min."],["Văn viết trang trọng, đại từ trước","Dette er **min** bil."]],
  signals:["min/mi/mitt/mine","din/di/ditt/dine","hans/hennes/dens/dets","vår/vårt/våre","deres"],
  speak:5,write:4,
  reg:"Trong khẩu ngữ hằng ngày, đặt sở hữu SAU danh từ (boka mi) tự nhiên hơn hẳn so với đặt trước (mi bok) — ưu tiên học cách này trước.",
  mistake:["mi bil","min bil / bilen min","“bil” là hankjønn (en-ord) nên dùng “min”, không phải “mi” (chỉ dùng cho hunkjønn)."],
  table:[{head:["Ngôi","min-nhóm","hunkjønn","intetkjønn","số nhiều"],rows:[["jeg","min","mi","mitt","mine"],["du","din","di","ditt","dine"],["han/hun","hans/hennes","hans/hennes","hans/hennes","hans/hennes"],["vi","vår","vår","vårt","våre"]]}]},

 {id:"nb-pron-refleksiv",num:"03",en:"Refleksivt pronomen",vi:"Đại từ phản thân",short:"meg selv, deg selv, seg, oss selv, dere selv, seg",
  core:"Dùng với <strong>động từ phản thân</strong> khi chủ ngữ và tân ngữ là cùng một người: glede seg, vaske seg, interessere seg for… Ngôi thứ 3 (han/hun/den/det/de) luôn dùng <strong>seg</strong>.",
  forms:[["Ngôi 1/2","meg/deg/oss/dere + selv (tùy ngữ cảnh)","Jeg gleder **meg** til ferien."],["Ngôi 3","seg (không đổi theo giống/số)","Han gleder **seg** til ferien."]],
  uses:[["Động từ chỉ tồn tại ở dạng phản thân","Jeg interesserer **meg** for musikk."],["Hành động chủ thể tự làm cho mình","Hun kler **seg** fort om morgenen."]],
  signals:["glede seg","vaske seg","interessere seg for","kle seg"],
  speak:4,write:4,
  reg:"“selv” thường chỉ thêm vào khi cần nhấn mạnh (meg selv = chính bản thân tôi); với động từ phản thân thông thường, nhiều khi chỉ cần meg/deg/seg là đủ.",
  mistake:["Han gleder ham til ferien.","Han gleder seg til ferien.","Ngôi thứ 3 (han) luôn dùng “seg”, không dùng “ham” (dạng tân ngữ thường)."],
  table:[{head:["Ngôi","Refleksivt pronomen"],rows:[["jeg","meg (selv)"],["du","deg (selv)"],["han/hun/den/det","seg"],["vi","oss (selv)"],["dere","dere (selv)"],["de","seg"]]}]},
];

registerRows("pronomen", T);
GRAMMAR.theory.pronomen = { rows: T, first: "nb-pron-personlig" };
})();
