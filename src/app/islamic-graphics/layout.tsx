import Footer from "@/components/footer";
import Header1 from "@/components/header/header1";
import PageBanner from "@/components/page-banner/banner";
import React from "react";

export const metadata = {
  title: "Islamic Graphics",
  description: "",
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
          title="اسلامک گرافکس"
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
