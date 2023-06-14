import Footer from "@/components/footer";
import Header1 from "@/components/header/header1";
import PageBanner from "@/components/page-banner/banner";
import React from "react";

export const metadata = {
  title: "Introduction",
  description: "",
};

const Introduction = () => {
  return (
    <>
      <Header1 />
      <PageBanner
        title="تعارف"
        subTitle=""
        image="/assets/images/contat.jpg"
        buttontext=""
        buttonLink=""
      />
      <Footer />
    </>
  );
};

export default Introduction;
