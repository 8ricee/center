import type React from "react";

export type CourseLevel = "Cơ bản" | "Trung cấp" | "Nâng cao";
export type CourseLanguage =
  | "Tiếng Anh"
  | "Tiếng Nhật"
  | "Tiếng Hàn"
  | "Tiếng Trung";
export type CourseFormat = "Trực tiếp" | "Trực tuyến" | "Kết hợp";
export type ClassStatus = "Còn chỗ" | "Sắp đầy" | "Hết chỗ";
export type BlogCategory =
  | "Tin tức"
  | "Mẹo học"
  | "Văn hóa"
  | "Sự kiện"
  | "Khóa học"
  | "Ngữ pháp"
  | "Từ vựng";

// Interfaces
export interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  image: string;
  level: CourseLevel;
  language: CourseLanguage;
  duration: string;
  lessons: number;
  hoursPerLesson: number;
  schedule: string;
  groupSize: string;
  format: CourseFormat;
  price: number;
  promotionPrice?: number;
  hasPromotion: boolean;
  promotionPercent: number;
  isPopular: boolean;
  isNew: boolean;
  features: string[];
  curriculum: CourseCurriculum[];
  requirements: string[];
  outcomes: string[];
  teacherIds: number[];
  relatedCourseIds: number[];
  testimonialIds: number[];
  faq: CourseFAQ[];
}

export interface CourseCurriculum {
  title: string;
  lessons: {
    title: string;
    duration: string;
    description: string;
  }[];
}

export interface CourseFAQ {
  question: string;
  answer: string;
}

export interface Teacher {
  id: number;
  name: string;
  slug: string;
  position: string;
  avatar: string;
  languages: CourseLanguage[];
  bio: string;
  fullBio: string;
  education: string;
  experience: string;
  specialization: string;
  achievements: string[];
  courseIds: number[];
  socialMedia: {
    facebook?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
  scheduleAvailability: {
    day: string;
    hours: string;
  }[];
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: BlogCategory;
  tags: string[];
  date: string;
  author: {
    id: number;
    name: string;
    avatar: string;
    role: string;
  };
  readTime: string;
  relatedPostIds: number[];
}

export interface ClassSchedule {
  id: number;
  courseId: number;
  courseName: string;
  description: string;
  date: string;
  startDate: string;
  endDate: string;
  time: string;
  teacherId: number;
  teacher: string;
  location: string;
  room: string;
  language: CourseLanguage;
  level: CourseLevel;
  status: ClassStatus;
  maxStudents: number;
  currentStudents: number;
  price: number;
  promotionPrice?: number;
  registrationLink: string;
  format: CourseFormat;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  courseId: number;
  course: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Tiếng Anh giao tiếp",
    slug: "tieng-anh-giao-tiep",
    description:
      "Phát triển kỹ năng giao tiếp tiếng Anh tự tin trong mọi tình huống",
    fullDescription: `
      Khóa học Tiếng Anh giao tiếp được thiết kế đặc biệt để giúp học viên phát triển kỹ năng giao tiếp tiếng Anh một cách tự tin và trôi chảy trong nhiều tình huống khác nhau. Khóa học tập trung vào việc phát triển các kỹ năng nghe, nói thông qua các hoạt động thực tế, đóng vai, thảo luận nhóm và các tình huống giao tiếp hàng ngày.

      Với phương pháp giảng dạy tương tác, học viên sẽ được thực hành tiếng Anh liên tục trong lớp học, từ đó xây dựng sự tự tin và khả năng phản xạ nhanh khi giao tiếp. Giáo viên sẽ cung cấp phản hồi chi tiết và hướng dẫn cách phát âm, ngữ điệu, cũng như các cấu trúc ngữ pháp và từ vựng phù hợp với từng tình huống giao tiếp.

      Sau khi hoàn thành khóa học, học viên sẽ có thể giao tiếp tiếng Anh tự tin trong các tình huống như: giao tiếp hàng ngày, đi du lịch, trao đổi trong môi trường làm việc, và các tình huống xã hội khác.
    `,
    image: "/course/1.jpg?height=340&width=600",
    level: "Cơ bản",
    language: "Tiếng Anh",
    duration: "3 tháng",
    lessons: 24,
    hoursPerLesson: 1.5,
    schedule: "2 buổi/tuần, 90 phút/buổi",
    groupSize: "10-15 học viên",
    format: "Trực tiếp",
    price: 3500000,
    promotionPrice: 2800000,
    hasPromotion: true,
    promotionPercent: 20,
    isPopular: true,
    isNew: false,
    features: [
      "Giáo trình quốc tế cập nhật",
      "Lớp học quy mô nhỏ, nhiều thời gian thực hành",
      "Giáo viên bản ngữ và Việt Nam có chứng chỉ quốc tế",
      "Phương pháp giảng dạy tương tác",
      "Tài liệu học tập đa dạng",
      "Hỗ trợ học tập trực tuyến",
    ],
    curriculum: [
      {
        title: "Phần 1: Giao tiếp cơ bản",
        lessons: [
          {
            title: "Bài 1: Chào hỏi và giới thiệu bản thân",
            duration: "90 phút",
            description:
              "Học cách chào hỏi, giới thiệu bản thân và người khác trong các tình huống khác nhau.",
          },
          {
            title: "Bài 2: Giao tiếp hàng ngày",
            duration: "90 phút",
            description:
              "Các cụm từ và cấu trúc thông dụng trong giao tiếp hàng ngày.",
          },
          {
            title: "Bài 3: Hỏi và chỉ đường",
            duration: "90 phút",
            description:
              "Cách hỏi và chỉ đường, các từ vựng liên quan đến phương hướng và địa điểm.",
          },
          {
            title: "Bài 4: Mua sắm và đặt hàng",
            duration: "90 phút",
            description:
              "Từ vựng và cấu trúc câu sử dụng khi mua sắm, đặt hàng và trả giá.",
          },
        ],
      },
      {
        title: "Phần 2: Giao tiếp trong môi trường làm việc",
        lessons: [
          {
            title: "Bài 5: Giao tiếp trong văn phòng",
            duration: "90 phút",
            description:
              "Các tình huống giao tiếp thường gặp trong môi trường văn phòng.",
          },
          {
            title: "Bài 6: Tham gia cuộc họp",
            duration: "90 phút",
            description:
              "Cách diễn đạt ý kiến, đồng ý/không đồng ý và đưa ra đề xuất trong cuộc họp.",
          },
          {
            title: "Bài 7: Thuyết trình cơ bản",
            duration: "90 phút",
            description:
              "Cấu trúc và kỹ năng thuyết trình cơ bản bằng tiếng Anh.",
          },
          {
            title: "Bài 8: Viết email công việc",
            duration: "90 phút",
            description:
              "Cách viết email chuyên nghiệp trong môi trường làm việc.",
          },
        ],
      },
      {
        title: "Phần 3: Giao tiếp xã hội",
        lessons: [
          {
            title: "Bài 9: Kể chuyện và chia sẻ trải nghiệm",
            duration: "90 phút",
            description:
              "Cách kể chuyện, chia sẻ trải nghiệm và sử dụng thì quá khứ.",
          },
          {
            title: "Bài 10: Bày tỏ quan điểm và cảm xúc",
            duration: "90 phút",
            description:
              "Từ vựng và cấu trúc để bày tỏ quan điểm, cảm xúc trong các tình huống khác nhau.",
          },
          {
            title: "Bài 11: Giao tiếp khi đi du lịch",
            duration: "90 phút",
            description:
              "Các tình huống giao tiếp thường gặp khi đi du lịch nước ngoài.",
          },
          {
            title: "Bài 12: Văn hóa giao tiếp quốc tế",
            duration: "90 phút",
            description:
              "Hiểu biết về sự khác biệt văn hóa trong giao tiếp giữa các quốc gia.",
          },
        ],
      },
    ],
    requirements: [
      "Có kiến thức tiếng Anh cơ bản (tương đương trình độ A1-A2)",
      "Có khả năng đọc và viết tiếng Anh ở mức cơ bản",
      "Máy tính hoặc thiết bị di động có kết nối internet để truy cập tài liệu học tập trực tuyến",
      "Sẵn sàng tham gia các hoạt động tương tác trong lớp học",
    ],
    outcomes: [
      "Giao tiếp tự tin bằng tiếng Anh trong các tình huống hàng ngày",
      "Phát âm chuẩn và sử dụng ngữ điệu phù hợp",
      "Mở rộng vốn từ vựng và cấu trúc câu trong giao tiếp",
      "Hiểu và áp dụng các quy tắc giao tiếp phù hợp với văn hóa",
      "Tự tin tham gia các cuộc hội thoại bằng tiếng Anh",
      "Cải thiện kỹ năng nghe và phản xạ trong giao tiếp",
    ],
    teacherIds: [1, 4, 6],
    relatedCourseIds: [2, 5, 9],
    testimonialIds: [1, 3, 7, 12],
    faq: [
      {
        question:
          "Khóa học này có phù hợp với người mới bắt đầu học tiếng Anh không?",
        answer:
          "Khóa học yêu cầu học viên có kiến thức tiếng Anh cơ bản (tương đương A1-A2). Nếu bạn là người mới hoàn toàn, chúng tôi khuyên bạn nên tham gia khóa Tiếng Anh cho người mới bắt đầu trước.",
      },
      {
        question:
          "Tôi có thể đạt được trình độ nào sau khi hoàn thành khóa học?",
        answer:
          "Sau khi hoàn thành khóa học, học viên có thể đạt được trình độ tương đương B1 theo khung tham chiếu châu Âu (CEFR), có khả năng giao tiếp tự tin trong các tình huống hàng ngày và công việc cơ bản.",
      },
      {
        question: "Khóa học có cung cấp chứng chỉ không?",
        answer:
          "Có, sau khi hoàn thành khóa học và vượt qua bài kiểm tra cuối khóa, học viên sẽ nhận được chứng chỉ hoàn thành từ Language Center, xác nhận trình độ và kỹ năng đã đạt được.",
      },
      {
        question: "Tôi có thể học bù nếu nghỉ học không?",
        answer:
          "Có, học viên có thể tham gia học bù với lớp khác nếu thông báo trước ít nhất 24 giờ. Mỗi học viên được phép học bù tối đa 3 buổi trong toàn khóa học.",
      },
    ],
  },
  {
    id: 2,
    title: "IELTS Academic",
    slug: "ielts-academic",
    description: "Luyện thi IELTS với phương pháp hiệu quả, cam kết đầu ra",
    fullDescription: `
      Khóa học IELTS Academic được thiết kế đặc biệt để chuẩn bị cho học viên tham gia kỳ thi IELTS Academic với mục tiêu đạt điểm số cao. Khóa học cung cấp kiến thức toàn diện và chiến lược làm bài hiệu quả cho cả bốn kỹ năng: Nghe, Nói, Đọc và Viết.

      Với đội ngũ giảng viên giàu kinh nghiệm, nhiều người trong số họ là cựu giám khảo IELTS, khóa học mang đến những phương pháp và kỹ thuật làm bài thi được cá nhân hóa, giúp học viên phát huy tối đa tiềm năng và đạt được điểm số mong muốn.

      Khóa học không chỉ tập trung vào việc luyện thi mà còn giúp học viên phát triển kỹ năng tiếng Anh học thuật, điều này sẽ hữu ích cho việc học tập và làm việc trong môi trường quốc tế sau này.
    `,
    image: "/course/2.jpg?height=340&width=600",
    level: "Nâng cao",
    language: "Tiếng Anh",
    duration: "4 tháng",
    lessons: 32,
    hoursPerLesson: 2,
    schedule: "2 buổi/tuần, 120 phút/buổi",
    groupSize: "8-12 học viên",
    format: "Kết hợp",
    price: 8500000,
    promotionPrice: 8500000,
    hasPromotion: false,
    promotionPercent: 0,
    isPopular: true,
    isNew: false,
    features: [
      "Cam kết đầu ra từ 6.0 IELTS trở lên",
      "Giáo viên có chứng chỉ TESOL/CELTA và kinh nghiệm luyện thi IELTS",
      "Tài liệu học tập cập nhật theo cấu trúc đề thi mới nhất",
      "Mô phỏng kỳ thi thực tế với đánh giá chi tiết",
      "Lớp học quy mô nhỏ, nhiều thời gian thực hành",
      "Hỗ trợ học tập 1-1 với giáo viên",
      "Được thi thử miễn phí 2 lần",
    ],
    curriculum: [
      {
        title: "Phần 1: Giới thiệu và Đánh giá",
        lessons: [
          {
            title: "Bài 1: Giới thiệu về IELTS và Đánh giá năng lực",
            duration: "120 phút",
            description:
              "Tổng quan về kỳ thi IELTS, cấu trúc bài thi và hệ thống chấm điểm. Bài kiểm tra đánh giá năng lực đầu vào.",
          },
          {
            title: "Bài 2: Chiến lược học tập và Kỹ năng quản lý thời gian",
            duration: "120 phút",
            description:
              "Phương pháp học tập hiệu quả và kỹ năng quản lý thời gian trong kỳ thi IELTS.",
          },
        ],
      },
      {
        title: "Phần 2: IELTS Listening",
        lessons: [
          {
            title: "Bài 3: Kỹ năng nghe và chiến lược làm bài Listening",
            duration: "120 phút",
            description:
              "Các loại câu hỏi trong phần thi Listening và chiến lược làm bài.",
          },
          {
            title: "Bài 4: Luyện tập Listening Section 1 & 2",
            duration: "120 phút",
            description:
              "Thực hành với các bài nghe Section 1 & 2 (hội thoại xã hội và hàng ngày).",
          },
          {
            title: "Bài 5: Luyện tập Listening Section 3 & 4",
            duration: "120 phút",
            description:
              "Thực hành với các bài nghe Section 3 & 4 (hội thoại và bài giảng học thuật).",
          },
          {
            title: "Bài 6: Kỹ thuật nghe nâng cao và bài thi thử Listening",
            duration: "120 phút",
            description:
              "Các kỹ thuật nghe nâng cao và thực hành với bài thi thử hoàn chỉnh.",
          },
        ],
      },
      {
        title: "Phần 3: IELTS Reading",
        lessons: [
          {
            title: "Bài 7: Kỹ năng đọc và chiến lược làm bài Reading",
            duration: "120 phút",
            description:
              "Các loại câu hỏi trong phần thi Reading và chiến lược làm bài.",
          },
          {
            title: "Bài 8: Kỹ thuật đọc lướt và đọc quét",
            duration: "120 phút",
            description:
              "Phát triển kỹ năng đọc lướt (skimming) và đọc quét (scanning) để tìm thông tin nhanh chóng.",
          },
          {
            title: "Bài 9: Xử lý các dạng câu hỏi Reading phổ biến",
            duration: "120 phút",
            description:
              "Chiến lược xử lý các dạng câu hỏi như True/False/Not Given, Matching, Multiple Choice, v.v.",
          },
          {
            title: "Bài 10: Kỹ thuật đọc nâng cao và bài thi thử Reading",
            duration: "120 phút",
            description:
              "Các kỹ thuật đọc nâng cao và thực hành với bài thi thử hoàn chỉnh.",
          },
        ],
      },
      {
        title: "Phần 4: IELTS Writing",
        lessons: [
          {
            title: "Bài 11: Giới thiệu Writing Task 1 & 2",
            duration: "120 phút",
            description:
              "Tổng quan về hai phần thi Writing và tiêu chí chấm điểm.",
          },
          {
            title: "Bài 12: Writing Task 1 - Mô tả biểu đồ, bảng, sơ đồ",
            duration: "120 phút",
            description:
              "Cấu trúc và từ vựng cho Task 1, cách mô tả các loại biểu đồ khác nhau.",
          },
          {
            title: "Bài 13: Writing Task 1 - Phân tích và so sánh dữ liệu",
            duration: "120 phút",
            description:
              "Kỹ năng phân tích, so sánh dữ liệu và viết báo cáo hiệu quả.",
          },
          {
            title: "Bài 14: Writing Task 2 - Cấu trúc bài luận",
            duration: "120 phút",
            description: "Cấu trúc bài luận và các loại câu hỏi trong Task 2.",
          },
          {
            title: "Bài 15: Writing Task 2 - Phát triển ý tưởng và lập luận",
            duration: "120 phút",
            description:
              "Kỹ năng phát triển ý tưởng, lập luận và sử dụng ví dụ trong bài luận.",
          },
          {
            title: "Bài 16: Writing Task 2 - Từ vựng và ngữ pháp học thuật",
            duration: "120 phút",
            description:
              "Sử dụng từ vựng và cấu trúc ngữ pháp học thuật để nâng cao điểm số.",
          },
          {
            title: "Bài 17: Kỹ thuật viết nâng cao và bài thi thử Writing",
            duration: "120 phút",
            description:
              "Các kỹ thuật viết nâng cao và thực hành với bài thi thử hoàn chỉnh.",
          },
        ],
      },
      {
        title: "Phần 5: IELTS Speaking",
        lessons: [
          {
            title: "Bài 18: Giới thiệu Speaking và chiến lược làm bài",
            duration: "120 phút",
            description:
              "Tổng quan về ba phần thi Speaking và tiêu chí chấm điểm.",
          },
          {
            title: "Bài 19: Speaking Part 1 - Giới thiệu và câu hỏi quen thuộc",
            duration: "120 phút",
            description:
              "Kỹ năng trả lời câu hỏi về bản thân và các chủ đề quen thuộc.",
          },
          {
            title: "Bài 20: Speaking Part 2 - Cue Card",
            duration: "120 phút",
            description:
              "Kỹ năng chuẩn bị và trình bày một chủ đề trong 2 phút.",
          },
          {
            title: "Bài 21: Speaking Part 3 - Thảo luận",
            duration: "120 phút",
            description:
              "Kỹ năng thảo luận sâu về các chủ đề trừu tượng và học thuật.",
          },
          {
            title: "Bài 22: Phát âm và ngữ điệu",
            duration: "120 phút",
            description:
              "Cải thiện phát âm, nhấn mạnh từ và ngữ điệu trong tiếng Anh.",
          },
          {
            title: "Bài 23: Từ vựng và cấu trúc nâng cao cho Speaking",
            duration: "120 phút",
            description:
              "Sử dụng từ vựng phong phú và cấu trúc câu đa dạng để nâng cao điểm số.",
          },
          {
            title: "Bài 24: Kỹ thuật nói nâng cao và bài thi thử Speaking",
            duration: "120 phút",
            description:
              "Các kỹ thuật nói nâng cao và thực hành với bài thi thử hoàn chỉnh.",
          },
        ],
      },
      {
        title: "Phần 6: Ôn tập và Thi thử",
        lessons: [
          {
            title: "Bài 25-28: Ôn tập tổng hợp và Bài thi thử",
            duration: "120 phút/buổi",
            description:
              "Ôn tập tổng hợp 4 kỹ năng và thực hành với các bài thi thử hoàn chỉnh.",
          },
          {
            title: "Bài 29-30: Phân tích lỗi và Chiến lược cải thiện",
            duration: "120 phút/buổi",
            description:
              "Phân tích lỗi thường gặp và đưa ra chiến lược cải thiện cá nhân hóa.",
          },
          {
            title: "Bài 31-32: Thi thử cuối khóa và Đánh giá",
            duration: "120 phút/buổi",
            description:
              "Thi thử cuối khóa với điều kiện giống thực tế và đánh giá chi tiết.",
          },
        ],
      },
    ],
    requirements: [
      "Có trình độ tiếng Anh trung cấp trở lên (tương đương B1-B2)",
      "Đã có kiến thức cơ bản về cấu trúc bài thi IELTS",
      "Cam kết tham gia đầy đủ các buổi học và hoàn thành bài tập về nhà",
      "Máy tính hoặc thiết bị di động có kết nối internet để truy cập tài liệu học tập trực tuyến",
      "Sẵn sàng dành thời gian tự học ngoài giờ lên lớp",
    ],
    outcomes: [
      "Đạt điểm IELTS từ 6.0 trở lên (tùy theo năng lực đầu vào)",
      "Nắm vững chiến lược làm bài cho cả 4 kỹ năng Nghe, Nói, Đọc, Viết",
      "Phát triển vốn từ vựng học thuật phong phú",
      "Cải thiện kỹ năng viết luận và báo cáo học thuật",
      "Tự tin giao tiếp trong môi trường học thuật",
      "Hiểu rõ cấu trúc bài thi và tiêu chí chấm điểm IELTS",
    ],
    teacherIds: [1, 4, 6],
    relatedCourseIds: [1, 5, 9],
    testimonialIds: [2, 5, 8, 11],
    faq: [
      {
        question:
          "Tôi cần có trình độ tiếng Anh như thế nào để tham gia khóa học này?",
        answer:
          "Học viên cần có trình độ tiếng Anh trung cấp trở lên (tương đương B1-B2) để có thể theo kịp nội dung khóa học. Nếu bạn chưa đạt trình độ này, chúng tôi khuyên bạn nên tham gia khóa Tiếng Anh giao tiếp hoặc Tiếng Anh trung cấp trước.",
      },
      {
        question: "Khóa học có cam kết đầu ra không?",
        answer:
          "Có, chúng tôi cam kết học viên sẽ đạt điểm IELTS từ 6.0 trở lên sau khi hoàn thành khóa học, với điều kiện học viên tham gia đầy đủ các buổi học và hoàn thành bài tập được giao. Mức tăng điểm cụ thể sẽ phụ thuộc vào trình độ đầu vào và sự nỗ lực của học viên.",
      },
      {
        question:
          "Tôi có được học lại miễn phí nếu không đạt điểm như mong muốn không?",
        answer:
          "Có, nếu học viên không đạt được mức điểm cam kết sau khi hoàn thành khóa học và đã tham gia đầy đủ các buổi học, hoàn thành bài tập, chúng tôi sẽ cho phép học lại miễn phí một khóa tương đương.",
      },
      {
        question: "Khóa học có bao gồm phí thi IELTS không?",
        answer:
          "Không, phí thi IELTS chính thức không bao gồm trong học phí. Tuy nhiên, học viên sẽ được tham gia 2 kỳ thi thử miễn phí với đánh giá chi tiết từ giáo viên.",
      },
    ],
  },
  {
    id: 3,
    title: "Tiếng Nhật cho người mới bắt đầu",
    slug: "tieng-nhat-cho-nguoi-moi-bat-dau",
    description: "Làm quen với ngôn ngữ và văn hóa Nhật Bản từ cơ bản",
    fullDescription: `
      Khóa học Tiếng Nhật cho người mới bắt đầu được thiết kế đặc biệt dành cho những học viên chưa có kiến thức về tiếng Nhật hoặc mới chỉ biết một vài từ cơ bản. Khóa học giúp học viên làm quen với hệ thống chữ viết, ngữ pháp cơ bản và giao tiếp hàng ngày bằng tiếng Nhật.

      Với phương pháp giảng dạy trực quan và thực hành nhiều, học viên sẽ nhanh chóng làm quen với bảng chữ cái Hiragana, Katakana và một số Kanji cơ bản. Khóa học cũng giới thiệu về văn hóa, phong tục và lối sống của người Nhật, giúp học viên hiểu sâu hơn về ngôn ngữ trong bối cảnh văn hóa.

      Sau khi hoàn thành khóa học, học viên sẽ có thể giao tiếp cơ bản bằng tiếng Nhật trong các tình huống hàng ngày, đọc và viết được các câu đơn giản, đồng thời có nền tảng vững chắc để tiếp tục học lên các cấp độ cao hơn.
    `,
    image: "/course/3.jpg?height=340&width=600",
    level: "Cơ bản",
    language: "Tiếng Nhật",
    duration: "3 tháng",
    lessons: 24,
    hoursPerLesson: 1.5,
    schedule: "2 buổi/tuần, 90 phút/buổi",
    groupSize: "10-15 học viên",
    format: "Trực tiếp",
    price: 3800000,
    promotionPrice: 3800000,
    hasPromotion: false,
    promotionPercent: 0,
    isPopular: false,
    isNew: true,
    features: [
      "Giáo trình Minna no Nihongo phiên bản mới nhất",
      "Giáo viên người Việt và Nhật kết hợp giảng dạy",
      "Tài liệu học tập đa dạng, phong phú",
      "Lớp học quy mô nhỏ, nhiều thời gian thực hành",
      "Hoạt động trải nghiệm văn hóa Nhật Bản",
      "Hỗ trợ học tập trực tuyến",
    ],
    curriculum: [
      {
        title: "Phần 1: Làm quen với tiếng Nhật",
        lessons: [
          {
            title: "Bài 1: Giới thiệu về tiếng Nhật và bảng chữ cái Hiragana",
            duration: "90 phút",
            description:
              "Tổng quan về tiếng Nhật, cách phát âm và học bảng chữ cái Hiragana (phần 1).",
          },
          {
            title: "Bài 2: Bảng chữ cái Hiragana (tiếp theo)",
            duration: "90 phút",
            description:
              "Tiếp tục học bảng chữ cái Hiragana và cách viết đúng.",
          },
          {
            title: "Bài 3: Bảng chữ cái Katakana",
            duration: "90 phút",
            description: "Học bảng chữ cái Katakana và cách sử dụng.",
          },
          {
            title: "Bài 4: Chào hỏi và giới thiệu bản thân",
            duration: "90 phút",
            description:
              "Các cụm từ chào hỏi, giới thiệu bản thân và hội thoại cơ bản.",
          },
        ],
      },
      {
        title: "Phần 2: Ngữ pháp cơ bản và giao tiếp hàng ngày",
        lessons: [
          {
            title: "Bài 5: Cấu trúc câu cơ bản trong tiếng Nhật",
            duration: "90 phút",
            description: "Cấu trúc câu, trợ từ は、が、を và cách sử dụng.",
          },
          {
            title: "Bài 6: Động từ trong tiếng Nhật",
            duration: "90 phút",
            description: "Các nhóm động từ và cách chia động từ ở thể từ điển.",
          },
          {
            title: "Bài 7: Tính từ trong tiếng Nhật",
            duration: "90 phút",
            description: "Tính từ đuôi い và đuôi な, cách sử dụng trong câu.",
          },
          {
            title: "Bài 8: Số đếm và đơn vị đo lường",
            duration: "90 phút",
            description:
              "Cách đếm số, sử dụng các đơn vị đo lường và trợ từ đếm.",
          },
        ],
      },
      {
        title: "Phần 3: Giao tiếp trong các tình huống cụ thể",
        lessons: [
          {
            title: "Bài 9: Mua sắm và giá cả",
            duration: "90 phút",
            description:
              "Từ vựng và cấu trúc câu sử dụng khi mua sắm, hỏi giá.",
          },
          {
            title: "Bài 10: Thời gian và lịch trình",
            duration: "90 phút",
            description: "Cách nói về thời gian, ngày tháng và lịch trình.",
          },
          {
            title: "Bài 11: Giao thông và chỉ đường",
            duration: "90 phút",
            description:
              "Từ vựng về phương tiện giao thông và cách hỏi/chỉ đường.",
          },
          {
            title: "Bài 12: Ăn uống và nhà hàng",
            duration: "90 phút",
            description:
              "Từ vựng về món ăn, đồ uống và cách gọi món trong nhà hàng.",
          },
        ],
      },
      {
        title: "Phần 4: Nâng cao kỹ năng giao tiếp",
        lessons: [
          {
            title: "Bài 13: Sở thích và thời gian rảnh",
            duration: "90 phút",
            description:
              "Cách nói về sở thích, thời gian rảnh và các hoạt động giải trí.",
          },
          {
            title: "Bài 14: Mô tả người và đồ vật",
            duration: "90 phút",
            description:
              "Từ vựng và cấu trúc để mô tả người, đồ vật và địa điểm.",
          },
          {
            title: "Bài 15: Kế hoạch và dự định",
            duration: "90 phút",
            description: "Cách nói về kế hoạch, dự định trong tương lai.",
          },
          {
            title: "Bài 16: Sức khỏe và bệnh tật",
            duration: "90 phút",
            description:
              "Từ vựng về sức khỏe, bệnh tật và cách nói về tình trạng sức khỏe.",
          },
        ],
      },
      {
        title: "Phần 5: Văn hóa Nhật Bản",
        lessons: [
          {
            title: "Bài 17: Lễ hội và ngày lễ Nhật Bản",
            duration: "90 phút",
            description:
              "Tìm hiểu về các lễ hội và ngày lễ quan trọng của Nhật Bản.",
          },
          {
            title: "Bài 18: Ẩm thực Nhật Bản",
            duration: "90 phút",
            description:
              "Tìm hiểu về văn hóa ẩm thực Nhật Bản và các món ăn truyền thống.",
          },
          {
            title: "Bài 19: Phong tục và nghi thức",
            duration: "90 phút",
            description:
              "Tìm hiểu về các phong tục, nghi thức và cách ứng xử trong xã hội Nhật Bản.",
          },
          {
            title: "Bài 20: Văn hóa doanh nghiệp Nhật Bản",
            duration: "90 phút",
            description:
              "Tìm hiểu về văn hóa làm việc và giao tiếp trong môi trường doanh nghiệp Nhật Bản.",
          },
        ],
      },
      {
        title: "Phần 6: Ôn tập và chuẩn bị cho cấp độ tiếp theo",
        lessons: [
          {
            title: "Bài 21-22: Ôn tập tổng hợp",
            duration: "90 phút/buổi",
            description:
              "Ôn tập ngữ pháp, từ vựng và kỹ năng giao tiếp đã học.",
          },
          {
            title: "Bài 23: Giới thiệu về JLPT N5",
            duration: "90 phút",
            description: "Tổng quan về kỳ thi JLPT N5 và cách chuẩn bị.",
          },
          {
            title: "Bài 24: Kiểm tra cuối khóa và định hướng học tập tiếp theo",
            duration: "90 phút",
            description:
              "Kiểm tra đánh giá cuối khóa và tư vấn lộ trình học tập tiếp theo.",
          },
        ],
      },
    ],
    requirements: [
      "Không yêu cầu kiến thức tiếng Nhật trước đó",
      "Máy tính hoặc thiết bị di động có kết nối internet để truy cập tài liệu học tập trực tuyến",
      "Sổ tay và dụng cụ học tập cá nhân",
      "Sẵn sàng dành thời gian tự học ngoài giờ lên lớp",
    ],
    outcomes: [
      "Đọc và viết thành thạo bảng chữ cái Hiragana và Katakana",
      "Nhận biết và viết được khoảng 100 chữ Kanji cơ bản",
      "Giao tiếp cơ bản trong các tình huống hàng ngày",
      "Hiểu và sử dụng được các cấu trúc ngữ pháp cơ bản",
      "Có vốn từ vựng khoảng 800-1000 từ",
      "Hiểu biết cơ bản về văn hóa, phong tục Nhật Bản",
      "Đạt trình độ tương đương JLPT N5",
    ],
    teacherIds: [2, 7],
    relatedCourseIds: [8, 12, 15],
    testimonialIds: [3, 6, 9],
    faq: [
      {
        question:
          "Tôi không biết gì về tiếng Nhật, liệu có theo được khóa học này không?",
        answer:
          "Khóa học được thiết kế đặc biệt cho người mới bắt đầu, không yêu cầu kiến thức tiếng Nhật trước đó. Chúng tôi sẽ hướng dẫn bạn từ những kiến thức cơ bản nhất.",
      },
      {
        question: "Sau khóa học này, tôi có thể đạt trình độ nào?",
        answer:
          "Sau khi hoàn thành khóa học, bạn sẽ đạt trình độ tương đương JLPT N5, có thể giao tiếp cơ bản trong các tình huống hàng ngày và có nền tảng vững chắc để tiếp tục học lên các cấp độ cao hơn.",
      },
      {
        question: "Khóa học có dạy chữ Kanji không?",
        answer:
          "Có, khóa học sẽ giới thiệu khoảng 100 chữ Kanji cơ bản thường dùng trong cuộc sống hàng ngày. Đây là nền tảng quan trọng để bạn tiếp tục học thêm chữ Kanji ở các cấp độ cao hơn.",
      },
      {
        question: "Tôi có cần mua tài liệu gì thêm không?",
        answer:
          "Học phí đã bao gồm giáo trình chính Minna no Nihongo. Tuy nhiên, bạn nên chuẩn bị thêm sổ tay, bút và các dụng cụ học tập cá nhân. Chúng tôi cũng khuyến khích học viên mua thêm sách bài tập để luyện tập thêm ở nhà.",
      },
    ],
  },
  {
    id: 4,
    title: "Tiếng Hàn giao tiếp",
    slug: "tieng-han-giao-tiep",
    description: "Học tiếng Hàn cơ bản phục vụ giao tiếp và du lịch",
    fullDescription: `
      Khóa học Tiếng Hàn giao tiếp được thiết kế dành cho những người mới bắt đầu học tiếng Hàn hoặc đã có kiến thức cơ bản. Khóa học tập trung vào phát triển kỹ năng giao tiếp thực tế, giúp học viên có thể sử dụng tiếng Hàn trong các tình huống hàng ngày, du lịch và giao tiếp cơ bản.

      Với phương pháp giảng dạy tương tác và thực hành nhiều, học viên sẽ nhanh chóng làm quen với bảng chữ cái Hangul, ngữ pháp cơ bản và các mẫu câu thông dụng. Khóa học cũng giới thiệu về văn hóa, phong tục và lối sống của người Hàn Quốc, giúp học viên hiểu sâu hơn về ngôn ngữ trong bối cảnh văn hóa.

      Sau khi hoàn thành khóa học, học viên sẽ có thể giao tiếp cơ bản bằng tiếng Hàn trong các tình huống hàng ngày, đọc và viết được các câu đơn giản, đồng thời có nền tảng vững chắc để tiếp tục học lên các cấp độ cao hơn.
    `,
    image: "/course/4.jpg?height=340&width=600",
    level: "Cơ bản",
    language: "Tiếng Hàn",
    duration: "3 tháng",
    lessons: 24,
    hoursPerLesson: 1.5,
    schedule: "2 buổi/tuần, 90 phút/buổi",
    groupSize: "10-15 học viên",
    format: "Trực tuyến",
    price: 3500000,
    promotionPrice: 2975000,
    hasPromotion: true,
    promotionPercent: 15,
    isPopular: false,
    isNew: true,
    features: [
      "Giáo trình Yonsei Korean 1 phiên bản mới nhất",
      "Giáo viên người Việt và Hàn kết hợp giảng dạy",
      "Tài liệu học tập đa dạng, phong phú",
      "Lớp học quy mô nhỏ, nhiều thời gian thực hành",
      "Hoạt động trải nghiệm văn hóa Hàn Quốc",
      "Hỗ trợ học tập trực tuyến",
    ],
    curriculum: [
      {
        title: "Phần 1: Làm quen với tiếng Hàn",
        lessons: [
          {
            title: "Bài 1: Giới thiệu về tiếng Hàn và bảng chữ cái Hangul",
            duration: "90 phút",
            description:
              "Tổng quan về tiếng Hàn, cách phát âm và học bảng chữ cái Hangul (nguyên âm).",
          },
          {
            title: "Bài 2: Bảng chữ cái Hangul (tiếp theo)",
            duration: "90 phút",
            description:
              "Tiếp tục học bảng chữ cái Hangul (phụ âm) và cách viết đúng.",
          },
          {
            title: "Bài 3: Cách ghép âm và đánh vần",
            duration: "90 phút",
            description:
              "Học cách ghép âm, đánh vần và đọc từ trong tiếng Hàn.",
          },
          {
            title: "Bài 4: Chào hỏi và giới thiệu bản thân",
            duration: "90 phút",
            description:
              "Các cụm từ chào hỏi, giới thiệu bản thân và hội thoại cơ bản.",
          },
        ],
      },
      {
        title: "Phần 2: Ngữ pháp cơ bản và giao tiếp hàng ngày",
        lessons: [
          {
            title: "Bài 5: Cấu trúc câu cơ bản trong tiếng Hàn",
            duration: "90 phút",
            description:
              "Cấu trúc câu, trợ từ 은/는, 이/가, 을/를 và cách sử dụng.",
          },
          {
            title: "Bài 6: Động từ trong tiếng Hàn",
            duration: "90 phút",
            description:
              "Các nhóm động từ và cách chia động từ ở thì hiện tại.",
          },
          {
            title: "Bài 7: Tính từ trong tiếng Hàn",
            duration: "90 phút",
            description: "Tính từ và cách sử dụng trong câu.",
          },
          {
            title: "Bài 8: Số đếm và đơn vị đo lường",
            duration: "90 phút",
            description:
              "Cách đếm số (số Hàn và số Sino-Hàn), sử dụng các đơn vị đo lường.",
          },
        ],
      },
      {
        title: "Phần 3: Giao tiếp trong các tình huống cụ thể",
        lessons: [
          {
            title: "Bài 9: Mua sắm và giá cả",
            duration: "90 phút",
            description:
              "Từ vựng và cấu trúc câu sử dụng khi mua sắm, hỏi giá.",
          },
          {
            title: "Bài 10: Thời gian và lịch trình",
            duration: "90 phút",
            description: "Cách nói về thời gian, ngày tháng và lịch trình.",
          },
          {
            title: "Bài 11: Giao thông và chỉ đường",
            duration: "90 phút",
            description:
              "Từ vựng về phương tiện giao thông và cách hỏi/chỉ đường.",
          },
          {
            title: "Bài 12: Ăn uống và nhà hàng",
            duration: "90 phút",
            description:
              "Từ vựng về món ăn, đồ uống và cách gọi món trong nhà hàng.",
          },
        ],
      },
      {
        title: "Phần 4: Nâng cao kỹ năng giao tiếp",
        lessons: [
          {
            title: "Bài 13: Sở thích và thời gian rảnh",
            duration: "90 phút",
            description:
              "Cách nói về sở thích, thời gian rảnh và các hoạt động giải trí.",
          },
          {
            title: "Bài 14: Mô tả người và đồ vật",
            duration: "90 phút",
            description:
              "Từ vựng và cấu trúc để mô tả người, đồ vật và địa điểm.",
          },
          {
            title: "Bài 15: Kế hoạch và dự định",
            duration: "90 phút",
            description: "Cách nói về kế hoạch, dự định trong tương lai.",
          },
          {
            title: "Bài 16: Sức khỏe và bệnh tật",
            duration: "90 phút",
            description:
              "Từ vựng về sức khỏe, bệnh tật và cách nói về tình trạng sức khỏe.",
          },
        ],
      },
      {
        title: "Phần 5: Văn hóa Hàn Quốc",
        lessons: [
          {
            title: "Bài 17: Lễ hội và ngày lễ Hàn Quốc",
            duration: "90 phút",
            description:
              "Tìm hiểu về các lễ hội và ngày lễ quan trọng của Hàn Quốc.",
          },
          {
            title: "Bài 18: Ẩm thực Hàn Quốc",
            duration: "90 phút",
            description:
              "Tìm hiểu về văn hóa ẩm thực Hàn Quốc và các món ăn truyền thống.",
          },
          {
            title: "Bài 19: Văn hóa K-pop và phim Hàn",
            duration: "90 phút",
            description:
              "Tìm hiểu về văn hóa đại chúng Hàn Quốc, K-pop và phim Hàn.",
          },
          {
            title: "Bài 20: Phong tục và nghi thức",
            duration: "90 phút",
            description:
              "Tìm hiểu về các phong tục, nghi thức và cách ứng xử trong xã hội Hàn Quốc.",
          },
        ],
      },
      {
        title: "Phần 6: Ôn tập và chuẩn bị cho cấp độ tiếp theo",
        lessons: [
          {
            title: "Bài 21-22: Ôn tập tổng hợp",
            duration: "90 phút/buổi",
            description:
              "Ôn tập ngữ pháp, từ vựng và kỹ năng giao tiếp đã học.",
          },
          {
            title: "Bài 23: Giới thiệu về TOPIK I",
            duration: "90 phút",
            description: "Tổng quan về kỳ thi TOPIK I và cách chuẩn bị.",
          },
          {
            title: "Bài 24: Kiểm tra cuối khóa và định hướng học tập tiếp theo",
            duration: "90 phút",
            description:
              "Kiểm tra đánh giá cuối khóa và tư vấn lộ trình học tập tiếp theo.",
          },
        ],
      },
    ],
    requirements: [
      "Không yêu cầu kiến thức tiếng Hàn trước đó",
      "Máy tính hoặc thiết bị di động có kết nối internet ổn định",
      "Tai nghe và microphone để tham gia lớp học trực tuyến",
      "Sổ tay và dụng cụ học tập cá nhân",
      "Sẵn sàng dành thời gian tự học ngoài giờ lên lớp",
    ],
    outcomes: [
      "Đọc và viết thành thạo bảng chữ cái Hangul",
      "Giao tiếp cơ bản trong các tình huống hàng ngày",
      "Hiểu và sử dụng được các cấu trúc ngữ pháp cơ bản",
      "Có vốn từ vựng khoảng 800-1000 từ",
      "Hiểu biết cơ bản về văn hóa, phong tục Hàn Quốc",
      "Đạt trình độ tương đương TOPIK I cấp độ 1",
    ],
    teacherIds: [3, 7],
    relatedCourseIds: [3, 8, 12],
    testimonialIds: [4, 10, 13],
    faq: [
      {
        question:
          "Tôi không biết gì về tiếng Hàn, liệu có theo được khóa học này không?",
        answer:
          "Khóa học được thiết kế đặc biệt cho người mới bắt đầu, không yêu cầu kiến thức tiếng Hàn trước đó. Chúng tôi sẽ hướng dẫn bạn từ những kiến thức cơ bản nhất.",
      },
      {
        question: "Khóa học trực tuyến có hiệu quả không?",
        answer:
          "Khóa học trực tuyến của chúng tôi được thiết kế để đảm bảo tính tương tác cao, với số lượng học viên giới hạn và nhiều hoạt động thực hành. Giáo viên sẽ theo dõi sát sao tiến độ của từng học viên và cung cấp phản hồi kịp thời.",
      },
      {
        question: "Sau khóa học này, tôi có thể đạt trình độ nào?",
        answer:
          "Sau khi hoàn thành khóa học, bạn sẽ đạt trình độ tương đương TOPIK I cấp độ 1, có thể giao tiếp cơ bản trong các tình huống hàng ngày và có nền tảng vững chắc để tiếp tục học lên các cấp độ cao hơn.",
      },
      {
        question: "Tôi có thể xem lại bài giảng sau mỗi buổi học không?",
        answer:
          "Có, tất cả các buổi học đều được ghi lại và học viên có thể xem lại trong vòng 7 ngày sau mỗi buổi học. Điều này giúp bạn ôn tập và nắm vững kiến thức đã học.",
      },
    ],
  },
  {
    id: 5,
    title: "TOEIC 4 kỹ năng",
    slug: "toeic-4-ky-nang",
    description: "Luyện thi TOEIC đầy đủ 4 kỹ năng Nghe, Nói, Đọc, Viết",
    fullDescription: `
      Khóa học TOEIC 4 kỹ năng được thiết kế đặc biệt để chuẩn bị cho học viên tham gia kỳ thi TOEIC đầy đủ cả 4 kỹ năng: Nghe, Nói, Đọc và Viết. Khóa học cung cấp kiến thức toàn diện và chiến lược làm bài hiệu quả cho từng phần thi.

      Với đội ngũ giảng viên giàu kinh nghiệm, khóa học mang đến những phương pháp và kỹ thuật làm bài thi được cá nhân hóa, giúp học viên phát huy tối đa tiềm năng và đạt được điểm số mong muốn.

      Khóa học không chỉ tập trung vào việc luyện thi mà còn giúp học viên phát triển kỹ năng tiếng Anh thực tế, điều này sẽ hữu ích cho việc học tập và làm việc trong môi trường quốc tế sau này.
    `,
    image: "/course/5.jpg?height=340&width=600",
    level: "Trung cấp",
    language: "Tiếng Anh",
    duration: "3 tháng",
    lessons: 24,
    hoursPerLesson: 1.5,
    schedule: "2 buổi/tuần, 90 phút/buổi",
    groupSize: "10-15 học viên",
    format: "Kết hợp",
    price: 4500000,
    promotionPrice: 3600000,
    hasPromotion: true,
    promotionPercent: 20,
    isPopular: true,
    isNew: false,
    features: [
      "Cam kết đầu ra từ 750 điểm TOEIC trở lên",
      "Giáo viên có chứng chỉ TESOL/CELTA và kinh nghiệm luyện thi TOEIC",
      "Tài liệu học tập cập nhật theo cấu trúc đề thi mới nhất",
      "Mô phỏng kỳ thi thực tế với đánh giá chi tiết",
      "Lớp học quy mô nhỏ, nhiều thời gian thực hành",
      "Hỗ trợ học tập 1-1 với giáo viên",
      "Được thi thử miễn phí 2 lần",
    ],
    curriculum: [
      {
        title: "Phần 1: Giới thiệu và Đánh giá",
        lessons: [
          {
            title: "Bài 1: Giới thiệu về TOEIC 4 kỹ năng và Đánh giá năng lực",
            duration: "90 phút",
            description:
              "Tổng quan về kỳ thi TOEIC 4 kỹ năng, cấu trúc bài thi và hệ thống chấm điểm. Bài kiểm tra đánh giá năng lực đầu vào.",
          },
          {
            title: "Bài 2: Chiến lược học tập và Kỹ năng quản lý thời gian",
            duration: "90 phút",
            description:
              "Phương pháp học tập hiệu quả và kỹ năng quản lý thời gian trong kỳ thi TOEIC.",
          },
        ],
      },
      {
        title: "Phần 2: TOEIC Listening & Reading",
        lessons: [
          {
            title: "Bài 3: Listening - Photographs & Question-Response",
            duration: "90 phút",
            description:
              "Chiến lược làm bài và thực hành với phần thi Photographs và Question-Response.",
          },
          {
            title: "Bài 4: Listening - Conversations & Talks",
            duration: "90 phút",
            description:
              "Chiến lược làm bài và thực hành với phần thi Conversations và Talks.",
          },
          {
            title: "Bài 5: Reading - Incomplete Sentences & Text Completion",
            duration: "90 phút",
            description:
              "Chiến lược làm bài và thực hành với phần thi Incomplete Sentences và Text Completion.",
          },
          {
            title: "Bài 6: Reading - Single & Multiple Passages",
            duration: "90 phút",
            description:
              "Chiến lược làm bài và thực hành với phần thi Single Passages và Multiple Passages.",
          },
        ],
      },
      {
        title: "Phần 3: TOEIC Speaking",
        lessons: [
          {
            title: "Bài 7: Speaking - Read a text aloud & Describe a picture",
            duration: "90 phút",
            description:
              "Chiến lược làm bài và thực hành với phần thi Read a text aloud và Describe a picture.",
          },
          {
            title:
              "Bài 8: Speaking - Respond to questions & Respond to questions using information provided",
            duration: "90 phút",
            description:
              "Chiến lược làm bài và thực hành với phần thi Respond to questions và Respond to questions using information provided.",
          },
          {
            title: "Bài 9: Speaking - Express an opinion & Propose a solution",
            duration: "90 phút",
            description:
              "Chiến lược làm bài và thực hành với phần thi Express an opinion và Propose a solution.",
          },
          {
            title: "Bài 10: Speaking - Phát âm và ngữ điệu",
            duration: "90 phút",
            description:
              "Cải thiện phát âm, nhấn mạnh từ và ngữ điệu trong tiếng Anh.",
          },
        ],
      },
      {
        title: "Phần 4: TOEIC Writing",
        lessons: [
          {
            title: "Bài 11: Writing - Write a sentence based on a picture",
            duration: "90 phút",
            description:
              "Chiến lược làm bài và thực hành với phần thi Write a sentence based on a picture.",
          },
          {
            title: "Bài 12: Writing - Respond to a written request",
            duration: "90 phút",
            description:
              "Chiến lược làm bài và thực hành với phần thi Respond to a written request.",
          },
          {
            title: "Bài 13: Writing - Write an opinion essay",
            duration: "90 phút",
            description:
              "Chiến lược làm bài và thực hành với phần thi Write an opinion essay.",
          },
          {
            title: "Bài 14: Writing - Từ vựng và ngữ pháp thương mại",
            duration: "90 phút",
            description:
              "Sử dụng từ vựng và cấu trúc ngữ pháp thương mại để nâng cao điểm số.",
          },
        ],
      },
      {
        title: "Phần 5: Luyện thi tổng hợp",
        lessons: [
          {
            title: "Bài 15-16: Luyện thi Listening & Reading",
            duration: "90 phút/buổi",
            description:
              "Thực hành với đề thi thử Listening & Reading và phân tích lỗi.",
          },
          {
            title: "Bài 17-18: Luyện thi Speaking & Writing",
            duration: "90 phút/buổi",
            description:
              "Thực hành với đề thi thử Speaking & Writing và phân tích lỗi.",
          },
          {
            title: "Bài 19-20: Thi thử TOEIC 4 kỹ năng (lần 1)",
            duration: "90 phút/buổi",
            description:
              "Thi thử hoàn chỉnh TOEIC 4 kỹ năng và đánh giá chi tiết.",
          },
        ],
      },
      {
        title: "Phần 6: Ôn tập và Thi thử",
        lessons: [
          {
            title: "Bài 21-22: Ôn tập tổng hợp và Chiến lược cải thiện",
            duration: "90 phút/buổi",
            description:
              "Ôn tập tổng hợp 4 kỹ năng và đưa ra chiến lược cải thiện cá nhân hóa.",
          },
          {
            title: "Bài 23-24: Thi thử TOEIC 4 kỹ năng (lần 2) và Đánh giá",
            duration: "90 phút/buổi",
            description:
              "Thi thử cuối khóa với điều kiện giống thực tế và đánh giá chi tiết.",
          },
        ],
      },
    ],
    requirements: [
      "Có trình độ tiếng Anh trung cấp trở lên (tương đương B1)",
      "Đã có kiến thức cơ bản về cấu trúc bài thi TOEIC",
      "Cam kết tham gia đầy đủ các buổi học và hoàn thành bài tập về nhà",
      "Máy tính hoặc thiết bị di động có kết nối internet để truy cập tài liệu học tập trực tuyến",
      "Sẵn sàng dành thời gian tự học ngoài giờ lên lớp",
    ],
    outcomes: [
      "Đạt điểm TOEIC từ 750 trở lên (tùy theo năng lực đầu vào)",
      "Nắm vững chiến lược làm bài cho cả 4 kỹ năng Nghe, Nói, Đọc, Viết",
      "Phát triển vốn từ vựng thương mại phong phú",
      "Cải thiện kỹ năng giao tiếp trong môi trường làm việc",
      "Tự tin sử dụng tiếng Anh trong công việc",
      "Hiểu rõ cấu trúc bài thi và tiêu chí chấm điểm TOEIC",
    ],
    teacherIds: [1, 4, 6],
    relatedCourseIds: [1, 2, 9],
    testimonialIds: [5, 8, 11],
    faq: [
      {
        question:
          "Tôi cần có trình độ tiếng Anh như thế nào để tham gia khóa học này?",
        answer:
          "Học viên cần có trình độ tiếng Anh trung cấp trở lên (tương đương B1) để có thể theo kịp nội dung khóa học. Nếu bạn chưa đạt trình độ này, chúng tôi khuyên bạn nên tham gia khóa Tiếng Anh giao tiếp trước.",
      },
      {
        question: "Khóa học có cam kết đầu ra không?",
        answer:
          "Có, chúng tôi cam kết học viên sẽ đạt điểm TOEIC từ 750 trở lên sau khi hoàn thành khóa học, với điều kiện học viên tham gia đầy đủ các buổi học và hoàn thành bài tập được giao. Mức tăng điểm cụ thể sẽ phụ thuộc vào trình độ đầu vào và sự nỗ lực của học viên.",
      },
      {
        question:
          "Tôi có được học lại miễn phí nếu không đạt điểm như mong muốn không?",
        answer:
          "Có, nếu học viên không đạt được mức điểm cam kết sau khi hoàn thành khóa học và đã tham gia đầy đủ các buổi học, hoàn thành bài tập, chúng tôi sẽ cho phép học lại miễn phí một khóa tương đương.",
      },
      {
        question: "Khóa học có bao gồm phí thi TOEIC chính thức không?",
        answer:
          "Không, phí thi TOEIC chính thức không bao gồm trong học phí. Tuy nhiên, học viên sẽ được tham gia 2 kỳ thi thử miễn phí với đánh giá chi tiết từ giáo viên.",
      },
    ],
  },
  {
    id: 6,
    title: "Tiếng Trung thương mại",
    slug: "tieng-trung-thuong-mai",
    description: "Tiếng Trung chuyên ngành thương mại và kinh doanh",
    fullDescription: `
      Khóa học Tiếng Trung thương mại được thiết kế đặc biệt cho những học viên đã có kiến thức cơ bản về tiếng Trung và muốn phát triển kỹ năng ngôn ngữ chuyên ngành trong lĩnh vực thương mại, kinh doanh. Khóa học tập trung vào từ vựng, thuật ngữ và cấu trúc ngữ pháp thường dùng trong môi trường làm việc, đàm phán kinh doanh và giao dịch thương mại với đối tác Trung Quốc.

      Với phương pháp giảng dạy thực tiễn, học viên sẽ được thực hành thông qua các tình huống kinh doanh thực tế, mô phỏng các cuộc đàm phán, viết email và báo cáo kinh doanh, cũng như tìm hiểu về văn hóa kinh doanh của Trung Quốc.

      Sau khi hoàn thành khóa học, học viên sẽ có thể tự tin giao tiếp bằng tiếng Trung trong môi trường làm việc, đàm phán với đối tác Trung Quốc, và hiểu được các tài liệu kinh doanh bằng tiếng Trung.
    `,
    image: "/course/6.jpg?height=340&width=600",
    level: "Trung cấp",
    language: "Tiếng Trung",
    duration: "3 tháng",
    lessons: 24,
    hoursPerLesson: 1.5,
    schedule: "2 buổi/tuần, 90 phút/buổi",
    groupSize: "8-12 học viên",
    format: "Trực tiếp",
    price: 4200000,
    promotionPrice: 4200000,
    hasPromotion: false,
    promotionPercent: 0,
    isPopular: false,
    isNew: true,
    features: [
      "Giáo trình chuyên biệt về tiếng Trung thương mại",
      "Giáo viên có kinh nghiệm trong lĩnh vực kinh doanh với Trung Quốc",
      "Tài liệu học tập thực tế từ các doanh nghiệp",
      "Lớp học quy mô nhỏ, nhiều thời gian thực hành",
      "Mô phỏng các tình huống kinh doanh thực tế",
      "Hỗ trợ học tập trực tuyến",
    ],
    curriculum: [
      {
        title: "Phần 1: Giới thiệu và Đánh giá",
        lessons: [
          {
            title:
              "Bài 1: Giới thiệu về tiếng Trung thương mại và Đánh giá năng lực",
            duration: "90 phút",
            description:
              "Tổng quan về khóa học, tầm quan trọng của tiếng Trung trong kinh doanh và bài kiểm tra đánh giá năng lực đầu vào.",
          },
          {
            title: "Bài 2: Ôn tập kiến thức cơ bản và Từ vựng thương mại",
            duration: "90 phút",
            description:
              "Ôn tập ngữ pháp cơ bản và giới thiệu từ vựng thương mại thông dụng.",
          },
        ],
      },
      {
        title: "Phần 2: Giao tiếp trong môi trường làm việc",
        lessons: [
          {
            title: "Bài 3: Giới thiệu bản thân và công ty",
            duration: "90 phút",
            description:
              "Cách giới thiệu bản thân, vị trí công việc và công ty trong môi trường chuyên nghiệp.",
          },
          {
            title: "Bài 4: Giao tiếp trong văn phòng",
            duration: "90 phút",
            description:
              "Từ vựng và cấu trúc câu sử dụng trong giao tiếp hàng ngày tại văn phòng.",
          },
          {
            title: "Bài 5: Lên lịch và sắp xếp cuộc họp",
            duration: "90 phút",
            description:
              "Cách lên lịch, sắp xếp và xác nhận cuộc họp bằng tiếng Trung.",
          },
          {
            title: "Bài 6: Gọi điện thoại và trao đổi thông tin",
            duration: "90 phút",
            description:
              "Kỹ năng gọi điện thoại, để lại tin nhắn và trao đổi thông tin qua điện thoại.",
          },
        ],
      },
      {
        title: "Phần 3: Đàm phán kinh doanh",
        lessons: [
          {
            title: "Bài 7: Giới thiệu sản phẩm và dịch vụ",
            duration: "90 phút",
            description:
              "Từ vựng và cấu trúc câu để giới thiệu sản phẩm, dịch vụ và tính năng.",
          },
          {
            title: "Bài 8: Thảo luận về giá cả và điều khoản",
            duration: "90 phút",
            description:
              "Cách thảo luận về giá cả, chiết khấu, điều khoản thanh toán và giao hàng.",
          },
          {
            title: "Bài 9: Đàm phán hợp đồng",
            duration: "90 phút",
            description: "Từ vựng và kỹ năng đàm phán các điều khoản hợp đồng.",
          },
          {
            title: "Bài 10: Xử lý bất đồng và giải quyết vấn đề",
            duration: "90 phút",
            description:
              "Cách xử lý bất đồng, giải quyết vấn đề và đạt được thỏa thuận.",
          },
        ],
      },
      {
        title: "Phần 4: Giao dịch thương mại",
        lessons: [
          {
            title: "Bài 11: Quy trình đặt hàng và xác nhận",
            duration: "90 phút",
            description:
              "Từ vựng và cấu trúc câu liên quan đến quy trình đặt hàng và xác nhận.",
          },
          {
            title: "Bài 12: Vận chuyển và hải quan",
            duration: "90 phút",
            description:
              "Từ vựng và thuật ngữ liên quan đến vận chuyển, hải quan và xuất nhập khẩu.",
          },
          {
            title: "Bài 13: Thanh toán quốc tế",
            duration: "90 phút",
            description:
              "Từ vựng và thuật ngữ liên quan đến các phương thức thanh toán quốc tế.",
          },
          {
            title: "Bài 14: Bảo hiểm và rủi ro",
            duration: "90 phút",
            description:
              "Từ vựng và thuật ngữ liên quan đến bảo hiểm và quản lý rủi ro trong thương mại.",
          },
        ],
      },
      {
        title: "Phần 5: Văn hóa kinh doanh Trung Quốc",
        lessons: [
          {
            title: "Bài 15: Hiểu về Guanxi (关系) và mạng lưới quan hệ",
            duration: "90 phút",
            description:
              "Tìm hiểu về tầm quan trọng của mạng lưới quan hệ (Guanxi) trong kinh doanh tại Trung Quốc.",
          },
          {
            title: "Bài 16: Nghi thức và phong tục kinh doanh",
            duration: "90 phút",
            description:
              "Tìm hiểu về nghi thức, phong tục và taboo trong kinh doanh với đối tác Trung Quốc.",
          },
          {
            title: "Bài 17: Tiệc chiêu đãi và xã giao",
            duration: "90 phút",
            description:
              "Từ vựng và nghi thức liên quan đến tiệc chiêu đãi và xã giao trong kinh doanh.",
          },
          {
            title: "Bài 18: Tặng quà và cảm ơn",
            duration: "90 phút",
            description:
              "Cách tặng quà, bày tỏ lòng biết ơn và duy trì mối quan hệ kinh doanh.",
          },
        ],
      },
      {
        title: "Phần 6: Kỹ năng viết trong kinh doanh",
        lessons: [
          {
            title: "Bài 19: Viết email và thư tín thương mại",
            duration: "90 phút",
            description:
              "Cách viết email, thư tín thương mại chuyên nghiệp bằng tiếng Trung.",
          },
          {
            title: "Bài 20: Viết báo cáo kinh doanh",
            duration: "90 phút",
            description:
              "Cách viết báo cáo kinh doanh, phân tích thị trường bằng tiếng Trung.",
          },
          {
            title: "Bài 21: Viết kế hoạch kinh doanh",
            duration: "90 phút",
            description:
              "Cách viết kế hoạch kinh doanh, đề xuất dự án bằng tiếng Trung.",
          },
          {
            title: "Bài 22: Viết hợp đồng và thỏa thuận",
            duration: "90 phút",
            description:
              "Cách viết và hiểu các điều khoản hợp đồng, thỏa thuận bằng tiếng Trung.",
          },
        ],
      },
      {
        title: "Phần 7: Ôn tập và Đánh giá",
        lessons: [
          {
            title: "Bài 23: Ôn tập tổng hợp",
            duration: "90 phút",
            description: "Ôn tập tổng hợp kiến thức và kỹ năng đã học.",
          },
          {
            title: "Bài 24: Kiểm tra cuối khóa và Đánh giá",
            duration: "90 phút",
            description:
              "Kiểm tra đánh giá cuối khóa và tư vấn lộ trình học tập, phát triển tiếp theo.",
          },
        ],
      },
    ],
    requirements: [
      "Có trình độ tiếng Trung trung cấp trở lên (tương đương HSK 3)",
      "Có khả năng đọc và viết chữ Hán cơ bản",
      "Có kiến thức cơ bản về kinh doanh và thương mại",
      "Máy tính hoặc thiết bị di động có kết nối internet để truy cập tài liệu học tập trực tuyến",
      "Sẵn sàng dành thời gian tự học ngoài giờ lên lớp",
    ],
    outcomes: [
      "Giao tiếp tự tin bằng tiếng Trung trong môi trường làm việc",
      "Đàm phán hiệu quả với đối tác Trung Quốc",
      "Hiểu và sử dụng thuật ngữ thương mại, kinh doanh chuyên ngành",
      "Viết email, báo cáo và tài liệu kinh doanh bằng tiếng Trung",
      "Hiểu biết sâu sắc về văn hóa kinh doanh Trung Quốc",
      "Xây dựng và duy trì mối quan hệ kinh doanh với đối tác Trung Quốc",
    ],
    teacherIds: [5, 7],
    relatedCourseIds: [3, 4, 8],
    testimonialIds: [6, 9, 12],
    faq: [
      {
        question:
          "Tôi cần có trình độ tiếng Trung như thế nào để tham gia khóa học này?",
        answer:
          "Học viên cần có trình độ tiếng Trung trung cấp trở lên (tương đương HSK 3), có khả năng đọc và viết chữ Hán cơ bản. Nếu bạn chưa đạt trình độ này, chúng tôi khuyên bạn nên tham gia khóa Tiếng Trung cơ bản trước.",
      },
      {
        question:
          "Khóa học này có phù hợp với người làm việc trong lĩnh vực nào?",
        answer:
          "Khóa học phù hợp với những người làm việc trong lĩnh vực xuất nhập khẩu, thương mại quốc tế, kinh doanh với đối tác Trung Quốc, marketing quốc tế, và các vị trí khác có nhu cầu giao tiếp với đối tác Trung Quốc hoặc làm việc tại các công ty Trung Quốc.",
      },
      {
        question: "Khóa học có cung cấp chứng chỉ không?",
        answer:
          "Có, sau khi hoàn thành khóa học và vượt qua bài kiểm tra cuối khóa, học viên sẽ nhận được chứng chỉ hoàn thành từ Language Center, xác nhận trình độ và kỹ năng tiếng Trung thương mại đã đạt được.",
      },
      {
        question:
          "Tôi có thể áp dụng kiến thức từ khóa học này vào công việc như thế nào?",
        answer:
          "Kiến thức và kỹ năng từ khóa học có thể áp dụng trực tiếp vào các tình huống công việc như đàm phán hợp đồng, trao đổi email với đối tác, tham gia cuộc họp, thuyết trình sản phẩm/dịch vụ, và xây dựng mối quan hệ kinh doanh với đối tác Trung Quốc.",
      },
    ],
  },
];

// Dữ liệu giảng viên
export const teachers: Teacher[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    slug: "sarah-johnson",
    position: "Giảng viên tiếng Anh",
    avatar: "/avatar/1.jpg?height=200&width=200",
    languages: ["Tiếng Anh"],
    bio: "Giảng viên tiếng Anh với phương pháp giảng dạy tương tác và hiệu quả",
    fullBio: `
      Sarah Johnson là giảng viên tiếng Anh với hơn 8 năm kinh nghiệm giảng dạy tại các trung tâm ngôn ngữ và trường đại học quốc tế. Cô tốt nghiệp Thạc sĩ Ngôn ngữ học ứng dụng tại Đại học Oxford và sở hữu chứng chỉ CELTA từ Đại học Cambridge.

      Với phương pháp giảng dạy tương tác và sáng tạo, Sarah đã giúp hàng nghìn học viên cải thiện kỹ năng tiếng Anh và đạt được mục tiêu học tập của họ. Cô chuyên về luyện thi IELTS, TOEFL và tiếng Anh giao tiếp, với thế mạnh đặc biệt trong việc phát triển kỹ năng nói và viết.

      Sarah tin rằng việc học ngôn ngữ nên là một trải nghiệm thú vị và gắn liền với thực tế. Vì vậy, các lớp học của cô luôn đầy ắp các hoạt động thực hành, tình huống thực tế và thảo luận sôi nổi, giúp học viên không chỉ học ngôn ngữ mà còn hiểu sâu về văn hóa và cách sử dụng ngôn ngữ trong các bối cảnh khác nhau.

      Ngoài giảng dạy, Sarah còn là tác giả của nhiều bài viết về phương pháp học tiếng Anh hiệu quả và là diễn giả thường xuyên tại các hội thảo về giáo dục ngôn ngữ.
    `,
    education: "Thạc sĩ Ngôn ngữ học ứng dụng, Đại học Oxford",
    experience: "8 năm kinh nghiệm giảng dạy tiếng Anh",
    specialization: "IELTS, TOEFL, Tiếng Anh giao tiếp",
    achievements: [
      "Chứng chỉ CELTA từ Đại học Cambridge",
      "Giảng viên xuất sắc năm 2021 tại Language Center",
      "Tác giả sách 'Effective English Communication Skills'",
      "Diễn giả tại Hội thảo Giáo dục Ngôn ngữ Quốc tế 2022",
    ],
    courseIds: [1, 2, 5, 9],
    socialMedia: {
      facebook: "https://facebook.com/sarahjohnson",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      twitter: "https://twitter.com/sarahjohnson",
    },
    scheduleAvailability: [
      {
        day: "Thứ Hai, Thứ Tư",
        hours: "18:00 - 21:00",
      },
      {
        day: "Thứ Bảy",
        hours: "9:00 - 12:00",
      },
    ],
  },
  {
    id: 2,
    name: "Tanaka Yuki",
    slug: "tanaka-yuki",
    position: "Giảng viên tiếng Nhật",
    avatar: "/avatar/2.jpg?height=200&width=200",
    languages: ["Tiếng Nhật", "Tiếng Anh"],
    bio: "Giảng viên người Nhật với kinh nghiệm giảng dạy phong phú",
    fullBio: `
      Tanaka Yuki là giảng viên tiếng Nhật người bản xứ với hơn 6 năm kinh nghiệm giảng dạy tiếng Nhật cho người nước ngoài. Cô tốt nghiệp Cử nhân Giáo dục tại Đại học Tokyo và sở hữu chứng chỉ giảng dạy tiếng Nhật quốc tế (Japanese Language Teaching Competency Test).

      Trước khi đến Việt Nam, Yuki đã có 3 năm kinh nghiệm giảng dạy tiếng Nhật tại các trường ngôn ngữ ở Nhật Bản. Tại Việt Nam, cô đã giảng dạy tại nhiều trung tâm tiếng Nhật uy tín và được học viên yêu mến nhờ phương pháp giảng dạy dễ hiểu, kiên nhẫn và luôn quan tâm đến tiến độ của từng học viên.

      Yuki chuyên dạy tiếng Nhật từ cơ bản đến nâng cao, luyện thi JLPT các cấp độ, và tiếng Nhật chuyên ngành. Cô đặc biệt giỏi trong việc giúp học viên phát âm chuẩn và hiểu sâu về ngữ pháp tiếng Nhật.

      Ngoài giảng dạy, Yuki còn tổ chức các hoạt động giao lưu văn hóa Nhật Bản, giúp học viên không chỉ học ngôn ngữ mà còn hiểu sâu về văn hóa, phong tục và lối sống của người Nhật.
    `,
    education: "Cử nhân Giáo dục, Đại học Tokyo",
    experience: "6 năm kinh nghiệm giảng dạy tiếng Nhật",
    specialization: "JLPT N1-N5, Tiếng Nhật thương mại",
    achievements: [
      "Chứng chỉ Japanese Language Teaching Competency Test",
      "Giảng viên được yêu thích nhất năm 2022 tại Language Center",
      "Tổ chức thành công hơn 20 sự kiện giao lưu văn hóa Nhật-Việt",
      "Hướng dẫn hơn 100 học viên đạt chứng chỉ JLPT các cấp độ",
    ],
    courseIds: [3, 8, 12, 15],
    socialMedia: {
      facebook: "https://facebook.com/tanakayuki",
      instagram: "https://instagram.com/tanakayuki",
    },
    scheduleAvailability: [
      {
        day: "Thứ Ba, Thứ Năm",
        hours: "18:00 - 21:00",
      },
      {
        day: "Chủ Nhật",
        hours: "14:00 - 17:00",
      },
    ],
  },
  {
    id: 3,
    name: "Kim Min Ji",
    slug: "kim-min-ji",
    position: "Giảng viên tiếng Hàn",
    avatar: "/avatar/3.jpg?height=200&width=200",
    languages: ["Tiếng Hàn", "Tiếng Anh"],
    bio: "Giảng viên người Hàn Quốc với phương pháp giảng dạy sinh động",
    fullBio: `
      Kim Min Ji là giảng viên tiếng Hàn người bản xứ với 5 năm kinh nghiệm giảng dạy tiếng Hàn cho người nước ngoài. Cô tốt nghiệp Thạc sĩ Ngôn ngữ Hàn tại Đại học Seoul và sở hữu chứng chỉ giảng dạy tiếng Hàn quốc tế.

      Min Ji đến Việt Nam từ năm 2018 và đã giảng dạy tại nhiều trung tâm tiếng Hàn uy tín. Cô nổi tiếng với phương pháp giảng dạy sinh động, kết hợp giữa học ngôn ngữ và trải nghiệm văn hóa Hàn Quốc, giúp học viên tiếp thu kiến thức một cách tự nhiên và hiệu quả.

      Cô chuyên dạy tiếng Hàn từ cơ bản đến nâng cao, luyện thi TOPIK các cấp độ, và tiếng Hàn chuyên ngành. Min Ji đặc biệt giỏi trong việc giúp học viên phát âm chuẩn và hiểu sâu về ngữ pháp tiếng Hàn.

      Ngoài giảng dạy, Min Ji còn là người đam mê văn hóa đại chúng Hàn Quốc và thường xuyên tổ chức các buổi chia sẻ về K-pop, phim Hàn, ẩm thực và xu hướng thời trang Hàn Quốc, giúp học viên có cái nhìn toàn diện về đất nước và con người Hàn Quốc.
    `,
    education: "Thạc sĩ Ngôn ngữ Hàn, Đại học Seoul",
    experience: "5 năm kinh nghiệm giảng dạy tiếng Hàn",
    specialization: "TOPIK, Tiếng Hàn giao tiếp, Văn hóa Hàn Quốc",
    achievements: [
      "Chứng chỉ giảng dạy tiếng Hàn quốc tế",
      "Giảng viên xuất sắc năm 2022 tại Language Center",
      "Tổ chức thành công hơn 15 sự kiện giao lưu văn hóa Hàn-Việt",
      "Hướng dẫn hơn 80 học viên đạt chứng chỉ TOPIK các cấp độ",
    ],
    courseIds: [4, 11, 14],
    socialMedia: {
      instagram: "https://instagram.com/kimminji",
      facebook: "https://facebook.com/kimminji",
    },
    scheduleAvailability: [
      {
        day: "Thứ Ba, Thứ Sáu",
        hours: "18:00 - 21:00",
      },
      {
        day: "Thứ Bảy",
        hours: "14:00 - 17:00",
      },
    ],
  },
  {
    id: 4,
    name: "Nguyễn Văn Minh",
    slug: "nguyen-van-minh",
    position: "Giảng viên tiếng Anh",
    avatar: "/avatar/4.jpg?height=200&width=200",
    languages: ["Tiếng Anh"],
    bio: "Giảng viên với phương pháp giảng dạy hiệu quả, tập trung vào kỹ năng thực hành",
    fullBio: `
      Nguyễn Văn Minh là giảng viên tiếng Anh với 7 năm kinh nghiệm giảng dạy tại các trung tâm ngôn ngữ và trường đại học. Anh tốt nghiệp Thạc sĩ Giảng dạy tiếng Anh tại Đại học Melbourne, Úc và sở hữu chứng chỉ TESOL quốc tế.

      Minh có kinh nghiệm giảng dạy đa dạng, từ tiếng Anh giao tiếp, tiếng Anh học thuật đến luyện thi IELTS, TOEIC và các chứng chỉ quốc tế khác. Anh nổi tiếng với phương pháp giảng dạy hiệu quả, tập trung vào kỹ năng thực hành và ứng dụng thực tế.

      Với kinh nghiệm sống và học tập tại Úc, Minh không chỉ truyền đạt kiến thức ngôn ngữ mà còn chia sẻ hiểu biết sâu sắc về văn hóa và cách sử dụng tiếng Anh trong môi trường quốc tế. Anh đặc biệt giỏi trong việc giúp học viên phát triển kỹ năng viết và nói tiếng Anh học thuật.

      Ngoài giảng dạy, Minh còn là tác giả của nhiều bài viết về phương pháp học tiếng Anh hiệu quả và thường xuyên tham gia các hội thảo về giáo dục ngôn ngữ trong nước và quốc tế.
    `,
    education: "Thạc sĩ Giảng dạy tiếng Anh, Đại học Melbourne",
    experience: "7 năm kinh nghiệm giảng dạy tiếng Anh",
    specialization: "IELTS, Tiếng Anh học thuật, Tiếng Anh thương mại",
    achievements: [
      "Chứng chỉ TESOL quốc tế",
      "Giảng viên xuất sắc năm 2020 tại Language Center",
      "Tác giả sách 'IELTS Writing: A Comprehensive Guide'",
      "Hướng dẫn hơn 200 học viên đạt điểm IELTS từ 7.0 trở lên",
    ],
    courseIds: [1, 2, 5, 9],
    socialMedia: {
      facebook: "https://facebook.com/nguyenvanminh",
      linkedin: "https://linkedin.com/in/nguyenvanminh",
    },
    scheduleAvailability: [
      {
        day: "Thứ Hai, Thứ Năm",
        hours: "18:00 - 21:00",
      },
      {
        day: "Chủ Nhật",
        hours: "9:00 - 12:00",
      },
    ],
  },
  {
    id: 5,
    name: "Wang Li",
    slug: "wang-li",
    position: "Giảng viên tiếng Trung",
    avatar: "/avatar/5.jpg?height=200&width=200",
    languages: ["Tiếng Trung", "Tiếng Anh"],
    bio: "Giảng viên người Trung Quốc với phương pháp giảng dạy tận tâm",
    fullBio: `
      Wang Li là giảng viên tiếng Trung người bản xứ với 4 năm kinh nghiệm giảng dạy tiếng Trung cho người nước ngoài. Cô tốt nghiệp Cử nhân Ngôn ngữ học tại Đại học Bắc Kinh và sở hữu chứng chỉ giảng dạy tiếng Trung quốc tế.

      Trước khi đến Việt Nam, Wang Li đã có 2 năm kinh nghiệm giảng dạy tiếng Trung tại các trường ngôn ngữ ở Trung Quốc. Tại Việt Nam, cô đã giảng dạy tại nhiều trung tâm tiếng Trung uy tín và được học viên yêu mến nhờ phương pháp giảng dạy tận tâm, kiên nhẫn và luôn quan tâm đến tiến độ của từng học viên.

      Wang Li chuyên dạy tiếng Trung từ cơ bản đến nâng cao, luyện thi HSK các cấp độ, và tiếng Trung chuyên ngành thương mại. Cô đặc biệt giỏi trong việc giúp học viên phát âm chuẩn và hiểu sâu về chữ Hán.

      Ngoài giảng dạy, Wang Li còn tổ chức các hoạt động giao lưu văn hóa Trung Quốc, giúp học viên không chỉ học ngôn ngữ mà còn hiểu sâu về văn hóa, phong tục và lối sống của người Trung Quốc.
    `,
    education: "Cử nhân Ngôn ngữ học, Đại học Bắc Kinh",
    experience: "4 năm kinh nghiệm giảng dạy tiếng Trung",
    specialization: "HSK, Tiếng Trung giao tiếp, Tiếng Trung thương mại",
    achievements: [
      "Chứng chỉ giảng dạy tiếng Trung quốc tế",
      "Giảng viên được yêu thích nhất năm 2021 tại Language Center",
      "Tổ chức thành công hơn 10 sự kiện giao lưu văn hóa Trung-Việt",
      "Hướng dẫn hơn 50 học viên đạt chứng chỉ HSK các cấp độ",
    ],
    courseIds: [6, 13, 16],
    socialMedia: {
      facebook: "https://facebook.com/nguyenvanminh",
      linkedin: "https://linkedin.com/in/nguyenvanminh",
    },
    scheduleAvailability: [
      {
        day: "Thứ Hai, Thứ Năm",
        hours: "18:00 - 21:00",
      },
      {
        day: "Chủ Nhật",
        hours: "9:00 - 12:00",
      },
    ],
  },
  {
    id: 6,
    name: "David Wilson",
    slug: "david-wilson",
    position: "Giảng viên tiếng Anh",
    avatar: "/avatar/6.jpg?height=200&width=200",
    languages: ["Tiếng Anh"],
    bio: "Giảng viên người Mỹ với phong cách giảng dạy năng động và thân thiện",
    fullBio: `
      David Wilson là giảng viên tiếng Anh người Mỹ với 5 năm kinh nghiệm giảng dạy tiếng Anh tại Việt Nam. Anh tốt nghiệp Cử nhân Văn học Anh tại Đại học California và sở hữu chứng chỉ TEFL quốc tế.

      David nổi tiếng với phong cách giảng dạy năng động, thân thiện và luôn tạo không khí học tập thoải mái, khuyến khích học viên tự tin sử dụng tiếng Anh. Anh chuyên dạy tiếng Anh giao tiếp, phát âm và văn hóa Mỹ.

      Với kinh nghiệm sống và làm việc tại nhiều quốc gia, David không chỉ truyền đạt kiến thức ngôn ngữ mà còn chia sẻ hiểu biết sâu sắc về văn hóa và cách sử dụng tiếng Anh trong các bối cảnh khác nhau. Anh đặc biệt giỏi trong việc giúp học viên cải thiện phát âm và ngữ điệu tiếng Anh.

      Ngoài giảng dạy, David còn là người đam mê du lịch và khám phá văn hóa. Anh thường xuyên chia sẻ những trải nghiệm thú vị về các quốc gia đã đến thăm, giúp học viên mở rộng tầm nhìn và hiểu biết về thế giới.
    `,
    education: "Cử nhân Văn học Anh, Đại học California",
    experience: "5 năm kinh nghiệm giảng dạy tiếng Anh",
    specialization: "Phát âm, Tiếng Anh giao tiếp, Văn hóa Mỹ",
    achievements: [
      "Chứng chỉ TEFL quốc tế",
      "Giảng viên được yêu thích nhất năm 2020 tại Language Center",
      "Tổ chức thành công hơn 20 câu lạc bộ tiếng Anh",
      "Phát triển phương pháp cải thiện phát âm tiếng Anh cho người Việt",
    ],
    courseIds: [1, 2, 5, 9],
    socialMedia: {
      facebook: "https://facebook.com/nguyenvanminh",
      linkedin: "https://linkedin.com/in/nguyenvanminh",
    },
    scheduleAvailability: [
      {
        day: "Thứ Hai, Thứ Năm",
        hours: "18:00 - 21:00",
      },
      {
        day: "Chủ Nhật",
        hours: "9:00 - 12:00",
      },
    ],
  },
  {
    id: 7,
    name: "Nguyễn Thị Hồng Vân",
    slug: "9999",
    position: "Giảng viên đa ngôn ngữ",
    avatar: "/avatar/7.jpg?height=200&width=200",
    languages: ["Tiếng Anh", "Tiếng Nhật", "Tiếng Hàn", "Tiếng Trung"],
    bio: "Giảng viên đa ngôn ngữ với khả năng sử dụng thành thạo 4 ngôn ngữ",
    fullBio: `
      Nguyễn Thị Hồng Vân là giảng viên đa ngôn ngữ hiếm có với khả năng sử dụng thành thạo 4 ngôn ngữ: tiếng Anh, tiếng Nhật, tiếng Hàn và tiếng Trung. Cô tốt nghiệp Thạc sĩ Ngôn ngữ học so sánh tại Đại học Quốc gia Hà Nội và đã có 10 năm kinh nghiệm giảng dạy ngôn ngữ.

      Hương đã sống và học tập tại nhiều quốc gia như Mỹ, Nhật Bản, Hàn Quốc và Trung Quốc, giúp cô không chỉ thành thạo ngôn ngữ mà còn hiểu sâu về văn hóa của các quốc gia này. Điều này giúp cô có cái nhìn độc đáo và toàn diện khi giảng dạy ngôn ngữ.

      Cô chuyên dạy các khóa học so sánh ngôn ngữ, phương pháp học đa ngôn ngữ hiệu quả, và các khóa học chuyên sâu về văn hóa Đông Á. Hương nổi tiếng với phương pháp giảng dạy sáng tạo, kết hợp giữa lý thuyết ngôn ngữ học và ứng dụng thực tế.

      Ngoài giảng dạy, Hương còn là tác giả của nhiều bài viết và sách về phương pháp học đa ngôn ngữ và là diễn giả thường xuyên tại các hội thảo về giáo dục ngôn ngữ trong nước và quốc tế.
    `,
    education: "Thạc sĩ Ngôn ngữ học so sánh, Đại học Quốc gia Hà Nội",
    experience: "10 năm kinh nghiệm giảng dạy ngôn ngữ",
    specialization: "Phương pháp học đa ngôn ngữ, Văn hóa Đông Á",
    achievements: [
      "Chứng chỉ TESOL, JLPT N1, TOPIK 6, HSK 6",
      "Giảng viên xuất sắc năm 2019 tại Language Center",
      "Tác giả sách 'Phương pháp học đa ngôn ngữ hiệu quả'",
      "Phiên dịch viên cho nhiều sự kiện quốc tế lớn",
    ],
    courseIds: [3, 4, 6, 8, 11, 12, 13, 14, 15, 16],
    socialMedia: {
      facebook: "https://facebook.com/nguyenvanminh",
      linkedin: "https://linkedin.com/in/nguyenvanminh",
    },
    scheduleAvailability: [
      {
        day: "Thứ Hai, Thứ Năm",
        hours: "18:00 - 21:00",
      },
      {
        day: "Chủ Nhật",
        hours: "9:00 - 12:00",
      },
    ],
  },
];

// Dữ liệu blog
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 phương pháp học tiếng Anh hiệu quả cho người mới bắt đầu",
    slug: "5-phuong-phap-hoc-tieng-anh-hieu-qua-cho-nguoi-moi-bat-dau",
    excerpt:
      "Khám phá những phương pháp học tiếng Anh đơn giản nhưng hiệu quả dành cho người mới bắt đầu, giúp bạn tiến bộ nhanh chóng.",
    content: `
      # 5 phương pháp học tiếng Anh hiệu quả cho người mới bắt đầu

      Việc học một ngôn ngữ mới, đặc biệt là tiếng Anh, có thể là một thách thức lớn đối với nhiều người. Tuy nhiên, với phương pháp học tập đúng đắn và kiên trì, bạn hoàn toàn có thể đạt được mục tiêu của mình. Dưới đây là 5 phương pháp học tiếng Anh hiệu quả dành cho người mới bắt đầu:

      ## 1. Xây dựng nền tảng từ vựng cơ bản

      Từ vựng là nền tảng của mọi ngôn ngữ. Khi mới bắt đầu học tiếng Anh, hãy tập trung vào việc học các từ vựng cơ bản và thông dụng nhất. Bạn có thể bắt đầu với:

      - Các từ chỉ đồ vật xung quanh bạn hàng ngày
      - Các động từ thông dụng (go, come, eat, sleep, etc.)
      - Các tính từ mô tả cơ bản (big, small, good, bad, etc.)
      - Các từ chỉ số lượng và thời gian

      **Mẹo học từ vựng hiệu quả:**
      - Sử dụng flashcards (thẻ ghi nhớ)
      - Dán nhãn tiếng Anh cho các đồ vật trong nhà
      - Học từ vựng theo chủ đề
      - Sử dụng ứng dụng học từ vựng như Quizlet, Memrise, Duolingo

      ## 2. Luyện nghe mỗi ngày

      Kỹ năng nghe là một trong những kỹ năng quan trọng nhất khi học tiếng Anh. Việc luyện nghe thường xuyên sẽ giúp bạn làm quen với cách phát âm, ngữ điệu và tốc độ nói của người bản xứ.

      **Các nguồn tài liệu luyện nghe tốt cho người mới bắt đầu:**
      - Podcast dành cho người học tiếng Anh
      - Video YouTube có phụ đề song ngữ
      - Phim hoạt hình và phim dành cho trẻ em
      - Bài hát tiếng Anh đơn giản

      **Mẹo luyện nghe hiệu quả:**
      - Bắt đầu với nội dung đơn giản, tốc độ chậm
      - Sử dụng phụ đề khi cần thiết
      - Nghe đi nghe lại một đoạn ngắn nhiều lần
      - Cố gắng bắt chước cách phát âm và ngữ điệu

      ## 3. Học ngữ pháp qua ngữ cảnh

      Thay vì học thuộc lòng các quy tắc ngữ pháp khô khan, hãy học ngữ pháp thông qua ngữ cảnh thực tế. Điều này sẽ giúp bạn hiểu rõ hơn cách sử dụng ngữ pháp trong giao tiếp hàng ngày.

      **Cách học ngữ pháp hiệu quả:**
      - Đọc nhiều câu ví dụ sử dụng cấu trúc ngữ pháp đó
      - Tạo câu của riêng bạn sử dụng cấu trúc vừa học
      - Chú ý đến cách sử dụng ngữ pháp trong các bài đọc, bài nghe
      - Học các cụm từ thông dụng thay vì từng từ riêng lẻ

      ## 4. Thực hành nói mỗi ngày

      Đừng ngại nói tiếng Anh, ngay cả khi bạn mới bắt đầu học. Việc thực hành nói thường xuyên sẽ giúp bạn tự tin hơn và cải thiện kỹ năng giao tiếp nhanh chóng.

      **Cách thực hành nói hiệu quả:**
      - Tự nói chuyện với bản thân bằng tiếng Anh
      - Đọc to các văn bản tiếng Anh
      - Tham gia các câu lạc bộ tiếng Anh
      - Tìm bạn học cùng để luyện nói
      - Sử dụng các ứng dụng kết nối với người bản xứ như Tandem, HelloTalk

      ## 5. Học tiếng Anh mỗi ngày, nhưng đừng quá sức

      Sự kiên trì là chìa khóa để học thành công bất kỳ ngôn ngữ nào. Hãy dành thời gian học tiếng Anh mỗi ngày, nhưng đừng ép bản thân quá sức.

      **Lời khuyên cho việc học đều đặn:**
      - Đặt mục tiêu học tập thực tế và cụ thể
      - Tạo thói quen học tiếng Anh hàng ngày
      - Kết hợp học tập với sở thích cá nhân
      - Thưởng cho bản thân khi đạt được mục tiêu

      Học tiếng Anh là một hành trình dài, đòi hỏi sự kiên nhẫn và nỗ lực liên tục. Bằng cách áp dụng 5 phương pháp trên và duy trì động lực học tập, bạn sẽ dần thấy sự tiến bộ của mình trong việc sử dụng tiếng Anh.

      Hãy nhớ rằng, mỗi người có phong cách học tập khác nhau, vì vậy đừng ngại thử nghiệm và tìm ra phương pháp phù hợp nhất với bản thân. Chúc bạn thành công trên hành trình chinh phục tiếng Anh!
    `,
    image: "/blog/1.jpg?height=340&width=600",
    category: "Mẹo học",
    tags: [
      "tiếng anh",
      "người mới bắt đầu",
      "phương pháp học",
      "từ vựng",
      "ngữ pháp",
    ],
    date: "10/05/2023",
    author: {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/avatar/1.jpg?height=100&width=100",
      role: "Giảng viên tiếng Anh",
    },
    readTime: "8 phút",
    relatedPostIds: [7, 10, 15],
  },
  {
    id: 2,
    title: "Khai giảng khóa học IELTS mới với phương pháp đột phá",
    slug: "khai-giang-khoa-hoc-ielts-moi-voi-phuong-phap-dot-pha",
    excerpt:
      "Language Center chính thức khai giảng khóa học IELTS mới với phương pháp giảng dạy đột phá, cam kết đầu ra từ 6.5 trở lên.",
    content: `
      # Khai giảng khóa học IELTS mới với phương pháp đột phá

      Language Center vui mừng thông báo khai giảng khóa học IELTS Academic mới với phương pháp giảng dạy đột phá, cam kết đầu ra từ 6.5 trở lên. Khóa học được thiết kế đặc biệt để giúp học viên chinh phục kỳ thi IELTS một cách hiệu quả và toàn diện.

      ## Điểm nổi bật của khóa học

      ### Phương pháp giảng dạy đột phá

      Khóa học áp dụng phương pháp giảng dạy "IELTS Mastery System" - một phương pháp độc quyền được phát triển bởi đội ngũ giảng viên giàu kinh nghiệm của Language Center. Phương pháp này kết hợp giữa:

      - Phân tích chi tiết cấu trúc đề thi và tiêu chí chấm điểm
      - Chiến lược làm bài cụ thể cho từng dạng câu hỏi
      - Kỹ thuật quản lý thời gian hiệu quả
      - Phương pháp cải thiện từng kỹ năng có mục tiêu rõ ràng

      ### Đội ngũ giảng viên xuất sắc

      Khóa học được giảng dạy bởi đội ngũ giảng viên xuất sắc, bao gồm:

      - Giảng viên có chứng chỉ TESOL/CELTA
      - Giảng viên có kinh nghiệm làm giám khảo IELTS
      - Giảng viên có điểm IELTS từ 8.0 trở lên
      - Giảng viên có nhiều năm kinh nghiệm luyện thi IELTS

      ### Tài liệu học tập độc quyền

      Học viên sẽ được cung cấp bộ tài liệu học tập độc quyền, bao gồm:

      - Giáo trình "IELTS Mastery" được biên soạn riêng
      - Ngân hàng đề thi mô phỏng cập nhật theo cấu trúc đề thi mới nhất
      - Tài liệu bổ trợ cho từng kỹ năng
      - Ứng dụng học tập trực tuyến với nhiều bài tập tương tác

      ### Cam kết đầu ra

      Language Center cam kết học viên sẽ đạt điểm IELTS từ 6.5 trở lên sau khi hoàn thành khóa học, với điều kiện học viên tham gia đầy đủ các buổi học và hoàn thành bài tập được giao. Nếu không đạt được mức điểm cam kết, học viên sẽ được học lại miễn phí.

      ## Thông tin khóa học

      ### Thời gian và lịch học

      - Thời gian: 4 tháng (32 buổi)
      - Lịch học: 2 buổi/tuần, 120 phút/buổi
      - Các ca học:
        - Sáng: 9:00 - 11:00
        - Chiều: 14:00 - 16:00
        - Tối: 18:00 - 20:00

      ### Học phí và ưu đãi

      - Học phí: 8,500,000 VNĐ
      - Ưu đãi đặc biệt nhân dịp khai giảng:
        - Giảm 10% học phí cho 20 học viên đăng ký đầu tiên
        - Tặng 2 buổi thi thử IELTS có phản hồi chi tiết
        - Tặng khóa học "IELTS Writing Booster" trị giá 1,200,000 VNĐ

      ### Địa điểm học

      - Cơ sở 1: 123 Đường Nguyễn Văn Linh, Quận 7, TP. Hồ Chí Minh
      - Cơ sở 2: 456 Đường Lê Văn Sỹ, Quận 3, TP. Hồ Chí Minh

      ## Lịch khai giảng

      - Lớp sáng: 15/06/2023
      - Lớp chiều: 16/06/2023
      - Lớp tối: 17/06/2023

      ## Đăng ký và tư vấn

      Để đăng ký khóa học hoặc nhận tư vấn chi tiết, vui lòng liên hệ:

      - Hotline: 090 123 4567
      - Email: info@languagecenter.com
      - Website: www.languagecenter.com
      - Đăng ký trực tuyến: [Đăng ký ngay](https://www.languagecenter.com/register)

      Đừng bỏ lỡ cơ hội nâng cao trình độ tiếng Anh và chinh phục IELTS với phương pháp đột phá cùng Language Center!
    `,
    image: "/blog/2.jpg?height=340&width=600",
    category: "Tin tức",
    tags: ["IELTS", "khóa học mới", "phương pháp giảng dạy", "cam kết đầu ra"],
    date: "05/05/2023",
    author: {
      id: 0,
      name: "Admin",
      avatar: "/avatar/7.jpg?height=100&width=100",
      role: "Quản trị viên",
    },
    readTime: "5 phút",
    relatedPostIds: [7, 10, 15],
  },
  {
    id: 3,
    title: "Khám phá văn hóa Nhật Bản qua lễ hội mùa hè",
    slug: "kham-pha-van-hoa-nhat-ban-qua-le-hoi-mua-he",
    excerpt:
      "Tìm hiểu về các lễ hội mùa hè đặc sắc của Nhật Bản, một phần không thể thiếu trong văn hóa truyền thống của đất nước mặt trời mọc.",
    content: `
      # Khám phá văn hóa Nhật Bản qua lễ hội mùa hè

      Mùa hè ở Nhật Bản không chỉ là thời điểm của nắng nóng và ve kêu, mà còn là mùa của những lễ hội truyền thống đầy màu sắc và ý nghĩa. Các lễ hội mùa hè (Natsu Matsuri) là một phần không thể thiếu trong văn hóa Nhật Bản, thu hút hàng triệu người dân địa phương và du khách quốc tế mỗi năm.

      ## Nguồn gốc của lễ hội mùa hè Nhật Bản

      Lễ hội mùa hè ở Nhật Bản có nguồn gốc từ nghi lễ Obon - thời điểm người Nhật tin rằng linh hồn tổ tiên sẽ trở về thăm người thân. Ngoài ra, các lễ hội mùa hè còn có mục đích cầu mưa thuận gió hòa, mùa màng bội thu và xua đuổi tà ma.

      Theo thời gian, các lễ hội này đã phát triển thành những sự kiện văn hóa lớn, kết hợp giữa tín ngưỡng tôn giáo và hoạt động giải trí cộng đồng.

      ## Những lễ hội mùa hè nổi tiếng ở Nhật Bản

      ### 1. Gion Matsuri (Kyoto)

      Gion Matsuri là một trong ba lễ hội lớn nhất Nhật Bản, diễn ra trong suốt tháng 7 tại Kyoto. Điểm nhấn của lễ hội là cuộc diễu hành Yamaboko Junko với 32 cỗ xe được trang trí lộng lẫy, một số có chiều cao lên đến 25 mét.

      Lễ hội này có lịch sử hơn 1100 năm, bắt đầu từ năm 869 như một nghi lễ cầu xin chấm dứt dịch bệnh. Ngày nay, Gion Matsuri không chỉ là một sự kiện tôn giáo mà còn là một lễ hội văn hóa lớn, thu hút hàng triệu du khách mỗi năm.

      ### 2. Nebuta Matsuri (Aomori)

      Nebuta Matsuri diễn ra từ ngày 2 đến 7 tháng 8 tại thành phố Aomori. Lễ hội nổi tiếng với những chiếc đèn lồng khổng lồ (nebuta) hình các nhân vật trong lịch sử và thần thoại Nhật Bản.

      Mỗi tối, các đèn lồng nebuta được diễu hành qua các đường phố, đi kèm với tiếng trống taiko, sáo và tiếng hô "Rassera, rassera!" của hàng nghìn vũ công haneto nhảy múa xung quanh.

      ### 3. Tanabata Matsuri (Sendai)

      Tanabata (Lễ hội Thất tịch) được tổ chức vào ngày 7 tháng 7 theo lịch âm, nhưng ở Sendai, lễ hội này diễn ra từ ngày 6 đến 8 tháng 8.

      Lễ hội dựa trên truyền thuyết về hai vì sao Ngưu Lang và Chức Nữ chỉ được gặp nhau một lần mỗi năm. Trong lễ hội, người dân trang trí những dải giấy màu sắc (tanzaku) với điều ước và treo lên cành tre.

      Sendai Tanabata được biết đến là lễ hội Tanabata lớn nhất Nhật Bản, với hàng nghìn trang trí giấy rực rỡ treo dọc các đường phố chính.

      ### 4. Awa Odori (Tokushima)

      Awa Odori là một phần của lễ hội Obon, diễn ra từ ngày 12 đến 15 tháng 8 tại Tokushima. Đây là một trong những lễ hội múa lớn nhất Nhật Bản, với hơn 1.3 triệu du khách mỗi năm.

      Trong lễ hội, hàng nghìn vũ công chia thành nhiều nhóm (ren) diễu hành qua các đường phố, biểu diễn điệu múa truyền thống Awa với trang phục đặc trưng và âm nhạc sôi động.

      Câu nói nổi tiếng của lễ hội là: "Người nhảy là người ngu, người xem cũng là người ngu, nếu tất cả đều là người ngu, thì hãy cùng nhảy múa!"

      ## Trải nghiệm lễ hội mùa hè Nhật Bản

      ### Trang phục truyền thống

      Trong các lễ hội mùa hè, người Nhật thường mặc yukata - một loại kimono làm từ vải cotton nhẹ, phù hợp với thời tiết nóng ẩm. Nam giới thường mặc yukata màu tối với họa tiết đơn giản, trong khi nữ giới chọn yukata nhiều màu sắc với họa tiết hoa, bướm hoặc sóng nước.

      Để hoàn thiện bộ trang phục, yukata được mặc kèm với obi (đai lưng), geta (guốc gỗ) và kinchaku (túi nhỏ).

      ### Ẩm thực lễ hội

      Một phần không thể thiếu của lễ hội mùa hè là các gian hàng thức ăn (yatai) bán đủ loại món ăn đường phố Nhật Bản:

      - Takoyaki: Bánh bạch tuộc viên
      - Yakisoba: Mì xào
      - Okonomiyaki: Bánh xèo Nhật Bản
      - Kakigori: Đá bào với si-rô
      - Taiyaki: Bánh cá nhân đậu đỏ
      - Ringo ame: Táo tẩm caramel

      ### Trò chơi dân gian

      Các lễ hội cũng có nhiều gian hàng trò chơi dân gian như:

      - Kingyo-sukui: Vớt cá vàng bằng vợt giấy
      - Yo-yo tsuri: Câu bóng nước
      - Shateki: Bắn súng
      - Wanage: Ném vòng

      ## Ý nghĩa văn hóa và xã hội

      Lễ hội mùa hè không chỉ là dịp vui chơi giải trí mà còn mang nhiều ý nghĩa văn hóa và xã hội sâu sắc:

      - Gắn kết cộng đồng: Lễ hội là dịp để người dân địa phương cùng nhau chuẩn bị, tổ chức và tham gia, tăng cường tinh thần đoàn kết cộng đồng.
      - Bảo tồn văn hóa: Các lễ hội giúp bảo tồn và truyền bá nghệ thuật truyền thống, âm nhạc, múa và thủ công mỹ nghệ.
      - Tôn vinh tổ tiên: Nhiều lễ hội gắn liền với việc tưởng nhớ và tôn vinh tổ tiên, thể hiện đạo hiếu của người Nhật.
      - Cầu may: Lễ hội là dịp để người dân cầu mong sức khỏe, bình an và thịnh vượng.

      ## Kết luận

      Lễ hội mùa hè Nhật Bản là một cửa sổ tuyệt vời để khám phá văn hóa truyền thống của đất nước mặt trời mọc. Qua những lễ hội này, chúng ta có thể hiểu thêm về lịch sử, tín ngưỡng, nghệ thuật và tinh thần cộng đồng của người Nhật.

      Nếu bạn có cơ hội đến Nhật Bản vào mùa hè, đừng bỏ lỡ cơ hội tham gia các lễ hội này để có những trải nghiệm văn hóa đáng nhớ và độc đáo.
    `,
    image: "/blog/3.jpg?height=340&width=600",
    category: "Văn hóa",
    tags: ["Nhật Bản", "lễ hội", "văn hóa", "mùa hè", "truyền thống"],
    date: "01/05/2023",
    author: {
      id: 2,
      name: "Tanaka Yuki",
      avatar: "/avatar/2.jpg?height=100&width=100",
      role: "Giảng viên tiếng Nhật",
    },
    readTime: "10 phút",
    relatedPostIds: [8, 12, 16],
  },
  {
    id: 4,
    title: "Sự kiện giao lưu văn hóa Hàn Quốc tại Language Center",
    slug: "su-kien-giao-luu-van-hoa-han-quoc-tai-language-center",
    excerpt:
      "Language Center tổ chức sự kiện giao lưu văn hóa Hàn Quốc với nhiều hoạt động thú vị như thử hanbok, ẩm thực và âm nhạc K-pop.",
    content: `
      # Sự kiện giao lưu văn hóa Hàn Quốc tại Language Center

      Language Center vui mừng thông báo về sự kiện giao lưu văn hóa Hàn Quốc sắp tới, hứa hẹn mang đến cho học viên và khách tham dự những trải nghiệm thú vị và đa dạng về văn hóa xứ sở kim chi.

      ## Thời gian và địa điểm

      - **Thời gian:** Chủ nhật, ngày 28/05/2023, 9:00 - 17:00
      - **Địa điểm:** Language Center - 123 Đường Nguyễn Văn Linh, Quận 7, TP. Hồ Chí Minh
      - **Đối tượng tham dự:** Học viên Language Center và khách mời
      - **Phí tham dự:** Miễn phí cho học viên, 50.000 VNĐ cho khách mời (bao gồm bữa trưa nhẹ)

      ## Các hoạt động chính

      ### 1. Trải nghiệm trang phục truyền thống Hanbok

      Khám phá vẻ đẹp của trang phục truyền thống Hàn Quốc với góc thử Hanbok đầy màu sắc. Các bạn sẽ được:
      - Thử mặc các bộ Hanbok đa dạng về màu sắc và kiểu dáng
      - Chụp ảnh lưu niệm với phông nền cung điện Hàn Quốc
      - Tìm hiểu về lịch sử và ý nghĩa của trang phục Hanbok

      ### 2. Ẩm thực Hàn Quốc

      Thưởng thức hương vị đặc trưng của ẩm thực Hàn Quốc với:
      - Workshop làm Kimbap (cơm cuộn Hàn Quốc)
      - Quầy thử món ăn Hàn Quốc phổ biến như Tteokbokki (bánh gạo cay), Japchae (miến xào), Kimchi
      - Giới thiệu về văn hóa ẩm thực Hàn Quốc

      ### 3. K-pop Dance Workshop

      Hòa mình vào không khí sôi động của K-pop với:
      - Lớp học nhảy K-pop cơ bản với các vũ đạo hit
      - Mini K-pop Dance Cover Contest với giải thưởng hấp dẫn
      - Góc chụp ảnh theo phong cách idol K-pop

      ### 4. Trò chơi dân gian Hàn Quốc

      Khám phá các trò chơi truyền thống của Hàn Quốc:
      - Tuho (ném tên)
      - Jegichagi (đá cầu)
      - Yutnori (trò chơi bốn que)

      ### 5. Workshop thư pháp và nghệ thuật Hàn Quốc

      Trải nghiệm nghệ thuật truyền thống Hàn Quốc:
      - Học viết tên bằng chữ Hangul
      - Làm thiệp giấy Hanji
      - Vẽ tranh Minhwa đơn giản

      ### 6. Góc học tiếng Hàn

      Cơ hội học tiếng Hàn cơ bản với:
      - Lớp học tiếng Hàn cấp tốc (30 phút)
      - Trò chơi học từ vựng tiếng Hàn
      - Tư vấn về lộ trình học tiếng Hàn

      ## Lịch trình chi tiết

      **Buổi sáng:**
      - 9:00 - 9:30: Đón tiếp khách tham dự
      - 9:30 - 10:00: Khai mạc sự kiện, giới thiệu về văn hóa Hàn Quốc
      - 10:00 - 12:00: Các hoạt động trải nghiệm (Hanbok, ẩm thực, trò chơi dân gian)

      **Buổi trưa:**
      - 12:00 - 13:30: Nghỉ trưa, thưởng thức bữa trưa nhẹ theo phong cách Hàn Quốc

      **Buổi chiều:**
      - 13:30 - 15:00: K-pop Dance Workshop và Mini Contest
      - 15:00 - 16:30: Workshop thư pháp và nghệ thuật, góc học tiếng Hàn
      - 16:30 - 17:00: Bế mạc sự kiện, trao giải và chụp ảnh lưu niệm

      ## Khách mời đặc biệt

      - **Kim Min Ji:** Giảng viên tiếng Hàn tại Language Center, người Hàn Quốc
      - **Park Ji Hoon:** Đầu bếp chuyên về ẩm thực Hàn Quốc
      - **Lee Soo Jin:** Vũ công K-pop chuyên nghiệp

      ## Đăng ký tham dự

      Để đảm bảo chất lượng sự kiện, số lượng người tham dự sẽ được giới hạn. Vui lòng đăng ký trước ngày 25/05/2023 qua:

      - Đăng ký trực tuyến: [www.languagecenter.com/korean-culture-day](https://www.languagecenter.com/korean-culture-day)
      - Email: events@languagecenter.com
      - Điện thoại: 090 123 4567
      - Trực tiếp tại văn phòng Language Center

      ## Ưu đãi đặc biệt

      Nhân dịp sự kiện, Language Center dành tặng các ưu đãi đặc biệt:

      - Giảm 15% học phí cho khóa học tiếng Hàn khi đăng ký trong ngày sự kiện
      - Tặng 1 buổi học th
    `,
    image: "/blog/4.jpg?height=340&width=600",
    category: "Sự kiện",
    tags: ["Hàn Quốc", "văn hóa", "giao lưu", "K-pop", "ẩm thực"],
    date: "28/04/2023",
    author: {
      id: 3,
      name: "Kim Min Ji",
      avatar: "/avatar/4.jpg?height=100&width=100",
      role: "Giảng viên tiếng Hàn",
    },
    readTime: "7 phút",
    relatedPostIds: [3, 8, 12],
  },
  {
    id: 5,
    title: "Làm thế nào để vượt qua kỳ thi TOEIC với điểm số cao?",
    slug: "lam-the-nao-de-vuot-qua-ky-thi-toeic-voi-diem-so-cao",
    excerpt:
      "Những bí quyết và chiến lược làm bài thi TOEIC hiệu quả, giúp bạn đạt được điểm số cao trong kỳ thi sắp tới.",
    content: `
      # Làm thế nào để vượt qua kỳ thi TOEIC với điểm số cao?

      Kỳ thi TOEIC (Test of English for International Communication) là một bài kiểm tra đánh giá khả năng sử dụng tiếng Anh trong môi trường làm việc quốc tế. Điểm số TOEIC cao là một lợi thế lớn trong sự nghiệp, giúp bạn có cơ hội làm việc tại các công ty đa quốc gia hoặc thăng tiến trong công việc hiện tại.

      Vậy làm thế nào để vượt qua kỳ thi TOEIC với điểm số cao? Dưới đây là những bí quyết và chiến lược làm bài thi hiệu quả:

      ## 1. Nắm vững cấu trúc bài thi

      Trước khi bắt đầu luyện thi, bạn cần hiểu rõ cấu trúc bài thi TOEIC, bao gồm:

      - **Phần 1: Listening (Nghe hiểu)**
        - Part 1: Photographs (6 câu)
        - Part 2: Question-Response (25 câu)
        - Part 3: Conversations (39 câu)
        - Part 4: Talks (30 câu)
      - **Phần 2: Reading (Đọc hiểu)**
        - Part 5: Incomplete Sentences (30 câu)
        - Part 6: Text Completion (16 câu)
        - Part 7: Single Passages (29 câu)
        - Part 7: Multiple Passages (25 câu)

      Tổng thời gian làm bài là 2 tiếng (45 phút cho Listening và 75 phút cho Reading).

      ## 2. Xây dựng vốn từ vựng thương mại

      TOEIC là bài kiểm tra tiếng Anh trong môi trường làm việc, vì vậy bạn cần xây dựng vốn từ vựng liên quan đến các chủ đề như:

      - Kinh doanh
      - Tài chính
      - Marketing
      - Nhân sự
      - Sản xuất
      - Vận chuyển
      - Du lịch

      **Mẹo học từ vựng TOEIC hiệu quả:**
      - Học từ vựng theo chủ đề
      - Sử dụng flashcards hoặc ứng dụng học từ vựng
      - Đọc các bài báo, tạp chí về kinh doanh bằng tiếng Anh
      - Xem phim, video về kinh doanh có phụ đề tiếng Anh

      ## 3. Luyện nghe thường xuyên

      Kỹ năng nghe là một trong những kỹ năng quan trọng nhất trong kỳ thi TOEIC. Để cải thiện kỹ năng này, bạn cần luyện nghe thường xuyên với các nguồn tài liệu đa dạng:

      - Các bài luyện nghe TOEIC trên internet
      - Podcast về kinh doanh bằng tiếng Anh
      - Phim, video về kinh doanh có phụ đề tiếng Anh
      - Các bài giảng, hội thảo trực tuyến bằng tiếng Anh

      **Mẹo luyện nghe TOEIC hiệu quả:**
      - Nghe đi nghe lại một đoạn ngắn nhiều lần
      - Ghi chú lại các từ khóa, thông tin quan trọng
      - Tập trung vào ý chính thay vì từng từ riêng lẻ
      - Luyện nghe với nhiều giọng đọc khác nhau

      ## 4. Luyện đọc hiểu nhanh

      Phần Reading trong kỳ thi TOEIC đòi hỏi bạn phải đọc hiểu nhanh và chính xác các đoạn văn, email, báo cáo. Để cải thiện kỹ năng này, bạn cần:

      - Đọc nhiều tài liệu tiếng Anh về các chủ đề khác nhau
      - Luyện tập các kỹ năng đọc lướt (skimming) và đọc quét (scanning)
      - Học cách nhận biết các từ khóa, thông tin quan trọng
      - Luyện tập làm bài thi thử để làm quen với áp lực thời gian

      ## 5. Làm bài thi thử thường xuyên

      Làm bài thi thử là một phần không thể thiếu trong quá trình luyện thi TOEIC. Việc này giúp bạn:

      - Làm quen với cấu trúc bài thi và các dạng câu hỏi
      - Đánh giá trình độ hiện tại của bản thân
      - Nhận biết điểm mạnh, điểm yếu để có kế hoạch ôn tập phù hợp
      - Làm quen với áp lực thời gian và tâm lý phòng thi

      Bạn có thể tìm các bài thi thử TOEIC trên internet hoặc tham gia các khóa luyện thi TOEIC tại các trung tâm uy tín.

      ## 6. Quản lý thời gian hiệu quả

      Quản lý thời gian là một yếu tố quan trọng để đạt điểm cao trong kỳ thi TOEIC. Bạn cần phân bổ thời gian hợp lý cho từng phần thi và từng câu hỏi.

      **Mẹo quản lý thời gian TOEIC hiệu quả:**
      - Đặt mục tiêu thời gian cho từng phần thi
      - Luyện tập làm bài thi thử với thời gian giới hạn
      - Bỏ qua các câu hỏi khó và quay lại sau
      - Sử dụng đồng hồ để theo dõi thời gian

      ## 7. Giữ tâm lý thoải mái

      Tâm lý thoải mái, tự tin là một yếu tố quan trọng để bạn làm bài thi tốt nhất. Hãy ngủ đủ giấc, ăn uống đầy đủ và thư giãn trước ngày thi.

      Trong quá trình làm bài, hãy giữ bình tĩnh, tập trung và tự tin vào khả năng của mình. Nếu gặp câu hỏi khó, hãy bỏ qua và quay lại sau.

      ## Kết luận

      Vượt qua kỳ thi TOEIC với điểm số cao không phải là điều quá khó khăn nếu bạn có phương pháp học tập đúng đắn, kế hoạch ôn tập
    `,
    image: "/blog/5.jpg?height=340&width=600",
    category: "Sự kiện",
    tags: ["Hàn Quốc", "văn hóa", "giao lưu", "K-pop", "ẩm thực"],
    date: "28/04/2023",
    author: {
      id: 3,
      name: "Kim Min Ji",
      avatar: "/avatar/3.jpg?height=100&width=100",
      role: "Giảng viên tiếng Hàn",
    },
    readTime: "7 phút",
    relatedPostIds: [3, 8, 12],
  },
];
