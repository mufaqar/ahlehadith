"use client"
import React, { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import { Hadith_Data } from '@/const/hadith';
import ModelBox from '@/components/ModelBox/ModelBox';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { THadith } from '@/utils/types';



const Ahlehadith_Magazine = () => {
  const columnsCountBreakPoints = { 200: 1, 280: 2, 900: 3 };
  const [modalIsOpen, setIsOpen] = useState(false);
  const [URL, setURL] = useState('');
  const OpenModelBox = (image: any) => {
    setURL(image)
    setIsOpen(true);
  }
  return (
    <>
      <Layout>
        <section className="my-20">
          <div className="my-10">
            <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
              <Masonry columnsCount={3} gutter="20px">
                {Hadith_Data?.map((item: THadith, idx: any) => {
                  return <figure key={idx} className="p-1 hover:shadow-lg cursor-pointer">
                    <img src={item.img} className="w-full rounded-xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" onClick={() => OpenModelBox(item)} />
                  </figure>
                })}
              </Masonry>
            </ResponsiveMasonry>
          </div>
          {
            modalIsOpen && <ModelBox modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} URL={URL} />
          }
        </section>
      </Layout>
    </>
  )
}

export default Ahlehadith_Magazine