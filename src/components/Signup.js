import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import useFetch from "../hooks/useFetch";

const Signup = () => {
  const { signup } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { callAPI: signupCall } = useFetch("POST");
  const [error, setError] = useState(null);
  return (
    <>
      <h2>Sign Up</h2>
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
              let res = await signupCall("/api/users/signup", {
                username,
                password,
              });
              if (res.error) {
                return setError(res.error);
              }
              signup(res.data.username, res.data.id);
            }
          }}
        >
          Sign Up
        </button>
      </form>
      <div>{error}</div>
    </>
  );
};

export default Signup;
