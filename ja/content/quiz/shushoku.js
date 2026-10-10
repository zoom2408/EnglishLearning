/* ja/content/quiz/shushoku.js: mệnh đề bổ nghĩa, が/の, の/こと, んです, という.
   Mixed exercise types: type the answer (fill, kana or romaji accepted,
   retry allowed) or pick one (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "ja-shu-meishi": [
  {
   "kind": "fill",
   "q": "きのう かっ___ ほん (cuốn sách đã mua hôm qua)",
   "hint": "kana hoặc romaji",
   "accept": [
    "た",
    "ta"
   ],
   "level": "A2",
   "expl": "V た + N."
  },
  {
   "kind": "fill",
   "q": "たべ___ ひと (người không ăn)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ない",
    "nai"
   ],
   "level": "A2",
   "expl": "V ない + N."
  },
  {
   "kind": "fill",
   "q": "おいしい ___ (quán ngon)",
   "hint": "kana hoặc romaji",
   "accept": [
    "みせ",
    "mise"
   ],
   "level": "A2",
   "expl": "A い + N."
  },
  {
   "kind": "fill",
   "q": "しずか___ まち",
   "hint": "kana hoặc romaji",
   "accept": [
    "な",
    "na"
   ],
   "level": "A2",
   "expl": "A な + N."
  },
  {
   "kind": "fill",
   "q": "がくせい___ とき (khi còn là sinh viên)",
   "hint": "kana hoặc romaji",
   "accept": [
    "の",
    "no"
   ],
   "level": "A2",
   "expl": "N の + N."
  },
  {
   "kind": "fill",
   "q": "あそこで しゃしんを とっている ___ はだれですか。",
   "hint": "kana hoặc romaji",
   "accept": [
    "ひと",
    "hito"
   ],
   "level": "A2",
   "expl": "Mệnh đề + người."
  },
  {
   "kind": "fill",
   "q": "ちちが くれ___ とけい (đồng hồ bố cho)",
   "hint": "kana hoặc romaji",
   "accept": [
    "た",
    "ta"
   ],
   "level": "A2",
   "expl": "V た + N."
  },
  {
   "kind": "choose",
   "q": "Mệnh đề bổ nghĩa đứng",
   "right": "trước danh từ",
   "wrong": [
    "sau danh từ",
    "giữa câu",
    "sau です"
   ],
   "level": "A2",
   "expl": "Mệnh đề + N."
  },
  {
   "kind": "choose",
   "q": "Trong mệnh đề bổ nghĩa dùng",
   "right": "thể thường",
   "wrong": [
    "thể ます",
    "kính ngữ",
    "thể て"
   ],
   "level": "A2",
   "expl": "Thể thường."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "きのう かった ほん",
   "wrong": [
    "きのう かいました ほん",
    "きのう かう ほん",
    "ほん きのう かった"
   ],
   "level": "A2",
   "expl": "V た + N."
  },
  {
   "kind": "choose",
   "q": "“Nhà hàng đã đi hôm qua”",
   "right": "きのう いった レストラン",
   "wrong": [
    "きのう いきます レストラン",
    "きのう いった の レストラン",
    "レストラン きのう いった"
   ],
   "level": "A2",
   "expl": "V た + N."
  },
  {
   "kind": "choose",
   "q": "Trước danh từ, A な",
   "right": "しずかな まち",
   "wrong": [
    "しずかい まち",
    "しずかの まち",
    "しずかだ まち"
   ],
   "level": "A2",
   "expl": "な."
  },
  {
   "kind": "choose",
   "q": "“Khi còn là sinh viên”",
   "right": "がくせいの とき",
   "wrong": [
    "がくせいな とき",
    "がくせいが とき",
    "がくせい とき"
   ],
   "level": "A2",
   "expl": "N の + N."
  },
  {
   "kind": "choose",
   "q": "“Người ăn thịt”",
   "right": "にくを たべる ひと",
   "wrong": [
    "ひと にくを たべる",
    "にくを たべます ひと",
    "にくが たべる ひと を"
   ],
   "level": "A2",
   "expl": "V る + N."
  },
  {
   "kind": "choose",
   "q": "“Người không ăn thịt”",
   "right": "にくを たべない ひと",
   "wrong": [
    "にくを たべません ひと",
    "にくを たべるない ひと",
    "にくを たべなくて ひと"
   ],
   "level": "A2",
   "expl": "V ない + N."
  }
 ],
 "ja-shu-ga-no": [
  {
   "kind": "fill",
   "q": "わたし___ つくった りょうり (món tôi nấu)",
   "hint": "kana hoặc romaji",
   "accept": [
    "が",
    "ga"
   ],
   "level": "A2",
   "expl": "Chủ ngữ riêng dùng が."
  },
  {
   "kind": "fill",
   "q": "はは___ つくった りょうり (dạng の)",
   "hint": "kana hoặc romaji",
   "accept": [
    "の",
    "no"
   ],
   "level": "B1",
   "expl": "N の V."
  },
  {
   "kind": "fill",
   "q": "これは はは___ かった ほんです。",
   "hint": "kana hoặc romaji",
   "accept": [
    "が",
    "ga"
   ],
   "level": "A2",
   "expl": "が trong mệnh đề."
  },
  {
   "kind": "fill",
   "q": "だれ___ かいた ほんですか。",
   "hint": "kana hoặc romaji",
   "accept": [
    "が",
    "ga"
   ],
   "level": "A2",
   "expl": "だれが."
  },
  {
   "kind": "fill",
   "q": "ともだちが きょうとで とっ___ しゃしん",
   "hint": "kana hoặc romaji",
   "accept": [
    "た",
    "ta"
   ],
   "level": "A2",
   "expl": "V た + N."
  },
  {
   "kind": "fill",
   "q": "たなかさん___ つくった ケーキは おいしいです。",
   "hint": "kana hoặc romaji",
   "accept": [
    "が",
    "ga"
   ],
   "level": "A2",
   "expl": "が."
  },
  {
   "kind": "fill",
   "q": "わたしが いかなかっ___ ところ",
   "hint": "kana hoặc romaji",
   "accept": [
    "た",
    "ta"
   ],
   "level": "B1",
   "expl": "V なかった + N."
  },
  {
   "kind": "choose",
   "q": "Trong mệnh đề bổ nghĩa, は thường đổi thành",
   "right": "が",
   "wrong": [
    "を",
    "に",
    "で"
   ],
   "level": "A2",
   "expl": "は → が."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "わたしが つくった りょうり",
   "wrong": [
    "わたしは つくった りょうり",
    "わたしを つくった りょうり",
    "わたしに つくった りょうり"
   ],
   "level": "A2",
   "expl": "が."
  },
  {
   "kind": "choose",
   "q": "Chủ ngữ trong mệnh đề có thể dùng",
   "right": "が hoặc の",
   "wrong": [
    "は hoặc を",
    "に hoặc で",
    "chỉ は"
   ],
   "level": "B1",
   "expl": "が/の."
  },
  {
   "kind": "choose",
   "q": "Chủ đề toàn câu đặt",
   "right": "ngoài mệnh đề với は",
   "wrong": [
    "trong mệnh đề với は",
    "sau danh từ chính",
    "cuối câu"
   ],
   "level": "A2",
   "expl": "これは [ははが かった] ほんです."
  },
  {
   "kind": "choose",
   "q": "Câu nào sai?",
   "right": "ははは かった ほん",
   "wrong": [
    "ははが かった ほん",
    "ははの かった ほん",
    "これは ははが かった ほんです"
   ],
   "level": "A2",
   "expl": "は không dùng."
  },
  {
   "kind": "choose",
   "q": "“Bức ảnh ai đã chụp?”",
   "right": "だれが とった しゃしんですか",
   "wrong": [
    "だれは とった しゃしんですか",
    "だれを とった しゃしんですか",
    "だれに とった しゃしんですか"
   ],
   "level": "A2",
   "expl": "だれが."
  },
  {
   "kind": "choose",
   "q": "「ちちが おくってくれた おみやげ」nghĩa là",
   "right": "Quà bố gửi cho",
   "wrong": [
    "Quà bố đã mua cho bạn",
    "Quà bố không gửi",
    "Quà bố sẽ gửi"
   ],
   "level": "B1",
   "expl": "〜てくれた."
  },
  {
   "kind": "choose",
   "q": "「わたしが いかなかった ところ」nghĩa là",
   "right": "Nơi tôi đã không đi",
   "wrong": [
    "Nơi tôi sẽ đi",
    "Nơi tôi muốn đi",
    "Nơi tôi đang đi"
   ],
   "level": "B1",
   "expl": "V なかった + N."
  }
 ],
 "ja-shu-no-koto": [
  {
   "kind": "fill",
   "q": "およぐ___が すきです。(thích bơi)",
   "hint": "kana hoặc romaji",
   "accept": [
    "の",
    "no",
    "こと",
    "koto"
   ],
   "level": "A2",
   "expl": "Vの/ことが すき."
  },
  {
   "kind": "fill",
   "q": "りょうりを つくる___が じょうずです。",
   "hint": "kana hoặc romaji",
   "accept": [
    "の",
    "no"
   ],
   "level": "A2",
   "expl": "Vのが じょうず."
  },
  {
   "kind": "fill",
   "q": "にほんごを はなす___が できます。",
   "hint": "kana hoặc romaji",
   "accept": [
    "こと",
    "koto"
   ],
   "level": "A2",
   "expl": "できる đi với こと."
  },
  {
   "kind": "fill",
   "q": "しゅみは えいがを みる___です。",
   "hint": "kana hoặc romaji",
   "accept": [
    "こと",
    "koto"
   ],
   "level": "A2",
   "expl": "Sở thích: ことです."
  },
  {
   "kind": "fill",
   "q": "こどもが あそんでいる___を みました。",
   "hint": "kana hoặc romaji",
   "accept": [
    "の",
    "no"
   ],
   "level": "B1",
   "expl": "Nhìn thấy: の."
  },
  {
   "kind": "fill",
   "q": "かぎを もって いく___を わすれました。",
   "hint": "kana hoặc romaji",
   "accept": [
    "の",
    "no"
   ],
   "level": "B1",
   "expl": "V の を わすれる."
  },
  {
   "kind": "fill",
   "q": "わたしの ゆめは せかいを りょこうする___です。",
   "hint": "kana hoặc romaji",
   "accept": [
    "こと",
    "koto"
   ],
   "level": "B1",
   "expl": "ゆめは〜こと."
  },
  {
   "kind": "choose",
   "q": "Nhìn thấy trực tiếp dùng",
   "right": "の",
   "wrong": [
    "こと",
    "ところ",
    "もの"
   ],
   "level": "B1",
   "expl": "みる + の."
  },
  {
   "kind": "choose",
   "q": "Kinh nghiệm, khả năng dùng",
   "right": "こと",
   "wrong": [
    "の",
    "もの",
    "ところ"
   ],
   "level": "A2",
   "expl": "ことがある/ができる."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "にほんごを はなすことが できます",
   "wrong": [
    "にほんごを はなすのが できます",
    "にほんごを はなすものが できます",
    "にほんごを はなすところが できます"
   ],
   "level": "A2",
   "expl": "できる + こと."
  },
  {
   "kind": "choose",
   "q": "Thích bơi, tự nhiên nhất khi nói",
   "right": "およぐのが すきです",
   "wrong": [
    "およぐ ひとが すきです",
    "およぐでが すきです",
    "およぎが を すきです"
   ],
   "level": "A2",
   "expl": "Vのが すき."
  },
  {
   "kind": "choose",
   "q": "Quy tắc, cấm đoán thường dùng",
   "right": "こと",
   "wrong": [
    "の",
    "もの",
    "ところ"
   ],
   "level": "B1",
   "expl": "〜こと."
  },
  {
   "kind": "choose",
   "q": "Nói giỏi nấu ăn",
   "right": "りょうりを つくるのが じょうずです",
   "wrong": [
    "りょうりを つくるを じょうずです",
    "りょうりを つくるで じょうずです",
    "りょうりを つくるに じょうずです"
   ],
   "level": "A2",
   "expl": "のが じょうず."
  },
  {
   "kind": "choose",
   "q": "「しゅみは どくしょです」thay bằng động từ",
   "right": "しゅみは ほんを よむ ことです",
   "wrong": [
    "しゅみは ほんを よんだ",
    "しゅみは ほんが よむ",
    "しゅみは ほんを よみます ことです"
   ],
   "level": "A2",
   "expl": "V る こと."
  },
  {
   "kind": "choose",
   "q": "Kinh nghiệm dùng",
   "right": "〜たことがある",
   "wrong": [
    "〜たのがある",
    "〜たものがある",
    "〜たところがある"
   ],
   "level": "A2",
   "expl": "ことがある."
  }
 ],
 "ja-shu-n-desu": [
  {
   "kind": "fill",
   "q": "あたまが いたい___です。(giải thích)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ん",
    "n"
   ],
   "level": "A2",
   "expl": "V thường + んです."
  },
  {
   "kind": "fill",
   "q": "どうして おくれた___ですか。",
   "hint": "kana hoặc romaji",
   "accept": [
    "ん",
    "n"
   ],
   "level": "A2",
   "expl": "どうして〜んですか."
  },
  {
   "kind": "fill",
   "q": "きょうは やすみ___んです。",
   "hint": "kana hoặc romaji",
   "accept": [
    "な",
    "na"
   ],
   "level": "A2",
   "expl": "N なんです."
  },
  {
   "kind": "fill",
   "q": "どうし___んですか。(có chuyện gì)",
   "hint": "kana hoặc romaji",
   "accept": [
    "た",
    "ta"
   ],
   "level": "A2",
   "expl": "どうしたんですか."
  },
  {
   "kind": "fill",
   "q": "たなか___ いう ひと (người tên là Tanaka)",
   "hint": "kana hoặc romaji",
   "accept": [
    "と",
    "to"
   ],
   "level": "A2",
   "expl": "〜という."
  },
  {
   "kind": "fill",
   "q": "さくら___ いう みせ",
   "hint": "kana hoặc romaji",
   "accept": [
    "と",
    "to"
   ],
   "level": "A2",
   "expl": "〜という."
  },
  {
   "kind": "fill",
   "q": "かれが こない___ いう はなし",
   "hint": "kana hoặc romaji",
   "accept": [
    "と",
    "to"
   ],
   "level": "B1",
   "expl": "〜という + N."
  },
  {
   "kind": "choose",
   "q": "「〜んです」dùng để",
   "right": "giải thích, đưa lý do",
   "wrong": [
    "cấm đoán",
    "hỏi giá",
    "đếm số"
   ],
   "level": "A2",
   "expl": "んです."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "かぜを ひいたんです",
   "wrong": [
    "かぜを ひきましたんです",
    "かぜを ひくました",
    "かぜを ひいたです"
   ],
   "level": "A2",
   "expl": "Thể thường + んです."
  },
  {
   "kind": "choose",
   "q": "Hỏi lý do",
   "right": "どうして おくれたんですか",
   "wrong": [
    "どうして おくれましたんですか",
    "どうして おくれたですか",
    "どうして おくれたんですの"
   ],
   "level": "A2",
   "expl": "どうして〜んですか."
  },
  {
   "kind": "choose",
   "q": "Danh từ + んです",
   "right": "なんです",
   "wrong": [
    "だんです",
    "でんです",
    "ですんです"
   ],
   "level": "A2",
   "expl": "N なんです."
  },
  {
   "kind": "choose",
   "q": "「〜という みせ」nghĩa là",
   "right": "quán có tên là …",
   "wrong": [
    "quán không có tên",
    "quán đang đóng",
    "quán rất xa"
   ],
   "level": "A2",
   "expl": "〜という."
  },
  {
   "kind": "choose",
   "q": "Xin giúp bằng んです",
   "right": "じつは こまっているんですけど…",
   "wrong": [
    "じつは こまっていますんです",
    "じつは こまっているです",
    "じつは こまる"
   ],
   "level": "B1",
   "expl": "Giải thích bối cảnh."
  },
  {
   "kind": "choose",
   "q": "Khi nào dùng んです?",
   "right": "khi người nghe thấy bạn lạ hoặc muốn xin lời giải thích",
   "wrong": [
    "khi nói số",
    "khi chào",
    "khi đếm"
   ],
   "level": "A2",
   "expl": "んです giải thích."
  },
  {
   "kind": "choose",
   "q": "Nội dung tin: “tin rằng anh ấy không đến”",
   "right": "かれが こないという はなし",
   "wrong": [
    "かれが こないは はなし",
    "かれが こないで はなし",
    "かれが こない を はなし"
   ],
   "level": "B1",
   "expl": "〜という + N."
  }
 ]
};

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Gõ đáp án bằng kana hoặc romaji"},
 choose:{name:"Chọn đáp án",desc:"Chọn một trong bốn lựa chọn"},
};
const POOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => {
 if (it.kind === "fill") POOL.push(Object.assign(inQ("fill", fmt(it.q), `Gợi ý: <b>${esc(it.hint)}</b>. Gõ phần điền vào chỗ trống bằng kana hoặc romaji.`, it.accept, ref, it.expl), {retry:true, level:it.level}));
 else POOL.push(Object.assign(mcQ("choose", fmt(it.q), "Chọn đáp án đúng.", it.right, it.wrong, ref, it.expl), {retry:true, level:it.level}));
}));

const RUSH=[["きのう かった ほん", ["ja-shu-meishi"]], ["おいしい みせ", ["ja-shu-meishi"]], ["しずかな まち", ["ja-shu-meishi"]], ["わたしが つくった りょうり", ["ja-shu-ga-no"]], ["ははの つくった", ["ja-shu-ga-no"]], ["およぐのが すき", ["ja-shu-no-koto"]], ["はなすことが できる", ["ja-shu-no-koto"]], ["みるのを わすれた", ["ja-shu-no-koto"]], ["〜んです", ["ja-shu-n-desu"]], ["〜という みせ", ["ja-shu-n-desu"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["shushoku"] = { pool: POOL, types: TYPES, game: {title:"どれ？",desc:"60 giây. Thấy mẫu này, chọn đúng bài",prompt:"Mẫu này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"jaShushokuRushBest"} };
})();
