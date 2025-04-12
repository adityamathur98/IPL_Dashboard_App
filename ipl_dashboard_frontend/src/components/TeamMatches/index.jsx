import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./index.css";
import { ClipLoader } from "react-spinners";

import LatestMatch from "../LatestMatch";
import MatchCard from "../MatchCard";

const TeamMatches = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [teamMatchesData, setTeamMatchesData] = useState(null);

  useEffect(() => {
    getTeamMatches();
  }, [id]);

  const getFormattedData = (data) => ({
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    date: data.date,
    firstInnings: data.first_innings,
    manOfTheMatch: data.man_of_the_match,
    matchStatus: data.match_status,
    result: data.result,
    secondInnings: data.second_innings,
    umpires: data.umpires,
    venue: data.venue,
  });

  async function getTeamMatches() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_FRONTEND_URL}/ipl/${id}`
      );
      const data = response.data;
      const formattedData = {
        teamBannerUrl: data.team_banner_url,
        latestMatchDetails: getFormattedData(data.latest_match_details),
        recentMatches: data.recent_matches.map((eachMatch) =>
          getFormattedData(eachMatch)
        ),
      };
      setTeamMatchesData(formattedData);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching team details:", error);
    }
  }

  const renderRecentMatchesList = () => {
    const { recentMatches } = teamMatchesData;

    return (
      <ul className="flex justify-between flex-wrap pl-0 !m-[24px] md:mt-[32px] gap-3">
        {recentMatches.map((eachMatch) => (
          <MatchCard key={eachMatch.id} matchDetails={eachMatch} />
        ))}
      </ul>
    );
  };

  const renderTeamMatches = () => {
    const { teamBannerUrl, latestMatchDetails } = teamMatchesData;

    return (
      <div className="w-[90%] max-w-[500px] mt-[48px] md:mt-[96px] md:max-w-[1110px]">
        <img src={teamBannerUrl} alt="team banner" className="w-[100%]" />
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        {renderRecentMatchesList()}
      </div>
    );
  };

  const renderLoader = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#ffffff" size={50} />
      </div>
    );
  };

  const getRouteClassName = () => {
    switch (id) {
      case "RCB":
        return "rcb";
      case "KKR":
        return "kkr";
      case "KXP":
        return "kxp";
      case "CSK":
        return "csk";
      case "RR":
        return "rr";
      case "MI":
        return "mi";
      case "SH":
        return "srh";
      case "DC":
        return "dc";
      default:
        return "";
    }
  };

  const className = `flex justify-center min-h-screen ${getRouteClassName()}`;

  return (
    <div className={className}>
      {isLoading ? renderLoader() : renderTeamMatches()}
    </div>
  );
};

export default TeamMatches;
