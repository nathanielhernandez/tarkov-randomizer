import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { fetchWeapons, fetchMods } from "./utils/tarkovApi";
import { clearIds, randomizeItemWithSlots } from "./utils/randomizer";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [weaponsList, setWeaponsList] = useState([]);
  const [selectedWeapon, setSelectedWeapon] = useState(null);
  const [modsList, setModsList] = useState([]);
  const [filledSlots, setFilledSlots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tempWeaponsList = await fetchWeapons();
        const tempModsList = await fetchMods();
        setWeaponsList(tempWeaponsList);
        setModsList(tempModsList);
      } catch (err) {
        console.error("Failed to fetch: ", err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (weaponsList.length > 0 && modsList.length > 0 && !selectedWeapon) {
      reselectWeapon();
    }
  }, [weaponsList, modsList]);

  const getRandomWeapon = (list) => {
    console.log(list);
    if (!list || list.length === 0) return null;
    return list[Math.floor(Math.random() * list.length)];
  };

  const reselectWeapon = () => {
    if (filledSlots.length > 0) clearIds();
    if (!weaponsList || weaponsList.length === 0) {
      console.warn("No items available to select from yet.");
      return;
    }

    const newWeapon = getRandomWeapon(weaponsList);

    setSelectedWeapon(newWeapon);
    setFilledSlots(randomizeItemWithSlots(newWeapon, modsList, 0));
  };

  return (
    <AppContext.Provider
      value={{
        weaponsList,
        setWeaponsList,
        selectedWeapon,
        modsList,
        setModsList,
        filledSlots,
        setFilledSlots,
        reselectWeapon,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
