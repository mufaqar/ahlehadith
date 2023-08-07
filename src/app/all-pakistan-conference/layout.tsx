
import Footer from "@/components/footer";
import Header1 from "@/components/header/header1";
import PageBanner from "@/components/page-banner/banner";
import React from "react";

export const metadata = {
  title: 'آل پاکستان کانفرنس',
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
          title="آل پاکستان کانفرنس"
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
