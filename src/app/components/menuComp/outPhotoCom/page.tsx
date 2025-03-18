"use client";

import { useState } from "react";
import Image from "next/image";
import { FoodCategories } from "@/app/const/constDataMenu";

interface FoodItem {
  title: string;
  price: string;
  image: string;
  description: string;
}

export default function NavigatedButtons() {
  const [currentCategory, setCurrentCategory] = useState<string>("All");

  const handleFilter = (category: string) => {
    setCurrentCategory(category);
  };

  const filteredItems: FoodItem[] | undefined =
    currentCategory === "All"
      ? FoodCategories.find((cat) => cat.category === "All")?.items
      : FoodCategories.find((cat) => cat.category === currentCategory)?.items;

  return (
    <div className="md:px-[25px] lg:px-[110px] px-2">
      <div className="min-h-screen md:p-5  p-4">
        <div className="flex  flex-wrap   justify-center items-center gap-3 ">
          {FoodCategories.map((cat) => (
            <button
              key={cat.category}
              className={`px-6 py-2  my-4 outline outline-1  font-bold text-base font-dmSans w-[150px] ${
                currentCategory === cat.category ? "bg-[#AD343E] text-white" : "border-2"
              } text-black rounded-full `}
              onClick={() => handleFilter(cat.category)}
            >
              {cat.category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-12">
          {filteredItems && filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md  rounded-lg border text-center"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  quality={100}
                  priority
                  width={100}
                  height={160}
                  className="w-full h-40 object-cover mb-4 rounded-lg"
                />
                <div className="p-3">
                  <p className="text-[#AD343E] text-2xl font-dmSans font-bold ">
                    {item.price}
                  </p>
                  <h2 className="text-xl font-bold md:text-lg text-[#2C2F24] font-dmSans my-2">
                    {item.title}
                  </h2>
                  <p className="text-base text-[#414536]  font-dmSans font-normal  py-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No items available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
