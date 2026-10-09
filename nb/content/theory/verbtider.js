/* nb/content/theory/verbtider.js
   5 Verbtider (Norwegian Bokmål tenses). Loaded on every Norwegian page.
   tl = marks on the timeline (x from 20 to 700, NOW at 360).
   timeline:true keeps rowHTML in "timeline" rendering mode (see
   core/rows.js), the same mode used by the English tenses module. */
const TN={ps:"nb-presens",prt:"nb-preteritum",pf:"nb-perfektum",pqp:"nb-pluskvamperfektum",fut:"nb-futurum"};
const CODES=Object.keys(TN);
(() => {
const T = [
 {id:"nb-presens",g:"present",a:0,en:"Presens",vi:"Hiện tại",short:"Stamm + -r",
  core:"Diễn tả <strong>hiện tại, thói quen, sự thật</strong> và cũng thường dùng để nói về <strong>tương lai gần</strong> khi câu có trạng từ thời gian rõ ràng — giống tiếng Đức, tiếng Na Uy không có thì tiếp diễn riêng.",
  forms:[["+","Stamm + -r (tất cả các ngôi chia giống nhau)","Jeg <mark>snakker</mark> norsk."],["−","ikke sau động từ","Jeg <mark>snakker ikke</mark> svensk."],["?","Verb + Subjekt…?","<mark>Snakker</mark> du norsk?"]],
  uses:[["Thói quen, việc lặp lại","Jeg <mark>drikker</mark> kaffe hver morgen."],["Sự thật hiển nhiên","Sola <mark>står opp</mark> i øst."],["Tương lai gần có trạng từ thời gian rõ ràng","I morgen <mark>reiser</mark> jeg til Oslo."],["Hành động đang diễn ra ngay lúc nói","Jeg <mark>leser</mark> akkurat nå."]],
  signals:["hver dag","alltid","ofte","noen ganger","vanligvis","i dag","akkurat nå","i morgen (ý tương lai)"],
  speak:5,write:5,
  reg:"Thì dùng nhiều nhất, cả nói và viết. Tất cả các ngôi chia giống nhau (khác tiếng Anh/Đức) — chỉ cần nhớ một dạng duy nhất cho mỗi động từ.",
  mistake:["Jeg er snakker norsk.","Jeg snakker norsk.","Presens chỉ cần một động từ đã chia, không cộng thêm “å være” như thì tiếp diễn tiếng Anh."],
  timeline:true,
  tl:[{t:"dots",xs:[70,140,210,280,360,440,510,580,650]},{t:"label",x:360,y:130,s:"hver dag / nå"}]},

 {id:"nb-preteritum",g:"past",a:0,en:"Preteritum",vi:"Quá khứ đơn",short:"Stamm + -et/-te/-dde (hoặc dạng bất quy tắc)",
  core:"Hành động <strong>đã xảy ra và kết thúc</strong> tại một thời điểm xác định trong quá khứ — là thì quá khứ chính dùng trong cả văn nói lẫn văn viết (khác tiếng Đức, tiếng Na Uy không tránh dùng thì này khi nói).",
  forms:[["+","Stamm + et/te/dde (động từ yếu) / dạng gốc biến đổi (động từ mạnh)","Jeg <mark>snakket</mark> med henne. / Jeg <mark>dro</mark> til Bergen."],["−","ikke sau động từ","Han <mark>kom ikke</mark> i tide."],["?","Verb + Subjekt…?","<mark>Dro</mark> du i går?"]],
  uses:[["Đã xong, có thời điểm rõ ràng","Vi <mark>møttes</mark> i 2019."],["Chuỗi hành động nối tiếp trong kể chuyện","Han <mark>kom</mark> inn, <mark>satte</mark> seg og <mark>åpnet</mark> boken."],["Thói quen trong quá khứ","Da jeg var liten, <mark>gikk</mark> jeg til skolen."]],
  signals:["i går","i fjor","for to år siden","i 2019","da jeg var barn","den gang"],
  speak:5,write:5,
  reg:"Thì kể chuyện chính trong cả văn nói lẫn văn viết — không có sự phân chia nói/viết rõ rệt như Präteritum/Perfekt tiếng Đức.",
  mistake:["Jeg har dro til Bergen i går.","Jeg dro til Bergen i går.","Có trạng từ thời điểm xác định (i går) thì dùng Preteritum, không dùng Perfektum."],
  timeline:true,
  tl:[{t:"point",x:200,s:"i går"}]},

 {id:"nb-perfektum",g:"present",a:1,en:"Perfektum",vi:"Hiện tại hoàn thành",short:"har/er + perfektum partisipp",
  core:"Nối <strong>quá khứ với hiện tại</strong>: hành động đã xảy ra (không rõ thời điểm) và kết quả, trải nghiệm vẫn còn ý nghĩa bây giờ — tương tự hiện tại hoàn thành tiếng Anh.",
  forms:[["+","har (hầu hết động từ) / er (động từ chỉ chuyển động) + perfektum partisipp","Jeg <mark>har lest</mark> boken. / Hun <mark>er dratt</mark> til Oslo."],["−","har/er + ikke + perfektum partisipp","Jeg <mark>har ikke lest</mark> boken ennå."],["?","har/er + Subjekt + perfektum partisipp?","<mark>Har</mark> du <mark>lest</mark> boken?"]],
  uses:[["Trải nghiệm, không rõ thời điểm","Jeg <mark>har besøkt</mark> Paris to ganger."],["Vừa xảy ra, kết quả còn ở hiện tại","Jeg <mark>har mistet</mark> nøklene mine."],["Bắt đầu trong quá khứ, kéo dài đến nay","Vi <mark>har bodd</mark> her siden 2015."]],
  signals:["allerede","ennå","nettopp","noensinne","aldri","så langt","siden"],
  speak:4,write:4,
  reg:"Dùng phổ biến trong cả nói và viết khi không nhấn mạnh thời điểm cụ thể. Phần lớn động từ dùng trợ động từ “har”; một số động từ chỉ chuyển động/thay đổi trạng thái (dra, komme, bli…) dùng “er”.",
  mistake:["Jeg har dratt til Oslo i fjor.","Jeg dro til Oslo i fjor.","Có thời điểm cụ thể đã qua (i fjor) thì dùng Preteritum, không dùng Perfektum."],
  timeline:true,
  tl:[{t:"point",x:190,s:"đã xảy ra"},{t:"arrow",x1:205,x2:352},{t:"label",x:280,y:130,s:"kết quả còn đến bây giờ"}]},

 {id:"nb-pluskvamperfektum",g:"past",a:1,en:"Pluskvamperfektum",vi:"Quá khứ hoàn thành",short:"hadde/var + perfektum partisipp",
  core:"Hành động xảy ra <strong>trước một hành động hoặc mốc khác</strong> trong quá khứ.",
  forms:[["+","hadde/var + perfektum partisipp","Da jeg kom, <mark>hadde</mark> toget allerede <mark>dratt</mark>."],["−","hadde/var + ikke + perfektum partisipp","Hun <mark>hadde ikke spist</mark> før møtet."],["?","hadde/var + Subjekt + perfektum partisipp?","<mark>Hadde</mark> du <mark>møtt</mark> ham før?"]],
  uses:[["Xảy ra trước một hành động quá khứ khác","Da vi kom dit, <mark>hadde</mark> filmen allerede <mark>begynt</mark>."],["Nguyên nhân cho một kết quả trong quá khứ","Han var trøtt fordi han <mark>hadde jobbet</mark> hele natten."]],
  signals:["før","etter at","allerede","da (với hai mốc quá khứ)"],
  speak:2,write:4,
  reg:"Chủ yếu dùng trong văn viết, tiểu thuyết và tường thuật để làm rõ thứ tự thời gian.",
  mistake:["Jeg hadde gått til Dal i fjor.","Jeg gikk til Dal i fjor.","Chỉ dùng Pluskvamperfektum khi có một mốc quá khứ thứ hai để so sánh."],
  timeline:true,
  tl:[{t:"point",x:120,s:"① hadde dratt"},{t:"ref",x:260,s:"② jeg kom"},{t:"arrow",x1:135,x2:252}]},

 {id:"nb-futurum",g:"future",a:0,en:"Futurum",vi:"Tương lai",short:"skal/vil + infinitiv",
  core:"Hành động <strong>sẽ xảy ra</strong> trong tương lai. “skal” nhấn mạnh ý định/kế hoạch đã quyết định, “vil” nhấn mạnh dự đoán hoặc sự sẵn lòng.",
  forms:[["+","skal/vil + infinitiv","Jeg <mark>skal reise</mark> til Bergen neste uke. / Det <mark>vil regne</mark> i morgen."],["−","skal/vil + ikke + infinitiv","Jeg <mark>skal ikke komme</mark> i kveld."],["?","skal/vil + Subjekt + infinitiv?","<mark>Skal</mark> du <mark>komme</mark> i morgen?"]],
  uses:[["Kế hoạch, ý định đã quyết định (skal)","Vi <mark>skal flytte</mark> til Trondheim i august."],["Dự đoán, suy đoán (vil)","Jeg tror det <mark>vil bli</mark> kaldt i vinter."],["Tương lai gần cũng có thể dùng Presens + trạng từ thời gian","I morgen <mark>reiser</mark> jeg til Oslo."]],
  signals:["i morgen","neste uke","snart","sannsynligvis","kanskje"],
  speak:4,write:4,
  reg:"“skal” và “vil” là hai trợ động từ khuyết thiếu phổ biến nhất để nói về tương lai; ngoài ra Presens cũng rất hay được dùng cho tương lai gần có trạng từ thời gian rõ ràng.",
  mistake:["Jeg skal å reise i morgen.","Jeg skal reise i morgen.","Sau skal/vil là động từ nguyên mẫu, không có “å”."],
  timeline:true,
  tl:[{t:"point",x:540,s:"i morgen"}]},
];

const TIME_ORDER = ["past","present","future"].flatMap(g=>T.filter(t=>t.g===g).sort((a,b)=>a.a-b.a));
TIME_ORDER.forEach((t,i)=>t.num=String(i+1).padStart(2,"0"));
registerRows("verbtider", T);
GRAMMAR.theory.verbtider = { rows: TIME_ORDER, first: "nb-presens" };
})();
