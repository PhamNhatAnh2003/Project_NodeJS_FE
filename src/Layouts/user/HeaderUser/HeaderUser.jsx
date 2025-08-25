import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
import styles from "./HeaderUser.module.scss";
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom"; // dùng hook này
import config from "@/config";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/Redux/features/authSlice";


const cx = classNames.bind(styles);

const HeaderUser = ({ children }) => {
  const navigate = useNavigate(); // khởi tạo navigate
 const dispatch = useDispatch();

 const { user } = useSelector((state) => state.auth);

console.log("User in HeaderUser:", user);

  return (
    <div className={cx("header-wrapper")}>
      <div className={cx("container")}>
        <div className={cx("logo")}>
          <span className={cx("icon")}></span>
          <span className={cx("title")}>HUSTCareer</span>
        </div>
        <div className={cx("header-content")}>
          <NavLink
            to="/"
            className={({ isActive }) => cx("nav-item", { active: isActive })}
          >
            Trang chủ
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) => cx("nav-item", { active: isActive })}
          >
            Công việc
          </NavLink>
        </div>
        <div className={cx("actions")}>
          {!user && (
            <>
              <Button className={cx("contact")}>Liên hệ</Button>
              <Button
                onClick={() => navigate("/login")}
                className={cx("login-btn")}
              >
                Đăng nhập
              </Button>
            </>
          )}

          {user && (
            <div className={cx("user-menu")}>
              <img
                src={`http://localhost:5000${user.avatar}`}
                alt="avatar"
                className={cx("avatar")}
              />
              <div className={cx("dropdown")}>
                <Button 
                 onClick={() => navigate(config.routes.user.userProfile)}>
                  Cá nhân
                </Button>
                <Button
                  onClick={() => {
                    dispatch(logout());
                    navigate("/", { replace: true });
                  }}
                >
                  Đăng xuất
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderUser;