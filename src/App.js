import React from 'react';
import './App.css';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable';

function App() {
  return (
    <div className="App">
      <FilterableProductTable product={data} />
    </div>
  );
}

export default App;
