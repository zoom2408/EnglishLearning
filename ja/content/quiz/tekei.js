/* ja/content/quiz/tekei.js: thể て: chia, nhờ/xin phép, ている, nối.
   Mixed exercise types: type the answer (fill, kana or romaji accepted,
   retry allowed) or pick one (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "ja-te-tsukuri": [
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
   "q": "かく → か___ (thể て)",
   "hint": "kana hoặc romaji",
   "accept": [
    "いて",
    "ite"
   ],
   "level": "A2",
   "expl": "く → いて."
  },
  {
   "kind": "fill",
   "q": "かう → か___ (thể て)",
   "hint": "kana hoặc romaji",
   "accept": [
    "って",
    "tte"
   ],
   "level": "A2",
   "expl": "う → って."
  },
  {
   "kind": "fill",
   "q": "はなす → はな___ (thể て)",
   "hint": "kana hoặc romaji",
   "accept": [
    "して",
    "shite"
   ],
   "level": "A2",
   "expl": "す → して."
  },
  {
   "kind": "fill",
   "q": "たべる → たべ___ (thể て)",
   "hint": "kana hoặc romaji",
   "accept": [
    "て",
    "te"
   ],
   "level": "A2",
   "expl": "Nhóm 2: bỏ る + て."
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
   "expl": "いく là ngoại lệ."
  },
  {
   "kind": "fill",
   "q": "およぐ → およ___ (thể て)",
   "hint": "kana hoặc romaji",
   "accept": [
    "いで",
    "ide"
   ],
   "level": "A2",
   "expl": "ぐ → いで."
  },
  {
   "kind": "choose",
   "q": "Thể て của「あそぶ」là",
   "right": "あそんで",
   "wrong": [
    "あそって",
    "あそいで",
    "あそして"
   ],
   "level": "A2",
   "expl": "ぶ → んで."
  },
  {
   "kind": "choose",
   "q": "Thể て của「まつ」là",
   "right": "まって",
   "wrong": [
    "まいて",
    "まんで",
    "まして"
   ],
   "level": "A2",
   "expl": "つ → って."
  },
  {
   "kind": "choose",
   "q": "Thể て của「する」là",
   "right": "して",
   "wrong": [
    "すて",
    "しいて",
    "すって"
   ],
   "level": "A2",
   "expl": "する → して."
  },
  {
   "kind": "choose",
   "q": "Thể て của「くる」là",
   "right": "きて",
   "wrong": [
    "くて",
    "こて",
    "きいて"
   ],
   "level": "A2",
   "expl": "くる → きて."
  },
  {
   "kind": "choose",
   "q": "Thể て của「しぬ」là",
   "right": "しんで",
   "wrong": [
    "しって",
    "しいて",
    "しして"
   ],
   "level": "B1",
   "expl": "ぬ → んで."
  },
  {
   "kind": "choose",
   "q": "Thể て của「かえる」là",
   "right": "かえって",
   "wrong": [
    "かえんで",
    "かえいて",
    "かえて"
   ],
   "level": "A2",
   "expl": "かえる là nhóm 1."
  },
  {
   "kind": "choose",
   "q": "Thể て của「みる」là",
   "right": "みて",
   "wrong": [
    "みって",
    "みいて",
    "みんで"
   ],
   "level": "A2",
   "expl": "Nhóm 2."
  },
  {
   "kind": "choose",
   "q": "Đuôi「ぐ」chia thể て thành",
   "right": "いで",
   "wrong": [
    "いて",
    "んで",
    "って"
   ],
   "level": "A2",
   "expl": "ぐ → いで."
  }
 ],
 "ja-te-irai": [
  {
   "kind": "fill",
   "q": "ここに なまえを かいて___。(nhờ)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ください",
    "kudasai"
   ],
   "level": "A2",
   "expl": "〜てください."
  },
  {
   "kind": "fill",
   "q": "ここに すわって___いいですか。",
   "hint": "kana hoặc romaji",
   "accept": [
    "も",
    "mo"
   ],
   "level": "A2",
   "expl": "〜てもいいですか."
  },
  {
   "kind": "fill",
   "q": "ここで しゃしんを とって___いけません。",
   "hint": "kana hoặc romaji",
   "accept": [
    "は",
    "wa"
   ],
   "level": "A2",
   "expl": "〜てはいけません."
  },
  {
   "kind": "fill",
   "q": "はしらない___ください。(đừng chạy)",
   "hint": "kana hoặc romaji",
   "accept": [
    "で",
    "de"
   ],
   "level": "A2",
   "expl": "〜ないでください."
  },
  {
   "kind": "fill",
   "q": "すみません、てつだって___。(nhờ nhẹ)",
   "hint": "kana hoặc romaji",
   "accept": [
    "くれませんか",
    "kuremasenka"
   ],
   "level": "B1",
   "expl": "〜てくれませんか."
  },
  {
   "kind": "fill",
   "q": "はい、すわっても___です。",
   "hint": "kana hoặc romaji",
   "accept": [
    "いい",
    "ii"
   ],
   "level": "A2",
   "expl": "〜てもいいです = được phép."
  },
  {
   "kind": "fill",
   "q": "ここで タバコを すっては___。",
   "hint": "kana hoặc romaji",
   "accept": [
    "いけません",
    "ikemasen"
   ],
   "level": "A2",
   "expl": "〜てはいけません."
  },
  {
   "kind": "choose",
   "q": "「〜てください」là",
   "right": "nhờ lịch sự",
   "wrong": [
    "cấm",
    "xin phép",
    "khen"
   ],
   "level": "A2",
   "expl": "〜てください."
  },
  {
   "kind": "choose",
   "q": "Xin phép mở cửa sổ",
   "right": "まどを あけても いいですか",
   "wrong": [
    "まどを あけて ください",
    "まどを あけては いけません",
    "まどを あけます か"
   ],
   "level": "A2",
   "expl": "〜てもいいですか."
  },
  {
   "kind": "choose",
   "q": "Biển cấm chụp ảnh",
   "right": "しゃしんを とっては いけません",
   "wrong": [
    "しゃしんを とって ください",
    "しゃしんを とっても いいです",
    "しゃしんを とります"
   ],
   "level": "A2",
   "expl": "〜てはいけません."
  },
  {
   "kind": "choose",
   "q": "Đừng nhìn",
   "right": "みないで ください",
   "wrong": [
    "みて ください",
    "みても いいです",
    "みては ください"
   ],
   "level": "A2",
   "expl": "〜ないでください."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "ここに なまえを かいて ください",
   "wrong": [
    "ここに なまえを かく ください",
    "ここに なまえを かきて ください",
    "ここに なまえを かいで ください"
   ],
   "level": "A2",
   "expl": "V て + ください."
  },
  {
   "kind": "choose",
   "q": "Trả lời xin phép nhẹ nhàng bằng cách từ chối",
   "right": "すみません、ちょっと…",
   "wrong": [
    "いいえ、だめです",
    "はい、どうぞ",
    "いいですよ"
   ],
   "level": "A2",
   "expl": "Từ chối khéo."
  },
  {
   "kind": "choose",
   "q": "「〜てもいいですか」là",
   "right": "xin phép",
   "wrong": [
    "cấm",
    "nhờ vả",
    "rủ rê"
   ],
   "level": "A2",
   "expl": "xin phép."
  },
  {
   "kind": "choose",
   "q": "Cấm hút thuốc",
   "right": "すっては いけません",
   "wrong": [
    "すいませんか",
    "すう ください",
    "すって ください"
   ],
   "level": "A2",
   "expl": "〜てはいけません."
  }
 ],
 "ja-te-iru": [
  {
   "kind": "fill",
   "q": "いま たべて___。(đang ăn)",
   "hint": "kana hoặc romaji",
   "accept": [
    "います",
    "imasu"
   ],
   "level": "A2",
   "expl": "〜ています."
  },
  {
   "kind": "fill",
   "q": "まだ たべて___。(chưa ăn)",
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
   "q": "とうきょうに すんで___。(đang sống)",
   "hint": "kana hoặc romaji",
   "accept": [
    "います",
    "imasu"
   ],
   "level": "A2",
   "expl": "Trạng thái: すんでいます."
  },
  {
   "kind": "fill",
   "q": "けっこんし___。(đã kết hôn)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ています",
    "teimasu"
   ],
   "level": "A2",
   "expl": "けっこんしています = đã có gia đình."
  },
  {
   "kind": "fill",
   "q": "ぎんこうで はたらい___。",
   "hint": "kana hoặc romaji",
   "accept": [
    "ています",
    "teimasu"
   ],
   "level": "A2",
   "expl": "Nghề nghiệp."
  },
  {
   "kind": "fill",
   "q": "あかい セーターを き___。(đang mặc)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ています",
    "teimasu"
   ],
   "level": "A2",
   "expl": "Trạng thái mặc."
  },
  {
   "kind": "fill",
   "q": "たなかさんを し___。(biết)",
   "hint": "kana hoặc romaji",
   "accept": [
    "っています",
    "ttemasu",
    "tteimasu"
   ],
   "level": "B1",
   "expl": "しっています = biết."
  },
  {
   "kind": "choose",
   "q": "「いま あめが ふっています」nghĩa là",
   "right": "Bây giờ đang mưa",
   "wrong": [
    "Mai sẽ mưa",
    "Hôm qua mưa",
    "Mưa đã tạnh"
   ],
   "level": "A2",
   "expl": "〜ています = đang."
  },
  {
   "kind": "choose",
   "q": "「すんでいます」nghĩa là",
   "right": "đang sống (ở)",
   "wrong": [
    "sắp chuyển nhà",
    "đã từng sống",
    "sẽ sống"
   ],
   "level": "A2",
   "expl": "Trạng thái."
  },
  {
   "kind": "choose",
   "q": "Phủ định của「しっています」là",
   "right": "しりません",
   "wrong": [
    "しっていません",
    "しらないます",
    "しりています"
   ],
   "level": "B1",
   "expl": "Biết → しりません."
  },
  {
   "kind": "choose",
   "q": "Hỏi “đang làm gì?”",
   "right": "なにを していますか",
   "wrong": [
    "なにを しますか",
    "なにを しましたか",
    "なにを しろ"
   ],
   "level": "A2",
   "expl": "〜ていますか."
  },
  {
   "kind": "choose",
   "q": "Nghề nghiệp: “làm ở ngân hàng”",
   "right": "ぎんこうで はたらいています",
   "wrong": [
    "ぎんこうで はたらきます",
    "ぎんこうを はたらいます",
    "ぎんこうに はたらく"
   ],
   "level": "A2",
   "expl": "Nghề nghiệp dùng 〜ています."
  },
  {
   "kind": "choose",
   "q": "「けっこんしています」nghĩa là",
   "right": "đã kết hôn",
   "wrong": [
    "sắp kết hôn",
    "đang làm đám cưới",
    "muốn kết hôn"
   ],
   "level": "A2",
   "expl": "Trạng thái."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "まだ たべていません",
   "wrong": [
    "まだ たべません",
    "まだ たべませんでした",
    "まだ たべるです"
   ],
   "level": "A2",
   "expl": "まだ〜ていません."
  },
  {
   "kind": "choose",
   "q": "「まいあさ はしっています」nghĩa là",
   "right": "Mỗi sáng đều chạy bộ",
   "wrong": [
    "Đang chạy bây giờ",
    "Sáng mai sẽ chạy",
    "Chưa chạy"
   ],
   "level": "A2",
   "expl": "Thói quen."
  }
 ],
 "ja-te-renketsu": [
  {
   "kind": "fill",
   "q": "おきて、かおを あらって、がっこうへ いき___。",
   "hint": "kana hoặc romaji",
   "accept": [
    "ます",
    "masu"
   ],
   "level": "A2",
   "expl": "Chỉ động từ cuối chia thể ます."
  },
  {
   "kind": "fill",
   "q": "たべて___ねます。(sau khi ăn)",
   "hint": "kana hoặc romaji",
   "accept": [
    "から",
    "kara"
   ],
   "level": "A2",
   "expl": "〜てから."
  },
  {
   "kind": "fill",
   "q": "たべて___ます。(thử ăn)",
   "hint": "kana hoặc romaji",
   "accept": [
    "み",
    "mi"
   ],
   "level": "B1",
   "expl": "〜てみる."
  },
  {
   "kind": "fill",
   "q": "よやくして___ます。(đặt sẵn)",
   "hint": "kana hoặc romaji",
   "accept": [
    "おき",
    "oki"
   ],
   "level": "B1",
   "expl": "〜ておく."
  },
  {
   "kind": "fill",
   "q": "さいふを わすれて___ました。(lỡ quên)",
   "hint": "kana hoặc romaji",
   "accept": [
    "しまい",
    "shimai"
   ],
   "level": "B1",
   "expl": "〜てしまう."
  },
  {
   "kind": "fill",
   "q": "かって___ます。(mua rồi về)",
   "hint": "kana hoặc romaji",
   "accept": [
    "き",
    "ki"
   ],
   "level": "B1",
   "expl": "〜てくる."
  },
  {
   "kind": "fill",
   "q": "しゅくだいを してから___。(chơi)",
   "hint": "kana hoặc romaji",
   "accept": [
    "あそびます",
    "asobimasu"
   ],
   "level": "A2",
   "expl": "〜てから + hành động."
  },
  {
   "kind": "choose",
   "q": "「たべてから ねます」nghĩa là",
   "right": "Ăn xong rồi ngủ",
   "wrong": [
    "Vừa ăn vừa ngủ",
    "Ngủ rồi ăn",
    "Không ăn mà ngủ"
   ],
   "level": "A2",
   "expl": "〜てから."
  },
  {
   "kind": "choose",
   "q": "Nối nhiều hành động",
   "right": "おきて、たべて、いきます",
   "wrong": [
    "おきます、たべます、いきます",
    "おきて、たべます、いきて",
    "おきる、たべる、いきます"
   ],
   "level": "A2",
   "expl": "Chỉ động từ cuối chia ます."
  },
  {
   "kind": "choose",
   "q": "「たべてみます」nghĩa là",
   "right": "Thử ăn",
   "wrong": [
    "Ăn sẵn",
    "Lỡ ăn",
    "Đã ăn xong"
   ],
   "level": "B1",
   "expl": "〜てみる."
  },
  {
   "kind": "choose",
   "q": "「よやくしておきます」nghĩa là",
   "right": "Đặt sẵn trước",
   "wrong": [
    "Thử đặt",
    "Lỡ đặt",
    "Hủy đặt"
   ],
   "level": "B1",
   "expl": "〜ておく."
  },
  {
   "kind": "choose",
   "q": "「わすれてしまいました」nghĩa là",
   "right": "Lỡ quên mất",
   "wrong": [
    "Cố ý quên",
    "Đang quên",
    "Sẽ quên"
   ],
   "level": "B1",
   "expl": "〜てしまう."
  },
  {
   "kind": "choose",
   "q": "Muốn nói “sau khi ăn rồi ngủ”, câu nào SAI?",
   "right": "たべますから ねます",
   "wrong": [
    "たべてから ねます",
    "たべて ねます",
    "ごはんを たべてから ねます"
   ],
   "level": "A2",
   "expl": "〜ますから = vì."
  },
  {
   "kind": "choose",
   "q": "Thứ tự thể て",
   "right": "chỉ động từ cuối có thì",
   "wrong": [
    "mọi động từ đều có thì",
    "chỉ động từ đầu có thì",
    "không động từ nào có thì"
   ],
   "level": "A2",
   "expl": "Chỉ động từ cuối chia."
  },
  {
   "kind": "choose",
   "q": "「かって かえります」nghĩa là",
   "right": "Mua rồi mang về",
   "wrong": [
    "Mua nhưng không về",
    "Về rồi mua",
    "Không mua"
   ],
   "level": "A2",
   "expl": "〜て + động từ."
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

const RUSH=[["のんで · かいて", ["ja-te-tsukuri"]], ["いって · かって", ["ja-te-tsukuri"]], ["かいてください", ["ja-te-irai"]], ["すわってもいい", ["ja-te-irai"]], ["とってはいけません", ["ja-te-irai"]], ["たべています", ["ja-te-iru"]], ["すんでいます", ["ja-te-iru"]], ["まだ たべていません", ["ja-te-iru"]], ["たべてから", ["ja-te-renketsu"]], ["たべてみる", ["ja-te-renketsu"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["tekei"] = { pool: POOL, types: TYPES, game: {title:"どれ？",desc:"60 giây. Thấy mẫu này, chọn đúng bài",prompt:"Mẫu này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"jaTekeiRushBest"} };
})();
