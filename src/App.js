import React from 'react';
import CountryCard from './CountryCard';
import SearchBar from './SearchBar';

function App() {
  return (
    <div id="app">
      <SearchBar></SearchBar>
      
      <CountryCard></CountryCard>
    </div>
  );
}

export default App;
