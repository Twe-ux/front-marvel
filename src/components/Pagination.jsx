import Tooltip from "@mui/material/Tooltip";
import Slider from "@mui/material/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ skip, setSkip, count }) => {
  if (count === undefined) {
    count = 0;
    return count;
  }

  return (
    <div className="flex items-center justify-center gap-4 h-10 ">
      {skip === 100 ? (
        <div className="w-4  h-10 "></div>
      ) : (
        <Tooltip title="Page précédente">
          <FontAwesomeIcon
            onClick={() => {
              setSkip(skip - 100);
            }}
            className="text-black  text-lg cursor-pointer  h-10"
            icon={faArrowLeft}
          />
        </Tooltip>
      )}
      <div className="flex items-center w-200 slider h-10">
        {count === 0 ? null : (
          <Slider
            onChange={(event, value) => {
              setSkip(value);
            }}
            valueLabelDisplay="auto"
            defaultValue={0}
            shiftStep={100}
            step={100}
            // marks
            value={skip}
            min={100}
            max={count - 100}
          />
        )}
      </div>

      {skip >= count - 100 ? (
        <div className="w-4  h-10"></div>
      ) : (
        <Tooltip title="Page suivante">
          <FontAwesomeIcon
            onClick={() => {
              setSkip(skip + 100);
            }}
            className="text-black text-lg cursor-pointer h-10"
            icon={faArrowRight}
          />
        </Tooltip>
      )}
    </div>
  );
};

export default Pagination;
