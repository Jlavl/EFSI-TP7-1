import localFont from "next/font/local";
import "./styles/globals.css";
import Navbar from "./components/Navbar";
import styles from "./styles/Layout.module.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "TP7 - Catálogo de productos",
  description: "Tienda virtual",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body suppressHydrationWarning={true}>
        <div className={styles.container}>
          <Navbar />

        </div>
        <main className={styles.main}>
            {children}
          </main>
      </body>
    </html>
  );
}
