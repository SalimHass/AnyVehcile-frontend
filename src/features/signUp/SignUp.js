import React from "react";
import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "../auth/authSlice";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import {useSignUpMutation} from "./signUpSlice";

function SignUp() {
  const userRef = useRef();
  const errRef = useRef();
  const [username, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [signUp, { isLoading }] = useSignUpMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await signUp({ username, password, email,first_name: first_name, last_name: last_name }).unwrap();
      navigate("/login");
    } catch (err) {
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setErrMsg("No Server Response");
      } else {
        setErrMsg("Sign up Failed");
      }
      errRef.current.focus();
    }
  };
  const handleUserInput = (e) => setUser(e.target.value);
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handleFirstnameInput = (e) => setFirst_name(e.target.value);
  const handleLastnameInput = (e) => setLast_name(e.target.value);

  const handlePwdInput = (e) => setPassword(e.target.value);

  return (
    <section className="signup">
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            ref={userRef}
            value={username}
            onChange={handleUserInput}
            autoComplete="off"
            required
          />
          <label htmlFor="firstname">First name:</label>
          <input
            type="text"
            id="firstname"
            value={first_name}
            onChange={handleFirstnameInput}
            autoComplete="off"
            required
          />
          <label htmlFor="lastname">Last name:</label>
          <input
            type="text"
            id="lastname"
            value={last_name}
            onChange={handleLastnameInput}
            autoComplete="off"
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailInput}
            autoComplete="off"
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={handlePwdInput}
            value={password}
            required
          />

          <button className="signup-btn">Sign Up</button>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
