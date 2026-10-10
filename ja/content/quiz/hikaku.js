/* ja/content/quiz/hikaku.js: so sánh và ý định.
   Mixed exercise types: type the answer (fill, kana or romaji accepted,
   retry allowed) or pick one (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "ja-hik-yori": [
  {
   "kind": "fill",
   "q": "でんしゃは バス___ はやいです。(hơn)",
   "hint": "kana hoặc romaji",
   "accept": [
    "より",
    "yori"
   ],
   "level": "A2",
   "expl": "より = hơn."
  },
  {
   "kind": "fill",
   "q": "でんしゃ___ ほうが はやいです。",
   "hint": "kana hoặc romaji",
   "accept": [
    "の",
    "no"
   ],
   "level": "A2",
   "expl": "N の ほうが."
  },
  {
   "kind": "fill",
   "q": "でんしゃと バスと ___ が はやいですか。",
   "hint": "kana hoặc romaji",
   "accept": [
    "どちら",
    "dochira"
   ],
   "level": "A2",
   "expl": "どちら = cái nào trong hai."
  },
  {
   "kind": "fill",
   "q": "さかなの ほうが ___ です。(thích hơn)",
   "hint": "kana hoặc romaji",
   "accept": [
    "すき",
    "suki"
   ],
   "level": "A2",
   "expl": "すきです."
  },
  {
   "kind": "fill",
   "q": "___ すきです。(cả hai)",
   "hint": "kana hoặc romaji",
   "accept": [
    "どちらも",
    "dochiramo"
   ],
   "level": "A2",
   "expl": "どちらも."
  },
  {
   "kind": "fill",
   "q": "これは ___ やすいです。(rẻ hơn nhiều)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ずっと",
    "zutto"
   ],
   "level": "B1",
   "expl": "ずっと = hơn hẳn."
  },
  {
   "kind": "fill",
   "q": "とうきょうは おおさか___ おおきいです。",
   "hint": "kana hoặc romaji",
   "accept": [
    "より",
    "yori"
   ],
   "level": "A2",
   "expl": "より."
  },
  {
   "kind": "choose",
   "q": "「AはBより〜」nghĩa là",
   "right": "A hơn B",
   "wrong": [
    "B hơn A",
    "A giống B",
    "A là B"
   ],
   "level": "A2",
   "expl": "より = so với."
  },
  {
   "kind": "choose",
   "q": "Hỏi chọn một trong hai",
   "right": "どちらが すきですか",
   "wrong": [
    "どれが すきですか",
    "だれが すきですか",
    "なにが すきですか"
   ],
   "level": "A2",
   "expl": "どちら cho hai."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "でんしゃは バスより はやいです",
   "wrong": [
    "でんしゃは バスが はやいです",
    "でんしゃを バスより はやいです",
    "でんしゃは バスで はやいです"
   ],
   "level": "A2",
   "expl": "N より."
  },
  {
   "kind": "choose",
   "q": "Cách trả lời",
   "right": "さかなの ほうが すきです",
   "wrong": [
    "さかなが ほうが すきです",
    "さかなを ほうが すきです",
    "さかなで ほうが すきです"
   ],
   "level": "A2",
   "expl": "N の ほうが."
  },
  {
   "kind": "choose",
   "q": "Trả lời không chọn được",
   "right": "どちらも すきです",
   "wrong": [
    "どれも きらいです",
    "だれも すきです",
    "どこも すきです"
   ],
   "level": "A2",
   "expl": "どちらも."
  },
  {
   "kind": "choose",
   "q": "「ずっと」trong so sánh nghĩa là",
   "right": "hơn hẳn",
   "wrong": [
    "bằng nhau",
    "không bằng",
    "hơi hơn"
   ],
   "level": "B1",
   "expl": "ずっと = nhiều."
  },
  {
   "kind": "choose",
   "q": "So sánh ba thứ trở lên dùng",
   "right": "いちばん",
   "wrong": [
    "どちら",
    "より",
    "ほうが"
   ],
   "level": "A2",
   "expl": "いちばん."
  },
  {
   "kind": "choose",
   "q": "Câu nào sai?",
   "right": "ひこうきは バスが はやいです",
   "wrong": [
    "ひこうきは バスより はやいです",
    "ひこうきの ほうが はやいです",
    "ひこうきは ずっと はやいです"
   ],
   "level": "A2",
   "expl": "Cái thua đi với より."
  }
 ],
 "ja-hik-ichiban": [
  {
   "kind": "fill",
   "q": "くだものの なかで なにが ___ すきですか。",
   "hint": "kana hoặc romaji",
   "accept": [
    "いちばん",
    "ichiban"
   ],
   "level": "A2",
   "expl": "いちばん."
  },
  {
   "kind": "fill",
   "q": "クラスで ___ が いちばん せが たかいですか。(ai)",
   "hint": "kana hoặc romaji",
   "accept": [
    "だれ",
    "dare"
   ],
   "level": "A2",
   "expl": "だれ."
  },
  {
   "kind": "fill",
   "q": "にほんで ___ が いちばん さむいですか。(đâu)",
   "hint": "kana hoặc romaji",
   "accept": [
    "どこ",
    "doko"
   ],
   "level": "A2",
   "expl": "どこ."
  },
  {
   "kind": "fill",
   "q": "わたしたちは ___ かいしゃで はたらいています。(cùng)",
   "hint": "kana hoặc romaji",
   "accept": [
    "おなじ",
    "onaji"
   ],
   "level": "A2",
   "expl": "おなじ."
  },
  {
   "kind": "fill",
   "q": "これは それと ___ です。(giống)",
   "hint": "kana hoặc romaji",
   "accept": [
    "おなじ",
    "onaji"
   ],
   "level": "A2",
   "expl": "おなじ."
  },
  {
   "kind": "fill",
   "q": "きょうは きのう___ あつくないです。",
   "hint": "kana hoặc romaji",
   "accept": [
    "ほど",
    "hodo"
   ],
   "level": "B1",
   "expl": "ほど〜ない."
  },
  {
   "kind": "fill",
   "q": "かぞくの なかで ちちが ___ せが たかいです。",
   "hint": "kana hoặc romaji",
   "accept": [
    "いちばん",
    "ichiban"
   ],
   "level": "A2",
   "expl": "いちばん."
  },
  {
   "kind": "choose",
   "q": "「いちばん」nghĩa là",
   "right": "nhất",
   "wrong": [
    "hơn",
    "bằng",
    "rất ít"
   ],
   "level": "A2",
   "expl": "いちばん = number one."
  },
  {
   "kind": "choose",
   "q": "Trong lớp, hỏi ai cao nhất",
   "right": "だれが いちばん せが たかいですか",
   "wrong": [
    "どちらが いちばん せが たかいですか",
    "だれの いちばん せが たかい",
    "だれが せが いちばん たかいが"
   ],
   "level": "A2",
   "expl": "だれが いちばん."
  },
  {
   "kind": "choose",
   "q": "「ほど」đi với",
   "right": "phủ định",
   "wrong": [
    "khẳng định",
    "mệnh lệnh",
    "mời"
   ],
   "level": "B1",
   "expl": "A は B ほど〜ない."
  },
  {
   "kind": "choose",
   "q": "Giống nhau",
   "right": "おなじ",
   "wrong": [
    "ちがう",
    "より",
    "ほど"
   ],
   "level": "A2",
   "expl": "おなじ."
  },
  {
   "kind": "choose",
   "q": "Trước danh từ, おなじ",
   "right": "không thêm な",
   "wrong": [
    "thêm な",
    "thêm の",
    "thêm に"
   ],
   "level": "A2",
   "expl": "おなじ かいしゃ."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "わたしは あきが いちばん すきです",
   "wrong": [
    "わたしは あきが すきが いちばん",
    "わたしは あきを いちばんで すき",
    "わたしは あきと いちばん すき"
   ],
   "level": "A2",
   "expl": "N が いちばん adj."
  },
  {
   "kind": "choose",
   "q": "Hỏi vật nào nhất (3+ lựa chọn)",
   "right": "どれが いちばん すきですか",
   "wrong": [
    "どちらが いちばん すきですか",
    "どこが いちばん すきですか",
    "だれが いちばん すきですか"
   ],
   "level": "A2",
   "expl": "どれ."
  },
  {
   "kind": "choose",
   "q": "「Aは Bほど あつくない」nghĩa là",
   "right": "A không nóng bằng B",
   "wrong": [
    "A nóng hơn B",
    "A bằng B",
    "A rất nóng"
   ],
   "level": "B1",
   "expl": "ほど〜ない."
  }
 ],
 "ja-hik-tsumori": [
  {
   "kind": "fill",
   "q": "らいねん にほんへ いく___です。(định)",
   "hint": "kana hoặc romaji",
   "accept": [
    "つもり",
    "tsumori"
   ],
   "level": "A2",
   "expl": "つもり."
  },
  {
   "kind": "fill",
   "q": "たばこは すわない___です。",
   "hint": "kana hoặc romaji",
   "accept": [
    "つもり",
    "tsumori"
   ],
   "level": "A2",
   "expl": "V ない + つもり."
  },
  {
   "kind": "fill",
   "q": "らいしゅう しゅっちょうする___です。(kế hoạch)",
   "hint": "kana hoặc romaji",
   "accept": [
    "よてい",
    "yotei",
    "予定"
   ],
   "level": "A2",
   "expl": "よてい."
  },
  {
   "kind": "fill",
   "q": "まだ きめて___。(chưa quyết)",
   "hint": "kana hoặc romaji",
   "accept": [
    "いません",
    "imasen"
   ],
   "level": "A2",
   "expl": "まだ〜ていません."
  },
  {
   "kind": "fill",
   "q": "なにを する つもり___か。",
   "hint": "kana hoặc romaji",
   "accept": [
    "です",
    "desu"
   ],
   "level": "A2",
   "expl": "つもりですか."
  },
  {
   "kind": "fill",
   "q": "あしたは かいぎ___ よていです。",
   "hint": "kana hoặc romaji",
   "accept": [
    "の",
    "no"
   ],
   "level": "A2",
   "expl": "N の よてい."
  },
  {
   "kind": "fill",
   "q": "ひこうきは 3じに つく___です。",
   "hint": "kana hoặc romaji",
   "accept": [
    "よてい",
    "yotei"
   ],
   "level": "A2",
   "expl": "Lịch cố định."
  },
  {
   "kind": "choose",
   "q": "「つもり」thể hiện",
   "right": "ý định của người nói",
   "wrong": [
    "thói quen",
    "quá khứ",
    "lệnh"
   ],
   "level": "A2",
   "expl": "つもり = intention."
  },
  {
   "kind": "choose",
   "q": "Định không đi",
   "right": "いかない つもりです",
   "wrong": [
    "いくつもりじゃありません",
    "いかなかった つもりです",
    "いきたくない つもり"
   ],
   "level": "A2",
   "expl": "V ない + つもり."
  },
  {
   "kind": "choose",
   "q": "Kế hoạch đã sắp xếp (chuyến bay)",
   "right": "よてい",
   "wrong": [
    "つもり",
    "でしょう",
    "ことがある"
   ],
   "level": "A2",
   "expl": "よてい = scheduled."
  },
  {
   "kind": "choose",
   "q": "Hỏi ý định kỳ nghỉ",
   "right": "なつやすみに なにを する つもりですか",
   "wrong": [
    "なつやすみに なにを した つもりですか",
    "なつやすみを なにを するか",
    "なつやすみで なにが する"
   ],
   "level": "A2",
   "expl": "V る + つもり."
  },
  {
   "kind": "choose",
   "q": "「まだ きめていません」nghĩa là",
   "right": "Chưa quyết định",
   "wrong": [
    "Đã quyết",
    "Không biết ai",
    "Sẽ quyết"
   ],
   "level": "A2",
   "expl": "まだ〜ていません."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "らいねん にほんへ いく つもりです",
   "wrong": [
    "らいねん にほんへ いった つもりです",
    "らいねん にほんへ いって つもりです",
    "らいねん にほんへ いきます つもりです"
   ],
   "level": "A2",
   "expl": "V る + つもり."
  },
  {
   "kind": "choose",
   "q": "Lịch họp ngày mai",
   "right": "あしたは かいぎの よていです",
   "wrong": [
    "あしたは かいぎの つもりです",
    "あしたは かいぎを つもり",
    "あしたは かいぎに よてい"
   ],
   "level": "A2",
   "expl": "N の よてい."
  },
  {
   "kind": "choose",
   "q": "つもり khác よてい ở",
   "right": "つもり là ý định cá nhân, よてい là lịch",
   "wrong": [
    "つもり là lịch cố định",
    "Không khác",
    "よてい chỉ cho người nói"
   ],
   "level": "A2",
   "expl": "phân biệt."
  }
 ],
 "ja-hik-ishi": [
  {
   "kind": "fill",
   "q": "いく → ___ (thể ý chí)",
   "hint": "kana hoặc romaji",
   "accept": [
    "いこう",
    "ikou",
    "ikō"
   ],
   "level": "A2",
   "expl": "く → こう."
  },
  {
   "kind": "fill",
   "q": "たべる → たべ___ (thể ý chí)",
   "hint": "kana hoặc romaji",
   "accept": [
    "よう",
    "you",
    "yō"
   ],
   "level": "A2",
   "expl": "る → よう."
  },
  {
   "kind": "fill",
   "q": "する → ___ (thể ý chí)",
   "hint": "kana hoặc romaji",
   "accept": [
    "しよう",
    "shiyou",
    "shiyō"
   ],
   "level": "A2",
   "expl": "しよう."
  },
  {
   "kind": "fill",
   "q": "くる → ___ (thể ý chí)",
   "hint": "kana hoặc romaji",
   "accept": [
    "こよう",
    "koyou",
    "koyō"
   ],
   "level": "A2",
   "expl": "こよう."
  },
  {
   "kind": "fill",
   "q": "のむ → ___ (thể ý chí)",
   "hint": "kana hoặc romaji",
   "accept": [
    "のもう",
    "nomou",
    "nomō"
   ],
   "level": "A2",
   "expl": "む → もう."
  },
  {
   "kind": "fill",
   "q": "まいあさ はしる___ に しました。(tự quyết)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ことに",
    "kotoni"
   ],
   "level": "B1",
   "expl": "ことにする."
  },
  {
   "kind": "fill",
   "q": "らいげつ おおさかへ いく こと___ なりました。(được quyết)",
   "hint": "kana hoặc romaji",
   "accept": [
    "に",
    "ni"
   ],
   "level": "B1",
   "expl": "ことになる."
  },
  {
   "kind": "choose",
   "q": "「いこうと おもいます」nghĩa là",
   "right": "Tôi định đi",
   "wrong": [
    "Tôi đã đi",
    "Tôi không đi",
    "Hãy đi"
   ],
   "level": "A2",
   "expl": "〜(よ)うと思う."
  },
  {
   "kind": "choose",
   "q": "Quyết định tự mình",
   "right": "ことにする",
   "wrong": [
    "ことになる",
    "ことがある",
    "ことができる"
   ],
   "level": "B1",
   "expl": "する = tự quyết."
  },
  {
   "kind": "choose",
   "q": "Quyết định do hoàn cảnh/công ty",
   "right": "ことになる",
   "wrong": [
    "ことにする",
    "ことがない",
    "ことを"
   ],
   "level": "B1",
   "expl": "なる = được quyết."
  },
  {
   "kind": "choose",
   "q": "Thể ý chí của「かう」là",
   "right": "かおう",
   "wrong": [
    "かよう",
    "かう よう",
    "かいよう"
   ],
   "level": "A2",
   "expl": "う → おう."
  },
  {
   "kind": "choose",
   "q": "Thể ý chí của「みる」là",
   "right": "みよう",
   "wrong": [
    "みおう",
    "みるよう",
    "みよ"
   ],
   "level": "A2",
   "expl": "Nhóm 2."
  },
  {
   "kind": "choose",
   "q": "Thông báo công ty chuyển bạn đi Osaka",
   "right": "おおさかへ いく ことに なりました",
   "wrong": [
    "おおさかへ いく ことに しました",
    "おおさかへ いこうと おもいました",
    "おおさかへ いった ことが あります"
   ],
   "level": "B1",
   "expl": "Hoàn cảnh quyết."
  },
  {
   "kind": "choose",
   "q": "Quyết tự mình bỏ ngọt",
   "right": "あまいものを たべない ことに しました",
   "wrong": [
    "あまいものを たべない ことに なりました",
    "あまいものを たべたい ことに",
    "あまいものを たべたことが"
   ],
   "level": "B1",
   "expl": "ことにする."
  },
  {
   "kind": "choose",
   "q": "Thể ý chí còn có nghĩa thân mật",
   "right": "làm nhé / làm nào",
   "wrong": [
    "đừng làm",
    "đã làm",
    "không làm"
   ],
   "level": "A2",
   "expl": "Rủ thân mật."
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

const RUSH=[["AはBより", ["ja-hik-yori"]], ["AのほうがBより", ["ja-hik-yori"]], ["どちらが", ["ja-hik-yori"]], ["いちばん", ["ja-hik-ichiban"]], ["おなじ", ["ja-hik-ichiban"]], ["〜ほど〜ない", ["ja-hik-ichiban"]], ["いくつもり", ["ja-hik-tsumori"]], ["よてい", ["ja-hik-tsumori"]], ["いこう · たべよう", ["ja-hik-ishi"]], ["ことにする / ことになる", ["ja-hik-ishi"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["hikaku"] = { pool: POOL, types: TYPES, game: {title:"どれ？",desc:"60 giây. Thấy mẫu này, chọn đúng bài",prompt:"Mẫu này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"jaHikakuRushBest"} };
})();
