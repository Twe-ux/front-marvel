import FavoritePage from "../../routes/FavoritePage";
import ContainerHalf from "../ContainerHalf";

const FavoritePageHalf = ({
  setOpen,
  insideFavoriteCharacters,
  setInsideFavoriteCharacters,
  insideFavoriteComics,
  setInsideFavoriteComics,
  target,
  setTarget,
}) => {
  return (
    <>
      <FavoritePage
        insideFavoriteCharacters={insideFavoriteCharacters}
        setInsideFavoriteCharacters={setInsideFavoriteCharacters}
        insideFavoriteComics={insideFavoriteComics}
        setInsideFavoriteComics={setInsideFavoriteComics}
        setTarget={setTarget}
      />
      <ContainerHalf target={target} setOpen={setOpen} />
    </>
  );
};

export default FavoritePageHalf;
