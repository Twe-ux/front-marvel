import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import instance from "../lib/axios.serve";

// Components
import Cards from "../components/Cards";

// Store the previous request in cache.
const cache = new Map();

const Home = ({ find, open, setOpen }) => {
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

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(!cache.has(path));
      setData(cache.get(path) ?? {});
      const url = path;

      try {
        const response = await instance.get(url);
        setData(response.data);
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
      <div className=" flex flex-wrap gap-3 justify-between">
        {data.results.map((results) => {
          return (
            <Link
              key={results._id}
              to={`/${oldPath}/${results._id}`}
              onClick={() => {
                setOpen(true);
              }}
            >
              <Cards results={results} open={open} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
