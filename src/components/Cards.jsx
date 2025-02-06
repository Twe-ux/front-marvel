import { pUn } from "../lib/img-variant";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { faStar as faStar2 } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const Cards = ({ results, open }) => {
  let title = "";
  if (results.title === undefined) {
    title = results.name;
  } else {
    title = results.title;
  }
  // const [inFavorite, setInFavorite] = useState(true);

  return (
    <div
      className={
        open
          ? "cards w-40 overflow-hidden rounded-md  "
          : "cards w-56 overflow-hidden rounded-md  "
      }
    >
      {/* <div
        className={
          open
            ? "absolute flex justify-end w-40 p-2 z-50"
            : "absolute flex justify-end w-56 p-2 z-50"
        }
      >
        {inFavorite ? (
          <FontAwesomeIcon
            onClick={() => {
              setInFavorite(false);
            }}
            className=" text-amber-300 "
            icon={faStar2}
          />
        ) : (
          <FontAwesomeIcon
            onClick={() => {
              setInFavorite(true);
            }}
            className=" text-amber-300 "
            icon={faStar}
          />
        )}
      </div> */}

      <img
        className="rounded-b-lg"
        src={`${results.thumbnail.path}${pUn}${results.thumbnail.extension}`}
        alt={title}
      />
      <div className="mt-1 mb-1 flex items-center justify-center h-12 ">
        <h2 className="font-bold text-center text-white ">{title}</h2>
      </div>
    </div>
  );
};

export default Cards;
