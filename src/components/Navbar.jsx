import { Link } from "react-router-dom";
import Nav from "./Nav";

const Navbar = ({ setOpen }) => {
  return (
    <div className="min-w-60 h-full flex flex-col justify-between p-2">
      <div>
        <div className="">
          <Link
            onClick={() => {
              setOpen(false);
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

        <Link
          onClick={() => {
            setOpen(false);
          }}
          to="/characters"
        >
          <Nav title={"Personnage"} />
        </Link>
        <Link
          onClick={() => {
            setOpen(false);
          }}
          to="/comics"
        >
          <Nav title={"Comics"} />
        </Link>
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
