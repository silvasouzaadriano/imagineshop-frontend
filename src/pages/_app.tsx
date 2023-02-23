import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import GlobalStyle from '../styles/globals'
import Layout from '@/components/Layout';

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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
