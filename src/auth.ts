import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import AuthService from "./service/auth/AuthService";
import { AppError, ErrorCode } from "./models/errors";

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
            throw new AppError(
              response.error.code as ErrorCode,
              response.error.message
            );
          }

          return {
            email: response.data.email,
            name: response.data.name,
            accessToken: response.data.accessToken,
          };
        } catch (error) {
          console.error(error);
          if (error instanceof AppError) {
            throw new AppError(error.code, error.message, error.cause);
          }
          return null;
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
