'use client';

// import type { Metadata } from "next";
import "./globals.css";
import { Antic_Didone } from "next/font/google";
import Header from "@/components/Header";
import localFont from 'next/font/local'
import Footer from "@/components/Footer";
import { usePathname } from 'next/navigation';

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

// export const metadata: Metadata = {
//   title: "The Black Therapy Network",
//   description: "",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideFooterRoutes = ['/login', '/forgotpassword', '/resetpassword', '/signup'];

  return (
    <html lang="en">
      <body className={`${gothamPro.variable} ${anticDidone.variable}`}>
        <Header />
        {children}
        {!hideFooterRoutes.includes(pathname) && <Footer />}
      </body>
    </html>
  );
}
