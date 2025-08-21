import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
import styles from "./HeaderUser.module.scss";
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom"; // dùng hook này
import config from "@/config";


const cx = classNames.bind(styles);

const HeaderUser = ({ children }) => {
  const navigate = useNavigate(); // khởi tạo navigate
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
          <Button className={cx("contact")}>Liên hệ</Button>
          <Button onClick={() => navigate(config.routes.other.login)} className={cx("login-btn")}>
            Đăng nhập
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderUser;