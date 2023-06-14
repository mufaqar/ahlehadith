
import Footer from "@/components/footer";
import Header1 from "@/components/header/header1";
import React from "react";

export const metadata = {
     title: 'Blogs',
     description: '',
   };

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ur" dir="rtl">
      <body>
        <Header1 />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
