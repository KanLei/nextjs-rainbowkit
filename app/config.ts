"use client"

import '@rainbow-me/rainbowkit/styles.css';
import { createConfig, WagmiProvider, cookieStorage, createStorage, unstable_connector } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
  sepolia,
} from 'wagmi/chains';
import { createClient, fallback, http } from 'viem';
import { injected } from 'wagmi/connectors';


export const config = createConfig({
  chains: [mainnet, sepolia],
  ssr: true, // https://wagmi.sh/react/guides/ssr
  storage: createStorage({  
    storage: cookieStorage, 
  }),
  connectors: [injected()],  // https://wagmi.sh/react/api/transports/unstable_connector
  transports: {
    [mainnet.id]: fallback([
      unstable_connector(injected),
      // http('https://eth-mainnet.g.alchemy.com/v2/...'),
      http()
    ]),
    [sepolia.id]: http(),
  },
  // client({ chain }) {
  //   return createClient({ chain, transport: http() })
  // }
})