/* nb/content/quiz/onskesetninger.js: practice questions for
   Ønskesetninger. Single exercise type: context sentences, type the
   correctly conjugated verb. Wrong answers can be retried
   (retry:true). */
(() => {
const FILL=[
 // Ønske i nåtid
 ["Jeg skulle ønske jeg ___ (ha) mer tid til hobbyer.","ha",["hadde"],"nb-onske-naatid","Ước hiện tại: preteritum của ha là hadde."],
 ["Jeg skulle ønske jeg ___ (være) på stranda nå.","være",["var"],"nb-onske-naatid","Ước hiện tại: preteritum của være là var."],
 ["Jeg skulle ønske det ___ (ikke / regne) så mye.","ikke / regne",["ikke regnet"],"nb-onske-naatid","Preteritum của regne: regnet."],
 ["Jeg skulle ønske du ___ (høre) på meg noen ganger.","høre",["hørte"],"nb-onske-naatid","Preteritum của høre: hørte."],

 // Ønske i fortid
 ["Jeg skulle ønske jeg ___ (lære) mer til eksamen.","lære",["hadde lært"],"nb-onske-fortid","Tiếc nuối quá khứ: hadde + partisipp (lært)."],
 ["Jeg skulle ønske jeg ___ (komme) tidligere.","komme",["hadde kommet"],"nb-onske-fortid","Tiếc nuối quá khứ: hadde + partisipp (kommet)."],
 ["Jeg skulle ønske jeg ikke ___ (si) det.","si",["hadde sagt"],"nb-onske-fortid","Tiếc nuối quá khứ: hadde + partisipp (sagt)."],
 ["Jeg skulle ønske vi ___ (bli) lenger der.","bli",["hadde blitt"],"nb-onske-fortid","Tiếc nuối quá khứ: hadde + partisipp (blitt)."],

 // Hvis bare…!
 ["Hvis bare jeg ___ (ha) mer tid!","ha",["hadde"],"nb-onske-hvisbare","Cảm thán ước hiện tại: preteritum hadde."],
 ["Hvis bare jeg ___ (kunne) fly!","kunne",["kunne"],"nb-onske-hvisbare","Cảm thán với modal verb: preteritum kunne."],
 ["Hvis bare jeg ___ (høre) etter!","høre",["hadde hørt"],"nb-onske-hvisbare","Cảm thán tiếc nuối quá khứ: hadde + partisipp."],
 ["Hvis bare du ___ (komme) tidligere!","komme",["hadde kommet"],"nb-onske-hvisbare","Cảm thán tiếc nuối quá khứ: hadde + partisipp."],
];

const TYPES={
 fill:{name:"Fyll inn",desc:"Câu ngữ cảnh, gõ đúng dạng động từ ước muốn"},
};
const POOL=[];
FILL.forEach(([s,v,acc,ref,ex])=>POOL.push({type:"fill",kind:"input",retry:true,prompt:fmt(s.replace(/ \(.+?\)/,"")),hint:`Gợi ý: <b>${esc(v)}</b>. Gõ đúng dạng đã chia.`,accept:acc,plain:acc[0],ref,expl:ex}));

const RUSH=[
 ["Jeg skulle ønske … (preteritum)",["nb-onske-naatid"]],
 ["Jeg skulle ønske … hadde + partisipp",["nb-onske-fortid"]],
 ["Hvis bare …!",["nb-onske-hvisbare"]],
];
const RALL=[...new Set(RUSH.flatMap(x=>x[1]))];

GRAMMAR.quiz["onskesetninger"] = { pool: POOL, types: TYPES, game: {title:"Hvilken ønsketype?",desc:"60 giây. Thấy dấu hiệu này, chọn đúng loại câu ước",prompt:"Dấu hiệu này thuộc loại nào?",items:RUSH,all:RALL,label:c=>`<span class="tl-vi">${esc(byId[c].vi)}</span><span class="tl-en">${esc(byId[c].en)}</span>`,name:c=>byId[c].vi,bestKey:"onskeRushBest"} };
})();
