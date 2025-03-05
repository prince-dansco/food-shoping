import React from "react";
import Image from "next/image";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import image1 from "../../../../public/images/icons/footer_logo.png";
import image2 from "../../../../public/images/image/footer.png";
import image3 from "../../../../public/images/image/footer_2.png";
import image4 from "../../../../public/images/image/footer_3.png";
import image5 from "../../../../public/images/image/footer_4.png";

export default function Footer() {
  return (
    <div className="bg-[#474747] md:px-[110px] py-16">
      <div className="   md:flex  px-3  justify-between">
        <div className="">
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
            <h1 className="text-white text-4xl font-bold font-playfail italic  ">
              Bistro Bliss
            </h1>
          </div>
          <p className="text-[#ADB29E] ">
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

        <div className="">
          <h1 className="text-white mb-4">pages</h1>
          <div className="text-[#ADB29E]">
            <p>Home</p>
            <p>About </p>
            <p>Menu</p>
            <p>Pricing</p>
            <p>Blog</p>
            <p>Contact</p>
            <p>Delivery</p>
          </div>
        </div>
        <div className="">
          <h1 className="text-white mb-4">utility pages</h1>
          <div className="text-[#ADB29E]">
            <p>Start Here</p>
            <p>StyleGuide</p>
            <p>Password protected</p>
            <p>040 Not Found</p>
            <p>Licenses</p>
            <p>chengellog</p>
            <p>View More</p>
          </div>
        </div>
        <div className="">
          <h1 className="text-white mb-4">follow us on instagram</h1>
          <div className="grid md:grid-cols-2 grid-cols-2 gap-4">
            <Image
              src={image2}
              alt="footer image"
              width={130}
              height={120}
              priority
              quality={100}
            />
            <Image
              src={image3}
              alt="footer image"
              width={130}
              height={120}
              priority
              quality={100}
            />
            <Image
              src={image4}
              alt="footer image"
              width={130}
              height={120}
              priority
              quality={100}
            />
            <Image
              src={image5}
              alt="footer image"
              width={130}
              height={120}
              priority
              quality={100}
            />
          </div>
        </div>
      </div>
      <p className="text-[#ADB29E] text-center mt-5">
        Copyright 2023 Hashtag Developer. All Rights Reserved
      </p>
    </div>
  );
}
