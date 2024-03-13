import Image from 'next/image'
import React from 'react'
import skillChart from "../../public/skills.svg"
import tech from "../../public/tech.png"
import easy from "../../public/easy.png"
import phone from "../../public/phone.png"
import Link from 'next/link'
import { CgLink } from "react-icons/cg";
import { FiGithub } from "react-icons/fi";

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


        <div className="grid md:px-44 p-8">
          <div className='md:justify-self-start justify-self-center  md:w-[500px] w-fit h-fit rounded-md  mt-16'>
            <Image src={easy} alt='skillChart' width={500}
              height={500} />
            <div className="flex flex-col">
              <p className="font-black text-2xl text-[#363636] mt-3"> EasyCommun</p>
              <p className="text-xs text-[#898989] mt-2 "> A Next.js-based platform for seamless communication between teachers and students. With features like performance tracking and file sharing, Easycommu revolutionizes educational interaction. Teachers engage students effortlessly, while students access resources and updates conveniently. Easycommu redefines education communication, fostering collaboration and efficiency. Experience the future of learning with Easycommu.</p>
            </div>
            <div className="flex mt-2 gap-4 items-center">
              <Link href="   https://adminsite.vercel.app/" target='blank'><CgLink size={20} /></Link>                         
              <Link href="  https://github.com/azeezcodes/adminsite" target='blank'> <FiGithub size={18} /></Link>          
            </div>
          </div>
          <div className="md:justify-self-end  justify-self-center   md:w-[500px] w-fit h-fit rounded-md mt-16 ">
            <Image src={tech} alt='skillChart' width={500}
              height={500} />
            <div className="flex flex-col">
              <p className="font-black text-2xl text-[#363636] mt-3">Tech1M</p>
              <p className="text-xs text-[#898989] mt-2 ">  A Talent Acquisition Platform revolutionizing the way businesses find, evaluate, hire, and manage global payroll. Powered by React, Next.js, and OpenAI, Tech1M develops a pipeline of tech talents with cutting-edge technology. Seamlessly connect with top talent worldwide and streamline your hiring process with Tech1M.</p>
            </div>
            <div className="flex mt-2 gap-4 items-center">
              <Link href="https://tech1m.com/" target='blank'><CgLink size={20} /></Link>           
            </div>
          </div>

          <div className='md:justify-self-start justify-self-center    md:w-[500px] w-fit h-fit rounded-md mt-16'>
            <Image src={phone} alt='skillChart' width={500}
              height={500} />
            <div className="flex flex-col">
              <p className="font-black text-2xl text-[#363636] mt-3">Mstore</p>
              <p className="text-xs text-[#898989] mt-2 ">Mstore is a revolutionary two-in-one platform that combines the features of an ecommerce marketplace and a freelancing platform. It allows buyers to access sellers storefronts to buy and sell goods and services, creating a seamless experience for both transactions and freelance collaborations.</p>

            </div>
            <div className="flex mt-2 gap-4 items-center">
              <Link href=" https://mstore-peach.vercel.app/" target='blank'><CgLink size={20} /></Link>
            </div>
                </div>
        
        
        </div>
        
      </div>
    </>
  )
}

export default page