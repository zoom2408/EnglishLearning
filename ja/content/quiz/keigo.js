/* ja/content/quiz/keigo.js: teineigo, sonkeigo, kenjōgo, cụm công sở.
   Mixed exercise types: type the answer (fill, kana or romaji accepted,
   retry allowed) or pick one (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "ja-kei2-teinei": [
  {
   "kind": "fill",
   "q": "こちらが かいぎしつ___。(trang trọng)",
   "hint": "kana hoặc romaji",
   "accept": [
    "でございます",
    "degozaimasu"
   ],
   "level": "B1",
   "expl": "でございます."
  },
  {
   "kind": "fill",
   "q": "メニューが ___。(có, trang trọng)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ございます",
    "gozaimasu"
   ],
   "level": "B1",
   "expl": "ございます."
  },
  {
   "kind": "fill",
   "q": "___ちゃを どうぞ。(trà)",
   "hint": "kana hoặc romaji",
   "accept": [
    "お",
    "o"
   ],
   "level": "A2",
   "expl": "お + từ thuần Nhật."
  },
  {
   "kind": "fill",
   "q": "___かぞくは おげんきですか。",
   "hint": "kana hoặc romaji",
   "accept": [
    "ご",
    "go"
   ],
   "level": "A2",
   "expl": "ご + từ Hán."
  },
  {
   "kind": "fill",
   "q": "えきは どこ___か。(lịch sự)",
   "hint": "kana hoặc romaji",
   "accept": [
    "でしょう",
    "deshou",
    "deshō"
   ],
   "level": "A2",
   "expl": "〜でしょうか."
  },
  {
   "kind": "fill",
   "q": "やまだ___。(nhận điện thoại)",
   "hint": "kana hoặc romaji",
   "accept": [
    "でございます",
    "degozaimasu"
   ],
   "level": "B1",
   "expl": "でございます."
  },
  {
   "kind": "fill",
   "q": "どうぞ ___すわりください。",
   "hint": "kana hoặc romaji",
   "accept": [
    "お",
    "o"
   ],
   "level": "A2",
   "expl": "お + V ます bỏ."
  },
  {
   "kind": "choose",
   "q": "Teineigo cơ bản là",
   "right": "です・ます",
   "wrong": [
    "いらっしゃる",
    "まいる",
    "おっしゃる"
   ],
   "level": "A1",
   "expl": "teineigo."
  },
  {
   "kind": "choose",
   "q": "お dùng với",
   "right": "từ thuần Nhật",
   "wrong": [
    "từ Hán luôn",
    "từ mượn",
    "tên riêng"
   ],
   "level": "A2",
   "expl": "おちゃ."
  },
  {
   "kind": "choose",
   "q": "ご dùng với",
   "right": "từ Hán",
   "wrong": [
    "từ thuần Nhật luôn",
    "chữ kana",
    "trợ từ"
   ],
   "level": "A2",
   "expl": "ごかぞく."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "おちゃを どうぞ",
   "wrong": [
    "ごちゃを どうぞ",
    "おかぞくは げんきですか",
    "ごかねを ください"
   ],
   "level": "A2",
   "expl": "お/ご."
  },
  {
   "kind": "choose",
   "q": "Hỏi lịch sự “mấy vị ạ?”",
   "right": "なんめいさまでしょうか",
   "wrong": [
    "なんにんだ",
    "なんにん?",
    "なんめいさまか"
   ],
   "level": "B1",
   "expl": "〜でしょうか."
  },
  {
   "kind": "choose",
   "q": "「ございます」là dạng của",
   "right": "あります",
   "wrong": [
    "います",
    "します",
    "きます"
   ],
   "level": "B1",
   "expl": "ございます."
  },
  {
   "kind": "choose",
   "q": "Không thêm お/ご vào",
   "right": "hành động của chính mình",
   "wrong": [
    "đồ của khách",
    "đồ của sếp",
    "món ăn"
   ],
   "level": "B1",
   "expl": "không dùng cho mình."
  },
  {
   "kind": "choose",
   "q": "Ngoại lệ thường gặp",
   "right": "おでんわ",
   "wrong": [
    "ごでんわ",
    "おかぞく",
    "ごちゃ"
   ],
   "level": "B1",
   "expl": "お電話."
  }
 ],
 "ja-kei2-sonkei": [
  {
   "kind": "fill",
   "q": "しゃちょうは いま ___。(có mặt, tôn kính)",
   "hint": "kana hoặc romaji",
   "accept": [
    "いらっしゃいます",
    "irasshaimasu"
   ],
   "level": "B1",
   "expl": "いらっしゃる."
  },
  {
   "kind": "fill",
   "q": "せんせいが ___ました。(nói)",
   "hint": "kana hoặc romaji",
   "accept": [
    "おっしゃい",
    "osshai"
   ],
   "level": "B1",
   "expl": "おっしゃる."
  },
  {
   "kind": "fill",
   "q": "どうぞ ___ってください。(ăn)",
   "hint": "kana hoặc romaji",
   "accept": [
    "めしあがっ",
    "meshiagatt"
   ],
   "level": "B1",
   "expl": "めしあがる."
  },
  {
   "kind": "fill",
   "q": "この しりょうを ___ ましたか。(xem)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ごらんになり",
    "goranninari"
   ],
   "level": "B1",
   "expl": "ごらんになる."
  },
  {
   "kind": "fill",
   "q": "なにを ___ますか。(làm, tôn kính)",
   "hint": "kana hoặc romaji",
   "accept": [
    "なさい",
    "nasai"
   ],
   "level": "B1",
   "expl": "なさる."
  },
  {
   "kind": "fill",
   "q": "ぶちょうは もう おかえり___ました。",
   "hint": "kana hoặc romaji",
   "accept": [
    "になり",
    "ninari"
   ],
   "level": "B1",
   "expl": "お V になる."
  },
  {
   "kind": "fill",
   "q": "おなまえは なんと ___ますか。",
   "hint": "kana hoặc romaji",
   "accept": [
    "おっしゃい",
    "osshai"
   ],
   "level": "B1",
   "expl": "おっしゃる."
  },
  {
   "kind": "choose",
   "q": "Sonkeigo dùng cho",
   "right": "hành động của người cần tôn trọng",
   "wrong": [
    "hành động của mình",
    "đồ vật",
    "thời gian"
   ],
   "level": "B1",
   "expl": "tôn kính."
  },
  {
   "kind": "choose",
   "q": "Tôn kính của「いく/くる/いる」",
   "right": "いらっしゃる",
   "wrong": [
    "まいる",
    "いたす",
    "おる"
   ],
   "level": "B1",
   "expl": "いらっしゃる."
  },
  {
   "kind": "choose",
   "q": "Tôn kính của「いう」",
   "right": "おっしゃる",
   "wrong": [
    "もうす",
    "いただく",
    "うかがう"
   ],
   "level": "B1",
   "expl": "おっしゃる."
  },
  {
   "kind": "choose",
   "q": "Tôn kính của「たべる」",
   "right": "めしあがる",
   "wrong": [
    "いただく",
    "たべさせる",
    "たべられる"
   ],
   "level": "B1",
   "expl": "めしあがる."
  },
  {
   "kind": "choose",
   "q": "Tôn kính của「みる」",
   "right": "ごらんになる",
   "wrong": [
    "はいけんする",
    "ごらんする",
    "みいたす"
   ],
   "level": "B1",
   "expl": "ごらんになる."
  },
  {
   "kind": "choose",
   "q": "Mẫu chung sonkeigo",
   "right": "お V ます bỏ + になる",
   "wrong": [
    "お V ます bỏ + する",
    "V ない + なる",
    "V て + ある"
   ],
   "level": "B1",
   "expl": "お〜になる."
  },
  {
   "kind": "choose",
   "q": "Hỏi sếp có ở không",
   "right": "ぶちょうは いらっしゃいますか",
   "wrong": [
    "ぶちょうは まいりますか",
    "ぶちょうは おりますか",
    "ぶちょうは いたしますか"
   ],
   "level": "B1",
   "expl": "sonkeigo."
  },
  {
   "kind": "choose",
   "q": "Mời khách ngồi",
   "right": "どうぞ おすわりに なってください",
   "wrong": [
    "どうぞ おすわりします",
    "どうぞ すわれ",
    "どうぞ すわりいたします"
   ],
   "level": "B1",
   "expl": "お V になって."
  }
 ],
 "ja-kei2-kenjou": [
  {
   "kind": "fill",
   "q": "わたしは たなかと ___。(tự giới thiệu)",
   "hint": "kana hoặc romaji",
   "accept": [
    "もうします",
    "moushimasu",
    "mōshimasu"
   ],
   "level": "B1",
   "expl": "もうす."
  },
  {
   "kind": "fill",
   "q": "あした ___ます。(đến thăm, khiêm)",
   "hint": "kana hoặc romaji",
   "accept": [
    "うかがい",
    "ukagai"
   ],
   "level": "B1",
   "expl": "うかがう."
  },
  {
   "kind": "fill",
   "q": "おかしを ___ました。(đã nhận)",
   "hint": "kana hoặc romaji",
   "accept": [
    "いただき",
    "itadaki"
   ],
   "level": "B1",
   "expl": "いただく."
  },
  {
   "kind": "fill",
   "q": "しりょうを ___ しました。(đã xem)",
   "hint": "kana hoặc romaji",
   "accept": [
    "はいけん",
    "haiken"
   ],
   "level": "B1",
   "expl": "はいけん."
  },
  {
   "kind": "fill",
   "q": "わたしが ___ます。(sẽ làm)",
   "hint": "kana hoặc romaji",
   "accept": [
    "いたし",
    "itashi"
   ],
   "level": "B1",
   "expl": "いたす."
  },
  {
   "kind": "fill",
   "q": "にもつを お___ します。(xách giúp)",
   "hint": "kana hoặc romaji",
   "accept": [
    "もち",
    "mochi"
   ],
   "level": "B1",
   "expl": "お V する."
  },
  {
   "kind": "fill",
   "q": "あとで ___ます。(đi, khiêm)",
   "hint": "kana hoặc romaji",
   "accept": [
    "まいり",
    "mairi"
   ],
   "level": "B1",
   "expl": "まいる."
  },
  {
   "kind": "choose",
   "q": "Kenjōgo dùng cho",
   "right": "hành động của mình với người trên",
   "wrong": [
    "hành động của sếp",
    "đồ vật",
    "thời tiết"
   ],
   "level": "B1",
   "expl": "khiêm nhường."
  },
  {
   "kind": "choose",
   "q": "Khiêm nhường của「いう」",
   "right": "もうす",
   "wrong": [
    "おっしゃる",
    "いらっしゃる",
    "めしあがる"
   ],
   "level": "B1",
   "expl": "もうす."
  },
  {
   "kind": "choose",
   "q": "Khiêm nhường của「もらう」",
   "right": "いただく",
   "wrong": [
    "くださる",
    "おっしゃる",
    "なさる"
   ],
   "level": "B1",
   "expl": "いただく."
  },
  {
   "kind": "choose",
   "q": "Khiêm nhường của「いく/くる」",
   "right": "まいる",
   "wrong": [
    "いらっしゃる",
    "おいでになる",
    "なさる"
   ],
   "level": "B1",
   "expl": "まいる/うかがう."
  },
  {
   "kind": "choose",
   "q": "Khiêm nhường của「する」",
   "right": "いたす",
   "wrong": [
    "なさる",
    "めしあがる",
    "ごらんになる"
   ],
   "level": "B1",
   "expl": "いたす."
  },
  {
   "kind": "choose",
   "q": "Mẫu chung kenjōgo",
   "right": "お V ます bỏ + する",
   "wrong": [
    "お V ます bỏ + になる",
    "V ない + いたす",
    "V て + いらっしゃる"
   ],
   "level": "B1",
   "expl": "お〜する."
  },
  {
   "kind": "choose",
   "q": "Câu nào sai?",
   "right": "しゃちょうが まいります",
   "wrong": [
    "しゃちょうが いらっしゃいます",
    "わたしが まいります",
    "わたしが もうします"
   ],
   "level": "B1",
   "expl": "Hạ người trên là thất lễ."
  },
  {
   "kind": "choose",
   "q": "Cảm ơn khi nhận quà",
   "right": "おみやげを いただき ありがとうございます",
   "wrong": [
    "おみやげを くださいます ありがとう",
    "おみやげを もらう ありがとう",
    "おみやげを めしあがり"
   ],
   "level": "B1",
   "expl": "いただく."
  }
 ],
 "ja-kei2-business": [
  {
   "kind": "fill",
   "q": "___ おせわに なっております。(mở đầu điện thoại)",
   "hint": "kana hoặc romaji",
   "accept": [
    "いつも",
    "itsumo"
   ],
   "level": "B1",
   "expl": "お世話になっております."
  },
  {
   "kind": "fill",
   "q": "___ ですが、もう いちど おねがいします。(xin phép nhờ)",
   "hint": "kana hoặc romaji",
   "accept": [
    "おそれいります",
    "osoreirimasu"
   ],
   "level": "B1",
   "expl": "恐れ入りますが."
  },
  {
   "kind": "fill",
   "q": "かくにんし___ いただけませんか。",
   "hint": "kana hoặc romaji",
   "accept": [
    "て",
    "te"
   ],
   "level": "B1",
   "expl": "〜ていただけませんか."
  },
  {
   "kind": "fill",
   "q": "しょうしょう おまち___。",
   "hint": "kana hoặc romaji",
   "accept": [
    "ください",
    "kudasai"
   ],
   "level": "B1",
   "expl": "少々お待ちください."
  },
  {
   "kind": "fill",
   "q": "もうしわけ___ません。",
   "hint": "kana hoặc romaji",
   "accept": [
    "ござい",
    "gozai"
   ],
   "level": "B1",
   "expl": "申し訳ございません."
  },
  {
   "kind": "fill",
   "q": "しつれい___ます。(kết thúc)",
   "hint": "kana hoặc romaji",
   "accept": [
    "いたし",
    "itashi"
   ],
   "level": "B1",
   "expl": "失礼いたします."
  },
  {
   "kind": "fill",
   "q": "ひきつづき、どうぞ よろしく おねがい___ます。",
   "hint": "kana hoặc romaji",
   "accept": [
    "いたし",
    "itashi"
   ],
   "level": "B1",
   "expl": "お願いいたします."
  },
  {
   "kind": "choose",
   "q": "Mở đầu thư hoặc điện thoại",
   "right": "おせわになっております",
   "wrong": [
    "ごめんなさい",
    "こんばんは",
    "さようなら"
   ],
   "level": "B1",
   "expl": "chào công sở."
  },
  {
   "kind": "choose",
   "q": "Xin phép trước khi nhờ",
   "right": "おそれいりますが",
   "wrong": [
    "ちょっと",
    "すみません ね",
    "おい"
   ],
   "level": "B1",
   "expl": "恐れ入りますが."
  },
  {
   "kind": "choose",
   "q": "Nhờ rất lịch sự",
   "right": "〜ていただけませんか",
   "wrong": [
    "〜てくれ",
    "〜ろ",
    "〜てください ね"
   ],
   "level": "B1",
   "expl": "ていただけませんか."
  },
  {
   "kind": "choose",
   "q": "Nói với khách “xin chờ một chút”",
   "right": "しょうしょう おまちください",
   "wrong": [
    "ちょっと まって",
    "まて",
    "すこし まつ"
   ],
   "level": "B1",
   "expl": "少々お待ちください."
  },
  {
   "kind": "choose",
   "q": "Xin lỗi trang trọng",
   "right": "もうしわけございません",
   "wrong": [
    "ごめん",
    "すまん",
    "わるい"
   ],
   "level": "B1",
   "expl": "申し訳ございません."
  },
  {
   "kind": "choose",
   "q": "Kết thúc điện thoại",
   "right": "しつれいいたします",
   "wrong": [
    "またね",
    "じゃあね",
    "さよなら ね"
   ],
   "level": "B1",
   "expl": "失礼いたします."
  },
  {
   "kind": "choose",
   "q": "Với khách hàng KHÔNG nên nói",
   "right": "ちょっと まってください",
   "wrong": [
    "しょうしょう おまちください",
    "おまたせしました",
    "おそれいります"
   ],
   "level": "B1",
   "expl": "ちょっと quá suồng sã."
  },
  {
   "kind": "choose",
   "q": "Đệm lịch sự trước từ chối",
   "right": "もうしわけございませんが",
   "wrong": [
    "だめです",
    "むりです",
    "いやです"
   ],
   "level": "B1",
   "expl": "đệm."
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

const RUSH=[["でございます", ["ja-kei2-teinei"]], ["お + 和語 · ご + 漢語", ["ja-kei2-teinei"]], ["いらっしゃる", ["ja-kei2-sonkei"]], ["おっしゃる", ["ja-kei2-sonkei"]], ["めしあがる", ["ja-kei2-sonkei"]], ["もうす · まいる", ["ja-kei2-kenjou"]], ["いただく", ["ja-kei2-kenjou"]], ["お持ちします", ["ja-kei2-kenjou"]], ["おせわになっております", ["ja-kei2-business"]], ["ていただけませんか", ["ja-kei2-business"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["keigo"] = { pool: POOL, types: TYPES, game: {title:"どれ？",desc:"60 giây. Thấy mẫu này, chọn đúng bài",prompt:"Mẫu này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"jaKeigoRushBest"} };
})();
