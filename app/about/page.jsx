"use client";
import Image from "next/image";
import Link from "next/link";
import myImage from "../../public/guy.png";
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
const about = () => {
   useEffect(() => {
      Aos.init({ duration: 1000 });
   }, []);
   const words = [{ name: "Git Commit", number: "2k+" },
   { name: "Live Project", number: "6" }, { name: "Trainees", number: "20+" }]
   return (
      <div className="font-bold" data-aos="fade-up"
         data-aos-duration="1000">
         <main className="flex min-h-screen lg:flex-row  gap-5 flex-col py-[100px] pt-[160px] items-center font-poppins justify-around px-10 pb-4">
            <div

               className="flex max-w-[700px] flex-col gap-5"
            >
               <p className="bebas md:text-[100px] text-[60px] tracking-tight	uppercase sm:text-left  ">
                  ABOUT{" "}
                  <span className="text-[#898989] -mt-6 md:mt-0">
                     AZEEZCODES
                  </span>{" "}
               </p>
               <p className="text-sm text-slate-500 font-light">

                  I'm a dedicated Frontend Developer driven by a passion for crafting impactful solutions that exceed expectations. With expertise in JavaScript and TypeScript, I specialize in React and Next.js, though I'm familiar with other JavaScript framework and libraries as well. My focus on innovation and value delivery ensures seamless user experiences and positive outcomes for businesses and communities."
               </p>
               <p className="text-sm text-slate-500 font-light">
                  "Through problem-solving and collaboration, I optimize performance, ensure cross-browser compatibility, and manage complex data flows. My adaptability across JavaScript frameworks enables me to tackle any challenge effectively. I believe in translating vision into reality and am committed to making a lasting impact through transformative experiences."
               </p>
               <p className="text-sm text-slate-500 font-light">
                  "Let's collaborate to turn ideas into reality and create experiences that resonate with users. Together, we can drive innovation and deliver excellence in every project
               </p>
               <div className="flex gap-5 items-center">
                  <Link
                     aria-label="link to my projects page"
                     className="border p-2 rounded text-[15px] md:text-[20px]  text-slate-50 font-[500] hover:text-slate-50 hover:bg-slate-700 bg-slate-900"
                     href="https://drive.google.com/file/d/1Rrd8EyYPWD99Im0l_fE1nN0uIS9ptT7D/view?usp=sharing"
                  >
                    Download CV
                  </Link>
               </div>
            </div>
            <Image
               data-aos="fade-up"
               data-aos-duration="1000"
               className="bg-transparent"
               alt="azeezcodes"

               src={myImage}
            ></Image>

         </main>

         <div data-aos="zoom-in"
            data-aos-duration="1000" className="w-full flex md:flex-row flex-col justify-evenly items-center gap-y-3">
            {words.map((a, i) => (<div className="w-[15rem] h-[12rem] rounded-lg border border-gray-300 bg-gray-200 flex flex-col justify-center items-center" key={i}>
               <p className="text-[4rem]  text-[#898989]">{a.number}</p>
               <p className="text-base text-gray-800">{a.name}</p>
            </div>))}

         </div>
      </div>
   );
};

export default about;
