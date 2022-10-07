import { useUser, useLogin, useLogout } from "@thirdweb-dev/react/solana";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
require("@solana/wallet-adapter-react-ui/styles.css");
import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const login = useLogin();
  const logout = useLogout();
  const { user } = useUser();

  const [secret, setSecret] = useState();

  const getSecret = async () => {
    const res = await fetch("/api/secret");
    const data = await res.json();
    setSecret(data);
  };

  return (
    <div>
      <WalletMultiButton />
      <br />
      <div>
        <button onClick={() => login()}>Login with Wallet</button>
        <button onClick={logout}>Logout</button>
        <pre>User: {JSON.stringify(user || null)}</pre>
        <br />
        <br />
        <button onClick={getSecret}>Get Secret</button>
        <pre>Secret: {JSON.stringify(secret || null)}</pre>
      </div>
    </div>
  );
};

export default Home;
