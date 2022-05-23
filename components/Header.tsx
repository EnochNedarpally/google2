import {SearchIcon } from '@heroicons/react/outline'
import { MicrophoneIcon, XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { FormEvent, useState } from 'react'
import Avatar from './Avatar'
import HeaderItems from './HeaderItems'

const Header = () => {
    const [input, setInput] = useState("")
  const router = useRouter();
  const handleSearch = (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    router.push(`/search?term=${input}`)
  }
  return (
    <div className='p-6  w-full  space-x-2 '>
    <div className=' flex w-full space-x-2  '>
        <Image className='cursor-pointer' onClick={()=>router.push('/')} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png" width={100} height={30} objectFit='contain'  alt='Search'/>
        <form onSubmit={handleSearch} className='flex w-full max-w-2xl rounded-full  ring-1 ring-gray-300 px-4 py-2 hover:shadow-lg focus-within:shadow-lg space-x-2'>
            <input type="text" className='flex-grow border-0 outline-none ' onChange={(e)=>setInput(e.target.value)}/>
            <XIcon className='w-5  text-gray-500 cursor-pointer'/>
            <MicrophoneIcon className='w-5 border-l-2 text-blue-500 cursor-pointer hidden sm:inline-flex'/>
            <SearchIcon className='w-5 text-gray-500 cursor-pointer hidden sm:inline-flex '/>
        </form>
        <Avatar img="https://www.pinpng.com/pngs/m/341-3415688_no-avatar-png-transparent-png.png" margin='!ml-auto'/>
    </div>
    <HeaderItems/>
    </div>
  )
}

export default Header