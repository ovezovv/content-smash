import React from 'react'

const PreviewInfo = ({description}: {
  description: string
}) => {
  return (
    <div className='w-1/3 text-center my-auto'>
        <p className='text-white text-md'>{description}</p>
    </div>
  )
}

export default PreviewInfo