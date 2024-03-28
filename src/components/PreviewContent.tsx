import React from 'react'
import Image from 'next/image'

const PreviewContent = ({
  selectedContent
}: {
  selectedContent: Content | null
}) => {
  return (
    <div className='w-2/3 p-2'>
      <Image src={selectedContent ? selectedContent?.img : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"} alt="" width={600}  height={600} />
    </div>
  )
}

export default PreviewContent