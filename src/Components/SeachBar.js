import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center gap-1 p-4">
      <div className="relative w-[500px]">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={input}
          required
          onChange={(e) => setInput(e.target.value)}
          className="pl-10 p-2 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
