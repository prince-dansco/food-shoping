"use client";

import { useState } from "react";
import { foodCategories } from "../photoArray/page";
import Image from "next/image";

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
      ? foodCategories.find((cat) => cat.category === "All")?.items
      : foodCategories.find((cat) => cat.category === currentCategory)?.items;

  return (
    <div className=" md:px-[110px] px-3">
   

    <div className="min-h-screen p-8">
      <div className="md:flex  sm:flex-wrap  gap-0 sm:gap-3 justify-center md:space-x-4  space-x-2 mb-8">
        {foodCategories.map((cat) => (
          <button
            key={cat.category}
            className={`px-6 py-2  my-4 outline outline-1 ${
              currentCategory === cat.category ? "bg-[#AD343E]" : "border-2"
            } text-black rounded-[3em] `}
            onClick={() => handleFilter(cat.category)}
          >
            {cat.category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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
              <p className="text-[#AD343E] text-1xl  font-semibold mb-2">{item.price}</p>
              <h2 className="text-lg font-semibold text-[#2C2F24] mb-2">{item.title}</h2>
              <p className="text-sm text-[#414536]  mb-2 py-2">{item.description}</p>
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
