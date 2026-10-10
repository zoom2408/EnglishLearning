/* ja/content/theory/kanou.js
   Kanou: potential form, 見える/聞こえる, imperative/prohibitive, obligation and advice.
   Uses the "table" diagram mode. Furigana: {漢字|かんじ}; romaji lines via ex(). */
(() => {
const ex = (jp, ro) => rb(jp) + (ro ? `<span class="ro">${ro}</span>` : "");
const T = [
 {id:"ja-kan-kanou",num:"01",en:"可能形",vi:"Thể khả năng",short:"のめる · たべられる · できる · こられる",
  core:"Thể khả năng: <strong>nhóm 1</strong> đổi u → <strong>e + る</strong> (のむ → のめる), <strong>nhóm 2</strong> bỏ る + <strong>られる</strong> (たべる → たべられる), <strong>する → できる</strong>, <strong>くる → こられる</strong>. Đối tượng thường đi với <strong>が</strong>, kết quả chia như động từ nhóm 2.",
  forms:[["Nhóm 1","u → eる",ex("{飲|の}む → {飲|の}<mark>める</mark>","nomu → nomeru")],["Nhóm 2","る → られる",ex("{食|た}べる → {食|た}べ<mark>られる</mark>","taberu → taberareru")],["Nhóm 3","できる / こられる",ex("する → <mark>できる</mark> / {来|く}る → {来|こ}<mark>られる</mark>","suru → dekiru / kuru → korareru")],["Câu khẳng định","N が V(可能)",ex("{日本語|にほんご}<mark>が</mark>{話|はな}せます。","nihongo ga hanasemasu")],["Phủ định","〜られない / 〜めない",ex("{納豆|なっとう}は{食|た}べ<mark>られません</mark>。","nattō wa taberaremasen")],["Nói cách khác","〜ことができる",ex("{車|くるま}を{運転|うんてん}する<mark>ことができます</mark>。","kuruma o unten suru koto ga dekimasu")]],
  uses:[["Nói năng lực",ex("{私|わたし}は{漢字|かんじ}が{少|すこ}し{書|か}け<mark>ます</mark>。","watashi wa kanji ga sukoshi kakemasu")],["Nói điều kiện cho phép",ex("ここでは{写真|しゃしん}が{撮|と}れ<mark>ません</mark>。","koko de wa shashin ga toremasen")],["Hỏi có làm được không",ex("{明日|あした}{来|こ}られ<mark>ますか</mark>。","ashita koraremasu ka")]],
  signals:["〜える","〜られる","できる","N が V(可能)"],
  speak:5,write:5,
  reg:"Thể khả năng đổi を thành が (hoặc giữ を trong văn nói): 「日本語を話せます」 và 「日本語が話せます」 đều gặp, nhưng が là chuẩn. Lưu ý 見られる (có thể xem) khác 見える (tự nhiên nhìn thấy), xem bài 02.",
  mistake:["たべれます。(văn viết)","たべられます。","Nhóm 2 chuẩn là 〜られる. Dạng たべれる (bỏ ら) phổ biến trong văn nói nhưng chưa chuẩn trong văn viết."],
  table:[{head:["Nhóm","Ví dụ"],rows:[["Nhóm 1","u → e + る","のむ → のめる"],["Nhóm 2","bỏ る + られる","たべる → たべられる"],["Nhóm 3","bất quy tắc","する → できる · くる → こられる"]]}]},

 {id:"ja-kan-mieru",num:"02",en:"見える・聞こえる",vi:"Nhìn thấy, nghe thấy tự nhiên",short:"やまが みえます · おとが きこえます · ようになる",
  core:"<strong>見える</strong> (tự nhiên nhìn thấy) và <strong>聞こえる</strong> (tự nhiên nghe thấy) khác với <strong>見られる / 聞ける</strong> (có thể xem / nghe vì có cơ hội). Thêm <strong>〜ようになる</strong> = trở nên có thể, <strong>〜なくなる</strong> = không còn.",
  forms:[["Thấy","N が みえる",ex("{窓|まど}から{山|やま}<mark>が見えます</mark>。","mado kara yama ga miemasu")],["Nghe thấy","N が きこえる",ex("{隣|となり}の{部屋|へや}の{音|おと}<mark>が聞こえます</mark>。","tonari no heya no oto ga kikoemasu")],["Có thể xem","N が みられる",ex("ここでは{富士山|ふじさん}<mark>が見られます</mark>。","koko de wa Fujisan ga miraremasu")],["Có thể nghe","N が きける",ex("{新|あたら}しい{曲|きょく}<mark>が聞けます</mark>。","atarashii kyoku ga kikemasu")],["Trở nên có thể","V(可能)ようになる",ex("{日本語|にほんご}が{話|はな}せる<mark>ようになりました</mark>。","nihongo ga hanaseru yō ni narimashita")],["Không còn","V ない なくなる",ex("{英語|えいご}が{話|はな}せ<mark>なくなりました</mark>。","eigo ga hanasenaku narimashita")]],
  uses:[["Mô tả cảnh quan",ex("ここから{海|うみ}が<mark>見えます</mark>。","koko kara umi ga miemasu")],["Mô tả sự tiến bộ",ex("{毎日|まいにち}{練習|れんしゅう}して、{泳|およ}げる<mark>ようになりました</mark>。","mainichi renshū shite, oyogeru yō ni narimashita")],["Mô tả mất khả năng",ex("{年|とし}をとって、{見|み}え<mark>なくなりました</mark>。","toshi o totte, mienaku narimashita")]],
  signals:["みえる","きこえる","ようになる","なくなる"],
  speak:5,write:5,
  reg:"見える/聞こえる không do chủ ý, “tự đến với mắt/tai”. Hỏi “có thấy không?” không dùng 見られる mà dùng 見えますか. Thói quen: 〜ようにしている = cố gắng làm, 〜ようになる = đã trở nên.",
  mistake:["ここから ふじさんが みられます。(muốn nói “nhìn thấy”)","ここから ふじさんが みえます。","見える chỉ tự nhiên thấy. 見られる là có cơ hội xem."],
  table:[{head:["Mẫu","Ví dụ"],rows:[["みえる","tự thấy","やまが みえる"],["きこえる","tự nghe","おとが きこえる"],["〜ようになる","trở nên","はなせるように なった"],["〜なくなる","không còn","みえなく なった"]]}]},

 {id:"ja-kan-meirei",num:"03",en:"命令形・禁止形",vi:"Mệnh lệnh & cấm",short:"いけ · たべろ · いくな · しなさい",
  core:"<strong>Thể mệnh lệnh</strong> rất thẳng, dùng với người ngang hàng hoặc cấp dưới trong tình huống khẩn: nhóm 1 u → <strong>e</strong> (いけ), nhóm 2 る → <strong>ろ</strong> (たべろ), する → <strong>しろ</strong>, くる → <strong>こい</strong>. <strong>Cấm</strong>: V る + <strong>な</strong>. <strong>〜なさい</strong> lịch sự hơn, dùng của bố mẹ, thầy cô.",
  forms:[["Nhóm 1","u → e",ex("{行|い}く → {行|い}<mark>け</mark>","iku → ike")],["Nhóm 2","る → ろ",ex("{食|た}べる → {食|た}べ<mark>ろ</mark>","taberu → tabero")],["Nhóm 3","しろ / こい",ex("する → <mark>しろ</mark> / {来|く}る → <mark>こい</mark>","suru → shiro / kuru → koi")],["Cấm","V る + な",ex("{走|はし}る<mark>な</mark>。","hashiru na")],["Khuyên mềm","V ます bỏ + なさい",ex("{早|はや}く{寝|ね}<mark>なさい</mark>。","hayaku nenasai")],["Nhờ thân mật","V て",ex("ちょっと{待|ま}っ<mark>て</mark>。","chotto matte")]],
  uses:[["Biển cảnh báo",ex("{止|と}まれ。 {入|はい}る<mark>な</mark>。","tomare. hairu na")],["Bố mẹ nhắc con",ex("{宿題|しゅくだい}をし<mark>なさい</mark>。","shukudai o shinasai")],["Cổ vũ",ex("{頑張|がんば}れ！","ganbare")]],
  signals:["〜え / 〜ろ","〜るな","〜なさい","しろ・こい"],
  speak:5,write:5,
  reg:"Thể mệnh lệnh nghe rất mạnh nên không dùng với đồng nghiệp, người lạ. Ở công sở dùng 〜てください, 〜てもらえませんか. Biển báo, thể thao, truyện tranh thì rất hay gặp 〜ろ, 〜な.",
  mistake:["ここで たばこを すうなください。","ここで たばこを すうな。 / すわないでください。","な không đi với ください. Cấm lịch sự là 〜ないでください."],
  table:[{head:["Dạng","Ví dụ"],rows:[["Nhóm 1","u → e","いけ・のめ"],["Nhóm 2","る → ろ","たべろ・みろ"],["Nhóm 3","しろ / こい","しろ・こい"],["Cấm","V る + な","いくな"],["なさい","V ます bỏ + なさい","いきなさい"]]}]},

 {id:"ja-kan-gimu",num:"04",en:"義務・助言",vi:"Phải, nên, đừng nên",short:"〜なければならない · 〜たほうがいい · 〜べき",
  core:"<strong>〜なければならない</strong> (phải, nghĩa vụ), <strong>〜なくてもいい</strong> (không cần), <strong>〜たほうがいい</strong> (nên), <strong>〜ないほうがいい</strong> (không nên), <strong>〜べきだ</strong> (lẽ ra phải), <strong>〜てほしい</strong> (muốn người khác làm).",
  forms:[["Phải","V ない + ければならない",ex("{宿題|しゅくだい}をし<mark>なければなりません</mark>。","shukudai o shinakereba narimasen")],["Phải (thân mật)","〜なきゃ",ex("もう{帰|かえ}ら<mark>なきゃ</mark>。","mō kaeranakya")],["Không cần","〜なくてもいい",ex("{明日|あした}は{来|こ}<mark>なくてもいいです</mark>。","ashita wa konakute mo ii desu")],["Nên","V た + ほうがいい",ex("{早|はや}く{寝|ね}<mark>たほうがいいです</mark>。","hayaku neta hō ga ii desu")],["Không nên","V ない + ほうがいい",ex("{夜|よる}{食|た}べ<mark>ないほうがいいです</mark>。","yoru tabenai hō ga ii desu")],["Muốn người khác","V て + ほしい",ex("{手伝|てつだ}っ<mark>てほしい</mark>んです。","tetsudatte hoshii n desu")]],
  uses:[["Lời khuyên bác sĩ",ex("{薬|くすり}を{飲|の}ん<mark>だほうがいいです</mark>。","kusuri o nonda hō ga ii desu")],["Nói quy định",ex("ここでは{静|しず}かにし<mark>なければなりません</mark>。","koko de wa shizuka ni shinakereba narimasen")],["Đạo đức, nguyên tắc",ex("{約束|やくそく}は{守|まも}る<mark>べきです</mark>。","yakusoku wa mamoru beki desu")]],
  signals:["〜なければならない","〜なくてもいい","〜たほうがいい","〜べき","〜てほしい"],
  speak:5,write:5,
  reg:"なければならない nghe trang trọng, なきゃ thân mật, 〜なくてはいけない cũng đồng nghĩa. 〜ほうがいい dùng tốt với bạn bè nhưng nói với cấp trên nên thêm ですが / ませんか để bớt áp đặt.",
  mistake:["はやく ねるほうが いいです。(luôn là lời khuyên cụ thể)","はやく ねたほうが いいです。","Khuyên cụ thể dùng V た + ほうがいい. V る + ほうがいい dùng cho khuyên chung."],
  table:[{head:["Mẫu","Ví dụ"],rows:[["〜なければならない","phải","しなければならない"],["〜なくてもいい","không cần","こなくても いい"],["〜たほうがいい","nên","ねたほうが いい"],["〜べき","lẽ ra phải","まもるべき"],["〜てほしい","muốn ai làm","てつだってほしい"]]}]},
];

T.forEach(t => t.forms.forEach(f => { f[2] = rb(f[2]); }));
registerRows("kanou", T);
GRAMMAR.theory.kanou = { rows: T, first: "ja-kan-kanou" };
})();
