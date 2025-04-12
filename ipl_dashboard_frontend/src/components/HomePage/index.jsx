import axios from "axios";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

import TeamCard from "../TeamCard";

const HomePage = () => {
  const [iplTeams, setIplTeams] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchIplTeamData();
  }, []);

  const fetchIplTeamData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_FRONTEND_URL}/ipl`
      );
      const data = response.data;
      const updatedData = data.map((eachItem) => ({
        id: eachItem.id,
        name: eachItem.name,
        teamImageUrl: eachItem.team_image_url,
      }));
      setIplTeams(updatedData);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  const renderLoader = () => {
    return (
      <div className="flex items-center justify-center min-h-[80vh]">
        <ClipLoader color="#ffffff" size={50} />
      </div>
    );
  };

  const renderTeamList = () => {
    return (
      <ul className="flex flex-wrap justify-center">
        {iplTeams.map((eachTeam) => (
          <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
        ))}
      </ul>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[url('https://assets.ccbp.in/frontend/react-js/ipl-dashboard-sm-bg.png')] bg-cover min-h-screen md:bg-[url('https://assets.ccbp.in/frontend/react-js/ipl-dashboard-lg-bg.png')]">
      <div className="w-[90%] max-w-[600px] md:max-w-[1110px]">
        <div className="flex justify-center items-center">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="w-[25px] h-[40px] md:w-[60px] md:h-[96px]"
          />
          <h1 className="text-[#ffffff] text-[36px] ml-[12px] md:text-[72px] md:ml-[16px]">
            IPL Dashboard
          </h1>
        </div>
        {isLoading ? renderLoader() : renderTeamList()}
      </div>
    </div>
  );
};

export default HomePage;
