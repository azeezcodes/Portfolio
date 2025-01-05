import Link from 'next/link';

const Footer = () => {
  return (
    <div className="rounded-t-lg grid px-6 pt-12 text-[#898989] bg-black mt-32  h-60">
      <div className="flex flex-col ">
        <p className="font-[500]">Want to Collaborate?</p>

        <div className="flex justify-between items-baseline  ">
          <p className="font-black text-[2rem] md:text-[8rem] md:-mt-7 ">
            Let's Talk ...
          </p>
          <div className=" font-light  text-xs md:text-sm flex flex-col md:flex-row md:gap-8 gap-1 justify-between cursor-pointer">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/abdulazeez-onadipe/"
            >
              {" "}
              <p className="hover:font-bold">LinkedIn</p>
            </Link>
            <Link target="_blank" href="https://github.com/azeezcodes/">
              {" "}
              <p className="hover:font-bold">Github</p>
            </Link>
            <Link
              className="flex flex-row gap-2 items-center"
              target="_blank"
              href="https://twitter.com/az_omoade"
            >
              {" "}
              <p className="hover:font-bold">Twitter</p>
            </Link>

            <Link target="_blank" href="mailto:onadipeabdulazeez@gmail.com">
              <p className="hover:font-bold">Email</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
