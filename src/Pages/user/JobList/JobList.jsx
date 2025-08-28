import React, {
  useLocation,
  useNavigate,
  useState,
  useEffect,
  useRef,
} from "react";
import styles from "./JobList.module.scss";
import classNames from "classnames/bind";
import { useSelector, useDispatch } from "react-redux";
import Card from "@/components/Card";
import { getAllJob } from "@/Services/JobService/JobService.js";
import axios from "axios";
import config from "@/config";
import Button from "@/components/Button";


const cx = classNames.bind(styles);

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchJobs = async () => {
        try {
        const res = await getAllJob(); 
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
    return (
      <div className={cx("job-list-pages")}>
        <h1 className={cx("title-page")}>Tìm việc </h1>
        <p className={cx("subtitle-page")}>Tim kiem cong viec</p>
        <div className={cx("search-bar-container")}>
          <div className={cx("search-name")}>
            <input
              className={cx("input")}
              type="text"
              placeholder="Tên công việc"
            />
            <input className={cx("input")} type="text" placeholder="Địa điểm" />
          </div>
          <Button className={cx("btn")}>Đăng xuất</Button>
        </div>
        <div className={cx("content")}>
          <div className={cx("left-content")}>
            <span className={cx("title")}>Bộ lọc</span>
            <div className={cx("main-left")}>
              <div className={cx("item")}>
                <span> Mức lương </span>
                <div className={cx("inputs")}>
                  <input type="text" placeholder="Từ " />
                  <input type="text" placeholder="Đến " />
                </div>
              </div>
              <div className={cx("line")}></div>
              <div className={cx("item")}>
                <span> Loại công việc </span>
                <label>
                  <input type="checkbox" />
                  Full-time
                </label>
                <label>
                  <input type="checkbox" />
                  Part-time
                </label>
                <label>
                  <input type="checkbox" />
                  Remote
                </label>
              </div>
              <div className={cx("line")}></div>
              <div className={cx("item")}>
                <span> Thời gian làm việc </span>
                <label>
                  <input type="checkbox" />
                  Free-Lancers
                </label>
                <label>
                  <input type="checkbox" />
                  Full-Time
                </label>
                <label>
                  <input type="checkbox" />
                  Part-Time
                </label>
              </div>
              <div className={cx("line")}></div>
              <div className={cx("item")}>
                <span> Vị trí công việc </span>
                <label>
                  <input type="checkbox" />
                  Tất cả
                </label>
                <label>
                  <input type="checkbox" />
                  Nhân viên bán hàng
                </label>
                <label>
                  <input type="checkbox" />
                  Gia sư
                </label>
                <label>
                  <input type="checkbox" />
                  Design
                </label>
                <label>
                  <input type="checkbox" />
                  Sales
                </label>
              </div>
              <div className={cx("line")}></div>
            </div>
            <div className={cx("filter")}>
              <Button className={cx("btn")}>Lọc</Button>
            </div>
          </div>
          <div className={cx("right-content")}>
              <div className={cx("top-main")}>
                <span className={cx("title")}>Tất cả công việc </span>
                <button></button>
              </div>
              <div className={cx("main-right")}>
                <div className={cx("job-list")}>
                          {jobs.map((job) => (
                            <Card key={job.id} job={job} />
                          ))}
                        </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default JobList;