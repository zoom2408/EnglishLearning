/* nb/content/speaking/deler.js
   FW: answer frameworks matching Norskprøven (muntlig) exam parts
   (A1-B2). SPK: [topic, question, framework, tense code (nullable),
   sample answer, note (optional, shown when no tense chip applies)]. */
(() => {
const FW={
 PRE:{name:"Navn · Bosted · Språk · Yrke",steps:["Tên, tuổi, quốc tịch","Nơi ở, nghề nghiệp/học","Ngôn ngữ, sở thích"],pat:["Jeg heter … og jeg kommer fra …","Jeg bor i … og jeg er …","Jeg snakker … og hobbyen min er …","Jeg lærer norsk fordi …"]},
 SVR:{name:"Svar direkte · Detalj · Tilleggsinfo",steps:["Trả lời thẳng câu hỏi","Thêm chi tiết cụ thể","Thêm thông tin phụ nếu có"],pat:["Jeg … hver dag / som regel / ofte.","For eksempel …","Det er fordi …","Vanligvis …"]},
 BON:{name:"Høflig forespørsel · Grunn · Takk",steps:["Đưa ra yêu cầu lịch sự","Nêu lý do (nếu cần)","Cảm ơn"],pat:["Kunne du/dere vennligst …?","Kan vi …?","Jeg vil gjerne ha …","Det hadde vært fint, takk!"]},
 TEM:{name:"Innledning · Hovedpunkt + eksempel · Mening",steps:["Giới thiệu chủ đề","Nêu điểm chính + ví dụ cụ thể","Nêu ý kiến cá nhân"],pat:["Jeg vil gjerne snakke om …","Et viktig poeng er at … For eksempel …","Etter min mening …","Jeg synes det er …, fordi …"]},
 PLA:{name:"Forslag · Reaksjon · Alternativ",steps:["Đưa ra đề xuất","Đồng ý/phản đối có lý do","Đề xuất thay thế nếu cần"],pat:["Hva om vi …?","Jeg foreslår at vi …","Det synes jeg er bra, men …","Kan vi heller …?"]},
 PRS:{name:"Innledning · Hoveddel (struktur) · Avslutning",steps:["Giới thiệu chủ đề + dàn ý","Trình bày các điểm chính có ví dụ","Kết luận + ý kiến cá nhân"],pat:["Temaet mitt i dag er …","Jeg skal snakke om tre punkter: først …, deretter …, til slutt …","For eksempel …","Oppsummert kan man si at …"]},
 TIL:{name:"Positivt · Spørsmål · Tillegg",steps:["Khen điểm tích cực","Đặt câu hỏi","Bổ sung ý kiến"],pat:["Jeg syntes det var bra at …","Jeg har et spørsmål: …","Jeg vil gjerne legge til at …","Hva tenker du om det?"]},
 TAL:{name:"Påstand · Argumenter + eksempler · Konklusjon",steps:["Đưa ra luận điểm chính","Lập luận có ví dụ cụ thể","Kết luận"],pat:["Jeg mener at …","Et argument for/mot dette er …","Et konkret eksempel på dette er …","Oppsummert mener jeg at …"]},
 DIS:{name:"Standpunkt · Motargument · Kompromiss",steps:["Nêu quan điểm rõ ràng","Phản bác lập luận đối phương","Đề xuất giải pháp dung hòa"],pat:["Jeg mener at …","Det ser jeg annerledes på, fordi …","Jeg forstår poenget ditt, men …","Kanskje vi kan finne en mellomløsning ved å …"]},
};
// [chủ đề (cấp độ · del), câu hỏi, khung, thì chính (code hoặc null), câu trả lời mẫu, ghi chú (khi không có thì chính)]
const SPK=[
 // A1 · Presentere seg selv
 ["A1 · Presentere seg selv","Hva heter du, og hvor kommer du fra?","PRE","ps","Jeg heter Linh og jeg kommer fra Vietnam. Jeg bor nå i Hanoi og jeg er student. Jeg snakker vietnamesisk og litt engelsk."],
 ["A1 · Presentere seg selv","Hva jobber du med?","PRE","ps","Jeg er student. Jeg studerer informatikk ved universitetet i Hanoi. Hobbyen min er å lese, og jeg liker å lære nye språk."],
 ["A1 · Presentere seg selv","Hvilke språk snakker du?","PRE","ps","Jeg snakker vietnamesisk som morsmål, og jeg har lært norsk i ett år. Jeg snakker også litt engelsk."],
 ["A1 · Presentere seg selv","Hvor gammel er du, og hvor bor du?","PRE","ps","Jeg er tjueto år gammel og jeg bor i Hanoi, i Vietnam. Jeg bor sammen med familien min."],
 ["A1 · Presentere seg selv","Hva er hobbyen din?","PRE","ps","Hobbyen min er å lese og høre på musikk. Jeg liker å lese romaner, og i helgene hører jeg gjerne på musikk med venner."],

 // A1 · Svare på spørsmål
 ["A1 · Svare på spørsmål","Når står du vanligvis opp?","SVR","ps","Jeg står vanligvis opp klokka seks. For eksempel i dag sto jeg opp klokka seks. Det er fordi jeg må gå tidlig på jobb."],
 ["A1 · Svare på spørsmål","Hvor handler du vanligvis?","SVR","ps","Jeg handler som regel i butikken i nærheten. For eksempel går jeg dit hver fredag. Det er praktisk fordi det ikke er langt fra leiligheten min."],
 ["A1 · Svare på spørsmål","Hva gjør du i helgene?","SVR","ps","I helgene treffer jeg ofte familien min. For eksempel spiser vi alltid sammen på søndager. Det liker jeg veldig godt."],
 ["A1 · Svare på spørsmål","Hvordan kommer du deg til jobb eller skole?","SVR","ps","Jeg kjører som regel moped til jobb. For eksempel bruker jeg vanligvis tjue minutter. Det er raskere enn med buss."],
 ["A1 · Svare på spørsmål","Hva liker du å spise til frokost?","SVR","ps","Jeg liker å spise pho til frokost. For eksempel spiser jeg det nesten hver morgen. Det er fordi det er varmt og godt."],

 // A1 · Høflig be om noe
 ["A1 · Høflig be om noe","Du vil bestille bord på en restaurant. Hva sier du?","BON",null,"God dag, kunne dere vennligst reservere et bord til to personer? Vi kommer klokka åtte. Det hadde vært fint, takk!","Dùng “kunne” (preteritum, lịch sự) để yêu cầu nghe nhã nhặn."],
 ["A1 · Høflig be om noe","Du vil at en kollega skal hjelpe deg. Hva sier du?","BON",null,"Kunne du vennligst hjelpe meg? Jeg forstår ikke helt denne oppgaven. Det hadde vært supert, takk!","“Kunne du…” nhẹ nhàng, thân mật hơn “Kan du…”."],
 ["A1 · Høflig be om noe","Du er på hotell og vil sjekke inn tidligere. Hva sier du?","BON",null,"Unnskyld, kunne jeg sjekke inn allerede klokka tolv? Flyet mitt lander veldig tidlig. Tusen takk for forståelsen!","Nêu lý do sau yêu cầu giúp tăng khả năng được chấp nhận."],
 ["A1 · Høflig be om noe","Du vil be naboen om å være litt stillere.","BON",null,"Unnskyld, kunne du vennligst være litt stillere? Jeg må jobbe tidlig i morgen. Det hadde vært veldig snilt av deg.","Luôn mở đầu bằng “Unnskyld” khi yêu cầu điều nhạy cảm."],
 ["A1 · Høflig be om noe","Du vil søke om en fridag på jobben.","BON",null,"Kunne jeg få fri neste fredag? Jeg har en viktig avtale. Jeg hadde satt stor pris på det.","“Jeg hadde satt pris på det” là cách kết thúc yêu cầu rất lịch sự."],

 // A2 · Snakke om et tema
 ["A2 · Snakke om et tema","Fortell om hjembyen din.","TEM","ps","Jeg vil gjerne snakke om hjembyen min. Et viktig poeng er at den er veldig grønn og rolig. For eksempel er det mange parker og innsjøer der. Etter min mening er det en stor fordel for familier."],
 ["A2 · Snakke om et tema","Fortell om familien din.","TEM","ps","Jeg vil gjerne snakke om familien min. Et viktig poeng er at vi holder tett sammen. For eksempel spiser vi middag sammen hver søndag. Jeg synes det er veldig verdifullt fordi det knytter oss sammen."],
 ["A2 · Snakke om et tema","Fortell om fritiden din.","TEM","ps","Jeg vil gjerne snakke om fritiden min. Et viktig poeng er at jeg liker å være aktiv utendørs. For eksempel går jeg svømming hver helg. Etter min mening hjelper trening mot stress."],
 ["A2 · Snakke om et tema","Fortell om skolen eller arbeidsplassen din.","TEM","ps","Jeg vil gjerne snakke om jobben min. Et viktig poeng er at stemningen er veldig vennlig. For eksempel hjelper kollegene hverandre. Jeg synes det er veldig motiverende."],
 ["A2 · Snakke om et tema","Fortell om sunt kosthold.","TEM","ps","Jeg vil gjerne snakke om sunt kosthold. Et viktig poeng er at mange unge spiser for mye hurtigmat. For eksempel spiser jeg selv noen ganger for raskt. Etter min mening bør vi spise mer grønnsaker."],

 // A2 · Planlegge sammen
 ["A2 · Planlegge sammen","Planlegg en felles utflukt med en partner.","PLA",null,"Hva om vi drar til sjøen på lørdag? Jeg foreslår at vi starter klokka ni. Det synes jeg er bra, men kan vi heller ta ettermiddagen?","“Hva om vi…?” là cách đề xuất nhẹ nhàng, phổ biến."],
 ["A2 · Planlegge sammen","Planlegg en bursdagsfeiring for en venn sammen.","PLA",null,"Jeg foreslår at vi lager en overraskelsesfest. Hva om vi inviterer alle vennene? Det er en god idé, men vi bør finne et sted først."],
 ["A2 · Planlegge sammen","Planlegg sammen hvor dere skal spise i helgen.","PLA",null,"Hva om vi drar til den nye vietnamesiske restauranten? Jeg foreslår at vi bestiller bord klokka sju. Det høres bra ut, men kan vi heller gå litt tidligere?"],
 ["A2 · Planlegge sammen","Planlegg et prosjekt for norskklassen sammen.","PLA",null,"Jeg foreslår at vi lager en plakat om hjemlandene våre. Hva om hver person tar en del? Det synes jeg er bra, men vi trenger mer tid."],
 ["A2 · Planlegge sammen","Planlegg en ferie sammen.","PLA",null,"Hva om vi reiser til Norge i år? Jeg foreslår at vi drar om sommeren. Det høres flott ut, men kan vi heller velge høsten, på grunn av prisene?"],

 // B1 · Planlegge sammen
 ["B1 · Planlegge sammen","Diskuter med en partner hvordan dere organiserer en bedriftsfest.","PLA",null,"Jeg foreslår at vi arrangerer festen i parken, fordi været er fint om sommeren. Hva om vi også har livemusikk? Det synes jeg er en god idé, men vi bør også tenke på budsjettet."],
 ["B1 · Planlegge sammen","Planlegg med en kollega hvordan dere løser et problem i teamet.","PLA",null,"Jeg foreslår at vi innfører et ukentlig møte. Hva om alle skriver ned oppgavene sine tydelig? Det tror jeg er fornuftig, men vi må også forbedre kommunikasjonen."],
 ["B1 · Planlegge sammen","Planlegg sammen en innsamlingsaksjon for en veldedig organisasjon.","PLA",null,"Jeg foreslår at vi arrangerer et loppemarked. Hva om vi også ber om donasjoner på nett? Det høres lovende ut, men vi trenger nok frivillige."],
 ["B1 · Planlegge sammen","Diskuter hvordan dere som gruppe kan løse et miljøproblem i byen.","PLA",null,"Jeg foreslår at vi arrangerer en ryddeaksjon langs elven. Hva om vi også informerer den lokale avisen? Det synes jeg er viktig, men vi bør også involvere kommunen."],
 ["B1 · Planlegge sammen","Planlegg en felles presentasjon med en partner.","PLA",null,"Jeg foreslår at vi deler temaet i to deler. Hva om du tar innledningen og jeg tar hoveddelen? Det høres rettferdig ut, men vi bør øve sammen først."],

 // B1 · Presentasjon
 ["B1 · Presentasjon","Hold en kort presentasjon om fremtidsplanene dine.","PRS","fs","Temaet mitt i dag er fremtiden min. Jeg skal snakke om tre punkter: først karrieren min, deretter videreutdanning, og til slutt personlige mål. For eksempel ønsker jeg å perfeksjonere norsken min de neste årene. Oppsummert kan man si at jeg er motivert til å nå målene mine."],
 ["B1 · Presentasjon","Hold en kort presentasjon om fordeler og ulemper med bylivet.","PRS","ps","Temaet mitt i dag er livet i byen. Jeg skal snakke om to punkter: først fordelene, deretter ulempene. For eksempel er det flere jobbmuligheter i byen, men også mer stress. Oppsummert har begge deler fordeler og ulemper."],
 ["B1 · Presentasjon","Hold en kort presentasjon om sosiale medier.","PRS","pf","Temaet mitt i dag er sosiale medier. Jeg skal snakke om tre punkter: først kommunikasjon, deretter informasjon, og til slutt risikoer. Sosiale medier har endret livene våre mye. Oppsummert bør vi bruke sosiale medier bevisst."],
 ["B1 · Presentasjon","Hold en kort presentasjon om en reise du har tatt.","PRS","pf","Temaet mitt i dag er den siste reisen min. Jeg skal snakke om tre punkter: først planleggingen, deretter opplevelsene, og til slutt konklusjonen. Jeg reiste til Da Nang i fjor og opplevde mye nytt der. Oppsummert var det en uforglemmelig reise."],
 ["B1 · Presentasjon","Hold en kort presentasjon om favorittårstiden din.","PRS","ps","Temaet mitt i dag er favorittårstiden min. Jeg skal snakke om tre punkter: først været, deretter aktivitetene, og til slutt følelsene mine. Høsten er favorittårstiden min fordi været er behagelig. Oppsummert føler jeg meg best om høsten."],

 // B1 · Gi tilbakemelding
 ["B1 · Gi tilbakemelding","Partneren din har nettopp holdt en presentasjon om hjembyen sin. Gi tilbakemelding.","TIL",null,"Jeg syntes det var bra at presentasjonen var tydelig strukturert. Jeg har et spørsmål: Hvor stor er befolkningen i byen din? Jeg vil gjerne legge til at bildene var nyttige."],
 ["B1 · Gi tilbakemelding","Partneren din har presentert en plan for et prosjekt. Gi tilbakemelding.","TIL",null,"Jeg syntes det var bra at planen var realistisk. Jeg har et spørsmål: Hvor mye tid trenger vi totalt? Jeg vil gjerne legge til at vi kanskje trenger flere folk."],
 ["B1 · Gi tilbakemelding","Partneren din har snakket om yrkesønskene sine. Gi tilbakemelding.","TIL",null,"Jeg syntes det var bra at målene dine var tydelige. Jeg har et spørsmål: Hvordan forbereder du deg til det? Hva tenker du om fem år?"],
 ["B1 · Gi tilbakemelding","Partneren din har beskrevet et problem i teamet. Gi tilbakemelding.","TIL",null,"Jeg syntes det var bra at du forklarte problemet ærlig. Jeg vil gjerne legge til at bedre kommunikasjon kunne hjelpe. Hva tenker du om det?"],
 ["B1 · Gi tilbakemelding","Partneren din har kommet med et forslag til klassen. Gi tilbakemelding.","TIL",null,"Jeg syntes det var bra at forslaget ditt var kreativt. Jeg har et spørsmål: Hvor mye ville det koste? Jeg vil gjerne legge til at vi også bør spørre læreren."],

 // B2 · Holde en tale
 ["B2 · Holde en tale","Ta stilling: Bør skoler tilby mer nettundervisning?","TAL",null,"Jeg mener at nettundervisning er et fornuftig supplement. Et argument for dette er fleksibiliteten for elever. Et konkret eksempel på dette er at mange elever lærte effektivt på nett under pandemien. Oppsummert mener jeg at en blanding av begge deler ville vært ideelt."],
 ["B2 · Holde en tale","Ta stilling: Er sosiale medier bra eller dårlig for unge mennesker?","TAL",null,"Jeg mener at sosiale medier har både fordeler og ulemper. Et argument mot dette er faren for avhengighet. Et konkret eksempel på dette er det økende antallet psykiske problemer blant ungdom. Oppsummert mener jeg at bevisst bruk er avgjørende."],
 ["B2 · Holde en tale","Ta stilling: Bør man investere mer i fornybar energi?","TAL",null,"Jeg mener at investeringer i fornybar energi er nødvendig. Et argument for dette er klimahensyn. Et konkret eksempel på dette er suksessen til solenergi i Norge. Oppsummert mener jeg at vi ikke har tid å miste."],
 ["B2 · Holde en tale","Ta stilling: Er hjemmekontor fremtidens arbeidsform?","TAL",null,"Jeg mener at hjemmekontor har mange fordeler. Et argument for dette er bedre balanse mellom jobb og fritid. Et konkret eksempel på dette er at mange bedrifter ble mer produktive etter pandemien. Oppsummert mener jeg at en hybrid modell fungerer best."],
 ["B2 · Holde en tale","Ta stilling: Bør engangsplast forbys?","TAL",null,"Jeg mener at engangsplast bør reduseres kraftig. Et argument for dette er forurensning. Et konkret eksempel på dette er plastforurensningen i havet. Oppsummert mener jeg at strengere lover er nødvendig."],

 // B2 · Diskusjon
 ["B2 · Diskusjon","Partneren din sier: «Penger gjør deg lykkelig.» Reager.","DIS",null,"Jeg mener at penger er viktig, men ikke alt. Det ser jeg annerledes på, fordi studier viser at lykke også avhenger av relasjoner. Jeg forstår poenget ditt, men kanskje vi kan si at penger er et grunnlag, ikke en garanti for lykke."],
 ["B2 · Diskusjon","Partneren din sier: «Kunstig intelligens vil erstatte mange jobber.» Reager.","DIS",null,"Jeg mener at KI vil skape mange endringer. Det ser jeg ganske likt på, men jeg tror også at nye yrker vil oppstå. Kanskje vi kan finne en mellomløsning ved å si at omskolering blir avgjørende."],
 ["B2 · Diskusjon","Partneren din sier: «Man bør alltid si sannheten.» Reager.","DIS",null,"Jeg mener at ærlighet grunnleggende sett er viktig. Det ser jeg annerledes på, fordi en liten hvit løgn noen ganger kan beskytte følelser. Jeg forstår poenget ditt, men det kommer virkelig an på situasjonen."],
 ["B2 · Diskusjon","Partneren din sier: «Globalisering har bare fordeler.» Reager.","DIS",null,"Jeg mener at globalisering gir mange muligheter. Det ser jeg annerledes på, fordi den også kan føre til sosial ulikhet. Kanskje vi kan finne en mellomløsning ved å se på begge sider."],
 ["B2 · Diskusjon","Partneren din sier: «Karakterer i skolen bør avskaffes.» Reager.","DIS",null,"Jeg mener at karakterer gir en viss retning. Det ser jeg annerledes på, fordi de også kan skape press. Jeg forstår poenget ditt, men kanskje et alternativt vurderingssystem hadde vært en god mellomløsning."],
];

GRAMMAR.speaking = { label: "Norskprøven · A1–B2", FW, SPK };
})();
