import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { formatPrice, formatDateTime } from "../../../utils/stringUtil";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import PeopleIcon from "@mui/icons-material/People";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { getJobsbyId } from "@/Services/JobService/JobService.js";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import images from "@/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import WorkIcon from "@mui/icons-material/Work";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Schedule from "@mui/icons-material/WorkOutline";
import styles from "./JobDetail.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [showSchedule, setShowSchedule] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJob = async () => {
      try {
             const res = await getJobsbyId(id); // có thể truyền filter
               setJob(res.data);
               console.log(res);
      } catch (err) {
        console.error("Lỗi khi gọi API:", err);
      }
    };
    fetchJob();
  }, [id]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className={cx("JobDetail-page")}>
      <div className={cx("page-content")}>
        <div className={cx("job-container")}>
          <div className={cx("newdiv")}>
            <h1 onClick={() => navigate(-1)} className={cx("job-title")}>
              <FontAwesomeIcon icon={faChevronLeft} />
              <span className={cx("job-title-text")}>{job.name}</span>
            </h1>
            <div className={cx("badges")}>
              <span className={cx("badge", "type-v")}>{job.jobType}</span>
              <span className={cx("badge", "category-v")}>{job.jobCategory}</span>
            </div>
          </div>

          <h2 className={cx("section-title")}>Thông tin cơ bản</h2>
          <div className={cx("basic-info")}>
            <div className={cx("left-column")}>
              <ul>
                <li>
                  <LocationOnIcon /> {job.location}
                </li>
                <li>
                  <MonetizationOnIcon /> {formatPrice(job.salary)}/
                  {job.salaryUnit}
                </li>
                <li>
                  <WorkIcon className={cx("icon-inline")} />
                  {job.jobForm}
                </li>
                <li>
                  <WorkHistoryIcon />{" "}
                  {job.experienceRequired || "Không yêu cầu kinh nghiệm"}
                </li>
                <li>
                  <PeopleIcon /> {job.numberOfPeople || "2 người"}
                </li>

                {job.jobType === "Part-Time" ? (
                  <>
                    <li onClick={() => setShowSchedule(!showSchedule)}>
                      <AccessTimeIcon /> {job.workingTime}
                      <span className={cx("schedule-toggle")}>(Chi tiết)</span>
                    </li>

                    {showSchedule && job.workingSchedule?.length > 0 && (
                      <ul className={cx("schedule-list")}>
                        {job.workingSchedule.map((item) => (
                          <li key={item._id}>
                            <AccessTimeIcon className={cx("icon-inline")} />
                            <strong>{item.day}:</strong> {item.period}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <li>
                    <AccessTimeIcon /> {job.workingTime}
                  </li>
                )}

                <li>
                  <AssignmentIcon /> Ứng tuyển: {formatDateTime(job.startDate)}{" "}
                  – {formatDateTime(job.endDate)}
                </li>
                <li>
                  <Schedule /> Làm chính thức:{" "}
                  {formatDateTime(job.recruitStartDate)} –{" "}
                  {formatDateTime(job.recruitEndDate)}
                </li>
              </ul>
            </div>

            <div className={cx("right-column")}>
              <div className={cx("icon-pushpin")}>
                <img src={images.pushpin} alt="pushpin" />
              </div>
              <div className={cx("company-v")}>
                <div className={cx("avatar")}>
                  <img
                    src={images.avatar ?? images.avatar}
                    alt="company-logo"
                  />
                </div>
                <div className={cx("company-info")}>
                  <div className={cx("company-name")}>{"images.avatar"}</div>
                  <div className={cx("company-location")}>
                    {job.location}
                  </div>
                </div>
              </div>
              <div className={cx("info")}>
                <li>
                  <PeopleIcon /> {''}
                </li>
                <li>
                  <Inventory2Icon /> {"job.company.industry"}
                </li>
                <li>
                  <LocationOnIcon /> {"job.company.location"}
                </li>
              </div>
            </div>
          </div>

          <h2 className={cx("section-title")}>Mô tả chi tiết công việc</h2>
          <div className={cx("job-description")}>
            <ul>
              {job.description.split(".").map(
                (line, index) =>
                  line.trim() && (
                    <p key={index} className={cx("description-line")}>
                      • {line.trim()}.
                    </p>
                  )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
