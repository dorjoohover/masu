'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme'

export function Providers({ children }) {
  return <ChakraProvider >{children}</ChakraProvider>
}