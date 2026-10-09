/* de/content/theory/satzbau.js
   Satzbau & Nebensätze: V2-Regel, weil/da, dass, obwohl, damit/um…zu.
   Row 1 uses the "table" mode; rows 2-5 use the "xf" (sentence
   transform) mode, same mechanism as the English relative-clauses
   module. */
(() => {
const T = [
 {id:"de-satz-v2",num:"01",en:"Hauptsatz: V2-Regel",vi:"Quy tắc động từ vị trí 2",short:"Động từ chia luôn ở vị trí thứ 2",
  core:"Trong <strong>mệnh đề chính</strong>, động từ đã chia luôn đứng ở <strong>vị trí thứ 2</strong> — bất kể phần nào đứng ở vị trí 1 (chủ ngữ, trạng từ, tân ngữ…), động từ không bao giờ nhúc nhích.",
  forms:[["Chủ ngữ ở vị trí 1","Thứ tự bình thường","<mark>Ich</mark> gehe heute ins Kino."],["Trạng từ ở vị trí 1","Chủ ngữ đẩy xuống sau động từ","<mark>Heute</mark> gehe ich ins Kino."],["Tân ngữ ở vị trí 1 (nhấn mạnh)","Chủ ngữ vẫn đẩy xuống sau động từ","<mark>Ins Kino</mark> gehe ich heute."]],
  uses:[["Câu trần thuật đơn giản","Ich <mark>lerne</mark> jeden Tag Deutsch."],["Nhấn mạnh một thành phần bằng cách đưa lên đầu câu","Morgen <mark>fahre</mark> ich nach Berlin."]],
  signals:["Chủ ngữ + V...","Trạng từ/Tân ngữ + V + Chủ ngữ..."],
  speak:5,write:5,
  reg:"Đây là quy tắc nền tảng nhất của tiếng Đức — mọi mệnh đề chính, dù bắt đầu bằng từ gì, động từ chia luôn ở vị trí 2.",
  mistake:["Heute ich gehe ins Kino.","Heute gehe ich ins Kino.","Khi trạng từ đứng đầu câu, động từ vẫn phải ở vị trí 2, chủ ngữ bị đẩy xuống vị trí 3."],
  table:[{title:"Vị trí 1 thay đổi, động từ luôn ở vị trí 2",head:["Vị trí 1","Vị trí 2 (Verb)","Phần còn lại"],rows:[
   ["Ich","**gehe**","heute ins Kino."],
   ["Heute","**gehe**","ich ins Kino."],
   ["Ins Kino","**gehe**","ich heute."]]}]},

 {id:"de-satz-weil",num:"02",en:"weil / da",vi:"Mệnh đề nguyên nhân",short:"weil/da + …, động từ xuống cuối",
  core:"<strong>weil</strong> và <strong>da</strong> (vì, bởi vì) giới thiệu mệnh đề phụ chỉ nguyên nhân. Trong mệnh đề phụ, động từ chia <strong>bị đẩy xuống cuối câu</strong> — khác hẳn mệnh đề chính.",
  forms:[["+","…, weil + Subjekt + … + Verb (cuối)","Ich bleibe zu Hause, <mark>weil</mark> ich krank <mark>bin</mark>."],["Đảo vị trí","weil-Satz đứng trước thì mệnh đề chính đảo động từ lên ngay sau dấu phẩy","<mark>Weil</mark> ich krank <mark>bin</mark>, <mark>bleibe</mark> ich zu Hause."]],
  uses:[["Trả lời câu hỏi Warum?","Warum lernst du Deutsch? — <mark>Weil</mark> ich in Deutschland <mark>arbeiten</mark> will."],["da dùng khi lý do đã rõ/được biết trước, thường ở đầu câu","<mark>Da</mark> es schon spät <mark>war</mark>, gingen wir nach Hause."]],
  signals:["weil","da","Warum?"],
  speak:5,write:5,
  reg:"weil là liên từ phổ biến nhất cho nguyên nhân trong cả nói và viết; da trang trọng hơn, hay đứng đầu câu khi lý do đã được biết.",
  mistake:["Ich bleibe zu Hause, weil ich bin krank.","Ich bleibe zu Hause, weil ich krank bin.","Sau weil, động từ chia phải đứng ở CUỐI mệnh đề, không giữ vị trí 2 như mệnh đề chính."],
  xf:{la:"Hai câu",lb:"Một câu (weil)",a:"{1:Ich bleibe} zu Hause. {2:Ich bin krank}.",b:"{1:Ich bleibe} zu Hause, {2:weil ich krank bin}.",note:"weil đẩy động từ chia (bin) xuống cuối mệnh đề phụ."}},

 {id:"de-satz-dass",num:"03",en:"dass",vi:"Mệnh đề danh từ",short:"dass + …, động từ xuống cuối",
  core:"<strong>dass</strong> (rằng) giới thiệu mệnh đề làm tân ngữ hoặc chủ ngữ, thường sau các động từ như wissen, glauben, sagen, denken, hoffen. Động từ trong mệnh đề <strong>dass</strong> cũng đứng ở cuối.",
  forms:[["+","S + V + …, dass + Subjekt + … + Verb (cuối)","Ich weiß, <mark>dass</mark> er morgen <mark>kommt</mark>."],["Phủ định","nicht trong mệnh đề dass","Ich glaube, <mark>dass</mark> er <mark>nicht kommt</mark>."]],
  uses:[["Sau động từ chỉ nhận thức/phát ngôn (wissen, glauben, sagen, denken)","Sie sagt, <mark>dass</mark> sie müde <mark>ist</mark>."],["Sau tính từ + sein (es ist wichtig/klar, dass…)","Es ist wichtig, <mark>dass</mark> du pünktlich <mark>kommst</mark>."]],
  signals:["dass","wissen, dass…","glauben, dass…","sagen, dass…"],
  speak:5,write:5,
  reg:"Trong khẩu ngữ thân mật, dass đôi khi bị bỏ và câu được nói như hai mệnh đề chính độc lập — nhưng trong văn viết và giao tiếp trang trọng, dass + động từ cuối câu là chuẩn.",
  mistake:["Ich weiß, dass er kommt morgen.","Ich weiß, dass er morgen kommt.","Sau dass, động từ chia phải ở cuối mệnh đề."],
  xf:{la:"Hai câu",lb:"Một câu (dass)",a:"{1:Ich weiß}. {2:Er kommt morgen}.",b:"{1:Ich weiß}, {2:dass er morgen kommt}.",note:"dass giới thiệu mệnh đề tân ngữ; động từ (kommt) đẩy xuống cuối."}},

 {id:"de-satz-obwohl",num:"04",en:"obwohl",vi:"Mệnh đề tương phản",short:"obwohl + …, động từ xuống cuối",
  core:"<strong>obwohl</strong> (mặc dù) giới thiệu mệnh đề phụ chỉ sự tương phản — động từ cũng đứng ở cuối, giống weil và dass. (Phân biệt với <strong>trotzdem</strong>: đó là trạng từ đứng trong mệnh đề chính, không đẩy động từ xuống cuối.)",
  forms:[["+","…, obwohl + Subjekt + … + Verb (cuối)","Wir gehen spazieren, <mark>obwohl</mark> es <mark>regnet</mark>."],["Đảo vị trí","obwohl-Satz đứng trước thì mệnh đề chính đảo động từ lên ngay sau dấu phẩy","<mark>Obwohl</mark> es <mark>regnet</mark>, gehen wir spazieren."]],
  uses:[["Tương phản giữa hai mệnh đề","Er kauft das Auto, <mark>obwohl</mark> es sehr teuer <mark>ist</mark>."],["trotzdem (trạng từ, V2 áp dụng bình thường)","Es regnet. <mark>Trotzdem</mark> <mark>gehen</mark> wir spazieren."]],
  signals:["obwohl","trotzdem (trạng từ, không phải liên từ phụ thuộc)"],
  speak:4,write:5,
  reg:"obwohl là liên từ phụ thuộc (động từ cuối câu); trotzdem là trạng từ đứng trong mệnh đề chính độc lập (theo quy tắc V2 bình thường) — hai từ cùng nghĩa “mặc dù/tuy vậy” nhưng cấu trúc câu khác hẳn nhau.",
  mistake:["Obwohl es regnet, wir gehen spazieren.","Obwohl es regnet, gehen wir spazieren.","Khi mệnh đề obwohl đứng trước, mệnh đề chính phải đảo động từ lên ngay sau dấu phẩy (gehen wir), không giữ nguyên thứ tự chủ ngữ-động từ."],
  xf:{la:"Hai câu",lb:"Một câu (obwohl)",a:"{1:Es regnet stark}. {2:Wir gehen spazieren}.",b:"{1:Obwohl es stark regnet}, {2:gehen wir spazieren}.",note:"obwohl đẩy động từ (regnet) xuống cuối mệnh đề phụ; mệnh đề chính đảo động từ lên ngay sau dấu phẩy."}},

 {id:"de-satz-damit",num:"05",en:"damit / um…zu",vi:"Mệnh đề mục đích",short:"damit (chủ ngữ khác) / um…zu (chủ ngữ giống nhau)",
  core:"Cả hai đều diễn tả <strong>mục đích</strong> (để làm gì). Dùng <strong>um…zu + Infinitiv</strong> khi hai mệnh đề có <strong>cùng chủ ngữ</strong> (không cần chia động từ); dùng <strong>damit</strong> khi hai mệnh đề có <strong>chủ ngữ khác nhau</strong>.",
  forms:[["um…zu + Infinitiv","Cùng chủ ngữ","Ich lerne jeden Tag, <mark>um</mark> die Prüfung <mark>zu bestehen</mark>."],["damit + Verb (cuối)","Chủ ngữ khác nhau","Ich spreche langsam, <mark>damit</mark> du mich <mark>verstehst</mark>."]],
  uses:[["Mục đích, chủ ngữ giống nhau","Sie spart Geld, <mark>um</mark> ein Auto <mark>zu kaufen</mark>."],["Mục đích, chủ ngữ khác nhau","Ich gehe früh ins Bett, <mark>damit</mark> meine Kinder nicht <mark>gestört werden</mark>."]],
  signals:["um…zu","damit","Wozu?"],
  speak:4,write:5,
  reg:"Lỗi hay gặp: dùng damit dù chủ ngữ giống nhau — khi đó um…zu gọn và tự nhiên hơn hẳn.",
  mistake:["Ich lerne, damit ich die Prüfung bestehe.","Ich lerne, um die Prüfung zu bestehen.","Chủ ngữ giống nhau (ich … ich) nên dùng um…zu + Infinitiv thay vì damit."],
  xf:{la:"Hai câu (cùng chủ ngữ)",lb:"Một câu (um…zu)",a:"{1:Ich lerne jeden Tag}. {2:Ich will die Prüfung bestehen}.",b:"{1:Ich lerne jeden Tag}, {2:um die Prüfung zu bestehen}.",note:"Chủ ngữ giống nhau ở cả hai mệnh đề → um…zu + Infinitiv, không chia động từ, không nhắc lại chủ ngữ."}},
];

registerRows("satzbau", T);
GRAMMAR.theory.satzbau = { rows: T, first: "de-satz-v2" };
})();
