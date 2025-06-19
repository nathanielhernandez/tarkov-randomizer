import { useState, useEffect } from "react";
import { fetchWeapons, fetchMods } from "../utils/tarkovApi";
import { clearCache } from "../utils/cachedFetch";
import { clearIds, randomizeItemWithSlots } from "../utils/randomizer";
import SlotTree from "./SlotTree";
import "./GunBuilder.css";
import "../index.css";
import { useAppContext } from "../AppContext";

const GunBuilder = () => {
  const { selectedWeapon, filledSlots } = useAppContext();

  return (
    <div>
      <div className='gun-image-wrapper'>
        <img className='image' src={selectedWeapon.image8xLink} />
      </div>

      {selectedWeapon ? selectedWeapon.name : "Loading weapon..."}

      {filledSlots?.slots?.map((slot, i) => (
        <SlotTree key={i} slot={slot} />
      ))}
    </div>
  );
};
export default GunBuilder;
