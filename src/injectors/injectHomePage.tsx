import injectComponents from "./injectComponents";
import MastodonFeed from "../components/SocialFeed/MastodonFeed";
import React from "react";

/*
* This file is a webpack entry point, and will get built separately when running `yarn build`
* */

//load a gene report with all react code
const injectHomePage = () => {
    injectComponents([
        { containerId: "flyBaseMastodonFeed", component:  <MastodonFeed server="mastodon.social" accountHandle="FlyBase" domain="mstdn.science" limit={10} /> },
    ]);
};

//only do this automatically in production (when build version is being used)
//this makes it so that including the build file on the page automatically handles everything, without extra code
if(process.env.NODE_ENV === "production") {
    injectHomePage();
}