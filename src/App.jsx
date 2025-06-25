import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { fetchWeapons, fetchMods } from "./utils/tarkovApi";
import { randomizeItemWithSlots } from "./utils/randomizer";
import GunBuilder from "./components/GunBuilder";
import Sidebar from "./components/Sidebar";
import ParallaxBackground from "./components/ParallaxBackground";
import { initGA } from "./utils/initGA";
import "./index.css";

function App() {
  if (import.meta.env.VITE_IS_PROD_ANALYTICS === "true") {
    initGA();
  }

  const [selectedWeapon, setSelectedWeapon] = useState(null);
  const [filledSlots, setFilledSlots] = useState([]);

  const {
    data: weapons,
    isLoading: weaponsLoading,
    isError: weaponsError,
  } = useQuery({ queryKey: ["weapons"], queryFn: fetchWeapons });

  const {
    data: mods,
    isLoading: modsLoading,
    isError: modsError,
  } = useQuery({ queryKey: ["mods"], queryFn: fetchMods });

  if (weaponsLoading || modsLoading) {
    return <p>Loading assets...</p>; // defer UI
  }

  if (weaponsError || modsError) {
    return <p>Failed to load data.</p>; // graceful fail state
  }

  const handleGenerate = () => {
    if (!weapons.length || !mods.length) {
      console.error("Weapons or mods failed to load");
      return;
    }

    const index = Math.floor(Math.random() * weapons.length);
    const weapon = weapons[index];
    const filled = randomizeItemWithSlots(weapon, mods, 0);

    setSelectedWeapon(weapon);
    setFilledSlots(filled);
  };

  if (weaponsLoading || modsLoading) {
    return <p>Loading assets...</p>;
  }

  return (
    <div className='main-container'>
      <ParallaxBackground />
      <Sidebar onReroll={handleGenerate} />
      <GunBuilder
        selectedWeapon={selectedWeapon}
        filledSlots={filledSlots}
        onReroll={handleGenerate}
      />
    </div>
  );
}

export default App;
