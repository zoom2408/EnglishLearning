/* content/speaking/part2.js
   VSTEP Speaking Part 2 (Solution Discussion): framework, phrases, sources.
   Task: a situation + 3 suggested solutions. Prepare 1 minute, speak about 2 minutes:
   choose the best solution, give at least 2 reasons, briefly say why not the other two.
   Item data lives in part2_a.js ... part2_e.js (pushed onto SIT), row format:
   [source key, category, situation, [A,B,C], question, model pick (0-2),
    [note A, note B, note C] as "pros | cons", model level (B1/B2), model answer
    (opening \n\n body \n\n closing)] */
(() => {
const TEMPLATES=[
 {name:"Template 1 · Tuần tự A, B, C",level:"Dễ nhớ nhất",steps:[
   "Mở bài: diễn đạt lại tình huống bằng lời của bạn, nêu lựa chọn.",
   "Thân bài: nói ưu và nhược của A, rồi B, rồi C.",
   "Kết bài: nhắc lại lựa chọn."],
  tip:"Hợp khi bạn cần nói trơn tru, ít bị rối. Mỗi phương án 3 đến 4 câu."},
 {name:"Template 2 · Loại trừ rồi chốt",level:"Trung bình",steps:[
   "Mở bài: như Template 1.",
   "Thân bài: ưu rồi nhược của B và C (loại trừ), rồi ưu của A, rồi nhược của A kèm cách khắc phục.",
   "Kết bài: nhắc lại lựa chọn."],
  tip:"Gây ấn tượng vì bạn tự phản biện được lựa chọn của mình."},
 {name:"Template 3 · Theo tiêu chí",level:"Nâng cao",steps:[
   "Mở bài: như Template 1.",
   "Thân bài: 2 tiêu chí (ví dụ: chi phí, sự thoải mái). Mỗi tiêu chí: A tốt ở đâu, B và C kém ở đâu.",
   "Kết bài: thừa nhận điểm yếu của A rồi nhắc lại lựa chọn."],
  tip:"Mạch lạc và logic nhất, hợp với mục tiêu B2 trở lên."}
];
const PHRASES=[
 {t:"Mở bài, nêu lựa chọn",p:["In this situation, I would go for …","Out of the three options, I'd choose … because …","If I were in this situation, I'd definitely pick …","Personally, I think … is the best solution."]},
 {t:"Nêu lý do",p:["The main reason is that …","One advantage of … is that …","What's more, …","Another point worth mentioning is …","This would help … to …"]},
 {t:"Loại trừ phương án còn lại",p:["As for …, I don't think it's a good idea because …","… might be an option, but the problem is that …","I'm not in favor of … since …","Compared with …, … is far less …","… sounds attractive, however, …"]},
 {t:"Nối ý, so sánh",p:["On the other hand, …","In contrast, …","Similarly, …","That said, …","Whereas …, … is …"]},
 {t:"Kết bài",p:["All things considered, I'd still choose …","To sum up, … is the most suitable option.","For these reasons, I believe … is the best solution.","That's why my final choice is …"]},
 {t:"Trả lời câu hỏi mở rộng",p:["Well, it depends on …","To be honest, I've never thought about it, but I'd say …","I tend to think that …","In my opinion, …","Let me think. I'd say …"]}
];
const TIPS=[
 "Nói rõ phương án đã chọn ngay từ đầu, đừng để giám khảo phải đoán.",
 "Trong 1 phút chuẩn bị, chọn phương án bạn có nhiều từ vựng nhất để nói, không nhất thiết là phương án bạn thích nhất.",
 "Ghi nhanh 2 lý do cho phương án chọn và 1 nhược điểm cho mỗi phương án còn lại.",
 "Diễn đạt lại tình huống bằng từ của bạn (paraphrase) thay vì đọc lại đề.",
 "Dùng từ nối giữa các ý, đừng chỉ liệt kê. Nói rõ vì sao, kèm ví dụ ngắn.",
 "Nhắc đến cả hai phương án còn lại, nhưng ngắn gọn."
];
const SRC={
 ZIM:{name:"ZIM Academy",url:"https://zim.vn/speaking-vstep-part-2",kind:"Đề mẫu từ trung tâm luyện thi"},
 PREP:{name:"PrepEdu",url:"https://prepedu.com/vi/blog/vstep-speaking-part-2",kind:"Đề mẫu từ trung tâm luyện thi"},
 LTV:{name:"luyenthivstep.vn",url:"https://luyenthivstep.vn/cam-nang-vstep/top-10-de-kinh-dien-vstep-speaking-part-2",kind:"Đề kinh điển (trung tâm luyện thi)"},
 OTV:{name:"onthivstep.vn, 20 đề thường gặp",url:"https://onthivstep.vn/tong-hop-20-de-thi-vstep-speaking-part-2-thuong-gap-part-2-",kind:"Đề thường gặp (trung tâm luyện thi)"},
 OTV2:{name:"onthivstep.vn, chủ đề thường gặp",url:"https://onthivstep.vn/top-cac-chu-de-speaking-part-2-thuong-gap-",kind:"Đề thường gặp (trung tâm luyện thi)"},
 REV_VL:{name:"Review đề thi 03/2024, ĐH Văn Lang",url:"https://onthivstep.vn/tong-hop-review-de-thi-vstep-thang-3-nam-2024",kind:"Đề thí sinh báo lại sau kỳ thi"},
 REV_SP:{name:"Review đề thi 03/2024, ĐH Sư phạm TP.HCM",url:"https://onthivstep.vn/tong-hop-review-de-thi-vstep-thang-3-nam-2024",kind:"Đề thí sinh báo lại sau kỳ thi"},
 REV_CT:{name:"Review đề thi 03/2024, ĐH Cần Thơ",url:"https://onthivstep.vn/tong-hop-review-de-thi-vstep-thang-3-nam-2024",kind:"Đề thí sinh báo lại sau kỳ thi"},
 REV_UEH:{name:"Review đề thi 03/2024, ĐH Kinh tế TP.HCM",url:"https://onthivstep.vn/tong-hop-review-de-thi-vstep-thang-3-nam-2024",kind:"Đề thí sinh báo lại sau kỳ thi"},
 HOU:{name:"HOU, Suggested topics for VSTEP speaking",url:"https://khoaluat.hou.edu.vn/wp-content/uploads/2016/08/Ni_dung_n_tp_Speaking_-_VSTEP.pdf",kind:"Tài liệu ôn tập của trường"},
 E1:{name:"E1 Tutoring",url:"https://e1tutoring.wordpress.com/2015/11/08/suggested-templates-for-vstep-speaking-part-2-solution-discussion/",kind:"Đề mẫu từ giảng viên"},
 TAB1:{name:"tienganhb1.com",url:"https://tienganhb1.com/Luyen-noi-Vstep-phan-2-Thao-luan-giai-phap",kind:"Đề mẫu từ trung tâm luyện thi"},
 SIM:{name:"Đề mô phỏng",url:"",kind:"Viết theo đúng dạng đề thật, không phải đề đã công bố"}
};
const SIT=[];
GRAMMAR.speaking2 = { TEMPLATES, PHRASES, TIPS, SRC, SIT };
})();
