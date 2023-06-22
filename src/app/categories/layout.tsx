
import Layout from "@/components/Layout/Layout";
import Footer from "@/components/footer";
import Header1 from "@/components/header/header1";
import PageBanner from "@/components/page-banner/banner";
import React from "react";

export const metadata = {
  title: 'Categories',
  description: '',
};


export default function ConatctLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <Header1 />
        <PageBanner
          title="Categories"
          image="/assets/images/contat.jpg"
        />
        <Layout>{children}</Layout>
        <Footer/>
      </>
  );
}
