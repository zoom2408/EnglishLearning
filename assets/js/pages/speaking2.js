/* =====================================================================
   pages/speaking2.js
   Part 2 (VSTEP Solution Discussion): situation card with 3 options,
   prep timer (60s) then speaking timer (120s), model answer on demand.
   Content: content/speaking/part2.js
   ===================================================================== */
(() => {
  const el = document.getElementById("speak2"); if (!el) return;
  const { TEMPLATES, PHRASES, TIPS, SRC, SIT } = GRAMMAR.speaking2;
  const TOPICS = [...new Set(SIT.map(s => s[1]))];
  const PREP = 60, TALK = 120, L = ["A", "B", "C"];
  const S = { topic: "all", src: "all", deck: [], pos: 0, shown: false, done: new Set(), raf: null, phase: "idle" };
  try { S.done = new Set(JSON.parse(localStorage.getItem("spk2Done_v2") || "[]")); } catch (e) {}
  const save = () => { try { localStorage.setItem("spk2Done_v2", JSON.stringify([...S.done])); } catch (e) {} };
  const build = () => { S.deck = shuffle(SIT.map((_, i) => i).filter(i => (S.topic === "all" || SIT[i][1] === S.topic) && (S.src === "all" || (S.src === "real" ? SIT[i][0] !== "SIM" : SIT[i][0] === "SIM")))); S.pos = 0; };

  function shell() {
    el.innerHTML = `
     <div class="sp-top">
       <div class="sp-intro"><span class="lbl">VSTEP · Part 2 · Solution Discussion</span>
         <p>Đề cho một tình huống và 3 giải pháp. Bạn chọn giải pháp tốt nhất, nêu ít nhất 2 lý do, rồi nói ngắn gọn vì sao không chọn 2 giải pháp còn lại. Tiếng Anh B1 đến B2 là đủ, bài mẫu bên dưới viết ở mức đó.</p></div>
       <div class="sp-stats"><span class="pcount" id="p2Done">0<small>/ ${SIT.length} đã luyện</small></span></div>
     </div>
     <div class="p2-how">
       <div><b>1 phút</b><span>chuẩn bị, ghi nhanh ý chính</span></div>
       <div><b>2 phút</b><span>nói, giám khảo sẽ ngắt khi hết giờ</span></div>
       <div><b>2 + 1</b><span>2 lý do cho lựa chọn, 1 ý loại trừ cho mỗi giải pháp còn lại</span></div>
     </div>
     <div class="sp-bar">
       <label class="lbl" for="p2Topic">Chủ đề</label>
       <select id="p2Topic"><option value="all">Tất cả (${SIT.length})</option>${TOPICS.map(t => `<option value="${esc(t)}">${esc(t)} (${SIT.filter(s => s[1] === t).length})</option>`).join("")}</select>
       <label class="lbl" for="p2Src">Nguồn đề</label>
       <select id="p2Src"><option value="all">Tất cả</option><option value="real">Đề từ nguồn thật (${SIT.filter(s => s[0] !== "SIM").length})</option><option value="sim">Đề mô phỏng (${SIT.filter(s => s[0] === "SIM").length})</option></select>
       <button class="link sm" id="p2Shuffle">Xáo lại</button>
     </div>
     <div class="p2-card" id="p2Card"></div>
     <div class="sp-ctrl">
       <button class="link" id="p2Prev">← Trước</button>
       <button class="btn" id="p2Run"><span>Bắt đầu chuẩn bị · 60s</span><i></i></button>
       <button class="btn ghost" id="p2Show">Xem bài mẫu</button>
       <button class="link" id="p2Next">Đề tiếp →</button>
     </div>
     <div class="p2-ref">
       <span class="lbl">Cấu trúc bài nói (chọn 1 khung để luyện)</span>
       <div class="p2-tpl">${TEMPLATES.map(t => `<div><h4>${esc(t.name)}<em>${esc(t.level)}</em></h4><ol>${t.steps.map(s => `<li>${esc(s)}</li>`).join("")}</ol><p>${esc(t.tip)}</p></div>`).join("")}</div>
       <span class="lbl" style="margin-top:28px;display:block">Mẫu câu theo từng phần</span>
       <div class="p2-phr">${PHRASES.map(g => `<div><h4>${esc(g.t)}</h4><ul class="pats">${g.p.map(p => `<li>${esc(p)}</li>`).join("")}</ul></div>`).join("")}</div>
       <span class="lbl" style="margin-top:28px;display:block">Lưu ý khi thi</span>
       <ul class="p2-tips">${TIPS.map(t => `<li>${esc(t)}</li>`).join("")}</ul>
       <p class="small">Nguồn: cấu trúc đề từ ULIS-VNU (vstep.vnu.edu.vn), yêu cầu bài nói từ ghi chú của Đại học Duy Tân, 3 template từ E1 Tutoring. 1 phút chuẩn bị và 2 phút nói theo ZIM, PrepEdu và tài liệu của 14e2itutor. Trang chính thức của ULIS-VNU không ghi giờ cho từng part, nên bạn hãy đối chiếu với thông báo của đơn vị tổ chức thi. Đề gắn "Nguồn thật" được lấy từ các trang luyện thi, tài liệu trường và đề thí sinh báo lại sau kỳ thi 03/2024 (Văn Lang, Sư phạm TP.HCM, Cần Thơ, Kinh tế TP.HCM). Câu hỏi phụ (follow-up) của giám khảo thuộc Part 3, không phải Part 2. Bài mẫu do tôi tự viết ở mức B1 đến B2, chưa có người bản ngữ duyệt, và ngắn hơn 2 phút nói thật, nên hãy thêm ví dụ riêng của bạn.</p>
     </div>`;
    enhanceSelects(el);
    $("#p2Topic").onchange = e => { S.topic = e.target.value; build(); render(1); };
    $("#p2Src").onchange = e => { S.src = e.target.value; build(); render(1); };
    $("#p2Shuffle").onclick = () => { build(); render(1); };
    $("#p2Prev").onclick = () => move(-1);
    $("#p2Next").onclick = () => move(1);
    $("#p2Show").onclick = toggleShow;
    $("#p2Run").onclick = run;
  }
  function upd() { $("#p2Done").innerHTML = `${S.done.size}<small>/ ${SIT.length} đã luyện</small>`; }
  function render(dir) {
    stop();
    if (typeof stopSay === "function") stopSay();
    const i = S.deck[S.pos], [sk, topic, sit, opts, q, pick, notes, lvl, sample] = SIT[S.deck[S.pos]], sr = SRC[sk];
    S.shown = false;
    const c = $("#p2Card");
    c.className = "p2-card" + (dir ? (dir > 0 ? " in-next" : " in-prev") : "");
    c.innerHTML = `
      <div class="fmeta"><span>${esc(topic)}</span><span>${String(S.pos + 1).padStart(2, "0")} / ${S.deck.length}</span></div>
      <p class="p2-sit">${esc(sit)}</p>
      <ul class="p2-opts">${opts.map((o, k) => `<li><b>${L[k]}</b><span>${esc(o)}</span></li>`).join("")}</ul>
      <p class="p2-q">${esc(q)}${sayBtn(sit + " " + opts.map((o, k) => L[k] + ". " + o).join(". ") + ". " + q)}</p>
      <p class="p2-src"><span class="p2-tag${sk === "SIM" ? " sim" : ""}">${sk === "SIM" ? "Mô phỏng" : "Nguồn thật"}</span> ${sr.url ? `<a href="${esc(sr.url)}" target="_blank" rel="noopener">${esc(sr.name)}</a>` : esc(sr.name)}<small> · ${esc(sr.kind)}</small></p>
      <div class="p2-ans" id="p2Ans" hidden>
        <span class="lbl">Ý tưởng nhanh cho phút chuẩn bị (ưu | nhược)</span>
        <ul class="p2-notes">${notes.map((n, k) => `<li><b>${L[k]}${k === pick ? " ✓" : ""}</b><span>${esc(n)}</span></li>`).join("")}</ul>
        <span class="lbl" style="margin-top:16px;display:block">Bài mẫu · chọn ${L[pick]} · mức ${esc(lvl)} · bạn có thể chọn phương án khác</span>
        ${sample.split("\n\n").map((p, k) => `<div class="p2-part"><em>${["Mở bài", "Thân bài", "Kết bài"][k] || ""}</em><p>${esc(p)}</p></div>`).join("")}
        <p>${sayBtn(sample)}${sayBtn(sample, sample, true)}</p>
      </div>
      <div class="fmeta" style="margin-top:14px"><span></span><button class="donebtn" id="p2Mark" aria-pressed="${S.done.has(i)}">${S.done.has(i) ? "✓ Đã luyện" : "Đánh dấu đã luyện"}</button></div>`;
    $("#p2Mark").onclick = e => { S.done.has(i) ? S.done.delete(i) : S.done.add(i); save(); upd(); e.currentTarget.setAttribute("aria-pressed", S.done.has(i)); e.currentTarget.textContent = S.done.has(i) ? "✓ Đã luyện" : "Đánh dấu đã luyện"; };
    $("#p2Show").textContent = "Xem bài mẫu";
    upd();
  }
  function toggleShow() {
    S.shown = !S.shown;
    $("#p2Ans").hidden = !S.shown;
    $("#p2Show").textContent = S.shown ? "Ẩn bài mẫu" : "Xem bài mẫu";
    if (S.shown) stop();
  }
  function move(d) { S.pos = (S.pos + d + S.deck.length) % S.deck.length; render(d); }
  function run() { S.phase === "idle" ? countdown("prep") : stop(); }
  function countdown(phase) {
    const b = $("#p2Run"), total = phase === "prep" ? PREP : TALK, end = performance.now() + total * 1000;
    S.phase = phase; b.classList.add("running"); b.classList.remove("over");
    const step = () => {
      const left = Math.max(0, end - performance.now());
      b.querySelector("span").textContent = (phase === "prep" ? "Chuẩn bị · " : "Đang nói · ") + Math.ceil(left / 1000) + "s";
      b.querySelector("i").style.width = (left / (total * 10)) + "%";
      if (left <= 0) {
        if (phase === "prep") { countdown("talk"); return; }
        S.raf = null; S.phase = "idle"; b.classList.remove("running"); b.classList.add("over");
        b.querySelector("span").textContent = "Hết giờ · xem bài mẫu để so sánh"; return;
      }
      S.raf = requestAnimationFrame(step);
    };
    if (S.raf) cancelAnimationFrame(S.raf);
    S.raf = requestAnimationFrame(step);
  }
  function stop() {
    if (S.raf) cancelAnimationFrame(S.raf); S.raf = null; S.phase = "idle";
    const b = $("#p2Run"); if (b) { b.classList.remove("running", "over"); b.querySelector("span").textContent = "Bắt đầu chuẩn bị · 60s"; b.querySelector("i").style.width = "0"; }
  }
  document.addEventListener("keydown", e => {
    const v = document.getElementById("view-speak2"); if (!v || v.hidden || e.target.matches("input,select,textarea")) return;
    if (e.key === " ") { e.preventDefault(); toggleShow(); }
    else if (e.key === "ArrowRight") move(1);
    else if (e.key === "ArrowLeft") move(-1);
  });
  shell(); build(); render(0);
})();
