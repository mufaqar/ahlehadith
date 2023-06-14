import Layout from '@/components/Layout/Layout'
import Footer from '@/components/footer'
import Header1 from '@/components/header/header1'
import PageBanner from '@/components/page-banner/banner'
import VideosGallery from '@/components/videos-gallery/videos'
import React from 'react'


export const metadata = {
    title: "Videos",
    description: "",
  };
  

const Videos = () => {
    return (
        <>

            <Layout>
                <section className="my-10 md:my-16 md:mt-16">
                    <div>
                        <div className='my-5'>
                            <h2 className="text-2xl uppercase font-ahle">
                                کانفرنس
                            </h2>
                        </div>
                        <VideosGallery />
                    </div>
                </section>
                <section className="my-10 md:my-16 md:mt-16">
                    <div>
                        <div className='my-5'>
                            <h2 className="text-2xl uppercase font-ahle">
                                سیمینار
                            </h2>
                        </div>
                        <VideosGallery />
                    </div>
                </section>
            </Layout>
         
        </>
    )
}

export default Videos