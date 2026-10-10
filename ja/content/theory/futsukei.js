/* ja/content/theory/futsukei.js
   Plain form: dictionary form, ない, た, たい / ことができる / たことがある.
   Uses the "table" diagram mode. Furigana: {漢字|かんじ}; romaji lines via ex(). */
(() => {
const ex = (jp, ro) => rb(jp) + (ro ? `<span class="ro">${ro}</span>` : "");
const T = [
 {id:"ja-fut-jisho",num:"01",en:"辞書形・普通体",vi:"Thể từ điển & văn thường",short:"たべる · のむ · いく · する · くる",
  core:"Thể từ điển (<strong>辞書形</strong>) là dạng động từ trong từ điển, cũng là thể thường hiện tại khẳng định. Văn thường (普通体) dùng với bạn bè, gia đình, và trong câu phức. Câu thường bỏ です/ます, danh từ và tính từ な dùng <strong>だ</strong>.",
  forms:[["Động từ","V (thể từ điển)",ex("{毎日|まいにち}{走|はし}<mark>る</mark>。","mainichi hashiru")],["Danh từ","N だ",ex("{学生|がくせい}<mark>だ</mark>。","gakusei da")],["Tính từ な","A だ",ex("{静|しず}か<mark>だ</mark>。","shizuka da")],["Tính từ い","A い",ex("{高|たか}<mark>い</mark>。","takai")],["Hỏi (thân mật)","V の? / V?",ex("{行|い}く<mark>の</mark>?","iku no")],["Chuyển ます → thường","ます → る",ex("{食|た}べ<mark>ます</mark> → {食|た}べ<mark>る</mark>","tabemasu → taberu")]],
  uses:[["Nói với bạn bè",ex("{明日|あした}{映画|えいが}を{見|み}<mark>る</mark>?","ashita eiga o miru")],["Trong nhật ký, văn viết",ex("{今日|きょう}は{忙|いそが}し<mark>かった</mark>。","kyō wa isogashikatta")],["Nhúng vào câu phức",ex("{日本|にほん}へ{行|い}く{前|まえ}に、{勉強|べんきょう}します。","Nihon e iku mae ni, benkyō shimasu")]],
  signals:["辞書形","だ","〜の?","thể thường"],
  speak:5,write:5,
  reg:"Chuyển từ ます sang thể thường: nhóm 2 bỏ ます + る, nhóm 1 đổi i → u, する/くる thì đổi hẳn. Không dùng thể thường với người lớn tuổi hoặc cấp trên.",
  mistake:["たべますの?","たべるの?","Hỏi thân mật thêm の (hoặc lên giọng) sau thể thường, không dùng ます."],
  table:[{head:["Loại từ","Ví dụ"],rows:[["Động từ","dạng từ điển","たべる・いく"],["Danh từ","〜だ","がくせいだ"],["Tính từ な","〜だ","しずかだ"],["Tính từ い","〜い","たかい"]]}]},

 {id:"ja-fut-nai",num:"02",en:"ない形",vi:"Thể ない (phủ định thường)",short:"たべない · のまない · しない · こない",
  core:"Thể ない là phủ định thể thường. <strong>Nhóm 1</strong>: đổi u → a + ない (う → わ, ví dụ かう → かわない). <strong>Nhóm 2</strong>: bỏ る + ない. <strong>Nhóm 3</strong>: しない, こない. Quá khứ: ない → <strong>なかった</strong>.",
  forms:[["Nhóm 1","u → a + ない",ex("{飲|の}む → {飲|の}ま<mark>ない</mark>","nomu → nomanai")],["Nhóm 1 (う)","う → わない",ex("{買|か}う → {買|か}わ<mark>ない</mark>","kau → kawanai")],["Nhóm 2","bỏ る + ない",ex("{食|た}べる → {食|た}べ<mark>ない</mark>","taberu → tabenai")],["Nhóm 3","しない / こない",ex("する → し<mark>ない</mark>, {来|く}る → {来|こ}<mark>ない</mark>","suru → shinai, kuru → konai")],["Quá khứ phủ định","〜なかった",ex("{食|た}べ<mark>なかった</mark>。","tabenakatta")],["Ngoại lệ","ある → ない",ex("{本|ほん}が<mark>ない</mark>。","hon ga nai")]],
  uses:[["Từ chối thân mật",ex("{今日|きょう}は{行|い}か<mark>ない</mark>。","kyō wa ikanai")],["Đừng làm (cấm)",ex("{見|み}<mark>ないで</mark>ください。","minaide kudasai")],["Phải làm (nakereba)",ex("{行|い}か<mark>なければなりません</mark>。","ikanakereba narimasen")]],
  signals:["〜ない","〜なかった","〜ないで","〜なければ"],
  speak:5,write:5,
  reg:"Với động từ nhóm 1 có đuôi う, âm a là わ (かう → かわない), không phải あ. Đây là lỗi hay gặp nhất khi học ない.",
  mistake:["かあない","かわない","Nhóm 1 đuôi う: う → わない, không phải あない."],
  table:[{head:["Nhóm","Ví dụ"],rows:[["Nhóm 1","u → a + ない","のむ → のまない"],["Nhóm 2","bỏ る + ない","たべる → たべない"],["Nhóm 3","bất quy tắc","する → しない・くる → こない"],["Quá khứ","〜なかった","たべなかった"]]}]},

 {id:"ja-fut-ta",num:"03",en:"た形",vi:"Thể た (quá khứ thường)",short:"たべた · のんだ · いった · した · きた",
  core:"Thể た chia giống thể て: đổi て → <strong>た</strong>, で → <strong>だ</strong>. Dùng làm quá khứ thường, và nền cho <strong>〜たことがある</strong> (từng làm), <strong>〜たら</strong> (nếu/khi), <strong>〜たほうがいい</strong> (nên).",
  forms:[["Nhóm 1 (う・つ・る)","→ った",ex("{買|か}う → {買|か}<mark>った</mark>","kau → katta")],["Nhóm 1 (む・ぶ・ぬ)","→ んだ",ex("{飲|の}む → {飲|の}<mark>んだ</mark>","nomu → nonda")],["Nhóm 1 (く・ぐ・す)","→ いた/いだ/した",ex("{書|か}く → {書|か}<mark>いた</mark>","kaku → kaita")],["Nhóm 2","bỏ る + た",ex("{食|た}べる → {食|た}べ<mark>た</mark>","taberu → tabeta")],["Nhóm 3","した / きた",ex("する → <mark>した</mark>, {来|く}る → {来|き}<mark>た</mark>","suru → shita, kuru → kita")],["Quá khứ phủ định","〜なかった",ex("{食|た}べ<mark>なかった</mark>。","tabenakatta")]],
  uses:[["Kể chuyện hôm qua với bạn",ex("{昨日|きのう}{映画|えいが}を{見|み}<mark>た</mark>。","kinō eiga o mita")],["Từng làm",ex("{富士山|ふじさん}に{登|のぼ}っ<mark>たことがあります</mark>。","Fujisan ni nobotta koto ga arimasu")],["Nên làm",ex("{早|はや}く{寝|ね}<mark>たほうがいい</mark>です。","hayaku neta hō ga ii desu")]],
  signals:["〜た","〜だ","〜たことがある","〜たほうがいい"],
  speak:5,write:5,
  reg:"Thể た có quy tắc y hệt thể て: nếu chia て chắc, chia た cũng chắc. Đừng quên ngoại lệ いく → いった. “〜たことがある” hỏi kinh nghiệm một lần trong đời, không dùng cho việc lặp lại hằng ngày.",
  mistake:["いた (muốn nói “đã đi”)","いった","いく là ngoại lệ: いった, không phải いた (いた là “có mặt/ở” của いる)."],
  table:[{head:["て → た","Ví dụ"],rows:[["って","→ った","かって → かった"],["んで","→ んだ","のんで → のんだ"],["いて","→ いた","かいて → かいた"],["して","→ した","はなして → はなした"],["Nhóm 2","て → た","たべて → たべた"]]}]},

 {id:"ja-fut-tai",num:"04",en:"〜たい・〜ことができる",vi:"Muốn · có thể · từng",short:"たべたい · たべることができる · たべたことがある",
  core:"Ba mẫu hay dùng: <strong>V たい</strong> (muốn làm), <strong>V る + ことができる</strong> (có thể làm), <strong>V た + ことがある</strong> (từng làm).",
  forms:[["Muốn","V ます bỏ ます + たい",ex("{日本|にほん}へ{行|い}き<mark>たい</mark>です。","Nihon e ikitai desu")],["Không muốn","〜たくない",ex("{行|い}き<mark>たくない</mark>です。","ikitakunai desu")],["Có thể","V る + ことができる",ex("{泳|およ}ぐ<mark>ことができます</mark>。","oyogu koto ga dekimasu")],["Không thể","〜ことができない",ex("{漢字|かんじ}を{読|よ}む<mark>ことができません</mark>。","kanji o yomu koto ga dekimasen")],["Từng","V た + ことがある",ex("{日本|にほん}へ{行|い}っ<mark>たことがあります</mark>。","Nihon e itta koto ga arimasu")],["Chưa từng","〜たことがない",ex("{寿司|すし}を{食|た}べ<mark>たことがありません</mark>。","sushi o tabeta koto ga arimasen")]],
  uses:[["Nói mong muốn",ex("{新|あたら}しいパソコンが{欲|ほ}しいです。 / パソコンを{買|か}い<mark>たい</mark>です。","atarashii pasokon ga hoshii desu / pasokon o kaitai desu")],["Nói khả năng",ex("{日本語|にほんご}で{話|はな}す<mark>ことができます</mark>。","nihongo de hanasu koto ga dekimasu")],["Nói kinh nghiệm",ex("{北海道|ほっかいどう}に{行|い}っ<mark>たことがあります</mark>。","Hokkaidō ni itta koto ga arimasu")]],
  signals:["〜たい","〜たくない","〜ことができる","〜たことがある"],
  speak:5,write:5,
  reg:"〜たい chỉ dùng cho ngôi thứ nhất (và câu hỏi cho người nghe). Nói ngôi thứ ba dùng 〜たがっている. 〜たい chia như tính từ い (たくない, たかった).",
  mistake:["わたしは すしを たべるたいです。","わたしは すしを たべたいです。","たい gắn vào ます bỏ ます (たべ + たい), không gắn vào thể từ điển."],
  table:[{head:["Mẫu","Ví dụ"],rows:[["〜たい","muốn","いきたい"],["〜ことができる","có thể","およぐことができる"],["〜たことがある","từng","いったことがある"],["〜たことがない","chưa từng","たべたことがない"]]}]},
];

T.forEach(t => t.forms.forEach(f => { f[2] = rb(f[2]); }));
registerRows("futsukei", T);
GRAMMAR.theory.futsukei = { rows: T, first: "ja-fut-jisho" };
})();
