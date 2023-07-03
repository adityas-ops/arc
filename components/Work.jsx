import React from "react";
import Animtext from "./elements/Animtext";
import Link from "next/link";

function Work() {
  return (
    <>
      <div className="py-[6.5rem] w-full h-full flex justify-center items-center">
        <div className=" max-w-[1080px] w-full mx-auto">
          <h2 className=" font-Inter font-[700] md:text-[3rem] text-[2.5rem]  w-full text-center  ">
            How Arc Works
          </h2>
          {/* start */}
          <div className=" w-full p-[4rem] common first  m-0">
            <div className="grid md:grid-cols-2 grid-cols-1">
              <div>
                <h3 className="text-[1.375rem] font-[700] font-Inter mb-4">
                  <Animtext title="Step. 1" />
                </h3>
                <h4 className="md:text-[2.5rem] text-[1.75rem] font-[700] font-Inter leading-[3rem]">
                  Sign up and complete the vetting process.
                </h4>
                <div className=" font-Inter text-[1.125rem] leading-[1.5rem] font-[500] ">
                  <ul className=" list-decimal mt-[2rem]">
                    <li className="mb-5">
                      Do a communication assessment. Record your answers to
                      video questions or schedule a quick chat to help us
                      understand your English level.
                    </li>
                    <li className="mb-5">
                      Take a skills assessment: a coding challenge or a
                      technical interview.
                    </li>
                  </ul>
                </div>
                <p className="font-Inter text-[1.125rem] leading-[1.5rem] font-[500]">
                  Learn more about the
                  <Link href="#" className=" text-blue ">
                    vetting process.
                  </Link>
                </p>
              </div>
              <div className="w-full flex items-center  justify-center">
                <img
                src="/images/step-1-vetting-process-new.png"
                alt="ad"
                className="w-[360px] h-[250px] pt-10 md:pt-0"
                />
              </div>
            </div>
          </div>
          {/* end */}
           {/* start */}
           <div className=" w-full p-[4rem] common first m-0 pt-14">
            <div className="grid md:grid-cols-2 grid-cols-1">
              <div>
                <h3 className="text-[1.375rem] font-[700] font-Inter mb-4">
                  <Animtext title="Step. 2" />
                </h3>
                <h4 className="md:text-[2.5rem] text-[1.75rem] font-[700] font-Inter leading-[3rem]">
                Your profile gets featured to companies for 2 weeks.
                </h4>
                <div className=" font-Inter text-[1.125rem] leading-[1.5rem] font-[500] ">
                  <ul className=" list-decimal mt-[2rem]">
                    <li className="mb-5">
                    Get interview requests in your inbox.
                    </li>
                    <li className="mb-5">
                    Join personal coaching sessions.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full flex items-center  justify-center">
                <img
                src="/images/step-2-image.png"
                alt="ad"
                className="w-[360px] h-[250px] pt-10 md:pt-0"
                />
              </div>
            </div>
          </div>
          {/* end */}
            {/* start */}
            <div className=" w-full p-[4rem] common first m-0 pt-14">
            <div className="grid md:grid-cols-2 grid-cols-1">
              <div>
                <h3 className="text-[1.375rem] font-[700] font-Inter mb-4">
                  <Animtext title="Step. 3" />
                </h3>
                <h4 className="md:text-[2.5rem] text-[1.75rem] font-[700] font-Inter leading-[3rem]">
                Receive offers. Get hired.
                </h4>
                <div className=" font-Inter text-[1.125rem] leading-[1.5rem] font-[500] mt-10">
                Once you land a job, we support you in the hiring process. We make it easy to get hired and paid working from anywhere.
                </div>
              </div>
              <div className="w-full flex items-center  justify-center">
                <img
                src="/images/step-3-image.png"
                alt="ad"
                className="w-[360px] h-[250px] pt-10 md:pt-0"
                />
              </div>
            </div>
          </div>
          {/* end */}
          <div className='w-full h-full pt-20 flex items-center justify-center'>
          <Link href="#"
          className=' w-auto bg-blue w-min-[70px] font-Inter font-[500] text-white border-[1px] border-blue rounded-[4px] py-[15px] px-[31px]'
           >
            Join Arc today
          </Link>
        </div>
        </div>
      </div>
    </>
  );
}

export default Work;
