export const AVAILABLE_TAGS = [
    "Ikigai",
    "MBTI",
    "RIASEC",
    "StrengthsFinder",
    "VIA Character Strengths",
    "Skills Assessment",
  ] as const;
  
  export const TAG_COLORS = {
    Ikigai: 'magenta',
    MBTI: 'red',
    RIASEC: 'volcano',
    StrengthsFinder: 'orange',
    'VIA Character Strengths': 'gold',
    'Skills Assessment': 'lime'
  } as const;
  

  // questionData.ts
  export const questionsData = [
    {
      id: "ikigai-test",
      name: "Bài kiểm tra Ikigai (Mục đích sống)",
      description: "Khám phá mục đích sống và định hướng nghề nghiệp thông qua phương pháp Ikigai của Nhật Bản.",
      questions: [
        {
          id: "ikigai-q1",
          content: "Bạn yêu thích làm gì nhất mà thời gian trôi qua không cảm thấy mệt mỏi?",
          answers: [
            { id: "A", content: "Làm việc sáng tạo (vẽ, viết, thiết kế)" },
            { id: "B", content: "Giúp đỡ người khác" },
            { id: "C", content: "Thực hiện các công việc kỹ thuật, tổ chức" },
            { id: "D", content: "Khám phá, nghiên cứu" },
          ],
        },
        {
          id: "ikigai-q2",
          content: "Bạn cảm thấy vui vẻ khi làm việc nào mà không cần được trả tiền?",
          answers: [
            { id: "A", content: "Làm công tác tình nguyện" },
            { id: "B", content: "Học và chia sẻ kiến thức" },
            { id: "C", content: "Sáng tạo nghệ thuật" },
            { id: "D", content: "Giải quyết các vấn đề công nghệ" },
          ],
        },
        {
          id: "ikigai-q3",
          content: "Điều gì mà bạn làm sẽ mang lại giá trị lớn cho người khác?",
          answers: [
            { id: "A", content: "Tạo ra những sản phẩm sáng tạo" },
            { id: "B", content: "Cung cấp thông tin, giáo dục" },
            { id: "C", content: "Xây dựng hệ thống hoặc giải pháp" },
            { id: "D", content: "Tạo ra các trải nghiệm thú vị" },
          ],
        },
        {
          id: "ikigai-q4",
          content: "Bạn nghĩ bạn có thể kiếm tiền từ việc gì mà bạn giỏi nhất?",
          answers: [
            { id: "A", content: "Làm sáng tạo (thiết kế, viết)" },
            { id: "B", content: "Làm giáo dục, đào tạo" },
            { id: "C", content: "Quản lý, lãnh đạo" },
            { id: "D", content: "Phát triển công nghệ" },
          ],
        },
        {
          id: "ikigai-q5",
          content: "Bạn có thể làm việc đó hàng ngày mà không cảm thấy chán ngán?",
          answers: [
            { id: "A", content: "Có, tôi thích sự đổi mới và sáng tạo" },
            { id: "B", content: "Có, tôi thích sự kết nối với mọi người" },
            { id: "C", content: "Có, tôi thích tổ chức và lên kế hoạch" },
            { id: "D", content: "Có, tôi thích thử thách và giải quyết vấn đề" },
          ],
        },
        {
          id: "ikigai-q6",
          content: "Sự kết hợp giữa những gì bạn yêu thích và thế mạnh của bạn là gì?",
          answers: [
            { id: "A", content: "Sáng tạo và nghệ thuật" },
            { id: "B", content: "Giúp đỡ và hỗ trợ người khác" },
            { id: "C", content: "Quản lý và lãnh đạo" },
            { id: "D", content: "Nghiên cứu và phân tích" },
          ],
        },
        {
          id: "ikigai-q7",
          content: "Điều gì là sứ mệnh cuộc đời bạn, điều gì bạn nghĩ là bạn nên làm trên thế giới này?",
          answers: [
            { id: "A", content: "Mang lại sự đổi mới và sáng tạo" },
            { id: "B", content: "Giáo dục và truyền cảm hứng" },
            { id: "C", content: "Cải thiện cuộc sống thông qua quản lý" },
            { id: "D", content: "Giải quyết vấn đề lớn và thách thức" },
          ],
        },
        {
          id: "ikigai-q8",
          content: "Điều gì khiến bạn cảm thấy có ích và hài lòng về bản thân?",
          answers: [
            { id: "A", content: "Khi tôi tạo ra các sản phẩm sáng tạo" },
            { id: "B", content: "Khi tôi giúp đỡ và truyền cảm hứng cho người khác" },
            { id: "C", content: "Khi tôi đạt được các mục tiêu và tổ chức tốt công việc" },
            { id: "D", content: "Khi tôi giải quyết được những vấn đề phức tạp" },
          ],
        },
        {
          id: "ikigai-q9",
          content: "Mọi người xung quanh bạn nói gì về năng lực và khả năng của bạn?",
          answers: [
            { id: "A", content: "Bạn là người sáng tạo, luôn có ý tưởng mới" },
            { id: "B", content: "Bạn là người dễ gần, có khả năng truyền cảm hứng" },
            { id: "C", content: "Bạn là người tổ chức, quản lý tốt mọi việc" },
            { id: "D", content: "Bạn là người thông minh, giải quyết vấn đề tốt" },
          ],
        },
        {
          id: "ikigai-q10",
          content: "Bạn có thể đóng góp gì cho cộng đồng hoặc thế giới thông qua nghề nghiệp hoặc sở thích của mình?",
          answers: [
            { id: "A", content: "Mang lại các sáng tạo mới mẻ cho thế giới" },
            { id: "B", content: "Giúp mọi người học hỏi và phát triển" },
            { id: "C", content: "Tạo ra những thay đổi lớn trong công việc và xã hội" },
            { id: "D", content: "Tìm ra các giải pháp đột phá cho vấn đề lớn" },
          ],
        },
      ],
      totalQuestions: 10,
      tags: ["Ikigai", "Định hướng nghề nghiệp", "Phát triển bản thân"],
    },
    {
      id: "mbti-test",
      name: "Bài kiểm tra MBTI (Myers-Briggs Type Indicator)",
      description: "Khám phá tính cách và xu hướng hành vi của bạn thông qua chỉ số MBTI.",
      questions: [
        {
          id: "mbti-q1",
          content: "Bạn có thích gặp gỡ những người mới hay bạn thích ở một mình?",
          answers: [
            { id: "A", content: "Gặp gỡ người mới" },
            { id: "B", content: "Ở một mình" }
          ],
        },
        {
          id: "mbti-q2",
          content: "Khi ra quyết định, bạn thiên về lý trí và phân tích hay bạn chú trọng đến cảm xúc và giá trị cá nhân?",
          answers: [
            { id: "A", content: "Lý trí và phân tích" },
            { id: "B", content: "Cảm xúc và giá trị cá nhân" }
          ],
        },
        {
          id: "mbti-q3",
          content: "Bạn thích lập kế hoạch trước hay bạn thích làm việc theo cảm hứng?",
          answers: [
            { id: "A", content: "Lập kế hoạch trước" },
            { id: "B", content: "Làm việc theo cảm hứng" }
          ],
        },
        {
          id: "mbti-q4",
          content: "Bạn thích làm việc một mình hay làm việc nhóm?",
          answers: [
            { id: "A", content: "Làm việc một mình" },
            { id: "B", content: "Làm việc nhóm" }
          ],
        },
        {
          id: "mbti-q5",
          content: "Bạn có thấy thoải mái khi phải đối mặt với tình huống mới không?",
          answers: [
            { id: "A", content: "Có, tôi thích thử thách mới" },
            { id: "B", content: "Không, tôi cần thời gian để chuẩn bị" }
          ],
        },
        {
          id: "mbti-q6",
          content: "Bạn cảm thấy hài lòng khi công việc được hoàn thành và có thể kiểm soát, hay khi công việc đầy thử thách?",
          answers: [
            { id: "A", content: "Hài lòng khi công việc hoàn thành và kiểm soát được" },
            { id: "B", content: "Hài lòng khi công việc đầy thử thách" }
          ],
        },
        {
          id: "mbti-q7",
          content: "Bạn có xu hướng suy nghĩ về quá khứ và học từ đó hay bạn nghĩ nhiều về tương lai và cách thay đổi nó?",
          answers: [
            { id: "A", content: "Suy nghĩ về quá khứ" },
            { id: "B", content: "Nghĩ về tương lai" }
          ],
        },
        {
          id: "mbti-q8",
          content: "Bạn có dễ dàng chấp nhận những thay đổi và sự không chắc chắn hay bạn thích sự ổn định và rõ ràng?",
          answers: [
            { id: "A", content: "Chấp nhận sự thay đổi và không chắc chắn" },
            { id: "B", content: "Thích sự ổn định và rõ ràng" }
          ],
        },
        {
          id: "mbti-q9",
          content: "Bạn thường làm việc có tổ chức và theo hệ thống hay theo cách tự phát?",
          answers: [
            { id: "A", content: "Làm việc có tổ chức" },
            { id: "B", content: "Làm việc tự phát" }
          ],
        },
        {
          id: "mbti-q10",
          content: "Bạn có cảm thấy dễ dàng giao tiếp và chia sẻ suy nghĩ của mình với người khác không?",
          answers: [
            { id: "A", content: "Dễ dàng giao tiếp" },
            { id: "B", content: "Khó giao tiếp, chỉ chia sẻ với những người thân" }
          ],
        }
      ],
      totalQuestions: 10,
      tags: ["MBTI", "Tính cách", "Phát triển bản thân"],
    },
    {
      id: "riasec-test",
      name: "Bài kiểm tra RIASEC (Holland Code)",
      description: "Khám phá xu hướng nghề nghiệp và sở thích của bạn dựa trên mô hình Holland Code.",
      questions: [
        {
          id: "riasec-q1",
          content: "Bạn thích làm việc với công cụ và thiết bị hay làm việc với ý tưởng?",
          answers: [
            { id: "A", content: "Công cụ và thiết bị" },
            { id: "B", content: "Ý tưởng" }
          ],
        },
        {
          id: "riasec-q2",
          content: "Bạn thích tìm kiếm câu trả lời cho những vấn đề phức tạp hay giải quyết các vấn đề cụ thể và thực tế?",
          answers: [
            { id: "A", content: "Câu trả lời cho vấn đề phức tạp" },
            { id: "B", content: "Giải quyết vấn đề cụ thể và thực tế" }
          ],
        },
        {
          id: "riasec-q3",
          content: "Bạn thích sáng tạo ra các tác phẩm nghệ thuật hay thực hiện các công việc mang tính thể thao và thực tế?",
          answers: [
            { id: "A", content: "Tác phẩm nghệ thuật" },
            { id: "B", content: "Công việc thể thao và thực tế" }
          ],
        },
        {
          id: "riasec-q4",
          content: "Bạn có thích làm việc trong môi trường giao tiếp và giúp đỡ người khác không?",
          answers: [
            { id: "A", content: "Có, tôi thích giúp đỡ người khác" },
            { id: "B", content: "Không, tôi thích làm việc một mình" }
          ],
        },
        {
          id: "riasec-q5",
          content: "Bạn có thích làm việc trong các dự án kinh doanh và lãnh đạo không?",
          answers: [
            { id: "A", content: "Có, tôi thích lãnh đạo" },
            { id: "B", content: "Không, tôi không thích lãnh đạo" }
          ],
        },
        {
          id: "riasec-q6",
          content: "Bạn thích làm việc với các con số, dữ liệu và thông tin chi tiết hay sáng tạo ra các ý tưởng mới?",
          answers: [
            { id: "A", content: "Dữ liệu và thông tin chi tiết" },
            { id: "B", content: "Sáng tạo ý tưởng mới" }
          ],
        },
        {
          id: "riasec-q7",
          content: "Bạn thích công việc nào đòi hỏi kỹ năng thực hành hay công việc mang tính trí tuệ?",
          answers: [
            { id: "A", content: "Kỹ năng thực hành" },
            { id: "B", content: "Công việc trí tuệ" }
          ],
        },
        {
          id: "riasec-q8",
          content: "Bạn cảm thấy thoải mái hơn khi làm việc với con người hay làm việc với máy móc và thiết bị?",
          answers: [
            { id: "A", content: "Con người" },
            { id: "B", content: "Máy móc và thiết bị" }
          ],
        },
        {
          id: "riasec-q9",
          content: "Bạn có cảm thấy hào hứng khi xây dựng, lãnh đạo hoặc khởi nghiệp không?",
          answers: [
            { id: "A", content: "Có, tôi thích lãnh đạo" },
            { id: "B", content: "Không, tôi thích công việc ổn định hơn" }
          ],
        },
        {
          id: "riasec-q10",
          content: "Bạn có muốn làm việc trong môi trường văn phòng hoặc công ty, nơi bạn có thể tổ chức và quản lý công việc không?",
          answers: [
            { id: "A", content: "Có, tôi thích môi trường văn phòng" },
            { id: "B", content: "Không, tôi thích công việc tự do hơn" }
          ],
        }
      ],
      totalQuestions: 10,
      tags: ["RIASEC", "Holland Code", "Định hướng nghề nghiệp", "Sở thích"],
    },
    {
      id: "via-test",
      name: "Bài kiểm tra VIA (Values In Action)",
      description: "Khám phá điểm mạnh về tính cách và giá trị cốt lõi của bạn thông qua bài kiểm tra VIA.",
      questions: [
        {
          id: "via-q1",
          content: "Khi đối mặt với thử thách khó khăn, bạn thường làm gì để vượt qua?",
          answers: [
            { id: "A", content: "Kiên nhẫn và không bỏ cuộc" },
            { id: "B", content: "Tìm kiếm sự giúp đỡ từ người khác" },
            { id: "C", content: "Cố gắng tìm ra giải pháp sáng tạo" },
            { id: "D", content: "Tự động viên bản thân và tiếp tục cố gắng" }
          ],
        },
        {
          id: "via-q2",
          content: "Khi bạn gặp một người cần sự giúp đỡ, bạn thường làm gì?",
          answers: [
            { id: "A", content: "Cung cấp sự hỗ trợ ngay lập tức" },
            { id: "B", content: "Lắng nghe và hiểu cảm xúc của họ" },
            { id: "C", content: "Đưa ra lời khuyên hữu ích" },
            { id: "D", content: "Cố gắng kết nối họ với người có thể giúp đỡ" }
          ],
        },
        {
          id: "via-q3",
          content: "Khi bạn tham gia vào một nhóm, bạn thường đóng góp điều gì?",
          answers: [
            { id: "A", content: "Sự sáng tạo và ý tưởng mới" },
            { id: "B", content: "Sự tổ chức và kế hoạch hóa" },
            { id: "C", content: "Sự động viên và tạo động lực cho nhóm" },
            { id: "D", content: "Sự phân tích và hiểu rõ vấn đề" }
          ],
        },
        {
          id: "via-q4",
          content: "Khi bạn gặp một tình huống không chắc chắn, bạn thường làm gì?",
          answers: [
            { id: "A", content: "Lập kế hoạch và chuẩn bị kỹ lưỡng" },
            { id: "B", content: "Tìm cách tận dụng cơ hội trong tình huống đó" },
            { id: "C", content: "Duy trì một thái độ tích cực và lạc quan" },
            { id: "D", content: "Học hỏi từ những người có kinh nghiệm" }
          ],
        },
        {
          id: "via-q5",
          content: "Bạn có cảm thấy hạnh phúc khi giúp đỡ người khác không?",
          answers: [
            { id: "A", content: "Có, tôi thấy rất vui khi có thể giúp đỡ" },
            { id: "B", content: "Không, tôi cảm thấy không thoải mái khi làm vậy" },
            { id: "C", content: "Đôi khi, tùy vào hoàn cảnh" },
            { id: "D", content: "Có, nhưng tôi chỉ giúp đỡ khi tôi cảm thấy mình có thể" }
          ],
        },
        {
          id: "via-q6",
          content: "Khi bạn làm việc nhóm, bạn thường làm gì để thúc đẩy sự hợp tác?",
          answers: [
            { id: "A", content: "Khuyến khích mọi người chia sẻ ý tưởng" },
            { id: "B", content: "Đảm bảo mọi người tuân thủ kế hoạch" },
            { id: "C", content: "Giải quyết xung đột và duy trì sự hài hòa" },
            { id: "D", content: "Đưa ra quyết định một cách quyết đoán" }
          ],
        },
        {
          id: "via-q7",
          content: "Khi làm việc một mình, bạn có xu hướng làm gì để duy trì động lực?",
          answers: [
            { id: "A", content: "Tự đặt mục tiêu và cố gắng đạt được" },
            { id: "B", content: "Tự thưởng cho bản thân khi hoàn thành công việc" },
            { id: "C", content: "Suy nghĩ về kết quả cuối cùng để duy trì động lực" },
            { id: "D", content: "Nhắc nhở bản thân về lý do mình làm công việc đó" }
          ],
        },
        {
          id: "via-q8",
          content: "Khi có người khen ngợi bạn, bạn thường phản ứng như thế nào?",
          answers: [
            { id: "A", content: "Cảm thấy biết ơn và khiêm tốn" },
            { id: "B", content: "Đáp lại bằng cách khen ngợi lại họ" },
            { id: "C", content: "Tự cảm thấy vui vì nỗ lực của mình được công nhận" },
            { id: "D", content: "Chỉ đơn giản cười và tiếp tục công việc" }
          ],
        },
        {
          id: "via-q9",
          content: "Khi gặp một tình huống đạo đức khó khăn, bạn làm gì?",
          answers: [
            { id: "A", content: "Lắng nghe cả hai bên và đưa ra quyết định hợp lý" },
            { id: "B", content: "Làm điều mà tôi nghĩ là đúng, mặc dù có thể gây khó chịu" },
            { id: "C", content: "Tìm kiếm sự tư vấn từ người khác" },
            { id: "D", content: "Cân nhắc các tác động dài hạn của quyết định" }
          ],
        },
        {
          id: "via-q10",
          content: "Bạn cảm thấy thế nào khi đối diện với sự thay đổi hoặc thử thách mới?",
          answers: [
            { id: "A", content: "Hào hứng và muốn thử ngay" },
            { id: "B", content: "Cẩn trọng, nhưng vẫn muốn thử" },
            { id: "C", content: "Lo lắng nhưng vẫn cố gắng làm" },
            { id: "D", content: "Ngần ngại và muốn tránh nó" }
          ],
        }
      ],
      totalQuestions: 10,
      tags: ["VIA Character Strengths", "Tính cách", "Giá trị cốt lõi", "Phát triển bản thân"],
    },
    {
      id: "skills-assessment ",
      name: "Bài kiểm tra Skills Assessment - Đánh giá kỹ năng",
      description: "Khám phá đánh giá năng lực, kỹ năng của cá nhân hoặc nhóm trong một lĩnh vực cụ thể.",
      questions: [
        {
          id: "skillsAssessment-q1",
          content: "Khi giải quyết một vấn đề phức tạp, bạn thường làm gì đầu tiên?",
          answers: [
            { id: "A", content: "Phân tích vấn đề và lập kế hoạch" },
            { id: "B", content: "Tìm kiếm thông tin và dữ liệu" },
            { id: "C", content: "Thử nghiệm các giải pháp khác nhau" },
            { id: "D", content: "Tìm kiếm sự trợ giúp từ người khác" }
          ],
        },
        {
          id: "skillsAssessment-q2",
          content: "Khi làm việc với công nghệ mới, bạn cảm thấy như thế nào?",
          answers: [
            { id: "A", content: "Hào hứng và muốn học ngay" },
            { id: "B", content: "Cảm thấy khó khăn nhưng sẽ cố gắng học" },
            { id: "C", content: "Không thoải mái, nhưng sẽ tìm cách làm quen" },
            { id: "D", content: "Cảm thấy lo lắng và ngần ngại" }
          ],
        },
        {
          id: "skillsAssessment-q3",
          content: "Khi cần thuyết phục ai đó, bạn làm gì để đạt được mục tiêu?",
          answers: [
            { id: "A", content: "Dùng dữ liệu và lý lẽ để thuyết phục" },
            { id: "B", content: "Tạo kết nối cá nhân và hiểu cảm xúc của họ" },
            { id: "C", content: "Chia sẻ kinh nghiệm và ví dụ thực tế" },
            { id: "D", content: "Đưa ra các lý do mạnh mẽ và lý trí" }
          ],
        },
        {
          id: "skillsAssessment-q4",
          content: "Khi bạn gặp phải một thất bại, bạn làm gì?",
          answers: [
            { id: "A", content: "Phân tích lý do thất bại và học hỏi từ đó" },
            { id: "B", content: "Tiến tới với kế hoạch mới" },
            { id: "C", content: "Cảm thấy thất vọng, nhưng vẫn tiếp tục" },
            { id: "D", content: "Hỏi ý kiến từ người khác để cải thiện" }
          ],
        },
        {
          id: "skillsAssessment-q5",
          content: "Khi bạn làm việc trong một nhóm, bạn thường đóng vai trò nào?",
          answers: [
            { id: "A", content: "Lãnh đạo và đưa ra quyết định" },
            { id: "B", content: "Cung cấp ý tưởng sáng tạo" },
            { id: "C", content: "Hỗ trợ và giúp đỡ người khác" },
            { id: "D", content: "Đảm bảo mọi người làm đúng công việc của mình" }
          ],
        },
        {
          id: "skillsAssessment-q6",
          content: "Khi gặp phải sự cố trong công việc, bạn thường làm gì?",
          answers: [
            { id: "A", content: "Xử lý nhanh chóng và tìm ra giải pháp" },
            { id: "B", content: "Tìm hiểu nguyên nhân và đưa ra giải pháp lâu dài" },
            { id: "C", content: "Đặt câu hỏi và tìm sự trợ giúp từ người khác" },
            { id: "D", content: "Kiên nhẫn chờ đợi và hy vọng vấn đề sẽ được giải quyết" }
          ],
        },
        {
          id: "skillsAssessment-q7",
          content: "7.	Bạn cảm thấy thế nào khi phải làm việc với những công cụ hoặc phần mềm mới?",
          answers: [
            { id: "A", content: "Hào hứng và mong muốn khám phá" },
            { id: "B", content: "Cảm thấy khó khăn nhưng sẵn sàng học hỏi" },
            { id: "C", content: "Không thích thay đổi và thấy khó khăn" },
            { id: "D", content: "Cảm thấy lo lắng về khả năng làm quen với công cụ" }
          ],
        },
        {
          id: "skillsAssessment-q8",
          content: "Khi làm việc dưới áp lực, bạn thường làm gì?",
          answers: [
            { id: "A", content: "Tập trung vào công việc và giải quyết từng phần" },
            { id: "B", content: "Cảm thấy căng thẳng nhưng vẫn tiếp tục làm việc" },
            { id: "C", content: "Tìm cách giảm bớt áp lực trước khi tiếp tục" },
            { id: "D", content: "Xin sự giúp đỡ hoặc làm việc theo nhóm" }
          ],
        },
        {
          id: "skillsAssessment-q9",
          content: "Khi cần phải làm một việc mà bạn không thích, bạn sẽ làm gì?",
          answers: [
            { id: "A", content: "Tập trung vào mục tiêu dài hạn và hoàn thành" },
            { id: "B", content: "Tìm cách làm nhanh chóng và ít tốn thời gian" },
            { id: "C", content: "Cố gắng thay đổi cách làm để cảm thấy dễ chịu hơn" },
            { id: "D", content: "Tìm cách giao việc đó cho người khác" }
          ],
        },
        {
          id: "skillsAssessment-q10",
          content: "Bạn nghĩ mình mạnh nhất trong lĩnh vực nào?",
          answers: [
            { id: "A", content: "Giải quyết vấn đề và phân tích" },
            { id: "B", content: "Sáng tạo và tìm kiếm giải pháp mới" },
            { id: "C", content: "Giao tiếp và kết nối với người khác" },
            { id: "D", content: "Lãnh đạo và tổ chức công việc" }
          ],
        }
      ],
      totalQuestions: 10,
      tags: ["Skills Assessment ", "Đánh giá kỹ năng"],
    },
  ];