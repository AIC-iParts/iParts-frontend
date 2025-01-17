import { createContext, ReactNode, useContext, useState } from "react";

interface User {
  user: string;
  token: string;
  loginPersist: (user: string, token: string) => void;
  logoutPersist: () => void;
}

const AppContext = createContext<User>({
  user: "",
  token: "",
  loginPersist: () => {},
  logoutPersist: () => {},
});

export function ContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string>("");
  const [token, setToken] = useState<string>("");

  const loginPersist = (loginUser: string, loginToken: string) => {
    setUser(loginUser);
    setToken(loginToken);
  };

  const logoutPersist = () => {
    setUser("");
    setToken("");
  };

  return (
    <AppContext.Provider value={{ user, token, loginPersist, logoutPersist }}>
      {children}
    </AppContext.Provider>
  );
}

export default function useAppContext() {
  return useContext(AppContext);
}
