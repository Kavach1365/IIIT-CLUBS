import React, { useState } from "react";
import axios from "axios";
import styles from "./Register.module.css";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../Error/ErrorMessage";
import { useAuth } from "../../../authentication/context/AuthContext";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {login} = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:8005/api/users/signup",
        {
          username,
          email,
          password,
          studentId,
        },
        config
      );
      // console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      login(data);
      setLoading(false);
      navigate("/");
    } catch (error) {
      setError(error.response.data.error);
      setLoading(false);
    }
  };

  return (
    <div className={styles.register_container}>
      <div className={styles.register_form_container}>
        <div className={styles.register_left}>
          <div className={styles.logo_title_container}>
            <img
              className="w-20"
              src="https://i.ibb.co/nk1062c/club-Council-light-logo-no-BG.png"
              alt="clubCouncil-logo"
            />
            <h1 className={styles.register_title}>Register</h1>
          </div>
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {loading && <Loader />}
          <form className={styles.register_form} onSubmit={handleSubmit}>
            <input
              type="string"
              placeholder="Username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
              className={styles.register_input}
            />
            <input
              type="string"
              placeholder="ID"
              name="studentId"
              onChange={(e) => setStudentId(e.target.value)}
              value={studentId}
              required
              className={styles.register_input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              className={styles.register_input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className={styles.register_input}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              required
              className={styles.register_input}
            />
            <button type="submit" className={styles.register_green_btn}>
              Sign Up
            </button>
          </form>
        </div>
        <div className={styles.register_right}>
          <img
            src="https://i.ibb.co/h9FCQ3h/login-page-image.jpg"
            alt="Welcome"
            className={styles.register_right_img}
          />
          <Link to="/login">
            <button type="button" className={styles.register_white_btn}>
              Log In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
