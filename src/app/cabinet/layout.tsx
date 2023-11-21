import React from "react";

export const metadata = {
  title: 'کابینہ',
  description: 'Ahlehadis Team',
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