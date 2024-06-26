import { menuData } from '@/lib/constants'
import Link from 'next/link'
import React from 'react'

const SideMenu = () => {
  return (
    <div className='flex flex-col w-40 px-2'>
      {menuData.length && menuData.map((item => (
        <Link 
          key={item.id}
          href={`/content/${item.type}`}
          className='mb-2 p-1 px-8 bg-secondary rounded font-mono text-gray-300 border-1'
        >
          {item.title}
        </Link>
      )))}
    </div>
  )
}

export default SideMenu