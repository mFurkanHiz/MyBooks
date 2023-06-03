import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [favoriler, setFavoriler] = useState([]);

  //  obje => kitap
  const favorilereEkle = (obje) => {
    // spread operatörü
    const eskiFavoriler = [...favoriler];
    const yeniFavoriler = eskiFavoriler.concat(obje);
    setFavoriler(yeniFavoriler);
  };

  const favorilerdenCikar = (id) => {
    const eskiFavoriler = [...favoriler];
    const yeniFavoriler = eskiFavoriler.filter((urun) => urun.id !== id);
    setFavoriler(yeniFavoriler);
  };

  return (
    <AppContext.Provider
      value={{ favoriler, favorilereEkle, favorilerdenCikar }}
    >
      {children}
    </AppContext.Provider>
  );
};
