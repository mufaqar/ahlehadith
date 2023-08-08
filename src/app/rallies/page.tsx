"use client"
import React from 'react';
import Layout from "@/components/Layout/Layout";
import { Rallies_vides } from '@/const/exports';
import { TVideo } from '@/utils/types';
const Page = () => {

  return (
    <>
      <Layout>
        <div className='items-center font-ahle my-10 md:my-20 md:mt-20 grid gap-10'>
          <div className="my-10 grid md:grid-cols-3 grid-cols-1 gap-7">
            {Rallies_vides.map((item:TVideo, idx:number) => {
              return <div key={idx} className="">
                <iframe
                  src={`https://www.youtube.com/embed/${item.url}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow=""
                  allowFullScreen
                  className="w-full h-full aspect-square"></iframe>
              </div>
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Page;

