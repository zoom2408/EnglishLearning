/* nb/content/vocab/ordforrad.js
   Core A1-B2 vocabulary: Substantiv/Verb/Uttrykk across the same 10
   everyday topics as the German track. Same language-neutral schema
   (term/meaning/type/level/topic/example) read generically by
   assets/js/pages/vocab.js. */
(() => {
const VOCAB = [
 // Gia đình & con người
 {term:"en familie",meaning:"gia đình",type:"Danh từ",level:"A1",topic:"Gia đình & con người",example:"Familien min bor i Hanoi."},
 {term:"en venn / ei venninne",meaning:"bạn (nam/nữ)",type:"Danh từ",level:"A1",topic:"Gia đình & con người",example:"Han er bestevennen min."},
 {term:"foreldre",meaning:"cha mẹ",type:"Danh từ",level:"A1",topic:"Gia đình & con người",example:"Foreldrene mine jobber begge i Hanoi."},
 {term:"et naboskap",meaning:"hàng xóm (khu vực)",type:"Danh từ",level:"B1",topic:"Gia đình & con người",example:"Naboskapet er veldig rolig."},
 {term:"bli kjent med",meaning:"làm quen, gặp gỡ",type:"Động từ",level:"A2",topic:"Gia đình & con người",example:"Jeg ble kjent med henne i fjor."},
 {term:"forelske seg",meaning:"yêu, phải lòng",type:"Động từ",level:"B1",topic:"Gia đình & con người",example:"Han forelsket seg i henne."},
 {term:"stole på",meaning:"tin tưởng",type:"Động từ",level:"B1",topic:"Gia đình & con người",example:"Jeg stoler helt på vennene mine."},
 {term:"ta vare på",meaning:"chăm sóc",type:"Động từ",level:"A2",topic:"Gia đình & con người",example:"Hun tar vare på besteforeldrene sine."},
 {term:"kjenne noen godt",meaning:"hiểu rõ ai đó",type:"Cụm từ",level:"A2",topic:"Gia đình & con người",example:"Jeg kjenner ham godt allerede."},
 {term:"holde kontakt",meaning:"giữ liên lạc",type:"Cụm từ",level:"B1",topic:"Gia đình & con người",example:"Vi holder fortsatt kontakt."},
 {term:"passe på noen",meaning:"trông nom ai đó",type:"Cụm từ",level:"A1",topic:"Gia đình & con người",example:"Kan du passe på broren min?"},
 {term:"ha et godt forhold",meaning:"có mối quan hệ tốt",type:"Cụm từ",level:"B1",topic:"Gia đình & con người",example:"Vi har et godt forhold til hverandre."},

 // Nhà cửa & đồ vật
 {term:"en leilighet",meaning:"căn hộ",type:"Danh từ",level:"A1",topic:"Nhà cửa & đồ vật",example:"Leiligheten min har to rom."},
 {term:"møbler",meaning:"đồ nội thất",type:"Danh từ",level:"A2",topic:"Nhà cửa & đồ vật",example:"Vi trenger nye møbler."},
 {term:"en nøkkel",meaning:"chìa khóa",type:"Danh từ",level:"A1",topic:"Nhà cửa & đồ vật",example:"Jeg har mistet nøkkelen min."},
 {term:"en husleie",meaning:"tiền thuê nhà",type:"Danh từ",level:"A2",topic:"Nhà cửa & đồ vật",example:"Husleien øker hvert år."},
 {term:"flytte",meaning:"chuyển nhà",type:"Động từ",level:"A2",topic:"Nhà cửa & đồ vật",example:"Vi flytter neste måned."},
 {term:"innrede",meaning:"trang trí, sắp xếp (nhà)",type:"Động từ",level:"B1",topic:"Nhà cửa & đồ vật",example:"Hun har innredet leiligheten fint."},
 {term:"pusse opp",meaning:"sửa chữa, tân trang",type:"Động từ",level:"B1",topic:"Nhà cửa & đồ vật",example:"Vi pusser opp kjøkkenet nå."},
 {term:"rydde",meaning:"dọn dẹp",type:"Động từ",level:"A1",topic:"Nhà cửa & đồ vật",example:"Jeg må rydde rommet mitt."},
 {term:"være hjemme",meaning:"ở nhà",type:"Cụm từ",level:"A1",topic:"Nhà cửa & đồ vật",example:"Jeg er hjemme i kveld."},
 {term:"spare plass",meaning:"tiết kiệm diện tích",type:"Cụm từ",level:"B1",topic:"Nhà cửa & đồ vật",example:"Dette møbelet sparer mye plass."},
 {term:"bo i nærheten",meaning:"sống gần đó",type:"Cụm từ",level:"A2",topic:"Nhà cửa & đồ vật",example:"Foreldrene mine bor i nærheten."},
 {term:"gjøre det koselig",meaning:"làm cho ấm cúng",type:"Cụm từ",level:"B1",topic:"Nhà cửa & đồ vật",example:"I helgen gjør jeg det koselig hjemme."},

 // Ăn uống
 {term:"en frokost",meaning:"bữa sáng",type:"Danh từ",level:"A1",topic:"Ăn uống",example:"Jeg spiser sjelden frokost."},
 {term:"et måltid",meaning:"bữa ăn",type:"Danh từ",level:"A2",topic:"Ăn uống",example:"Tre måltider om dagen er sunt."},
 {term:"en smak",meaning:"hương vị",type:"Danh từ",level:"A2",topic:"Ăn uống",example:"Smaken er veldig sterk."},
 {term:"en ingrediens",meaning:"nguyên liệu",type:"Danh từ",level:"B1",topic:"Ăn uống",example:"Hvilke ingredienser trenger vi til oppskriften?"},
 {term:"bestille",meaning:"gọi món, đặt hàng",type:"Động từ",level:"A1",topic:"Ăn uống",example:"Vi bestiller to kaffe, takk."},
 {term:"lage mat",meaning:"nấu ăn",type:"Động từ",level:"A1",topic:"Ăn uống",example:"Jeg liker å lage vietnamesisk mat."},
 {term:"smake på",meaning:"thử (món ăn)",type:"Động từ",level:"A2",topic:"Ăn uống",example:"Vil du smake på dette?"},
 {term:"smake",meaning:"có vị",type:"Động từ",level:"A1",topic:"Ăn uống",example:"Dette smaker veldig godt."},
 {term:"til take-away",meaning:"mang đi",type:"Cụm từ",level:"A1",topic:"Ăn uống",example:"En kaffe til take-away, takk."},
 {term:"være på diett",meaning:"đang ăn kiêng",type:"Cụm từ",level:"B1",topic:"Ăn uống",example:"Jeg er på diett nå."},
 {term:"være sulten",meaning:"đói bụng",type:"Cụm từ",level:"A1",topic:"Ăn uống",example:"Jeg er veldig sulten."},
 {term:"god appetitt",meaning:"chúc ngon miệng",type:"Cụm từ",level:"A1",topic:"Ăn uống",example:"God appetitt, alle sammen!"},

 // Công việc & học tập
 {term:"et yrke",meaning:"nghề nghiệp",type:"Danh từ",level:"A1",topic:"Công việc & học tập",example:"Hva er yrket ditt?"},
 {term:"en søknad",meaning:"đơn xin việc",type:"Danh từ",level:"B1",topic:"Công việc & học tập",example:"Jeg skriver en søknad nå."},
 {term:"et møte",meaning:"cuộc họp",type:"Danh từ",level:"A2",topic:"Công việc & học tập",example:"Vi har møte klokka ti."},
 {term:"en erfaring",meaning:"kinh nghiệm",type:"Danh từ",level:"A2",topic:"Công việc & học tập",example:"Hun har mye erfaring på dette området."},
 {term:"søke på",meaning:"ứng tuyển",type:"Động từ",level:"B1",topic:"Công việc & học tập",example:"Jeg søkte på stillingen."},
 {term:"si opp",meaning:"nghỉ việc",type:"Động từ",level:"B1",topic:"Công việc & học tập",example:"Han sa opp forrige uke."},
 {term:"tjene",meaning:"kiếm (tiền)",type:"Động từ",level:"A2",topic:"Công việc & học tập",example:"Hun tjener godt i denne jobben."},
 {term:"konsentrere seg",meaning:"tập trung",type:"Động từ",level:"A2",topic:"Công việc & học tập",example:"Jeg klarer ikke å konsentrere meg."},
 {term:"jobbe overtid",meaning:"làm thêm giờ",type:"Cụm từ",level:"B1",topic:"Công việc & học tập",example:"Jeg må jobbe overtid denne uken."},
 {term:"bestå en eksamen",meaning:"vượt qua kỳ thi",type:"Cụm từ",level:"A2",topic:"Công việc & học tập",example:"Jeg besto eksamen."},
 {term:"jobbe hjemmefra",meaning:"làm việc tại nhà",type:"Cụm từ",level:"B1",topic:"Công việc & học tập",example:"Fredager jobber jeg hjemmefra."},
 {term:"være under press",meaning:"chịu áp lực",type:"Cụm từ",level:"B2",topic:"Công việc & học tập",example:"Før fristen er jeg under press."},

 // Thời gian
 {term:"en avtale",meaning:"cuộc hẹn",type:"Danh từ",level:"A2",topic:"Thời gian",example:"Jeg har en avtale hos legen i morgen."},
 {term:"en forsinkelse",meaning:"sự trễ giờ",type:"Danh từ",level:"A2",topic:"Thời gian",example:"Toget har ti minutters forsinkelse."},
 {term:"en hverdag",meaning:"cuộc sống thường ngày",type:"Danh từ",level:"B1",topic:"Thời gian",example:"Hverdagen min er ganske stressende."},
 {term:"en fremtid",meaning:"tương lai",type:"Danh từ",level:"A2",topic:"Thời gian",example:"Ingen kjenner fremtiden."},
 {term:"skynde seg",meaning:"vội vàng, nhanh lên",type:"Động từ",level:"A2",topic:"Thời gian",example:"Skynd deg, vi er sent ute!"},
 {term:"gå glipp av",meaning:"lỡ, bỏ lỡ",type:"Động từ",level:"A2",topic:"Thời gian",example:"Jeg gikk glipp av bussen."},
 {term:"planlegge",meaning:"lên kế hoạch",type:"Động từ",level:"A2",topic:"Thời gian",example:"Vi planlegger en reise i sommer."},
 {term:"vare",meaning:"kéo dài (thời gian)",type:"Động từ",level:"A1",topic:"Thời gian",example:"Hvor lenge varer filmen?"},
 {term:"være presis",meaning:"đúng giờ",type:"Cụm từ",level:"A1",topic:"Thời gian",example:"Vær presis i morgen, takk."},
 {term:"kaste bort tid",meaning:"lãng phí thời gian",type:"Cụm từ",level:"B1",topic:"Thời gian",example:"Vi bør ikke kaste bort tid."},
 {term:"i siste liten",meaning:"vào phút chót",type:"Cụm từ",level:"B1",topic:"Thời gian",example:"Han kom i siste liten."},
 {term:"fra tid til annen",meaning:"thỉnh thoảng",type:"Cụm từ",level:"A2",topic:"Thời gian",example:"Jeg går på kino fra tid til annen."},

 // Giao thông
 {term:"en rutetabell",meaning:"lịch trình (tàu/xe)",type:"Danh từ",level:"A2",topic:"Giao thông",example:"Har du sett rutetabellen?"},
 {term:"en kø",meaning:"tắc đường, hàng chờ",type:"Danh từ",level:"A2",topic:"Giao thông",example:"Vi sto i kø i to timer."},
 {term:"en billett",meaning:"vé",type:"Danh từ",level:"A1",topic:"Giao thông",example:"Jeg har kjøpt en billett til Bergen."},
 {term:"et lyskryss",meaning:"đèn giao thông",type:"Danh từ",level:"A1",topic:"Giao thông",example:"Lyskrysset er rødt."},
 {term:"bytte",meaning:"đổi tàu/xe",type:"Động từ",level:"A2",topic:"Giao thông",example:"Du må bytte tog i Oslo."},
 {term:"parkere",meaning:"đỗ xe",type:"Động từ",level:"A1",topic:"Giao thông",example:"Jeg kan ikke parkere her."},
 {term:"gå av",meaning:"xuống xe",type:"Động từ",level:"A1",topic:"Giao thông",example:"Vi går av på neste stopp."},
 {term:"kjøre seg bort",meaning:"đi lạc đường (lái xe)",type:"Động từ",level:"B1",topic:"Giao thông",example:"Vi kjørte oss helt bort."},
 {term:"gå til fots",meaning:"đi bộ",type:"Cụm từ",level:"A1",topic:"Giao thông",example:"Jeg foretrekker å gå til fots."},
 {term:"ringe etter en taxi",meaning:"gọi taxi",type:"Cụm từ",level:"A1",topic:"Giao thông",example:"Skal jeg ringe etter en taxi?"},
 {term:"stå i kø",meaning:"kẹt xe",type:"Cụm từ",level:"A2",topic:"Giao thông",example:"Vi står i kø igjen."},
 {term:"komme presist",meaning:"đến đúng giờ",type:"Cụm từ",level:"A2",topic:"Giao thông",example:"Toget kom presist."},

 // Mua sắm
 {term:"en rabatt",meaning:"giảm giá",type:"Danh từ",level:"A2",topic:"Mua sắm",example:"Det er tjue prosent rabatt."},
 {term:"en kvittering",meaning:"hóa đơn",type:"Danh từ",level:"A2",topic:"Mua sắm",example:"Kan jeg få en kvittering?"},
 {term:"en størrelse",meaning:"kích cỡ",type:"Danh từ",level:"A1",topic:"Mua sắm",example:"Hvilken størrelse trenger du?"},
 {term:"et tilbud",meaning:"ưu đãi, khuyến mãi",type:"Danh từ",level:"B1",topic:"Mua sắm",example:"Dette er et godt tilbud."},
 {term:"bytte",meaning:"đổi hàng",type:"Động từ",level:"A2",topic:"Mua sắm",example:"Kan jeg bytte dette?"},
 {term:"prøve",meaning:"thử (quần áo)",type:"Động từ",level:"A1",topic:"Mua sắm",example:"Kan jeg prøve denne?"},
 {term:"betale",meaning:"thanh toán",type:"Động từ",level:"A1",topic:"Mua sắm",example:"Jeg betaler med kort."},
 {term:"spare",meaning:"tiết kiệm",type:"Động từ",level:"A2",topic:"Mua sắm",example:"Jeg sparer til en reise."},
 {term:"være på tilbud",meaning:"đang khuyến mãi",type:"Cụm từ",level:"B1",topic:"Mua sắm",example:"Disse skoene er på tilbud nå."},
 {term:"betale på faktura",meaning:"trả sau (hóa đơn)",type:"Cụm từ",level:"B2",topic:"Mua sắm",example:"Kan jeg betale på faktura?"},
 {term:"vente i kø",meaning:"xếp hàng chờ",type:"Cụm từ",level:"A2",topic:"Mua sắm",example:"Vi måtte vente lenge i kø."},
 {term:"pengene strekker ikke til",meaning:"không đủ tiền",type:"Cụm từ",level:"A2",topic:"Mua sắm",example:"Pengene strekker dessverre ikke til."},

 // Sức khỏe
 {term:"en resept",meaning:"đơn thuốc",type:"Danh từ",level:"A2",topic:"Sức khỏe",example:"Legen ga meg en resept."},
 {term:"en forkjølelse",meaning:"cảm lạnh",type:"Danh từ",level:"A1",topic:"Sức khỏe",example:"Jeg har en fæl forkjølelse."},
 {term:"en smerte",meaning:"cơn đau",type:"Danh từ",level:"A1",topic:"Sức khỏe",example:"Jeg har sterke hodesmerter."},
 {term:"en behandling",meaning:"điều trị",type:"Danh từ",level:"B1",topic:"Sức khỏe",example:"Behandlingen varer flere uker."},
 {term:"bli forkjølet",meaning:"bị cảm lạnh",type:"Động từ",level:"A1",topic:"Sức khỏe",example:"Jeg har blitt forkjølet."},
 {term:"hvile",meaning:"nghỉ ngơi",type:"Động từ",level:"A2",topic:"Sức khỏe",example:"Du bør hvile deg."},
 {term:"undersøke",meaning:"khám (bệnh)",type:"Động từ",level:"A2",topic:"Sức khỏe",example:"Legen undersøkte meg grundig."},
 {term:"bli frisk igjen",meaning:"hồi phục",type:"Động từ",level:"B1",topic:"Sức khỏe",example:"Han blir sakte frisk igjen etter operasjonen."},
 {term:"avtale time",meaning:"đặt lịch hẹn",type:"Cụm từ",level:"A2",topic:"Sức khỏe",example:"Jeg må avtale time hos legen."},
 {term:"føle seg bra",meaning:"cảm thấy khỏe, thoải mái",type:"Cụm từ",level:"A2",topic:"Sức khỏe",example:"Jeg føler meg ikke bra i dag."},
 {term:"leve sunt",meaning:"sống lành mạnh",type:"Cụm từ",level:"B1",topic:"Sức khỏe",example:"Jeg prøver å leve sunt."},
 {term:"for sikkerhets skyld",meaning:"cho chắc ăn",type:"Cụm từ",level:"B2",topic:"Sức khỏe",example:"La oss spørre legen for sikkerhets skyld."},

 // Thời tiết & thiên nhiên
 {term:"regn",meaning:"mưa",type:"Danh từ",level:"A1",topic:"Thời tiết & thiên nhiên",example:"Regnet stopper snart."},
 {term:"miljø",meaning:"môi trường",type:"Danh từ",level:"B1",topic:"Thời tiết & thiên nhiên",example:"Vi må ta vare på miljøet."},
 {term:"en temperatur",meaning:"nhiệt độ",type:"Danh từ",level:"A1",topic:"Thời tiết & thiên nhiên",example:"Temperaturen stiger til tretti grader i dag."},
 {term:"et landskap",meaning:"phong cảnh",type:"Danh từ",level:"B1",topic:"Thời tiết & thiên nhiên",example:"Landskapet her er nydelig."},
 {term:"snø",meaning:"có tuyết rơi",type:"Động từ",level:"A1",topic:"Thời tiết & thiên nhiên",example:"Det snør ute."},
 {term:"forverre seg",meaning:"trở nên tệ hơn",type:"Động từ",level:"B1",topic:"Thời tiết & thiên nhiên",example:"Været forverrer seg."},
 {term:"beskytte",meaning:"bảo vệ",type:"Động từ",level:"A2",topic:"Thời tiết & thiên nhiên",example:"Vi må beskytte naturen."},
 {term:"blomstre",meaning:"nở hoa",type:"Động từ",level:"A2",topic:"Thời tiết & thiên nhiên",example:"Om våren blomstrer trærne."},
 {term:"det regner som bare det",meaning:"mưa như trút nước",type:"Cụm từ",level:"B1",topic:"Thời tiết & thiên nhiên",example:"Ute regner det som bare det."},
 {term:"når været er fint",meaning:"khi trời đẹp",type:"Cụm từ",level:"A2",topic:"Thời tiết & thiên nhiên",example:"Når været er fint, går vi tur."},
 {term:"klimaendringer",meaning:"biến đổi khí hậu",type:"Cụm từ",level:"B1",topic:"Thời tiết & thiên nhiên",example:"Klimaendringer angår oss alle."},
 {term:"puste inn frisk luft",meaning:"hít thở không khí trong lành",type:"Cụm từ",level:"B1",topic:"Thời tiết & thiên nhiên",example:"La oss gå ut og puste inn frisk luft."},

 // Cảm xúc & giao tiếp
 {term:"en glede",meaning:"niềm vui",type:"Danh từ",level:"A2",topic:"Cảm xúc & giao tiếp",example:"Det var en stor glede for meg."},
 {term:"en bekymring",meaning:"nỗi lo",type:"Danh từ",level:"A2",topic:"Cảm xúc & giao tiếp",example:"Ikke vær bekymret."},
 {term:"en mening",meaning:"ý kiến",type:"Danh từ",level:"A2",topic:"Cảm xúc & giao tiếp",example:"Hva er meningen din om dette?"},
 {term:"en misforståelse",meaning:"sự hiểu lầm",type:"Danh từ",level:"B1",topic:"Cảm xúc & giao tiếp",example:"Det var bare en misforståelse."},
 {term:"glede seg",meaning:"vui mừng",type:"Động từ",level:"A1",topic:"Cảm xúc & giao tiếp",example:"Jeg gleder meg til helgen."},
 {term:"irritere seg",meaning:"bực mình",type:"Động từ",level:"A2",topic:"Cảm xúc & giao tiếp",example:"Han irriterer seg over været."},
 {term:"være enig",meaning:"đồng ý",type:"Động từ",level:"B1",topic:"Cảm xúc & giao tiếp",example:"Jeg er helt enig med deg."},
 {term:"overbevise",meaning:"thuyết phục",type:"Động từ",level:"B1",topic:"Cảm xúc & giao tiếp",example:"Hun overbeviste meg."},
 {term:"miste besinnelsen",meaning:"mất bình tĩnh",type:"Cụm từ",level:"B1",topic:"Cảm xúc & giao tiếp",example:"Hold deg rolig, ikke mist besinnelsen."},
 {term:"si sin mening",meaning:"nói lên ý kiến của mình",type:"Cụm từ",level:"A2",topic:"Cảm xúc & giao tiếp",example:"Alle får si sin mening."},
 {term:"jeg beklager",meaning:"tôi xin lỗi",type:"Cụm từ",level:"A1",topic:"Cảm xúc & giao tiếp",example:"Jeg beklager virkelig."},
 {term:"stort sett",meaning:"nhìn chung",type:"Cụm từ",level:"B2",topic:"Cảm xúc & giao tiếp",example:"Stort sett var det en god dag."},
];

const TYPES=["Danh từ","Động từ","Cụm từ"];
const LEVELS=["A1","A2","B1","B2"];
const TOPICS=[...new Set(VOCAB.map(w=>w.topic))];
GRAMMAR.vocab = { list: VOCAB, types: TYPES, levels: LEVELS, topics: TOPICS };
})();
