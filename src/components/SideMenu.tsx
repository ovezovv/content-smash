import Link from 'next/link'
import React from 'react'

const SideMenu = () => {


  return (
    <div className='flex flex-column'>
      <Link href="/content/123" >
        <p className='ml-2 p-1 px-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg font-mono'>Dog</p>
      </Link>
    </div>
  )
}

export default SideMenu