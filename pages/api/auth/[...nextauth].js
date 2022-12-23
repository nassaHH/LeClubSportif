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
      name: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;

        
        const user = await prisma.utilisateur.findUnique({
          where: { email: email.credentials, 
                  //  password : password.credentials 
              }
        });

        if (!user){
          console.log("ENFIN ")
        }
      }
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
  secret: process.env.JWT_SECRET,
};

export default NextAuth(authOptions);