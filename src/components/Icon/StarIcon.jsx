import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStar2 } from "@fortawesome/free-regular-svg-icons";

const StarIcon = ({ insideFavorite, setInsideFavorite, results }) => {
  return (
    <FontAwesomeIcon
      onClick={() => {
        const copy = new Set(insideFavorite);
        if (copy.has(results)) {
          copy.delete(results);
        } else {
          copy.add(results);
        }
        setInsideFavorite(copy);
      }}
      className=" text-yellow-300 text-xl absolute p-2"
      icon={insideFavorite.has(results) ? faStar : faStar2}
    />
  );
};

export default StarIcon;
