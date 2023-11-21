"use client"
import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { useQuery } from '@apollo/client';
import { VideoByTypes } from '@/config/queries';
import { getIDFromURL } from '@/utils';
import PageBanner from '@/components/page-banner/banner';

const Page = () => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    playerVars: {
      autoplay: 0,
    },
  };

  const { loading, error, data } = useQuery(VideoByTypes, {
    variables: { id: "تنظیمی-اجلاس" },
  });
  const videosList = data?.videoType?.videos?.nodes;

  return (
    <main>
       <PageBanner
          title="تنظیمی اجلاس"
          subTitle=""
          image="/assets/images/slid1.jpeg"
          buttontext=""
          buttonLink=""
        />
      <section className='container px-4 md:px-10 mx-auto'>
        <div className='items-center font-ahle my-10 md:my-20 md:mt-20 grid gap-10'>
          <div className="my-10 grid md:grid-cols-3 grid-cols-1 gap-7">
            {videosList?.map((item: any, idx: number) => {
              return <YouTube key={idx}
                videoId={getIDFromURL(item?.videoInfo?.videoUrl)}
                opts={opts}
                className={`videocontainer`}
                iframeClassName={`w-full h-full aspect-square`}
                onReady={onPlayerReady} />
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
