import React, {useState} from "react";
import classNames from "classnames/bind";
import styles from "./Popup.module.scss";   
import Button from "../Button/Button";
import Input from "../Input/Input";

const cx = classNames.bind(styles);
const Popup = ({ }) => {

    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };


  return (
    <div className={cx("popup-wrapper")}>
      <div className={cx("head-content")}>
        <span> Ứng tuyển vị trí</span>
        <span style={{ color: "#7b2ff7" }}> Dạy thêm lớp tiếng Anh 9</span>
      </div>
      <div className={cx("popup-main-content")}>
        <div className={cx("input")}>
          <div className={cx("detail")}>
            Họ Và Tên
            <span style={{ color: "red" }}> *</span>
          </div>
          <Input type="text" placeholder="Họ và tên" />
        </div>
        <div className={cx("input")}>
          <div className={cx("detail")}>
            Email
            <span style={{ color: "red" }}> *</span>
          </div>
          <Input type="text" placeholder="Email" />
        </div>
        <div className={cx("input")}>
          <div className={cx("detail")}>
            Số điện thoại
            <span style={{ color: "red" }}> *</span>
          </div>
          <Input type="text" placeholder="Số điện thoại" />
        </div>
        <div className={cx("input")}>
          <div className={cx("detail")}>
            CV
            <span style={{ color: "red" }}> *</span>
            </div>
            <div className={cx("upload-box")}>
              <Input
                type="file"
                id="file-upload"
                onChange={handleFileChange}
                hidden
              />
              <label htmlFor="file-upload" className="upload-label">
                {file ? file.name : "Thả vào đây hoặc tải lên từ thiết bị"}
              </label>
            </div>
        </div>
      </div>
      <div className={cx("popup-btn")}>
        <Button className={cx("btn-submit")}>Gửi</Button>
      </div>
    </div>
  );
}
export default Popup;