/* nb/content/theory/vanlige-feil.js
   Vanlige feil: BIFF-regelen glemt, si/fortelle/snakke, i/på, for/
   siden, stor forbokstav (NB: modron Norwegian does NOT capitalize
   all nouns like German — a useful contrast for learners coming from
   the German track). Capstone review module. Mixed xf/table modes. */
(() => {
const T = [
 {id:"nb-feil-biff",num:"01",en:"BIFF-regelen glemt",vi:"Quên quy tắc BIFF (vị trí ikke)",short:"Leddsetning → ikke đứng TRƯỚC động từ",
  core:"Lỗi phổ biến nhất: quên di chuyển <strong>ikke</strong> ra trước động từ trong leddsetning (mệnh đề phụ với fordi/at/selv om/når…) — khác với hovedsetning nơi ikke đứng SAU động từ.",
  forms:[["Hovedsetning","Verb + ikke","Jeg **bor** **ikke** her lenger."],["Leddsetning (BIFF)","ikke + Verb","…fordi jeg **ikke** **bor** her lenger."]],
  uses:[["Áp dụng cho mọi liên từ phụ thuộc","fordi, at, selv om, når, hvis… đều theo quy tắc BIFF."]],
  signals:["fordi/at/selv om/når + S + ikke + V"],
  speak:5,write:5,
  reg:"Đây là lỗi kinh điển nhất của người học tiếng Na Uy — luyện phản xạ kiểm tra vị trí ikke mỗi khi thấy liên từ phụ thuộc.",
  mistake:["Jeg vet at han kommer ikke i dag.","Jeg vet at han ikke kommer i dag.","Trong mệnh đề at (leddsetning), ikke phải đứng TRƯỚC động từ theo quy tắc BIFF."],
  xf:{la:"Sai",lb:"Đúng",a:"Jeg vet at han kommer ikke i dag.",b:"Jeg vet at han ikke kommer i dag.",note:"Trong leddsetning (sau at/fordi/selv om…), ikke luôn đứng trước động từ chia theo quy tắc BIFF."}},

 {id:"nb-feil-sifortelle",num:"02",en:"si vs. fortelle vs. snakke",vi:"Phân biệt si, fortelle, snakke",short:"si: nói (trích dẫn) · fortelle: kể lại · snakke: trò chuyện",
  core:"<strong>si</strong> = nói điều gì (trích dẫn trực tiếp hoặc gián tiếp, + at); <strong>fortelle</strong> = kể lại (luôn cần người nghe, + til/tân ngữ gián tiếp); <strong>snakke</strong> = trò chuyện (không có tân ngữ trực tiếp, đi với om/med).",
  forms:[["si","si (+ at/noe), không bắt buộc người nghe","Hun **sa** at hun var syk."],["fortelle","fortelle + (til) noen + noe","Hun **fortalte** meg historien."],["snakke","snakke om/med + …","Vi **snakket** om filmen."]],
  uses:[["Trích dẫn lời nói","Han **sier**: „Jeg kommer.“"],["Kể một câu chuyện/thông tin cho ai","Kan du **fortelle** meg om Norge?"],["Trò chuyện qua lại","Vi **snakket** sammen i en time."]],
  signals:["si + at","fortelle + noen + noe","snakke om/med"],
  speak:5,write:5,
  reg:"Lỗi hay gặp: dùng “si” khi ý là “kể lại cho ai nghe” (nên dùng fortelle), hoặc dùng “snakke” với tân ngữ trực tiếp (snakke chỉ đi với giới từ om/med, không có tân ngữ trực tiếp).",
  mistake:["Kan du si meg om Norge?","Kan du fortelle meg om Norge?","“kể cho ai nghe về điều gì” dùng fortelle, không dùng si."],
  table:[{head:["Động từ","Cấu trúc","Ví dụ"],rows:[["si","si (at) …","Han sa at han var trøtt."],["fortelle","fortelle (til) noen om/at …","Hun fortalte meg om turen."],["snakke","snakke om/med …","Vi snakket om jobben."]]}]},

 {id:"nb-feil-ipaa",num:"03",en:"i vs. på (sted)",vi:"Nhầm lẫn giới từ chỉ vị trí",short:"i: không gian kín/quốc gia · på: bề mặt/địa điểm công cộng",
  core:"Đây là cặp giới từ dễ nhầm nhất — không có quy tắc tuyệt đối, cần học thuộc theo từng địa danh/danh từ cụ thể.",
  forms:[["i","Quốc gia, thành phố, không gian kín","**i** Norge, **i** Oslo, **i** huset"],["på","Đảo, địa điểm công cộng, bề mặt","**på** Island, **på** skolen, **på** jobb"]],
  uses:[["Ở trong nước/thành phố/nhà","Jeg bor **i** Bergen."],["Ở trường/nơi làm việc/đảo","Jeg er **på** jobb."]],
  signals:["i (quốc gia/thành phố/không gian kín)","på (đảo/địa điểm công cộng)"],
  speak:5,write:5,
  reg:"Mẹo tạm: phần lớn quốc gia/thành phố dùng “i”, nhưng đảo quốc (Island) và một số địa điểm công cộng (skolen, jobb, universitetet) lại dùng “på” — không có quy tắc chắc chắn 100%, cần nghe nhiều để quen.",
  mistake:["Jeg er i jobb.","Jeg er på jobb.","“jobb” (nơi làm việc nói chung) đi với på, không phải i."],
  table:[{head:["Giới từ","Ví dụ"],rows:[["i","i Norge, i Oslo, i huset, i banken"],["på","på Island, på skolen, på jobb, på bordet"]]}]},

 {id:"nb-feil-forsiden",num:"04",en:"for … siden vs. i",vi:"Phân biệt for…siden và i (thời gian)",short:"for…siden: cách đây · i: khoảng thời gian kéo dài",
  core:"<strong>for … siden</strong> = cách đây (mốc quá khứ đơn thuần); <strong>i</strong> = khoảng thời gian kéo dài (đến nay hoặc đã kết thúc).",
  forms:[["for … siden","Cách đây một mốc","Jeg flyttet hit **for** to år **siden**."],["i","Khoảng thời gian kéo dài","Jeg bodde der **i** to år."]],
  uses:[["Mốc quá khứ cách đây","Vi møttes **for** fem år **siden**."],["Khoảng thời gian kéo dài (đến nay hoặc đã xong)","Hun har jobbet her **i** fem år."]],
  signals:["for + khoảng thời gian + siden","i + khoảng thời gian"],
  speak:5,write:5,
  reg:"Lỗi hay gặp của người Việt (ảnh hưởng từ “for” tiếng Anh): dùng for cho khoảng thời gian kéo dài — phải dùng i mới đúng; for chỉ dùng kèm “siden” để chỉ một mốc cách đây.",
  mistake:["Jeg bodde der for to år.","Jeg bodde der i to år.","Khoảng thời gian kéo dài dùng “i”, không phải “for” một mình (for chỉ đi kèm “siden”)."],
  xf:{la:"Sai",lb:"Đúng",a:"Jeg bodde der for to år.",b:"Jeg bodde der i to år.",note:"Khoảng thời gian kéo dài dùng “i”; “for … siden” chỉ dùng để chỉ một mốc cách đây (for to år siden = cách đây hai năm)."}},

 {id:"nb-feil-forbokstav",num:"05",en:"Stor forbokstav",vi:"Đừng viết hoa mọi danh từ (khác tiếng Đức!)",short:"Chỉ tên riêng + đầu câu viết hoa, KHÔNG như tiếng Đức",
  core:"Khác hẳn tiếng Đức (viết hoa MỌI danh từ): trong tiếng Na Uy, chỉ <strong>tên riêng</strong> (người, địa danh, tổ chức) và <strong>chữ cái đầu câu</strong> được viết hoa — danh từ thường ở giữa câu viết thường.",
  forms:[["Sai (ảnh hưởng tiếng Đức)","Viết hoa danh từ thường","Jeg leser en **Bok**. (SAI)"],["Đúng","Danh từ thường viết thường","Jeg leser en **bok**. (ĐÚNG)"]],
  uses:[["Danh từ thường giữa câu: viết thường","Jeg kjøpte en **bil** i går."],["Tên riêng: viết hoa","Jeg bor i **Oslo**, i **Norge**."]],
  signals:["Chỉ tên riêng + đầu câu viết hoa"],
  speak:5,write:5,
  reg:"Nếu bạn đang học cả tiếng Đức và Na Uy cùng lúc, đây là điểm RẤT DỄ lẫn lộn — tiếng Đức viết hoa mọi danh từ, tiếng Na Uy thì không.",
  mistake:["Jeg leser en Bok om Norge.","Jeg leser en bok om Norge.","“bok” là danh từ thường (không phải tên riêng) nên viết thường; chỉ “Norge” (tên nước) viết hoa."],
  xf:{la:"Sai (kiểu tiếng Đức)",lb:"Đúng (tiếng Na Uy)",a:"Jeg leser en Bok om Norge.",b:"Jeg leser en bok om Norge.",note:"“bok” là danh từ thường nên viết thường; chỉ tên riêng (Norge) và đầu câu mới viết hoa."}},
];

registerRows("vanlige-feil", T);
GRAMMAR.theory["vanlige-feil"] = { rows: T, first: "nb-feil-biff" };
})();
