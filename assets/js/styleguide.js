/* =====================================================================
   styleguide.js
   Storybook-style design system page.
   - STORIES: one entry per foundation or component. `render(args, ctx)`
     returns the HTML shown in the canvas (an iframe that loads the real
     site CSS) and, for components, also the code snippet.
   - Controls are generated from `args`; Docs from `docs`.
   Add a story by pushing one object into STORIES.
   ===================================================================== */
(function () {
  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const sel = (label, o, d) => ({ t: "select", l: label, o, d });
  const bool = (label, d = false) => ({ t: "bool", l: label, d });
  const text = (label, d) => ({ t: "text", l: label, d });

  const CAT_OPTS = ["lang", "psy", "health"];
  const CAT_ALL = ["lang", "psy", "health", "biz", "tech", "sci", "create"];

  /* ---------------------------------------------------------------
     helpers for foundation stories
  --------------------------------------------------------------- */
  const lum = hex => {
    const m = /^#([0-9a-f]{6})$/i.exec(hex); if (!m) return null;
    const c = [0, 2, 4].map(i => parseInt(m[1].substr(i, 2), 16) / 255).map(v => v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4));
    return .2126 * c[0] + .7152 * c[1] + .0722 * c[2];
  };
  const ratio = (a, b) => { const x = lum(a), y = lum(b); if (x == null || y == null) return null; const [h, l] = x > y ? [x, y] : [y, x]; return (h + .05) / (l + .05); };

  const SWATCHES = [
    ["Neutral", [["--bg", "Nền trang"], ["--fg", "Chữ chính, nút filled"], ["--muted", "Chữ phụ, mô tả"], ["--hair", "Đường kẻ mảnh"], ["--surface", "Nền hover, khối phụ"]]],
    ["Brand", [["--accent", "Điểm nhấn duy nhất: hover nút, focus, số thứ tự"], ["--accent-soft", "Nền badge, trạng thái nhẹ"]]],
    ["Status", [["--ok", "Thành công, đáp án đúng"], ["--ok-soft", "Nền trạng thái thành công"]]],
    ["Category", [["--c-lang", "Ngôn ngữ"], ["--c-psy", "Tâm lý học"], ["--c-health", "Y tế và Dược"], ["--c-sci", "Khoa học"], ["--c-biz", "Kinh doanh"], ["--c-tech", "Công nghệ"], ["--c-create", "Sáng tạo"]]],
  ];

  const TYPE = [
    ["Display", "Học bất kỳ điều gì", "font-size:clamp(42px,5.4vw,72px);font-weight:800;letter-spacing:-.05em;line-height:.98", "clamp(42, 5.4vw, 72) / 800 / -0.05em / 0.98", ".st-h1"],
    ["Page title", "Ngữ pháp.", "font-size:clamp(48px,9vw,104px);font-weight:800;letter-spacing:-.055em;line-height:.86", "clamp(48, 9vw, 104) / 800 / -0.055em / 0.86", ".mast h1"],
    ["Card title", "Nhập môn tâm lý", "font-size:clamp(24px,2.1vw,30px);font-weight:800;letter-spacing:-.04em;line-height:1.05", "clamp(24, 2.1vw, 30) / 800 / -0.04em / 1.05", ".st-name"],
    ["Heading", "12 thì", "font-size:24px;font-weight:700;letter-spacing:-.02em;line-height:1.15", "24 / 700 / -0.02em / 1.15", ".htitle"],
    ["Body", "Mỗi chủ đề có lý thuyết trực quan và luyện tập làm lại khi sai.", "font-size:15px;font-weight:400;line-height:1.55", "15 / 400 / 1.55", "body"],
    ["Small", "Trục thời gian, cấu trúc, dấu hiệu", "font-size:13px;color:var(--muted)", "13 / 400 / muted", ".hen"],
    ["Label", "Nhãn trường", "font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)", "11 / 600 / 0.12em / uppercase", ".lbl"],
    ["Mono", "14 MODULE, VÀO HỌC", "font-family:var(--mono);font-size:12px;font-weight:600;letter-spacing:.05em;text-transform:uppercase", "JetBrains Mono 12 / 600 / 0.05em", ".st-go"],
    ["Condensed", "LEARN", "font-family:'Barlow Condensed',sans-serif;font-size:56px;font-weight:800;line-height:.9", "Barlow Condensed 800 (chỉ dùng cho mosaic)", ".mt-core"],
  ];

  const SPACING = [4, 8, 12, 16, 20, 24, 32, 40, 72];
  const BREAKPOINTS = [["640", "Trò chơi từ vựng: 1 cột"], ["720", "Lưới thẻ landing: 2 cột"], ["760", "Header, module nav, form: thu gọn"], ["900", "Shell của styleguide, nav module 4 cột"], ["1100", "Lưới thẻ landing: 3 cột, hero 2 cột"]];

  const MOTION = [["--ease", "cubic-bezier(.22,.8,.2,1)", "Mặc định: reveal, hover, dropdown"], ["--spring", "cubic-bezier(.34,1.5,.5,1)", "Mũi tên, chuyển động có độ nảy"]];
  const DURATIONS = [["150 đến 200ms", "Đổi màu nền, dropdown"], ["250 đến 350ms", "Hover, đổi panel, padding"], ["450 đến 600ms", "Reveal khi cuộn"], ["900ms", "Đếm số lên"]];

  /* ---------------------------------------------------------------
     stories
  --------------------------------------------------------------- */
  const STORIES = [
    /* ===== FOUNDATIONS ===== */
    {
      id: "colors", group: "Foundations", title: "Colors",
      desc: "Một accent đỏ, bộ trung tính và 7 màu lĩnh vực. Mọi màu là CSS variable, tự đổi theo light và dark.",
      render: (a, ctx) => {
        const bg = ctx.css("--bg");
        return SWATCHES.map(([g, items]) => `
          <h3 class="sgc-h">${g}</h3>
          <div class="sw-grid">${items.map(([v, use]) => {
            const val = ctx.css(v), cat = g === "Category";
            const r = cat ? ratio(val, "#ffffff") : ["--fg", "--muted", "--accent", "--ok"].includes(v) ? ratio(val, bg) : null;
            return `<button type="button" class="sw" data-copy="var(${v})" title="Bấm để copy var(${v})">
              <i style="background:var(${v})"></i>
              <span class="sw-n">${v}</span>
              <span class="sw-v">${esc(val)}${r ? ` · ${r.toFixed(1)}:1 ${cat ? "với chữ trắng" : "với nền"}` : ""}</span>
              <span class="sw-u">${use}</span>
            </button>`;
          }).join("")}</div>`).join("");
      },
      code: () => `/* tokens.css, start.css */\ncolor: var(--fg);\nbackground: var(--surface);\nborder-color: var(--hair);\noutline-color: var(--accent);\n\n/* màu theo lĩnh vực */\n--cat: var(--c-lang);`,
      docs: {
        use: ["Dùng <code>--accent</code> cho đúng một điểm nhấn mỗi vùng: hover nút, focus input, số thứ tự.", "Màu lĩnh vực chỉ dùng để nhận diện danh mục: panel thẻ, chấm chip, ô mosaic.", "Chữ trắng trên màu lĩnh vực đều đạt AA ở dạng chữ lớn hoặc đậm."],
        dont: ["Không hardcode mã hex trong component, luôn dùng variable.", "Không dùng màu lĩnh vực làm màu trạng thái (đúng hoặc sai)."],
        a11y: ["Con số cạnh mỗi swatch là tỉ lệ tương phản so với nền hiện tại.", "Trạng thái không chỉ dựa vào màu, luôn kèm chữ hoặc icon."],
        tokens: ["--bg", "--fg", "--muted", "--hair", "--surface", "--accent", "--accent-soft", "--ok", "--ok-soft", "--c-*"],
        classes: [],
      },
    },
    {
      id: "typography", group: "Foundations", title: "Typography",
      desc: "Be Vietnam Pro cho nội dung, JetBrains Mono cho nhãn và số. Tiêu đề đậm, tracking âm.",
      render: () => `<div class="ty">${TYPE.map(([n, sample, css, spec, cls]) => `
          <div class="ty-r"><div class="ty-m"><b>${n}</b><span>${spec}</span><code>${cls}</code></div><div class="ty-s" style="${css}">${sample}</div></div>`).join("")}</div>`,
      code: () => `font-family: var(--sans);   /* Be Vietnam Pro */\nfont-family: var(--mono);   /* JetBrains Mono */\n\n.st-name {\n  font-size: clamp(24px, 2.1vw, 30px);\n  font-weight: 800;\n  letter-spacing: -.04em;\n}`,
      docs: {
        use: ["Tiêu đề: weight 800, letter-spacing âm 0.04 đến 0.06em, line-height dưới 1.1.", "Nhãn, số thứ tự, CTA dạng chữ hoa: JetBrains Mono, letter-spacing dương.", "Dùng <code>clamp()</code> cho cỡ chữ lớn để không phải thêm breakpoint."],
        dont: ["Không thêm font thứ ba. Barlow Condensed chỉ dành cho chữ LEARN ANYTHING.", "Không dùng gạch ngang dài (em dash) trong chữ giao diện."],
        a11y: ["Cỡ chữ nội dung tối thiểu 13px, nhãn mono tối thiểu 11px.", "Dùng <code>text-wrap: balance</code> cho tiêu đề nhiều dòng."],
        tokens: ["--sans", "--mono"],
        classes: [".st-h1", ".mast h1", ".st-name", ".htitle", ".lbl", ".fhint"],
      },
    },
    {
      id: "layout", group: "Foundations", title: "Layout & spacing",
      desc: "Khung rộng 1180px, lưới 3 cột index, tên, nội dung. Khoảng cách quan sát trong code, chưa có token riêng.",
      render: (a, ctx) => `
        <h3 class="sgc-h">Page wrap</h3>
        <p class="sgc-p">max-width 1180px, padding ngang 24px. Class <code>.wrap</code>.</p>
        <h3 class="sgc-h">Lưới 3 cột <code>--cols</code></h3>
        <div class="grid3"><span>64px · số</span><span>250px · tên</span><span>1fr · nội dung</span></div>
        <p class="sgc-p">${esc(ctx.css("--cols"))}</p>
        <h3 class="sgc-h">Thang khoảng cách (px)</h3>
        <div class="sp">${SPACING.map(n => `<div><i style="width:${n}px;height:${n}px"></i><b>${n}</b></div>`).join("")}</div>
        <h3 class="sgc-h">Breakpoints (px)</h3>
        <table class="tbl"><tbody>${BREAKPOINTS.map(([w, u]) => `<tr><td><code>${w}</code></td><td>${u}</td></tr>`).join("")}</tbody></table>`,
      code: () => `.wrap { max-width: 1180px; margin: 0 auto; padding-inline: 24px; }\n\n@media (min-width: 720px)  { .st-grid { grid-template-columns: repeat(2, 1fr); } }\n@media (min-width: 1100px) { .st-grid { grid-template-columns: repeat(3, 1fr); } }`,
      docs: {
        use: ["Mobile first: viết style gốc cho màn nhỏ, mở rộng bằng <code>min-width</code>.", "Khoảng cách trong thẻ 16 đến 24px, giữa các thẻ 16 đến 20px.", "Mục tiêu chạm tối thiểu 44px chiều cao."],
        dont: ["Không thêm breakpoint mới nếu 5 mốc trên đã đủ.", "Không để trang cuộn ngang ở 375px."],
        a11y: ["Thứ tự DOM trùng thứ tự đọc, không đảo bằng CSS <code>order</code> với nội dung quan trọng."],
        tokens: ["--cols"],
        classes: [".wrap", ".home-grid", ".st-grid"],
      },
    },
    {
      id: "motion", group: "Foundations", title: "Motion",
      desc: "Hai đường cong easing, vài mốc thời lượng. Mọi animation tắt khi người dùng bật reduced motion.",
      render: () => `
        <h3 class="sgc-h">Easing <button type="button" class="link sm" data-replay>Chạy lại</button></h3>
        <div class="mo">${MOTION.map(([v, c, u]) => `<div class="mo-r"><div class="mo-m"><b>${v}</b><code>${c}</code><span>${u}</span></div><div class="mo-t"><i style="transition-timing-function:var(${v})"></i></div></div>`).join("")}</div>
        <h3 class="sgc-h">Thời lượng</h3>
        <table class="tbl"><tbody>${DURATIONS.map(([d, u]) => `<tr><td><code>${d}</code></td><td>${u}</td></tr>`).join("")}</tbody></table>`,
      code: () => `.st-tile { transition: opacity .6s var(--ease); }\n.st-go svg { transition: transform .3s var(--spring); }\n\n@media (prefers-reduced-motion: reduce) {\n  .st-tile { opacity: 1; transition: none; }\n}`,
      docs: {
        use: ["Hover đổi nền hoặc màu trong 200 đến 250ms.", "Reveal khi cuộn dùng opacity và stagger 50ms mỗi phần tử."],
        dont: ["Không animate layout (width, height) của thẻ.", "Không để animation chạy vô hạn trên nội dung đọc."],
        a11y: ["Luôn có nhánh <code>prefers-reduced-motion: reduce</code> cho animation và transition."],
        tokens: ["--ease", "--spring"],
        classes: [],
      },
    },

    /* ===== COMPONENTS ===== */
    {
      id: "button", group: "Components", title: "Button",
      desc: "Ba kiểu nút dùng chung toàn site: filled cho hành động chính, ghost cho hành động phụ, link cho điều hướng nhẹ.",
      args: { variant: sel("variant", ["filled", "ghost", "link", "link sm"], "filled"), label: text("label", "Lật thẻ"), disabled: bool("disabled"), matrix: bool("Hiện tất cả biến thể") },
      render: a => {
        const one = (v, l) => `<button class="${{ filled: "btn", ghost: "btn ghost", link: "link", "link sm": "link sm" }[v]}"${a.disabled ? " disabled" : ""}>${esc(l)}</button>`;
        return a.matrix
          ? `<div class="row">${["filled", "ghost", "link", "link sm"].map(v => one(v, v)).join("")}</div>`
          : one(a.variant, a.label);
      },
      docs: {
        use: ["Filled: một hành động chính mỗi màn hình (Lật thẻ, Nộp bài).", "Ghost: hành động phụ cạnh filled (Bắt đầu nói).", "Link: điều hướng nhẹ như Trước, Tiếp."],
        dont: ["Không đặt hai nút filled cạnh nhau.", "Không dùng link cho hành động có hậu quả."],
        a11y: ["Dùng thẻ <code>button</code> cho hành động, <code>a</code> cho điều hướng.", "Disabled giảm opacity xuống 35% và chặn tương tác."],
        tokens: ["--fg", "--bg", "--accent", "--surface"],
        classes: [".btn", ".btn.ghost", ".link", ".link.sm"],
      },
    },
    {
      id: "input", group: "Components", title: "Input",
      desc: "Chỉ có border-bottom, không nền, không viền bốn cạnh. Trạng thái thể hiện bằng màu đường kẻ và dòng gợi ý.",
      args: {
        state: sel("state", ["default", "focus", "filled", "disabled", "readonly", "error", "success"], "default"),
        size: sel("size", ["sm", "md", "lg"], "md"),
        mono: bool("mono (đáp án)"), multiline: bool("textarea"),
        label: text("label", "Nhãn trường"), hint: text("hint", "Dòng gợi ý"), placeholder: text("placeholder", "Nhập nội dung"),
      },
      render: a => {
        const cls = ["input", a.size === "sm" ? "input--sm" : a.size === "lg" ? "input--lg" : "", a.mono ? "input--mono" : ""].filter(Boolean).join(" ");
        const fcls = ["field", { error: "is-error", success: "is-success", disabled: "is-disabled" }[a.state] || ""].filter(Boolean).join(" ");
        const val = ["filled", "error", "success", "readonly"].includes(a.state) ? ` value="${a.state === "filled" ? "Giá trị đã nhập" : a.state === "error" ? "abc" : a.state === "success" ? "Hợp lệ" : "Chỉ đọc"}"` : "";
        const flags = (a.state === "disabled" ? " disabled" : "") + (a.state === "readonly" ? " readonly" : "") + (a.state === "error" ? ' aria-invalid="true"' : "");
        const ctl = a.multiline
          ? `<textarea class="${cls}" id="f1" rows="3" placeholder="${esc(a.placeholder)}"${flags}>${val ? esc(val.slice(8, -1)) : ""}</textarea>`
          : `<input class="${cls}" id="f1" placeholder="${esc(a.placeholder)}"${val}${flags}>`;
        return `<div class="${fcls}">\n  <label class="lbl" for="f1">${esc(a.label)}</label>\n  ${ctl}\n  <span class="fhint">${esc(a.hint)}</span>\n</div>`;
      },
      wrap: "max-width:360px",
      after: (root, a) => { if (a.state === "focus") { const i = root.querySelector(".input"); i && i.focus(); } },
      docs: {
        use: ["Luôn có nhãn <code>.lbl</code> hiển thị, không chỉ dùng placeholder.", "Dòng <code>.fhint</code> giải thích lỗi bằng lời, không chỉ đổi màu.", "Dùng <code>input--mono</code> cho ô gõ đáp án."],
        dont: ["Không thêm nền hoặc viền bốn cạnh.", "Không dùng placeholder thay nhãn."],
        a11y: ["Đặt <code>aria-invalid=\"true\"</code> ở trạng thái lỗi.", "Label gắn với input bằng <code>for</code> và <code>id</code>.", "Focus đổi đường kẻ sang accent và dày thêm 1px."],
        tokens: ["--fg", "--accent", "--ok", "--muted", "--hair"],
        classes: [".field", ".input", ".input--sm", ".input--lg", ".input--mono", ".fhint", ".is-error", ".is-success"],
      },
    },
    {
      id: "select", group: "Components", title: "Select",
      desc: "Mọi thẻ select được thay bằng dropdown cùng nhịp với input, hỗ trợ bàn phím.",
      args: { label: text("label", "Chủ đề"), count: sel("số lựa chọn", ["3", "6", "12"], "3") },
      render: a => `<div class="field">\n  <label class="lbl" for="s1">${esc(a.label)}</label>\n  <select id="s1">\n${Array.from({ length: +a.count }, (_, i) => `    <option>${["Tất cả (100)", "Hometown (6)", "Shopping (8)", "Travel (7)", "Weather (5)", "Food (9)", "Work (12)", "School (6)", "Family (8)", "Health (7)", "Sports (5)", "Music (4)"][i]}</option>`).join("\n")}\n  </select>\n</div>`,
      wrap: "max-width:320px;min-height:260px",
      after: (root, a, win) => win.enhanceSelects && win.enhanceSelects(root),
      docs: {
        use: ["Dùng khi có từ 3 lựa chọn trở lên và chọn một.", "Gọi <code>enhanceSelects(root)</code> sau khi chèn select vào DOM."],
        dont: ["Không dùng dưới 3 lựa chọn, dùng nhóm nút <code>.seg</code> thay thế."],
        a11y: ["Mũi tên lên xuống di chuyển, Enter chọn, Esc đóng.", "Nút gắn <code>aria-haspopup=\"listbox\"</code> và <code>aria-expanded</code>."],
        tokens: ["--fg", "--hair", "--surface", "--accent"],
        classes: [".dd", ".ddbtn", ".ddmenu"],
      },
    },
    {
      id: "chip", group: "Components", title: "Chip",
      desc: "Nhãn nhỏ viền mảnh cho từ khoá, dạng từ, dấu hiệu nhận biết.",
      args: { label: text("tiêu đề nhỏ (tuỳ chọn)", "Dấu hiệu"), text: text("text", "yesterday"), static: bool("static (không tương tác)") },
      render: a => `<${a.static ? "span" : "button"} class="chip${a.static ? " static" : ""}">${a.label ? `<span class="cl">${esc(a.label)}</span>` : ""}${esc(a.text)}</${a.static ? "span" : "button"}>`,
      docs: {
        use: ["Nhóm nhiều chip trong <code>.chips</code> (gap 6px).", "Static khi chỉ hiển thị thông tin."],
        dont: ["Không dùng chip làm nút hành động chính."],
        a11y: ["Chip có tương tác phải là <code>button</code>."],
        tokens: ["--hair", "--fg", "--muted"],
        classes: [".chips", ".chip", ".chip.static", ".chip .cl"],
      },
    },
    {
      id: "filter-chip", group: "Components", title: "Filter chip",
      desc: "Chip lọc theo lĩnh vực: chấm màu, tên, số lượng. Trạng thái pressed đảo màu.",
      args: { cat: sel("lĩnh vực", ["none", ...CAT_OPTS], "lang"), label: text("label", "Ngôn ngữ"), count: text("count", "7"), pressed: bool("pressed", true) },
      render: a => `<button type="button" class="st-chip" data-k="${a.cat}" aria-pressed="${a.pressed}"${a.cat !== "none" ? ` style="--cat:var(--c-${a.cat})"` : ""}>${a.cat !== "none" ? "<i></i>" : ""}${esc(a.label)}<small>${esc(a.count)}</small></button>`,
      docs: {
        use: ["Đặt phía trên danh sách cần lọc, kèm tổng số kết quả.", "Chip đầu tiên là Tất cả."],
        dont: ["Không cho chọn nhiều chip trong cùng một nhóm lọc."],
        a11y: ["Dùng <code>aria-pressed</code> thể hiện trạng thái bật.", "Bọc nhóm chip bằng <code>role=\"group\"</code> và <code>aria-label</code>."],
        tokens: ["--c-*", "--fg", "--bg", "--hair"],
        classes: [".st-chip"],
      },
    },
    {
      id: "badge", group: "Components", title: "Badge",
      desc: "Nhãn trạng thái đỏ Swiss. Một style cho mọi thẻ, không đổi theo lĩnh vực.",
      args: { text: text("text", "Sắp ra mắt") },
      render: a => `<span class="st-badge">${esc(a.text)}</span>`,
      docs: {
        use: ["Dùng cho trạng thái ngắn: Sắp ra mắt, Mới."],
        dont: ["Không đổi màu badge theo lĩnh vực."],
        a11y: ["Trạng thái cũng nằm trong <code>aria-label</code> của thẻ chứa nó."],
        tokens: ["--accent", "--accent-soft"],
        classes: [".st-badge"],
      },
    },
    {
      id: "subject-card", group: "Components", title: "Subject card",
      desc: "Thẻ môn học: nội dung bên trái, panel màu theo lĩnh vực bên phải. Hover đổi panel sang xám và hiện mã lớn.",
      args: { cat: sel("lĩnh vực", CAT_OPTS, "lang"), state: sel("state", ["live", "soon"], "live"), name: text("tên", "English"), code: text("mã", "EN"), num: text("số thứ tự", "01"), n: text("số module", "14") },
      render: a => {
        const label = { lang: "Ngôn ngữ", psy: "Tâm lý học", health: "Y tế & Dược" }[a.cat];
        const live = a.state === "live", tag = live ? "a" : "div";
        return `<${tag} class="st-tile in${live ? "" : " soon"}"${live ? ' href="#"' : ""} data-k="${a.cat}">
  <div class="st-main">
    <span class="st-top"><b>${esc(a.num)}</b><i>/</i><span>${esc(a.code)}</span></span>
    <span class="st-name">${esc(a.name)}</span>${live ? "" : '\n    <span class="st-badge">Sắp ra mắt</span>'}
    <span class="st-go"><span>${live ? `${esc(a.n)} module, vào học` : "Đang chuẩn bị"}</span>${live ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h16M14 6l6 6-6 6"/></svg>' : ""}</span>
  </div>
  <div class="st-side2" aria-hidden="true">
    <span class="st-catl">${label}</span>
    <span class="st-bignum">${esc(a.num)}</span>
    <span class="st-bigcode">${esc(a.code)}</span>
  </div>
</${tag}>`;
      },
      wrap: "max-width:400px",
      docs: {
        use: ["Dùng trong <code>.st-grid</code>: 1 cột mobile, 2 cột từ 720px, 3 cột từ 1100px.", "Thẻ chưa mở dùng <code>div.soon</code>, không có link."],
        dont: ["Không thêm mô tả hay tag vào thẻ, tên và số module là đủ.", "Không đổi hover thành chuyển động vị trí, chỉ đổi panel."],
        a11y: ["Thêm <code>aria-label</code> gồm tên, lĩnh vực, số module.", "Panel trang trí đặt <code>aria-hidden</code>."],
        tokens: ["--cat (từ --c-*)", "--panel-off", "--code-off", "--accent-soft"],
        classes: [".st-tile", ".st-main", ".st-side2", ".st-bignum", ".st-bigcode", ".soon"],
      },
    },
    {
      id: "module-card", group: "Components", title: "Module card",
      desc: "Thẻ mục lục trong trang chủ mỗi track: số, tiêu đề, tên gốc, mô tả, thông tin.",
      args: { num: text("số", "01"), title: text("tiêu đề", "12 thì"), en: text("tên gốc", "Tenses"), desc: text("mô tả", "Trục thời gian, cấu trúc, dấu hiệu, văn nói và văn viết"), meta: text("meta", "12 bài · 101 câu · trò chơi") },
      render: a => `<a class="hcard" href="#" style="--i:0">\n  <span class="hnum">${esc(a.num)}</span>\n  <span class="htitle">${esc(a.title)}</span>\n  <span class="hen">${esc(a.en)}</span>\n  <span class="hdesc">${esc(a.desc)}</span>\n  <span class="hmeta">${esc(a.meta)}</span>\n</a>`,
      wrap: "max-width:300px",
      docs: {
        use: ["Đặt trong <code>.home-grid</code>, tự chia cột theo bề rộng."],
        dont: ["Không dùng ngoài trang mục lục của một track."],
        a11y: ["Cả thẻ là một link duy nhất."],
        tokens: ["--accent", "--muted", "--hair"],
        classes: [".home-grid", ".hcard", ".hnum", ".htitle", ".hen", ".hdesc", ".hmeta"],
      },
    },
    {
      id: "mosaic-tile", group: "Components", title: "Mosaic tile",
      desc: "Ô trang trí của hero landing. Chỉ có hover, không click. Mỗi lĩnh vực một màu và một hình.",
      args: { cat: sel("lĩnh vực", CAT_ALL, "lang"), shape: sel("hình", ["circle", "blob", "ring", "bars", "tri", "dome"], "circle"), label: text("nhãn", "Languages"), off: bool("sắp có") },
      render: a => `<div class="mt" data-k="${a.cat}" data-s="${a.shape}"${a.off ? ' data-off=""' : ""}>\n  <span class="sh"></span>\n  <span class="mt-l">${a.off ? "Sắp có · " : ""}${esc(a.label)}</span>\n  <svg class="ic" viewBox="0 0 24 24"><path d="M9 4h6v5h5v6h-5v5H9v-5H4V9h5z"/></svg>\n</div>`,
      wrap: "width:300px;height:170px;display:grid",
      docs: {
        use: ["Ghép 7 ô cạnh nhau trên lưới 6 cột để tạo mosaic quanh chữ LEARN ANYTHING.", "Nền ô là 12% màu lĩnh vực trộn với nền trang."],
        dont: ["Không biến ô thành link hay nút, đây là hình trang trí.", "Đặt <code>aria-hidden</code> cho cả mosaic."],
        a11y: ["Mosaic là trang trí và bị ẩn khỏi trình đọc màn hình, thông tin thật nằm ở chip lọc và thẻ."],
        tokens: ["--cat (từ --c-*)", "--bg"],
        classes: [".st-mosaic", ".mt", ".mt-core", ".sh", ".mt-l"],
      },
    },
    {
      id: "back-link", group: "Components", title: "Back link",
      desc: "Link về trang chủ ở đầu header mọi trang con, ngăn cách bằng đường kẻ dọc.",
      args: { label: text("label", "Học mọi thứ") },
      render: a => `<a class="backlink" href="/"><svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M20 12H4M10 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>${esc(a.label)}</span></a>`,
      docs: {
        use: ["Luôn là phần tử đầu tiên trong <code>header.site</code>."],
        dont: ["Không thay bằng breadcrumb nhiều cấp."],
        a11y: ["Có <code>aria-label</code> mô tả đích đến.", "Mũi tên chỉ là trang trí, <code>aria-hidden</code>."],
        tokens: ["--muted", "--accent", "--hair"],
        classes: [".backlink"],
      },
    },
    {
      id: "stat", group: "Components", title: "Stat",
      desc: "Số liệu tóm tắt dưới hero: số lớn, nhãn nhỏ, ngăn cách bằng đường kẻ dọc.",
      args: { value: text("value", "117"), label: text("label", "Module") },
      render: a => `<dl class="st-stats">\n  <div><dd>${esc(a.value)}</dd><dt>${esc(a.label)}</dt></div>\n</dl>`,
      docs: {
        use: ["Tính số từ dữ liệu thật, không nhập tay."],
        dont: ["Không đưa số liệu chưa kiểm chứng (số học viên, đánh giá)."],
        a11y: ["Dùng <code>dl</code>, <code>dt</code>, <code>dd</code> để gắn nhãn với giá trị."],
        tokens: ["--hair", "--muted"],
        classes: [".st-stats"],
      },
    },
  ];

  /* ---------------------------------------------------------------
     canvas (iframe with the real site CSS)
  --------------------------------------------------------------- */
  const frame = $("sg-frame");
  const CANVAS_CSS = `
    html,body{margin:0}
    body{padding:0}
    #root{padding:28px;min-height:100vh;box-sizing:border-box}
    .row{display:flex;flex-wrap:wrap;gap:20px;align-items:center}
    .sgc-h{margin:28px 0 12px;font:600 11px/1.4 var(--mono);letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}
    .sgc-h:first-child{margin-top:0}
    .sgc-p{margin:6px 0 0;color:var(--muted);font-size:13px}
    code{font:500 12px/1 var(--mono);background:var(--surface);padding:2px 6px}
    .sw-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:14px}
    .sw{display:grid;gap:4px;text-align:left;border:1px solid var(--hair);padding:0 0 10px;background:var(--bg);cursor:copy;transition:border-color .2s}
    .sw:hover{border-color:var(--fg)}
    .sw i{display:block;height:64px;border-bottom:1px solid var(--hair)}
    .sw span{padding:0 10px}
    .sw-n{margin-top:6px;font:600 12px/1.3 var(--mono)}
    .sw-v{font:500 11px/1.3 var(--mono);color:var(--muted)}
    .sw-u{font-size:12px;color:var(--muted)}
    .ty{display:grid}
    .ty-r{display:grid;grid-template-columns:minmax(150px,220px) minmax(0,1fr);gap:20px;align-items:center;padding:16px 0;border-bottom:1px solid var(--hair)}
    .ty-m{display:grid;gap:4px;font-size:12px;color:var(--muted)}
    .ty-m b{color:var(--fg);font-size:13px}
    .ty-s{overflow-wrap:anywhere}
    @media (max-width:640px){.ty-r{grid-template-columns:1fr}}
    .grid3{display:grid;grid-template-columns:var(--cols);border:1px solid var(--hair)}
    .grid3 span{padding:14px 10px;font:500 11px/1.3 var(--mono);color:var(--muted);background:var(--surface);border-left:1px solid var(--bg)}
    .sp{display:flex;align-items:flex-end;flex-wrap:wrap;gap:20px}
    .sp div{display:grid;gap:6px;justify-items:center}
    .sp i{display:block;background:var(--accent)}
    .sp b{font:500 11px/1 var(--mono)}
    .tbl{border-collapse:collapse;width:100%;font-size:13px}
    .tbl td{padding:9px 10px 9px 0;border-bottom:1px solid var(--hair)}
    .mo{display:grid;gap:14px}
    .mo-r{display:grid;grid-template-columns:minmax(180px,260px) minmax(0,1fr);gap:20px;align-items:center}
    .mo-m{display:grid;gap:4px;font-size:12px;color:var(--muted)}
    .mo-m b{font:600 12px/1 var(--mono);color:var(--fg)}
    .mo-t{height:36px;background:var(--surface);position:relative}
    .mo-t i{position:absolute;left:0;top:6px;width:24px;height:24px;background:var(--accent);transition:left 1s}
    .mo-t.go i{left:calc(100% - 24px)}
    @media (max-width:640px){.mo-r{grid-template-columns:1fr}}`;
  const doc = () => `<!doctype html><html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;800&family=Be+Vietnam+Pro:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap">
    <link rel="stylesheet" href="assets/css/tokens.css"><link rel="stylesheet" href="assets/css/base.css"><link rel="stylesheet" href="assets/css/components.css"><link rel="stylesheet" href="assets/css/responsive.css"><link rel="stylesheet" href="assets/css/start.css">
    <style>${CANVAS_CSS}</style></head><body><div id="root"></div>
    <script src="assets/js/core/utils.js"><\/script><script src="assets/js/core/nav.js"><\/script></body></html>`;

  let ready = false, current = null;
  const state = {};   /* args per story id */

  const win = () => frame.contentWindow, fdoc = () => frame.contentDocument;
  const ctx = { css: n => win().getComputedStyle(fdoc().documentElement).getPropertyValue(n).trim() };

  const syncTheme = () => {
    if (!ready) return;
    const t = document.documentElement.getAttribute("data-theme"), r = fdoc().documentElement;
    t ? r.setAttribute("data-theme", t) : r.removeAttribute("data-theme");
    fdoc().body.style.background = curBg;
  };

  /* ---------------------------------------------------------------
     rendering
  --------------------------------------------------------------- */
  const argsOf = s => { if (!s.args) return {}; const st = state[s.id] || (state[s.id] = Object.fromEntries(Object.entries(s.args).map(([k, d]) => [k, d.d]))); return st; };

  const pretty = html => {
    const toks = html.replace(/>\s+</g, "><").split(/(<[^>]+>)/).filter(t => t.trim() !== "");
    const VOID = /^<(input|br|img|hr|meta|link|path|circle|rect)\b/i;
    const out = []; let depth = 0;
    for (let i = 0; i < toks.length; i++) {
      const t = toks[i].trim(), isTag = t[0] === "<", close = /^<\//.test(t), self = /\/>$/.test(t) || VOID.test(t);
      if (isTag && close) { depth = Math.max(0, depth - 1); out.push("  ".repeat(depth) + t); continue; }
      if (isTag && !self) {
        const txt = toks[i + 1], cl = toks[i + 2];
        if (txt && txt[0] !== "<" && cl && /^<\//.test(cl.trim())) { out.push("  ".repeat(depth) + t + txt.trim() + cl.trim()); i += 2; continue; }
        out.push("  ".repeat(depth) + t); depth++; continue;
      }
      out.push("  ".repeat(depth) + t);
    }
    return out.join("\n");
  };

  const codeOf = s => s.code ? s.code(argsOf(s), ctx) : pretty(s.render(argsOf(s), ctx));

  function renderCanvas() {
    if (!ready || !current) return;
    const s = current, a = argsOf(s), root = fdoc().getElementById("root");
    let html = s.render(a, ctx);
    if (s.wrap) html = `<div style="${s.wrap}">${html}</div>`;
    root.innerHTML = html;
    s.after && s.after(root, a, win());
    root.querySelectorAll("[data-copy]").forEach(b => b.addEventListener("click", () => { navigator.clipboard && navigator.clipboard.writeText(b.dataset.copy); b.querySelector(".sw-n").textContent = "Đã copy"; setTimeout(() => renderCanvas(), 700); }));
    root.querySelectorAll("[data-replay]").forEach(b => b.addEventListener("click", replay));
    if (s.id === "motion") replay();
    root.querySelectorAll("a[href='#']").forEach(x => x.addEventListener("click", e => e.preventDefault()));
  }
  function replay() {
    const ts = fdoc().querySelectorAll(".mo-t"); ts.forEach(t => t.classList.remove("go"));
    void fdoc().body.offsetWidth;
    setTimeout(() => ts.forEach(t => t.classList.add("go")), 60);
  }

  /* ---------- panel: controls + code ---------- */
  let ptab = "controls";
  function renderPanel() {
    const s = current, body = $("sg-pbody"), a = argsOf(s);
    $("sg-reset").hidden = !s.args || ptab !== "controls";
    document.querySelectorAll("[data-p]").forEach(b => b.setAttribute("aria-selected", b.dataset.p === ptab));
    if (ptab === "code") {
      body.innerHTML = `<div class="sg-code"><button type="button" class="sg-copy" id="sg-copy">Copy</button><pre><code>${esc(codeOf(s))}</code></pre></div>`;
      $("sg-copy").onclick = () => { navigator.clipboard && navigator.clipboard.writeText(codeOf(s)); $("sg-copy").textContent = "Đã copy"; setTimeout(() => ($("sg-copy").textContent = "Copy"), 1200); };
      return;
    }
    if (!s.args) { body.innerHTML = `<p class="sg-none">Foundation này không có control. Xem tab Code để lấy cách dùng.</p>`; return; }
    body.innerHTML = `<dl class="sg-ctl">${Object.entries(s.args).map(([k, d]) => {
      const id = "ctl-" + k;
      const input = d.t === "select" ? `<select id="${id}" data-k="${k}">${d.o.map(o => `<option${String(a[k]) === o ? " selected" : ""}>${esc(o)}</option>`).join("")}</select>`
        : d.t === "bool" ? `<input id="${id}" type="checkbox" data-k="${k}"${a[k] ? " checked" : ""}>`
        : `<input id="${id}" type="text" data-k="${k}" value="${esc(a[k])}">`;
      return `<dt><label for="${id}">${esc(d.l)}</label></dt><dd>${input}</dd>`;
    }).join("")}</dl>`;
    body.querySelectorAll("[data-k]").forEach(el => el.addEventListener(el.type === "text" ? "input" : "change", () => {
      a[el.dataset.k] = el.type === "checkbox" ? el.checked : el.value;
      renderCanvas();
    }));
  }

  /* ---------- docs ---------- */
  function renderDocs(s) {
    const d = s.docs || {}, list = (arr, cls) => arr && arr.length ? `<ul class="${cls || ""}">${arr.map(x => `<li>${x}</li>`).join("")}</ul>` : "";
    $("sg-docs").innerHTML = `<div class="sg-doc">
      ${d.use ? `<div class="sg-cols"><div><h2>Khi dùng</h2>${list(d.use, "sg-do")}</div><div><h2>Cần tránh</h2>${list(d.dont, "sg-dont")}</div></div>` : ""}
      ${d.a11y ? `<div><h2>Accessibility</h2>${list(d.a11y)}</div>` : ""}
      ${d.tokens && d.tokens.length ? `<div><h2>Tokens</h2><div class="sg-toks">${d.tokens.map(t => `<code>${esc(t)}</code>`).join("")}</div></div>` : ""}
      ${d.classes && d.classes.length ? `<div><h2>CSS class</h2><div class="sg-toks">${d.classes.map(t => `<code>${esc(t)}</code>`).join("")}</div></div>` : ""}
    </div>`;
  }

  /* ---------- navigation ---------- */
  const groups = [...new Set(STORIES.map(s => s.group))];
  function renderNav(q = "") {
    const n = $("sg-nav"), qq = q.trim().toLowerCase();
    const html = groups.map(g => {
      const items = STORIES.filter(s => s.group === g && (!qq || s.title.toLowerCase().includes(qq) || s.id.includes(qq)));
      return items.length ? `<div class="sg-group"><h2>${g}</h2>${items.map(s => `<a href="#${s.id}"${current && current.id === s.id ? ' aria-current="page"' : ""}>${s.title}${s.args ? `<small>${Object.keys(s.args).length}</small>` : ""}</a>`).join("")}</div>` : "";
    }).join("");
    n.innerHTML = html || `<p class="sg-empty">Không có kết quả.</p>`;
  }

  function show(id) {
    const s = STORIES.find(x => x.id === id) || STORIES[0];
    current = s;
    $("sg-crumb").textContent = s.group;
    $("sg-title").textContent = s.title;
    $("sg-desc").textContent = s.desc;
    document.title = `${s.title} · Design system`;
    renderNav($("sg-q").value);
    renderDocs(s);
    renderPanel();
    renderCanvas();
    if (matchMedia("(max-width:900px)").matches) $("sg-menu").open = false;
  }

  /* ---------- toolbar + tabs ---------- */
  let curBg = "var(--bg)";
  $("sg-vp").addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; frame.style.width = b.dataset.w; frame.parentElement.style.justifyContent = b.dataset.w === "100%" ? "stretch" : "center"; $("sg-vp").querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", x === b)); });
  $("sg-bg").addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; curBg = b.dataset.bg; fdoc().body.style.background = curBg; $("sg-bg").querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", x === b)); });
  $("sg-tabs").addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; const docs = b.dataset.t === "docs"; $("sg-canvas").hidden = docs; $("sg-docs").hidden = !docs; $("sg-tabs").querySelectorAll("button").forEach(x => x.setAttribute("aria-selected", x === b)); });
  document.querySelector(".sg-ptabs").addEventListener("click", e => { const b = e.target.closest("[data-p]"); if (!b) return; ptab = b.dataset.p; renderPanel(); });
  $("sg-reset").addEventListener("click", () => { delete state[current.id]; renderPanel(); renderCanvas(); });
  $("sg-q").addEventListener("input", e => renderNav(e.target.value));
  window.addEventListener("hashchange", () => show(location.hash.slice(1)));
  new MutationObserver(() => { syncTheme(); renderCanvas(); }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => setTimeout(renderCanvas, 50));

  frame.addEventListener("load", () => { ready = true; syncTheme(); show(location.hash.slice(1)); });
  frame.srcdoc = doc();
})();
