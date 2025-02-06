import Home from "../routes/Home";
import ContainerHalf from "./ContainerHalf";

const Details = ({
  target,
  find,
  skip,
  limit,
  open,
  setOpen,
  count,
  setCount,
}) => {
  return (
    <>
      <Home
        find={find}
        skip={skip}
        limit={limit}
        open={open}
        setOpen={setOpen}
        count={count}
        setCount={setCount}
      />
      <ContainerHalf target={target} setOpen={setOpen} />
    </>
  );
};
export default Details;
