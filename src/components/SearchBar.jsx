import { useRef, useState } from "react";

// Time used to debounce the search update.
const DEBOUNCE_TIME_MILLISECONDS = 500;

const SearchBar = ({ find, setFind }) => {
  // Store the current debounce timeout id.
  const timeout = useRef(null);

  // Store the local searchbar value.
  const [value, setValue] = useState(find);

  const handleFindChange = (event) => {
    const value = event.target.value;
    setValue(value);

    // Clear the current debounce timeout.
    if (timeout.current) {
      clearTimeout(timeout.current);
      timeout.current = null;
    }

    // Wait for the timeout before updating the "find" value.
    timeout.current = setTimeout(function updateFindValue() {
      setFind(value);
      timeout.current = null;
    }, DEBOUNCE_TIME_MILLISECONDS);
  };

  return (
    <form>
      <input
        className="border-2 h-8 p-2 bg-white w-55 rounded-md"
        type="text"
        placeholder="Recherche ..."
        name="find"
        value={value}
        onChange={handleFindChange}
      />
    </form>
  );
};

export default SearchBar;
