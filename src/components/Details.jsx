import Home from "../routes/Home";
import ContainerHalf from "./ContainerHalf";

const Details = ({
  target,
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
  return (
    <>
      <Home
        find={find}
        skip={skip}
        limit={limit}
        open={open}
        setOpen={setOpen}
        count={count}
        setCount={setCount}
        insideFavoriteCharacters={insideFavoriteCharacters}
        setInsideFavoriteCharacters={setInsideFavoriteCharacters}
        insideFavoriteComics={insideFavoriteComics}
        setInsideFavoriteComics={setInsideFavoriteComics}
      />
      <ContainerHalf target={target} setOpen={setOpen} />
    </>
  );
};
export default Details;
