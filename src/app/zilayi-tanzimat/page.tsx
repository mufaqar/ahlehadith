import Layout from "@/components/Layout/Layout";
import React from "react";

const Page = () => {
  return (
    <>
      <Layout>
        <div className='my-10 md:my-20 md:mt-20 file:grid gap-10'>
          <div>
            <h2 className="text-2xl uppercase font-ahle mb-5">
              مرکزی جمعیت اہلحدیث پاکستان کی تمام ذیلی تنظیمات کے سربراہ ڈاکٹر عبدالغفور راشد ہیں ۔
            </h2>
            <h3 className='font-ahle text-xl text-gray-600 dark:text-text mb-5'>
              جمعیت کے ذیلی تنظیمات کے نام درج ذیل ہیں
            </h3>
          </div>
          <div>
            <ul className="grid gap-7">
              <li className="font-ahle text-lg text-gray-600 dark:text-text ">
                اہل حدیث یوتھ فورس
              </li>
              <li className="font-ahle text-lg text-gray-600 dark:text-text ">
                اہل حدیث سٹوڈنٹس فیڈریشن
              </li>
              <li className="font-ahle text-lg text-gray-600 dark:text-text ">
                جمیعت اساتذہ پاکستان
              </li>
              <li className="font-ahle text-lg text-gray-600 dark:text-text ">
                جمعیت طلبہ اہلحدیث
              </li>
              <li className="font-ahle text-lg text-gray-600 dark:text-text ">
                متحدہ حکماء محاذ
              </li>
              <li className="font-ahle text-lg text-gray-600 dark:text-text ">
                اہلحدیث نعت کونسل
              </li>
              <li className="font-ahle text-lg text-gray-600 dark:text-text ">
                وکلاء سلفیہ پاکستان
              </li>
              <li className="font-ahle text-lg text-gray-600 dark:text-text ">
                جمعیت اہلحدیث خواتین ونگ</li>
              <li className="font-ahle text-lg text-gray-600 dark:text-text ">
                جمعیت القراء اہلحدیث پاکستان
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Page;
