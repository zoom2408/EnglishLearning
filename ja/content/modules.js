/* ja/content/modules.js
   Site map for the Japanese track (JLPT N5 → N3, one flat list ordered by
   difficulty). Add a module here, then create its page, its theory file
   and its quiz file (see /ja/content/theory and /ja/content/quiz). */
const SITE_BRAND = "Ngữ pháp tiếng Nhật";
const MODULES = [
 {key:"moji",num:"01",page:"moji.html",title:"Chữ viết & phát âm",en:"文字と発音",prefix:"ja-moji-",desc:"Hiragana, katakana, âm đục, âm ghép, âm ngắt, trường âm, kanji và furigana",meta:"5 bài · 60 câu"},
 {key:"aisatsu",num:"02",page:"aisatsu.html",title:"Chào hỏi & số đếm",en:"あいさつ・数",prefix:"ja-ais-",desc:"Chào hỏi, tự giới thiệu, số 0-10000, ngày tháng, thứ và giờ",meta:"4 bài · 60 câu"},
 {key:"kihon",num:"03",page:"kihon.html",title:"Câu cơ bản",en:"基本文型",prefix:"ja-kih-",desc:"N は N です, の, も, か, これ・それ・あれ, từ để hỏi",meta:"4 bài · 60 câu"},
 {key:"joshi",num:"04",page:"joshi.html",title:"Trợ từ",en:"助詞",prefix:"ja-jos-",desc:"は・が・を, に・へ・で, と・や・から・まで, も・だけ・しか",meta:"4 bài · 60 câu"},
 {key:"doushi",num:"05",page:"doushi.html",title:"Động từ ます & nhóm động từ",en:"動詞",prefix:"ja-dou-",desc:"Dạng ます, ba nhóm động từ, rủ rê ましょう, tần suất",meta:"4 bài · 60 câu"},
 {key:"keiyoushi",num:"06",page:"keiyoushi.html",title:"Tính từ い & な",en:"形容詞",prefix:"ja-kei-",desc:"Tính từ い, tính từ な, bổ nghĩa danh từ, nối câu và phó từ",meta:"4 bài · 60 câu"},
 {key:"tekei",num:"07",page:"tekei.html",title:"Thể て",en:"て形",prefix:"ja-te-",desc:"Cách chia thể て, ください, ています, てから, ても いい",meta:"4 bài · 60 câu"},
 {key:"futsukei",num:"08",page:"futsukei.html",title:"Thể thường, ない, た, たい",en:"普通形",prefix:"ja-fut-",desc:"Thể từ điển, ない, た, ~たい, ~ことができる, ~たことがある",meta:"4 bài · 60 câu"},
];
