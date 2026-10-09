/* nb/content/modules.js
   Site map for the Norwegian Bokmål track. Add a module here, then
   create its page, its theory file and its quiz file (see
   /nb/content/theory and /nb/content/quiz). Mirrors the English track. */
const SITE_BRAND = "Ngữ pháp tiếng Na Uy";
const MODULES = [
 {
  "key": "verbtider",
  "num": "01",
  "page": "verbtider.html",
  "title": "5 thì (Verbtider)",
  "en": "Verbtider",
  "prefix": "",
  "desc": "Trục thời gian, cấu trúc, dấu hiệu, Perfektum và Preteritum",
  "meta": "5 bài · 20 câu"
 },
 {
  "key": "substantiv",
  "num": "02",
  "page": "substantiv.html",
  "title": "Substantiv & Artikler",
  "en": "Substantiv",
  "prefix": "nb-sub-",
  "desc": "3 giống: hankjønn, hunkjønn, intetkjønn",
  "meta": "3 bài · 12 câu"
 },
 {
  "key": "pronomen",
  "num": "03",
  "page": "pronomen.html",
  "title": "Pronomen",
  "en": "Pronomen",
  "prefix": "nb-pron-",
  "desc": "Đại từ nhân xưng, sở hữu, phản thân",
  "meta": "3 bài · 15 câu"
 },
 {
  "key": "modalverb",
  "num": "04",
  "page": "modalverb.html",
  "title": "Modalverb",
  "en": "Modalverb",
  "prefix": "nb-modal-",
  "desc": "kan, får, må, bør, vil/skal",
  "meta": "5 bài · 14 câu"
 },
 {
  "key": "preposisjoner",
  "num": "05",
  "page": "preposisjoner.html",
  "title": "Preposisjoner",
  "en": "Preposisjoner",
  "prefix": "nb-prep-",
  "desc": "Thời gian, vị trí, hướng di chuyển",
  "meta": "4 bài · 15 câu"
 },
 {
  "key": "adjektiv",
  "num": "06",
  "page": "adjektiv.html",
  "title": "Adjektiv",
  "en": "Adjektiv",
  "prefix": "nb-adj-",
  "desc": "Ubestemt, bestemt, komparasjon",
  "meta": "3 bài · 12 câu"
 },
 {
  "key": "setningsbygning",
  "num": "07",
  "page": "setningsbygning.html",
  "title": "Setningsbygning",
  "en": "Setningsbygning",
  "prefix": "nb-satz-",
  "desc": "Quy tắc V2, quy tắc BIFF, fordi/for, at, selv om",
  "meta": "5 bài · 15 câu"
 },
 {
  "key": "betingelsessetninger",
  "num": "08",
  "page": "betingelsessetninger.html",
  "title": "Betingelsessetninger",
  "en": "Betingelse",
  "prefix": "nb-kond-",
  "desc": "Loại 1, 2, 3: hvis + presens/preteritum/pluskvamperfektum",
  "meta": "3 bài · 12 câu"
 },
 {
  "key": "onskesetninger",
  "num": "09",
  "page": "onskesetninger.html",
  "title": "Ønskesetninger",
  "en": "Ønske",
  "prefix": "nb-onske-",
  "desc": "Jeg skulle ønske…, ước hiện tại, quá khứ, Hvis bare…!",
  "meta": "3 bài · 12 câu"
 },
 {
  "key": "passiv",
  "num": "10",
  "page": "passiv.html",
  "title": "Passiv",
  "en": "Passiv",
  "prefix": "nb-pass-",
  "desc": "S-passiv, bli-passiv, modalverb, man",
  "meta": "4 bài · 12 câu"
 },
 {
  "key": "relativsetninger",
  "num": "11",
  "page": "relativsetninger.html",
  "title": "Relativsetninger",
  "en": "Relativ",
  "prefix": "nb-rel-",
  "desc": "som (chủ ngữ/tân ngữ), der, hvis",
  "meta": "3 bài · 9 câu"
 },
 {
  "key": "indirekte-tale",
  "num": "12",
  "page": "indirekte-tale.html",
  "title": "Indirekte tale",
  "en": "Indirekte tale",
  "prefix": "nb-ind-",
  "desc": "Câu tường thuật: at, om, Hv-spørsmål, skulle",
  "meta": "4 bài · 9 câu"
 },
 {
  "key": "topikalisering",
  "num": "13",
  "page": "topikalisering.html",
  "title": "Topikalisering & Betoning",
  "en": "Betoning",
  "prefix": "nb-emph-",
  "desc": "Forfelt, Det-Platzhalter, Ikke bare…men også, ikke/ingen",
  "meta": "4 bài · 12 câu"
 },
 {
  "key": "vanlige-feil",
  "num": "14",
  "page": "vanlige-feil.html",
  "title": "Vanlige feil",
  "en": "Feil",
  "prefix": "nb-feil-",
  "desc": "BIFF-regelen, si/fortelle/snakke, i/på, for/siden, stor forbokstav",
  "meta": "5 bài · 12 câu"
 },
 {
  "key": "speaking",
  "num": "15",
  "page": "speaking.html",
  "title": "Snakke",
  "en": "Norskprøven A1–B2",
  "prefix": "",
  "desc": "50 câu hỏi theo cấu trúc đề thi nói Norskprøven",
  "meta": "50 thẻ · 10 chủ đề"
 },
 {
  "key": "ordforrad",
  "num": "16",
  "page": "ordforrad.html",
  "title": "Ordforråd",
  "en": "Từ vựng",
  "prefix": "",
  "desc": "Danh từ, động từ, cụm từ cơ bản A1-B2 theo 10 chủ đề",
  "meta": "120 từ · 10 chủ đề"
 }
];
