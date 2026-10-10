/* ja/content/quiz/moji.js: chữ viết và phát âm tiếng Nhật.
   Mixed exercise types: type the answer (fill, kana or romaji accepted,
   retry allowed) or pick one (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "ja-moji-hiragana": [
  {
   "kind": "fill",
   "q": "Đọc chữ **か**: ___",
   "hint": "romaji",
   "accept": [
    "ka"
   ],
   "level": "A1",
   "expl": "か thuộc hàng K nên đọc ka."
  },
  {
   "kind": "fill",
   "q": "Đọc chữ **し**: ___",
   "hint": "romaji",
   "accept": [
    "shi",
    "si"
   ],
   "level": "A1",
   "expl": "し đọc shi, không phải si."
  },
  {
   "kind": "fill",
   "q": "Đọc chữ **つ**: ___",
   "hint": "romaji",
   "accept": [
    "tsu",
    "tu"
   ],
   "level": "A1",
   "expl": "つ đọc tsu."
  },
  {
   "kind": "fill",
   "q": "Đọc chữ **ふ**: ___",
   "hint": "romaji",
   "accept": [
    "fu",
    "hu"
   ],
   "level": "A1",
   "expl": "ふ đọc fu, nằm giữa f và h."
  },
  {
   "kind": "fill",
   "q": "Đọc từ **さくら** (hoa anh đào): ___",
   "hint": "romaji",
   "accept": [
    "sakura"
   ],
   "level": "A1",
   "expl": "さ・く・ら = sa・ku・ra."
  },
  {
   "kind": "fill",
   "q": "Đọc từ **ねこ** (con mèo): ___",
   "hint": "romaji",
   "accept": [
    "neko"
   ],
   "level": "A1",
   "expl": "ね・こ = ne・ko."
  },
  {
   "kind": "choose",
   "q": "Chữ nào đọc là “ru”?",
   "right": "る",
   "wrong": [
    "ろ",
    "ら",
    "れ"
   ],
   "level": "A1",
   "expl": "る = ru. ろ = ro, ら = ra, れ = re."
  },
  {
   "kind": "choose",
   "q": "Chữ nào đọc là “ne”?",
   "right": "ね",
   "wrong": [
    "れ",
    "わ",
    "ぬ"
   ],
   "level": "A1",
   "expl": "ね = ne. れ = re, わ = wa, ぬ = nu: ba chữ này nhìn rất giống nhau."
  },
  {
   "kind": "choose",
   "q": "Chữ **は** làm trợ từ chủ đề đọc là gì?",
   "right": "wa",
   "wrong": [
    "ha",
    "ba",
    "pa"
   ],
   "level": "A1",
   "expl": "Khi là trợ từ, は đọc wa."
  },
  {
   "kind": "choose",
   "q": "Chữ **を** làm trợ từ đọc là gì?",
   "right": "o",
   "wrong": [
    "wa",
    "e",
    "n"
   ],
   "level": "A1",
   "expl": "を đọc là o khi làm trợ từ tân ngữ."
  },
  {
   "kind": "choose",
   "q": "Chữ **ん** biểu thị âm gì?",
   "right": "Âm mũi “n” chiếm một nhịp riêng",
   "wrong": [
    "Nguyên âm “u”",
    "Âm ngắt",
    "Trường âm"
   ],
   "level": "A1",
   "expl": "ん là một nhịp riêng, đọc n/m/ng tùy âm đứng sau."
  },
  {
   "kind": "choose",
   "q": "Hàng nào chỉ có 3 chữ (や ゆ よ)?",
   "right": "Hàng Y",
   "wrong": [
    "Hàng W",
    "Hàng R",
    "Hàng M"
   ],
   "level": "A1",
   "expl": "Hàng Y chỉ có ya, yu, yo."
  }
 ],
 "ja-moji-katakana": [
  {
   "kind": "fill",
   "q": "Đọc chữ **カ**: ___",
   "hint": "romaji",
   "accept": [
    "ka"
   ],
   "level": "A1",
   "expl": "カ là katakana của ka."
  },
  {
   "kind": "fill",
   "q": "Đọc chữ **ス**: ___",
   "hint": "romaji",
   "accept": [
    "su"
   ],
   "level": "A1",
   "expl": "ス = su."
  },
  {
   "kind": "fill",
   "q": "Đọc từ **テレビ** (ti vi): ___",
   "hint": "romaji",
   "accept": [
    "terebi"
   ],
   "level": "A1",
   "expl": "テ・レ・ビ = te・re・bi."
  },
  {
   "kind": "fill",
   "q": "Đọc từ **パン** (bánh mì): ___",
   "hint": "romaji",
   "accept": [
    "pan"
   ],
   "level": "A1",
   "expl": "パ = pa, ン = n."
  },
  {
   "kind": "fill",
   "q": "Đọc từ **ホテル** (khách sạn): ___",
   "hint": "romaji",
   "accept": [
    "hoteru"
   ],
   "level": "A1",
   "expl": "ホ・テ・ル = ho・te・ru."
  },
  {
   "kind": "fill",
   "q": "Đọc từ **アメリカ** (nước Mỹ): ___",
   "hint": "romaji",
   "accept": [
    "amerika"
   ],
   "level": "A1",
   "expl": "ア・メ・リ・カ = a・me・ri・ka."
  },
  {
   "kind": "choose",
   "q": "Chữ nào đọc là “shi”?",
   "right": "シ",
   "wrong": [
    "ツ",
    "ソ",
    "ン"
   ],
   "level": "A1",
   "expl": "シ = shi. ツ = tsu, ソ = so, ン = n."
  },
  {
   "kind": "choose",
   "q": "Chữ nào đọc là “tsu”?",
   "right": "ツ",
   "wrong": [
    "シ",
    "ソ",
    "ン"
   ],
   "level": "A1",
   "expl": "ツ = tsu, hai nét chấm đứng, nét chéo bên phải."
  },
  {
   "kind": "choose",
   "q": "Chữ nào đọc là “n”?",
   "right": "ン",
   "wrong": [
    "ソ",
    "ツ",
    "シ"
   ],
   "level": "A1",
   "expl": "ン = n, nét chấm ở dưới nét dài."
  },
  {
   "kind": "choose",
   "q": "Katakana thường dùng cho loại từ nào?",
   "right": "Từ mượn nước ngoài",
   "wrong": [
    "Đuôi động từ",
    "Trợ từ",
    "Danh từ thuần Nhật"
   ],
   "level": "A1",
   "expl": "Katakana dùng cho từ mượn, tên nước ngoài, từ tượng thanh."
  },
  {
   "kind": "choose",
   "q": "Trong katakana, kéo dài nguyên âm bằng cách nào?",
   "right": "Dùng ー",
   "wrong": [
    "Thêm chữ う",
    "Lặp lại chữ",
    "Dùng っ"
   ],
   "level": "A1",
   "expl": "Katakana dùng ー (ví dụ コーヒー); hiragana thêm nguyên âm."
  },
  {
   "kind": "choose",
   "q": "Tên nào thường viết bằng katakana?",
   "right": "アメリカ",
   "wrong": [
    "日本",
    "中国",
    "韓国"
   ],
   "level": "A1",
   "expl": "Tên nước ngoài như Mỹ viết bằng katakana; Nhật, Trung, Hàn viết bằng kanji."
  }
 ],
 "ja-moji-dakuon": [
  {
   "kind": "fill",
   "q": "か + ゛thành ___ (romaji)",
   "hint": "romaji",
   "accept": [
    "ga"
   ],
   "level": "A1",
   "expl": "Thêm dakuten vào か thành が (ga)."
  },
  {
   "kind": "fill",
   "q": "さ + ゛thành ___ (romaji)",
   "hint": "romaji",
   "accept": [
    "za"
   ],
   "level": "A1",
   "expl": "さ → ざ (za)."
  },
  {
   "kind": "fill",
   "q": "は + ゜thành ___ (romaji)",
   "hint": "romaji",
   "accept": [
    "pa"
   ],
   "level": "A1",
   "expl": "Handakuten chỉ dùng với hàng H: は → ぱ (pa)."
  },
  {
   "kind": "fill",
   "q": "は + ゛thành ___ (romaji)",
   "hint": "romaji",
   "accept": [
    "ba"
   ],
   "level": "A1",
   "expl": "は → ば (ba)."
  },
  {
   "kind": "fill",
   "q": "Đọc **しゃ**: ___",
   "hint": "romaji",
   "accept": [
    "sha"
   ],
   "level": "A1",
   "expl": "し + ゃ = sha."
  },
  {
   "kind": "fill",
   "q": "Đọc **きょ**: ___",
   "hint": "romaji",
   "accept": [
    "kyo"
   ],
   "level": "A1",
   "expl": "き + ょ = kyo."
  },
  {
   "kind": "fill",
   "q": "Đọc **ちゅ**: ___",
   "hint": "romaji",
   "accept": [
    "chu"
   ],
   "level": "A1",
   "expl": "ち + ゅ = chu."
  },
  {
   "kind": "fill",
   "q": "Đọc **じゃ**: ___",
   "hint": "romaji",
   "accept": [
    "ja"
   ],
   "level": "A1",
   "expl": "じ + ゃ = ja."
  },
  {
   "kind": "choose",
   "q": "Chữ nào là âm bán đục?",
   "right": "ぱ",
   "wrong": [
    "ば",
    "が",
    "ざ"
   ],
   "level": "A1",
   "expl": "Bán đục dùng dấu ゜và chỉ có ở hàng H: ぱ ぴ ぷ ぺ ぽ."
  },
  {
   "kind": "choose",
   "q": "Âm ghép nào đọc là “ryo”?",
   "right": "りょ",
   "wrong": [
    "りゅ",
    "りゃ",
    "ろ"
   ],
   "level": "A2",
   "expl": "り + ょ = ryo. りゅ = ryu, りゃ = rya."
  },
  {
   "kind": "choose",
   "q": "{病院|びょういん} nghĩa là gì?",
   "right": "Bệnh viện",
   "wrong": [
    "Tiệm làm đẹp",
    "Trường học",
    "Nhà hàng"
   ],
   "level": "A2",
   "expl": "びょういん = bệnh viện; びよういん (yo to) = tiệm làm đẹp."
  },
  {
   "kind": "choose",
   "q": "ゃ ゅ ょ trong âm ghép viết thế nào?",
   "right": "Nhỏ hơn và gộp thành một nhịp",
   "wrong": [
    "Cùng cỡ, hai nhịp",
    "Chỉ dùng trong katakana",
    "Viết trên đầu chữ"
   ],
   "level": "A1",
   "expl": "Chữ nhỏ gộp với chữ trước thành một nhịp (しゃ = sha)."
  }
 ],
 "ja-moji-haku": [
  {
   "kind": "fill",
   "q": "Từ **がっこう** (trường học) có ___ nhịp (gõ số).",
   "hint": "số",
   "accept": [
    "4",
    "bốn",
    "よん",
    "yon"
   ],
   "level": "A2",
   "expl": "が・っ・こ・う = 4 nhịp."
  },
  {
   "kind": "fill",
   "q": "Từ **ほん** (sách) có ___ nhịp (gõ số).",
   "hint": "số",
   "accept": [
    "2",
    "ni",
    "に"
   ],
   "level": "A2",
   "expl": "ほ・ん = 2 nhịp."
  },
  {
   "kind": "fill",
   "q": "Từ **おかあさん** (mẹ) có ___ nhịp (gõ số).",
   "hint": "số",
   "accept": [
    "5",
    "go",
    "ご"
   ],
   "level": "A2",
   "expl": "お・か・あ・さ・ん = 5 nhịp."
  },
  {
   "kind": "fill",
   "q": "Từ **ビール** (bia) có ___ nhịp (gõ số).",
   "hint": "số",
   "accept": [
    "3",
    "san",
    "さん"
   ],
   "level": "A2",
   "expl": "ビ・ー・ル = 3 nhịp, ー chiếm một nhịp."
  },
  {
   "kind": "fill",
   "q": "Đọc từ **ざっし** (tạp chí): ___",
   "hint": "romaji",
   "accept": [
    "zasshi"
   ],
   "level": "A2",
   "expl": "っ nhân đôi phụ âm kế tiếp: zasshi."
  },
  {
   "kind": "fill",
   "q": "Đọc từ **おじいさん** (ông): ___",
   "hint": "romaji",
   "accept": [
    "ojiisan",
    "ojīsan"
   ],
   "level": "A2",
   "expl": "おじいさん kéo dài い: ojiisan."
  },
  {
   "kind": "choose",
   "q": "おばさん và おばあさん khác nhau thế nào?",
   "right": "おばさん là cô/dì, おばあさん là bà",
   "wrong": [
    "Hai từ giống hệt nhau",
    "おばさん là bà",
    "おばあさん là chị gái"
   ],
   "level": "A2",
   "expl": "Độ dài của あ làm thay đổi nghĩa."
  },
  {
   "kind": "choose",
   "q": "Từ nào có âm ngắt (っ)?",
   "right": "きって (tem)",
   "wrong": [
    "きて",
    "ゆき",
    "おば"
   ],
   "level": "A2",
   "expl": "きって có っ nhỏ."
  },
  {
   "kind": "choose",
   "q": "Trường âm của おとうさん (bố) nằm ở đâu?",
   "right": "とう",
   "wrong": [
    "おと",
    "さん",
    "うさ"
   ],
   "level": "A2",
   "expl": "とう = to kéo dài (o + u)."
  },
  {
   "kind": "choose",
   "q": "ん tính là mấy nhịp?",
   "right": "Một nhịp",
   "wrong": [
    "Nửa nhịp",
    "Hai nhịp",
    "Không tính nhịp"
   ],
   "level": "A1",
   "expl": "ん chiếm trọn một nhịp."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng về っ?",
   "right": "Dừng một nhịp trước phụ âm kế tiếp",
   "wrong": [
    "Kéo dài nguyên âm",
    "Làm đục phụ âm",
    "Đọc là “tsu”"
   ],
   "level": "A2",
   "expl": "っ nhỏ tạo khoảng dừng một nhịp."
  },
  {
   "kind": "choose",
   "q": "ゆき (tuyết) và ゆうき (dũng khí) khác nhau ở đâu?",
   "right": "Độ dài âm thứ hai (trường âm)",
   "wrong": [
    "Dấu dakuten",
    "Âm ngắt",
    "Không khác"
   ],
   "level": "A2",
   "expl": "ゆうき có trường âm う nên dài hơn một nhịp."
  }
 ],
 "ja-moji-kanji": [
  {
   "kind": "fill",
   "q": "日曜日: 日 đọc ___ (romaji).",
   "hint": "romaji",
   "accept": [
    "nichi",
    "にち"
   ],
   "level": "A1",
   "expl": "日 trong ngày thứ đọc nichi."
  },
  {
   "kind": "fill",
   "q": "月曜日: 月 đọc ___ (romaji).",
   "hint": "romaji",
   "accept": [
    "getsu",
    "げつ"
   ],
   "level": "A1",
   "expl": "月 trong ngày thứ đọc getsu."
  },
  {
   "kind": "fill",
   "q": "水曜日: 水 đọc ___ (romaji).",
   "hint": "romaji",
   "accept": [
    "sui",
    "すい"
   ],
   "level": "A1",
   "expl": "水 đọc sui."
  },
  {
   "kind": "fill",
   "q": "木曜日: 木 đọc ___ (romaji).",
   "hint": "romaji",
   "accept": [
    "moku",
    "もく"
   ],
   "level": "A1",
   "expl": "木 đọc moku."
  },
  {
   "kind": "fill",
   "q": "金曜日: 金 đọc ___ (romaji).",
   "hint": "romaji",
   "accept": [
    "kin",
    "きん"
   ],
   "level": "A1",
   "expl": "金 đọc kin."
  },
  {
   "kind": "fill",
   "q": "土曜日: 土 đọc ___ (romaji).",
   "hint": "romaji",
   "accept": [
    "do",
    "ど"
   ],
   "level": "A1",
   "expl": "土 đọc do."
  },
  {
   "kind": "choose",
   "q": "火曜日 là thứ mấy?",
   "right": "Thứ ba",
   "wrong": [
    "Thứ hai",
    "Thứ tư",
    "Thứ năm"
   ],
   "level": "A1",
   "expl": "火 = lửa = thứ ba."
  },
  {
   "kind": "choose",
   "q": "木 mang nghĩa gì?",
   "right": "Cây",
   "wrong": [
    "Nước",
    "Lửa",
    "Đất"
   ],
   "level": "A1",
   "expl": "木 = cây."
  },
  {
   "kind": "choose",
   "q": "Furigana là gì?",
   "right": "Kana nhỏ ghi cách đọc phía trên kanji",
   "wrong": [
    "Kanji viết tắt",
    "Kana đuôi động từ",
    "Chữ cái La-tinh"
   ],
   "level": "A1",
   "expl": "Furigana giúp đọc kanji chưa biết."
  },
  {
   "kind": "choose",
   "q": "Okurigana là gì?",
   "right": "Phần kana viết sau kanji để chia động từ hoặc tính từ",
   "wrong": [
    "Kana nhỏ ghi phía trên",
    "Âm On",
    "Dấu câu"
   ],
   "level": "A2",
   "expl": "Ví dụ 食べる: べる là okurigana."
  },
  {
   "kind": "choose",
   "q": "Cách đọc nào thường dùng khi kanji đứng riêng?",
   "right": "Âm Nhật (Kun)",
   "wrong": [
    "Âm Hán (On)",
    "Âm Anh",
    "Âm Hán Việt"
   ],
   "level": "A2",
   "expl": "Kun thường dùng khi đứng riêng, On trong từ ghép."
  },
  {
   "kind": "choose",
   "q": "学生 (がくせい) là từ Hán Việt nào?",
   "right": "Học sinh",
   "wrong": [
    "Giáo viên",
    "Nhà trường",
    "Sinh nhật"
   ],
   "level": "A1",
   "expl": "学生 = học sinh, giống âm Hán Việt."
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

const RUSH=[["あいうえお · かきくけこ", ["ja-moji-hiragana"]], ["は = wa · を = o", ["ja-moji-hiragana"]], ["コーヒー · テレビ", ["ja-moji-katakana"]], ["シ と ツ", ["ja-moji-katakana"]], ["が ざ だ ば ぱ", ["ja-moji-dakuon"]], ["きゃ しゅ ちょ", ["ja-moji-dakuon"]], ["っ (âm ngắt)", ["ja-moji-haku"]], ["おばさん / おばあさん", ["ja-moji-haku"]], ["日 月 火 水 木 金 土", ["ja-moji-kanji"]], ["ふりがな · 送り仮名", ["ja-moji-kanji"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["moji"] = { pool: POOL, types: TYPES, game: {title:"どれ？",desc:"60 giây. Thấy mẫu này, chọn đúng bài",prompt:"Mẫu này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"jaMojiRushBest"} };
})();
