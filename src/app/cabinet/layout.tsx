import React from "react";

export const metadata = {
  title: 'کابینہ',
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