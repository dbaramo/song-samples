import React from 'react';

const SearchBar = (props) => (
  <div>
    <input className="search" placeholder="Search A Song" onChange={(e) => props.updateText(e.target.value)} onKeyUp={props.fetchSongs} />
  </div>
    );


export default SearchBar;