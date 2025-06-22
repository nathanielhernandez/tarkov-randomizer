import { createContext, useContext, useState, useEffect } from "react";
import { fetchWeapons, fetchMods } from "./utils/tarkovApi";
import { clearIds, randomizeItemWithSlots } from "./utils/randomizer";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [weapons, setWeapons] = useState([]);
  const [selectedWeapon, setSelectedWeapon] = useState([]);
  const [mods, setMods] = useState([]);
  const [filledSlots, setFilledSlots] = useState([]);

  useEffect(() => {
    async function loadData() {
      const tempWeapons = await fetchWeapons();
      const tempMods = await fetchMods();

      setWeapons(tempWeapons);
      setMods(tempMods);
    }

    loadData();
  }, []);

  // useEffect(() => {
  //   if (weapons.length > 0) {
  //     getRandomWeapon();
  //   }
  // }, [weapons]);

  useEffect(() => {
    clearIds();
    setFilledSlots(randomizeItemWithSlots(selectedWeapon, mods, 0));
  }, [selectedWeapon]);

  const getRandomWeapon = () => {
    if (weapons.length === 0) return console.log(weapons.length);
    const index = Math.floor(Math.random() * weapons.length);

    setSelectedWeapon(weapons[index]);
  };

  return (
    <AppContext.Provider
      value={{
        weapons,
        setWeapons,
        selectedWeapon,
        getRandomWeapon,
        mods,
        setMods,
        filledSlots,
        setFilledSlots,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
