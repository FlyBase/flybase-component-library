import React, {useEffect} from 'react';
import './App.css';
import SplitSystemCombinationSearchTable from "./components/interactive-tables/SplitSystemCombinationSearchTable";
import GeneGroupTables, {GeneGroupType} from "./components/interactive-tables/GeneGroupTables";
import BlueskyFeed from "./components/SocialFeed/BlueskyFeed";
import MastodonFeed from "./components/SocialFeed/MastodonFeed";
import ReportSection from "./components/layouts/ReportSection";
import AllianceInteractiveTable from "./components/interactive-tables/alliance/AllianceInteractiveTable";
import {ColumnDef} from "@tanstack/react-table";
import {GeneWithGeneGroupPubs} from "./hooks/useGeneGroupTables";
import createChildRowEnabledHelper from "./components/interactive-tables/childRowEnabledHelper";

/*
* This file is for local development only
* */

const SignalingPathwaySubgroupsExample = () => <GeneGroupTables FBgg="FBgg0001086" />;
const MetabolicPathwaySubgroupsExample = () => <GeneGroupTables FBgg="FBgg0002028" />;
const GenericGeneGroupSubgroupsExample = () => <GeneGroupTables FBgg="FBgg0000764" />;
const SignalingPathwayMembersExample = () => <GeneGroupTables FBgg="FBgg0001092" />;
const MetabolicPathwayMembersExample = () => <GeneGroupTables FBgg="FBgg0002058" />;
const GenericGeneGroupMembersExample = () => <GeneGroupTables FBgg="FBgg0000708" />;

type DummyData = {
    id: string,
    name: string,
    object: {
        num: number,
        str: string,
        arr: string[],
    },
    numArray: number[],
    objArray: {
        level1: {
            level2: {
                level3: string,
                optional?: string
            }
        }
    }[];
    optional?: string
};

const tableHelper = createChildRowEnabledHelper<DummyData>();

const COLUMNS = [
    tableHelper.group({
        header: "DummyData",
        columns: [
            tableHelper.display({
                id: "view details",
                cell: props => (<button onClick={() => {console.log(props.row, props.row.getToggleExpandedHandler()); props.row.getToggleExpandedHandler()();}}>{props.row.getIsExpanded() ? "hide" : "show"} details</button>)
            }),
            tableHelper.accessor("id", {
                meta: {
                    defaultVisibility: "hidden"
                }
            }),
            tableHelper.accessor("name", { header: "Name" }),
            tableHelper.accessor("numArray", { header: "Sum", cell: props => props.row.original.numArray.reduce((p,c) => (p || 0) + c)}),
            tableHelper.accessor("object.num", { header: "Object[Num]", meta: { align: "right" }})
        ]
    }),
    tableHelper.group({
        header: "DummyData[objArray]",
        columns: [
            tableHelper.childAccessor("objArray", "level1.level2.level3", { header: "Level3", cell: props => { return props.row.original.level1.level2.level3; } }),
            tableHelper.childAccessor("objArray", "level1.level2.optional", { header: "Level3-optional", cell: props => { return props.row.original.level1.level2.optional || ""; } }),
        ]
    })

] as ColumnDef<DummyData, unknown>[];

const DATA: DummyData[] = [{
    id: "1",
    name: "test1",
    object: {
        num: 1,
        str: "1",
        arr: ["1","11"],
    },
    numArray: [1,1,1],
    objArray: [
        { level1: { level2: { level3: "1-1-1" } }},
        { level1: { level2: { level3: "1-1-1-1", optional: "testing1" } } }
    ]
},{
    id: "2",
    name: "test1",
    object: {
        num: 2,
        str: "2",
        arr: ["2","2"],
    },
    numArray: [2,2,2],
    objArray: [
        { level1: { level2: { level3: "2-2-2" } }},
        { level1: { level2: { level3: "2-2-2", optional: "testing2" } } }
    ]
},{
    id: "3",
    name: "test3",
    object: {
        num: 3,
        str: "3",
        arr: ["3","3"],
    },
    numArray: [3,3,3],
    objArray: [
        { level1: { level2: { level3: "3-3-3" } }},
        { level1: { level2: { level3: "3-3-3-3", optional: "testing3" } } }
    ]
}];

function App() {
  return (
      <div style={{ width: "calc(100vw - 100px)", margin: "15px" }}>
          {/*<div style={{width: '45vw', marginRight: "50px"}}>*/}
          {/*    <h1>Mastodon</h1>*/}
          {/*    <MastodonFeed server="mastodon.social" accountHandle="FlyBase" domain="mstdn.science" limit={10} />*/}
          {/*</div>*/}
          {/*<div style={{width: '45vw'}}>*/}
          {/*    <h1>Bluesky</h1>*/}
          {/*    <BlueskyFeed accountHandle="flybase.bsky.social" />*/}
          {/*</div>*/}
          <AllianceInteractiveTable id="test-dummy-data" columns={COLUMNS} data={DATA} fullWidth ExpandedRowComponent={({ rowData }) => <div>{typeof rowData}</div>}/>

      </div>
  );
}

export default App;
