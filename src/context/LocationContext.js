import React, { createContext, useCallback, useState } from "react";

export const LocationContext = createContext(null);

export function LocationProvider(props) {
  const [search, setSearch] = useState([]);
  const [oscOnePitch, setOscOnePitch] = useState(null);
  const [oscTwoPitch, setOscTwoPitch] = useState(null);
  const [oscThreePitch, setOscThreePitch] = useState(null);
  const [oscFourPitch, setOscFourPitch] = useState(null);
  const clearSearch = useCallback(() => setSearch([]), []);

  return (
    <LocationContext.Provider
      value={{
        search,
        setSearch,
        clearSearch,
        oscOnePitch,
        setOscOnePitch,
        oscTwoPitch,
        setOscTwoPitch,
        oscThreePitch,
        setOscThreePitch,
        oscFourPitch,
        setOscFourPitch,
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
}
