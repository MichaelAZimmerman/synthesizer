import React, { useState, createContext, useCallback } from "react";

export const UserContext = createContext("");

export function UserProvider(props) {
  const [username, setUsername] = useState(null);
  const [user_id, setUser_id] = useState(null);
  const login = useCallback((userN, id) => {
    setUsername(userN);
    setUser_id(id);
  }, []);
  const logout = useCallback(() => {
    setUsername(null);
    setUser_id(null);
  }, []);
  return (
    <UserContext.Provider value={{ username, user_id, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
}
