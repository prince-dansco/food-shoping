"use client";

import { useState } from "react";
import { IoIosCall } from "react-icons/io";
import Image from "next/image";
import {
  FaBars,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaTimes,
} from "react-icons/fa";
import logo1 from "../../../../public/images/image/logo.png";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarComp() {
  const [click, setClick] = useState<boolean>(false);
  const pathname = usePathname();

  const handleToggle = () => {
    setClick(!click);
  };

  const isActive = (path: string) => {
    return pathname === path ? "bg-gray-500 rounded-[25px] p-2 opacity-2 " : "";
  };

  return (
    <div className="">
      <div className=" bg-[#474747] px-4 py-3 md:px-[110px]  text-white  flex  items-center justify-between">
        <div className="md:flex items-center sm:text-center gap-6">
          <div className="flex items-center">
            <IoIosCall size={20} className="hidden md:block" />{" "}
            <span className="mx-2  font-dmSan sm:text-[12px]">
              (414) 857-0107
            </span>
          </div>
          <div className=" flex items-center  ">
            <FaEnvelope size={15} className="hidden md:block" />{" "}
            <span className="mx-2 font-dmSan sm:text-[18px] hidden md:block ">
              yummy@bistrobliss
            </span>
          </div>
        </div>

        <div className="flex items-center  gap-2">
          <div className="bg-[#363636] p-2 rounded-full flex items-center justify-center">
            <FaTwitter size={15} />
          </div>
          <div className="bg-[#363636] p-2 rounded-full flex items-center justify-center">
            <FaFacebookF size={15} />
          </div>
          <div className="bg-[#363636] p-2 rounded-full flex items-center justify-center">
            <FaInstagram size={15} />
          </div>
          <div className="bg-[#363636] p-2 rounded-full flex items-center justify-center">
            <FaGithub size={15} />
          </div>
        </div>
      </div>
      <div className="md:flex items-center md:px-[110px] justify-between py-6">
        <div className="flex items-center justify-between w-full md:w-auto px-3 md:px-0">
          <div className="flex items-center gap-4">
            <Image
              src={logo1}
              width={50}
              height={50}
              alt="logo"
              quality={100}
              priority
              className="hidden md:block"
            />
            <h1 className="text-[#474747] md:text-4xl text-[20px] font-bold font-playfair italic">
              Bistro Bliss
            </h1>
          </div>

          <div
            onClick={handleToggle}
            className="md:hidden block cursor-pointer"
          >
            {!click ? <FaBars size={20} /> : <FaTimes size={20} />}
          </div>
        </div>
        {/*  */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="text-lg font-playfair flex items-center gap-6">
            <li>
              <Link href="/" className={isActive("/")}>
                Home
              </Link>
            </li>
           
            <li>
              <Link href="/menupage" className={isActive("/menupage")}>
                Menu
              </Link>
            </li>
            <li>
              <Link href="/pagelight" className={isActive("/pagelight")}>
                Pages
              </Link>
            </li>
            <li>
              <Link href="/contactpage" className={isActive("/contactpage")}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <div className="relative group">
            <button className="px-6 py-3 rounded-[35px] outline outline-1 hover:bg-slate-400">
              Book a Table
            </button>
            <span className="absolute bottom-10 left-[5px] transform -translate-x-1/2 bg-gray-700 text-white text-sm rounded py-1 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Book a Table
            </span>
          </div>
        </div>
        {click && (
          <div className="md:hidden mt-4 z-99">
            <ul className="text-lg font-playfair flex flex-col items-center gap-4">
              <li>
                <Link href="/" className={isActive("/")}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menupage" className={isActive("/menupage")}>
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/pagelight" className={isActive("/pagelight")}>
                  Pages
                </Link>
              </li>
              <li>
                <Link href="/contactpage" className={isActive("/contactpage")}>
                  Contact
                </Link>
              </li>
            </ul>

            <div className="flex justify-center mt-4">
              <button className="px-6 py-3 rounded-[35px] outline outline-1 max-w-[200px] w-full">
                Book a Table
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
