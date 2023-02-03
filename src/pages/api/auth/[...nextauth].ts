import ISession from "@/interfaces/session";
import { UserApi } from "@/pages/api";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { password, username } = credentials as {
          password: string;
          username: string;
        };
        const { user, token } = await UserApi.login({
          password,
          email: username,
        });
  
        return { id: user._id, email: user.email, token };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user && user.id) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, user, token }) {

      if (session.user) {
        session.user = { ...session.user, id: token.id  } as ISession;
      }
      return session;
    },
  },
};
export default NextAuth(authOptions);
