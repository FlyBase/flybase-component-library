import React from 'react';
import './App.css';
import SplitSystemCombinationSearchTable from "./components/interactive-tables/SplitSystemCombinationSearchTable";

/*
* This file is for local development only
* */

function App() {
  return (
    <div style={{ height: '90vh', width: "100vw", overflow: 'hidden' }}>
        <SplitSystemCombinationSearchTable expression={{ anatomy: "Kenyon cell" }}/>
    </div>
  );
}

export default App;
