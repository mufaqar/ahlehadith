"use client"
import Footer from '@/components/footer';
import Header1 from '@/components/header/header1';
import PageBanner from '@/components/page-banner/banner';
import React from 'react';
import Layout from '@/components/Layout/Layout';
import Gallery_images from '@/components/image-gallery';

const Pictures = () => {
  return (
    <>
      <Header1 />
      <PageBanner
        title="تصاویر"
        subTitle=""
        image="/assets/images/contat.jpg"
        buttontext=""
        buttonLink=""
      />
      <Layout>
        <section className="my-20">
        <Gallery_images />
        </section>
      </Layout>
      <Footer />
    </>
  )
}

export default Pictures