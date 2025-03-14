import injectComponents from "./injectComponents";
import GeneGroupTables from "../components/interactive-tables/GeneGroupTables";

/*
* This file is a webpack entry point, and will get built separately when running `yarn build`
* */

//load a gene report with all react code
const injectGeneGroupReport = () => {
    injectComponents([
        { containerId: "groupMembersTables", component: <GeneGroupTables FBgg={FBgg} /> },
    ]);
};

//only do this automatically in production (when build version is being used)
//this makes it so that including the build file on the page automatically handles everything, without extra code
if(process.env.NODE_ENV === "production") {
    injectGeneGroupReport();
}
