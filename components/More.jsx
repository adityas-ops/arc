import React, { useEffect, useState } from "react";
import Animetext2 from "./elements/Animetext2";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Accordian from "./elements/Accordian";
import Animtext from "./elements/Animtext";
import Link from "next/link";
import Footer from "./Footer";
// import ReactDOMServer from 'react-dom/server';
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

const Adata = [
  "Who is eligible to join Arc?",
  "Do I need to pay anything?",
  "Who are the hiring companies?",
  "What does the vetting process look like?",
  "What happens if I don't pass the vetting?",
  "Can I decline interview requests?",
  "Can I hide my profile from current or previous companies?",
  "After the 2-week period, what happens next?",
  "Can Arc help me find contract and freelance jobs?",
  "Can non-developers join Arc?",
  "What is Arc?",
  "How does Arc work?",
];

const testimony = [
    {
        name: "Jaun E. 🇭🇷",
        role:"Front-end dev in Crotia",
        img:"/images/testimony-one.png",
        desc1:"I recieved",
        desc2:" 4 interviews in two weeks,",
        desc3:"then accepted a remote role that was double my previous salary."
    },
    {
        name:"Tihomir C.🇬🇹",
        role:"Full stack dev in Argetina",
        img:"/images/testimony-two.png",
        desc1:"",
        desc2:"With Arc, I landed my dream job",
        desc3:"exciting tech company in the Bay Area - while working remotely from my hometown in Argetina."
    },
    {
        name:"Robsen F.🇧🇷",
        role:"Back-end dev in Brazil",
        img:"/images/testimony-three.png",
        desc1:"The personal coaching I received from the Arc team was incredibly valuable. I learned new ways to",
        desc2:"advanced in my career.",
        desc3:""
    }
]

function More() {
  const [padd, setPadd] = useState("10rem");
  const [page, setPage] = useState(3);
  const [pad2,setPad2] = useState("17rem")
  const [page2,setPage2] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      // Adjust perPage based on screen size
      if (window.innerWidth < 768) {
        setPadd("0rem");
        setPage(1);
        setPad2("1rem")
        setPage2(1)
      } else {
        setPadd("10rem");
        setPage(3);
        setPad2("17rem");
        setPage2(2)
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

//   const t = ReactDOMServer.renderToString(<Animtext title="radically different" />);

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
      <div className="pt-[3rem] pb-[6rem]  bg-[#F7F7F7] flex items-center justify-center relative w-full  h-full">
        <div className="w-full h-full relative pt-16  pb-[2rem]">
          <Splide
            hasTrack={false}
            aria-label="..."
            options={{
              perPage: page,
              padding: padd,
              pagination: false,
            }}
          >
            <SplideTrack>
              {Cdata.map((item, index) => {
                return (
                  <>
                    <SplideSlide key={index}>
                      <div className=" max-w-[350px]  rounded-[12px] bg-white text-center p-[2rem] shadow-md font-Inter  text-[1rem] font-[500]">
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
      <div className="bg-[#F7F7F7] md:pt-[12rem] pt-[6rem] pb-[8rem] w-full h-full ">
        <h2 className=" font-Inter lg:text-[3rem] md:text-[2.125rem]  font-[700] text-center lg:leading-[3.625rem] md:leading-[2.5rem] text-[1.875rem] leading-[2.25rem] w-[90%]">
          Want to know more?
        </h2>
        <div className=" flex flex-col justify-center items-center ">
          <div className=" lg:w-full px-4   lg:container md:px-[6rem] pt-[5rem]">
            {Adata.map((item, index) => {
              return (
                <>
                  <Accordian title={item} key={index} />
                </>
              );
            })}
            <Accordian
              title={`How is Arc a   remote job search platform?`}
            />
          </div>
          <div className=" lg:w-full px-4   lg:container md:px-[6rem] pt-[5rem]">
            <div className=" grid md:grid-cols-2 grid-cols-1 gap-8 ">
                <div className=" order-1 p-[2rem] bg-white shadow-sm rounded-[12px] font-Inter flex flex-col justify-between  text-[1.25rem] font-[700]">
                    <Animetext2 title="Arc Freelance"/>
                    <h4 className="text-[1.5rem] font-[700]  ">Grow your career no matter  where you live.</h4>
                    <div className="pt-[2rem]">
                    <Link href="#" className=" px-[31px] py-[15px] border border-blue text-[1rem] text-blue rounded-[4px] hover:bg-blue hover:text-white">
                        Join Arc today
                    </Link>
                </div>
                </div>
                <div className="  p-[2rem] bg-white shadow-sm rounded-[12px] font-Inter flex flex-col justify-between  text-[1.25rem] font-[700]">
                    <Animtext title="Arc"/>
                    <h4 className="text-[1.5rem] font-[700]  ">Work and earn your way. Find quality projects.</h4>
                    <div className="pt-[2rem]">
                    <Link href="#" className=" px-[31px] py-[15px] border border-blue text-[1rem] text-blue rounded-[4px] hover:bg-blue hover:text-white">
                       Sign up Now
                    </Link>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[3rem] pb-[6rem]  bg-[#1A1A1B] flex items-center justify-center relative w-full  h-full">
        <div className="w-full h-full relative pt-16  pb-[2rem]">
          <Splide
            hasTrack={false}
            aria-label="..."
            options={{
              perPage: page2,
            padding:pad2,
              pagination: false,
              gap:15
            }}
          >
            <SplideTrack>
              {testimony.map((item, index) => {
                return (
                  <>
                    <SplideSlide key={index}>
                      <div className=" lg:max-w-[414px] max-w-[350px] w-full  rounded-[12px] bg-[#252528] text-center p-[2rem] shadow-md font-Inter  text-[1rem] font-[400]">
                        <div className="lg:max-h-[180px] h-full">
                        <div className="flex justify-between w-full">
                            <img 
                            src={item.img}
                            alt="s"
                            className="w-[60px] h-[60px] "
                            />
                            <div className=" w-[75%] flex-col flex justify-evenly ">
                                <p className="w-full text-start font-[700] text-white">{item.name}</p>
                                <p className="w-full text-start text-white">{item.role}</p>
                            </div>
                        </div>
                        <div className="text-white pt-6">
                            {item.desc1} {" "}
                            <span className="font-[700]"><Animetext2 title={item.desc2}/></span> {item.desc3}
                        </div>
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
      <Footer/>
    </>
  );
}

export default More;
