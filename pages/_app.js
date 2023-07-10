"use client";
import '@/styles/globals.css'
import { ThemeProvider } from "@material-tailwind/react";
import 'animate.css';

export default function App({ Component, pageProps }) {
  return (
  <>
    <ThemeProvider>
    <Component {...pageProps} />
    </ThemeProvider>
  </>
  )
}
