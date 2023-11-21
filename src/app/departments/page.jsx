"use client"
import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ModelBox from '../../components/ModelBox/ModelBox'
import { Gallery } from "@/const/exports";
import PageBanner from "@/components/page-banner/banner";

export const metadata = {
  title: 'شعبہ جات',
  description: '',
};

const Page = () => {
  const columnsCountBreakPoints = { 200: 1, 280: 2, 900: 3 };
  const [modalIsOpen, setIsOpen] = useState(false);
  const [URL, setURL] = useState('');
  const OpenModelBox = (image) => {
    setURL(image)
    setIsOpen(true);
  }
  return (
    <main>
      <PageBanner
        title="شعبہ جات"
        subTitle=""
        image="/assets/images/slid1.jpeg"
        buttontext=""
        buttonLink=""
      />
      <section className='container px-4 md:px-10 mx-auto'>
        <div className='items-center font-ahle my-10 md:my-20 md:mt-20 grid gap-10'>
          <div>
            <h2 className="text-2xl uppercase font-ahle mb-5">
              خدمت خلق
            </h2>
          </div>
          <div className="my-10">
            <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
              <Masonry columnsCount={3} gutter="20px">
                {Gallery.map((image) => (
                  <figure key={image.img} className="p-1 hover:shadow-lg cursor-pointer">
                    <img src={image.img} alt="Gallery" className="w-full rounded-xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" onClick={() => OpenModelBox(image)} />
                  </figure>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
          {
            modalIsOpen && <ModelBox modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} URL={URL} />
          }
        </div>
      </section>
    </main>
  );
};

export default Page;
