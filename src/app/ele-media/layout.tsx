import Footer from "@/components/footer";
import Header1 from "@/components/header/header1";
import PageBanner from "@/components/page-banner/banner";
import React from "react";

export const metadata = {
  title: ' الیکٹرانک میڈیا',
  description: '',
};

export default function  ElectonicMedia({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <Header1 />
        <PageBanner
        title=" الیکٹرانک میڈیا"
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
