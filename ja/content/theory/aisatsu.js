/* ja/content/theory/aisatsu.js
   Aisatsu: greetings, self-introduction, numbers 0-10000, dates/days/time.
   Uses the "table" diagram mode. Furigana: {漢字|かんじ}; romaji lines via ex(). */
(() => {
const ex = (jp, ro) => rb(jp) + (ro ? `<span class="ro">${ro}</span>` : "");
const T = [
 {id:"ja-ais-aisatsu",num:"01",en:"あいさつ",vi:"Chào hỏi & tạm biệt",short:"おはよう · こんにちは · こんばんは · さようなら",
  core:"Tiếng Nhật chào theo <strong>thời điểm trong ngày</strong> và theo <strong>mức độ lịch sự</strong>. Thêm <strong>ございます</strong> hoặc <strong>ください/ます</strong> khi cần trang trọng, bỏ đi khi nói với bạn bè.",
  forms:[["Sáng","おはようございます","<mark>おはようございます</mark>。"+'<span class="ro">ohayō gozaimasu</span>'],["Ban ngày","こんにちは","<mark>こんにちは</mark>、{田中|たなか}さん。"+'<span class="ro">konnichiwa, Tanaka-san</span>'],["Tối","こんばんは","<mark>こんばんは</mark>。"+'<span class="ro">konbanwa</span>'],["Trước khi ngủ","おやすみなさい","<mark>おやすみなさい</mark>。"+'<span class="ro">oyasuminasai</span>'],["Tạm biệt","さようなら / じゃあ、また","<mark>じゃあ、また</mark>{明日|あした}。"+'<span class="ro">jā, mata ashita</span>'],["Cảm ơn","ありがとうございます","<mark>ありがとうございます</mark>。"+'<span class="ro">arigatō gozaimasu</span>']],
  uses:[["Xin lỗi hoặc xin phép",ex("<mark>すみません</mark>、ちょっと…。<mark>ごめんなさい</mark>。","sumimasen, chotto… / gomen nasai")],["Trước và sau bữa ăn",ex("<mark>いただきます</mark>。 → <mark>ごちそうさまでした</mark>。","itadakimasu → gochisōsama deshita")],["Ra khỏi nhà và về nhà",ex("<mark>いってきます</mark>→<mark>いってらっしゃい</mark> · <mark>ただいま</mark>→<mark>おかえりなさい</mark>","ittekimasu → itterasshai · tadaima → okaerinasai")]],
  signals:["おはよう","こんにちは","こんばんは","ありがとう","すみません","いただきます"],
  speak:5,write:2,
  reg:"こんにちは dùng từ khoảng 10 giờ sáng đến chiều tối. おはよう (không ございます) chỉ dùng với bạn bè, người nhỏ tuổi hơn. すみません vừa là “xin lỗi” vừa là “làm phiền” và đôi khi thay cho “cảm ơn”.",
  mistake:["おはようございます (lúc 3 giờ chiều)","こんにちは","おはようございます chỉ dùng buổi sáng. Buổi chiều dùng こんにちは, tối dùng こんばんは."],
  table:[{head:["Câu nói","Câu đáp"],rows:[["Ra khỏi nhà","いってきます","いってらっしゃい"],["Về đến nhà","ただいま","おかえりなさい"],["Trước khi ăn","いただきます","(không cần đáp)"],["Cảm ơn","ありがとうございます","どういたしまして"],["Lần đầu gặp","はじめまして","はじめまして。どうぞよろしく"]]}]},

 {id:"ja-ais-jikoshokai",num:"02",en:"自己紹介",vi:"Giới thiệu bản thân",short:"はじめまして。わたしは〜です。",
  core:"Khung tự giới thiệu chuẩn: <strong>はじめまして → tên → quê/quốc tịch → nghề/tuổi → どうぞよろしくおねがいします</strong>. Chú ý: không gắn <strong>さん</strong> vào tên của chính mình.",
  forms:[["Mở đầu","はじめまして","<mark>はじめまして</mark>。"+'<span class="ro">hajimemashite</span>'],["Tên","わたしは [tên] です","<mark>わたしは</mark>リンです。"+'<span class="ro">watashi wa Rin desu</span>'],["Quốc tịch","[nước] じん です","ベトナム<mark>じん</mark>です。"+'<span class="ro">Betonamu-jin desu</span>'],["Nơi đến từ","[nơi] から きました","ハノイ<mark>から</mark>きました。"+'<span class="ro">Hanoi kara kimashita</span>'],["Tuổi","[số] さい です","<mark>にじゅうごさい</mark>です。"+'<span class="ro">nijūgo-sai desu</span>'],["Kết thúc","どうぞ よろしく おねがいします","<mark>どうぞよろしくおねがいします</mark>。"+'<span class="ro">dōzo yoroshiku onegai shimasu</span>']],
  uses:[["Nói nghề",ex("{私|わたし}は<mark>{会社員|かいしゃいん}</mark>です。{姉|あね}は<mark>{先生|せんせい}</mark>です。","watashi wa kaishain desu. ane wa sensei desu")],["Hỏi tên",ex("お<mark>{名前|なまえ}</mark>は？ — {田中|たなか}です。","onamae wa? — Tanaka desu")],["Hỏi tuổi và nghề",ex("<mark>おいくつ</mark>ですか。 お<mark>{仕事|しごと}</mark>は？","oikutsu desu ka. oshigoto wa?")]],
  signals:["はじめまして","わたしは","〜から きました","〜さい","〜じん","よろしく"],
  speak:5,write:3,
  reg:"Khi nói về chính mình hoặc người trong gia đình mình, không thêm さん. Với người khác, thêm さん sau họ: たなかさん. おいくつですか lịch sự hơn なんさいですか khi hỏi người lớn.",
  mistake:["わたしは リンさん です。","わたしは リン です。","さん là kính ngữ dùng cho người khác, không dùng cho bản thân mình."],
  table:[{head:["Hỏi","Đáp"],rows:[["Tên","おなまえは？","リンです。"],["Quốc tịch","おくには どちらですか。","ベトナムです。"],["Tuổi","おいくつですか。","にじゅうごさいです。"],["Nghề","おしごとは なんですか。","デザイナーです。"]]}]},

 {id:"ja-ais-kazu",num:"03",en:"数",vi:"Số đếm 0-10000",short:"いち に さん … じゅう · ひゃく · せん · まん",
  core:"Số 1-10 phải thuộc lòng. Từ 11 trở đi chỉ ghép: <strong>じゅう (10) + số</strong>. Có ba nhóm phát âm bất quy tắc: <strong>300, 600, 800</strong> (trăm), <strong>3000, 8000</strong> (nghìn) và <strong>4, 7, 9</strong> có hai cách đọc.",
  forms:[["0-5","れい/ゼロ · いち · に · さん · よん/し · ご","<mark>さん</mark>じ (3 giờ)"],["6-10","ろく · なな/しち · はち · きゅう/く · じゅう","<mark>はち</mark>じ (8 giờ)"],["11-99","じゅう + số · số + じゅう + số","<mark>さんじゅうご</mark> (35)"],["Trăm","ひゃく · にひゃく · さんびゃく · ろっぴゃく · はっぴゃく","<mark>ろっぴゃく</mark>えん (600 yên)"],["Nghìn","せん · にせん · さんぜん · はっせん","<mark>さんぜん</mark>えん (3000 yên)"],["Vạn","いちまん (10000) · ごまん (50000)","<mark>いちまん</mark>えん (10000 yên)"]],
  uses:[["Đọc 4, 7, 9 trong giờ, ngày và tháng",ex("<mark>よ</mark>じ (4 giờ) · <mark>しち</mark>じ (7 giờ) · <mark>く</mark>じ (9 giờ)","yoji · shichiji · kuji")],["Số điện thoại: đọc từng chữ số",ex("090-1234-5678 → ゼロきゅうゼロ…","zero-kyū-zero…")],["10000 phải nói いち",ex("<mark>いちまん</mark>えん (✗ まんえん)","ichiman en")]],
  signals:["よん・し","なな・しち","きゅう・く","さんびゃく","はっせん","いちまん"],
  speak:5,write:4,
  reg:"Số cũng ghép với đếm từ (counter) nên đọc đổi âm. Khi đọc số điện thoại, 0 thường đọc ゼロ và 4 đọc よん, 7 đọc なな.",
  mistake:["さんひゃく","さんびゃく","Chữ ひゃく đổi thành びゃく sau 3 (300), ぴゃく sau 6 và 8 (600 ろっぴゃく, 800 はっぴゃく)."],
  table:[{title:"Số trăm và nghìn bất quy tắc",head:["Trăm","Nghìn"],rows:[["1","ひゃく","せん"],["2","にひゃく","にせん"],["3","**さんびゃく**","**さんぜん**"],["4","よんひゃく","よんせん"],["6","**ろっぴゃく**","ろくせん"],["8","**はっぴゃく**","**はっせん**"]]}]},

 {id:"ja-ais-hiduke",num:"04",en:"日付・曜日・時間",vi:"Ngày tháng, thứ & giờ",short:"〜がつ 〜にち · 〜ようび · 〜じ 〜ふん",
  core:"Tháng ghép <strong>số + がつ</strong> (4 tháng 4 là しがつ). Ngày 1-10, 14, 20, 24 đọc <strong>đặc biệt</strong>. Thứ gồm <strong>七曜</strong> + ようび. Giờ dùng <strong>〜じ</strong>, phút dùng <strong>〜ふん/ぷん</strong>.",
  forms:[["Tháng","いちがつ … しがつ (4) · しちがつ (7) · くがつ (9)","<mark>しがつ</mark>"+'<span class="ro">shigatsu (tháng 4)</span>'],["Ngày 1-5","ついたち · ふつか · みっか · よっか · いつか","<mark>みっか</mark>"+'<span class="ro">mikka (ngày 3)</span>'],["Ngày 6-10","むいか · なのか · ようか · ここのか · とおか","<mark>ようか</mark>"+'<span class="ro">yōka (ngày 8)</span>'],["Ngày đặc biệt","14 じゅうよっか · 20 はつか · 24 にじゅうよっか","<mark>はつか</mark>"+'<span class="ro">hatsuka (ngày 20)</span>'],["Giờ","いちじ … よじ (4) · しちじ (7) · くじ (9)","<mark>くじ</mark>"+'<span class="ro">kuji (9 giờ)</span>'],["Phút","いっぷん · にふん · さんぷん · よんぷん · ろっぷん · じゅっぷん","<mark>じゅっぷん</mark>"+'<span class="ro">juppun (10 phút)</span>']],
  uses:[["Hỏi ngày giờ",ex("<mark>{今日|きょう}は{何月|なんがつ}{何日|なんにち}</mark>ですか。 <mark>{今|いま}{何時|なんじ}</mark>ですか。","kyō wa nangatsu nannichi desu ka. ima nanji desu ka")],["Nói giờ rưỡi và sáng/chiều",ex("<mark>ごぜん</mark>くじ<mark>はん</mark> · <mark>ごご</mark>さんじ","gozen kuji han · gogo sanji")],["Ngày trong tuần",ex("<mark>{月曜日|げつようび}</mark>から<mark>{金曜日|きんようび}</mark>まで","getsuyōbi kara kin’yōbi made")]],
  signals:["〜がつ","〜にち","〜ようび","〜じ","〜ふん/ぷん","〜はん"],
  speak:5,write:5,
  reg:"Văn nói thường dùng ごぜん/ごご trước giờ. Giờ 12 giờ trưa là しょうご (正午) hoặc じゅうにじ. Ngày mồng 1 đọc ついたち chứ không đọc いちにち.",
  mistake:["いちにち (ngày 1 tháng 5)","ついたち","Ngày 1 trong tháng đọc ついたち. いちにち nghĩa là “một ngày” (độ dài thời gian)."],
  table:[{title:"Ngày trong tuần",head:["Kanji","Đọc","Nghĩa gốc"],rows:[["Chủ nhật","日曜日","にちようび","mặt trời"],["Thứ hai","月曜日","げつようび","mặt trăng"],["Thứ ba","火曜日","かようび","lửa"],["Thứ tư","水曜日","すいようび","nước"],["Thứ năm","木曜日","もくようび","cây"],["Thứ sáu","金曜日","きんようび","vàng"],["Thứ bảy","土曜日","どようび","đất"]]}]},
];

T.forEach(t => t.forms.forEach(f => { f[2] = rb(f[2]); }));
registerRows("aisatsu", T);
GRAMMAR.theory.aisatsu = { rows: T, first: "ja-ais-aisatsu" };
})();
