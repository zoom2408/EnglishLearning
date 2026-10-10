/* ja/content/quiz/kanou.js: khả năng, 見える/聞こえる, mệnh lệnh, nghĩa vụ.
   Mixed exercise types: type the answer (fill, kana or romaji accepted,
   retry allowed) or pick one (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "ja-kan-kanou": [
  {
   "kind": "fill",
   "q": "のむ → の___ (khả năng)",
   "hint": "kana hoặc romaji",
   "accept": [
    "める",
    "meru"
   ],
   "level": "A2",
   "expl": "u → e + る."
  },
  {
   "kind": "fill",
   "q": "たべる → たべ___ (khả năng)",
   "hint": "kana hoặc romaji",
   "accept": [
    "られる",
    "rareru"
   ],
   "level": "A2",
   "expl": "る → られる."
  },
  {
   "kind": "fill",
   "q": "する → ___ (khả năng)",
   "hint": "kana hoặc romaji",
   "accept": [
    "できる",
    "dekiru"
   ],
   "level": "A2",
   "expl": "する → できる."
  },
  {
   "kind": "fill",
   "q": "くる → ___ (khả năng)",
   "hint": "kana hoặc romaji",
   "accept": [
    "こられる",
    "korareru"
   ],
   "level": "A2",
   "expl": "くる → こられる."
  },
  {
   "kind": "fill",
   "q": "にほんご___ はなせます。",
   "hint": "kana hoặc romaji",
   "accept": [
    "が",
    "ga"
   ],
   "level": "A2",
   "expl": "Thể khả năng đi với が."
  },
  {
   "kind": "fill",
   "q": "かく → か___ (khả năng)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ける",
    "keru"
   ],
   "level": "A2",
   "expl": "く → ける."
  },
  {
   "kind": "fill",
   "q": "なっとうは たべ___ません。(không ăn được)",
   "hint": "kana hoặc romaji",
   "accept": [
    "られ",
    "rare"
   ],
   "level": "A2",
   "expl": "たべられません."
  },
  {
   "kind": "choose",
   "q": "Thể khả năng của「よむ」là",
   "right": "よめる",
   "wrong": [
    "よまれる",
    "よめられる",
    "よむれる"
   ],
   "level": "A2",
   "expl": "む → める."
  },
  {
   "kind": "choose",
   "q": "Thể khả năng của「あう」là",
   "right": "あえる",
   "wrong": [
    "あわれる",
    "あられる",
    "あうれる"
   ],
   "level": "A2",
   "expl": "う → える."
  },
  {
   "kind": "choose",
   "q": "Thể khả năng của「みる」là",
   "right": "みられる",
   "wrong": [
    "みめる",
    "みえる",
    "みさせる"
   ],
   "level": "A2",
   "expl": "Nhóm 2 + られる."
  },
  {
   "kind": "choose",
   "q": "Thể khả năng của「はなす」là",
   "right": "はなせる",
   "wrong": [
    "はなされる",
    "はなさせる",
    "はなしれる"
   ],
   "level": "A2",
   "expl": "す → せる."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "にほんごが はなせます",
   "wrong": [
    "にほんごを はなせられます",
    "にほんごに はなせます",
    "にほんごで はなせます"
   ],
   "level": "A2",
   "expl": "N が V 可能."
  },
  {
   "kind": "choose",
   "q": "Khả năng của「いく」",
   "right": "いける",
   "wrong": [
    "いかれる",
    "いきられる",
    "いくれる"
   ],
   "level": "A2",
   "expl": "く → ける."
  },
  {
   "kind": "choose",
   "q": "Hỏi “ngày mai đến được không?”",
   "right": "あした こられますか",
   "wrong": [
    "あした くられますか",
    "あした きられますか",
    "あした こさせますか"
   ],
   "level": "A2",
   "expl": "こられる."
  },
  {
   "kind": "choose",
   "q": "Câu nào sai?",
   "right": "えいごを はなしられます",
   "wrong": [
    "えいごが はなせます",
    "えいごを はなせます",
    "えいごが はなせない"
   ],
   "level": "A2",
   "expl": "Nhóm 1 là はなせる."
  }
 ],
 "ja-kan-mieru": [
  {
   "kind": "fill",
   "q": "まどから やまが み___ます。(thấy)",
   "hint": "kana hoặc romaji",
   "accept": [
    "え",
    "e"
   ],
   "level": "A2",
   "expl": "みえる."
  },
  {
   "kind": "fill",
   "q": "となりの おとが き___ます。(nghe thấy)",
   "hint": "kana hoặc romaji",
   "accept": [
    "こえ",
    "koe"
   ],
   "level": "A2",
   "expl": "きこえる."
  },
  {
   "kind": "fill",
   "q": "ここでは ふじさんが み___ます。(có thể xem)",
   "hint": "kana hoặc romaji",
   "accept": [
    "られ",
    "rare"
   ],
   "level": "A2",
   "expl": "みられる."
  },
  {
   "kind": "fill",
   "q": "にほんごが はなせる___になりました。",
   "hint": "kana hoặc romaji",
   "accept": [
    "ように",
    "youni",
    "yōni"
   ],
   "level": "B1",
   "expl": "ようになる."
  },
  {
   "kind": "fill",
   "q": "としを とって、み___ なくなりました。",
   "hint": "kana hoặc romaji",
   "accept": [
    "え",
    "e"
   ],
   "level": "B1",
   "expl": "みえなくなる."
  },
  {
   "kind": "fill",
   "q": "こえが きこえ___ なりました。(không nghe được nữa)",
   "hint": "kana hoặc romaji",
   "accept": [
    "なく",
    "naku"
   ],
   "level": "B1",
   "expl": "〜なくなる."
  },
  {
   "kind": "fill",
   "q": "まいにち れんしゅうして およげる___ なりました。",
   "hint": "kana hoặc romaji",
   "accept": [
    "ように",
    "youni",
    "yōni"
   ],
   "level": "B1",
   "expl": "ようになる."
  },
  {
   "kind": "choose",
   "q": "「やまが みえます」nghĩa là",
   "right": "Núi hiện ra trước mắt",
   "wrong": [
    "Tôi cố nhìn núi",
    "Núi bị che",
    "Tôi sắp xem núi"
   ],
   "level": "A2",
   "expl": "tự nhiên thấy."
  },
  {
   "kind": "choose",
   "q": "Nghe thấy tiếng chim (không chủ ý)",
   "right": "とりの こえが きこえます",
   "wrong": [
    "とりの こえを ききます",
    "とりの こえが ききます",
    "とりの こえに きこえます"
   ],
   "level": "A2",
   "expl": "きこえる."
  },
  {
   "kind": "choose",
   "q": "Có cơ hội xem phim ở đây",
   "right": "ここで えいがが みられます",
   "wrong": [
    "ここで えいがが みえます",
    "ここで えいがを みえます",
    "ここで えいがが みます"
   ],
   "level": "A2",
   "expl": "みられる."
  },
  {
   "kind": "choose",
   "q": "「ようになりました」nghĩa là",
   "right": "trở nên có thể",
   "wrong": [
    "không còn",
    "đã định",
    "đã thử"
   ],
   "level": "B1",
   "expl": "ようになる."
  },
  {
   "kind": "choose",
   "q": "「なくなりました」nghĩa là",
   "right": "không còn nữa",
   "wrong": [
    "bắt đầu được",
    "đã thử",
    "sẽ làm"
   ],
   "level": "B1",
   "expl": "なくなる."
  },
  {
   "kind": "choose",
   "q": "Hỏi “có thấy không?”",
   "right": "みえますか",
   "wrong": [
    "みられますか",
    "みさせますか",
    "みますか"
   ],
   "level": "A2",
   "expl": "みえる."
  },
  {
   "kind": "choose",
   "q": "「ようになる」khác「ようにする」ở",
   "right": "なる là kết quả đã đến, する là cố gắng",
   "wrong": [
    "Không khác",
    "なる là cố gắng",
    "する là quá khứ"
   ],
   "level": "B1",
   "expl": "phân biệt."
  },
  {
   "kind": "choose",
   "q": "Cách nói “tôi đã bơi được rồi”",
   "right": "およげるように なりました",
   "wrong": [
    "およげないように なりました",
    "およぐように なりました",
    "およがれるように なりました"
   ],
   "level": "B1",
   "expl": "可能 + ようになる."
  }
 ],
 "ja-kan-meirei": [
  {
   "kind": "fill",
   "q": "いく → ___ (mệnh lệnh)",
   "hint": "kana hoặc romaji",
   "accept": [
    "いけ",
    "ike"
   ],
   "level": "A2",
   "expl": "u → e."
  },
  {
   "kind": "fill",
   "q": "たべる → たべ___ (mệnh lệnh)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ろ",
    "ro"
   ],
   "level": "A2",
   "expl": "る → ろ."
  },
  {
   "kind": "fill",
   "q": "する → ___ (mệnh lệnh)",
   "hint": "kana hoặc romaji",
   "accept": [
    "しろ",
    "shiro"
   ],
   "level": "A2",
   "expl": "しろ."
  },
  {
   "kind": "fill",
   "q": "くる → ___ (mệnh lệnh)",
   "hint": "kana hoặc romaji",
   "accept": [
    "こい",
    "koi"
   ],
   "level": "A2",
   "expl": "こい."
  },
  {
   "kind": "fill",
   "q": "はしる___。(cấm chạy)",
   "hint": "kana hoặc romaji",
   "accept": [
    "な",
    "na"
   ],
   "level": "A2",
   "expl": "V る + な."
  },
  {
   "kind": "fill",
   "q": "はやく ねな___。(lịch sự của bố mẹ)",
   "hint": "kana hoặc romaji",
   "accept": [
    "さい",
    "sai"
   ],
   "level": "A2",
   "expl": "〜なさい."
  },
  {
   "kind": "fill",
   "q": "ここで たばこを すうな。→ ここで たばこを すわない___ください。",
   "hint": "kana hoặc romaji",
   "accept": [
    "で",
    "de"
   ],
   "level": "A2",
   "expl": "〜ないでください."
  },
  {
   "kind": "choose",
   "q": "Thể mệnh lệnh của「のむ」là",
   "right": "のめ",
   "wrong": [
    "のみろ",
    "のまれ",
    "のもう"
   ],
   "level": "A2",
   "expl": "む → め."
  },
  {
   "kind": "choose",
   "q": "Thể mệnh lệnh của「みる」là",
   "right": "みろ",
   "wrong": [
    "みれ",
    "みよ",
    "みらせ"
   ],
   "level": "A2",
   "expl": "る → ろ."
  },
  {
   "kind": "choose",
   "q": "Biển báo cấm vào",
   "right": "はいるな",
   "wrong": [
    "はいれ",
    "はいろう",
    "はいって"
   ],
   "level": "A2",
   "expl": "V る + な."
  },
  {
   "kind": "choose",
   "q": "Nghe tự nhiên nhất khi mẹ nhắc con",
   "right": "しゅくだいを しなさい",
   "wrong": [
    "しゅくだいを しろ",
    "しゅくだいを しやがれ",
    "しゅくだいを して"
   ],
   "level": "A2",
   "expl": "〜なさい."
  },
  {
   "kind": "choose",
   "q": "Cổ vũ",
   "right": "がんばれ",
   "wrong": [
    "がんばる",
    "がんばった",
    "がんばって ください"
   ],
   "level": "A2",
   "expl": "がんばれ."
  },
  {
   "kind": "choose",
   "q": "Với đồng nghiệp nên dùng",
   "right": "〜てください",
   "wrong": [
    "〜ろ",
    "〜な",
    "〜しろ"
   ],
   "level": "A2",
   "expl": "Lịch sự."
  },
  {
   "kind": "choose",
   "q": "Thể mệnh lệnh tạo cảm giác",
   "right": "rất mạnh, thẳng",
   "wrong": [
    "rất lịch sự",
    "rất nhẹ nhàng",
    "trung tính"
   ],
   "level": "A2",
   "expl": "Thẳng."
  },
  {
   "kind": "choose",
   "q": "Câu nào sai?",
   "right": "ここで たばこを すうなください",
   "wrong": [
    "ここで たばこを すうな",
    "ここで たばこを すわないでください",
    "ここで たばこを すってはいけません"
   ],
   "level": "A2",
   "expl": "な không đi với ください."
  }
 ],
 "ja-kan-gimu": [
  {
   "kind": "fill",
   "q": "しゅくだいを しなければ___。",
   "hint": "kana hoặc romaji",
   "accept": [
    "なりません",
    "narimasen"
   ],
   "level": "A2",
   "expl": "〜なければなりません."
  },
  {
   "kind": "fill",
   "q": "あした こ___ いいです。(không cần đến)",
   "hint": "kana hoặc romaji",
   "accept": [
    "なくても",
    "nakutemo"
   ],
   "level": "A2",
   "expl": "〜なくてもいい."
  },
  {
   "kind": "fill",
   "q": "はやく ねた___が いいです。(nên)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ほう",
    "hou",
    "hō"
   ],
   "level": "A2",
   "expl": "〜たほうがいい."
  },
  {
   "kind": "fill",
   "q": "よる たべない___が いいです。(không nên)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ほう",
    "hou",
    "hō"
   ],
   "level": "A2",
   "expl": "〜ないほうがいい."
  },
  {
   "kind": "fill",
   "q": "やくそくは まもる___です。(lẽ ra phải)",
   "hint": "kana hoặc romaji",
   "accept": [
    "べき",
    "beki"
   ],
   "level": "B1",
   "expl": "〜べきだ."
  },
  {
   "kind": "fill",
   "q": "てつだって___んです。(muốn người khác làm)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ほしい",
    "hoshii"
   ],
   "level": "B1",
   "expl": "〜てほしい."
  },
  {
   "kind": "fill",
   "q": "もう かえら___。(phải về rồi, thân mật)",
   "hint": "kana hoặc romaji",
   "accept": [
    "なきゃ",
    "nakya"
   ],
   "level": "B1",
   "expl": "〜なきゃ."
  },
  {
   "kind": "choose",
   "q": "「〜なければなりません」nghĩa là",
   "right": "phải làm",
   "wrong": [
    "không cần làm",
    "nên làm",
    "muốn làm"
   ],
   "level": "A2",
   "expl": "nghĩa vụ."
  },
  {
   "kind": "choose",
   "q": "「〜なくてもいいです」nghĩa là",
   "right": "không cần làm",
   "wrong": [
    "phải làm",
    "không được làm",
    "có thể làm"
   ],
   "level": "A2",
   "expl": "không cần."
  },
  {
   "kind": "choose",
   "q": "Lời khuyên cụ thể",
   "right": "くすりを のんだ ほうが いいです",
   "wrong": [
    "くすりを のむ べきです",
    "くすりを のまなかった",
    "くすりを のみたい"
   ],
   "level": "A2",
   "expl": "V た ほうがいい."
  },
  {
   "kind": "choose",
   "q": "Không nên ăn tối muộn",
   "right": "よる おそく たべない ほうが いいです",
   "wrong": [
    "よる おそく たべた ほうが いいです",
    "よる おそく たべなければ",
    "よる おそく たべては"
   ],
   "level": "A2",
   "expl": "V ない ほうがいい."
  },
  {
   "kind": "choose",
   "q": "Muốn bạn giúp",
   "right": "てつだってほしいです",
   "wrong": [
    "てつだいたいです",
    "てつだうべきです",
    "てつだえます"
   ],
   "level": "B1",
   "expl": "〜てほしい."
  },
  {
   "kind": "choose",
   "q": "「べき」thể hiện",
   "right": "điều nên làm theo đạo lý",
   "wrong": [
    "ý muốn",
    "thói quen",
    "khả năng"
   ],
   "level": "B1",
   "expl": "べき."
  },
  {
   "kind": "choose",
   "q": "Cách nói thân mật “phải đi rồi”",
   "right": "もう いかなきゃ",
   "wrong": [
    "もう いかなければなりません",
    "もう いきなさい",
    "もう いけ"
   ],
   "level": "B1",
   "expl": "〜なきゃ."
  },
  {
   "kind": "choose",
   "q": "Quy định lớp học",
   "right": "しずかに しなければなりません",
   "wrong": [
    "しずかに しなくてもいいです",
    "しずかに したいです",
    "しずかに できます"
   ],
   "level": "A2",
   "expl": "〜なければなりません."
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

const RUSH=[["のめる · たべられる", ["ja-kan-kanou"]], ["できる · こられる", ["ja-kan-kanou"]], ["やまが みえる", ["ja-kan-mieru"]], ["おとが きこえる", ["ja-kan-mieru"]], ["ようになる", ["ja-kan-mieru"]], ["いけ · たべろ", ["ja-kan-meirei"]], ["いくな", ["ja-kan-meirei"]], ["しなさい", ["ja-kan-meirei"]], ["なければならない", ["ja-kan-gimu"]], ["たほうがいい", ["ja-kan-gimu"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["kanou"] = { pool: POOL, types: TYPES, game: {title:"どれ？",desc:"60 giây. Thấy mẫu này, chọn đúng bài",prompt:"Mẫu này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"jaKanouRushBest"} };
})();
