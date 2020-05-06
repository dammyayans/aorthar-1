import React from "react";
import { Helmet } from "react-helmet";

import Banner from "../../components/Banner/Banner";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import OurServices from "../../components/OurServices/OurServices";
import CaseStudy from "../../components/CaseStudy/CaseStudy";
import GetStarted from "../../components/GetStarted/GetStarted";
import OurPackage from "../../components/OurPackage/OurPackage";
import Blog from "../../components/Blog/Blog";
import DesignYarn from "../../components/DesignYarn/DesignYarn";

export default function index() {
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <title>Aorthar | Creative Agency | Brand Identity | Software Development </title>
      </Helmet>
      <Banner />
      <WhoWeAre />
      <OurServices />
      <CaseStudy />
      <GetStarted />
      <OurPackage />
      <Blog />
      <DesignYarn />
    </div>
  );
}
