import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <h2>Login</h2>
      <form className="form">
        <div className="form-field flex-wrap">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="form-field flex-wrap">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            if (username.length > 4 && password.length > 4) {
              login(username);
              // history.push("/search");
            }
          }}
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
