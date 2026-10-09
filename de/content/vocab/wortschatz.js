/* de/content/vocab/wortschatz.js
   Core A1-B2 vocabulary: Substantiv/Verb/Redewendung across 10
   everyday topics. Field names (term/meaning/type/level/topic/
   example) follow a language-neutral schema read generically by
   assets/js/pages/vocab.js — any future language's vocab file plugs
   into the same engine with zero code changes. */
(() => {
const VOCAB = [
 // Gia đình & con người
 {term:"die Familie",meaning:"gia đình",type:"Danh từ",level:"A1",topic:"Gia đình & con người",example:"Meine Familie wohnt in Hanoi."},
 {term:"der Freund / die Freundin",meaning:"bạn (nam/nữ)",type:"Danh từ",level:"A1",topic:"Gia đình & con người",example:"Er ist mein bester Freund."},
 {term:"die Eltern",meaning:"cha mẹ",type:"Danh từ",level:"A1",topic:"Gia đình & con người",example:"Meine Eltern arbeiten beide in Hanoi."},
 {term:"die Nachbarschaft",meaning:"hàng xóm (khu vực)",type:"Danh từ",level:"B1",topic:"Gia đình & con người",example:"Die Nachbarschaft ist sehr ruhig."},
 {term:"kennenlernen",meaning:"làm quen, gặp gỡ",type:"Động từ",level:"A2",topic:"Gia đình & con người",example:"Ich habe sie letztes Jahr kennengelernt."},
 {term:"sich verlieben",meaning:"yêu, phải lòng",type:"Động từ",level:"B1",topic:"Gia đình & con người",example:"Er hat sich in sie verliebt."},
 {term:"vertrauen",meaning:"tin tưởng",type:"Động từ",level:"B1",topic:"Gia đình & con người",example:"Ich vertraue meinen Freunden völlig."},
 {term:"sich kümmern um",meaning:"chăm sóc",type:"Động từ",level:"A2",topic:"Gia đình & con người",example:"Sie kümmert sich um ihre Großeltern."},
 {term:"jemanden gut kennen",meaning:"hiểu rõ ai đó",type:"Cụm từ",level:"A2",topic:"Gia đình & con người",example:"Ich kenne ihn schon lange gut."},
 {term:"Kontakt halten",meaning:"giữ liên lạc",type:"Cụm từ",level:"B1",topic:"Gia đình & con người",example:"Wir halten immer noch Kontakt."},
 {term:"auf jemanden aufpassen",meaning:"trông nom ai đó",type:"Cụm từ",level:"A1",topic:"Gia đình & con người",example:"Kannst du auf meinen Bruder aufpassen?"},
 {term:"eine gute Beziehung haben",meaning:"có mối quan hệ tốt",type:"Cụm từ",level:"B1",topic:"Gia đình & con người",example:"Wir haben eine gute Beziehung zueinander."},

 // Nhà cửa & đồ vật
 {term:"die Wohnung",meaning:"căn hộ",type:"Danh từ",level:"A1",topic:"Nhà cửa & đồ vật",example:"Meine Wohnung hat zwei Zimmer."},
 {term:"die Möbel",meaning:"đồ nội thất",type:"Danh từ",level:"A2",topic:"Nhà cửa & đồ vật",example:"Wir brauchen neue Möbel."},
 {term:"der Schlüssel",meaning:"chìa khóa",type:"Danh từ",level:"A1",topic:"Nhà cửa & đồ vật",example:"Ich habe meinen Schlüssel verloren."},
 {term:"die Miete",meaning:"tiền thuê nhà",type:"Danh từ",level:"A2",topic:"Nhà cửa & đồ vật",example:"Die Miete steigt jedes Jahr."},
 {term:"umziehen",meaning:"chuyển nhà",type:"Động từ",level:"A2",topic:"Nhà cửa & đồ vật",example:"Wir ziehen nächsten Monat um."},
 {term:"einrichten",meaning:"trang trí, sắp xếp (nhà)",type:"Động từ",level:"B1",topic:"Nhà cửa & đồ vật",example:"Sie hat die Wohnung schön eingerichtet."},
 {term:"renovieren",meaning:"sửa chữa, tân trang",type:"Động từ",level:"B1",topic:"Nhà cửa & đồ vật",example:"Wir renovieren gerade die Küche."},
 {term:"aufräumen",meaning:"dọn dẹp",type:"Động từ",level:"A1",topic:"Nhà cửa & đồ vật",example:"Ich muss mein Zimmer aufräumen."},
 {term:"zu Hause sein",meaning:"ở nhà",type:"Cụm từ",level:"A1",topic:"Nhà cửa & đồ vật",example:"Ich bin heute Abend zu Hause."},
 {term:"Platz sparen",meaning:"tiết kiệm diện tích",type:"Cụm từ",level:"B1",topic:"Nhà cửa & đồ vật",example:"Dieses Möbelstück spart viel Platz."},
 {term:"in der Nähe wohnen",meaning:"sống gần đó",type:"Cụm từ",level:"A2",topic:"Nhà cửa & đồ vật",example:"Meine Eltern wohnen in der Nähe."},
 {term:"es sich gemütlich machen",meaning:"làm cho thoải mái, ấm cúng",type:"Cụm từ",level:"B1",topic:"Nhà cửa & đồ vật",example:"Am Wochenende mache ich es mir gemütlich."},

 // Ăn uống
 {term:"das Frühstück",meaning:"bữa sáng",type:"Danh từ",level:"A1",topic:"Ăn uống",example:"Ich esse selten Frühstück."},
 {term:"die Mahlzeit",meaning:"bữa ăn",type:"Danh từ",level:"A2",topic:"Ăn uống",example:"Drei Mahlzeiten am Tag sind gesund."},
 {term:"der Geschmack",meaning:"hương vị",type:"Danh từ",level:"A2",topic:"Ăn uống",example:"Der Geschmack ist sehr intensiv."},
 {term:"die Zutat",meaning:"nguyên liệu",type:"Danh từ",level:"B1",topic:"Ăn uống",example:"Welche Zutaten brauchen wir für das Rezept?"},
 {term:"bestellen",meaning:"gọi món, đặt hàng",type:"Động từ",level:"A1",topic:"Ăn uống",example:"Wir bestellen zwei Kaffee, bitte."},
 {term:"kochen",meaning:"nấu ăn",type:"Động từ",level:"A1",topic:"Ăn uống",example:"Ich koche gern vietnamesisch."},
 {term:"probieren",meaning:"thử (món ăn)",type:"Động từ",level:"A2",topic:"Ăn uống",example:"Möchtest du das probieren?"},
 {term:"schmecken",meaning:"có vị",type:"Động từ",level:"A1",topic:"Ăn uống",example:"Das schmeckt wirklich gut."},
 {term:"zum Mitnehmen",meaning:"mang đi",type:"Cụm từ",level:"A1",topic:"Ăn uống",example:"Ein Kaffee zum Mitnehmen, bitte."},
 {term:"auf Diät sein",meaning:"đang ăn kiêng",type:"Cụm từ",level:"B1",topic:"Ăn uống",example:"Ich bin gerade auf Diät."},
 {term:"Hunger haben",meaning:"đói bụng",type:"Cụm từ",level:"A1",topic:"Ăn uống",example:"Ich habe großen Hunger."},
 {term:"guten Appetit",meaning:"chúc ngon miệng",type:"Cụm từ",level:"A1",topic:"Ăn uống",example:"Guten Appetit euch allen!"},

 // Công việc & học tập
 {term:"der Beruf",meaning:"nghề nghiệp",type:"Danh từ",level:"A1",topic:"Công việc & học tập",example:"Was ist dein Beruf?"},
 {term:"die Bewerbung",meaning:"đơn xin việc",type:"Danh từ",level:"B1",topic:"Công việc & học tập",example:"Ich schreibe gerade eine Bewerbung."},
 {term:"die Besprechung",meaning:"cuộc họp",type:"Danh từ",level:"A2",topic:"Công việc & học tập",example:"Wir haben um zehn Uhr eine Besprechung."},
 {term:"die Erfahrung",meaning:"kinh nghiệm",type:"Danh từ",level:"A2",topic:"Công việc & học tập",example:"Sie hat viel Erfahrung in diesem Bereich."},
 {term:"sich bewerben",meaning:"ứng tuyển",type:"Động từ",level:"B1",topic:"Công việc & học tập",example:"Ich habe mich um die Stelle beworben."},
 {term:"kündigen",meaning:"nghỉ việc, chấm dứt hợp đồng",type:"Động từ",level:"B1",topic:"Công việc & học tập",example:"Er hat letzte Woche gekündigt."},
 {term:"verdienen",meaning:"kiếm (tiền)",type:"Động từ",level:"A2",topic:"Công việc & học tập",example:"Sie verdient gut in diesem Job."},
 {term:"sich konzentrieren",meaning:"tập trung",type:"Động từ",level:"A2",topic:"Công việc & học tập",example:"Ich kann mich nicht konzentrieren."},
 {term:"Überstunden machen",meaning:"làm thêm giờ",type:"Cụm từ",level:"B1",topic:"Công việc & học tập",example:"Ich muss diese Woche Überstunden machen."},
 {term:"eine Prüfung bestehen",meaning:"vượt qua kỳ thi",type:"Cụm từ",level:"A2",topic:"Công việc & học tập",example:"Ich habe die Prüfung bestanden."},
 {term:"im Homeoffice arbeiten",meaning:"làm việc tại nhà",type:"Cụm từ",level:"B1",topic:"Công việc & học tập",example:"Freitags arbeite ich im Homeoffice."},
 {term:"unter Druck stehen",meaning:"chịu áp lực",type:"Cụm từ",level:"B2",topic:"Công việc & học tập",example:"Vor der Deadline stehe ich unter Druck."},

 // Thời gian
 {term:"der Termin",meaning:"cuộc hẹn",type:"Danh từ",level:"A2",topic:"Thời gian",example:"Ich habe morgen einen Termin beim Arzt."},
 {term:"die Verspätung",meaning:"sự trễ giờ",type:"Danh từ",level:"A2",topic:"Thời gian",example:"Der Zug hat eine Verspätung von zehn Minuten."},
 {term:"der Alltag",meaning:"cuộc sống thường ngày",type:"Danh từ",level:"B1",topic:"Thời gian",example:"Mein Alltag ist ziemlich stressig."},
 {term:"die Zukunft",meaning:"tương lai",type:"Danh từ",level:"A2",topic:"Thời gian",example:"Niemand kennt die Zukunft."},
 {term:"sich beeilen",meaning:"vội vàng, nhanh lên",type:"Động từ",level:"A2",topic:"Thời gian",example:"Beeil dich, wir sind spät dran!"},
 {term:"verpassen",meaning:"lỡ, bỏ lỡ",type:"Động từ",level:"A2",topic:"Thời gian",example:"Ich habe den Bus verpasst."},
 {term:"planen",meaning:"lên kế hoạch",type:"Động từ",level:"A2",topic:"Thời gian",example:"Wir planen eine Reise im Sommer."},
 {term:"dauern",meaning:"kéo dài (thời gian)",type:"Động từ",level:"A1",topic:"Thời gian",example:"Wie lange dauert der Film?"},
 {term:"pünktlich sein",meaning:"đúng giờ",type:"Cụm từ",level:"A1",topic:"Thời gian",example:"Bitte sei morgen pünktlich."},
 {term:"Zeit verschwenden",meaning:"lãng phí thời gian",type:"Cụm từ",level:"B1",topic:"Thời gian",example:"Wir sollten keine Zeit verschwenden."},
 {term:"in letzter Minute",meaning:"vào phút chót",type:"Cụm từ",level:"B1",topic:"Thời gian",example:"Er kam in letzter Minute an."},
 {term:"von Zeit zu Zeit",meaning:"thỉnh thoảng",type:"Cụm từ",level:"A2",topic:"Thời gian",example:"Ich gehe von Zeit zu Zeit ins Kino."},

 // Giao thông
 {term:"der Fahrplan",meaning:"lịch trình (tàu/xe)",type:"Danh từ",level:"A2",topic:"Giao thông",example:"Hast du den Fahrplan gesehen?"},
 {term:"der Stau",meaning:"tắc đường",type:"Danh từ",level:"A2",topic:"Giao thông",example:"Wir standen zwei Stunden im Stau."},
 {term:"das Ticket",meaning:"vé",type:"Danh từ",level:"A1",topic:"Giao thông",example:"Ich habe ein Ticket nach Berlin gekauft."},
 {term:"die Ampel",meaning:"đèn giao thông",type:"Danh từ",level:"A1",topic:"Giao thông",example:"Die Ampel ist rot."},
 {term:"umsteigen",meaning:"đổi tàu/xe",type:"Động từ",level:"A2",topic:"Giao thông",example:"Du musst in München umsteigen."},
 {term:"parken",meaning:"đỗ xe",type:"Động từ",level:"A1",topic:"Giao thông",example:"Ich kann hier nicht parken."},
 {term:"aussteigen",meaning:"xuống xe",type:"Động từ",level:"A1",topic:"Giao thông",example:"Wir steigen an der nächsten Haltestelle aus."},
 {term:"sich verfahren",meaning:"đi lạc đường (lái xe)",type:"Động từ",level:"B1",topic:"Giao thông",example:"Wir haben uns total verfahren."},
 {term:"zu Fuß gehen",meaning:"đi bộ",type:"Cụm từ",level:"A1",topic:"Giao thông",example:"Ich gehe lieber zu Fuß."},
 {term:"ein Taxi rufen",meaning:"gọi taxi",type:"Cụm từ",level:"A1",topic:"Giao thông",example:"Soll ich ein Taxi rufen?"},
 {term:"im Stau stehen",meaning:"kẹt xe",type:"Cụm từ",level:"A2",topic:"Giao thông",example:"Wir stehen schon wieder im Stau."},
 {term:"pünktlich ankommen",meaning:"đến đúng giờ",type:"Cụm từ",level:"A2",topic:"Giao thông",example:"Der Zug ist pünktlich angekommen."},

 // Mua sắm
 {term:"der Rabatt",meaning:"giảm giá",type:"Danh từ",level:"A2",topic:"Mua sắm",example:"Es gibt zwanzig Prozent Rabatt."},
 {term:"die Quittung",meaning:"hóa đơn",type:"Danh từ",level:"A2",topic:"Mua sắm",example:"Kann ich bitte eine Quittung bekommen?"},
 {term:"die Größe",meaning:"kích cỡ",type:"Danh từ",level:"A1",topic:"Mua sắm",example:"Welche Größe brauchen Sie?"},
 {term:"das Angebot",meaning:"ưu đãi, khuyến mãi",type:"Danh từ",level:"B1",topic:"Mua sắm",example:"Das ist ein gutes Angebot."},
 {term:"umtauschen",meaning:"đổi hàng",type:"Động từ",level:"A2",topic:"Mua sắm",example:"Kann ich das umtauschen?"},
 {term:"anprobieren",meaning:"thử (quần áo)",type:"Động từ",level:"A1",topic:"Mua sắm",example:"Darf ich das anprobieren?"},
 {term:"bezahlen",meaning:"thanh toán",type:"Động từ",level:"A1",topic:"Mua sắm",example:"Ich bezahle mit Karte."},
 {term:"sparen",meaning:"tiết kiệm",type:"Động từ",level:"A2",topic:"Mua sắm",example:"Ich spare für eine Reise."},
 {term:"im Angebot sein",meaning:"đang khuyến mãi",type:"Cụm từ",level:"B1",topic:"Mua sắm",example:"Diese Schuhe sind gerade im Angebot."},
 {term:"auf Rechnung",meaning:"trả sau (hóa đơn)",type:"Cụm từ",level:"B2",topic:"Mua sắm",example:"Kann ich auf Rechnung bezahlen?"},
 {term:"Schlange stehen",meaning:"xếp hàng",type:"Cụm từ",level:"A2",topic:"Mua sắm",example:"Wir mussten lange Schlange stehen."},
 {term:"das Geld reicht nicht",meaning:"không đủ tiền",type:"Cụm từ",level:"A2",topic:"Mua sắm",example:"Das Geld reicht leider nicht."},

 // Sức khỏe
 {term:"das Rezept",meaning:"đơn thuốc",type:"Danh từ",level:"A2",topic:"Sức khỏe",example:"Der Arzt hat mir ein Rezept gegeben."},
 {term:"die Erkältung",meaning:"cảm lạnh",type:"Danh từ",level:"A1",topic:"Sức khỏe",example:"Ich habe eine schlimme Erkältung."},
 {term:"der Schmerz",meaning:"cơn đau",type:"Danh từ",level:"A1",topic:"Sức khỏe",example:"Ich habe starke Kopfschmerzen."},
 {term:"die Behandlung",meaning:"điều trị",type:"Danh từ",level:"B1",topic:"Sức khỏe",example:"Die Behandlung dauert mehrere Wochen."},
 {term:"sich erkälten",meaning:"bị cảm lạnh",type:"Động từ",level:"A1",topic:"Sức khỏe",example:"Ich habe mich erkältet."},
 {term:"sich ausruhen",meaning:"nghỉ ngơi",type:"Động từ",level:"A2",topic:"Sức khỏe",example:"Du solltest dich ausruhen."},
 {term:"untersuchen",meaning:"khám (bệnh)",type:"Động từ",level:"A2",topic:"Sức khỏe",example:"Der Arzt hat mich gründlich untersucht."},
 {term:"sich erholen",meaning:"hồi phục",type:"Động từ",level:"B1",topic:"Sức khỏe",example:"Er erholt sich langsam von der Operation."},
 {term:"einen Termin vereinbaren",meaning:"đặt lịch hẹn",type:"Cụm từ",level:"A2",topic:"Sức khỏe",example:"Ich muss einen Termin vereinbaren."},
 {term:"sich wohlfühlen",meaning:"cảm thấy thoải mái, khỏe",type:"Cụm từ",level:"A2",topic:"Sức khỏe",example:"Ich fühle mich heute nicht wohl."},
 {term:"gesund leben",meaning:"sống lành mạnh",type:"Cụm từ",level:"B1",topic:"Sức khỏe",example:"Ich versuche, gesund zu leben."},
 {term:"auf Nummer sicher gehen",meaning:"cho chắc ăn",type:"Cụm từ",level:"B2",topic:"Sức khỏe",example:"Lass uns auf Nummer sicher gehen und einen Arzt fragen."},

 // Thời tiết & thiên nhiên
 {term:"der Regen",meaning:"mưa",type:"Danh từ",level:"A1",topic:"Thời tiết & thiên nhiên",example:"Der Regen hört gleich auf."},
 {term:"die Umwelt",meaning:"môi trường",type:"Danh từ",level:"B1",topic:"Thời tiết & thiên nhiên",example:"Wir müssen die Umwelt schützen."},
 {term:"die Temperatur",meaning:"nhiệt độ",type:"Danh từ",level:"A1",topic:"Thời tiết & thiên nhiên",example:"Die Temperatur steigt heute auf dreißig Grad."},
 {term:"die Landschaft",meaning:"phong cảnh",type:"Danh từ",level:"B1",topic:"Thời tiết & thiên nhiên",example:"Die Landschaft hier ist wunderschön."},
 {term:"schneien",meaning:"có tuyết rơi",type:"Động từ",level:"A1",topic:"Thời tiết & thiên nhiên",example:"Es schneit draußen."},
 {term:"sich verschlechtern",meaning:"trở nên tệ hơn (thời tiết)",type:"Động từ",level:"B1",topic:"Thời tiết & thiên nhiên",example:"Das Wetter verschlechtert sich."},
 {term:"schützen",meaning:"bảo vệ",type:"Động từ",level:"A2",topic:"Thời tiết & thiên nhiên",example:"Wir müssen die Natur schützen."},
 {term:"blühen",meaning:"nở hoa",type:"Động từ",level:"A2",topic:"Thời tiết & thiên nhiên",example:"Im Frühling blühen die Bäume."},
 {term:"es regnet in Strömen",meaning:"mưa như trút nước",type:"Cụm từ",level:"B1",topic:"Thời tiết & thiên nhiên",example:"Draußen regnet es in Strömen."},
 {term:"bei schönem Wetter",meaning:"khi trời đẹp",type:"Cụm từ",level:"A2",topic:"Thời tiết & thiên nhiên",example:"Bei schönem Wetter gehen wir spazieren."},
 {term:"der Klimawandel",meaning:"biến đổi khí hậu",type:"Cụm từ",level:"B1",topic:"Thời tiết & thiên nhiên",example:"Der Klimawandel betrifft uns alle."},
 {term:"frische Luft schnappen",meaning:"hít thở không khí trong lành",type:"Cụm từ",level:"B1",topic:"Thời tiết & thiên nhiên",example:"Lass uns frische Luft schnappen gehen."},

 // Cảm xúc & giao tiếp
 {term:"die Freude",meaning:"niềm vui",type:"Danh từ",level:"A2",topic:"Cảm xúc & giao tiếp",example:"Das war eine große Freude für mich."},
 {term:"die Sorge",meaning:"nỗi lo",type:"Danh từ",level:"A2",topic:"Cảm xúc & giao tiếp",example:"Mach dir keine Sorgen."},
 {term:"die Meinung",meaning:"ý kiến",type:"Danh từ",level:"A2",topic:"Cảm xúc & giao tiếp",example:"Was ist deine Meinung dazu?"},
 {term:"das Missverständnis",meaning:"sự hiểu lầm",type:"Danh từ",level:"B1",topic:"Cảm xúc & giao tiếp",example:"Das war nur ein Missverständnis."},
 {term:"sich freuen",meaning:"vui mừng",type:"Động từ",level:"A1",topic:"Cảm xúc & giao tiếp",example:"Ich freue mich auf das Wochenende."},
 {term:"sich ärgern",meaning:"bực mình",type:"Động từ",level:"A2",topic:"Cảm xúc & giao tiếp",example:"Er ärgert sich über das Wetter."},
 {term:"zustimmen",meaning:"đồng ý",type:"Động từ",level:"B1",topic:"Cảm xúc & giao tiếp",example:"Ich stimme dir völlig zu."},
 {term:"überzeugen",meaning:"thuyết phục",type:"Động từ",level:"B1",topic:"Cảm xúc & giao tiếp",example:"Sie hat mich überzeugt."},
 {term:"die Nerven verlieren",meaning:"mất bình tĩnh",type:"Cụm từ",level:"B1",topic:"Cảm xúc & giao tiếp",example:"Bleib ruhig, verlier nicht die Nerven."},
 {term:"seine Meinung sagen",meaning:"nói lên ý kiến của mình",type:"Cụm từ",level:"A2",topic:"Cảm xúc & giao tiếp",example:"Jeder darf seine Meinung sagen."},
 {term:"es tut mir leid",meaning:"tôi xin lỗi",type:"Cụm từ",level:"A1",topic:"Cảm xúc & giao tiếp",example:"Es tut mir wirklich leid."},
 {term:"im Großen und Ganzen",meaning:"nhìn chung",type:"Cụm từ",level:"B2",topic:"Cảm xúc & giao tiếp",example:"Im Großen und Ganzen war es ein guter Tag."},
];

const TYPES=["Danh từ","Động từ","Cụm từ"];
const LEVELS=["A1","A2","B1","B2"];
const TOPICS=[...new Set(VOCAB.map(w=>w.topic))];
GRAMMAR.vocab = { list: VOCAB, types: TYPES, levels: LEVELS, topics: TOPICS };
})();
