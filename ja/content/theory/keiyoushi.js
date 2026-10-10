/* ja/content/theory/keiyoushi.js
   Keiyoushi: i-adjectives, na-adjectives, modifying nouns / linking, adverbs.
   Uses the "table" diagram mode. Furigana: {漢字|かんじ}; romaji lines via ex(). */
(() => {
const ex = (jp, ro) => rb(jp) + (ro ? `<span class="ro">${ro}</span>` : "");
const T = [
 {id:"ja-kei-i",num:"01",en:"い形容詞",vi:"Tính từ い",short:"たかい · たかくない · たかかった · たかくなかった",
  core:"Tính từ い kết thúc bằng <strong>い</strong> và tự chia được. Phủ định: bỏ い + <strong>くない</strong>. Quá khứ: bỏ い + <strong>かった</strong>. Quá khứ phủ định: <strong>くなかった</strong>. Thêm <strong>です</strong> để lịch sự.",
  forms:[["Hiện tại","A いです",ex("この{本|ほん}は{高|たか}<mark>いです</mark>。","kono hon wa takai desu")],["Phủ định","A くないです",ex("{高|たか}<mark>くないです</mark>。","takakunai desu")],["Quá khứ","A かったです",ex("{昨日|きのう}は{暑|あつ}<mark>かったです</mark>。","kinō wa atsukatta desu")],["Quá khứ phủ định","A くなかったです",ex("{暑|あつ}<mark>くなかったです</mark>。","atsukunakatta desu")],["Bất quy tắc","いい → よくない",ex("{天気|てんき}は<mark>よくない</mark>です。","tenki wa yokunai desu")],["Bổ nghĩa danh từ","A い + N",ex("<mark>おいしい</mark>パン","oishii pan")]],
  uses:[["Nhận xét món ăn, thời tiết",ex("このラーメンは<mark>おいしかった</mark>です。","kono rāmen wa oishikatta desu")],["Phủ định mềm",ex("あまり{高|たか}<mark>くない</mark>です。","amari takakunai desu")],["いい là ngoại lệ, chia từ よ",ex("{昨日|きのう}は<mark>よかった</mark>です。","kinō wa yokatta desu")]],
  signals:["〜い","〜くない","〜かった","〜くなかった","いい → よくない"],
  speak:5,write:5,
  reg:"Chỉ tính từ い tự chia được. Lưu ý: きれい và ゆうめい trông như い nhưng là tính từ な. いい là ngoại lệ, mọi dạng chia đều dùng gốc よ-.",
  mistake:["たかいくないです。","たかくないです。","Phủ định tính từ い: bỏ い rồi thêm くない, không giữ nguyên い."],
  table:[{head:["Dạng","Ví dụ"],rows:[["Hiện tại","〜いです","たかいです"],["Phủ định","〜くないです","たかくないです"],["Quá khứ","〜かったです","たかかったです"],["Quá khứ phủ định","〜くなかったです","たかくなかったです"]]}]},

 {id:"ja-kei-na",num:"02",en:"な形容詞",vi:"Tính từ な",short:"きれいです · きれいじゃありません · きれいでした",
  core:"Tính từ な giữ nguyên gốc và chia giống danh từ + です. Phủ định: <strong>じゃありません</strong> (hoặc <strong>ではありません</strong>). Quá khứ: <strong>でした</strong>. Bổ nghĩa danh từ cần <strong>な</strong>.",
  forms:[["Hiện tại","A です",ex("この{町|まち}は{静|しず}か<mark>です</mark>。","kono machi wa shizuka desu")],["Phủ định","A じゃありません",ex("{静|しず}か<mark>じゃありません</mark>。","shizuka ja arimasen")],["Quá khứ","A でした",ex("{昨日|きのう}は{暇|ひま}<mark>でした</mark>。","kinō wa hima deshita")],["Quá khứ phủ định","A じゃありませんでした",ex("{暇|ひま}<mark>じゃありませんでした</mark>。","hima ja arimasen deshita")],["Bổ nghĩa danh từ","A な + N",ex("<mark>きれいな</mark>{花|はな}","kirei na hana")],["Thích · ghét","すき・きらい・じょうず・へた",ex("{音楽|おんがく}が<mark>好き</mark>です。","ongaku ga suki desu")]],
  uses:[["Mô tả nơi chốn",ex("ここは<mark>にぎやか</mark>です。","koko wa nigiyaka desu")],["Danh từ trước, な nối",ex("<mark>有名な</mark>{先生|せんせい}","yūmei na sensei")],["Mô tả người",ex("{田中|たなか}さんは<mark>親切</mark>です。","Tanaka-san wa shinsetsu desu")]],
  signals:["〜な + N","じゃありません","でした","すき・きらい"],
  speak:5,write:5,
  reg:"Tính từ な đi với な khi đứng trước danh từ, không có な khi đứng cuối câu trước です. Nhớ các từ hay lẫn: きれい, ゆうめい, きらい, たいせつ đều là tính từ な.",
  mistake:["きれい はなです。","きれいな はなです。","Tính từ な phải thêm な trước danh từ."],
  table:[{head:["Dạng","Ví dụ"],rows:[["Hiện tại","〜です","しずかです"],["Phủ định","〜じゃありません","しずかじゃありません"],["Quá khứ","〜でした","しずかでした"],["Trước danh từ","〜な + N","しずかな まち"]]}]},

 {id:"ja-kei-tsunagi",num:"03",en:"形容詞の接続",vi:"Nối & bổ nghĩa",short:"やすくて おいしい · しずかで きれい",
  core:"Muốn nối hai tính từ, đổi tính từ い thành <strong>〜くて</strong>, tính từ な thành <strong>〜で</strong>. Muốn nối với danh từ: い đứng thẳng trước danh từ, な cần thêm <strong>な</strong>. So sánh đúng với “nhưng” là <strong>が</strong>.",
  forms:[["Nối tính từ い","〜くて",ex("この{店|みせ}は{安|やす}<mark>くて</mark>おいしいです。","kono mise wa yasukute oishii desu")],["Nối tính từ な","〜で",ex("{静|しず}か<mark>で</mark>{便利|べんり}です。","shizuka de benri desu")],["Nối danh từ + tính từ","N で",ex("{彼|かれ}は{先生|せんせい}<mark>で</mark>、{親切|しんせつ}です。","kare wa sensei de, shinsetsu desu")],["Trái nghĩa","〜が、〜",ex("{安|やす}い<mark>が</mark>、おいしくないです。","yasui ga, oishikunai desu")],["Hỏi tính chất","どんな N ですか",ex("<mark>どんな</mark>{町|まち}ですか。","donna machi desu ka")],["Hỏi mức độ","どうですか",ex("{日本|にほん}の{生活|せいかつ}は<mark>どう</mark>ですか。","Nihon no seikatsu wa dō desu ka")]],
  uses:[["Miêu tả liền mạch",ex("あの{部屋|へや}は{広|ひろ}<mark>くて</mark>、{明|あか}るいです。","ano heya wa hirokute, akarui desu")],["Hai tính từ tương phản",ex("{高|たか}い<mark>が</mark>、いい{車|くるま}です。","takai ga, ii kuruma desu")],["Hỏi tính chất trước",ex("<mark>どんな</mark>{食|た}べ{物|もの}が{好|す}きですか。","donna tabemono ga suki desu ka")]],
  signals:["〜くて","〜で","どんな","どう","〜が、"],
  speak:5,write:5,
  reg:"Với tính từ い, くて nối hai tính chất cùng hướng (đều tốt hoặc đều xấu). Hai tính chất trái ngược thì dùng が hoặc けど để nối.",
  mistake:["やすいで おいしいです。","やすくて おいしいです。","Nối tính từ い: bỏ い + くて, không dùng で."],
  table:[{head:["Loại","Ví dụ"],rows:[["い → くて","nối い","やすくて おいしい"],["な → で","nối な","しずかで きれい"],["N → で","nối N","せんせいで しんせつ"]]}]},

 {id:"ja-kei-fukushi",num:"04",en:"副詞",vi:"Phó từ chỉ mức độ",short:"とても · すこし · ぜんぜん · あまり〜くない",
  core:"Phó từ mức độ đứng trước tính từ: <strong>とても</strong> (rất), <strong>ちょっと</strong>/<strong>すこし</strong> (hơi), <strong>あまり〜くない</strong> (không … lắm), <strong>ぜんぜん〜くない</strong> (hoàn toàn không). Biến tính từ thành trạng từ: い → <strong>く</strong>, な → <strong>に</strong>.",
  forms:[["Rất","とても A",ex("<mark>とても</mark>おいしいです。","totemo oishii desu")],["Hơi","ちょっと/すこし A",ex("<mark>ちょっと</mark>{高|たか}いです。","chotto takai desu")],["Không lắm","あまり A くない",ex("<mark>あまり</mark>{好|す}き<mark>じゃありません</mark>。","amari suki ja arimasen")],["Hoàn toàn không","ぜんぜん A くない",ex("<mark>ぜんぜん</mark>{面白|おもしろ}く<mark>ない</mark>です。","zenzen omoshirokunai desu")],["い → く + V","A く V",ex("{早|はや}<mark>く</mark>{起|お}きます。","hayaku okimasu")],["な → に + V","A に V",ex("<mark>きれいに</mark>{書|か}いてください。","kirei ni kaite kudasai")]],
  uses:[["Nhấn mạnh tích cực",ex("<mark>とても</mark>{楽|たの}しかったです。","totemo tanoshikatta desu")],["Làm nhẹ lời chê",ex("<mark>ちょっと</mark>{難|むずか}しいです。","chotto muzukashii desu")],["Tính từ làm trạng từ",ex("{上手|じょうず}<mark>に</mark>{話|はな}します。","jōzu ni hanashimasu")]],
  signals:["とても","ちょっと","あまり〜ない","ぜんぜん〜ない","〜く + V","〜に + V"],
  speak:5,write:5,
  reg:"ちょっと trước tính từ tiêu cực thường là cách nói giảm lịch sự (ちょっと高いです = hơi đắt, ám chỉ “đắt quá”). Hãy dùng nó khi cần từ chối khéo.",
  mistake:["はやい おきます。","はやく おきます。","Tính từ bổ nghĩa động từ phải đổi: い → く, な → に."],
  table:[{head:["Trạng từ","Ví dụ"],rows:[["とても","rất","とても おいしい"],["ちょっと","hơi","ちょっと たかい"],["あまり〜ない","không lắm","あまり おいしくない"],["〜く","い → く","はやく おきる"],["〜に","な → に","じょうずに はなす"]]}]},
];

T.forEach(t => t.forms.forEach(f => { f[2] = rb(f[2]); }));
registerRows("keiyoushi", T);
GRAMMAR.theory.keiyoushi = { rows: T, first: "ja-kei-i" };
})();
