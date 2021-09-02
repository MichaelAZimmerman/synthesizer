import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import useFetch from "../hooks/useFetch";

const Login = () => {
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { callAPI: loginCall } = useFetch("POST");
  const [error, setError] = useState(null);
  const [passwordValid, setPasswordValid] = useState(true);
  const [usernameValid, setUsernameValid] = useState(true);
  return (
    <>
      <h2>Login</h2>
      <form>
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            onBlur={() => {
              setUsernameValid(username.length > 4 && username.length <= 20);
            }}
            value={username}
          />
        </div>
        <div className={usernameValid ? "form-hint" : "form-error"}>
          Username must be between 5 and 20 characters.
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => {
              setPasswordValid(password.length > 4 && password.length <= 20);
            }}
            value={password}
          />
          <div className={passwordValid ? "form-hint" : "form-error"}>
            Password must be between 5 and 20 characters
          </div>
        </div>

        <button
          onClick={async (e) => {
            e.preventDefault();
            if (
              username.length > 4 &&
              password.length > 4 &&
              username.length <= 20 &&
              password.length <= 20
            ) {
              setError(null);
              let res = await loginCall("/api/users/login", {
                username,
                password,
              });
              if (res.error) {
                return setError(res.error);
              }
              login(res.data.username);
            } else {
              setUsernameValid(username.length > 4 && username.length <= 20);
              setPasswordValid(password.length > 4 && password.length <= 20);
            }
          }}
        >
          Login
        </button>
      </form>
      <div className="error">{error}</div>
      <div className="notice">
        Note: This site is not optimized for phones. This is a work in progress,
        and has best results in the Chrome browser.
      </div>
    </>
  );
};

export default Login;
