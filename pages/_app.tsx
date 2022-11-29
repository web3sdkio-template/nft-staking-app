import type { AppProps } from "next/app";
import { ChainId, Web3sdkioProvider } from "@web3sdkio/react";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3sdkioProvider desiredChainId={activeChainId}>
      <Component {...pageProps} />
    </Web3sdkioProvider>
  );
}

export default MyApp;
