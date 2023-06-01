"use client"
import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ModelBox from "../ModelBox/ModelBox";

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
              <figure key={image.img} className="p-1 hover:shadow-lg cursor-pointer"><img src={image.img} className="w-full rounded-xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]" onClick={() => OpenModelBox(image)} /></figure>
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
    img: "/assets/images/07.jpg",
  },
  {
    img: "/assets/images/08.jpg",
  },
  {
    img: "/assets/images/09.jpg",
  },
  {
    img: "/assets/images/10.jpg",
  },
  {
    img: "/assets/images/11.jpg",
  },
  {
    img: "/assets/images/12.jpg",
  },
];
