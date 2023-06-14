import Footer from "@/components/footer";
import Header1 from "@/components/header/header1";
import PageBanner from "@/components/page-banner/banner";
import React from "react";

export const metadata = {
  title: 'Haft Roza Ahlehadith',
  description: '',
};


export default function BookLibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ur" dir="rtl">
      <body>
        <Header1 />
        <PageBanner
                title="ہفت روزہ اہلحدیث"
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
