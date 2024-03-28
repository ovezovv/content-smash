import React from 'react'
import PreviewContent from './PreviewContent'
import PreviewInfo from './PreviewInfo'

const Preview = () => {
  return (
    <div className='grow flex flex-row'>
      <PreviewContent />
      <PreviewInfo />
    </div>
  )
}

export default Preview