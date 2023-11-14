"use client";
import Layout from "@/components/Layout/Layout";
import ModelBox from "@/components/ModelBox/ModelBox";
import React, { useEffect, useState } from "react";
import {Ulma_Data} from '@/const/ulma'
import apolloClient from "@/config/client";
import { Members } from "@/config/queries";

const Page = async () => {

   

    const [modalIsOpen, setIsOpen] = useState(false);
    const [URL, setURL] = useState('');
    const OpenModelBox = (image) => {
        setURL(image)
        setIsOpen(true);
    }
    // useEffect(()=>{
    //     const f = async () =>{
    //         const {membersData} = await getData()
    //         console.log("🚀 ~ file: page.jsx:22 ~ f ~ membersData:", membersData)
    //     }
    //     f()
    // })

    return (
        <>
            <section className="relative blogs">
                <Layout>
                    <div className='my-10 md:my-20 md:mt-20 file:grid gap-10'>
                        <div className="grid md:grid-cols-4 grid-cols-1 gap-7">
                            {Ulma_Data?.map((item) => {
                                return (
                                    <div key={item.img} className=''>
                                        <div className='shadow-md'>
                                            <div className={`relative h-[300px] w-full`}
                                                onClick={() => OpenModelBox(item)} >
                                                <img
                                                    src={item?.img}
                                                    alt="img"
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className='p-5 text-center'>
                                                <h3 className='text-xl font-ahle text-yellow mb-5'>
                                                    {item?.name}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Layout>
            </section>
            {
                modalIsOpen && <ModelBox modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} URL={URL} />
            }
        </>
    )
}

export default Page;



const getData = async() => {
    const [members] = await Promise.all([
      apolloClient.query({
          query: Members,
          variables: {
            first: 100,
          },
      }),
    ]);
    const membersData = members?.data?.members?.nodes
    if (!members) {
      throw new Error('Failed to fetch data')
    }
    return { membersData }
}