import { pUn } from "../../lib/img-variant";
import { Link } from "react-router-dom";
//Components
import StarIcon from "../Icon/StarIcon";

const ItemCharacterFavorite = ({
  results,
  pathname,
  insideFavoriteCharacters,
  setInsideFavoriteCharacters,
  setTarget,
}) => {
  let title = "";
  if (results.title === undefined) {
    title = results.name;
  } else {
    title = results.title;
  }

  return (
    <div
      className={
        "cards w-40 flex justify-end items-end overflow-hidden rounded-md relative mt-2 "
      }
    >
      <StarIcon
        insideFavorite={insideFavoriteCharacters}
        setInsideFavorite={setInsideFavoriteCharacters}
        results={results._id}
      />

      <Link to={`/favorite/character/${results._id}`}>
        <img
          className="rounded-b-lg z-0"
          alt={title}
          src={`${pathname}${pUn}jpg`}
        />
        <div className="mt-1 mb-1 flex items-center justify-center h-12 ">
          <h2 className="font-bold text-center text-white ">{title}</h2>
        </div>
      </Link>
    </div>
  );
};

export default ItemCharacterFavorite;
