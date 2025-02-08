import { useEffect, useState } from "react";
import instance from "../../lib/axios.serve";
//Components
import ItemsCharacterFavorite from "../ItemsFavorite/ItemsCharacterFavorite";
import ItemsComicFavorite from "../ItemsFavorite/ItemsComicFavorite";

const ItemsFavorite = ({
  idFavorite,

  insideFavoriteCharacters,
  setInsideFavoriteCharacters,
  insideFavoriteComics,
  setInsideFavoriteComics,
  target,
  setTarget,
}) => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pathname, setPathname] = useState("");
  const [resultId, setResultId] = useState("");

  // console.log(target);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(`${target}/${idFavorite}`);
        setData(response.data);
        setPathname(response.data.thumbnail.path);
        setResultId(response.data._id);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>null</p>
  ) : target === "character" ? (
    <>
      <ItemsCharacterFavorite
        isLoading={isLoading}
        results={data}
        resultId={resultId}
        pathname={pathname}
        insideFavoriteCharacters={insideFavoriteCharacters}
        setInsideFavoriteCharacters={setInsideFavoriteCharacters}
        setTarget={setTarget}
      />
    </>
  ) : (
    <ItemsComicFavorite
      isLoading={isLoading}
      results={data}
      pathname={pathname}
      insideFavoriteComics={insideFavoriteComics}
      setInsideFavoriteComics={setInsideFavoriteComics}
      setTarget={setTarget}
    />
  );
};

export default ItemsFavorite;
