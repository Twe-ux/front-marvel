import Cards from "../components/Cards";
import Comics from "../components/Comics";
import ItemsFavorite from "../components/ItemsFavorite";

const Favorite = ({
  open,
  setOpen,
  insideFavoriteCharacters,
  insideFavoriteComics,
}) => {
  let newTabCharacters = [];
  newTabCharacters = [...insideFavoriteCharacters];
  console.log(newTabCharacters[0]);
  let newTabComics = [];
  newTabComics = [...insideFavoriteComics];

  return (
    <div className=" rounded-md overflow-hidden overflow-y-scroll">
      <div className=" flex flex-wrap gap-3 justify-between ">
        {newTabCharacters[0] === undefined ? null : (
          <div>
            <h2 className=" font-medium mt-10 ">Vos Personnages favoris : </h2>
            <div className="flex gap-2 flex-wrap">
              {newTabCharacters.map((favorite, index) => {
                // console.log(favorite);
                return (
                  <div className=" rounded-md overflow-hidden overflow-y-scroll bordeR">
                    <div className=" flex flex-wrap gap-3 justify-between bordeR">
                      {/* <ItemsFavorite
                        key={favorite + index}
                        open={open}
                        setOpen={setOpen}
                        oldPath={oldPath}
                        comics={favorite}
                        target={"character"}
                      /> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {newTabComics[0] === undefined ? null : (
          <div>
            <h2 className=" font-medium mt-10">Vos Comics favoris : </h2>
            <div className="flex gap-5 flex-wrap">
              {newTabComics.map((favorite, index) => {
                // console.log(favorite);
                return (
                  <>
                    {/* <ItemsFavorite /> */}
                    <Comics
                      key={favorite + index}
                      comics={favorite}
                      target={"comic"}
                    />
                  </>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorite;
