import React from 'react'

export default function CompanyDetail() {
  return (
    <div>
      <div className="md:max-w-[600px] w-full mx-auto md:flex  gap-5 items-center md:gap-0 text-center  md:text-start justify-between px-2 bg-white py-10">
        <div className="sm:mb-3">
          <h3 className="md:text-xl text-2xl  font-semibold">Call Us:</h3>
          <p className="text-[#AD343E] text-xl mt-2 font-semibold">
            +1-234-567-8900
          </p>
        </div>
        <div className="sm:py-4">
          <h2 className="md:text-xl text-2xl my-3 md:my-0 font-semibold">Hour:</h2>
          <p className="text-[#2C2F24] text-[15px]">Mon-Fri: 11am - 8pm </p>
          <p className="text-[#2C2F24] text-[15px]">Sat, Sun: 9am - 10pm</p>
        </div>
        <div className="">
          <h1 className="md:text-xl text-2xl my-3 md:my-0 font-semibold">Our Location:</h1>
          <p className="text-[#2C2F24] text-[15px]">123 Bridge Street </p>
          <p className="text-[#2C2F24] text-[15px]">Nowhere Land, LA 12345</p>
          <p className="text-[#2C2F24] text-[15px]"> United States</p>
        </div>
      </div>
    </div>
  )
}
