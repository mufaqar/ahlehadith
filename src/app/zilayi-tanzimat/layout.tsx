
import Footer from "@/components/footer";
import Header1 from "@/components/header/header1";
import PageBanner from "@/components/page-banner/banner";
import React from "react";

export const metadata = {
  title: 'ذیلی تنظیمات',
  description: '',
};


export default function Saubayi_NazamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <Header1 />
        <PageBanner
          title="ذیلی تنظیمات"
          subTitle=""
          image="/assets/images/slid1.jpeg"
          buttontext=""
          buttonLink=""
        />
        {children}
        <Footer/>
        </>
  );
}
