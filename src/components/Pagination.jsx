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
    <header>
      <div className=" w-full flex justify-between items-center ">
        <nav className="z-10 relative flex h-12 justify-between items-center w-full">
          <div></div>

          <div className="flex items-center gap-4">
            {skip === 100 ? (
              <div className="w-4"></div>
            ) : (
              <Tooltip title="Page précédente">
                <FontAwesomeIcon
                  onClick={() => {
                    setSkip(skip - 100);
                  }}
                  className="text-white cursor-pointer"
                  icon={faArrowLeft}
                />
              </Tooltip>
            )}
            <div className="mt-3 h-10 w-300 slider">
              {count === 0 ? null : (
                <Slider
                  onChange={(event, value) => {
                    setSkip(value);
                  }}
                  valueLabelDisplay="auto"
                  defaultValue={0}
                  shiftStep={100}
                  step={100}
                  marks
                  value={skip}
                  min={100}
                  max={count - 100}
                />
              )}
            </div>

            {skip >= count - 100 ? (
              <div className="w-4"></div>
            ) : (
              <Tooltip title="Page suivante">
                <FontAwesomeIcon
                  onClick={() => {
                    setSkip(skip + 100);
                  }}
                  className="text-white cursor-pointer"
                  icon={faArrowRight}
                />
              </Tooltip>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Pagination;
