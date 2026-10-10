/* ja/content/theory/tekei.js
   Te-form: conjugation, requests/permission, ている, sequence patterns.
   Uses the "table" diagram mode. Furigana: {漢字|かんじ}; romaji lines via ex(). */
(() => {
const ex = (jp, ro) => rb(jp) + (ro ? `<span class="ro">${ro}</span>` : "");
const T = [
 {id:"ja-te-tsukuri",num:"01",en:"て形の作り方",vi:"Cách chia thể て",short:"のむ → のんで · かく → かいて · たべる → たべて",
  core:"Thể て chia theo nhóm. <strong>Nhóm 2</strong> bỏ る + <strong>て</strong>. <strong>Nhóm 3</strong>: する → して, くる → きて. <strong>Nhóm 1</strong> đổi theo đuôi: <strong>う・つ・る → って</strong>, <strong>む・ぶ・ぬ → んで</strong>, <strong>く → いて</strong>, <strong>ぐ → いで</strong>, <strong>す → して</strong>. Ngoại lệ: <strong>いく → いって</strong>.",
  forms:[["う・つ・る","→ って",ex("{買|か}う → {買|か}<mark>って</mark>","kau → katte")],["む・ぶ・ぬ","→ んで",ex("{飲|の}む → {飲|の}<mark>んで</mark>","nomu → nonde")],["く","→ いて",ex("{書|か}く → {書|か}<mark>いて</mark>","kaku → kaite")],["ぐ","→ いで",ex("{泳|およ}ぐ → {泳|およ}<mark>いで</mark>","oyogu → oyoide")],["す","→ して",ex("{話|はな}す → {話|はな}<mark>して</mark>","hanasu → hanashite")],["Nhóm 2 / 3","bỏ る + て",ex("{食|た}べる → {食|た}べ<mark>て</mark>, する → <mark>して</mark>, {来|く}る → {来|き}<mark>て</mark>","taberu → tabete, suru → shite, kuru → kite")]],
  uses:[["Ngoại lệ いく",ex("{行|い}く → {行|い}<mark>って</mark>","iku → itte")],["Chia ある → あって, かえる → かえって",ex("ある → あ<mark>って</mark>, {帰|かえ}る → {帰|かえ}<mark>って</mark>","aru → atte, kaeru → kaette")],["Mẹo nhớ: 5 nhóm đuôi",ex("う・つ・る / む・ぶ・ぬ / く / ぐ / す","u・tsu・ru / mu・bu・nu / ku / gu / su")]],
  signals:["〜って","〜んで","〜いて","〜いで","〜して","いく → いって"],
  speak:5,write:5,
  reg:"Hãy học thuộc bảng đuôi này như một bài hát. Phần lớn lỗi ở thể て đến từ nhóm 1 đuôi む/ぶ/ぬ (nんで) và ngoại lệ いく.",
  mistake:["いきて (muốn nói “đi rồi”)","いって","いく là ngoại lệ: いって, không phải いいて hay いきて."],
  table:[{head:["Đuôi","Ví dụ"],rows:[["う・つ・る","→ って","かって・まって・とって"],["む・ぶ・ぬ","→ んで","のんで・あそんで・しんで"],["く","→ いて","かいて・あるいて"],["ぐ","→ いで","およいで"],["す","→ して","はなして"]]}]},

 {id:"ja-te-irai",num:"02",en:"依頼・許可",vi:"Nhờ, xin phép, cấm",short:"〜てください · 〜てもいいです · 〜てはいけません",
  core:"<strong>〜てください</strong> nhờ hoặc ra lệnh lịch sự. <strong>〜てもいいですか</strong> xin phép. <strong>〜てはいけません</strong> cấm đoán. <strong>〜ないでください</strong> yêu cầu đừng làm.",
  forms:[["Nhờ","V て ください",ex("ここに{名前|なまえ}を{書|か}い<mark>てください</mark>。","koko ni namae o kaite kudasai")],["Xin phép","V て もいいですか",ex("ここに{座|すわ}っ<mark>てもいいですか</mark>。","koko ni suwatte mo ii desu ka")],["Cho phép","V て もいいです",ex("はい、{座|すわ}っ<mark>てもいいです</mark>。","hai, suwatte mo ii desu")],["Cấm","V て は いけません",ex("ここで{写真|しゃしん}を{撮|と}っ<mark>てはいけません</mark>。","koko de shashin o totte wa ikemasen")],["Đừng làm","V ない で ください",ex("{走|はし}ら<mark>ないでください</mark>。","hashiranai de kudasai")],["Nhờ nhẹ","〜てくれませんか",ex("{手伝|てつだ}っ<mark>てくれませんか</mark>。","tetsudatte kuremasen ka")]],
  uses:[["Nhờ ở nhà hàng",ex("すみません、お{水|みず}を<mark>ください</mark>。","sumimasen, omizu o kudasai")],["Xin phép ở nơi công cộng",ex("{窓|まど}を{開|あ}け<mark>てもいいですか</mark>。","mado o akete mo ii desu ka")],["Biển báo cấm",ex("ここでタバコを{吸|す}っ<mark>てはいけません</mark>。","koko de tabako o sutte wa ikemasen")]],
  signals:["〜てください","〜てもいいですか","〜てはいけません","〜ないでください"],
  speak:5,write:5,
  reg:"〜てください là yêu cầu nhưng nghe hơi thẳng với người trên. Với cấp trên, thêm ませんか hoặc dùng 〜ていただけませんか ở trình độ cao hơn. Trả lời “いいですか” từ chối: すみません、ちょっと…",
  mistake:["ここで しゃしんを とるは いけません。","ここで しゃしんを とってはいけません。","Cấm đoán: V て + は + いけません, không dùng dạng từ điển."],
  table:[{head:["Mẫu","Ví dụ"],rows:[["〜てください","nhờ","かいてください"],["〜てもいい","xin/cho phép","すわってもいい"],["〜てはいけません","cấm","とってはいけません"],["〜ないでください","đừng","はしらないでください"]]}]},

 {id:"ja-te-iru",num:"03",en:"〜ている",vi:"Đang làm · trạng thái",short:"たべています · すんでいます · けっこんしています",
  core:"<strong>〜ています</strong> có ba nghĩa chính: <strong>đang làm</strong> (hành động tiến hành), <strong>trạng thái kết quả</strong> (đã làm và kết quả còn lại), <strong>thói quen / nghề nghiệp</strong>. Phủ định: <strong>〜ていません</strong>.",
  forms:[["Đang làm","V ています",ex("{今|いま}{食|た}べ<mark>ています</mark>。","ima tabete imasu")],["Phủ định","V ていません",ex("まだ{食|た}べ<mark>ていません</mark>。","mada tabete imasen")],["Trạng thái (ở)","V ています",ex("{東京|とうきょう}に{住|す}ん<mark>でいます</mark>。","Tōkyō ni sunde imasu")],["Trạng thái (kết hôn)","V ています",ex("{結婚|けっこん}し<mark>ています</mark>。","kekkon shite imasu")],["Nghề nghiệp","N で V ています",ex("{銀行|ぎんこう}で{働|はたら}い<mark>ています</mark>。","ginkō de hataraite imasu")],["Thói quen","いつも V ています",ex("{毎朝|まいあさ}{走|はし}っ<mark>ています</mark>。","maiasa hashitte imasu")]],
  uses:[["Hỏi “đang làm gì?”",ex("{何|なに}を<mark>している</mark>んですか。","nani o shite iru n desu ka")],["Mặc, đeo (trạng thái)",ex("{赤|あか}いセーターを<mark>着ています</mark>。","akai sētā o kite imasu")],["Biết (trạng thái)",ex("{田中|たなか}さんを<mark>知っています</mark>。","Tanaka-san o shitte imasu")]],
  signals:["〜ています","〜ていません","いま","まだ〜ていません","すんでいます"],
  speak:5,write:5,
  reg:"Các động từ chuyển trạng thái (住む, 結婚する, 知る, 持つ, 着る) khi thêm ている thường nghĩa là “ở trong trạng thái đó”, không phải “đang làm”. Phủ định của 知っている là 知りません (không phải 知っていません).",
  mistake:["とうきょうに すみます。(muốn nói “đang sống ở Tokyo”)","とうきょうに すんでいます。","Nơi sinh sống hiện tại dùng 〜ています."],
  table:[{head:["Nghĩa","Ví dụ"],rows:[["Đang làm","〜ています","たべています"],["Trạng thái","〜ています","すんでいます"],["Nghề nghiệp","〜ています","はたらいています"],["Chưa làm","まだ〜ていません","まだ たべていません"]]}]},

 {id:"ja-te-renketsu",num:"04",en:"て形の連結",vi:"Nối hành động & て～",short:"おきて、たべて、いきます · たべてから · みてみます",
  core:"Thể て nối hành động theo thứ tự (<strong>V て、V て、V ます</strong>). <strong>〜てから</strong> nhấn “sau khi”. <strong>〜てみる</strong> thử làm. <strong>〜ておく</strong> làm sẵn. <strong>〜てしまう</strong> lỡ làm, làm xong.",
  forms:[["Nối chuỗi","V て、V て、V ます",ex("{起|お}き<mark>て</mark>、{顔|かお}を{洗|あら}っ<mark>て</mark>、{学校|がっこう}へ{行|い}きます。","okite, kao o aratte, gakkō e ikimasu")],["Sau khi","V てから",ex("{食|た}べ<mark>てから</mark>{寝|ね}ます。","tabete kara nemasu")],["Thử","V てみる",ex("{食|た}べ<mark>てみます</mark>。","tabete mimasu")],["Làm sẵn","V ておく",ex("{予約|よやく}し<mark>ておきます</mark>。","yoyaku shite okimasu")],["Lỡ / xong","V てしまう",ex("{財布|さいふ}を{忘|わす}れ<mark>てしまいました</mark>。","saifu o wasurete shimaimashita")],["Đi rồi về","V て いく/くる",ex("{買|か}っ<mark>て</mark>{来|き}ます。","katte kimasu")]],
  uses:[["Trình bày thứ tự trong ngày",ex("{朝|あさ}{起|お}き<mark>て</mark>、シャワーを{浴|あ}び<mark>て</mark>、{出|で}かけます。","asa okite, shawā o abite, dekakemasu")],["Làm việc A xong rồi mới B",ex("{宿題|しゅくだい}をし<mark>てから</mark>{遊|あそ}びます。","shukudai o shite kara asobimasu")],["Mua rồi mang về",ex("パンを{買|か}っ<mark>て</mark>{帰|かえ}ります。","pan o katte kaerimasu")]],
  signals:["V て、V て","〜てから","〜てみる","〜ておく","〜てしまう"],
  speak:5,write:5,
  reg:"Khi nối nhiều hành động bằng て, thì (và thể) chỉ xuất hiện ở động từ cuối cùng. Các động từ trước chỉ dùng thể て. Đây là điều khác với tiếng Việt “rồi”.",
  mistake:["たべますから ねます。","たべてから ねます。","Muốn nói “sau khi ăn”, dùng thể て + から, không dùng ますから (nghĩa là “vì”)."],
  table:[{head:["Mẫu","Ví dụ"],rows:[["V て、V","nối chuỗi","おきて、たべて"],["〜てから","sau khi","たべてから"],["〜てみる","thử","たべてみる"],["〜ておく","làm sẵn","よやくしておく"],["〜てしまう","lỡ / xong","わすれてしまう"]]}]},
];

T.forEach(t => t.forms.forEach(f => { f[2] = rb(f[2]); }));
registerRows("tekei", T);
GRAMMAR.theory.tekei = { rows: T, first: "ja-te-tsukuri" };
})();
