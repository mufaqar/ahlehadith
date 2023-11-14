
import React from 'react';
import Layout from '@/components/Layout/Layout';
import apolloClient from '@/config/client';
import { PictureData } from '@/config/queries';
import Gallery_images from '@/components/image-gallery';

const Print_Media = async () => {
  const {picturesData}:any = await getData()

  return (
    <>
      <Layout>
        <Gallery_images picturesData={picturesData} />
      </Layout>
    </>
  )
}

export default Print_Media


async function getData() {
  const [pictures] = await Promise.all([
    apolloClient.query({
      query: PictureData,
      variables: {
        id: "پرنٹ-میڈیا-کوریج",
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