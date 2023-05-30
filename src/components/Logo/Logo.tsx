import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const Logo = () => {

  return (
    <Link href="/" className="w-36 md:w-52 bg-white rounded-xl ">
      <Image src="/assets/images/logo.png" alt="logo" width={160} height={50} className="w-auto h-auto" />
      {/* <Image src="/assets/images/black-logo.png" alt="logo" width={150} height={60}/> */}
    </Link>
  );
};

export default Logo;
