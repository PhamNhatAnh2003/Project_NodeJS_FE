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
import axios from "axios";
import config from "@/config";
import Button from "@/components/Button"

const cx = classNames.bind(styles);
const JobList = () => {
    return (
      <div className={cx("job-list-pages")}>
        <h1 className={cx("title-page")}>Tìm việc </h1>
        <p className={cx("subtitle-page")}>Tim kiem cong viec</p>
        <div className={cx("search-bar-container")}>
          <div className={cx("search-name")}>
            <input
              className={cx("input")}
              type="text"
              placeholder="Ten cong viec"
            />
            <input className={cx("input")} type="text" placeholder="dia diem" />
          </div>
          <Button className={cx("btn")}>Đăng xuất</Button>
        </div>
        <div className={cx("content")}>
          <div className={cx("left-content")}>
            <span>Bo loc</span>
            <div className={cx("item")}>
              <span> Muc Luong </span>
              <input type="text" placeholder="Từ " />
              <input type="text" placeholder="Đến " />
            </div>
            <div className={cx("line")}></div>
            <div className={cx("item")}>
              <span> Loai cong việc </span>
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
          </div>
          <div className={cx("right-content")}></div>
        </div>
      </div>
    );
};

export default JobList;