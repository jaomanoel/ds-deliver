import React from 'react'

import Logo from "../../../assets/logo.svg";

function index() {
  return (
    <nav className='w-full p-4 flex justify-center bg-red-500'>
      <div className='max-w-7xl justify-start w-full'>
          <div className='flex gap-4 items-center'>
              <img src={Logo} alt="DS Delivery" />
              <a href="/" className='text-white font-bold text-2xl leading-8 tracking-tight'>DS Delivery</a>
          </div>
      </div>
    </nav>
  )
}

export default index;