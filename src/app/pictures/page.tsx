import React from 'react';
import Layout from '@/components/Layout/Layout';
import Gallery_images from '@/components/image-gallery';
import apolloClient from '@/config/client';
import { PictureData } from '@/config/queries';

const Pictures = async () => {

  const { picturesData }:any = await getData()

  return (
    <>
      <Layout>
        <section className="my-20">
          <h2 className="text-2xl font-ahle capitalize">
            صدر آزاد جموں کشمیر سردار مسعود خاں
          </h2>
          <Gallery_images picturesData={picturesData} />
        </section>
      </Layout>
    </>
  )
}

export default Pictures


async function getData() {
  const [pictures] = await Promise.all([
    apolloClient.query({
      query: PictureData,
      variables: {
        id: "صدر-آزاد-جموں-کشمیر-سردار-مسعود-خاں",
      }
    }),
  ]);
  const picturesData = pictures?.data?.picture;

  if (!pictures) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return { picturesData };
}