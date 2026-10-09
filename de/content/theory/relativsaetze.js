/* de/content/theory/relativsaetze.js
   Relativsätze: bảng đại từ quan hệ + 5 cách dùng theo Fall.
   Row 1 uses "table" mode; rows 2-6 use "xf" sentence-transform mode. */
(() => {
const T = [
 {id:"de-rel-tabelle",num:"01",en:"Relativpronomen",vi:"Bảng đại từ quan hệ",short:"der/die/das/die + dessen/deren, denen (Dat. Pl.)",
  core:"Đại từ quan hệ gần như <strong>giống hệt mạo từ xác định</strong> (der/die/das) — chỉ khác ở Dativ số nhiều (<strong>denen</strong>, không phải den) và Genitiv (<strong>dessen/deren</strong>, không phải des/der).",
  forms:[["Nom./Akk.","Giống hệt der/die/das","<mark>der</mark>, <mark>die</mark>, <mark>das</mark>, <mark>die</mark>"],["Dat. Pl.","denen (khác mạo từ)","Leute, <mark>denen</mark> ich vertraue"],["Gen.","dessen/deren (khác mạo từ)","der Mann, <mark>dessen</mark> Auto…"]],
  uses:[["Mệnh đề quan hệ luôn ở cuối câu, động từ chia đứng cuối mệnh đề","Das ist die Frau, <mark>die</mark> ich <mark>kenne</mark>."]],
  signals:["der/die/das/die (mệnh đề quan hệ)","dessen/deren","denen"],
  speak:5,write:5,
  reg:"Nếu đã thuộc bảng mạo từ xác định (Artikel & Nomen) thì bảng này gần như miễn phí — chỉ cần nhớ 2 ngoại lệ: denen và dessen/deren.",
  mistake:["Die Frau, die ich geholfen habe, ist Ärztin.","Die Frau, der ich geholfen habe, ist Ärztin.","“helfen” đòi Dativ, nên relative pronoun phải là “der” (Dativ feminin), không phải “die” (Nominativ/Akkusativ)."],
  table:[{head:["Fall","maskulin","feminin","neutral","Plural"],rows:[
   ["Nom.","der","die","das","die"],
   ["Akk.","den","die","das","die"],
   ["Dat.","dem","der","dem","**denen**"],
   ["Gen.","**dessen**","**deren**","**dessen**","**deren**"]]}]},

 {id:"de-rel-nom",num:"02",en:"Nominativ",vi:"Làm chủ ngữ mệnh đề",short:"der/die/das/die + Verb (cuối)",
  core:"Khi đại từ quan hệ làm <strong>chủ ngữ</strong> của mệnh đề quan hệ, dùng der/die/das/die theo giống của danh từ được mô tả.",
  forms:[["+","Danh từ, + der/die/das + … + Verb (cuối), + …","Der Mann, <mark>der</mark> nebenan <mark>wohnt</mark>, ist mein Nachbar."]],
  uses:[["Thay thế chủ ngữ lặp lại ở câu thứ hai","Die Frau, <mark>die</mark> das Geschäft <mark>leitet</mark>, ist sehr freundlich."]],
  signals:["der/die/das (chủ ngữ)"],
  speak:5,write:5,
  reg:"Loại phổ biến nhất của mệnh đề quan hệ — luôn thử hỏi “ai/cái gì làm hành động này?” để xác định đây có phải Nominativ không.",
  mistake:["Der Mann, den nebenan wohnt, ist mein Nachbar.","Der Mann, der nebenan wohnt, ist mein Nachbar.","“der Mann” là chủ ngữ của “wohnt” nên dùng der (Nominativ), không phải den (Akkusativ)."],
  xf:{la:"Hai câu",lb:"Một câu (Nominativ)",a:"{1:Der Mann} ist mein Nachbar. {1:Er} wohnt nebenan.",b:"{1:Der Mann}, {2:der nebenan wohnt}, ist mein Nachbar.",note:"“er” (chủ ngữ, giống đực) được thay bằng “der”; động từ (wohnt) đứng cuối mệnh đề quan hệ."}},

 {id:"de-rel-akk",num:"03",en:"Akkusativ",vi:"Làm tân ngữ trực tiếp",short:"den/die/das/die + Verb (cuối)",
  core:"Khi đại từ quan hệ làm <strong>tân ngữ trực tiếp</strong> của mệnh đề quan hệ, giống đực đổi der → den; các giống khác giữ nguyên như Nominativ.",
  forms:[["+","Danh từ, + den/die/das + … + Verb (cuối), + …","Das Buch, <mark>das</mark> ich gerade <mark>lese</mark>, ist spannend."]],
  uses:[["Thay thế tân ngữ trực tiếp lặp lại","Die Tasche, <mark>die</mark> ich <mark>trage</mark>, ist neu."]],
  signals:["den/die/das (tân ngữ trực tiếp)"],
  speak:5,write:5,
  reg:"Thử hỏi “ai/cái gì chịu tác động của hành động?” — nếu đó là danh từ đang được mô tả, đây là Akkusativ.",
  mistake:["Das Buch, der ich gerade lese, ist spannend.","Das Buch, das ich gerade lese, ist spannend.","“das Buch” là tân ngữ trực tiếp giống trung nên dùng das, không phải der."],
  xf:{la:"Hai câu",lb:"Một câu (Akkusativ)",a:"{1:Das Buch} ist spannend. Ich lese {1:es} gerade.",b:"{1:Das Buch}, {2:das ich gerade lese}, ist spannend.",note:"“es” (tân ngữ trực tiếp, giống trung) được thay bằng “das”; động từ (lese) đứng cuối."}},

 {id:"de-rel-dat",num:"04",en:"Dativ",vi:"Làm tân ngữ gián tiếp",short:"dem/der/dem/denen + Verb (cuối)",
  core:"Khi đại từ quan hệ làm <strong>tân ngữ gián tiếp</strong>, hoặc theo sau động từ đòi Dativ (helfen, danken, vertrauen…).",
  forms:[["+","Danh từ, + dem/der/dem/denen + … + Verb (cuối), + …","Die Frau, <mark>der</mark> ich <mark>geholfen habe</mark>, ist Ärztin."]],
  uses:[["Sau động từ đòi Dativ","Der Kollege, <mark>dem</mark> ich <mark>vertraue</mark>, hat gekündigt."]],
  signals:["dem/der/dem/denen (tân ngữ gián tiếp)"],
  speak:4,write:5,
  reg:"Nhớ số nhiều Dativ của relative pronoun là “denen”, khác với mạo từ xác định “den”.",
  mistake:["Die Freunde, die ich schreibe, antworten schnell.","Die Freunde, denen ich schreibe, antworten schnell.","“schreiben” đòi Dativ; số nhiều Dativ của relative pronoun là denen, không phải die."],
  xf:{la:"Hai câu",lb:"Một câu (Dativ)",a:"{1:Die Frau} ist Ärztin. Ich habe {1:ihr} geholfen.",b:"{1:Die Frau}, {2:der ich geholfen habe}, ist Ärztin.",note:"“ihr” (tân ngữ gián tiếp, giống cái) được thay bằng “der” (Dativ feminin); động từ (geholfen habe) đứng cuối."}},

 {id:"de-rel-gen",num:"05",en:"Genitiv",vi:"Sở hữu (dessen/deren)",short:"dessen/deren + danh từ (không mạo từ)",
  core:"<strong>dessen</strong> (giống đực/trung) và <strong>deren</strong> (giống cái/số nhiều) diễn tả sở hữu — chia theo giống của <strong>người/vật sở hữu</strong>, không phải danh từ đi sau nó.",
  forms:[["+","Danh từ, + dessen/deren + danh từ (không mạo từ) + … + Verb (cuối)","Der Mann, <mark>dessen</mark> Auto rot ist, ist mein Chef."]],
  uses:[["Sở hữu, thay cho sein/ihr","Die Frau, <mark>deren</mark> Sohn in Berlin studiert, ist stolz."]],
  signals:["dessen (giống đực/trung sở hữu)","deren (giống cái/số nhiều sở hữu)"],
  speak:2,write:4,
  reg:"Danh từ đi ngay sau dessen/deren KHÔNG có mạo từ (dessen Auto, không phải dessen das Auto) — lỗi hay gặp nhất ở cấu trúc này.",
  mistake:["Der Mann, sein Auto rot ist, ist mein Chef.","Der Mann, dessen Auto rot ist, ist mein Chef.","Sở hữu trong mệnh đề quan hệ dùng dessen (giống đực), không dùng sein."],
  xf:{la:"Hai câu",lb:"Một câu (Genitiv)",a:"{1:Der Mann} ist mein Chef. {1:Sein} Auto ist rot.",b:"{1:Der Mann}, {2:dessen Auto rot ist}, ist mein Chef.",note:"“sein” (sở hữu, giống đực) được thay bằng “dessen” — chia theo giống của người sở hữu (der Mann), không phải danh từ đi sau (Auto)."}},

 {id:"de-rel-prep",num:"06",en:"mit Präposition",vi:"Có giới từ đi kèm",short:"Präposition + dem/der/denen",
  core:"Khi động từ trong mệnh đề quan hệ cần giới từ (arbeiten mit, sprechen über…), giới từ đứng <strong>ngay trước</strong> đại từ quan hệ, cả cụm đứng đầu mệnh đề.",
  forms:[["+","Danh từ, + Präposition + dem/der/das/denen + … + Verb (cuối)","Das ist der Kollege, <mark>mit dem</mark> ich oft <mark>arbeite</mark>."]],
  uses:[["Giới từ + Dativ","Das ist die Firma, <mark>für die</mark> ich <mark>arbeite</mark>."],["Giới từ + Akkusativ","Das ist das Thema, <mark>über das</mark> wir <mark>sprechen</mark>."]],
  signals:["mit dem/der/denen","für den/die/das","über den/die/das"],
  speak:3,write:5,
  reg:"Cách của relative pronoun ở đây do chính giới từ quyết định (mit → Dativ, für → Akkusativ…), không phải do vai trò ngữ pháp như các trường hợp trước.",
  mistake:["Das ist der Kollege, mit den ich oft arbeite.","Das ist der Kollege, mit dem ich oft arbeite.","“mit” luôn đòi Dativ nên relative pronoun phải là dem, không phải den."],
  xf:{la:"Hai câu",lb:"Một câu (giới từ + Relativpronomen)",a:"{1:Das ist der Kollege}. Ich arbeite oft {2:mit ihm}.",b:"{1:Das ist der Kollege}, {2:mit dem ich oft arbeite}.",note:"Giới từ (mit) đứng ngay trước relative pronoun (dem), cả cụm đứng đầu mệnh đề quan hệ."}},
];

registerRows("relativsaetze", T);
GRAMMAR.theory.relativsaetze = { rows: T, first: "de-rel-tabelle" };
})();
