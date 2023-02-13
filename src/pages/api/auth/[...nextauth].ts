import ISession from '@/interfaces/session';
import { UserApi } from '@/pages/api';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitProviders from 'next-auth/providers/github';

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    GitProviders({
      clientId: '15a4916064ee2e32aeef',
      clientSecret: '04e6eb8200ffdddc5f2e4641959a314c46479f35',
    }),
    CredentialsProvider({
      type: 'credentials',
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
        session.user = { ...session.user, id: token.id } as ISession;
      }
      return session;
    },
  },
};
export default NextAuth(authOptions);
