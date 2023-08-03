import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Logo = () => {

  return (
    <Link href="/" className="w-36 md:w-44 block bg-white rounded-lg ">
      <Image src="/assets/images/logo.png" alt="logo" width={160} height={50} className="w-auto h-full" />
      {/* <Image src="/assets/images/black-logo.png" alt="logo" width={150} height={60}/> */}
    </Link>
  );
};

export default Logo;
