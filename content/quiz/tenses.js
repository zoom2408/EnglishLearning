/* content/quiz/tenses.js: practice questions and game for this module.
   Single exercise type: context sentences at an advanced (HSG) level,
   type the correct form of the verb in brackets. Wrong answers can be
   retried (retry:true) instead of being revealed immediately. */
(() => {
// Điền vào chỗ trống (28): [câu, gợi ý, [đáp án chấp nhận], thì, giải thích]
const FILL=[
 ["A seasoned negotiator rarely ___ (reveal) their true intentions until the final stage of a deal.","reveal",["reveals"],"ps","Chủ ngữ số ít + rarely (trạng từ tần suất): hiện tại đơn, thêm s."],
 ["Photosynthesis ___ (occur) when plants convert sunlight into chemical energy.","occur",["occurs"],"ps","Quy luật khoa học, sự thật hiển nhiên: hiện tại đơn."],
 ["The committee is reviewing dozens of applications, so please be patient while the shortlist ___ (take shape).","take shape",["is taking shape"],"pc","Việc đang hình thành ngay trong lúc nói, song song với vế đang diễn ra kia."],
 ["Owing to the renovation, the school ___ (operate) out of a temporary building this term.","operate",["is operating"],"pc","Tình huống tạm thời quanh hiện tại, giới hạn trong “this term”."],
 ["Despite repeated warnings from environmentalists, deforestation ___ (not slow down) in the region.","not / slow down",["has not slowed down"],"pp","Kết quả tính đến hiện tại, không có mốc thời gian cụ thể nào được nhắc tới."],
 ["The research team ___ (publish) three papers on climate resilience so far this year.","publish",["has published"],"pp","“so far this year” và đếm số lượng tính đến hiện tại: hiện tại hoàn thành."],
 ["Local authorities ___ (negotiate) with the factory owners for months, yet no agreement has been reached.","negotiate",["have been negotiating","have negotiated"],"ppc","“for months” nhấn mạnh một quá trình kéo dài chưa đi đến kết quả."],
 ["Her eyes are bloodshot because she ___ (stare) at the screen for hours without a break.","stare",["has been staring","has stared"],"ppc","Nguyên nhân là một quá trình kéo dài, dấu hiệu còn thấy rõ ở hiện tại."],
 ["The two nations ___ (sign) a landmark treaty in 1954 that redrew their shared border.","sign",["signed"],"pas","“in 1954” là mốc thời gian xác định đã kết thúc: quá khứ đơn."],
 ["Scientists initially ___ (dismiss) the hypothesis before later evidence vindicated it.","dismiss",["dismissed"],"pas","Chuỗi sự việc đã xảy ra và kết thúc trong quá khứ, không liên quan đến hiện tại."],
 ["While the delegates ___ (debate) the new policy, protesters gathered outside the building.","debate",["were debating"],"pac","Hành động nền đang diễn ra thì một sự việc khác xảy ra song song (while)."],
 ["At the exact moment the alarm went off, half the staff ___ (still / work) overtime.","still / work",["were still working"],"pac","Đang diễn ra tại một thời điểm cụ thể trong quá khứ, bị việc khác (alarm went off) chen vào."],
 ["By the time investigators arrived at the scene, the perpetrators ___ (already / flee) the country.","already / flee",["had already fled"],"pap","Xảy ra và hoàn tất trước một mốc quá khứ khác (investigators arrived)."],
 ["She admitted that she ___ (never / read) the original manuscript before writing her critique.","never / read",["had never read"],"pap","Việc chưa từng xảy ra tính đến trước một hành động quá khứ khác (writing her critique)."],
 ["The athlete collapsed because she ___ (push) her body beyond its limits for weeks leading up to the race.","push",["had been pushing"],"papc","Một quá trình kéo dài trước một kết quả trong quá khứ (collapsed)."],
 ["By the time the negotiations finally collapsed, both sides ___ (argue) over the same clause for nearly a year.","argue",["had been arguing"],"papc","“By the time” + “for nearly a year”: nhấn mạnh độ dài kéo dài đến trước mốc quá khứ đó."],
 ["Given current migration trends, analysts believe urban populations ___ (continue) to rise well into the next decade.","continue",["will continue"],"fs","Dự đoán dựa trên suy luận, lập luận chung chung (không phải bằng chứng trước mắt): will."],
 ["If the printer jams again, I ___ (sort) it out myself rather than waiting for IT support.","sort",["will sort","'ll sort"],"fs","Mệnh đề điều kiện loại 1: mệnh đề chính dùng will cho quyết định ngay lúc nói."],
 ["This time next year, graduates from this programme ___ (probably / work) in research labs across the country.","probably / work",["will probably be working"],"fc","“This time next year” là một mốc tương lai, việc đang diễn ra tại mốc đó."],
 ["At this time tomorrow, the committee ___ (still / deliberate) over the final proposal.","still / deliberate",["will still be deliberating"],"fc","Đang diễn ra tại một thời điểm xác định trong tương lai."],
 ["By the time this report reaches your desk, the market ___ (already / shift) significantly.","already / shift",["will have already shifted"],"fp","“By the time” + mốc tương lai: việc đã hoàn thành trước mốc đó."],
 ["She is confident that by December, her startup ___ (secure) its second round of funding.","secure",["will have secured"],"fp","“By + mốc tương lai”: tương lai hoàn thành."],
 ["By the time she retires next spring, Dr. Linh ___ (teach) at this university for over three decades.","teach",["will have been teaching"],"fpc","“By + mốc tương lai” + khoảng thời gian kéo dài: tương lai hoàn thành tiếp diễn."],
 ["By next June, the construction crew ___ (work) on this bridge for exactly two years.","work",["will have been working"],"fpc","Nhấn mạnh độ dài công việc tính đến một mốc tương lai cụ thể."],
 ["Whatever the outcome ___ (be), the board has already committed to the new strategy.","be",["is"],"ps","Mệnh đề nhượng bộ với whatever nói về tương lai vẫn dùng hiện tại đơn, giống mệnh đề if/when."],
 ["Unless the funding ___ (arrive) by Friday, the project will have to be postponed.","arrive",["arrives"],"ps","Sau unless/if nói về tương lai, dùng hiện tại đơn ở mệnh đề điều kiện."],
 ["I ___ (meet) the ambassador once, back when he was still a junior diplomat.","meet",["met"],"pas","Có mốc quá khứ xác định (“back when he was still a junior diplomat”) nên dùng quá khứ đơn, không phải hiện tại hoàn thành."],
 ["This is the first time the committee ___ (consider) such a controversial amendment.","consider",["has considered"],"pp","Cấu trúc “This is the first time” luôn đi với hiện tại hoàn thành."],
];

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Câu ngữ cảnh nâng cao, gõ dạng đúng của động từ"},
};
const POOL=[];
FILL.forEach(([s,v,acc,c,ex])=>POOL.push({type:"fill",kind:"input",retry:true,prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Gõ phần điền vào chỗ trống.`,accept:acc,plain:acc[0],tense:TN[c],expl:ex}));
POOL.forEach(q=>q.ref=q.tense);

const RUSH=[
 ["usually",["ps"]],["often",["ps"]],["always",["ps"]],["sometimes",["ps"]],["seldom",["ps"]],["every day",["ps"]],["once a week",["ps"]],["on Mondays",["ps"]],["twice a month",["ps"]],
 ["never",["ps","pp"],"never chỉ thói quen (hiện tại đơn) hoặc chưa từng tính đến nay (hiện tại hoàn thành)."],
 ["now",["pc"]],["right now",["pc"]],["at the moment",["pc"]],["Look!",["pc"]],["Listen!",["pc"]],["currently",["pc"]],["at present",["pc"]],
 ["just",["pp"]],["already",["pp"]],["yet",["pp"]],["ever",["pp"]],["so far",["pp"]],["up to now",["pp"]],["this is the first time",["pp"]],
 ["recently",["pp","ppc"],"recently đi được với cả hiện tại hoàn thành và HTHT tiếp diễn."],["lately",["pp","ppc"],"lately đi được với cả hai thì hoàn thành của hiện tại."],
 ["since 2020",["pp","ppc"],"since + mốc dùng cho hiện tại hoàn thành hoặc HTHT tiếp diễn."],["for three years (đến nay)",["pp","ppc"],"for + khoảng thời gian kéo dài đến nay."],
 ["all day (đến giờ vẫn làm)",["ppc"]],
 ["yesterday",["pas"]],["last night",["pas"]],["two days ago",["pas"]],["in 1999",["pas"]],["last summer",["pas"]],["when I was a child",["pas"]],
 ["at this time yesterday",["pac"]],["at 8 p.m. last night",["pac"]],["while (đang… thì…, quá khứ)",["pac"]],
 ["by the time he arrived",["pap","papc"],"By the time + quá khứ đơn: việc kia đã xong hoặc đã kéo dài trước đó."],["by the end of last year",["pap"]],
 ["for 2 hours before he called",["papc"]],
 ["tomorrow",["fs"]],["next week",["fs"]],["soon",["fs"]],["I think…",["fs"]],["probably",["fs"]],["I promise",["fs"]],
 ["this time tomorrow",["fc"]],["at 9 a.m. next Monday",["fc"]],["this time next week",["fc"]],
 ["by 2030",["fp"]],["by the end of next year",["fp"]],["by the time you arrive",["fp"]],
 ["by next June … for 5 years",["fpc"]],
];

GRAMMAR.quiz["tenses"] = { pool: POOL, types: TYPES, game: {title:"Đoán thì nhanh",desc:"60 giây. Thấy usually, often, never… chọn thì đúng càng nhanh càng tốt",prompt:"Thấy dấu hiệu này, dùng thì nào?",items:RUSH,all:CODES,label:c=>tLabel(TN[c]),name:c=>byId[TN[c]].vi,bestKey:"rushBest"} };
})();
