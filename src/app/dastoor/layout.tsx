import React from "react";

export const metadata = {
  title: 'دستور',
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