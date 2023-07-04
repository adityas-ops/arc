import Link from 'next/link'
import React from 'react'
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {BiLogoLinkedin} from "react-icons/bi"
function Footer() {
  return (
    <>
      <footer className="w-full h-full flex items-center bg-black  justify-center">
      <div className='border-t-[1px] border-white container '>
      <div className='hidden md:flex  justify-between w-full h-[60px] items-center text-white'>
      <p>© Copyright 2023 Arc</p>
      <div className='flex  items-center'>
        <Link href="#" className='mx-2'>
          Cokies
        </Link>
        <Link href="#" className='mx-2'>
          Privacy & policy
        </Link>
        <Link href="#" className='mx-2'>
         Terms of services
        </Link>
        <Link href="#" className='mx-2'>
         <BsFacebook className='text-2xl'/>
        </Link>
        <Link href="#" className='mx-2'>
          <AiFillTwitterCircle className='text-2xl'/>
        </Link>
        <Link href="#" className='mx-2'>
        <BiLogoLinkedin className='text-2xl'/>
        </Link>
      </div>
      </div>
      <div className='block md:hidden  text-white'>
        <div className='flex pt-6 justify-center '>
        <Link href="#" className='mx-2'>
         <BsFacebook className='text-2xl'/>
        </Link>
        <Link href="#" className='mx-2'>
          <AiFillTwitterCircle className='text-2xl'/>
        </Link>
        <Link href="#" className='mx-2'>
        <BiLogoLinkedin className='text-2xl'/>
        </Link>
        </div>
        <div className='pt-4 text-center'>
        © Copyright 2023 Arc
        </div>
        <div className='flex w-full px-6 text-[14px] py-4 justify-between'>
        <Link href="#" className='mx-2'>
          Cokies
        </Link>
        <Link href="#" className='mx-2'>
          Privacy & policy
        </Link>
        <Link href="#" className='mx-2'>
         Terms of services
        </Link>
        </div>
      </div>
      </div>
      </footer>
    </>
  )
}

export default Footer