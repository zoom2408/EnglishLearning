/* de/content/theory/pronomen.js
   Pronomen: Personalpronomen, Possessivpronomen, Reflexivpronomen.
   Uses the "table" diagram mode (declension grid). */
(() => {
const T = [
 {id:"de-pron-personal",num:"01",en:"Personalpronomen",vi:"Đại từ nhân xưng",short:"ich/mich/mir, du/dich/dir, er/ihn/ihm…",
  core:"Đại từ thay cho danh từ, chia theo <strong>3 cách</strong> tùy vai trò trong câu: Nominativ (chủ ngữ), Akkusativ (tân ngữ trực tiếp), Dativ (tân ngữ gián tiếp).",
  forms:[["Nom.→Akk.","Chủ ngữ thành tân ngữ trực tiếp","Ich sehe <mark>dich</mark>."],["Nom.→Dat.","Chủ ngữ thành tân ngữ gián tiếp","Er hilft <mark>mir</mark>."]],
  uses:[["Thay danh từ đã nhắc ở câu trước","Das ist Anna. <mark>Sie</mark> kommt aus Hanoi."],["Sau giới từ, đại từ cũng phải chia theo cách giới từ đòi hỏi","Das Geschenk ist für <mark>dich</mark>."]],
  signals:["ich","du","er/sie/es","wir","ihr","sie/Sie"],
  speak:5,write:5,
  reg:"Bảng này là một trong những bảng quan trọng nhất cần thuộc lòng — dùng trong mọi câu nói hằng ngày.",
  mistake:["Er hilft ich.","Er hilft mir.","“helfen” đòi Dativ: ich → mir, không phải giữ nguyên ich."],
  table:[{head:["Nom.","Akk.","Dat."],rows:[["ich","mich","mir"],["du","dich","dir"],["er","ihn","ihm"],["sie","sie","ihr"],["es","es","ihm"],["wir","uns","uns"],["ihr","euch","euch"],["sie / Sie","sie / Sie","ihnen / Ihnen"]]}]},

 {id:"de-pron-possessiv",num:"02",en:"Possessivpronomen",vi:"Đại từ sở hữu",short:"mein, dein, sein, ihr, unser, euer, ihr/Ihr",
  core:"Đại từ chỉ <strong>sở hữu</strong> (của tôi, của bạn…). Dạng gốc dưới đây sẽ <strong>thêm đuôi</strong> theo giống và cách của danh từ đi sau, giống hệt “ein” (mein, meine, meinen, meinem…).",
  forms:[["+ Nom. mask.","Không thêm đuôi","<mark>Mein</mark> Vater ist Lehrer."],["+ Nom. fem./Pl.","Thêm -e","<mark>Meine</mark> Mutter kocht gern."],["+ Akk. mask.","Thêm -en","Ich sehe <mark>meinen</mark> Bruder."]],
  uses:[["Sở hữu đơn giản","Das ist <mark>dein</mark> Buch."],["Chia đuôi theo cách y hệt mạo từ “ein”","Ich rufe <mark>meine</mark> Schwester an."]],
  signals:["mein","dein","sein","ihr","unser","euer","ihr/Ihr"],
  speak:5,write:5,
  reg:"Quy tắc thêm đuôi của Possessivpronomen giống hệt mạo từ không xác định “ein” — nếu đã thuộc bảng ein/eine/einen thì chỉ cần thay “ein-” bằng “mein-”, “dein-”…",
  mistake:["Das ist meine Vater.","Das ist mein Vater.","Vater là giống đực (maskulin), Nominativ không thêm đuôi: mein, không phải meine."],
  table:[{title:"Dạng gốc theo ngôi",head:["Person","Possessivpronomen"],rows:[["ich","mein"],["du","dein"],["er / es","sein"],["sie","ihr"],["wir","unser"],["ihr","euer"],["sie / Sie","ihr / Ihr"]]}]},

 {id:"de-pron-reflexiv",num:"03",en:"Reflexivpronomen",vi:"Đại từ phản thân",short:"mich/mir, dich/dir, sich, uns, euch, sich",
  core:"Dùng với <strong>động từ phản thân</strong> (reflexive Verben) khi chủ ngữ và tân ngữ là cùng một người: sich freuen, sich waschen, sich erinnern…",
  forms:[["Akk.","Hầu hết động từ phản thân","Ich freue <mark>mich</mark> auf die Reise."],["Dat.","Khi câu đã có một tân ngữ Akkusativ khác","Ich wasche <mark>mir</mark> die Hände."]],
  uses:[["Động từ chỉ tồn tại ở dạng phản thân","Ich erinnere <mark>mich</mark> an ihn."],["Hành động chủ thể tự làm cho mình","Er zieht <mark>sich</mark> an."]],
  signals:["sich freuen","sich waschen","sich erinnern","sich anziehen","sich interessieren für"],
  speak:4,write:4,
  reg:"Ngôi thứ 3 (er/sie/es/sie/Sie) luôn dùng “sich” cho cả Akkusativ lẫn Dativ — không phân biệt như ich/du.",
  mistake:["Ich interessiere ihn für Musik.","Ich interessiere mich für Musik.","“sich interessieren für” là động từ phản thân, chủ ngữ ich đi với mich, không phải ihn."],
  table:[{head:["Person","Akk.","Dat."],rows:[["ich","mich","mir"],["du","dich","dir"],["er/sie/es","sich","sich"],["wir","uns","uns"],["ihr","euch","euch"],["sie / Sie","sich","sich"]]}]},
];

registerRows("pronomen", T);
GRAMMAR.theory.pronomen = { rows: T, first: "de-pron-personal" };
})();
