import React from "react";

export const metadata = {
  title: 'Books Laibrary',
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