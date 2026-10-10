/* ja/content/quiz/joshi.js: trợ từ cơ bản.
   Mixed exercise types: type the answer (fill, kana or romaji accepted,
   retry allowed) or pick one (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "ja-jos-wa-ga-wo": [
  {
   "kind": "fill",
   "q": "わたし___ がくせいです。(chủ đề)",
   "hint": "kana hoặc romaji",
   "accept": [
    "は",
    "wa",
    "ha"
   ],
   "level": "A1",
   "expl": "は đánh dấu chủ đề."
  },
  {
   "kind": "fill",
   "q": "パン___ たべます。",
   "hint": "kana hoặc romaji",
   "accept": [
    "を",
    "o",
    "wo"
   ],
   "level": "A1",
   "expl": "を đánh dấu tân ngữ."
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
   "expl": "好き đi với が."
  },
  {
   "kind": "fill",
   "q": "あめ___ ふっています。",
   "hint": "kana hoặc romaji",
   "accept": [
    "が",
    "ga"
   ],
   "level": "A1",
   "expl": "Hiện tượng mới: が."
  },
  {
   "kind": "fill",
   "q": "だれ___ きましたか。",
   "hint": "kana hoặc romaji",
   "accept": [
    "が",
    "ga"
   ],
   "level": "A1",
   "expl": "Từ để hỏi làm chủ ngữ đi với が."
  },
  {
   "kind": "fill",
   "q": "ねこは すきですが、いぬ___ きらいです。(đối chiếu)",
   "hint": "kana hoặc romaji",
   "accept": [
    "は",
    "wa",
    "ha"
   ],
   "level": "A2",
   "expl": "は dùng để đối chiếu hai vế."
  },
  {
   "kind": "fill",
   "q": "こうえん___ さんぽします。",
   "hint": "kana hoặc romaji",
   "accept": [
    "を",
    "o"
   ],
   "level": "A2",
   "expl": "Đi qua một nơi dùng を."
  },
  {
   "kind": "choose",
   "q": "Tân ngữ trực tiếp đi với",
   "right": "を",
   "wrong": [
    "が",
    "に",
    "で"
   ],
   "level": "A1",
   "expl": "を đánh dấu tân ngữ."
  },
  {
   "kind": "choose",
   "q": "Với 好き, đối tượng đi với",
   "right": "が",
   "wrong": [
    "を",
    "に",
    "へ"
   ],
   "level": "A1",
   "expl": "Tính từ cảm xúc đi với が."
  },
  {
   "kind": "choose",
   "q": "は thường nêu",
   "right": "chủ đề",
   "wrong": [
    "tân ngữ",
    "nơi chốn",
    "phương tiện"
   ],
   "level": "A1",
   "expl": "は = còn về …"
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
   "expl": "わかる đi với が."
  },
  {
   "kind": "choose",
   "q": "Ai là giáo viên? Trả lời nhấn vào Tanaka",
   "right": "たなかさんが せんせいです",
   "wrong": [
    "たなかさんを せんせいです",
    "たなかさんに せんせいです",
    "たなかさんで せんせいです"
   ],
   "level": "A2",
   "expl": "Trả lời cho だれが nên dùng が."
  },
  {
   "kind": "choose",
   "q": "を khi làm trợ từ đọc là",
   "right": "o",
   "wrong": [
    "wa",
    "e",
    "n"
   ],
   "level": "A1",
   "expl": "を = o."
  },
  {
   "kind": "choose",
   "q": "ねこを みます: “ねこ” là",
   "right": "tân ngữ",
   "wrong": [
    "chủ ngữ",
    "nơi chốn",
    "thời gian"
   ],
   "level": "A1",
   "expl": "N を V."
  },
  {
   "kind": "choose",
   "q": "は đọc là wa khi",
   "right": "làm trợ từ",
   "wrong": [
    "nằm đầu từ",
    "đứng cuối câu",
    "trong mọi trường hợp"
   ],
   "level": "A1",
   "expl": "Chỉ khi làm trợ từ."
  }
 ],
 "ja-jos-ni-e-de": [
  {
   "kind": "fill",
   "q": "7じ___ おきます。",
   "hint": "kana hoặc romaji",
   "accept": [
    "に",
    "ni"
   ],
   "level": "A1",
   "expl": "Giờ cụ thể đi với に."
  },
  {
   "kind": "fill",
   "q": "がっこう___ いきます。(đích)",
   "hint": "kana hoặc romaji",
   "accept": [
    "に",
    "へ",
    "ni",
    "e"
   ],
   "level": "A1",
   "expl": "Đích đến dùng に hoặc へ."
  },
  {
   "kind": "fill",
   "q": "つくえの うえ___ ほんが あります。",
   "hint": "kana hoặc romaji",
   "accept": [
    "に",
    "ni"
   ],
   "level": "A1",
   "expl": "Nơi tồn tại dùng に."
  },
  {
   "kind": "fill",
   "q": "ともだち___ プレゼントを あげます。",
   "hint": "kana hoặc romaji",
   "accept": [
    "に",
    "ni"
   ],
   "level": "A1",
   "expl": "Người nhận dùng に."
  },
  {
   "kind": "fill",
   "q": "としょかん___ べんきょうします。",
   "hint": "kana hoặc romaji",
   "accept": [
    "で",
    "de"
   ],
   "level": "A1",
   "expl": "Nơi hành động dùng で."
  },
  {
   "kind": "fill",
   "q": "バス___ いきます。",
   "hint": "kana hoặc romaji",
   "accept": [
    "で",
    "de"
   ],
   "level": "A1",
   "expl": "Phương tiện dùng で."
  },
  {
   "kind": "fill",
   "q": "かいもの___ いきます。(mục đích)",
   "hint": "kana hoặc romaji",
   "accept": [
    "に",
    "ni"
   ],
   "level": "A2",
   "expl": "V(ます bỏ) / N + に + 行く = đi để …"
  },
  {
   "kind": "fill",
   "q": "にほん___ かえります。(hướng)",
   "hint": "kana hoặc romaji",
   "accept": [
    "へ",
    "に",
    "e",
    "ni"
   ],
   "level": "A1",
   "expl": "Hướng dùng へ (đọc e)."
  },
  {
   "kind": "choose",
   "q": "Nơi hành động diễn ra dùng",
   "right": "で",
   "wrong": [
    "に",
    "を",
    "が"
   ],
   "level": "A1",
   "expl": "で = ở (làm gì)."
  },
  {
   "kind": "choose",
   "q": "Phương tiện đi lại dùng",
   "right": "で",
   "wrong": [
    "に",
    "を",
    "が"
   ],
   "level": "A1",
   "expl": "バスで, でんしゃで."
  },
  {
   "kind": "choose",
   "q": "“Hôm qua” có dùng に không?",
   "right": "Không",
   "wrong": [
    "Có",
    "Có, luôn luôn",
    "Chỉ trong văn viết"
   ],
   "level": "A2",
   "expl": "きのう/きょう/あした không đi với に."
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
   "expl": "Giờ cụ thể + に."
  },
  {
   "kind": "choose",
   "q": "へ khi làm trợ từ đọc là",
   "right": "e",
   "wrong": [
    "he",
    "ha",
    "wa"
   ],
   "level": "A1",
   "expl": "へ = e."
  },
  {
   "kind": "choose",
   "q": "Tổng cộng: ぜんぶ___ 500えん",
   "right": "で",
   "wrong": [
    "に",
    "を",
    "が"
   ],
   "level": "A2",
   "expl": "Tổng số lượng dùng で."
  },
  {
   "kind": "choose",
   "q": "はしで たべます: はし là",
   "right": "công cụ",
   "wrong": [
    "nơi chốn",
    "thời gian",
    "người nhận"
   ],
   "level": "A1",
   "expl": "で chỉ công cụ."
  }
 ],
 "ja-jos-to-ya-kara": [
  {
   "kind": "fill",
   "q": "ほん___ ペンを かいました。(và)",
   "hint": "kana hoặc romaji",
   "accept": [
    "と",
    "to"
   ],
   "level": "A1",
   "expl": "と nối đầy đủ."
  },
  {
   "kind": "fill",
   "q": "ともだち___ えいがを みます。(cùng)",
   "hint": "kana hoặc romaji",
   "accept": [
    "と",
    "to"
   ],
   "level": "A1",
   "expl": "人 + と = cùng với."
  },
  {
   "kind": "fill",
   "q": "りんご___ みかんなどを かいました。(liệt kê mở)",
   "hint": "kana hoặc romaji",
   "accept": [
    "や",
    "ya"
   ],
   "level": "A2",
   "expl": "や liệt kê không đầy đủ."
  },
  {
   "kind": "fill",
   "q": "9じ___ 5じまで はたらきます。",
   "hint": "kana hoặc romaji",
   "accept": [
    "から",
    "kara"
   ],
   "level": "A1",
   "expl": "から = từ."
  },
  {
   "kind": "fill",
   "q": "9じから 5じ___ はたらきます。",
   "hint": "kana hoặc romaji",
   "accept": [
    "まで",
    "made"
   ],
   "level": "A1",
   "expl": "まで = đến."
  },
  {
   "kind": "fill",
   "q": "あつい___、まどを あけます。(vì)",
   "hint": "kana hoặc romaji",
   "accept": [
    "から",
    "kara"
   ],
   "level": "A2",
   "expl": "から ở cuối mệnh đề = vì."
  },
  {
   "kind": "fill",
   "q": "ともだち___ てがみを もらいました。(từ)",
   "hint": "kana hoặc romaji",
   "accept": [
    "から",
    "kara"
   ],
   "level": "A2",
   "expl": "Nguồn nhận dùng から."
  },
  {
   "kind": "choose",
   "q": "や khác と ở chỗ",
   "right": "や liệt kê không đầy đủ",
   "wrong": [
    "や nghĩa là “cùng”",
    "や chỉ dùng cho người",
    "Không khác"
   ],
   "level": "A2",
   "expl": "や ngụ ý còn nữa."
  },
  {
   "kind": "choose",
   "q": "いえから えきまで nghĩa là",
   "right": "từ nhà đến ga",
   "wrong": [
    "đến nhà từ ga",
    "ở nhà và ga",
    "cùng nhà và ga"
   ],
   "level": "A1",
   "expl": "から … まで."
  },
  {
   "kind": "choose",
   "q": "“Đi cùng gia đình”",
   "right": "かぞくと いきます",
   "wrong": [
    "かぞくから いきます",
    "かぞくや いきます",
    "かぞくまで いきます"
   ],
   "level": "A1",
   "expl": "人 + と = cùng."
  },
  {
   "kind": "choose",
   "q": "から (lý do) đặt ở",
   "right": "sau mệnh đề lý do",
   "wrong": [
    "trước mệnh đề lý do",
    "đầu câu",
    "giữa hai danh từ"
   ],
   "level": "A2",
   "expl": "Lý do + から."
  },
  {
   "kind": "choose",
   "q": "Liệt kê đầy đủ, không còn gì khác: ほん___ ペン",
   "right": "と",
   "wrong": [
    "や",
    "の",
    "まで"
   ],
   "level": "A2",
   "expl": "と nối đầy đủ."
  },
  {
   "kind": "choose",
   "q": "から ở cuối mệnh đề nghĩa là",
   "right": "vì",
   "wrong": [
    "đến",
    "cùng",
    "hoặc"
   ],
   "level": "A2",
   "expl": "いそがしいから = vì bận."
  },
  {
   "kind": "choose",
   "q": "まで dùng với",
   "right": "thời điểm kết thúc",
   "wrong": [
    "thời điểm bắt đầu",
    "phương tiện",
    "người nhận"
   ],
   "level": "A1",
   "expl": "5じまで = đến 5 giờ."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "くじから ごじまで はたらきます",
   "wrong": [
    "くじまで ごじから はたらきます",
    "くじと ごじを はたらきます",
    "くじや ごじ はたらきます"
   ],
   "level": "A1",
   "expl": "から (bắt đầu) rồi まで (kết thúc)."
  }
 ],
 "ja-jos-dake-shika": [
  {
   "kind": "fill",
   "q": "みず___ のみます。(chỉ nước)",
   "hint": "kana hoặc romaji",
   "accept": [
    "だけ",
    "dake"
   ],
   "level": "A2",
   "expl": "だけ = chỉ."
  },
  {
   "kind": "fill",
   "q": "せんえん___ ありません。(chỉ có)",
   "hint": "kana hoặc romaji",
   "accept": [
    "しか",
    "shika"
   ],
   "level": "A2",
   "expl": "しか + phủ định."
  },
  {
   "kind": "fill",
   "q": "にく___ たべます。(toàn là)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ばかり",
    "bakari"
   ],
   "level": "B1",
   "expl": "ばかり = toàn là."
  },
  {
   "kind": "fill",
   "q": "いちじかん___ かかります。(khoảng)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ぐらい",
    "くらい",
    "gurai",
    "kurai"
   ],
   "level": "A2",
   "expl": "ぐらい = khoảng (số lượng)."
  },
  {
   "kind": "fill",
   "q": "3じ___ きます。(khoảng giờ)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ごろ",
    "goro"
   ],
   "level": "A2",
   "expl": "ごろ = khoảng (thời điểm)."
  },
  {
   "kind": "fill",
   "q": "ひとり 2こ___ とります。(mỗi)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ずつ",
    "zutsu"
   ],
   "level": "B1",
   "expl": "ずつ = mỗi."
  },
  {
   "kind": "fill",
   "q": "ごふん___ まてません。(chỉ 5 phút)",
   "hint": "kana hoặc romaji",
   "accept": [
    "しか",
    "shika"
   ],
   "level": "B1",
   "expl": "しか + phủ định."
  },
  {
   "kind": "choose",
   "q": "しか luôn đi với",
   "right": "phủ định",
   "wrong": [
    "khẳng định",
    "nghi vấn",
    "mệnh lệnh"
   ],
   "level": "A2",
   "expl": "しか〜ない."
  },
  {
   "kind": "choose",
   "q": "Ước lượng giờ giấc dùng",
   "right": "ごろ",
   "wrong": [
    "ぐらい",
    "だけ",
    "ずつ"
   ],
   "level": "A2",
   "expl": "3じごろ."
  },
  {
   "kind": "choose",
   "q": "Ước lượng độ dài thời gian dùng",
   "right": "ぐらい",
   "wrong": [
    "ごろ",
    "だけ",
    "ばかり"
   ],
   "level": "A2",
   "expl": "1じかんぐらい."
  },
  {
   "kind": "choose",
   "q": "ずつ nghĩa là",
   "right": "mỗi, từng",
   "wrong": [
    "chỉ",
    "khoảng",
    "toàn là"
   ],
   "level": "B1",
   "expl": "ひとつずつ = mỗi thứ một."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "ひとつしか ありません",
   "wrong": [
    "ひとつしか あります",
    "ひとつを ありません",
    "ひとつ しか です"
   ],
   "level": "A2",
   "expl": "しか đi với phủ định."
  },
  {
   "kind": "choose",
   "q": "だけ khác しか ở chỗ",
   "right": "だけ trung tính, しか nhấn vào “quá ít”",
   "wrong": [
    "だけ phải đi với phủ định",
    "しか đi với khẳng định",
    "Giống hệt nhau"
   ],
   "level": "B1",
   "expl": "しか mang sắc thái tiêu cực."
  },
  {
   "kind": "choose",
   "q": "“Toàn ăn thịt”",
   "right": "にくばかり たべます",
   "wrong": [
    "にくずつ たべます",
    "にくごろ たべます",
    "にくぐらい たべます"
   ],
   "level": "B1",
   "expl": "ばかり = toàn."
  },
  {
   "kind": "choose",
   "q": "Mỗi người 2 cái",
   "right": "ひとり 2こずつ",
   "wrong": [
    "ひとり 2こごろ",
    "ひとり 2こばかり",
    "ひとり 2こしか"
   ],
   "level": "B1",
   "expl": "ずつ = mỗi."
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

const RUSH=[["は · が · を", ["ja-jos-wa-ga-wo"]], ["すしが すきです", ["ja-jos-wa-ga-wo"]], ["に · へ · で", ["ja-jos-ni-e-de"]], ["バスで · がっこうに", ["ja-jos-ni-e-de"]], ["ともだちと", ["ja-jos-to-ya-kara"]], ["りんごや みかん", ["ja-jos-to-ya-kara"]], ["9じから 5じまで", ["ja-jos-to-ya-kara"]], ["だけ · しか", ["ja-jos-dake-shika"]], ["ぐらい · ごろ", ["ja-jos-dake-shika"]], ["ひとつずつ", ["ja-jos-dake-shika"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["joshi"] = { pool: POOL, types: TYPES, game: {title:"どれ？",desc:"60 giây. Thấy mẫu này, chọn đúng bài",prompt:"Mẫu này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"jaJoshiRushBest"} };
})();
