import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
  const navigate = useNavigate();
  const [query, setQuery] = useState();
  const handleSubmit = ((e) => {
    e.preventDefault();
    navigate(`/search?q=${query}`);
  });
  return (
    <>
      <form onSubmit={handleSubmit} className="flex w-full">
        <input onChange={(e) => setQuery(e.target.value)} className="w-5/6 tablet:w-4/6 h-9 placeholder:text-center font-bold rounded-s-full text-left pl-6 focus:outline-none" type="text" placeholder="Honda Civic 2017" />
        <button className="w-1/6 tablet:w-2/6 ml-2 h-9 rounded-e-full text-white bg-black hover:bg-zinc-500 transition duration-700" type="submit"><i className="fa-solid fa-magnifying-glass" /></button>
      </form>
    </>
  );
}

export default Search;
