import "@/styles/globals.css";
import type { AppProps } from "next/app";

export const metadata={
  title:'pwa-test',
  description:'prueba de pwa',
  manifest:"/manifest.json",
  icons:{
    apple:"/icon.png"
  },
  themeColor:"#000000"
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
