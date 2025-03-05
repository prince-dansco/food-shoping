import React from 'react'
import Link from "next/link";
import image2 from "../../../../public/images/image/Chocolate_Icecream.png";
// import image2 from "../../public/images/image/page_3.png";


export default function Wallpaper() {
  return (
    <div>
        <div
          style={{
            backgroundImage: `url(${image2.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "object-fit",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center",
            padding: "10px",
          }}
          className=" md:h-[70vh]"
        >
          <div className=" backdrop:marker:visited:last:odd:only:text-red-300 md:px-[110px] opacity-50 md:py-[30px] py-3 bg-black ">
            <h1 className="md:text-4xl text-md font-bold mb-4">
              Welcome to the Best Eatery : <br />
              <span
                style={{
                  textShadow:
                    "2px 2px 0 #FF6347, 4px 4px 0 #00FF00, 6px 6px 0 #0000FF",
                }}
                className="truncate"
              >
                Bistro Bliss
              </span>
            </h1>
            <p className="md:text-lg text-[12px]">
              At{" "}
              <span
                style={{
                  textShadow:
                    "2px 2px 0 #FF6347, " +
                    "4px 4px 0 #00FF00, " +
                    "6px 6px 0 #0000FF, " +
                    "3px 4px 0 #FFA500, " +
                    "5px 5px 0 #800080",
                }}
              >
                Bistro Bliss
              </span>{" "}
              we bring you a culinary experience like no other. Our menu is
              crafted with the finest ingredients, offering a blend of
              traditional flavors and modern twists. Whether you&apos;re here for a
              quick bite or a lavish meal, we promise an unforgettable dining
              experience Our chefs are passionate about creating dishes that
              delight your taste buds. From savory appetizers to decadent
              desserts, every item on our menu is prepared with care and
              creativity. Whether it&apos;`s a birthday celebration, anniversary, or
              corporate gathering, our team will work with you to create a
              customized menu and experience that exceeds your expectations. you
              can contact the M.D{" "}
              <span
                style={{
                  textShadow:
                    "2px 2px 0 #FF6347, 4px 4px 0 #00FF00, 6px 6px 0 #0000FF",
                }}
              >
                UK-Code
              </span>
            </p>
            <div className="md:m-4 m-2 flex gap-5 justify-center ">
              <Link href="/contactpage">
                <button className=" outline outline-1 px-4 py-3 rounded-[35px] font-playfair bg-transparent hover:bg-neutral-400 ">
                  Contact Us
                </button>
              </Link>
              <Link href="/pagelight">
                <button className=" outline outline-1 px-4 py-3 rounded-[35px] font-playfair hover:bg-slate-500">
                  More Info
                </button>
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}
