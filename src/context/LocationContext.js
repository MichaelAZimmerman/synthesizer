import React, { createContext, useCallback, useState } from "react";

export const LocationContext = createContext(null);

export function LocationProvider(props) {
  const [search, setSearch] = useState([]);
  const clearSearch = useCallback(() => setSearch([]), []);

  return (
    <LocationContext.Provider value={{ search, setSearch, clearSearch }}>
      {props.children}
    </LocationContext.Provider>
  );
}
