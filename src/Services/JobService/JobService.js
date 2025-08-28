import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getJobs = async () => {
  try {
    const res = await axios.get(`${API_URL}/jobs/all-jobs`); 
    console.log(res.data.data);
    return res.data.data;
  } catch (err) {
    const errorMessage =
      err.response && err.response.data && err.response.data.message
        ? err.response.data.error
        : "Đã có lỗi xảy ra. Vui lòng thử lại";

    return { success: false, message: errorMessage };
  }
};

export const getJobsbyId = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/jobs/jobs/${id}`);
    return res.data; // hoặc res.data.data nếu API trả về theo format đó
  } catch (error) {
    console.error("Error fetching job by ID:", error);
    throw error;
  }
};

export const getAllJob = async () => {
  try {
    const res = await axios.get(`${API_URL}/jobs/all-job`);
    console.log(res.data.data);
    return res.data.data;
  } catch (err) {
    const errorMessage =
      err.response && err.response.data && err.response.data.message
        ? err.response.data.error
        : "Đã có lỗi xảy ra. Vui lòng thử lại";

    return { success: false, message: errorMessage };
  }
}

