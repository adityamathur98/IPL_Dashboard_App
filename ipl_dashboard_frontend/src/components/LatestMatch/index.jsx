const LatestMatch = (props) => {
  const { latestMatchDetails } = props;
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails;

  return (
    <div className="mt-[24px]">
      <h2 className="text-[#ffffff] text-[16px] md:text-[34px] flex">
        Latest Match
      </h2>
      <div className="flex flex-col bg-[#0f172a] rounded-[12px] py-[16px] md:flex-row md:justify-between md:items-center md:pt-[24px] md:pb-[24px]">
        <div className="flex items-center justify-between w-[100%] px-[16px] md:w-[65%] md:pl-[32px] md:pr-0 lg:w-[60%]">
          <div className="w-[70%] md:w-[48%] md:self-start">
            <p className="text-[#ffffff] text-[20px] md:text-[36px]">
              {competingTeam}
            </p>
            <p className="text-[#ffffff] text-[18px] md:text-[24px]">{date}</p>
            <p className="text-[#ffffff] text-[12px] md:text-[16px]">{venue}</p>
            <p className="text-[#ffffff] text-[12px] md:text-[16px]">
              {result}
            </p>
          </div>
          <img
            src={competingTeamLogo}
            className="max-h-[60px] md:max-w-[200px] md:max-h-[200px]"
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <hr className="border border-[#475569] w-[100%] md:hidden" />
        <div className="w-[100%] px-[16px] md:text-right md:w-[33%] md:pl-0 md:pr-[32px]">
          <p className="text-[#ffffff] text-[14px] md:text-[18px]">
            First Innings
          </p>
          <p className="text-[#ffffff] text-[12px] md:text-[14px]">
            {firstInnings}
          </p>
          <p className="text-[#ffffff] text-[14px] md:text-[18px]">
            Second Innings
          </p>
          <p className="text-[#ffffff] text-[12px] md:text-[14px]">
            {secondInnings}
          </p>
          <p className="text-[#ffffff] text-[14px] md:text-[18px]">
            Man Of The Match
          </p>
          <p className="text-[#ffffff] text-[12px] md:text-[14px]">
            {manOfTheMatch}
          </p>
          <p className="text-[#ffffff] text-[14px] md:text-[18px]">Umpires</p>
          <p className="text-[#ffffff] text-[12px] md:text-[14px]">{umpires}</p>
        </div>
      </div>
    </div>
  );
};

export default LatestMatch;
