'use client';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaXmark } from 'react-icons/fa6';
import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
 

    const pathname = usePathname();
    const navs = ['about', 'skills', 'contact']
    const [showNav, setShowNav] = useState('right-[-1000px]')
  
    return (
        <>
            <nav className='fixed w-full  overflow-x-hidden shadow flex flex-row justify-between items-center py-[20px] z-[100] px-[30px] bg-[#EFEFEF]'>
                <Link className={`bebas font-bold  text-black uppercase text-[14px] md:text-[30px]`} href='/'>Azeezcodes</Link>

                <div style={{ transition: '1s' }} className={` fixed ${showNav} w-[50%] bg-[#EFEFEF]/70 md:w- top-0 justify-center  md:static items-center bottom-0 md:py-0 py-[50px]  gap-[30px] px-[100px] md:px-[20px] flex flex-col md:flex-row md:bg-0 rounded  shadow-xl md:shadow-none capitalize text-center`}>
                    {navs.map((link, index)=> {
                        return <Link key={index} aria-label={`link to ${link} page`} onClick={() => setShowNav('right-[-1000px]')} className={`link ${pathname == `/${link}` ? 'font-bold' : ''} text-slate-900 text-[15px]  md:text-[20px] `} href={link == 'home' ? '/' : link}>{link}</Link>
                    })}
                    <hr />
                    <div className='flex md:hidden gap-5 items-center'>
                        <Link className='flex flex-row gap-2 items-center' aria-label='link to my github profile' href='https://github.com/azeezcodes'>   <BsGithub className='text-slate-900 hover:text-[#898989]   bg-white shadow-2xl p-1 text-[30px] rounded-full ' /> </Link>
                        <Link className='flex flex-row gap-2 items-center' aria-label='link to my linkedin profile' href='https://www.linkedin.com/in/abdulazeez-onadipe/'> <BsLinkedin className='text-slate-900 hover:text-[#898989]  bg-white shadow-2xl p-1 text-[30px] rounded-full ' /></Link>
                        <Link className='flex flex-row gap-2 items-center' aria-label='link to my twitter profile' href='https://twitter.com/az_omoade'> <AiFillTwitterCircle className='text-slate-900 hover:text-[#898989]  bg-white shadow-2xl p-1 text-[30px] rounded-full ' /></Link>
                    </div>
                </div>
                <Link href="https://drive.google.com/file/d/1Rrd8EyYPWD99Im0l_fE1nN0uIS9ptT7D/view?usp=sharing">
                <button className='px-8 py-2 bg-[#cfcece]  rounded-md text-black font-semibold hidden md:block border border-[#898989]'>Download CV</button>
                </Link>
                <div className='relative z-10 flex md:hidden items-center '>
                    {showNav == 'right-[-1000px]' ? <AiOutlineMenu onClick={() => setShowNav('right-0')} className='text-[30px] text-black hover:text-grey-500' /> :
                        <FaXmark onClick={() => setShowNav('right-[-1000px]')} className='text-[30px] text-black hover:text-grey-500' />}
                </div>
            </nav>
        </>
    )
}

export default Navbar;