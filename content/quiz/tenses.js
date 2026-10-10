/* content/quiz/tenses.js: practice questions and game for this module.
   Single exercise type: 101 context sentences drawn from 21 short
   VSTEP Writing Task 1 (report/letter) and Task 2 (essay) style
   passages, covering all 12 tenses. Each item carries one or two lead
   sentences for context, so the blank must be solved by reading the
   paragraph, not by spotting an isolated keyword. Wrong answers can be
   retried (retry:true) instead of being revealed immediately. */
(() => {
// BANK keyed by tense code (ps/pas/pc/pp/ppc/pac/pap/papc/fs/fc/fp/fpc —
// see CONTEXT_LOG.md §4.2 for why this module uses TN/CODES instead of
// arbitrary refs). Schema conversion only: every one of the 101 items
// below is unchanged, just regrouped by tense instead of sitting in one
// long narrative-ordered array.
const BANK = {
 pas: [
  ["Climate change has become one of the most pressing challenges of the twenty-first century. Scientists ___ (first / warn) governments about rising global temperatures as early as the 1980s.","first / warn",["first warned"],"Mốc thời gian xác định (as early as the 1980s): quá khứ đơn."],
  ["Rapid urbanization has transformed many Southeast Asian cities over the past two decades. In 2005, the municipal government ___ (launch) its first metro line to ease road congestion.","launch",["launched"],"Mốc năm cụ thể (2005): quá khứ đơn."],
  ["The COVID-19 pandemic forced millions of students worldwide to adapt to online learning almost overnight. Many universities ___ (switch) entirely to remote instruction within just a few weeks in early 2020.","switch",["switched"],"Mốc thời gian xác định (early 2020): quá khứ đơn."],
  ["Several studies have linked excessive screen time to rising anxiety rates among teenagers. When the first smartphone-addiction clinics opened in 2013, few experts ___ (anticipate) how widespread the problem would become.","anticipate",["anticipated"],"Hai việc cùng xảy ra ở một mốc quá khứ, không nhấn mạnh quá trình: quá khứ đơn."],
  ["Plastic waste has accumulated in the world's oceans at an alarming rate. A landmark study ___ (estimate) in 2015 that eight million tonnes of plastic enter the ocean every year.","estimate",["estimated"],"Mốc năm cụ thể (2015): quá khứ đơn."],
  ["The country's birth rate has declined steadily over the past thirty years. The government ___ (introduce) generous childcare subsidies back in 2003 to counter the trend.","introduce",["introduced"],"Mốc năm cụ thể (2003): quá khứ đơn."],
  ["Farmers in arid regions have been experimenting with precision irrigation systems for several years. A severe drought ___ (devastate) crop yields across the region in 2018.","devastate",["devastated"],"Mốc năm cụ thể (2018): quá khứ đơn."],
  ["Workplaces have increasingly recognised the importance of employee wellbeing programmes. A groundbreaking survey ___ (reveal) in 2019 that one in four adults experiences a mental health issue each year.","reveal",["revealed"],"Mốc năm cụ thể (2019): quá khứ đơn."],
  ["Economists have repeatedly warned that automation could displace millions of low-skilled workers. The first fully automated factory ___ (open) in Japan back in the 1980s.","open",["opened"],"Mốc thời gian xác định: quá khứ đơn."],
  ["The global tourism industry suffered a severe blow during the pandemic. International arrivals ___ (plummet) by more than seventy percent in 2020.","plummet",["plummeted"],"Mốc năm cụ thể, số liệu đã xảy ra và kết thúc: quá khứ đơn."],
  ["The chart illustrates the number of daily metro passengers in the capital city between 2015 and 2025. In 2015, daily ridership ___ (stand) at approximately two hundred thousand passengers.","stand",["stood"],"Mốc năm cụ thể trong biểu đồ: quá khứ đơn (văn phong mô tả số liệu VSTEP Task 1)."],
  ["The graph below compares youth unemployment rates in four countries from 2010 to 2023. In 2010, youth unemployment in Country A ___ (peak) at eighteen percent amid the global financial crisis.","peak",["peaked"],"Mốc năm cụ thể: quá khứ đơn."],
  ["Renewable sources typically include solar, wind, and hydroelectric power. In 1995, renewables ___ (account) for barely five percent of total consumption.","account",["accounted"],"Mốc năm cụ thể: quá khứ đơn."],
  ["Our neighbourhood had never experienced such disruptive noise levels before the construction began. Last week, I ___ (contact) the site manager directly, but the problem persists.","contact",["contacted"],"“Last week”: mốc thời gian xác định đã qua, quá khứ đơn."],
  ["Many young people are embracing multiple cultural identities simultaneously. Critics ___ (first / raise) concerns about cultural homogenisation in the early 1990s.","first / raise",["first raised"],"Mốc thời gian xác định: quá khứ đơn."],
  ["Women have made notable progress in entering leadership positions over the past two decades. A landmark law ___ (mandate) equal pay for equal work when it was passed in 1963.","mandate",["mandated"],"Mốc thời gian xác định (1963): quá khứ đơn."],
  ["Several companies are developing reusable rocket technology to reduce launch costs. The first privately funded crewed flight ___ (take) place in 2021.","take",["took"],"Mốc năm cụ thể: quá khứ đơn."],
 ],
 pp: [
  ["Scientists first warned governments about rising global temperatures as early as the 1980s. Since then, carbon dioxide emissions ___ (rise) by more than 40 percent, according to recent reports.","rise",["have risen"],"“Since then” nối một mốc quá khứ với hiện tại: hiện tại hoàn thành."],
  ["Private ride-hailing apps quietly captured a large share of commuters. Despite these investments, traffic congestion ___ (not improve) significantly in the city centre.","not / improve",["has not improved"],"Kết quả tính đến hiện tại, không gắn mốc cụ thể: hiện tại hoàn thành phủ định."],
  ["Researchers have been studying the psychological effects of constant connectivity for over a decade. Several studies ___ (link) excessive screen time to rising rates of anxiety among teenagers.","link",["have linked"],"Kết quả nghiên cứu tính đến hiện tại, không có mốc thời gian cụ thể: hiện tại hoàn thành."],
  ["The shift toward remote work accelerated dramatically after 2020. Many corporations ___ (adopt) hybrid working models that combine office and home-based work.","adopt",["have adopted"],"Xu hướng tính đến hiện tại, không gắn mốc cụ thể: hiện tại hoàn thành."],
  ["Japan currently has one of the highest proportions of elderly citizens in the world. Over the past thirty years, the country's birth rate ___ (decline) steadily.","decline",["has declined"],"“Over the past thirty years” tính đến hiện tại: hiện tại hoàn thành."],
  ["Public attitudes toward mental health have shifted considerably in recent years. Workplaces ___ (increasingly / recognise) the importance of employee wellbeing programmes.","increasingly / recognise",["have increasingly recognised","have increasingly recognized"],"Xu hướng tính đến hiện tại, không có mốc cụ thể: hiện tại hoàn thành."],
  ["Manufacturers worldwide are replacing manual assembly lines with robotic systems. Economists ___ (warn) repeatedly that automation could displace millions of low-skilled workers.","warn",["have warned"],"Hành động lặp lại tính đến hiện tại, không có mốc cụ thể: hiện tại hoàn thành."],
  ["International arrivals plummeted by more than seventy percent in 2020. Since borders reopened, the sector ___ (recover) gradually, though it has not yet reached pre-pandemic levels.","recover",["has recovered"],"“Since borders reopened” tính đến hiện tại, chưa hoàn toàn: hiện tại hoàn thành."],
  ["In 2015, daily ridership stood at approximately two hundred thousand passengers. Over the following decade, that figure ___ (more than double), reaching almost half a million by 2025.","more than double",["has more than doubled"],"Thay đổi tính từ một mốc quá khứ đến kết quả hiện tại: hiện tại hoàn thành."],
  ["Youth unemployment in Country A peaked at eighteen percent in 2010 amid the global financial crisis. Since then, the rate ___ (fall) significantly, though it remains higher than the regional average.","fall",["has fallen"],"“Since then” tính đến hiện tại: hiện tại hoàn thành."],
  ["Dear Committee Members, I would like to propose a community tree-planting initiative for the upcoming spring. Our neighbourhood ___ (lose) a significant amount of green space due to recent construction projects.","lose",["has lost"],"Kết quả tính đến hiện tại, không có mốc cụ thể: hiện tại hoàn thành."],
  ["Globalization has accelerated the exchange of ideas, goods, and culture across borders. English ___ (become) the dominant language of international business and academia.","become",["has become"],"Kết quả/thay đổi tính đến hiện tại: hiện tại hoàn thành."],
  ["Gender equality in the workplace has improved considerably, though significant gaps remain. Women ___ (make) notable progress in entering leadership positions over the past two decades.","make",["have made"],"“over the past two decades” tính đến hiện tại: hiện tại hoàn thành."],
  ["Poachers had been hunting the species to near extinction for years before the reserve was established. Conservation efforts ___ (help) stabilise several endangered populations in recent years.","help",["have helped"],"Kết quả tính đến hiện tại: hiện tại hoàn thành."],
  ["Water scarcity is intensifying in several regions due to climate change and population growth. Reservoir levels in the region ___ (drop) to historic lows over the past five years.","drop",["have dropped"],"“over the past five years” tính đến hiện tại: hiện tại hoàn thành."],
 ],
 pc: [
  ["Carbon dioxide emissions have risen by more than 40 percent since the 1980s. At present, many countries ___ (shift) toward renewable sources such as solar and wind power.","shift",["are shifting"],"“At present” chỉ xu hướng đang diễn ra ở giai đoạn hiện tại: hiện tại tiếp diễn."],
  ["Lawmakers may soon impose stricter regulations on social media companies. Meanwhile, a growing number of parents ___ (limit) their children's daily screen time at home.","limit",["are limiting"],"Xu hướng đang diễn ra ở giai đoạn hiện tại: hiện tại tiếp diễn."],
  ["Many corporations have adopted hybrid working models that combine office and home-based work. Currently, several technology firms ___ (trial) a four-day working week to boost productivity.","trial",["are trialling","are trialing"],"“Currently” chỉ việc đang diễn ra ở giai đoạn hiện tại: hiện tại tiếp diễn."],
  ["Global food demand is expected to rise sharply as the world population grows. Agricultural scientists ___ (develop) drought-resistant crop varieties to address this challenge.","develop",["are developing"],"Việc đang được tiến hành ở giai đoạn hiện tại: hiện tại tiếp diễn."],
  ["Artificial intelligence is transforming industries at an unprecedented pace. Manufacturers worldwide ___ (replace) manual assembly lines with robotic systems.","replace",["are replacing"],"Xu hướng đang diễn ra ở giai đoạn hiện tại: hiện tại tiếp diễn."],
  ["Daily ridership has more than doubled over the past decade, reaching almost half a million passengers. At present, the system ___ (operate) at nearly full capacity during peak hours.","operate",["is operating"],"“At present” mô tả tình trạng đang diễn ra của hệ thống: hiện tại tiếp diễn."],
  ["English has become the dominant language of international business and academia. Meanwhile, many young people ___ (embrace) multiple cultural identities simultaneously.","embrace",["are embracing"],"Xu hướng xã hội đang diễn ra ở giai đoạn hiện tại: hiện tại tiếp diễn."],
  ["A successful space mission typically requires years of meticulous planning. Several companies ___ (develop) reusable rocket technology to reduce launch costs.","develop",["are developing"],"Việc đang được tiến hành ở giai đoạn hiện tại: hiện tại tiếp diễn."],
 ],
 ppc: [
  ["Many countries are shifting toward renewable sources such as solar and wind power. Environmental activists ___ (campaign) for stricter emission regulations for nearly a decade, yet progress remains slow.","campaign",["have been campaigning"],"“for nearly a decade” và kết quả vẫn chưa rõ ràng: nhấn mạnh quá trình kéo dài, hiện tại hoàn thành tiếp diễn."],
  ["Few institutions had invested seriously in digital infrastructure before the pandemic struck. Teachers ___ (adapt) their lesson plans continuously since then, incorporating more interactive tools.","adapt",["have been adapting"],"“since then” + vẫn tiếp diễn: hiện tại hoàn thành tiếp diễn."],
  ["Social media platforms have reshaped the way young people communicate and form relationships. Researchers ___ (study) the psychological effects of constant connectivity for over a decade.","study",["have been studying"],"“for over a decade” nhấn mạnh một quá trình kéo dài: hiện tại hoàn thành tiếp diễn."],
  ["Environmentalists warn that ocean plastic could triple within two decades. Several non-profit organisations ___ (develop) biodegradable alternatives to single-use plastic in recent years.","develop",["have been developing"],"“in recent years” + vẫn đang tiếp diễn: hiện tại hoàn thành tiếp diễn."],
  ["Agricultural scientists are developing drought-resistant crop varieties to address rising food demand. Farmers in arid regions ___ (experiment) with precision irrigation systems for several years now.","experiment",["have been experimenting"],"“for several years now”: hiện tại hoàn thành tiếp diễn, nhấn mạnh quá trình."],
  ["The first fully automated factory opened in Japan back in the 1980s. Since then, engineers ___ (refine) these systems continuously, making them faster and more precise.","refine",["have been refining"],"“Since then” + vẫn tiếp diễn: hiện tại hoàn thành tiếp diễn."],
  ["The tourism sector has recovered gradually since borders reopened, though not yet to pre-pandemic levels. Hotel operators ___ (rebuild) their staff numbers steadily over the past two years.","rebuild",["have been rebuilding"],"“over the past two years” nhấn mạnh quá trình kéo dài: hiện tại hoàn thành tiếp diễn."],
  ["In 1995, renewables accounted for barely five percent of total electricity consumption. Governments ___ (invest) heavily in clean energy infrastructure since the early 2000s.","invest",["have been investing"],"“since the early 2000s” + vẫn tiếp diễn: hiện tại hoàn thành tiếp diễn."],
  ["Dear Sir or Madam, I am writing to express my concern about the ongoing construction noise near my residence. For the past three months, workers ___ (operate) heavy machinery from early morning until late evening.","operate",["have been operating"],"“For the past three months” nhấn mạnh sự phiền toái kéo dài đến hiện tại: hiện tại hoàn thành tiếp diễn."],
  ["Advocacy groups had been campaigning for wage equality for several decades before the law took effect. For the past several years, companies ___ (work) to close the gender pay gap, yet full parity remains elusive.","work",["have been working"],"“For the past several years” + chưa đạt kết quả cuối cùng: hiện tại hoàn thành tiếp diễn, nhấn mạnh quá trình."],
 ],
 fp: [
  ["Progress on emission regulations remains slow despite years of campaigning. If current trends continue, experts predict that average sea levels ___ (rise) by nearly a meter by 2100.","rise",["will have risen"],"“By 2100” là mốc tương lai, việc được dự đoán hoàn thành trước mốc đó: tương lai hoàn thành."],
  ["Scientists had been tracking plastic debris for over a decade by the time of the first UN ocean summit. If recycling rates do not improve, environmentalists warn that ocean plastic ___ (triple) by 2040.","triple",["will have tripled"],"“By 2040”: tương lai hoàn thành."],
  ["Demographers estimate that nearly forty percent of the population will be over sixty-five by 2050. If current trends continue, the working-age population ___ (shrink) by nearly ten million people by 2060.","shrink",["will have shrunk"],"“By 2060”: tương lai hoàn thành."],
  ["Engineers have been refining automated systems continuously since the 1980s. By the end of this decade, AI ___ (likely / eliminate) a significant share of routine clerical jobs.","likely / eliminate",["will likely have eliminated","will have likely eliminated"],"“By the end of this decade”: tương lai hoàn thành."],
  ["The metro system is currently operating at nearly full capacity during peak hours. If current growth continues, planners project that ridership ___ (reach) seven hundred thousand by 2030.","reach",["will have reached"],"“By 2030”: tương lai hoàn thành, dự báo trong báo cáo."],
  ["If approved, volunteers will be planting trees throughout the following Saturday morning. By the end of the project, the group ___ (plant) over two hundred trees across the district.","plant",["will have planted"],"“By the end of the project”: tương lai hoàn thành."],
  ["Companies have been working to close the gender pay gap, yet full parity remains elusive. If current progress continues, researchers estimate that the gender pay gap ___ (close) entirely by 2050.","close",["will have closed"],"“By 2050”: tương lai hoàn thành."],
  ["Several towns had already imposed strict water rationing by the time the plant became operational. If rainfall patterns do not recover, authorities predict that reservoirs ___ (drop) below critical levels by next summer.","drop",["will have dropped"],"“By next summer”: tương lai hoàn thành."],
 ],
 pap: [
  ["In 2005, the municipal government launched its first metro line to ease road congestion. By the time the second line opened in 2015, the first line ___ (already / reach) full capacity.","already / reach",["had already reached","had reached already"],"“By the time” + một mốc quá khứ khác (2015): việc kia đã xảy ra trước đó."],
  ["Many universities switched entirely to remote instruction within just a few weeks in early 2020. Before the pandemic struck, few institutions ___ (invest) seriously in digital infrastructure.","invest",["had invested"],"Trước một mốc quá khứ khác (the pandemic struck): chưa từng xảy ra trước đó."],
  ["Several technology firms are trialling a four-day working week to boost productivity. Before remote work became common, most employees ___ (never / work) from home for more than a few days at a time.","never / work",["had never worked"],"Trước một mốc quá khứ khác (became common): chưa từng xảy ra trước đó."],
  ["The government introduced generous childcare subsidies in 2003 to counter the declining birth rate. By the time those subsidies took effect, the fertility rate ___ (already / fall) below replacement level.","already / fall",["had already fallen","had fallen already"],"Trước một mốc quá khứ khác (took effect): đã xảy ra trước đó."],
  ["Many companies were still stigmatising conversations about mental illness at the time. By the time the pandemic began, several countries ___ (already / launch) national mental health hotlines.","already / launch",["had already launched","had launched already"],"Trước một mốc quá khứ khác (began): đã xảy ra trước đó."],
  ["Country B's unemployment rate continued to climb while Country A's economy was recovering. By 2020, Country B's rate ___ (already / overtake) that of Country A.","already / overtake",["had already overtaken","had overtaken already"],"Trước một mốc quá khứ khác (2020): đã xảy ra trước đó."],
  ["For the past three months, workers have been operating heavy machinery from early morning until late evening. Before the construction began, our neighbourhood ___ (never / experience) such disruptive noise levels.","never / experience",["had never experienced"],"Trước một mốc quá khứ khác (began): chưa từng xảy ra trước đó."],
  ["Critics first raised concerns about cultural homogenisation in the early 1990s. By the time social media platforms emerged, globalization ___ (already / reshape) consumer habits worldwide.","already / reshape",["had already reshaped","had reshaped already"],"Trước một mốc quá khứ khác (emerged): đã xảy ra trước đó."],
  ["The drought worsened unexpectedly while engineers were building a new desalination plant last year. By the time the plant became operational, several towns ___ (already / impose) strict water rationing.","already / impose",["had already imposed","had imposed already"],"Trước một mốc quá khứ khác (became operational): đã xảy ra trước đó."],
 ],
 pac: [
  ["The first line had already reached full capacity by the time the second line opened. While officials ___ (debate) the budget for a third line, private ride-hailing apps quietly captured a large share of commuters.","debate",["were debating"],"Hành động nền đang diễn ra (while), song song với một sự việc khác."],
  ["A landmark study estimated in 2015 that eight million tonnes of plastic enter the ocean every year. While researchers ___ (survey) coastal regions that year, they discovered microplastics in nearly every sample.","survey",["were surveying"],"Hành động đang diễn ra trong một năm cụ thể (while), bị một phát hiện khác chen vào."],
  ["A groundbreaking survey revealed in 2019 that one in four adults experiences a mental health issue each year. At the time the survey was conducted, many companies ___ (still / stigmatise) conversations about mental illness.","still / stigmatise",["were still stigmatising","were still stigmatizing"],"Trạng thái đang diễn ra tại một thời điểm quá khứ cụ thể."],
  ["Hotel operators have been rebuilding their staff numbers steadily over the past two years. While airlines ___ (struggle) to retain pilots in 2021, budget carriers expanded their routes aggressively.","struggle",["were struggling"],"Hành động nền đang diễn ra trong một năm cụ thể (while), song song với một sự kiện khác."],
  ["The unemployment rate in Country A has fallen significantly since 2010, though it remains above the regional average. While Country A's economy ___ (recover) throughout the mid-2010s, Country B's unemployment rate continued to climb.","recover",["was recovering"],"Quá trình đang diễn ra trong một giai đoạn quá khứ (while), song song với xu hướng khác."],
  ["Scientists generally agree that habitat destruction is the leading cause of biodiversity loss. While loggers ___ (clear) vast areas of rainforest in the 1990s, conservationists struggled to document the damage in time.","clear",["were clearing"],"Hành động đang diễn ra trong một giai đoạn quá khứ cụ thể (while), song song với một việc khác."],
  ["Reservoir levels in the region have dropped to historic lows over the past five years. While engineers ___ (build) a new desalination plant last year, the drought worsened unexpectedly.","build",["were building"],"Hành động đang diễn ra trong một năm cụ thể (while), bị một sự kiện khác ảnh hưởng."],
 ],
 fc: [
  ["Traffic congestion has not improved significantly in the city centre despite these investments. This time next year, construction crews ___ (still / work) on the elevated highway downtown.","still / work",["will still be working"],"Một mốc tương lai cụ thể (this time next year), việc đang diễn ra tại mốc đó."],
  ["Most employees had never worked from home for more than a few days before remote work became common. This time next month, employees ___ (still / adjust) to the newly announced hybrid schedule.","still / adjust",["will still be adjusting"],"Mốc tương lai cụ thể, việc đang diễn ra tại mốc đó."],
  ["Budget carriers expanded their routes aggressively while major airlines struggled to retain pilots. By this time next year, tourist numbers ___ (probably / approach) their 2019 peak.","probably / approach",["will probably be approaching"],"Mốc tương lai cụ thể, việc đang tiến gần tới tại mốc đó."],
  ["Research consistently shows that urban greenery improves air quality and mental wellbeing. If approved, volunteers ___ (plant) trees throughout the following Saturday morning.","plant",["will be planting"],"Việc đang diễn ra trong suốt một khoảng thời gian xác định trong tương lai."],
  ["The first privately funded crewed flight took place in 2021. By this time next decade, tourists ___ (regularly / travel) to low-earth orbit for short trips.","regularly / travel",["will regularly be travelling","will regularly be traveling","will be regularly travelling","will be regularly traveling"],"Mốc tương lai xác định, việc đang diễn ra thường xuyên tại giai đoạn đó."],
 ],
 fpc: [
  ["Teachers have been adapting their lesson plans continuously since the pandemic. By the end of this academic year, some teachers ___ (teach) exclusively online for three consecutive years.","teach",["will have been teaching"],"Mốc tương lai + khoảng thời gian kéo dài: tương lai hoàn thành tiếp diễn."],
  ["Employees will still be adjusting to the newly announced hybrid schedule next month. By 2026, some remote employees ___ (work) from home for more than half a decade.","work",["will have been working"],"Mốc tương lai + khoảng thời gian kéo dài: tương lai hoàn thành tiếp diễn."],
  ["Local farmers had been struggling with failed harvests for nearly two years before aid arrived. If the drought continues, by next spring farmers ___ (battle) water shortages for three consecutive years.","battle",["will have been battling"],"Mốc tương lai + khoảng kéo dài: tương lai hoàn thành tiếp diễn."],
  ["Governments have been investing heavily in clean energy infrastructure since the early 2000s. By 2030, several European nations ___ (rely) on renewable sources for over two decades.","rely",["will have been relying"],"Mốc tương lai + khoảng thời gian kéo dài: tương lai hoàn thành tiếp diễn."],
  ["Tourists may soon travel regularly to low-earth orbit for short trips. If funding continues, by 2040 engineers ___ (work) on the Mars colonisation project for nearly two decades.","work",["will have been working"],"Mốc tương lai + khoảng thời gian kéo dài: tương lai hoàn thành tiếp diễn."],
 ],
 ps: [
  ["Online teaching has become a normal part of academic life. Nowadays, most students ___ (expect) at least some digital component in every course they take.","expect",["expect"],"“Nowadays” diễn tả thực trạng chung hiện nay: hiện tại đơn."],
  ["Many developed nations are grappling with rapidly ageing populations. Japan currently ___ (have) one of the highest proportions of elderly citizens in the world.","have",["has"],"Thực trạng chung hiện nay: hiện tại đơn."],
  ["Several countries had already launched national mental health hotlines before the pandemic began. Today, most health insurance plans ___ (cover) at least some form of counselling.","cover",["cover"],"Thực trạng chung hiện nay: hiện tại đơn."],
  ["The table presents the share of renewable energy in national electricity consumption over three decades. Renewable sources typically ___ (include) solar, wind, and hydroelectric power in this context.","include",["include"],"Định nghĩa/thực tế chung, không gắn mốc thời gian cụ thể: hiện tại đơn."],
  ["Our neighbourhood has lost a significant amount of green space due to recent construction projects. Research consistently ___ (show) that urban greenery improves air quality and mental wellbeing.","show",["shows"],"Sự thật/kết luận nghiên cứu chung: hiện tại đơn."],
  ["Biodiversity loss has accelerated sharply over the last fifty years. Scientists generally ___ (agree) that habitat destruction is the leading cause.","agree",["agree"],"Quan điểm/thực tế chung được đa số đồng thuận: hiện tại đơn."],
  ["Private companies have joined government agencies in the race to explore space. A successful mission typically ___ (require) years of meticulous planning.","require",["requires"],"Sự thật chung về quy trình, không gắn mốc cụ thể: hiện tại đơn."],
 ],
 fs: [
  ["Few experts anticipated how widespread smartphone addiction would become. If social media companies fail to introduce stronger safeguards, lawmakers ___ (likely / impose) stricter regulations.","likely / impose",["will likely impose"],"Mệnh đề điều kiện loại 1: mệnh đề chính dùng will cho dự đoán có suy luận."],
  ["The fertility rate had already fallen below replacement level by the time the subsidies took effect. Demographers estimate that by 2050, nearly forty percent of the population ___ (be) over the age of sixty-five.","be",["will be"],"Mô tả một trạng thái sẽ đúng tại một mốc tương lai (không phải việc hoàn tất): tương lai đơn, không dùng hoàn thành."],
  ["AI will likely have eliminated a significant share of routine clerical jobs by the end of this decade. Unless governments invest in retraining programmes, many displaced workers ___ (struggle) to find new employment.","struggle",["will struggle"],"Mệnh đề điều kiện (unless) nói về tương lai: mệnh đề chính dùng will."],
  ["Last week, I contacted the site manager directly, but the problem persists. If this issue is not resolved promptly, I ___ (have) no choice but to file a formal complaint with the local authority.","have",["will have"],"Mệnh đề điều kiện loại 1, mệnh đề chính dùng will cho hệ quả sẽ xảy ra."],
  ["Globalization had already reshaped consumer habits worldwide by the time social media platforms emerged. If this trend continues, traditional local customs ___ (probably / fade) in some urban areas.","probably / fade",["will probably fade"],"Dự đoán dựa trên suy luận: will."],
  ["Conservation efforts have helped stabilise several endangered populations in recent years. Unless stronger protections are enforced, several species ___ (likely / disappear) within a generation.","likely / disappear",["will likely disappear"],"Mệnh đề điều kiện (unless), mệnh đề chính dùng will cho dự đoán."],
 ],
 papc: [
  ["Researchers discovered microplastics in nearly every coastal sample they surveyed. By the time the United Nations held its first ocean summit, scientists ___ (track) plastic debris for over a decade.","track",["had been tracking"],"Trước một mốc quá khứ khác (the summit), một quá trình đã kéo dài hơn một thập kỷ."],
  ["A severe drought devastated crop yields across the region in 2018. By the time international aid arrived, local farmers ___ (struggle) with failed harvests for nearly two years.","struggle",["had been struggling"],"Trước một mốc quá khứ khác (aid arrived), một quá trình kéo dài."],
  ["A landmark law mandated equal pay for equal work when it was passed in 1963. By the time that law took effect, advocacy groups ___ (campaign) for wage equality for several decades.","campaign",["had been campaigning"],"Trước một mốc quá khứ khác (took effect), một quá trình đã kéo dài nhiều thập kỷ."],
  ["Conservationists struggled to document the damage while loggers were clearing vast areas of rainforest in the 1990s. By the time the reserve was established, poachers ___ (hunt) the species to near extinction for years.","hunt",["had been hunting"],"Trước một mốc quá khứ khác (established): một quá trình kéo dài nhiều năm."],
 ],
};

// Điền vào chỗ trống (101): flatten BANK back into the [câu, gợi ý,
// [đáp án], thì, giải thích] tuples the POOL-builder below already
// expects.
const FILL = Object.entries(BANK).flatMap(([c,items]) => items.map(([s,v,acc,ex]) => [s,v,acc,c,ex]));

const TYPES={
 fill:{name:"Điền vào chỗ trống",desc:"Đoạn văn phong cách VSTEP Task 1/2, gõ dạng đúng của động từ"},
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
