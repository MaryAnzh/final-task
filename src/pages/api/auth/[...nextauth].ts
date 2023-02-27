import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitProviders from 'next-auth/providers/github';

import ISession from '@/interfaces/session';

import { UserApi } from '@/pages/api';

const authOptions: NextAuthOptions = {
  // session: {
  //   strategy: 'jwt',
  // },
  providers: [
    GitProviders({
      clientId: 'ccf83745a93ac9ad5855',
      clientSecret: '6289380f25a07220a7aaed51ca24a0812f5f59b5',
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
        return {
          id: user._id,
          email: user.email,
          name: user.name,
          image: user.image,
          token,
        };
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
