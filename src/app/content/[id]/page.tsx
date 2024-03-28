import Details from '@/components/Details'
import api from '@/lib/api'
import React from 'react'

const getData = async(type: string) => {
  const response = await api.get("http://localhost:5000/api/content", {
    params: {
      type
    }
  })

  return response.data
}

const ContentItem = async ({ params }: {
  params: {
    id: string
  }
}) => { 

  const data = await getData(params.id);

  return (
    <div className='bg-secodary bg-secondary h-screen rounded'>
      <Details contentData={data} />
    </div>
  )
}

export default ContentItem