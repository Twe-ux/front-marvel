import { pUn } from "../../lib/img-variant";
import { Link } from "react-router-dom";
//Components
import StarIcon from "../Icon/StarIcon";

const ComicCard = ({
  results,
  open,
  setOpen,
  insideFavoriteComics,
  setInsideFavoriteComics,
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
        open
          ? "cards w-40 flex justify-end items-end overflow-hidden rounded-md relative "
          : "cards w-56 flex justify-end items-end overflow-hidden rounded-md relative "
      }
    >
      <StarIcon
        insideFavorite={insideFavoriteComics}
        setInsideFavorite={setInsideFavoriteComics}
        results={results._id}
      />

      <Link
        key={results._id}
        to={`/comics/${results._id}`}
        onClick={() => {
          setOpen(true);
        }}
      >
        <img
          className="rounded-b-lg z-0"
          src={`${results.thumbnail.path}${pUn}${results.thumbnail.extension}`}
          alt={title}
        />
        <div className="mt-2 flex justify-center h-14 ">
          <h2 className="font-bold text-center text-white ">{title}</h2>
        </div>
      </Link>
    </div>
  );
};

export default ComicCard;
