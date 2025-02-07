import "./assets/css/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// import { insideFavorite, setInsideFavorite } from "./lib/characterFavorite";

import { useState, useEffect } from "react";

//Components
import Pagination from "./components/Pagination";
import Navbar from "./components/Navbar/Navbar";

//Routes
import Loader from "./components/Loader";
import Home from "./routes/Home";
import Details from "./components/Details";
import Favorite from "./routes/Favorite";

function App() {
  const [find, setFind] = useState("");
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [skip, setSkip] = useState(100);
  const [limit, setLimit] = useState(100);
  const [count, setCount] = useState(0);

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
    <>
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
                />
                <div className="w-full h-full bg-white rounded-lg pt-2 pb-2 pr-2 pl-2 overflow-hidden">
                  <div className="flex h-full gap-2">
                    <Routes>
                      <Route
                        path="/characters"
                        element={
                          <Home
                            find={find}
                            skip={skip}
                            limit={limit}
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
                          <Home
                            find={find}
                            skip={skip}
                            limit={limit}
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
                          <Details
                            target="character"
                            find={find}
                            skip={skip}
                            limit={limit}
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
                        path="/comics/:id"
                        element={
                          <Details
                            target="comic"
                            find={find}
                            skip={skip}
                            limit={limit}
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
                        path="/favorite"
                        element={
                          <Favorite
                            open={open}
                            setOpen={setOpen}
                            insideFavoriteCharacters={insideFavoriteCharacters}
                            insideFavoriteComics={insideFavoriteComics}
                          />
                        }
                      />

                      <Route
                        path="/*"
                        element={<Navigate to="/characters" replace />}
                      />
                    </Routes>
                  </div>
                </div>
              </div>
            </main>
            <Pagination skip={skip} setSkip={setSkip} count={count} />
          </>
        )}
      </Router>
    </>
  );
}

export default App;
