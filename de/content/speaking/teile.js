/* de/content/speaking/teile.js
   FW: answer frameworks matching Goethe-Zertifikat exam parts (A1-B2).
   SPK: [topic, question, framework, tense code (nullable), sample
   answer, note (optional, shown when no tense chip applies)]. */
(() => {
const FW={
 VOR:{name:"Name · Herkunft · Wohnort · Sprache",steps:["Tên, tuổi, quốc tịch","Nơi ở, nghề nghiệp/học","Ngôn ngữ, sở thích"],pat:["Ich heiße … und ich komme aus …","Ich wohne in … und ich bin …","Ich spreche … und mein Hobby ist …","Ich lerne Deutsch, weil …"]},
 WFR:{name:"Direkt antworten · Detail · Zusatzinfo",steps:["Trả lời thẳng câu hỏi","Thêm chi tiết cụ thể","Thêm thông tin phụ nếu có"],pat:["Ich … jeden Tag / meistens / oft.","Zum Beispiel …","Das ist, weil …","Normalerweise …"]},
 BIT:{name:"Höfliche Bitte · Grund · Dank",steps:["Đưa ra yêu cầu lịch sự","Nêu lý do (nếu cần)","Cảm ơn"],pat:["Könnten Sie bitte …?","Könntest du …?","Ich hätte gern …","Das wäre sehr nett, danke!"]},
 THM:{name:"Einleitung · Hauptpunkt + Beispiel · Meinung",steps:["Giới thiệu chủ đề","Nêu điểm chính + ví dụ cụ thể","Nêu ý kiến cá nhân"],pat:["Ich möchte über … sprechen.","Ein wichtiger Punkt ist, dass … Zum Beispiel …","Meiner Meinung nach …","Ich finde das …, weil …"]},
 PLN:{name:"Vorschlag · Reaktion · Alternative",steps:["Đưa ra đề xuất","Đồng ý/phản đối có lý do","Đề xuất thay thế nếu cần"],pat:["Wie wäre es, wenn wir …?","Ich schlage vor, dass wir …","Das finde ich gut, aber …","Könnten wir stattdessen …?"]},
 PRA:{name:"Einleitung · Hauptteil (Gliederung) · Schluss",steps:["Giới thiệu chủ đề + dàn ý","Trình bày các điểm chính có ví dụ","Kết luận + ý kiến cá nhân"],pat:["Mein Thema heute ist …","Ich werde über drei Punkte sprechen: erstens …, zweitens …, drittens …","Zum Beispiel …","Zusammenfassend lässt sich sagen, dass …"]},
 FDB:{name:"Positives · Frage · Ergänzung",steps:["Khen điểm tích cực","Đặt câu hỏi","Bổ sung ý kiến"],pat:["Mir hat gut gefallen, dass …","Ich habe eine Frage: …","Ich möchte noch hinzufügen, dass …","Wie siehst du das?"]},
 VTR:{name:"These · Argumente + Beispiele · Fazit",steps:["Đưa ra luận điểm chính","Lập luận có ví dụ cụ thể","Kết luận"],pat:["Ich vertrete die These, dass …","Ein Argument dafür/dagegen ist …","Ein konkretes Beispiel dafür ist …","Zusammenfassend bin ich der Meinung, dass …"]},
 DIS:{name:"Position · Gegenargument · Kompromiss",steps:["Nêu quan điểm rõ ràng","Phản bác lập luận đối phương","Đề xuất giải pháp dung hòa"],pat:["Ich bin der Meinung, dass …","Das sehe ich anders, weil …","Ich verstehe Ihren Punkt, aber …","Vielleicht könnten wir einen Kompromiss finden, indem …"]},
};
// [chủ đề (cấp độ · Teil), câu hỏi, khung, thì chính (code hoặc null), câu trả lời mẫu, ghi chú (khi không có thì chính)]
const SPK=[
 // A1 · Sich vorstellen
 ["A1 · Sich vorstellen","Wie heißen Sie und woher kommen Sie?","VOR","ps","Ich heiße Linh und ich komme aus Vietnam. Ich wohne jetzt in Hanoi und ich bin Studentin. Ich spreche Vietnamesisch und ein bisschen Englisch."],
 ["A1 · Sich vorstellen","Was sind Sie von Beruf?","VOR","ps","Ich bin Studentin. Ich studiere Informatik an der Universität Hanoi. Mein Hobby ist Lesen und ich lerne gern neue Sprachen."],
 ["A1 · Sich vorstellen","Welche Sprachen sprechen Sie?","VOR","ps","Ich spreche Vietnamesisch als Muttersprache und ich lerne Deutsch seit einem Jahr. Ich spreche auch ein bisschen Englisch."],
 ["A1 · Sich vorstellen","Wie alt sind Sie und wo wohnen Sie?","VOR","ps","Ich bin zweiundzwanzig Jahre alt und ich wohne in Hanoi, in Vietnam. Ich wohne mit meiner Familie zusammen."],
 ["A1 · Sich vorstellen","Was ist Ihr Hobby?","VOR","ps","Mein Hobby ist Lesen und Musik hören. Ich lese gern Romane und am Wochenende höre ich gern Musik mit Freunden."],

 // A1 · Informationsaustausch
 ["A1 · Informationsaustausch","Wann stehen Sie normalerweise auf?","WFR","ps","Ich stehe normalerweise um sechs Uhr auf. Zum Beispiel heute bin ich um sechs Uhr aufgestanden. Das ist, weil ich früh zur Arbeit gehen muss."],
 ["A1 · Informationsaustausch","Wo kaufen Sie normalerweise ein?","WFR","ps","Ich kaufe meistens im Supermarkt in meiner Nähe ein. Zum Beispiel gehe ich jeden Freitag dorthin. Das ist praktisch, weil es nicht weit von meiner Wohnung ist."],
 ["A1 · Informationsaustausch","Was machen Sie am Wochenende?","WFR","ps","Am Wochenende treffe ich oft meine Familie. Zum Beispiel essen wir am Sonntag immer zusammen. Das gefällt mir sehr."],
 ["A1 · Informationsaustausch","Wie kommen Sie zur Arbeit oder zur Schule?","WFR","ps","Ich fahre meistens mit dem Motorrad zur Arbeit. Zum Beispiel brauche ich normalerweise zwanzig Minuten. Das ist schneller als mit dem Bus."],
 ["A1 · Informationsaustausch","Was essen Sie gern zum Frühstück?","WFR","ps","Ich esse gern Pho zum Frühstück. Zum Beispiel esse ich das fast jeden Morgen. Das ist, weil es warm und lecker ist."],

 // A1 · Bitte äußern
 ["A1 · Bitte äußern","Sie möchten im Restaurant einen Tisch reservieren. Was sagen Sie?","BIT",null,"Guten Tag, könnten Sie bitte einen Tisch für zwei Personen reservieren? Wir kommen um acht Uhr. Das wäre sehr nett, danke!","Dùng Konjunktiv II (könnten) để yêu cầu nghe lịch sự."],
 ["A1 · Bitte äußern","Sie möchten, dass Ihr Kollege Ihnen hilft. Was sagen Sie?","BIT",null,"Könntest du mir bitte helfen? Ich verstehe diese Aufgabe nicht ganz. Das wäre super, danke dir!","“könntest du” nhẹ nhàng, thân mật hơn “kannst du”."],
 ["A1 · Bitte äußern","Sie sind im Hotel und möchten früher einchecken. Was sagen Sie?","BIT",null,"Entschuldigung, könnte ich bitte schon um zwölf Uhr einchecken? Mein Flug kommt sehr früh an. Vielen Dank für Ihr Verständnis!","Nêu lý do sau yêu cầu giúp tăng khả năng được chấp nhận."],
 ["A1 · Bitte äußern","Sie möchten Ihren Nachbarn bitten, leiser zu sein.","BIT",null,"Entschuldigung, könnten Sie bitte etwas leiser sein? Ich muss morgen früh arbeiten. Das wäre sehr freundlich von Ihnen.","Luôn mở đầu bằng “Entschuldigung” khi yêu cầu điều nhạy cảm."],
 ["A1 · Bitte äußern","Sie möchten im Büro einen freien Tag beantragen.","BIT",null,"Könnte ich bitte nächsten Freitag freinehmen? Ich habe einen wichtigen Termin. Ich wäre Ihnen sehr dankbar.","“Ich wäre Ihnen dankbar” là cách kết thúc yêu cầu rất lịch sự."],

 // A2 · Über ein Thema sprechen
 ["A2 · Über ein Thema sprechen","Sprechen Sie über Ihre Heimatstadt.","THM","ps","Ich möchte über meine Heimatstadt sprechen. Ein wichtiger Punkt ist, dass sie sehr grün und ruhig ist. Zum Beispiel gibt es viele Parks und Seen. Meiner Meinung nach ist das ein großer Vorteil für Familien."],
 ["A2 · Über ein Thema sprechen","Sprechen Sie über Ihre Familie.","THM","ps","Ich möchte über meine Familie sprechen. Ein wichtiger Punkt ist, dass wir sehr eng zusammenhalten. Zum Beispiel essen wir jeden Sonntag gemeinsam. Ich finde das sehr wertvoll, weil es uns verbindet."],
 ["A2 · Über ein Thema sprechen","Sprechen Sie über Ihre Freizeit.","THM","ps","Ich möchte über meine Freizeit sprechen. Ein wichtiger Punkt ist, dass ich gern draußen aktiv bin. Zum Beispiel gehe ich jedes Wochenende schwimmen. Meiner Meinung nach hilft Sport beim Stressabbau."],
 ["A2 · Über ein Thema sprechen","Sprechen Sie über Ihre Schule oder Ihren Arbeitsplatz.","THM","ps","Ich möchte über meine Arbeit sprechen. Ein wichtiger Punkt ist, dass die Atmosphäre sehr freundlich ist. Zum Beispiel helfen sich die Kollegen gegenseitig. Ich finde das sehr motivierend."],
 ["A2 · Über ein Thema sprechen","Sprechen Sie über gesunde Ernährung.","THM","ps","Ich möchte über gesunde Ernährung sprechen. Ein wichtiger Punkt ist, dass viele junge Leute zu viel Fast Food essen. Zum Beispiel esse ich selbst manchmal zu schnell. Meiner Meinung nach sollten wir mehr Gemüse essen."],

 // A2 · Gemeinsam planen
 ["A2 · Gemeinsam planen","Planen Sie mit einem Partner einen gemeinsamen Ausflug.","PLN",null,"Wie wäre es, wenn wir am Samstag an den See fahren? Ich schlage vor, dass wir um neun Uhr starten. Das finde ich gut, aber könnten wir stattdessen den Nachmittag nehmen?","“Wie wäre es, wenn…” dùng Konjunktiv II để đề xuất nhẹ nhàng."],
 ["A2 · Gemeinsam planen","Planen Sie gemeinsam eine Geburtstagsfeier für einen Freund.","PLN",null,"Ich schlage vor, dass wir eine Überraschungsparty organisieren. Wie wäre es, wenn wir alle Freunde einladen? Das ist eine gute Idee, aber wir sollten zuerst einen Ort finden.","Luôn kèm lý do khi phản đối một đề xuất (aber…)."],
 ["A2 · Gemeinsam planen","Planen Sie gemeinsam, wo Sie am Wochenende essen gehen.","PLN",null,"Wie wäre es, wenn wir in das neue vietnamesische Restaurant gehen? Ich schlage vor, dass wir um sieben Uhr reservieren. Das klingt gut, aber könnten wir stattdessen etwas früher gehen?","“Könnten wir stattdessen…” là cách đề xuất thay thế lịch sự."],
 ["A2 · Gemeinsam planen","Planen Sie gemeinsam ein Projekt für die Deutschklasse.","PLN",null,"Ich schlage vor, dass wir ein Poster über unsere Heimatländer machen. Wie wäre es, wenn jeder einen Teil übernimmt? Das finde ich gut, aber wir brauchen noch mehr Zeit."],
 ["A2 · Gemeinsam planen","Planen Sie gemeinsam einen Urlaub.","PLN",null,"Wie wäre es, wenn wir dieses Jahr nach Deutschland reisen? Ich schlage vor, dass wir im Sommer fahren. Das klingt toll, aber könnten wir stattdessen den Herbst wählen, wegen der Preise?"],

 // B1 · Gemeinsam planen
 ["B1 · Gemeinsam planen","Planen Sie mit einem Partner, wie Sie ein Firmenfest organisieren.","PLN",null,"Ich schlage vor, dass wir das Fest im Park organisieren, weil das Wetter im Sommer gut ist. Wie wäre es, wenn wir auch Live-Musik haben? Das finde ich eine gute Idee, aber wir sollten auch an das Budget denken."],
 ["B1 · Gemeinsam planen","Planen Sie mit einem Kollegen, wie Sie ein Problem im Team lösen.","PLN",null,"Ich schlage vor, dass wir ein wöchentliches Meeting einführen. Wie wäre es, wenn jeder seine Aufgaben klar aufschreibt? Das halte ich für sinnvoll, aber wir müssten auch die Kommunikation verbessern."],
 ["B1 · Gemeinsam planen","Planen Sie gemeinsam eine Spendenaktion für eine wohltätige Organisation.","PLN",null,"Ich schlage vor, dass wir einen Flohmarkt organisieren. Wie wäre es, wenn wir auch online um Spenden bitten? Das klingt vielversprechend, aber wir brauchen genug Freiwillige."],
 ["B1 · Gemeinsam planen","Diskutieren Sie, wie Sie als Gruppe ein Umweltproblem in Ihrer Stadt angehen könnten.","PLN",null,"Ich schlage vor, dass wir eine Aufräumaktion am Fluss organisieren. Wie wäre es, wenn wir auch die lokale Zeitung informieren? Das finde ich wichtig, aber wir sollten auch die Stadtverwaltung einbeziehen."],
 ["B1 · Gemeinsam planen","Planen Sie mit einem Partner eine gemeinsame Präsentation.","PLN",null,"Ich schlage vor, dass wir das Thema in zwei Teile aufteilen. Wie wäre es, wenn du die Einleitung übernimmst und ich den Hauptteil? Das klingt fair, aber wir sollten vorher gemeinsam üben."],

 // B1 · Präsentation
 ["B1 · Präsentation","Halten Sie einen kurzen Vortrag über Ihre Zukunftspläne.","PRA","fs","Mein Thema heute ist meine Zukunft. Ich werde über drei Punkte sprechen: erstens meine Karriere, zweitens meine Weiterbildung, und drittens meine persönlichen Ziele. Zum Beispiel möchte ich in den nächsten Jahren Deutsch perfektionieren. Zusammenfassend lässt sich sagen, dass ich motiviert bin, meine Ziele zu erreichen."],
 ["B1 · Präsentation","Halten Sie einen kurzen Vortrag über Vor- und Nachteile des Stadtlebens.","PRA","ps","Mein Thema heute ist das Leben in der Stadt. Ich werde über zwei Punkte sprechen: erstens die Vorteile, zweitens die Nachteile. Zum Beispiel gibt es in der Stadt mehr Arbeitsmöglichkeiten, aber auch mehr Stress. Abschließend möchte ich sagen, dass beides Vor- und Nachteile hat."],
 ["B1 · Präsentation","Halten Sie einen kurzen Vortrag über Social Media.","PRA","pp","Mein Thema heute ist Social Media. Ich werde über drei Punkte sprechen: erstens die Kommunikation, zweitens die Information, und drittens die Risiken. Social Media hat unser Leben stark verändert. Zusammenfassend lässt sich sagen, dass wir Social Media bewusst nutzen sollten."],
 ["B1 · Präsentation","Halten Sie einen kurzen Vortrag über eine Reise, die Sie gemacht haben.","PRA","pf","Mein Thema heute ist meine letzte Reise. Ich werde über drei Punkte sprechen: erstens die Planung, zweitens die Erlebnisse, und drittens mein Fazit. Ich bin letztes Jahr nach Da Nang gereist und habe dort viel Neues erlebt. Zusammenfassend war es eine unvergessliche Reise."],
 ["B1 · Präsentation","Halten Sie einen kurzen Vortrag über Ihre Lieblingsjahreszeit.","PRA","ps","Mein Thema heute ist meine Lieblingsjahreszeit. Ich werde über drei Punkte sprechen: erstens das Wetter, zweitens die Aktivitäten, und drittens meine Gefühle. Der Herbst ist meine Lieblingsjahreszeit, weil das Wetter angenehm ist. Zusammenfassend fühle ich mich im Herbst am wohlsten."],

 // B1 · Feedback geben
 ["B1 · Feedback geben","Ihr Partner hat eine Präsentation über seine Heimatstadt gehalten. Geben Sie Feedback.","FDB",null,"Mir hat gut gefallen, dass die Präsentation sehr klar strukturiert war. Ich habe eine Frage: Wie groß ist die Bevölkerung deiner Stadt? Ich möchte noch hinzufügen, dass die Fotos sehr hilfreich waren."],
 ["B1 · Feedback geben","Ihr Partner hat einen Plan für ein Projekt vorgestellt. Geben Sie Feedback.","FDB",null,"Mir hat gut gefallen, dass der Plan realistisch war. Ich habe eine Frage: Wie viel Zeit brauchen wir insgesamt? Ich möchte noch hinzufügen, dass wir vielleicht mehr Leute brauchen."],
 ["B1 · Feedback geben","Ihr Partner hat über seine Berufswünsche gesprochen. Geben Sie Feedback.","FDB",null,"Mir hat gut gefallen, dass deine Ziele sehr klar waren. Ich habe eine Frage: Wie bereitest du dich darauf vor? Wie siehst du das in fünf Jahren?"],
 ["B1 · Feedback geben","Ihr Partner hat ein Problem im Team beschrieben. Geben Sie Feedback.","FDB",null,"Mir hat gut gefallen, dass du das Problem ehrlich erklärt hast. Ich möchte noch hinzufügen, dass eine bessere Kommunikation helfen könnte. Wie siehst du das?"],
 ["B1 · Feedback geben","Ihr Partner hat einen Vorschlag für die Klasse gemacht. Geben Sie Feedback.","FDB",null,"Mir hat gut gefallen, dass dein Vorschlag kreativ war. Ich habe eine Frage: Wie viel würde das kosten? Ich möchte noch hinzufügen, dass wir auch den Lehrer fragen sollten."],

 // B2 · Vortrag
 ["B2 · Vortrag","Vertreten Sie eine These: Sollten Schulen mehr Online-Unterricht anbieten?","VTR",null,"Ich vertrete die These, dass Online-Unterricht eine sinnvolle Ergänzung ist. Ein Argument dafür ist die Flexibilität für Schüler. Ein konkretes Beispiel dafür ist, dass viele Schüler während der Pandemie erfolgreich online gelernt haben. Zusammenfassend bin ich der Meinung, dass eine Mischung aus beidem ideal wäre."],
 ["B2 · Vortrag","Vertreten Sie eine These: Sind soziale Medien gut oder schlecht für junge Menschen?","VTR",null,"Ich vertrete die These, dass soziale Medien sowohl Vor- als auch Nachteile haben. Ein Argument dagegen ist die Suchtgefahr. Ein konkretes Beispiel dafür ist die steigende Zahl psychischer Probleme bei Jugendlichen. Zusammenfassend bin ich der Meinung, dass ein bewusster Umgang entscheidend ist."],
 ["B2 · Vortrag","Vertreten Sie eine These: Sollte man mehr in erneuerbare Energien investieren?","VTR",null,"Ich vertrete die These, dass Investitionen in erneuerbare Energien notwendig sind. Ein Argument dafür ist der Klimaschutz. Ein konkretes Beispiel dafür ist der Erfolg der Solarenergie in Deutschland. Zusammenfassend bin ich der Meinung, dass wir keine Zeit mehr verlieren dürfen."],
 ["B2 · Vortrag","Vertreten Sie eine These: Ist Homeoffice die Zukunft der Arbeit?","VTR",null,"Ich vertrete die These, dass Homeoffice viele Vorteile bietet. Ein Argument dafür ist die bessere Work-Life-Balance. Ein konkretes Beispiel dafür ist, dass viele Firmen nach der Pandemie produktiver geworden sind. Zusammenfassend bin ich der Meinung, dass ein hybrides Modell am besten funktioniert."],
 ["B2 · Vortrag","Vertreten Sie eine These: Sollte Einwegplastik verboten werden?","VTR",null,"Ich vertrete die These, dass Einwegplastik stark reduziert werden sollte. Ein Argument dafür ist die Umweltverschmutzung. Ein konkretes Beispiel dafür ist die Plastikverschmutzung der Ozeane. Zusammenfassend bin ich der Meinung, dass strengere Gesetze notwendig sind."],

 // B2 · Diskussion
 ["B2 · Diskussion","Ihr Partner sagt: „Geld macht glücklich.“ Reagieren Sie.","DIS",null,"Ich bin der Meinung, dass Geld wichtig ist, aber nicht alles. Das sehe ich anders, weil Studien zeigen, dass Glück auch von Beziehungen abhängt. Ich verstehe Ihren Punkt, aber vielleicht könnten wir sagen, dass Geld eine Grundlage, aber keine Garantie für Glück ist."],
 ["B2 · Diskussion","Ihr Partner sagt: „Künstliche Intelligenz wird viele Jobs ersetzen.“ Reagieren Sie.","DIS",null,"Ich bin der Meinung, dass KI viele Veränderungen bringen wird. Das sehe ich ähnlich, aber ich denke auch, dass neue Berufe entstehen werden. Vielleicht könnten wir einen Kompromiss finden, indem wir sagen, dass Umschulung entscheidend sein wird."],
 ["B2 · Diskussion","Ihr Partner sagt: „Man sollte immer die Wahrheit sagen.“ Reagieren Sie.","DIS",null,"Ich bin der Meinung, dass Ehrlichkeit grundsätzlich wichtig ist. Das sehe ich anders, weil manchmal eine kleine Notlüge Gefühle schützen kann. Ich verstehe Ihren Punkt, aber es kommt wirklich auf die Situation an."],
 ["B2 · Diskussion","Ihr Partner sagt: „Die Globalisierung hat nur Vorteile.“ Reagieren Sie.","DIS",null,"Ich bin der Meinung, dass die Globalisierung viele Chancen bietet. Das sehe ich anders, weil sie auch zu sozialer Ungleichheit führen kann. Vielleicht könnten wir einen Kompromiss finden, indem wir beide Seiten betrachten."],
 ["B2 · Diskussion","Ihr Partner sagt: „Noten in der Schule sollten abgeschafft werden.“ Reagieren Sie.","DIS",null,"Ich bin der Meinung, dass Noten eine gewisse Orientierung bieten. Das sehe ich anders, weil sie auch Druck erzeugen können. Ich verstehe Ihren Punkt, aber vielleicht wäre ein alternatives Bewertungssystem ein guter Kompromiss."],
];

GRAMMAR.speaking = { label: "Goethe-Zertifikat · A1–B2", FW, SPK };
})();
