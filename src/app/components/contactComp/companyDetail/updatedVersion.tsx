// import { hours, location } from "@/app/const/constDataContact";

import { hours, location } from "@/app/const/constDataContact";

export default function UpdatedCompanyDetail() {
  return (
    <div>
      <div className="md:max-w-[600px] w-full mx-auto md:flex  gap-5  md:gap-0 text-center items-center my-16 md:text-start justify-between px-2 bg-white py-10">
        <div className="sm:mb-3">
          <h3 className=" text-xl my-3 md:my-0 font-dmSans font-bold text-[#2C2F24]">
            Call Us:
          </h3>
          <p className="text-[#AD343E] text-xl mt-2 font-semibold">
            +1-234-567-8900
          </p>
        </div>
        <div className="sm:py-4">
          <h2 className=" text-xl my-3 md:my-0 font-dmSans font-bold text-[#2C2F24]">
            Hour:
          </h2>
          <div className="mt-2">
            {hours.map((hours, index) => (
              <p
                className="text-[#2C2F24] text-lg font-dmSans font-normal "
                key={index}
              >
                {hours}
              </p>
            ))}
          </div>
        </div>
        <div className="">
          <h1 className=" text-xl my-3 md:my-0 font-dmSans font-bold text-[#2C2F24]">
            Our Location:
          </h1>

          <div className="mt-2">
            {location.map((location, index) => (
              <p
                className="text-[#2C2F24] text-lg font-dmSans font-normal"
                key={index}
              >
                {location}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
