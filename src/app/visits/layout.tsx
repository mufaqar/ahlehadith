import React from "react";

export const metadata = {
  title: 'یادرفتگاں',
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