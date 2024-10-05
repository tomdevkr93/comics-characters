import NextAuth, { User } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import AuthService from './services/auth/AuthService'
import { AppError } from './models/errors'

export const {
  handlers,
  signIn,
  signOut,
  auth,
  unstable_update: update
} = NextAuth({
  pages: {
    signIn: '/',
    newUser: '/signup'
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 1 // 30 days
  },
  providers: [
    Credentials({
      name: 'Credentials',
      authorize: async (credentials): Promise<User | null> => {
        const { email, password } = credentials

        try {
          const response = await AuthService.login(email as string, password as string)

          return {
            email: response.email,
            name: response.name,
            accessToken: response.accessToken
          }
        } catch (error) {
          throw error
        }
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.accessToken = user.accessToken
      }
      return token
    },
    session: async ({ session, token }) => {
      session.accessToken = token.accessToken as string
      return session
    }
  }
})
