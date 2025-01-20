import api from "@/service/api";

export const LoginRequest = async (cnpj: string, password: string) => {
  try {
    const request = await api.post("/auth/loginShop", {
      cnpj: cnpj,
      password: password,
    });
    console.log(request?.data);
    console.log(request?.status);
    console.log(request?.statusText);
    return request?.data;
  } catch (error: any) {
    console.log(`Erro na requisição. Login Request. Erro:\n${error}`);
  }
};
