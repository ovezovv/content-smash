import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image';

const Search = ({
  searchQuery,
  setSearchQuery,
  contentData,
  selectedContent,
  setSelectedContent
}: {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string | ''>>
  contentData: ContentResponse,
  selectedContent: Content | null,
  setSelectedContent: Dispatch<SetStateAction<Content | null>>
}) => {

  const handleSelectContent = (content: Content) => {
    if(content.uid === selectedContent?.uid) {
      setSelectedContent(null)
    } else {
      setSelectedContent(content);
    }
  }

  return (
    <div className='w-1/4 no-grow p-2 '>
        <input
          value={searchQuery}
          placeholder='Search'
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          className="w-full p-2 text-white rounded-lg focus:outline-none bg-dark border border-gray-700 font-mono"
        />
        <div className='flex flex-wrap flex-row mt-2 justify-between'>
        {contentData.data.length && contentData.data.map(content => {
          if (!content.desc.includes(searchQuery)) return;
          return (
            <button 
              key={content.uid}
              className={`mb-2 rounder ${content.uid === selectedContent?.uid ? "border-2 border-green-700" : "" }`}
              onClick={() => handleSelectContent(content)}
            >
              <Image src={content.img} alt="" width={150}  height={150} />
            </button>
          )
        })}
        </div>
      </div>
  )
}

export default Search