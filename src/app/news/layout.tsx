
import Footer from "@/components/footer";
import Header1 from "@/components/header/header1";
import PageBanner from "@/components/page-banner/banner";
import React from "react";

export const metadata = {
  title: 'جماعتی خبریں',
  description: '',
};


export default function News_Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header1 />
      <PageBanner
        title="جماعتی خبریں"
        subTitle=""
        image="/assets/images/slid1.jpeg"
        buttontext=""
        buttonLink=""
      />
      {children}
      <Footer />
    </>
  );
}
