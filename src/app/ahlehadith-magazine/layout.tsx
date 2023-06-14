import Footer from "@/components/footer";
import Header1 from "@/components/header/header1";
import PageBanner from "@/components/page-banner/banner";
import React from "react";

export const metadata = {
  title: 'Ahlehadith Magazine',
  description: '',
};

export default function AhlehadithMagazineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ur" dir="rtl">
      <body>
        <Header1 />
        <PageBanner
        title="اہلِ حدیث میگزین"
        subTitle=""
        image="/assets/images/contat.jpg"
        buttontext=""
        buttonLink=""
      />
        {children}
        <Footer />
      </body>
    </html>
  );
}
