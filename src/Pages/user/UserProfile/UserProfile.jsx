import React,{useState, useEffect} from "react";
import styles from "./UserProfile.module.scss";
import classNames from "classnames/bind";
import images from "@/assets/images"
import Button from "@/components/Button"
import Input from "@components/Input";

const cx = classNames.bind(styles);

const UserProfile = () => {
    return (
      <div className={cx("wrapper")}>
        <div className={cx("header-top")}></div>
        <div className={cx("content")}>
          <div className={cx("top-content")}>
            <div className={cx("ava")}>
              <div className={cx("avatar")}>
                <img src={images.avatar} alt="logo" />
              </div>
              <div className={cx("info")}>
                <div className={cx("infor-name")}>{"images.avatar"}</div>
                <div className={cx("infor-location")}>{"job.location"}</div>
              </div>
            </div>
            <div className={cx("btn-update")}>
              <Button>Cập nhật</Button>
            </div>
          </div>
          <div className={cx("main-content")}>
            <div className={cx("left")}>
              <div className={cx("input-item")}>
                <span>Họ và tên</span>
                <input
                  className={cx("input")}
                  type="text"
                  placeholder="Nhập..."
                  //   value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className={cx("input-item")}>
                <span>Khoa/Nghành học</span>
                <input
                  className={cx("input")}
                  type="text"
                  placeholder="Nhập..."
                  //   value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className={cx("input-item")}>
                <span>Loại công việc mong muốn</span>
                <input
                  className={cx("input")}
                  type="Text"
                  placeholder="Nhập..."
                  //   value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className={cx("right")}>
              <div className={cx("input-item")}>
                <span>Địa chỉ</span>
                <input
                  className={cx("input")}
                  type="text"
                  placeholder="Nhập..."
                  //   value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className={cx("input-item")}>
                <span>Trường học</span>
                <input
                  className={cx("input")}
                  type="text"
                  placeholder="Nhập..."
                  //   value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className={cx("input-item")}>
                <span>Vị trí làm việc mong muốn</span>
                <input
                  className={cx("input")}
                  type="text"
                  placeholder="Nhập..."
                  //   value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default UserProfile;