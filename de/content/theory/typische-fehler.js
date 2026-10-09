/* de/content/theory/typische-fehler.js
   Typische Fehler: weil vs denn, seit/für/vor, Wortstellung im
   Nebensatz, Adjektivendung, Groß-/Kleinschreibung. Capstone review
   module. Mixed xf/table modes. */
(() => {
const T = [
 {id:"de-fehler-weildenn",num:"01",en:"weil vs. denn",vi:"Phân biệt weil và denn",short:"weil: V cuối · denn: V2 bình thường",
  core:"<strong>weil</strong> và <strong>denn</strong> đều có nghĩa “vì”, nhưng trật tự từ hoàn toàn khác nhau: weil đẩy động từ xuống <strong>cuối câu</strong> (liên từ phụ thuộc); denn giữ nguyên trật tự bình thường, động từ ở <strong>vị trí 2</strong> (liên từ đẳng lập).",
  forms:[["weil","…, weil + S + … + Verb (cuối)","…, <mark>weil</mark> ich krank <mark>bin</mark>."],["denn","…, denn + S + Verb (vị trí 2) + …","…, <mark>denn</mark> ich <mark>bin</mark> krank."]],
  uses:[["weil (mệnh đề phụ, V cuối)","Ich bleibe zu Hause, <mark>weil</mark> ich krank <mark>bin</mark>."],["denn (mệnh đề chính, V2)","Ich bleibe zu Hause, <mark>denn</mark> ich <mark>bin</mark> krank."]],
  signals:["weil + … + V (cuối)","denn + V2 bình thường"],
  speak:5,write:5,
  reg:"Đây là một trong những lỗi phổ biến nhất của người học — nhớ: denn giống “for” trang trọng trong tiếng Anh (giữ nguyên trật tự câu), weil giống “because” (đẩy động từ xuống cuối).",
  mistake:["Ich bleibe zu Hause, denn ich krank bin.","Ich bleibe zu Hause, denn ich bin krank.","Sau denn, trật tự từ bình thường (V2) — không đẩy động từ xuống cuối như sau weil."],
  xf:{la:"weil (V cuối)",lb:"denn (V2 bình thường)",a:"Ich bleibe zu Hause, weil ich krank bin.",b:"Ich bleibe zu Hause, denn ich bin krank.",note:"Cùng nghĩa “vì”, nhưng weil đẩy “bin” xuống cuối còn denn giữ “bin” ở vị trí 2 (ngay sau chủ ngữ ich)."}},

 {id:"de-fehler-seitfuer",num:"02",en:"seit vs. für vs. vor",vi:"Phân biệt seit, für, vor",short:"seit: từ…đến nay · für: khoảng xác định · vor: cách đây",
  core:"<strong>seit</strong> = từ một mốc trong quá khứ đến hiện tại, việc còn tiếp diễn (đi với Präsens/Perfekt). <strong>für</strong> = khoảng thời gian đã xác định trước. <strong>vor</strong> = cách đây bao lâu (mốc quá khứ đơn thuần, không nối với hiện tại).",
  forms:[["seit + Dativ","Từ mốc đến nay, còn tiếp diễn","Ich wohne <mark>seit</mark> 2020 hier."],["für + Akkusativ","Khoảng thời gian xác định trước","Ich war <mark>für</mark> zwei Wochen in Berlin."],["vor + Dativ","Cách đây (mốc quá khứ đơn)","Ich war <mark>vor</mark> zwei Jahren in Berlin."]],
  uses:[["Việc bắt đầu trong quá khứ, vẫn đang tiếp diễn","Sie arbeitet <mark>seit</mark> fünf Jahren hier."],["Khoảng thời gian đã kết thúc hoặc dự định","Ich fahre <mark>für</mark> eine Woche nach Hamburg."]],
  signals:["seit + mốc thời gian","für + khoảng thời gian","vor + khoảng thời gian"],
  speak:5,write:5,
  reg:"Lỗi hay gặp của người Việt (ảnh hưởng từ “for” tiếng Anh): dùng für cho việc còn tiếp diễn đến nay — phải dùng seit mới đúng.",
  mistake:["Ich wohne für 2020 hier.","Ich wohne seit 2020 hier.","Mốc thời gian còn tiếp diễn đến hiện tại dùng seit, không phải für."],
  table:[{head:["Giới từ","Ý nghĩa","Ví dụ"],rows:[["seit","từ … đến nay, còn tiếp diễn","**seit** 2020"],["für","khoảng thời gian xác định trước","**für** zwei Wochen"],["vor","cách đây (mốc quá khứ đơn)","**vor** zwei Jahren"]]}]},

 {id:"de-fehler-nebensatz",num:"03",en:"Wortstellung im Nebensatz",vi:"Quên đẩy động từ xuống cuối mệnh đề phụ",short:"weil/dass/obwohl/wenn → V luôn ở cuối",
  core:"Lỗi phổ biến nhất: quên đẩy động từ chia xuống <strong>cuối</strong> mệnh đề phụ sau weil/dass/obwohl/wenn — đây là điểm khác biệt lớn nhất so với tiếng Anh/Việt.",
  forms:[["Sai","Giữ trật tự như mệnh đề chính","dass er <mark>kommt</mark> morgen. (SAI)"],["Đúng","Động từ luôn ở cuối mệnh đề phụ","dass er morgen <mark>kommt</mark>. (ĐÚNG)"]],
  uses:[["Áp dụng cho mọi liên từ phụ thuộc","weil, dass, obwohl, wenn, als, nachdem, bevor… đều đẩy V xuống cuối."]],
  signals:["weil/dass/obwohl/wenn/als/nachdem/bevor + … + V (cuối)"],
  speak:5,write:5,
  reg:"Quy tắc này áp dụng cho MỌI liên từ phụ thuộc (trừ denn — xem module riêng) — luyện phản xạ kiểm tra động từ cuối câu mỗi khi thấy các từ này.",
  mistake:["Ich weiß, dass er kommt morgen.","Ich weiß, dass er morgen kommt.","Sau dass (và weil/obwohl/wenn), động từ chia luôn đứng ở cuối mệnh đề, bất kể mệnh đề dài hay ngắn."],
  xf:{la:"Sai",lb:"Đúng",a:"Ich weiß, dass er kommt morgen.",b:"Ich weiß, dass er morgen kommt.",note:"Sau dass (và weil/obwohl/wenn), động từ chia luôn đứng ở cuối mệnh đề."}},

 {id:"de-fehler-adjende",num:"04",en:"Adjektivendung vergessen",vi:"Quên chia đuôi tính từ",short:"Tính từ trước danh từ LUÔN có đuôi",
  core:"Lỗi phổ biến: quên thêm đuôi cho tính từ đứng trước danh từ — tính từ tiếng Đức LUÔN có đuôi khi đứng trước danh từ (khác tiếng Anh hoàn toàn không chia).",
  forms:[["Sai","Tính từ không chia, giống tiếng Anh","ein <mark>neu</mark> Auto. (SAI)"],["Đúng","Tính từ chia theo giống/cách (xem Adjektivdeklination)","ein <mark>neues</mark> Auto. (ĐÚNG)"]],
  uses:[["Luôn kiểm tra đuôi khi tính từ đứng trước danh từ","Das ist ein <mark>interessantes</mark> Buch."]],
  signals:["Tính từ + danh từ → luôn có đuôi"],
  speak:5,write:5,
  reg:"Xem lại module Adjektivdeklination để tra chính xác đuôi theo giống/cách/mạo từ đứng trước.",
  mistake:["Ich habe ein neu Auto gekauft.","Ich habe ein neues Auto gekauft.","Tính từ đứng trước danh từ luôn phải chia đuôi theo giống/cách."],
  xf:{la:"Sai",lb:"Đúng",a:"Ich habe ein neu Auto gekauft.",b:"Ich habe ein neues Auto gekauft.",note:"Tính từ đứng trước danh từ luôn phải chia đuôi theo giống/cách (xem module Adjektivdeklination)."}},

 {id:"de-fehler-grossschreibung",num:"05",en:"Groß-/Kleinschreibung",vi:"Quên viết hoa danh từ",short:"Mọi danh từ đều viết hoa, bất kể vị trí",
  core:"Khác hẳn tiếng Anh/Việt: trong tiếng Đức, <strong>mọi danh từ</strong> (không chỉ tên riêng) đều viết hoa chữ cái đầu, bất kể vị trí trong câu.",
  forms:[["Sai","Viết thường như tiếng Anh","ein <mark>buch</mark> über die <mark>sprache</mark>. (SAI)"],["Đúng","Danh từ luôn viết hoa","ein <mark>Buch</mark> über die <mark>Sprache</mark>. (ĐÚNG)"]],
  uses:[["Danh từ giữa câu vẫn viết hoa","Ich lese ein <mark>Buch</mark>."],["Tính từ KHÔNG viết hoa (khác danh từ)","die <mark>deutsche</mark> <mark>Sprache</mark> (tính từ thường, danh từ hoa)"]],
  signals:["Mọi danh từ → viết hoa chữ cái đầu"],
  speak:5,write:5,
  reg:"Quy tắc này áp dụng cho MỌI danh từ, kể cả danh từ trừu tượng (die Liebe, die Freiheit) hoặc danh từ hóa từ động từ/tính từ (das Lesen, das Gute).",
  mistake:["ich lese ein buch.","Ich lese ein Buch.","“Buch” là danh từ nên viết hoa; từ đầu câu “Ich” cũng luôn viết hoa."],
  xf:{la:"Sai",lb:"Đúng",a:"Ich lese ein buch über die deutsche sprache.",b:"Ich lese ein Buch über die deutsche Sprache.",note:"Buch và Sprache là danh từ nên luôn viết hoa, kể cả giữa câu; tính từ (deutsche) thì không viết hoa."}},
];

registerRows("typische-fehler", T);
GRAMMAR.theory["typische-fehler"] = { rows: T, first: "de-fehler-weildenn" };
})();
