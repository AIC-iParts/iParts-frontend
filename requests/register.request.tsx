import { RegisterData } from "@/context";
import api from "@/service/api";

export const RegisterRequest = async (data: RegisterData) => {
  try {
    const request = await api.post("/shop", {
      ...data,
      id_city: 0,
      complement: "string",
      delivery_value: 0,
    });
    console.log(request?.data);
    console.log(request?.status);
    console.log(request?.statusText);
    return request?.data;
  } catch (error: any) {
    console.log(`Erro na requisição. Login Request. Erro:\n${error?.message}`);
  }
};
