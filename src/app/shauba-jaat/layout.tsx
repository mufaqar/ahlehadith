
import Footer from "@/components/footer";
import Header1 from "@/components/header/header1";
import PageBanner from "@/components/page-banner/banner";
import React from "react";

export const metadata = {
  title: 'شعبہ جات',
  description: '',
};


export default function Shauba_JaatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <Header1 />
        <PageBanner
          title="شعبہ جات"
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
