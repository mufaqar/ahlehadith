"use client";

import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Inter } from "next/font/google";
import { SettingsProvider } from "@/context/setting-context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Markazi Jamiyat Ahle Hadith Pakistan',
  description: 'مرکزی جمعیت اہل حدیث الحمدللہ دعوت و اصلاح ، تعلیم وتربیت ، علم وتحقیق، نشر و اشاعت ،تنظیم واحصائیات اور تعمیرات ورفاہ عامہ جیسے اہم محاذوں پر بھرپور جدوجہد کررہی ہے جس کے مبارک ثمرات ملکی سطح پر محسوس کیے جارہے ہیں اور خود موقر مجالس عاملہ وشوری مرکزی جمعیت اہل حدیث نے بھی اپنے حالیہ اجلاسوں میں جمعیت کی ہمہ جہت کارکردگی پراطمینان کااظہار فرمایاہے.	',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">

      <body className={`dark:bg-dark-gray ${inter.className}`} >
        <SettingsProvider>
          <ThemeProvider enableSystem={false} attribute="class">{children}</ThemeProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}

