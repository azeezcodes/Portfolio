'use client'

import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
import Hero from './component/Hero';

export default function Home() {

  useEffect(() => {
  Aos.init({duration: 800})
}, [])
  return (
    <>
      <div className='' data-aos='fade-up' data-aos-duration='1000' > <Hero /></div>
     

   
      </>
  )
}