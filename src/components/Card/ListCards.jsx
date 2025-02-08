//Components
import CharacterCard from "./CharacterCard";
import ComicCard from "./ComicCard";

const ListCards = ({
  results,
  open,
  setOpen,
  oldPath,
  insideFavoriteCharacters,
  setInsideFavoriteCharacters,
  insideFavoriteComics,
  setInsideFavoriteComics,
}) => {
  return (
    <>
      {oldPath === "characters" ? (
        <CharacterCard
          results={results}
          open={open}
          setOpen={setOpen}
          insideFavoriteCharacters={insideFavoriteCharacters}
          setInsideFavoriteCharacters={setInsideFavoriteCharacters}
        />
      ) : (
        <ComicCard
          results={results}
          open={open}
          setOpen={setOpen}
          insideFavoriteComics={insideFavoriteComics}
          setInsideFavoriteComics={setInsideFavoriteComics}
        />
      )}
    </>
  );
};

export default ListCards;
