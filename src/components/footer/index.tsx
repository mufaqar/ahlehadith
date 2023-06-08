import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import Layout from '../Layout/Layout';
import { PostMokeData } from '@/const/post';
import Image from 'next/image';
import { GetWordStr } from '@/utils';

const Footer2 = () => {
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
              </div>
              <div>
                <h2 className="mb-6 text-2xl text-white uppercase ahle-heading font-ahle">
                  ہمارا نیٹ ورک
                </h2>
                <p className="text-white font-ahle text-lg">
                  وجود

                  فورم

                  بلاگ
                </p>
              </div>
              <div>
                <h2 className="mb-6 text-2xl text-white uppercase ahle-heading font-ahle">
                  تازہ ترین خبریں
                </h2>
                <div className="grid gap-5">
                  {PostMokeData.slice(0, 3).map((item, idx) => {
                    return (
                      <div key={idx}
                        className='flex gap-3'>
                        <figure className="relative w-1/3 overflow-hidden">
                          <Image
                            src={item?.img}
                            alt="image"
                            width={400}
                            height={400}
                            className="w-full object-cover"
                          />
                        </figure>
                        <div className='w-2/3'>
                          <Link href={`/blogs/${item.title}`} className='text-lg text-start text-white hover:text-gray-300 font-ahle'>
                            {GetWordStr(item?.title, 8)}
                          </Link>
                          <p className='text-base text-start text-gray-300 dark:text-gray-200 mt-2'>
                            22 فروری
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <h2 className="mb-6 text-2xl text-white uppercase ahle-heading font-ahle">
                  کوئک لنکس / فوری رسائی
                </h2>
                <ul className="">
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

                <p><a href='#'>ایڈریس: مرکز اہلحدیث، 106 راوی روڈ، لاہور، پاکستان
                </a></p>


                <p>فون نمبر:  03208453475 – 04237729933</p>
                <p>ای میل ایڈریس: mjah106@gmail.com</p>
                <ul className=" grid gap-3">
                  <li>
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

export default Footer2