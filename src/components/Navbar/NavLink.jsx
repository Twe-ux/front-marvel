import { Link } from "react-router-dom";

const NavLink = ({ title, to, setOpen, setSkip }) => {
  return (
    <Link
      onClick={() => {
        setOpen(false);
        setSkip(100);
      }}
      to={to}
    >
      <div className=" pl-2 text-white">{title}</div>
    </Link>
  );
};

export default NavLink;
