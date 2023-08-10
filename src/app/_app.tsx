
import type { AppProps } from 'next/app'
import React from 'react';
import { useEffect } from 'react';
 
export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <Component {...pageProps} />
}