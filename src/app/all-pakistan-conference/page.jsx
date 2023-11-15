"use client"
import React from 'react';
import Layout from "@/components/Layout/Layout";
import YouTube, { YouTubeProps } from 'react-youtube';
import {YtVideo} from '@/components/ui/YtVideo'

const Page = () => {
  const onPlayerReady = (event) => {
    event.target.pauseVideo();
  }
  const opts = {
    playerVars: {
      autoplay: 0,
    },
  };
  
  return (
    <>
      <Layout>
        <div className='items-center font-ahle my-10 md:my-20 md:mt-20 grid gap-10'>
          <div className="my-10 grid md:grid-cols-3 grid-cols-1 gap-7">
            <YtVideo opts={opts} onPlayerReady={onPlayerReady}/>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Page;


