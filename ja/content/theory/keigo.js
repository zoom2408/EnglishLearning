/* ja/content/theory/keigo.js
   Keigo: teineigo, sonkeigo, kenjougo, business phrases.
   Uses the "table" diagram mode. Furigana: {漢字|かんじ}; romaji lines via ex(). */
(() => {
const ex = (jp, ro) => rb(jp) + (ro ? `<span class="ro">${ro}</span>` : "");
const T = [
 {id:"ja-kei2-teinei",num:"01",en:"丁寧語",vi:"Teineigo (lịch sự)",short:"です · ます · ございます · お/ご + N",
  core:"<strong>Teineigo</strong> là nền: <strong>です/ます</strong>, <strong>でございます</strong> (rất trang trọng), thêm <strong>お/ご</strong> trước danh từ để nhã nhặn (お茶, お金, ご飯, ご家族). Dùng với người lạ, khách hàng, người trên.",
  forms:[["Cơ bản","です / ます",ex("{私|わたし}は{田中|たなか}<mark>です</mark>。","watashi wa Tanaka desu")],["Trang trọng","でございます",ex("こちらが{会議室|かいぎしつ}<mark>でございます</mark>。","kochira ga kaigishitsu de gozaimasu")],["Có/ở trang trọng","ございます",ex("メニューが<mark>ございます</mark>。","menyū ga gozaimasu")],["お + N (Nhật)","お + N",ex("<mark>お</mark>{茶|ちゃ}をどうぞ。","ocha o dōzo")],["ご + N (Hán)","ご + N",ex("<mark>ご</mark>{家族|かぞく}はお{元気|げんき}ですか。","gokazoku wa ogenki desu ka")],["Hỏi lịch sự","〜でしょうか",ex("{駅|えき}はどこ<mark>でしょうか</mark>。","eki wa doko deshō ka")]],
  uses:[["Gọi điện",ex("{山田|やまだ}<mark>でございます</mark>。","Yamada de gozaimasu")],["Mời khách",ex("どうぞお{座|すわ}りください。","dōzo osuwari kudasai")],["Hỏi lịch sự ở cửa hàng",ex("{何名様|なんめいさま}<mark>でしょうか</mark>。","nanmeisama deshō ka")]],
  signals:["です・ます","ございます","お/ご","〜でしょうか"],
  speak:5,write:5,
  reg:"お thường đi với từ thuần Nhật (お茶, お水, お金), ご thường đi với từ Hán (ご家族, ご連絡, ご案内). Ngoại lệ: お電話, お食事, お時間. Không dùng お/ご với nghĩa của chính mình: không nói 「ご私の」.",
  mistake:["ごちゃを どうぞ。","おちゃを どうぞ。","Từ thuần Nhật như お茶 dùng お, ご dành cho từ Hán như ご家族."],
  table:[{head:["Loại","Ví dụ"],rows:[["です/ます","lịch sự","たなかです"],["ございます","trang trọng","ございます"],["お + 和語","từ thuần Nhật","おちゃ・おかね"],["ご + 漢語","từ Hán","ごかぞく・ごれんらく"]]}]},

 {id:"ja-kei2-sonkei",num:"02",en:"尊敬語",vi:"Sonkeigo (tôn kính)",short:"いらっしゃる · おっしゃる · めしあがる · おV になる",
  core:"<strong>Sonkeigo</strong> nâng người nghe, người thứ ba cao hơn. Ba cách: <strong>(1) động từ đặc biệt</strong> (いらっしゃる, おっしゃる, めしあがる, ごらんになる, なさる, くださる), <strong>(2) お + V ます bỏ + になる</strong>, <strong>(3) V(受身) れる/られる</strong>.",
  forms:[["Đi/đến/có mặt","いらっしゃる",ex("{社長|しゃちょう}は{今|いま}<mark>いらっしゃいます</mark>。","shachō wa ima irasshaimasu")],["Nói","おっしゃる",ex("{先生|せんせい}が<mark>おっしゃいました</mark>。","sensei ga osshaimashita")],["Ăn/uống","めしあがる",ex("どうぞ<mark>召し上がって</mark>ください。","dōzo meshiagatte kudasai")],["Xem","ごらんになる",ex("この{資料|しりょう}を<mark>ご覧になりました</mark>か。","kono shiryō o goran ni narimashita ka")],["Làm","なさる",ex("{何|なに}を<mark>なさいます</mark>か。","nani o nasaimasu ka")],["Mẫu chung","お V になる",ex("{部長|ぶちょう}はもう<mark>お帰りになりました</mark>。","buchō wa mō okaeri ni narimashita")]],
  uses:[["Hỏi khách",ex("お{名前|なまえ}は<mark>何と</mark>おっしゃいますか。","onamae wa nan to osshaimasu ka")],["Nhờ khách ngồi",ex("どうぞ、お{座|すわ}り<mark>になって</mark>ください。","dōzo, osuwari ni natte kudasai")],["Hỏi sếp có mặt",ex("{部長|ぶちょう}は<mark>いらっしゃいますか</mark>。","buchō wa irasshaimasu ka")]],
  signals:["いらっしゃる","おっしゃる","めしあがる","お〜になる","ご覧になる"],
  speak:5,write:5,
  reg:"Sonkeigo chỉ dùng cho hành động của người cần tôn trọng (khách, sếp, thầy cô), không dùng cho mình. Với những động từ có dạng riêng (いらっしゃる, おっしゃる…) hãy dùng dạng riêng thay vì お〜になる.",
  mistake:["わたしは めしあがります。","わたしは いただきます。","めしあがる là tôn kính, không dùng cho hành động của chính mình."],
  table:[{head:["Động từ","Ví dụ"],rows:[["いく/くる/いる","いらっしゃる","いらっしゃいます"],["いう","おっしゃる","おっしゃいます"],["たべる","めしあがる","めしあがります"],["みる","ごらんになる","ごらんになります"],["する","なさる","なさいます"],["Khác","お V になる","おかえりになる"]]}]},

 {id:"ja-kei2-kenjou",num:"03",en:"謙譲語",vi:"Kenjōgo (khiêm nhường)",short:"まいる · もうす · いただく · おV する",
  core:"<strong>Kenjōgo</strong> hạ hành động của mình để nâng người nghe. Dạng đặc biệt: <strong>まいる</strong> (đi/đến), <strong>もうす</strong> (nói), <strong>いただく</strong> (ăn/nhận), <strong>うかがう</strong> (hỏi/đến thăm), <strong>はいけんする</strong> (xem), <strong>いたす</strong> (làm). Mẫu chung: <strong>お + V ます bỏ + する</strong>.",
  forms:[["Đi/đến","まいる",ex("{明日|あした}<mark>{伺|うかが}い</mark>ます。 {後|あと}で<mark>{参|まい}り</mark>ます。","ashita ukagaimasu. ato de mairimasu")],["Nói","もうす",ex("{私|わたし}は{田中|たなか}と<mark>申します</mark>。","watashi wa Tanaka to mōshimasu")],["Nhận/ăn","いただく",ex("お{菓子|かし}を<mark>いただきました</mark>。","okashi o itadakimashita")],["Xem","はいけんする",ex("{資料|しりょう}を<mark>拝見しました</mark>。","shiryō o haiken shimashita")],["Làm","いたす",ex("{私|わたし}が<mark>いたします</mark>。","watashi ga itashimasu")],["Mẫu chung","お V する",ex("{荷物|にもつ}を<mark>お持ちします</mark>。","nimotsu o omochi shimasu")]],
  uses:[["Tự giới thiệu",ex("はじめまして、{山田|やまだ}と<mark>申します</mark>。","hajimemashite, Yamada to mōshimasu")],["Xin chỉ bảo",ex("{来週|らいしゅう}お{目|め}にかかれますか。 / {質問|しつもん}を<mark>お聞きしたい</mark>のですが。","raishū ome ni kakaremasu ka / shitsumon o okiki shitai no desu ga")],["Nhận quà",ex("お{土産|みやげ}を<mark>いただきありがとうございます</mark>。","omiyage o itadaki arigatō gozaimasu")]],
  signals:["まいる","もうす","いただく","うかがう","お〜する"],
  speak:5,write:5,
  reg:"Kenjōgo dùng cho hành động của mình đối với người trên. Nếu nhầm với sonkeigo (ví dụ nói 「社長がまいります」) là thất lễ vì hạ người trên. Mẹo: ai làm chủ thể quyết định dùng loại nào.",
  mistake:["しゃちょうが まいります。","しゃちょうが いらっしゃいます。","まいる là khiêm nhường, không dùng cho hành động của người cần tôn trọng."],
  table:[{head:["Động từ","Ví dụ"],rows:[["いく/くる","まいる / うかがう","まいります"],["いう","もうす","もうします"],["たべる/もらう","いただく","いただきます"],["みる","はいけんする","はいけんします"],["する","いたす","いたします"],["Khác","お V する","おもちします"]]}]},

 {id:"ja-kei2-business",num:"04",en:"ビジネス敬語",vi:"Cụm công sở",short:"おせわになっております · 〜ていただけませんか",
  core:"Các cụm lịch sự dùng hằng ngày ở công sở: <strong>お世話になっております</strong> (chào đầu thư/điện thoại), <strong>恐れ入りますが</strong> (xin phép trước khi nhờ), <strong>〜ていただけませんか</strong> (nhờ rất lịch sự), <strong>少々お待ちください</strong>, <strong>失礼いたします</strong>.",
  forms:[["Mở đầu","お世話になっております",ex("<mark>お世話になっております</mark>。{山田|やまだ}です。","osewa ni natte orimasu. Yamada desu")],["Xin phép","恐れ入りますが",ex("<mark>恐れ入りますが</mark>、もう{一度|いちど}お{願|ねが}いします。","osore irimasu ga, mō ichido onegai shimasu")],["Nhờ lịch sự","〜ていただけませんか",ex("{確認|かくにん}し<mark>ていただけませんか</mark>。","kakunin shite itadakemasen ka")],["Xin chờ","少々お待ちください",ex("<mark>少々お待ちください</mark>。","shōshō omachi kudasai")],["Xin lỗi","申し訳ございません",ex("<mark>申し訳ございません</mark>。","mōshiwake gozaimasen")],["Kết thúc","失礼いたします",ex("<mark>失礼いたします</mark>。","shitsurei itashimasu")]],
  uses:[["Mail kết thư",ex("{引|ひ}き{続|つづ}き、どうぞよろしくお{願|ねが}いいたします。","hikitsuzuki, dōzo yoroshiku onegai itashimasu")],["Từ chối khéo",ex("{申|もう}し{訳|わけ}ございませんが、{今回|こんかい}は{難|むずか}しいです。","mōshiwake gozaimasen ga, konkai wa muzukashii desu")],["Nhận cuộc gọi",ex("{只今|ただいま}{席|せき}を{外|はず}しております。","tadaima seki o hazushite orimasu")]],
  signals:["お世話になっております","恐れ入りますが","〜ていただけませんか","少々お待ちください"],
  speak:5,write:5,
  reg:"Công sở Nhật cần rất nhiều đệm lịch sự: 恐れ入りますが, 申し訳ございませんが, お手数ですが. Đừng dùng 〜てください trực tiếp với khách hàng; thay bằng 〜ていただけますか.",
  mistake:["ちょっと まってください。(với khách)","しょうしょう おまちください。","Với khách hàng dùng 少々お待ちください, không dùng ちょっと."],
  table:[{head:["Tình huống","Ví dụ"],rows:[["Chào","お世話になっております","おせわになっております"],["Nhờ","〜ていただけませんか","かくにんしていただけませんか"],["Xin lỗi","申し訳ございません","もうしわけございません"],["Kết thúc","失礼いたします","しつれいいたします"]]}]},
];

T.forEach(t => t.forms.forEach(f => { f[2] = rb(f[2]); }));
registerRows("keigo", T);
GRAMMAR.theory.keigo = { rows: T, first: "ja-kei2-teinei" };
})();
