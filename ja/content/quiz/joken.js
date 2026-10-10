/* ja/content/quiz/joken.js: điều kiện と, ば, たら, なら.
   Mixed exercise types: type the answer (fill, kana or romaji accepted,
   retry allowed) or pick one (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "ja-jok-to": [
  {
   "kind": "fill",
   "q": "はるに なる___、さくらが さきます。",
   "hint": "kana hoặc romaji",
   "accept": [
    "と",
    "to"
   ],
   "level": "A2",
   "expl": "Quy luật tự nhiên: と."
  },
  {
   "kind": "fill",
   "q": "このボタンを おす___、みずが でます。",
   "hint": "kana hoặc romaji",
   "accept": [
    "と",
    "to"
   ],
   "level": "A2",
   "expl": "Máy móc: と."
  },
  {
   "kind": "fill",
   "q": "まっすぐ いく___、えきが あります。",
   "hint": "kana hoặc romaji",
   "accept": [
    "と",
    "to"
   ],
   "level": "A2",
   "expl": "Chỉ đường: と."
  },
  {
   "kind": "fill",
   "q": "はやく いかない___、おくれます。",
   "hint": "kana hoặc romaji",
   "accept": [
    "と",
    "to"
   ],
   "level": "A2",
   "expl": "V ない + と."
  },
  {
   "kind": "fill",
   "q": "まどを あける___、ゆきが ふっていました。",
   "hint": "kana hoặc romaji",
   "accept": [
    "と",
    "to"
   ],
   "level": "B1",
   "expl": "Phát hiện: V る + と + た."
  },
  {
   "kind": "fill",
   "q": "おさけを のむ___、かおが あかくなります。",
   "hint": "kana hoặc romaji",
   "accept": [
    "と",
    "to"
   ],
   "level": "A2",
   "expl": "Quy luật."
  },
  {
   "kind": "fill",
   "q": "うちに かえる___、すぐ シャワーを あびます。",
   "hint": "kana hoặc romaji",
   "accept": [
    "と",
    "to"
   ],
   "level": "A2",
   "expl": "Thói quen."
  },
  {
   "kind": "choose",
   "q": "「〜と」thể hiện",
   "right": "kết quả tự nhiên, quy luật",
   "wrong": [
    "ý chí",
    "ước muốn",
    "mệnh lệnh"
   ],
   "level": "A2",
   "expl": "と = tất yếu."
  },
  {
   "kind": "choose",
   "q": "Vế sau của と KHÔNG dùng",
   "right": "ý chí (rủ, nhờ)",
   "wrong": [
    "kết quả",
    "trạng thái",
    "phát hiện"
   ],
   "level": "A2",
   "expl": "Không dùng 〜ましょう, 〜てください."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "このボタンを おすと、みずが でます",
   "wrong": [
    "このボタンを おすと、みずを だしましょう",
    "このボタンを おすと、みずを ください",
    "このボタンを おすと、みずが でて ください"
   ],
   "level": "A2",
   "expl": "と + kết quả tự nhiên."
  },
  {
   "kind": "choose",
   "q": "Câu nào sai?",
   "right": "やすいと、かいましょう",
   "wrong": [
    "やすいと、かいます",
    "やすかったら、かいましょう",
    "やすければ、かいましょう"
   ],
   "level": "A2",
   "expl": "と không đi với rủ rê."
  },
  {
   "kind": "choose",
   "q": "Chỉ đường",
   "right": "まっすぐ いくと、えきが あります",
   "wrong": [
    "まっすぐ いけば、えきを みましょう",
    "まっすぐ いったら、えきを いきます",
    "まっすぐ いくなら、えきを ください"
   ],
   "level": "A2",
   "expl": "と chỉ đường."
  },
  {
   "kind": "choose",
   "q": "Phủ định",
   "right": "いかないと、おくれます",
   "wrong": [
    "いかなくと、おくれます",
    "いかなかっと、おくれます",
    "いくないと、おくれます"
   ],
   "level": "A2",
   "expl": "V ない + と."
  },
  {
   "kind": "choose",
   "q": "Khi mở cửa thì thấy tuyết",
   "right": "まどを あけると、ゆきでした",
   "wrong": [
    "まどを あければ、ゆきでした",
    "まどを あけたら、ゆきでした",
    "まどを あけるなら、ゆきでした"
   ],
   "level": "B1",
   "expl": "と (phát hiện)."
  },
  {
   "kind": "choose",
   "q": "「春になると」nghĩa là",
   "right": "Hễ đến mùa xuân thì",
   "wrong": [
    "Nếu mùa xuân đến",
    "Nếu muốn là xuân",
    "Vì mùa xuân"
   ],
   "level": "A2",
   "expl": "と."
  }
 ],
 "ja-jok-ba": [
  {
   "kind": "fill",
   "q": "いく → いけ___",
   "hint": "kana hoặc romaji",
   "accept": [
    "ば",
    "ba"
   ],
   "level": "A2",
   "expl": "u → e + ば."
  },
  {
   "kind": "fill",
   "q": "たべる → たべれ___",
   "hint": "kana hoặc romaji",
   "accept": [
    "ば",
    "ba"
   ],
   "level": "A2",
   "expl": "る → れば."
  },
  {
   "kind": "fill",
   "q": "する → ___",
   "hint": "kana hoặc romaji",
   "accept": [
    "すれば",
    "sureba"
   ],
   "level": "A2",
   "expl": "する → すれば."
  },
  {
   "kind": "fill",
   "q": "くる → ___",
   "hint": "kana hoặc romaji",
   "accept": [
    "くれば",
    "kureba"
   ],
   "level": "A2",
   "expl": "くる → くれば."
  },
  {
   "kind": "fill",
   "q": "やすい → やす___ かいます。",
   "hint": "kana hoặc romaji",
   "accept": [
    "ければ",
    "kereba"
   ],
   "level": "A2",
   "expl": "い → ければ."
  },
  {
   "kind": "fill",
   "q": "べんきょうし___、ごうかくできません。(nếu không học)",
   "hint": "kana hoặc romaji",
   "accept": [
    "なければ",
    "nakereba"
   ],
   "level": "A2",
   "expl": "〜なければ."
  },
  {
   "kind": "fill",
   "q": "じかんが あれ___、いきます。",
   "hint": "kana hoặc romaji",
   "accept": [
    "ば",
    "ba"
   ],
   "level": "A2",
   "expl": "ある → あれば."
  },
  {
   "kind": "choose",
   "q": "Thể ば của「のむ」là",
   "right": "のめば",
   "wrong": [
    "のむば",
    "のみば",
    "のもば"
   ],
   "level": "A2",
   "expl": "む → め."
  },
  {
   "kind": "choose",
   "q": "Thể ば của「かく」là",
   "right": "かけば",
   "wrong": [
    "かくば",
    "かきば",
    "かかば"
   ],
   "level": "A2",
   "expl": "く → け."
  },
  {
   "kind": "choose",
   "q": "Thể ば của「みる」là",
   "right": "みれば",
   "wrong": [
    "みけば",
    "みるば",
    "みなば"
   ],
   "level": "A2",
   "expl": "る → れば."
  },
  {
   "kind": "choose",
   "q": "Thể ば của「たかい」là",
   "right": "たかければ",
   "wrong": [
    "たかいば",
    "たかくば",
    "たかかれば"
   ],
   "level": "A2",
   "expl": "い → ければ."
  },
  {
   "kind": "choose",
   "q": "Thể ば của「ない」là",
   "right": "なければ",
   "wrong": [
    "ないば",
    "なくば",
    "なかれば"
   ],
   "level": "A2",
   "expl": "ない → なければ."
  },
  {
   "kind": "choose",
   "q": "Gợi ý cách làm",
   "right": "きけば いいです",
   "wrong": [
    "きいたら いいです",
    "きくと いいです",
    "ききます いいです"
   ],
   "level": "A2",
   "expl": "〜ばいい."
  },
  {
   "kind": "choose",
   "q": "ば nhấn",
   "right": "điều kiện cần",
   "wrong": [
    "ý chí mạnh",
    "quá khứ",
    "mệnh lệnh"
   ],
   "level": "A2",
   "expl": "ば nhấn điều kiện."
  },
  {
   "kind": "choose",
   "q": "Cách nói “nếu không hiểu thì hỏi thầy”",
   "right": "わからなければ、せんせいに きけば いいです",
   "wrong": [
    "わからないば、せんせいに きいば いいです",
    "わからなくば、せんせいを きく いいです",
    "わからない、せんせいで きけ"
   ],
   "level": "A2",
   "expl": "なければ + ばいい."
  }
 ],
 "ja-jok-tara": [
  {
   "kind": "fill",
   "q": "あめが ふっ___、いきません。",
   "hint": "kana hoặc romaji",
   "accept": [
    "たら",
    "tara"
   ],
   "level": "A2",
   "expl": "V た + ら."
  },
  {
   "kind": "fill",
   "q": "うちに つい___、でんわを してください。",
   "hint": "kana hoặc romaji",
   "accept": [
    "たら",
    "tara"
   ],
   "level": "A2",
   "expl": "V た + ら."
  },
  {
   "kind": "fill",
   "q": "やすかっ___、かいます。",
   "hint": "kana hoặc romaji",
   "accept": [
    "たら",
    "tara"
   ],
   "level": "A2",
   "expl": "A かった + ら."
  },
  {
   "kind": "fill",
   "q": "ひま___たら、きてください。(nếu rảnh)",
   "hint": "kana hoặc romaji",
   "accept": [
    "だっ",
    "da"
   ],
   "level": "A2",
   "expl": "ひまだったら."
  },
  {
   "kind": "fill",
   "q": "いかなかっ___、こうかいします。",
   "hint": "kana hoặc romaji",
   "accept": [
    "たら",
    "tara"
   ],
   "level": "A2",
   "expl": "なかった + ら."
  },
  {
   "kind": "fill",
   "q": "しごとが おわっ___、しょくじに いきましょう。",
   "hint": "kana hoặc romaji",
   "accept": [
    "たら",
    "tara"
   ],
   "level": "A2",
   "expl": "たら cho phép rủ."
  },
  {
   "kind": "fill",
   "q": "もし たからくじが あたっ___、なにを しますか。",
   "hint": "kana hoặc romaji",
   "accept": [
    "たら",
    "tara"
   ],
   "level": "A2",
   "expl": "もし〜たら."
  },
  {
   "kind": "choose",
   "q": "たら cho phép vế sau",
   "right": "dùng ý chí (rủ, nhờ)",
   "wrong": [
    "chỉ dùng kết quả",
    "không dùng ý chí",
    "chỉ phủ định"
   ],
   "level": "A2",
   "expl": "たら linh hoạt."
  },
  {
   "kind": "choose",
   "q": "Thể たら của「かう」là",
   "right": "かったら",
   "wrong": [
    "かうたら",
    "かいたら",
    "かんだら"
   ],
   "level": "A2",
   "expl": "V た + ら."
  },
  {
   "kind": "choose",
   "q": "Thể たら của「のむ」là",
   "right": "のんだら",
   "wrong": [
    "のったら",
    "のみたら",
    "のむたら"
   ],
   "level": "A2",
   "expl": "V た + ら."
  },
  {
   "kind": "choose",
   "q": "Thể たら của「たかい」là",
   "right": "たかかったら",
   "wrong": [
    "たかいたら",
    "たかくたら",
    "たかたら"
   ],
   "level": "A2",
   "expl": "かったら."
  },
  {
   "kind": "choose",
   "q": "Thể たら của「しずか」là",
   "right": "しずかだったら",
   "wrong": [
    "しずかかったら",
    "しずかたら",
    "しずかのたら"
   ],
   "level": "A2",
   "expl": "だったら."
  },
  {
   "kind": "choose",
   "q": "Không biết dùng mẫu nào thì dùng",
   "right": "たら",
   "wrong": [
    "と",
    "ば",
    "なら"
   ],
   "level": "A2",
   "expl": "Rộng nhất."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "うちに ついたら、でんわを してください",
   "wrong": [
    "うちに つくと、でんわを してください",
    "うちに つけば、でんわを してください",
    "うちに つくなら、でんわを してください"
   ],
   "level": "A2",
   "expl": "たら cho nhờ."
  },
  {
   "kind": "choose",
   "q": "もし〜たら",
   "right": "もし ひまだったら、きてください",
   "wrong": [
    "もし ひまだと、きてください",
    "もし ひまで、きてください",
    "もし ひまいたら、きてください"
   ],
   "level": "A2",
   "expl": "もし〜たら."
  }
 ],
 "ja-jok-nara": [
  {
   "kind": "fill",
   "q": "にほんへ いく___、きょうとが いいですよ。",
   "hint": "kana hoặc romaji",
   "accept": [
    "なら",
    "nara"
   ],
   "level": "A2",
   "expl": "Nhận thông tin: なら."
  },
  {
   "kind": "fill",
   "q": "すし___、あの みせが おいしいです。(chủ đề)",
   "hint": "kana hoặc romaji",
   "accept": [
    "なら",
    "nara"
   ],
   "level": "A2",
   "expl": "N なら."
  },
  {
   "kind": "fill",
   "q": "ひま___、てつだってください。",
   "hint": "kana hoặc romaji",
   "accept": [
    "なら",
    "nara"
   ],
   "level": "A2",
   "expl": "な-adj なら."
  },
  {
   "kind": "fill",
   "q": "たべない___、すてますよ。",
   "hint": "kana hoặc romaji",
   "accept": [
    "なら",
    "nara"
   ],
   "level": "A2",
   "expl": "V ない なら."
  },
  {
   "kind": "fill",
   "q": "おんがく___、わたしに まかせて。",
   "hint": "kana hoặc romaji",
   "accept": [
    "なら",
    "nara"
   ],
   "level": "A2",
   "expl": "N なら."
  },
  {
   "kind": "fill",
   "q": "いく___、わたしも いきます。",
   "hint": "kana hoặc romaji",
   "accept": [
    "なら",
    "nara"
   ],
   "level": "A2",
   "expl": "V る + なら."
  },
  {
   "kind": "fill",
   "q": "ねむい___、ねたほうが いいです。",
   "hint": "kana hoặc romaji",
   "accept": [
    "なら",
    "nara"
   ],
   "level": "A2",
   "expl": "A い + なら."
  },
  {
   "kind": "choose",
   "q": "「なら」dùng khi",
   "right": "đáp lại thông tin người khác",
   "wrong": [
    "nói quy luật tự nhiên",
    "nói quá khứ",
    "nói thói quen"
   ],
   "level": "A2",
   "expl": "なら = nếu như (như bạn nói)."
  },
  {
   "kind": "choose",
   "q": "A: らいしゅう おおさかへ いきます。B: ___、たこやきを たべてください。",
   "right": "おおさかへ いくなら",
   "wrong": [
    "おおさかへ いけば",
    "おおさかへ いくと",
    "おおさかへ いった"
   ],
   "level": "A2",
   "expl": "なら."
  },
  {
   "kind": "choose",
   "q": "Gắn なら vào",
   "right": "thể thường (な/N bỏ だ)",
   "wrong": [
    "thể ます",
    "thể て",
    "thể ば"
   ],
   "level": "A2",
   "expl": "Thể thường."
  },
  {
   "kind": "choose",
   "q": "Quy luật tự nhiên nên dùng",
   "right": "と",
   "wrong": [
    "なら",
    "たら",
    "ば"
   ],
   "level": "A2",
   "expl": "と."
  },
  {
   "kind": "choose",
   "q": "Điều kiện cần, gợi ý",
   "right": "ば",
   "wrong": [
    "と",
    "なら",
    "から"
   ],
   "level": "A2",
   "expl": "ば."
  },
  {
   "kind": "choose",
   "q": "Rộng nhất, vế sau tự do",
   "right": "たら",
   "wrong": [
    "と",
    "ば",
    "なら"
   ],
   "level": "A2",
   "expl": "たら."
  },
  {
   "kind": "choose",
   "q": "Nói “nếu nói về camera thì …”",
   "right": "カメラなら、あきはばらが いいですよ",
   "wrong": [
    "カメラたら、あきはばらが いいですよ",
    "カメラと、あきはばらが いいですよ",
    "カメラば、あきはばらが いいですよ"
   ],
   "level": "A2",
   "expl": "N なら."
  },
  {
   "kind": "choose",
   "q": "Muốn nói “nếu sắp đi Nhật thì …”, câu nào SAI?",
   "right": "にほんへ いったなら、きょうとが いいです",
   "wrong": [
    "にほんへ いくなら、きょうとが いいですよ",
    "にほんへ いくなら、わたしも いきます",
    "にほんへ いくなら、おみやげを かってきてください"
   ],
   "level": "A2",
   "expl": "なら nhận thông tin sắp tới."
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

const RUSH=[["はるになると", ["ja-jok-to"]], ["ボタンをおすと", ["ja-jok-to"]], ["まっすぐいくと", ["ja-jok-to"]], ["いけば · たべれば", ["ja-jok-ba"]], ["やすければ", ["ja-jok-ba"]], ["なければ", ["ja-jok-ba"]], ["ふったら · かったら", ["ja-jok-tara"]], ["ひまだったら", ["ja-jok-tara"]], ["にほんへいくなら", ["ja-jok-nara"]], ["すしなら", ["ja-jok-nara"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["joken"] = { pool: POOL, types: TYPES, game: {title:"どれ？",desc:"60 giây. Thấy mẫu này, chọn đúng bài",prompt:"Mẫu này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"jaJokenRushBest"} };
})();
