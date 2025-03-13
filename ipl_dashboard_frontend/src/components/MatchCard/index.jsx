const MatchCard = (props) => {
  const { matchDetails } = props;
  const { competingTeamLogo, competingTeam, matchStatus, result } =
    matchDetails;

  return (
    <li className="flex flex-col items-center bg-[#0f172a] w-[48%] rounded-[16px] py-[12px] px-[16px] pr-[16px] mb-[24px] md:w-[30%] md:p-[24px] md:mb-[32px]">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="max-w-[60px] h-[40px] md:max-w-[150px] md:h-[150px] "
      />
      <p className="text-center text-[#ffffff] text-[16px] grow  md:text-[24px]">
        {competingTeam}
      </p>
      <p className="text-center text-[#ffffff] text-[10px]">{result}</p>
      <p
        className={
          matchStatus === "Won"
            ? "text-[14px] md:text-[24px] text-[#18ed66]"
            : "text-[14px] md:text-[24px] text-[#e31a1a]"
        }>
        {matchStatus}
      </p>
    </li>
  );
};

export default MatchCard;
