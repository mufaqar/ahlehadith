"use client"
import React, { useContext, useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import Link from "next/link";
import { BiChevronDown, BiMenuAltRight, BiSearch } from "react-icons/bi";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { NavLinks } from "../../const/navlinks";
import { NavLinksType } from "@/utils/types";
import { SettingsContext } from "@/context/setting-context";
import Input from "../controlls/input";
import SideSection from "../side-section/side-section";
import Mega_menu from "../mega-menu/mega";
import { BsEnvelopeAtFill } from "react-icons/bs";

const Header = () => {
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
      <header className={`right-0 left-0 top-0 shadow-md fixed w-full z-50 ${headerClr ? 'bg-white' : 'bg-white'}`}>
        <div className="flex items-center gap-7">
          <div className="md:w-1/4 bg-white rounded-lg ps-4">
            <Logo />
          </div>
          <div className="md:w-3/4 w-full">
            <div className="md:flex text-pure justify-between bg-light-gray hidden">
              <nav>
                {NavLinks.slice(3, 4).map((item: NavLinksType, idx: number) => {
                  return (
                    <ul key={idx} className="w-full gap-4 items-center hidden md:flex [&>*:nth-child(1)]:border-r-transparent ">
                      {item.sub_menu?.map((sub_item: any, _idx: any) => {
                        return <li key={_idx} className="px-3 border-r border-pure">
                          <Link onClick={() => { setDropdown(null), setIsMobile(false) }} href={item.link} className="uppercase font-ahle text-[20px] md:text-pure text-pure hover:text-yellow hover:underline" >
                            {sub_item.name}
                          </Link>
                        </li>
                      })}
                    </ul>
                  );
                })}
              </nav>
              <div className="pe-10">
                <Link href="mailto:mjah106@gmail.com" target='_blank' className='text-pure font-ahle text-lg flex gap-2 items-center'>
                  mjah106@gmail.com
                  <BsEnvelopeAtFill size={20} />
                </Link>
              </div>
            </div>
            <div className="flex text-white justify-between items-center">
              <nav>
                <ul className={`w-full gap-4 me-4 items-center ${isMobile ? 'absolute top-12 flex flex-col gap-6 p-10 left-0 right-0 bg-light-gray w-full' : 'hidden md:flex'}`}>
                  {NavLinks.slice(0, 6).map((item: NavLinksType, idx: number) => {
                    return <li key={idx} className="md:w-auto w-full"
                    >
                      <span className="flex items-center justify-between">
                        <Link onClick={() => { setDropdown(null), setIsMobile(false) }} href={item.link} className="uppercase font-ahle text-[20px] md:text-pure text-pure hover:text-yellow hover:underline" >
                          {item.name}
                        </Link>
                        {
                          item.sub_menu ? (
                            <span className="cursor-pointer md:text-pure text-pure">
                              <BiChevronDown onMouseEnter={() => handleMenu(item.id)} />
                            </span>
                          ) :
                            ''
                        }
                      </span>
                      <ul onMouseLeave={() => setDropdown(null)} className={` flex-col md:absolute md:px-5 md:pb-5 pb-0 pt-5 2xl:top-[81px] top-[91px] gap-4 md:bg-light-gray ${dropdown === item.id ? 'flex' : 'hidden'} `}>
                        {item.sub_menu?.map((sub_item: any, _idx: any) => {
                          return <Mega_menu sub_item={sub_item} key={_idx} click={() => { setDropdown(null), setIsMobile(false) }} />
                        })}
                      </ul>
                    </li>
                  })}
                </ul>
              </nav>
              <div className="flex gap-5 justify-between md:w-fit w-full items-center md:pe-0 pe-4">
                <BiSearch size={24} className="me-5 ms-2 mt-1 cursor-pointer text-pure" onClick={() => setSearchOpen(true)} />
                <div className="bg-[#012f1e] md:pe-10 pe-4 md:block hidden">
                  <Link href="#" className="uppercase inline-block font-ahle text-[20px] text-black bg-yellow px-10 py-4" >
                    عطیات
                  </Link>
                  <Link href="#" className="uppercase inline-block font-ahle text-[20px] text-white bg-[#012f1e] px-10 py-4" >
                    رضاکار بنیں
                  </Link>
                </div>
                <div className="ml-3 md:hidden text-pure" onClick={() => setIsMobile(!isMobile)}>{!isMobile ? <BiMenuAltRight size={32} /> : <RxCross1 size={32} />}</div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {
        searchOpen && <div className="fixed top-0 z-50 right-0 bottom-0 left-0 bg-black/40 dark:bg-white/30 " onClick={() => setSearchOpen(false)} ><SearchBox /></div>
      }
      <section className={`transition-all duration-300 fixed top-0 bottom-0 p-8 bg-[#090909] z-50 w-full md:w-[350px] ease-in-out overflow-y-auto no-scrollbar ${openSide ? 'left-0' : '-left-[100%]'}`}><SideSection /></section>

    </>
  );
};

export default Header;



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