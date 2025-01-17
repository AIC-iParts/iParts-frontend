import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import * as SecureStore from "expo-secure-store";

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

  const loginPersist = async (loginUser: string, loginToken: string) => {
    setUser(loginUser);
    setToken(loginToken);
    await SecureStore.setItemAsync("user", loginUser);
    await SecureStore.setItemAsync("token", loginToken);
  };

  const logoutPersist = async () => {
    setUser("");
    setToken("");
    await SecureStore.deleteItemAsync("user");
    await SecureStore.deleteItemAsync("token");
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
