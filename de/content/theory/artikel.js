/* de/content/theory/artikel.js
   Artikel & Nomen: 4 Fälle (Nominativ, Akkusativ, Dativ, Genitiv).
   Uses the "table" diagram mode (declension grid) instead of the
   timeline mode used by Zeiten. */
(() => {
const T = [
 {id:"de-art-nom",num:"01",en:"Nominativ",vi:"Cách chủ ngữ",short:"der / die / das / die (Pl.)",
  core:"Cách của <strong>chủ ngữ</strong> — người hoặc vật thực hiện hành động. Đây cũng là dạng “mặc định” tra trong từ điển.",
  forms:[["Wer/Was?","Chủ ngữ của động từ","<mark>Der Mann</mark> arbeitet hier."],["=","Sau sein / werden / bleiben","Er ist <mark>ein guter Lehrer</mark>."]],
  uses:[["Chủ ngữ của câu","<mark>Die Frau</mark> kommt aus Hanoi."],["Vị ngữ sau sein/werden/bleiben","Das ist <mark>mein Bruder</mark>."]],
  signals:["Wer?","Was?"],
  speak:5,write:5,
  reg:"Cách cơ bản nhất, không có giới từ hay động từ nào “đòi” Nominativ — nó luôn là điểm xuất phát để so sánh với 3 cách còn lại.",
  mistake:["Den Mann ist müde.","Der Mann ist müde.","Chủ ngữ luôn ở Nominativ, không phải Akkusativ."],
  table:[{title:"Bestimmter Artikel (xác định)",head:["maskulin","feminin","neutral","Plural"],rows:[["Artikel","der","die","das","die"],["Beispiel","**der** Mann","**die** Frau","**das** Kind","**die** Leute"]]},
         {title:"Unbestimmter Artikel (không xác định)",head:["maskulin","feminin","neutral","Plural"],rows:[["Artikel","ein","eine","ein","— / einige"],["Beispiel","**ein** Mann","**eine** Frau","**ein** Kind","**Leute**"]]}]},

 {id:"de-art-akk",num:"02",en:"Akkusativ",vi:"Cách tân ngữ trực tiếp",short:"den / die / das / die (Pl.)",
  core:"Cách của <strong>tân ngữ trực tiếp</strong> — người/vật chịu tác động trực tiếp của hành động. So với Nominativ, <strong>chỉ giống đực (maskulin) thay đổi</strong>: der→den, ein→einen.",
  forms:[["Wen/Was?","Tân ngữ trực tiếp của động từ","Ich sehe <mark>den Mann</mark>."],["für/durch/ohne/gegen/um","Giới từ luôn đi với Akkusativ","Das ist <mark>für dich</mark>."]],
  uses:[["Tân ngữ trực tiếp","Ich kaufe <mark>einen Apfel</mark>."],["Sau giới từ cố định Akkusativ (für, durch, ohne, gegen, um, bis)","Wir laufen <mark>durch den Park</mark>."]],
  signals:["Wen?","Was?","für","durch","ohne","gegen","um"],
  speak:5,write:5,
  reg:"Giống đực là nơi dễ sai nhất: der→den, ein→einen, er→ihn. Feminin, neutral và số nhiều giữ nguyên như Nominativ.",
  mistake:["Ich sehe der Mann.","Ich sehe den Mann.","Tân ngữ trực tiếp giống đực phải đổi der → den."],
  table:[{title:"Bestimmter Artikel",head:["maskulin","feminin","neutral","Plural"],rows:[["Artikel","**den**","die","das","die"],["Beispiel","**den** Mann","die Frau","das Kind","die Leute"]]},
         {title:"Unbestimmter Artikel",head:["maskulin","feminin","neutral","Plural"],rows:[["Artikel","**einen**","eine","ein","—"],["Beispiel","**einen** Mann","eine Frau","ein Kind","—"]]}]},

 {id:"de-art-dat",num:"03",en:"Dativ",vi:"Cách tân ngữ gián tiếp",short:"dem / der / dem / den+n (Pl.)",
  core:"Cách của <strong>tân ngữ gián tiếp</strong> — người nhận hành động (cho ai, tặng ai, giúp ai).",
  forms:[["Wem?","Tân ngữ gián tiếp của động từ","Ich gebe <mark>dem Mann</mark> das Buch."],["mit/nach/bei/von/zu/aus/seit","Giới từ luôn đi với Dativ","Ich fahre <mark>mit dem Bus</mark>."]],
  uses:[["Tân ngữ gián tiếp (cho ai)","Sie schenkt <mark>ihrer Mutter</mark> Blumen."],["Sau động từ chỉ đòi Dativ: helfen, danken, gefallen, gehören","Das Auto gehört <mark>meinem Vater</mark>."]],
  signals:["Wem?","mit","nach","bei","von","zu","aus","seit"],
  speak:5,write:4,
  reg:"Danh từ số nhiều ở Dativ luôn thêm -n ở cuối (trừ khi đã có sẵn): die Kinder → den Kinder**n**.",
  mistake:["Ich helfe den Mann.","Ich helfe dem Mann.","“helfen” luôn đòi Dativ, không phải Akkusativ."],
  table:[{title:"Bestimmter Artikel",head:["maskulin","feminin","neutral","Plural"],rows:[["Artikel","**dem**","**der**","**dem**","**den** (+n)"],["Beispiel","**dem** Mann","**der** Frau","**dem** Kind","**den** Leute**n**"]]},
         {title:"Unbestimmter Artikel",head:["maskulin","feminin","neutral","Plural"],rows:[["Artikel","**einem**","**einer**","**einem**","—"],["Beispiel","**einem** Mann","**einer** Frau","**einem** Kind","—"]]}]},

 {id:"de-art-gen",num:"04",en:"Genitiv",vi:"Cách sở hữu",short:"des(+s/es) / der / des(+s/es) / der (Pl.)",
  core:"Cách chỉ <strong>sở hữu</strong> — của ai, thuộc về cái gì. Ít dùng trong khẩu ngữ, thường bị thay bằng “von + Dativ”.",
  forms:[["Wessen?","Sở hữu, bổ nghĩa cho danh từ khác","das Auto <mark>des Lehrers</mark>"],["trotz/während/wegen/statt","Giới từ trang trọng đi với Genitiv","<mark>Wegen des Regens</mark> bleiben wir zu Hause."]],
  uses:[["Sở hữu trang trọng (văn viết)","das Haus <mark>meiner Eltern</mark>"],["Khẩu ngữ: thay bằng von + Dativ","das Auto <mark>von meinem Vater</mark>"]],
  signals:["Wessen?","trotz","während","wegen","statt","innerhalb"],
  speak:1,write:4,
  reg:"Danh từ giống đực/trung số ít ở Genitiv phải thêm -s (từ dài) hoặc -es (từ ngắn, tận cùng s/ß/x/z): der Mann → des Mann**es**, das Auto → des Auto**s**.",
  mistake:["das Auto des Lehrer","das Auto des Lehrers","Danh từ giống đực/trung ở Genitiv số ít phải thêm -s hoặc -es."],
  table:[{title:"Bestimmter Artikel",head:["maskulin","feminin","neutral","Plural"],rows:[["Artikel","**des** (+s/es)","**der**","**des** (+s/es)","**der**"],["Beispiel","**des** Mann**es**","**der** Frau","**des** Kind**es**","**der** Leute"]]},
         {title:"Unbestimmter Artikel",head:["maskulin","feminin","neutral","Plural"],rows:[["Artikel","**eines** (+s/es)","**einer**","**eines** (+s/es)","—"],["Beispiel","**eines** Mann**es**","**einer** Frau","**eines** Kind**es**","—"]]}]},
];

registerRows("artikel", T);
GRAMMAR.theory.artikel = { rows: T, first: "de-art-nom" };
})();
