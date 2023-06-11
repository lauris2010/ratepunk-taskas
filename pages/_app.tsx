import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Caveat_Brush } from "next/font/google";
import { Noto_Sans } from "next/font/google";

const caveat = Caveat_Brush({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: "400",
});
const noto = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto",
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${caveat.variable} ${noto.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
