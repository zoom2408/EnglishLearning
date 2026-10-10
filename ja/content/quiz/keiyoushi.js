/* ja/content/quiz/keiyoushi.js: tính từ い, な, nối và phó từ.
   Mixed exercise types: type the answer (fill, kana or romaji accepted,
   retry allowed) or pick one (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "ja-kei-i": [
  {
   "kind": "fill",
   "q": "この ほんは たかい___。(lịch sự)",
   "hint": "kana hoặc romaji",
   "accept": [
    "です",
    "desu"
   ],
   "level": "A1",
   "expl": "Tính từ い + です."
  },
  {
   "kind": "fill",
   "q": "たかい → たか___です (phủ định)",
   "hint": "kana hoặc romaji",
   "accept": [
    "くない",
    "kunai"
   ],
   "level": "A1",
   "expl": "Bỏ い + くない."
  },
  {
   "kind": "fill",
   "q": "きのうは あつ___です。(quá khứ)",
   "hint": "kana hoặc romaji",
   "accept": [
    "かった",
    "katta"
   ],
   "level": "A1",
   "expl": "Bỏ い + かった."
  },
  {
   "kind": "fill",
   "q": "あつい → あつ___です (quá khứ phủ định)",
   "hint": "kana hoặc romaji",
   "accept": [
    "くなかった",
    "kunakatta"
   ],
   "level": "A2",
   "expl": "Bỏ い + くなかった."
  },
  {
   "kind": "fill",
   "q": "いい → ___ないです (phủ định)",
   "hint": "kana hoặc romaji",
   "accept": [
    "よくない",
    "yokunai"
   ],
   "level": "A2",
   "expl": "いい đổi gốc よ: よくない."
  },
  {
   "kind": "fill",
   "q": "てんきは ___かったです。(tốt, quá khứ)",
   "hint": "kana hoặc romaji",
   "accept": [
    "よ",
    "yo"
   ],
   "level": "A2",
   "expl": "いい → よかった."
  },
  {
   "kind": "fill",
   "q": "___ パン (bánh mì ngon)",
   "hint": "kana hoặc romaji",
   "accept": [
    "おいしい",
    "oishii"
   ],
   "level": "A1",
   "expl": "おいしい đứng trước danh từ."
  },
  {
   "kind": "choose",
   "q": "Tính từ nào là tính từ い?",
   "right": "たかい",
   "wrong": [
    "きれい",
    "しずか",
    "ゆうめい"
   ],
   "level": "A1",
   "expl": "きれい, しずか, ゆうめい là tính từ な."
  },
  {
   "kind": "choose",
   "q": "Phủ định của「やすい」là",
   "right": "やすくない",
   "wrong": [
    "やすいくない",
    "やすじゃない",
    "やすないです"
   ],
   "level": "A1",
   "expl": "Bỏ い + くない."
  },
  {
   "kind": "choose",
   "q": "Quá khứ của「おもしろい」là",
   "right": "おもしろかった",
   "wrong": [
    "おもしろいだった",
    "おもしろでした",
    "おもしろくた"
   ],
   "level": "A1",
   "expl": "Bỏ い + かった."
  },
  {
   "kind": "choose",
   "q": "Quá khứ phủ định của「たかい」là",
   "right": "たかくなかった",
   "wrong": [
    "たかなかった",
    "たかいではなかった",
    "たかくないだった"
   ],
   "level": "A2",
   "expl": "〜くなかった."
  },
  {
   "kind": "choose",
   "q": "「いい」phủ định là",
   "right": "よくない",
   "wrong": [
    "いくない",
    "いいくない",
    "いいじゃない"
   ],
   "level": "A2",
   "expl": "いい là ngoại lệ."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "この かばんは たかいです",
   "wrong": [
    "この かばんは たかいだです",
    "この かばんは たかです",
    "この かばんは たかるです"
   ],
   "level": "A1",
   "expl": "A い + です."
  },
  {
   "kind": "choose",
   "q": "きのうは さむかったです nghĩa là",
   "right": "Hôm qua trời lạnh",
   "wrong": [
    "Hôm nay lạnh",
    "Hôm qua không lạnh",
    "Mai sẽ lạnh"
   ],
   "level": "A1",
   "expl": "〜かった = quá khứ."
  },
  {
   "kind": "choose",
   "q": "「たかかったです」nghĩa là",
   "right": "đã đắt",
   "wrong": [
    "không đắt",
    "sẽ đắt",
    "đắt quá chừng"
   ],
   "level": "A1",
   "expl": "Quá khứ khẳng định."
  }
 ],
 "ja-kei-na": [
  {
   "kind": "fill",
   "q": "このまちは しずか___。(lịch sự)",
   "hint": "kana hoặc romaji",
   "accept": [
    "です",
    "desu"
   ],
   "level": "A1",
   "expl": "Tính từ な + です."
  },
  {
   "kind": "fill",
   "q": "しずか___ありません。(phủ định)",
   "hint": "kana hoặc romaji",
   "accept": [
    "じゃ",
    "ja",
    "では",
    "dewa"
   ],
   "level": "A1",
   "expl": "Phủ định: じゃありません."
  },
  {
   "kind": "fill",
   "q": "きのうは ひま___。(quá khứ)",
   "hint": "kana hoặc romaji",
   "accept": [
    "でした",
    "deshita"
   ],
   "level": "A1",
   "expl": "Quá khứ: でした."
  },
  {
   "kind": "fill",
   "q": "ひまじゃありません___。(quá khứ phủ định)",
   "hint": "kana hoặc romaji",
   "accept": [
    "でした",
    "deshita"
   ],
   "level": "A2",
   "expl": "Quá khứ phủ định: じゃありませんでした."
  },
  {
   "kind": "fill",
   "q": "___ はな (hoa đẹp, trước danh từ)",
   "hint": "kana hoặc romaji",
   "accept": [
    "きれいな",
    "kireina"
   ],
   "level": "A1",
   "expl": "Tính từ な + な + danh từ."
  },
  {
   "kind": "fill",
   "q": "ゆうめい___ せんせい (thầy nổi tiếng)",
   "hint": "kana hoặc romaji",
   "accept": [
    "な",
    "na"
   ],
   "level": "A1",
   "expl": "な trước danh từ."
  },
  {
   "kind": "fill",
   "q": "おんがくが すき___。",
   "hint": "kana hoặc romaji",
   "accept": [
    "です",
    "desu"
   ],
   "level": "A1",
   "expl": "すき là tính từ な."
  },
  {
   "kind": "choose",
   "q": "Tính từ な là",
   "right": "きれい",
   "wrong": [
    "たかい",
    "おおきい",
    "おいしい"
   ],
   "level": "A1",
   "expl": "きれい là な, dù trông giống い."
  },
  {
   "kind": "choose",
   "q": "Trước danh từ, tính từ な cần",
   "right": "な",
   "wrong": [
    "に",
    "く",
    "の"
   ],
   "level": "A1",
   "expl": "しずかな まち."
  },
  {
   "kind": "choose",
   "q": "Phủ định của「しずかです」là",
   "right": "しずかじゃありません",
   "wrong": [
    "しずかくないです",
    "しずかじゃいです",
    "しずかないです"
   ],
   "level": "A1",
   "expl": "な-adj + じゃありません."
  },
  {
   "kind": "choose",
   "q": "Quá khứ của「ひまです」là",
   "right": "ひまでした",
   "wrong": [
    "ひまかったです",
    "ひまだったでした",
    "ひまいでした"
   ],
   "level": "A1",
   "expl": "でした."
  },
  {
   "kind": "choose",
   "q": "「きらい」là",
   "right": "tính từ な",
   "wrong": [
    "tính từ い",
    "động từ",
    "trạng từ"
   ],
   "level": "A2",
   "expl": "きらい = な-adj."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "しんせつな ひと",
   "wrong": [
    "しんせつい ひと",
    "しんせつく ひと",
    "しんせつ ひと です"
   ],
   "level": "A1",
   "expl": "な + danh từ."
  },
  {
   "kind": "choose",
   "q": "Câu nào sai?",
   "right": "きれいくないです",
   "wrong": [
    "きれいじゃありません",
    "きれいじゃないです",
    "きれいでは ありません"
   ],
   "level": "A2",
   "expl": "きれい là な: phủ định không dùng くない."
  },
  {
   "kind": "choose",
   "q": "「ゆうめい」nghĩa là",
   "right": "nổi tiếng",
   "wrong": [
    "yên tĩnh",
    "bận",
    "đẹp"
   ],
   "level": "A2",
   "expl": "ゆうめい = famous."
  }
 ],
 "ja-kei-tsunagi": [
  {
   "kind": "fill",
   "q": "このみせは やす___ おいしいです。(nối い)",
   "hint": "kana hoặc romaji",
   "accept": [
    "くて",
    "kute"
   ],
   "level": "A2",
   "expl": "Bỏ い + くて."
  },
  {
   "kind": "fill",
   "q": "しずか___ べんりです。(nối な)",
   "hint": "kana hoặc romaji",
   "accept": [
    "で",
    "de"
   ],
   "level": "A2",
   "expl": "な-adj + で."
  },
  {
   "kind": "fill",
   "q": "かれは せんせい___、しんせつです。",
   "hint": "kana hoặc romaji",
   "accept": [
    "で",
    "de"
   ],
   "level": "A2",
   "expl": "N + で để nối."
  },
  {
   "kind": "fill",
   "q": "やすい___、おいしくないです。(nhưng)",
   "hint": "kana hoặc romaji",
   "accept": [
    "が",
    "ga",
    "けど",
    "kedo"
   ],
   "level": "A2",
   "expl": "が/けど = nhưng."
  },
  {
   "kind": "fill",
   "q": "___ まちですか。(thành phố như thế nào)",
   "hint": "kana hoặc romaji",
   "accept": [
    "どんな",
    "donna"
   ],
   "level": "A1",
   "expl": "どんな + danh từ."
  },
  {
   "kind": "fill",
   "q": "にほんの せいかつは ___ですか。",
   "hint": "kana hoặc romaji",
   "accept": [
    "どう",
    "dou",
    "dō"
   ],
   "level": "A1",
   "expl": "どうですか = thế nào?"
  },
  {
   "kind": "fill",
   "q": "あの へやは ひろ___ あかるいです。",
   "hint": "kana hoặc romaji",
   "accept": [
    "くて",
    "kute"
   ],
   "level": "A2",
   "expl": "ひろい → ひろくて."
  },
  {
   "kind": "choose",
   "q": "Nối「たかい」và「おいしい」",
   "right": "たかくて おいしい",
   "wrong": [
    "たかいで おいしい",
    "たかく おいしい",
    "たかい おいしい"
   ],
   "level": "A2",
   "expl": "い → くて."
  },
  {
   "kind": "choose",
   "q": "Nối「きれい」và「しずか」",
   "right": "きれいで しずか",
   "wrong": [
    "きれいくて しずか",
    "きれいに しずか",
    "きれい しずか"
   ],
   "level": "A2",
   "expl": "な → で."
  },
  {
   "kind": "choose",
   "q": "Nhưng, tương phản",
   "right": "やすいが、おいしくないです",
   "wrong": [
    "やすくて、おいしくないです",
    "やすいで、おいしくないです",
    "やすい、おいしくないです"
   ],
   "level": "A2",
   "expl": "Tương phản dùng が."
  },
  {
   "kind": "choose",
   "q": "「どんな」dùng để",
   "right": "hỏi tính chất",
   "wrong": [
    "hỏi giờ",
    "hỏi nơi chốn",
    "hỏi lý do"
   ],
   "level": "A1",
   "expl": "どんな N = loại N nào."
  },
  {
   "kind": "choose",
   "q": "「どうですか」dùng để",
   "right": "hỏi cảm nhận",
   "wrong": [
    "hỏi tên",
    "hỏi giá",
    "hỏi đường"
   ],
   "level": "A1",
   "expl": "どう = thế nào?"
  },
  {
   "kind": "choose",
   "q": "Cách nối hai tính từ い cùng hướng là",
   "right": "〜くて",
   "wrong": [
    "〜で",
    "〜が",
    "〜に"
   ],
   "level": "A2",
   "expl": "〜くて."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "この ふくは やすくて いいです",
   "wrong": [
    "この ふくは やすいで いいです",
    "この ふくは やすで いいです",
    "この ふくは やすいくて いいです"
   ],
   "level": "A2",
   "expl": "やすい → やすくて."
  },
  {
   "kind": "choose",
   "q": "「せんせいで、しんせつです」nghĩa là",
   "right": "Là giáo viên và tốt bụng",
   "wrong": [
    "Là giáo viên nhưng khó tính",
    "Không phải giáo viên",
    "Sẽ là giáo viên"
   ],
   "level": "A2",
   "expl": "N で nối tiếp."
  }
 ],
 "ja-kei-fukushi": [
  {
   "kind": "fill",
   "q": "___ おいしいです。(rất)",
   "hint": "kana hoặc romaji",
   "accept": [
    "とても",
    "totemo"
   ],
   "level": "A1",
   "expl": "とても = rất."
  },
  {
   "kind": "fill",
   "q": "___ たかいです。(hơi)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ちょっと",
    "すこし",
    "chotto",
    "sukoshi"
   ],
   "level": "A1",
   "expl": "ちょっと/すこし = hơi."
  },
  {
   "kind": "fill",
   "q": "あまり おいしく___です。",
   "hint": "kana hoặc romaji",
   "accept": [
    "ない",
    "nai"
   ],
   "level": "A2",
   "expl": "あまり + phủ định."
  },
  {
   "kind": "fill",
   "q": "ぜんぜん おもしろ___ないです。",
   "hint": "kana hoặc romaji",
   "accept": [
    "く",
    "ku"
   ],
   "level": "A2",
   "expl": "おもしろくない."
  },
  {
   "kind": "fill",
   "q": "はやい → はや___ おきます。",
   "hint": "kana hoặc romaji",
   "accept": [
    "く",
    "ku"
   ],
   "level": "A2",
   "expl": "い → く + V."
  },
  {
   "kind": "fill",
   "q": "きれい → きれい___ かきます。",
   "hint": "kana hoặc romaji",
   "accept": [
    "に",
    "ni"
   ],
   "level": "A2",
   "expl": "な → に + V."
  },
  {
   "kind": "fill",
   "q": "じょうず___ はなします。",
   "hint": "kana hoặc romaji",
   "accept": [
    "に",
    "ni"
   ],
   "level": "A2",
   "expl": "じょうずに はなす."
  },
  {
   "kind": "choose",
   "q": "「とても」nghĩa là",
   "right": "rất",
   "wrong": [
    "hơi",
    "không",
    "hoàn toàn không"
   ],
   "level": "A1",
   "expl": "とても = very."
  },
  {
   "kind": "choose",
   "q": "Nhẹ nhất",
   "right": "ちょっと",
   "wrong": [
    "とても",
    "すごく",
    "ほんとうに"
   ],
   "level": "A1",
   "expl": "ちょっと = hơi."
  },
  {
   "kind": "choose",
   "q": "「あまり〜ない」nghĩa là",
   "right": "không … lắm",
   "wrong": [
    "rất …",
    "luôn …",
    "đã …"
   ],
   "level": "A2",
   "expl": "あまり + phủ định."
  },
  {
   "kind": "choose",
   "q": "Đổi「はやい」thành trạng từ",
   "right": "はやく",
   "wrong": [
    "はやに",
    "はやで",
    "はやい"
   ],
   "level": "A2",
   "expl": "い → く."
  },
  {
   "kind": "choose",
   "q": "Đổi「しずか」thành trạng từ",
   "right": "しずかに",
   "wrong": [
    "しずかく",
    "しずかで",
    "しずかな"
   ],
   "level": "A2",
   "expl": "な → に."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "はやく おきます",
   "wrong": [
    "はやい おきます",
    "はやに おきます",
    "はやで おきます"
   ],
   "level": "A2",
   "expl": "い → く."
  },
  {
   "kind": "choose",
   "q": "Lời từ chối nhẹ khi món đắt",
   "right": "ちょっと たかいです",
   "wrong": [
    "とても きれいです",
    "ぜんぜん いいです",
    "よく たかいです"
   ],
   "level": "A2",
   "expl": "ちょっと + tính từ tiêu cực = nói giảm."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "ぜんぜん おいしくないです",
   "wrong": [
    "ぜんぜん おいしいです",
    "ぜんぜん おいしかったです",
    "ぜんぜん おいしいか"
   ],
   "level": "A2",
   "expl": "ぜんぜん + phủ định."
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

const RUSH=[["たかい · たかくない", ["ja-kei-i"]], ["たかかった", ["ja-kei-i"]], ["しずかです", ["ja-kei-na"]], ["しずかな まち", ["ja-kei-na"]], ["しずかじゃありません", ["ja-kei-na"]], ["やすくて おいしい", ["ja-kei-tsunagi"]], ["しずかで きれい", ["ja-kei-tsunagi"]], ["どんな まち", ["ja-kei-tsunagi"]], ["とても · ちょっと", ["ja-kei-fukushi"]], ["はやく · じょうずに", ["ja-kei-fukushi"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["keiyoushi"] = { pool: POOL, types: TYPES, game: {title:"どれ？",desc:"60 giây. Thấy mẫu này, chọn đúng bài",prompt:"Mẫu này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"jaKeiyoushiRushBest"} };
})();
