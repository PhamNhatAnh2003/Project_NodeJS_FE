import React from "react";
import styles from "./Card.module.scss";
import classNames from "classnames/bind";
import Button from "../Button/Button";
import images from "../../assets/images";
const cx = classNames.bind(styles);

const Job = {
    id:5,
    name: "Dạy thêm tiếng anh lớp 8",
    jobType: "Part-time",
    jobcategory: "Giáo dục",
    Location: "Hà Nội",
    Salary: "10.000.000",
    Description: "Cần tìm gia sư dạy tiếng anh lớp 8 cho học",
}


const Card = ({ job = Job }) => {
  return (
    <div className={cx("card")}>
      <div className={cx("title")}>
        <h4>{job.name}</h4>
        <img src={images.vector} alt="" />
      </div>
      <div className={cx("card-container")}>
        <div className={cx("tags")}>
          <span className={cx("tag-green")}>PART-TIME</span>
          <span className={cx("tag-purple")}>GIA SƯ</span>
        </div>

        <div className={cx("company")}>
          <div className={cx("logo")}>G</div>
          <div className={cx("info")}>
            <strong>G8 - Onschool</strong>
            <p>Hà Nội</p>
          </div>
        </div>

        <div className={cx("location")}>
          <img src={images.PlaceMarker} alt="" /> {job.Location}
        </div>

        <div className={cx("salary")}>
          <img src={images.Dollar} alt="" /> {job.Salary}{" "}
          <div className={cx("days")}>Còn 18 ngày</div>
        </div>

        <Button className={cx("btn-detail")}>Xem chi tiết</Button>
      </div>
    </div>
  );
};

export default Card;   