import React from "react";
import {
  SiAdidas,
  SiDeliveroo,
  SiDoordash,
  SiFoodpanda,
  SiInstacart,
} from "react-icons/si";

export default function MenuDetail() {
  return (
    <div>
      <div className="  md:px-[35px]  lg:px-[95px] px-5 bg-[#F9F9F7]  py-10 md:flex items-center justify-between gap-6 mt-6">
        <div className="max-w-[540px] w-full text-center md:text-start justify-self-center">
          <h2 className="text-[#2C2F24] md:text-3xl lg:text-6xl  w-full  text-xl font-semibold md:my-5 my-2 ">
            You can order through apps
          </h2>
          <p className="text-[#414536] md:text-[16px] max-w-[382px] w-full text-[13px]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum
            sed et aliquet aliquet risus tempor semper.
          </p>
        </div>
        <div className="py-12  px-4 md:px-0 items-center w-full  justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-4 ">
            <div className="p-4 bg-white text-xl text-center rounded-md shadow-xl ">
              <button className="font-bold">
                Uber <span className="text-[#05C167]">Eats</span>
              </button>
            </div>
            <div className="p-4 bg-white text-xl rounded-md text-center shadow-lg text-[#F63440]">
              <button className="font-bold "> GRUBHUB</button>
            </div>
            <div className="p-4 bg-white text-xl rounded-md text-center shadow-lg text-[#000000]">
              <button className=" font-bold">Postmates</button>
            </div>
            <div className="p-4 bg-white text-lg rounded-md shadow-lg text-[#FF3008] flex justify-center  items-center  ">
              <SiDoordash className="flex-none mr-1" />
              <button className="font-semibold">DOORDASH</button>
            </div>
            <div className=" p-4 bg-white text-xl rounded-md shadow-lg text-[#D70F64] flex justify-center items-center">
              <SiFoodpanda className="flex-none mr-1" />
              <button className=" font-semibold">foodpanda</button>
            </div>
            <div className=" bg-white text-xl rounded-md shadow-lg p-4  text-[#00CCBC] flex justify-center items-center">
              <SiDeliveroo className="text-[#00CCBC] flex-none mr-1 " />
              <button className="font-semibold ">deliveroo</button>
            </div>
            <div className="p-4 bg-white text-xl rounded-md shadow-lg text-[#43B02A] flex justify-center items-center">
              <SiInstacart className="text-[#FF8200] flex-none mr-1" />
              <button className=" font-bold"> instacart</button>
            </div>
            <div className="p-4 bg-white text-xl text-center rounded-md shadow-lg text-[#FF3131]">
              <button className="font-bold"> JUSTEAT </button>
            </div>{" "}
            <div className="p-4 bg-white text-lg rounded-md shadow-lg text-[#2C2F24] flex justify-center items-center">
              <SiAdidas className="text-[#FC9153] flex-none mr-1 " />
              <button className=" font-semibold">
                DiDi <span className="ml-1">Food</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
