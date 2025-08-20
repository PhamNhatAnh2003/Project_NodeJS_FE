// src/redux/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Thunk để gọi API login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API_URL}/users/login/user`, {
        username,
        password,
      });

      if (res.data && res.data.user && res.data.token) {
        // lưu localStorage
        localStorage.setItem("user_id", res.data.user.id);
        localStorage.setItem("user_token", res.data.token);

        return res.data; // trả về dữ liệu cho reducer
      } else {
        return rejectWithValue("Sai tài khoản hoặc mật khẩu!");
      }
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Đã có lỗi xảy ra. Vui lòng thử lại!"
      );
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async ({ username, password, lastname, firstname }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API_URL}/users/create`, {
        username,
        password,
        first_name: firstname,
        last_name: lastname,
      });

     if (res.data && res.data.user) {
       return res.data;
     } else {
       return rejectWithValue("Đăng ký không thành công!");
     }
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Đã có lỗi xảy ra. Vui lòng thử lại!"
      );
    }
  });


const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("user_id");
      localStorage.removeItem("user_token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

        //  register
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        // có thể lưu user luôn hoặc chỉ báo đăng ký thành công
        state.user = action.payload.user || null;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
