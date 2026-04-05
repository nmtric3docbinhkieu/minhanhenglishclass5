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

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

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
        }
    ];
    
    // Find content for the specific day, or use default
    const dayData = roadmap.find(item => item.day === day);
    
    if (dayData) {
        return dayData;
    }
    
    // Default content for days not specifically planned
    return {
        title: "Ôn tập và luyện tập",
        pronunciation: { words: ["review", "practice", "learn"] },
        vocabulary: { 
            unit: "review", 
            topic: "Ôn tập từ vựng",
            words: [
                { word: "review", phonetic: "/rɪˈvjuː/", vietnamese: "ôn lại", example: "Review your lessons." },
                { word: "practice", phonetic: "/ˈpræktɪs/", vietnamese: "luyện tập", example: "Practice English every day." }
            ]
        },
        grammar: { 
            unit: "review",
            point: "Ôn tập ngữ pháp",
            explanation: "Hãy xem lại các điểm ngữ pháp đã học."
        },
        reading: {
            title: "Daily Reading",
            content: "Reading helps you learn new words and improve your English. Try to read something every day.",
            question: "Why is reading important?"
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
    utterance.lang = 'en-US';
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
