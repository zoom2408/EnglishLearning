/* ja/content/theory/kihon.js
   Kihon: N は N です, の / も / か, これ・それ・あれ, question words.
   Uses the "table" diagram mode. Furigana: {漢字|かんじ}; romaji lines via ex(). */
(() => {
const ex = (jp, ro) => rb(jp) + (ro ? `<span class="ro">${ro}</span>` : "");
const T = [
 {id:"ja-kih-desu",num:"01",en:"AはBです",vi:"N は N です (A là B)",short:"わたしは がくせいです。",
  core:"Câu danh từ cơ bản nhất: <strong>A は B です</strong>. は là trợ từ chủ đề (đọc <strong>wa</strong>), です là “là” lịch sự và nằm <strong>cuối câu</strong>. Phủ định và quá khứ chỉ đổi phần です.",
  forms:[["Khẳng định","N は N です",ex("{私|わたし}は<mark>{学生|がくせい}です</mark>。","watashi wa gakusei desu")],["Phủ định","N は N じゃありません",ex("{私|わたし}は{学生|がくせい}<mark>じゃありません</mark>。","watashi wa gakusei ja arimasen")],["Quá khứ","N は N でした",ex("{昨日|きのう}は{雨|あめ}<mark>でした</mark>。","kinō wa ame deshita")],["Phủ định quá khứ","N は N じゃありませんでした",ex("{昨日|きのう}は{雨|あめ}<mark>じゃありませんでした</mark>。","kinō wa ame ja arimasen deshita")],["Nghi vấn","N は N ですか",ex("{学生|がくせい}<mark>ですか</mark>。","gakusei desu ka")],["Thân mật","N だ · N じゃない · N だった",ex("{学生|がくせい}<mark>だ</mark>。","gakusei da")]],
  uses:[["Nói tên, nghề, quốc tịch",ex("{私|わたし}は<mark>ベトナム{人|じん}です</mark>。","watashi wa Betonamu-jin desu")],["Trả lời Có/Không",ex("はい、そうです。/ いいえ、<mark>そうじゃありません</mark>。","hai, sō desu / iie, sō ja arimasen")],["Nói về quá khứ",ex("{先週|せんしゅう}は{休|やす}み<mark>でした</mark>。","senshū wa yasumi deshita")]],
  signals:["は","です","じゃありません","でした","ですか"],
  speak:5,write:5,
  reg:"じゃありません là văn nói, ではありません là văn viết và trang trọng hơn. Thể thân mật だ/じゃない dùng với bạn bè, nhưng chỉ cần nhớ です/ます khi mới học.",
  mistake:["わたしは がくせいは です。","わたしは がくせいです。","です không đi kèm は ngay trước nó. Chỉ có một は đánh dấu chủ đề, sau đó danh từ rồi です."],
  table:[{head:["Hiện tại","Quá khứ"],rows:[["Khẳng định","〜です","〜でした"],["Phủ định","〜じゃありません","〜じゃありませんでした"],["Nghi vấn","〜ですか","〜でしたか"]]}]},

 {id:"ja-kih-no-mo-ka",num:"02",en:"の・も・か",vi:"の, も, か và ね・よ",short:"わたしの ほん · あなたも · ですか。",
  core:"Ba trợ từ nhỏ nhưng dùng liên tục: <strong>の</strong> nối hai danh từ (sở hữu, thuộc về), <strong>も</strong> thay は/が để nói “cũng”, <strong>か</strong> cuối câu biến thành câu hỏi. Thêm <strong>ね/よ</strong> để tìm sự đồng tình hoặc thông báo.",
  forms:[["Sở hữu","N1 の N2",ex("<mark>{私|わたし}の</mark>{本|ほん}","watashi no hon (sách của tôi)")],["Thuộc/loại","N1 の N2",ex("{日本語|にほんご}<mark>の</mark>{先生|せんせい}","nihongo no sensei")],["“Cũng”","N も N です",ex("{私|わたし}<mark>も</mark>{学生|がくせい}です。","watashi mo gakusei desu")],["Câu hỏi","〜ですか",ex("{先生|せんせい}<mark>ですか</mark>。","sensei desu ka")],["Tìm đồng tình","〜ですね",ex("いい{天気|てんき}<mark>ですね</mark>。","ii tenki desu ne")],["Thông báo","〜ですよ",ex("もう{九時|くじ}<mark>ですよ</mark>。","mō kuji desu yo")]],
  uses:[["Hai danh từ cùng nhóm",ex("{私|わたし}は{学生|がくせい}です。リンさん<mark>も</mark>{学生|がくせい}です。","watashi wa gakusei desu. Rin-san mo gakusei desu")],["Giản lược danh từ sau の",ex("これは{私|わたし}<mark>の</mark>です。","kore wa watashi no desu")],["Hỏi lại ngắn",ex("{私|わたし}は{元気|げんき}です。<mark>あなたは</mark>？","watashi wa genki desu. anata wa?")]],
  signals:["の","も","か","ね","よ"],
  speak:5,write:5,
  reg:"も thay thế は (hoặc が, を), không đi chung: ✗ わたしはも. か ở cuối câu chỉ cần dùng khi viết hoặc nói trang trọng; trong văn nói thân mật, chỉ cần lên giọng.",
  mistake:["わたしは も がくせいです。","わたしも がくせいです。","も thay thế は ở vị trí đó, không viết cả hai."],
  table:[{head:["Vai trò","Ví dụ"],rows:[["の","sở hữu / thuộc","わたし**の**かさ"],["も","cũng","わたし**も**いきます"],["か","hỏi","いきます**か**"],["ね","đồng tình","いい てんきです**ね**"],["よ","thông báo","あぶない**よ**"]]}]},

 {id:"ja-kih-kosoado",num:"03",en:"こそあど",vi:"これ・それ・あれ・どれ",short:"これ · この · ここ · こちら",
  core:"Bốn chữ cái đầu tạo ra cả bảng: <strong>こ</strong> (gần người nói), <strong>そ</strong> (gần người nghe), <strong>あ</strong> (xa cả hai), <strong>ど</strong> (nghi vấn). Chỉ cần nhớ cách ghép: これ/それ/あれ/どれ, この/その/あの/どの, ここ/そこ/あそこ/どこ.",
  forms:[["Vật","これ · それ · あれ · どれ",ex("<mark>これ</mark>は{何|なん}ですか。","kore wa nan desu ka")],["Bổ nghĩa danh từ","この・その・あの・どの + N",ex("<mark>この</mark>{本|ほん}は{私|わたし}のです。","kono hon wa watashi no desu")],["Nơi chốn","ここ · そこ · あそこ · どこ",ex("{駅|えき}は<mark>あそこ</mark>です。","eki wa asoko desu")],["Hướng lịch sự","こちら · そちら · あちら · どちら",ex("<mark>どちら</mark>から{来|き}ましたか。","dochira kara kimashita ka")],["Loại","こんな · そんな · あんな · どんな",ex("<mark>どんな</mark>{音楽|おんがく}が{好|す}きですか。","donna ongaku ga suki desu ka")],["Hỏi giá","これは いくらですか",ex("<mark>これ</mark>は<mark>いくら</mark>ですか。","kore wa ikura desu ka")]],
  uses:[["Chỉ vật gần/xa",ex("<mark>これ</mark>は{私|わたし}の{傘|かさ}です。<mark>あれ</mark>は{先生|せんせい}の{傘|かさ}です。","kore wa watashi no kasa desu. are wa sensei no kasa desu")],["Chỉ nơi chốn",ex("トイレは<mark>あそこ</mark>です。","toire wa asoko desu")],["Chọn một trong nhiều",ex("<mark>どれ</mark>が{好|す}きですか。","dore ga suki desu ka")]],
  signals:["これ","それ","あれ","どれ","ここ","そこ","あそこ"],
  speak:5,write:4,
  reg:"これ/それ/あれ đứng một mình thay cho danh từ; この/その/あの bắt buộc đi kèm danh từ. Khi nói chuyện qua điện thoại hay nhắc lại điều người kia vừa nói, dùng そ để chỉ nội dung đó.",
  mistake:["これ ほん","この ほん","これ thay cho danh từ nên không đứng trước danh từ. Muốn đứng trước danh từ phải dùng この."],
  table:[{head:["こ (gần tôi)","そ (gần bạn)","あ (xa cả hai)","ど (hỏi)"],rows:[["Vật","これ","それ","あれ","どれ"],["Bổ nghĩa N","この","その","あの","どの"],["Nơi chốn","ここ","そこ","あそこ","どこ"],["Hướng lịch sự","こちら","そちら","あちら","どちら"],["Loại","こんな","そんな","あんな","どんな"]]}]},

 {id:"ja-kih-gimon",num:"04",en:"疑問詞",vi:"Từ để hỏi",short:"なに · だれ · どこ · いつ · いくら",
  core:"Tiếng Nhật <strong>không đảo trật tự</strong> để hỏi. Chỉ cần thay thông tin cần hỏi bằng từ để hỏi tương ứng, giữ nguyên vị trí và thêm <strong>か</strong> ở cuối.",
  forms:[["Cái gì","なに / なん",ex("これは<mark>なん</mark>ですか。","kore wa nan desu ka")],["Ai","だれ / どなた",ex("あの{人|ひと}は<mark>だれ</mark>ですか。","ano hito wa dare desu ka")],["Ở đâu","どこ / どちら",ex("{駅|えき}は<mark>どこ</mark>ですか。","eki wa doko desu ka")],["Khi nào","いつ",ex("<mark>いつ</mark>{日本|にほん}へ{行|い}きますか。","itsu Nihon e ikimasu ka")],["Bao nhiêu","いくら / いくつ",ex("これは<mark>いくら</mark>ですか。","kore wa ikura desu ka")],["Thế nào / Tại sao","どう · どうして",ex("<mark>どうして</mark>{日本語|にほんご}を{勉強|べんきょう}しますか。","dōshite nihongo o benkyō shimasu ka")]],
  uses:[["Hỏi giá",ex("このシャツは<mark>いくら</mark>ですか。 — {千円|せんえん}です。","kono shatsu wa ikura desu ka. — sen’en desu")],["Hỏi lý do",ex("<mark>どうして</mark>{休|やす}みましたか。 — {病気|びょうき}だからです。","dōshite yasumimashita ka. — byōki dakara desu")],["Hỏi ý kiến",ex("{日本|にほん}は<mark>どう</mark>ですか。","Nihon wa dō desu ka")]],
  signals:["なに / なん","だれ","どこ","いつ","いくら","どうして"],
  speak:5,write:5,
  reg:"なに đổi thành なん trước だ・で・の và trước cột た・な・だ (なんですか, なんの). Với người lạ hoặc cấp trên, dùng どなた thay だれ, どちら thay どこ.",
  mistake:["なにですか。","なんですか。","Trước です, なに đổi thành なん."],
  table:[{head:["Dùng khi hỏi","Ví dụ"],rows:[["なに/なん","vật, việc","なんですか"],["だれ","người","だれですか"],["どこ","nơi chốn","どこですか"],["いつ","thời gian","いつですか"],["いくら","giá tiền","いくらですか"],["どうして","lý do","どうしてですか"]]}]},
];

T.forEach(t => t.forms.forEach(f => { f[2] = rb(f[2]); }));
registerRows("kihon", T);
GRAMMAR.theory.kihon = { rows: T, first: "ja-kih-desu" };
})();
