import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import useFetch from "../hooks/useFetch";

const Login = () => {
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { callAPI: loginCall } = useFetch("POST");
  const [error, setError] = useState(null);
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
              login(res.data.username, res.data.id);
            }
          }}
        >
          Login
        </button>
      </form>
      <div>{error}</div>
    </>
  );
};

export default Login;
