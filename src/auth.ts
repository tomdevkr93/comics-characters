import NextAuth, { User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import Credentials from "next-auth/providers/credentials";

export const {
  handlers,
  signIn,
  signOut,
  auth,
  unstable_update: update,
} = NextAuth({
  pages: {
    signIn: "/",
    newUser: "/signup",
  },
  providers: [
    Credentials({
      name: "Credentials",
      authorize: async (credentials): Promise<User | null> => {
        const { email, password } = credentials;

        // TODO: 로그인 서버 요청
        // let response = await backendLogin(email, password)
        const response = {
          success: true,
          data: {
            accessToken: "testAccessToken",
            user: {
              id: "user1",
              email,
              name: "홍길동",
            },
          },
        };

        if (!response.success) {
          return null;
        }

        return {
          accessToken: response.data.accessToken,
          email: response.data.user.email as string,
          name: response.data.user.name as string,
        };
      }, // 새로운 세션 생성과 함께 jwt를 쿠키에 저장
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    session({ session, token }) {
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
});
