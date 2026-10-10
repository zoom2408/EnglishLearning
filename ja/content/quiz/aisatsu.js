/* ja/content/quiz/aisatsu.js: chào hỏi, giới thiệu, số đếm, ngày tháng và giờ.
   Mixed exercise types: type the answer (fill, kana or romaji accepted,
   retry allowed) or pick one (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "ja-ais-aisatsu": [
  {
   "kind": "fill",
   "q": "Buổi sáng gặp đồng nghiệp: ___ ございます。",
   "hint": "kana hoặc romaji",
   "accept": [
    "おはよう",
    "ohayou",
    "ohayo",
    "ohayō"
   ],
   "level": "A1",
   "expl": "おはようございます dùng buổi sáng."
  },
  {
   "kind": "fill",
   "q": "Buổi tối gặp nhau: ___。",
   "hint": "kana hoặc romaji",
   "accept": [
    "こんばんは",
    "konbanwa"
   ],
   "level": "A1",
   "expl": "こんばんは dùng buổi tối."
  },
  {
   "kind": "fill",
   "q": "Trước khi ăn: ___。",
   "hint": "kana hoặc romaji",
   "accept": [
    "いただきます",
    "itadakimasu"
   ],
   "level": "A1",
   "expl": "いただきます nói trước bữa ăn."
  },
  {
   "kind": "fill",
   "q": "Sau khi ăn: ごちそう___でした。",
   "hint": "kana hoặc romaji",
   "accept": [
    "さま",
    "sama"
   ],
   "level": "A1",
   "expl": "ごちそうさまでした nói sau bữa ăn."
  },
  {
   "kind": "fill",
   "q": "Khi ra khỏi nhà: ___。",
   "hint": "kana hoặc romaji",
   "accept": [
    "いってきます",
    "ittekimasu"
   ],
   "level": "A1",
   "expl": "Người ở nhà đáp いってらっしゃい."
  },
  {
   "kind": "fill",
   "q": "Khi về đến nhà: ___。",
   "hint": "kana hoặc romaji",
   "accept": [
    "ただいま",
    "tadaima"
   ],
   "level": "A1",
   "expl": "Người ở nhà đáp おかえりなさい."
  },
  {
   "kind": "choose",
   "q": "Ai đó nói ありがとうございます, bạn đáp",
   "right": "どういたしまして",
   "wrong": [
    "すみません",
    "おはようございます",
    "いただきます"
   ],
   "level": "A1",
   "expl": "どういたしまして = không có gì."
  },
  {
   "kind": "choose",
   "q": "Người nhà nói いってきます, bạn đáp",
   "right": "いってらっしゃい",
   "wrong": [
    "おかえりなさい",
    "ただいま",
    "さようなら"
   ],
   "level": "A1",
   "expl": "いってきます đáp いってらっしゃい."
  },
  {
   "kind": "choose",
   "q": "Bạn về nhà nói ただいま, người nhà đáp",
   "right": "おかえりなさい",
   "wrong": [
    "いってらっしゃい",
    "いただきます",
    "おやすみなさい"
   ],
   "level": "A1",
   "expl": "ただいま đáp おかえりなさい."
  },
  {
   "kind": "choose",
   "q": "Câu nói trước khi đi ngủ",
   "right": "おやすみなさい",
   "wrong": [
    "おはよう",
    "さようなら",
    "こんにちは"
   ],
   "level": "A1",
   "expl": "おやすみなさい = chúc ngủ ngon."
  },
  {
   "kind": "choose",
   "q": "Khi làm phiền người lạ, bạn nói",
   "right": "すみません",
   "wrong": [
    "いただきます",
    "ただいま",
    "おめでとう"
   ],
   "level": "A1",
   "expl": "すみません vừa xin lỗi vừa gọi người khác."
  },
  {
   "kind": "choose",
   "q": "Lần đầu gặp một người, bạn nói",
   "right": "はじめまして",
   "wrong": [
    "おひさしぶり",
    "さようなら",
    "ごめんなさい"
   ],
   "level": "A1",
   "expl": "はじめまして dùng khi gặp lần đầu."
  },
  {
   "kind": "choose",
   "q": "Chào ban ngày (khoảng 11 giờ trưa)",
   "right": "こんにちは",
   "wrong": [
    "こんばんは",
    "おはよう",
    "おやすみ"
   ],
   "level": "A1",
   "expl": "こんにちは dùng ban ngày."
  },
  {
   "kind": "choose",
   "q": "Câu nào lịch sự hơn?",
   "right": "おはようございます",
   "wrong": [
    "おはよう",
    "おっす",
    "やあ"
   ],
   "level": "A1",
   "expl": "Có ございます thì lịch sự."
  },
  {
   "kind": "choose",
   "q": "Bạn làm vỡ cốc của bạn, nói",
   "right": "ごめんなさい",
   "wrong": [
    "ありがとう",
    "いただきます",
    "どういたしまして"
   ],
   "level": "A1",
   "expl": "ごめんなさい = xin lỗi."
  }
 ],
 "ja-ais-jikoshokai": [
  {
   "kind": "fill",
   "q": "わたし___ リンです。",
   "hint": "kana hoặc romaji",
   "accept": [
    "は",
    "wa",
    "ha"
   ],
   "level": "A1",
   "expl": "は đọc wa, trợ từ chủ đề."
  },
  {
   "kind": "fill",
   "q": "ベトナム___ きました。(đến từ)",
   "hint": "kana hoặc romaji",
   "accept": [
    "から",
    "kara"
   ],
   "level": "A1",
   "expl": "から nghĩa là “từ”."
  },
  {
   "kind": "fill",
   "q": "わたしは 25さい___。",
   "hint": "kana hoặc romaji",
   "accept": [
    "です",
    "desu"
   ],
   "level": "A1",
   "expl": "〜さいです = … tuổi."
  },
  {
   "kind": "fill",
   "q": "Hỏi tên: おなまえ___？",
   "hint": "kana hoặc romaji",
   "accept": [
    "は",
    "wa",
    "ha"
   ],
   "level": "A1",
   "expl": "おなまえは？ = Tên bạn là gì?"
  },
  {
   "kind": "fill",
   "q": "Hỏi tuổi lịch sự: ___ ですか。",
   "hint": "kana hoặc romaji",
   "accept": [
    "おいくつ",
    "oikutsu"
   ],
   "level": "A1",
   "expl": "おいくつですか lịch sự hơn なんさいですか."
  },
  {
   "kind": "fill",
   "q": "Kết thúc giới thiệu: どうぞ よろしく ___。",
   "hint": "kana hoặc romaji",
   "accept": [
    "おねがいします",
    "onegaishimasu",
    "onegai shimasu"
   ],
   "level": "A1",
   "expl": "どうぞよろしくおねがいします = mong được giúp đỡ."
  },
  {
   "kind": "choose",
   "q": "“Tôi là sinh viên”",
   "right": "わたしは がくせいです",
   "wrong": [
    "わたしさんは がくせいです",
    "わたしは がくせいでした",
    "わたしは がくせいじゃありません"
   ],
   "level": "A1",
   "expl": "Không gắn さん vào tên mình."
  },
  {
   "kind": "choose",
   "q": "Không dùng さん với",
   "right": "tên của chính mình",
   "wrong": [
    "tên người khác",
    "tên giáo viên",
    "tên khách hàng"
   ],
   "level": "A1",
   "expl": "さん là kính ngữ cho người khác."
  },
  {
   "kind": "choose",
   "q": "Câu nào nghĩa là “Tôi đến từ Hà Nội”?",
   "right": "ハノイから きました",
   "wrong": [
    "ハノイへ いきました",
    "ハノイが きました",
    "ハノイと きました"
   ],
   "level": "A1",
   "expl": "から = từ."
  },
  {
   "kind": "choose",
   "q": "“Tôi là người Việt Nam”",
   "right": "ベトナムじんです",
   "wrong": [
    "ベトナムごです",
    "ベトナムしです",
    "ベトナムかです"
   ],
   "level": "A1",
   "expl": "〜じん = người nước …; 〜ご = ngôn ngữ."
  },
  {
   "kind": "choose",
   "q": "“Tôi là nhân viên công ty”",
   "right": "かいしゃいんです",
   "wrong": [
    "がくせいです",
    "せんせいです",
    "いしゃです"
   ],
   "level": "A1",
   "expl": "かいしゃいん = nhân viên công ty."
  },
  {
   "kind": "choose",
   "q": "“Tôi là bác sĩ”",
   "right": "いしゃです",
   "wrong": [
    "かいしゃいんです",
    "せんせいです",
    "がくせいです"
   ],
   "level": "A1",
   "expl": "いしゃ = bác sĩ."
  },
  {
   "kind": "choose",
   "q": "Cách hỏi nghề nghiệp",
   "right": "おしごとは なんですか",
   "wrong": [
    "おなまえは なんですか",
    "おいくつですか",
    "どこですか"
   ],
   "level": "A1",
   "expl": "おしごと = công việc."
  },
  {
   "kind": "choose",
   "q": "Cách hỏi tuổi lịch sự với người lớn",
   "right": "おいくつですか",
   "wrong": [
    "なんにんですか",
    "いくらですか",
    "なんじですか"
   ],
   "level": "A1",
   "expl": "おいくつ là tuổi (lịch sự)."
  },
  {
   "kind": "choose",
   "q": "Cách hỏi quốc tịch lịch sự",
   "right": "おくには どちらですか",
   "wrong": [
    "おなまえは？",
    "おしごとは？",
    "いつですか"
   ],
   "level": "A2",
   "expl": "おくに = đất nước (của bạn)."
  }
 ],
 "ja-ais-kazu": [
  {
   "kind": "fill",
   "q": "Số 3 đọc là ___.",
   "hint": "kana hoặc romaji",
   "accept": [
    "san",
    "さん"
   ],
   "level": "A1",
   "expl": "3 = さん."
  },
  {
   "kind": "fill",
   "q": "Số 4 (cách đọc phổ biến) đọc là ___.",
   "hint": "kana hoặc romaji",
   "accept": [
    "yon",
    "shi",
    "よん",
    "し"
   ],
   "level": "A1",
   "expl": "4 = よん hoặc し."
  },
  {
   "kind": "fill",
   "q": "Số 7 đọc là ___.",
   "hint": "kana hoặc romaji",
   "accept": [
    "nana",
    "shichi",
    "なな",
    "しち"
   ],
   "level": "A1",
   "expl": "7 = なな hoặc しち."
  },
  {
   "kind": "fill",
   "q": "Số 10 đọc là ___.",
   "hint": "kana hoặc romaji",
   "accept": [
    "juu",
    "jū",
    "じゅう"
   ],
   "level": "A1",
   "expl": "10 = じゅう."
  },
  {
   "kind": "fill",
   "q": "Số 20 đọc là ___.",
   "hint": "kana hoặc romaji",
   "accept": [
    "nijuu",
    "nijū",
    "にじゅう"
   ],
   "level": "A1",
   "expl": "20 = に + じゅう."
  },
  {
   "kind": "fill",
   "q": "Số 35 đọc là ___.",
   "hint": "kana hoặc romaji",
   "accept": [
    "sanjuugo",
    "sanjūgo",
    "さんじゅうご"
   ],
   "level": "A1",
   "expl": "35 = さん + じゅう + ご."
  },
  {
   "kind": "fill",
   "q": "Số 300 đọc là ___.",
   "hint": "kana hoặc romaji",
   "accept": [
    "sanbyaku",
    "さんびゃく"
   ],
   "level": "A1",
   "expl": "300 = さんびゃく."
  },
  {
   "kind": "fill",
   "q": "Số 600 đọc là ___.",
   "hint": "kana hoặc romaji",
   "accept": [
    "roppyaku",
    "ろっぴゃく"
   ],
   "level": "A2",
   "expl": "600 = ろっぴゃく."
  },
  {
   "kind": "fill",
   "q": "Số 3000 đọc là ___.",
   "hint": "kana hoặc romaji",
   "accept": [
    "sanzen",
    "さんぜん"
   ],
   "level": "A2",
   "expl": "3000 = さんぜん."
  },
  {
   "kind": "fill",
   "q": "Số 10000 đọc là ___.",
   "hint": "kana hoặc romaji",
   "accept": [
    "ichiman",
    "いちまん"
   ],
   "level": "A2",
   "expl": "10000 = いちまん (phải có いち)."
  },
  {
   "kind": "choose",
   "q": "Số 8000 đọc là",
   "right": "はっせん",
   "wrong": [
    "はちせん",
    "はちぜん",
    "はっぜん"
   ],
   "level": "A2",
   "expl": "8000 = はっせん."
  },
  {
   "kind": "choose",
   "q": "Số 800 đọc là",
   "right": "はっぴゃく",
   "wrong": [
    "はちひゃく",
    "はちびゃく",
    "はっひゃく"
   ],
   "level": "A2",
   "expl": "800 = はっぴゃく."
  },
  {
   "kind": "choose",
   "q": "9 giờ đọc là",
   "right": "くじ",
   "wrong": [
    "きゅうじ",
    "ここのじ",
    "くうじ"
   ],
   "level": "A1",
   "expl": "9 giờ = くじ."
  },
  {
   "kind": "choose",
   "q": "4 giờ đọc là",
   "right": "よじ",
   "wrong": [
    "よんじ",
    "しじ",
    "よっじ"
   ],
   "level": "A1",
   "expl": "4 giờ = よじ."
  },
  {
   "kind": "choose",
   "q": "7 giờ đọc là",
   "right": "しちじ",
   "wrong": [
    "ななじ",
    "なのじ",
    "しっじ"
   ],
   "level": "A1",
   "expl": "7 giờ = しちじ."
  }
 ],
 "ja-ais-hiduke": [
  {
   "kind": "fill",
   "q": "Tháng 4: ___がつ",
   "hint": "kana hoặc romaji",
   "accept": [
    "し",
    "shi"
   ],
   "level": "A1",
   "expl": "4 tháng = しがつ."
  },
  {
   "kind": "fill",
   "q": "Tháng 9: ___がつ",
   "hint": "kana hoặc romaji",
   "accept": [
    "く",
    "ku"
   ],
   "level": "A1",
   "expl": "9 tháng = くがつ."
  },
  {
   "kind": "fill",
   "q": "Tháng 7: ___がつ",
   "hint": "kana hoặc romaji",
   "accept": [
    "しち",
    "shichi"
   ],
   "level": "A1",
   "expl": "7 tháng = しちがつ."
  },
  {
   "kind": "fill",
   "q": "Mồng 1 hằng tháng đọc là ___.",
   "hint": "kana hoặc romaji",
   "accept": [
    "ついたち",
    "tsuitachi"
   ],
   "level": "A1",
   "expl": "Ngày 1 = ついたち."
  },
  {
   "kind": "fill",
   "q": "Ngày 3 đọc là ___.",
   "hint": "kana hoặc romaji",
   "accept": [
    "みっか",
    "mikka"
   ],
   "level": "A1",
   "expl": "Ngày 3 = みっか."
  },
  {
   "kind": "fill",
   "q": "Ngày 20 đọc là ___.",
   "hint": "kana hoặc romaji",
   "accept": [
    "はつか",
    "hatsuka"
   ],
   "level": "A2",
   "expl": "Ngày 20 = はつか."
  },
  {
   "kind": "fill",
   "q": "Thứ hai: ___ようび",
   "hint": "kana hoặc romaji",
   "accept": [
    "げつ",
    "getsu"
   ],
   "level": "A1",
   "expl": "月曜日 = げつようび."
  },
  {
   "kind": "fill",
   "q": "Thứ bảy: ___ようび",
   "hint": "kana hoặc romaji",
   "accept": [
    "ど",
    "do"
   ],
   "level": "A1",
   "expl": "土曜日 = どようび."
  },
  {
   "kind": "choose",
   "q": "Ngày 8 đọc là",
   "right": "ようか",
   "wrong": [
    "はちにち",
    "やっか",
    "よっか"
   ],
   "level": "A1",
   "expl": "Ngày 8 = ようか."
  },
  {
   "kind": "choose",
   "q": "Ngày 4 đọc là",
   "right": "よっか",
   "wrong": [
    "しにち",
    "ようか",
    "よんにち"
   ],
   "level": "A1",
   "expl": "Ngày 4 = よっか."
  },
  {
   "kind": "choose",
   "q": "Ngày 24 đọc là",
   "right": "にじゅうよっか",
   "wrong": [
    "にじゅうよんにち",
    "にじゅうしにち",
    "にじゅうようか"
   ],
   "level": "A2",
   "expl": "24 = にじゅうよっか."
  },
  {
   "kind": "choose",
   "q": "4 giờ rưỡi nói là",
   "right": "よじはん",
   "wrong": [
    "よんじはん",
    "よじさんぷん",
    "しじはん"
   ],
   "level": "A1",
   "expl": "よじ + はん."
  },
  {
   "kind": "choose",
   "q": "10 phút đọc là",
   "right": "じゅっぷん",
   "wrong": [
    "じゅうふん",
    "じゅっふん",
    "じゅうぷん"
   ],
   "level": "A2",
   "expl": "10 phút = じゅっぷん (hoặc じっぷん)."
  },
  {
   "kind": "choose",
   "q": "3 giờ chiều nói là",
   "right": "ごご さんじ",
   "wrong": [
    "ごぜん さんじ",
    "よる さんじ",
    "さんじ ごぜん"
   ],
   "level": "A1",
   "expl": "ごご đứng trước giờ."
  },
  {
   "kind": "choose",
   "q": "Câu hỏi hiện tại mấy giờ",
   "right": "いま なんじですか",
   "wrong": [
    "いま いくらですか",
    "いま どこですか",
    "いま だれですか"
   ],
   "level": "A1",
   "expl": "なんじ = mấy giờ."
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

const RUSH=[["おはようございます · こんばんは", ["ja-ais-aisatsu"]], ["いただきます · ごちそうさま", ["ja-ais-aisatsu"]], ["はじめまして · わたしは〜です", ["ja-ais-jikoshokai"]], ["〜から きました", ["ja-ais-jikoshokai"]], ["さんびゃく · ろっぴゃく", ["ja-ais-kazu"]], ["いちまん · さんぜん", ["ja-ais-kazu"]], ["ついたち · ふつか · みっか", ["ja-ais-hiduke"]], ["げつようび · かようび", ["ja-ais-hiduke"]], ["よじ · しちじ · くじ", ["ja-ais-hiduke"]], ["いま なんじですか", ["ja-ais-hiduke"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["aisatsu"] = { pool: POOL, types: TYPES, game: {title:"どれ？",desc:"60 giây. Thấy mẫu này, chọn đúng bài",prompt:"Mẫu này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"jaAisatsuRushBest"} };
})();
