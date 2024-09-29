import NextAuth from "next-auth";
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
  session: {
    strategy: "jwt", // JSON Web Token 사용
    maxAge: 60 * 60 * 24, // 세션 만료 시간(sec)
  },
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const { name, email, password } = credentials;

        if (name) {
          // TODO: 회원가입 서버 요청
          return {
            id: "1",
            name: name as string,
            email: email as string,
            image: "",
          };
        }

        // TODO: 로그인 서버 요청
        return {
          id: "1",
          name: name as string,
          email: email as string,
          image: "",
        };
      },
    }),
  ],
});
