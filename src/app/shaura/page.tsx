"use client"
import Layout from "@/components/Layout/Layout";
import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ModelBox from '../../components/ModelBox/ModelBox'

const Page = () => {
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
        <div className='items-center font-ahle my-10 md:my-20 md:mt-20 grid gap-10'>
          <div className="my-10">
            <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
              <Masonry columnsCount={3} gutter="20px">
                {Gallery.map((image) => (
                  <figure key={image.img} className="p-1 hover:shadow-lg cursor-pointer">
                    <img src={image.img} className="w-full rounded-xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" onClick={() => OpenModelBox(image)} />
                  </figure>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
          {
            modalIsOpen && <ModelBox modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} URL={URL} />
          }
        </div>
      </Layout>
    </>
  );
};

export default Page;

export const Gallery = [
  {
    img: "/assets/images/shaura/1.jpg",
  },
  {
    img: "/assets/images/shaura/2.jpg",
  },
  {
    img: "/assets/images/shaura/3.jpg",
  },
  {
    img: "/assets/images/shaura/4.jpg",
  },
  {
    img: "/assets/images/shaura/5.jpg",
  },
  {
    img: "/assets/images/shaura/6.jpg",
  },
  {
    img: "/assets/images/shaura/7.jpg",
  },
  {
    img: "/assets/images/shaura/8.jpg",
  },
  {
    img: "/assets/images/shaura/9.jpg",
  },
  {
    img: "/assets/images/shaura/10.jpg",
  },
  {
    img: "/assets/images/shaura/11.jpg",
  },
  {
    img: "/assets/images/shaura/12.jpg",
  },
  {
    img: "/assets/images/shaura/13.jpg",
  },
  {
    img: "/assets/images/shaura/14.jpg",
  },
  {
    img: "/assets/images/shaura/15.jpg",
  },
  {
    img: "/assets/images/shaura/16.jpg",
  },
  {
    img: "/assets/images/shaura/17.jpg",
  },
  {
    img: "/assets/images/shaura/18.jpg",
  },
  {
    img: "/assets/images/shaura/19.jpg",
  },
  {
    img: "/assets/images/shaura/20.jpg",
  },
];