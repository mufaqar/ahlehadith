
import Footer from "@/components/footer";
import Header1 from "@/components/header/header1";
import PageBanner from "@/components/page-banner/banner";
import React from "react";

export const metadata = {
  title: 'مرکزی کانفرنسز',
  description: '',
};


export default function Markazi_ConferencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header1 />
      <PageBanner
        title="مرکزی کانفرنسز"
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
