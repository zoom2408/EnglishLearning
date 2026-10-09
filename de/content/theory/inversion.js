/* de/content/theory/inversion.js
   Inversion & Betonung: Vorfeld für Fokus, Es-Platzhalter,
   Nicht nur...sondern auch, nicht vs kein. Mixed xf/table modes. */
(() => {
const T = [
 {id:"de-emph-vorfeld",num:"01",en:"Vorfeld für Fokus",vi:"Đưa thành phần cần nhấn mạnh lên đầu câu",short:"Thành phần nhấn mạnh + V (vị trí 2) + S…",
  core:"Vị trí 1 của câu (Vorfeld) không nhất thiết phải là chủ ngữ — đưa thành phần muốn <strong>nhấn mạnh</strong> lên đó, động từ vẫn giữ vị trí 2 (quy tắc V2).",
  forms:[["Trung tính","Chủ ngữ ở vị trí 1","<mark>Ich</mark> habe das Buch gestern gelesen."],["Nhấn mạnh thời gian","Trạng từ thời gian ở vị trí 1","<mark>Gestern</mark> habe ich das Buch gelesen."],["Nhấn mạnh tân ngữ","Tân ngữ ở vị trí 1","<mark>Das Buch</mark> habe ich gestern gelesen."]],
  uses:[["Nhấn mạnh thời gian/địa điểm","<mark>In Berlin</mark> habe ich drei Jahre gelebt."],["Nối mạch với câu trước (thông tin đã biết lên đầu)","Das Problem kenne ich. <mark>Eine Lösung</mark> habe ich aber noch nicht."]],
  signals:["Vorfeld + V (vị trí 2) + Subjekt…"],
  speak:4,write:5,
  reg:"Đây là công cụ nhấn mạnh tự nhiên nhất của tiếng Đức — không cần cấu trúc đặc biệt như tiếng Anh (It is … that…), chỉ cần đổi vị trí 1.",
  mistake:["Gestern ich habe das Buch gelesen.","Gestern habe ich das Buch gelesen.","Khi trạng từ chiếm vị trí 1, động từ vẫn phải ở vị trí 2 — chủ ngữ bị đẩy xuống vị trí 3."],
  xf:{la:"Trung tính",lb:"Nhấn mạnh thời gian",a:"Ich habe das Buch gestern gelesen.",b:"Gestern habe ich das Buch gelesen.",note:"Đưa “gestern” lên vị trí 1 để nhấn mạnh thời điểm; động từ (habe) vẫn ở vị trí 2."}},

 {id:"de-emph-es",num:"02",en:"Es als Platzhalter",vi:"Es làm chỗ trống hình thức",short:"Es + V + S thực + …",
  core:"<strong>Es</strong> có thể đứng ở vị trí 1 làm “chỗ trống hình thức” khi muốn mở đầu câu mà không có thành phần cụ thể nào cần nhấn mạnh — hay dùng để mở đầu câu chuyện hoặc giới thiệu điều gì mới.",
  forms:[["+","Es + V (chia) + … + chủ ngữ thực","<mark>Es</mark> <mark>kommen</mark> heute viele Gäste."],["Kể chuyện","Es + war/gab + …","<mark>Es</mark> <mark>war</mark> einmal ein König…"]],
  uses:[["Mở đầu câu chuyện cổ tích/kể chuyện","<mark>Es</mark> <mark>war</mark> einmal eine Prinzessin."],["Giới thiệu điều gì đó mới, chủ ngữ thực đứng sau động từ","<mark>Es</mark> <mark>klopft</mark> jemand an der Tür."]],
  signals:["Es + V + chủ ngữ thực"],
  speak:3,write:4,
  reg:"“es” ở đây CHỈ đứng khi không có thành phần nào khác chiếm vị trí 1 — nó biến mất ngay khi một từ khác (vd “heute”) được đưa lên đầu câu.",
  mistake:["Viele Gäste kommen es heute.","Es kommen heute viele Gäste. / Heute kommen viele Gäste.","“es” chỉ đứng ở vị trí 1 làm chỗ trống; không xuất hiện ở giữa hay cuối câu."],
  xf:{la:"Trung tính",lb:"Es làm chỗ trống (phong cách kể/giới thiệu)",a:"Viele Gäste kommen heute.",b:"Es kommen heute viele Gäste.",note:"“es” chỉ dùng khi không có thành phần nào khác chiếm vị trí 1; biến mất ngay khi một từ khác (vd “heute”) đứng đầu câu."}},

 {id:"de-emph-nichtnur",num:"03",en:"Nicht nur…, sondern auch…",vi:"Không chỉ…, mà còn…",short:"Nicht nur + V (đảo) + …, sondern auch + …",
  core:"<strong>Nicht nur</strong> ở vị trí 1 kích hoạt đảo động từ thật sự (động từ lên ngay sau) — theo đúng quy tắc V2 giống mọi trường hợp fronting khác; <strong>sondern auch</strong> ở vế hai bổ sung thông tin.",
  forms:[["+","Nicht nur + V (chia) + S + …, sondern auch + …","<mark>Nicht nur</mark> <mark>lernt</mark> er Deutsch, sondern auch Französisch."]],
  uses:[["Nhấn mạnh sự bổ sung/mở rộng","<mark>Nicht nur</mark> die Firma <mark>profitiert</mark>, sondern auch die Kunden."]],
  signals:["Nicht nur…, sondern auch…"],
  speak:3,write:5,
  reg:"Khi “Nicht nur” không đứng đầu câu (vd “Er lernt nicht nur Deutsch, sondern auch Französisch”) thì không cần đảo ngữ — chỉ đảo khi nó thực sự chiếm vị trí 1.",
  mistake:["Nicht nur er lernt Deutsch, sondern auch Französisch.","Nicht nur lernt er Deutsch, sondern auch Französisch.","Khi “Nicht nur” chiếm vị trí 1, động từ (lernt) phải đảo lên ngay sau theo quy tắc V2."],
  xf:{la:"Trung tính",lb:"Nhấn mạnh (Nicht nur…sondern auch)",a:"Er lernt Deutsch. Er lernt auch Französisch.",b:"Nicht nur lernt er Deutsch, sondern auch Französisch.",note:"“Nicht nur” chiếm vị trí 1 nên động từ (lernt) đảo lên ngay sau, giống mọi trường hợp fronting khác theo quy tắc V2."}},

 {id:"de-emph-negation",num:"04",en:"nicht vs. kein",vi:"Phân biệt nicht và kein",short:"kein + danh từ (ein/không mạo từ); nicht + còn lại",
  core:"Phủ định danh từ có mạo từ không xác định hoặc không có mạo từ dùng <strong>kein/keine</strong> (không phải “nicht ein”); phủ định động từ, tính từ, trạng từ hoặc danh từ có mạo từ xác định dùng <strong>nicht</strong>.",
  forms:[["kein + Nomen","Phủ định danh từ (ein/không mạo từ)","Ich habe <mark>kein</mark> Auto."],["nicht + …","Phủ định động từ/tính từ/danh từ có mạo từ xác định","Ich mag das Auto <mark>nicht</mark>."]],
  uses:[["kein trước danh từ không xác định","Das ist <mark>keine</mark> gute Idee."],["nicht trước tính từ/trạng từ","Das Wetter ist heute <mark>nicht</mark> schön."]],
  signals:["kein/keine + Nomen","nicht + Verb/Adjektiv/Adverb"],
  speak:5,write:5,
  reg:"Mẹo nhớ nhanh: nếu câu khẳng định dùng “ein”, câu phủ định dùng “kein”; nếu không có “ein” nào để thay, dùng “nicht”.",
  mistake:["Ich habe nicht ein Auto.","Ich habe kein Auto.","Phủ định danh từ không mạo từ xác định dùng kein, không dùng “nicht ein”."],
  table:[{head:["Trường hợp","Dùng"],rows:[["Danh từ + ein/không mạo từ","**kein/keine**"],["Danh từ + mạo từ xác định","**nicht**"],["Động từ","**nicht**"],["Tính từ/trạng từ","**nicht**"]]}]},
];

registerRows("inversion", T);
GRAMMAR.theory.inversion = { rows: T, first: "de-emph-vorfeld" };
})();
