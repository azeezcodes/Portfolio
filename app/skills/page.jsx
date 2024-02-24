import Image from 'next/image'
import React from 'react'
import skillChart from "../../public/skills.svg"

const page = () => {
  return (
    <>
      <div className='flex  md:flex-row flex-col items-center justify-around px-20 pt-[160px]'>
        <div className="grid">
          <p className='text-[#898989] text-left text-xs'>Hey, Checkout Azeezcodes</p>
          <p className="bebas md:text-[100px] text-[40px] tracking-tight	uppercase sm:text-left text-[#898989] md:-mt-8">SKILLS
            <span className='text-black'> AND </span>
            TOOLS</p>
        </div>
        
        <div>
          <Image src={skillChart} alt='skillChart' width={500}
            height={500}  />
        </div>

      </div>
    </>
  )
}

export default page