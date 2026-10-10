/* ja/content/quiz/doushi.js: động từ ます, nhóm động từ, rủ rê, tần suất.
   Mixed exercise types: type the answer (fill, kana or romaji accepted,
   retry allowed) or pick one (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "ja-dou-masu": [
  {
   "kind": "fill",
   "q": "まいにち パンを たべ___。",
   "hint": "kana hoặc romaji",
   "accept": [
    "ます",
    "masu"
   ],
   "level": "A1",
   "expl": "Hiện tại khẳng định: 〜ます."
  },
  {
   "kind": "fill",
   "q": "にくを たべ___。(phủ định)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ません",
    "masen"
   ],
   "level": "A1",
   "expl": "Phủ định lịch sự: 〜ません."
  },
  {
   "kind": "fill",
   "q": "きのう えいがを み___。(quá khứ)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ました",
    "mashita"
   ],
   "level": "A1",
   "expl": "Quá khứ: 〜ました."
  },
  {
   "kind": "fill",
   "q": "あさ ごはんを たべ___。(quá khứ phủ định)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ませんでした",
    "masendeshita"
   ],
   "level": "A2",
   "expl": "Quá khứ phủ định: 〜ませんでした."
  },
  {
   "kind": "fill",
   "q": "コーヒーを のみます___。(câu hỏi)",
   "hint": "kana hoặc romaji",
   "accept": [
    "か",
    "ka"
   ],
   "level": "A1",
   "expl": "Thêm か cuối câu để hỏi."
  },
  {
   "kind": "fill",
   "q": "あした がっこうへ いき___。",
   "hint": "kana hoặc romaji",
   "accept": [
    "ます",
    "masu"
   ],
   "level": "A1",
   "expl": "Thì tương lai dùng chính dạng ます."
  },
  {
   "kind": "fill",
   "q": "けさ なにも たべ___でした。",
   "hint": "kana hoặc romaji",
   "accept": [
    "ません",
    "masen"
   ],
   "level": "A2",
   "expl": "〜ませんでした = quá khứ phủ định."
  },
  {
   "kind": "choose",
   "q": "「たべます」nghĩa là",
   "right": "ăn (hiện tại / tương lai)",
   "wrong": [
    "đã ăn",
    "không ăn",
    "đừng ăn"
   ],
   "level": "A1",
   "expl": "ます = hiện tại / tương lai."
  },
  {
   "kind": "choose",
   "q": "Dạng quá khứ của「のみます」là",
   "right": "のみました",
   "wrong": [
    "のみません",
    "のみました か",
    "のむました"
   ],
   "level": "A1",
   "expl": "ます → ました."
  },
  {
   "kind": "choose",
   "q": "Dạng phủ định của「いきます」là",
   "right": "いきません",
   "wrong": [
    "いきませんか",
    "いきません です",
    "いかます"
   ],
   "level": "A1",
   "expl": "ます → ません."
  },
  {
   "kind": "choose",
   "q": "Quá khứ phủ định của「みます」là",
   "right": "みませんでした",
   "wrong": [
    "みませんした",
    "みなかったです",
    "みましたない"
   ],
   "level": "A2",
   "expl": "ません → ませんでした."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "きのう えいがを みました",
   "wrong": [
    "きのう えいがを みます",
    "きのう えいがを みません",
    "きのう えいがを みるでした"
   ],
   "level": "A1",
   "expl": "きのう = quá khứ nên dùng ました."
  },
  {
   "kind": "choose",
   "q": "Trả lời đúng cho「パンを たべましたか」(đã ăn)",
   "right": "はい、たべました",
   "wrong": [
    "はい、たべます",
    "はい、たべません",
    "はい、たべるました"
   ],
   "level": "A1",
   "expl": "Trả lời lặp lại động từ ở thì quá khứ."
  },
  {
   "kind": "choose",
   "q": "Thể ます dùng với",
   "right": "người lạ, cấp trên",
   "wrong": [
    "bạn thân",
    "gia đình",
    "chính mình khi nghĩ thầm"
   ],
   "level": "A1",
   "expl": "Thể ます là thể lịch sự."
  },
  {
   "kind": "choose",
   "q": "Động từ tiếng Nhật có chia theo ngôi không?",
   "right": "Không",
   "wrong": [
    "Có, 3 ngôi",
    "Chỉ ngôi thứ nhất",
    "Chỉ số nhiều"
   ],
   "level": "A1",
   "expl": "Tiếng Nhật không chia động từ theo ngôi/số."
  }
 ],
 "ja-dou-nhom": [
  {
   "kind": "fill",
   "q": "のむ → のみ___ (ます)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ます",
    "masu"
   ],
   "level": "A1",
   "expl": "Nhóm 1: u → i + ます."
  },
  {
   "kind": "fill",
   "q": "たべる → たべ___ (ます)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ます",
    "masu"
   ],
   "level": "A1",
   "expl": "Nhóm 2: bỏ る + ます."
  },
  {
   "kind": "fill",
   "q": "する → し___",
   "hint": "kana hoặc romaji",
   "accept": [
    "ます",
    "masu"
   ],
   "level": "A1",
   "expl": "する → します."
  },
  {
   "kind": "fill",
   "q": "くる → き___",
   "hint": "kana hoặc romaji",
   "accept": [
    "ます",
    "masu"
   ],
   "level": "A1",
   "expl": "くる → きます."
  },
  {
   "kind": "fill",
   "q": "かえる → かえ___ (ます, nhóm 1)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ります",
    "rimasu"
   ],
   "level": "A2",
   "expl": "かえる là nhóm 1: かえります."
  },
  {
   "kind": "fill",
   "q": "かく → かき___",
   "hint": "kana hoặc romaji",
   "accept": [
    "ます",
    "masu"
   ],
   "level": "A1",
   "expl": "Nhóm 1: く → き + ます."
  },
  {
   "kind": "fill",
   "q": "はなす → はな___",
   "hint": "kana hoặc romaji",
   "accept": [
    "します",
    "shimasu"
   ],
   "level": "A1",
   "expl": "す → し + ます."
  },
  {
   "kind": "choose",
   "q": "「たべる」thuộc nhóm",
   "right": "Nhóm 2",
   "wrong": [
    "Nhóm 1",
    "Nhóm 3",
    "Không chia"
   ],
   "level": "A1",
   "expl": "〜eる = nhóm 2."
  },
  {
   "kind": "choose",
   "q": "「のむ」thuộc nhóm",
   "right": "Nhóm 1",
   "wrong": [
    "Nhóm 2",
    "Nhóm 3",
    "Không chia"
   ],
   "level": "A1",
   "expl": "Đuôi む = nhóm 1."
  },
  {
   "kind": "choose",
   "q": "Nhóm 3 gồm",
   "right": "する và くる",
   "wrong": [
    "たべる và みる",
    "いく và かえる",
    "のむ và かく"
   ],
   "level": "A1",
   "expl": "Chỉ hai động từ bất quy tắc."
  },
  {
   "kind": "choose",
   "q": "「かえる」(về) thuộc nhóm",
   "right": "Nhóm 1 (ngoại lệ)",
   "wrong": [
    "Nhóm 2",
    "Nhóm 3",
    "Không có nhóm"
   ],
   "level": "A2",
   "expl": "Trông như nhóm 2 nhưng là nhóm 1."
  },
  {
   "kind": "choose",
   "q": "ます của「みる」là",
   "right": "みます",
   "wrong": [
    "みります",
    "みいます",
    "みます る"
   ],
   "level": "A1",
   "expl": "Nhóm 2 bỏ る + ます."
  },
  {
   "kind": "choose",
   "q": "ます của「はいる」(vào) là",
   "right": "はいります",
   "wrong": [
    "はいます",
    "はいりまする",
    "はいいます"
   ],
   "level": "A2",
   "expl": "はいる là nhóm 1."
  },
  {
   "kind": "choose",
   "q": "ます của「あう」(gặp) là",
   "right": "あいます",
   "wrong": [
    "あうます",
    "あります",
    "あえます"
   ],
   "level": "A2",
   "expl": "Nhóm 1: う → い + ます."
  },
  {
   "kind": "choose",
   "q": "Quy tắc nhóm 2 là",
   "right": "bỏ る + ます",
   "wrong": [
    "đổi u → i",
    "đổi hẳn gốc",
    "thêm ます vào nguyên dạng"
   ],
   "level": "A1",
   "expl": "たべる → たべます."
  }
 ],
 "ja-dou-masenka": [
  {
   "kind": "fill",
   "q": "いっしょに えいがを み___か。(mời)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ません",
    "masen"
   ],
   "level": "A1",
   "expl": "〜ませんか = mời lịch sự."
  },
  {
   "kind": "fill",
   "q": "じゃ、いき___。(cùng đi nào)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ましょう",
    "mashou",
    "masho"
   ],
   "level": "A1",
   "expl": "〜ましょう = cùng làm nào."
  },
  {
   "kind": "fill",
   "q": "にもつを もち___か。(để tôi xách giúp nhé)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ましょう",
    "mashou",
    "masho"
   ],
   "level": "A2",
   "expl": "〜ましょうか = để tôi làm."
  },
  {
   "kind": "fill",
   "q": "なにを たべ___か。(ăn gì nhỉ?, hỏi ý cùng nhóm)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ましょう",
    "mashou",
    "masho"
   ],
   "level": "A2",
   "expl": "〜ましょうか hỏi ý cùng nhóm."
  },
  {
   "kind": "fill",
   "q": "ええ、いき___。(nhận lời)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ましょう",
    "mashou",
    "masho"
   ],
   "level": "A1",
   "expl": "Nhận lời: ええ、〜ましょう."
  },
  {
   "kind": "fill",
   "q": "じゃ、いっしょに のみ___。(rủ cùng uống)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ましょう",
    "mashou",
    "masho"
   ],
   "level": "A1",
   "expl": "〜ましょう = cùng làm nào."
  },
  {
   "kind": "fill",
   "q": "まどを あけ___か。(để tôi mở nhé)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ましょう",
    "mashou",
    "masho"
   ],
   "level": "A2",
   "expl": "Đề nghị giúp mở cửa sổ."
  },
  {
   "kind": "choose",
   "q": "「いきませんか」dùng để",
   "right": "mời lịch sự",
   "wrong": [
    "cấm đoán",
    "hỏi đường",
    "từ chối"
   ],
   "level": "A1",
   "expl": "〜ませんか = mời."
  },
  {
   "kind": "choose",
   "q": "「いきましょう」nghĩa là",
   "right": "Cùng đi nào",
   "wrong": [
    "Anh có đi không?",
    "Đừng đi",
    "Đã đi rồi"
   ],
   "level": "A1",
   "expl": "〜ましょう = rủ cùng làm."
  },
  {
   "kind": "choose",
   "q": "Đề nghị giúp xách đồ",
   "right": "にもつを もちましょうか",
   "wrong": [
    "にもつを もちませんか",
    "にもつを もちます",
    "にもつを もたない"
   ],
   "level": "A2",
   "expl": "〜ましょうか = để tôi giúp nhé."
  },
  {
   "kind": "choose",
   "q": "Cách từ chối khéo thường là",
   "right": "すみません、ちょっと…",
   "wrong": [
    "いいえ、ぜったいだめです",
    "わかりません",
    "どうぞ"
   ],
   "level": "A2",
   "expl": "Người Nhật tránh nói “không” thẳng."
  },
  {
   "kind": "choose",
   "q": "Nhận lời mời tự nhiên",
   "right": "ええ、ぜひ",
   "wrong": [
    "いいえ、ぜんぜん",
    "ちょっと、むり",
    "わかりません"
   ],
   "level": "A2",
   "expl": "ええ、ぜひ = vâng, rất sẵn lòng."
  },
  {
   "kind": "choose",
   "q": "「のみませんか」khác「のみましょう」ở",
   "right": "ませんか lịch sự hơn khi mời",
   "wrong": [
    "Không khác",
    "ましょう lịch sự hơn",
    "ませんか chỉ dùng cho phủ định"
   ],
   "level": "A2",
   "expl": "〜ませんか nhẹ nhàng hơn."
  },
  {
   "kind": "choose",
   "q": "Hỏi ý kiến cùng người nghe",
   "right": "なにを たべましょうか",
   "wrong": [
    "なにを たべませんか",
    "なにを たべました",
    "なにを たべます"
   ],
   "level": "A2",
   "expl": "〜ましょうか hỏi ý."
  },
  {
   "kind": "choose",
   "q": "「いっしょに」nghĩa là",
   "right": "cùng nhau",
   "wrong": [
    "một mình",
    "nhanh chóng",
    "thỉnh thoảng"
   ],
   "level": "A1",
   "expl": "いっしょに = together."
  }
 ],
 "ja-dou-hindo": [
  {
   "kind": "fill",
   "q": "___ でんしゃで いきます。(luôn luôn)",
   "hint": "kana hoặc romaji",
   "accept": [
    "いつも",
    "itsumo"
   ],
   "level": "A2",
   "expl": "いつも = luôn luôn."
  },
  {
   "kind": "fill",
   "q": "___ えいがを みます。(thường)",
   "hint": "kana hoặc romaji",
   "accept": [
    "よく",
    "yoku"
   ],
   "level": "A2",
   "expl": "よく = thường."
  },
  {
   "kind": "fill",
   "q": "___ りょうりを します。(thỉnh thoảng)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ときどき",
    "tokidoki"
   ],
   "level": "A2",
   "expl": "ときどき = thỉnh thoảng."
  },
  {
   "kind": "fill",
   "q": "あまり おさけを のみ___。",
   "hint": "kana hoặc romaji",
   "accept": [
    "ません",
    "masen"
   ],
   "level": "A2",
   "expl": "あまり đi với phủ định."
  },
  {
   "kind": "fill",
   "q": "ぜんぜん べんきょうし___。",
   "hint": "kana hoặc romaji",
   "accept": [
    "ません",
    "masen"
   ],
   "level": "A2",
   "expl": "ぜんぜん đi với phủ định."
  },
  {
   "kind": "fill",
   "q": "___ にほんごを べんきょうします。(mỗi ngày)",
   "hint": "kana hoặc romaji",
   "accept": [
    "まいにち",
    "mainichi"
   ],
   "level": "A1",
   "expl": "まいにち = mỗi ngày."
  },
  {
   "kind": "fill",
   "q": "にちようびは たいてい うちに い___。",
   "hint": "kana hoặc romaji",
   "accept": [
    "ます",
    "masu"
   ],
   "level": "A2",
   "expl": "たいてい (thường) đi khẳng định."
  },
  {
   "kind": "choose",
   "q": "「ぜんぜん」đi với",
   "right": "phủ định",
   "wrong": [
    "khẳng định",
    "nghi vấn",
    "mệnh lệnh"
   ],
   "level": "A2",
   "expl": "ぜんぜん〜ません."
  },
  {
   "kind": "choose",
   "q": "Mức độ cao nhất",
   "right": "いつも",
   "wrong": [
    "ときどき",
    "あまり",
    "ぜんぜん"
   ],
   "level": "A2",
   "expl": "いつも = 100%."
  },
  {
   "kind": "choose",
   "q": "Ít nhất trong các từ sau",
   "right": "ぜんぜん〜ません",
   "wrong": [
    "よく",
    "いつも",
    "ときどき"
   ],
   "level": "A2",
   "expl": "Gần 0%."
  },
  {
   "kind": "choose",
   "q": "Câu nào sai?",
   "right": "あまり のみます",
   "wrong": [
    "あまり のみません",
    "よく のみます",
    "ときどき のみます"
   ],
   "level": "A2",
   "expl": "あまり phải đi với phủ định."
  },
  {
   "kind": "choose",
   "q": "“Hầu như không bao giờ” gần nghĩa nhất",
   "right": "あまり〜ません",
   "wrong": [
    "いつも〜ます",
    "よく〜ます",
    "まいにち〜ます"
   ],
   "level": "A2",
   "expl": "あまり〜ません = ít khi."
  },
  {
   "kind": "choose",
   "q": "Hỏi tần suất trong tuần",
   "right": "しゅうに なんかい しますか",
   "wrong": [
    "なんじですか",
    "どこですか",
    "だれですか"
   ],
   "level": "B1",
   "expl": "しゅうに + số + かい."
  },
  {
   "kind": "choose",
   "q": "「まいあさ」nghĩa là",
   "right": "mỗi sáng",
   "wrong": [
    "mỗi tối",
    "mỗi tuần",
    "mỗi tháng"
   ],
   "level": "A1",
   "expl": "まいあさ = every morning."
  },
  {
   "kind": "choose",
   "q": "Vị trí của trạng từ tần suất",
   "right": "Trước động từ",
   "wrong": [
    "Sau động từ",
    "Cuối câu",
    "Đầu câu bắt buộc"
   ],
   "level": "A2",
   "expl": "よく えいがを みます."
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

const RUSH=[["たべます · たべません", ["ja-dou-masu"]], ["たべました", ["ja-dou-masu"]], ["のむ → のみます", ["ja-dou-nhom"]], ["たべる → たべます", ["ja-dou-nhom"]], ["いきませんか", ["ja-dou-masenka"]], ["いきましょう", ["ja-dou-masenka"]], ["にもつを もちましょうか", ["ja-dou-masenka"]], ["いつも · よく", ["ja-dou-hindo"]], ["あまり〜ません", ["ja-dou-hindo"]], ["ぜんぜん〜ません", ["ja-dou-hindo"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["doushi"] = { pool: POOL, types: TYPES, game: {title:"どれ？",desc:"60 giây. Thấy mẫu này, chọn đúng bài",prompt:"Mẫu này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"jaDoushiRushBest"} };
})();
