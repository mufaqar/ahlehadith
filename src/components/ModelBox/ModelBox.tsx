import Image from "next/image";
import React from "react";
import Modal from "react-modal";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const ImagesModelBox = ({ setIsOpen, modalIsOpen, URL, video }: any) => {
  function closeModal() {
    setIsOpen(false);
  }
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "transparent",
      border: "none",
    },
  };





  

  return (
    <>
      <div className="gallery_model">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>
            <button
              onClick={closeModal}
              className="absolute bg-yellow p-1 text-black z-50"
            >
              <RxCross2 size={22} />
            </button>

            {video ? (
              <div className="video-container px-40 z-[5] relative">
                <iframe
                  className="responsive-iframe"
                  src={URL.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/')}
                  allowFullScreen
                />
              </div>
            ) : (
              <Image
                src={URL.img || URL}
                alt="image"
                width={800}
                height={600}
                className="shadow-lg mx-auto w-full z-[5] relative"
              />
            )}
            {/* <button className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-dark-gray rounded-full  active:scale-105 text-yellow  p-2 text-3xl " ><IoIosArrowBack /></button> */}
            {/* <button className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-dark-gray rounded-full  active:scale-105 text-yellow  p-2 text-3xl " ><IoIosArrowForward /></button> */}
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ImagesModelBox;
