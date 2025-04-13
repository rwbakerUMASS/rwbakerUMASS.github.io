import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    token?: {
      access_token?: string;
      [key: string]: any;
    };
    accessToken?: string;
  }

  interface Token {
    access_token?: string;
    [key: string]: any;
  }
}
