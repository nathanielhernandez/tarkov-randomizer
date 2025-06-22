import SlotTree from "./SlotTree";
import "./GunBuilder.css";
import "../index.css";
import { useAppContext } from "../AppContext";

const GunBuilder = () => {
  const { selectedWeapon, filledSlots, getRandomWeapon } = useAppContext();

  console.log(filledSlots);

  return (
    <div className='generator-container'>
      <div className='gun-container'>
        <div className='mobile-header'>
          <div className='logo' />
          <h1 className='glow'>Random Gun Builder</h1>
        </div>
        <div className='gun-image-wrapper'>
          <img className='image' src={selectedWeapon.image8xLink} />
        </div>
        <div className='gun-name'>
          {selectedWeapon ? selectedWeapon.name : "Loading weapon..."}
        </div>

        <div className='main-seperator' />

        {filledSlots?.slots?.map((slot, i) => (
          <div
            style={{
              width: "100%",
            }}
            key={i}
          >
            <SlotTree key={i} slot={slot} index={i} />
            {i < filledSlots.slots.length - 1 && (
              <div className='seperator-container'>
                <div className='main-seperator' />
              </div>
            )}
          </div>
        ))}
        <div className='mobile-button'>
          <button onClick={getRandomWeapon}>generate</button>
        </div>
      </div>
    </div>
  );
};
export default GunBuilder;
