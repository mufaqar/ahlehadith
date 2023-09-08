import React from 'react';
import Layout from '@/components/Layout/Layout';
import Gallery_images from '@/components/image-gallery';

const Pictures = () => {
  return (
    <>
      <Layout>
        <section className="my-20">
          <h2 className="text-2xl font-ahle capitalize">
            صدر آزاد جموں کشمیر سردار مسعود خاں
          </h2>
          <Gallery_images />
        </section>
      </Layout>
    </>
  )
}

export default Pictures