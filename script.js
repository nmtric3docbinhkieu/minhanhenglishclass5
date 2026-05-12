// Learning data from requirements
const learningData = {
    units: {
        16: {
            title: "Seasons and Weather",
            vocabulary: [
                { word: "spring", phonetic: "/sprɪŋ/", vietnamese: "mùa xuân", example: "It's warm in spring." },
                { word: "summer", phonetic: "/ˈsʌmər/", vietnamese: "mùa hè", example: "It's hot in summer." },
                { word: "autumn", phonetic: "/ˈɔːtəm/", vietnamese: "mùa thu", example: "It's cool in autumn." },
                { word: "winter", phonetic: "/ˈwɪntər/", vietnamese: "mùa đông", example: "It's cold in winter." },
                { word: "warm", phonetic: "/wɔːrm/", vietnamese: "ấm áp", example: "Spring is warm." },
                { word: "hot", phonetic: "/hɒt/", vietnamese: "nóng", example: "Summer is hot." },
                { word: "cool", phonetic: "/kuːl/", vietnamese: "mát mẻ", example: "Autumn is cool." },
                { word: "cold", phonetic: "/koʊld/", vietnamese: "lạnh", example: "Winter is cold." },
                { word: "cloudy", phonetic: "/ˈklaʊdi/", vietnamese: "nhiều mây", example: "It's cloudy today." },
                { word: "sunny", phonetic: "/ˈsʌni/", vietnamese: "nắng", example: "It's sunny in summer." },
                { word: "rainy", phonetic: "/ˈreɪni/", vietnamese: "mưa", example: "Spring is rainy." },
                { word: "jumper", phonetic: "/ˈdʒʌmpər/", vietnamese: "áo len", example: "I wear a jumper." },
                { word: "jeans", phonetic: "/dʒiːnz/", vietnamese: "quần jean", example: "Jeans are warm." },
                { word: "coat", phonetic: "/koʊt/", vietnamese: "áo khoác", example: "Wear a coat in winter." }
            ],
            quiz: [
                {
                    question: "How's the weather in summer?",
                    options: ["A. It's warm.", "B. It's hot.", "C. It's cold."],
                    correct: 1,
                    explanation: "Mùa hè (summer) thời tiết nóng (hot). Trong bài học: \"Summer is hot and sunny.\""
                },
                {
                    question: "What do you usually wear in winter?",
                    options: ["A. Shorts and a T-shirt", "B. A jumper and jeans", "C. A dress"],
                    correct: 1,
                    explanation: "Mùa đông (winter) lạnh nên mặc áo len (jumper) và quần jean (jeans). Đáp án A là mùa hè, C là mùa thu/xuân."
                },
                {
                    question: "How's the weather in autumn?",
                    options: ["A. Warm and rainy", "B. Hot and sunny", "C. Cool and cloudy"],
                    correct: 2,
                    explanation: "Mùa thu (autumn) thời tiết mát mẻ (cool) và thường có mây (cloudy). Bài hát trong sách: \"Autumn is cool and cloudy.\""
                },
                {
                    question: "What does \"humid\" mean?",
                    options: ["A. Khô ráo", "B. Ẩm ướt", "C. Lạnh giá"],
                    correct: 1,
                    explanation: "\"Humid\" có nghĩa là ẩm ướt (không khí nhiều hơi nước). Mùa xuân ở Việt Nam thường ẩm ướt (warm and humid)."
                },
                {
                    question: "Chọn câu đúng ngữ pháp:",
                    options: ["A. I wear jeans in winter.", "B. I wear jeans on winter.", "C. I wear jeans at winter."],
                    correct: 0,
                    explanation: "Dùng giới từ \"in\" + mùa (in spring, in summer, in autumn, in winter). \"In winter\" mới đúng."
                },
                {
                    question: "What season is it in Sydney when it's summer in Viet Nam?",
                    options: ["A. Spring", "B. Summer", "C. Winter"],
                    correct: 2,
                    explanation: "Việt Nam ở Bắc bán cầu, Úc (Sydney) ở Nam bán cầu. Hai bán cầu có mùa ngược nhau. Khi Việt Nam mùa hè thì Sydney mùa đông (winter)."
                },
                {
                    question: "Dịch: \"It's cloudy in autumn.\"",
                    options: ["A. Mùa thu thì lạnh.", "B. Mùa thu thì nhiều mây.", "C. Mùa thu thì mưa."],
                    correct: 1,
                    explanation: "\"Cloudy\" = nhiều mây, có mây. \"Autumn\" = mùa thu. Vậy câu có nghĩa \"Mùa thu thì nhiều mây.\""
                },
                {
                    question: "What should you wear on a hot day?",
                    options: ["A. A coat", "B. A jumper", "C. Shorts and a T-shirt"],
                    correct: 2,
                    explanation: "Ngày nóng (hot day) nên mặc quần short và áo phông (shorts and T-shirt) để mát mẻ. Coat và jumper là đồ mặc khi lạnh."
                }
            ]
        },
        "14-15": {
            title: "Health (Staying healthy + Our health)",
            vocabulary: [
                { word: "headache", phonetic: "/ˈhedeɪk/", vietnamese: "đau đầu", example: "I have a headache." },
                { word: "toothache", phonetic: "/ˈtuːθeɪk/", vietnamese: "đau răng", example: "I have a toothache." },
                { word: "sore throat", phonetic: "/sɔːr θroʊt/", vietnamese: "đau họng", example: "I have a sore throat." },
                { word: "fever", phonetic: "/ˈfiːvər/", vietnamese: "sốt", example: "I have a fever." },
                { word: "should", phonetic: "/ʃʊd/", vietnamese: "nên", example: "You should rest." },
                { word: "shouldn't", phonetic: "/ˈʃʊdnt/", vietnamese: "không nên", example: "You shouldn't eat ice cream." },
                { word: "exercise", phonetic: "/ˈeksərsaɪz/", vietnamese: "tập thể dục", example: "Do exercise every day." },
                { word: "dentist", phonetic: "/ˈdentɪst/", vietnamese: "nha sĩ", example: "Go to the dentist." },
                { word: "doctor", phonetic: "/ˈdɒktər/", vietnamese: "bác sĩ", example: "See a doctor." },
                { word: "medicine", phonetic: "/ˈmedsn/", vietnamese: "thuốc", example: "Take medicine." }
            ],
            quiz: [
                {
                    question: "What's the matter with you? (đau đầu)",
                    options: ["A. I have a toothache.", "B. I have a headache.", "C. I have a sore throat."],
                    correct: 1,
                    explanation: "\"Headache\" là đau đầu. \"Toothache\" là đau răng. \"Sore throat\" là đau họng. Câu hỏi yêu cầu đau đầu nên chọn \"headache\"."
                },
                {
                    question: "What should you do when you have a toothache?",
                    options: ["A. Go to the dentist", "B. Watch TV", "C. Eat ice cream"],
                    correct: 0,
                    explanation: "Khi đau răng (toothache), bạn nên (should) đi nha sĩ (go to the dentist). Không nên ăn kem vì càng đau hơn."
                },
                {
                    question: "Chọn từ đúng: \"You ___ watch too much TV when you have a headache.\"",
                    options: ["A. should", "B. shouldn't", "C. must"],
                    correct: 1,
                    explanation: "Đau đầu không nên (shouldn't) xem TV nhiều vì sẽ mỏi mắt và đau đầu hơn. \"Shouldn't\" = không nên."
                },
                {
                    question: "How does Peter stay healthy? (theo bài đọc Unit 14)",
                    options: ["A. He eats fast food.", "B. He eats fish and vegetables.", "C. He drinks soda."],
                    correct: 1,
                    explanation: "Trong bài \"Peter's healthy lifestyle\", Peter ăn cá và rau (fish and vegetables), uống nước và nước ép trái cây. Không ăn đồ ăn nhanh."
                },
                {
                    question: "How often does Peter do judo?",
                    options: ["A. Once a week", "B. Twice a week", "C. Every day"],
                    correct: 1,
                    explanation: "Bài đọc: \"He does judo on Tuesdays and Thursdays.\" → Mỗi tuần 2 lần (twice a week)."
                },
                {
                    question: "Dịch: \"You should rinse your mouth with salt water.\"",
                    options: ["A. Bạn nên súc miệng bằng nước muối.", "B. Bạn nên đánh răng mỗi ngày.", "C. Bạn nên uống nước ấm."],
                    correct: 0,
                    explanation: "\"Rinse your mouth\" = súc miệng, \"salt water\" = nước muối. Đây là lời khuyên khi bị đau răng hoặc đau họng."
                },
                {
                    question: "What does \"I'm not very well\" mean?",
                    options: ["A. Tôi rất khỏe", "B. Tôi không được khỏe lắm", "C. Tôi bị ốm nặng"],
                    correct: 1,
                    explanation: "\"Not very well\" = không được khỏe lắm (hơi mệt, hơi ốm). Đây là cách nói nhẹ nhàng hơn \"I'm sick\"."
                },
                {
                    question: "Chọn đáp án đúng: \"A: What's the matter? B: I have a ___. I can't eat anything.\"",
                    options: ["A. headache", "B. toothache", "C. sore throat"],
                    correct: 2,
                    explanation: "Đau họng (sore throat) gây khó nuốt, không thể ăn gì (can't eat anything). Đau đầu hoặc đau răng không ảnh hưởng đến việc nuốt nhiều."
                }
            ]
        },
        18: {
            title: "Means of Transport",
            vocabulary: [
                { word: "bus", phonetic: "/bʌs/", vietnamese: "xe buýt", example: "I go by bus." },
                { word: "taxi", phonetic: "/ˈtæksi/", vietnamese: "xe taxi", example: "Take a taxi." },
                { word: "bicycle", phonetic: "/ˈbaɪsɪkl/", vietnamese: "xe đạp", example: "Go by bicycle." },
                { word: "on foot", phonetic: "/ɒn fʊt/", vietnamese: "đi bộ", example: "I go on foot." },
                { word: "train", phonetic: "/treɪn/", vietnamese: "tàu hỏa", example: "Travel by train." },
                { word: "ferry", phonetic: "/ˈferi/", vietnamese: "phà", example: "Take a ferry." },
                { word: "Dragon Bridge", phonetic: "/ˈdræɡən brɪdʒ/", vietnamese: "Cầu Rồng", example: "Visit Dragon Bridge." },
                { word: "Opera House", phonetic: "/ˈɒprə haʊs/", vietnamese: "Nhà hát Opera", example: "Ha Noi Opera House." }
            ],
            quiz: [
                {
                    question: "How can I get to Hoan Kiem Lake?",
                    options: ["A. You can get there by bus.", "B. You can get there on foot.", "C. Both A and B."],
                    correct: 2,
                    explanation: "Hồ Hoàn Kiếm ở trung tâm Hà Nội, có thể đi bằng xe buýt (by bus) hoặc đi bộ (on foot) nếu ở gần. Cả hai đều đúng."
                },
                {
                    question: "\"Where do you want to visit?\" có nghĩa là gì?",
                    options: ["A. Bạn muốn đi đâu?", "B. Bạn đã đi đâu?", "C. Bạn sẽ đi đâu?"],
                    correct: 0,
                    explanation: "\"Where\" = ở đâu, \"do you want to visit\" = bạn muốn tham quan. Hỏi về mong muốn ở hiện tại."
                },
                {
                    question: "Chọn đáp án đúng: \"I want to visit ___.\" (Cầu Rồng ở Đà Nẵng)",
                    options: ["A. Ha Noi Opera House", "B. Dragon Bridge", "C. Ngo Mon Square"],
                    correct: 1,
                    explanation: "Dragon Bridge (Cầu Rồng) là địa danh nổi tiếng ở Đà Nẵng. Opera House ở Hà Nội, Ngo Mon Square ở Huế."
                },
                {
                    question: "How can I get to Dam Sen Water Park?",
                    options: ["A. You can get there by bicycle.", "B. You can get there by taxi.", "C. You can get there on foot."],
                    correct: 1,
                    explanation: "Công viên nước Đầm Sen ở Thành phố Hồ Chí Minh, thường đi bằng taxi hoặc xe buýt. Đi xe đạp hoặc đi bộ thường không khả thi vì xa."
                },
                {
                    question: "\"Excuse me! I'm lost.\" có nghĩa là gì?",
                    options: ["A. Làm ơn! Tôi bị lạc.", "B. Làm ơn! Tôi mệt.", "C. Làm ơn! Tôi đói."],
                    correct: 0,
                    explanation: "\"I'm lost\" = tôi bị lạc. Đây là câu dùng khi không biết đường."
                },
                {
                    question: "What does \"on foot\" mean?",
                    options: ["A. Đi xe đạp", "B. Đi bộ", "C. Đi xe buýt"],
                    correct: 1,
                    explanation: "\"On foot\" có nghĩa là đi bộ, dùng đôi chân của mình."
                },
                {
                    question: "Is it far from here? – \"No, it isn't.\" có nghĩa là:",
                    options: ["A. Có, nó xa.", "B. Không, nó không xa.", "C. Tôi không biết."],
                    correct: 1,
                    explanation: "\"No, it isn't\" là câu trả lời phủ định cho câu hỏi \"Is it far?\" (Có xa không?) → Không, nó không xa."
                },
                {
                    question: "Chọn câu hỏi đúng khi muốn hỏi đường đến bảo tàng:",
                    options: ["A. How can I get to the museum?", "B. Where is the museum go?", "C. What museum is it?"],
                    correct: 0,
                    explanation: "\"How can I get to...?\" là mẫu câu chuẩn để hỏi đường đến một địa điểm."
                }
            ]
        },
        19: {
            title: "Places of Interest",
            vocabulary: [
                { word: "beautiful", phonetic: "/ˈbjuːtɪfl/", vietnamese: "đẹp", example: "The beach is beautiful." },
                { word: "exciting", phonetic: "/ɪkˈsaɪtɪŋ/", vietnamese: "thú vị, hấp dẫn", example: "The trip is exciting." },
                { word: "fantastic", phonetic: "/fænˈtæstɪk/", vietnamese: "tuyệt vời", example: "Ha Long Bay is fantastic." },
                { word: "peaceful", phonetic: "/ˈpiːsfl/", vietnamese: "yên bình", example: "The village is peaceful." },
                { word: "kilometre", phonetic: "/kɪˈlɒmɪtər/", vietnamese: "ki-lô-mét", example: "It's 10 kilometres." },
                { word: "far", phonetic: "/fɑːr/", vietnamese: "xa", example: "Is it far?" },
                { word: "near", phonetic: "/nɪr/", vietnamese: "gần", example: "It's near here." }
            ],
            quiz: [
                {
                    question: "What do you think of Ha Long Bay?",
                    options: ["A. I think it's boring.", "B. I think it's fantastic.", "C. I think it's noisy."],
                    correct: 1,
                    explanation: "Vịnh Hạ Long là danh lam thắng cảnh nổi tiếng, tuyệt đẹp. \"Fantastic\" (tuyệt vời) là từ phù hợp nhất."
                },
                {
                    question: "\"How far is it from Da Nang to Hoi An?\" có nghĩa là gì?",
                    options: ["A. Từ Đà Nẵng đến Hội An có xa không?", "B. Từ Đà Nẵng đến Hội An bao xa?", "C. Đà Nẵng ở gần Hội An phải không?"],
                    correct: 1,
                    explanation: "\"How far\" dùng để hỏi về khoảng cách (bao xa). Câu hỏi đầy đủ là \"How far is it from A to B?\""
                },
                {
                    question: "It's about 29 kilometres from Da Nang to Hoi An. Số 29 đọc là:",
                    options: ["A. Twenty nine", "B. Twenty-nine", "C. Both A and B"],
                    correct: 2,
                    explanation: "Số 29 được viết là \"twenty-nine\" hoặc \"twenty nine\". Cả hai cách đều chấp nhận được."
                },
                {
                    question: "What does \"peaceful\" mean?",
                    options: ["A. Ồn ào", "B. Yên bình", "C. Đông đúc"],
                    correct: 1,
                    explanation: "\"Peaceful\" có nghĩa là yên bình, tĩnh lặng, không ồn ào."
                },
                {
                    question: "Chọn câu đúng:",
                    options: ["A. What do you think of Sydney Opera House?", "B. What you think of Sydney Opera House?", "C. What do you think Sydney Opera House?"],
                    correct: 0,
                    explanation: "Mẫu câu đúng là \"What do you think of + địa điểm?\" (Bạn nghĩ gì về...?)"
                },
                {
                    question: "How far is it from Ho Chi Minh City to Vung Tau? (khoảng 100km)",
                    options: ["A. It's about 10 kilometres.", "B. It's about 100 kilometres.", "C. It's about 1000 kilometres."],
                    correct: 1,
                    explanation: "Khoảng cách từ Sài Gòn đến Vũng Tàu thực tế khoảng 100km. Đây là kiến thức thực tế kết hợp với bài học."
                },
                {
                    question: "\"I think it's exciting.\" – Từ \"exciting\" dùng để miêu tả:",
                    options: ["A. Một nơi chán ngắt", "B. Một nơi thú vị, hấp dẫn", "C. Một nơi yên tĩnh"],
                    correct: 1,
                    explanation: "\"Exciting\" có nghĩa là thú vị, hấp dẫn, gây hứng thú."
                },
                {
                    question: "Dịch: \"Why not plan a trip with your family?\"",
                    options: ["A. Tại sao không lên kế hoạch cho một chuyến đi cùng gia đình?", "B. Bạn có muốn đi du lịch không?", "C. Gia đình bạn sẽ đi đâu?"],
                    correct: 0,
                    explanation: "\"Why not + động từ?\" là cấu trúc gợi ý, có nghĩa là \"Tại sao không...?\""
                }
            ]
        },
        20: {
            title: "Summer Holidays",
            vocabulary: [
                { word: "summer holiday", phonetic: "/ˈsʌmər ˈhɒlədeɪ/", vietnamese: "kỳ nghỉ hè", example: "I love summer holiday." },
                { word: "go camping", phonetic: "/ɡəʊ ˈkæmpɪŋ/", vietnamese: "đi cắm trại", example: "We go camping." },
                { word: "join a club", phonetic: "/dʒɔɪn ə klʌb/", vietnamese: "tham gia câu lạc bộ", example: "Join a music club." },
                { word: "practise swimming", phonetic: "/ˈpræktɪs ˈswɪmɪŋ/", vietnamese: "tập bơi", example: "Practise swimming every day." },
                { word: "visit a farm", phonetic: "/ˈvɪzɪt ə fɑːrm/", vietnamese: "thăm trang trại", example: "Visit an eco-farm." },
                { word: "Phu Quoc Island", phonetic: "/fuː kwɒk ˈaɪlənd/", vietnamese: "đảo Phú Quốc", example: "Go to Phu Quoc." },
                { word: "Phong Nha Cave", phonetic: "/fɒŋ nɑː keɪv/", vietnamese: "động Phong Nha", example: "Explore Phong Nha Cave." }
            ],
            quiz: [
                {
                    question: "Where are you going to visit this summer?",
                    options: ["A. I go to Phu Quoc.", "B. I'm going to visit Phu Quoc.", "C. I went to Phu Quoc."],
                    correct: 1,
                    explanation: "Câu hỏi dùng \"are you going to\" (tương lai gần) nên câu trả lời phải dùng \"I'm going to visit\". Đáp án A sai thì, C là quá khứ."
                },
                {
                    question: "What are you going to do this summer?",
                    options: ["A. I'm going to go camping.", "B. I go camping.", "C. I went camping."],
                    correct: 0,
                    explanation: "Tương tự câu 1, câu trả lời phải dùng \"I'm going to + động từ\" để chỉ dự định trong tương lai."
                },
                {
                    question: "\"What are you going to do?\" có nghĩa là gì?",
                    options: ["A. Bạn đã làm gì?", "B. Bạn định làm gì?", "C. Bạn thích làm gì?"],
                    correct: 1,
                    explanation: "\"Be going to\" dùng để diễn tả dự định trong tương lai gần. \"What are you going to do?\" = Bạn định làm gì?"
                },
                {
                    question: "Chọn đáp án đúng: \"I'm going to ___ a music club.\"",
                    options: ["A. join", "B. joins", "C. joining"],
                    correct: 0,
                    explanation: "Sau \"going to\" động từ luôn ở dạng nguyên thể (không thêm s, không thêm ing). \"Join\" là đúng."
                },
                {
                    question: "Where is Phong Nha Cave?",
                    options: ["A. In Ha Noi", "B. In Quang Binh", "C. In Da Nang"],
                    correct: 1,
                    explanation: "Động Phong Nha thuộc tỉnh Quảng Bình, là di sản thiên nhiên thế giới."
                },
                {
                    question: "Dịch: \"I grew vegetables on a farm with my grandparents.\"",
                    options: ["A. Tôi đã trồng rau trong trang trại cùng ông bà.", "B. Tôi sẽ trồng rau trong trang trại.", "C. Tôi thích trồng rau."],
                    correct: 0,
                    explanation: "\"Grew\" là quá khứ của \"grow\" (trồng). Câu nói về việc đã xảy ra trong quá khứ."
                },
                {
                    question: "What does \"eco-farm\" mean?",
                    options: ["A. Trang trại thông thường", "B. Trang trại sinh thái", "C. Trang trại chăn nuôi"],
                    correct: 1,
                    explanation: "\"Eco\" là viết tắt của \"ecological\" (sinh thái). Eco-farm là trang trại sinh thái, thân thiện với môi trường."
                },
                {
                    question: "Chọn câu hỏi đúng cho câu trả lời: \"I'm going to visit Phu Quoc Island.\"",
                    options: ["A. Where are you going to visit?", "B. What are you going to do?", "C. When are you going?"],
                    correct: 0,
                    explanation: "Câu trả lời nói về địa điểm (Phu Quoc), vậy câu hỏi phải là \"Where are you going to visit?\" (Bạn định đi thăm đâu?)"
                }
            ]
        },
        12: {
            title: "My School",
            vocabulary: [
                { word: "school", phonetic: "/skuːl/", vietnamese: "trường học", example: "I go to school every day." },
                { word: "class", phonetic: "/klɑːs/", vietnamese: "lớp học", example: "My class is big." },
                { word: "teacher", phonetic: "/ˈtiːtʃər/", vietnamese: "giáo viên", example: "My teacher is kind." },
                { word: "student", phonetic: "/ˈstjuːdnt/", vietnamese: "học sinh", example: "I am a student." },
                { word: "classroom", phonetic: "/ˈklɑːsruːm/", vietnamese: "phòng học", example: "The classroom is clean." },
                { word: "library", phonetic: "/ˈlaɪbreri/", vietnamese: "thư viện", example: "Read books in the library." },
                { word: "playground", phonetic: "/ˈpleɪɡraʊnd/", vietnamese: "sân chơi", example: "Play in the playground." },
                { word: "subject", phonetic: "/ˈsʌbdʒekt/", vietnamese: "môn học", example: "English is my favorite subject." },
                { word: "lesson", phonetic: "/ˈlesn/", vietnamese: "bài học", example: "We have a Math lesson." },
                { word: "homework", phonetic: "/ˈhəʊmwɜːk/", vietnamese: "bài tập về nhà", example: "Do homework every day." }
            ],
            quiz: [
                {
                    question: "What's your favorite subject?",
                    options: ["A. I like English.", "B. I am a student.", "C. I go to school."],
                    correct: 0,
                    explanation: "Câu hỏi về môn học yêu thích (favorite subject), câu trả lời phải nêu môn học. \"I like English\" là đáp án đúng."
                },
                {
                    question: "Where do you read books?",
                    options: ["A. In the classroom", "B. In the library", "C. In the playground"],
                    correct: 1,
                    explanation: "Thư viện (library) là nơi đọc sách. Classroom là phòng học, playground là sân chơi."
                },
                {
                    question: "Chọn câu đúng:",
                    options: ["A. My teacher are kind.", "B. My teacher is kind.", "C. My teacher am kind."],
                    correct: 1,
                    explanation: "Teacher (giáo viên) là danh từ số ít, dùng động từ \"is\". \"My teacher is kind\" là đúng."
                },
                {
                    question: "What do you do in the playground?",
                    options: ["A. Read books", "B. Play games", "C. Do homework"],
                    correct: 1,
                    explanation: "Sân chơi (playground) là nơi chơi game (play games). Đọc sách ở thư viện, làm bài tập ở nhà hoặc lớp."
                },
                {
                    question: "\"I have English lesson on Monday.\" có nghĩa là gì?",
                    options: ["A. Tôi học tiếng Anh vào thứ Hai.", "B. Tôi thích tiếng Anh.", "C. Tôi dạy tiếng Anh."],
                    correct: 0,
                    explanation: "\"Have English lesson\" = có bài học tiếng Anh. \"On Monday\" = vào thứ Hai."
                },
                {
                    question: "How many students are there in your class? (giả sử 30 học sinh)",
                    options: ["A. There is thirty students.", "B. There are thirty students.", "C. There have thirty students."],
                    correct: 1,
                    explanation: "\"Students\" là số nhiều, dùng \"There are\". \"Thirty\" viết không có chữ \"s\" ở cuối."
                },
                {
                    question: "What does \"homework\" mean?",
                    options: ["A. Bài tập ở lớp", "B. Bài tập về nhà", "C. Bài kiểm tra"],
                    correct: 1,
                    explanation: "\"Homework\" = bài tập về nhà (làm ở nhà sau giờ học)."
                },
                {
                    question: "Chọn từ đúng: \"We ___ Math and English every day.\"",
                    options: ["A. has", "B. have", "C. having"],
                    correct: 1,
                    explanation: "Chủ ngữ \"We\" là số nhiều, dùng động từ \"have\"."
                }
            ]
        },
        13: {
            title: "My Friends",
            vocabulary: [
                { word: "friend", phonetic: "/frend/", vietnamese: "bạn bè", example: "I have many friends." },
                { word: "friendly", phonetic: "/ˈfrendli/", vietnamese: "thân thiện", example: "She is very friendly." },
                { word: "kind", phonetic: "/kaɪnd/", vietnamese: "tốt bụng", example: "He is kind to everyone." },
                { word: "helpful", phonetic: "/ˈhelpfl/", vietnamese: "giúp ích", example: "She is helpful." },
                { word: "funny", phonetic: "/ˈfʌni/", vietnamese: "hài hước", example: "He tells funny stories." },
                { word: "smart", phonetic: "/smɑːrt/", vietnamese: "thông minh", example: "She is smart." },
                { word: "play together", phonetic: "/pleɪ təˈɡeðər/", vietnamese: "chơi cùng nhau", example: "We play together." },
                { word: "share", phonetic: "/ʃeər/", vietnamese: "chia sẻ", example: "Share toys with friends." },
                { word: "talk", phonetic: "/tɔːk/", vietnamese: "nói chuyện", example: "Talk to friends." },
                { word: "happy", phonetic: "/ˈhæpi/", vietnamese: "vui vẻ", example: "I am happy with my friends." }
            ],
            quiz: [
                {
                    question: "What is your best friend like?",
                    options: ["A. She likes reading.", "B. She is friendly and kind.", "C. She is a student."],
                    correct: 1,
                    explanation: "Câu hỏi \"What is...like?\" hỏi về tính cách. \"Friendly and kind\" (thân thiện và tốt bụng) là tính cách."
                },
                {
                    question: "What do you do with your friends?",
                    options: ["A. We play together.", "B. We study alone.", "C. We sleep all day."],
                    correct: 0,
                    explanation: "Bạn bè thường chơi cùng nhau (play together). Study alone là học một mình, không phải hoạt động với bạn bè."
                },
                {
                    question: "Chọn câu đúng:",
                    options: ["A. My friends is friendly.", "B. My friends are friendly.", "C. My friend are friendly."],
                    correct: 1,
                    explanation: "\"Friends\" là số nhiều, dùng \"are\". Câu B đúng."
                },
                {
                    question: "\"She always shares her toys with others.\" có nghĩa là gì?",
                    options: ["A. Cô ấy luôn giữ đồ chơi cho mình.", "B. Cô ấy luôn chia sẻ đồ chơi với người khác.", "C. Cô ấy thích mua đồ chơi."],
                    correct: 1,
                    explanation: "\"Share\" = chia sẻ. \"With others\" = với người khác."
                },
                {
                    question: "What does \"funny\" mean?",
                    options: ["A. Buồn", "B. Hài hước", "C. Nghiêm túc"],
                    correct: 1,
                    explanation: "\"Funny\" có nghĩa là hài hước, gây cười."
                },
                {
                    question: "Why do you like your best friend?",
                    options: ["A. Because she is smart and helpful.", "B. Because she is tall.", "C. Because she has many books."],
                    correct: 0,
                    explanation: "Lý do thích bạn bè thường là vì tính cách (smart, helpful, kind, friendly). Cao hay có sách không phải lý do chính."
                },
                {
                    question: "Chọn từ đúng: \"They ___ together every weekend.\"",
                    options: ["A. plays", "B. play", "C. playing"],
                    correct: 1,
                    explanation: "Chủ ngữ \"They\" số nhiều, dùng động từ \"play\"."
                },
                {
                    question: "\"He is very smart.\" – Từ \"smart\" có nghĩa là gì?",
                    options: ["A. Lười biếng", "B. Thông minh", "C. Yếu"],
                    correct: 1,
                    explanation: "\"Smart\" = thông minh, giỏi."
                }
            ]
        },
        17: {
            title: "Our Pets",
            vocabulary: [
                { word: "pet", phonetic: "/pet/", vietnamese: "thú cưng", example: "I have a pet." },
                { word: "dog", phonetic: "/dɒɡ/", vietnamese: "chó", example: "The dog is cute." },
                { word: "cat", phonetic: "/kæt/", vietnamese: "mèo", example: "The cat is lazy." },
                { word: "bird", phonetic: "/bɜːd/", vietnamese: "chim", example: "The bird sings." },
                { word: "rabbit", phonetic: "/ˈræbɪt/", vietnamese: "thỏ", example: "The rabbit has long ears." },
                { word: "hamster", phonetic: "/ˈhæmstər/", vietnamese: "chuột hamster", example: "My hamster is small." },
                { word: "goldfish", phonetic: "/ˈɡəʊldfɪʃ/", vietnamese: "cá vàng", example: "The goldfish swims." },
                { word: "feed", phonetic: "/fiːd/", vietnamese: "cho ăn", example: "Feed the pets." },
                { word: "cage", phonetic: "/keɪdʒ/", vietnamese: "lồng", example: "The bird is in the cage." },
                { word: "take care of", phonetic: "/teɪk keər ɒv/", vietnamese: "chăm sóc", example: "Take care of pets." }
            ],
            quiz: [
                {
                    question: "What pet do you have?",
                    options: ["A. I have a dog.", "B. I like dogs.", "C. I see a dog."],
                    correct: 0,
                    explanation: "Câu hỏi về thú cưng bạn có (have), câu trả lời phải dùng \"I have\". A là đúng."
                },
                {
                    question: "Where does the bird live?",
                    options: ["A. In the cage", "B. In the water", "C. On the ground"],
                    correct: 0,
                    explanation: "Chim (bird) sống trong lồng (cage). Cá sống trong nước, thỏ/chó/mèo sống trên mặt đất."
                },
                {
                    question: "Chọn câu đúng:",
                    options: ["A. My pet are cute.", "B. My pet is cute.", "C. My pets is cute."],
                    correct: 1,
                    explanation: "\"Pet\" là số ít, dùng \"is\". Câu B đúng."
                },
                {
                    question: "What do you feed your dog?",
                    options: ["A. Fish food", "B. Dog food", "C. Bird food"],
                    correct: 1,
                    explanation: "Chó (dog) ăn thức ăn cho chó (dog food). Cá ăn cá food, chim ăn bird food."
                },
                {
                    question: "\"You should take care of your pets.\" có nghĩa là gì?",
                    options: ["A. Bạn nên bỏ thú cưng.", "B. Bạn nên chăm sóc thú cưng.", "C. Bạn nên mua thêm thú cưng."],
                    correct: 1,
                    explanation: "\"Take care of\" = chăm sóc. \"Should\" = nên."
                },
                {
                    question: "What does the rabbit have?",
                    options: ["A. Long ears", "B. Short ears", "C. No ears"],
                    correct: 0,
                    explanation: "Thỏ (rabbit) có đôi tai dài (long ears)."
                },
                {
                    question: "How often do you feed your goldfish?",
                    options: ["A. Once a day", "B. Once a week", "C. Once a month"],
                    correct: 0,
                    explanation: "Cá vàng (goldfish) thường cho ăn một lần mỗi ngày (once a day)."
                },
                {
                    question: "Chọn từ đúng: \"My cat ___ fish.\"",
                    options: ["A. eat", "B. eats", "C. eating"],
                    correct: 1,
                    explanation: "Chủ ngữ \"My cat\" là số ít, động từ phải thêm \"s\" → \"eats\"."
                }
            ]
        },
        11: {
            title: "Family Time",
            vocabulary: [
                { word: "beach", phonetic: "/biːtʃ/", vietnamese: "bãi biển", example: "Go to the beach." },
                { word: "swim", phonetic: "/swɪm/", vietnamese: "bơi", example: "Swim in the sea." },
                { word: "took photos", phonetic: "/tʊk ˈfəʊtəʊz/", vietnamese: "đã chụp ảnh", example: "Took photos with dad." },
                { word: "collect seashells", phonetic: "/kəˈlekt ˈsiːʃelz/", vietnamese: "nhặt vỏ sò", example: "Collect seashells." },
                { word: "walk on the beach", phonetic: "/wɔːk ɒn ðə biːtʃ/", vietnamese: "đi bộ trên bãi biển", example: "Walk on the beach." },
                { word: "souvenir", phonetic: "/ˌsuːvəˈnɪər/", vietnamese: "quà lưu niệm", example: "Buy souvenirs." },
                { word: "journey", phonetic: "/ˈdʒɜːni/", vietnamese: "hành trình", example: "Long journey." }
            ],
            quiz: [
                {
                    question: "Did you swim yesterday?",
                    options: ["A. Yes, I swim.", "B. Yes, I did.", "C. Yes, I do."],
                    correct: 1,
                    explanation: "Câu hỏi ở thì quá khứ đơn (Did you swim?), câu trả lời ngắn đúng là \"Yes, I did\" hoặc \"No, I didn't\"."
                },
                {
                    question: "Where did your family go last Sunday?",
                    options: ["A. We go to the beach.", "B. We went to the beach.", "C. We are going to the beach."],
                    correct: 1,
                    explanation: "\"Last Sunday\" (Chủ nhật tuần trước) là dấu hiệu của thì quá khứ. Động từ \"go\" phải chia thành \"went\"."
                },
                {
                    question: "What did Linda and her brother buy? (theo bài đọc Unit 11)",
                    options: ["A. Seafood", "B. Souvenirs", "C. Photos"],
                    correct: 1,
                    explanation: "Đoạn văn: \"Linda and her brother bought some souvenirs for their friends.\" Vậy họ mua quà lưu niệm (souvenirs)."
                },
                {
                    question: "\"Did you take photos with your father?\" có nghĩa là gì?",
                    options: ["A. Bạn đã bơi cùng bố phải không?", "B. Bạn đã chụp ảnh cùng bố phải không?", "C. Bạn đã đi bộ cùng bố phải không?"],
                    correct: 1,
                    explanation: "\"Take photos\" = chụp ảnh. \"With your father\" = cùng với bố của bạn."
                },
                {
                    question: "Chọn từ đúng: \"A: Did you swim yesterday? B: Yes, I did. I ___ with my father.\"",
                    options: ["A. swim", "B. swam", "C. swimming"],
                    correct: 1,
                    explanation: "Câu trả lời khẳng định ở thì quá khứ, động từ \"swim\" phải chia thành \"swam\"."
                },
                {
                    question: "When did Linda's family take a boat trip?",
                    options: ["A. On Saturday", "B. On Sunday", "C. On Monday"],
                    correct: 1,
                    explanation: "Đoạn văn: \"On Sunday, they took a boat trip around the bay.\" → Vào Chủ nhật."
                },
                {
                    question: "Dịch: \"The journey took a long time, but they had lots of fun.\"",
                    options: ["A. Cuộc hành trình mất nhiều thời gian, nhưng họ đã có rất nhiều niềm vui.", "B. Cuộc hành trình rất ngắn, nhưng họ không vui.", "C. Họ không thích cuộc hành trình vì mất nhiều thời gian."],
                    correct: 0,
                    explanation: "\"Journey\" = hành trình, \"took a long time\" = mất nhiều thời gian, \"but\" = nhưng, \"had lots of fun\" = có rất nhiều niềm vui."
                },
                {
                    question: "Từ nào khác loại? (động từ quá khứ)",
                    options: ["A. swam", "B. took", "C. walk", "D. bought"],
                    correct: 2,
                    explanation: "\"Swam\", \"took\", \"bought\" đều là động từ ở thì quá khứ (V2). \"Walk\" là động từ hiện tại, thiếu \"ed\" để thành \"walked\"."
                }
            ]
        },
        "review": {
            title: "Ôn tập Tổng hợp",
            vocabulary: [
                { word: "review", phonetic: "/rɪˈvjuː/", vietnamese: "ôn lại", example: "Review your lessons." },
                { word: "practice", phonetic: "/ˈpræktɪs/", vietnamese: "luyện tập", example: "Practice English every day." },
                { word: "remember", phonetic: "/rɪˈmembər/", vietnamese: "nhớ", example: "Remember new words." },
                { word: "study", phonetic: "/ˈstʌdi/", vietnamese: "học", example: "Study hard every day." },
                { word: "learn", phonetic: "/lɜːrn/", vietnamese: "học", example: "Learn English every day." },
                { word: "repeat", phonetic: "/rɪˈpiːt/", vietnamese: "lặp lại", example: "Repeat after me." },
                { word: "understand", phonetic: "/ˌʌndərˈstænd/", vietnamese: "hiểu", example: "I understand the lesson." },
                { word: "improve", phonetic: "/ɪmˈpruːv/", vietnamese: "cải thiện", example: "Improve your English." }
            ],
            quiz: [
                {
                    question: "What does \"review\" mean?",
                    options: ["A. Học mới", "B. Ôn lại", "C. Bỏ qua", "D. Quên"],
                    correct: 1,
                    explanation: "\"Review\" có nghĩa là ôn lại, xem lại những gì đã học."
                },
                {
                    question: "How often should you practice English?",
                    options: ["A. Once a month", "B. Once a week", "C. Every day", "D. Never"],
                    correct: 2,
                    explanation: "Nên luyện tập tiếng Anh mỗi ngày để cải thiện kỹ năng."
                },
                {
                    question: "What's the best way to remember new words?",
                    options: ["A. Look once", "B. Write and repeat", "C. Ignore them", "D. Copy only"],
                    correct: 1,
                    explanation: "Cách tốt nhất để nhớ từ mới là viết ra và lặp lại nhiều lần."
                },
                {
                    question: "Chọn câu đúng:",
                    options: ["A. I review my lesson yesterday.", "B. I reviewed my lesson yesterday.", "C. I reviewing my lesson yesterday."],
                    correct: 1,
                    explanation: "Câu ở thì quá khứ đơn, động từ \"review\" phải chia thành \"reviewed\"."
                },
                {
                    question: "Why is practice important?",
                    options: ["A. It's not important", "B. It helps you learn faster", "C. It's boring", "D. It's a waste of time"],
                    correct: 1,
                    explanation: "Luyện tập giúp bạn học nhanh hơn và nhớ lâu hơn."
                },
                {
                    question: "What should you do before a test?",
                    options: ["A. Sleep all day", "B. Play games", "C. Review lessons", "D. Watch TV"],
                    correct: 2,
                    explanation: "Trước khi thi, bạn nên ôn lại các bài học (review lessons)."
                },
                {
                    question: "How to improve your English?",
                    options: ["A. Do nothing", "B. Practice every day", "C. Study once a year", "D. Give up"],
                    correct: 1,
                    explanation: "Cải thiện tiếng Anh bằng cách luyện tập mỗi ngày."
                },
                {
                    question: "What does \"understand\" mean?",
                    options: ["A. Không biết", "B. Hiểu", "C. Quên", "D. Bỏ qua"],
                    correct: 1,
                    explanation: "\"Understand\" có nghĩa là hiểu, nắm được ý nghĩa."
                }
            ]
        }
    },
    mockTest: [
        // Part A: Phonetics (5 questions)
        {
            question: "Chọn từ có phần gạch chân phát âm khác:",
            options: ["A. beach", "B. read", "C. weather", "D. mean"],
            correct: 2,
            explanation: "\"beach\" (/iː/), \"read\" (/iː/), \"mean\" (/iː/) có âm \"ee\" dài. \"weather\" (/e/) có âm \"e\" ngắn.",
            part: "phonetics"
        },
        {
            question: "Chọn từ có phần gạch chân phát âm khác:",
            options: ["A. summer", "B. winter", "C. spring", "D. autumn"],
            correct: 3,
            explanation: "\"Summer, winter, spring\" có âm /ɪ/ hoặc /ʌ/. \"Autumn\" có âm câm \"n\", cách phát âm đặc biệt /ˈɔːtəm/.",
            part: "phonetics"
        },
        {
            question: "Chọn từ có phần gạch chân phát âm khác:",
            options: ["A. hot", "B. cold", "C. go", "D. no"],
            correct: 0,
            explanation: "\"Hot\" có âm /ɒ/, \"cold, go, no\" có âm /əʊ/ (âu dài).",
            part: "phonetics"
        },
        {
            question: "Chọn từ có phần gạch chân phát âm khác:",
            options: ["A. bus", "B. cut", "C. put", "D. sun"],
            correct: 2,
            explanation: "\"Bus, cut, sun\" có âm /ʌ/. \"Put\" có âm /ʊ/ (u ngắn, khác).",
            part: "phonetics"
        },
        {
            question: "Chọn từ có phần gạch chân phát âm khác:",
            options: ["A. headache", "B. beach", "C. cheap", "D. teach"],
            correct: 0,
            explanation: "\"Beach, cheap, teach\" có âm /iː/. \"Headache\" có âm /e/ ở \"head\".",
            part: "phonetics"
        },
        // Part B: Vocabulary and Grammar (12 questions)
        {
            question: "How's the weather in summer?",
            options: ["A. It's warm.", "B. It's hot.", "C. It's cold."],
            correct: 1,
            explanation: "Mùa hè (summer) thời tiết nóng (hot).",
            part: "vocabulary"
        },
        {
            question: "What do you usually wear in winter?",
            options: ["A. Shorts and T-shirt", "B. Jumper and jeans", "C. Dress"],
            correct: 1,
            explanation: "Mùa đông lạnh nên mặc áo len và quần jean để giữ ấm.",
            part: "vocabulary"
        },
        {
            question: "What's the matter with you? (đau răng)",
            options: ["A. I have a headache.", "B. I have a toothache.", "C. I have a sore throat."],
            correct: 1,
            explanation: "\"Toothache\" là đau răng.",
            part: "vocabulary"
        },
        {
            question: "You should ___ to the dentist when you have a toothache.",
            options: ["A. go", "B. went", "C. going"],
            correct: 0,
            explanation: "Sau \"should\" là động từ nguyên thể.",
            part: "grammar"
        },
        {
            question: "Where ___ you want to visit?",
            options: ["A. do", "B. does", "C. are"],
            correct: 0,
            explanation: "Với \"you\" dùng \"do\" để hỏi ở hiện tại đơn.",
            part: "grammar"
        },
        {
            question: "How can I get to the museum?",
            options: ["A. You can get there by bus.", "B. You can get there on foot.", "C. Both A and B."],
            correct: 2,
            explanation: "Có thể đến bảo tàng bằng nhiều cách tùy khoảng cách.",
            part: "vocabulary"
        },
        {
            question: "What do you think of Ha Long Bay?",
            options: ["A. I think it's boring.", "B. I think it's fantastic.", "C. I think it's noisy."],
            correct: 1,
            explanation: "Vịnh Hạ Long rất đẹp, \"fantastic\" (tuyệt vời) là từ phù hợp nhất.",
            part: "vocabulary"
        },
        {
            question: "How far is it from Da Nang to Hoi An?",
            options: ["A. It's about 29 kilometres.", "B. It's about 29 metres.", "C. It's about 29 hours."],
            correct: 0,
            explanation: "Khoảng cách từ Đà Nẵng đến Hội An khoảng 29 km.",
            part: "vocabulary"
        },
        {
            question: "Where are you going to visit this summer?",
            options: ["A. I go to Phu Quoc.", "B. I'm going to visit Phu Quoc.", "C. I went to Phu Quoc."],
            correct: 1,
            explanation: "Câu hỏi dùng \"be going to\" (tương lai gần) nên trả lời cũng dùng cấu trúc này.",
            part: "grammar"
        },
        {
            question: "What are you going to do this summer?",
            options: ["A. I'm going to go camping.", "B. I go camping.", "C. I went camping."],
            correct: 0,
            explanation: "Dùng \"be going to + động từ\" để nói về dự định tương lai.",
            part: "grammar"
        },
        {
            question: "Did you swim yesterday?",
            options: ["A. Yes, I swim.", "B. Yes, I did.", "C. Yes, I do."],
            correct: 1,
            explanation: "Câu hỏi quá khứ đơn \"Did\" trả lời bằng \"Yes, I did/No, I didn't\".",
            part: "grammar"
        },
        {
            question: "Where did your family go last Sunday?",
            options: ["A. We go to the beach.", "B. We went to the beach.", "C. We are going to the beach."],
            correct: 1,
            explanation: "\"Last Sunday\" là dấu hiệu quá khứ, động từ \"go\" chia thành \"went\".",
            part: "grammar"
        },
        // Part C: Reading Comprehension (8 questions)
        {
            question: "What does Peter eat for breakfast?",
            options: ["A. Fish and vegetables", "B. Egg sandwich and fruit", "C. Bread and milk"],
            correct: 1,
            explanation: "Trong bài đọc: \"For breakfast, he usually eats an egg sandwich and some fresh fruit.\"",
            part: "reading"
        },
        {
            question: "What does Peter drink?",
            options: ["A. Soda and juice", "B. Water and fresh juice", "C. Milk and coffee"],
            correct: 1,
            explanation: "Trong bài đọc: \"Peter drinks lots of water and fresh juice.\"",
            part: "reading"
        },
        {
            question: "How often does Peter exercise?",
            options: ["A. Every morning", "B. Every afternoon", "C. Every evening"],
            correct: 0,
            explanation: "Trong bài đọc: \"He exercises every morning.\"",
            part: "reading"
        },
        {
            question: "When does Peter do judo?",
            options: ["A. On Mondays and Wednesdays", "B. On Tuesdays and Thursdays", "C. On weekends"],
            correct: 1,
            explanation: "Trong bài đọc: \"He does judo on Tuesdays and Thursdays.\"",
            part: "reading"
        },
        {
            question: "What does \"healthy food\" mean?",
            options: ["A. Đồ ăn nhanh", "B. Đồ ăn có lợi cho sức khỏe", "C. Đồ ăn ngọt"],
            correct: 1,
            explanation: "\"Healthy food\" là đồ ăn có lợi cho sức khỏe.",
            part: "reading"
        },
        {
            question: "Where did Linda's family go last weekend?",
            options: ["A. To Da Nang", "B. To Ha Long Bay", "C. To Ho Chi Minh City"],
            correct: 1,
            explanation: "Trong bài đọc: \"Linda and her family went to Ha Long Bay last weekend.\"",
            part: "reading"
        },
        {
            question: "What did they do on Saturday?",
            options: ["A. Took a boat trip", "B. Sunbathed and swam", "C. Bought souvenirs"],
            correct: 1,
            explanation: "Trong bài đọc: \"On Saturday, they sunbathed on the beach and swam in the sea.\"",
            part: "reading"
        },
        {
            question: "What did Linda buy?",
            options: ["A. Seafood", "B. Souvenirs", "C. Photos"],
            correct: 1,
            explanation: "Trong bài đọc: \"Linda and her brother bought some souvenirs for their friends.\"",
            part: "reading"
        }
    ],
    // New exercise types
    readingComprehension: [
        {
            id: 1,
            unit: 16,
            title: "Unit 16 - Four Seasons in Vietnam",
            passage: "There are four seasons in the north of Viet Nam: spring, summer, autumn and winter. Each season has different weather. Spring is warm and humid. There are many flowers in spring. People often go for picnics. Summer is hot and sunny. Children have summer holidays. They go to the beach and swim in the sea. Autumn is cool and cloudy. The sky is blue. The leaves turn yellow. It's a beautiful season. Winter is cold and dry. People wear warm clothes like jumpers, jackets, and scarves. They drink hot tea and stay at home. Which season do you like best?",
            questions: [
                {
                    type: "trueFalse",
                    question: "There are four seasons in the north of Viet Nam.",
                    correct: true,
                    explanation: "Đoạn văn nói rõ: 'There are four seasons in the north of Viet Nam'."
                },
                {
                    type: "trueFalse",
                    question: "Summer is cool and cloudy.",
                    correct: false,
                    explanation: "Sai! Đoạn văn nói: 'Summer is hot and sunny'."
                },
                {
                    type: "trueFalse",
                    question: "People wear warm clothes in autumn.",
                    correct: false,
                    explanation: "Sai! Đoạn văn nói: 'People wear warm clothes' vào mùa đông (winter), không phải mùa thu."
                },
                {
                    type: "trueFalse",
                    question: "Children have summer holidays in summer.",
                    correct: true,
                    explanation: "Đúng! Đoạn văn nói: 'Children have summer holidays' vào mùa hè."
                },
                {
                    type: "shortAnswer",
                    question: "What do people do in spring?",
                    correct: "They go for picnics.",
                    explanation: "Đoạn văn nói: 'People often go for picnics' vào mùa xuân."
                },
                {
                    type: "shortAnswer",
                    question: "What do children do in summer?",
                    correct: "They go to the beach and swim in the sea.",
                    explanation: "Đoạn văn nói: 'They go to the beach and swim in the sea'."
                }
            ]
        },
        {
            id: 2,
            unit: "14-15",
            title: "Unit 14+15 - Peter's Healthy Lifestyle",
            passage: "Peter is a healthy boy. He eats healthy food every day. He has fish, vegetables, and fruit for lunch and dinner. He doesn't eat fast food or sweets. He drinks lots of water, about 8 glasses a day. He exercises every morning before school. He does judo twice a week on Tuesdays and Fridays. He also rides his bicycle to school. When Peter has a toothache, he goes to the dentist. When he has a headache, he rests and drinks water. He never stays up late. He goes to bed at 9 o'clock every night. That's why Peter is always healthy and strong.",
            questions: [
                {
                    type: "trueFalse",
                    question: "Peter eats fast food.",
                    correct: false,
                    explanation: "Sai! Đoạn văn nói: 'He doesn't eat fast food or sweets'."
                },
                {
                    type: "trueFalse",
                    question: "Peter does judo twice a week.",
                    correct: true,
                    explanation: "Đúng! Đoạn văn nói: 'He does judo twice a week'."
                },
                {
                    type: "trueFalse",
                    question: "Peter goes to bed at 10 o'clock.",
                    correct: false,
                    explanation: "Sai! Đoạn văn nói: 'He goes to bed at 9 o'clock every night'."
                },
                {
                    type: "trueFalse",
                    question: "Peter rides his bicycle to school.",
                    correct: true,
                    explanation: "Đúng! Đoạn văn nói: 'He also rides his bicycle to school'."
                },
                {
                    type: "shortAnswer",
                    question: "What does Peter do when he has a toothache?",
                    correct: "He goes to the dentist.",
                    explanation: "Đoạn văn nói: 'When Peter has a toothache, he goes to the dentist'."
                },
                {
                    type: "shortAnswer",
                    question: "How much water does Peter drink every day?",
                    correct: "About 8 glasses.",
                    explanation: "Đoạn văn nói: 'He drinks lots of water, about 8 glasses a day'."
                }
            ]
        },
        {
            id: 3,
            unit: 18,
            title: "Unit 18 - Getting Around in Hanoi",
            passage: "Welcome to Ha Noi! It's a beautiful city in Viet Nam. There are many interesting places to visit. To get to Hoan Kiem Lake, you can take a bus number 9 or walk. It is in the centre of the city. Many tourists visit this place every day. To get to the Museum of Ethnology, you can take a bus or a taxi. It's about 5 kilometres from the city centre. To get to the West Lake, you can ride a bicycle or take a taxi. It's not far from the city centre. You can see many beautiful buildings around the lake. To get to the Opera House, you can take a bus or walk. It's in the centre of Ha Noi, near Hoan Kiem Lake. Remember to check if it's far or near before you choose your transportation.",
            questions: [
                {
                    type: "trueFalse",
                    question: "You can only go to Hoan Kiem Lake by bus.",
                    correct: false,
                    explanation: "Sai! Đoạn văn nói: 'you can take a bus number 9 or walk'."
                },
                {
                    type: "trueFalse",
                    question: "The Museum of Ethnology is about 5 kilometres from the city centre.",
                    correct: true,
                    explanation: "Đúng! Đoạn văn nói: 'It's about 5 kilometres from the city centre'."
                },
                {
                    type: "trueFalse",
                    question: "You can ride a bicycle to the West Lake.",
                    correct: true,
                    explanation: "Đúng! Đoạn văn nói: 'you can ride a bicycle or take a taxi'."
                },
                {
                    type: "trueFalse",
                    question: "The Opera House is far from Hoan Kiem Lake.",
                    correct: false,
                    explanation: "Sai! Đoạn văn nói: 'It's in the centre of Ha Noi, near Hoan Kiem Lake'."
                },
                {
                    type: "shortAnswer",
                    question: "Where is Hoan Kiem Lake?",
                    correct: "In the centre of Ha Noi.",
                    explanation: "Đoạn văn nói: 'It is in the centre of the city'."
                },
                {
                    type: "shortAnswer",
                    question: "What can you see around the West Lake?",
                    correct: "Many beautiful buildings.",
                    explanation: "Đoạn văn nói: 'You can see many beautiful buildings around the lake'."
                }
            ]
        },
        {
            id: 4,
            unit: 19,
            title: "Unit 19 - A Trip to Sentosa Island",
            passage: "Last month, my family went to Singapore. We visited Sentosa Island. It is a fantastic place for a holiday. The island has beautiful beaches. You can build sandcastles on the beach and swim in the sea. In the evening, we watched a wonderful show called 'Songs of the Sea'. There were lights, music, and water fountains. It was amazing! We also visited the Merlion Park. The Merlion is a famous symbol of Singapore. It has the head of a lion and the body of a fish. We took many photos there. We also went to the Singapore Zoo. It's one of the best zoos in the world. We saw many animals like monkeys, elephants, and giraffes. It was a great trip. I want to visit Singapore again!",
            questions: [
                {
                    type: "trueFalse",
                    question: "Sentosa Island is in Viet Nam.",
                    correct: false,
                    explanation: "Sai! Đoạn văn nói: 'my family went to Singapore'. Sentosa Island ở Singapore."
                },
                {
                    type: "trueFalse",
                    question: "The Merlion has the head of a fish and the body of a lion.",
                    correct: false,
                    explanation: "Sai! Đoạn văn nói: 'It has the head of a lion and the body of a fish'."
                },
                {
                    type: "trueFalse",
                    question: "They watched a show called 'Songs of the Sea'.",
                    correct: true,
                    explanation: "Đúng! Đoạn văn nói: 'we watched a wonderful show called Songs of the Sea'."
                },
                {
                    type: "trueFalse",
                    question: "The Singapore Zoo is one of the best zoos in the world.",
                    correct: true,
                    explanation: "Đúng! Đoạn văn nói: 'It's one of the best zoos in the world'."
                },
                {
                    type: "shortAnswer",
                    question: "What can you do on the beach at Sentosa Island?",
                    correct: "Build sandcastles and swim in the sea.",
                    explanation: "Đoạn văn nói: 'You can build sandcastles on the beach and swim in the sea'."
                },
                {
                    type: "shortAnswer",
                    question: "What animals did they see at the zoo?",
                    correct: "Monkeys, elephants, and giraffes.",
                    explanation: "Đoạn văn nói: 'We saw many animals like monkeys, elephants, and giraffes'."
                }
            ]
        },
        {
            id: 5,
            unit: 20,
            title: "Unit 20 - Summer Holiday Plans",
            passage: "Last summer, Linh went to an eco-farm in the countryside. She stayed with her grandparents for two weeks. She helped her grandparents grow vegetables like tomatoes, cucumbers, and beans. She also fed the chickens and ducks. She learned how to cook traditional Vietnamese food. It was a wonderful experience. This summer, Linh is going to visit Phu Quoc Island with her parents. They are going to stay at a hotel near the beach. They are going to swim in the sea and go snorkeling to see colorful fish. They are going to eat fresh seafood. Linh is also going to buy some souvenirs for her friends. She is very excited about this trip. What are you going to do this summer?",
            questions: [
                {
                    type: "trueFalse",
                    question: "Linh went to an eco-farm last summer.",
                    correct: true,
                    explanation: "Đúng! Đoạn văn nói: 'Last summer, Linh went to an eco-farm'."
                },
                {
                    type: "trueFalse",
                    question: "Linh stayed with her grandparents for one week.",
                    correct: false,
                    explanation: "Sai! Đoạn văn nói: 'She stayed with her grandparents for two weeks'."
                },
                {
                    type: "trueFalse",
                    question: "This summer, Linh is going to visit Phu Quoc Island with her friends.",
                    correct: false,
                    explanation: "Sai! Đoạn văn nói: 'Linh is going to visit Phu Quoc Island with her parents'."
                },
                {
                    type: "trueFalse",
                    question: "They are going to go snorkeling.",
                    correct: true,
                    explanation: "Đúng! Đoạn văn nói: 'They are going to swim in the sea and go snorkeling'."
                },
                {
                    type: "shortAnswer",
                    question: "What did Linh grow at the eco-farm?",
                    correct: "Tomatoes, cucumbers, and beans.",
                    explanation: "Đoạn văn nói: 'She helped her grandparents grow vegetables like tomatoes, cucumbers, and beans'."
                },
                {
                    type: "shortAnswer",
                    question: "What animals did Linh feed at the eco-farm?",
                    correct: "Chickens and ducks.",
                    explanation: "Đoạn văn nói: 'She also fed the chickens and ducks'."
                }
            ]
        }
    ],
    matchingExercises: [
        {
            id: 1,
            unit: 16,
            title: "Unit 16 - Thời tiết",
            columnA: [
                "1. How's the weather in summer?",
                "2. How's the weather in winter?",
                "3. What do you wear in winter?"
            ],
            columnB: [
                "a. I wear a jumper and jeans.",
                "b. It's hot and sunny.",
                "c. It's cold and dry."
            ],
            correctAnswers: { "1": "b", "2": "c", "3": "a" },
            explanation: "Ghép câu hỏi về thời tiết với câu trả lời phù hợp."
        },
        {
            id: 2,
            unit: "14-15",
            title: "Unit 14+15 - Sức khỏe",
            columnA: [
                "1. What's the matter with you? (đau răng)",
                "2. What should I do when I have a toothache?",
                "3. How does Peter stay healthy?"
            ],
            columnB: [
                "a. You should go to the dentist.",
                "b. I have a toothache.",
                "c. He eats fish and vegetables."
            ],
            correctAnswers: { "1": "b", "2": "a", "3": "c" },
            explanation: "Ghép câu hỏi về sức khỏe với lời khuyên phù hợp."
        },
        {
            id: 3,
            unit: 18,
            title: "Unit 18 - Phương tiện",
            columnA: [
                "1. Where do you want to visit?",
                "2. How can I get to the museum?",
                "3. Is it far from here?"
            ],
            columnB: [
                "a. You can get there by bus.",
                "b. I want to visit Ha Long Bay.",
                "c. No, it isn't."
            ],
            correctAnswers: { "1": "b", "2": "a", "3": "c" },
            explanation: "Ghép câu hỏi về phương tiện và địa điểm với câu trả lời phù hợp."
        },
        {
            id: 4,
            unit: 19,
            title: "Unit 19 - Địa điểm",
            columnA: [
                "1. What do you think of Ha Long Bay?",
                "2. How far is it from Da Nang to Hoi An?",
                "3. What do you think of the Sydney Opera House?"
            ],
            columnB: [
                "a. It's about 29 kilometres.",
                "b. I think it's fantastic.",
                "c. I think it's beautiful."
            ],
            correctAnswers: { "1": "b", "2": "a", "3": "c" },
            explanation: "Ghép câu hỏi về ý kiến và khoảng cách với câu trả lời phù hợp."
        },
        {
            id: 5,
            unit: "20-11",
            title: "Unit 20 + 11 - Kỳ nghỉ & Gia đình",
            columnA: [
                "1. Where are you going to visit this summer?",
                "2. What are you going to do this summer?",
                "3. Did you swim yesterday?"
            ],
            columnB: [
                "a. Yes, I did.",
                "b. I'm going to visit Phu Quoc.",
                "c. I'm going to go camping."
            ],
            correctAnswers: { "1": "b", "2": "c", "3": "a" },
            explanation: "Ghép câu hỏi về kỳ nghỉ và quá khứ với câu trả lời phù hợp."
        }
    ],
    sentenceRearrangement: [
        {
            id: 1,
            unit: 16,
            title: "Unit 16 - Seasons and Weather",
            sentences: [
                {
                    scrambled: "hot / summer / is",
                    correct: "Summer is hot.",
                    explanation: "Mùa hè thì nóng. Chủ ngữ 'Summer' + động từ 'is' + tính từ 'hot'.",
                    type: "statement"
                },
                {
                    scrambled: "wear / I / winter / jeans / in",
                    correct: "I wear jeans in winter.",
                    explanation: "Tôi mặc quần jean vào mùa đông. Chủ ngữ + động từ + tân ngữ + giới từ chỉ thời gian.",
                    type: "statement"
                },
                {
                    scrambled: "weather / the / is / in / spring / warm",
                    correct: "The weather in spring is warm.",
                    explanation: "Thời tiết mùa xuân ấm. Cấu trúc: The weather in + season + is + tính từ.",
                    type: "statement"
                },
                {
                    scrambled: "is / autumn / cool / and / cloudy",
                    correct: "Autumn is cool and cloudy.",
                    explanation: "Mùa thu mát và nhiều mây. Chủ ngữ + động từ + tính từ + and + tính từ.",
                    type: "statement"
                },
                {
                    scrambled: "weather / How's / the / in / winter",
                    correct: "How's the weather in winter?",
                    explanation: "Thời tiết mùa đông thế nào? Câu hỏi thời tiết với 'How's'.",
                    type: "question"
                }
            ]
        },
        {
            id: 2,
            unit: "14-15",
            title: "Unit 14+15 - Health and Advice",
            sentences: [
                {
                    scrambled: "have / I / a / headache",
                    correct: "I have a headache.",
                    explanation: "Tôi bị đau đầu. Cấu trúc 'I have a + bệnh'.",
                    type: "statement"
                },
                {
                    scrambled: "should / you / to / go / dentist / the",
                    correct: "You should go to the dentist.",
                    explanation: "Bạn nên đi nha sĩ. 'Should' + động từ nguyên thể.",
                    type: "statement"
                },
                {
                    scrambled: "shouldn't / eat / You / sweet / food",
                    correct: "You shouldn't eat sweet food.",
                    explanation: "Bạn không nên ăn đồ ngọt. 'Shouldn't' + động từ nguyên thể.",
                    type: "statement"
                },
                {
                    scrambled: "matter / the / with / is / What / you",
                    correct: "What's the matter with you?",
                    explanation: "Bạn bị sao? Câu hỏi về sức khỏe.",
                    type: "question"
                },
                {
                    scrambled: "should / I / do / What",
                    correct: "What should I do?",
                    explanation: "Tôi nên làm gì? Câu hỏi xin lời khuyên.",
                    type: "question"
                }
            ]
        },
        {
            id: 3,
            unit: 18,
            title: "Unit 18 - Transport and Directions",
            sentences: [
                {
                    scrambled: "you / do / want / where / to / visit",
                    correct: "Where do you want to visit?",
                    explanation: "Bạn muốn tham quan ở đâu? Câu hỏi với 'Where' + trợ động từ 'do'.",
                    type: "question"
                },
                {
                    scrambled: "get / can / I / how / to / the / museum",
                    correct: "How can I get to the museum?",
                    explanation: "Làm thế nào tôi có thể đến bảo tàng? Câu hỏi chỉ đường.",
                    type: "question"
                },
                {
                    scrambled: "is / it / far / from / here",
                    correct: "Is it far from here?",
                    explanation: "Nó có xa không ở đây? Câu hỏi về khoảng cách.",
                    type: "question"
                },
                {
                    scrambled: "can / get / there / bus / You / by / a",
                    correct: "You can get there by bus.",
                    explanation: "Bạn có thể đến đó bằng xe buýt. Cấu trúc: You can + get to + nơi + by + phương tiện.",
                    type: "statement"
                },
                {
                    scrambled: "want / I / visit / to / Ha Long Bay",
                    correct: "I want to visit Ha Long Bay.",
                    explanation: "Tôi muốn thăm vịnh Hạ Long. Cấu trúc: I want to + động từ nguyên thể.",
                    type: "statement"
                }
            ]
        },
        {
            id: 4,
            unit: 19,
            title: "Unit 19 - Places and Opinions",
            sentences: [
                {
                    scrambled: "think / you / what / of / Ha Long Bay / do",
                    correct: "What do you think of Ha Long Bay?",
                    explanation: "Bạn nghĩ gì về vịnh Hạ Long? Cấu trúc hỏi ý kiến.",
                    type: "question"
                },
                {
                    scrambled: "is / it / far / from / here / to / the / beach",
                    correct: "How far is it from here to the beach?",
                    explanation: "Khoảng cách từ đây đến bãi biển bao xa? Câu hỏi khoảng cách.",
                    type: "question"
                },
                {
                    scrambled: "is / about / kilometres / It / 29",
                    correct: "It is about 29 kilometres.",
                    explanation: "Nó khoảng 29 ki-lô-mét. Cấu trúc: It is about + số + kilometres.",
                    type: "statement"
                },
                {
                    scrambled: "think / fantastic / I / is / it",
                    correct: "I think it is fantastic.",
                    explanation: "Tôi nghĩ nó tuyệt vời. Cấu trúc nêu ý kiến.",
                    type: "statement"
                },
                {
                    scrambled: "place / beautiful / a / is / It",
                    correct: "It is a beautiful place.",
                    explanation: "Nó là một nơi đẹp. Cấu trúc: It is a + tính từ + noun.",
                    type: "statement"
                }
            ]
        },
        {
            id: 5,
            unit: 20,
            title: "Unit 20 - Summer Plans and Past Actions",
            sentences: [
                {
                    scrambled: "going / I / to / am / visit / Phu Quoc",
                    correct: "I am going to visit Phu Quoc.",
                    explanation: "Tôi định đi thăm Phú Quốc. Cấu trúc 'be going to'.",
                    type: "statement"
                },
                {
                    scrambled: "did / you / yesterday / swim",
                    correct: "Did you swim yesterday?",
                    explanation: "Hôm qua bạn đã bơi phải không? Câu hỏi thì quá khứ đơn.",
                    type: "question"
                },
                {
                    scrambled: "went / to / beach / the / We",
                    correct: "We went to the beach.",
                    explanation: "Chúng tôi đã đi đến bãi biển. Thì quá khứ đơn.",
                    type: "statement"
                },
                {
                    scrambled: "are / you / going / to / do / this / summer / What",
                    correct: "What are you going to do this summer?",
                    explanation: "Bạn sẽ làm gì mùa hè này? Câu hỏi với be going to.",
                    type: "question"
                },
                {
                    scrambled: "are / the / who / characters / main",
                    correct: "Who are the main characters?",
                    explanation: "Ai là nhân vật chính? Câu hỏi với 'Who' + động từ 'are'.",
                    type: "question"
                }
            ]
        }
    ]
};

// Global variables
let currentTab = 'roadmap';
let currentUnit = null;
let currentMode = null;
let currentFlashcardIndex = 0;
let currentQuizIndex = 0;
let quizAnswers = [];
let mockTestAnswers = [];
let currentMockTestQuestion = 0;
let speechSynthesis = window.speechSynthesis;
let currentDayModal = null; // Track which day modal is open

// New exercise type variables
let currentReadingIndex = 0;
let readingAnswers = [];
let currentMatchingIndex = 0;
let matchingAnswers = {};
let currentSentenceExerciseIndex = 0;
let currentSentenceIndex = 0;
let sentenceAnswers = [];


function initializeApp() {
    initializeCountdown();
    initializeTabs();
    initializeRoadmap();
    loadProgress();
    updateErrorStats();
}

// Countdown timer
function initializeCountdown() {
    const examDate = new Date('2026-05-11T00:00:00');
    
    function updateCountdown() {
        const now = new Date();
        const difference = examDate - now;
        
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = days;
            document.getElementById('hours').textContent = hours;
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = seconds;
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Tab functionality
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');
            
            // Remove active class from all tabs and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding pane
            button.classList.add('active');
            document.getElementById(tabName).classList.add('active');
            
            currentTab = tabName;
        });
    });
}

// Roadmap functionality
function initializeRoadmap() {
    const roadmapGrid = document.getElementById('roadmap-grid');
    const startDate = new Date();
    const endDate = new Date('2026-05-11');
    const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    
    // Clear existing content before adding new day cards
    roadmapGrid.innerHTML = '';
    
    for (let i = 1; i <= totalDays; i++) {
        const dayCard = document.createElement('div');
        dayCard.className = 'day-card';
        dayCard.setAttribute('data-day', i);
        
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i - 1);
        
        const isToday = i === 1;
        const isCompleted = isDayCompleted(i);
        
        if (isCompleted) {
            dayCard.classList.add('completed');
        }
        if (isToday) {
            dayCard.classList.add('today');
        }
        
        dayCard.innerHTML = `
            <div class="day-number">Ngày ${i}</div>
            <div class="day-status">${isCompleted ? '✅ Hoàn thành' : (isToday ? '📚 Học hôm nay' : '⏳ Chưa học')}</div>
        `;
        
        dayCard.addEventListener('click', () => openDayContent(i));
        roadmapGrid.appendChild(dayCard);
    }
}

function openDayContent(day) {
    // Get learning content for this specific day
    const dayContent = getDayLearningContent(day);
    
    // Close any existing day modal first
    if (currentDayModal) {
        currentDayModal.remove();
    }
    
    // Create a modal to show day content
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'day-content-modal'; // Add ID for proper closing
    modal.style.display = 'block';
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>📚 Ngày học ${day} - ${dayContent.title}</h3>
                <button class="close-btn" onclick="closeModal('day-content-modal')">&times;</button>
            </div>
            <div class="modal-body">
                <div class="day-content">
                    <div class="content-section">
                        <h5>🔖 Phát âm (5 phút)</h5>
                        <p><strong>Từ cần luyện phát âm:</strong> ${dayContent.pronunciation.words.join(', ')}</p>
                        <button class="btn btn-secondary btn-small" onclick="practicePronunciation(${day})">🔊 Luyện phát âm</button>
                    </div>
                    <div class="content-section">
                        <h5>📖 Từ vựng (15 phút)</h5>
                        <p><strong>Unit ${dayContent.vocabulary.unit} - ${dayContent.vocabulary.topic}</strong></p>
                        <div class="vocab-list">
                            ${dayContent.vocabulary.words.map(word => `
                                <div class="vocab-item">
                                    <strong>${word.word}</strong> - ${word.phonetic}
                                    <div class="vocab-vietnamese">${word.vietnamese}</div>
                                    <div class="vocab-example">${word.example}</div>
                                    <div class="vocab-translation">${getExampleTranslation(word.example)}</div>
                                </div>
                            `).join('')}
                        </div>
                        <button class="btn btn-primary btn-small" onclick="openUnit('${dayContent.vocabulary.unit}', 'flashcard')">📚 Học Flashcard</button>
                    </div>
                    <div class="content-section">
                        <h5>📝 Ngữ pháp (15 phút)</h5>
                        <p><strong>Điểm ngữ pháp:</strong> ${dayContent.grammar.point}</p>
                        <p>${dayContent.grammar.explanation}</p>
                        <button class="btn btn-primary btn-small" onclick="openUnit('${dayContent.grammar.unit}', 'quiz')">📝 Làm bài tập</button>
                    </div>
                    <div class="content-section">
                        <h5>🎧 Đọc hiểu (10 phút)</h5>
                        <p><strong>Bài đọc:</strong> ${dayContent.reading.title}</p>
                        <p>${dayContent.reading.content}</p>
                        <p><strong>Câu hỏi:</strong> ${dayContent.reading.question}</p>
                    </div>
                </div>
                <div class="day-actions">
                    <button class="btn btn-primary" onclick="markDayCompleted(${day}, this)">✅ Hoàn thành ngày học ${day}</button>
                    <button class="btn btn-secondary" onclick="closeModal('day-content-modal')">Đóng</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    currentDayModal = modal; // Track this modal
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal('day-content-modal');
        }
    });
}

function getDayLearningContent(day) {
    // Learning roadmap for 35 days
    const roadmap = [
        // Week 1: Unit 16 - Seasons and Weather
        {
            day: 1, title: "Bắt đầu Unit 16 - Seasons and Weather",
            pronunciation: { words: ["spring", "summer", "autumn", "winter"] },
            vocabulary: { 
                unit: 16, 
                topic: "Seasons and Weather",
                words: [
                    { word: "spring", phonetic: "/sprɪŋ/", vietnamese: "mùa xuân", example: "It's warm in spring." },
                    { word: "summer", phonetic: "/ˈsʌmər/", vietnamese: "mùa hè", example: "It's hot in summer." },
                    { word: "autumn", phonetic: "/ˈɔːtəm/", vietnamese: "mùa thu", example: "It's cool in autumn." },
                    { word: "winter", phonetic: "/ˈwɪntər/", vietnamese: "mùa đông", example: "It's cold in winter." }
                ]
            },
            grammar: { 
                unit: 16,
                point: "Câu hỏi về thời tiết: How's the weather?",
                explanation: "Dùng để hỏi về thời tiết. Trả lời: It's + tính từ (hot, cold, warm, cool, sunny, cloudy, rainy)."
            },
            reading: {
                title: "Four Seasons",
                content: "There are four seasons in a year: spring, summer, autumn, and winter. Spring is warm and beautiful. Summer is hot and sunny. Autumn is cool and windy. Winter is cold and snowy.",
                question: "What season do you like best? Why?"
            }
        },
        {
            day: 2, title: "Unit 16 - Weather vocabulary",
            pronunciation: { words: ["warm", "hot", "cool", "cold", "sunny", "cloudy", "rainy"] },
            vocabulary: { 
                unit: 16, 
                topic: "Weather Adjectives",
                words: [
                    { word: "warm", phonetic: "/wɔːrm/", vietnamese: "ấm áp", example: "Spring is warm." },
                    { word: "hot", phonetic: "/hɒt/", vietnamese: "nóng", example: "Summer is hot." },
                    { word: "cool", phonetic: "/kuːl/", vietnamese: "mát mẻ", example: "Autumn is cool." },
                    { word: "cold", phonetic: "/koʊld/", vietnamese: "lạnh", example: "Winter is cold." }
                ]
            },
            grammar: { 
                unit: 16,
                point: "Giới từ chỉ mùa: in + season",
                explanation: "Dùng 'in' với các mùa: in spring, in summer, in autumn, in winter."
            },
            reading: {
                title: "Weather Today",
                content: "Today is sunny and warm. The sky is blue. There are no clouds. Children are playing outside in the park.",
                question: "What's the weather like today?"
            }
        },
        {
            day: 3, title: "Unit 16 - Clothes for seasons",
            pronunciation: { words: ["jumper", "jeans", "coat", "T-shirt", "shorts"] },
            vocabulary: { 
                unit: 16, 
                topic: "Clothes",
                words: [
                    { word: "jumper", phonetic: "/ˈdʒʌmpər/", vietnamese: "áo len", example: "I wear a jumper in winter." },
                    { word: "jeans", phonetic: "/dʒiːnz/", vietnamese: "quần jean", example: "Jeans are warm." },
                    { word: "coat", phonetic: "/koʊt/", vietnamese: "áo khoác", example: "Wear a coat in winter." }
                ]
            },
            grammar: { 
                unit: 16,
                point: "Câu hỏi: What do you wear?",
                explanation: "What do you wear + in + season? Trả lời: I wear + quần áo."
            },
            reading: {
                title: "What to Wear",
                content: "In winter, I wear a warm coat and jeans. In summer, I wear a T-shirt and shorts. In spring, I wear a light jumper.",
                question: "What do you wear in different seasons?"
            }
        },
        // Week 2: Unit 14+15 - Health
        {
            day: 4, title: "Bắt đầu Unit 14+15 - Health",
            pronunciation: { words: ["headache", "toothache", "sore throat", "fever"] },
            vocabulary: { 
                unit: "14-15", 
                topic: "Health Problems",
                words: [
                    { word: "headache", phonetic: "/ˈhedeɪk/", vietnamese: "đau đầu", example: "I have a headache." },
                    { word: "toothache", phonetic: "/ˈtuːθeɪk/", vietnamese: "đau răng", example: "I have a toothache." },
                    { word: "sore throat", phonetic: "/sɔːr θroʊt/", vietnamese: "đau họng", example: "I have a sore throat." },
                    { word: "fever", phonetic: "/ˈfiːvər/", vietnamese: "sốt", example: "I have a fever." }
                ]
            },
            grammar: { 
                unit: "14-15",
                point: "Câu hỏi về sức khỏe: What's the matter?",
                explanation: "What's the matter? = What's wrong? (Bạn bị sao rồi?). Trả lời: I have + bệnh."
            },
            reading: {
                title: "Peter is Sick",
                content: "Peter doesn't feel well today. He has a headache and a fever. He should stay in bed and drink lots of water.",
                question: "What's the matter with Peter?"
            }
        },
        {
            day: 5, title: "Unit 14+15 - Should/Shouldn't",
            pronunciation: { words: ["should", "shouldn't", "medicine", "rest", "doctor"] },
            vocabulary: { 
                unit: "14-15", 
                topic: "Medical Advice",
                words: [
                    { word: "should", phonetic: "/ʃʊd/", vietnamese: "nên", example: "You should rest." },
                    { word: "shouldn't", phonetic: "/ˈʃʊdnt/", vietnamese: "không nên", example: "You shouldn't eat ice cream." },
                    { word: "medicine", phonetic: "/ˈmedsn/", vietnamese: "thuốc", example: "Take medicine." }
                ]
            },
            grammar: { 
                unit: "14-15",
                point: "Should/Shouldn't + động từ nguyên thể",
                explanation: "Should = nên (lời khuyên). Shouldn't = không nên. Sau should/shouldn't là động từ nguyên thể."
            },
            reading: {
                title: "Doctor's Advice",
                content: "If you have a toothache, you should go to the dentist. You shouldn't eat sweet things. You should take medicine and rest.",
                question: "What should you do when you have a toothache?"
            }
        },
        // Week 2 continued: Unit 14+15
        {
            day: 6, title: "Unit 14+15 - Exercise and staying healthy",
            pronunciation: { words: ["exercise", "dentist", "doctor", "healthy"] },
            vocabulary: { 
                unit: "14-15", 
                topic: "Staying Healthy",
                words: [
                    { word: "exercise", phonetic: "/ˈeksərsaɪz/", vietnamese: "tập thể dục", example: "Do exercise every day." },
                    { word: "dentist", phonetic: "/ˈdentɪst/", vietnamese: "nha sĩ", example: "Go to the dentist." },
                    { word: "doctor", phonetic: "/ˈdɒktər/", vietnamese: "bác sĩ", example: "See a doctor." }
                ]
            },
            grammar: { 
                unit: "14-15",
                point: "Câu khuyên: You should/shouldn't...",
                explanation: "Dùng should/shouldn't để đưa ra lời khuyên về sức khỏe."
            },
            reading: {
                title: "Healthy Lifestyle",
                content: "Peter does judo twice a week. He eats fish and vegetables. He drinks lots of water. This is a healthy lifestyle.",
                question: "How does Peter stay healthy?"
            }
        },
        {
            day: 7, title: "Unit 14+15 - Review Health vocabulary",
            pronunciation: { words: ["headache", "toothache", "sore throat", "fever", "should", "shouldn't"] },
            vocabulary: { 
                unit: "14-15", 
                topic: "Health Review",
                words: [
                    { word: "headache", phonetic: "/ˈhedeɪk/", vietnamese: "đau đầu", example: "I have a headache." },
                    { word: "toothache", phonetic: "/ˈtuːθeɪk/", vietnamese: "đau răng", example: "I have a toothache." },
                    { word: "fever", phonetic: "/ˈfiːvər/", vietnamese: "sốt", example: "I have a fever." }
                ]
            },
            grammar: { 
                unit: "14-15",
                point: "Ôn tập: What's the matter? + Should/Shouldn't",
                explanation: "Kết hợp hỏi về sức khỏe và đưa ra lời khuyên."
            },
            reading: {
                title: "Health Check",
                content: "If you feel sick, tell your parents. They will take you to the doctor. Follow the doctor's advice.",
                question: "What should you do when you feel sick?"
            }
        },
        // Week 3: Unit 18 - Means of Transport
        {
            day: 8, title: "Bắt đầu Unit 18 - Means of Transport",
            pronunciation: { words: ["bus", "taxi", "bicycle", "train"] },
            vocabulary: { 
                unit: 18, 
                topic: "Transportation",
                words: [
                    { word: "bus", phonetic: "/bʌs/", vietnamese: "xe buýt", example: "I go by bus." },
                    { word: "taxi", phonetic: "/ˈtæksi/", vietnamese: "xe taxi", example: "Take a taxi." },
                    { word: "bicycle", phonetic: "/ˈbaɪsɪkl/", vietnamese: "xe đạp", example: "Go by bicycle." },
                    { word: "train", phonetic: "/treɪn/", vietnamese: "tàu hỏa", example: "Travel by train." }
                ]
            },
            grammar: { 
                unit: 18,
                point: "Câu hỏi: How can I get to...?",
                explanation: "Hỏi đường đến một địa điểm. Trả lời: You can get there by + phương tiện."
            },
            reading: {
                title: "Getting Around",
                content: "There are many ways to travel: by bus, by taxi, by bicycle, or on foot. Choose the best way for your trip.",
                question: "How do you usually go to school?"
            }
        },
        {
            day: 9, title: "Unit 18 - On foot and ferry",
            pronunciation: { words: ["on foot", "ferry", "get", "lost"] },
            vocabulary: { 
                unit: 18, 
                topic: "Ways to Travel",
                words: [
                    { word: "on foot", phonetic: "/ɒn fʊt/", vietnamese: "đi bộ", example: "I go on foot." },
                    { word: "ferry", phonetic: "/ˈferi/", vietnamese: "phà", example: "Take a ferry." },
                    { word: "lost", phonetic: "/lɒst/", vietnamese: "lạc", example: "I'm lost." }
                ]
            },
            grammar: { 
                unit: 18,
                point: "Câu hỏi: Is it far from here?",
                explanation: "Hỏi về khoảng cách. Trả lời: Yes, it is. / No, it isn't."
            },
            reading: {
                title: "Asking for Directions",
                content: "Excuse me! I'm lost. How can I get to the museum? You can get there by bus or on foot.",
                question: "What do you say when you are lost?"
            }
        },
        {
            day: 10, title: "Unit 18 - Famous places",
            pronunciation: { words: ["Dragon Bridge", "Opera House", "visit", "want"] },
            vocabulary: { 
                unit: 18, 
                topic: "Places to Visit",
                words: [
                    { word: "Dragon Bridge", phonetic: "/ˈdræɡən brɪdʒ/", vietnamese: "Cầu Rồng", example: "Visit Dragon Bridge." },
                    { word: "Opera House", phonetic: "/ˈɒprə haʊs/", vietnamese: "Nhà hát Opera", example: "Ha Noi Opera House." }
                ]
            },
            grammar: { 
                unit: 18,
                point: "Câu hỏi: Where do you want to visit?",
                explanation: "Hỏi về nơi muốn tham quan. Trả lời: I want to visit + địa điểm."
            },
            reading: {
                title: "Vietnam Landmarks",
                content: "Dragon Bridge is in Da Nang. Opera House is in Ha Noi. They are famous places in Vietnam.",
                question: "Where is Dragon Bridge?"
            }
        },
        {
            day: 11, title: "Unit 18 - Review Transport",
            pronunciation: { words: ["bus", "taxi", "bicycle", "train", "ferry", "on foot"] },
            vocabulary: { 
                unit: 18, 
                topic: "Transport Review",
                words: [
                    { word: "bus", phonetic: "/bʌs/", vietnamese: "xe buýt", example: "I go by bus." },
                    { word: "taxi", phonetic: "/ˈtæksi/", vietnamese: "xe taxi", example: "Take a taxi." },
                    { word: "on foot", phonetic: "/ɒn fʊt/", vietnamese: "đi bộ", example: "I go on foot." }
                ]
            },
            grammar: { 
                unit: 18,
                point: "Ôn tập: How can I get to...? / Is it far?",
                explanation: "Hỏi đường và hỏi khoảng cách."
            },
            reading: {
                title: "Travel Smart",
                content: "When you travel, plan your route. Check if it's far or near. Choose the best transportation.",
                question: "How do you plan your trip?"
            }
        },
        // Week 4: Unit 19 - Places of Interest
        {
            day: 12, title: "Bắt đầu Unit 19 - Places of Interest",
            pronunciation: { words: ["beautiful", "exciting", "fantastic", "peaceful"] },
            vocabulary: { 
                unit: 19, 
                topic: "Describing Places",
                words: [
                    { word: "beautiful", phonetic: "/ˈbjuːtɪfl/", vietnamese: "đẹp", example: "The beach is beautiful." },
                    { word: "exciting", phonetic: "/ɪkˈsaɪtɪŋ/", vietnamese: "thú vị", example: "The trip is exciting." },
                    { word: "fantastic", phonetic: "/fænˈtæstɪk/", vietnamese: "tuyệt vời", example: "Ha Long Bay is fantastic." },
                    { word: "peaceful", phonetic: "/ˈpiːsfl/", vietnamese: "yên bình", example: "The village is peaceful." }
                ]
            },
            grammar: { 
                unit: 19,
                point: "Câu hỏi: What do you think of...?",
                explanation: "Hỏi ý kiến về một nơi. Trả lời: I think it's + tính từ."
            },
            reading: {
                title: "Amazing Places",
                content: "Ha Long Bay is fantastic. The beach is beautiful. The village is peaceful. Vietnam has many amazing places.",
                question: "What do you think of Ha Long Bay?"
            }
        },
        {
            day: 13, title: "Unit 19 - Distance: far and near",
            pronunciation: { words: ["kilometre", "far", "near", "how far"] },
            vocabulary: { 
                unit: 19, 
                topic: "Distance",
                words: [
                    { word: "kilometre", phonetic: "/kɪˈlɒmɪtər/", vietnamese: "ki-lô-mét", example: "It's 10 kilometres." },
                    { word: "far", phonetic: "/fɑːr/", vietnamese: "xa", example: "Is it far?" },
                    { word: "near", phonetic: "/nɪr/", vietnamese: "gần", example: "It's near here." }
                ]
            },
            grammar: { 
                unit: 19,
                point: "Câu hỏi: How far is it from A to B?",
                explanation: "Hỏi khoảng cách giữa hai địa điểm. Trả lời: It's about + số + kilometres."
            },
            reading: {
                title: "Distance Matters",
                content: "Da Nang to Hoi An is about 29 kilometres. It's not very far. You can go by bus or taxi.",
                question: "How far is it from your home to school?"
            }
        },
        {
            day: 14, title: "Unit 19 - Planning a trip",
            pronunciation: { words: ["plan", "trip", "family", "why not"] },
            vocabulary: { 
                unit: 19, 
                topic: "Trip Planning",
                words: [
                    { word: "plan", phonetic: "/plæn/", vietnamese: "lên kế hoạch", example: "Plan a trip." },
                    { word: "trip", phonetic: "/trɪp/", vietnamese: "chuyến đi", example: "A family trip." },
                    { word: "family", phonetic: "/ˈfæməli/", vietnamese: "gia đình", example: "With my family." }
                ]
            },
            grammar: { 
                unit: 19,
                point: "Câu gợi ý: Why not + động từ?",
                explanation: "Why not plan a trip? = Tại sao không lên kế hoạch cho một chuyến đi?"
            },
            reading: {
                title: "Family Trip",
                content: "Why not plan a trip with your family? You can visit beautiful places and have fun together.",
                question: "Where do you want to go with your family?"
            }
        },
        {
            day: 15, title: "Unit 19 - Review Places",
            pronunciation: { words: ["beautiful", "exciting", "fantastic", "peaceful", "far", "near"] },
            vocabulary: { 
                unit: 19, 
                topic: "Places Review",
                words: [
                    { word: "fantastic", phonetic: "/fænˈtæstɪk/", vietnamese: "tuyệt vời", example: "It's fantastic." },
                    { word: "peaceful", phonetic: "/ˈpiːsfl/", vietnamese: "yên bình", example: "It's peaceful." },
                    { word: "kilometre", phonetic: "/kɪˈlɒmɪtər/", vietnamese: "ki-lô-mét", example: "It's 10 kilometres." }
                ]
            },
            grammar: { 
                unit: 19,
                point: "Ôn tập: What do you think of...? / How far is it...?",
                explanation: "Hỏi ý kiến và hỏi khoảng cách."
            },
            reading: {
                title: "Travel Review",
                content: "What do you think of your trip? Is it far? Is it beautiful? Share your experience with friends.",
                question: "Describe your favorite place."
            }
        },
        // Week 5: Unit 20 - Summer Holidays
        {
            day: 16, title: "Bắt đầu Unit 20 - Summer Holidays",
            pronunciation: { words: ["summer holiday", "going to", "visit", "this summer"] },
            vocabulary: { 
                unit: 20, 
                topic: "Summer Plans",
                words: [
                    { word: "summer holiday", phonetic: "/ˈsʌmər ˈhɒlədeɪ/", vietnamese: "kỳ nghỉ hè", example: "I love summer holiday." },
                    { word: "visit", phonetic: "/ˈvɪzɪt/", vietnamese: "thăm", example: "Visit Phu Quoc." }
                ]
            },
            grammar: { 
                unit: 20,
                point: "Be going to: Dự định tương lai",
                explanation: "I'm going to + động từ = Tôi định/sẽ làm gì. Diễn tả dự định trong tương lai gần."
            },
            reading: {
                title: "Summer Dreams",
                content: "Summer holiday is coming. I'm going to visit Phu Quoc Island. I'm going to swim in the sea.",
                question: "What are you going to do this summer?"
            }
        },
        {
            day: 17, title: "Unit 20 - Summer activities",
            pronunciation: { words: ["go camping", "join a club", "practise swimming"] },
            vocabulary: { 
                unit: 20, 
                topic: "Summer Activities",
                words: [
                    { word: "go camping", phonetic: "/ɡəʊ ˈkæmpɪŋ/", vietnamese: "đi cắm trại", example: "We go camping." },
                    { word: "join a club", phonetic: "/dʒɔɪn ə klʌb/", vietnamese: "tham gia câu lạc bộ", example: "Join a music club." },
                    { word: "practise swimming", phonetic: "/ˈpræktɪs ˈswɪmɪŋ/", vietnamese: "tập bơi", example: "Practise swimming every day." }
                ]
            },
            grammar: { 
                unit: 20,
                point: "Be going to + động từ",
                explanation: "I'm going to go camping. I'm going to join a club. Diễn tả các hoạt động sẽ làm."
            },
            reading: {
                title: "Fun Summer",
                content: "This summer, I'm going to go camping with friends. I'm going to join a music club. It will be fun!",
                question: "What activities do you like in summer?"
            }
        },
        {
            day: 18, title: "Unit 20 - Summer destinations",
            pronunciation: { words: ["Phu Quoc Island", "Phong Nha Cave", "farm", "island"] },
            vocabulary: { 
                unit: 20, 
                topic: "Places to Visit in Summer",
                words: [
                    { word: "Phu Quoc Island", phonetic: "/fuː kwɒk ˈaɪlənd/", vietnamese: "đảo Phú Quốc", example: "Go to Phu Quoc." },
                    { word: "Phong Nha Cave", phonetic: "/fɒŋ nɑː keɪv/", vietnamese: "động Phong Nha", example: "Explore Phong Nha Cave." },
                    { word: "visit a farm", phonetic: "/ˈvɪzɪt ə fɑːrm/", vietnamese: "thăm trang trại", example: "Visit an eco-farm." }
                ]
            },
            grammar: { 
                unit: 20,
                point: "Where are you going to visit?",
                explanation: "Hỏi về địa điểm sẽ thăm. Trả lời: I'm going to visit + địa điểm."
            },
            reading: {
                title: "Summer Destinations",
                content: "I'm going to visit Phu Quoc Island. My friend is going to Phong Nha Cave. We will have a great summer!",
                question: "Where are you going to visit this summer?"
            }
        },
        {
            day: 19, title: "Unit 20 - Review Summer",
            pronunciation: { words: ["summer holiday", "go camping", "join a club", "going to"] },
            vocabulary: { 
                unit: 20, 
                topic: "Summer Review",
                words: [
                    { word: "summer holiday", phonetic: "/ˈsʌmər ˈhɒlədeɪ/", vietnamese: "kỳ nghỉ hè", example: "I love summer holiday." },
                    { word: "go camping", phonetic: "/ɡəʊ ˈkæmpɪŋ/", vietnamese: "đi cắm trại", example: "We go camping." },
                    { word: "practise swimming", phonetic: "/ˈpræktɪs ˈswɪmɪŋ/", vietnamese: "tập bơi", example: "Practise swimming." }
                ]
            },
            grammar: { 
                unit: 20,
                point: "Ôn tập: Be going to + Where/What",
                explanation: "Where are you going to visit? / What are you going to do?"
            },
            reading: {
                title: "Summer Plans",
                content: "What are your plans for summer? Are you going to travel? Are you going to learn something new?",
                question: "What are you going to do this summer?"
            }
        },
        // Week 6: Unit 11 - Family Time
        {
            day: 20, title: "Bắt đầu Unit 11 - Family Time",
            pronunciation: { words: ["beach", "swim", "did", "went"] },
            vocabulary: { 
                unit: 11, 
                topic: "Past Simple Verbs",
                words: [
                    { word: "beach", phonetic: "/biːtʃ/", vietnamese: "bãi biển", example: "Go to the beach." },
                    { word: "swim", phonetic: "/swɪm/", vietnamese: "bơi", example: "Swim in the sea." },
                    { word: "did", phonetic: "/dɪd/", vietnamese: "đã làm", example: "Did you swim?" },
                    { word: "went", phonetic: "/went/", vietnamese: "đã đi", example: "We went to the beach." }
                ]
            },
            grammar: { 
                unit: 11,
                point: "Thì quá khứ đơn: Did + V?",
                explanation: "Did you + động từ nguyên thể? Trả lời: Yes, I did. / No, I didn't."
            },
            reading: {
                title: "Last Weekend",
                content: "Last weekend, my family went to the beach. We swam in the sea. It was fun!",
                question: "Did you go anywhere last weekend?"
            }
        },
        {
            day: 21, title: "Unit 11 - More past tense verbs",
            pronunciation: { words: ["took photos", "collect seashells", "walk", "bought"] },
            vocabulary: { 
                unit: 11, 
                topic: "Past Activities",
                words: [
                    { word: "took photos", phonetic: "/tʊk ˈfəʊtəʊz/", vietnamese: "đã chụp ảnh", example: "Took photos with dad." },
                    { word: "collect seashells", phonetic: "/kəˈlekt ˈsiːʃelz/", vietnamese: "nhặt vỏ sò", example: "Collect seashells." },
                    { word: "bought", phonetic: "/bɔːt/", vietnamese: "đã mua", example: "Bought souvenirs." }
                ]
            },
            grammar: { 
                unit: 11,
                point: "Thì quá khứ đơn: V2 (went, took, bought)",
                explanation: "Động từ quá khứ bất quy tắc: go→went, take→took, buy→bought."
            },
            reading: {
                title: "Beach Trip",
                content: "We took photos. We collected seashells. We bought souvenirs. It was a great trip.",
                question: "What did you do at the beach?"
            }
        },
        {
            day: 22, title: "Unit 11 - Family activities",
            pronunciation: { words: ["family", "together", "journey", "fun"] },
            vocabulary: { 
                unit: 11, 
                topic: "Family Time",
                words: [
                    { word: "souvenir", phonetic: "/ˌsuːvəˈnɪər/", vietnamese: "quà lưu niệm", example: "Buy souvenirs." },
                    { word: "journey", phonetic: "/ˈdʒɜːni/", vietnamese: "hành trình", example: "Long journey." },
                    { word: "family", phonetic: "/ˈfæməli/", vietnamese: "gia đình", example: "With my family." }
                ]
            },
            grammar: { 
                unit: 11,
                point: "Where did your family go?",
                explanation: "Hỏi về nơi gia đình đã đi. Trả lời: We went to + địa điểm."
            },
            reading: {
                title: "Family Journey",
                content: "The journey took a long time, but we had lots of fun. We enjoyed our family time together.",
                question: "What do you like doing with your family?"
            }
        },
        {
            day: 23, title: "Unit 11 - Review Past Simple",
            pronunciation: { words: ["did", "went", "took", "bought", "swam"] },
            vocabulary: { 
                unit: 11, 
                topic: "Past Simple Review",
                words: [
                    { word: "did", phonetic: "/dɪd/", vietnamese: "đã làm", example: "Did you go?" },
                    { word: "went", phonetic: "/went/", vietnamese: "đã đi", example: "We went to the beach." },
                    { word: "took", phonetic: "/tʊk/", vietnamese: "đã chụp", example: "Took photos." },
                    { word: "bought", phonetic: "/bɔːt/", vietnamese: "đã mua", example: "Bought souvenirs." }
                ]
            },
            grammar: { 
                unit: 11,
                point: "Ôn tập: Did + V? / V2 (went, took, bought)",
                explanation: "Thì quá khứ đơn: câu hỏi và động từ bất quy tắc."
            },
            reading: {
                title: "Past Adventures",
                content: "Last summer, we went to many places. We took photos. We bought souvenirs. We had great fun!",
                question: "What did you do last summer?"
            }
        },
        // Week 7-8: Mixed Review and Practice
        {
            day: 24, title: "Ôn tập Unit 16 - Seasons",
            pronunciation: { words: ["spring", "summer", "autumn", "winter", "warm", "hot", "cold", "cool"] },
            vocabulary: { 
                unit: 16, 
                topic: "Seasons Review",
                words: [
                    { word: "spring", phonetic: "/sprɪŋ/", vietnamese: "mùa xuân", example: "It's warm in spring." },
                    { word: "autumn", phonetic: "/ˈɔːtəm/", vietnamese: "mùa thu", example: "It's cool in autumn." },
                    { word: "jumper", phonetic: "/ˈdʒʌmpər/", vietnamese: "áo len", example: "Wear a jumper in winter." }
                ]
            },
            grammar: { 
                unit: 16,
                point: "Ôn tập: How's the weather? / in + season",
                explanation: "Hỏi thời tiết và giới từ chỉ mùa."
            },
            reading: {
                title: "Four Seasons Review",
                content: "Spring is warm. Summer is hot. Autumn is cool. Winter is cold. Each season is special.",
                question: "Which season do you like best?"
            }
        },
        {
            day: 25, title: "Ôn tập Unit 14+15 - Health",
            pronunciation: { words: ["headache", "toothache", "sore throat", "fever", "should", "shouldn't"] },
            vocabulary: { 
                unit: "14-15", 
                topic: "Health Review",
                words: [
                    { word: "headache", phonetic: "/ˈhedeɪk/", vietnamese: "đau đầu", example: "I have a headache." },
                    { word: "toothache", phonetic: "/ˈtuːθeɪk/", vietnamese: "đau răng", example: "I have a toothache." },
                    { word: "should", phonetic: "/ʃʊd/", vietnamese: "nên", example: "You should rest." }
                ]
            },
            grammar: { 
                unit: "14-15",
                point: "Ôn tập: What's the matter? / Should/Shouldn't",
                explanation: "Hỏi về sức khỏe và đưa ra lời khuyên."
            },
            reading: {
                title: "Stay Healthy",
                content: "If you have a headache, you should rest. If you have a toothache, you should see a dentist.",
                question: "What should you do to stay healthy?"
            }
        },
        {
            day: 26, title: "Ôn tập Unit 18 - Transport",
            pronunciation: { words: ["bus", "taxi", "bicycle", "train", "ferry", "on foot"] },
            vocabulary: { 
                unit: 18, 
                topic: "Transport Review",
                words: [
                    { word: "bus", phonetic: "/bʌs/", vietnamese: "xe buýt", example: "I go by bus." },
                    { word: "taxi", phonetic: "/ˈtæksi/", vietnamese: "xe taxi", example: "Take a taxi." },
                    { word: "on foot", phonetic: "/ɒn fʊt/", vietnamese: "đi bộ", example: "I go on foot." }
                ]
            },
            grammar: { 
                unit: 18,
                point: "Ôn tập: How can I get to...? / Is it far?",
                explanation: "Hỏi đường và hỏi khoảng cách."
            },
            reading: {
                title: "Getting Around",
                content: "You can travel by bus, taxi, bicycle, or on foot. Check if it's far or near before you go.",
                question: "How do you go to school?"
            }
        },
        {
            day: 27, title: "Ôn tập Unit 19 - Places",
            pronunciation: { words: ["beautiful", "exciting", "fantastic", "peaceful", "far", "near", "kilometre"] },
            vocabulary: { 
                unit: 19, 
                topic: "Places Review",
                words: [
                    { word: "fantastic", phonetic: "/fænˈtæstɪk/", vietnamese: "tuyệt vời", example: "It's fantastic." },
                    { word: "peaceful", phonetic: "/ˈpiːsfl/", vietnamese: "yên bình", example: "It's peaceful." },
                    { word: "kilometre", phonetic: "/kɪˈlɒmɪtər/", vietnamese: "ki-lô-mét", example: "It's 10 kilometres." }
                ]
            },
            grammar: { 
                unit: 19,
                point: "Ôn tập: What do you think of...? / How far is it...?",
                explanation: "Hỏi ý kiến và hỏi khoảng cách."
            },
            reading: {
                title: "Beautiful Places",
                content: "Ha Long Bay is fantastic. The beach is beautiful. It's about 100 kilometres from here.",
                question: "What do you think of Ha Long Bay?"
            }
        },
        {
            day: 28, title: "Ôn tập Unit 20 - Summer",
            pronunciation: { words: ["summer holiday", "going to", "go camping", "join a club"] },
            vocabulary: { 
                unit: 20, 
                topic: "Summer Review",
                words: [
                    { word: "summer holiday", phonetic: "/ˈsʌmər ˈhɒlədeɪ/", vietnamese: "kỳ nghỉ hè", example: "I love summer holiday." },
                    { word: "going to", phonetic: "/ˈɡəʊɪŋ tuː/", vietnamese: "sẽ/định", example: "I'm going to camp." },
                    { word: "go camping", phonetic: "/ɡəʊ ˈkæmpɪŋ/", vietnamese: "đi cắm trại", example: "We go camping." }
                ]
            },
            grammar: { 
                unit: 20,
                point: "Ôn tập: Be going to + động từ",
                explanation: "Diễn tả dự định trong tương lai gần."
            },
            reading: {
                title: "Summer Plans",
                content: "I'm going to go camping. I'm going to visit Phu Quoc. It will be a great summer!",
                question: "What are you going to do this summer?"
            }
        },
        {
            day: 29, title: "Ôn tập Unit 11 - Past Simple",
            pronunciation: { words: ["did", "went", "took", "bought", "swam", "last weekend"] },
            vocabulary: { 
                unit: 11, 
                topic: "Past Simple Review",
                words: [
                    { word: "did", phonetic: "/dɪd/", vietnamese: "đã làm", example: "Did you go?" },
                    { word: "went", phonetic: "/went/", vietnamese: "đã đi", example: "We went to the beach." },
                    { word: "took", phonetic: "/tʊk/", vietnamese: "đã chụp", example: "Took photos." }
                ]
            },
            grammar: { 
                unit: 11,
                point: "Ôn tập: Did + V? / V2 (went, took, bought)",
                explanation: "Thì quá khứ đơn: câu hỏi và động từ bất quy tắc."
            },
            reading: {
                title: "Past Memories",
                content: "Last weekend, we went to the beach. We took photos. We bought souvenirs. It was fun!",
                question: "What did you do last weekend?"
            }
        },
        // Week 9-10: Final Review and Test Preparation
        {
            day: 30, title: "Ôn tập tổng hợp - Phần Ngữ âm",
            pronunciation: { words: ["beach", "read", "weather", "mean", "summer", "winter", "autumn"] },
            vocabulary: { 
                unit: "review", 
                topic: "Phonetics Review",
                words: [
                    { word: "beach", phonetic: "/biːtʃ/", vietnamese: "bãi biển", example: "Go to the beach." },
                    { word: "weather", phonetic: "/ˈweðər/", vietnamese: "thời tiết", example: "How's the weather?" },
                    { word: "autumn", phonetic: "/ˈɔːtəm/", vietnamese: "mùa thu", example: "Autumn is cool." }
                ]
            },
            grammar: { 
                unit: "review",
                point: "Ôn tập phát âm: /iː/ vs /e/, /ʌ/ vs /ɒ/",
                explanation: "Chú ý các âm khác nhau trong từ vựng đã học."
            },
            reading: {
                title: "Phonetics Practice",
                content: "Read these words carefully: beach, weather, autumn, summer. Pay attention to pronunciation.",
                question: "Which words have the same sound?"
            }
        },
        {
            day: 31, title: "Ôn tập tổng hợp - Phần Từ vựng",
            pronunciation: { words: ["season", "health", "transport", "place", "holiday", "family"] },
            vocabulary: { 
                unit: "review", 
                topic: "Vocabulary Review",
                words: [
                    { word: "season", phonetic: "/ˈsiːzn/", vietnamese: "mùa", example: "Four seasons." },
                    { word: "health", phonetic: "/helθ/", vietnamese: "sức khỏe", example: "Stay healthy." },
                    { word: "transport", phonetic: "/ˈtrænspɔːt/", vietnamese: "phương tiện", example: "By bus." }
                ]
            },
            grammar: { 
                unit: "review",
                point: "Ôn tập từ vựng 6 Unit",
                explanation: "Xem lại các từ vựng quan trọng từ Unit 16, 14+15, 18, 19, 20, 11."
            },
            reading: {
                title: "Vocabulary Check",
                content: "Can you remember words from all units? Review them before the test.",
                question: "Which words are difficult for you?"
            }
        },
        {
            day: 32, title: "Ôn tập tổng hợp - Phần Ngữ pháp",
            pronunciation: { words: ["should", "going to", "did", "in", "by"] },
            vocabulary: { 
                unit: "review", 
                topic: "Grammar Review",
                words: [
                    { word: "should", phonetic: "/ʃʊd/", vietnamese: "nên", example: "You should study." },
                    { word: "did", phonetic: "/dɪd/", vietnamese: "đã làm", example: "Did you go?" },
                    { word: "going to", phonetic: "/ˈɡəʊɪŋ tuː/", vietnamese: "sẽ", example: "I'm going to study." }
                ]
            },
            grammar: { 
                unit: "review",
                point: "Ôn tập: Should/Shouldn't, Be going to, Past Simple, Prepositions",
                explanation: "Xem lại các điểm ngữ pháp quan trọng: should/shouldn't, be going to, thì quá khứ, giới từ."
            },
            reading: {
                title: "Grammar Check",
                content: "Review these grammar points: should/shouldn't, be going to, past simple, prepositions (in, by, on).",
                question: "Which grammar point is difficult for you?"
            }
        },
        {
            day: 33, title: "Luyện đề - Phần A: Ngữ âm",
            pronunciation: { words: ["phonetics", "sound", "pronunciation", "different"] },
            vocabulary: { 
                unit: "review", 
                topic: "Test Practice - Phonetics",
                words: [
                    { word: "phonetics", phonetic: "/fəˈnetɪks/", vietnamese: "ngữ âm", example: "Phonetics test." },
                    { word: "pronunciation", phonetic: "/prəˌnʌnsiˈeɪʃn/", vietnamese: "phát âm", example: "Good pronunciation." }
                ]
            },
            grammar: { 
                unit: "review",
                point: "Luyện tập câu hỏi ngữ âm",
                explanation: "Chọn từ có phần gạch chân phát âm khác. Luyện tập các cặp âm: /iː/ vs /e/, /ʌ/ vs /ʊ/, /ɒ/ vs /əʊ/."
            },
            reading: {
                title: "Phonetics Test Prep",
                content: "Practice phonetics questions. Listen carefully to the sounds. Choose the word with different pronunciation.",
                question: "Are you ready for the phonetics section?"
            }
        },
        {
            day: 34, title: "Luyện đề - Phần B & C: Từ vựng, Ngữ pháp, Đọc hiểu",
            pronunciation: { words: ["vocabulary", "grammar", "reading", "comprehension"] },
            vocabulary: { 
                unit: "review", 
                topic: "Test Practice - All Skills",
                words: [
                    { word: "vocabulary", phonetic: "/vəˈkæbjələri/", vietnamese: "từ vựng", example: "Learn vocabulary." },
                    { word: "grammar", phonetic: "/ˈɡræmər/", vietnamese: "ngữ pháp", example: "Study grammar." },
                    { word: "comprehension", phonetic: "/ˌkɒmprɪˈhenʃn/", vietnamese: "đọc hiểu", example: "Reading comprehension." }
                ]
            },
            grammar: { 
                unit: "review",
                point: "Luyện tập câu hỏi từ vựng, ngữ pháp, đọc hiểu",
                explanation: "Làm bài tập từ vựng, ngữ pháp và đọc hiểu. Đọc kỹ câu hỏi trước khi trả lời."
            },
            reading: {
                title: "Test Practice",
                content: "Practice vocabulary, grammar, and reading comprehension questions. Read the passages carefully.",
                question: "Do you feel ready for the test?"
            }
        },
        {
            day: 35, title: "Ôn tập cuối cùng và Chill",
            pronunciation: { words: ["relax", "confidence", "ready", "success"] },
            vocabulary: { 
                unit: "review", 
                topic: "Final Review",
                words: [
                    { word: "relax", phonetic: "/rɪˈlæks/", vietnamese: "thư giãn", example: "Relax before test." },
                    { word: "confidence", phonetic: "/ˈkɒnfɪdəns/", vietnamese: "sự tự tin", example: "Have confidence." },
                    { word: "success", phonetic: "/səkˈses/", vietnamese: "thành công", example: "You will succeed!" }
                ]
            },
            grammar: { 
                unit: "review",
                point: "Tổng kết và chuẩn bị tâm lý",
                explanation: "Ôn lại những điểm quan trọng. Giữ tâm lý thoải mái. Tự tin vào khả năng của mình."
            },
            reading: {
                title: "You Can Do It!",
                content: "You have studied hard for 35 days. You learned many new words and grammar points. You are ready for the test. Good luck!",
                question: "How do you feel about the test?"
            }
        }
    ];
    
    // Find content for the specific day
    const dayData = roadmap.find(item => item.day === day);
    
    if (dayData) {
        return dayData;
    }
    
    // Fallback for any day not in roadmap (should not happen with 35 days)
    return {
        title: "Ôn tập tổng hợp",
        pronunciation: { words: ["review", "practice"] },
        vocabulary: { 
            unit: "review", 
            topic: "Ôn tập",
            words: [
                { word: "review", phonetic: "/rɪˈvjuː/", vietnamese: "ôn lại", example: "Review your lessons." }
            ]
        },
        grammar: { 
            unit: "review",
            point: "Ôn tập",
            explanation: "Hãy xem lại các bài học."
        },
        reading: {
            title: "Review",
            content: "Keep learning and practicing every day.",
            question: "What did you learn today?"
        }
    };
}

function practicePronunciation(day) {
    const dayContent = getDayLearningContent(day);
    const words = dayContent.pronunciation.words;
    
    // Create pronunciation practice modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'pronunciation-modal'; // Add ID for proper closing
    modal.style.display = 'block';
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>🔊 Luyện phát âm - Ngày ${day}</h3>
                <button class="close-btn" onclick="closeModal('pronunciation-modal')">&times;</button>
            </div>
            <div class="modal-body">
                <div class="pronunciation-practice">
                    ${words.map((word, index) => `
                        <div class="word-practice">
                            <h4>${word}</h4>
                            <button class="btn btn-secondary" onclick="speakText('${word}')">🔊 Nghe phát âm</button>
                            <button class="btn btn-primary" onclick="recordAndCompare('${word}')">🎤 Ghi âm và so sánh</button>
                        </div>
                    `).join('')}
                </div>
                <div class="practice-actions">
                    <button class="btn btn-success" onclick="closeModal('pronunciation-modal')">✅ Hoàn thành luyện phát âm</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function recordAndCompare(word) {
    // For now, just show a message - in real implementation, would use Web Audio API
    alert(`Tính năng ghi âm và so sánh phát âm cho từ "${word}" sẽ được phát triển trong phiên bản tiếp theo. Hiện tại bạn có thể dùng nút "Nghe phát âm" để luyện tập.`);
}

function markDayCompleted(day, button) {
    toggleDayCompletion(day);
    
    // Update button text and disable it
    button.textContent = '✅ Đã hoàn thành';
    button.disabled = true;
    button.classList.add('btn-success');
    
    // Close modal after a short delay
    setTimeout(() => {
        button.closest('.modal').remove();
    }, 1000);
}

function toggleDayCompletion(day) {
    const completedDays = JSON.parse(localStorage.getItem('completedDays') || '[]');
    const index = completedDays.indexOf(day);
    
    if (index > -1) {
        completedDays.splice(index, 1);
    } else {
        completedDays.push(day);
    }
    
    localStorage.setItem('completedDays', JSON.stringify(completedDays));
    
    // Update only the specific day card, not recreate entire roadmap
    const dayCard = document.querySelector(`[data-day="${day}"]`);
    if (dayCard) {
        const isCompleted = completedDays.includes(day);
        if (isCompleted) {
            dayCard.classList.add('completed');
        } else {
            dayCard.classList.remove('completed');
        }
        
        // Update status text
        const statusElement = dayCard.querySelector('.day-status');
        if (statusElement) {
            const isToday = day === 1; // Assuming day 1 is today
            statusElement.textContent = isCompleted ? '✅ Hoàn thành' : (isToday ? '📚 Học hôm nay' : '⏳ Chưa học');
        }
    }
}

function isDayCompleted(day) {
    const completedDays = JSON.parse(localStorage.getItem('completedDays') || '[]');
    return completedDays.includes(day);
}

// Unit functionality
function openUnit(unitId, mode) {
    currentUnit = unitId;
    currentMode = mode;
    
    // Hide day modal temporarily instead of removing it
    if (currentDayModal) {
        currentDayModal.style.display = 'none';
    }
    
    const modal = document.getElementById('unit-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    const unit = learningData.units[unitId];
    modalTitle.textContent = `${unit.title} - ${mode === 'flashcard' ? 'Flashcard' : 'Trắc nghiệm'}`;
    
    if (mode === 'flashcard') {
        showFlashcard(unit, 0);
    } else {
        showQuizQuestion(unit, 0);
    }
    
    modal.style.display = 'block';
}

function showFlashcard(unit, index) {
    const modalBody = document.getElementById('modal-body');
    const word = unit.vocabulary[index];
    
    modalBody.innerHTML = `
        <div class="flashcard-container">
            <div class="flashcard" onclick="flipCard(this)">
                <div class="flashcard-front">
                    <div class="word-english">${word.word}</div>
                    <div class="word-phonetic">${word.phonetic}</div>
                    <div class="word-vietnamese-preview">${word.vietnamese}</div>
                    <button class="btn btn-secondary" onclick="speakText('${word.word}', event)">🔊 Phát âm</button>
                </div>
                <div class="flashcard-back" style="display: none;">
                    <div class="word-vietnamese">${word.vietnamese}</div>
                    <div class="word-example">${word.example}</div>
                    <div class="word-example-vietnamese">${getExampleTranslation(word.example)}</div>
                    <button class="btn btn-secondary" onclick="speakText('${word.example}', event)">🔊 Nghe ví dụ</button>
                </div>
            </div>
            <div class="flashcard-controls">
                <button class="btn btn-secondary" onclick="previousFlashcard()">← Trước</button>
                <span class="flashcard-counter">${index + 1} / ${unit.vocabulary.length}</span>
                <button class="btn btn-secondary" onclick="nextFlashcard()">Tiếp →</button>
            </div>
        </div>
    `;
    
    currentFlashcardIndex = index;
}

function getExampleTranslation(example) {
    // Basic translations for common examples
    const translations = {
        "It's warm in spring.": "Mùa xuân trời ấm.",
        "It's hot in summer.": "Mùa hè trời nóng.",
        "It's cool in autumn.": "Mùa thu trời mát.",
        "It's cold in winter.": "Mùa đông trời lạnh.",
        "Spring is warm.": "Mùa xuân ấm áp.",
        "Summer is hot.": "Mùa hè nóng bức.",
        "Autumn is cool.": "Mùa thu mát mẻ.",
        "Winter is cold.": "Mùa đông lạnh giá.",
        "I wear a jumper.": "Tôi mặc áo len.",
        "Jeans are warm.": "Quần jean giữ ấm.",
        "Wear a coat in winter.": "Mặc áo khoác vào mùa đông.",
        "I have a headache.": "Tôi bị đau đầu.",
        "I have a toothache.": "Tôi bị đau răng.",
        "I have a sore throat.": "Tôi bị đau họng.",
        "I have a fever.": "Tôi bị sốt.",
        "You should rest.": "Bạn nên nghỉ ngơi.",
        "You shouldn't eat ice cream.": "Bạn không nên ăn kem.",
        "Go to the dentist.": "Đi đến nha sĩ.",
        "See a doctor.": "Gặp bác sĩ.",
        "Take medicine.": "Uống thuốc.",
        "I go by bus.": "Tôi đi bằng xe buýt.",
        "Take a taxi.": "Bắt taxi.",
        "Go by bicycle.": "Đi bằng xe đạp.",
        "I go on foot.": "Tôi đi bộ.",
        "Travel by train.": "Đi du lịch bằng tàu hỏa.",
        "Take a ferry.": "Đi phà.",
        "Visit Dragon Bridge.": "Tham quan Cầu Rồng.",
        "Ha Noi Opera House.": "Nhà hát Opera Hà Nội.",
        "The beach is beautiful.": "Bãi biển rất đẹp.",
        "The trip is exciting.": "Chuyến đi rất thú vị.",
        "Ha Long Bay is fantastic.": "Vịnh Hạ Long tuyệt vời.",
        "The village is peaceful.": "Cái làng yên bình.",
        "It's 10 kilometres.": "Khoảng 10 ki-lô-mét.",
        "Is it far?": "Có xa không?",
        "It's near here.": "Gần đây.",
        "I love summer holiday.": "Tôi yêu kỳ nghỉ hè.",
        "We go camping.": "Chúng tôi đi cắm trại.",
        "Join a music club.": "Tham gia câu lạc bộ âm nhạc.",
        "Practise swimming every day.": "Tập bơi mỗi ngày.",
        "Visit an eco-farm.": "Thăm trang trại sinh thái.",
        "Go to Phu Quoc.": "Đến Phú Quốc.",
        "Explore Phong Nha Cave.": "Khám phá động Phong Nha.",
        "Go to the beach.": "Đi biển.",
        "Swim in the sea.": "Bơi trong biển.",
        "Took photos with dad.": "Chụp ảnh với bố.",
        "Collect seashells.": "Nhặt vỏ sò.",
        "Walk on the beach.": "Đi bộ trên bãi biển.",
        "Buy souvenirs.": "Mua quà lưu niệm.",
        "Long journey.": "Hành trình dài."
    };
    
    return translations[example] || example + " (Dịch: " + example + ")";
}

function flipCard(card) {
    const front = card.querySelector('.flashcard-front');
    const back = card.querySelector('.flashcard-back');
    
    if (front.style.display === 'none') {
        front.style.display = 'block';
        back.style.display = 'none';
        card.classList.remove('flipped');
    } else {
        front.style.display = 'none';
        back.style.display = 'block';
        card.classList.add('flipped');
    }
}

function previousFlashcard() {
    const unit = learningData.units[currentUnit];
    if (currentFlashcardIndex > 0) {
        showFlashcard(unit, currentFlashcardIndex - 1);
    }
}

function nextFlashcard() {
    const unit = learningData.units[currentUnit];
    if (currentFlashcardIndex < unit.vocabulary.length - 1) {
        showFlashcard(unit, currentFlashcardIndex + 1);
    }
}

function showQuizQuestion(unit, index) {
    const modalBody = document.getElementById('modal-body');
    const question = unit.quiz[index];
    
    modalBody.innerHTML = `
        <div class="quiz-container">
            <div class="question">
                <div class="question-text">Câu ${index + 1}: ${question.question}</div>
                <div class="options">
                    ${question.options.map((option, i) => `
                        <div class="option" onclick="selectAnswer(this, ${i})">${option}</div>
                    `).join('')}
                </div>
                <div class="explanation" id="explanation" style="display: none;">
                    <h4>Giải thích:</h4>
                    <p>${question.explanation}</p>
                </div>
            </div>
            <div class="quiz-controls">
                <button class="btn btn-secondary" onclick="previousQuizQuestion()">← Trước</button>
                <button class="btn btn-primary" onclick="checkAnswer()">Kiểm tra</button>
                <button class="btn btn-secondary" onclick="nextQuizQuestion()">Tiếp →</button>
            </div>
        </div>
    `;
    
    currentQuizIndex = index;
    quizAnswers = [];
}

function selectAnswer(optionElement, answerIndex) {
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    optionElement.classList.add('selected');
    quizAnswers = [answerIndex];
}

function checkAnswer() {
    const unit = learningData.units[currentUnit];
    const question = unit.quiz[currentQuizIndex];
    const selectedAnswer = quizAnswers[0];
    
    if (selectedAnswer === undefined) {
        alert('Vui lòng chọn một đáp án!');
        return;
    }
    
    const options = document.querySelectorAll('.option');
    const explanation = document.getElementById('explanation');
    
    options.forEach((option, index) => {
        option.onclick = null;
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedAnswer && index !== question.correct) {
            option.classList.add('incorrect');
        }
    });
    
    explanation.style.display = 'block';
    
    // Save error if wrong answer
    if (selectedAnswer !== question.correct) {
        saveError({
            unit: currentUnit,
            question: question.question,
            userAnswer: question.options[selectedAnswer],
            correctAnswer: question.options[question.correct],
            explanation: question.explanation,
            timestamp: new Date().toISOString()
        });
    }
}

function previousQuizQuestion() {
    const unit = learningData.units[currentUnit];
    if (currentQuizIndex > 0) {
        showQuizQuestion(unit, currentQuizIndex - 1);
    }
}

function nextQuizQuestion() {
    const unit = learningData.units[currentUnit];
    if (currentQuizIndex < unit.quiz.length - 1) {
        showQuizQuestion(unit, currentQuizIndex + 1);
    }
}

// Mock test functionality
function startMockTest() {
    currentMockTestQuestion = 0;
    mockTestAnswers = new Array(learningData.mockTest.length).fill(null);
    
    const modal = document.getElementById('test-modal');
    modal.style.display = 'block';
    
    showMockTestQuestion(0);
}

function showMockTestQuestion(questionIndex) {
    const questionContainer = document.getElementById('question-container');
    const question = learningData.mockTest[questionIndex];
    
    questionContainer.innerHTML = `
        <div class="question">
            <div class="question-text">
                <span class="part-label">Phần ${getPartLabel(question.part)} - Câu ${questionIndex + 1}:</span><br>
                ${question.question}
            </div>
            <div class="options">
                ${question.options.map((option, i) => `
                    <div class="option ${mockTestAnswers[questionIndex] === i ? 'selected' : ''}" 
                         onclick="selectMockTestAnswer(${i})">${option}</div>
                `).join('')}
            </div>
        </div>
    `;
    
    document.getElementById('current-question').textContent = questionIndex + 1;
    updateTestProgress();
    updateTestButtons();
}

function getPartLabel(part) {
    const labels = {
        'phonetics': 'A - Ngữ âm',
        'vocabulary': 'B - Từ vựng',
        'grammar': 'B - Ngữ pháp',
        'reading': 'C - Đọc hiểu'
    };
    return labels[part] || part;
}

function selectMockTestAnswer(answerIndex) {
    mockTestAnswers[currentMockTestQuestion] = answerIndex;
    
    document.querySelectorAll('.option').forEach((opt, index) => {
        opt.classList.toggle('selected', index === answerIndex);
    });
}

function updateTestProgress() {
    const progress = ((currentMockTestQuestion + 1) / learningData.mockTest.length) * 100;
    document.getElementById('test-progress').style.width = progress + '%';
}

function updateTestButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    
    prevBtn.disabled = currentMockTestQuestion === 0;
    
    if (currentMockTestQuestion === learningData.mockTest.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }
}

function previousQuestion() {
    if (currentMockTestQuestion > 0) {
        currentMockTestQuestion--;
        showMockTestQuestion(currentMockTestQuestion);
    }
}

function nextQuestion() {
    if (currentMockTestQuestion < learningData.mockTest.length - 1) {
        currentMockTestQuestion++;
        showMockTestQuestion(currentMockTestQuestion);
    }
}

function submitTest() {
    calculateMockTestResults();
}

function calculateMockTestResults() {
    let correctCount = 0;
    const results = [];
    
    learningData.mockTest.forEach((question, index) => {
        const userAnswer = mockTestAnswers[index];
        const isCorrect = userAnswer === question.correct;
        
        if (isCorrect) {
            correctCount++;
        } else {
            // Save error
            saveError({
                type: 'mockTest',
                question: question.question,
                userAnswer: userAnswer !== null ? question.options[userAnswer] : 'Không trả lời',
                correctAnswer: question.options[question.correct],
                explanation: question.explanation,
                timestamp: new Date().toISOString()
            });
        }
        
        results.push({
            question: question.question,
            userAnswer: userAnswer !== null ? question.options[userAnswer] : 'Không trả lời',
            correctAnswer: question.options[question.correct],
            isCorrect: isCorrect,
            explanation: question.explanation
        });
    });
    
    showTestResults(correctCount, learningData.mockTest.length, results);
}

function showTestResults(correctCount, totalCount, results) {
    const percentage = Math.round((correctCount / totalCount) * 100);
    
    document.getElementById('final-score').textContent = correctCount;
    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('incorrect-count').textContent = totalCount - correctCount;
    document.getElementById('percentage').textContent = percentage;
    
    const resultDetails = document.getElementById('result-details');
    resultDetails.innerHTML = results.map((result, index) => `
        <div class="result-item ${result.isCorrect ? 'correct' : 'incorrect'}">
            <p><strong>Câu ${index + 1}:</strong> ${result.question}</p>
            <p>Đáp án của bạn: ${result.userAnswer}</p>
            <p>Đáp án đúng: ${result.correctAnswer}</p>
            <p><em>Giải thích: ${result.explanation}</em></p>
        </div>
    `).join('');
    
    closeModal('test-modal');
    document.getElementById('result-modal').style.display = 'block';
    
    updateErrorStats();
}

// Error tracking functionality
function saveError(error) {
    const errors = JSON.parse(localStorage.getItem('errors') || '[]');
    errors.push(error);
    localStorage.setItem('errors', JSON.stringify(errors));
    updateErrorStats();
}

function updateErrorStats() {
    const errors = JSON.parse(localStorage.getItem('errors') || '[]');
    const totalErrors = errors.length;
    const fixedErrors = errors.filter(e => e.fixed).length;
    
    document.getElementById('total-errors').textContent = totalErrors;
    document.getElementById('fixed-errors').textContent = fixedErrors;
    
    displayErrors();
}

function displayErrors() {
    const errors = JSON.parse(localStorage.getItem('errors') || '[]');
    const errorList = document.getElementById('error-list');
    
    if (errors.length === 0) {
        errorList.innerHTML = '<p class="empty-state">Chưa có lỗi sai nào. Hãy làm bài tập để xem lỗi sai!</p>';
        return;
    }
    
    errorList.innerHTML = errors.map((error, index) => `
        <div class="error-item ${error.fixed ? 'fixed' : ''}">
            <div class="error-header">
                <span class="error-question">${error.question}</span>
                <button class="btn btn-small" onclick="toggleErrorFixed(${index})">
                    ${error.fixed ? '✅ Đã sửa' : '❌ Chưa sửa'}
                </button>
            </div>
            <div class="error-details">
                <p><strong>Đáp án của bạn:</strong> ${error.userAnswer}</p>
                <p><strong>Đáp án đúng:</strong> ${error.correctAnswer}</p>
                <p><strong>Giải thích:</strong> ${error.explanation}</p>
            </div>
        </div>
    `).join('');
}

function toggleErrorFixed(index) {
    const errors = JSON.parse(localStorage.getItem('errors') || '[]');
    errors[index].fixed = !errors[index].fixed;
    localStorage.setItem('errors', JSON.stringify(errors));
    updateErrorStats();
}

function reviewMistakes() {
    closeModal('result-modal');
    document.querySelector('[data-tab="errors"]').click();
}

// Speech functionality
function speakText(text, event) {
    if (event) {
        event.stopPropagation();
    }
    
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-GB';
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
}

// Modal functionality
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        
        // Reopen day modal when closing unit modal
        if (modalId === 'unit-modal' && currentDayModal) {
            setTimeout(() => {
                currentDayModal.style.display = 'block';
            }, 100);
        }
        
        // Clear tracking when closing day modal (user explicitly closes it)
        if (modalId === 'day-content-modal') {
            currentDayModal = null;
        }
    }
}

// Progress tracking
function loadProgress() {
    // Load any saved progress from localStorage
    const progress = JSON.parse(localStorage.getItem('progress') || '{}');
    // Update UI based on saved progress
}

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

// ==================== NEW EXERCISE TYPES ====================

// Reading Comprehension Functions
function startReadingComprehension() {
    currentReadingIndex = 0;
    readingAnswers = [];
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'reading-modal';
    modal.style.display = 'block';
    
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 900px;">
            <div class="modal-header">
                <h3>📖 Đọc Hiểu (Reading Comprehension)</h3>
                <button class="close-btn" onclick="closeModal('reading-modal')">&times;</button>
            </div>
            <div class="modal-body">
                <div class="reading-selector">
                    <p>Chọn bài đọc:</p>
                    ${learningData.readingComprehension.map((rc, index) => `
                        <button class="btn btn-secondary" onclick="showReadingExercise(${index})">${rc.title}</button>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function showReadingExercise(index) {
    currentReadingIndex = index;
    readingAnswers = [];
    const exercise = learningData.readingComprehension[index];
    
    const modal = document.getElementById('reading-modal');
    const modalBody = modal.querySelector('.modal-body');
    
    modalBody.innerHTML = `
        <div class="reading-exercise">
            <h4>${exercise.title}</h4>
            <div class="reading-passage">
                <p>${exercise.passage}</p>
            </div>
            <div class="reading-questions">
                ${exercise.questions.map((q, qIndex) => `
                    <div class="reading-question" id="reading-q-${qIndex}">
                        <p><strong>Câu ${qIndex + 1}:</strong> ${q.question}</p>
                        ${q.type === 'trueFalse' ? `
                            <div class="true-false-options">
                                <button class="btn btn-secondary" onclick="selectReadingAnswer(${qIndex}, true)">True (Đúng)</button>
                                <button class="btn btn-secondary" onclick="selectReadingAnswer(${qIndex}, false)">False (Sai)</button>
                            </div>
                        ` : `
                            <input type="text" class="answer-input" id="reading-input-${qIndex}" placeholder="Nhập câu trả lời...">
                        `}
                        <div class="explanation" id="reading-explanation-${qIndex}" style="display: none;">
                            <p><strong>Giải thích:</strong> ${q.explanation}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="reading-actions">
                <button class="btn btn-primary" onclick="checkReadingAnswers()">Kiểm tra đáp án</button>
                <button class="btn btn-secondary" onclick="startReadingComprehension()">Chọn bài khác</button>
            </div>
        </div>
    `;
}

function selectReadingAnswer(questionIndex, answer) {
    readingAnswers[questionIndex] = answer;
    
    // Update button styles
    const questionDiv = document.getElementById(`reading-q-${questionIndex}`);
    const buttons = questionDiv.querySelectorAll('.true-false-options button');
    buttons.forEach(btn => btn.classList.remove('selected'));
    buttons[answer ? 0 : 1].classList.add('selected');
}

function checkReadingAnswers() {
    const exercise = learningData.readingComprehension[currentReadingIndex];
    let correctCount = 0;
    
    exercise.questions.forEach((q, qIndex) => {
        const userAnswer = readingAnswers[qIndex];
        const isCorrect = userAnswer === q.correct;
        
        if (isCorrect) {
            correctCount++;
        } else {
            // Save error
            saveError({
                type: 'reading',
                question: q.question,
                userAnswer: userAnswer !== undefined ? (userAnswer ? 'True' : 'False') : 'Không trả lời',
                correctAnswer: q.correct ? 'True' : 'False',
                explanation: q.explanation,
                timestamp: new Date().toISOString()
            });
        }
        
        // Show explanation
        document.getElementById(`reading-explanation-${qIndex}`).style.display = 'block';
        
        // Highlight correct/incorrect
        const questionDiv = document.getElementById(`reading-q-${qIndex}`);
        if (q.type === 'trueFalse') {
            const buttons = questionDiv.querySelectorAll('.true-false-options button');
            buttons.forEach((btn, i) => {
                btn.disabled = true;
                if ((i === 0 && q.correct) || (i === 1 && !q.correct)) {
                    btn.classList.add('correct');
                }
                if (userAnswer !== undefined && ((i === 0 && userAnswer !== q.correct) || (i === 1 && userAnswer === q.correct))) {
                    btn.classList.add('incorrect');
                }
            });
        }
    });
    
    // Save progress
    saveExerciseProgress('reading', currentReadingIndex, correctCount, exercise.questions.length);
    
    alert(`Bạn làm đúng ${correctCount}/${exercise.questions.length} câu!`);
}

// Matching Exercise Functions
function startMatchingExercise() {
    currentMatchingIndex = 0;
    matchingAnswers = {};
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'matching-modal';
    modal.style.display = 'block';
    
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 900px;">
            <div class="modal-header">
                <h3>🔗 Ghép Cặp Câu Hỏi - Câu Trả Lời (Matching)</h3>
                <button class="close-btn" onclick="closeModal('matching-modal')">&times;</button>
            </div>
            <div class="modal-body">
                <div class="matching-selector">
                    <p>Chọn bộ ghép:</p>
                    ${learningData.matchingExercises.map((me, index) => `
                        <button class="btn btn-secondary" onclick="showMatchingExercise(${index})">${me.title}</button>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function showMatchingExercise(index) {
    currentMatchingIndex = index;
    matchingAnswers = {};
    const exercise = learningData.matchingExercises[index];
    
    // Shuffle column B
    const shuffledB = [...exercise.columnB].sort(() => Math.random() - 0.5);
    
    const modal = document.getElementById('matching-modal');
    const modalBody = modal.querySelector('.modal-body');
    
    modalBody.innerHTML = `
        <div class="matching-exercise">
            <h4>${exercise.title}</h4>
            <p class="exercise-instruction">${exercise.explanation}</p>
            <div class="matching-columns">
                <div class="matching-column column-a">
                    <h5>Cột A (Câu hỏi)</h5>
                    ${exercise.columnA.map((item, index) => `
                        <div class="matching-item" data-a="${index + 1}">${item}</div>
                    `).join('')}
                </div>
                <div class="matching-column column-b">
                    <h5>Cột B (Câu trả lời)</h5>
                    ${shuffledB.map((item, index) => `
                        <div class="matching-item" data-b="${String.fromCharCode(97 + index)}">${item}</div>
                    `).join('')}
                </div>
            </div>
            <div class="matching-input">
                <p>Nhập đáp án (ví dụ: 1-a, 2-b, 3-c):</p>
                <input type="text" class="answer-input" id="matching-answer" placeholder="1-a, 2-b, 3-c">
            </div>
            <div class="matching-actions">
                <button class="btn btn-primary" onclick="checkMatchingAnswers()">Kiểm tra đáp án</button>
                <button class="btn btn-secondary" onclick="startMatchingExercise()">Chọn bộ khác</button>
            </div>
            <div class="matching-result" id="matching-result" style="display: none;"></div>
        </div>
    `;
}

function checkMatchingAnswers() {
    const exercise = learningData.matchingExercises[currentMatchingIndex];
    const input = document.getElementById('matching-answer').value;
    const resultDiv = document.getElementById('matching-result');
    
    // Parse answers
    const userAnswers = {};
    input.split(',').forEach(pair => {
        const [a, b] = pair.trim().split('-');
        if (a && b) {
            userAnswers[a] = b;
        }
    });
    
    let correctCount = 0;
    let resultHTML = '<h4>Kết quả:</h4><ul>';
    
    Object.keys(exercise.correctAnswers).forEach(a => {
        const correct = exercise.correctAnswers[a];
        const user = userAnswers[a];
        const isCorrect = user === correct;
        
        if (isCorrect) {
            correctCount++;
        } else {
            // Save error
            saveError({
                type: 'matching',
                question: exercise.columnA[parseInt(a) - 1],
                userAnswer: user ? exercise.columnB[parseInt(user.charCodeAt(0) - 97)] : 'Không trả lời',
                correctAnswer: exercise.columnB[parseInt(correct.charCodeAt(0) - 97)],
                explanation: exercise.explanation,
                timestamp: new Date().toISOString()
            });
        }
        
        resultHTML += `
            <li class="${isCorrect ? 'correct' : 'incorrect'}">
                ${a}. ${exercise.columnA[parseInt(a) - 1]} → ${user ? user : '(chưa chọn)'} 
                ${isCorrect ? '✅' : '❌ (Đáp án: ' + correct + ')'}
            </li>
        `;
    });
    
    resultHTML += '</ul>';
    resultDiv.innerHTML = resultHTML;
    resultDiv.style.display = 'block';
    
    // Save progress
    saveExerciseProgress('matching', currentMatchingIndex, correctCount, Object.keys(exercise.correctAnswers).length);
    
    alert(`Bạn ghép đúng ${correctCount}/${Object.keys(exercise.correctAnswers).length} cặp!`);
}

// Sentence Rearrangement Functions
function startSentenceRearrangement() {
    currentSentenceIndex = 0;
    currentSentenceExerciseIndex = 0;
    sentenceAnswers = [];
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'sentence-modal';
    modal.style.display = 'block';
    
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 900px;">
            <div class="modal-header">
                <h3>🔤 Sắp Xếp Từ Thành Câu (Sentence Rearrangement)</h3>
                <button class="close-btn" onclick="closeModal('sentence-modal')">&times;</button>
            </div>
            <div class="modal-body">
                <div class="sentence-selector">
                    <p>Chọn bài sắp xếp:</p>
                    ${learningData.sentenceRearrangement.map((sr, index) => `
                        <button class="btn btn-secondary" onclick="showSentenceExercise(${index})">${sr.title}</button>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function showSentenceExercise(exerciseIndex) {
    currentSentenceExerciseIndex = exerciseIndex;
    currentSentenceIndex = 0;
    sentenceAnswers = [];
    const exercise = learningData.sentenceRearrangement[exerciseIndex];
    
    const modal = document.getElementById('sentence-modal');
    const modalBody = modal.querySelector('.modal-body');
    
    modalBody.innerHTML = `
        <div class="sentence-exercise">
            <h4>${exercise.title}</h4>
            <p class="exercise-instruction">Click vào các từ để sắp xếp hoặc gõ câu trả lời trực tiếp vào ô bên dưới. Chữ hoa/thường không ảnh hưởng đến kết quả.</p>
            <div class="sentence-words" id="sentence-words"></div>
            <div class="sentence-answer">
                <input type="text" class="answer-input" id="sentence-input" placeholder="Nhập câu đã sắp xếp...">
                <button class="btn btn-small btn-clear" onclick="clearSentenceInput()">🗑️ Xóa</button>
            </div>
            <div class="sentence-actions">
                <button class="btn btn-primary" onclick="checkSentenceAnswer()">Kiểm tra</button>
                <button class="btn btn-secondary" onclick="nextSentence()">Câu tiếp theo</button>
                <button class="btn btn-secondary" onclick="showSentence(${currentSentenceIndex})">Làm lại</button>
                <button class="btn btn-secondary" onclick="startSentenceRearrangement()">Chọn bài khác</button>
            </div>
            <div class="sentence-result" id="sentence-result" style="display: none;"></div>
            <div class="sentence-counter">Câu ${currentSentenceIndex + 1}/${exercise.sentences.length}</div>
        </div>
    `;
    
    showSentence(currentSentenceIndex);
}

function showSentence(index) {
    currentSentenceIndex = index;
    const exercise = learningData.sentenceRearrangement[currentSentenceExerciseIndex];
    const sentence = exercise.sentences[index];
    
    const wordsDiv = document.getElementById('sentence-words');
    const words = sentence.scrambled.split(' / ');
    
    wordsDiv.innerHTML = words.map((word, i) => `
        <span class="word-chip" onclick="addWordToAnswer('${word}', this)">${word}</span>
    `).join('');
    
    document.getElementById('sentence-input').value = '';
    document.getElementById('sentence-result').style.display = 'none';
    document.querySelector('.sentence-counter').textContent = `Câu ${currentSentenceIndex + 1}/${exercise.sentences.length}`;
}

function addWordToAnswer(word, element) {
    const input = document.getElementById('sentence-input');
    input.value = input.value ? input.value + ' ' + word : word;
    element.style.opacity = '0.5';
    element.onclick = null;
}

function clearSentenceInput() {
    document.getElementById('sentence-input').value = '';
    document.getElementById('sentence-result').style.display = 'none';
    
    // Reset all word chips
    const wordChips = document.querySelectorAll('.word-chip');
    wordChips.forEach(chip => {
        chip.style.opacity = '1';
        chip.onclick = function() {
            addWordToAnswer(chip.textContent, chip);
        };
    });
}

function checkSentenceAnswer() {
    const exercise = learningData.sentenceRearrangement[currentSentenceExerciseIndex];
    const sentence = exercise.sentences[currentSentenceIndex];
    const userAnswer = document.getElementById('sentence-input').value.trim();
    const resultDiv = document.getElementById('sentence-result');
    
    // Normalize both answers for comparison (remove extra spaces, remove punctuation, convert to lowercase)
    const normalizeAnswer = (text) => {
        return text
            .replace(/[.,!?;:]/g, '') // Remove punctuation
            .replace(/\s+/g, ' ') // Replace multiple spaces with single space
            .toLowerCase()
            .trim();
    };
    
    const normalizedUserAnswer = normalizeAnswer(userAnswer);
    const normalizedCorrectAnswer = normalizeAnswer(sentence.correct);
    
    console.log('User answer:', userAnswer, '->', normalizedUserAnswer);
    console.log('Correct answer:', sentence.correct, '->', normalizedCorrectAnswer);
    
    const isCorrect = normalizedUserAnswer === normalizedCorrectAnswer;
    
    if (isCorrect) {
        resultDiv.innerHTML = `
            <p class="correct">✅ Chính xác!</p>
            <p><strong>Câu đúng:</strong> ${sentence.correct}</p>
            <p><strong>Giải thích:</strong> ${sentence.explanation}</p>
        `;
        sentenceAnswers[currentSentenceIndex] = true;
    } else {
        resultDiv.innerHTML = `
            <p class="incorrect">❌ Chưa chính xác!</p>
            <p><strong>Câu của bạn:</strong> ${userAnswer}</p>
            <p><strong>Câu đúng:</strong> ${sentence.correct}</p>
            <p><strong>Giải thích:</strong> ${sentence.explanation}</p>
        `;
        sentenceAnswers[currentSentenceIndex] = false;
        
        // Save error
        saveError({
            type: 'sentence',
            question: sentence.scrambled,
            userAnswer: userAnswer,
            correctAnswer: sentence.correct,
            explanation: sentence.explanation,
            timestamp: new Date().toISOString()
        });
    }
    
    resultDiv.style.display = 'block';
    
    // Save progress
    const correctCount = sentenceAnswers.filter(a => a === true).length;
    saveExerciseProgress('sentence', currentSentenceExerciseIndex, correctCount, exercise.sentences.length);
}

function nextSentence() {
    const exercise = learningData.sentenceRearrangement[currentSentenceExerciseIndex];
    if (currentSentenceIndex < exercise.sentences.length - 1) {
        showSentence(currentSentenceIndex + 1);
    } else {
        const correctCount = sentenceAnswers.filter(a => a === true).length;
        alert(`Bạn đã làm xong! Số câu đúng: ${correctCount}/${exercise.sentences.length}`);
        closeModal('sentence-modal');
    }
}

// Save exercise progress to localStorage
function saveExerciseProgress(type, exerciseId, correct, total) {
    const progress = JSON.parse(localStorage.getItem('exerciseProgress') || '{}');
    
    if (!progress[type]) {
        progress[type] = {};
    }
    
    progress[type][exerciseId] = {
        correct: correct,
        total: total,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('exerciseProgress', JSON.stringify(progress));
}

// Load exercise progress from localStorage
function loadExerciseProgress(type, exerciseId) {
    const progress = JSON.parse(localStorage.getItem('exerciseProgress') || '{}');
    
    if (progress[type] && progress[type][exerciseId]) {
        return progress[type][exerciseId];
    }
    
    return null;
}

// Speaking Section Functionality
let mediaRecorder;
let audioChunks = [];
let currentRecordingTopic = '';
let isRecording = false;

// Speaking content data
const speakingContent = {
    birthday: {
        english: "My birthday is on Sunday. At my birthday party, I will have a big cake. I will have pizza, chicken, and chips. I will have water, apple juice, and milk. I will have fruits like bananas and apples. I will play games with my friends. We will sing and dance. I will get presents. I will be happy.",
        pronunciation: "My birth-day is on Sun-day. At my birthday party, I will have a big cake. I will have piz-za, chick-en, and chips. I will have wa-ter, ap-ple juice, and milk. I will have fruits like ba-na-nas and ap-ples. I will play games with my friends. We will sing and dance. I will get pre-sents. I will be ha-ppy.",
        keywords: ["birthday", "food", "drinks", "fruits", "games", "cake", "presents", "sing", "dance", "friends"],
        vocabulary: [
            { word: "birthday", phonetic: "/ˈbɜːrθdeɪ/", vietnamese: "sinh nhật" },
            { word: "cake", phonetic: "/keɪk/", vietnamese: "bánh kem" },
            { word: "pizza", phonetic: "/ˈpiːtsə/", vietnamese: "pizza" },
            { word: "chicken", phonetic: "/ˈtʃɪkɪn/", vietnamese: "gà" },
            { word: "chips", phonetic: "/tʃɪps/", vietnamese: "khoai tây chiên" },
            { word: "drinks", phonetic: "/drɪŋks/", vietnamese: "đồ uống" },
            { word: "water", phonetic: "/ˈwɔːtər/", vietnamese: "nước lọc" },
            { word: "apple juice", phonetic: "/ˈæpl dʒuːs/", vietnamese: "nước ép táo" },
            { word: "milk", phonetic: "/mɪlk/", vietnamese: "sữa" },
            { word: "fruits", phonetic: "/fruːts/", vietnamese: "trái cây" },
            { word: "bananas", phonetic: "/bəˈnænəz/", vietnamese: "chuối" },
            { word: "apples", phonetic: "/ˈæplz/", vietnamese: "táo" },
            { word: "games", phonetic: "/ɡeɪmz/", vietnamese: "trò chơi" },
            { word: "friends", phonetic: "/frendz/", vietnamese: "bạn bè" },
            { word: "sing", phonetic: "/sɪŋ/", vietnamese: "hát" },
            { word: "dance", phonetic: "/dæns/", vietnamese: "nhảy/múa" },
            { word: "presents", phonetic: "/ˈpreznts/", vietnamese: "quà tặng" },
            { word: "happy", phonetic: "/ˈhæpi/", vietnamese: "vui vẻ" }
        ]
    },
    health: {
        english: "Minh has a headache. He should have a rest. He shouldn't watch too much TV. Linda has a toothache. She should go to the dentist. She shouldn't eat ice cream. Linh has a sore throat. She should drink warm water. She shouldn't eat spicy food.",
        pronunciation: "Minh has a head-ache. He should have a rest. He should-n't watch too much TV. Linda has a tooth-ache. She should go to the den-tist. She should-n't eat ice cream. Linh has a sore throat. She should drink warm water. She should-n't eat spi-cy food.",
        keywords: ["headache", "toothache", "sore throat", "should", "shouldn't"],
        vocabulary: [
            { word: "headache", phonetic: "/ˈhedeɪk/", vietnamese: "đau đầu" },
            { word: "toothache", phonetic: "/ˈtuːθeɪk/", vietnamese: "đau răng" },
            { word: "sore throat", phonetic: "/sɔːr θroʊt/", vietnamese: "đau họng" },
            { word: "should", phonetic: "/ʃʊd/", vietnamese: "nên" },
            { word: "shouldn't", phonetic: "/ˈʃʊdnt/", vietnamese: "không nên" },
            { word: "rest", phonetic: "/rest/", vietnamese: "nghỉ ngơi" },
            { word: "watch", phonetic: "/wɒtʃ/", vietnamese: "xem" },
            { word: "dentist", phonetic: "/ˈdentɪst/", vietnamese: "nha sĩ" },
            { word: "ice cream", phonetic: "/aɪs kriːm/", vietnamese: "kem" },
            { word: "warm", phonetic: "/wɔːrm/", vietnamese: "ấm" },
            { word: "spicy", phonetic: "/ˈspaɪsi/", vietnamese: "cay" },
            { word: "food", phonetic: "/fuːd/", vietnamese: "đồ ăn" }
        ]
    },
    transport: {
        english: "Today is Sunday. We want to visit the city zoo. We will get there by bus. The zoo is big and beautiful. We will see elephants, monkeys, and tigers. We will take photos. We will eat ice cream. We will go home in the afternoon. It will be a nice trip.",
        pronunciation: "Today is Sun-day. We want to visit the city zoo. We will get there by bus. The zoo is big and beau-ti-ful. We will see e-le-phants, mon-keys, and ti-gers. We will take pho-tos. We will eat ice cream. We will go home in the after-noon. It will be a nice trip.",
        keywords: ["want to visit", "get there by", "beautiful", "interesting"],
        vocabulary: [
            { word: "today", phonetic: "/təˈdeɪ/", vietnamese: "hôm nay" },
            { word: "Sunday", phonetic: "/ˈsʌndeɪ/", vietnamese: "Chủ nhật" },
            { word: "want to", phonetic: "/wɒnt tuː/", vietnamese: "muốn" },
            { word: "visit", phonetic: "/ˈvɪzɪt/", vietnamese: "thăm" },
            { word: "city", phonetic: "/ˈsɪti/", vietnamese: "thành phố" },
            { word: "zoo", phonetic: "/zuː/", vietnamese: "vườn bách thú" },
            { word: "get there", phonetic: "/ɡet ðeər/", vietnamese: "đến đó" },
            { word: "by bus", phonetic: "/baɪ bʌs/", vietnamese: "bằng xe buýt" },
            { word: "beautiful", phonetic: "/ˈbjuːtɪfl/", vietnamese: "đẹp" },
            { word: "big", phonetic: "/bɪɡ/", vietnamese: "to, lớn" },
            { word: "elephants", phonetic: "/ˈelɪfənts/", vietnamese: "voi" },
            { word: "monkeys", phonetic: "/ˈmʌŋkiz/", vietnamese: "khỉ" },
            { word: "tigers", phonetic: "/ˈtaɪɡərz/", vietnamese: "hổ" },
            { word: "photos", phonetic: "/ˈfoʊtoʊz/", vietnamese: "bức ảnh" },
            { word: "take photos", phonetic: "/teɪk foʊtoʊz/", vietnamese: "chụp ảnh" },
            { word: "afternoon", phonetic: "/ˌæftərˈnuːn/", vietnamese: "buổi chiều" },
            { word: "home", phonetic: "/hoʊm/", vietnamese: "nhà" },
            { word: "nice", phonetic: "/naɪs/", vietnamese: "tốt, đẹp" },
            { word: "trip", phonetic: "/trɪp/", vietnamese: "chuyến đi" }
        ]
    }
};

// Initialize Web Speech API for text-to-speech
function initSpeechSynthesis() {
    if ('speechSynthesis' in window) {
        console.log('Speech synthesis available');
        return true;
    } else {
        console.log('Speech synthesis not supported');
        return false;
    }
}

// Play speaking audio using text-to-speech
function playSpeakingAudio(topic, type) {
    if (!initSpeechSynthesis()) {
        alert('Trình duyệt của bạn không hỗ trợ phát âm. Vui lòng sử dụng Chrome hoặc Edge.');
        return;
    }
    
    const content = speakingContent[topic];
    if (!content) {
        console.error('Topic not found:', topic);
        return;
    }
    
    const text = type === 'english' ? content.english : content.pronunciation;
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Configure voice settings for better intonation
    utterance.lang = 'en-US';
    utterance.rate = type === 'english' ? 0.9 : 0.6; // Slightly slower for clarity
    utterance.pitch = 1.1; // Slightly higher pitch for clearer sound
    utterance.volume = 1.0;
    
    // Try to find the best voice for learning
    const voices = window.speechSynthesis.getVoices();
    
    // Priority order for voice selection
    const preferredVoices = [
        // Google voices (usually good quality)
        voices.find(voice => voice.name.includes('Google') && voice.lang.includes('en-US')),
        voices.find(voice => voice.name.includes('Google') && voice.lang.includes('en')),
        // Microsoft voices (good clarity)
        voices.find(voice => voice.name.includes('Microsoft') && voice.name.includes('Zira')),
        voices.find(voice => voice.name.includes('Microsoft') && voice.lang.includes('en-US')),
        // Amazon voices
        voices.find(voice => voice.name.includes('Amazon') && voice.name.includes('Joanna')),
        voices.find(voice => voice.name.includes('Amazon') && voice.lang.includes('en-US')),
        // Female voices (generally clearer for learning)
        voices.find(voice => voice.lang.includes('en-US') && voice.name.includes('Female')),
        voices.find(voice => voice.lang.includes('en') && voice.name.includes('Female')),
        // Any US English voice
        voices.find(voice => voice.lang.includes('en-US')),
        voices.find(voice => voice.lang.includes('en'))
    ].filter(Boolean); // Remove undefined entries
    
    if (preferredVoices.length > 0) {
        utterance.voice = preferredVoices[0];
        console.log('Using voice:', preferredVoices[0].name);
    }
    
    // Add pauses for punctuation (better rhythm)
    if (type === 'english') {
        utterance.text = text.replace(/([.!?])/g, '$1 ');
    }
    
    // Add visual feedback
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = '🔊 Đang phát...';
    button.disabled = true;
    
    utterance.onend = function() {
        button.textContent = originalText;
        button.disabled = false;
    };
    
    utterance.onerror = function(event) {
        console.error('Speech synthesis error:', event);
        button.textContent = originalText;
        button.disabled = false;
        alert('Lỗi phát âm. Vui lòng thử lại.');
    };
    
    window.speechSynthesis.speak(utterance);
}

// Load vocabulary for speaking topics
function loadVocabulary() {
    const topics = ['birthday', 'health', 'transport'];
    
    topics.forEach(topic => {
        const container = document.getElementById(`${topic}-vocabulary`);
        if (!container) return;
        
        const vocabulary = speakingContent[topic].vocabulary;
        container.innerHTML = '';
        
        vocabulary.forEach(item => {
            const card = document.createElement('div');
            card.className = 'vocabulary-card';
            card.innerHTML = `
                <div class="vocabulary-word">${item.word}</div>
                <div class="vocabulary-phonetic">${item.phonetic}</div>
                <div class="vocabulary-meaning">${item.vietnamese}</div>
                <button class="vocabulary-audio" onclick="playVocabularyAudio('${item.word}', '${topic}')">
                    🔊 Nghe
                </button>
            `;
            container.appendChild(card);
        });
    });
}

// Play individual vocabulary word audio
function playVocabularyAudio(word, topic) {
    if (!initSpeechSynthesis()) {
        alert('Trình duyệt của bạn không hỗ trợ phát âm. Vui lòng sử dụng Chrome hoặc Edge.');
        return;
    }
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(word);
    
    // Configure for single word pronunciation
    utterance.lang = 'en-US';
    utterance.rate = 0.7; // Slower for vocabulary
    utterance.pitch = 1.2; // Higher pitch for clarity
    utterance.volume = 1.0;
    
    // Use same voice selection logic
    const voices = window.speechSynthesis.getVoices();
    const preferredVoices = [
        voices.find(voice => voice.name.includes('Google') && voice.lang.includes('en-US')),
        voices.find(voice => voice.name.includes('Microsoft') && voice.name.includes('Zira')),
        voices.find(voice => voice.name.includes('Amazon') && voice.name.includes('Joanna')),
        voices.find(voice => voice.lang.includes('en-US') && voice.name.includes('Female')),
        voices.find(voice => voice.lang.includes('en-US'))
    ].filter(Boolean);
    
    if (preferredVoices.length > 0) {
        utterance.voice = preferredVoices[0];
    }
    
    // Visual feedback
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = '🔊...';
    button.disabled = true;
    
    utterance.onend = function() {
        button.textContent = originalText;
        button.disabled = false;
    };
    
    utterance.onerror = function() {
        button.textContent = originalText;
        button.disabled = false;
    };
    
    window.speechSynthesis.speak(utterance);
}

// Start recording functionality
async function startRecording(topic) {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = [];
        currentRecordingTopic = topic;
        isRecording = true;
        
        mediaRecorder.ondataavailable = function(event) {
            audioChunks.push(event.data);
        };
        
        mediaRecorder.onstop = function() {
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            const audioUrl = URL.createObjectURL(audioBlob);
            
            // Store the recording for playback
            const audio = new Audio(audioUrl);
            window.lastRecording = audio;
            
            // Update UI
            updateRecordingUI(topic, 'ready');
            
            // Enable play button
            const playBtn = document.getElementById(`play-recording-btn${topic !== 'birthday' ? '-' + topic : ''}`);
            if (playBtn) {
                playBtn.style.display = 'inline-flex';
            }
        };
        
        mediaRecorder.start();
        updateRecordingUI(topic, 'recording');
        
        // Update button states
        const stopBtn = document.getElementById(`stop-btn${topic !== 'birthday' ? '-' + topic : ''}`);
        if (stopBtn) {
            stopBtn.style.display = 'inline-flex';
        }
        
        event.target.style.display = 'none';
        
    } catch (error) {
        console.error('Error accessing microphone:', error);
        alert('Không thể truy cập micro. Vui lòng kiểm tra quyền micro trong trình duyệt.');
    }
}

// Stop recording functionality
function stopRecording() {
    if (mediaRecorder && isRecording) {
        mediaRecorder.stop();
        isRecording = false;
        
        // Stop all tracks
        mediaRecorder.stream.getTracks().forEach(track => track.stop());
        
        // Hide stop button, show start button
        const topic = currentRecordingTopic;
        const stopBtn = document.getElementById(`stop-btn${topic !== 'birthday' ? '-' + topic : ''}`);
        const startBtn = document.querySelector(`button[onclick="startRecording('${topic}')"]`);
        
        if (stopBtn) {
            stopBtn.style.display = 'none';
        }
        if (startBtn) {
            startBtn.style.display = 'inline-flex';
        }
    }
}

// Play last recording
function playRecording() {
    if (window.lastRecording) {
        window.lastRecording.play();
    } else {
        alert('Chưa có bản ghi âm nào. Vui lòng ghi âm trước.');
    }
}

// Update recording UI
function updateRecordingUI(topic, status) {
    const statusElement = document.getElementById(`recording-status${topic !== 'birthday' ? '-' + topic : ''}`);
    if (statusElement) {
        statusElement.className = 'recording-status';
        
        if (status === 'recording') {
            statusElement.classList.add('recording');
            statusElement.textContent = '🔴 Đang ghi âm...';
        } else if (status === 'ready') {
            statusElement.classList.add('ready');
            statusElement.textContent = '✅ Bản ghi âm đã sẵn sàng. Nhấn "Nghe lại" để xem.';
        } else {
            statusElement.textContent = '';
        }
    }
}

// Check speaking test
function checkSpeakingTest() {
    const input = document.getElementById('speaking-test-input').value.trim().toLowerCase();
    const resultDiv = document.getElementById('speaking-test-result');
    
    if (!input) {
        showTestResult('Vui lòng nhập hoặc nói lại các từ đã học.', 'error');
        return;
    }
    
    // Collect all keywords from all topics
    const allKeywords = [
        ...speakingContent.birthday.keywords,
        ...speakingContent.health.keywords,
        ...speakingContent.transport.keywords
    ];
    
    // Check how many keywords are present in the input
    const foundKeywords = allKeywords.filter(keyword => 
        input.includes(keyword.toLowerCase())
    );
    
    const percentage = Math.round((foundKeywords.length / allKeywords.length) * 100);
    
    if (percentage >= 70) {
        showTestResult(`Tuyệt vời! Bạn đã thuộc ${foundKeywords.length}/${allKeywords.length} từ khóa (${percentage}%).`, 'success');
    } else if (percentage >= 40) {
        showTestResult(`Khá tốt! Bạn đã thuộc ${foundKeywords.length}/${allKeywords.length} từ khóa (${percentage}%). Hãy cố gắng thêm nhé!`, 'error');
    } else {
        showTestResult(`Cần cố gắng thêm! Bạn chỉ thuộc ${foundKeywords.length}/${allKeywords.length} từ khóa (${percentage}%). Hãy luyện tập thêm nhé.`, 'error');
    }
    
    // Show which keywords were found
    if (foundKeywords.length > 0) {
        const keywordsList = foundKeywords.map(k => `<span class="keyword-found">${k}</span>`).join(', ');
        resultDiv.innerHTML += `<p><strong>Từ khóa đã tìm thấy:</strong> ${keywordsList}</p>`;
    }
}

// Show test result
function showTestResult(message, type) {
    const resultDiv = document.getElementById('speaking-test-result');
    resultDiv.className = `test-result ${type} show`;
    resultDiv.innerHTML = `<p>${message}</p>`;
}

// Clear speaking test
function clearSpeakingTest() {
    document.getElementById('speaking-test-input').value = '';
    const resultDiv = document.getElementById('speaking-test-result');
    resultDiv.className = 'test-result';
    resultDiv.innerHTML = '';
}

// Initialize speech synthesis when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize main app first
    initializeApp();
    
    // Load voices for speech synthesis
    if ('speechSynthesis' in window) {
        window.speechSynthesis.getVoices();
        
        // Some browsers need this to be called after a delay
        setTimeout(() => {
            window.speechSynthesis.getVoices();
            loadVocabulary(); // Load vocabulary after voices are ready
        }, 100);
    } else {
        // Load vocabulary even if speech synthesis is not available
        loadVocabulary();
    }
});

// Add keyboard shortcuts for speaking section
document.addEventListener('keydown', function(event) {
    // Ctrl+Space to start/stop recording
    if (event.ctrlKey && event.code === 'Space') {
        event.preventDefault();
        if (isRecording) {
            stopRecording();
        } else {
            // Find the first visible speaking topic and start recording
            const speakingTab = document.getElementById('speaking');
            if (speakingTab && speakingTab.classList.contains('active')) {
                const firstTopic = document.querySelector('.speaking-topic');
                if (firstTopic) {
                    const startBtn = firstTopic.querySelector('button[onclick^="startRecording"]');
                    if (startBtn) {
                        startBtn.click();
                    }
                }
            }
        }
    }
});
