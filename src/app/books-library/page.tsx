import Layout from '@/components/Layout/Layout';
import Footer from '@/components/footer';
import Header1 from '@/components/header/header1';
import PageBanner from '@/components/page-banner/banner';
import PostDesign2 from '@/components/post-design/post-design-2';
import React from 'react';

export const metadata = {
    title: "Book Library",
    description: "",
};

const Books_Library = () => {
    return (
        <main>
            <PageBanner
                title="کتب لائبریری"
                subTitle=""
                image="/assets/images/contat.jpg"
                buttontext=""
                buttonLink=""
            />
            <section className='container px-4 md:px-10 mx-auto'>
                <div className="my-10 md:my-16 md:mt-16">
                    <div>
                        <PostDesign2 />
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Books_Library