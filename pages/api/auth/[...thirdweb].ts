import { ThirdwebAuth } from "@thirdweb-dev/auth/next/solana";

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  privateKey: process.env.THIRDWEB_AUTH_PRIVATE_KEY || "",
  domain: "example.com",
});

export default ThirdwebAuthHandler();
