import React from "react";
import classNames from "classnames/bind";
import styles from "./Banner.module.scss";
import images from "@/assets/images";

const cx = classNames.bind(styles);
const Banner = () => {
  return (
    <div className={cx("banner-wrapper")}>
      <div className={cx("banner-content")}>
        <div className={cx("banner-left")}>
          <div className={cx("banner-text")}>
            <h1>
              Đưa ra những gì bạn thích, chúng tôi sẽ đưa ra những gì bạn muốn.
            </h1>
            <span>Có rất nhiều nhà tuyển dụng đang chờ đón bạn</span>
          </div>
          <div className={cx("banner-search")}>
            <input
              type="text"
              placeholder="Tìm kiếm công việc..."
              className={cx("search-input")}
            />
            <input
              type="text"
              placeholder="Kỹ năng, tên công ty..."
              className={cx("search-input")}
            />
          </div>
          <span> Gợi ý: Gia sư, phục vụ, cộng tác viên.... </span>
        </div>
        <div className={cx("banner-right")}>
            <img src={images.Banner} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;