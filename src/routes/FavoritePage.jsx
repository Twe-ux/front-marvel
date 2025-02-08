import ItemsFavorite from "../components/ItemsFavorite/ItemsFavorite";

const FavoritePage = ({
  insideFavoriteCharacters,
  setInsideFavoriteCharacters,
  insideFavoriteComics,
  setInsideFavoriteComics,
  setTarget,
}) => {
  let newTabCharacters = [];
  newTabCharacters = [...insideFavoriteCharacters];

  let newTabComics = [];
  newTabComics = [...insideFavoriteComics];

  return (
    <div className="flex flex-col w-full gap-5 overflow-hidden overflow-y-scroll">
      {newTabCharacters[0] === undefined ? null : (
        <div>
          <h2 className=" font-medium ">Vos Personnages favoris : </h2>
          <div className="flex gap-2 flex-wrap">
            {newTabCharacters.map((idFavorite, index) => {
              // console.log(idFavorite);
              return (
                <ItemsFavorite
                  key={idFavorite + index}
                  idFavorite={idFavorite}
                  target={"character"}
                  insideFavoriteCharacters={insideFavoriteCharacters}
                  setInsideFavoriteCharacters={setInsideFavoriteCharacters}
                  setTarget={setTarget}
                />
              );
            })}
          </div>
        </div>
      )}
      {newTabComics[0] === undefined ? null : (
        <div>
          <h2 className=" font-medium">Vos Comics favoris : </h2>
          <div className="flex gap-2 flex-wrap">
            {newTabComics.map((idFavorite, index) => {
              return (
                <ItemsFavorite
                  key={idFavorite + index}
                  idFavorite={idFavorite}
                  target={"comic"}
                  insideFavoriteComics={insideFavoriteComics}
                  setInsideFavoriteComics={setInsideFavoriteComics}
                  setTarget={setTarget}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoritePage;
