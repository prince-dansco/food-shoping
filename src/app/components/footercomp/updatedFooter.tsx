import React from "react";
import Image from "next/image";
import image1 from "../../../../public/images/icons/footer_logo.png";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { pages,utilityPages,instagramImages } from "@/app/const/constFooterData";
export default function UpdatedFooter() {
  return (
    <div className="bg-[#474747] md:px-[110px] py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-3 gap-5 justify-center">
        {/* Logo and Social Media */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <Image
              src={image1}
              width={50}
              height={50}
              alt="logo"
              quality={100}
              priority
              className="text-white"
            />
            <h1 className="text-white text-4xl font-bold font-playfail italic">
              Bistro Bliss
            </h1>
          </div>
          <p className="text-[#ADB29E]">
            In the new era of technology we look a <br /> in the future with
            certainty and pride to <br /> for our company and.
          </p>
          <div className="flex items-center text-white  gap-2 mt-4">
            <div className="bg-[#AD343E] p-2 rounded-full flex items-center justify-center">
              <FaTwitter size={15} />
            </div>
            <div className="bg-[#AD343E] p-2 rounded-full flex items-center justify-center">
              <FaFacebookF size={15} />
            </div>
            <div className="bg-[#AD343E] p-2 rounded-full flex items-center justify-center">
              <FaInstagram size={15} />
            </div>
            <div className="bg-[#AD343E] p-2 rounded-full flex items-center justify-center">
              <FaGithub size={15} />
            </div>
          </div>
        </div>

        {/* Pages */}
        <div className="justify-self-center">
          <h1 className="text-white mb-4 ">Pages</h1>
          <div className="text-[#ADB29E]">
            {pages.map((page, index) => (
              <p key={index}>{page}</p>
            ))}
          </div>
        </div>

        {/* Utility Pages */}
        <div className="justify-self-center md:justify-self-start ">
          <h1 className="text-white mb-4">Utility Pages</h1>
          <div className="text-[#ADB29E]">
            {utilityPages.map((utilityPage, index) => (
              <p key={index}>{utilityPage}</p>
            ))}
          </div>
        </div>

        {/* Instagram Images */}
        <div>
          <h1 className="text-white mb-4">Follow Us on Instagram</h1>
          <div className="grid md:grid-cols-2 grid-cols-2 gap-4">
            {instagramImages.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={130}
                height={120}
                priority
                quality={100}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-[#ADB29E] text-center mt-5">
        Copyright 2023 Hashtag Developer. All Rights Reserved
      </p>
    </div>
  );
}
