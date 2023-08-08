"use client"
import React, { useState } from 'react';
import Data from '../../const/jammattest';
import Nazryat from './Nazryat';
import Layout from "@/components/Layout/Layout";


function Tabs() {
  const defaultSelectedName = Data[0].Name; // Get the name of the first item as default selectedName
  const [selectedName, setSelectedName] = useState<string>(defaultSelectedName);
  const handleItemClick = (itemName: string) => {
    setSelectedName(itemName);
  };
  return (
    <section className='bg-light-gray py-10 md:py-20'>
      <Layout>
        <div className='flex md:flex-row flex-col justify-between gap-8 items-center'>
          <div className="md:w-1/3 w-full">
            <h2 className='text-4xl leading-[4rem] font-ahle'>مرکزی جمعیت اہل حدیث</h2>
            <h3 className='text-3xl leading-[4rem] text-[#012f1e] font-ahle mb-7'>سب سے منفرد کیوں ہے ؟</h3>
          </div>
          <div className="md:w-2/3 w-full">
            <ul className='flex justify-between border-b'>
              {Data.map((item) => (
                <li key={item.Name} onClick={() => handleItemClick(item.Name)} >
                  <span className={`hover:bg-[#012f1e] hover:text-white lg:p-4 inline-block font-ahle md:text-xl text-sm text-center sm:p-2 relative tab ${selectedName === item.Name && 'bg-[#012f1e] text-white linkbtn'}`}>
                    {item.Name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
        {selectedName && <Nazryat selectedName={selectedName} />}
      </Layout>
    </section>
  );
}

export default Tabs;

