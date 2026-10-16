/* content/quiz/ipa.js: English pronunciation and IPA practice (60 questions) and game.
   Mixed builders: choose (mcQ) and fill (inQ). Wrong answers can be retried. */
(() => {
const BANK = {
 "ipa-overview": [
  {
   "kind": "choose",
   "q": "Ký hiệu nào đánh dấu trọng âm chính?",
   "right": "ˈ",
   "wrong": [
    "ˌ",
    "ː",
    "/"
   ],
   "expl": "ˈ đặt trước âm tiết nhấn chính. ˌ là trọng âm phụ, ː là âm dài.",
   "mono": true
  },
  {
   "kind": "choose",
   "q": "Ký hiệu ː trong /iː/ nghĩa là",
   "right": "âm dài",
   "wrong": [
    "âm yếu",
    "trọng âm",
    "âm câm"
   ],
   "expl": "ː báo nguyên âm được kéo dài.",
   "mono": false
  },
  {
   "kind": "choose",
   "q": "“cough” đọc là",
   "right": "/kɔːf/",
   "wrong": [
    "/kʌf/",
    "/kaʊ/",
    "/koʊf/"
   ],
   "expl": "cough đọc /kɔːf/, không đoán theo chữ viết.",
   "mono": true
  },
  {
   "kind": "choose",
   "q": "Số âm trong tiếng Anh so với 26 chữ cái",
   "right": "nhiều hơn (khoảng 44)",
   "wrong": [
    "đúng 26",
    "ít hơn 26",
    "chỉ 12"
   ],
   "expl": "Chữ viết và âm không khớp nhau, nên cần IPA.",
   "mono": false
  },
  {
   "kind": "choose",
   "q": "/b/ khác /p/ ở chỗ",
   "right": "hữu thanh (dây thanh rung)",
   "wrong": [
    "vị trí đầu lưỡi",
    "có bật hơi",
    "là âm mũi"
   ],
   "expl": "/p/ vô thanh, /b/ hữu thanh. Đặt tay lên cổ để kiểm tra.",
   "mono": false
  }
 ],
 "ipa-short": [
  {
   "kind": "choose",
   "q": "IPA của “sit”",
   "right": "/sɪt/",
   "wrong": [
    "/siːt/",
    "/set/",
    "/sæt/"
   ],
   "expl": "sit có nguyên âm ngắn /ɪ/. /siːt/ là seat.",
   "mono": true
  },
  {
   "kind": "choose",
   "q": "Từ nào chứa /æ/?",
   "right": "bad",
   "wrong": [
    "bed",
    "bud",
    "bird"
   ],
   "expl": "bad /bæd/; bed /bed/; bud /bʌd/; bird /bɜːrd/.",
   "mono": false
  },
  {
   "kind": "choose",
   "q": "/ə/ (schwa) thường xuất hiện ở",
   "right": "âm tiết không nhấn",
   "wrong": [
    "âm tiết nhấn mạnh nhất",
    "cuối câu hỏi",
    "chỉ trong từ mượn"
   ],
   "expl": "Âm tiết không nhấn thường rút thành /ə/.",
   "mono": false
  },
  {
   "kind": "choose",
   "q": "“cup” đọc là",
   "right": "/kʌp/",
   "wrong": [
    "/kɑːp/",
    "/kæp/",
    "/kʊp/"
   ],
   "expl": "cup có /ʌ/ như “ă” ngắn.",
   "mono": true
  },
  {
   "kind": "fill",
   "q": "Trong “about” /əˈbaʊt/, trọng âm rơi vào âm tiết thứ ___ (số)",
   "hint": "số",
   "accept": [
    "2",
    "two",
    "hai"
   ],
   "expl": "ˈ đứng trước baʊt, tức âm tiết thứ hai."
  }
 ],
 "ipa-long": [
  {
   "kind": "choose",
   "q": "Cặp nào có /iː/ ở cả hai từ?",
   "right": "see, team",
   "wrong": [
    "sit, team",
    "see, bed",
    "bit, seat"
   ],
   "expl": "see /siː/ và team /tiːm/ đều có /iː/.",
   "mono": false
  },
  {
   "kind": "choose",
   "q": "IPA của “now”",
   "right": "/naʊ/",
   "wrong": [
    "/noʊ/",
    "/nɔː/",
    "/nuː/"
   ],
   "expl": "now có nguyên âm đôi /aʊ/.",
   "mono": true
  },
  {
   "kind": "choose",
   "q": "IPA của “go” (giọng Mỹ)",
   "right": "/ɡoʊ/",
   "wrong": [
    "/ɡɔː/",
    "/ɡuː/",
    "/ɡaʊ/"
   ],
   "expl": "go có nguyên âm đôi /oʊ/.",
   "mono": true
  },
  {
   "kind": "choose",
   "q": "Từ nào đọc /ɜːr/?",
   "right": "bird",
   "wrong": [
    "bed",
    "bored",
    "bad"
   ],
   "expl": "bird /bɜːrd/; bored /bɔːrd/.",
   "mono": false
  },
  {
   "kind": "choose",
   "q": "“ship” và “sheep” khác nhau ở",
   "right": "nguyên âm /ɪ/ ≠ /iː/",
   "wrong": [
    "phụ âm đầu",
    "phụ âm cuối",
    "trọng âm"
   ],
   "expl": "Cặp nguyên âm ngắn và dài: /ʃɪp/ ≠ /ʃiːp/.",
   "mono": false
  }
 ],
 "ipa-stops": [
  {
   "kind": "choose",
   "q": "Chữ p trong “pin” phát âm",
   "right": "bật hơi /pʰ/",
   "wrong": [
    "không bật hơi",
    "câm",
    "như /f/"
   ],
   "expl": "p đầu âm tiết nhấn có luồng hơi.",
   "mono": false
  },
  {
   "kind": "choose",
   "q": "Chữ p trong “spin” phát âm",
   "right": "không bật hơi",
   "wrong": [
    "bật hơi mạnh",
    "câm",
    "như /f/"
   ],
   "expl": "Sau /s/, p không bật hơi.",
   "mono": false
  },
  {
   "kind": "choose",
   "q": "Cuối từ “bag” nên đọc",
   "right": "/bæɡ/ (giữ /ɡ/)",
   "wrong": [
    "/bæk/",
    "/bæ/",
    "/bɑːk/"
   ],
   "expl": "Giữ âm cuối hữu thanh /ɡ/, đừng đổi thành /k/ hay bỏ.",
   "mono": true
  },
  {
   "kind": "choose",
   "q": "Nguyên âm trước phụ âm hữu thanh cuối (bad) so với vô thanh (bat)",
   "right": "dài hơn",
   "wrong": [
    "ngắn hơn",
    "giống hệt",
    "không phát âm"
   ],
   "expl": "bad /bæd/ nghe dài hơn bat /bæt/.",
   "mono": false
  },
  {
   "kind": "choose",
   "q": "Âm cuối nào người Việt hay bỏ?",
   "right": "/t/, /d/, /k/ như cat, bed, book",
   "wrong": [
    "âm đầu",
    "nguyên âm",
    "âm giữa"
   ],
   "expl": "Âm cuối giúp phân biệt từ, cần đọc đủ.",
   "mono": false
  }
 ],
 "ipa-fric": [
  {
   "kind": "choose",
   "q": "IPA của “think”",
   "right": "/θɪŋk/",
   "wrong": [
    "/sɪŋk/",
    "/tɪŋk/",
    "/ðɪŋk/"
   ],
   "expl": "think bắt đầu bằng /θ/ vô thanh.",
   "mono": true
  },
  {
   "kind": "choose",
   "q": "Chữ th trong “this” là",
   "right": "/ð/ hữu thanh",
   "wrong": [
    "/θ/ vô thanh",
    "/d/",
    "/z/"
   ],
   "expl": "this /ðɪs/ rung dây thanh.",
   "mono": false
  },
  {
   "kind": "choose",
   "q": "Âm /ʃ/ có trong",
   "right": "she",
   "wrong": [
    "see",
    "chair",
    "job"
   ],
   "expl": "she /ʃiː/. chair /tʃer/ và job /dʒɑːb/ là tắc xát.",
   "mono": false
  },
  {
   "kind": "choose",
   "q": "“job” bắt đầu bằng",
   "right": "/dʒ/",
   "wrong": [
    "/j/",
    "/tʃ/",
    "/ʒ/"
   ],
   "expl": "job /dʒɑːb/ là âm tắc xát hữu thanh.",
   "mono": true
  },
  {
   "kind": "choose",
   "q": "“very” bắt đầu bằng",
   "right": "/v/ (răng trên chạm môi dưới)",
   "wrong": [
    "/w/ (môi tròn)",
    "/j/",
    "/b/"
   ],
   "expl": "/v/ cần răng chạm môi, không phải môi tròn.",
   "mono": false
  }
 ],
 "ipa-other": [
  {
   "kind": "choose",
   "q": "“sing” kết thúc bằng",
   "right": "/ŋ/ (không có /ɡ/)",
   "wrong": [
    "/ŋɡ/",
    "/n/",
    "/m/"
   ],
   "expl": "sing /sɪŋ/, không thêm /ɡ/.",
   "mono": true
  },
  {
   "kind": "choose",
   "q": "“right” bắt đầu bằng",
   "right": "/r/",
   "wrong": [
    "/l/",
    "/w/",
    "/j/"
   ],
   "expl": "right /raɪt/, /r/ Mỹ cong lưỡi.",
   "mono": true
  },
  {
   "kind": "choose",
   "q": "“light” khác “night” ở",
   "right": "/l/ và /n/",
   "wrong": [
    "/r/ và /l/",
    "/t/ và /d/",
    "nguyên âm"
   ],
   "expl": "light /laɪt/ ≠ night /naɪt/.",
   "mono": false
  },
  {
   "kind": "choose",
   "q": "“yes” bắt đầu bằng",
   "right": "/j/",
   "wrong": [
    "/dʒ/",
    "/z/",
    "/ʒ/"
   ],
   "expl": "yes /jes/, /j/ như chữ y.",
   "mono": true
  },
  {
   "kind": "choose",
   "q": "“sun” và “sung” khác nhau ở",
   "right": "âm cuối /n/ và /ŋ/",
   "wrong": [
    "âm đầu",
    "nguyên âm",
    "trọng âm"
   ],
   "expl": "sun /sʌn/ ≠ sung /sʌŋ/.",
   "mono": false
  }
 ],
 "ipa-ending": [
  {
   "kind": "choose",
   "q": "-s trong “cats” đọc là",
   "right": "/s/",
   "wrong": [
    "/z/",
    "/ɪz/",
    "câm"
   ],
   "expl": "Sau /t/ vô thanh, -s đọc /s/.",
   "mono": true
  },
  {
   "kind": "choose",
   "q": "-s trong “dogs” đọc là",
   "right": "/z/",
   "wrong": [
    "/s/",
    "/ɪz/",
    "câm"
   ],
   "expl": "Sau /ɡ/ hữu thanh, -s đọc /z/.",
   "mono": true
  },
  {
   "kind": "choose",
   "q": "-ed trong “worked” đọc là",
   "right": "/t/",
   "wrong": [
    "/d/",
    "/ɪd/",
    "/ed/"
   ],
   "expl": "Sau /k/ vô thanh, -ed đọc /t/.",
   "mono": true
  },
  {
   "kind": "choose",
   "q": "-ed trong “wanted” đọc là",
   "right": "/ɪd/",
   "wrong": [
    "/t/",
    "/d/",
    "/ɪt/"
   ],
   "expl": "Sau /t/, -ed thêm âm tiết /ɪd/.",
   "mono": true
  },
  {
   "kind": "choose",
   "q": "-es trong “buses” đọc là",
   "right": "/ɪz/",
   "wrong": [
    "/z/",
    "/s/",
    "/ɪs/"
   ],
   "expl": "Sau /s/, thêm âm tiết /ɪz/.",
   "mono": true
  }
 ],
 "ipa-stress": [
  {
   "kind": "choose",
   "q": "Động từ “record” (ghi âm) nhấn",
   "right": "âm tiết 2: /rɪˈkɔːrd/",
   "wrong": [
    "âm tiết 1: /ˈrekərd/",
    "cả hai âm",
    "không nhấn"
   ],
   "expl": "Động từ 2 âm thường nhấn âm sau.",
   "mono": false
  },
  {
   "kind": "choose",
   "q": "Danh từ “present” (món quà) nhấn",
   "right": "âm tiết 1",
   "wrong": [
    "âm tiết 2",
    "âm tiết 3",
    "cả hai"
   ],
   "expl": "Danh từ 2 âm thường nhấn âm đầu: /ˈpreznt/.",
   "mono": false
  },
  {
   "kind": "choose",
   "q": "“education” nhấn",
   "right": "âm tiết trước -tion",
   "wrong": [
    "âm tiết đầu",
    "âm tiết cuối",
    "-tion"
   ],
   "expl": "Hậu tố -tion kéo trọng âm về âm tiết ngay trước: eduCAtion.",
   "mono": false
  },
  {
   "kind": "choose",
   "q": "Âm tiết không nhấn thường chứa",
   "right": "/ə/",
   "wrong": [
    "/æ/",
    "/iː/",
    "/aʊ/"
   ],
   "expl": "Âm tiết không nhấn rút thành /ə/.",
   "mono": false
  },
  {
   "kind": "choose",
   "q": "“blackbird” (loài chim) khác “black bird” (chim đen)",
   "right": "từ ghép nhấn âm đầu: BLACKbird",
   "wrong": [
    "từ ghép nhấn âm cuối",
    "hai cụm nhấn giống nhau",
    "không nhấn"
   ],
   "expl": "Từ ghép thường nhấn từ đầu.",
   "mono": false
  }
 ],
 "ipa-connected": [
  {
   "kind": "choose",
   "q": "“pick it up” nói nhanh nối thành",
   "right": "/ˈpɪkɪˌtʌp/",
   "wrong": [
    "/pɪk ɪt ʌp/ (tách từng từ)",
    "/pɪkʃ/",
    "/pɪt/"
   ],
   "expl": "Phụ âm cuối nối sang đầu âm tiết sau.",
   "mono": true
  },
  {
   "kind": "choose",
   "q": "t trong “water” (giọng Mỹ) thường đọc như",
   "right": "d nhanh (flap)",
   "wrong": [
    "/t/ bật hơi mạnh",
    "/θ/",
    "câm"
   ],
   "expl": "t giữa hai nguyên âm thành flap: wa-der.",
   "mono": false
  },
  {
   "kind": "choose",
   "q": "“did you” nói nhanh nghe như",
   "right": "/ˈdɪdʒu/",
   "wrong": [
    "/dɪd ju/ rõ từng từ",
    "/ˈdɪʃu/",
    "/ˈdɪt/"
   ],
   "expl": "d + y thành /dʒ/.",
   "mono": true
  },
  {
   "kind": "choose",
   "q": "“to” trong “I want to go” thường đọc yếu là",
   "right": "/tə/",
   "wrong": [
    "/tuː/",
    "/toʊ/",
    "/taʊ/"
   ],
   "expl": "Từ chức năng rút thành /tə/.",
   "mono": true
  },
  {
   "kind": "fill",
   "q": "“going to” nói nhanh thành chữ viết tắt nào?",
   "hint": "viết tắt",
   "accept": [
    "gonna"
   ],
   "expl": "going to → gonna (văn nói thân mật)."
  }
 ],
 "ipa-rhythm": [
  {
   "kind": "choose",
   "q": "Từ nào thường được NHẤN trong câu?",
   "right": "danh từ, động từ chính, tính từ",
   "wrong": [
    "mạo từ a/the",
    "giới từ at/on",
    "trợ động từ do/is"
   ],
   "expl": "Từ nội dung được nhấn, từ chức năng đọc yếu.",
   "mono": false
  },
  {
   "kind": "choose",
   "q": "Câu “The cat is on the mat.” thường nhấn",
   "right": "cat, mat",
   "wrong": [
    "the, is, on",
    "is, on",
    "cat, the"
   ],
   "expl": "Chỉ hai danh từ được nhấn: The CAT is on the MAT.",
   "mono": false
  },
  {
   "kind": "choose",
   "q": "“and” trong “bread and butter” thường đọc",
   "right": "/ən/ yếu",
   "wrong": [
    "/ænd/ mạnh",
    "/ænt/",
    "/end/"
   ],
   "expl": "and rút thành /ən/ giữa câu.",
   "mono": true
  },
  {
   "kind": "choose",
   "q": "Tiếng Anh có nhịp kiểu",
   "right": "stress-timed (các âm nhấn cách đều)",
   "wrong": [
    "syllable-timed (mỗi âm tiết bằng nhau)",
    "không có nhịp",
    "mỗi từ dài bằng nhau"
   ],
   "expl": "Âm nhấn cách đều, âm yếu bị nén lại.",
   "mono": false
  },
  {
   "kind": "choose",
   "q": "“can” trong “Yes, I can.” (cuối câu) đọc",
   "right": "/kæn/ mạnh",
   "wrong": [
    "/kən/ yếu",
    "/kn/",
    "câm"
   ],
   "expl": "Cuối câu dùng dạng mạnh.",
   "mono": true
  }
 ],
 "ipa-intonation": [
  {
   "kind": "choose",
   "q": "Câu hỏi Wh- (What's your name?) thường kết thúc bằng",
   "right": "giọng xuống",
   "wrong": [
    "giọng lên",
    "giọng ngang kéo dài",
    "lên rồi xuống"
   ],
   "expl": "Wh-question xuống giọng.",
   "mono": false
  },
  {
   "kind": "choose",
   "q": "Câu hỏi Yes/No (Are you ready?) thường",
   "right": "lên giọng cuối câu",
   "wrong": [
    "xuống giọng",
    "ngang",
    "hạ rồi nâng"
   ],
   "expl": "Yes/No question lên giọng.",
   "mono": false
  },
  {
   "kind": "choose",
   "q": "Liệt kê “milk, eggs and bread”",
   "right": "lên ở các mục đầu, xuống ở mục cuối",
   "wrong": [
    "xuống ở mọi mục",
    "lên ở mọi mục",
    "ngang hết"
   ],
   "expl": "Giọng lên báo hiệu chưa hết, xuống ở mục cuối.",
   "mono": false
  },
  {
   "kind": "choose",
   "q": "Tag question hỏi thật (You're coming, aren't you?)",
   "right": "lên giọng ở tag",
   "wrong": [
    "xuống giọng ở tag",
    "không có tag",
    "ngang"
   ],
   "expl": "Hỏi thật thì lên, chỉ xác nhận thì xuống.",
   "mono": false
  },
  {
   "kind": "choose",
   "q": "Người nói tiếng Việt nên tránh điều gì?",
   "right": "gán thanh điệu cho từng âm tiết",
   "wrong": [
    "nói chậm",
    "nhấn từ khoá",
    "xuống giọng ở câu khẳng định"
   ],
   "expl": "Ngữ điệu tiếng Anh là của cả cụm, không phải từng âm tiết.",
   "mono": false
  }
 ],
 "ipa-pairs": [
  {
   "kind": "choose",
   "q": "“ship” có nguyên âm",
   "right": "/ɪ/ ngắn",
   "wrong": [
    "/iː/ dài",
    "/e/",
    "/aɪ/"
   ],
   "expl": "ship /ʃɪp/, sheep /ʃiːp/.",
   "mono": false
  },
  {
   "kind": "choose",
   "q": "“bed” và “bad” đọc lần lượt là",
   "right": "/bed/ và /bæd/",
   "wrong": [
    "/bæd/ và /bed/",
    "/bɪd/ và /bed/",
    "/bʌd/ và /bæd/"
   ],
   "expl": "bed có /e/, bad có /æ/.",
   "mono": true
  },
  {
   "kind": "choose",
   "q": "“street” đúng là",
   "right": "/striːt/ (một âm tiết)",
   "wrong": [
    "/səˈtriːt/",
    "/stiːrt/",
    "/striːtə/"
   ],
   "expl": "Giữ cụm /str/, không chèn nguyên âm.",
   "mono": false
  },
  {
   "kind": "choose",
   "q": "“thank” đọc đúng là",
   "right": "/θæŋk/",
   "wrong": [
    "/sæŋk/",
    "/tæŋk/",
    "/ðæŋk/"
   ],
   "expl": "thank bắt đầu bằng /θ/ vô thanh.",
   "mono": true
  },
  {
   "kind": "choose",
   "q": "“bus” và “bush” đọc lần lượt là",
   "right": "/bʌs/ và /bʊʃ/",
   "wrong": [
    "/bʌʃ/ và /bʊs/",
    "/bʊs/ và /bʌʃ/",
    "/bæs/ và /bæʃ/"
   ],
   "expl": "bus /bʌs/; bush /bʊʃ/.",
   "mono": true
  }
 ]
};
const TYPES={choose:{name:"Chọn đáp án",desc:"Chọn IPA, từ hoặc quy tắc đúng"},fill:{name:"Điền vào chỗ trống",desc:"Gõ đáp án ngắn"}};
const POOL=[];
Object.entries(BANK).forEach(([ref, items]) => items.forEach(it => {
 if (it.kind === "fill") POOL.push(Object.assign(inQ("fill", fmt(it.q), `Gợi ý: <b>${esc(it.hint)}</b>.`, it.accept, ref, it.expl), {retry:true}));
 else POOL.push(Object.assign(mcQ("choose", fmt(it.q), "Chọn đáp án đúng.", it.right, it.wrong, ref, it.expl, it.mono), {retry:true}));
}));
const RUSH=[["/ɪ/ sit · /e/ bed · /æ/ bad", ["Nguyên âm"]], ["/iː/ see · /uː/ food · /oʊ/ go", ["Nguyên âm"]], ["/p b t d k ɡ/ cuối từ", ["Phụ âm tắc"]], ["pin /pʰɪn/ · spin", ["Phụ âm tắc"]], ["/θ/ think · /ð/ this", ["Phụ âm xát"]], ["/ʃ/ she · /tʃ/ chair · /dʒ/ job", ["Phụ âm xát"]], ["cats /s/ · dogs /z/ · buses /ɪz/", ["Đuôi -s, -ed"]], ["worked /t/ · played /d/ · wanted /ɪd/", ["Đuôi -s, -ed"]], ["REcord / reCORD", ["Trọng âm"]], ["eduCAtion · ecoNOmic", ["Trọng âm"]], ["pick it up · did you", ["Nối âm"]], ["gonna · wanna · flap t", ["Nối âm"]], ["I can SWIM in the POOL", ["Nhịp câu"]], ["/tə/ /ən/ /əv/ dạng yếu", ["Nhịp câu"]], ["Are you ready? ↗", ["Ngữ điệu"]], ["What's your name? ↘", ["Ngữ điệu"]]];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];
GRAMMAR.quiz["ipa"] = { pool: POOL, types: TYPES, game: {title:"Đoán nhóm âm",desc:"60 giây. Thấy âm hoặc hiện tượng, chọn đúng nhóm",prompt:"Thuộc nhóm nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(c)}</span>`,name:c=>c,bestKey:"ipaRushBest"} };
})();
