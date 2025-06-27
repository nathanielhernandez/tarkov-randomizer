import SlotTree from "./SlotTree";
import "./GunBuilder.css";
import "../index.css";

const GunBuilder = ({ selectedWeapon, filledSlots, onReroll }) => {
  if (filledSlots.length === 0) {
    return (
      <div className='generator-container'>
        <div className='gun-container'>
          <div className='mobile-header'>
            <div className='logo' />
            <h1 className='glow'>Random Weapon Builder</h1>
          </div>
        </div>
        <div className='no-gun-generated'>
          <h1 className='glow'>Click generate</h1>
        </div>
        <div className='mobile-button'>
          <button className='main' onClick={onReroll}>
            generate
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className='generator-container'>
        <div className='gun-container'>
          <div className='mobile-header'>
            <div className='logo' />
            <h1 className='glow'>Random Gun Builder</h1>
          </div>
          <div className='gun-image-wrapper'>
            {selectedWeapon ? (
              <img className='image' src={selectedWeapon.image8xLink} />
            ) : (
              <p>Loading...</p>
            )}
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
            <button className='main' onClick={onReroll}>
              generate
            </button>
          </div>
        </div>
      </div>
    );
  }
};
export default GunBuilder;
