/* ja/content/quiz/sonzai.js: あります/います, vị trí, đếm, hỏi số lượng.
   Mixed exercise types: type the answer (fill, kana or romaji accepted,
   retry allowed) or pick one (choose). Wrong answers can be retried. */
(() => {
const BANK = {
 "ja-son-aru-iru": [
  {
   "kind": "fill",
   "q": "つくえの うえに ほん___ あります。",
   "hint": "kana hoặc romaji",
   "accept": [
    "が",
    "ga"
   ],
   "level": "A1",
   "expl": "Vật tồn tại đi với が."
  },
  {
   "kind": "fill",
   "q": "きょうしつに せんせいが ___。",
   "hint": "kana hoặc romaji",
   "accept": [
    "います",
    "imasu"
   ],
   "level": "A1",
   "expl": "Người dùng います."
  },
  {
   "kind": "fill",
   "q": "へやに ねこが ___。",
   "hint": "kana hoặc romaji",
   "accept": [
    "います",
    "imasu"
   ],
   "level": "A1",
   "expl": "Động vật dùng います."
  },
  {
   "kind": "fill",
   "q": "れいぞうこに ぎゅうにゅうが あり___。(không có)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ません",
    "masen"
   ],
   "level": "A1",
   "expl": "Phủ định: ありません."
  },
  {
   "kind": "fill",
   "q": "へやに だれも い___。(không có ai)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ません",
    "masen"
   ],
   "level": "A1",
   "expl": "いません."
  },
  {
   "kind": "fill",
   "q": "きのう ここに ねこが い___。(quá khứ)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ました",
    "mashita"
   ],
   "level": "A2",
   "expl": "いました."
  },
  {
   "kind": "fill",
   "q": "あした かいぎが ___。(sự kiện)",
   "hint": "kana hoặc romaji",
   "accept": [
    "あります",
    "arimasu"
   ],
   "level": "A2",
   "expl": "Sự kiện dùng あります."
  },
  {
   "kind": "choose",
   "q": "「はなが あります」: はな là",
   "right": "vật (hoa)",
   "wrong": [
    "người",
    "động vật",
    "địa điểm"
   ],
   "level": "A1",
   "expl": "Cây cối dùng あります."
  },
  {
   "kind": "choose",
   "q": "Cho người dùng",
   "right": "います",
   "wrong": [
    "あります",
    "ありません",
    "ります"
   ],
   "level": "A1",
   "expl": "います = có (người)."
  },
  {
   "kind": "choose",
   "q": "Có ai ở nhà không?",
   "right": "うちに だれが いますか",
   "wrong": [
    "うちに だれが ありますか",
    "うちに なにが いますか",
    "うちを だれが いますか"
   ],
   "level": "A1",
   "expl": "だれ + います."
  },
  {
   "kind": "choose",
   "q": "Trong cặp có gì?",
   "right": "かばんの なかに なにが ありますか",
   "wrong": [
    "かばんの なかに なにが いますか",
    "かばんの なかを なにが ありますか",
    "かばんの なかで なにが ありますか"
   ],
   "level": "A1",
   "expl": "なに + あります."
  },
  {
   "kind": "choose",
   "q": "Phủ định của「います」là",
   "right": "いません",
   "wrong": [
    "ありません",
    "いない です",
    "いるません"
   ],
   "level": "A1",
   "expl": "いません."
  },
  {
   "kind": "choose",
   "q": "Hỏi “ga ở đâu?”",
   "right": "えきは どこに ありますか",
   "wrong": [
    "えきが どこに いますか",
    "えきは どこで ありますか",
    "えきを どこに ありますか"
   ],
   "level": "A1",
   "expl": "N は どこに あります."
  },
  {
   "kind": "choose",
   "q": "Nơi tổ chức sự kiện dùng",
   "right": "で",
   "wrong": [
    "に",
    "を",
    "が"
   ],
   "level": "B1",
   "expl": "パーティーは うちで あります."
  },
  {
   "kind": "choose",
   "q": "「ねこは います」chọn đúng vì",
   "right": "ねこ là động vật",
   "wrong": [
    "ねこ là vật",
    "います dùng cho mọi thứ",
    "あります bị cấm"
   ],
   "level": "A1",
   "expl": "います cho sinh vật có thể tự di chuyển."
  }
 ],
 "ja-son-ichi": [
  {
   "kind": "fill",
   "q": "つくえの ___に ほんが あります。(trên)",
   "hint": "kana hoặc romaji",
   "accept": [
    "うえ",
    "ue"
   ],
   "level": "A1",
   "expl": "うえ = trên."
  },
  {
   "kind": "fill",
   "q": "いすの ___に ねこが います。(dưới)",
   "hint": "kana hoặc romaji",
   "accept": [
    "した",
    "shita"
   ],
   "level": "A1",
   "expl": "した = dưới."
  },
  {
   "kind": "fill",
   "q": "はこの ___に なにが ありますか。(trong)",
   "hint": "kana hoặc romaji",
   "accept": [
    "なか",
    "naka"
   ],
   "level": "A1",
   "expl": "なか = trong."
  },
  {
   "kind": "fill",
   "q": "えきの ___に ぎんこうが あります。(trước)",
   "hint": "kana hoặc romaji",
   "accept": [
    "まえ",
    "mae"
   ],
   "level": "A1",
   "expl": "まえ = trước."
  },
  {
   "kind": "fill",
   "q": "ゆうびんきょくの ___に コンビニが あります。(bên cạnh)",
   "hint": "kana hoặc romaji",
   "accept": [
    "となり",
    "tonari"
   ],
   "level": "A1",
   "expl": "となり = bên cạnh."
  },
  {
   "kind": "fill",
   "q": "ぎんこうと ほんやの ___に はなやが あります。(giữa)",
   "hint": "kana hoặc romaji",
   "accept": [
    "あいだ",
    "aida"
   ],
   "level": "A2",
   "expl": "あいだ = giữa."
  },
  {
   "kind": "fill",
   "q": "つくえ___ うえ (trên bàn)",
   "hint": "kana hoặc romaji",
   "accept": [
    "の",
    "no"
   ],
   "level": "A1",
   "expl": "N の うえ."
  },
  {
   "kind": "choose",
   "q": "「うしろ」nghĩa là",
   "right": "phía sau",
   "wrong": [
    "phía trước",
    "bên trong",
    "bên phải"
   ],
   "level": "A1",
   "expl": "うしろ = sau."
  },
  {
   "kind": "choose",
   "q": "「ひだり」nghĩa là",
   "right": "bên trái",
   "wrong": [
    "bên phải",
    "phía trên",
    "giữa"
   ],
   "level": "A1",
   "expl": "ひだり = trái."
  },
  {
   "kind": "choose",
   "q": "Bên ngoài là",
   "right": "そと",
   "wrong": [
    "なか",
    "うえ",
    "よこ"
   ],
   "level": "A1",
   "expl": "そと = ngoài."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "つくえの うえに ほんが あります",
   "wrong": [
    "つくえ うえに ほんが あります",
    "つくえを うえに ほんが あります",
    "つくえで うえに ほんが あります"
   ],
   "level": "A1",
   "expl": "N の うえ."
  },
  {
   "kind": "choose",
   "q": "Gần ga",
   "right": "えきの ちかくに",
   "wrong": [
    "えきの あいだに",
    "えきの なかを",
    "えきが した"
   ],
   "level": "A1",
   "expl": "ちかく = gần."
  },
  {
   "kind": "choose",
   "q": "Giữa A và B",
   "right": "AとBの あいだ",
   "wrong": [
    "AのBの あいだ",
    "AをBの あいだ",
    "AとBが あいだ"
   ],
   "level": "A2",
   "expl": "A と B の あいだ."
  },
  {
   "kind": "choose",
   "q": "Bên phải",
   "right": "みぎ",
   "wrong": [
    "ひだり",
    "まえ",
    "うしろ"
   ],
   "level": "A1",
   "expl": "みぎ = phải."
  },
  {
   "kind": "choose",
   "q": "Hỏi đường: “Nhà vệ sinh ở đâu?”",
   "right": "トイレは どこですか",
   "wrong": [
    "トイレは なんですか",
    "トイレは だれですか",
    "トイレは いつですか"
   ],
   "level": "A1",
   "expl": "どこ = ở đâu."
  }
 ],
 "ja-son-kazoe": [
  {
   "kind": "fill",
   "q": "りんごを ___ かいました。(3 quả)",
   "hint": "kana hoặc romaji",
   "accept": [
    "みっつ",
    "mittsu"
   ],
   "level": "A1",
   "expl": "3 = みっつ."
  },
  {
   "kind": "fill",
   "q": "がくせいが 5___ います。(5 người)",
   "hint": "kana hoặc romaji",
   "accept": [
    "にん",
    "nin"
   ],
   "level": "A1",
   "expl": "5 người = ごにん."
  },
  {
   "kind": "fill",
   "q": "きってを 2___ ください。(2 tờ)",
   "hint": "kana hoặc romaji",
   "accept": [
    "まい",
    "mai"
   ],
   "level": "A1",
   "expl": "まい = vật phẳng."
  },
  {
   "kind": "fill",
   "q": "ペンが 3___ あります。(3 cây bút)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ぼん",
    "bon"
   ],
   "level": "A1",
   "expl": "3 cây dài = さんぼん."
  },
  {
   "kind": "fill",
   "q": "ほんを 5___ よみました。(5 cuốn)",
   "hint": "kana hoặc romaji",
   "accept": [
    "さつ",
    "satsu"
   ],
   "level": "A1",
   "expl": "さつ = sách."
  },
  {
   "kind": "fill",
   "q": "いぬが 2___ います。(2 con)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ひき",
    "hiki"
   ],
   "level": "A1",
   "expl": "2 con = にひき."
  },
  {
   "kind": "fill",
   "q": "くるまが 3___ あります。(3 chiếc xe)",
   "hint": "kana hoặc romaji",
   "accept": [
    "だい",
    "dai"
   ],
   "level": "A1",
   "expl": "だい = máy móc."
  },
  {
   "kind": "choose",
   "q": "Đếm người (2 người)",
   "right": "ふたり",
   "wrong": [
    "ふたつ",
    "にまい",
    "にほん"
   ],
   "level": "A1",
   "expl": "ふたり là ngoại lệ."
  },
  {
   "kind": "choose",
   "q": "Đếm người (1 người)",
   "right": "ひとり",
   "wrong": [
    "ひとつ",
    "いちにん",
    "いっぴき"
   ],
   "level": "A1",
   "expl": "ひとり."
  },
  {
   "kind": "choose",
   "q": "Đếm vật chung (4 cái)",
   "right": "よっつ",
   "wrong": [
    "よんにん",
    "よんだい",
    "よんまい"
   ],
   "level": "A1",
   "expl": "よっつ."
  },
  {
   "kind": "choose",
   "q": "Đếm tầng nhà (5 tầng)",
   "right": "ごかい",
   "wrong": [
    "ごまい",
    "ごほん",
    "ごさつ"
   ],
   "level": "A1",
   "expl": "かい = tầng."
  },
  {
   "kind": "choose",
   "q": "Đếm giấy",
   "right": "〜まい",
   "wrong": [
    "〜ほん",
    "〜ひき",
    "〜にん"
   ],
   "level": "A1",
   "expl": "まい = phẳng."
  },
  {
   "kind": "choose",
   "q": "Đếm chai nước",
   "right": "〜ほん",
   "wrong": [
    "〜まい",
    "〜さつ",
    "〜だい"
   ],
   "level": "A1",
   "expl": "ほん = dài."
  },
  {
   "kind": "choose",
   "q": "Đếm sách",
   "right": "〜さつ",
   "wrong": [
    "〜まい",
    "〜ほん",
    "〜にん"
   ],
   "level": "A1",
   "expl": "さつ = sách."
  },
  {
   "kind": "choose",
   "q": "Đếm con mèo",
   "right": "〜ひき",
   "wrong": [
    "〜にん",
    "〜だい",
    "〜まい"
   ],
   "level": "A1",
   "expl": "ひき = động vật nhỏ."
  }
 ],
 "ja-son-suuryou": [
  {
   "kind": "fill",
   "q": "たまごが ___ ありますか。(hỏi số vật)",
   "hint": "kana hoặc romaji",
   "accept": [
    "いくつ",
    "ikutsu"
   ],
   "level": "A1",
   "expl": "いくつ."
  },
  {
   "kind": "fill",
   "q": "きょうだいは ___ いますか。(mấy người)",
   "hint": "kana hoặc romaji",
   "accept": [
    "なんにん",
    "nannin"
   ],
   "level": "A1",
   "expl": "なんにん."
  },
  {
   "kind": "fill",
   "q": "ビールを ふたつ ___。(cho tôi)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ください",
    "kudasai"
   ],
   "level": "A1",
   "expl": "数 + ください."
  },
  {
   "kind": "fill",
   "q": "たまごは ひとつ___ ありません。(không có quả nào)",
   "hint": "kana hoặc romaji",
   "accept": [
    "も",
    "mo"
   ],
   "level": "A2",
   "expl": "ひとつも〜ない."
  },
  {
   "kind": "fill",
   "q": "がくせいが 20にん___ います。(khoảng)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ぐらい",
    "gurai",
    "くらい",
    "kurai"
   ],
   "level": "A2",
   "expl": "ぐらい."
  },
  {
   "kind": "fill",
   "q": "いちにちに ___ べんきょうしますか。(mấy lần)",
   "hint": "kana hoặc romaji",
   "accept": [
    "なんかい",
    "nankai"
   ],
   "level": "A2",
   "expl": "なんかい."
  },
  {
   "kind": "fill",
   "q": "りんごを ふたつ かい___。(đã mua)",
   "hint": "kana hoặc romaji",
   "accept": [
    "ました",
    "mashita"
   ],
   "level": "A1",
   "expl": "かいました."
  },
  {
   "kind": "choose",
   "q": "Hỏi số tờ giấy",
   "right": "なんまいですか",
   "wrong": [
    "なんにんですか",
    "なんぼんですか",
    "なんさつですか"
   ],
   "level": "A1",
   "expl": "なんまい."
  },
  {
   "kind": "choose",
   "q": "Hỏi số chai",
   "right": "なんぼんですか",
   "wrong": [
    "なんまいですか",
    "なんさつですか",
    "なんひきですか"
   ],
   "level": "A1",
   "expl": "なんぼん."
  },
  {
   "kind": "choose",
   "q": "Số lượng đứng ở",
   "right": "sau trợ từ, trước động từ",
   "wrong": [
    "đầu câu",
    "sau động từ",
    "sau です"
   ],
   "level": "A1",
   "expl": "りんごを みっつ かいました."
  },
  {
   "kind": "choose",
   "q": "Câu nào đúng?",
   "right": "ビールを ふたつ ください",
   "wrong": [
    "ふたつ ビールを ください",
    "ビールを ください ふたつ",
    "ビール ください を ふたつ"
   ],
   "level": "A1",
   "expl": "Số lượng trước động từ."
  },
  {
   "kind": "choose",
   "q": "「ひとつも ありません」nghĩa là",
   "right": "Không có cái nào",
   "wrong": [
    "Có một cái",
    "Có nhiều",
    "Chỉ có một"
   ],
   "level": "A2",
   "expl": "ひとつも + ない."
  },
  {
   "kind": "choose",
   "q": "Hỏi 1 tuần mấy lần",
   "right": "いっしゅうかんに なんかい",
   "wrong": [
    "いっしゅうかんを なんじ",
    "いっしゅうかんで なんにん",
    "いっしゅうかんが なにを"
   ],
   "level": "A2",
   "expl": "いっしゅうかんに + なんかい."
  },
  {
   "kind": "choose",
   "q": "「なんにん」hỏi",
   "right": "số người",
   "wrong": [
    "số cuốn sách",
    "số xe",
    "số con vật"
   ],
   "level": "A1",
   "expl": "なんにん."
  },
  {
   "kind": "choose",
   "q": "Chọn từ để đếm hai tờ vé",
   "right": "にまい",
   "wrong": [
    "にほん",
    "にさつ",
    "にだい"
   ],
   "level": "A1",
   "expl": "vé = phẳng."
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

const RUSH=[["ほんが あります", ["ja-son-aru-iru"]], ["ねこが います", ["ja-son-aru-iru"]], ["だれも いません", ["ja-son-aru-iru"]], ["つくえの うえ", ["ja-son-ichi"]], ["えきの まえ", ["ja-son-ichi"]], ["AとBの あいだ", ["ja-son-ichi"]], ["みっつ · ふたり", ["ja-son-kazoe"]], ["にまい · さんぼん", ["ja-son-kazoe"]], ["ごさつ · いっぴき", ["ja-son-kazoe"]], ["いくつ · なんにん", ["ja-son-suuryou"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["sonzai"] = { pool: POOL, types: TYPES, game: {title:"どれ？",desc:"60 giây. Thấy mẫu này, chọn đúng bài",prompt:"Mẫu này thuộc bài nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"jaSonzaiRushBest"} };
})();
