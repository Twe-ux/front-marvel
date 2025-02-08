import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { decode } from "html-entities";
import instance from "../lib/axios.serve";

import { pUn, pSm, pMe } from "../lib/img-variant";
import Comics from "./Comics";
import CircleXmarkIcon from "./Icon/CircleXmarkIcon";

const ContainerHalf = ({ target, setOpen }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  // console.log(data);

  const { id } = useParams();

  const navigate = useNavigate();
  const path = useLocation().pathname.split("/")[1];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(`${target}/${id}`);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <div className="min-w-80 max-w-80 h-full rounded-md bordeR">
      En chargement...
    </div>
  ) : target === "comic" ? (
    <div className="min-w-80 max-w-80 h-full text-black rounded-md pb-2 overflow-y-scroll bg-zinc-300 border-zinc-500 border-2">
      <div
        className="flex justify-end cursor-pointer absolute text-white min-w-80 max-w-80 pt-3 pr-4 text-2xl "
        onClick={() => {
          setOpen(false);
          navigate(`/${path}`);
        }}
      >
        <CircleXmarkIcon />
      </div>
      <img
        className="rounded-lg w-80 p-1"
        src={`${data.thumbnail.path}${pUn}${data.thumbnail.extension}`}
        alt={data.title}
      />
      <h1 className=" font-bold p-2"> {data.title} </h1>
      <p className=" whitespace-pre-wrap p-2">{decode(data.description)}</p>
    </div>
  ) : (
    <div className="min-w-80 max-w-80 h-full text-black rounded-md pb-2 overflow-y-scroll bg-zinc-300 border-zinc-500 border-2">
      <div
        className="flex justify-end cursor-pointer absolute text-white min-w-80 max-w-80 pt-3 pr-4 text-2xl"
        onClick={() => {
          setOpen(false);
          navigate(`/${path}`);
        }}
      >
        <CircleXmarkIcon />
      </div>
      <img
        className="rounded-lg w-80 p-1"
        src={`${data.thumbnail.path}${pUn}${data.thumbnail.extension}`}
        alt={data.title}
      />
      <h1 className="font-bold p-2"> {data.name} </h1>
      <p> {data.description} </p>

      <div className="flex flex-wrap mt-10 gap-2">
        {data.comics[0] === undefined ? null : (
          <>
            <h2 className="font-medium text-start p-2">Apparait dans : </h2>
            <div className="flex  justify-around flex-wrap gap-4 ">
              {data.comics.map((comics, index) => {
                return <Comics key={comics + index} comics={comics} id={id} />;
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContainerHalf;
