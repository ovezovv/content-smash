import { useRouter } from 'next/router';
import React from 'react'

const ContentItem = () => {
  const router = useRouter();
  const { id } = router.query;
  
  return (
    <div>ContentItem Id {id}</div>
  )
}

export default ContentItem