import Footer from '@/components/footer';
import Header1 from '@/components/header/header1';
import PageBanner from '@/components/page-banner/banner';
import React from 'react';
import Layout from '@/components/Layout/Layout';
import Gallery_images from '@/components/image-gallery';



const Ahlehadith_Magazine = () => {
  return (
    <>

      <Layout>
        <section className="my-20">
        <Gallery_images />
        </section>
      </Layout>
    </>
  )
}

export default Ahlehadith_Magazine