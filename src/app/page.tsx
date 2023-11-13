
import { GetStaticProps } from "next";
import Home1 from "./home/home1/page";

export const metadata = {
  title: 'Markazi Jamiyat Ahle Hadith Pakistan',
  description: 'مرکزی جمعیت اہل حدیث الحمدللہ دعوت و اصلاح ، تعلیم وتربیت ، علم وتحقیق، نشر و اشاعت ،تنظیم واحصائیات اور تعمیرات ورفاہ عامہ جیسے اہم محاذوں پر بھرپور جدوجہد کررہی ہے جس کے مبارک ثمرات ملکی سطح پر محسوس کیے جارہے ہیں اور خود موقر مجالس عاملہ وشوری مرکزی جمعیت اہل حدیث نے بھی اپنے حالیہ اجلاسوں میں جمعیت کی ہمہ جہت کارکردگی پراطمینان کااظہار فرمایاہے.	',
};


const Home = async () =>{
  
  return (
    <>
      <Home1/>
    </>
  );
}

export default Home


