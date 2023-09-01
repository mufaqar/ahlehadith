import Footer from "@/components/footer";
import Header1 from "@/components/header/header1";
import PageBanner from "@/components/page-banner/banner";
import React from "react";

export const metadata = {
  title: 'پرنٹ میڈیا کوریج',
  description: '',
};

export default function PrintMediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <Header1 />
        <PageBanner
        title="پرنٹ میڈیا کوریج"
        subTitle=""
        image="/assets/images/contat.jpg"
        buttontext=""
        buttonLink=""
      />
        {children}
        <Footer />
      </>
  );
}
