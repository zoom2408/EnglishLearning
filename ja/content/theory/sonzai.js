/* ja/content/theory/sonzai.js
   Sonzai: あります/います, location words, counters, quantity questions.
   Uses the "table" diagram mode. Furigana: {漢字|かんじ}; romaji lines via ex(). */
(() => {
const ex = (jp, ro) => rb(jp) + (ro ? `<span class="ro">${ro}</span>` : "");
const T = [
 {id:"ja-son-aru-iru",num:"01",en:"あります・います",vi:"あります & います",short:"つくえの うえに ほんが あります · きょうしつに せんせいが います",
  core:"Hai động từ chỉ sự tồn tại: <strong>あります</strong> cho đồ vật, cây cối, sự việc (vật không tự di chuyển), <strong>います</strong> cho người và động vật. Mẫu: <strong>Nơi + に + Vật + が + あります/います</strong>.",
  forms:[["Vật có ở đâu","N に N が あります",ex("{机|つくえ}の{上|うえ}<mark>に</mark>{本|ほん}<mark>が</mark>あります。","tsukue no ue ni hon ga arimasu")],["Người có ở đâu","N に 人 が います",ex("{教室|きょうしつ}<mark>に</mark>{先生|せんせい}<mark>が</mark>います。","kyōshitsu ni sensei ga imasu")],["Phủ định (vật)","ありません",ex("{冷蔵庫|れいぞうこ}に{牛乳|ぎゅうにゅう}が<mark>ありません</mark>。","reizōko ni gyūnyū ga arimasen")],["Phủ định (người)","いません",ex("{部屋|へや}に{誰|だれ}も<mark>いません</mark>。","heya ni dare mo imasen")],["Quá khứ","ありました/いました",ex("{昨日|きのう}ここに{猫|ねこ}が<mark>いました</mark>。","kinō koko ni neko ga imashita")],["Vật ở đâu (chủ đề)","N は N に あります",ex("{駅|えき}はあそこ<mark>に</mark>あります。","eki wa asoko ni arimasu")]],
  uses:[["Hỏi có gì ở đâu",ex("{鞄|かばん}の{中|なか}に{何|なに}が<mark>ありますか</mark>。","kaban no naka ni nani ga arimasu ka")],["Hỏi có ai không",ex("{家|うち}に{誰|だれ}が<mark>いますか</mark>。","uchi ni dare ga imasu ka")],["Sự kiện cũng dùng あります",ex("{明日|あした}{会議|かいぎ}が<mark>あります</mark>。","ashita kaigi ga arimasu")]],
  signals:["N に N が あります","N に 人 が います","ありません","いません"],
  speak:5,write:5,
  reg:"あります/います báo sự tồn tại lần đầu nên dùng が. Khi hỏi vật nằm ở đâu (đã biết là vật nào) thì vật làm chủ đề với は: 「駅はどこにありますか」. Sự kiện (会議, パーティー) dùng あります nhưng nơi tổ chức dùng で.",
  mistake:["つくえの うえに ねこが あります。","つくえの うえに ねこが います。","Động vật và người dùng います, không dùng あります."],
  table:[{head:["Động từ","Ví dụ"],rows:[["あります","vật, sự kiện","ほんが あります"],["います","người, động vật","せんせいが います"],["ありません","không có (vật)","ほんが ありません"],["いません","không có (người)","だれも いません"]]}]},

 {id:"ja-son-ichi",num:"02",en:"位置",vi:"Từ chỉ vị trí",short:"うえ · した · なか · まえ · うしろ · よこ · となり · ちかく",
  core:"Từ chỉ vị trí là danh từ, gắn vào sau <strong>の</strong>: <strong>N の うえ</strong> (trên N). Danh sách: うえ, した, なか, そと, まえ, うしろ, よこ, となり, ちかく, あいだ, みぎ, ひだり.",
  forms:[["Trên · dưới","N の うえ / した",ex("{机|つくえ}の<mark>上</mark>に{本|ほん}があります。","tsukue no ue ni hon ga arimasu")],["Trong · ngoài","N の なか / そと",ex("{箱|はこ}の<mark>中</mark>に{何|なに}がありますか。","hako no naka ni nani ga arimasu ka")],["Trước · sau","N の まえ / うしろ",ex("{駅|えき}の<mark>前</mark>に{銀行|ぎんこう}があります。","eki no mae ni ginkō ga arimasu")],["Bên cạnh","N の よこ / となり",ex("{郵便局|ゆうびんきょく}の<mark>隣</mark>にコンビニがあります。","yūbinkyoku no tonari ni konbini ga arimasu")],["Giữa","N と N の あいだ",ex("{銀行|ぎんこう}と{本屋|ほんや}の<mark>間</mark>に{花屋|はなや}があります。","ginkō to hon’ya no aida ni hanaya ga arimasu")],["Phải · trái","みぎ / ひだり",ex("{右|みぎ}に{曲|ま}がってください。","migi ni magatte kudasai")]],
  uses:[["Chỉ đường",ex("{駅|えき}の{近|ちか}くに{公園|こうえん}があります。","eki no chikaku ni kōen ga arimasu")],["Hỏi vị trí",ex("トイレはどこですか。 — あの{建物|たてもの}の{後|うし}ろです。","toire wa doko desu ka — ano tatemono no ushiro desu")],["Mô tả căn phòng",ex("ベッドの{横|よこ}に{机|つくえ}があります。","beddo no yoko ni tsukue ga arimasu")]],
  signals:["N の うえ","N の した","N の なか","N と N の あいだ"],
  speak:5,write:5,
  reg:"Vị trí luôn đi sau N の, khác với tiếng Việt (“trên bàn”). Nếu thêm に, vị trí đó là nơi tồn tại: 「つくえの上に」. Với ちかく dùng thêm に: 「駅の近くに」.",
  mistake:["つくえ うえに ほんが あります。","つくえの うえに ほんが あります。","Từ chỉ vị trí cần の nối với danh từ trước nó."],
  table:[{head:["Vị trí","Ví dụ"],rows:[["うえ","trên","つくえの うえ"],["した","dưới","いすの した"],["なか","trong","はこの なか"],["となり","bên cạnh","ぎんこうの となり"],["あいだ","giữa","AとBの あいだ"]]}]},

 {id:"ja-son-kazoe",num:"03",en:"数え方",vi:"Đếm đồ vật & người",short:"ひとつ · 3まい · 2ほん · 4にん · 1ぴき",
  core:"Tiếng Nhật đếm bằng <strong>từ đếm</strong> (助数詞) tùy hình dạng. Đồ vật chung: <strong>ひとつ, ふたつ…とお</strong>. Người: <strong>ひとり, ふたり, 3にん</strong>. Phẳng: <strong>まい</strong>. Dài: <strong>ほん</strong>. Sách: <strong>さつ</strong>. Động vật nhỏ: <strong>ひき</strong>. Máy móc: <strong>だい</strong>. Tầng: <strong>かい</strong>.",
  forms:[["Vật chung","ひとつ〜とお",ex("りんごを{三|みっ}つ{買|か}いました。","ringo o mittsu kaimashita")],["Người","ひとり · ふたり · 3にん",ex("{学生|がくせい}が{五人|ごにん}います。","gakusei ga gonin imasu")],["Vật phẳng","〜まい",ex("{切手|きって}を{二枚|にまい}ください。","kitte o nimai kudasai")],["Vật dài","〜ほん",ex("ペンが{三本|さんぼん}あります。","pen ga sanbon arimasu")],["Sách","〜さつ",ex("{本|ほん}を{五冊|ごさつ}{読|よ}みました。","hon o gosatsu yomimashita")],["Động vật nhỏ","〜ひき",ex("{犬|いぬ}が{二匹|にひき}います。","inu ga nihiki imasu")]],
  uses:[["Máy móc, xe",ex("{車|くるま}が{三台|さんだい}あります。","kuruma ga sandai arimasu")],["Tầng nhà",ex("{五階|ごかい}にレストランがあります。","gokai ni resutoran ga arimasu")],["Số thứ tự trước từ đếm",ex("{何冊|なんさつ}{読|よ}みましたか。","nansatsu yomimashita ka")]],
  signals:["〜つ","〜にん","〜まい","〜ほん","〜さつ","〜ひき","〜だい","〜かい"],
  speak:5,write:5,
  reg:"Từ đếm đứng sau trợ từ hoặc trực tiếp sau danh từ, không cần trợ từ nối: 「りんごを三つ買いました」. Các số 1, 3, 6, 8, 10 hay có biến âm (いっぽん, さんぼん, ろっぽん). Thuộc まい, ほん, ひき, にん, だい trước.",
  mistake:["こどもが さんつ います。","こどもが さんにん います。","Người đếm bằng にん (ひとり・ふたり là ngoại lệ), không dùng つ."],
  table:[{head:["Từ đếm","Ví dụ"],rows:[["〜つ","vật chung","みっつ"],["〜にん","người","さんにん"],["〜まい","phẳng","にまい"],["〜ほん","dài","さんぼん"],["〜さつ","sách","ごさつ"],["〜ひき","động vật nhỏ","いっぴき"]]}]},

 {id:"ja-son-suuryou",num:"04",en:"数量の聞き方",vi:"Hỏi & nói số lượng",short:"いくつ ありますか · なんにん いますか · 3つ あります",
  core:"Hỏi số lượng bằng <strong>いくつ</strong> (vật chung), <strong>なんにん</strong> (người), <strong>なんまい/なんぼん/なんさつ…</strong>. Số lượng đặt <strong>sau trợ từ</strong>: <strong>N が 数 あります</strong>, <strong>N を 数 V</strong>. Phủ định tổng: <strong>ひとつも ありません</strong>.",
  forms:[["Hỏi vật","いくつ あります",ex("{卵|たまご}が<mark>いくつ</mark>ありますか。","tamago ga ikutsu arimasu ka")],["Hỏi người","なんにん いますか",ex("{兄弟|きょうだい}は<mark>何人</mark>いますか。","kyōdai wa nannin imasu ka")],["Trả lời","数 + あります/います",ex("{三人|さんにん}います。","sannin imasu")],["Động từ + số","N を 数 V",ex("りんごを{二|ふた}つ{買|か}いました。","ringo o futatsu kaimashita")],["Không có cái nào","一つも〜ません",ex("{卵|たまご}は<mark>一つも</mark>ありません。","tamago wa hitotsu mo arimasen")],["Khoảng","〜ぐらい",ex("{学生|がくせい}が{二十人|にじゅうにん}<mark>ぐらい</mark>います。","gakusei ga nijūnin gurai imasu")]],
  uses:[["Hỏi số tiết học",ex("{一日|いちにち}に{何回|なんかい}{勉強|べんきょう}しますか。","ichinichi ni nankai benkyō shimasu ka")],["Gọi món",ex("ビールを{二本|にほん}ください。","bīru o nihon kudasai")],["Kết hợp thời gian",ex("{一週間|いっしゅうかん}に{三回|さんかい}{運動|うんどう}します。","isshūkan ni sankai undō shimasu")]],
  signals:["いくつ","なんにん","なんまい","一つも〜ない","〜ぐらい"],
  speak:5,write:5,
  reg:"Số lượng đứng sau trợ từ (を, が) hoặc ngay sau danh từ, nhưng trước động từ. Ví dụ: 「りんごを三つ買いました」. Dùng 一つも + phủ định để nói “không một cái nào”.",
  mistake:["ビールを ください ふたつ。","ビールを ふたつ ください。","Số lượng phải đứng trước động từ, sau trợ từ."],
  table:[{head:["Hỏi","Ví dụ"],rows:[["いくつ","vật chung","いくつ ありますか"],["なんにん","người","なんにん いますか"],["なんまい","vật phẳng","なんまい ですか"],["なんかい","số lần / tầng","なんかい ですか"]]}]},
];

T.forEach(t => t.forms.forEach(f => { f[2] = rb(f[2]); }));
registerRows("sonzai", T);
GRAMMAR.theory.sonzai = { rows: T, first: "ja-son-aru-iru" };
})();
