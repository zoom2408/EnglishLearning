/* nb/content/theory/setningsbygning.js
   Setningsbygning: V2-regel, BIFF-regelen (signature Norwegian
   feature — unlike German, leddsetninger do NOT push the verb to the
   end; only "ikke" moves before it), fordi/for, at, selv om.
   Row 1 uses "table" mode; rows 2-5 use "xf" mode. */
(() => {
const T = [
 {id:"nb-satz-v2",num:"01",en:"Hovedsetning: V2-regel",vi:"Quy tắc động từ vị trí 2",short:"Động từ chia luôn ở vị trí thứ 2",
  core:"Trong <strong>hovedsetning</strong> (mệnh đề chính), động từ chia luôn đứng ở <strong>vị trí thứ 2</strong> — bất kể phần nào đứng ở vị trí 1 (chủ ngữ, trạng từ, tân ngữ…).",
  forms:[["Chủ ngữ ở vị trí 1","Thứ tự bình thường","**Jeg** reiser til Oslo i dag."],["Trạng từ ở vị trí 1","Chủ ngữ đẩy xuống sau động từ","**I dag** reiser jeg til Oslo."]],
  uses:[["Câu trần thuật đơn giản","Jeg **lærer** norsk hver dag."],["Nhấn mạnh một thành phần bằng cách đưa lên đầu câu","I morgen **skal** jeg reise."]],
  signals:["Chủ ngữ + V...","Trạng từ/tân ngữ + V + Chủ ngữ..."],
  speak:5,write:5,
  reg:"Quy tắc V2 áp dụng cho mọi hovedsetning, giống tiếng Đức — nhưng khác ở leddsetning (xem BIFF-regelen).",
  mistake:["I dag jeg reiser til Oslo.","I dag reiser jeg til Oslo.","Khi trạng từ đứng đầu câu, động từ vẫn phải ở vị trí 2, chủ ngữ bị đẩy xuống vị trí 3."],
  table:[{title:"Vị trí 1 thay đổi, động từ luôn ở vị trí 2",head:["Vị trí 1","Vị trí 2 (Verb)","Phần còn lại"],rows:[
   ["Jeg","**reiser**","til Oslo i dag."],
   ["I dag","**reiser**","jeg til Oslo."]]}]},

 {id:"nb-satz-biff",num:"02",en:"Leddsetning: BIFF-regelen",vi:"Quy tắc BIFF (vị trí của ikke)",short:"Leddsetning, Ikke, Foran, Finitt verb",
  core:"Khác hẳn tiếng Đức (vốn đẩy CẢ động từ xuống cuối mệnh đề phụ), tiếng Na Uy chỉ có MỘT thay đổi trong <strong>leddsetning</strong> (mệnh đề phụ): từ phủ định <strong>ikke</strong> di chuyển ra <strong>trước</strong> động từ chia (quy tắc BIFF: Bisetning – Ikke – Foran – Finitt verb).",
  forms:[["Hovedsetning","Verb + ikke","Jeg bor **ikke** her lenger."],["Leddsetning (BIFF)","ikke + Verb","…fordi jeg **ikke** bor her lenger."]],
  uses:[["Mệnh đề phụ với fordi/at/selv om/når…","Hun sa at hun **ikke** hadde tid."],["Các trạng từ khác (ofte, alltid…) cũng theo quy tắc tương tự"," …fordi jeg **alltid** kommer for sent."]],
  signals:["fordi/at/selv om/når + S + ikke + V"],
  speak:5,write:5,
  reg:"Đây là điểm NGỮ PHÁP QUAN TRỌNG NHẤT của tiếng Na Uy, khác hẳn tiếng Đức — động từ KHÔNG bị đẩy xuống cuối, chỉ có “ikke” di chuyển ra trước động từ.",
  mistake:["…fordi jeg bor ikke her lenger.","…fordi jeg ikke bor her lenger.","Trong leddsetning, “ikke” phải đứng TRƯỚC động từ chia, không đứng sau như trong hovedsetning."],
  xf:{la:"Hovedsetning",lb:"Leddsetning (BIFF)",a:"Jeg bor ikke her lenger.",b:"…fordi jeg ikke bor her lenger.",note:"Trong hovedsetning: Verb + ikke. Trong leddsetning: ikke + Verb (quy tắc BIFF) — động từ KHÔNG bị đẩy xuống cuối như tiếng Đức."}},

 {id:"nb-satz-fordifor",num:"03",en:"fordi vs. for",vi:"Phân biệt fordi và for",short:"fordi: leddsetning (BIFF) · for: hovedsetning bình thường",
  core:"<strong>fordi</strong> và <strong>for</strong> đều có nghĩa “vì”, nhưng <strong>fordi</strong> tạo ra leddsetning (áp dụng quy tắc BIFF cho ikke), còn <strong>for</strong> là liên từ đẳng lập — vế sau vẫn là hovedsetning bình thường (ikke đứng sau động từ).",
  forms:[["fordi (leddsetning)","fordi + S + ikke + V","…fordi jeg **ikke** bor der lenger."],["for (hovedsetning)","for + S + V + ikke","…for jeg bor **ikke** der lenger."]],
  uses:[["fordi — phổ biến, trung tính","Jeg er glad **fordi** jeg fikk jobben."],["for — hơi trang trọng/văn viết","Jeg er glad, **for** jeg fikk jobben."]],
  signals:["fordi + leddsetning (BIFF)","for + hovedsetning (bình thường)"],
  speak:5,write:4,
  reg:"Giống hệt cặp weil/denn trong tiếng Đức: cùng nghĩa “vì” nhưng khác hẳn về trật tự từ của “ikke”.",
  mistake:["…for jeg bor ikke der lenger (OK) nhưng …fordi jeg bor ikke der lenger (SAI).","…fordi jeg ikke bor der lenger.","Sau fordi (leddsetning), ikke phải đứng trước động từ theo quy tắc BIFF."],
  xf:{la:"for (hovedsetning)",lb:"fordi (leddsetning, BIFF)",a:"Jeg blir hjemme, for jeg er ikke frisk.",b:"Jeg blir hjemme fordi jeg ikke er frisk.",note:"Cùng nghĩa “vì”, nhưng “for” giữ ikke sau verb (er ikke), “fordi” đưa ikke lên trước verb (ikke er) theo BIFF."}},

 {id:"nb-satz-at",num:"04",en:"at",vi:"Mệnh đề danh từ",short:"at + S + (ikke) + V",
  core:"<strong>at</strong> (rằng) giới thiệu mệnh đề làm tân ngữ, thường sau các động từ như vite, tro, si, synes, håpe — đây cũng là một leddsetning nên áp dụng quy tắc BIFF.",
  forms:[["+","S + V + …, at + S + (ikke) + V","Jeg vet **at** han **ikke** kommer i dag."]],
  uses:[["Sau động từ chỉ nhận thức/phát ngôn","Hun sier **at** hun er trøtt."],["Phủ định trong mệnh đề at theo BIFF","Jeg tror **at** han **ikke** forstår."]],
  signals:["at","vite, at…","tro, at…","si, at…"],
  speak:5,write:5,
  reg:"Trong khẩu ngữ thân mật, “at” đôi khi bị bỏ (Jeg tror han kommer), nhưng quy tắc BIFF cho ikke vẫn áp dụng nếu mệnh đề vẫn được coi là leddsetning.",
  mistake:["Jeg vet at han kommer ikke i dag.","Jeg vet at han ikke kommer i dag.","Mệnh đề “at” là leddsetning: ikke phải đứng trước động từ theo BIFF."],
  xf:{la:"Hai câu",lb:"Một câu (at)",a:"Jeg vet noe. Han kommer ikke i dag.",b:"Jeg vet at han ikke kommer i dag.",note:"“at” giới thiệu mệnh đề tân ngữ; theo BIFF, “ikke” đứng trước động từ (ikke kommer)."}},

 {id:"nb-satz-selvom",num:"05",en:"selv om",vi:"Mệnh đề tương phản",short:"selv om + S + (ikke) + V",
  core:"<strong>selv om</strong> (mặc dù) giới thiệu mệnh đề phụ chỉ sự tương phản — cũng là leddsetning nên áp dụng quy tắc BIFF cho ikke.",
  forms:[["+","selv om + S + (ikke) + V","**Selv om** det **ikke** er varmt, går vi en tur."]],
  uses:[["Tương phản giữa hai mệnh đề","Vi går ut, **selv om** det regner."],["Phủ định theo BIFF trong mệnh đề selv om","Han kjøpte bilen **selv om** han **ikke** hadde nok penger."]],
  signals:["selv om"],
  speak:4,write:5,
  reg:"selv om là liên từ phụ thuộc phổ biến nhất cho sự tương phản trong tiếng Na Uy, tương đương “obwohl” tiếng Đức hay “although” tiếng Anh.",
  mistake:["Selv om det er ikke varmt, går vi en tur.","Selv om det ikke er varmt, går vi en tur.","Leddsetning với selv om: ikke phải đứng trước động từ theo BIFF."],
  xf:{la:"Hai câu",lb:"Một câu (selv om)",a:"Det er ikke varmt. Vi går en tur likevel.",b:"Selv om det ikke er varmt, går vi en tur.",note:"“selv om” tạo leddsetning: ikke đứng trước động từ (ikke er) theo BIFF; mệnh đề chính đảo động từ (går vi) vì leddsetning chiếm vị trí 1."}},
];

registerRows("setningsbygning", T);
GRAMMAR.theory.setningsbygning = { rows: T, first: "nb-satz-biff" };
})();
