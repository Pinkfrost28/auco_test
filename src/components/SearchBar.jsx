"use client"

import { useState } from "react"

function SearchBar({onSearch, showAll}){

    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(search);
        setSearch("");
    }
    const handleInput = (event) => {
        const value = event.target.value;
        setSearch(value);
    }

    const handleShowAll = () => {
        setSearch(""); 
        showAll();
      };
    



      return (
        <div className="mt-4 flex items-center">
          <form onSubmit={handleSubmit} className="flex items-center space-x-2">
            <input
              value={search}
              onChange={handleInput}
              placeholder="Title"
              className="border rounded-md p-2 outline-none focus:border-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300 ease-in-out"
            >
              Search
            </button>
          </form>
          <button
            onClick={handleShowAll}
            className="ml-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300 ease-in-out"
          >
            Show all
          </button>
        </div>
      );
      
}

export default SearchBar;