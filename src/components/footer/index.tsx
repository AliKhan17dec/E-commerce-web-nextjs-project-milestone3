import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-black text-white text-center items-center'>
      <div className='text-[40px]'>Clothing Vista</div>
      <div className='text-[30px] mt-2'>Stay In Touch</div>
      <div className='flex items-center justify-center gap-4 mt-2'>
        <div className='hover:text-gray-300'>
        <FaFacebook size={24}/>
        </div>
        <div className='hover:text-gray-300'>
        <FaTwitter size={24}/>
        </div>
        <div className='hover:text-gray-300'>
        <RiInstagramFill size={24}/>
        </div>
        <div className='hover:text-gray-300'>
        <FaLinkedin size={24}/>
        </div>
      </div>
      <div className='text-white txt-[16px] mt-2'>
      © 2024 All rights reserved.
      </div>
    </div>
  )
}

export default Footer