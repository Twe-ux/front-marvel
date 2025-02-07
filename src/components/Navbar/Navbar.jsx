import { Link } from "react-router-dom";

// Components
import SearchBar from "./SearchBar";
import NavLink from "./NavLink";

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
          <SearchBar find={find} setFind={setFind} />
          <NavLink
            title={"Personnages"}
            to={"/characters"}
            setOpen={setOpen}
            setSkip={setSkip}
          />
          <NavLink
            title={"Comics"}
            to={"/comics"}
            setOpen={setOpen}
            setSkip={setSkip}
          />
          <NavLink
            title={"Favoris"}
            to={"/favorite"}
            setOpen={setOpen}
            setSkip={setSkip}
          />
        </div>
      </div>

      {/* <div className="flex items-center ">
        <img
          className="h-5 rounded-"
          src="src/assets/img/Logo-Marvel.png"
          alt=""
        />
        <div className="flex pr-1 text-white">USER</div>
      </div> */}
    </div>
  );
};

export default Navbar;
