
import { createContext, useEffect, useState } from "react";

export const FavouriteContext = createContext();

export const FavouritesProvider = ({ children }) => {

  // Get saved favourites from localStorage
  const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : [];
  });

  // Save favourites whenever they change
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  // Add or remove a song
  const toggleFavourite = (song) => {
    const alreadyFavorite = favourites.some(
      (item) => item.id === song.id
    );

    if (alreadyFavorite) {
      setFavourites((prev) =>
        prev.filter((item) => item.id !== song.id)
      );
    } else {
      setFavourites((prev) => [...prev, song]);
    }
  };

  return (
    <FavouriteContext.Provider
      value={{ favourites, setFavourites, toggleFavourite }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};
