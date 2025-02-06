import "./assets/css/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import { Redirect } from "react-router-dom";

import { useState } from "react";

//Components
import Header from "./components/Header";
import Navbar from "./components/Navbar";

//Routes
import Loader from "./components/Loader";
import Home from "./routes/Home";
import Details from "./components/Details";

function App() {
  const [find, setFind] = useState("");
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [skip, setSkip] = useState(100);
  const [limit, setLimit] = useState(100);
  const [count, setCount] = useState(0);

  // console.log(skip);

  return (
    <>
      <Router>
        <Loader visible={visible} setVisible={setVisible} />
        {visible ? null : (
          <>
            <main>
              <div className="flex w-full h-full pb-2 ">
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
                          />
                        }
                      />
                      <Route path="/favoris" element={<Header />} />

                      <Route
                        path="/*"
                        element={<Navigate to="/characters" replace />}
                      />
                    </Routes>
                  </div>
                </div>
              </div>
            </main>
            <Header skip={skip} setSkip={setSkip} count={count} />
          </>
        )}
      </Router>
    </>
  );
}

export default App;
