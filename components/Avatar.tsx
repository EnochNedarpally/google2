import React from 'react'

type iProps={
  img:string,
  margin?:string
}

const Avatar = ({img,margin}:iProps) => {
  return (
   <img className={`h-10 rounded-full cursor-pointer transition transform duration-150 hover:scale-110 ${margin}`} loading='lazy' src={img} alt="Profile"/>
  )
}

export default Avatar