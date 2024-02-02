import prisma from "@/utils/connect";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions, getServerSession } from "next-auth";
import { Adapter, AdapterUser } from "next-auth/adapters";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export interface CustomAdapter extends Adapter {
  createUser(user: Omit<AdapterUser, "id">): Promise<AdapterUser>;
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as CustomAdapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
};

export const getAuthSession = () => getServerSession(authOptions);
