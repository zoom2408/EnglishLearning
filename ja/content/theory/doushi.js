/* ja/content/theory/doushi.js
   Doushi: ます form, verb groups, invitations, frequency adverbs.
   Uses the "table" diagram mode. Furigana: {漢字|かんじ}; romaji lines via ex(). */
(() => {
const ex = (jp, ro) => rb(jp) + (ro ? `<span class="ro">${ro}</span>` : "");
const T = [
 {id:"ja-dou-masu",num:"01",en:"ます形",vi:"Dạng ます (4 thì)",short:"たべます · たべません · たべました · たべませんでした",
  core:"Động từ lịch sự có bốn dạng: <strong>〜ます</strong> (hiện tại/tương lai, khẳng định), <strong>〜ません</strong> (phủ định), <strong>〜ました</strong> (quá khứ), <strong>〜ませんでした</strong> (quá khứ phủ định). Tiếng Nhật không chia theo ngôi hay số.",
  forms:[["Hiện tại / tương lai","V ます",ex("{毎日|まいにち}{食|た}べ<mark>ます</mark>。","mainichi tabemasu")],["Phủ định","V ません",ex("{肉|にく}を{食|た}べ<mark>ません</mark>。","niku o tabemasen")],["Quá khứ","V ました",ex("{昨日|きのう}{食|た}べ<mark>ました</mark>。","kinō tabemashita")],["Quá khứ phủ định","V ませんでした",ex("{朝|あさ}ご{飯|はん}を{食|た}べ<mark>ませんでした</mark>。","asa gohan o tabemasen deshita")],["Câu hỏi","V ますか",ex("コーヒーを{飲|の}み<mark>ますか</mark>。","kōhī o nomimasu ka")],["Trả lời","はい、V ます / いいえ、V ません",ex("はい、{飲|の}みます。 いいえ、{飲|の}みません。","hai, nomimasu. iie, nomimasen")]],
  uses:[["Một dạng cho cả hiện tại và tương lai, trông vào từ chỉ thời gian",ex("{明日|あした}{学校|がっこう}へ{行|い}きます。","ashita gakkō e ikimasu")],["Nói thói quen",ex("{毎朝|まいあさ}コーヒーを{飲|の}みます。","maiasa kōhī o nomimasu")],["Hỏi rồi đáp bằng chính động từ",ex("{映画|えいが}を{見|み}ましたか。 — はい、{見|み}ました。","eiga o mimashita ka — hai, mimashita")]],
  signals:["〜ます","〜ません","〜ました","〜ませんでした"],
  speak:5,write:5,
  reg:"Thể ます là thể lịch sự dùng với người lạ, cấp trên, khách hàng. Khi trả lời câu hỏi có động từ, người Nhật lặp lại động từ chứ không dùng “yes/no” thay thế hoàn toàn.",
  mistake:["きのう がっこうへ いきます。","きのう がっこうへ いきました。","Có từ chỉ quá khứ (きのう) thì động từ phải ở dạng ました."],
  table:[{head:["Dạng","Ví dụ"],rows:[["ます","hiện tại, tương lai","たべます"],["ません","phủ định","たべません"],["ました","quá khứ","たべました"],["ませんでした","quá khứ phủ định","たべませんでした"]]}]},

 {id:"ja-dou-nhom",num:"02",en:"動詞のグループ",vi:"Ba nhóm động từ",short:"たべる (nhóm 2) · のむ (nhóm 1) · する・くる (nhóm 3)",
  core:"Động từ dạng từ điển chia thành 3 nhóm. <strong>Nhóm 1</strong> (五段) kết thúc bằng âm u khác る hoặc る sau a/u/o. <strong>Nhóm 2</strong> (一段) kết thúc bằng 〜iる hoặc 〜eる. <strong>Nhóm 3</strong> chỉ có <strong>する</strong> và <strong>くる</strong>.",
  forms:[["Nhóm 1","đuôi u, tsu, ru, ku, gu, mu, bu, nu, su",ex("{飲|の}<mark>む</mark> → {飲|の}み<mark>ます</mark>","nomu → nomimasu")],["Nhóm 1 (đuôi る)","〜aる, 〜uる, 〜oる",ex("{帰|かえ}<mark>る</mark> → {帰|かえ}り<mark>ます</mark>","kaeru → kaerimasu")],["Nhóm 2","〜iる, 〜eる",ex("{食|た}べ<mark>る</mark> → {食|た}べ<mark>ます</mark>","taberu → tabemasu")],["Nhóm 2","〜iる",ex("{見|み}<mark>る</mark> → {見|み}<mark>ます</mark>","miru → mimasu")],["Nhóm 3","する",ex("<mark>する</mark> → <mark>します</mark>","suru → shimasu")],["Nhóm 3","くる",ex("{来|く}<mark>る</mark> → {来|き}<mark>ます</mark>","kuru → kimasu")]],
  uses:[["Cách chia ます: nhóm 1 đổi u thành i + ます",ex("{書|か}く → {書|か}きます, {話|はな}す → {話|はな}します","kaku → kakimasu, hanasu → hanashimasu")],["Cách chia ます: nhóm 2 bỏ る + ます",ex("{起|お}きる → {起|お}きます, {寝|ね}る → {寝|ね}ます","okiru → okimasu, neru → nemasu")],["Ngoại lệ: trông như nhóm 2 nhưng là nhóm 1",ex("{帰|かえ}る, {入|はい}る, {走|はし}る, {切|き}る, {知|し}る","kaeru, hairu, hashiru, kiru, shiru")]],
  signals:["〜iる / 〜eる","đuôi u","する・くる","ngoại lệ 帰る・入る"],
  speak:5,write:5,
  reg:"Quy tắc “iru/eru = nhóm 2” đúng với đa số, nhưng có nhóm ngoại lệ phải thuộc (帰る, 入る, 走る, 切る, 知る, 要る, 減る). Nên học động từ mới kèm nhóm của nó ngay từ đầu.",
  mistake:["かえます (muốn nói “về”)","かえります","帰る là nhóm 1 dù có đuôi える, nên chia かえります, không phải かえます."],
  table:[{head:["Nhóm","Ví dụ"],rows:[["Nhóm 1","đổi u → i + ます","のむ → のみます"],["Nhóm 2","bỏ る + ます","たべる → たべます"],["Nhóm 3","bất quy tắc","する → します · くる → きます"]]}]},

 {id:"ja-dou-masenka",num:"03",en:"お誘い",vi:"Rủ rê & gợi ý",short:"いきませんか · いきましょう · いきましょうか",
  core:"Ba mẫu rủ rê quen thuộc: <strong>〜ませんか</strong> (mời, “cùng … không?”), <strong>〜ましょう</strong> (đề nghị cùng làm, “nào cùng …”), <strong>〜ましょうか</strong> (đề nghị giúp hoặc hỏi ý kiến).",
  forms:[["Mời lịch sự","V ませんか",ex("いっしょに{映画|えいが}を{見|み}<mark>ませんか</mark>。","issho ni eiga o mimasen ka")],["Đề nghị cùng làm","V ましょう",ex("{行|い}き<mark>ましょう</mark>。","ikimashō")],["Đề nghị giúp","V ましょうか",ex("{荷物|にもつ}を{持|も}ち<mark>ましょうか</mark>。","nimotsu o mochimashō ka")],["Hỏi ý kiến","V ましょうか",ex("{何|なに}を{食|た}べ<mark>ましょうか</mark>。","nani o tabemashō ka")],["Nhận lời","ええ、V ましょう / いいですね",ex("ええ、{行|い}きましょう。 いいですね。","ee, ikimashō. ii desu ne")],["Từ chối nhẹ","ちょっと…",ex("すみません、{今日|きょう}はちょっと…。","sumimasen, kyō wa chotto…")]],
  uses:[["Mời bạn đi uống cà phê",ex("{一緒|いっしょ}にコーヒーを{飲|の}み<mark>ませんか</mark>。","issho ni kōhī o nomimasen ka")],["Đề nghị cùng nghỉ ngơi",ex("ちょっと{休|やす}み<mark>ましょう</mark>。","chotto yasumimashō")],["Đề nghị giúp một việc",ex("{窓|まど}を{開|あ}け<mark>ましょうか</mark>。","mado o akemashō ka")]],
  signals:["〜ませんか","〜ましょう","〜ましょうか","いっしょに"],
  speak:5,write:5,
  reg:"〜ませんか lịch sự hơn 〜ましょうか khi mời. Người Nhật hay từ chối gián tiếp bằng “ちょっと…” rồi bỏ lửng, không nói “không” thẳng.",
  mistake:["いっしょに いきましょうか。(muốn rủ bạn đi cùng)","いっしょに いきましょう。","〜ましょうか dùng khi hỏi ý hoặc đề nghị giúp. Rủ cùng làm thì dùng 〜ましょう hoặc 〜ませんか."],
  table:[{head:["Mẫu","Ví dụ"],rows:[["〜ませんか","mời","いきませんか"],["〜ましょう","cùng làm","いきましょう"],["〜ましょうか","giúp / hỏi ý","もちましょうか"]]}]},

 {id:"ja-dou-hindo",num:"04",en:"頻度の副詞",vi:"Tần suất & trạng từ",short:"いつも · よく · ときどき · あまり〜ません · ぜんぜん〜ません",
  core:"Trạng từ tần suất đứng trước động từ: <strong>いつも</strong> (luôn), <strong>よく</strong> (thường), <strong>ときどき</strong> (thỉnh thoảng), <strong>あまり〜ません</strong> (không mấy khi), <strong>ぜんぜん〜ません</strong> (hoàn toàn không).",
  forms:[["Luôn luôn","いつも V",ex("<mark>いつも</mark>{電車|でんしゃ}で{行|い}きます。","itsumo densha de ikimasu")],["Thường","よく V",ex("<mark>よく</mark>{映画|えいが}を{見|み}ます。","yoku eiga o mimasu")],["Thỉnh thoảng","ときどき V",ex("<mark>ときどき</mark>{料理|りょうり}をします。","tokidoki ryōri o shimasu")],["Ít khi","あまり V ません",ex("<mark>あまり</mark>{お酒|さけ}を{飲|の}み<mark>ません</mark>。","amari osake o nomimasen")],["Hoàn toàn không","ぜんぜん V ません",ex("<mark>ぜんぜん</mark>{勉強|べんきょう}し<mark>ません</mark>。","zenzen benkyō shimasen")],["Mỗi …","まいにち/まいあさ/まいばん",ex("<mark>まいばん</mark>{日記|にっき}を{書|か}きます。","maiban nikki o kakimasu")]],
  uses:[["Hỏi tần suất",ex("<mark>どのぐらい</mark>{運動|うんどう}しますか。 — <mark>しゅうに</mark>{二回|にかい}です。","dono gurai undō shimasu ka — shū ni nikai desu")],["Phủ định hoàn toàn",ex("{肉|にく}は<mark>ぜんぜん</mark>{食|た}べ<mark>ません</mark>。","niku wa zenzen tabemasen")],["Kết hợp thời điểm và tần suất",ex("{日曜日|にちようび}は<mark>たいてい</mark>{家|うち}にいます。","nichiyōbi wa taitei uchi ni imasu")]],
  signals:["いつも","よく","ときどき","あまり〜ません","ぜんぜん〜ません","たいてい"],
  speak:5,write:5,
  reg:"あまり và ぜんぜん bắt buộc đi với phủ định. Với ぜんぜん trong văn nói thân mật, đôi khi người Nhật dùng với khẳng định, nhưng ở trình độ này giữ quy tắc đi với phủ định.",
  mistake:["あまり たべます。","あまり たべません。","あまり luôn đi với dạng phủ định."],
  table:[{head:["Trạng từ","Ví dụ"],rows:[["いつも","luôn","いつも のみます"],["よく","thường","よく みます"],["ときどき","thỉnh thoảng","ときどき します"],["あまり","ít, phủ định","あまり のみません"],["ぜんぜん","không bao giờ","ぜんぜん しません"]]}]},
];

T.forEach(t => t.forms.forEach(f => { f[2] = rb(f[2]); }));
registerRows("doushi", T);
GRAMMAR.theory.doushi = { rows: T, first: "ja-dou-masu" };
})();
