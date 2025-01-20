import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import * as SecureStore from "expo-secure-store";

export interface RegisterData {
  name?: string;
  cnpj?: string;
  password?: string;
  confirmPassword?: string;
  email?: string;
  phone?: string;
  fundation_date?: string;
  cep?: string;
  street?: string;
  address_number?: string;
}

interface ContextType {
  user: string;
  token: string;
  registerData: RegisterData;
  loginPersist: (user: string, token: string) => void;
  logoutPersist: () => void;
  updateRegisterData: (novosDados: Partial<RegisterData>) => void;
}

const AppContext = createContext<ContextType>({
  user: "",
  token: "",
  registerData: {},
  loginPersist: () => {},
  logoutPersist: () => {},
  updateRegisterData: () => {},
});

export function ContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [registerData, setRegisterData] = useState<RegisterData>({});

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

  const updateRegisterData = (novosDados: Partial<RegisterData>) => {
    setRegisterData((prev) => ({ ...prev, ...novosDados }));
  };

  return (
    <AppContext.Provider
      value={{
        user,
        token,
        loginPersist,
        logoutPersist,
        registerData,
        updateRegisterData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default function useAppContext() {
  return useContext(AppContext);
}
