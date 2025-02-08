import "./assets/css/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useState, useEffect } from "react";

//Components
import Pagination from "./components/Pagination";
import Navbar from "./components/Navbar/Navbar";

//Routes
import Loader from "./routes/Loader";
import MainPage from "./routes/MainPage";
import Container from "./routes/Container";
import FavoritePage from "./routes/FavoritePage";
import FavoritePageHalf from "./components/ItemsFavorite/FavoritePageHalf";

function App() {
  //Loader
  const [visible, setVisible] = useState(true);
  //SearchBar
  const [find, setFind] = useState("");
  const [skip, setSkip] = useState(100);
  //Container
  const [open, setOpen] = useState(false);
  // console.log("app", open);

  //Slider
  const [count, setCount] = useState(0);
  const [hiddenSlider, setHiddenSlider] = useState(true);
  // console.log("count", count);

  //For initiate Favorite set
  const [insideFavoriteCharacters, setInsideFavoriteCharacters] = useState(
    function loadFavoriteFromLocalStorage() {
      const serialized = window.localStorage.getItem("favorite/characters");
      if (serialized === null) {
        return new Set();
      }
      return new Set(JSON.parse(serialized));
    }
  );

  useEffect(
    function storeFavoritesInLocalStorage() {
      const serialized = JSON.stringify([...insideFavoriteCharacters]);
      window.localStorage.setItem("favorite/characters", serialized);
    },
    [insideFavoriteCharacters]
  );

  const [insideFavoriteComics, setInsideFavoriteComics] = useState(
    function loadFavoriteFromLocalStorage() {
      const serialized = window.localStorage.getItem("favorite/comics");
      if (serialized === null) {
        return new Set();
      }
      return new Set(JSON.parse(serialized));
    }
  );

  useEffect(
    function storeFavoritesInLocalStorage() {
      const serialized = JSON.stringify([...insideFavoriteComics]);
      window.localStorage.setItem("favorite/comics", serialized);
    },
    [insideFavoriteComics]
  );

  return (
    <Router>
      <Loader visible={visible} setVisible={setVisible} />
      {visible ? null : (
        <>
          <main>
            <div className="flex w-full h-full pb-2">
              <Navbar
                find={find}
                setFind={setFind}
                setOpen={setOpen}
                setSkip={setSkip}
                setHiddenSlider={setHiddenSlider}
              />

              <div className=" w-full h-full bg-white rounded-lg p-2 overflow-hidden pb-10">
                <div className="flex justify-between w-full h-full gap-2">
                  <Routes>
                    <Route
                      path="/characters"
                      element={
                        <MainPage
                          find={find}
                          skip={skip}
                          open={open}
                          setOpen={setOpen}
                          count={count}
                          setCount={setCount}
                          insideFavoriteCharacters={insideFavoriteCharacters}
                          setInsideFavoriteCharacters={
                            setInsideFavoriteCharacters
                          }
                          insideFavoriteComics={insideFavoriteComics}
                          setInsideFavoriteComics={setInsideFavoriteComics}
                        />
                      }
                    />
                    <Route
                      path="/comics"
                      element={
                        <MainPage
                          find={find}
                          skip={skip}
                          open={open}
                          setOpen={setOpen}
                          count={count}
                          setCount={setCount}
                          insideFavoriteCharacters={insideFavoriteCharacters}
                          setInsideFavoriteCharacters={
                            setInsideFavoriteCharacters
                          }
                          insideFavoriteComics={insideFavoriteComics}
                          setInsideFavoriteComics={setInsideFavoriteComics}
                        />
                      }
                    />
                    <Route
                      path="/characters/:id"
                      element={
                        <Container
                          find={find}
                          skip={skip}
                          open={open}
                          setOpen={setOpen}
                          count={count}
                          setCount={setCount}
                          insideFavoriteCharacters={insideFavoriteCharacters}
                          setInsideFavoriteCharacters={
                            setInsideFavoriteCharacters
                          }
                          insideFavoriteComics={insideFavoriteComics}
                          setInsideFavoriteComics={setInsideFavoriteComics}
                          target={"character"}
                        />
                      }
                    />
                    <Route
                      path="/comics/:id"
                      element={
                        <Container
                          find={find}
                          skip={skip}
                          open={open}
                          setOpen={setOpen}
                          count={count}
                          setCount={setCount}
                          insideFavoriteCharacters={insideFavoriteCharacters}
                          setInsideFavoriteCharacters={
                            setInsideFavoriteCharacters
                          }
                          insideFavoriteComics={insideFavoriteComics}
                          setInsideFavoriteComics={setInsideFavoriteComics}
                          target={"comic"}
                        />
                      }
                    />

                    <Route
                      path="/favorite"
                      element={
                        <FavoritePage
                          insideFavoriteCharacters={insideFavoriteCharacters}
                          setInsideFavoriteCharacters={
                            setInsideFavoriteCharacters
                          }
                          insideFavoriteComics={insideFavoriteComics}
                          setInsideFavoriteComics={setInsideFavoriteComics}
                          setHiddenSlider={setHiddenSlider}
                        />
                      }
                    />

                    <Route
                      path="/favorite/character/:id"
                      element={
                        <FavoritePageHalf
                          open={open}
                          setOpen={setOpen}
                          insideFavoriteCharacters={insideFavoriteCharacters}
                          setInsideFavoriteCharacters={
                            setInsideFavoriteCharacters
                          }
                          insideFavoriteComics={insideFavoriteComics}
                          setInsideFavoriteComics={setInsideFavoriteComics}
                          target={"character"}
                          setHiddenSlider={setHiddenSlider}
                        />
                      }
                    />
                    <Route
                      path="/favorite/comic/:id"
                      element={
                        <FavoritePageHalf
                          open={open}
                          setOpen={setOpen}
                          insideFavoriteCharacters={insideFavoriteCharacters}
                          setInsideFavoriteCharacters={
                            setInsideFavoriteCharacters
                          }
                          insideFavoriteComics={insideFavoriteComics}
                          setInsideFavoriteComics={setInsideFavoriteComics}
                          target={"comic"}
                        />
                      }
                    />

                    <Route
                      path="/*"
                      element={<Navigate to="/characters" replace />}
                    />
                  </Routes>
                </div>
                {hiddenSlider && (
                  <Pagination skip={skip} setSkip={setSkip} count={count} />
                )}
              </div>
            </div>
          </main>
        </>
      )}
    </Router>
  );
}

export default App;
