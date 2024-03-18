// import "@/styles/globals.css";
// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return (<Component {...pageProps} />);
// }
// pages/_app.js
// pages/_app.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: { Component: any, pageProps: any }) {
  const router = useRouter();

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js")
          .then((registration) => {
            console.log("Service worker registered:", registration);
          })
          .catch((error) => {
            console.error("Error registering service worker:", error);
          });
      });
    }
  }, [router.pathname]);

  return <Component {...pageProps} />;
}

export default MyApp;

