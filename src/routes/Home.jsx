import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import instance from "../lib/axios.serve";

// Components
import Cards from "../components/Cards";

// Store the previous request in cache.
const cache = new Map();

const Home = ({
  find,
  skip,
  limit,
  open,
  setOpen,
  count,
  setCount,
  insideFavoriteCharacters,
  setInsideFavoriteCharacters,
  insideFavoriteComics,
  setInsideFavoriteComics,
}) => {
  let path = useLocation().pathname.split("/")[1];
  const oldPath = path;

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

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
  }, [path]);

  return isLoading ? (
    <div className=" rounded-md w-full flex"></div>
  ) : (
    <div className=" rounded-md overflow-hidden overflow-y-scroll">
      <div className=" flex flex-wrap gap-3 justify-between ">
        {data.results.map((results, index) => {
          // console.log(results);
          return (
            <div key={results + index}>
              <Cards
                index={index}
                results={results}
                open={open}
                setOpen={setOpen}
                oldPath={oldPath}
                insideFavoriteCharacters={insideFavoriteCharacters}
                setInsideFavoriteCharacters={setInsideFavoriteCharacters}
                insideFavoriteComics={insideFavoriteComics}
                setInsideFavoriteComics={setInsideFavoriteComics}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
