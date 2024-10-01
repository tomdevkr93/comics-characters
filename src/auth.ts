import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import AuthService from "./service/auth/AuthService";

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
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 1, // 30 days
  },
  providers: [
    Credentials({
      name: "Credentials",
      authorize: async (credentials): Promise<User | null> => {
        const { email, password } = credentials;

        try {
          const response = await AuthService.login(
            email as string,
            password as string
          );

          if (response.status === "error") {
            throw new Error(response.error.code);
          }

          return {
            email: response.data.email,
            name: response.data.name,
            accessToken: response.data.accessToken,
          };
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
});
