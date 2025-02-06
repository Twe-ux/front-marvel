import { Link } from "react-router-dom";
import Nav from "./Nav";
import SearchBar from "./SearchBar";

const Navbar = ({ setOpen, find, setFind, setSkip }) => {
  return (
    <div className="min-w-60 h-full flex flex-col justify-between p-2">
      <div>
        <div className="mb-5">
          <Link
            onClick={() => {
              setOpen(false);
              setSkip(100);
            }}
            to="/characters"
          >
            <img
              className="h-20"
              src="/src/assets/img/Logo-Marvel.png"
              alt="logo marvel"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <div className="mb-5">
            <SearchBar find={find} setFind={setFind} />
          </div>

          <Link
            onClick={() => {
              setOpen(false);
              setSkip(100);
            }}
            to="/characters"
          >
            <Nav title={"Personnage"} />
          </Link>

          <Link
            onClick={() => {
              setOpen(false);
              setSkip(100);
            }}
            to="/comics"
          >
            <Nav title={"Comics"} />
          </Link>
          <Link
            onClick={() => {
              setOpen(false);
            }}
            to="/favoris"
          >
            <Nav title={"Favoris"} />
          </Link>
        </div>
      </div>

      {/* Block à coder 
      <div className="flex items-center ">
        <img
          className="h-5 rounded-"
          src="src/assets/img/Logo-Marvel.png"
          alt=""
        />
        <div className="flex pr-1 text-white">USER</div>
      </div>*/}
    </div>
  );
};

export default Navbar;
