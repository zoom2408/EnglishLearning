/* de/content/theory/praepositionen.js
   Präpositionen: 4 nhóm theo cách (Fall) chúng đòi hỏi.
   Uses the "table" diagram mode. */
(() => {
const T = [
 {id:"de-prep-akk",num:"01",en:"Akkusativ-Präpositionen",vi:"Giới từ + Akkusativ",short:"für, durch, ohne, gegen, um, bis, entlang",
  core:"Nhóm giới từ này <strong>luôn luôn</strong> đi với Akkusativ, không phụ thuộc ngữ cảnh.",
  forms:[["+","Giới từ + Akkusativ","Das Geschenk ist <mark>für meine Mutter</mark>."]],
  uses:[["für (cho, vì)","Ich kaufe das <mark>für dich</mark>."],["durch (qua, xuyên qua)","Wir gehen <mark>durch den Park</mark>."],["ohne (không có)","Ich komme <mark>ohne meinen Bruder</mark>."]],
  signals:["für","durch","ohne","gegen","um","bis","entlang"],
  speak:5,write:5,
  reg:"Nhóm này dễ nhớ nhất vì không có ngoại lệ — hễ thấy một trong các giới từ này là chia Akkusativ ngay.",
  mistake:["Das ist für meinem Bruder.","Das ist für meinen Bruder.","für luôn đòi Akkusativ, không phải Dativ."],
  table:[{head:["Giới từ","Nghĩa","Ví dụ"],rows:[["für","cho, vì","**für** dich"],["durch","qua, xuyên qua","**durch** den Park"],["ohne","không có","**ohne** meinen Bruder"],["gegen","chống lại, tầm khoảng","**gegen** den Plan"],["um","quanh, vào lúc","**um** acht Uhr"],["bis","đến khi, đến (nơi)","**bis** nächsten Montag"],["entlang","dọc theo (đứng sau danh từ)","den Fluss **entlang**"]]}]},

 {id:"de-prep-dat",num:"02",en:"Dativ-Präpositionen",vi:"Giới từ + Dativ",short:"mit, nach, bei, von, zu, aus, seit, außer, gegenüber",
  core:"Nhóm giới từ này <strong>luôn luôn</strong> đi với Dativ, không phụ thuộc ngữ cảnh.",
  forms:[["+","Giới từ + Dativ","Ich fahre <mark>mit dem Bus</mark>."]],
  uses:[["mit (cùng với, bằng)","Ich fahre <mark>mit dem Auto</mark>."],["nach (sau khi, đến - thành phố/nước)","<mark>Nach der Arbeit</mark> gehe ich nach Hause."],["bei (ở chỗ, tại nhà)","Ich wohne <mark>bei meinen Eltern</mark>."]],
  signals:["mit","nach","bei","von","zu","aus","seit","außer","gegenüber"],
  speak:5,write:5,
  reg:"Đây là nhóm giới từ xuất hiện nhiều nhất trong hội thoại hằng ngày — nên thuộc trước tiên.",
  mistake:["Ich fahre mit den Bus.","Ich fahre mit dem Bus.","mit luôn đòi Dativ; giống đực: der → dem."],
  table:[{head:["Giới từ","Nghĩa","Ví dụ"],rows:[["mit","cùng với, bằng (phương tiện)","**mit** dem Bus"],["nach","sau khi; đến (thành phố/nước)","**nach** der Arbeit"],["bei","ở chỗ, tại (nhà ai)","**bei** meinen Eltern"],["von","từ, của","**von** meinem Freund"],["zu","đến (chỗ ai, sự kiện)","**zu** meiner Oma"],["aus","từ, xuất xứ","**aus** Vietnam"],["seit","từ (mốc thời gian) đến nay","**seit** 2020"]]}]},

 {id:"de-prep-wechsel",num:"03",en:"Wechselpräpositionen",vi:"Giới từ 2 cách (chuyển động/vị trí)",short:"an, auf, hinter, in, neben, über, unter, vor, zwischen",
  core:"9 giới từ này có <strong>2 cách</strong> tùy ngữ cảnh: <strong>Akkusativ</strong> khi trả lời “Wohin?” (có chuyển động, có đích đến), <strong>Dativ</strong> khi trả lời “Wo?” (vị trí tĩnh, không chuyển động).",
  forms:[["Wohin? → Akk.","Chuyển động đến một nơi","Ich lege das Buch <mark>in die Tasche</mark>."],["Wo? → Dat.","Vị trí tĩnh, không chuyển động","Das Buch liegt <mark>in der Tasche</mark>."]],
  uses:[["Động từ chuyển động (gehen, legen, stellen, hängen…) → thường Akkusativ","Er hängt das Bild <mark>an die Wand</mark>."],["Động từ trạng thái (sein, liegen, stehen, hängen…) → thường Dativ","Das Bild hängt <mark>an der Wand</mark>."]],
  signals:["an","auf","hinter","in","neben","über","unter","vor","zwischen","wohin?","wo?"],
  speak:5,write:5,
  reg:"Mẹo nhớ nhanh: tự hỏi “có sự di chuyển đến một nơi khác không?” — có thì Akkusativ (wohin), không thì Dativ (wo).",
  mistake:["Ich gehe in der Schule.","Ich gehe in die Schule.","“gehen” diễn tả chuyển động có đích đến (wohin?) → Akkusativ, không phải Dativ."],
  table:[{title:"So sánh Wohin? (Akk.) và Wo? (Dat.) với “in”",head:["Câu hỏi","Cách","Ví dụ"],rows:[["Wohin? (chuyển động)","Akkusativ","Ich lege das Buch **in die Tasche**."],["Wo? (vị trí tĩnh)","Dativ","Das Buch liegt **in der Tasche**."]]},
         {title:"9 Wechselpräpositionen",head:["Giới từ","Nghĩa"],rows:[["an","sát cạnh, bên (bề mặt đứng)"],["auf","trên (bề mặt ngang)"],["hinter","phía sau"],["in","trong, bên trong"],["neben","bên cạnh"],["über","phía trên, qua"],["unter","phía dưới"],["vor","phía trước"],["zwischen","ở giữa"]]}]},

 {id:"de-prep-gen",num:"04",en:"Genitiv-Präpositionen",vi:"Giới từ + Genitiv",short:"wegen, trotz, während, statt, innerhalb, außerhalb",
  core:"Nhóm giới từ trang trọng này đi với <strong>Genitiv</strong>. Trong khẩu ngữ, nhiều giới từ ở đây (đặc biệt wegen, trotz) hay bị thay bằng + Dativ.",
  forms:[["+","Giới từ + Genitiv","<mark>Wegen des Regens</mark> bleiben wir zu Hause."]],
  uses:[["wegen (vì, do)","<mark>Wegen der Prüfung</mark> habe ich keine Zeit."],["trotz (mặc dù)","<mark>Trotz des schlechten Wetters</mark> gehen wir spazieren."],["während (trong lúc, trong khi)","<mark>Während des Essens</mark> sprachen wir nicht."]],
  signals:["wegen","trotz","während","statt","innerhalb","außerhalb"],
  speak:2,write:5,
  reg:"Trong khẩu ngữ hằng ngày, người Đức thường nói “wegen dem Wetter” (+ Dativ) thay vì “wegen des Wetters” — nhưng văn viết trang trọng vẫn yêu cầu Genitiv.",
  mistake:["wegen das Wetter","wegen des Wetters","wegen đòi Genitiv; giống trung: das → des, danh từ thêm -s."],
  table:[{head:["Giới từ","Nghĩa","Ví dụ"],rows:[["wegen","vì, do","**wegen** des Regens"],["trotz","mặc dù","**trotz** des Wetters"],["während","trong lúc, trong khi","**während** der Reise"],["statt","thay vì","**statt** eines Autos"],["innerhalb","trong vòng, bên trong","**innerhalb** einer Woche"],["außerhalb","bên ngoài","**außerhalb** der Stadt"]]}]},
];

registerRows("praepositionen", T);
GRAMMAR.theory.praepositionen = { rows: T, first: "de-prep-akk" };
})();
