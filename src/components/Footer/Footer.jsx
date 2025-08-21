import React from "react";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import images from "@/assets/images";
const cx = classNames.bind(styles);
const Footer = () => {
    return (
      <div className={cx("footer-wrapper")}>
        <div className={cx("footer-left")}>
          <div className={cx("left-1")}>
            <strong style={{ color: "purple", fontSize: "20px" }}>
              AlwaysApply
            </strong>
            <span>Call now: 0912198345 </span>
            <span>Ngõ 218, Phạm Nhật Anh, Hà Nội</span>
          </div>
          <div className={cx("right-1")}>
            <strong style={{ color: "purple", fontSize: "20px" }}>
              Bạn muốn làm gì
            </strong>
            <span>Gia sư</span>
            <span>Pháp sư</span>
            <span>Ma quỷ</span>
          </div>
        </div>
        <div className={cx("footer-right")}>
          <div className={cx("left-2")}>
            <strong style={{ color: "purple", fontSize: "20px" }}>
              Công Việc
            </strong>
            <span>Free-Lancers</span>
            <span>Full-times</span>
            <span>Part-times</span>
          </div>
          <div className={cx("right-2")}>
            <strong style={{ color: "purple", fontSize: "20px" }}>
              Nhà phát triển
            </strong>
            <span>Phạm Nhật Anh</span>
            <span>Team Sora</span>
          </div>
        </div>
      </div>
    );
    }
export default Footer;