import "./assets/css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

  return (
    <>
      <Router>
        <Loader visible={visible} setVisible={setVisible} />
        {visible ? null : (
          <>
            <Header find={find} setFind={setFind} />
            <main>
              <div className="flex w-full h-full ">
                <Navbar setOpen={setOpen} />
                <div className="w-full h-full bg-white rounded-t-lg pt-2 pr-2 pl-2 overflow-hidden">
                  <div className="flex h-full gap-2">
                    <Routes>
                      <Route
                        path="/characters"
                        element={
                          <Home find={find} open={open} setOpen={setOpen} />
                        }
                      />
                      <Route
                        path="/comics"
                        element={
                          <Home find={find} open={open} setOpen={setOpen} />
                        }
                      />
                      <Route
                        path="/characters/:id"
                        element={
                          <Details
                            target="character"
                            find={find}
                            open={open}
                            setOpen={setOpen}
                          />
                        }
                      />
                      <Route
                        path="/comics/:id"
                        element={
                          <Details
                            target="comic"
                            find={find}
                            open={open}
                            setOpen={setOpen}
                          />
                        }
                      />
                    </Routes>
                  </div>
                </div>
              </div>
            </main>
          </>
        )}
      </Router>
    </>
  );
}

export default App;
