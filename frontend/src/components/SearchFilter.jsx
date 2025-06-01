import React, { useState } from 'react';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const SearchFilter = ({ setSearch, month, setMonth }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    setSearch(searchQuery);
  };

  return (
    <div className="filter-section flex flex-col md:flex-row items-center justify-between gap-4 bg-white shadow-lg rounded-lg p-6 mb-8">
      {/* Search Input */}
      <div className="flex items-center w-full md:w-2/3">
        <input
          type="text"
          placeholder="Search transactions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-r-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {/* Month Dropdown */}
      <div className="w-full md:w-1/3">
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {months.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;
