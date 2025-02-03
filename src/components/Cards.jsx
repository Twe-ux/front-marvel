import { pUn } from "../lib/img-variant";

const Cards = ({ results, open }) => {
  let title = "";
  if (results.title === undefined) {
    title = results.name;
  } else {
    title = results.title;
  }

  return (
    <div className="cards w-50 overflow-hidden rounded-md ">
      <img
        className={"rounded-b-lg " + open ? "w-50" : "w-44"}
        src={`${results.thumbnail.path}${pUn}${results.thumbnail.extension}`}
        alt={title}
      />
      <div className="mt-1 mb-1 flex items-center justify-center h-12 ">
        <h2 className="font-bold text-center text-white ">{title}</h2>
      </div>
    </div>
  );
};

export default Cards;
