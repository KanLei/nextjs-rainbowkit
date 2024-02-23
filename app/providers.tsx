'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import { type State, WagmiProvider } from 'wagmi'

import { config } from './config'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { cookieToInitialState } from 'wagmi' 

type Props = {
  children: ReactNode,
  cookie: string | null
}

const queryClient = new QueryClient()

export function Providers({ children, cookie }: Props) {
  const initialState = cookieToInitialState(
    config, 
    cookie
  )

  return (
    <WagmiProvider config={config} initialState={initialState}> 
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize='compact'>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}