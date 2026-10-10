/* ja/content/theory/ayamari.js
   Ayamari: common mistakes of Vietnamese learners (particles, conjugation, forms, confusing words).
   Uses the "table" diagram mode. Furigana: {漢字|かんじ}; romaji lines via ex(). */
(() => {
const ex = (jp, ro) => rb(jp) + (ro ? `<span class="ro">${ro}</span>` : "");
const T = [
 {id:"ja-aya-joshi",num:"01",en:"助詞の間違い",vi:"Lỗi trợ từ",short:"すしを すきです ✕ · すしが すきです ○",
  core:"Người Việt hay nhầm trợ từ vì tiếng Việt không có trợ từ. Lỗi thường gặp: dùng <strong>を</strong> thay <strong>が</strong> với 好き/わかる/できる, dùng <strong>で</strong> thay <strong>に</strong> với あります, dùng <strong>に</strong> thay <strong>で</strong> với nơi hành động, bỏ trợ từ.",
  forms:[["好き・わかる・できる","N が",ex("{寿司|すし}<mark>が</mark>{好|す}きです。","sushi ga suki desu")],["Nơi tồn tại","N に あります",ex("{机|つくえ}の{上|うえ}<mark>に</mark>{本|ほん}があります。","tsukue no ue ni hon ga arimasu")],["Nơi hành động","N で V",ex("{図書館|としょかん}<mark>で</mark>{勉強|べんきょう}します。","toshokan de benkyō shimasu")],["Giờ cụ thể","時 に",ex("{七時|しちじ}<mark>に</mark>{起|お}きます。","shichiji ni okimasu")],["Phương tiện","N で",ex("{電車|でんしゃ}<mark>で</mark>{行|い}きます。","densha de ikimasu")],["Cùng với","人 と",ex("{友達|ともだち}<mark>と</mark>{行|い}きます。","tomodachi to ikimasu")]],
  uses:[["Sai: 好き + を",ex("✕ すしを すきです → ○ すしが すきです","✕ sushi o suki desu → ○ sushi ga suki desu")],["Sai: nơi làm + に",ex("✕ としょかんに べんきょうします → ○ としょかんで べんきょうします","✕ toshokan ni benkyō shimasu → ○ toshokan de benkyō shimasu")],["Sai: きのう + に",ex("✕ きのうに いきました → ○ きのう いきました","✕ kinō ni ikimashita → ○ kinō ikimashita")]],
  signals:["好き + が","あります + に","行動 + で","きょう + 無助詞"],
  speak:5,write:5,
  reg:"Hỏi mình ba câu: (1) Đây là cảm xúc/khả năng? → が. (2) Đây là nơi làm hành động? → で. (3) Đây là điểm tồn tại hoặc thời điểm cụ thể? → に.",
  mistake:["としょかんに べんきょうします。","としょかんで べんきょうします。","Nơi hành động diễn ra dùng で, không dùng に."],
  table:[{head:["Sai → Đúng","Lý do"],rows:[["すしを すき → すしが すき","cảm xúc đi với が"],["がっこうに べんきょう → がっこうで べんきょう","nơi làm dùng で"],["きのうに → きのう","từ chỉ thời gian tương đối không dùng に"]]}]},

 {id:"ja-aya-katsuyo",num:"02",en:"活用の間違い",vi:"Lỗi chia từ",short:"きれいくない ✕ · たかいくない ✕",
  core:"Lỗi chia tính từ: <strong>きれい</strong> là な nên phủ định là <strong>きれいじゃありません</strong>, không phải きれいくない; <strong>たかい</strong> là い nên phủ định là <strong>たかくない</strong>, không phải たかいくない. <strong>いい</strong> chia đổi gốc thành <strong>よくない/よかった</strong>.",
  forms:[["きれい (な)","じゃありません",ex("この{部屋|へや}はきれい<mark>じゃありません</mark>。","kono heya wa kirei ja arimasen")],["たかい (い)","くない",ex("この{本|ほん}は{高|たか}<mark>くない</mark>です。","kono hon wa takakunai desu")],["いい","よくない",ex("{天気|てんき}は<mark>よくない</mark>です。","tenki wa yokunai desu")],["ゆうめい (な)","ゆうめいな",ex("<mark>{有名|ゆうめい}な</mark>{人|ひと}","yūmei na hito")],["おおきい (い)","おおきい N",ex("<mark>{大|おお}きい</mark>{犬|いぬ}","ōkii inu")],["きらい (な)","きらいじゃない",ex("{野菜|やさい}は{嫌|きら}い<mark>じゃありません</mark>。","yasai wa kirai ja arimasen")]],
  uses:[["Sai: きれいくない",ex("✕ きれいくないです → ○ きれいじゃありません","✕ kirei kunai desu → ○ kirei ja arimasen")],["Sai: いくない",ex("✕ いくないです → ○ よくないです","✕ ikunai desu → ○ yokunai desu")],["Sai: ゆうめい N",ex("✕ ゆうめい ひと → ○ ゆうめいな ひと","✕ yūmei hito → ○ yūmei na hito")]],
  signals:["きれい・ゆうめい・きらい = な","いい → よく","な + N"],
  speak:5,write:5,
  reg:"Các từ đánh lừa: きれい, ゆうめい, きらい, しんせつ, じょうず, へた, ひま, べんり, すてき đều là tính từ な dù kết thúc bằng い hay không. Nhớ nhóm này.",
  mistake:["きれいくないです。","きれいじゃありません。","Tính từ な phủ định dùng じゃありません, không dùng くない."],
  table:[{head:["Sai → Đúng","Lý do"],rows:[["きれいくない → きれいじゃない","きれい là な"],["いくない → よくない","いい đổi gốc よ"],["ゆうめい ひと → ゆうめいな ひと","な + N"]]}]},

 {id:"ja-aya-katachi",num:"03",en:"形の間違い",vi:"Lỗi thể て/ない/た",short:"いきて ✕ → いって · かあない ✕ → かわない",
  core:"Lỗi chia thể: <strong>いく → いって</strong> (không phải いきて), <strong>かう → かわない</strong> (không phải かあない), <strong>たべる → たべて</strong> (không phải たべって), <strong>のむ → のんで</strong> (không phải のみて). Nhóm 1 đuôi む/ぶ/ぬ hay bị nhầm thành って.",
  forms:[["いく","いって / いった",ex("{学校|がっこう}へ<mark>行って</mark>、{勉強|べんきょう}します。","gakkō e itte, benkyō shimasu")],["かう","かわない",ex("{買|か}<mark>わない</mark>つもりです。","kawanai tsumori desu")],["のむ","のんで",ex("{水|みず}を{飲|の}<mark>んで</mark>ください。","mizu o nonde kudasai")],["かえる","かえって",ex("{家|うち}に{帰|かえ}<mark>って</mark>から{寝|ね}ます。","uchi ni kaette kara nemasu")],["たべる","たべて",ex("{食|た}べ<mark>て</mark>から{行|い}きます。","tabete kara ikimasu")],["する","して",ex("{勉強|べんきょう}<mark>して</mark>ください。","benkyō shite kudasai")]],
  uses:[["Sai: いきて",ex("✕ いきて → ○ いって","✕ ikite → ○ itte")],["Sai: かあない",ex("✕ かあない → ○ かわない","✕ kaanai → ○ kawanai")],["Sai: のみて",ex("✕ のみて → ○ のんで","✕ nomite → ○ nonde")]],
  signals:["いく → いって","う → わない","む → んで","かえる は 1 グループ"],
  speak:5,write:5,
  reg:"Dùng cách học “bảng đuôi” trước, rồi học ngoại lệ (行く, ある → ない). Không tự đoán từ ます bỏ + て (たべます → たべて đúng, nhưng のみます → のみて sai).",
  mistake:["のみて ください。","のんで ください。","Nhóm 1 đuôi む chia のんで, không phải のみて."],
  table:[{head:["Sai → Đúng","Lý do"],rows:[["いきて → いって","ngoại lệ"],["かあない → かわない","う → わ"],["のみて → のんで","む → んで"],["たべって → たべて","nhóm 2"]]}]},

 {id:"ja-aya-tsukaiwake",num:"04",en:"使い分けの間違い",vi:"Lỗi dùng nhầm từ",short:"知っている / 分かる · 聞く / 聞こえる · 着く / 来る",
  core:"Các cặp từ dễ nhầm: <strong>知っている</strong> (biết người/vật) / <strong>分かる</strong> (hiểu), <strong>聞く</strong> (nghe chủ động) / <strong>聞こえる</strong> (tự nghe thấy), <strong>見る</strong> / <strong>見える</strong>, <strong>行く・来る・帰る</strong> (hướng), <strong>貸す・借りる</strong>, <strong>教える・習う</strong>.",
  forms:[["Biết người","知っている",ex("{田中|たなか}さんを<mark>知っています</mark>。","Tanaka-san o shitte imasu")],["Hiểu","わかる",ex("{日本語|にほんご}が<mark>分かります</mark>。","nihongo ga wakarimasu")],["Nghe chủ động","聞く",ex("{音楽|おんがく}を<mark>聞きます</mark>。","ongaku o kikimasu")],["Tự nghe thấy","聞こえる",ex("{鳥|とり}の{声|こえ}が<mark>聞こえます</mark>。","tori no koe ga kikoemasu")],["Cho mượn","貸す",ex("{本|ほん}を{友達|ともだち}に<mark>貸します</mark>。","hon o tomodachi ni kashimasu")],["Mượn","借りる",ex("{友達|ともだち}に{本|ほん}を<mark>借ります</mark>。","tomodachi ni hon o karimasu")]],
  uses:[["Sai: しっています = hiểu",ex("✕ にほんごを しっています → ○ にほんごが わかります","✕ nihongo o shitte imasu → ○ nihongo ga wakarimasu")],["Sai: きく = nghe thấy",ex("✕ とりの こえを ききます → ○ とりの こえが きこえます","✕ tori no koe o kikimasu → ○ tori no koe ga kikoemasu")],["Sai: かす / かりる",ex("✕ ともだちから ほんを かします → ○ ともだちに ほんを かします","✕ tomodachi kara hon o kashimasu → ○ tomodachi ni hon o kashimasu")]],
  signals:["知る / 分かる","聞く / 聞こえる","貸す / 借りる","教える / 習う"],
  speak:5,write:5,
  reg:"Cặp ngược nhau có hướng khác: 貸す (mình cho mượn), 借りる (mình mượn). 教える (dạy), 習う (học). Mẫu: 先生が 学生に 教える (người học đi với に), 学生が 先生に 習う (người dạy đi với に hoặc から).",
  mistake:["ともだちに ほんを かります。","ともだちに ほんを かします。 / ともだちから ほんを かります。","貸す là cho mượn, 借りる là đi mượn."],
  table:[{head:["Cặp","Phân biệt"],rows:[["知る / 分かる","biết người vật / hiểu"],["聞く / 聞こえる","chủ động / tự nhiên"],["貸す / 借りる","cho mượn / đi mượn"],["教える / 習う","dạy / học"]]}]},

 {id:"ja-aya-bunmatsu",num:"05",en:"文の間違い",vi:"Lỗi câu & trật tự",short:"わたしは がっこうへ いきます ✕ ない · なにも ✕ ある",
  core:"Lỗi trật tự và cấu trúc: động từ đặt cuối câu, <strong>なにも/だれも/どこにも + phủ định</strong>, không bỏ <strong>は/が</strong> bừa, <strong>でも</strong> khác <strong>が</strong>, <strong>から</strong> đặt sau lý do chứ không đặt trước.",
  forms:[["Động từ cuối","S + O + V",ex("{私|わたし}は{毎日|まいにち}コーヒーを{飲|の}<mark>みます</mark>。","watashi wa mainichi kōhī o nomimasu")],["なにも + phủ định","なにも V ません",ex("{冷蔵庫|れいぞうこ}には{何|なに}<mark>も</mark>ありません。","reizōko ni wa nani mo arimasen")],["だれも + phủ định","だれも V ません",ex("{部屋|へや}には{誰|だれ}<mark>も</mark>いません。","heya ni wa dare mo imasen")],["から (lý do)","lý do + から",ex("{忙|いそが}しい<mark>から</mark>、{行|い}きません。","isogashii kara, ikimasen")],["けど / が","nhưng",ex("{高|たか}いです<mark>けど</mark>、{買|か}います。","takai desu kedo, kaimasu")],["N の + N","sở hữu",ex("<mark>{私|わたし}の</mark>{本|ほん}","watashi no hon")]],
  uses:[["Sai: động từ giữa câu",ex("✕ わたしは いきます がっこうへ → ○ わたしは がっこうへ いきます","✕ watashi wa ikimasu gakkō e → ○ watashi wa gakkō e ikimasu")],["Sai: なにも + khẳng định",ex("✕ なにも あります → ○ なにも ありません","✕ nani mo arimasu → ○ nani mo arimasen")],["Sai: から trước lý do",ex("✕ から いそがしい いきません → ○ いそがしいから いきません","✕ kara isogashii ikimasen → ○ isogashii kara ikimasen")]],
  signals:["V ở cuối","なにも + 否定","理由 + から","けど"],
  speak:5,write:5,
  reg:"Nhớ ba quy tắc nền: (1) động từ luôn ở cuối câu, (2) なにも/だれも/どこにも đi với phủ định, (3) lý do đứng trước から. Học theo quy tắc “bắt đầu tình huống, kết thúc động từ”.",
  mistake:["わたしは いきます がっこうへ。","わたしは がっこうへ いきます。","Động từ luôn ở cuối câu trong tiếng Nhật."],
  table:[{head:["Sai → Đúng","Lý do"],rows:[["いきます がっこうへ → がっこうへ いきます","động từ cuối câu"],["なにも あります → なにも ありません","なにも + phủ định"],["から いそがしい → いそがしいから","から sau lý do"]]}]},
];

T.forEach(t => t.forms.forEach(f => { f[2] = rb(f[2]); }));
registerRows("ayamari", T);
GRAMMAR.theory.ayamari = { rows: T, first: "ja-aya-joshi" };
})();
