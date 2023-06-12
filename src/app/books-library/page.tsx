import Layout from '@/components/Layout/Layout';
import Footer from '@/components/footer';
import Header1 from '@/components/header/header1';
import PageBanner from '@/components/page-banner/banner';
import PostDesign2 from '@/components/post-design/post-design-2';
import React from 'react';

const Books_Library = () => {
    return (
        <>
            <Header1 />
            <PageBanner
                title="کتب لائبریری"
                subTitle=""
                image="/assets/images/contat.jpg"
                buttontext=""
                buttonLink=""
            />
            <Layout>
                <section className="my-10 md:my-16 md:mt-16">
                    <div>
                        <PostDesign2 />
                    </div>
                </section>
            </Layout>
            <Footer />
        </>
    )
}

export default Books_Library