

import Footer from "@/components/footer";
import Header1 from "@/components/header/header1";
import React from "react";

export const metadata = {
  title: 'Markazi Jamiyat Ahle Hadith Pakistan',
  description: 'مرکزی جمعیت اہل حدیث الحمدللہ دعوت و اصلاح ، تعلیم وتربیت ، علم وتحقیق، نشر و اشاعت ،تنظیم واحصائیات اور تعمیرات ورفاہ عامہ جیسے اہم محاذوں پر بھرپور جدوجہد کررہی ہے جس کے مبارک ثمرات ملکی سطح پر محسوس کیے جارہے ہیں اور خود موقر مجالس عاملہ وشوری مرکزی جمعیت اہل حدیث نے بھی اپنے حالیہ اجلاسوں میں جمعیت کی ہمہ جہت کارکردگی پراطمینان کااظہار فرمایاہے.	',
};


export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <Header1 />
        
        {children}
        <Footer/>
      </>
  );
}
