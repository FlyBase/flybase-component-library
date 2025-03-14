import React from 'react';
import './App.css';
import SplitSystemCombinationSearchTable from "./components/interactive-tables/SplitSystemCombinationSearchTable";
import GeneGroupTables from "./components/interactive-tables/GeneGroupTables";

/*
* This file is for local development only
* */

function App() {
  return (
      <div style={{ width: "calc(100vw - 100px)", margin: "15px" }}>

          <GeneGroupTables FBgg="FBgg0001086" />
      </div>
  );
}

export default App;
