"use client";

import React, { useState } from 'react'
import PreviewContent from './PreviewContent';
import PreviewInfo from './PreviewInfo';
import Search from './Search';

const Details = ({ contentData }: {
  contentData: ContentResponse
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedContent, setSelectedContent] = useState<Content | null>(null);

  return (
    <div className='flex flex-row'>
      <Search 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        contentData={contentData}
        selectedContent={selectedContent}
        setSelectedContent={setSelectedContent}
      />
      <div className='grow flex flex-row'>
        <PreviewContent selectedContent={selectedContent} />
        <PreviewInfo description={selectedContent ? selectedContent.desc : "No Caption" } />
      </div>
    </div>
    
  )
}

export default Details