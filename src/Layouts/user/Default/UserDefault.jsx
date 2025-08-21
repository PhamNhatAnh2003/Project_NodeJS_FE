import classNames from "classnames/bind";
import Footer from "../../../components/Footer/Footer";
import styles from "./UserDefault.module.scss";
import HeaderUser from "../HeaderUser/HeaderUser";


const cx = classNames.bind(styles);

const UserDefault = ({ children }) => {
  return (
    <div className={cx("user-default-layout")}>
      <HeaderUser className={cx("default-header")} />
      <div className={cx("content")}>{children}</div>
      <Footer />
    </div>
  );
};

export default UserDefault;
