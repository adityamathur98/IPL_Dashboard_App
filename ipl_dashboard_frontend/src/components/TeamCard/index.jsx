import { Link } from "react-router-dom";

const TeamCard = ({ teamDetails }) => {
  const { id, name, teamImageUrl } = teamDetails;

  return (
    <li className="w-full md:w-1/2 lg:w-1/3 px-2 !m-2">
      <Link
        to={`/ipl/${id}`}
        className="flex items-center bg-[#ffffff33] h-full rounded-xl border border-white 
        px-4 py-4 mx-4 mb-6 no-underline hover:bg-opacity-50 transition-all">
        <img
          src={teamImageUrl}
          alt={name}
          className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain"
        />
        <p className="text-white text-sm md:text-lg lg:text-xl ml-4">{name}</p>
      </Link>
    </li>
  );
};

export default TeamCard;
