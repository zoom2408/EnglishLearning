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
 {key:"sonzai",num:"09",page:"sonzai.html",title:"あります・います & đếm",en:"存在・数え方",prefix:"ja-son-",desc:"あります/います, vị trí, đếm đồ vật và người, hỏi số lượng",meta:"4 bài · 60 câu"},
 {key:"hikaku",num:"10",page:"hikaku.html",title:"So sánh & ý định",en:"比較・意志",prefix:"ja-hik-",desc:"より, のほうが, いちばん, つもり, よてい, ようと思う",meta:"4 bài · 60 câu"},
 {key:"shushoku",num:"11",page:"shushoku.html",title:"Mệnh đề bổ nghĩa & danh từ hoá",en:"修飾・名詞化",prefix:"ja-shu-",desc:"Mệnh đề bổ nghĩa danh từ, の và こと, という, んです",meta:"4 bài · 60 câu"},
 {key:"joken",num:"12",page:"joken.html",title:"Điều kiện",en:"条件",prefix:"ja-jok-",desc:"と, ば, たら, なら, và cách chọn mẫu phù hợp",meta:"4 bài · 60 câu"},
 {key:"kanou",num:"13",page:"kanou.html",title:"Khả năng, ý chí, mệnh lệnh",en:"可能・命令・義務",prefix:"ja-kan-",desc:"Thể khả năng, 見える・聞こえる, mệnh lệnh và cấm, nghĩa vụ và lời khuyên",meta:"4 bài · 60 câu"},
 {key:"ukemi",num:"14",page:"ukemi.html",title:"Bị động & sai khiến",en:"受身・使役",prefix:"ja-uke-",desc:"Thể bị động, bị động gây phiền, thể sai khiến, sai khiến bị động",meta:"4 bài · 60 câu"},
 {key:"keigo",num:"15",page:"keigo.html",title:"Keigo",en:"敬語",prefix:"ja-kei2-",desc:"Teineigo, sonkeigo, kenjōgo và cụm công sở",meta:"4 bài · 60 câu"},
 {key:"ayamari",num:"16",page:"ayamari.html",title:"Lỗi hay gặp",en:"よくある間違い",prefix:"ja-aya-",desc:"Lỗi trợ từ, chia từ, thể て/ない/た và từ dễ nhầm của người Việt",meta:"5 bài · 60 câu"},
 {key:"speaking",num:"17",page:"speaking.html",title:"Speaking",en:"JLPT N5–N3",prefix:"",desc:"50 câu hỏi nói theo chủ đề N5 đến N3",meta:"50 thẻ · 10 chủ đề"},
 {key:"vocab",num:"18",page:"vocab.html",title:"Từ vựng",en:"語彙",prefix:"",desc:"Danh từ, động từ, tính từ, cụm từ N5-N3 theo 10 chủ đề",meta:"600 từ · 10 chủ đề"},
];
