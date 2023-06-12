import Layout from '@/components/Layout/Layout';
import Footer from '@/components/footer';
import Header1 from '@/components/header/header1';
import Gallery_images from '@/components/image-gallery';
import PageBanner from '@/components/page-banner/banner';
import React from 'react';

const Islamic_Graphics = () => {
    return (
        <>
            <Header1 />
            <PageBanner
                title="اسلامک گرافکس"
                subTitle=""
                image="/assets/images/contat.jpg"
                buttontext=""
                buttonLink=""
            />
            <Layout>
                <section className="my-10 md:my-16 md:mt-16">
                    <div>
                        <Gallery_images />
                    </div>
                </section>
            </Layout>
            <Footer />
        </>
    )
}

export default Islamic_Graphics