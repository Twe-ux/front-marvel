const [insideFavorite, setInsideFavorite] = useState(
  function loadFavoriteFromLocalStorage() {
    const serialized = window.localStorage.getItem("favorite");
    if (serialized === null) {
      return new Set();
    }
    return new Set(JSON.parse(serialized));
  }
);
