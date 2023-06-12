
"use client"
import React, { useContext, useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";
import { BiChevronDown, BiMenuAltRight, BiSearch } from "react-icons/bi";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { NavLinks } from "../../const/navlinks";
import { NavLinksType } from "@/utils/types";
import ThemeSwitch from "../ThemeSwitch";
import { SettingsContext } from "@/context/setting-context";
import Input from "../controlls/input";
import { HiOutlineMenu } from 'react-icons/hi'
import SideSection from "../side-section/side-section";
import Mega_menu from "../mega-menu/mega";

const Header1 = () => {
  const { searchOpen, setSearchOpen, isMobile, setIsMobile, setOpenSide, openSide } = useContext(SettingsContext)

  const [scrollTop, setScrollTop] = useState<any>(0);
  const [headerClr, setHeaderClr] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [handleSubmenu, setHandleSubmenu] = useState(null)
  const handleMenu = (id: any) => {
    if (dropdown === id) {
      return setDropdown(null)
    }
    setDropdown(id)
    //setDropdown(!dropdown)

  }

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }
    scrollTop >= '10' ? setHeaderClr(true) : setHeaderClr(false);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);

  }, [scrollTop]);

  return (
    <>
      <header className={`right-0 left-0 top-0 shadow-md  fixed w-full z-50 ${headerClr ? 'bg-black' : 'bg-black/70'}`}>
        <div className="container mx-auto flex py-2 justify-between items-center px-4">
          <div className="md:w-[13%] bg-white rounded-lg ">
            <Logo />
          </div>
          <div className="flex text-white md:w-[87%] justify-end">
            <nav>
              <ul className={`w-full gap-4 me-4 items-center justify-end ${isMobile ? 'absolute top-16 flex flex-col gap-6 p-10 left-0 right-0 bg-light-gray w-full' : 'hidden md:flex'}`}>
                {NavLinks.map((item: NavLinksType, idx: number) => {
                  return <li key={idx} className="md:w-auto w-full"
                  >
                    <span className="flex items-center justify-between">
                      <Link href={item.link} className="uppercase font-ahle text-[20px] md:text-white text-pure hover:text-yellow hover:underline" >
                        {item.name}
                      </Link>
                      {
                        item.sub_menu ? (
                          <span className="cursor-pointer md:text-white text-pure">
                            <BiChevronDown onMouseEnter={() => handleMenu(item.id)} />
                          </span>
                        ) :
                          ''
                      }
                    </span>

                    <ul className={` flex-col md:absolute md:px-5 md:pb-5 pb-0 pt-5 2xl:top-[81px] top-[71px] gap-4 md:bg-light-gray ${dropdown === item.id ? 'flex' : 'hidden'} `}>
                      {item.sub_menu?.map((sub_item: any, _idx: any) => {
                        return <Mega_menu sub_item={sub_item} key={_idx} click={ () => setDropdown(null)} />
                        // <li key={_idx}>
                        //   <Link href={sub_item.link} className="uppercase font-ahle text-[20px] text-black hover:text-yellow hover:underline" >
                        //     {sub_item.name}
                        //   </Link>
                        // </li>
                      })}
                    </ul>
                  </li>
                })}
              </ul>

            </nav>
            <BiSearch size={24} className="me-5 ms-2 mt-1 cursor-pointer" onClick={() => setSearchOpen(true)} />
            <HiOutlineMenu size={24} className="me-5 mt-1 cursor-pointer" onClick={() => setOpenSide(!openSide)} />
            <ThemeSwitch />
            <div className="ml-3 md:hidden" onClick={() => setIsMobile(!isMobile)}>{!isMobile ? <BiMenuAltRight size={32} /> : <RxCross1 size={32} />}</div>
          </div>
        </div>
      </header>
      {
        searchOpen && <div className="fixed top-0 z-50 right-0 bottom-0 left-0 bg-black/40 dark:bg-white/30 " onClick={() => setSearchOpen(false)} ><SearchBox /></div>
      }
      <section className={`transition-all duration-300 fixed top-0 bottom-0 p-8 bg-[#090909] z-50 w-full md:w-[350px] ease-in-out overflow-y-auto no-scrollbar ${openSide ? 'left-0' : '-left-[100%]'}`}><SideSection /></section>
      <div onClick={() => { setDropdown(null), setSearchOpen(false), setOpenSide(false)  }} className={`${openSide || dropdown || searchOpen ? 'block z-[1]' : 'block -z-30'} bg-red-800 opacity-0  absolute top-0 bottom-0 left-0 right-0 `}></div>
    </>
  );
};

export default Header1;



const SearchBox = () => {
  const { searchValue, setSearchValue, setSearchOpen } = useContext(SettingsContext)
  const handleChange = (value: string) => {
    setSearchValue(value)
  }
  return (
    <section className="flex justify-center items-center mt-28">
      <div className="flex items-center md:w-[600px] relative bg-dark-gray rounded-full overflow-hidden" >
        <button className="bg-yellow w-12 h-12 mr-3 group rounded-full flex justify-center items-center flex-col">
          <RxCross2 size={24} className="mx-5 mt-1 text-black group-hover:scale-110 cursor-pointer" onClick={() => setSearchOpen(false)} />
        </button>
        <button className="bg-yellow w-12 h-12 mr-3 group rounded-full flex justify-center items-center flex-col">
          <BiSearch size={24} className="mx-5 mt-1 text-black group-hover:scale-110 cursor-pointer" />
        </button>
        <Input
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleChange={handleChange}
          className="md:w-[600px] p-5 bg-transparent text-end text-pure"
        />
      </div>
    </section>
  )
}