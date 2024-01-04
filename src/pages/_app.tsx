import "@/styles/globals.css"
import type { AppProps } from "next/app"
import localFont from "next/font/local"

const rumoura = localFont({
  src: "./Fonts/Rumoura.ttf",
  variable: "--font-rumoura",
})

const aladin = localFont({
  src: "./Fonts/Aladin.ttf",
  variable: "--font-aladin",
})

const pressura = localFont({
  src: "./Fonts/Pressura.ttf",
  variable: "--font-pressura",
})

const poppins = localFont({
  src: "./Fonts/Poppins.ttf",
  variable: "--font-poppins",
})

export default function App({ Component, pageProps }: AppProps) {
  const customFonts = `
            ${rumoura.variable} 
            ${aladin.variable} 
            ${pressura.variable} 
            ${poppins.variable}
        `
  return (
    <main className={customFonts}>
      <Component {...pageProps} />
    </main>
  )
}
