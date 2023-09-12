"use client"
import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ModelBox from "../ModelBox/ModelBox";
import Image from "next/image";

const Gallery_images = () => {
  const columnsCountBreakPoints = { 200: 1, 280: 2, 900: 3 };
  const [modalIsOpen, setIsOpen] = useState(false);
  const [URL, setURL] = useState('');
  const OpenModelBox = (image: any) => {
    setURL(image)
    setIsOpen(true);
  }

  return (
    <>
      <div className="my-10">
        <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
          <Masonry columnsCount={3} gutter="20px">
            {Gallery.map((image) => (
              <figure key={image.img} className="p-1 hover:shadow-lg cursor-pointer">
                <Image src={image.img} alt={image.img} width={960} height={640} className="w-full rounded-xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" onClick={() => OpenModelBox(image)} />
              </figure>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      {
        modalIsOpen && <ModelBox modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} URL={URL} />
      }
    </>
  );
};

export default Gallery_images;

export const Gallery = [
  {
    img: "/assets/images/picture/1.JPG",
  },
  {
    img: "/assets/images/picture/2.JPG",
  },
  {
    img: "/assets/images/picture/3.JPG",
  },
  {
    img: "/assets/images/picture/4.JPG",
  },
  {
    img: "/assets/images/picture/5.JPG",
  },
  {
    img: "/assets/images/picture/6.JPG",
  },
  {
    img: "/assets/images/picture/7.JPG",
  },
  {
    img: "/assets/images/picture/8.JPG",
  },
];
