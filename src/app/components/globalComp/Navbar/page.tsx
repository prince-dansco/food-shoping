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
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navList } from "@/app/const/constDataNav";
import logo1 from "../../../../../public/images/image/logo.png";
// import logo1 from "../public/images/image/logo.png";

export default function NavbarComp() {
  const [click, setClick] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => setClick((prev) => !prev);

  const isActive = (path: string) =>
    pathname === path ? "bg-[#DBDFD0] rounded-full p-2 " : "";

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-[#474747] px-4 py-3 md:px-[25px] lg:px-[110px] fixed top-0 w-full text-white flex items-center justify-between">
        <div className="md:flex items-center gap-6">
          <div className="flex items-center">
            <IoIosCall size={20} className="hidden md:block" />
            <span className="mx-2 font-dmSan sm:text-[12px]">
              (414) 857-0107
            </span>
          </div>
          <div className="flex items-center">
            <FaEnvelope size={15} className="hidden md:block" />
            <span className="mx-2 font-dmSan sm:text-[18px] hidden md:block">
              yummy@bistrobliss
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {[FaTwitter, FaFacebookF, FaInstagram, FaGithub].map(
            (Icon, index) => (
              <div
                key={index}
                className="bg-[#363636] p-2 rounded-full flex items-center justify-center"
              >
                <Icon size={15} />
              </div>
            )
          )}
        </div>
      </div>

      
      <div className="md:flex items-center px-6 md:px-[25px] lg:px-[111px] justify-between py-4 fixed top-[52px] w-full bg-white shadow-md z-50">
      
        <div className="flex items-center justify-between w-full md:w-auto px-3 md:px-0">
          <div className="flex items-center gap-2 md:gap-4">
            <Image
              src={logo1}
              width={50}
              height={50}
              alt="logo"
              quality={100}
              priority
              className=""
            />
            <h1 className="text-[#474747] md:text-xl lg:text-4xl text-xl font-bold font-playfair italic">
              Bistro Bliss
            </h1>
          </div>
          <button
            aria-label="Toggle Menu"
            onClick={handleToggle}
            className="md:hidden block cursor-pointer"
          >
            {click ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-3`}>
          {navList.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`${isActive(
                link.href
              )} px-4 py-2 text-[#2C2F24] font-semibold text-base font-dmSans`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <button className="px-6 py-3 rounded-[35px] outline outline-1 hover:bg-slate-400">
            Book a Table
          </button>
        </div>

        {/* Mobile Menu */}
        {click && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black text-white py-4 z-50 flex flex-col items-center text-center">
            {navList.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`${isActive(
                  link.href
                )} px-4 py-2 text-[#2C2F24] font-semibold text-base font-dmSans block`}
                onClick={() => setClick(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex justify-center mt-4">
              <button className="px-6 py-3 rounded-[35px] outline outline-1 max-w-[200px] w-full">
                Book a Table
              </button>
            </div>
          </div>
        )}
      </div>

      
      <div className="pt-[100px]"></div>
    </div>
  );
}
