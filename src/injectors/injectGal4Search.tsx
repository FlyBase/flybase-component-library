import injectComponents from "./injectComponents";
import SplitSystemCombinationSearchTable from "../components/interactive-tables/SplitSystemCombinationSearchTable";

/*
* This file is a webpack entry point, and will get built separately when running `yarn build`
* */

//load the gal4 search page with new ssc table (might be converted to whole page in future)
const injectGal4Search = () => {

    //Currently search terms are dumped into the page with XSL or XSlate
    const element = document.getElementById("exp-query");
    if(!element) throw new Error("No data provided on page. An element with id 'exp-query' containing expression JSON must be present.");

    const expression = JSON.parse(element.textContent!).query.expression;

    injectComponents([
        { containerId: "gal4-ssc-search-table-container", component: <SplitSystemCombinationSearchTable expression={expression} /> },
    ]);
};

//only do this automatically in production (when build version is being used)
//this makes it so that including the build file on the page automatically handles everything, without extra code
if(process.env.NODE_ENV === "production") {
    injectGal4Search();
}
