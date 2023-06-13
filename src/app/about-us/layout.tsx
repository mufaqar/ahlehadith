"use client";

import Footer from "@/components/footer";
import Header1 from "@/components/header/header1";
import PageBanner from "@/components/page-banner/banner";
import React from "react";

export default function ConatctLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ur" dir="rtl">
      <body>
        <Header1 />
        <PageBanner
          title="About Us"
          subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          image="/assets/images/contat.jpg"
          buttontext="By this time"
          buttonLink="#"
        />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
