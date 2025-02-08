import { Link } from "react-router-dom";

const NavLink = ({ title, to, setOpen, setSkip, setHiddenSlider }) => {
  return (
    <Link
      onClick={() => {
        setOpen(false);
        setSkip(100);
        {
          to === "/favorite" ? setHiddenSlider(false) : setHiddenSlider(true);
        }
      }}
      to={to}
    >
      <div className=" pl-2 text-white">{title}</div>
    </Link>
  );
};

export default NavLink;
