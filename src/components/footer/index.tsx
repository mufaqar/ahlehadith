import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import Layout from '../Layout/Layout';
import { PostMokeData } from '@/const/post';
import Image from 'next/image';
import { GetWordStr } from '@/utils';
import { BsEnvelopeAtFill, BsPhone, BsPinMapFill } from 'react-icons/bs';
import { NavLinks } from '@/const/navlinks';
import { NavLinksType } from '@/utils/types';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#212121]">
        <Layout>
          <div className="py-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-4">
              <div>
                <h2 className="mb-6 text-2xl text-white uppercase ahle-heading font-ahle">
                  ہمارے بارے میں
                </h2>
                <p className="text-white font-ahle text-lg">
                  منہج سلف پر قرآن وحدیث کی تبلیغ واشاعت کی علمبردار - مرکزی جمعیت اہل حدیث پاکستان
                </p>
                <div>
                  <h2 className="mb-6 text-2xl text-white uppercase ahle-heading font-ahle mt-5">
                    ہمارا نیٹ ورک
                  </h2>
                  <ul >
                    <li className="text-white font-ahle text-lg">
                      وجود
                    </li>
                    <li className="text-white font-ahle text-lg">
                      فورم
                    </li>
                    <li className="text-white font-ahle text-lg">
                      بلاگ
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                {NavLinks.slice(4, 5).map((item: NavLinksType, idx: number) => {
                  return (
                    <><h2 key={idx} className="mb-6 text-2xl text-white uppercase ahle-heading font-ahle">
                      {item.name}
                    </h2>
                      <ul className="">
                        {item.sub_menu?.map((sub_item: any, _idx: any) => {
                          return <li key={_idx} className="mb-4">
                            <Link href={sub_item.link} className="text-white hover:text-gray-300 font-ahle text-lg">
                              {sub_item.name}
                            </Link>
                          </li>
                        })}
                      </ul>
                    </>
                  );
                })}

              </div>
              <div>
                <h2 className="mb-6 text-2xl text-white uppercase ahle-heading font-ahle">
                  کوئک لنکس / فوری رسائی
                </h2>
                <ul className="list-inside list-square marker:text-white">
                  <li className="mb-4">
                    <Link href="#" className="text-white hover:text-gray-300 font-ahle text-lg">
                      دستور مرکزی جمعیت اہل حدیث پاکستان
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/blogs" className="text-white hover:text-gray-300 font-ahle text-lg">
                      جماعتی خبریں
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/videos" className="text-white hover:text-gray-300 font-ahle text-lg">وڈیوز</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/pictures" className="text-white hover:text-gray-300 font-ahle text-lg">تصاویر</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="islamic-graphics" className="text-white hover:text-gray-300 font-ahle text-lg">اسلامک گرافکس</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/books-library" className="text-white hover:text-gray-300 font-ahle text-lg">کتب لائبریری</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/contact-us" className="text-white hover:text-gray-300 font-ahle text-lg">رابطہ کریں</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-2xl text-white uppercase ahle-heading" >
                  رابطہ کریں
                </h2>

                <p className='text-white font-ahle text-lg flex gap-2'>
                  <BsPinMapFill size={20} />
                  ایڈریس: مرکز اہلحدیث، 106 راوی روڈ، لاہور، پاکستان
                </p>
                <p className='text-white font-ahle text-lg flex gap-2'>
                  <BsPhone size={20} />
                  فون نمبر:  03208453475 –
                  04237729933
                </p>
                <p className='text-white font-ahle text-lg flex gap-2'>
                  <BsEnvelopeAtFill size={20} />
                  ای میل ایڈریس: mjah106@gmail.com
                </p>
                <ul className="flex gap-3 mt-5">
                  <li className="text-white font-ahle text-lg">
                    <Link href="#" className="text-white hover:text-gray-300">
                      <FaFacebookF size={26} />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white hover:text-gray-300">
                      <FaTwitter size={26} />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-white hover:text-gray-300">
                      <FaYoutube size={26} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </Layout >
        <div className='bg-[#090909]'>
          <Layout>
            <div className="py-6">
              <span className="block text-base text-center text-gray-300 dark:text-gray-200 font-ahle">
                2023© مرکزی جمعیت اہل حدیث پاکستان
              </span>
            </div>
          </Layout>
        </div>
      </footer >
    </>
  )
}

export default Footer