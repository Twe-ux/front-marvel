import SearchBar from "./SearchBar";

const Header = ({ find, setFind }) => {
  return (
    <header>
      <div className=" w-full flex justify-between items-center ">
        <nav className="z-10 relative flex h-12 justify-between items-center w-full">
          <div className="flex gap-6 text-white">LOGIN</div>
          <SearchBar find={find} setFind={setFind} />
          <div className="flex gap-6  text-white">SIGN UP</div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
