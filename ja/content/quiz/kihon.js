/* ja/content/quiz/kihon.js: câu cơ bản, の/も/か, こそあど, từ để hỏi.
   Mixed exercise types: type the answer (fill, kana or romaji accepted,
   retry allowed) or pick one (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "ja-kih-desu": [
  {
   "kind": "fill",
   "q": "わたしは がくせい___。",
   "hint": "kana hoặc romaji",
   "accept": [
    "です",
    "desu"
   ],
   "level": "A1",
   "expl": "Câu danh từ lịch sự kết thúc bằng です."
  },
  {
   "kind": "fill",
   "q": "きのうは あめ___。(quá khứ)",
   "hint": "kana hoặc romaji",
   "accept": [
    "でした",
    "deshita"
   ],
   "level": "A1",
   "expl": "Quá khứ của です là でした."
  },
  {
   "kind": "fill",
   "q": "わたしは せんせい___ありません。",
   "hint": "kana hoặc romaji",
   "accept": [
    "じゃ",
    "では",
    "ja",
    "dewa"
   ],
   "level": "A1",
   "expl": "Phủ định: じゃありません / ではありません."
  },
  {
   "kind": "fill",
   "q": "これは ほんです___。(câu hỏi)",
   "hint": "kana hoặc romaji",
   "accept": [
    "か",
    "ka"
   ],
   "level": "A1",
   "expl": "Thêm か vào cuối để hỏi."
  },
  {
   "kind": "fill",
   "q": "きのうは やすみじゃありません___。(phủ định quá khứ)",
   "hint": "kana hoặc romaji",
   "accept": [
    "でした",
    "deshita"
   ],
   "level": "A2",
   "expl": "Phủ định quá khứ: じゃありませんでした."
  },
  {
   "kind": "fill",
   "q": "Thân mật: わたしは がくせい___。",
   "hint": "kana hoặc romaji",
   "accept": [
    "だ",
    "da"
   ],
   "level": "A2",
   "expl": "Thể thân mật của です là だ."
  },
  {
   "kind": "choose",
   "q": "Phủ định của がくせいです",
   "right": "がくせいじゃありません",
   "wrong": [
    "がくせいでした",
    "がくせいですか",
    "がくせいじゃありませんでした"
   ],
   "level": "A1",
   "expl": "Phủ định hiện tại: じゃありません."
  },
  {
   "kind": "choose",
   "q": "Quá khứ của あめです",
   "right": "あめでした",
   "wrong": [
    "あめました",
    "あめだです",
    "あめじゃありません"
   ],
   "level": "A1",
   "expl": "です → でした."
  },
  {
   "kind": "choose",
   "q": "“Hôm qua không phải ngày nghỉ”",
   "right": "きのうは やすみじゃありませんでした",
   "wrong": [
    "きのうは やすみじゃありません",
    "きのうは やすみでした",
    "きょうは やすみじゃありません"
   ],
   "level": "A2",
   "expl": "Phủ định quá khứ: じゃありませんでした."
  },
  {
   "kind": "choose",
   "q": "は trong わたしは đọc là",
   "right": "wa",
   "wrong": [
    "ha",
    "o",
    "e"
   ],
   "level": "A1",
   "expl": "Trợ từ は đọc wa."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "わたしは がくせいです",
   "wrong": [
    "わたしは がくせいは です",
    "わたしが です がくせい",
    "です わたしは がくせい"
   ],
   "level": "A1",
   "expl": "Chủ đề + は + danh từ + です."
  },
  {
   "kind": "choose",
   "q": "Trả lời “Vâng, đúng vậy”",
   "right": "はい、そうです",
   "wrong": [
    "いいえ、そうです",
    "はい、そうじゃありません",
    "いいえ、はい"
   ],
   "level": "A1",
   "expl": "はい、そうです."
  },
  {
   "kind": "choose",
   "q": "Trả lời “Không, không phải”",
   "right": "いいえ、そうじゃありません",
   "wrong": [
    "はい、そうです",
    "いいえ、そうでした",
    "はい、そうでした"
   ],
   "level": "A1",
   "expl": "いいえ、そうじゃありません."
  },
  {
   "kind": "choose",
   "q": "Thể thân mật của です (sau danh từ)",
   "right": "だ",
   "wrong": [
    "ます",
    "でした",
    "か"
   ],
   "level": "A2",
   "expl": "わたしは がくせい だ."
  },
  {
   "kind": "choose",
   "q": "Câu nào là câu hỏi?",
   "right": "がくせいですか",
   "wrong": [
    "がくせいです",
    "がくせいでした",
    "がくせいじゃありません"
   ],
   "level": "A1",
   "expl": "か cuối câu là câu hỏi."
  }
 ],
 "ja-kih-no-mo-ka": [
  {
   "kind": "fill",
   "q": "わたし___ ほん (sách của tôi)",
   "hint": "kana hoặc romaji",
   "accept": [
    "の",
    "no"
   ],
   "level": "A1",
   "expl": "の nối hai danh từ chỉ sở hữu."
  },
  {
   "kind": "fill",
   "q": "リンさん___ がくせいです。(Lin cũng …)",
   "hint": "kana hoặc romaji",
   "accept": [
    "も",
    "mo"
   ],
   "level": "A1",
   "expl": "も = cũng."
  },
  {
   "kind": "fill",
   "q": "にほんご___ せんせい",
   "hint": "kana hoặc romaji",
   "accept": [
    "の",
    "no"
   ],
   "level": "A1",
   "expl": "の chỉ loại/thuộc: giáo viên tiếng Nhật."
  },
  {
   "kind": "fill",
   "q": "あなたは がくせいです___。",
   "hint": "kana hoặc romaji",
   "accept": [
    "か",
    "ka"
   ],
   "level": "A1",
   "expl": "か tạo câu hỏi."
  },
  {
   "kind": "fill",
   "q": "いい てんきです___。(tìm đồng tình)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ね",
    "ne"
   ],
   "level": "A1",
   "expl": "ね = nhỉ."
  },
  {
   "kind": "fill",
   "q": "もう 9じです___。(thông báo)",
   "hint": "kana hoặc romaji",
   "accept": [
    "よ",
    "yo"
   ],
   "level": "A1",
   "expl": "よ = đấy."
  },
  {
   "kind": "fill",
   "q": "これは わたし___です。(của tôi)",
   "hint": "kana hoặc romaji",
   "accept": [
    "の",
    "no"
   ],
   "level": "A1",
   "expl": "N の + (N bị lược)."
  },
  {
   "kind": "choose",
   "q": "“Tôi cũng là sinh viên”",
   "right": "わたしも がくせいです",
   "wrong": [
    "わたしはも がくせいです",
    "わたしもは がくせいです",
    "わたしの がくせいです"
   ],
   "level": "A1",
   "expl": "も thay は, không đi chung."
  },
  {
   "kind": "choose",
   "q": "の trong せんせいの ほん nghĩa là",
   "right": "của",
   "wrong": [
    "cũng",
    "hỏi",
    "từ"
   ],
   "level": "A1",
   "expl": "の nối hai danh từ."
  },
  {
   "kind": "choose",
   "q": "も thay thế trợ từ nào?",
   "right": "は",
   "wrong": [
    "の",
    "か",
    "と"
   ],
   "level": "A1",
   "expl": "N は → N も."
  },
  {
   "kind": "choose",
   "q": "Cuối câu, か dùng để",
   "right": "tạo câu hỏi",
   "wrong": [
    "nhấn mạnh",
    "phủ định",
    "kết nối"
   ],
   "level": "A1",
   "expl": "か cuối câu = hỏi."
  },
  {
   "kind": "choose",
   "q": "ね cuối câu dùng để",
   "right": "tìm sự đồng tình",
   "wrong": [
    "đặt câu hỏi",
    "phủ định",
    "ra lệnh"
   ],
   "level": "A1",
   "expl": "ね = nhỉ?"
  },
  {
   "kind": "choose",
   "q": "よ cuối câu dùng để",
   "right": "thông báo điều người nghe chưa biết",
   "wrong": [
    "tìm đồng tình",
    "hỏi",
    "phủ định"
   ],
   "level": "A1",
   "expl": "よ = đấy."
  },
  {
   "kind": "choose",
   "q": "Câu nào sai?",
   "right": "わたしは も がくせいです",
   "wrong": [
    "わたしも がくせいです",
    "リンさんも がくせいです",
    "わたしの ほんです"
   ],
   "level": "A1",
   "expl": "は và も không đi chung."
  },
  {
   "kind": "choose",
   "q": "“Sách tiếng Nhật”",
   "right": "にほんごの ほん",
   "wrong": [
    "にほんごは ほん",
    "にほんごを ほん",
    "にほんごも ほん"
   ],
   "level": "A1",
   "expl": "N1 の N2."
  }
 ],
 "ja-kih-kosoado": [
  {
   "kind": "fill",
   "q": "Vật gần người nói: ___ は ほんです。",
   "hint": "kana hoặc romaji",
   "accept": [
    "これ",
    "kore"
   ],
   "level": "A1",
   "expl": "これ = cái này."
  },
  {
   "kind": "fill",
   "q": "Vật gần người nghe: ___ は かさです。",
   "hint": "kana hoặc romaji",
   "accept": [
    "それ",
    "sore"
   ],
   "level": "A1",
   "expl": "それ = cái đó."
  },
  {
   "kind": "fill",
   "q": "Vật xa cả hai: ___ は やまです。",
   "hint": "kana hoặc romaji",
   "accept": [
    "あれ",
    "are"
   ],
   "level": "A1",
   "expl": "あれ = cái kia."
  },
  {
   "kind": "fill",
   "q": "Hỏi vật nào: ___ が すきですか。",
   "hint": "kana hoặc romaji",
   "accept": [
    "どれ",
    "dore"
   ],
   "level": "A1",
   "expl": "どれ = cái nào."
  },
  {
   "kind": "fill",
   "q": "___ ほんは わたしのです。(cuốn sách này)",
   "hint": "kana hoặc romaji",
   "accept": [
    "この",
    "kono"
   ],
   "level": "A1",
   "expl": "この đi trước danh từ."
  },
  {
   "kind": "fill",
   "q": "えきは ___ です。(đằng kia)",
   "hint": "kana hoặc romaji",
   "accept": [
    "あそこ",
    "asoko"
   ],
   "level": "A1",
   "expl": "あそこ = chỗ kia."
  },
  {
   "kind": "fill",
   "q": "トイレは ___ ですか。(ở đâu)",
   "hint": "kana hoặc romaji",
   "accept": [
    "どこ",
    "doko"
   ],
   "level": "A1",
   "expl": "どこ = ở đâu."
  },
  {
   "kind": "fill",
   "q": "___ から きましたか。(lịch sự: nơi nào)",
   "hint": "kana hoặc romaji",
   "accept": [
    "どちら",
    "dochira"
   ],
   "level": "A2",
   "expl": "どちら lịch sự hơn どこ."
  },
  {
   "kind": "choose",
   "q": "“Đây” (nơi gần người nói)",
   "right": "ここ",
   "wrong": [
    "これ",
    "そこ",
    "あれ"
   ],
   "level": "A1",
   "expl": "ここ là nơi chốn."
  },
  {
   "kind": "choose",
   "q": "“Đó” (nơi gần người nghe)",
   "right": "そこ",
   "wrong": [
    "それ",
    "ここ",
    "あそこ"
   ],
   "level": "A1",
   "expl": "そこ là nơi chốn."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "この ほん",
   "wrong": [
    "これ ほん",
    "あれ ほん",
    "それ ほん"
   ],
   "level": "A1",
   "expl": "この + danh từ."
  },
  {
   "kind": "choose",
   "q": "あの ひと nghĩa là",
   "right": "người kia",
   "wrong": [
    "người này",
    "người ở đó",
    "người nào"
   ],
   "level": "A1",
   "expl": "あの = kia."
  },
  {
   "kind": "choose",
   "q": "“Loại nào?”",
   "right": "どんな",
   "wrong": [
    "どの",
    "どれ",
    "どこ"
   ],
   "level": "A2",
   "expl": "どんな + danh từ = loại gì."
  },
  {
   "kind": "choose",
   "q": "Khi nhắc lại điều người nghe vừa nói, thường dùng",
   "right": "そ (それ, その)",
   "wrong": [
    "こ",
    "あ",
    "ど"
   ],
   "level": "A2",
   "expl": "そ dùng cho nội dung người kia vừa nói."
  },
  {
   "kind": "choose",
   "q": "どれ khác どの ở chỗ",
   "right": "どれ đứng một mình, どの đi trước danh từ",
   "wrong": [
    "どれ hỏi người, どの hỏi vật",
    "どれ hỏi nơi, どの hỏi giờ",
    "Không khác"
   ],
   "level": "A1",
   "expl": "どれ thay danh từ; どの cần danh từ."
  }
 ],
 "ja-kih-gimon": [
  {
   "kind": "fill",
   "q": "これは ___ ですか。(cái gì)",
   "hint": "kana hoặc romaji",
   "accept": [
    "なん",
    "nan"
   ],
   "level": "A1",
   "expl": "なに đổi thành なん trước です."
  },
  {
   "kind": "fill",
   "q": "あの ひとは ___ ですか。(ai)",
   "hint": "kana hoặc romaji",
   "accept": [
    "だれ",
    "dare"
   ],
   "level": "A1",
   "expl": "だれ = ai."
  },
  {
   "kind": "fill",
   "q": "えきは ___ ですか。(ở đâu)",
   "hint": "kana hoặc romaji",
   "accept": [
    "どこ",
    "doko"
   ],
   "level": "A1",
   "expl": "どこ = ở đâu."
  },
  {
   "kind": "fill",
   "q": "___ にほんへ いきますか。(khi nào)",
   "hint": "kana hoặc romaji",
   "accept": [
    "いつ",
    "itsu"
   ],
   "level": "A1",
   "expl": "いつ = khi nào."
  },
  {
   "kind": "fill",
   "q": "これは ___ ですか。(bao nhiêu tiền)",
   "hint": "kana hoặc romaji",
   "accept": [
    "いくら",
    "ikura"
   ],
   "level": "A1",
   "expl": "いくら = bao nhiêu tiền."
  },
  {
   "kind": "fill",
   "q": "___ やすみましたか。(tại sao)",
   "hint": "kana hoặc romaji",
   "accept": [
    "どうして",
    "doushite",
    "dōshite"
   ],
   "level": "A2",
   "expl": "どうして = tại sao."
  },
  {
   "kind": "fill",
   "q": "にほんは ___ ですか。(thế nào)",
   "hint": "kana hoặc romaji",
   "accept": [
    "どう",
    "dou",
    "dō"
   ],
   "level": "A2",
   "expl": "どう = thế nào."
  },
  {
   "kind": "choose",
   "q": "Trước です, なに đổi thành",
   "right": "なん",
   "wrong": [
    "なぜ",
    "なる",
    "なの"
   ],
   "level": "A1",
   "expl": "なにですか → なんですか."
  },
  {
   "kind": "choose",
   "q": "だれ lịch sự hơn là",
   "right": "どなた",
   "wrong": [
    "どれ",
    "どこ",
    "どちら"
   ],
   "level": "A2",
   "expl": "どなた = vị nào."
  },
  {
   "kind": "choose",
   "q": "Tiếng Nhật đặt câu hỏi bằng cách",
   "right": "giữ nguyên trật tự, thêm か",
   "wrong": [
    "đảo chủ ngữ",
    "đổi động từ",
    "thêm あ"
   ],
   "level": "A1",
   "expl": "Chỉ cần thêm か."
  },
  {
   "kind": "choose",
   "q": "いくつ dùng để hỏi",
   "right": "số lượng nhỏ, tuổi",
   "wrong": [
    "giá tiền",
    "ngày giờ",
    "nơi chốn"
   ],
   "level": "A1",
   "expl": "いくつ = mấy cái / mấy tuổi."
  },
  {
   "kind": "choose",
   "q": "“Mấy giờ?”",
   "right": "なんじ",
   "wrong": [
    "いくじ",
    "だれじ",
    "どこじ"
   ],
   "level": "A1",
   "expl": "なん + じ."
  },
  {
   "kind": "choose",
   "q": "どうして dùng để hỏi",
   "right": "lý do",
   "wrong": [
    "nơi chốn",
    "giá",
    "thời gian"
   ],
   "level": "A2",
   "expl": "どうして = tại sao."
  },
  {
   "kind": "choose",
   "q": "“Cái nào?” (trong nhiều cái)",
   "right": "どれ",
   "wrong": [
    "なに",
    "だれ",
    "どこ"
   ],
   "level": "A1",
   "expl": "どれ = cái nào."
  },
  {
   "kind": "choose",
   "q": "どんな N nghĩa là",
   "right": "N loại nào",
   "wrong": [
    "N ở đâu",
    "N của ai",
    "N bao nhiêu"
   ],
   "level": "A2",
   "expl": "どんな hỏi loại."
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

const RUSH=[["わたしは がくせいです", ["ja-kih-desu"]], ["じゃありません · でした", ["ja-kih-desu"]], ["わたしの ほん", ["ja-kih-no-mo-ka"]], ["わたしも · ですね", ["ja-kih-no-mo-ka"]], ["これ · それ · あれ", ["ja-kih-kosoado"]], ["この · その · あの", ["ja-kih-kosoado"]], ["ここ · そこ · あそこ", ["ja-kih-kosoado"]], ["なん · だれ · どこ", ["ja-kih-gimon"]], ["いつ · いくら", ["ja-kih-gimon"]], ["どうして · どう", ["ja-kih-gimon"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["kihon"] = { pool: POOL, types: TYPES, game: {title:"どれ？",desc:"60 giây. Thấy mẫu này, chọn đúng bài",prompt:"Mẫu này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"jaKihonRushBest"} };
})();
