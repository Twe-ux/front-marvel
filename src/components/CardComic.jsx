import {
  pSm,
  pMe,
  pXl,
  pFa,
  pUn,
  pIn,
  sSm,
  sMe,
  sLa,
  sXl,
  sFa,
  sAm,
} from "../lib/img-variant";

import { decode } from "html-entities";

const CardComic = ({ results }) => {
  return (
    <>
      <div className=" p-1 h-112 w-60 rounded-md border-1 bg-zinc-300 border-zinc-500 overflow-hidden">
        <img
          className=" rounded-md"
          src={`${results.thumbnail.path}${pUn}${results.thumbnail.extension}`}
          alt={results.title}
        />
        <p>{results.name}</p>
        <p className=" whitespace-pre-wrap">{decode(results.description)}</p>
      </div>
    </>
  );
};

export default CardComic;
