import React, { useState } from 'react';
import { toast } from 'react-toastify';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (!query.trim()) {
      toast.error('Search query cannot be empty!', {
        position: 'top-right',
      });
      return;
    }
    onSearch(query);
  };

  return (
    <div className="flex items-center gap-2 p-4 bg-gray-100 rounded">
      <input
        type="text"
        placeholder="Search profiles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 p-2 border rounded"
      />
      <button
        onClick={handleSearch}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
