"use client";

import Footer1 from "@/components/footer";
import Header1 from "@/components/header/header1";
import PageBanner from "@/components/page-banner/banner";
import React from "react";

export default function ConatctLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <Header1 />
        <PageBanner
          title="رابطہ کریں"
          subTitle="درج ذیل فارم کو پر کریں. ہمارا نمائندہ بہت جلد آپ سے رابطہ کرے گا"
          image="/assets/images/contat.jpg"
          buttontext=""
          buttonLink=""
        />
        {children}
        <Footer1/>
      </body>
    </html>
  );
}
