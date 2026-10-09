/* nb/content/theory/substantiv.js
   Substantiv & Artikler: 3 kjønn, bestemt/ubestemt form, flertall.
   Uses the "table" diagram mode. */
(() => {
const T = [
 {id:"nb-sub-hankjonn",num:"01",en:"Hankjønn (en-ord)",vi:"Giống đực (en)",short:"en bil → bilen → biler → bilene",
  core:"Phần lớn danh từ tiếng Na Uy thuộc <strong>hankjønn</strong> (en-ord) — chiếm khoảng 50-60% tổng số danh từ, nên nếu không chắc, đoán “en” thường đúng nhiều nhất.",
  forms:[["Ubestemt (không xác định)","en + danh từ","**en** bil (một chiếc xe)"],["Bestemt (xác định)","danh từ + -en","bil**en** (chiếc xe đó)"],["Flertall ubestemt","danh từ + -er","bil**er** (những chiếc xe)"],["Flertall bestemt","danh từ + -ene","bil**ene** (những chiếc xe đó)"]],
  uses:[["Giới thiệu một vật lần đầu","Jeg har **en** bil."],["Nhắc lại vật đã biết","**Bilen** min er rød."]],
  signals:["en + danh từ","-en (bestemt)","-er/-ene (flertall)"],
  speak:5,write:5,
  reg:"Khi không chắc giới tính của một danh từ mới, dùng “en” là lựa chọn an toàn nhất — đa số danh từ tiếng Na Uy là hankjønn.",
  mistake:["en bilen","bilen","Bestemt form không cần giữ “en” phía trước — chỉ cần thêm đuôi -en vào danh từ."],
  table:[{head:["Dạng","Ubestemt","Bestemt"],rows:[["Số ít","en bil","bilen"],["Số nhiều","biler","bilene"]]}]},

 {id:"nb-sub-hunkjonn",num:"02",en:"Hunkjønn (ei-ord)",vi:"Giống cái (ei)",short:"ei bok → boka → bøker → bøkene",
  core:"<strong>Hunkjønn</strong> (ei-ord) là nhóm danh từ nhỏ hơn — trong Bokmål, hầu hết các từ này cũng có thể dùng “en” thay cho “ei” (hệ hai giống), nhưng “ei/-a” tự nhiên hơn trong khẩu ngữ.",
  forms:[["Ubestemt","ei + danh từ","**ei** bok (một quyển sách)"],["Bestemt","danh từ + -a (hoặc -en nếu dùng hệ hai giống)","bok**a** / bok**en**"],["Flertall ubestemt","danh từ + -er","bøker (nguyên âm đổi o→ø)"],["Flertall bestemt","danh từ + -ene","bøkene"]],
  uses:[["Khẩu ngữ tự nhiên dùng ei/-a","**Ei** jente lekte i parken. Jent**a** lo."],["Bokmål trang trọng/viết có thể dùng hệ hai giống (en thay ei)","**En** bok ligger her. Bok**en** er spennende."]],
  signals:["ei + danh từ","-a (bestemt, hệ ba giống)"],
  speak:4,write:3,
  reg:"Tiếng Na Uy Bokmål cho phép chọn hệ hai giống (chỉ en/et) hoặc ba giống (en/ei/et) — người mới học có thể dùng “en” cho mọi ei-ord để đơn giản hóa, miễn là nhất quán.",
  mistake:["ei boka","boka","Bestemt form không giữ “ei” phía trước — chỉ cần thêm đuôi -a vào danh từ."],
  table:[{head:["Dạng","Ubestemt","Bestemt"],rows:[["Số ít","ei bok","boka"],["Số nhiều","bøker","bøkene"]]}]},

 {id:"nb-sub-intetkjonn",num:"03",en:"Intetkjønn (et-ord)",vi:"Giống trung (et)",short:"et hus → huset → hus → husene",
  core:"<strong>Intetkjønn</strong> (et-ord) là nhóm danh từ giống trung — điểm đặc biệt: số nhiều ubestemt <strong>không thêm đuôi</strong> (hus → hus, không phải huser).",
  forms:[["Ubestemt","et + danh từ","**et** hus (một ngôi nhà)"],["Bestemt","danh từ + -et","hus**et** (ngôi nhà đó)"],["Flertall ubestemt","giữ nguyên (không đuôi)","**hus** (những ngôi nhà)"],["Flertall bestemt","danh từ + -ene","hus**ene**"]],
  uses:[["Giới thiệu vật lần đầu","Jeg kjøpte **et** hus."],["Số nhiều không đổi dạng","To **hus** står der borte."]],
  signals:["et + danh từ","-et (bestemt)","flertall ubestemt không đuôi"],
  speak:5,write:5,
  reg:"Đây là nhóm dễ gây lỗi nhất vì số nhiều KHÔNG thêm -er như hankjønn — nhớ quy tắc đặc biệt này.",
  mistake:["to huser","to hus","Et-ord ở số nhiều ubestemt không thêm đuôi -er, giữ nguyên dạng số ít."],
  table:[{head:["Dạng","Ubestemt","Bestemt"],rows:[["Số ít","et hus","huset"],["Số nhiều","hus","husene"]]}]},
];

registerRows("substantiv", T);
GRAMMAR.theory.substantiv = { rows: T, first: "nb-sub-hankjonn" };
})();
