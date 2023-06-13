import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import Layout from '../Layout/Layout';
import { BsEnvelopeAtFill, BsPhone, BsPinMapFill } from 'react-icons/bs';
import { NavLinks } from '@/const/navlinks';
import { NavLinksType } from '@/utils/types';

const Footer = () => {
  return (
    <>
      <footer className="bg-light-gray">
        <Layout>
          <div className="py-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-4">
              <div>
                <h2 className="mb-6 text-2xl text-pure uppercase ahle-heading font-ahle">
                  ہمارے بارے میں
                </h2>
                <p className="text-pure font-ahle text-lg">
                  منہج سلف پر قرآن وحدیث کی تبلیغ واشاعت کی علمبردار - مرکزی جمعیت اہل حدیث پاکستان
                </p>
                <div>
                  <h2 className="mb-6 text-2xl text-pure uppercase ahle-heading font-ahle mt-5">
                    ہمارا نیٹ ورک
                  </h2>
                  <ul className='list-inside list-square marker:text-pure'>
                    <li className="text-pure font-ahle text-lg mb-4 relative before:content-[' '] before:h-[2px] before:w-3 before:bg-pure before:absolute before:top-2.5 before:right-1">
                      <Link href="#" className="text-pure hover:opacity-80 font-ahle text-lg">
                        وجود
                      </Link>
                    </li>
                    <li className="text-pure font-ahle text-lg mb-4 relative before:content-[' '] before:h-[2px] before:w-3 before:bg-pure before:absolute before:top-2.5 before:right-1">
                      <Link href="#" className="text-pure hover:opacity-80 font-ahle text-lg">
                        فورم
                      </Link>
                    </li>
                    <li className="text-pure font-ahle text-lg mb-4 relative before:content-[' '] before:h-[2px] before:w-3 before:bg-pure before:absolute before:top-2.5 before:right-1">
                      <Link href="#" className="text-pure hover:opacity-80 font-ahle text-lg">
                        بلاگ
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                {NavLinks.slice(4, 5).map((item: NavLinksType, idx: number) => {
                  return (
                    <div key={idx}>
                      <h2 className="mb-6 text-2xl text-pure uppercase ahle-heading font-ahle">
                        {item.name}
                      </h2>
                      <ul className="list-inside list-square marker:text-pure">
                        {item.sub_menu?.map((sub_item: any, _idx: any) => {
                          return <li key={_idx} className="mb-4 relative before:content-[' '] before:h-[2px] before:w-3 before:bg-pure before:absolute before:top-3 before:right-1">
                            <Link href={sub_item.link} className="text-pure hover:opacity-80 font-ahle text-lg">
                              {sub_item.name}
                            </Link>
                          </li>
                        })}
                      </ul>
                    </div>
                  );
                })}

              </div>
              <div>
                <h2 className="mb-6 text-2xl text-pure uppercase ahle-heading font-ahle">
                  کوئک لنکس / فوری رسائی
                </h2>
                <ul className="list-inside list-square marker:text-pure">
                  <li className="mb-4 relative before:content-[' '] before:h-[2px] before:w-3 before:bg-pure before:absolute before:top-3 before:right-1">
                    <Link href="#" className="text-pure hover:opacity-80 font-ahle text-lg">
                      دستور مرکزی جمعیت اہل حدیث پاکستان
                    </Link>
                  </li>
                  <li className="mb-4 relative before:content-[' '] before:h-[2px] before:w-3 before:bg-pure before:absolute before:top-3 before:right-1">
                    <Link href="/blogs" className="text-pure hover:opacity-80 font-ahle text-lg">
                      جماعتی خبریں
                    </Link>
                  </li>
                  <li className="mb-4 relative before:content-[' '] before:h-[2px] before:w-3 before:bg-pure before:absolute before:top-3 before:right-1">
                    <Link href="/videos" className="text-pure hover:opacity-80 font-ahle text-lg">وڈیوز</Link>
                  </li>
                  <li className="mb-4 relative before:content-[' '] before:h-[2px] before:w-3 before:bg-pure before:absolute before:top-3 before:right-1">
                    <Link href="/pictures" className="text-pure hover:opacity-80 font-ahle text-lg">تصاویر</Link>
                  </li>
                  <li className="mb-4 relative before:content-[' '] before:h-[2px] before:w-3 before:bg-pure before:absolute before:top-3 before:right-1">
                    <Link href="islamic-graphics" className="text-pure hover:opacity-80 font-ahle text-lg">اسلامک گرافکس</Link>
                  </li>
                  <li className="mb-4 relative before:content-[' '] before:h-[2px] before:w-3 before:bg-pure before:absolute before:top-3 before:right-1">
                    <Link href="/books-library" className="text-pure hover:opacity-80 font-ahle text-lg">کتب لائبریری</Link>
                  </li>
                  <li className="mb-4 relative before:content-[' '] before:h-[2px] before:w-3 before:bg-pure before:absolute before:top-3 before:right-1">
                    <Link href="/contact-us" className="text-pure hover:opacity-80 font-ahle text-lg">رابطہ کریں</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-2xl text-pure uppercase ahle-heading" >
                  رابطہ کریں
                </h2>

                <p className='text-pure font-ahle text-lg flex gap-2 mb-3'>
                  <BsPinMapFill size={20} />
                  مرکز اہلحدیث، 106 راوی روڈ، لاہور، پاکستان
                </p>
                <p className='text-pure font-ahle text-lg flex gap-2 mb-3'>
                  <BsPhone size={20} />
                  03208453475 –
                  04237729933
                </p>
                <p className='text-pure font-ahle text-lg flex gap-2 mb-3'>
                  <BsEnvelopeAtFill size={20} />
                  mjah106@gmail.com
                </p>
                <ul className="flex gap-3 mt-5">
                  <li className='p-2 rounded-full border border-yellow hover:border-pure text-yellow hover:text-pure'>
                    <Link href="#" className="">
                      <FaFacebookF size={24} />
                    </Link>
                  </li>
                  <li className='p-2 rounded-full border border-yellow hover:border-pure text-yellow hover:text-pure'>
                    <Link href="#" className="">
                      <FaTwitter size={24} />
                    </Link>
                  </li>
                  <li className='p-2 rounded-full border border-yellow hover:border-pure text-yellow hover:text-pure'>
                    <Link href="#" className="">
                      <FaYoutube size={24} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </Layout >
        <div className='bg-dark-gray'>
          <Layout>
            <div className="py-6">
              <span className="block text-base text-center text-white/60 font-ahle">
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