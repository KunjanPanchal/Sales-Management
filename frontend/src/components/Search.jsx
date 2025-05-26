import React, { useState } from 'react'
import './Search.css'

const Search = ({ search, setSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <div className='search'>
            <input
                type="text"
                placeholder="Search transactions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={() => setSearch(searchQuery)}>search</button>

        </div>
    )
}

export default Search
