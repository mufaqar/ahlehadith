
import Footer from "@/components/footer";
import Header1 from "@/components/header/header1";
import PageBanner from "@/components/page-banner/banner";
import React from "react";

export const metadata = {
  title: 'الیکٹرانک میڈیا کوریج',
  description: '',
};


export default function All_Pakistan_ConferenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <Header1 />
        <PageBanner
          title="الیکٹرانک میڈیا کوریج"
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
