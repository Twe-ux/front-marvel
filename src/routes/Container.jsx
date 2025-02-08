import MainPage from "./MainPage";
import ContainerHalf from "../components/ContainerHalf";

const Container = ({
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
  target,
}) => {
  return (
    <>
      <MainPage
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
export default Container;
