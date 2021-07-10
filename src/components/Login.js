import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <h2>Login</h2>
      <form className="">
        <div className="">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button
          className=""
          onClick={(e) => {
            e.preventDefault();
            if (username.length > 3 && password.length > 3) {
              login(username);
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
