"use client"

import "./globals.css";
import { SettingsProvider } from "@/context/setting-context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "@/config/client";
import NextNProgress from 'nextjs-progressbar';
import Header1 from "@/components/header/header1";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ur" dir="rtl">
      <body className={`dark:bg-dark-gray `} >
        <NextNProgress />
        <ApolloProvider client={apolloClient}>
          <SettingsProvider>
              <Header1 />
              {children}
              <Footer />
          </SettingsProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}

