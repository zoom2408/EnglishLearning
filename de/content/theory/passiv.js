/* de/content/theory/passiv.js
   Passiv: Vorgangspassiv (Präsens/Präteritum, Perfekt), Zustandspassiv,
   Passiv mit Modalverben, Alternative mit "man". Uses the "xf"
   diagram mode (Aktiv → Passiv), same mechanism as the English
   passive module. */
(() => {
const T = [
 {id:"de-pass-vorgang",num:"01",en:"Vorgangspassiv",vi:"Bị động quá trình",short:"werden (chia) + Partizip II",
  core:"<strong>Vorgangspassiv</strong> (bị động diễn tả quá trình) nhấn mạnh hành động đang/đã xảy ra, không quan tâm ai là chủ thể. Dùng werden + Partizip II.",
  forms:[["Präsens","werden (chia) + … + Partizip II","Das Haus <mark>wird</mark> <mark>gebaut</mark>."],["Präteritum","wurde (chia) + … + Partizip II","Das Haus <mark>wurde</mark> letztes Jahr <mark>gebaut</mark>."]],
  uses:[["Nhấn mạnh hành động, không quan tâm ai làm","Die Fenster <mark>werden</mark> jeden Tag <mark>geputzt</mark>."],["Nêu rõ chủ thể bằng von + Dativ (tùy chọn)","Das Buch <mark>wurde</mark> <mark>von</mark> einem berühmten Autor <mark>geschrieben</mark>."]],
  signals:["wird/wurde + Partizip II"],
  speak:4,write:5,
  reg:"Vorgangspassiv rất phổ biến trong văn viết trang trọng, báo cáo, hướng dẫn sử dụng — nơi hành động quan trọng hơn người thực hiện.",
  mistake:["Das Haus ist gebaut (ý: đang được xây).","Das Haus wird gebaut.","Diễn tả quá trình đang xảy ra dùng werden, không phải sein."],
  xf:{la:"Aktiv",lb:"Passiv (Vorgang)",a:"{1:Die Firma baut} {2:das Haus}.",b:"{2:Das Haus} {1:wird gebaut}.",note:"Tân ngữ của câu chủ động (das Haus) trở thành chủ ngữ câu bị động; chủ thể hành động có thể bỏ qua hoặc thêm “von der Firma”."}},

 {id:"de-pass-perfekt",num:"02",en:"Vorgangspassiv Perfekt",vi:"Bị động hoàn thành",short:"ist/sind + Partizip II + worden",
  core:"Thì hoàn thành của bị động — lưu ý Partizip II của chính “werden” ở đây là <strong>“worden”</strong> (không phải “geworden”).",
  forms:[["+","sein (chia) + … + Partizip II + worden","Das Haus <mark>ist</mark> letztes Jahr <mark>gebaut worden</mark>."]],
  uses:[["Kết quả của một quá trình bị động đã hoàn tất","Die E-Mail <mark>ist</mark> bereits <mark>gesendet worden</mark>."]],
  signals:["ist/sind + Partizip II + worden"],
  speak:2,write:4,
  reg:"“worden” chỉ xuất hiện trong Perfekt/Plusquamperfekt Passiv — “geworden” chỉ dùng khi werden là động từ chính mang nghĩa “trở thành”.",
  mistake:["Das Haus ist gebaut geworden.","Das Haus ist gebaut worden.","Perfekt Passiv dùng “worden”, không phải “geworden”."],
  xf:{la:"Aktiv",lb:"Passiv Perfekt",a:"{1:Jemand hat} {2:das Fenster} {1:geöffnet}.",b:"{2:Das Fenster} {1:ist geöffnet worden}.",note:"Perfekt Passiv: sein + Partizip II + worden (không phải geworden)."}},

 {id:"de-pass-zustand",num:"03",en:"Zustandspassiv",vi:"Bị động trạng thái",short:"sein (chia) + Partizip II",
  core:"<strong>Zustandspassiv</strong> (bị động trạng thái) diễn tả kết quả/trạng thái sau khi hành động đã hoàn tất, không nhấn mạnh quá trình. Dùng sein + Partizip II.",
  forms:[["+","sein (chia) + … + Partizip II","Das Fenster <mark>ist</mark> <mark>geöffnet</mark>."]],
  uses:[["Mô tả trạng thái hiện tại, kết quả của một hành động trước đó","Der Laden <mark>ist</mark> schon <mark>geschlossen</mark>."]],
  signals:["ist/sind + Partizip II (trạng thái)"],
  speak:4,write:4,
  reg:"Phân biệt rõ với Vorgangspassiv: “wird geöffnet” = đang trong quá trình mở; “ist geöffnet” = đã mở xong, hiện đang ở trạng thái mở.",
  mistake:["Der Laden wird jetzt geschlossen (ý: đã đóng sẵn từ trước).","Der Laden ist geschlossen.","Trạng thái tĩnh (đã đóng rồi) dùng Zustandspassiv (sein), không phải Vorgangspassiv (werden)."],
  xf:{la:"Vorgang (quá trình)",lb:"Zustand (kết quả)",a:"{1:Das Fenster} {2:wird geöffnet}.",b:"{1:Das Fenster} {2:ist geöffnet}.",note:"werden = đang diễn ra; sein = đã xong, chỉ còn trạng thái kết quả."}},

 {id:"de-pass-modal",num:"04",en:"Passiv mit Modalverben",vi:"Bị động với động từ khuyết thiếu",short:"Modalverb (chia) + … + Partizip II + werden",
  core:"Khi câu bị động có <strong>modal verb</strong>, cấu trúc là: modal verb (chia) + … + Partizip II + werden (nguyên mẫu, đứng cuối câu).",
  forms:[["+","Modalverb (chia) + … + Partizip II + werden","Die Aufgabe <mark>muss</mark> heute <mark>erledigt werden</mark>."]],
  uses:[["Bắt buộc ở dạng bị động","Das Formular <mark>muss</mark> <mark>ausgefüllt werden</mark>."],["Khả năng ở dạng bị động","Das Problem <mark>kann</mark> leicht <mark>gelöst werden</mark>."]],
  signals:["muss/kann/soll + Partizip II + werden"],
  speak:4,write:5,
  reg:"Cấu trúc này rất hay gặp trong hướng dẫn sử dụng, quy định, bảng chỉ dẫn (“Hier darf nicht geraucht werden.”).",
  mistake:["Die Aufgabe muss heute erledigt sein werden.","Die Aufgabe muss heute erledigt werden.","Chỉ cần Partizip II + werden ở cuối, không thêm “sein”."],
  xf:{la:"Aktiv",lb:"Passiv mit Modalverb",a:"{1:Man muss} {2:die Aufgabe} {1:heute erledigen}.",b:"{2:Die Aufgabe} {1:muss heute erledigt werden}.",note:"Modal verb giữ nguyên vị trí 2; Partizip II + werden (nguyên mẫu) đứng cuối câu."}},

 {id:"de-pass-man",num:"05",en:"Alternative mit “man”",vi:"Thay thế bằng man",short:"man + Aktivsatz",
  core:"Trong khẩu ngữ, người Đức thường tránh câu bị động bằng cách dùng <strong>man</strong> làm chủ ngữ giả ở câu chủ động — nghe tự nhiên và gần gũi hơn.",
  forms:[["Passiv","werden + Partizip II","Hier <mark>wird</mark> Deutsch <mark>gesprochen</mark>."],["Aktiv mit man","man + V (chia bình thường)","<mark>Man</mark> <mark>spricht</mark> hier Deutsch."]],
  uses:[["Thay thế bị động không rõ chủ thể trong khẩu ngữ","<mark>Man</mark> <mark>sagt</mark>, dass es morgen regnet. (= Es wird gesagt, dass…)"]],
  signals:["man + Verb (chia)"],
  speak:5,write:2,
  reg:"man rất phổ biến trong hội thoại hằng ngày; bị động trang trọng hơn và hay gặp trong văn viết, biển báo, hướng dẫn.",
  mistake:["Es wird gesagt, dass er krank ist (nghe trang trọng/khó nói hơn khi trò chuyện bình thường).","Man sagt, dass er krank ist.","Trong khẩu ngữ, man + câu chủ động tự nhiên hơn câu bị động tương đương."],
  xf:{la:"Passiv",lb:"Aktiv mit man",a:"{1:Hier} {2:wird Deutsch gesprochen}.",b:"{1:Man} {2:spricht hier Deutsch}.",note:"Trong khẩu ngữ, “man” + câu chủ động nghe tự nhiên hơn bị động."}},
];

registerRows("passiv", T);
GRAMMAR.theory.passiv = { rows: T, first: "de-pass-vorgang" };
})();
