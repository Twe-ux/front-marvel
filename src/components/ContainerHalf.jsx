import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { decode } from "html-entities";
import instance from "../lib/axios.serve";

import { pUn, pSm, pMe } from "../lib/img-variant";
import Comics from "./Comics";

const ContainerHalf = ({ target, setOpen }) => {
  // console.log("target", target);

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

        // console.log("res", response.data.comics);

        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <div className="min-w-80 h-full rounded-md bordeR p-4">
      En chargement...
    </div>
  ) : target === "comic" ? (
    <div className="min-w-80 h-full  text-black rounded-md bg-blue-400 p-4 overflow-y-scroll">
      <div
        className="flex w-full justify-end cursor-pointer mt-1 pr-2 "
        onClick={() => {
          setOpen(false);
          navigate(`/${path}`);
        }}
      >
        X
      </div>
      <img
        className=" rounded-md"
        src={`${data.thumbnail.path}${pUn}${data.thumbnail.extension}`}
        alt={data.title}
      />
      <h1 className=" font-bold"> {data.title} </h1>
      <p className=" whitespace-pre-wrap">{decode(data.description)}</p>
    </div>
  ) : (
    <div className="min-w-80 h-full  text-black rounded-md bordeR p-4 overflow-y-scroll ">
      <div
        className="flex justify-end cursor-pointer absolute text-white min-w-70  "
        onClick={() => {
          setOpen(false);
          navigate(`/${path}`);
        }}
      >
        X
      </div>
      <img
        className=" rounded-md"
        src={`${data.thumbnail.path}${pUn}${data.thumbnail.extension}`}
        alt={data.title}
      />
      <h1 className=" font-bold"> {data.name} </h1>
      <p> {data.description} </p>

      {data.comics[0] === undefined ? null : (
        <>
          <h2 className=" font-medium mt-10">Apparait dans : </h2>
          <div className="flex gap-2 flex-wrap ">
            {data.comics.map((comics, index) => {
              return (
                <Comics
                  key={comics + index}
                  comics={comics}
                  id={id}
                  target={"comic"}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ContainerHalf;
