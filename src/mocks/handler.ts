import { LoginRequest, LoginResponse } from "@/models/networking/auth";
import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("/auth/signin", async ({ request }) => {
    const body = (await request.json()) as LoginRequest;

    if (body.email === "admin@admin.com" && body.password === "admin") {
      return HttpResponse.json<LoginResponse>({
        status: "success",
        data: {
          email: "admin@admin.com",
          name: "admin",
          accessToken: "testAccessToken",
        },
      });
    }

    return HttpResponse.json<LoginResponse>({
      status: "error",
      error: {
        code: "NO_SUCH_USER",
        message: "찾을 수 없는 유저",
      },
    });
  }),
];
