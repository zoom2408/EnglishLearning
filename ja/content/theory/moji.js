/* ja/content/theory/moji.js
   Moji: hiragana, katakana, voiced/combined sounds, mora rules, kanji.
   Uses the "table" diagram mode. Furigana: {漢字|かんじ} (rb in utils.js);
   use it only in raw-HTML fields (core, forms[2], uses, reg, mistake[2], table cells). */
(() => {
const ex = (jp, ro) => rb(jp) + (ro ? `<span class="ro">${ro}</span>` : "");
const G = (r, s) => [r, ...s.split(" ").map(x => x === "-" ? "" : x.replace("_", " "))];
const T = [
 {id:"ja-moji-hiragana",num:"01",en:"ひらがな",vi:"Hiragana",short:"46 chữ: あ い う え お か き く け こ …",
  core:"Hiragana là bảng chữ cái mềm, dùng để viết <strong>từ thuần Nhật, trợ từ và đuôi động từ</strong>. Có <strong>46 chữ</strong>, mỗi chữ là một âm tiết cố định. Học thuộc bảng này trước mọi thứ khác.",
  forms:[["5 nguyên âm","あ a · い i · う u · え e · お o","Đọc ngắn gọn như tiếng Việt: a, i, u, ê, ô."],["Hàng K","か ka · き ki · く ku · け ke · こ ko","<mark>か</mark>さ (kasa, cái ô)"],["Ngoại lệ","し shi · ち chi · つ tsu · ふ fu","<mark>ふ</mark>じさん (fujisan)"],["Hàng R","ら ra · り ri · る ru · れ re · ろ ro","<mark>ら</mark>ーめん (raamen)"],["Chữ đặc biệt","は đọc wa khi là trợ từ · を đọc o · へ đọc e","わたし<mark>は</mark>がくせいです (watashi wa gakusei desu)"],["Âm “n”","ん n (đứng sau nguyên âm hoặc phụ âm)","ほ<mark>ん</mark> (hon, quyển sách)"]],
  uses:[["Từ thuần Nhật và đuôi động từ",ex("<mark>た</mark>べる · <mark>の</mark>む · <mark>み</mark>る","taberu · nomu · miru")],["Trợ từ và từ nối",ex("わたし<mark>は</mark>、<mark>と</mark>、<mark>の</mark>、<mark>を</mark>","wa, to, no, o")],["Furigana cho người học",ex("{学校|がっこう}の{先生|せんせい}","gakkō no sensei")]],
  signals:["あいうえお","かきくけこ","は = wa","を = o","ん"],
  speak:5,write:5,
  reg:"Tiếng Nhật không có dấu thanh như tiếng Việt. Độ dài của mỗi chữ gần như bằng nhau (mỗi chữ là một nhịp), nên đọc đều và không nhấn mạnh từng chữ.",
  mistake:["watashi ha gakusei desu","watashi wa gakusei desu","Chữ は khi làm trợ từ chỉ chủ đề luôn đọc là “wa”, không đọc “ha”. Tương tự を đọc “o” và へ đọc “e” khi là trợ từ."],
  table:[{title:"Bảng hiragana (gojūon)",head:["a","i","u","e","o"],rows:[
   G("∅","あ_a い_i う_u え_e お_o"),G("k","か_ka き_ki く_ku け_ke こ_ko"),G("s","さ_sa し_shi す_su せ_se そ_so"),G("t","た_ta ち_chi つ_tsu て_te と_to"),G("n","な_na に_ni ぬ_nu ね_ne の_no"),
   G("h","は_ha ひ_hi ふ_fu へ_he ほ_ho"),G("m","ま_ma み_mi む_mu め_me も_mo"),G("y","や_ya - ゆ_yu - よ_yo"),G("r","ら_ra り_ri る_ru れ_re ろ_ro"),G("w","わ_wa - - - を_o"),G("","ん_n - - - -")]}]},

 {id:"ja-moji-katakana",num:"02",en:"カタカナ",vi:"Katakana",short:"46 chữ: ア イ ウ エ オ カ キ ク ケ コ …",
  core:"Katakana có <strong>cùng 46 âm với hiragana</strong> nhưng nét thẳng, góc cạnh. Dùng cho <strong>từ mượn, tên nước ngoài, tên động vật hoặc thực vật theo cách gọi khoa học, từ tượng thanh và nhấn mạnh</strong>.",
  forms:[["Từ mượn","Tiếng Anh, Pháp, Đức… đọc theo kiểu Nhật",ex("<mark>テレビ</mark> · <mark>パン</mark> · <mark>ホテル</mark>","terebi · pan · hoteru")],["Tên nước ngoài","Tên người, địa danh ngoài Nhật",ex("<mark>ベトナム</mark> · <mark>アメリカ</mark>","betonamu · amerika")],["Trường âm","Dùng ー để kéo dài nguyên âm",ex("<mark>コーヒー</mark>","koohii, cà phê")],["Âm mở rộng","ファ fa · フィ fi · ティ ti · ディ di · ウィ wi",ex("<mark>ファ</mark>イル","fairu, file")],["Dễ nhầm","シ shi / ツ tsu · ソ so / ン n",ex("<mark>シ</mark>ャツ","shatsu, áo sơ mi")]],
  uses:[["Đồ ăn thức uống nước ngoài",ex("<mark>コーヒー</mark>・<mark>ケーキ</mark>・<mark>ビール</mark>","koohii, keeki, biiru")],["Đồ vật hiện đại",ex("<mark>パソコン</mark>・<mark>スマホ</mark>・<mark>カメラ</mark>","pasokon, sumaho, kamera")],["Tên riêng của bạn",ex("<mark>リン</mark>さん","Rin-san")]],
  signals:["アイウエオ","ー (trường âm)","シ と ツ","ソ と ン","từ mượn"],
  speak:5,write:5,
  reg:"Katakana chiếm khoảng 10% chữ trong văn bản hiện đại, rất nhiều ở biển hiệu, thực đơn và quảng cáo. Biết katakana là đọc được ngay nhiều từ tiếng Anh.",
  mistake:["ツ và シ (nhìn nhầm)","ツ = tsu (nét ngang), シ = shi (nét dọc)","Hai chữ này khác ở hướng nét: シ có hai nét chấm nằm ngang, ba nét xếp dọc từ trên xuống; ツ có hai nét chấm đứng, nét thứ ba chéo từ trên xuống."],
  table:[{title:"Bảng katakana",head:["a","i","u","e","o"],rows:[
   G("∅","ア_a イ_i ウ_u エ_e オ_o"),G("k","カ_ka キ_ki ク_ku ケ_ke コ_ko"),G("s","サ_sa シ_shi ス_su セ_se ソ_so"),G("t","タ_ta チ_chi ツ_tsu テ_te ト_to"),G("n","ナ_na ニ_ni ヌ_nu ネ_ne ノ_no"),
   G("h","ハ_ha ヒ_hi フ_fu ヘ_he ホ_ho"),G("m","マ_ma ミ_mi ム_mu メ_me モ_mo"),G("y","ヤ_ya - ユ_yu - ヨ_yo"),G("r","ラ_ra リ_ri ル_ru レ_re ロ_ro"),G("w","ワ_wa - - - ヲ_o"),G("","ン_n - - - -")]}]},

 {id:"ja-moji-dakuon",num:"03",en:"濁音・拗音",vi:"Âm đục & âm ghép",short:"が ざ だ ば ぱ · きゃ しゅ ちょ",
  core:"Thêm <strong>゛(dakuten)</strong> hoặc <strong>゜(handakuten)</strong> vào chữ gốc để đổi phụ âm. Ghép chữ hàng い với <strong>ゃ ゅ ょ nhỏ</strong> tạo âm ghép (yōon) đọc thành <strong>một nhịp</strong>.",
  forms:[["Âm đục","か→が ga · さ→ざ za · た→だ da · は→ば ba","<mark>が</mark>くせい (gakusei, học sinh)"],["Bán đục","は→ぱ pa (chỉ hàng H)","<mark>ぱ</mark>ん (pan, bánh mì)"],["Ghép ゃ","きゃ kya · しゃ sha · ちゃ cha · にゃ nya","<mark>しゃ</mark>しん (shashin, ảnh)"],["Ghép ゅ","きゅ kyu · しゅ shu · ちゅ chu · りゅ ryu","<mark>しゅ</mark>くだい (shukudai, bài tập)"],["Ghép ょ","きょ kyo · しょ sho · ちょ cho · りょ ryo","<mark>ちょ</mark>きん (chokin, tiết kiệm)"],["Đặc biệt","じ・ぢ đều đọc ji · ず・づ đều đọc zu","<mark>じ</mark>かん (jikan, thời gian)"]],
  uses:[["Phân biệt nghĩa bằng dấu",ex("<mark>か</mark>い (kai, sò) · <mark>が</mark>い (gai, hại)","")],["Âm ghép đọc một nhịp",ex("<mark>びょう</mark>いん (bệnh viện)","byōin")],["Kana nhỏ khác kana to",ex("きゃく (khách) ≠ きやく (kiyaku)","kyaku ≠ kiyaku")]],
  signals:["゛ dakuten","゜ handakuten","ゃ ゅ ょ nhỏ","じゃ ja","ぢ づ ít dùng"],
  speak:5,write:5,
  reg:"Khi viết tay hay đánh máy, ゃ ゅ ょ phải nhỏ. Viết to thì thành hai nhịp và nghĩa đổi: びよういん (tiệm làm đẹp) khác びょういん (bệnh viện).",
  mistake:["byouin = biyouin","びょういん (bệnh viện) ≠ びよういん (tiệm làm đẹp)","Chữ ょ nhỏ gộp với び thành một nhịp “byo”. Chữ よ to là một nhịp riêng “yo”."],
  table:[{title:"Âm đục và bán đục",head:["Gốc","Đục","Bán đục"],rows:[["K → G","か ka","が ga","-"],["S → Z","さ sa","ざ za","-"],["T → D","た ta","だ da","-"],["H → B/P","は ha","ば ba","ぱ pa"]]},{title:"Âm ghép (yōon)",head:["ゃ","ゅ","ょ"],rows:[["き","きゃ kya","きゅ kyu","きょ kyo"],["し","しゃ sha","しゅ shu","しょ sho"],["ち","ちゃ cha","ちゅ chu","ちょ cho"],["に","にゃ nya","にゅ nyu","にょ nyo"],["り","りゃ rya","りゅ ryu","りょ ryo"],["じ","じゃ ja","じゅ ju","じょ jo"]]}]},

 {id:"ja-moji-haku",num:"04",en:"拍(モーラ)",vi:"Nhịp, âm ngắt & trường âm",short:"っ (âm ngắt) · ー/う (kéo dài) · ん",
  core:"Tiếng Nhật đếm theo <strong>nhịp (mora)</strong>, mỗi nhịp dài bằng nhau. Ba thứ làm <strong>đổi nghĩa</strong> nếu bỏ sót: <strong>っ</strong> (ngắt một nhịp), <strong>trường âm</strong> (kéo dài nguyên âm), <strong>ん</strong> (một nhịp riêng).",
  forms:[["Âm ngắt","っ nhỏ: dừng một nhịp rồi đọc phụ âm kế","ざ<mark>っ</mark>し (zasshi, tạp chí)"],["Kéo dài あ","あ段 + あ","おか<mark>あ</mark>さん (okaasan, mẹ)"],["Kéo dài い","い段 + い","おじ<mark>い</mark>さん (ojiisan, ông)"],["Kéo dài う","う段 + う","く<mark>う</mark>き (kūki, không khí)"],["Kéo dài え・お","え段 + い · お段 + う (hoặc お)","せんせ<mark>い</mark> (sensei) · と<mark>お</mark>い (tōi, xa)"],["Nhịp ん","ん chiếm trọn một nhịp","ほ<mark>ん</mark>や (hon-ya, hiệu sách)"]],
  uses:[["Đếm nhịp",ex("<mark>が・っ・こ・う</mark> = 4 nhịp","ga-k-ko-u")],["Cặp đối lập về độ dài",ex("おじさん (chú) / おじ<mark>い</mark>さん (ông)","ojisan / ojiisan")],["Cặp đối lập về っ",ex("<mark>き</mark>て (hãy đến) / <mark>きっ</mark>て (tem)","kite / kitte")]],
  signals:["っ","ー","おう","えい","ん"],
  speak:5,write:5,
  reg:"Với katakana dùng ー để kéo dài (ビール). Với hiragana thêm chữ nguyên âm tương ứng (おかあさん). Khi gõ romaji hay thấy ā ī ū ē ō, hoặc aa ii uu ee oo.",
  mistake:["おじさん (khi muốn nói ông)","おじいさん","Thiếu một nhịp “い” là đổi từ “ông” thành “chú, bác”. Luôn kéo dài đủ."],
  table:[{head:["Ngắn","Dài / có っ"],rows:[["Cặp 1","おばさん (cô)","おばあさん (bà)"],["Cặp 2","ゆき (tuyết)","ゆうき (dũng khí)"],["Cặp 3","きて (hãy đến)","きって (tem)"],["Cặp 4","さか (dốc)","さっか (tác giả)"],["Cặp 5","ビル (tòa nhà)","ビール (bia)"]]}]},

 {id:"ja-moji-kanji",num:"05",en:"漢字とふりがな",vi:"Kanji & furigana",short:"日 月 火 水 木 金 土 · âm On/Kun",
  core:"Kanji là chữ Hán, mỗi chữ mang <strong>nghĩa</strong> và thường có <strong>hai cách đọc</strong>: <strong>On</strong> (gần âm Hán Việt, dùng trong từ ghép) và <strong>Kun</strong> (âm Nhật, dùng khi đứng riêng). Furigana là phiên âm nhỏ ghi phía trên.",
  forms:[["Âm On","Hay dùng trong từ ghép hai chữ","{日本|にほん} · {学校|がっこう}"],["Âm Kun","Hay dùng khi chữ đứng riêng, kèm okurigana","{食|た}べる · {見|み}る"],["Kana đuôi","Phần kana viết sau kanji để chia động từ/tính từ","{高|たか}<mark>い</mark> · {行|い}<mark>く</mark>"],["Phiên âm","Kana nhỏ ghi cách đọc phía trên kanji","{私|わたし}は{学生|がくせい}です。"],["Hán Việt","Nhiều từ On gần âm Hán Việt","{学生|がくせい} ≈ học sinh · {先生|せんせい} ≈ tiên sinh"],["Số lượng","N5 khoảng 100 chữ · N4 khoảng 300 · N3 khoảng 650","Học kanji theo nhóm và theo từ, không học riêng lẻ."]],
  uses:[["Ngày trong tuần",ex("{日|にち}・{月|げつ}・{火|か}・{水|すい}・{木|もく}・{金|きん}・{土|ど}","nichi, getsu, ka, sui, moku, kin, do")],["Số đếm cơ bản",ex("{一|いち}{二|に}{三|さん}{四|し}{五|ご}","ichi ni san shi go")],["Tên người, địa danh",ex("{山田|やまだ}さん · {東京|とうきょう}","Yamada-san · Tōkyō")]],
  signals:["音読み On","訓読み Kun","送り仮名","ふりがな","漢字"],
  speak:3,write:5,
  reg:"Văn bản viết dùng nhiều kanji hơn văn nói. Sách thiếu nhi, tài liệu cho người học thường thêm furigana. Trong trang này, kanji luôn có furigana ở phần ví dụ.",
  mistake:["日 luôn đọc là “ni”","日 đọc “nichi” (On), “hi” hoặc “bi” (Kun), “ka” trong ngày mồng (ついたち…) và “jitsu” trong một số từ","Một kanji có nhiều cách đọc. Học từ nguyên cả cụm (日曜日 にちようび) thay vì học riêng từng chữ."],
  table:[{title:"Bảy kanji của các ngày trong tuần",head:["On","Kun","Nghĩa"],rows:[["日","にち","ひ","mặt trời, ngày"],["月","げつ","つき","mặt trăng, tháng"],["火","か","ひ","lửa"],["水","すい","みず","nước"],["木","もく","き","cây"],["金","きん","かね","vàng, tiền"],["土","ど","つち","đất"]]}]},
];

T.forEach(t => t.forms.forEach(f => { f[2] = rb(f[2]); }));
registerRows("moji", T);
GRAMMAR.theory.moji = { rows: T, first: "ja-moji-hiragana" };
})();
