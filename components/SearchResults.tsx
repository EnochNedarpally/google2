import Link from 'next/link'
import React from 'react'
import { SearchInfo, SearchItem } from '../types/search.type'

type iProps={
    item:SearchItem,
}
const SearchResults = ({item}:iProps) => {
  return (
    <div className='w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-32 my-3'>
      
        <div className='max-w-xl'>
        <div>
           <Link href={item.link}> 
           <div className='cursor-pointer group'> 
                <p className='truncate text-sm'>{item.formattedUrl}</p>
                <h3 className='truncate text-xl text-blue-700 font-semibold group-hover:underline'>{item.title}</h3>
           </div>
           </Link>
        </div>
        <p className='line-clamp-2'>{item.snippet}</p>
        </div>
    </div>
  )
}

export default SearchResults