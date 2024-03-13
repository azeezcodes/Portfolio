import Image from 'next/image'
import React from 'react'
import skillChart from "../../public/skills.svg"
import tech from "../../public/tech.png"
import easy from "../../public/easy.png"

const page = () => {
  return (
    <>
      <div className="grid">
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

        
        <p className="bebas md:text-[100px] text-[40px] tracking-tight	uppercase text-center text-[#898989] mt-8">MY
          <span className='text-black'> PROJECT</span>
          </p>


        <div className="grid px-44">
          <div className='justify-self-start  w-[500px] h-fit rounded-md  border-4 border-grey-600 mt-16'>
            <Image src={easy} alt='skillChart' width={500}
              height={500} />
          </div>
          <div className="justify-self-end   w-[500px] h-fit  rounded-md border-4  border-grey-600  mt-16 ">
            <Image src={tech} alt='skillChart' width={500}
              height={500} />
          </div>
          <div className='justify-self-start  w-[500px] h-fit rounded-md border-4 border-grey-600 mt-16'></div>

        </div>
        
      </div>
    </>
  )
}

export default page