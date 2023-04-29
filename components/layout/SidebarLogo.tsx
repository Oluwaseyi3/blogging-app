import React from 'react'
import { useRouter } from 'next/router'
import {AiOutlineMessage} from "react-icons/ai"


const SidebarLogo = () => {
 
    const router = useRouter()

  return (

    <div className='rounded-full
     h-14
     w-14
     p-4
     flex
     items-center
     justify-center
     hover:bg-blue-300
     hover:bg-opacity-10
     cursor-pointer
    '>
        <AiOutlineMessage 
        size={30} color="white "
        />
    </div>
  )
}

export default SidebarLogo