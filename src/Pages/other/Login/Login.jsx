import React, { useState } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Login.module.scss";
import images from "@/assets/images";

const API_URL = import.meta.env.VITE_API_URL;

export default function AuthForm() {
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  // Hàm login
  const handleLogin = async () => {
    setLoading(true);
    try {
    const res = await axios.post(`http://localhost:5000/api/users/login/user`, {
      username,
      password,
    });

      // nếu API trả về data chứa user và token
      if (res.data && res.data.user && res.data.token) {
        localStorage.setItem("user_id", res.data.user.id);
        localStorage.setItem("user_token", res.data.token);

        setError("");

        const nextUrl = localStorage.getItem("next");
        if (nextUrl) {
          navigate(nextUrl);
          localStorage.removeItem("next");
        } else {
            console.log("Login successful:", res.data);
          navigate(config.routes.user.home);
        }
      } else {
        setError("Sai email hoặc mật khẩu!");
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Đã có lỗi xảy ra. Vui lòng thử lại!";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={classNames(styles.container, { [styles.active]: isActive })}
      >
        {/* Sign Up */}
        <div className={classNames(styles.formContainer, styles.signUp)}>
          <form>
            <h1>SIGN UP</h1>
            <div className={styles.anhmo}>
              <img src={images.avatar} alt="login-poster" />
            </div>
            <span>Or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="button">Sign Up</button>
          </form>
        </div>

        {/* Sign In */}
        <div className={classNames(styles.formContainer, styles.signIn)}>
          <form onSubmit={(e) => e.preventDefault()}>
            <h1>SIGN IN</h1>
            <div className={styles.anhmo}>
              <img src={images.avatar} alt="login-poster" />
            </div>
            <span>Or use your email for login</span>
            <input
              type="username"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#">Forget Your password</a>
            <button type="button" onClick={handleLogin} disabled={loading}>
              {loading ? "Loading..." : "Sign In"}
            </button>
            {error && <p className={styles.error}>{error}</p>}
          </form>
        </div>

        {/* Toggle */}
        <div className={styles.toggleContainer}>
          <div className={styles.toggle}>
            <div className={classNames(styles.togglePanel, styles.toggleLeft)}>
              <h1>Welcome Back</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="hidden" onClick={() => setIsActive(false)}>
                Sign In
              </button>
            </div>
            <div className={classNames(styles.togglePanel, styles.toggleRight)}>
              <h1>Hello Friend</h1>
              <p>Register your personal details to use all of site features</p>
              <button className="hidden" onClick={() => setIsActive(true)}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
