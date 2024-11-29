import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Analytics } from "@vercel/analytics/react"

import { ChakraProvider } from '@chakra-ui/react'
import "./app.css"
import "../css.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <Analytics mode={"auto"}/>
    <App />
  </ChakraProvider>
)
