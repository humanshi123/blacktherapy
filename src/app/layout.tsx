import "./globals.css";
// import { Antic_Didone } from "next/font/google";
import localFont from 'next/font/local'

const gothamPro = localFont({
  src: '../assets/fonts/GothamPro.ttf',
  display: 'swap',
  variable: '--font-gotham', 
})
const anticDidone = localFont({
  src: '../assets/fonts/AnticDidoneRegular.ttf',
  display: 'swap',
  variable: '--font-antic',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${gothamPro.variable} ${anticDidone.variable}`}>
        {children}
      </body>
    </html>
  );
}
