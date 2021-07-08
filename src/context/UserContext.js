import react, { useState, createContext, useCallback } from "react";

export const UserContext = createContext(null);

export function UserProvider(props) {
  const [username, setUsername] = useState(null);
  const login = useCallback((userName) => setUsername(userName), []);
  const logout = useCallback(() => setUsername(null), []);
  return (
    <UserContext.Provider value={{ username, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
}
