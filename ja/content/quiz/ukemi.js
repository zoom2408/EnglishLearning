/* ja/content/quiz/ukemi.js: bị động, gây phiền, sai khiến, sai khiến bị động.
   Mixed exercise types: type the answer (fill, kana or romaji accepted,
   retry allowed) or pick one (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "ja-uke-ukemi": [
  {
   "kind": "fill",
   "q": "よぶ → よば___ (bị động)",
   "hint": "kana hoặc romaji",
   "accept": [
    "れる",
    "reru"
   ],
   "level": "A2",
   "expl": "u → a + れる."
  },
  {
   "kind": "fill",
   "q": "みる → み___ (bị động)",
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
   "q": "する → ___ (bị động)",
   "hint": "kana hoặc romaji",
   "accept": [
    "される",
    "sareru"
   ],
   "level": "A2",
   "expl": "される."
  },
  {
   "kind": "fill",
   "q": "くる → ___ (bị động)",
   "hint": "kana hoặc romaji",
   "accept": [
    "こられる",
    "korareru"
   ],
   "level": "A2",
   "expl": "こられる."
  },
  {
   "kind": "fill",
   "q": "わたしは せんせい___ ほめられました。",
   "hint": "kana hoặc romaji",
   "accept": [
    "に",
    "ni"
   ],
   "level": "A2",
   "expl": "Người làm đi với に."
  },
  {
   "kind": "fill",
   "q": "ははに しから___ました。",
   "hint": "kana hoặc romaji",
   "accept": [
    "れ",
    "re"
   ],
   "level": "A2",
   "expl": "しかられました."
  },
  {
   "kind": "fill",
   "q": "この ほんは おおくの ひとに よま___ います。",
   "hint": "kana hoặc romaji",
   "accept": [
    "れて",
    "rete"
   ],
   "level": "A2",
   "expl": "よまれている."
  },
  {
   "kind": "choose",
   "q": "Bị động của「ほめる」là",
   "right": "ほめられる",
   "wrong": [
    "ほめれる",
    "ほまれる",
    "ほめさせる"
   ],
   "level": "A2",
   "expl": "Nhóm 2."
  },
  {
   "kind": "choose",
   "q": "Bị động của「かく」là",
   "right": "かかれる",
   "wrong": [
    "かけられる",
    "かかさせる",
    "かける"
   ],
   "level": "A2",
   "expl": "く → かれる."
  },
  {
   "kind": "choose",
   "q": "Bị động của「たべる」là",
   "right": "たべられる",
   "wrong": [
    "たべれる",
    "たべさせる",
    "たべなれる"
   ],
   "level": "A2",
   "expl": "Nhóm 2."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "わたしは せんせいに ほめられました",
   "wrong": [
    "わたしは せんせいが ほめられました",
    "わたしが せんせいに ほめました",
    "せんせいに わたしを ほめました"
   ],
   "level": "A2",
   "expl": "に chỉ người làm."
  },
  {
   "kind": "choose",
   "q": "Bị động trong tin tức",
   "right": "このビルは きょねん たてられました",
   "wrong": [
    "このビルは きょねん たてさせられました",
    "このビルは きょねん たてました が",
    "このビルを きょねん たてられた"
   ],
   "level": "A2",
   "expl": "Chủ thể không quan trọng."
  },
  {
   "kind": "choose",
   "q": "「ほめられました」nghĩa là",
   "right": "Đã được khen",
   "wrong": [
    "Đã khen",
    "Sẽ khen",
    "Không khen"
   ],
   "level": "A2",
   "expl": "ほめる → ほめられる."
  },
  {
   "kind": "choose",
   "q": "Chủ thể của tác phẩm dùng",
   "right": "によって",
   "wrong": [
    "を",
    "が",
    "で"
   ],
   "level": "B1",
   "expl": "〜によって."
  },
  {
   "kind": "choose",
   "q": "Thể bị động nhóm 1 gắn",
   "right": "〜aれる",
   "wrong": [
    "〜iれる",
    "〜eる",
    "〜oう"
   ],
   "level": "A2",
   "expl": "u → a + れる."
  }
 ],
 "ja-uke-meiwaku": [
  {
   "kind": "fill",
   "q": "きのう あめ___ ふられました。(bị mưa)",
   "hint": "kana hoặc romaji",
   "accept": [
    "に",
    "ni"
   ],
   "level": "B1",
   "expl": "Bị động gây phiền: に."
  },
  {
   "kind": "fill",
   "q": "あかちゃん___ なかれました。(bị em bé khóc)",
   "hint": "kana hoặc romaji",
   "accept": [
    "に",
    "ni"
   ],
   "level": "B1",
   "expl": "に."
  },
  {
   "kind": "fill",
   "q": "さいふ___ ぬすまれました。(bị trộm ví)",
   "hint": "kana hoặc romaji",
   "accept": [
    "を",
    "wo",
    "o"
   ],
   "level": "B1",
   "expl": "N を V 受身."
  },
  {
   "kind": "fill",
   "q": "でんしゃで あし___ ふまれました。",
   "hint": "kana hoặc romaji",
   "accept": [
    "を",
    "wo",
    "o"
   ],
   "level": "B1",
   "expl": "あしを ふまれる."
  },
  {
   "kind": "fill",
   "q": "ともだちに わるぐち___ いわれました。",
   "hint": "kana hoặc romaji",
   "accept": [
    "を",
    "wo",
    "o"
   ],
   "level": "B1",
   "expl": "わるぐちを いわれる."
  },
  {
   "kind": "fill",
   "q": "おとうとに だいじな ほんを すて___ ました。",
   "hint": "kana hoặc romaji",
   "accept": [
    "られ",
    "rare"
   ],
   "level": "B1",
   "expl": "すてられる."
  },
  {
   "kind": "fill",
   "q": "きゅうに ともだちに こ___て、こまりました。",
   "hint": "kana hoặc romaji",
   "accept": [
    "られ",
    "rare"
   ],
   "level": "B1",
   "expl": "こられる (gây phiền)."
  },
  {
   "kind": "choose",
   "q": "Bị động gây phiền diễn tả",
   "right": "người nói bị ảnh hưởng xấu",
   "wrong": [
    "người nói được lợi",
    "hành động của tự nhiên",
    "khả năng"
   ],
   "level": "B1",
   "expl": "間接受身."
  },
  {
   "kind": "choose",
   "q": "Than bị ướt vì mưa",
   "right": "あめに ふられました",
   "wrong": [
    "あめが ふりました",
    "あめを ふりました",
    "あめに ふりました"
   ],
   "level": "B1",
   "expl": "bị mưa."
  },
  {
   "kind": "choose",
   "q": "Than bị lấy mất ví",
   "right": "さいふを とられました",
   "wrong": [
    "さいふが とりました",
    "さいふに とられました",
    "さいふを とりました"
   ],
   "level": "B1",
   "expl": "N を とられる."
  },
  {
   "kind": "choose",
   "q": "Khi có lợi nên dùng",
   "right": "〜てもらう",
   "wrong": [
    "〜られる",
    "〜せる",
    "〜ない"
   ],
   "level": "B1",
   "expl": "Có lợi thì もらう."
  },
  {
   "kind": "choose",
   "q": "「ははに しかられました」nghĩa là",
   "right": "Tôi bị mẹ mắng",
   "wrong": [
    "Tôi mắng mẹ",
    "Mẹ được tôi mắng",
    "Mẹ không mắng"
   ],
   "level": "A2",
   "expl": "bị động."
  },
  {
   "kind": "choose",
   "q": "Muốn nói “tôi bị mẹ mắng”, câu nào SAI?",
   "right": "ははが しかられました",
   "wrong": [
    "ははに しかられました",
    "ははに おこられました",
    "ははに ほめられました"
   ],
   "level": "A2",
   "expl": "Người bị tác động làm chủ ngữ."
  },
  {
   "kind": "choose",
   "q": "Bị đạp chân trên tàu",
   "right": "でんしゃで あしを ふまれました",
   "wrong": [
    "でんしゃで あしが ふまれました",
    "でんしゃで あしに ふまれました",
    "でんしゃを あしで ふまれました"
   ],
   "level": "B1",
   "expl": "あしを ふまれる."
  },
  {
   "kind": "choose",
   "q": "Bị em trai vứt sách",
   "right": "おとうとに ほんを すてられました",
   "wrong": [
    "おとうとが ほんを すてました",
    "おとうとを ほんが すてられました",
    "おとうとで ほんを すてました"
   ],
   "level": "B1",
   "expl": "間接受身."
  }
 ],
 "ja-uke-shieki": [
  {
   "kind": "fill",
   "q": "いく → いか___ (sai khiến)",
   "hint": "kana hoặc romaji",
   "accept": [
    "せる",
    "seru"
   ],
   "level": "A2",
   "expl": "u → a + せる."
  },
  {
   "kind": "fill",
   "q": "たべる → たべ___ (sai khiến)",
   "hint": "kana hoặc romaji",
   "accept": [
    "させる",
    "saseru"
   ],
   "level": "A2",
   "expl": "る → させる."
  },
  {
   "kind": "fill",
   "q": "する → ___ (sai khiến)",
   "hint": "kana hoặc romaji",
   "accept": [
    "させる",
    "saseru"
   ],
   "level": "A2",
   "expl": "する → させる."
  },
  {
   "kind": "fill",
   "q": "くる → ___ (sai khiến)",
   "hint": "kana hoặc romaji",
   "accept": [
    "こさせる",
    "kosaseru"
   ],
   "level": "A2",
   "expl": "こさせる."
  },
  {
   "kind": "fill",
   "q": "ははは こども___ やさいを たべさせました。",
   "hint": "kana hoặc romaji",
   "accept": [
    "に",
    "ni"
   ],
   "level": "A2",
   "expl": "Có tân ngữ → に."
  },
  {
   "kind": "fill",
   "q": "わたしに いか___ ください。(xin cho tôi đi)",
   "hint": "kana hoặc romaji",
   "accept": [
    "せて",
    "sete"
   ],
   "level": "A2",
   "expl": "〜させてください."
  },
  {
   "kind": "fill",
   "q": "しゃちょうは しゃいんを はたらか___ ました。",
   "hint": "kana hoặc romaji",
   "accept": [
    "せ",
    "se"
   ],
   "level": "A2",
   "expl": "はたらかせました."
  },
  {
   "kind": "choose",
   "q": "Sai khiến của「のむ」là",
   "right": "のませる",
   "wrong": [
    "のめせる",
    "のまれる",
    "のみさせる"
   ],
   "level": "A2",
   "expl": "のまーせる."
  },
  {
   "kind": "choose",
   "q": "Sai khiến của「みる」là",
   "right": "みさせる",
   "wrong": [
    "みせる",
    "みられる",
    "みさせられる"
   ],
   "level": "A2",
   "expl": "みさせる."
  },
  {
   "kind": "choose",
   "q": "Sai khiến của「かえる」là",
   "right": "かえらせる",
   "wrong": [
    "かえさせる",
    "かえれる",
    "かえせる"
   ],
   "level": "A2",
   "expl": "かえる là nhóm 1."
  },
  {
   "kind": "choose",
   "q": "Xin phép về sớm lịch sự",
   "right": "はやく かえらせてください",
   "wrong": [
    "はやく かえられてください",
    "はやく かえさせてください",
    "はやく かえってください"
   ],
   "level": "A2",
   "expl": "〜させてください."
  },
  {
   "kind": "choose",
   "q": "Cho phép con chơi",
   "right": "こどもに すきな ことを させます",
   "wrong": [
    "こどもが すきな ことを させられます",
    "こどもを すきな ことを します",
    "こどもで すきな ことを させます"
   ],
   "level": "A2",
   "expl": "させる = cho phép."
  },
  {
   "kind": "choose",
   "q": "「させる」có hai nghĩa",
   "right": "bắt buộc hoặc cho phép",
   "wrong": [
    "bị động hoặc khả năng",
    "quá khứ hoặc tương lai",
    "phủ định hoặc khẳng định"
   ],
   "level": "A2",
   "expl": "使役."
  },
  {
   "kind": "choose",
   "q": "Động từ không tân ngữ, ép buộc dùng",
   "right": "を",
   "wrong": [
    "に",
    "で",
    "が"
   ],
   "level": "B1",
   "expl": "いかせる + を."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "せんせいは がくせいに ほんを よませました",
   "wrong": [
    "せんせいは がくせいを ほんを よませました",
    "せんせいを がくせいに ほんを よみました",
    "せんせいは がくせいで ほんを よませた"
   ],
   "level": "A2",
   "expl": "に + を."
  }
 ],
 "ja-uke-shiekiukemi": [
  {
   "kind": "fill",
   "q": "のむ → の___ (sai khiến bị động)",
   "hint": "kana hoặc romaji",
   "accept": [
    "まされる",
    "masareru",
    "ませられる",
    "maserareru"
   ],
   "level": "B1",
   "expl": "nhóm 1: のまされる."
  },
  {
   "kind": "fill",
   "q": "たべる → たべ___ (sai khiến bị động)",
   "hint": "kana hoặc romaji",
   "accept": [
    "させられる",
    "saserareru"
   ],
   "level": "B1",
   "expl": "させられる."
  },
  {
   "kind": "fill",
   "q": "する → ___ (sai khiến bị động)",
   "hint": "kana hoặc romaji",
   "accept": [
    "させられる",
    "saserareru"
   ],
   "level": "B1",
   "expl": "させられる."
  },
  {
   "kind": "fill",
   "q": "くる → ___ (sai khiến bị động)",
   "hint": "kana hoặc romaji",
   "accept": [
    "こさせられる",
    "kosaserareru"
   ],
   "level": "B1",
   "expl": "こさせられる."
  },
  {
   "kind": "fill",
   "q": "ざんぎょうを さ___ました。(bị bắt làm thêm giờ)",
   "hint": "kana hoặc romaji",
   "accept": [
    "せられ",
    "serare"
   ],
   "level": "B1",
   "expl": "させられる."
  },
  {
   "kind": "fill",
   "q": "じょうしに おさけを のま___ ました。",
   "hint": "kana hoặc romaji",
   "accept": [
    "せられ",
    "serare",
    "され",
    "sare"
   ],
   "level": "B1",
   "expl": "bị ép uống."
  },
  {
   "kind": "fill",
   "q": "ははに やさいを たべ___ ました。(bị ép ăn)",
   "hint": "kana hoặc romaji",
   "accept": [
    "させられ",
    "saserare"
   ],
   "level": "B1",
   "expl": "たべさせられる."
  },
  {
   "kind": "choose",
   "q": "使役受身 diễn tả",
   "right": "bị bắt làm điều không muốn",
   "wrong": [
    "được phép làm",
    "có thể làm",
    "đã làm xong"
   ],
   "level": "B1",
   "expl": "bị ép."
  },
  {
   "kind": "choose",
   "q": "Bị ép làm thêm giờ",
   "right": "ざんぎょうを させられました",
   "wrong": [
    "ざんぎょうを しました",
    "ざんぎょうを させました",
    "ざんぎょうが しられました"
   ],
   "level": "B1",
   "expl": "する → させられる."
  },
  {
   "kind": "choose",
   "q": "Nhóm 1 rút gọn thường là",
   "right": "〜される",
   "wrong": [
    "〜させる",
    "〜れる",
    "〜せる"
   ],
   "level": "B1",
   "expl": "のまされる."
  },
  {
   "kind": "choose",
   "q": "Bị ép học piano hồi nhỏ",
   "right": "こどもの ころ ピアノを ならわされました",
   "wrong": [
    "こどもの ころ ピアノを ならいました",
    "こどもの ころ ピアノを ならえました",
    "こどもの ころ ピアノが ならわれました"
   ],
   "level": "B1",
   "expl": "ならわされる."
  },
  {
   "kind": "choose",
   "q": "Cho phép làm nên dùng",
   "right": "〜させてもらう",
   "wrong": [
    "〜させられる",
    "〜される",
    "〜しろ"
   ],
   "level": "B1",
   "expl": "〜させてもらう."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "わたしは せんせいに しゅくだいを させられました",
   "wrong": [
    "わたしは せんせいを しゅくだいを させられました",
    "わたしが せんせいに しゅくだいを させました",
    "せんせいは わたしに しゅくだいを させられました"
   ],
   "level": "B1",
   "expl": "A は B に V 使役受身."
  },
  {
   "kind": "choose",
   "q": "Bị bắt đi tiệc nhậu",
   "right": "のみかいに いかされました",
   "wrong": [
    "のみかいに いかれました",
    "のみかいに いきました",
    "のみかいを いかされました"
   ],
   "level": "B1",
   "expl": "いかされる."
  },
  {
   "kind": "choose",
   "q": "Thể sai khiến bị động của「いく」",
   "right": "いかされる",
   "wrong": [
    "いきさせる",
    "いかせる",
    "いかれる"
   ],
   "level": "B1",
   "expl": "いく → いかされる."
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

const RUSH=[["よばれる · みられる", ["ja-uke-ukemi"]], ["ほめられる", ["ja-uke-ukemi"]], ["あめに ふられる", ["ja-uke-meiwaku"]], ["さいふを ぬすまれた", ["ja-uke-meiwaku"]], ["いかせる · たべさせる", ["ja-uke-shieki"]], ["させてください", ["ja-uke-shieki"]], ["のまされる", ["ja-uke-shiekiukemi"]], ["ざんぎょうを させられる", ["ja-uke-shiekiukemi"]], ["たべさせられる", ["ja-uke-shiekiukemi"]], ["N に V(受身)", ["ja-uke-ukemi"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["ukemi"] = { pool: POOL, types: TYPES, game: {title:"どれ？",desc:"60 giây. Thấy mẫu này, chọn đúng bài",prompt:"Mẫu này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"jaUkemiRushBest"} };
})();
