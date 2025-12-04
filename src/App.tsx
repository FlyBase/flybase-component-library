import React from 'react';
import './App.css';
import SplitSystemCombinationSearchTable from "./components/interactive-tables/SplitSystemCombinationSearchTable";
import GeneGroupTables from "./components/interactive-tables/GeneGroupTables";
import BlueskyFeed from "./components/SocialFeed/BlueskyFeed";
import MastodonFeed from "./components/SocialFeed/MastodonFeed";

/*
* This file is for local development only
* */

const SignalingPathwaySubgroupsExample = () => <GeneGroupTables FBgg="FBgg0001086" />;
const MetabolicPathwaySubgroupsExample = () => <GeneGroupTables FBgg="FBgg0002028" />;
const GenericGeneGroupSubgroupsExample = () => <GeneGroupTables FBgg="FBgg0000764" />;
const SignalingPathwayMembersExample = () => <GeneGroupTables FBgg="FBgg0001092" />;
const MetabolicPathwayMembersExample = () => <GeneGroupTables FBgg="FBgg0002058" />;
const GenericGeneGroupMembersExample = () => <GeneGroupTables FBgg="FBgg0000708" />;

function App() {
  return (
      <div style={{ width: "calc(100vw - 100px)", margin: "15px", display: "flex" }}>
          <div style={{width: '45vw', marginRight: "50px"}}>
              <h1>Mastodon</h1>
              <MastodonFeed server="mastodon.social" accountHandle="FlyBase" domain="mstdn.science" limit={10} />
          </div>
          <div style={{width: '45vw'}}>
              <h1>Bluesky</h1>
              <BlueskyFeed accountHandle="flybase.bsky.social" />
          </div>
      </div>
  );
}

export default App;
