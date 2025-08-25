import React, {useState} from "react";
import styles from "./Card.module.scss";
import classNames from "classnames/bind";
import Button from "../Button/Button";
import images from "../../assets/images";
import {formatPrice} from "@/utils/stringUtil.js"
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const Job = {
    id:5,
    name: "Dạy thêm tiếng anh lớp 8",
    jobType: "Part-time",
    jobCategory: "Giáo dục",
    location: "Hà Nội",
    salary: "10.000.000",
    description: "Cần tìm gia sư dạy tiếng anh lớp 8 cho học",
}


const Card = ({ job = Job }) => {
   const navigate = useNavigate();

   const handleViewDetail = () => {
     if (job.id) navigate(`/jobDetail/${job.id}`);
   };

  return (
    <div className={cx("card")}>
      <div className={cx("title")}>
        <h4>{job.name}</h4>
        <img src={images.vector} alt="" />
      </div>
      <div className={cx("card-container")}>
        <div className={cx("tags")}>
          <span className={cx("tag-green")}>{job.jobType}</span>
          <span className={cx("tag-purple")}>{job.jobCategory}</span>
        </div>

        <div className={cx("company")}>
          <div className={cx("logo")}>G</div>
          <div className={cx("info")}>
            <strong>G8 - Onschool</strong>
            <p>Hà Nội</p>
          </div>
        </div>

        <div className={cx("location")}>
          <img src={images.PlaceMarker} alt="" /> {job.location}
        </div>

        <div className={cx("salary")}>
          <img src={images.Dollar} alt="" /> {formatPrice(job.salary)}{" "}
          <div className={cx("days")}>Còn 18 ngày</div>
        </div>

        <Button onClick={() => handleViewDetail()} className={cx("btn-detail")}>
          Xem chi tiết
        </Button>
      </div>
    </div>
  );
};

export default Card;   