import React from 'react';
import Layout from '@/components/Layout/Layout';
import Gallery_images from '@/components/image-gallery';

const Pictures = () => {
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

export default Pictures