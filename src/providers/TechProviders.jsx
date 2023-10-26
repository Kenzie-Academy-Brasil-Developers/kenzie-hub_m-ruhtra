import { createContext } from "react";

const TechContext = createContext({});

const TechProvider = ({ children }) => {
  return (
    <TechContext.Provider value={{}}>
      {children}
    </TechContext.Provider>
  );
};

export { TechContext, TechProvider };
