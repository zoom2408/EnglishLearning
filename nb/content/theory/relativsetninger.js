/* nb/content/theory/relativsetninger.js
   Relativsetninger: som (subjekt), som (objekt, kan utelates), der/
   hvis. Much simpler than German — "som" never declines by case.
   Uses the "xf" diagram mode. */
(() => {
const T = [
 {id:"nb-rel-subjekt",num:"01",en:"som (subjekt)",vi:"som làm chủ ngữ",short:"som + Verb (không bao giờ lược bỏ)",
  core:"<strong>som</strong> là đại từ quan hệ duy nhất trong tiếng Na Uy (không chia theo giống/cách như tiếng Đức!). Khi làm <strong>chủ ngữ</strong> của mệnh đề quan hệ, “som” <strong>không bao giờ</strong> được lược bỏ.",
  forms:[["+","Danh từ, som + Verb (chia)","Mannen **som** bor her, er læreren min."]],
  uses:[["Thay thế chủ ngữ lặp lại ở câu thứ hai","Boka **som** ligger der, er min."]],
  signals:["som (chủ ngữ, bắt buộc)"],
  speak:5,write:5,
  reg:"Khác hẳn tiếng Đức (der/die/das chia theo giống và cách), tiếng Na Uy chỉ dùng DUY NHẤT “som” cho mọi trường hợp — đơn giản hơn rất nhiều.",
  mistake:["Mannen bor her, er læreren min.","Mannen som bor her, er læreren min.","“som” làm chủ ngữ mệnh đề quan hệ không bao giờ được lược bỏ."],
  xf:{la:"Hai câu",lb:"Một câu (som = chủ ngữ)",a:"Mannen er læreren min. Han bor her.",b:"Mannen som bor her, er læreren min.",note:"“han” (chủ ngữ) được thay bằng “som”; vì “som” làm chủ ngữ nên không thể lược bỏ."}},

 {id:"nb-rel-objekt",num:"02",en:"som (objekt)",vi:"som làm tân ngữ (có thể lược bỏ)",short:"(som) + Subjekt + Verb",
  core:"Khi “som” làm <strong>tân ngữ</strong> của mệnh đề quan hệ, nó <strong>có thể lược bỏ</strong> trong khẩu ngữ — đặc biệt phổ biến khi nói.",
  forms:[["Đầy đủ","Danh từ, (som) + S + V","Boka **(som)** jeg leser, er spennende."],["Lược bỏ (khẩu ngữ)","Danh từ, S + V","Boka jeg leser, er spennende."]],
  uses:[["Văn viết trang trọng, giữ som","Filmen **som** vi så i går, var bra."],["Khẩu ngữ tự nhiên, lược bỏ som","Filmen vi så i går, var bra."]],
  signals:["(som) tân ngữ, có thể bỏ"],
  speak:5,write:4,
  reg:"Mẹo nhận biết: nếu sau “som” có ngay một chủ ngữ khác (vd “jeg”, “vi”), đó là tân ngữ và có thể lược bỏ som; nếu sau “som” là động từ ngay, đó là chủ ngữ và PHẢI giữ som.",
  mistake:["Boka jeg som leser, er spennende.","Boka (som) jeg leser, er spennende.","“som” (nếu giữ) phải đứng NGAY sau danh từ, trước chủ ngữ — không đứng giữa chủ ngữ và động từ."],
  xf:{la:"Hai câu",lb:"Một câu (som = tân ngữ, có thể bỏ)",a:"Boka er spennende. Jeg leser den.",b:"Boka (som) jeg leser, er spennende.",note:"“den” (tân ngữ) được thay bằng “som”, có thể lược bỏ hoàn toàn trong khẩu ngữ."}},

 {id:"nb-rel-dershvis",num:"03",en:"der / hvis",vi:"der (nơi chốn) và hvis (sở hữu)",short:"der = nơi chốn · hvis = của ai (sở hữu, trang trọng)",
  core:"<strong>der</strong> dùng thay cho “som” khi nói về <strong>nơi chốn</strong> (ít trang trọng hơn “som” + giới từ); <strong>hvis</strong> diễn tả <strong>sở hữu</strong> (của ai), khá trang trọng, ít dùng trong khẩu ngữ.",
  forms:[["der (nơi chốn)","Danh từ chỉ nơi chốn, der + S + V","Byen **der** jeg bor, er fin."],["hvis (sở hữu)","Danh từ (người), hvis + danh từ + V","Mannen **hvis** bil er rød…"]],
  uses:[["Mô tả nơi chốn tự nhiên hơn “som … i”","Huset **der** jeg vokste opp, er solgt."],["Sở hữu trang trọng (ít dùng khi nói)","Forfatteren **hvis** bok vi leser, er norsk."]],
  signals:["der (nơi chốn)","hvis (sở hữu, trang trọng)"],
  speak:3,write:4,
  reg:"Trong khẩu ngữ, nhiều người Na Uy vẫn dùng “som … der” thay vì “der” riêng (Byen som jeg bor i); “hvis” khá trang trọng, thường chỉ gặp trong văn viết.",
  mistake:["Byen hvis jeg bor, er fin.","Byen der jeg bor, er fin.","Nói về nơi chốn dùng “der”, không dùng “hvis” (vốn chỉ sở hữu)."],
  xf:{la:"Hai câu",lb:"Một câu (der/hvis)",a:"Byen er fin. Jeg bor der.",b:"Byen der jeg bor, er fin.",note:"“der” thay cho cụm chỉ nơi chốn, tự nhiên hơn “som … i byen”."}},
];

registerRows("relativsetninger", T);
GRAMMAR.theory.relativsetninger = { rows: T, first: "nb-rel-subjekt" };
})();
