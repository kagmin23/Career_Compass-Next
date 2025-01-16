import {
  BarChartOutlined,
  CompassOutlined,
  HeartOutlined,
  StarOutlined,
  ToolOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Card, List } from "antd";
import React from "react";

const features = [
  {
    icon: <CompassOutlined className="text-4xl text-blue-500" />,
    title: "Ikigai",
    description:
      "Khám phá sự cân bằng giữa đam mê, năng lực, và nhu cầu xã hội",
    image: "https://st.quantrimang.com/photos/image/2021/12/20/Ikigai-1.jpg",
  },
  {
    icon: <UserOutlined className="text-4xl text-green-500" />,
    title: "MBTI",
    description: "Hiểu rõ tính cách của bạn và nghề nghiệp phù hợp",
    image:
      "https://images.careerviet.vn/content/images/mbti-la-gi-careerbuilder-3(1).jpeg",
  },
  {
    icon: <StarOutlined className="text-4xl text-yellow-500" />,
    title: "RIASEC",
    description: "Xác định sở thích và môi trường làm việc lý tưởng",
    image:
      "https://huongnghiepaau.edu.vn/wp-content/uploads/2022/02/mat-ma-holland.jpg",
  },
  {
    icon: <BarChartOutlined className="text-4xl text-purple-500" />,
    title: "StrengthsFinder",
    description: "Khám phá điểm mạnh độc đáo của bạn",
    image:
      "https://media.licdn.com/dms/image/v2/C4E12AQEKZVXSG9iGuA/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1520153262403?e=1740009600&v=beta&t=3as_XEjhgHSME08EuAWq3ZX8dC_gNvSZ3Am1SYwQ0FE",
  },
  {
    icon: <HeartOutlined className="text-4xl text-red-500" />,
    title: "VIA Character",
    description: "Tìm hiểu các đặc điểm tính cách nổi bật",
    image:
      "https://trangtamly.blog/wp-content/uploads/2024/06/viatescover.jpg?w=800",
  },
  {
    icon: <ToolOutlined className="text-4xl text-orange-500" />,
    title: "Skills Assessment",
    description: "Đánh giá kỹ năng và năng lực hiện tại",
    image:
      "https://aztraining.vn/wp-content/uploads/2023/03/AZ-CAREERS-TRAINING-TIPS-SKILLS-ASSESSMENT.jpg",
  },
];

const universities = [
  {
    name: "Đại học Quốc gia Hà Nội",
    description: "Trường đại học hàng đầu tại Việt Nam",
    link: "https://www.vnu.edu.vn/",
    image: "https://nld.mediacdn.vn/thumb_w/698/291774122806476800/2021/6/24/dai-hoc-quoc-gia-ha-noi-16245272074411375515487.jpeg", // Hình ảnh của trường
  },
  {
    name: "Đại học Bách Khoa Hà Nội",
    description: "Một trong những trường kỹ thuật danh tiếng tại Việt Nam",
    link: "https://www.hust.edu.vn/",
    image: "https://xdcs.cdnchinhphu.vn/446259493575335936/2023/2/11/bk-16760843813451594096492.jpg", // Hình ảnh của trường
  },
  {
    name: "Đại học Kinh tế Quốc dân",
    description: "Trường đại học đào tạo về kinh tế, quản trị, và tài chính",
    link: "https://www.neu.edu.vn/",
    image: "https://bcp.cdnchinhphu.vn/334894974524682240/2024/11/15/dh-xay-dung-ha-noi-kinh-te-quo-4461-7877-1689005637-1731659968683120651076.jpg", // Hình ảnh của trường
  },
  {
    name: "Đại học Sư phạm Hà Nội",
    description: "Trường đào tạo giáo viên hàng đầu tại Việt Nam",
    link: "https://www.hnue.edu.vn/",
    image: "https://xdcs.cdnchinhphu.vn/446259493575335936/2023/8/22/dh-su-pham-ha-noi-1481-1692709887791956255481.jpg", // Hình ảnh của trường
  },
];

const events = [
  {
    name: "Chương trình tư vấn tuyển sinh - hướng nghiệp 2025 ",
    description:
      "Mới đây, vào cuối tháng 11-2024, dự thảo thông tư quy chế tuyển sinh đại học 2025 của Bộ GD-ĐT thu hút nhiều ý kiến của các trường đại học và dư luận. Một điểm đáng lưu ý trong dự thảo là Bộ GD-ĐT quy định cơ sở đào tạo có..",
    link: "https://tuoitre.vn/cong-bo-chuong-trinh-tu-van-tuyen-sinh-huong-nghiep-2025-voi-nhieu-noi-dung-moi-20241223081928873.htm",
  },
  {
    name: "VNU-USSH khởi động mùa tuyển sinh CĐ-ĐH 2025",
    description:
      "Trong hai ngày 11-12/1/2025, đoàn Tư vấn tuyển sinh của Trường Đại học Khoa học Xã hội và Nhân văn do Phó Hiệu trưởng, PGS.TS. Đặng Thị Thu Hương làm trưởng đoàn đã làm việc tại chuỗi sự kiện Tư vấn tuyển sinh – Hướng nghiệp năm 2025 tại Nghệ An và Thanh Hóa..",
    link: "https://ussh.vnu.edu.vn/vi/news/dao-tao/ussh-khoi-dong-mua-tuyen-sinh-cd-dh-2025-them-nhieu-co-hoi-lua-chon-nganh-hoc-23118.html#:~:text=ch%E1%BB%8Dn%20ng%C3%A0nh%20h%E1%BB%8Dc-,VNU%2DUSSH%20kh%E1%BB%9Fi%20%C4%91%E1%BB%99ng%20m%C3%B9a%20tuy%E1%BB%83n%20sinh%20C%C4%90%2D%C4%90H%202025,h%E1%BB%99i%20l%E1%BB%B1a%20ch%E1%BB%8Dn%20ng%C3%A0nh%20h%E1%BB%8Dc&text=Trong%20hai%20ng%C3%A0y%2011%2D12,Hi%E1%BB%87u%20tr%C6%B0%E1%BB%9Fng%2C%20PGS.TS.",
  },
  {
    name: "Săn học bổng trường ĐH FPT",
    description:
      "Chương trình tuyển sinh với mức học bổng hấp dẫn. Đăng ký tư vấn tuyển sinh trực tuyến. Nhà trường sẽ chủ động liên hệ với bạn trong vòng 24h làm việc kể từ khi đăng ký thành công để tư vấn cho bạn những thông tin chính xác, cập nhật nhất về Trường Đại Học FPT..",
    link: "https://daihoc.fpt.edu.vn/dang-ky-truc-tuyen/?utm_source=GGM&utm_medium=GGM_25HB&utm_campaign=XT&gad_source=1&gclid=Cj0KCQiA1p28BhCBARIsADP9HrPYUXPGcYc6bvWN0mI2cqvBbG4ByYBDvhMiUc9glhdmqZJNbGxcsDMaAi3fEALw_wcB",
  },
  {
    name: "Ngày hội tư vấn hướng nghiệp, xét tuyển Đại học - Cao đẳng năm 2025: “Cùng bạn quyết định tương lai”",
    description:
      "Vào ngày 05/01/2025 vừa qua, ngày hội “Tư vấn hướng nghiệp, xét tuyển Đại học – Cao đẳng năm 2025: Cùng bạn quyết định tương lai” do Tạp chí Giáo dục Tp. HCM tổ chức tại khuôn viên Trường Đại học Sư phạm Kỹ thuật Tp. HCM với sự góp mặt của hơn 40 trường đại học – cao đẳng trên địa bàn Tp. HCM và các tỉnh lân cận..",
    link: "https://ts.hcmulaw.edu.vn/hoat-dong-tu-van-tuyen-sinh/ngay-hoi-tu-van-huong-nghiep-xet-tuyen-dai-hoc-cao-dang-nam-2025-cung-ban-quyet-dinh-tuong-lai-541.html",
  },
];

const FeatureSection: React.FC = () => {
  return (
    <div>
      <section
        style={{
          paddingTop: "1rem",
          paddingBottom: "1rem",
          backgroundColor: "#f8fafc",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            Phương pháp hướng nghiệp
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {features.map((feature, index) => (
              <Card
                key={index}
                style={{
                  transition: "box-shadow 0.3s",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                }}
                hoverable
              >
                <div style={{ textAlign: "center", position: "relative" }}>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    style={{
                      width: "100%",
                      height: "10rem",
                      objectFit: "cover",
                      marginBottom: "1rem",
                      borderRadius: "0.375rem",
                    }}
                  />
                  <div>{feature.icon}</div>
                  <h3
                    style={{
                      marginTop: "1rem",
                      marginBottom: "0.5rem",
                      fontSize: "1.25rem",
                      fontWeight: "600",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p style={{ color: "#4b5563" }}>{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "3rem",
            }}
          >
            Sự Kiện Giáo Dục
          </h2>
          <div
            style={{
              justifyContent: "space-between",
            }}
          >
            <div style={{}}>
              {events.map((event, index) => (
                <List
                  key={index}
                  style={{
                    padding: "1rem",
                    textAlign: "start",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "1px solid #ddd", // Thêm viền ngoài
                    borderRadius: "8px", // Bo góc khung
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Thêm bóng cho khung
                    backgroundColor: "#fff", // Màu nền của khung
                    marginBottom: "1rem", // Khoảng cách giữa các List items
                  }}
                >
                  <div>
                    <h3>{event.name}</h3>
                    <p>{event.description}</p>
                  </div>
                  <Button type="link" href={event.link} target="_blank">
                    Xem thêm...
                  </Button>
                </List>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div
        style={{
          padding: 50,
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Trường Đại Học
        </h2>
        <div
          style={{
            display: "flex",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "2rem",
          }}
        >
          {universities.map((university, index) => (
            <Card key={index} style={{ padding: "1rem", textAlign: "center" }}>
              <div
                style={{
                  marginBottom: "1rem",
                  borderRadius: "50%",
                  overflow: "hidden",
                  width: "80px",
                  height: "80px",
                  margin: "0 auto",
                }}
              >
                <img
                  src={university.image}
                  alt={university.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <h3>{university.name}</h3>
              <p>{university.description}</p>
              <Button type="link" href={university.link} target="_blank">
                Xem trang web
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
