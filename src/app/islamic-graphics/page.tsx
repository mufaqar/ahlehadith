import Layout from "@/components/Layout/Layout";
import Footer from "@/components/footer";
import Header1 from "@/components/header/header1";
import Gallery_images from "@/components/image-gallery";
import PageBanner from "@/components/page-banner/banner";
import React from "react";

export const metadata = {
  title: "Islamic Graphics",
  description: "",
};

const Islamic_Graphics = () => {
  return (
    <>
      <Layout>
        <section className="my-10 md:my-16 md:mt-16">
          <div>
            <Gallery_images />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Islamic_Graphics;
