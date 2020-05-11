import React from "react";

import "./style.css";

import TeamBanner from "../../images/theteam.png";

export default function TheTeamBanner() {
  return (
    <div className="a-the-team-banner">
      <img src={TeamBanner} alt="Aorthar" />
    </div>
  );
}
