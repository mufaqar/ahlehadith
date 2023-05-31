import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import Layout from '../Layout/Layout';
import PostDesign from '@/components/post-design/post-design';
import { PostMokeData } from '@/const/post';
import Image from 'next/image';

const Footer2 = () => {
  return (
    <>
      <footer className="bg-[#212121]">
        <Layout>
          <div className="py-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-4">
              <div>
                <h2 className="mb-6 text-xl font-semibold text-white uppercase dark:text-white ahle-heading">
                  ہمارے بارے میں
                </h2>
                <p className="text-gray-300 dark:text-gray-200">
                  منہج سلف پر قرآن وحدیث کی تبلیغ واشاعت کی علمبردار - مرکزی جمعیت اہل حدیث پاکستان
                </p>
              </div>
              <div>
                <h2 className="mb-6 text-xl font-semibold text-white uppercase dark:text-white ahle-heading">
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
                          <Link href={`/blogs/${item.title}`} className='text-xs text-start text-gray-300 hover:text-white dark:text-gray-200'>
                            {item.title}
                          </Link>
                          <p className='text-xs text-start text-gray-300 dark:text-gray-200 mt-2'>
                            22 December
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <h2 className="mb-6 text-xl font-semibold text-white uppercase dark:text-white ahle-heading">
                  کوئک لنکس / فوری رسائی
                </h2>
                <ul className="">
                  <li className="mb-4">
                    <Link href="#" className="text-gray-300 hover:text-white dark:text-gray-200">
                      دستور مرکزی جمعیت اہل حدیث پاکستان
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="text-gray-300 hover:text-white dark:text-gray-200">
                      جماعتی خبریں
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="text-gray-300 hover:text-white dark:text-gray-200">وڈیوز</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="text-gray-300 hover:text-white dark:text-gray-200">تصاویر</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="text-gray-300 hover:text-white dark:text-gray-200">اسلامک گرافکس</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="text-gray-300 hover:text-white dark:text-gray-200">کتب لائبریری</Link>
                  </li>
                  <li className="mb-4">
                    <Link href="#" className="text-gray-300 hover:text-white dark:text-gray-200">رابطہ کریں</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-xl font-semibold text-white uppercase dark:text-white ahle-heading" >
                  فالو کریں
                </h2>
                <ul className=" grid gap-3">
                  <li>
                    <Link href="#" className="text-gray-300 hover:text-white dark:text-gray-200">
                      <FaFacebookF size={26} />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-300 hover:text-white dark:text-gray-200">
                      <FaTwitter size={26} />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-300 hover:text-white dark:text-gray-200">
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