import React from 'react'
import { BsFillSendFill } from "react-icons/bs";


function Newsletter() {
  return (
    <div className='flex justify-center items-center h-[350px] w-[100%] flex-col bg-[#c4a4f9]'>
      <h1 className='text-[50px] font-bold' >
        NEWSLETTER
      </h1>
      <h2 className='text-[20px] mt-2'>
        Always is touch with us for your faourite product
      </h2>
      <div className='flex mt-[3rem] items-center justify-between min-w-[30rem] min-h-[2rem] bg-white border-[#cccccc] rounded-[5px] overflow-hidden'>
        <input type='email' placeholder='email' className='border-none pl-[20px] flex-[7] outline-none '/>
        <button className='flex-1 bg-[#4caf50] h-[100%] '><BsFillSendFill className='  text-white ml-[20px] size-6' /></button>
      </div>
    </div>
  )
}

export default Newsletter