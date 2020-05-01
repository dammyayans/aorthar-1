import React from "react";
import { Helmet } from "react-helmet";

import TheTeamBanner from "./TheTeamBanner";
import TeamLeads from "./TeamLeads";
import GetStarted from "../../components/GetStarted/GetStarted";
export default function index() {
  return (
    <div className="whitebg">
      <Helmet>
        <meta charset="utf-8" />
        <title>Aorthar | Meet The Team</title>
      </Helmet>
      <TheTeamBanner />
      <TeamLeads />
      <GetStarted />
    </div>
  );
}
