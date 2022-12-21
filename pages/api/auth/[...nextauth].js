import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../prisma/utils/prisma";

const authOptions = {
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;

        // find out user from db
        if (email === PrismaAdapter(utilisateur.email) || password === PrismaAdapter(utilisateur.MDP)) {
          return(
            console.log("yyyyyyyyyyyyyyes"),
            router.push("/login")
          )
        }
        // if everything is fine
        throw new Error("invalid credentials");

      },
    }),
  ],
  pages: {
    signIn: "/compte/connexion",
    // error: '/auth/error',
    // signOut: '/auth/signout'
  },
  callbacks: {
    jwt(params) {
      // update token
      if (params.user?.role) {
        params.token.role = params.user.role;
      }
      // return final_token
      return params.token;
    },
  },
};

export default NextAuth(authOptions);