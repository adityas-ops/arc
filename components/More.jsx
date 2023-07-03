import React, { useEffect, useState } from "react";
import Animetext2 from "./elements/Animetext2";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
const Cdata = [
  {
    name: "Salary Explorer",
    desc: "Know your worth by checking our global developer salary benchmark and remote salary database.",
    img: "/images/salary-explorer.png",
  },
  {
    name: "Resume Builder",
    desc: "If you need a resume fast, use our free tool to create an ATS-optimized resume in 3 minutes.",
    img: "/images/resume-builder.png",
  },
  {
    name: "Remote Job Discovery",
    desc: "Browse remote engineering job posts aggregated from around the web, matched to your preferences.",
    img: "/images/remote-job-discovery.png",
  },
  {
    name: "Virtual Events",
    desc: "Grow your career with online events hosted by tech experts and members of community worldwide.",
    img: "/images/virtual-events.png",
  },
];

function More() {
  const [padd, setPadd] = useState("10rem");
  const [page, setPage] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      // Adjust perPage based on screen size
      if (window.innerWidth < 768) {
        setPadd("0rem");
        setPage(1);
      } else {
        setPadd("10rem");
        setPage(3);
      }
    };

    // Set initial perPage value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
    <div className="bg-[#F7F7F7] w-full h-full flex justify-center items-center flex-col">
      <div className=" lg:pt-[7.5rem] pt-[3.75rem]   flex flex-col items-center">
        <h2 className=" font-Inter lg:text-[3rem] md:text-[2.125rem] font-[700] text-center lg:leading-[3.625rem] md:leading-[2.5rem] text-[1.875rem] leading-[2.25rem] w-[90%]">
          What&apos;s more? Other ways we help{" "}
          <Animetext2 title="supercharge" /> your remote job search:
        </h2>
      </div>
    </div>
    <div className='pt-[3rem] pb-[6rem] bg-[#F7F7F7] flex items-center justify-center relative w-full  h-full'>
       <div className='w-full h-full relative pt-16'>
       <Splide
            hasTrack={false}
            aria-label="..."
            options={{
                perPage:page,
                padding:padd,
                pagination:false
                
            }}
          >
            <SplideTrack>
              {Cdata.map((item, index) => {
                return (
                  <>
                    <SplideSlide  key={index}>
                      <div
                       
                        className=" max-w-[350px]  rounded-[12px] bg-white text-center p-[2rem] shadow-md font-Inter  text-[1rem] font-[500]"
                      >
                        <h3 className="text-[1.25rem] font-[700] font-Inter">
                          {item.name}
                        </h3>
                        <p className="pt-[1rem]">{item.desc}</p>
                        <div className="pt-[3rem]">
                          <img src={item.img} alt="as" />
                        </div>
                      </div>
                    </SplideSlide>
                  </>
                );
              })}
            </SplideTrack>

            <div className="absolute w-full bottom-[-30%] lg:right-[45%] right-[25%]   flex justify-end">
              <div className="splide__arrows md:w-[10%] w-[40%] relative">
                <button className=" splide__arrow--prev    p-2 border rounded-[50%] border-zinc-300 bg-white cursor-pointer mx-2">
                  <IoIosArrowForward className="text-xl font-[400]" />
                </button>
                <button className="splide__arrow--next  p-2 border rounded-[50%] border-zinc-300 bg-white cursor-pointer mx-2">
                  <IoIosArrowForward className="text-xl font-[400]" />
                </button>
              </div>
            </div>
          </Splide>
       </div>
       </div>
       <div className="bg-[#F7F7F7] md:pt-[12rem] pt-[6rem] w-full h-full ">
       <h2 className=" font-Inter lg:text-[3rem] md:text-[2.125rem] font-[700] text-center lg:leading-[3.625rem] md:leading-[2.5rem] text-[1.875rem] leading-[2.25rem] w-[90%]">
       Want to know more?
        </h2>
       </div>
    </>
  );
}

export default More;
