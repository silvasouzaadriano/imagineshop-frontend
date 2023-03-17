import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { config } from '@fortawesome/fontawesome-svg-core';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import GlobalStyle from '../styles/globals'
import Layout from '@/components/Layout';
import ShoppingCartProvider from '@/contexts/ShoppingCartContext';

config.autoAddCss = false;

const theme: DefaultTheme = {
  colors: {
    primary: '#f73f01',
    secondary: '#777'
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ShoppingCartProvider>
          <Layout>
            <Component {...pageProps} />
            <ToastContainer autoClose={3000} />
          </Layout>
        </ShoppingCartProvider>
      </ThemeProvider>
    </>
  )
}
