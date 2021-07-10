import React, { useState, createContext, useCallback } from "react";

export const UserContext = createContext("");

export function UserProvider(props) {
  const [username, setUsername] = useState(null);
  const login = useCallback((userN) => setUsername(userN), []);
  const logout = useCallback(() => setUsername(null), []);
  return (
    <UserContext.Provider value={{ username, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
}
