import React, { createContext, useContext, useRef, useState } from "react";

interface Values {
  darkMode: boolean;
}

interface Refs {
  heroRef: React.MutableRefObject<any>;
  featuresRef: React.MutableRefObject<any>;
}

interface ContextType {
  values: Values;
  refs: Refs;
  setValues: React.Dispatch<React.SetStateAction<Values>>;
}

const intialValues = {
  values: {
    darkMode: false,
  },
  refs: {
    heroRef: null,
    featuresRef: null,
  },
  setValues: () => {},
};

const MyContext = createContext<ContextType | undefined>(undefined);

export function useMyContext() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
}

export default function MyContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [values, setValues] = useState<Values>({
    darkMode: false,
  });

  const heroRef = useRef<any>(null);
  const featuresRef = useRef<any>(null);

  const contextValue: ContextType = {
    values,
    refs: { heroRef, featuresRef },
    setValues,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}
