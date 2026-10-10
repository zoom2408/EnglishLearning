/* ja/content/theory/ukemi.js
   Ukemi: passive, adversative passive, causative, causative-passive.
   Uses the "table" diagram mode. Furigana: {漢字|かんじ}; romaji lines via ex(). */
(() => {
const ex = (jp, ro) => rb(jp) + (ro ? `<span class="ro">${ro}</span>` : "");
const T = [
 {id:"ja-uke-ukemi",num:"01",en:"受身形",vi:"Thể bị động",short:"よばれる · たべられる · される · こられる",
  core:"Thể bị động: <strong>nhóm 1</strong> u → <strong>a + れる</strong> (よぶ → よばれる), <strong>nhóm 2</strong> bỏ る + <strong>られる</strong> (みる → みられる), <strong>する → される</strong>, <strong>くる → こられる</strong>. Người thực hiện hành động đi với <strong>に</strong>.",
  forms:[["Nhóm 1","u → aれる",ex("{呼|よ}ぶ → {呼|よ}<mark>ばれる</mark>","yobu → yobareru")],["Nhóm 2","る → られる",ex("{見|み}る → {見|み}<mark>られる</mark>","miru → mirareru")],["Nhóm 3","される / こられる",ex("する → <mark>される</mark> / {来|く}る → {来|こ}<mark>られる</mark>","suru → sareru / kuru → korareru")],["Câu bị động","A は B に V(受身)",ex("{私|わたし}は{先生|せんせい}<mark>に</mark>{褒|ほ}められました。","watashi wa sensei ni homeraremashita")],["Vật bị tác động","N が V(受身)",ex("この{本|ほん}は{多|おお}くの{人|ひと}<mark>に</mark>{読|よ}まれています。","kono hon wa ōku no hito ni yomarete imasu")],["Sự kiện","N が V(受身)",ex("{来月|らいげつ}、{会議|かいぎ}が{開|ひら}かれます。","raigetsu, kaigi ga hirakaremasu")]],
  uses:[["Bị người khác khen, mắng",ex("{母|はは}<mark>に</mark>{叱|しか}られました。","haha ni shikararemashita")],["Văn viết, tin tức (chủ thể không quan trọng)",ex("このビルは{去年|きょねん}{建|た}てられました。","kono biru wa kyonen tateraremashita")],["Chủ thể là cơ quan",ex("この{映画|えいが}は{日本|にほん}で{作|つく}られました。","kono eiga wa Nihon de tsukuraremashita")]],
  signals:["〜れる","〜られる","N に V(受身)"],
  speak:5,write:5,
  reg:"Bị động tiếng Nhật rộng hơn tiếng Việt: ngoài “bị/được”, còn dùng khi chủ thể không quan trọng (văn viết, tin tức). Dùng に để chỉ người làm, dùng によって cho tác phẩm sáng tạo (「源氏物語は紫式部によって書かれた」).",
  mistake:["わたしは せんせいが ほめられました。","わたしは せんせいに ほめられました。","Người thực hiện hành động trong câu bị động đi với に, không dùng が."],
  table:[{head:["Nhóm","Ví dụ"],rows:[["Nhóm 1","u → a + れる","よぶ → よばれる"],["Nhóm 2","bỏ る + られる","みる → みられる"],["Nhóm 3","bất quy tắc","する → される · くる → こられる"]]}]},

 {id:"ja-uke-meiwaku",num:"02",en:"迷惑の受身",vi:"Bị động gây phiền",short:"あめに ふられた · ともだちに ないた",
  core:"<strong>Bị động gây phiền (間接受身)</strong>: người nói chịu ảnh hưởng xấu từ hành động của người khác, kể cả động từ không có tân ngữ. Mẫu: <strong>A は B に V(受身)</strong>, nhấn cảm xúc bất lực hoặc khó chịu.",
  forms:[["Mưa làm phiền","あめ に ふられる",ex("{雨|あめ}に{降|ふ}られました。","ame ni furaremashita")],["Con khóc","こどもに なかれる",ex("{赤|あか}ちゃんに{泣|な}かれました。","akachan ni nakaremashita")],["Bị lấy mất","N を とられる",ex("{財布|さいふ}を{盗|ぬす}ま<mark>れました</mark>。","saifu o nusumaremashita")],["Bị dẫm","あしを ふまれる",ex("{電車|でんしゃ}で{足|あし}を{踏|ふ}ま<mark>れました</mark>。","densha de ashi o fumaremashita")],["Bị chê","N に いわれる",ex("{友達|ともだち}に{悪口|わるぐち}を{言|い}わ<mark>れました</mark>。","tomodachi ni warukuchi o iwaremashita")],["Bị đến","ともだちに こられる",ex("{急|きゅう}に{友達|ともだち}に{来|こ}ら<mark>れて</mark>、{困|こま}りました。","kyū ni tomodachi ni korarete, komarimashita")]],
  uses:[["Than thở",ex("{昨日|きのう}{雨|あめ}に{降|ふ}られて、{服|ふく}が{濡|ぬ}れました。","kinō ame ni furarete, fuku ga nuremashita")],["Kể sự cố",ex("{電車|でんしゃ}の{中|なか}で{隣|となり}の{人|ひと}に{足|あし}を{踏|ふ}まれました。","densha no naka de tonari no hito ni ashi o fumaremashita")],["Giải thích lý do tâm trạng",ex("{弟|おとうと}に{大事|だいじ}な{本|ほん}を{捨|す}てられました。","otōto ni daiji na hon o suteraremashita")]],
  signals:["N に V(受身)","N を V(受身)"],
  speak:5,write:5,
  reg:"Bị động gây phiền luôn nghe bất lợi cho người nói: mưa, em khóc, bạn ghé chơi. Khi hành động có lợi, dùng 〜てもらう thay vì bị động.",
  mistake:["あめが ふりました。(muốn than bị ướt)","あめに ふられました。","Muốn nhấn người nói bị làm phiền, dùng bị động gây phiền."],
  table:[{head:["Tình huống","Ví dụ"],rows:[["Thời tiết","あめに ふられる","あめに ふられた"],["Mất đồ","N を V(受身)","さいふを ぬすまれた"],["Bị dẫm","あしを ふまれる","あしを ふまれた"]]}]},

 {id:"ja-uke-shieki",num:"03",en:"使役形",vi:"Thể sai khiến",short:"たべさせる · いかせる · させる · こさせる",
  core:"Thể sai khiến: <strong>nhóm 1</strong> u → <strong>a + せる</strong> (いく → いかせる), <strong>nhóm 2</strong> bỏ る + <strong>させる</strong> (たべる → たべさせる), <strong>する → させる</strong>, <strong>くる → こさせる</strong>. Hai ý: bắt buộc hoặc cho phép.",
  forms:[["Nhóm 1","u → aせる",ex("{行|い}く → {行|い}<mark>かせる</mark>","iku → ikaseru")],["Nhóm 2","る → させる",ex("{食|た}べる → {食|た}べ<mark>させる</mark>","taberu → tabesaseru")],["Nhóm 3","させる / こさせる",ex("する → <mark>させる</mark> / {来|く}る → {来|こ}<mark>させる</mark>","suru → saseru / kuru → kosaseru")],["Bắt buộc","A は B を/に V(使役)",ex("{母|はは}は{子供|こども}<mark>に</mark>{野菜|やさい}を{食|た}べ<mark>させました</mark>。","haha wa kodomo ni yasai o tabesasemashita")],["Cho phép","〜させてくれる",ex("{先生|せんせい}が{早|はや}く{帰|かえ}ら<mark>せてくれました</mark>。","sensei ga hayaku kaerasete kuremashita")],["Xin phép","〜させてください",ex("{私|わたし}に{行|い}か<mark>せてください</mark>。","watashi ni ikasete kudasai")]],
  uses:[["Bắt buộc",ex("{社長|しゃちょう}は{社員|しゃいん}を{働|はたら}か<mark>せました</mark>。","shachō wa shain o hatarakasemashita")],["Cho phép con làm",ex("{子供|こども}に{好|す}きなことをさせます。","kodomo ni suki na koto o sasemasu")],["Xin phép lịch sự",ex("{今日|きょう}は{早|はや}く{帰|かえ}ら<mark>せていただけませんか</mark>。","kyō wa hayaku kaeraseteitadakemasen ka")]],
  signals:["〜せる","〜させる","〜せてください","〜せてもらう"],
  speak:5,write:5,
  reg:"Đối tượng bị sai khiến: động từ không có tân ngữ (行く, 泣く) thì dùng を (ép buộc) hoặc に (cho phép); động từ có tân ngữ thì dùng に. Xin phép nên dùng 〜させてください, nghe lịch sự hơn 〜てもいいですか.",
  mistake:["こどもを やさいを たべさせました。","こどもに やさいを たべさせました。","Động từ có tân ngữ (やさいを) thì người bị sai khiến dùng に."],
  table:[{head:["Nhóm","Ví dụ"],rows:[["Nhóm 1","u → a + せる","いく → いかせる"],["Nhóm 2","bỏ る + させる","たべる → たべさせる"],["Nhóm 3","bất quy tắc","する → させる · くる → こさせる"]]}]},

 {id:"ja-uke-shiekiukemi",num:"04",en:"使役受身",vi:"Sai khiến bị động",short:"のませられる · たべさせられる · やらされる",
  core:"Sai khiến bị động: <strong>bị bắt phải làm</strong> điều không muốn. Hình thức: <strong>V(使役) + られる</strong>. Nhóm 1 thường rút gọn <strong>〜される</strong> (のむ → のまされる). Nhóm 2: <strong>〜させられる</strong>. する → <strong>させられる</strong>, くる → <strong>こさせられる</strong>.",
  forms:[["Nhóm 1","u → aせられる / あされる",ex("{飲|の}む → {飲|の}ま<mark>せられる</mark> / {飲|の}ま<mark>される</mark>","nomu → nomaserareru / nomasareru")],["Nhóm 2","る → させられる",ex("{食|た}べる → {食|た}べ<mark>させられる</mark>","taberu → tabesaserareru")],["Nhóm 3","させられる / こさせられる",ex("する → <mark>させられる</mark> / {来|く}る → {来|こ}<mark>させられる</mark>","suru → saserareru / kuru → kosaserareru")],["Câu","A は B に V(使役受身)",ex("{私|わたし}は{先生|せんせい}に{宿題|しゅくだい}をさせられました。","watashi wa sensei ni shukudai o saseraremashita")],["Bị ép uống","N を のませられる",ex("{上司|じょうし}に{お酒|さけ}を{飲|の}ま<mark>せられました</mark>。","jōshi ni osake o nomaseraremashita")],["Bị ép ăn","N を たべさせられる",ex("{母|はは}に{野菜|やさい}を{食|た}べ<mark>させられました</mark>。","haha ni yasai o tabesaseraremashita")]],
  uses:[["Than phiền công ty",ex("{残業|ざんぎょう}を<mark>させられました</mark>。","zangyō o saseraremashita")],["Hồi tưởng thời nhỏ",ex("{子供|こども}の{頃|ころ}、ピアノを{習|なら}わ<mark>せられました</mark>。","kodomo no koro, piano o narawaseraremashita")],["Bị ép tham gia",ex("{飲|の}み{会|かい}に{行|い}か<mark>された</mark>。","nomikai ni ikasareta")]],
  signals:["〜せられる","〜される","〜させられる"],
  speak:5,write:5,
  reg:"Câu sai khiến bị động luôn có sắc thái “tôi không muốn mà bị bắt”. Nếu muốn nói “cho phép làm” dùng 〜させてもらう, không dùng 使役受身.",
  mistake:["ははに やさいを たべられました。(muốn nói bị ép)","ははに やさいを たべさせられました。","たべられました là khả năng/bị động. Bị ép là たべさせられました."],
  table:[{head:["Nhóm","Ví dụ"],rows:[["Nhóm 1","u → a + せられる / される","のむ → のまされる"],["Nhóm 2","る → させられる","たべる → たべさせられる"],["Nhóm 3","bất quy tắc","する → させられる"]]}]},
];

T.forEach(t => t.forms.forEach(f => { f[2] = rb(f[2]); }));
registerRows("ukemi", T);
GRAMMAR.theory.ukemi = { rows: T, first: "ja-uke-ukemi" };
})();
