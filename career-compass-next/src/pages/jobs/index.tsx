import React from "react";
import Header from "../../components/layout/header";

const Jobs: React.FC = () => {
  return (
    <div
      style={{
        paddingTop: "6rem", // Thêm padding-top cho khoảng cách giữa header và nội dung
        paddingBottom: "4rem", // Thêm padding-bottom cho phần đuôi>
      }}
    >
      <Header />
      List Jobs
    </div>
  );
};
export default Jobs;
