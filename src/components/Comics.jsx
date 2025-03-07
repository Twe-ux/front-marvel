import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instance from "../lib/axios.serve";
import { pUn, pSm, pMe } from "../lib/img-variant";

const Comics = ({ comics, id }) => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(`comic/${comics}`);
        setData(response.data.thumbnail);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>null</p>
  ) : (
    <Link to={`/comics/${comics}`}>
      <img
        className=" rounded-md h-50"
        src={`${data.path}${pUn}jpg`}
        alt={data.title}
      />
    </Link>
  );
};

export default Comics;
