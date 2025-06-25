// import { createContext, useContext, useState, useEffect } from "react";
// import { fetchWeapons, fetchMods } from "./utils/tarkovApi";
// import { clearIds, randomizeItemWithSlots } from "./utils/randomizer";

// const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//   const [weaponsList, setWeaponsList] = useState([]);
//   const [selectedWeapon, setSelectedWeapon] = useState(null);
//   const [modsList, setModsList] = useState([]);
//   const [filledSlots, setFilledSlots] = useState([]);

//   useEffect(() => {
//     const init = async () => {
//       try {
//         const tempWeaponsList = await fetchWeapons();
//         const tempModsList = await fetchMods();

//         console.log(tempWeaponsList);

//         setWeaponsList(tempWeaponsList || []);
//         setModsList(tempModsList || []);

//         const tempWeapon = getRandomWeapon(tempWeaponsList);
//         const tempFilled = randomizeItemWithSlots(tempWeapon, tempModsList, 0);

//         setFilledSlots(tempFilled);
//         setSelectedWeapon(tempWeapon);
//       } catch (err) {
//         console.error("Failed to fetch: ", err);
//       }
//     };

//     init();
//   }, []);

//   // useEffect(() => {
//   //   if (weaponsList.length && modsList.length && !selectedWeapon) {
//   //     generateAndSetWeapon();
//   //   }
//   // }, [weaponsList.length, modsList.length, selectedWeapon]);

//   const getRandomWeapon = (list) => {
//     if (!Array.isArray(list) || list.length === 0) return null;
//     return list[Math.floor(Math.random() * list.length)];
//   };

//   const generateAndSetWeapon = () => {
//     if (!weaponsList.length || !modsList.length) {
//       console.warn("Weapon or mod list not ready");
//       return;
//     }

//     clearIds();

//     const tempWeapon = getRandomWeapon(weaponsList);
//     const tempFilled = randomizeItemWithSlots(tempWeapon, modsList, 0);

//     setSelectedWeapon(tempWeapon);
//     setFilledSlots(tempFilled);
//   };

//   return (
//     <AppContext.Provider
//       value={{
//         weaponsList,
//         setWeaponsList,
//         selectedWeapon,
//         modsList,
//         setModsList,
//         filledSlots,
//         setFilledSlots,
//         generateAndSetWeapon,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useAppContext = () => useContext(AppContext);
