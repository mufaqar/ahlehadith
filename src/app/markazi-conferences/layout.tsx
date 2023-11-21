import React from "react";

export const metadata = {
  title: 'مرکزی کانفرنسز',
  description: '',
};

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}