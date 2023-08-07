"use client"
import React from 'react';

import Layout from "@/components/Layout/Layout";
const Page = () => {

  return (
    <>
      <Layout>
        <div className='items-center font-ahle my-10 md:my-20 md:mt-20 grid gap-10'>
          <div className="my-10 grid md:grid-cols-3 grid-cols-1 gap-7">
            {Video_Data.map((item, idx) => {
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

export const Video_Data = [
  {
    url: 'ESB4GlExZ4c',
  },
  {
    url: 'T1RQKrktG_s',
  },
  {
    url: 'putIBMGuBFg',
  },
  {
    url: 'Gqei7bjhaz4',
  },
  {
    url: 'ro9JtZIiB6A',
  },
  {
    url: '5kYn5eFWVok',
  },
  {
    url: 'jlDdO0NrF2k',
  },
  {
    url: 'QY8GNPBfyrU',
  },
  {
    url: 'a59v1b_-QZc',
  },
  {
    url: 'RcB8tRUEnec',
  },
  {
    url: 'x_JLOtHhnDg',
  },
  {
    url: 'DlKvHFrsHiY',
  },
  {
    url: 'gAWjat_O61k',
  },
  {
    url: 'zVN8VQO-7MY',
  },
  {
    url: 'WBz1R5ELqw0',
  },
  {
    url: 'FCBeYD_JUBs',
  },
  {
    url: 'iNh1Z2XhrOo',
  },
  {
    url: 'PjAeIBHPgHw',
  },
  {
    url: '826bdxBZ_yk',
  },
  {
    url: '_rzQoL7c7Vc',
  },
  {
    url: 'sYK6G5WNpA0',
  },
  {
    url: 'czEt71LEzB4',
  },
  {
    url: 'FUbCoaY7VlY',
  },
  {
    url: 'j331_UfhexE',
  },
  {
    url: 'dJw31-_O28k',
  },
  {
    url: 'aIPoDvJu1xw',
  },
  {
    url: 'WypqGy6d7Ew',
  },
  {
    url: 'OFbMlT-S_XQ',
  },
  {
    url: 'fLecTK8p5u4',
  },
  {
    url: 'yVHbxc0MTe4',
  },
];