import { SearchIcon,  } from '@heroicons/react/outline'
import { DotsVerticalIcon, LocationMarkerIcon, NewspaperIcon, PhotographIcon,VideoCameraIcon } from '@heroicons/react/solid'
import React from 'react'

const HeaderItems = () => {
  return (
    <div className='max-w-md sm:max-w-3xl px-3 sm:pl-10 md:pl-28 my-2 flex justify-between '>
        <div className='flex space-x-4 sm:space-x-3'>
            <div className='flex space-x-1 text-gray-600'>
                <SearchIcon className='w-5 '/>
                <span className='text-sm  font-medium hidden sm:inline-flex '>All</span>
            </div>
            <div className='flex space-x-1 text-gray-600'>
                <PhotographIcon className='w-5 '/>
                <span className='text-sm font-medium hidden sm:inline-flex '>Images</span>
            </div>
            <div className='flex space-x-1 text-gray-600'>
                <VideoCameraIcon className='w-5 '/>
                <span className='text-sm font-medium hidden sm:inline-flex '>Videos</span>
            </div>
            <div className='flex space-x-1 text-gray-600'>
                <NewspaperIcon className='w-5 '/>
                <span className='text-sm font-medium hidden sm:inline-flex '>News</span>
            </div>
            <div className='flex space-x-1 text-gray-600'>
                <LocationMarkerIcon className='w-5 '/>
                <span className='text-sm font-medium hidden sm:inline-flex '>Maps</span>
            </div>
            <div className='flex space-x-1 text-gray-600'>
                <DotsVerticalIcon className='w-5 '/>
                <span className='text-sm font-medium hidden sm:inline-flex '>More</span>
            </div>
        </div>
        <div>
        <div className='flex space-x-3 text-gray-600'>
                <p className='text-sm font-medium '>Settings</p>
                <p className='text-sm font-medium '>Tools</p>
            </div>
        </div>
    </div>
  )
}

export default HeaderItems