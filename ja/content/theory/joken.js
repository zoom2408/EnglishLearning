/* ja/content/theory/joken.js
   Joken: と, ば, たら, なら.
   Uses the "table" diagram mode. Furigana: {漢字|かんじ}; romaji lines via ex(). */
(() => {
const ex = (jp, ro) => rb(jp) + (ro ? `<span class="ro">${ro}</span>` : "");
const T = [
 {id:"ja-jok-to",num:"01",en:"と",vi:"〜と (hễ… thì)",short:"はるに なると さくらが さきます",
  core:"<strong>V る / V ない + と</strong>: kết quả luôn xảy ra theo quy luật tự nhiên, thói quen hoặc hướng dẫn. Vế sau không dùng ý chí (nhờ vả, rủ, mệnh lệnh). Cũng dùng hướng dẫn đường đi.",
  forms:[["Quy luật","V る + と",ex("{春|はる}になる<mark>と</mark>、{桜|さくら}が{咲|さ}きます。","haru ni naru to, sakura ga sakimasu")],["Máy móc","ボタンを{押|お}す<mark>と</mark>",ex("このボタンを{押|お}す<mark>と</mark>、{水|みず}が{出|で}ます。","kono botan o osu to, mizu ga demasu")],["Chỉ đường","まっすぐ {行|い}く と",ex("まっすぐ{行|い}く<mark>と</mark>、{駅|えき}があります。","massugu iku to, eki ga arimasu")],["Phủ định","V ない + と",ex("{早|はや}く{行|い}かない<mark>と</mark>、{遅|おく}れます。","hayaku ikanai to, okuremasu")],["Phát hiện (quá khứ)","V た + と",ex("{窓|まど}を{開|あ}ける<mark>と</mark>、{雪|ゆき}が{降|ふ}っていました。","mado o akeru to, yuki ga futte imashita")],["Quy luật cảm xúc","〜と、〜なります",ex("{お酒|さけ}を{飲|の}む<mark>と</mark>、{顔|かお}が{赤|あか}くなります。","osake o nomu to, kao ga akaku narimasu")]],
  uses:[["Thói quen",ex("{家|うち}に{帰|かえ}る<mark>と</mark>、すぐシャワーを{浴|あ}びます。","uchi ni kaeru to, sugu shawā o abimasu")],["Hướng dẫn máy",ex("ここを{押|お}す<mark>と</mark>{電源|でんげん}が{入|はい}ります。","koko o osu to dengen ga hairimasu")],["Cảnh báo",ex("{薬|くすり}を{飲|の}まない<mark>と</mark>、{治|なお}りません。","kusuri o nomanai to, naorimasen")]],
  signals:["V る と","V ない と","V た と (phát hiện)"],
  speak:5,write:5,
  reg:"と mang tính “tất yếu”. Vế sau không dùng được ý chí (〜たい, 〜てください, 〜ましょう): 「安いと、買いましょう」 sai, dùng たら hoặc なら.",
  mistake:["やすいと、かいましょう。","やすかったら、かいましょう。","Vế sau có ý chí (rủ rê) không đi với と, dùng たら."],
  table:[{head:["Dùng khi","Ví dụ"],rows:[["quy luật","tự nhiên","はるに なると さく"],["máy móc","cơ chế","おすと でる"],["chỉ đường","đường đi","いくと えきが ある"],["phát hiện","quá khứ","あけると ゆきだった"]]}]},

 {id:"ja-jok-ba",num:"02",en:"ば",vi:"〜ば (nếu)",short:"やすければ かいます · いけば わかります",
  core:"Thể <strong>ば</strong>: nhóm 1 u → <strong>e + ば</strong> (いく → いけば), nhóm 2 る → <strong>れば</strong> (たべれば), する → <strong>すれば</strong>, くる → <strong>くれば</strong>. Tính từ い: い → <strong>ければ</strong>. Tính từ な/Danh từ: <strong>なら(ば)</strong>. Phủ định: <strong>なければ</strong>.",
  forms:[["Nhóm 1","u → eば",ex("{行|い}く → {行|い}<mark>けば</mark>","iku → ikeba")],["Nhóm 2","る → れば",ex("{食|た}べる → {食|た}べ<mark>れば</mark>","taberu → tabereba")],["Nhóm 3","すれば / くれば",ex("する → <mark>すれば</mark> / {来|く}る → <mark>くれば</mark>","suru → sureba / kuru → kureba")],["Tính từ い","い → ければ",ex("{安|やす}<mark>ければ</mark>{買|か}います。","yasukereba kaimasu")],["Phủ định","〜なければ",ex("{勉強|べんきょう}し<mark>なければ</mark>、{合格|ごうかく}できません。","benkyō shinakereba, gōkaku dekimasen")],["Gợi ý","〜ば いい",ex("{駅|えき}で{聞|き}け<mark>ばいい</mark>です。","eki de kikeba ii desu")]],
  uses:[["Điều kiện cần",ex("{時間|じかん}があれ<mark>ば</mark>、{行|い}きます。","jikan ga areba, ikimasu")],["Gợi ý cách làm",ex("{分|わ}からなければ、{先生|せんせい}に{聞|き}けばいいです。","wakaranakereba, sensei ni kikeba ii desu")],["Càng … càng …",ex("{安|やす}ければ{安|やす}いほどいいです。","yasukereba yasui hodo ii desu")]],
  signals:["〜えば","〜れば","〜ければ","〜なければ","〜ばいい"],
  speak:5,write:5,
  reg:"ば nhấn điều kiện cần (“chỉ cần …”). Vế sau thường không dùng ý chí nếu vế trước là hành động (ない nếu là trạng thái thì được). Dùng nhiều với 〜ばいい (nên) và 〜なければならない.",
  mistake:["やすいば、かいます。","やすければ、かいます。","Tính từ い: bỏ い + ければ."],
  table:[{head:["Dạng","Ví dụ"],rows:[["Nhóm 1","u → eば","いく → いけば"],["Nhóm 2","る → れば","たべる → たべれば"],["Nhóm 3","bất quy tắc","する → すれば"],["Tính từ い","→ ければ","やすい → やすければ"]]}]},

 {id:"ja-jok-tara",num:"03",en:"たら",vi:"〜たら (nếu / khi)",short:"あめが ふったら いきません · ついたら でんわして",
  core:"<strong>V た + ら</strong>: “nếu / khi (đã) …”. Dùng được cho điều kiện giả định lẫn sự việc chắc chắn xảy ra trong tương lai, và vế sau tự do dùng ý chí (nhờ, rủ, mệnh lệnh). Là mẫu điều kiện rộng nhất.",
  forms:[["Giả định","V たら",ex("{雨|あめ}が{降|ふ}っ<mark>たら</mark>、{行|い}きません。","ame ga futtara, ikimasen")],["Khi (chắc chắn)","V たら",ex("{家|うち}に{着|つ}い<mark>たら</mark>、{電話|でんわ}してください。","uchi ni tsuitara, denwa shite kudasai")],["Tính từ い","A かったら",ex("{安|やす}<mark>かったら</mark>、{買|か}います。","yasukattara, kaimasu")],["Tính từ な / N","A だったら",ex("{暇|ひま}<mark>だったら</mark>、{来|き}てください。","himadattara, kite kudasai")],["Phủ định","V なかったら",ex("{行|い}か<mark>なかったら</mark>、{後悔|こうかい}します。","ikanakattara, kōkai shimasu")],["Phát hiện (quá khứ)","V たら、〜た",ex("{家|うち}に{帰|かえ}っ<mark>たら</mark>、{猫|ねこ}がいませんでした。","uchi ni kaettara, neko ga imasen deshita")]],
  uses:[["Hẹn khi xong việc",ex("{仕事|しごと}が{終|お}わっ<mark>たら</mark>、{食事|しょくじ}に{行|い}きましょう。","shigoto ga owattara, shokuji ni ikimashō")],["Hỏi ý “nếu thì sao”",ex("もし{宝|たから}くじが{当|あ}たっ<mark>たら</mark>、{何|なに}をしますか。","moshi takarakuji ga atattara, nani o shimasu ka")],["Khuyên dùng たら",ex("{疲|つか}れ<mark>たら</mark>、{休|やす}んでください。","tsukaretara, yasunde kudasai")]],
  signals:["〜たら","〜かったら","〜だったら","もし〜たら"],
  speak:5,write:5,
  reg:"Nếu bạn không biết chọn と, ば, たら, なら thế nào, dùng たら. Nó luôn đúng ngoại trừ khi nói quy luật (と tự nhiên hơn) hoặc điều kiện là lời người khác nói (なら).",
  mistake:["あめが ふったと、いきません。","あめが ふったら、いきません。","と không chia た trong điều kiện giả định. Dùng たら."],
  table:[{head:["Loại","Ví dụ"],rows:[["Động từ","〜たら","ふったら"],["Tính từ い","〜かったら","やすかったら"],["Tính từ な / N","〜だったら","ひまだったら"],["Phủ định","〜なかったら","いかなかったら"]]}]},

 {id:"ja-jok-nara",num:"04",en:"なら",vi:"〜なら & chọn mẫu",short:"にほんへ いくなら わたしも いきます",
  core:"<strong>〜なら</strong> dùng khi người nói <strong>tiếp nhận thông tin từ người khác rồi đưa lời khuyên, đề nghị, ý kiến</strong>. Gắn vào thể thường (な/N bỏ だ). Cũng dùng khi nói chủ đề: “nếu nói về …”.",
  forms:[["Sau thông tin","V thường + なら",ex("{日本|にほん}へ{行|い}く<mark>なら</mark>、{京都|きょうと}がいいですよ。","Nihon e iku nara, Kyōto ga ii desu yo")],["Danh từ","N なら",ex("{寿司|すし}<mark>なら</mark>、あの{店|みせ}がおいしいです。","sushi nara, ano mise ga oishii desu")],["Tính từ な","A なら",ex("{暇|ひま}<mark>なら</mark>、{手伝|てつだ}ってください。","hima nara, tetsudatte kudasai")],["Phủ định","V ない なら",ex("{食|た}べない<mark>なら</mark>、{捨|す}てますよ。","tabenai nara, sutemasu yo")],["Chủ đề","N なら",ex("{音楽|おんがく}<mark>なら</mark>、{私|わたし}に{任|まか}せて。","ongaku nara, watashi ni makasete")],["Ý định","V る なら",ex("{行|い}く<mark>なら</mark>、{私|わたし}も{行|い}きます。","iku nara, watashi mo ikimasu")]],
  uses:[["Lời khuyên trên thông tin vừa nghe",ex("A: {来週|らいしゅう}{大阪|おおさか}へ{行|い}きます。 B: {大阪|おおさか}へ{行|い}く<mark>なら</mark>、たこ{焼|や}きを{食|た}べてください。","A: raishū Ōsaka e ikimasu. B: Ōsaka e iku nara, takoyaki o tabete kudasai")],["Giới thiệu theo chủ đề",ex("カメラ<mark>なら</mark>、{秋葉原|あきはばら}がいいですよ。","kamera nara, Akihabara ga ii desu yo")],["Khuyên điều kiện",ex("{眠|ねむ}い<mark>なら</mark>、{寝|ね}たほうがいいです。","nemui nara, neta hō ga ii desu")]],
  signals:["〜なら","N なら","〜のなら"],
  speak:5,write:5,
  reg:"Chọn mẫu: と = quy luật; ば = điều kiện cần, gợi ý; たら = rộng nhất, vế sau tự do; なら = đáp lại thông tin của người khác. Hành động ở vế なら xảy ra trước hoặc đang diễn ra so với vế sau.",
  mistake:["にほんへ いったなら、きょうとが いいです。","にほんへ いくなら、きょうとが いいです。","なら nhận thông tin “sắp đi” nên dùng V る, không dùng た."],
  table:[{head:["Mẫu","Ví dụ"],rows:[["と","quy luật","はるになると さく"],["ば","điều kiện cần","やすければ かう"],["たら","rộng nhất","ついたら でんわ"],["なら","đáp thông tin","いくなら きょうと"]]}]},
];

T.forEach(t => t.forms.forEach(f => { f[2] = rb(f[2]); }));
registerRows("joken", T);
GRAMMAR.theory.joken = { rows: T, first: "ja-jok-to" };
})();
