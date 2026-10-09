/* nb/content/theory/preposisjoner.js
   Preposisjoner: organized by MEANING (not case — Norwegian nouns
   have no case system, unlike German). Uses the "table" diagram
   mode. */
(() => {
const T = [
 {id:"nb-prep-tid",num:"01",en:"Tidspreposisjoner",vi:"Giới từ thời gian",short:"i, på, om, for … siden",
  core:"Giới từ thời gian tiếng Na Uy không theo quy tắc cố định như tiếng Anh — cần nhớ theo từng cụm cố định: <strong>i</strong> (khoảng thời gian/ngày trong tuần), <strong>på</strong> (buổi trong ngày, tháng), <strong>om</strong> (mùa, thời điểm trong tương lai gần), <strong>for … siden</strong> (cách đây).",
  forms:[["i","Khoảng thời gian, ngày trong tuần","**i** tre timer, **i** dag, **i** går"],["på","Buổi trong ngày, tháng, thời điểm cụ thể","**på** morgenen, **på** mandag, **på** sommeren (ít gặp hơn om)"],["om","Mùa, tương lai gần","**om** sommeren, **om** to dager"],["for … siden","Cách đây","**for** to år **siden**"]],
  uses:[["Khoảng thời gian kéo dài","Jeg bodde der **i** fem år."],["Thời điểm trong tương lai gần","Vi møtes **om** en time."],["Mốc quá khứ cách đây","Jeg flyttet hit **for** tre år **siden**."]],
  signals:["i (khoảng thời gian)","på (buổi/ngày cụ thể)","om (mùa/tương lai gần)","for … siden (cách đây)"],
  speak:5,write:5,
  reg:"Đây là nhóm giới từ hay gây lỗi nhất vì không dịch trực tiếp từ tiếng Anh/Việt được — phải học theo từng cụm cố định.",
  mistake:["Jeg bodde der for fem år.","Jeg bodde der i fem år.","Khoảng thời gian kéo dài dùng “i”, không phải “for” (for chỉ dùng với “siden” để chỉ mốc cách đây)."],
  table:[{head:["Giới từ","Dùng khi","Ví dụ"],rows:[["i","khoảng thời gian, ngày trong tuần","**i** tre timer"],["på","buổi trong ngày, thứ","**på** mandag"],["om","mùa, tương lai gần","**om** sommeren"],["for … siden","cách đây","**for** to år siden"]]}]},

 {id:"nb-prep-sted-i",num:"02",en:"Sted: stasjonær",vi:"Giới từ chỉ vị trí tĩnh",short:"i, på, ved, hos",
  core:"Giới từ chỉ <strong>vị trí</strong> (không chuyển động) — dùng <strong>i</strong> cho không gian kín/bên trong, <strong>på</strong> cho bề mặt/địa điểm công cộng, <strong>ved</strong> cho gần/cạnh, <strong>hos</strong> cho ở nhà/chỗ ai đó.",
  forms:[["i","Bên trong không gian kín","**i** huset, **i** Norge, **i** Oslo"],["på","Bề mặt, địa điểm công cộng","**på** bordet, **på** skolen, **på** jobb"],["ved","Gần, cạnh","**ved** siden av, **ved** sjøen"],["hos","Ở nhà/chỗ của ai","**hos** meg, **hos** legen"]],
  uses:[["Ở trong nước/thành phố/nhà","Jeg bor **i** Bergen."],["Ở trường/nơi làm việc/đảo","Jeg er **på** skolen."],["Ở nhà bạn bè/bác sĩ","Jeg er **hos** en venn."]],
  signals:["i + không gian kín/quốc gia","på + bề mặt/địa điểm công cộng","hos + người"],
  speak:5,write:5,
  reg:"i/på là cặp dễ nhầm nhất — không có quy tắc tuyệt đối, cần học thuộc theo từng địa danh/danh từ cụ thể (i Norge nhưng på Island, i banken nhưng på jobb).",
  mistake:["Jeg er i jobb.","Jeg er på jobb.","“jobb” (nơi làm việc, không phải tòa nhà cụ thể) đi với på, không phải i."],
  table:[{head:["Giới từ","Ví dụ"],rows:[["i","i Norge, i Oslo, i huset, i banken"],["på","på skolen, på jobb, på Island, på bordet"],["ved","ved siden av, ved sjøen"],["hos","hos meg, hos legen, hos familien"]]}]},

 {id:"nb-prep-sted-retning",num:"03",en:"Sted: retning",vi:"Giới từ chỉ hướng di chuyển",short:"til, fra, mot",
  core:"Giới từ chỉ <strong>hướng di chuyển</strong> — <strong>til</strong> (đến), <strong>fra</strong> (từ), <strong>mot</strong> (về phía).",
  forms:[["til","Đến một nơi (đích đến)","Jeg reiser **til** Bergen."],["fra","Xuất phát từ một nơi","Jeg kommer **fra** Vietnam."],["mot","Về phía (chưa chắc đến nơi)","Vi går **mot** sentrum."]],
  uses:[["Mua vé/đi đến một nơi","Et billett **til** Oslo, takk."],["Nguồn gốc/xuất xứ","Hun er **fra** Hanoi."]],
  signals:["til (đến)","fra (từ)","mot (về phía)"],
  speak:5,write:5,
  reg:"Khác với i/på (vị trí tĩnh), til/fra/mot luôn đi kèm động từ chỉ chuyển động (reise, gå, komme, kjøre…).",
  mistake:["Jeg reiser i Bergen (ý: đi đến Bergen).","Jeg reiser til Bergen.","Diễn tả đích đến (chuyển động) dùng til, không phải i (vốn chỉ vị trí tĩnh)."],
  table:[{head:["Giới từ","Ví dụ"],rows:[["til","reise til, gå til, komme til"],["fra","komme fra, reise fra"],["mot","gå mot, kjøre mot"]]}]},

 {id:"nb-prep-andre",num:"04",en:"Andre vanlige preposisjoner",vi:"Giới từ phổ biến khác",short:"med, for, av, uten, om",
  core:"Các giới từ phổ biến khác không thuộc nhóm thời gian/vị trí — mỗi giới từ thường gắn với những động từ/cụm từ cố định riêng.",
  forms:[["med","Cùng với, bằng (phương tiện)","Jeg kommer **med** bussen."],["for","Cho, vì","Dette er **for** deg."],["av","Của, bởi (sau danh từ/bị động)","en del **av** gruppen"],["uten","Không có","Jeg drikker kaffe **uten** sukker."],["om","Về (chủ đề)","en bok **om** Norge"]],
  uses:[["Phương tiện di chuyển","Jeg reiser **med** tog."],["Chủ đề nói đến","Vi snakker **om** filmen."]],
  signals:["med (cùng/bằng)","for (cho/vì)","av (của/bởi)","uten (không có)","om (về chủ đề)"],
  speak:5,write:5,
  reg:"“med” dùng cho MỌI phương tiện di chuyển (med bussen, med toget, med bilen) — khác tiếng Anh dùng “by” riêng.",
  mistake:["Jeg reiser ved bussen.","Jeg reiser med bussen.","Phương tiện di chuyển luôn dùng “med”, không phải “ved” (chỉ vị trí gần)."],
  table:[{head:["Giới từ","Ví dụ"],rows:[["med","med bussen, med meg"],["for","for deg, for mye"],["av","en del av, laget av"],["uten","uten sukker"],["om","snakke om, en bok om"]]}]},
];

registerRows("preposisjoner", T);
GRAMMAR.theory.preposisjoner = { rows: T, first: "nb-prep-tid" };
})();
