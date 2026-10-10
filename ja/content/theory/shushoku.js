/* ja/content/theory/shushoku.js
   Shushoku: relative clauses, が/の in clauses, の/こと nominalisation, んです / という.
   Uses the "table" diagram mode. Furigana: {漢字|かんじ}; romaji lines via ex(). */
(() => {
const ex = (jp, ro) => rb(jp) + (ro ? `<span class="ro">${ro}</span>` : "");
const T = [
 {id:"ja-shu-meishi",num:"01",en:"名詞修飾",vi:"Mệnh đề bổ nghĩa danh từ",short:"きのう かった ほん · あそこに いる ひと",
  core:"Mệnh đề đứng <strong>trước</strong> danh từ và dùng <strong>thể thường</strong>. Động từ, tính từ い đứng nguyên dạng thường. Tính từ な và danh từ đổi <strong>だ → な/の</strong>. Không có từ nối như “mà” hay “that”.",
  forms:[["Động từ","V thường + N",ex("{昨日|きのう}<mark>買った</mark>{本|ほん}","kinō katta hon")],["Phủ định","V ない + N",ex("<mark>食べない</mark>{人|ひと}","tabenai hito")],["Tính từ い","A い + N",ex("<mark>おいしい</mark>{店|みせ}","oishii mise")],["Tính từ な","A な + N",ex("<mark>静かな</mark>{町|まち}","shizuka na machi")],["Danh từ","N の + N",ex("<mark>学生の</mark>{時|とき}","gakusei no toki")],["Quá khứ","V た + N",ex("<mark>行った</mark>ことがある{所|ところ}","itta koto ga aru tokoro")]],
  uses:[["Mô tả người đang làm gì",ex("<mark>あそこで{写真|しゃしん}を{撮|と}っている</mark>{人|ひと}は{誰|だれ}ですか。","asoko de shashin o totte iru hito wa dare desu ka")],["Mô tả vật",ex("<mark>{父|ちち}がくれた</mark>{時計|とけい}","chichi ga kureta tokei")],["Giải thích nơi chốn",ex("<mark>{昨日|きのう}{行|い}った</mark>レストランはおいしかったです。","kinō itta resutoran wa oishikatta desu")]],
  signals:["V thường + N","A い + N","A な + N","N の + N"],
  speak:5,write:5,
  reg:"Cách nghĩ ngược so với tiếng Việt: đưa cả mệnh đề ra trước danh từ. Trong mệnh đề này luôn dùng thể thường, dù câu chính dùng ます. Nhớ quy tắc な/の: 「静かな町」, 「学生の時」.",
  mistake:["ほん きのう かいました。(muốn nói “cuốn sách hôm qua mua”)","きのう かった ほん","Mệnh đề bổ nghĩa đứng trước danh từ và ở thể thường."],
  table:[{head:["Loại","Ví dụ"],rows:[["Động từ","V thường + N","かった ほん"],["Tính từ い","A い + N","おいしい みせ"],["Tính từ な","A な + N","しずかな まち"],["Danh từ","N の + N","がくせいの とき"]]}]},

 {id:"ja-shu-ga-no",num:"02",en:"が・の",vi:"Chủ ngữ trong mệnh đề",short:"わたしが つくった りょうり · ははが かった ほん",
  core:"Khi mệnh đề bổ nghĩa có <strong>chủ ngữ riêng</strong>, dùng <strong>が</strong> (hoặc <strong>の</strong>), không dùng は. Ví dụ: <strong>わたしが 作った 料理</strong> (món tôi nấu). Thêm は ngoài mệnh đề nếu muốn nêu chủ đề toàn câu.",
  forms:[["Chủ ngữ riêng","N が V + N",ex("<mark>{私|わたし}が</mark>{作|つく}った{料理|りょうり}","watashi ga tsukutta ryōri")],["Dạng の","N の V + N",ex("<mark>{母|はは}の</mark>{作|つく}った{料理|りょうり}","haha no tsukutta ryōri")],["Có chủ đề ở ngoài","N は [mệnh đề] N です",ex("これは<mark>{母|はは}が{買|か}った</mark>{本|ほん}です。","kore wa haha ga katta hon desu")],["Mệnh đề dài","いつ/どこで…",ex("<mark>{友達|ともだち}が{京都|きょうと}で{撮|と}った</mark>{写真|しゃしん}","tomodachi ga Kyōto de totta shashin")],["Hỏi","N が V + N",ex("<mark>{誰|だれ}が{書|か}いた</mark>{本|ほん}ですか。","dare ga kaita hon desu ka")],["Có mệnh đề phủ định","N が V ない + N",ex("<mark>{私|わたし}が{行|い}かなかった</mark>{所|ところ}","watashi ga ikanakatta tokoro")]],
  uses:[["Nói về món người khác làm",ex("{田中|たなか}さんが{作|つく}ったケーキはおいしいです。","Tanaka-san ga tsukutta kēki wa oishii desu")],["Giới thiệu quà",ex("これは{父|ちち}が{送|おく}ってくれたお{土産|みやげ}です。","kore wa chichi ga okutte kureta omiyage desu")],["Hỏi người làm",ex("{誰|だれ}が{撮|と}った{写真|しゃしん}ですか。","dare ga totta shashin desu ka")]],
  signals:["N が V + N","N の V + N","は → が"],
  speak:5,write:5,
  reg:"Trong mệnh đề bổ nghĩa, は thường đổi thành が (hoặc の). Câu 「私は作った料理」 sai; phải là 「私が作った料理」. Chủ đề cả câu mới dùng は ở ngoài mệnh đề.",
  mistake:["わたしは つくった りょうり","わたしが つくった りょうり","Chủ ngữ trong mệnh đề bổ nghĩa dùng が (hoặc の), không dùng は."],
  table:[{head:["Mẫu","Ví dụ"],rows:[["N が V + N","chủ ngữ riêng","わたしが つくった りょうり"],["N の V + N","dạng の","ははの つくった りょうり"],["は ở ngoài","chủ đề","これは ははが かった ほん"]]}]},

 {id:"ja-shu-no-koto",num:"03",en:"の・こと",vi:"Danh từ hoá bằng の・こと",short:"およぐのが すき · にほんごを はなすことが できます",
  core:"Biến cả mệnh đề thành danh từ bằng <strong>の</strong> hoặc <strong>こと</strong>. <strong>Vの/こと が すき/じょうず/できる</strong>. Sau の dùng trong cảm nhận trực tiếp (見る, 聞こえる), <strong>こと</strong> dùng cho hành vi trừu tượng, kinh nghiệm, quy tắc.",
  forms:[["Thích","V の が すき",ex("{泳|およ}ぐ<mark>の</mark>が{好|す}きです。","oyogu no ga suki desu")],["Giỏi","V の が じょうず",ex("{料理|りょうり}を{作|つく}る<mark>の</mark>が{上手|じょうず}です。","ryōri o tsukuru no ga jōzu desu")],["Khả năng","V る ことが できる",ex("{日本語|にほんご}を{話|はな}す<mark>こと</mark>ができます。","nihongo o hanasu koto ga dekimasu")],["Sở thích","しゅみは V る こと",ex("{趣味|しゅみ}は{映画|えいが}を{見|み}る<mark>こと</mark>です。","shumi wa eiga o miru koto desu")],["Nhìn thấy","V の を みる",ex("{子供|こども}が{遊|あそ}んでいる<mark>の</mark>を{見|み}ました。","kodomo ga asondeiru no o mimashita")],["Quên / nhớ","V の を わすれる",ex("{鍵|かぎ}を{持|も}って{行|い}く<mark>の</mark>を{忘|わす}れました。","kagi o motte iku no o wasuremashita")]],
  uses:[["Khi nói đang diễn ra bên cạnh",ex("{雨|あめ}が{降|ふ}っている<mark>の</mark>に{気|き}がつきました。","ame ga futte iru no ni ki ga tsukimashita")],["Nói mục tiêu, ước muốn",ex("{私|わたし}の{夢|ゆめ}は{世界|せかい}を{旅行|りょこう}する<mark>こと</mark>です。","watashi no yume wa sekai o ryokō suru koto desu")],["Nói quy tắc",ex("ここで{写真|しゃしん}を{撮|と}る<mark>こと</mark>は{禁止|きんし}されています。","koko de shashin o toru koto wa kinshi sarete imasu")]],
  signals:["Vのが","Vことが","〜ことです","のを"],
  speak:5,write:5,
  reg:"Với すき, じょうず, へた, きらい thì の và こと đều được, の tự nhiên hơn trong hội thoại. Với “có thể” (できる), “kinh nghiệm” (ことがある), “quy tắc” (ことになる) thì chỉ dùng こと.",
  mistake:["にほんごを はなすのが できます。","にほんごを はなすことが できます。","できる đi với こと, không dùng の."],
  table:[{head:["Mẫu","Ví dụ"],rows:[["Vのが すき","thích","およぐのが すき"],["Vのが じょうず","giỏi","つくるのが じょうず"],["Vことが できる","có thể","はなすことが できる"],["しゅみは Vこと","sở thích","えいがを みること"]]}]},

 {id:"ja-shu-n-desu",num:"04",en:"んです・という",vi:"んです & という",short:"どうして おくれたんですか · 〜という ほん",
  core:"<strong>〜んです</strong> (hoặc のです) dùng để <strong>giải thích, hỏi lý do, xin lời giải thích</strong>. Thể thường + <strong>んです</strong> (な/名 → <strong>なんです</strong>). <strong>〜という + N</strong> giới thiệu tên hoặc nội dung: “cái tên là …, loại … như …”.",
  forms:[["Giải thích","V thường + んです",ex("{頭|あたま}が{痛|いた}い<mark>んです</mark>。","atama ga itai n desu")],["Hỏi lý do","どうして〜んですか",ex("<mark>どうして</mark>{遅|おく}れた<mark>んですか</mark>。","dōshite okureta n desu ka")],["Danh từ / な","N / A な + なんです",ex("{今日|きょう}は{休|やす}みな<mark>んです</mark>。","kyō wa yasumi na n desu")],["Xin giải thích","どうしたんですか",ex("<mark>どうした</mark>んですか。","dō shita n desu ka")],["Gọi tên","〜という N",ex("{田中|たなか}<mark>という</mark>{人|ひと}","Tanaka to iu hito")],["Nội dung","〜という こと",ex("{彼|かれ}が{来|こ}ない<mark>という</mark>{話|はなし}","kare ga konai to iu hanashi")]],
  uses:[["Xin lỗi kèm lý do",ex("すみません、{風邪|かぜ}を{引|ひ}いた<mark>んです</mark>。","sumimasen, kaze o hiita n desu")],["Nhờ bằng lý do",ex("{実|じつ}は{困|こま}っている<mark>んです</mark>けど…","jitsu wa komatte iru n desu kedo…")],["Giới thiệu tên quán",ex("「さくら」<mark>という</mark>{店|みせ}","“Sakura” to iu mise")]],
  signals:["〜んです","どうして〜んですか","〜という","N なんです"],
  speak:5,write:5,
  reg:"んです không phải là dạng phủ định hay quá khứ, nó là cách người nói đưa ra lý do hoặc bối cảnh. Nếu dùng sai, câu nghe quá lấn át. Dùng khi người nghe thấy bạn có vẻ lạ (mệt, trễ) hoặc khi bạn xin giúp.",
  mistake:["どうして おくれましたんですか。","どうして おくれたんですか。","んです đi với thể thường, không đi với ました."],
  table:[{head:["Mẫu","Ví dụ"],rows:[["V + んです","giải thích","いたいんです"],["N + なんです","N đi với な","やすみなんです"],["どうして〜んですか","hỏi lý do","どうして おくれたんですか"],["〜という N","gọi tên","さくらという みせ"]]}]},
];

T.forEach(t => t.forms.forEach(f => { f[2] = rb(f[2]); }));
registerRows("shushoku", T);
GRAMMAR.theory.shushoku = { rows: T, first: "ja-shu-meishi" };
})();
