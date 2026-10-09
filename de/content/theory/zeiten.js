/* de/content/theory/zeiten.js
   6 Zeiten (German tenses). Loaded on every German page.
   tl = marks on the timeline (x from 20 to 700, NOW at 360).
   timeline:true keeps rowHTML in "timeline" rendering mode (see
   core/rows.js), the same mode used by the English tenses module. */
const TN={ps:"de-praesens",prt:"de-praeteritum",pf:"de-perfekt",pqp:"de-plusquamperfekt",f1:"de-futur1",f2:"de-futur2"};
const CODES=Object.keys(TN);
(() => {
const T = [
 {id:"de-praesens",g:"present",a:0,en:"Präsens",vi:"Hiện tại",short:"Stamm + -e/-st/-t/-en/-t/-en",
  core:"Diễn tả <strong>hiện tại, thói quen, sự thật</strong> và — khác tiếng Anh — cũng thường dùng để nói về <strong>tương lai gần</strong> khi câu có trạng từ thời gian rõ ràng.",
  forms:[["+","ich mache, du machst, er/sie/es macht, wir machen, ihr macht, sie machen","Ich <mark>arbeite</mark> bei einer Bank."],["−","nicht/kein + Präsens","Ich <mark>arbeite nicht</mark> am Wochenende."],["?","Verb + Subjekt…? / W-Wort + Verb + Subjekt…?","<mark>Arbeitest</mark> du heute?"]],
  uses:[["Thói quen, việc lặp lại","Ich <mark>trinke</mark> jeden Morgen Kaffee."],["Sự thật hiển nhiên","Die Sonne <mark>geht</mark> im Osten <mark>auf</mark>."],["Tương lai gần có trạng từ thời gian rõ ràng","Morgen <mark>fliege</mark> ich nach Berlin."],["Hành động đang diễn ra ngay lúc nói (tiếng Đức không có thì tiếp diễn riêng)","Ich <mark>lese</mark> gerade ein Buch."]],
  signals:["jeden Tag","immer","oft","manchmal","normalerweise","heute","jetzt","gerade","morgen (ý tương lai)"],
  speak:5,write:5,
  reg:"Thì dùng nhiều nhất trong cả văn nói và văn viết. Vì tiếng Đức không có thì tiếp diễn riêng, Präsens còn gánh cả vai trò diễn tả việc đang xảy ra (thêm “gerade” để nhấn mạnh).",
  mistake:["Ich bin arbeite.","Ich arbeite.","Präsens chỉ cần một động từ đã chia, không cộng thêm “sein” như thì tiếp diễn tiếng Anh."],
  timeline:true,
  tl:[{t:"dots",xs:[70,140,210,280,360,440,510,580,650]},{t:"label",x:360,y:130,s:"jeden Tag / jetzt"}]},

 {id:"de-praeteritum",g:"past",a:0,en:"Präteritum",vi:"Quá khứ đơn (văn viết)",short:"Stamm + -te/-test/-te/-ten/-tet/-ten (hoặc dạng bất quy tắc)",
  core:"Thì <strong>kể chuyện</strong> trong văn viết: truyện, báo chí, tiểu thuyết, biên bản. Trong khẩu ngữ (trừ sein/haben/động từ khuyết thiếu), người Đức thường ưu tiên dùng Perfekt.",
  forms:[["+","Stamm + te (động từ yếu) / dạng gốc biến đổi (động từ mạnh)","Ich <mark>machte</mark> das Fenster zu. / Ich <mark>ging</mark> nach Hause."],["−","nicht/kein + Präteritum","Er <mark>kam nicht</mark> rechtzeitig."],["?","Verb + Subjekt…?","<mark>Kamst</mark> du gestern?"]],
  uses:[["Kể chuyện, tường thuật trong văn viết","Es <mark>war</mark> einmal ein König, der <mark>hatte</mark> drei Söhne."],["sein, haben, động từ khuyết thiếu — dùng cả trong khẩu ngữ","Ich <mark>war</mark> gestern krank. Ich <mark>musste</mark> zu Hause bleiben."],["Báo chí, tin tức trang trọng","Der Minister <mark>besuchte</mark> gestern die Fabrik."]],
  signals:["gestern","letzte Woche","letztes Jahr","damals","vor zwei Jahren","als ich ein Kind war","einmal"],
  speak:2,write:5,
  reg:"Văn viết dùng rất nhiều để kể chuyện. Trong khẩu ngữ hằng ngày (đặc biệt miền Nam Đức, Áo, Thụy Sĩ), gần như chỉ sein/haben/động từ khuyết thiếu được chia ở Präteritum; các động từ khác chuyển sang Perfekt.",
  mistake:["Ich habe gestern gegehen.","Ich bin gestern gegangen. (hoặc: Ich ging gestern.)","“gehen” là động từ mạnh, Partizip II là “gegangen”, trợ động từ là “sein” chứ không phải “haben”."],
  timeline:true,
  tl:[{t:"point",x:200,s:"gestern"}]},

 {id:"de-perfekt",g:"present",a:1,en:"Perfekt",vi:"Hiện tại hoàn thành (= quá khứ khẩu ngữ)",short:"haben/sein + Partizip II",
  core:"Thì <strong>quá khứ dùng trong khẩu ngữ</strong> — khác tiếng Anh, Perfekt tiếng Đức không nhất thiết phải liên hệ tới hiện tại, nó đơn giản là cách kể lại một việc đã xảy ra trong hội thoại hằng ngày.",
  forms:[["+","haben/sein (chia Präsens) + … + Partizip II (cuối câu)","Ich <mark>habe</mark> das Buch <mark>gelesen</mark>. / Sie <mark>ist</mark> nach Hause <mark>gegangen</mark>."],["−","haben/sein + nicht + … + Partizip II","Ich <mark>habe</mark> das Buch <mark>nicht gelesen</mark>."],["?","haben/sein + Subjekt + … + Partizip II?","<mark>Hast</mark> du das Buch <mark>gelesen</mark>?"]],
  uses:[["Kể lại việc đã xảy ra trong hội thoại hằng ngày","Ich <mark>habe</mark> gestern einen Film <mark>gesehen</mark>."],["Trải nghiệm, kết quả còn ý nghĩa (giống tiếng Anh)","Ich <mark>bin</mark> noch nie in Japan <mark>gewesen</mark>."],["sein làm trợ động từ với động từ chỉ chuyển động/thay đổi trạng thái","Er <mark>ist</mark> um 8 Uhr <mark>aufgewacht</mark>."]],
  signals:["schon","noch nie","gerade eben","heute Morgen (việc đã xong)","in den letzten Tagen"],
  speak:5,write:3,
  reg:"Thì chủ đạo của khẩu ngữ Đức để nói về quá khứ — nhiều người Đức dùng Perfekt ngay cả ở những chỗ tiếng Anh bắt buộc dùng quá khứ đơn (vd: “Ich habe gestern angerufen” thay vì “Ich rief gestern an”).",
  mistake:["Ich habe gegangen.","Ich bin gegangen.","Động từ chỉ sự di chuyển hoặc thay đổi trạng thái (gehen, kommen, werden, sein…) dùng trợ động từ “sein”, không phải “haben”."],
  timeline:true,
  tl:[{t:"point",x:190,s:"đã xảy ra"},{t:"arrow",x1:205,x2:352},{t:"label",x:280,y:130,s:"kể lại trong hội thoại"}]},

 {id:"de-plusquamperfekt",g:"past",a:1,en:"Plusquamperfekt",vi:"Quá khứ hoàn thành",short:"hatte/war + Partizip II",
  core:"Hành động xảy ra <strong>trước một hành động hoặc mốc khác</strong> trong quá khứ.",
  forms:[["+","hatte/war (chia Präteritum) + … + Partizip II","Ich <mark>hatte</mark> das Buch schon <mark>gelesen</mark>, bevor der Film kam."],["−","hatte/war + nicht + … + Partizip II","Er <mark>hatte</mark> das Geld <mark>nicht</mark> mitgebracht."],["?","hatte/war + Subjekt + … + Partizip II?","<mark>Hattest</mark> du das schon <mark>gesehen</mark>?"]],
  uses:[["Xảy ra trước một hành động quá khứ khác","Als ich ankam, <mark>hatte</mark> der Zug schon <mark>abgefahren</mark>."],["Mệnh đề với “nachdem” (sau khi)","<mark>Nachdem</mark> er <mark>gegessen hatte</mark>, ging er spazieren."]],
  signals:["bevor","nachdem","schon","bereits","als (với hai mốc quá khứ)"],
  speak:2,write:4,
  reg:"Thường xuất hiện trong văn viết, tiểu thuyết, tường thuật để làm rõ thứ tự thời gian. Khẩu ngữ hay dùng “vorher” + Perfekt để đơn giản hóa.",
  mistake:["Nachdem er aß, ging er spazieren.","Nachdem er gegessen hatte, ging er spazieren.","Mệnh đề “nachdem” cần Plusquamperfekt khi mệnh đề chính ở Präteritum, để thể hiện việc xảy ra trước."],
  timeline:true,
  tl:[{t:"point",x:120,s:"① hatte gelesen"},{t:"ref",x:260,s:"② der Film kam"},{t:"arrow",x1:135,x2:252}]},

 {id:"de-futur1",g:"future",a:0,en:"Futur I",vi:"Tương lai",short:"werden + Infinitiv",
  core:"Hành động <strong>sẽ xảy ra</strong> trong tương lai — thường nhấn mạnh dự đoán/giả định hơn là chỉ đơn thuần thông báo kế hoạch (vốn hay dùng Präsens).",
  forms:[["+","werden (chia) + … + Infinitiv","Ich <mark>werde</mark> dich morgen <mark>anrufen</mark>."],["−","werden + nicht + … + Infinitiv","Ich <mark>werde</mark> nicht <mark>kommen</mark>."],["?","werden + Subjekt + … + Infinitiv?","<mark>Wirst</mark> du mitkommen?"]],
  uses:[["Dự đoán, giả định về tương lai hoặc hiện tại","Er <mark>wird</mark> jetzt wohl zu Hause <mark>sein</mark>."],["Lời hứa, quyết tâm trang trọng","Ich <mark>werde</mark> das nie wieder <mark>tun</mark>."],["Tương lai khi không có trạng từ thời gian rõ ràng","Die Preise <mark>werden</mark> weiter <mark>steigen</mark>."]],
  signals:["wohl","wahrscheinlich","bestimmt","vielleicht","in Zukunft"],
  speak:3,write:4,
  reg:"Dùng ít hơn Präsens-cho-tương-lai trong khẩu ngữ hằng ngày. Futur I thường mang sắc thái dự đoán/suy đoán rõ hơn là chỉ thông báo kế hoạch.",
  mistake:["Ich werde gehe morgen.","Ich werde morgen gehen.","Sau “werden” luôn là động từ nguyên mẫu (Infinitiv), không chia."],
  timeline:true,
  tl:[{t:"point",x:540,s:"morgen"}]},

 {id:"de-futur2",g:"future",a:1,en:"Futur II",vi:"Tương lai hoàn thành",short:"werden + Partizip II + haben/sein",
  core:"Việc <strong>sẽ hoàn thành trước một mốc trong tương lai</strong>, hoặc dùng để <strong>phỏng đoán về một việc đã xảy ra trong quá khứ</strong>.",
  forms:[["+","werden (chia) + … + Partizip II + haben/sein","Bis morgen <mark>werde</mark> ich die Arbeit <mark>beendet haben</mark>."],["−","werden + nicht + … + Partizip II + haben/sein","Er <mark>wird</mark> es bis dahin <mark>nicht geschafft haben</mark>."],["?","werden + Subjekt + … + Partizip II + haben/sein?","<mark>Wird</mark> sie bis dann <mark>angekommen sein</mark>?"]],
  uses:[["Hoàn thành trước một mốc tương lai","Bis nächsten Montag <mark>werden</mark> wir das Projekt <mark>abgeschlossen haben</mark>."],["Phỏng đoán về một việc trong quá khứ (ít gặp hơn)","Er <mark>wird</mark> das Geld wohl schon <mark>ausgegeben haben</mark>."]],
  signals:["bis + mốc tương lai","bis dahin","wohl (phỏng đoán)"],
  speak:1,write:2,
  reg:"Thì hiếm gặp nhất, chủ yếu trong văn viết trang trọng, báo cáo, kế hoạch dự án.",
  mistake:["Ich werde die Arbeit beenden haben.","Ich werde die Arbeit beendet haben.","Partizip II phải đứng trước haben/sein, không phải dạng nguyên mẫu."],
  timeline:true,
  tl:[{t:"point",x:510,s:"① werde beendet haben"},{t:"ref",x:650,s:"② bis Montag"},{t:"arrow",x1:525,x2:642}]},
];

const TIME_ORDER = ["past","present","future"].flatMap(g=>T.filter(t=>t.g===g).sort((a,b)=>a.a-b.a));
TIME_ORDER.forEach((t,i)=>t.num=String(i+1).padStart(2,"0"));
registerRows("zeiten", T);
GRAMMAR.theory.zeiten = { rows: TIME_ORDER, first: "de-praesens" };
})();
