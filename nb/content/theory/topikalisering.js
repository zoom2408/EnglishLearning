/* nb/content/theory/topikalisering.js
   Topikalisering & Betoning: Forfelt for fokus, Det som
   plassholder, Ikke bare...men også, ikke vs ingen. Mixed xf/table
   modes. */
(() => {
const T = [
 {id:"nb-emph-forfelt",num:"01",en:"Forfelt for fokus",vi:"Đưa thành phần cần nhấn mạnh lên đầu câu",short:"Thành phần nhấn mạnh + V (vị trí 2) + S…",
  core:"Vị trí 1 của câu không nhất thiết phải là chủ ngữ — đưa thành phần muốn <strong>nhấn mạnh</strong> lên đó, động từ vẫn giữ vị trí 2 (quy tắc V2).",
  forms:[["Trung tính","Chủ ngữ ở vị trí 1","**Jeg** leste boka i går."],["Nhấn mạnh thời gian","Trạng từ thời gian ở vị trí 1","**I går** leste jeg boka."],["Nhấn mạnh tân ngữ","Tân ngữ ở vị trí 1","**Boka** leste jeg i går."]],
  uses:[["Nhấn mạnh thời gian/địa điểm","**I Oslo** har jeg bodd i tre år."],["Nối mạch với câu trước (thông tin đã biết lên đầu)","Problemet kjenner jeg. **En løsning** har jeg derimot ikke funnet ennå."]],
  signals:["Forfelt + V (vị trí 2) + Subjekt…"],
  speak:4,write:5,
  reg:"Đây là công cụ nhấn mạnh tự nhiên nhất của tiếng Na Uy — không cần cấu trúc đặc biệt như tiếng Anh (It is … that…), chỉ cần đổi vị trí 1.",
  mistake:["I går jeg leste boka.","I går leste jeg boka.","Khi trạng từ chiếm vị trí 1, động từ vẫn phải ở vị trí 2 — chủ ngữ bị đẩy xuống vị trí 3."],
  xf:{la:"Trung tính",lb:"Nhấn mạnh thời gian",a:"Jeg leste boka i går.",b:"I går leste jeg boka.",note:"Đưa “i går” lên vị trí 1 để nhấn mạnh thời điểm; động từ (leste) vẫn ở vị trí 2."}},

 {id:"nb-emph-det",num:"02",en:"Det som plassholder",vi:"Det làm chỗ trống hình thức",short:"Det + V + S thực + …",
  core:"<strong>Det</strong> có thể đứng ở vị trí 1 làm “chỗ trống hình thức” khi muốn mở đầu câu mà không có thành phần cụ thể nào cần nhấn mạnh — hay dùng để giới thiệu điều gì mới.",
  forms:[["+","Det + V (chia) + … + chủ ngữ thực","**Det** **kommer** mange gjester i dag."],["Kể chuyện","Det + var/er + …","**Det** **var** en gang en konge…"]],
  uses:[["Mở đầu câu chuyện cổ tích/kể chuyện","**Det** **var** en gang en prinsesse."],["Giới thiệu điều gì đó mới, chủ ngữ thực đứng sau động từ","**Det** **banker** på døren."]],
  signals:["Det + V + chủ ngữ thực"],
  speak:5,write:4,
  reg:"“det” ở đây CHỈ đứng khi không có thành phần nào khác chiếm vị trí 1 — nó biến mất ngay khi một từ khác (vd “i dag”) được đưa lên đầu câu.",
  mistake:["Mange gjester kommer det i dag.","Det kommer mange gjester i dag. / I dag kommer mange gjester.","“det” chỉ đứng ở vị trí 1 làm chỗ trống; không xuất hiện ở giữa hay cuối câu."],
  xf:{la:"Trung tính",lb:"Det làm chỗ trống (phong cách giới thiệu)",a:"Mange gjester kommer i dag.",b:"Det kommer mange gjester i dag.",note:"“det” chỉ dùng khi không có thành phần nào khác chiếm vị trí 1; biến mất ngay khi một từ khác (vd “i dag”) đứng đầu câu."}},

 {id:"nb-emph-ikkebare",num:"03",en:"Ikke bare…, men også…",vi:"Không chỉ…, mà còn…",short:"Ikke bare + V (đảo) + …, men også + …",
  core:"<strong>Ikke bare</strong> ở vị trí 1 kích hoạt đảo động từ thật sự — theo đúng quy tắc V2 giống mọi trường hợp fronting khác; <strong>men også</strong> ở vế hai bổ sung thông tin.",
  forms:[["+","Ikke bare + V (chia) + S + …, men også + …","**Ikke bare** **lærer** han norsk, men også fransk."]],
  uses:[["Nhấn mạnh sự bổ sung/mở rộng","**Ikke bare** **tjener** bedriften mer, men også kundene."]],
  signals:["Ikke bare…, men også…"],
  speak:3,write:5,
  reg:"Khi “ikke bare” không đứng đầu câu (vd “Han lærer ikke bare norsk, men også fransk”) thì không cần đảo ngữ — chỉ đảo khi nó thực sự chiếm vị trí 1.",
  mistake:["Ikke bare han lærer norsk, men også fransk.","Ikke bare lærer han norsk, men også fransk.","Khi “Ikke bare” chiếm vị trí 1, động từ (lærer) phải đảo lên ngay sau theo quy tắc V2."],
  xf:{la:"Trung tính",lb:"Nhấn mạnh (Ikke bare…men også)",a:"Han lærer norsk. Han lærer også fransk.",b:"Ikke bare lærer han norsk, men også fransk.",note:"“Ikke bare” chiếm vị trí 1 nên động từ (lærer) đảo lên ngay sau, giống mọi trường hợp fronting khác theo quy tắc V2."}},

 {id:"nb-emph-ikkeingen",num:"04",en:"ikke vs. ingen",vi:"Phân biệt ikke và ingen",short:"ingen + danh từ (không mạo từ); ikke + còn lại",
  core:"Phủ định danh từ không xác định hoặc không có mạo từ thường dùng <strong>ingen/inget/ingen</strong> (không phải “ikke en”); phủ định động từ, tính từ, trạng từ dùng <strong>ikke</strong>.",
  forms:[["ingen + Substantiv","Phủ định danh từ (tự nhiên hơn ikke en)","Jeg har **ingen** bil."],["ikke + …","Phủ định động từ/tính từ/trạng từ","Jeg liker **ikke** bilen."]],
  uses:[["ingen trước danh từ","Det er **ingen** god idé."],["ikke trước tính từ/trạng từ","Været er **ikke** fint i dag."]],
  signals:["ingen + Substantiv","ikke + Verb/Adjektiv/Adverb"],
  speak:5,write:5,
  reg:"Mẹo nhớ nhanh: nếu phủ định cả một danh từ (không vật nào cả), dùng “ingen”; nếu phủ định hành động/trạng thái, dùng “ikke”.",
  mistake:["Jeg har ikke en bil (ít tự nhiên).","Jeg har ingen bil.","Phủ định danh từ không xác định tự nhiên hơn khi dùng “ingen”, không phải “ikke en”."],
  table:[{head:["Trường hợp","Dùng"],rows:[["Danh từ không xác định","**ingen/inget/ingen**"],["Động từ","**ikke**"],["Tính từ/trạng từ","**ikke**"]]}]},
];

registerRows("topikalisering", T);
GRAMMAR.theory.topikalisering = { rows: T, first: "nb-emph-forfelt" };
})();
