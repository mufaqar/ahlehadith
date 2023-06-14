import Footer from "@/components/footer";
import Header1 from "@/components/header/header1";
import PageBanner from "@/components/page-banner/banner";
import React from "react";

export const metadata = {
  title: "Videos",
  description: "",
};

export default function VideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ur" dir="rtl">
      <body>
        <Header1 />
        <PageBanner
          title="وڈیوز"
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
