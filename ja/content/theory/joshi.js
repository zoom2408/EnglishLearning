/* ja/content/theory/joshi.js
   Joshi: particles は/が/を, に/へ/で, と/や/から/まで, も/だけ/しか/ぐらい.
   Uses the "table" diagram mode. Furigana: {漢字|かんじ}; romaji lines via ex(). */
(() => {
const ex = (jp, ro) => rb(jp) + (ro ? `<span class="ro">${ro}</span>` : "");
const T = [
 {id:"ja-jos-wa-ga-wo",num:"01",en:"は・が・を",vi:"は, が, を",short:"わたしは パンを たべます。",
  core:"<strong>は</strong> nêu chủ đề (“còn về A thì…”), <strong>が</strong> chỉ chủ ngữ (nhất là thông tin mới), <strong>を</strong> đánh dấu tân ngữ trực tiếp. Ba chữ này xuất hiện trong gần như mọi câu.",
  forms:[["Chủ đề","N は …",ex("{私|わたし}<mark>は</mark>{学生|がくせい}です。","watashi wa gakusei desu")],["Chủ ngữ mới","N が V",ex("{雨|あめ}<mark>が</mark>{降|ふ}っています。","ame ga futte imasu")],["Thích · giỏi · hiểu","N が すき/じょうず/わかる",ex("{寿司|すし}<mark>が</mark>{好|す}きです。","sushi ga suki desu")],["Tân ngữ","N を V",ex("パン<mark>を</mark>{食|た}べます。","pan o tabemasu")],["Hỏi chủ ngữ","だれ/なに が",ex("<mark>だれが</mark>{来|き}ましたか。","dare ga kimashita ka")],["Đối chiếu","N は …が、N は …",ex("{猫|ねこ}<mark>は</mark>{好|す}きですが、{犬|いぬ}<mark>は</mark>{嫌|きら}いです。","neko wa suki desu ga, inu wa kirai desu")]],
  uses:[["Nói chung về một chủ đề",ex("{日本語|にほんご}<mark>は</mark>{面白|おもしろ}いです。","nihongo wa omoshiroi desu")],["Dùng が khi có từ để hỏi hoặc nêu sự việc mới",ex("<mark>だれが</mark>{先生|せんせい}ですか。 — {田中|たなか}さん<mark>が</mark>{先生|せんせい}です。","dare ga sensei desu ka — Tanaka-san ga sensei desu")],["を với động từ chuyển động qua một nơi",ex("{公園|こうえん}<mark>を</mark>{散歩|さんぽ}します。","kōen o sanpo shimasu")]],
  signals:["は","が","を","すき・じょうず・わかる + が"],
  speak:5,write:5,
  reg:"Quy tắc ngón tay cái: は = chủ đề đã biết, が = thông tin mới hoặc câu trả lời cho “ai/cái gì”. Với 好き, 嫌い, 上手, 下手, わかる, できる, ほしい, thì đối tượng đi với が, không đi với を.",
  mistake:["すしを すきです。","すしが すきです。","Tính từ cảm xúc/năng lực như 好き đi với が, không đi với を."],
  table:[{head:["Vai trò","Ví dụ"],rows:[["は","chủ đề","わたし**は**がくせいです"],["が","chủ ngữ, thích/giỏi","ねこ**が**すきです"],["を","tân ngữ","みず**を**のみます"]]}]},

 {id:"ja-jos-ni-e-de",num:"02",en:"に・へ・で",vi:"に, へ, で",short:"がっこうに/へ いきます · としょかんで べんきょうします",
  core:"Cả ba đều trả lời “ở đâu / như thế nào” nhưng khác chức năng: <strong>に</strong> chỉ điểm (thời điểm, đích, nơi tồn tại, người nhận), <strong>へ</strong> chỉ hướng, <strong>で</strong> chỉ nơi hành động diễn ra và phương tiện.",
  forms:[["Thời điểm","時刻 + に",ex("{七時|しちじ}<mark>に</mark>{起|お}きます。","shichiji ni okimasu")],["Đích đến","N に/へ いく・くる・かえる",ex("{学校|がっこう}<mark>に</mark>{行|い}きます。","gakkō ni ikimasu")],["Nơi tồn tại","N に ある/いる",ex("{机|つくえ}の{上|うえ}<mark>に</mark>{本|ほん}があります。","tsukue no ue ni hon ga arimasu")],["Người nhận","人 に あげる/おしえる",ex("{友達|ともだち}<mark>に</mark>プレゼントをあげます。","tomodachi ni purezento o agemasu")],["Nơi hành động","N で V",ex("{図書館|としょかん}<mark>で</mark>{勉強|べんきょう}します。","toshokan de benkyō shimasu")],["Phương tiện","N で V",ex("バス<mark>で</mark>{行|い}きます。 {箸|はし}<mark>で</mark>{食|た}べます。","basu de ikimasu. hashi de tabemasu")]],
  uses:[["に cho mục đích di chuyển",ex("{買|か}い{物|もの}<mark>に</mark>{行|い}きます。","kaimono ni ikimasu")],["で cho tổng số lượng",ex("<mark>ぜんぶで</mark>{五百円|ごひゃくえん}です。","zenbu de gohyaku-en desu")],["Cùng một câu: に/へ khác sắc thái",ex("{日本|にほん}<mark>へ</mark>{行|い}きます (hướng) / {日本|にほん}<mark>に</mark>{行|い}きます (đích)","Nihon e ikimasu / Nihon ni ikimasu")]],
  signals:["に (thời điểm)","に (đích)","へ (hướng)","で (nơi làm)","で (phương tiện)"],
  speak:5,write:5,
  reg:"に và へ đều dùng được với 行く/来る/帰る: へ nhấn hướng đi, に nhấn điểm đến. Giờ và ngày cụ thể phải có に; với きのう, きょう, あした thì không dùng に.",
  mistake:["きょうに がっこうへ いきます。","きょう がっこうへ いきます。","Từ chỉ thời gian tương đối (きょう, あした, いま) không dùng に."],
  table:[{head:["Chức năng","Ví dụ"],rows:[["に","giờ, ngày cụ thể","しちじ**に**おきます"],["に","đích đến","がっこう**に**いきます"],["へ","hướng","にほん**へ**かえります"],["で","nơi làm","うち**で**たべます"],["で","phương tiện","でんしゃ**で**いきます"]]}]},

 {id:"ja-jos-to-ya-kara",num:"03",en:"と・や・から・まで",vi:"と, や, から, まで",short:"ともだちと · りんごや みかん · 9じから 5じまで",
  core:"<strong>と</strong> nối “và / cùng với”, <strong>や</strong> liệt kê không đầy đủ, <strong>から</strong> “từ”, <strong>まで</strong> “đến”. から cũng là “vì” khi đứng cuối mệnh đề.",
  forms:[["Và (đầy đủ)","N と N",ex("{本|ほん}<mark>と</mark>ペンを{買|か}いました。","hon to pen o kaimashita")],["Cùng với","人 と V",ex("{友達|ともだち}<mark>と</mark>{映画|えいが}を{見|み}ます。","tomodachi to eiga o mimasu")],["Liệt kê mở","N や N (など)",ex("りんご<mark>や</mark>みかん<mark>など</mark>を{買|か}いました。","ringo ya mikan nado o kaimashita")],["Từ … đến","N から N まで",ex("{九時|くじ}<mark>から</mark>{五時|ごじ}<mark>まで</mark>{働|はたら}きます。","kuji kara goji made hatarakimasu")],["Nguồn gốc","N から V",ex("{友達|ともだち}<mark>から</mark>{手紙|てがみ}をもらいました。","tomodachi kara tegami o moraimashita")],["Lý do","〜から、…",ex("{暑|あつ}い<mark>から</mark>、{窓|まど}を{開|あ}けます。","atsui kara, mado o akemasu")]],
  uses:[["Địa điểm xuất phát và đích",ex("{家|うち}<mark>から</mark>{駅|えき}<mark>まで</mark>{歩|ある}きます。","uchi kara eki made arukimasu")],["Cùng làm với ai",ex("{家族|かぞく}<mark>と</mark>{旅行|りょこう}します。","kazoku to ryokō shimasu")],["Nêu lý do trước kết quả",ex("{忙|いそが}しい<mark>から</mark>、{行|い}きません。","isogashii kara, ikimasen")]],
  signals:["と (và/cùng)","や","から (từ)","まで (đến)","から (vì)"],
  speak:5,write:5,
  reg:"と nối danh từ trọn vẹn, や ngụ ý còn nữa. Khi nói “vì”, から đứng sau lý do (khác với “because” đứng trước), và có thể nói câu lý do đứng một mình để giải thích.",
  mistake:["ともだち から いきます。 (muốn nói “đi cùng bạn”)","ともだち と いきます。","から nghĩa là “từ”. Muốn nói “cùng với”, dùng と."],
  table:[{head:["Nghĩa","Ví dụ"],rows:[["と","và / cùng","ともだち**と**いきます"],["や","liệt kê mở","ほん**や**ざっし"],["から","từ / vì","くじ**から**"],["まで","đến","ごじ**まで**"],["の","của","わたし**の**ほん"]]}]},

 {id:"ja-jos-dake-shika",num:"04",en:"だけ・しか・ばかり",vi:"も, だけ, しか, ぐらい…",short:"ひとつだけ · ひとつしか ない · 3じごろ",
  core:"Nhóm trợ từ giới hạn và ước lượng: <strong>だけ</strong> (chỉ), <strong>しか〜ない</strong> (chỉ có, nhấn mạnh quá ít), <strong>ばかり</strong> (toàn là), <strong>ぐらい/ごろ</strong> (khoảng), <strong>ずつ</strong> (mỗi).",
  forms:[["Chỉ","N だけ",ex("{水|みず}<mark>だけ</mark>{飲|の}みます。","mizu dake nomimasu")],["Chỉ có (phủ định)","N しか + phủ định",ex("{千円|せんえん}<mark>しか</mark>ありません。","sen’en shika arimasen")],["Toàn là","N ばかり",ex("{肉|にく}<mark>ばかり</mark>{食|た}べます。","niku bakari tabemasu")],["Khoảng (số lượng)","số + ぐらい/くらい",ex("{一時間|いちじかん}<mark>ぐらい</mark>かかります。","ichijikan gurai kakarimasu")],["Khoảng (thời điểm)","giờ + ごろ",ex("{三時|さんじ}<mark>ごろ</mark>{来|き}ます。","sanji goro kimasu")],["Mỗi","số + ずつ",ex("{一人|ひとり}{二個|にこ}<mark>ずつ</mark>{取|と}ります。","hitori niko zutsu torimasu")]],
  uses:[["だけ trung tính, しか tiêu cực",ex("{五分|ごふん}<mark>だけ</mark>{待|ま}ちます / {五分|ごふん}<mark>しか</mark>{待|ま}てません","gofun dake machimasu / gofun shika matemasen")],["Ước lượng thời gian bằng ごろ, thời lượng bằng ぐらい",ex("{十時|じゅうじ}<mark>ごろ</mark>{寝|ね}ます。{三十分|さんじゅっぷん}<mark>ぐらい</mark>{歩|ある}きます。","jūji goro nemasu. sanjuppun gurai arukimasu")],["Nói “mỗi người một cái”",ex("みんな{一つ|ひとつ}<mark>ずつ</mark>どうぞ。","minna hitotsu zutsu dōzo")]],
  signals:["だけ","しか〜ない","ばかり","ぐらい","ごろ","ずつ"],
  speak:5,write:5,
  reg:"しか luôn đi với động từ phủ định (ない, ません) nhưng mang nghĩa “chỉ có”, hàm ý ít hơn mong đợi. だけ trung tính và đi được với cả khẳng định lẫn phủ định.",
  mistake:["ひとつしか あります。","ひとつしか ありません。","しか phải đi với dạng phủ định của động từ."],
  table:[{head:["Dùng với","Ví dụ"],rows:[["だけ","chỉ (khẳng định)","みず**だけ**のみます"],["しか","chỉ (phủ định)","みず**しか**のみません"],["ごろ","khoảng thời điểm","さんじ**ごろ**"],["ぐらい","khoảng số lượng","いちじかん**ぐらい**"],["ずつ","mỗi","ひとつ**ずつ**"]]}]},
];

T.forEach(t => t.forms.forEach(f => { f[2] = rb(f[2]); }));
registerRows("joshi", T);
GRAMMAR.theory.joshi = { rows: T, first: "ja-jos-wa-ga-wo" };
})();
