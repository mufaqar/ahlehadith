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
                <h2 className="mb-6 text-xl text-white uppercase ahle-heading">
                  ہمارے بارے میں
                </h2>
                <p className="text-white">
                  منہج سلف پر قرآن وحدیث کی تبلیغ واشاعت کی علمبردار - مرکزی جمعیت اہل حدیث پاکستان
                </p>
              </div>
              <div>
                <h2 className="mb-6 text-xl text-white uppercase ahle-heading">
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
                          <Link href={`/blogs/${item.title}`} className='text-base text-start text-white hover:text-gray-300'>
                            {GetWordStr(item?.title, 7)}
                          </Link>
                          <p className='text-sm text-start text-gray-300 dark:text-gray-200 mt-2'>
                            22 فروری
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <h2 className="mb-6 text-xl text-white uppercase ahle-heading">
                  کوئک لنکس / فوری رسائی
                </h2>
                <ul className="">
                  <li className="mb-4">
                    <Link href="#" className="text-white hover:text-gray-300 text-base">
                      دستور مرکزی جمعیت اہل حدیث پاکستان
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/blogs" className="text-white hover:text-gray-300 text-base">
                      جماعتی خبریں
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/videos" className="text-white hover:text-gray-300 text-base">وڈیوز</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/pictures" className="text-white hover:text-gray-300 text-base">تصاویر</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="islamic-graphics" className="text-white hover:text-gray-300 text-base">اسلامک گرافکس</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/books-library" className="text-white hover:text-gray-300 text-base">کتب لائبریری</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/contact-us" className="text-white hover:text-gray-300 text-base">رابطہ کریں</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-xl text-white uppercase ahle-heading" >
                  فالو کریں
                </h2>
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
        </Layout>
        <div className='bg-[#090909]'>
          <Layout>
            <div className="py-6">
              <span className="block text-sm text-center text-gray-300 dark:text-gray-200">
                2023© مرکزی جمعیت اہل حدیث پاکستان
              </span>
            </div>
          </Layout>
        </div>
      </footer>
    </>
  )
}

export default Footer2