import React from 'react'
import Animtext from './elements/Animtext'
import Link from 'next/link'

function Features() {
  return (
    <>
      <div className='bg-[#F7F7F7] w-full h-full flex justify-center items-center flex-col'>
        <div className=' lg:pt-[7.5rem] pt-[3.75rem]'>
         <h2 className='lg:px-[7.5rem] px-[1rem] font-Inter lg:text-[3rem] md:text-[2.125rem] font-[700] text-center lg:leading-[3.625rem] md:leading-[2.5rem] text-[1.875rem] leading-[2.25rem]'>Get featured to companies and land a remote job in 14 days</h2>
         <div className='flex items-center justify-center text-center w-full mt-[2rem] px-4'>
         <span class="w-[18px] h-[18px] text-[18px] pr-4 text-green-600"><svg xmlns="http://www.w3.org/2000/svg" className='w-[18px] h-[18px] text-green-400 '  viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="#fff"></path><path d="M3 11.66L4.9 9.6l5.58 5.15L18.56 6l2.05 1.9-8.07 8.75a2.79 2.79 0 0 1-3.95.16z"></path><path d="M10.48 14.75L4.9 9.6 3 11.66l5.59 5.15a2.78 2.78 0 0 0 3.93-.14l8.09-8.77L18.56 6z" fill='rgb(28, 187, 155)'></path></svg></span>
         <p className='md:text-[1.375rem] text-[1.125rem] font-[500] font-Inter'>For senior developers looking for permanent remote roles</p>
         </div>
         <div className='flex items-center justify-center text-center w-full pb-[2rem] px-4'>
         <span class="w-[18px] h-[18px] text-[18px] pr-4 text-green-600"><svg xmlns="http://www.w3.org/2000/svg" className='w-[18px] h-[18px] text-green-400 '  viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="#fff"></path><path d="M3 11.66L4.9 9.6l5.58 5.15L18.56 6l2.05 1.9-8.07 8.75a2.79 2.79 0 0 1-3.95.16z"></path><path d="M10.48 14.75L4.9 9.6 3 11.66l5.59 5.15a2.78 2.78 0 0 0 3.93-.14l8.09-8.77L18.56 6z" fill='rgb(28, 187, 155)'></path></svg></span>
         <p className='md:text-[1.375rem] text-[1.125rem] font-[500] font-Inter'>Remote jobs at fast-growing tech companies and startups</p>
         </div>
        </div>
        <div className='lg:px-[7.5rem] md:px-[3.25rem] px-[1.75rem]'>
        {/* card start */}
        <div className='bg-[#FFFFFF] md:p-[6.75rem] p-[3.75rem] lg:mx-[4rem] md:mx-[2rem] mx:mx-[1rem] rounded-[12px] shadow-xl mx-4 mt-14'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-20'>
              <div className=' font-Inter'>
                <h3 className='text-[1.25rem] font-[700]'>
                  <Animtext title="1. Effortless"/>
                </h3>
                <h4 className='md:text-[2.5rem] text-[1.75rem] font-[700] md:leading-[3rem] pt-6 '>
                No job applications. Speak directly to hiring managers.
                </h4>
                <p className='text-[1.125rem] font-[500] leading-[1.5rem] pt-6'>
                Stop sending resumes into the abyss and getting spammed by recruiters. Get your profile featured to hiring managers, and get invited directly to interviews.
                </p>
              </div>
              {/* images purpose */}
              <div className='w-fit'>
              <div className='card1'>
                <figure>
                  <img 
                  src='/images/card-purple-grain.png'
                  alt='card-purple-grain'
                  className=' max-w-[100%] '
                  />
                  <div class="layer1" style={{opacity:"1",transform:"none"}}></div> 
                  <div class="layer2" style={{opacity:"1",transform:"none"}}></div> 
                  <div class="layer3" style={{opacity:"1",transform:"none"}}></div>
                 
                </figure>
              </div>
              </div>
            </div>
        </div>
        {/* card end */}
        {/* card start */}
        <div className='bg-[#FFFFFF] md:p-[6.75rem] p-[3.75rem] lg:mx-[4rem] md:mx-[2rem] mx:mx-[1rem] rounded-[12px] shadow-xl mx-4 mt-14'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-20'>
              {/* images purpose */}
              <div className='w-fit md:order-1 order-2'>
              <div className='card2'>
                <figure>
                  <img 
                  src='/images/card-blue-grain.png'
                  alt='card-purple-grain'
                  className=' max-w-[100%] '
                  />
                  <div class="layer1" style={{opacity:"1",transform:"none"}}></div> 
                  <div class="layer2" style={{opacity:"1",transform:"none"}}></div> 
                  <div class="layer3" style={{opacity:"1",transform:"none"}}></div>
                  <div class="layer4" style={{opacity:"1",transform:"none"}}></div>
                 
                </figure>
              </div>
              </div>
              <div className=' font-Inter md:order-2 order-1'>
                <h3 className='text-[1.25rem] font-[700]'>
                  <Animtext title="2. Fast and Effective"/>
                </h3>
                <h4 className='md:text-[2.5rem] text-[1.75rem] font-[700] md:leading-[3rem] pt-6 '>
                Receive multiple offers in 2 weeks.
                </h4>
                <p className='text-[1.125rem] font-[500] leading-[1.5rem] pt-6'>
                Meet tech companies that know your preferences and expected salary up front. This saves everyone time and increases the intent to hire for each interview.
                </p>
              </div>
            </div>
        </div>
        {/* card end */}
         {/* card start */}
         <div className='bg-[#FFFFFF] md:p-[6.75rem] p-[3.75rem] lg:mx-[4rem] md:mx-[2rem] mx:mx-[1rem] rounded-[12px] shadow-xl mx-4 mt-14'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-20'>
              <div className=' font-Inter'>
                <h3 className='text-[1.25rem] font-[700]'>
                  <Animtext title="3. Personal Support"/>
                </h3>
                <h4 className='md:text-[2.5rem] text-[1.75rem] font-[700] md:leading-[3rem] pt-6 '>
                Talent partners help you stand out across borders.
                </h4>
                <p className='text-[1.125rem] font-[500] leading-[1.5rem] pt-6'>
                Yes, even senior developers benefit from coaching. Get free, unbiased support from our talent partners to review your profile, prep for interviews, and negotiate a higher salary.
                </p>
              </div>
              {/* images purpose */}
              <div className='w-fit'>
              <div className='card3'>
                <figure>
                  <img 
                  src='/images/card-purple-grain.png'
                  alt='card-purple-grain'
                  className=' max-w-[100%] '
                  />
                  <div class="layer4" style={{opacity:"1",transform:"none"}}></div> 
                </figure>
              </div>
              </div>
            </div>
        </div>
        {/* card end */}
        <div className='w-full h-full py-20 flex items-center justify-center'>
          <Link href="#"
          className=' w-auto bg-blue w-min-[70px] font-Inter font-[500] text-white border-[1px] border-blue rounded-[4px] py-[15px] px-[31px]'
           >
            Join Arc today
          </Link>
        </div>
        </div>
      </div>
    </>
  )
}

export default Features