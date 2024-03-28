import Preview from '@/components/Preview'
import Search from '@/components/Search'
import React from 'react'

const ContentItem = ({ params }: {
  params: {
    id: string
  }
}) => { 

  return (
    <div className='flex flex-row bg-secodary bg-secondary h-screen rounded'>
      <Search />
      <Preview />
    </div>
  )
}

export default ContentItem