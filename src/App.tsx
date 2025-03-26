import React from 'react';
import './App.css';
import SplitSystemCombinationSearchTable from "./components/interactive-tables/SplitSystemCombinationSearchTable";
import GeneGroupTables from "./components/interactive-tables/GeneGroupTables";

/*
* This file is for local development only
* */

const SignalingPathwaySubgroupsExample = () => <GeneGroupTables FBgg="FBgg0001086" />;
const MetabolicPathwaySubgroupsExample = () => <GeneGroupTables FBgg="FBgg0002028" />;
const GenericGeneGroupSubgroupsExample = () => <GeneGroupTables FBgg="FBgg0001797" />;
const SignalingPathwayMembersExample = () => <GeneGroupTables FBgg="FBgg0001092" />;
const MetabolicPathwayMembersExample = () => <GeneGroupTables FBgg="FBgg0002058" />;
const GenericGeneGroupMembersExample = () => <GeneGroupTables FBgg="FBgg0000708" />;

function App() {
  return (
      <div style={{ width: "calc(100vw - 100px)", margin: "15px" }}>
          <SignalingPathwaySubgroupsExample />
      </div>
  );
}

export default App;
