import React from "react";

import Banner from "../../components/Banner/Banner";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import OurServices from "../../components/OurServices/OurServices";
import CaseStudy from "../../components/CaseStudy/CaseStudy";
import GetStarted from "../../components/GetStarted/GetStarted";
import OurPackage from "../../components/OurPackage/OurPackage";
import Blog from "../../components/Blog/Blog";
// import MenuOptions from '../../components/MenuOptions/MenuOptions';
// import ExploreOptions from '../../components/ExploreOptions/ExploreOptions';

export default function index() {
  return (
    <div>
      <Banner />
      <WhoWeAre />
      <OurServices />
      <CaseStudy />
      <GetStarted />
      <OurPackage />
      <Blog />
      {/* <MenuOptions /> */}
      {/* <ExploreOptions /> */}
    </div>
  );
}
