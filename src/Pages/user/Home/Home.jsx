import React from "react";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import images from "@/assets/images";
import Banner from "@/components/Banner/Banner";
import Card from "@/components/Card/Card";


const cx = classNames.bind(styles);
const Home = () => {

  const jobs = [
    {
      id: 1,
      name: "Gia sư Toán lớp 9",
      jobType: "Part-time",
      jobCategory: "Giáo dục",
      Location: "Hà Nội",
      Salary: "8.000.000",
      Description: "Tìm gia sư Toán cho học sinh lớp 9.",
    },
    {
      id: 2,
      name: "Nhân viên phục vụ quán cafe",
      jobType: "Full-time",
      jobCategory: "Dịch vụ",
      Location: "TP. Hồ Chí Minh",
      Salary: "6.000.000",
      Description: "Cần nhân viên phục vụ nhanh nhẹn, chăm chỉ.",
    },
    {
      id: 3,
      name: "Lập trình viên ReactJS",
      jobType: "Intern",
      jobCategory: "Công nghệ",
      Location: "Đà Nẵng",
      Salary: "Thỏa thuận",
      Description: "Tham gia dự án phát triển website thương mại điện tử.",
    },
    {
      id: 4,
      name: "Gia sư Tiếng Anh lớp 8",
      jobType: "Part-time",
      jobCategory: "Giáo dục",
      Location: "Hà Nội",
      Salary: "10.000.000",
      Description: "Cần tìm gia sư dạy tiếng Anh lớp 8 cho học sinh.",
    },
    {
      id: 5,
      name: "Cộng tác viên Content",
      jobType: "Freelance",
      jobCategory: "Marketing",
      Location: "Remote",
      Salary: "200.000/bài",
      Description: "Viết bài chuẩn SEO cho website.",
    },
  ];

  return (
    <div className={cx("home-wrapper")}>
      <Banner />
        <div className={cx("home-container")}>
          <div className={cx("home-header")}>
          <h2>Danh sách công việc</h2>
          <h4>Lựa chọn những doanh nghiệp uy tín hàng đầu</h4>
          </div>
          <div className={cx("job-list")}>
            {jobs.map((job) => (
              <Card key={job.id} job={job} />
            ))}
          </div>
        </div>
    </div>
  );
}

export default Home;