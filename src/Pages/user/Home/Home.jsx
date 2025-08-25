import React from "react";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import { getJobs } from "@/Services/JobService/JobService.js";
import Banner from "@/components/Banner/Banner";
import Card from "@/components/Card/Card";
import { useNavigate } from "react-router-dom";
import config from "@/config";  
import { useState, useEffect } from "react";

const cx = classNames.bind(styles);


const Home = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
      const res = await getJobs(); // có thể truyền filter
        setJobs(res);
        console.log(res);
      } catch (error) {
        console.error("Lỗi fetch jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <p>Đang tải dữ liệu...</p>;

  // const jobs = [
  //   {
  //     id: 1,
  //     name: "Gia sư Toán lớp 9",
  //     jobType: "Part-time",
  //     jobCategory: "Giáo dục",
  //     location: "Hà Nội",
  //     salary: "8.000.000",
  //     description: "Tìm gia sư Toán cho học sinh lớp 9.",
  //   },
  //   {
  //     id: 2,
  //     name: "Nhân viên phục vụ quán cafe",
  //     jobType: "Full-time",
  //     jobCategory: "Dịch vụ",
  //     location: "TP. Hồ Chí Minh",
  //     salary: "6.000.000",
  //     description: "Cần nhân viên phục vụ nhanh nhẹn, chăm chỉ.",
  //   },
  //   {
  //     id: 3,
  //     name: "Lập trình viên ReactJS",
  //     jobType: "Intern",
  //     jobCategory: "Công nghệ",
  //     location: "Đà Nẵng",
  //     salary: "Thỏa thuận",
  //     description: "Tham gia dự án phát triển website thương mại điện tử.",
  //   },
  //   {
  //     id: 4,
  //     name: "Gia sư Tiếng Anh lớp 8",
  //     jobType: "Part-time",
  //     jobCategory: "Giáo dục",
  //     location: "Hà Nội",
  //     salary: "10.000.000",
  //     description: "Cần tìm gia sư dạy tiếng Anh lớp 8 cho học sinh.",
  //   },
  //   {
  //     id: 5,
  //     name: "Cộng tác viên Content",
  //     jobType: "Freelance",
  //     jobCategory: "Marketing",
  //     location: "Remote",
  //     salary: "200.000/bài",
  //     description: "Viết bài chuẩn SEO cho website.",
  //   },
  // ];

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
        <div className={cx("view-all")}
        onClick={() => navigate(config.routes.user.jobs)}
        >
          Xem tất cả công việc
        </div>
      </div>
    </div>
  );
}

export default Home;