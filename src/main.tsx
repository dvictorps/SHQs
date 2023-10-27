import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './routes'
import { ColorModeScript } from '@chakra-ui/react'
import theme from './configs/theme'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')!).render(


  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router />
    </ChakraProvider>
  </React.StrictMode>

)
