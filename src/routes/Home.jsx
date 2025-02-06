import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import instance from "../lib/axios.serve";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStar2 } from "@fortawesome/free-regular-svg-icons";

// Components
import Cards from "../components/Cards";

// Store the previous request in cache.
const cache = new Map();

const Home = ({ find, skip, limit, open, setOpen, count, setCount }) => {
  let path = useLocation().pathname.split("/")[1];
  const oldPath = path;

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [inFavorite, setInFavorite] = useState(true);

  // console.log("home", count);

  if (find === undefined) {
    path = path;
  } else if (find !== "") {
    if (path === "characters") {
      path = path + `?name=` + find;
    } else if (path === "comics") {
      path = path + `?title=` + find;
    }
  }

  if (limit === 100) {
    path = path;
  } else if (limit !== 100) {
    path = path + `?limit=` + limit;
  }

  if (skip === 100) {
    path = path;
  } else if (skip !== 100) {
    path = path + `?skip=` + skip;
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(!cache.has(path));
      setData(cache.get(path) ?? {});
      const url = path;

      try {
        const response = await instance.get(url);
        setData(response.data);
        // console.log("useE", response.data.count);
        setCount(response.data.count);
        cache.set(path, response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [path, count]);

  return isLoading ? (
    <div className=" rounded-md w-full flex"></div>
  ) : (
    <div className=" rounded-md overflow-hidden overflow-y-scroll">
      <div className=" flex flex-wrap gap-3 justify-between ">
        {data.results.map((results, index) => {
          return (
            <div key={results + index}>
              <div
                className={
                  open
                    ? "relative flex justify-end w-40  z-50"
                    : "relative flex justify-end w-56  z-50"
                }
              >
                {inFavorite ? (
                  <FontAwesomeIcon
                    onClick={() => {
                      setInFavorite(false);
                    }}
                    className=" text-amber-300 absolute p-2 "
                    icon={faStar2}
                  />
                ) : (
                  <FontAwesomeIcon
                    onClick={() => {
                      setInFavorite(true);
                    }}
                    className=" text-amber-300 absolute p-2"
                    icon={faStar}
                  />
                )}
              </div>

              <Link
                className="z-0"
                key={results._id}
                to={`/${oldPath}/${results._id}`}
                onClick={() => {
                  setOpen(true);
                }}
              >
                <Cards results={results} open={open} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
