/* ja/content/quiz/futsukei.js: thể thường, ない, た, たい, ことができる, たことがある.
   Mixed exercise types: type the answer (fill, kana or romaji accepted,
   retry allowed) or pick one (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "ja-fut-jisho": [
  {
   "kind": "fill",
   "q": "たべます → たべ___ (thể thường)",
   "hint": "kana hoặc romaji",
   "accept": [
    "る",
    "ru"
   ],
   "level": "A2",
   "expl": "ます → る (nhóm 2)."
  },
  {
   "kind": "fill",
   "q": "のみます → の___ (thể thường)",
   "hint": "kana hoặc romaji",
   "accept": [
    "む",
    "mu"
   ],
   "level": "A2",
   "expl": "Nhóm 1: i → u."
  },
  {
   "kind": "fill",
   "q": "します → ___ (thể thường)",
   "hint": "kana hoặc romaji",
   "accept": [
    "する",
    "suru"
   ],
   "level": "A2",
   "expl": "します → する."
  },
  {
   "kind": "fill",
   "q": "きます → ___ (thể thường)",
   "hint": "kana hoặc romaji",
   "accept": [
    "くる",
    "kuru"
   ],
   "level": "A2",
   "expl": "きます → くる."
  },
  {
   "kind": "fill",
   "q": "がくせいです → がくせい___ (thường)",
   "hint": "kana hoặc romaji",
   "accept": [
    "だ",
    "da"
   ],
   "level": "A2",
   "expl": "です → だ."
  },
  {
   "kind": "fill",
   "q": "しずかです → しずか___",
   "hint": "kana hoặc romaji",
   "accept": [
    "だ",
    "da"
   ],
   "level": "A2",
   "expl": "な-adj + だ."
  },
  {
   "kind": "fill",
   "q": "かいます → か___ (thể thường)",
   "hint": "kana hoặc romaji",
   "accept": [
    "う",
    "u"
   ],
   "level": "A2",
   "expl": "Nhóm 1: い → う."
  },
  {
   "kind": "choose",
   "q": "Thể thường của「いきます」là",
   "right": "いく",
   "wrong": [
    "いきる",
    "いか",
    "いって"
   ],
   "level": "A2",
   "expl": "Nhóm 1: き → く."
  },
  {
   "kind": "choose",
   "q": "Hỏi thân mật “đi không?”",
   "right": "いくの?",
   "wrong": [
    "いきますの?",
    "いくます?",
    "いきるか?"
   ],
   "level": "A2",
   "expl": "V + の?"
  },
  {
   "kind": "choose",
   "q": "Thể thường của「みます」là",
   "right": "みる",
   "wrong": [
    "みむ",
    "みす",
    "みく"
   ],
   "level": "A2",
   "expl": "Nhóm 2."
  },
  {
   "kind": "choose",
   "q": "Thể thường của「かいます」là",
   "right": "かう",
   "wrong": [
    "かる",
    "かく",
    "かむ"
   ],
   "level": "A2",
   "expl": "い → う."
  },
  {
   "kind": "choose",
   "q": "Thể từ điển được dùng để",
   "right": "tra từ điển / nói thường",
   "wrong": [
    "lịch sự",
    "kính ngữ",
    "chia quá khứ"
   ],
   "level": "A2",
   "expl": "辞書形."
  },
  {
   "kind": "choose",
   "q": "Thể thường dùng với",
   "right": "bạn bè, gia đình",
   "wrong": [
    "cấp trên",
    "khách hàng",
    "người lạ"
   ],
   "level": "A2",
   "expl": "Thân mật."
  },
  {
   "kind": "choose",
   "q": "Câu nào là thể thường?",
   "right": "あした がっこうへ いく",
   "wrong": [
    "あした がっこうへ いきます",
    "あした がっこうへ いきました",
    "あした がっこうへ いきません"
   ],
   "level": "A2",
   "expl": "いく."
  },
  {
   "kind": "choose",
   "q": "Thể thường của「しずかです」là",
   "right": "しずかだ",
   "wrong": [
    "しずかい",
    "しずかる",
    "しずか です"
   ],
   "level": "A2",
   "expl": "Tính từ な + だ."
  }
 ],
 "ja-fut-nai": [
  {
   "kind": "fill",
   "q": "のむ → の___ (ない)",
   "hint": "kana hoặc romaji",
   "accept": [
    "まない",
    "manai"
   ],
   "level": "A2",
   "expl": "u → a + ない."
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
   "q": "たべる → たべ___",
   "hint": "kana hoặc romaji",
   "accept": [
    "ない",
    "nai"
   ],
   "level": "A2",
   "expl": "Nhóm 2: bỏ る + ない."
  },
  {
   "kind": "fill",
   "q": "する → ___",
   "hint": "kana hoặc romaji",
   "accept": [
    "しない",
    "shinai"
   ],
   "level": "A2",
   "expl": "する → しない."
  },
  {
   "kind": "fill",
   "q": "くる → ___",
   "hint": "kana hoặc romaji",
   "accept": [
    "こない",
    "konai"
   ],
   "level": "A2",
   "expl": "くる → こない."
  },
  {
   "kind": "fill",
   "q": "たべない → ___ (quá khứ)",
   "hint": "kana hoặc romaji",
   "accept": [
    "たべなかった",
    "tabenakatta"
   ],
   "level": "A2",
   "expl": "ない → なかった."
  },
  {
   "kind": "fill",
   "q": "きのう がっこうへ いか___。(không đi)",
   "hint": "kana hoặc romaji",
   "accept": [
    "なかった",
    "nakatta"
   ],
   "level": "A2",
   "expl": "いかなかった."
  },
  {
   "kind": "choose",
   "q": "Thể ない của「かく」là",
   "right": "かかない",
   "wrong": [
    "かくない",
    "かきない",
    "かけない"
   ],
   "level": "A2",
   "expl": "く → か + ない."
  },
  {
   "kind": "choose",
   "q": "Thể ない của「はなす」là",
   "right": "はなさない",
   "wrong": [
    "はなしない",
    "はなすない",
    "はなせない"
   ],
   "level": "A2",
   "expl": "す → さ + ない."
  },
  {
   "kind": "choose",
   "q": "Thể ない của「あう」là",
   "right": "あわない",
   "wrong": [
    "ああない",
    "あうない",
    "あえない"
   ],
   "level": "A2",
   "expl": "う → わ + ない."
  },
  {
   "kind": "choose",
   "q": "Thể ない của「いる」(có mặt) là",
   "right": "いない",
   "wrong": [
    "いらない",
    "いるない",
    "いなかった"
   ],
   "level": "A2",
   "expl": "Nhóm 2."
  },
  {
   "kind": "choose",
   "q": "Thể ない của「ある」là",
   "right": "ない",
   "wrong": [
    "あらない",
    "あるない",
    "あらなかった"
   ],
   "level": "A2",
   "expl": "Ngoại lệ."
  },
  {
   "kind": "choose",
   "q": "Quá khứ của「いかない」là",
   "right": "いかなかった",
   "wrong": [
    "いかないだった",
    "いかなくた",
    "いかなかたった"
   ],
   "level": "A2",
   "expl": "〜なかった."
  },
  {
   "kind": "choose",
   "q": "Đừng làm (nhờ)",
   "right": "みないで ください",
   "wrong": [
    "みなくて ください",
    "みないを ください",
    "みらないで ください"
   ],
   "level": "A2",
   "expl": "〜ないでください."
  },
  {
   "kind": "choose",
   "q": "Phải làm",
   "right": "いかなければ ならない",
   "wrong": [
    "いかないば ならない",
    "いかなくて なる",
    "いかない ならない"
   ],
   "level": "B1",
   "expl": "〜なければならない."
  }
 ],
 "ja-fut-ta": [
  {
   "kind": "fill",
   "q": "のむ → の___ (thể た)",
   "hint": "kana hoặc romaji",
   "accept": [
    "んだ",
    "nda"
   ],
   "level": "A2",
   "expl": "む → んだ."
  },
  {
   "kind": "fill",
   "q": "かく → か___ (thể た)",
   "hint": "kana hoặc romaji",
   "accept": [
    "いた",
    "ita"
   ],
   "level": "A2",
   "expl": "く → いた."
  },
  {
   "kind": "fill",
   "q": "かう → か___ (thể た)",
   "hint": "kana hoặc romaji",
   "accept": [
    "った",
    "tta"
   ],
   "level": "A2",
   "expl": "う → った."
  },
  {
   "kind": "fill",
   "q": "はなす → はな___ (thể た)",
   "hint": "kana hoặc romaji",
   "accept": [
    "した",
    "shita"
   ],
   "level": "A2",
   "expl": "す → した."
  },
  {
   "kind": "fill",
   "q": "たべる → たべ___ (thể た)",
   "hint": "kana hoặc romaji",
   "accept": [
    "た",
    "ta"
   ],
   "level": "A2",
   "expl": "Nhóm 2."
  },
  {
   "kind": "fill",
   "q": "いく → ___ (thể た)",
   "hint": "kana hoặc romaji",
   "accept": [
    "いった",
    "itta"
   ],
   "level": "A2",
   "expl": "いく ngoại lệ."
  },
  {
   "kind": "fill",
   "q": "ふじさんに のぼっ___ことが あります。",
   "hint": "kana hoặc romaji",
   "accept": [
    "た",
    "ta"
   ],
   "level": "A2",
   "expl": "V た + ことがある."
  },
  {
   "kind": "choose",
   "q": "Thể た của「あそぶ」là",
   "right": "あそんだ",
   "wrong": [
    "あそった",
    "あそいた",
    "あそした"
   ],
   "level": "A2",
   "expl": "ぶ → んだ."
  },
  {
   "kind": "choose",
   "q": "Thể た của「する」là",
   "right": "した",
   "wrong": [
    "すた",
    "しった",
    "しいた"
   ],
   "level": "A2",
   "expl": "する → した."
  },
  {
   "kind": "choose",
   "q": "Thể た của「くる」là",
   "right": "きた",
   "wrong": [
    "くた",
    "こた",
    "きいた"
   ],
   "level": "A2",
   "expl": "くる → きた."
  },
  {
   "kind": "choose",
   "q": "Thể た của「およぐ」là",
   "right": "およいだ",
   "wrong": [
    "およいた",
    "およんだ",
    "およった"
   ],
   "level": "A2",
   "expl": "ぐ → いだ."
  },
  {
   "kind": "choose",
   "q": "Nên làm",
   "right": "はやく ねた ほうが いい",
   "wrong": [
    "はやく ねます ほうが いい",
    "はやく ねて ほうが いい",
    "はやく ねた が いい"
   ],
   "level": "B1",
   "expl": "V た + ほうがいい."
  },
  {
   "kind": "choose",
   "q": "Từng đi Nhật",
   "right": "にほんへ いった ことが あります",
   "wrong": [
    "にほんへ いく ことが あります",
    "にほんへ いきます ことが あります",
    "にほんへ いって ことが あります"
   ],
   "level": "A2",
   "expl": "V た + ことがある."
  },
  {
   "kind": "choose",
   "q": "Quá khứ thường của「たべる」là",
   "right": "たべた",
   "wrong": [
    "たべった",
    "たべて",
    "たべんだ"
   ],
   "level": "A2",
   "expl": "る → た."
  },
  {
   "kind": "choose",
   "q": "Thể た của「まつ」là",
   "right": "まった",
   "wrong": [
    "まいた",
    "まんだ",
    "ました"
   ],
   "level": "A2",
   "expl": "つ → った."
  }
 ],
 "ja-fut-tai": [
  {
   "kind": "fill",
   "q": "にほんへ いき___です。(muốn đi)",
   "hint": "kana hoặc romaji",
   "accept": [
    "たい",
    "tai"
   ],
   "level": "A2",
   "expl": "V ます bỏ + たい."
  },
  {
   "kind": "fill",
   "q": "いきたい → いき___ (không muốn)",
   "hint": "kana hoặc romaji",
   "accept": [
    "たくない",
    "takunai"
   ],
   "level": "A2",
   "expl": "〜たくない."
  },
  {
   "kind": "fill",
   "q": "およぐ___できます。(có thể bơi)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ことが",
    "kotoga"
   ],
   "level": "A2",
   "expl": "V る + ことができる."
  },
  {
   "kind": "fill",
   "q": "かんじを よむことが できませ___。",
   "hint": "kana hoặc romaji",
   "accept": [
    "ん",
    "n"
   ],
   "level": "A2",
   "expl": "できません."
  },
  {
   "kind": "fill",
   "q": "にほんへ いった___が あります。",
   "hint": "kana hoặc romaji",
   "accept": [
    "こと",
    "koto"
   ],
   "level": "A2",
   "expl": "〜たことがある."
  },
  {
   "kind": "fill",
   "q": "すしを たべた ことが あり___。(chưa từng)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ません",
    "masen"
   ],
   "level": "A2",
   "expl": "〜たことがありません."
  },
  {
   "kind": "fill",
   "q": "パソコンを かい___です。",
   "hint": "kana hoặc romaji",
   "accept": [
    "たい",
    "tai"
   ],
   "level": "A2",
   "expl": "〜たい."
  },
  {
   "kind": "choose",
   "q": "「たべたい」nghĩa là",
   "right": "muốn ăn",
   "wrong": [
    "đã ăn",
    "có thể ăn",
    "đừng ăn"
   ],
   "level": "A2",
   "expl": "〜たい = muốn."
  },
  {
   "kind": "choose",
   "q": "Phủ định của「いきたい」là",
   "right": "いきたくない",
   "wrong": [
    "いかたくない",
    "いきたない",
    "いきたい ない"
   ],
   "level": "A2",
   "expl": "〜たい chia như tính từ い."
  },
  {
   "kind": "choose",
   "q": "Có thể nói tiếng Nhật",
   "right": "にほんごを はなす ことが できます",
   "wrong": [
    "にほんごを はなした ことが できます",
    "にほんごを はなして ことが できます",
    "にほんごを はなさない ことが できます"
   ],
   "level": "A2",
   "expl": "V る + ことができる."
  },
  {
   "kind": "choose",
   "q": "Từng đến Hokkaido",
   "right": "ほっかいどうに いった ことが あります",
   "wrong": [
    "ほっかいどうに いく ことが あります",
    "ほっかいどうに いって ことが あります",
    "ほっかいどうに いきます ことが あります"
   ],
   "level": "A2",
   "expl": "V た + ことがある."
  },
  {
   "kind": "choose",
   "q": "「たべたことがありません」nghĩa là",
   "right": "Chưa từng ăn",
   "wrong": [
    "Không muốn ăn",
    "Không thể ăn",
    "Đã ăn rồi"
   ],
   "level": "A2",
   "expl": "〜たことがない."
  },
  {
   "kind": "choose",
   "q": "〜たい dùng cho",
   "right": "ngôi thứ nhất",
   "wrong": [
    "ngôi thứ ba tự nhiên",
    "văn bản pháp luật",
    "chỉ trẻ em"
   ],
   "level": "A2",
   "expl": "Muốn của người nói."
  },
  {
   "kind": "choose",
   "q": "Câu nào sai?",
   "right": "わたしは すしを たべるたいです",
   "wrong": [
    "わたしは すしを たべたいです",
    "わたしは すしを たべたくないです",
    "すしを たべたいですか"
   ],
   "level": "A2",
   "expl": "〜たい gắn vào ます bỏ ます."
  },
  {
   "kind": "choose",
   "q": "Chưa từng làm gì được nói là",
   "right": "〜たことがない",
   "wrong": [
    "〜たいことがない",
    "〜ないことができる",
    "〜ことがたい"
   ],
   "level": "A2",
   "expl": "V た + ことがない."
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

const RUSH=[["たべる · のむ", ["ja-fut-jisho"]], ["だ · です", ["ja-fut-jisho"]], ["のまない · かわない", ["ja-fut-nai"]], ["しない · こない", ["ja-fut-nai"]], ["たべなかった", ["ja-fut-nai"]], ["のんだ · いった", ["ja-fut-ta"]], ["たほうがいい", ["ja-fut-ta"]], ["たべたい", ["ja-fut-tai"]], ["およぐことができる", ["ja-fut-tai"]], ["いったことがある", ["ja-fut-tai"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["futsukei"] = { pool: POOL, types: TYPES, game: {title:"どれ？",desc:"60 giây. Thấy mẫu này, chọn đúng bài",prompt:"Mẫu này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"jaFutsukeiRushBest"} };
})();
