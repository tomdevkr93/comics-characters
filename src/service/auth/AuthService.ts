import { LoginResponse } from "@/models/networking/auth";
import Service from "../Service";

class AuthService extends Service {
  login(email: string, password: string) {
    return this.http.post<LoginResponse>("/auth/signin", { email, password });
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService();
