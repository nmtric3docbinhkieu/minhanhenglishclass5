# English 5 - Global Success - Học kỳ 2

Webapp học tiếng Anh lớp 5 học kỳ 2, giúp ôn thi vào ngày 11/5/2026.

## 🎯 Mục tiêu
- Dành cho học sinh lớp 5 (11 tuổi) yếu tiếng Anh
- Ôn thi học kỳ 2 trong 35 ngày
- Mỗi tối học 45 phút

## 📱 Tính năng chính

### 📅 Tab 1: Học theo lộ trình (35 ngày)
- Hiển thị 35 ngày học từ hôm nay đến ngày thi
- Click vào mỗi ngày để đánh dấu hoàn thành
- Theo dõi tiến trình học tập

### 📚 Tab 2: Unit cần học (7 Unit)
- **Unit 16** - Seasons and Weather (🔴 quan trọng nhất)
- **Unit 14+15** - Health (🔴 quan trọng nhất)  
- **Unit 18** - Means of Transport (🟡 quan trọng vừa)
- **Unit 19** - Places of Interest (🟡 quan trọng vừa)
- **Unit 20** - Summer Holidays (🟢 bình thường)
- **Unit 11** - Family Time (🟢 bình thường)

Mỗi Unit có:
- **Flashcard**: Học từ vựng với phiên âm IPA, nghĩa tiếng Việt, ví dụ
- **Trắc nghiệm**: 8 câu hỏi có giải thích chi tiết
- **Phát âm**: Dùng Web Speech API để nghe phát âm

### 📝 Tab 3: Thi thử
- Đề thi học kỳ 2: 25 câu hỏi
- Phần A: Ngữ âm (5 câu)
- Phần B: Từ vựng và ngữ pháp (12 câu)
- Phần C: Đọc hiểu (8 câu)
- Hiển thị điểm số và giải thích chi tiết

### 📒 Tab 4: Sổ tay lỗi sai
- Tự động lưu lại các câu trả lời sai
- Có thể xem lại và đánh dấu đã sửa
- Dùng localStorage để lưu trữ

## 🎨 Thiết kế
- **Màu sắc**: Hồng pastel chủ đạo (#F9E7E7, #FADADD, #FFF0F5)
- **Font**: Comic Neue, Quicksand, Poppins
- **Giao diện**: Bo góc lớn, bóng đổ mềm, hiệu ứng hover
- **Responsive**: Tương thích iPad và điện thoại

## 🚀 Công nghệ
- HTML5, CSS3, JavaScript (vanilla)
- Web Speech API cho phát âm
- LocalStorage cho lưu trữ dữ liệu
- Responsive design

## 📦 Cài đặt và Deploy

### Deploy lên Vercel:
1. Upload toàn bộ thư mục lên GitHub
2. Kết nối repository với Vercel
3. Vercel sẽ tự động deploy

### Chạy local:
```bash
# Tạo server local
python -m http.server 3000
# Hoặc
npx serve .
```

## 📂 Cấu trúc file:
```
├── index.html      # File HTML chính
├── style.css       # Style CSS
├── script.js       # JavaScript functionality
└── README.md       # Documentation
```

## 💡 Hướng dẫn sử dụng:
1. Mở webapp trên trình duyệt
2. Xem đồng hồ đếm ngược đến ngày thi
3. Bắt đầu với Tab "Học theo lộ trình" để theo dõi tiến độ
4. Học từ vựng qua Flashcard
5. Làm trắc nghiệm để kiểm tra kiến thức
6. Làm đề thi thử để đánh giá năng lực
7. Xem lại lỗi sai trong Sổ tay lỗi sai

## 🌟 Điểm nổi bật:
- Giao diện thân thiện với trẻ em
- Nội dung bám sát sách giáo khoa
- Có phát âm tiếng Anh chuẩn
- Lưu trữ tiến trình học tập
- Responsive hoàn hảo

## 📞 Liên hệ
Phát triển cho học sinh lớp 5 ôn thi học kỳ 2 tiếng Anh.
