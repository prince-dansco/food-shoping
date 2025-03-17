import React from 'react'


interface HeadlinesPagesProps {
    h1: string;
  }
export default function HeadlinesPages({ h1 }: HeadlinesPagesProps) {
  return (
    <div>
       <div className="text-center py-14 flex flex-col justify-center">
      <h1 className='md:text-7xl text-3xl font-semibold  my-3 w-full font-playfair mx-auto'>{h1}</h1>
      <p className='text-[#495460] md:text-[18px] text-[14px] max-w-[550px] w-full mx-auto px-2 md:px-0 font-dmSans'>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
     </div>
    </div>
  )
}
