import Link from 'next/link'
import React from 'react'

type IMenu = {
  id: number;
  type: "dog" | "cat" | "animal" | string;
  title: string;
}[]

const MENU: IMenu = [
  {
    id: 1,
    type: 'dog',
    title: 'Dog'
  },
  {
    id: 2,
    type: 'cat',
    title: 'Cat'
  },
  {
    id: 3,
    type: 'animal',
    title: 'Animal'
  }
]

const SideMenu = () => {
  return (
    <div className='flex flex-col w-40 px-2'>
      {MENU.length && MENU.map((item => (
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