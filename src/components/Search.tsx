"use client";

import React, { useState } from 'react'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div className='w-1/4 no-grow p-2'>
      <input
        value={searchQuery}
        placeholder='Search'
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        className="w-full p-2 text-white rounded-lg focus:outline-none bg-dark border border-gray-700 font-mono"
      />
    </div>
  )
}

export default Search