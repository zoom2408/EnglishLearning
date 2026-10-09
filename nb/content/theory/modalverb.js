/* nb/content/theory/modalverb.js
   Modalverb: kan, får, må, bør, vil/skal. Uses the "scale" diagram
   mode, same mechanism as German Modalverben. */
(() => {
const T = [
 {id:"nb-modal-kan",num:"01",en:"Evne",vi:"Khả năng",short:"kan / kan ikke",
  core:"<strong>kan</strong> diễn tả khả năng làm được việc gì — về thể chất, đã học được, hoặc do hoàn cảnh cho phép.",
  forms:[["+","kan + Infinitiv (không chia theo ngôi)","Jeg **kan** svømme godt."],["−","kan ikke + Infinitiv","Jeg **kan ikke** komme i dag."]],
  uses:[["Khả năng bẩm sinh hoặc đã học","Hun **kan** tre språk."],["Khả năng do hoàn cảnh","Jeg **kan** dessverre ikke hjelpe deg nå."]],
  signals:["kan","kunne (quá khứ)"],
  speak:5,write:4,
  reg:"Động từ khuyết thiếu tiếng Na Uy KHÔNG chia theo ngôi — kan dùng cho mọi chủ ngữ (jeg kan, du kan, han kan…), đơn giản hơn nhiều ngôn ngữ khác.",
  mistake:["Jeg kan å svømme.","Jeg kan svømme.","Sau modal verb là Infinitiv trần, không có “å”."],
  scale:{left:"không thể",right:"thành thạo",marks:[[8,"kan ikke"],[50,"kan"],[92,"kan veldig godt"]]}},

 {id:"nb-modal-faar",num:"02",en:"Tillatelse",vi:"Xin phép / được phép",short:"får / får ikke",
  core:"<strong>får</strong> diễn tả được phép làm gì; ở dạng phủ định (får ikke) là <strong>bị cấm</strong>.",
  forms:[["+","får + Infinitiv","**Får** jeg komme inn?"],["−","får ikke = bị cấm","Her **får** man **ikke** røyke."]],
  uses:[["Xin phép lịch sự","**Får** jeg åpne vinduet?"],["Quy định, luật lệ (cấm ở dạng phủ định)","Man **får ikke** parkere her."]],
  signals:["få","får","fikk (quá khứ)"],
  speak:4,write:4,
  reg:"Phân biệt rõ: “kan ikke” = không có khả năng, còn “får ikke” = bị cấm — hai lý do hoàn toàn khác nhau.",
  mistake:["Her kan man ikke røyke (vì luật cấm).","Her får man ikke røyke.","Luật cấm dùng “får ikke”, không phải “kan ikke” (vốn chỉ khả năng vật lý)."],
  scale:{left:"cấm",right:"được phép",marks:[[6,"får ikke"],[50,"får"],[90,"får gjerne"]]}},

 {id:"nb-modal-maa",num:"03",en:"Plikt & forbud",vi:"Bắt buộc & cấm",short:"må / trenger ikke / får ikke",
  core:"<strong>må</strong> diễn tả bắt buộc. Điểm dễ nhầm: <strong>“trenger ikke”</strong> (không bắt buộc) hoàn toàn khác <strong>“får ikke”</strong> (bị cấm) — giống hệt điểm nhầm lẫn kinh điển trong tiếng Đức (müssen nicht vs. dürfen nicht).",
  forms:[["+","må + Infinitiv","Jeg **må** stå opp tidlig i morgen."],["− (không bắt buộc)","trenger ikke + å + Infinitiv","Du **trenger ikke å** komme hvis du ikke har tid."],["− (bị cấm)","får ikke + Infinitiv","Du **får ikke** gjøre det — det er forbudt."]],
  uses:[["Bắt buộc, nghĩa vụ","Man **må** vise legitimasjon her."],["Không bắt buộc (được tự do chọn)","Du **trenger ikke** komme, det er frivillig."]],
  signals:["må","trenger ikke ≠ får ikke"],
  speak:5,write:4,
  reg:"Lỗi kinh điển: dịch “must not” tiếng Anh thành “må ikke” — nhưng “må ikke” nghe không tự nhiên; dùng “får ikke” để diễn tả cấm, “trenger ikke” để diễn tả không bắt buộc.",
  mistake:["Du må ikke røyke (ý: bị cấm).","Du får ikke røyke.","Diễn tả cấm dùng “får ikke”; “trenger ikke” chỉ có nghĩa “không bắt buộc”."],
  scale:{left:"cấm (får ikke)",right:"bắt buộc (må)",marks:[[6,"får ikke"],[45,"trenger ikke"],[95,"må"]]}},

 {id:"nb-modal-boer",num:"04",en:"Råd",vi:"Lời khuyên",short:"bør",
  core:"<strong>bør</strong> diễn tả lời khuyên — nhẹ hơn “må” (bắt buộc).",
  forms:[["+","bør + Infinitiv","Du **bør** trene mer."],["−","bør ikke + Infinitiv","Du **bør ikke** spise for mye sukker."]],
  uses:[["Lời khuyên cá nhân","Du **bør** sove tidligere."],["Khuyến nghị chung","Man **bør** drikke mye vann."]],
  signals:["bør","burde (quá khứ/lịch sự hơn)"],
  speak:4,write:4,
  reg:"“burde” (dạng quá khứ) cũng hay dùng để khuyên nhẹ nhàng, lịch sự hơn “bør”: “Du burde kanskje hvile litt.”",
  mistake:["Du må trene mer (chỉ là một lời khuyên nhẹ).","Du bør trene mer.","Lời khuyên nhẹ dùng bør, må nghe như mệnh lệnh bắt buộc."],
  scale:{left:"gợi ý nhẹ",right:"khuyên mạnh",marks:[[25,"kanskje bør"],[60,"bør"],[90,"bør virkelig"]]}},

 {id:"nb-modal-vilskal",num:"05",en:"Ønske & plan",vi:"Mong muốn & kế hoạch",short:"vil (mong muốn) / skal (kế hoạch, ý định)",
  core:"<strong>vil</strong> diễn tả mong muốn hoặc dự đoán; <strong>skal</strong> diễn tả ý định/kế hoạch đã quyết định, hoặc lời hứa.",
  forms:[["vil + Infinitiv","Mong muốn / dự đoán","Jeg **vil** reise til Norge."],["skal + Infinitiv","Kế hoạch đã quyết định","Jeg **skal** flytte til Oslo i august."]],
  uses:[["Mong muốn cá nhân","Jeg **vil** gjerne lære mer norsk."],["Kế hoạch/lời hứa","Vi **skal** møtes klokka åtte."],["Dự đoán","Det **vil** nok regne i morgen."]],
  signals:["vil","skal"],
  speak:5,write:4,
  reg:"skal thường mang sắc thái cam kết/quyết định hơn vil — khi đã lên kế hoạch chắc chắn, ưu tiên dùng skal.",
  mistake:["Jeg vil flytte til Oslo i august (đã quyết định chắc chắn).","Jeg skal flytte til Oslo i august.","Kế hoạch đã quyết định chắc chắn dùng skal, không phải vil (chỉ mong muốn)."],
  scale:{left:"mong muốn (vil)",right:"kế hoạch chắc chắn (skal)",marks:[[20,"vil"],[80,"skal"]]}},
];

registerRows("modalverb", T);
GRAMMAR.theory.modalverb = { rows: T, first: "nb-modal-kan" };
})();
