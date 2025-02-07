import StarIcon from "./StarIcon";

const ItemsFavorite = ({ results, open, setOpen, oldPath }) => {
  let title = "";
  if (results.title === undefined) {
    title = results.name;
  } else {
    title = results.title;
  }
  return (
    <div
      className={
        open
          ? "cards w-40 flex justify-end overflow-hidden rounded-md relative "
          : "cards w-56 flex justify-end overflow-hidden rounded-md relative "
      }
    >
      {oldPath === "comics" ? (
        <StarIcon
          insideFavorite={insideFavoriteComics}
          setInsideFavorite={setInsideFavoriteComics}
          oldPath={oldPath}
          results={results}
        />
      ) : (
        <StarIcon
          insideFavorite={insideFavoriteCharacters}
          setInsideFavorite={setInsideFavoriteCharacters}
          oldPath={oldPath}
          results={results}
        />
      )}

      <Link
        key={results._id}
        to={`/${oldPath}/${results}`}
        onClick={() => {
          setOpen(true);
        }}
      >
        <img
          className="rounded-b-lg z-0"
          src={`${results.thumbnail.path}${pUn}${results.thumbnail.extension}`}
          alt={title}
        />
        <div className="mt-1 mb-1 flex items-center justify-center h-12 ">
          <h2 className="font-bold text-center text-white ">{title}</h2>
        </div>
      </Link>
    </div>
  );
};

export default ItemsFavorite;
