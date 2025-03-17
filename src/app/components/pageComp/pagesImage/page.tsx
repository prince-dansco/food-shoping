import React from "react";
import Image from "next/image";
import { FoodArray } from "@/app/const/constDataPage";


export default function BlogArray() {
  return (
    <div className="md:px-[29px] lg:px-[110px] px-4 pt-9 bg-[#F9F9F7] pb-10 md:pb-24 " >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {FoodArray.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={item?.image}
              alt="food list"
              width={100}
              height={192}
              quality={100}
              priority
              className="w-full h-auto object-cover"
            />
          
            <div className="p-6 ">
              <p className="text-sm  font-medium text-[#737865]">{item.date}</p>
              <h2 className=" text-base md:text-[0.8rem] lg:text-xl font-dmSans font-medium text-[#2C2F24] mt-2">
                {item.description}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
