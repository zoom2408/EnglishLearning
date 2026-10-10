/* ja/content/quiz/ayamari.js: lỗi trợ từ, chia từ, thể, từ dễ nhầm, câu.
   Mixed exercise types: type the answer (fill, kana or romaji accepted,
   retry allowed) or pick one (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "ja-aya-joshi": [
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "すしが すきです",
   "wrong": [
    "すしを すきです",
    "すしに すきです",
    "すしで すきです"
   ],
   "level": "A1",
   "expl": "好き đi với が."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "としょかんで べんきょうします",
   "wrong": [
    "としょかんに べんきょうします",
    "としょかんを べんきょうします",
    "としょかんが べんきょうします"
   ],
   "level": "A1",
   "expl": "Nơi hành động: で."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "つくえの うえに ほんが あります",
   "wrong": [
    "つくえの うえで ほんが あります",
    "つくえの うえを ほんが あります",
    "つくえの うえと ほんが あります"
   ],
   "level": "A1",
   "expl": "Tồn tại: に."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "きのう いきました",
   "wrong": [
    "きのうに いきました",
    "きのうで いきました",
    "きのうを いきました"
   ],
   "level": "A1",
   "expl": "きのう không dùng に."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "7じに おきます",
   "wrong": [
    "7じを おきます",
    "7じで おきます",
    "7じが おきます"
   ],
   "level": "A1",
   "expl": "Giờ cụ thể: に."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "でんしゃで いきます",
   "wrong": [
    "でんしゃに いきます",
    "でんしゃを いきます",
    "でんしゃが いきます"
   ],
   "level": "A1",
   "expl": "Phương tiện: で."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "ともだちと いきます",
   "wrong": [
    "ともだちに いきます",
    "ともだちを いきます",
    "ともだちで いきます"
   ],
   "level": "A1",
   "expl": "Cùng: と."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "にほんごが わかります",
   "wrong": [
    "にほんごを わかります",
    "にほんごに わかります",
    "にほんごで わかります"
   ],
   "level": "A1",
   "expl": "わかる: が."
  },
  {
   "kind": "fill",
   "q": "すし___ すきです。",
   "hint": "kana hoặc romaji",
   "accept": [
    "が",
    "ga"
   ],
   "level": "A1",
   "expl": "好き: が."
  },
  {
   "kind": "fill",
   "q": "がっこう___ べんきょうします。(nơi làm)",
   "hint": "kana hoặc romaji",
   "accept": [
    "で",
    "de"
   ],
   "level": "A1",
   "expl": "で."
  },
  {
   "kind": "fill",
   "q": "えいが___ みます。(xem phim)",
   "hint": "kana hoặc romaji",
   "accept": [
    "を",
    "wo",
    "o"
   ],
   "level": "A1",
   "expl": "を."
  },
  {
   "kind": "fill",
   "q": "あした 7じ___ おきます。",
   "hint": "kana hoặc romaji",
   "accept": [
    "に",
    "ni"
   ],
   "level": "A1",
   "expl": "giờ + に."
  }
 ],
 "ja-aya-katsuyo": [
  {
   "kind": "choose",
   "q": "Phủ định của「きれいです」",
   "right": "きれいじゃありません",
   "wrong": [
    "きれいくないです",
    "きれいじゃいです",
    "きれいないです"
   ],
   "level": "A1",
   "expl": "きれい là な."
  },
  {
   "kind": "choose",
   "q": "Phủ định của「いいです」",
   "right": "よくないです",
   "wrong": [
    "いくないです",
    "いいくないです",
    "いいじゃありません"
   ],
   "level": "A1",
   "expl": "いい → よく."
  },
  {
   "kind": "choose",
   "q": "Quá khứ của「いいです」",
   "right": "よかったです",
   "wrong": [
    "いかったです",
    "いいかったです",
    "いいでした"
   ],
   "level": "A1",
   "expl": "よかった."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "ゆうめいな ひと",
   "wrong": [
    "ゆうめい ひと",
    "ゆうめいい ひと",
    "ゆうめいの ひと"
   ],
   "level": "A1",
   "expl": "な + N."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "おおきい いぬ",
   "wrong": [
    "おおきいな いぬ",
    "おおきの いぬ",
    "おおきく いぬ"
   ],
   "level": "A1",
   "expl": "い + N."
  },
  {
   "kind": "choose",
   "q": "Phủ định của「たかい」",
   "right": "たかくない",
   "wrong": [
    "たかいくない",
    "たかじゃない",
    "たかいじゃない"
   ],
   "level": "A1",
   "expl": "い → くない."
  },
  {
   "kind": "choose",
   "q": "Phủ định của「きらい」",
   "right": "きらいじゃありません",
   "wrong": [
    "きらくないです",
    "きらいくないです",
    "きらないです"
   ],
   "level": "A2",
   "expl": "きらい là な."
  },
  {
   "kind": "choose",
   "q": "Câu nào sai?",
   "right": "きれいくないです",
   "wrong": [
    "きれいじゃありません",
    "たかくないです",
    "おいしくないです"
   ],
   "level": "A1",
   "expl": "きれい là な."
  },
  {
   "kind": "fill",
   "q": "この へやは きれい___ありません。",
   "hint": "kana hoặc romaji",
   "accept": [
    "じゃ",
    "ja",
    "では",
    "dewa"
   ],
   "level": "A1",
   "expl": "じゃありません."
  },
  {
   "kind": "fill",
   "q": "てんきは ___ ないです。(không tốt)",
   "hint": "kana hoặc romaji",
   "accept": [
    "よくない",
    "yokunai"
   ],
   "level": "A1",
   "expl": "よくない."
  },
  {
   "kind": "fill",
   "q": "ゆうめい___ ひと",
   "hint": "kana hoặc romaji",
   "accept": [
    "な",
    "na"
   ],
   "level": "A1",
   "expl": "な + N."
  },
  {
   "kind": "fill",
   "q": "きのうは さむ___ です。(đã lạnh)",
   "hint": "kana hoặc romaji",
   "accept": [
    "かった",
    "katta"
   ],
   "level": "A1",
   "expl": "かった."
  }
 ],
 "ja-aya-katachi": [
  {
   "kind": "choose",
   "q": "Thể て của「いく」",
   "right": "いって",
   "wrong": [
    "いきて",
    "いいて",
    "いくて"
   ],
   "level": "A2",
   "expl": "ngoại lệ."
  },
  {
   "kind": "choose",
   "q": "Thể ない của「かう」",
   "right": "かわない",
   "wrong": [
    "かあない",
    "かうない",
    "かないない"
   ],
   "level": "A2",
   "expl": "う → わ."
  },
  {
   "kind": "choose",
   "q": "Thể て của「のむ」",
   "right": "のんで",
   "wrong": [
    "のみて",
    "のって",
    "のいて"
   ],
   "level": "A2",
   "expl": "む → んで."
  },
  {
   "kind": "choose",
   "q": "Thể て của「かえる」",
   "right": "かえって",
   "wrong": [
    "かえて",
    "かえんで",
    "かえいて"
   ],
   "level": "A2",
   "expl": "かえる nhóm 1."
  },
  {
   "kind": "choose",
   "q": "Thể て của「たべる」",
   "right": "たべて",
   "wrong": [
    "たべって",
    "たべんで",
    "たべいて"
   ],
   "level": "A2",
   "expl": "nhóm 2."
  },
  {
   "kind": "choose",
   "q": "Thể た của「いく」",
   "right": "いった",
   "wrong": [
    "いいた",
    "いきた",
    "いくた"
   ],
   "level": "A2",
   "expl": "ngoại lệ."
  },
  {
   "kind": "choose",
   "q": "Thể て của「はなす」",
   "right": "はなして",
   "wrong": [
    "はなって",
    "はないて",
    "はなんで"
   ],
   "level": "A2",
   "expl": "す → して."
  },
  {
   "kind": "choose",
   "q": "Thể て của「およぐ」",
   "right": "およいで",
   "wrong": [
    "およいて",
    "およんで",
    "およって"
   ],
   "level": "A2",
   "expl": "ぐ → いで."
  },
  {
   "kind": "fill",
   "q": "のむ → の___ (thể て)",
   "hint": "kana hoặc romaji",
   "accept": [
    "んで",
    "nde"
   ],
   "level": "A2",
   "expl": "む → んで."
  },
  {
   "kind": "fill",
   "q": "かう → か___ (ない)",
   "hint": "kana hoặc romaji",
   "accept": [
    "わない",
    "wanai"
   ],
   "level": "A2",
   "expl": "う → わない."
  },
  {
   "kind": "fill",
   "q": "いく → ___ (thể て)",
   "hint": "kana hoặc romaji",
   "accept": [
    "いって",
    "itte"
   ],
   "level": "A2",
   "expl": "ngoại lệ."
  },
  {
   "kind": "fill",
   "q": "かえる → かえ___ (thể て)",
   "hint": "kana hoặc romaji",
   "accept": [
    "って",
    "tte"
   ],
   "level": "A2",
   "expl": "る → って."
  }
 ],
 "ja-aya-tsukaiwake": [
  {
   "kind": "choose",
   "q": "Biết người này (Tanaka)",
   "right": "たなかさんを しっています",
   "wrong": [
    "たなかさんが わかります",
    "たなかさんを わかっています",
    "たなかさんが しります"
   ],
   "level": "A2",
   "expl": "知っている."
  },
  {
   "kind": "choose",
   "q": "Hiểu tiếng Nhật",
   "right": "にほんごが わかります",
   "wrong": [
    "にほんごを しっています",
    "にほんごが しります",
    "にほんごに しっています"
   ],
   "level": "A2",
   "expl": "わかる."
  },
  {
   "kind": "choose",
   "q": "Tự nghe thấy tiếng chim",
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
   "q": "Cho bạn mượn sách",
   "right": "ともだちに ほんを かします",
   "wrong": [
    "ともだちに ほんを かります",
    "ともだちを ほんを かします",
    "ともだちで ほんを かします"
   ],
   "level": "A2",
   "expl": "貸す."
  },
  {
   "kind": "choose",
   "q": "Mượn sách của bạn",
   "right": "ともだちに ほんを かります",
   "wrong": [
    "ともだちに ほんを かします",
    "ともだちを ほんを かります",
    "ともだちが ほんを かします"
   ],
   "level": "A2",
   "expl": "借りる."
  },
  {
   "kind": "choose",
   "q": "Thầy dạy học sinh",
   "right": "せんせいが がくせいに おしえます",
   "wrong": [
    "せんせいが がくせいを ならいます",
    "せんせいに がくせいが おしえます",
    "せんせいを がくせいが ならいます"
   ],
   "level": "A2",
   "expl": "教える."
  },
  {
   "kind": "choose",
   "q": "Học trò học từ thầy",
   "right": "がくせいが せんせいに ならいます",
   "wrong": [
    "がくせいが せんせいに おしえます",
    "せんせいが がくせいに ならいます",
    "がくせいを せんせいが ならいます"
   ],
   "level": "A2",
   "expl": "習う."
  },
  {
   "kind": "choose",
   "q": "Muốn nói “tôi không hiểu”",
   "right": "わかりません",
   "wrong": [
    "しっていません",
    "きこえません",
    "みえません"
   ],
   "level": "A2",
   "expl": "わかりません = không hiểu."
  },
  {
   "kind": "fill",
   "q": "たなかさんを ___います。(biết)",
   "hint": "kana hoặc romaji",
   "accept": [
    "しって",
    "shitte"
   ],
   "level": "A2",
   "expl": "知っている."
  },
  {
   "kind": "fill",
   "q": "にほんごが ___ます。(hiểu)",
   "hint": "kana hoặc romaji",
   "accept": [
    "わかり",
    "wakari"
   ],
   "level": "A2",
   "expl": "分かる."
  },
  {
   "kind": "fill",
   "q": "ともだちに ほんを ___ます。(cho mượn)",
   "hint": "kana hoặc romaji",
   "accept": [
    "かし",
    "kashi"
   ],
   "level": "A2",
   "expl": "貸す."
  },
  {
   "kind": "fill",
   "q": "ともだちに ほんを ___ます。(đi mượn)",
   "hint": "kana hoặc romaji",
   "accept": [
    "かり",
    "kari"
   ],
   "level": "A2",
   "expl": "借りる."
  }
 ],
 "ja-aya-bunmatsu": [
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "わたしは がっこうへ いきます",
   "wrong": [
    "わたしは いきます がっこうへ",
    "いきます わたしは がっこうへ",
    "わたしは へ がっこう いきます"
   ],
   "level": "A1",
   "expl": "Động từ cuối câu."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "れいぞうこには なにも ありません",
   "wrong": [
    "れいぞうこには なにも あります",
    "れいぞうこには なにが ありません の",
    "れいぞうこ なにも が ありません"
   ],
   "level": "A1",
   "expl": "なにも + phủ định."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "へやには だれも いません",
   "wrong": [
    "へやには だれも います",
    "へやに だれが いません も",
    "へや だれも が います"
   ],
   "level": "A1",
   "expl": "だれも + phủ định."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "いそがしいから いきません",
   "wrong": [
    "から いそがしい いきません",
    "いそがしい いきません から",
    "いそがしくて から いきません"
   ],
   "level": "A1",
   "expl": "lý do + から."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "たかいですけど、かいます",
   "wrong": [
    "たかいですけど かいません から",
    "たかいです から、かいません けど",
    "けど たかいです、かいます"
   ],
   "level": "A2",
   "expl": "けど = nhưng."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "わたしの ほん",
   "wrong": [
    "わたし ほん の",
    "ほん わたしの",
    "の わたし ほん"
   ],
   "level": "A1",
   "expl": "N の N."
  },
  {
   "kind": "fill",
   "q": "れいぞうこには なに___ ありません。",
   "hint": "kana hoặc romaji",
   "accept": [
    "も",
    "mo"
   ],
   "level": "A1",
   "expl": "なにも + phủ định."
  },
  {
   "kind": "fill",
   "q": "へやには だれ___ いません。",
   "hint": "kana hoặc romaji",
   "accept": [
    "も",
    "mo"
   ],
   "level": "A1",
   "expl": "だれも + phủ định."
  },
  {
   "kind": "fill",
   "q": "いそがしい___、いきません。",
   "hint": "kana hoặc romaji",
   "accept": [
    "から",
    "kara"
   ],
   "level": "A1",
   "expl": "から."
  },
  {
   "kind": "fill",
   "q": "たかいですけど、___ます。(vẫn mua)",
   "hint": "kana hoặc romaji",
   "accept": [
    "かい",
    "kai"
   ],
   "level": "A2",
   "expl": "かいます."
  },
  {
   "kind": "fill",
   "q": "わたし___ ほん",
   "hint": "kana hoặc romaji",
   "accept": [
    "の",
    "no"
   ],
   "level": "A1",
   "expl": "sở hữu."
  },
  {
   "kind": "fill",
   "q": "わたしは まいにち コーヒーを のみ___。",
   "hint": "kana hoặc romaji",
   "accept": [
    "ます",
    "masu"
   ],
   "level": "A1",
   "expl": "Động từ cuối."
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

const RUSH=[["すしが すき", ["ja-aya-joshi"]], ["がっこうで べんきょう", ["ja-aya-joshi"]], ["きのう いきました", ["ja-aya-joshi"]], ["きれいじゃありません", ["ja-aya-katsuyo"]], ["よくない", ["ja-aya-katsuyo"]], ["ゆうめいな ひと", ["ja-aya-katsuyo"]], ["いって · かわない", ["ja-aya-katachi"]], ["のんで · かえって", ["ja-aya-katachi"]], ["しっています · わかります", ["ja-aya-tsukaiwake"]], ["かします · かります", ["ja-aya-tsukaiwake"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["ayamari"] = { pool: POOL, types: TYPES, game: {title:"どれ？",desc:"60 giây. Thấy mẫu này, chọn đúng bài",prompt:"Mẫu này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"jaAyamariRushBest"} };
})();
