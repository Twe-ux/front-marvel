import Home from "../routes/Home";
import ContainerHalf from "./ContainerHalf";

const Details = ({ target, find, open, setOpen }) => {
  return (
    <>
      <Home find={find} open={open} setOpen={setOpen} />
      <ContainerHalf target={target} setOpen={setOpen} />
    </>
  );
};
export default Details;
