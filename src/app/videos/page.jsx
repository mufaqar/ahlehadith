import Layout from "@/components/Layout/Layout";
import Footer from "@/components/footer";
import Header1 from "@/components/header/header1";
import PageBanner from "@/components/page-banner/banner";
import VideosGallery from "@/components/videos-gallery/videos";
import apolloClient from "@/config/client";
import { VideoType, Videos as VideoQ } from "@/config/queries";
import React from "react";

// export const metadata = {
//     title: "Videos",
//     description: "",
// };

const Videos = async () => {
  const { videosData, videoTypeData } = await getData();

  return (
    <>
      <Layout>
        {videoTypeData?.map((item, idx) => {
          return (
            <section className="my-10 md:my-16 md:mt-16" key={idx}>
              <div>
                <div className="my-5">
                  <h2 className="text-2xl uppercase font-ahle">
                    {item?.name}
                  </h2>
                </div>
                <VideosGallery type={item?.name} videosData={videosData}/>
              </div>
            </section>
          );
        })}
      </Layout>
    </>
  );
};

export default Videos;

async function getData() {
  const [videos, videoType] = await Promise.all([
    apolloClient.query({ query: VideoQ }),
    apolloClient.query({ query: VideoType }),
  ]);
  const videosData = videos?.data?.videos?.nodes;
  const videoTypeData = videoType?.data?.videoTypes?.nodes;

  if (!videos) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return { videosData, videoTypeData };
}
