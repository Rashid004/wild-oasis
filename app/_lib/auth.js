/** @format */

// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// const authConfig = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.AUTH_GOOGLE_ID,
//       clientSecret: process.env.AUTH_GOOGLE_SECRET,
//     }),
//   ],
// };

// export const {
//   auth,
//   handlers: { GET, POST },
// } = NextAuth(authConfig);

// /** @format */

// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// const authConfig = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.AUTH_GOOGLE_ID,
//       clientSecret: process.env.AUTH_GOOGLE_SECRET,
//     }),
//   ],
//   callbacks: {
//     async signIn(user, account, profile) {
//       return true;
//     },
//     async redirect({ url, baseUrl }) {
//       return url.startsWith(baseUrl) ? url : baseUrl;
//     },
//   },
//   debug: true, // Enable debug mode for detailed error messages
// };

// export default (req, res) => NextAuth(req, res, authConfig);
