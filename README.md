# Ngữ pháp tiếng Anh

Trang web học ngữ pháp tiếng Anh cho IELTS band 6.5 đến 7.5. Có 11 chủ đề ngữ pháp, mỗi chủ đề gồm lý thuyết trực quan, luyện tập và một trò chơi 60 giây. Ngoài ra có 100 flashcard Speaking Part 1.

Trang web là HTML, CSS và JavaScript thuần: không cần build, không cần cài thư viện.

## Chạy thử trên máy

Mở `index.html` bằng trình duyệt là chạy được.

Nếu muốn chạy qua một server nhỏ:

```bash
python3 -m http.server 8000
# rồi mở http://localhost:8000
```

## Đưa lên GitHub Pages

1. Tạo repository mới trên GitHub, rồi upload toàn bộ thư mục này (giữ nguyên cấu trúc).
2. Vào **Settings → Pages**.
3. Ở mục **Source**, chọn **Deploy from a branch**, chọn nhánh `main` và thư mục `/ (root)`, rồi bấm **Save**.
4. Sau khoảng một phút, trang sẽ chạy ở địa chỉ `https://<tên-tài-khoản>.github.io/<tên-repo>/`.

## Cấu trúc thư mục

```
index.html                 Trang chủ: mục lục 12 phần
tenses.html                01 12 thì (có thêm tab Tra dấu hiệu)
conditionals.html          02 Câu điều kiện
passive.html               03 Bị động
reported-speech.html       04 Câu tường thuật
modals.html                05 Modal verbs
relative-clauses.html      06 Mệnh đề quan hệ
wish.html                  07 Câu ước
complex-sentences.html     08 Câu phức
emphasis.html              09 Nhấn mạnh, đảo ngữ
comparison.html            10 So sánh
accuracy.html              11 Lỗi hay gặp
speaking.html              12 Speaking Part 1

assets/css/
  tokens.css               Design token: màu (sáng và tối), font, chuyển động, lưới cột
  base.css                 Reset, body, khung trang
  components.css           Header, mục lục, masthead, tab, dòng bài học, sơ đồ, chip, thẻ trang chủ
  practice.css             Luyện tập, kết quả, trò chơi
  finder.css               Tra dấu hiệu (trang 12 thì)
  speaking.css             Flashcard Speaking
  responsive.css           Bố cục điện thoại, giảm chuyển động (luôn load cuối)

assets/js/
  core/utils.js            Hàm dùng chung, kho nội dung GRAMMAR, byId
  core/nav.js              Header, mục lục module, tab
  core/theme.js            Nút Tự động / Sáng / Tối
  core/diagrams.js         Vẽ SVG: trục thời gian, thang đo, câu biến đổi
  core/rows.js             Dòng bài học dạng accordion, link giữa các trang, phím ↑ ↓
  core/practice.js         Bộ máy luyện tập và trò chơi
  pages/tenses.js          Sắp xếp, lọc, tra dấu hiệu
  pages/conditionals.js    Lọc có thật / không có thật
  pages/speaking.js        Flashcard, đồng hồ, tiến độ
  pages/home.js            Mục lục trang chủ
  main.js                  Khởi động trang module

content/
  modules.js               Danh sách 12 trang (thứ tự, tên, mô tả)
  theory/*.js              Nội dung lý thuyết của từng chủ đề
  quiz/*.js                Câu hỏi luyện tập và trò chơi của từng chủ đề
  speaking/part1.js        100 câu hỏi Speaking Part 1
```

Mỗi trang module load các file theo thứ tự: `content/modules.js` → `core/utils.js` → `content/theory/tenses.js` (luôn có, vì các chủ đề khác link sang thì) → file lý thuyết của trang → `core/*` → file quiz của trang → `main.js`.

## Sửa và thêm nội dung

Mọi nội dung nằm trong `content/`, tách riêng với giao diện và code.

**Thêm câu hỏi trắc nghiệm** vào `content/quiz/<chủ-đề>.js`:

```js
mcQ("type", "Câu hỏi có ___ chỗ trống", "Gợi ý", "đáp án đúng", ["sai 1", "sai 2", "sai 3"], "id-bai-hoc", "Giải thích")
```

**Thêm câu tự gõ:**

```js
inQ("type", "Câu hỏi", "Gợi ý", ["đáp án 1", "đáp án 2"], "id-bai-hoc", "Giải thích")
```

`type` phải là một khóa có trong `types` của file đó. `id-bai-hoc` là `id` của một dòng lý thuyết; nút "Xem lại lý thuyết" sẽ mở đúng dòng này, kể cả khi dòng đó nằm ở trang khác. Với câu tự gõ, đáp án viết tắt và viết đầy đủ đều được chấm đúng (doesn't và does not).

**Sửa lý thuyết** trong `content/theory/<chủ-đề>.js`. Mỗi dòng có các trường:

- `forms`: cấu trúc
- `uses`: cách dùng
- `signals`: dấu hiệu hoặc từ khóa
- `speak`, `write`: mức độ dùng trong văn nói và văn viết, từ 1 đến 5
- `mistake`: lỗi hay gặp

Phần hình minh họa của mỗi dòng dùng một trong bốn kiểu:

- `tl`: trục thời gian
- `scale`: thang đo
- `xf`: hai câu đánh số
- `big`: chữ lớn

**Thêm một chủ đề mới:**

1. Thêm một mục vào `content/modules.js`.
2. Tạo file `content/theory/<chủ-đề>.js` và `content/quiz/<chủ-đề>.js`.
3. Copy một trang HTML có sẵn, đổi `data-module`, tiêu đề, phần giới thiệu và hai dòng script trỏ tới file nội dung.

## Thiết kế

Phong cách Swiss: nền trắng, chữ đen, một màu nhấn đỏ, lưới 3 cột (số thứ tự | tên | nội dung).

- Font: Be Vietnam Pro và JetBrains Mono, tải từ Google Fonts.
- Mọi màu sắc đều là token trong `tokens.css`, nên chỉ cần sửa token là đổi được cả giao diện sáng và tối.
- Trình duyệt chỉ lưu ba thứ, trong localStorage: giao diện sáng/tối, bài học vừa xem và kỷ lục trò chơi.
