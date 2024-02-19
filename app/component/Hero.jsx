import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
import { PhoneIcon, EnvelopeIcon, GlobeEuropeAfricaIcon } from '@heroicons/react/24/outline'


const Hero = () => {
    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])
    return (
        <div className=' pt-[200px] flex flex-col justify-center md:items-center sm:items-start px-6'>
            <div className="badge">
                <span className="inline-flex items-center gap-x-1.5 rounded-full md:px-6 px-4 md:py-3 py-2  md:text-normal text-base font-medium text-gray-900 ring-1 ring-inset ring-gray-200 bg-white">
                    <svg className="h-1.5 w-1.5 fill-green-500" viewBox="0 0 6 6" aria-hidden="true">
                        <circle cx={3} cy={3} r={3} />
                    </svg>
                    Available to work
                </span>
            </div>
            <p className="bebas md:text-[100px] text-[60px] tracking-tight	uppercase sm:text-left ">Crafting <span className='text-[#898989] -mt-6 md:mt-0'> Digital</span> </p>
            <p className='bebas md:text-[100px] text-[60px]  tracking-tight uppercase  -mt-8 sm:text-left '> <span className='text-[#898989]'>Experiences</span>  That Captivate</p>
            <p className='mt-4 font-normal md:text-3xl text-base md:text-center tracking-wide sm:text-left'>Elevate your online presence with expert Software Development</p>

            <div className="flex w-2/4 bg-slate-800 h-0.5 mt-8"></div>


            <div data-aos='fade-right' data-aos-duration='2500' className=' w-fit md:flex grid mt-3 gap-6'>
                <div className='flex items-center gap-2'>
                    <div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-gray-300 bg-gray-200  font-medium text-white"'>                    <PhoneIcon className="h-6 w-6 text-gray-500" />
                    </div>
                    <p>08024248783</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-gray-300 bg-gray-200  font-medium text-white"'>  <EnvelopeIcon className="h-6 w-6 text-gray-500" /></div>

                    <p>onadipeabdulazeez@gmail.com</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-gray-300 bg-gray-200  font-medium text-white"'>                     <GlobeEuropeAfricaIcon className="h-6 w-6 text-gray-500" />
                    </div>

                    <p>Remote</p>
                </div>
            </div>

        </div>
    )
}

export default Hero