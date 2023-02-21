import React from 'react'
import {createRoot} from 'react-dom/client'
import { App } from './App'
import {
  createBrowserRouter,
  BrowserRouter,
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
