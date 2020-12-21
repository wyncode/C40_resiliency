import React, { useContext } from 'react';
import { FormControl } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';

const Search = () => {
  const { setSearch } = useContext(AppContext);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <FormControl onChange={handleSearch}></FormControl>
    </div>
  );
};

export default Search;
