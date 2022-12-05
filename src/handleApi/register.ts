import { SignupPayload } from "../store/auth/type";
import api from "../until/api";

export const handleRegister = async (data: SignupPayload) => {
  try {
    const respone = await api.post(`auth/register-admin`, { ...data });
    return respone;
  } catch (error) {
    console.log("error when register admin", error);
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    const respone = await api.get(`user/check-email-exits`, {
      params: { email },
    });
    return respone.data;
  } catch (error) {
    console.log("error when register admin", error);
  }
};
