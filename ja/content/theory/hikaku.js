/* ja/content/theory/hikaku.js
   Hikaku: comparison, superlatives, つもり, volitional / decisions.
   Uses the "table" diagram mode. Furigana: {漢字|かんじ}; romaji lines via ex(). */
(() => {
const ex = (jp, ro) => rb(jp) + (ro ? `<span class="ro">${ro}</span>` : "");
const T = [
 {id:"ja-hik-yori",num:"01",en:"〜より・〜のほうが",vi:"So sánh hơn",short:"AはBより〜 · AのほうがBより〜 · AとBとどちらが〜",
  core:"So sánh hai thứ: <strong>A は B より + tính từ</strong> (A hơn B), hoặc <strong>A のほうが B より + tính từ</strong> (nhấn A). Hỏi: <strong>A と B と どちらが + tính từ ですか</strong>, trả lời: <strong>〜のほうが + tính từ です</strong>.",
  forms:[["A hơn B","A は B より adj",ex("{電車|でんしゃ}はバス<mark>より</mark>{速|はや}いです。","densha wa basu yori hayai desu")],["Nhấn A","A のほうが B より adj",ex("{電車|でんしゃ}<mark>のほうが</mark>バス<mark>より</mark>{速|はや}いです。","densha no hō ga basu yori hayai desu")],["Hỏi","A と B と どちらが adj",ex("{電車|でんしゃ}とバスと<mark>どちらが</mark>{速|はや}いですか。","densha to basu to dochira ga hayai desu ka")],["Trả lời","〜のほうが adj",ex("{電車|でんしゃ}<mark>のほうが</mark>{速|はや}いです。","densha no hō ga hayai desu")],["Khẳng định bằng nhau","おなじぐらい",ex("{二人|ふたり}は<mark>おなじぐらい</mark>{背|せ}が{高|たか}いです。","futari wa onaji gurai se ga takai desu")],["Hơn nhiều","ずっと / もっと",ex("これは<mark>ずっと</mark>{安|やす}いです。","kore wa zutto yasui desu")]],
  uses:[["So sánh thức ăn",ex("{肉|にく}と{魚|さかな}と<mark>どちらが</mark>{好|す}きですか。 — {魚|さかな}<mark>のほうが</mark>{好|す}きです。","niku to sakana to dochira ga suki desu ka — sakana no hō ga suki desu")],["Trả lời không chọn được",ex("<mark>どちらも</mark>{好|す}きです。","dochira mo suki desu")],["So sánh nơi chốn",ex("{東京|とうきょう}は{大阪|おおさか}<mark>より</mark>{大|おお}きいです。","Tōkyō wa Ōsaka yori ōkii desu")]],
  signals:["より","のほうが","どちらが","どちらも","ずっと"],
  speak:5,write:5,
  reg:"より đứng sau cái bị so sánh (cái thua). Hỏi hai lựa chọn dùng どちら (cái nào trong hai), không dùng どれ. Với nhiều hơn hai lựa chọn, dùng いちばん.",
  mistake:["でんしゃは バスが はやいです。","でんしゃは バスより はやいです。","Cái bị so sánh đi với より, không với が."],
  table:[{head:["Mẫu","Ví dụ"],rows:[["AはBより","A hơn B","でんしゃは バスより はやい"],["AのほうがBより","nhấn A","でんしゃの ほうが はやい"],["AとBとどちら","hỏi","AとBと どちらが すき"],["どちらも","cả hai","どちらも すき"]]}]},

 {id:"ja-hik-ichiban",num:"02",en:"一番・同じ",vi:"So sánh nhất & bằng",short:"いちばん · 〜のなかで · おなじ · 〜ほど〜ない",
  core:"Cao nhất: <strong>N の なかで N が いちばん + adj</strong>. Hỏi: <strong>なにが / どれが / だれが いちばん</strong>. Bằng nhau: <strong>おなじ</strong>, <strong>〜と おなじ</strong>. Phủ định: <strong>A は B ほど〜ない</strong> (A không … bằng B).",
  forms:[["Nhất trong nhóm","N の なかで N が いちばん",ex("{果物|くだもの}の{中|なか}で{何|なに}が<mark>一番</mark>{好|す}きですか。","kudamono no naka de nani ga ichiban suki desu ka")],["Hỏi người","だれが いちばん",ex("クラスで<mark>誰が一番</mark>{背|せ}が{高|たか}いですか。","kurasu de dare ga ichiban se ga takai desu ka")],["Hỏi nơi","どこが いちばん",ex("{日本|にほん}で<mark>どこが一番</mark>{寒|さむ}いですか。","Nihon de doko ga ichiban samui desu ka")],["Giống","おなじ N",ex("わたしたちは<mark>おなじ</mark>{会社|かいしゃ}で{働|はたら}いています。","watashitachi wa onaji kaisha de hataraite imasu")],["Giống như","A は B と おなじ",ex("これはそれ<mark>と同じ</mark>です。","kore wa sore to onaji desu")],["Không bằng","A は B ほど〜ない",ex("{今日|きょう}は{昨日|きのう}<mark>ほど</mark>{暑|あつ}く<mark>ない</mark>です。","kyō wa kinō hodo atsuku nai desu")]],
  uses:[["Nói sở thích tuyệt đối",ex("{私|わたし}は{夏|なつ}が<mark>一番</mark>{好|す}きです。","watashi wa natsu ga ichiban suki desu")],["Phạm vi so sánh",ex("{家族|かぞく}の{中|なか}で{父|ちち}が<mark>一番</mark>{背|せ}が{高|たか}いです。","kazoku no naka de chichi ga ichiban se ga takai desu")],["Nhấn mạnh phủ định",ex("{私|わたし}は{弟|おとうと}<mark>ほど</mark>{速|はや}く{走|はし}れ<mark>ません</mark>。","watashi wa otōto hodo hayaku hashiremasen")]],
  signals:["いちばん","の なかで","おなじ","〜ほど〜ない"],
  speak:5,write:5,
  reg:"Phạm vi của いちばん đứng trước với の中で (trong) hoặc で (ở). Với ほど, vế sau luôn phủ định. おなじ không cần な khi đứng trước danh từ: 「おなじ会社」.",
  mistake:["おなじな かいしゃ","おなじ かいしゃ","おなじ đứng thẳng trước danh từ, không thêm な."],
  table:[{head:["Mẫu","Ví dụ"],rows:[["いちばん","nhất","なつが いちばん すき"],["〜のなかで","trong nhóm","くだものの なかで"],["おなじ","giống","おなじ かいしゃ"],["〜ほど〜ない","không bằng","きのう ほど あつくない"]]}]},

 {id:"ja-hik-tsumori",num:"03",en:"つもり・予定",vi:"つもり & dự định",short:"いくつもりです · いかないつもりです · よていです",
  core:"<strong>V る + つもり</strong> (định làm), <strong>V ない + つもり</strong> (định không làm), <strong>N の よてい</strong> hoặc <strong>V る よてい</strong> (có kế hoạch, lịch đã định). つもり chủ yếu là ý định của chính mình.",
  forms:[["Định làm","V る つもりです",ex("{来年|らいねん}{日本|にほん}へ{行|い}く<mark>つもりです</mark>。","rainen Nihon e iku tsumori desu")],["Định không làm","V ない つもりです",ex("タバコは{吸|す}わない<mark>つもりです</mark>。","tabako wa suwanai tsumori desu")],["Chưa quyết","まだ きめていません",ex("まだ{決|き}めていません。","mada kimete imasen")],["Kế hoạch","V る よていです",ex("{来週|らいしゅう}{出張|しゅっちょう}する<mark>予定</mark>です。","raishū shucchō suru yotei desu")],["Kế hoạch (N)","N の よていです",ex("{明日|あした}は{会議|かいぎ}の<mark>予定</mark>です。","ashita wa kaigi no yotei desu")],["Hỏi ý định","つもりですか",ex("{何|なに}をする<mark>つもり</mark>ですか。","nani o suru tsumori desu ka")]],
  uses:[["Trả lời hỏi dự định",ex("{夏休み|なつやすみ}に{何|なに}をするつもりですか。 — {旅行|りょこう}する<mark>つもり</mark>です。","natsuyasumi ni nani o suru tsumori desu ka — ryokō suru tsumori desu")],["Kế hoạch cố định (lịch bay, họp)",ex("{飛行機|ひこうき}は{三時|さんじ}に{着|つ}く<mark>予定</mark>です。","hikōki wa sanji ni tsuku yotei desu")],["Từ chối ý định",ex("もう{お酒|さけ}は{飲|の}まない<mark>つもり</mark>です。","mō osake wa nomanai tsumori desu")]],
  signals:["〜つもり","〜ないつもり","〜予定","まだ決めていません"],
  speak:5,write:5,
  reg:"つもり là ý định cá nhân, có thể thay đổi. 予定 là kế hoạch đã sắp xếp (lịch, chương trình), dùng được cho ngôi thứ ba. Nói “định không làm” là V ない + つもり, không phải V る + つもりじゃない.",
  mistake:["いくつもりじゃありません。(muốn nói “định không đi”)","いかない つもりです。","Định không làm: V ない + つもり."],
  table:[{head:["Mẫu","Ví dụ"],rows:[["V るつもり","định làm","いく つもり"],["V ないつもり","định không","いかない つもり"],["V る予定","kế hoạch","くる よてい"],["N の予定","lịch","かいぎの よてい"]]}]},

 {id:"ja-hik-ishi",num:"04",en:"意向形・ことにする",vi:"〜(よ)う · ことにする · ことになる",short:"いこう · いこうと おもいます · ことにしました",
  core:"Thể ý chí (<strong>意向形</strong>): nhóm 1 u → <strong>おう</strong> (いく → いこう), nhóm 2 bỏ る + <strong>よう</strong> (たべよう), する → <strong>しよう</strong>, くる → <strong>こよう</strong>. <strong>〜(よ)うと思う</strong> = định làm. <strong>〜ことにする</strong> = tự quyết định. <strong>〜ことになる</strong> = được quyết định (từ bên ngoài).",
  forms:[["Nhóm 1","u → おう",ex("{行|い}く → {行|い}<mark>こう</mark> / {飲|の}む → {飲|の}<mark>もう</mark>","iku → ikō / nomu → nomō")],["Nhóm 2","bỏ る + よう",ex("{食|た}べる → {食|た}べ<mark>よう</mark>","taberu → tabeyō")],["Nhóm 3","しよう / こよう",ex("する → <mark>しよう</mark> / {来|く}る → <mark>こよう</mark>","suru → shiyō / kuru → koyō")],["Định làm","V(よ)うと おもう",ex("{来年|らいねん}{留学|りゅうがく}し<mark>ようと思います</mark>。","rainen ryūgaku shiyō to omoimasu")],["Tự quyết","V る ことにする",ex("{毎朝|まいあさ}{走|はし}る<mark>ことにしました</mark>。","maiasa hashiru koto ni shimashita")],["Được quyết","V る ことになる",ex("{来月|らいげつ}{大阪|おおさか}へ{行|い}く<mark>ことになりました</mark>。","raigetsu Ōsaka e iku koto ni narimashita")]],
  uses:[["Ý chí mới nghĩ ra",ex("{今日|きょう}は{早|はや}く{寝|ね}<mark>よう</mark>と{思|おも}います。","kyō wa hayaku neyō to omoimasu")],["Quyết định cá nhân",ex("ダイエットのために、{甘|あま}いものを{食|た}べない<mark>ことにしました</mark>。","daietto no tame ni, amai mono o tabenai koto ni shimashita")],["Quyết định từ công ty, quy định",ex("{来月|らいげつ}から{新|あたら}しいルールが{始|はじ}まる<mark>ことになりました</mark>。","raigetsu kara atarashii rūru ga hajimaru koto ni narimashita")]],
  signals:["〜(よ)う","〜(よ)うと思う","〜ことにする","〜ことになる"],
  speak:5,write:5,
  reg:"ことにする là quyết định của chính mình, ことになる là kết quả do hoàn cảnh hoặc người khác quyết định (thường dùng khi thông báo công việc, cưới hỏi). Thể ý chí thân mật có nghĩa “làm nhé / làm nào”.",
  mistake:["らいげつ けっこんすることにしました。(vợ chồng sắp cưới thông báo lịch)","らいげつ けっこんすることになりました。","Tin chính thức do hoàn cảnh quyết thì dùng ことになった."],
  table:[{head:["Mẫu","Ví dụ"],rows:[["〜(よ)う","ý chí","いこう・たべよう"],["〜(よ)うと思う","định làm","いこうと おもう"],["〜ことにする","tự quyết","はしる ことにする"],["〜ことになる","được quyết","いく ことになる"]]}]},
];

T.forEach(t => t.forms.forEach(f => { f[2] = rb(f[2]); }));
registerRows("hikaku", T);
GRAMMAR.theory.hikaku = { rows: T, first: "ja-hik-yori" };
})();
