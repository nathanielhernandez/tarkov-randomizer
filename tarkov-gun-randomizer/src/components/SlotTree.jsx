import "./GunBuilder.css";
import "../index.css";

const SlotTree = ({ slot }) => {
  if (!slot || !slot.item) return null;

  if (slot.depth === 1) {
    return (
      <div key={slot.id} className='part-parent-container'>
        <div className='part-parent-info'>
          <div className='mod-image-wrapper'>
            <div className='mod-short-name'>{slot.item.shortName}</div>
            <img className='image' src={slot.item.image} />
          </div>
          <div className='part-info'>
            <h2 className='glow'>{slot.name}:</h2> {slot.item.name}
          </div>
        </div>
        {slot.item.slots?.map((subSlot, i) => (
          <SlotTree key={`${slot.name}-${i}`} slot={subSlot} />
        ))}
      </div>
    );
  }

  if (slot.depth > 1) {
    return (
      <div className='part-child-container'>
        <div className='part-child-info'>
          {/* <div className='connector' /> */}
          <div className='mod-image-wrapper'>
            <div className='mod-short-name'>{slot.item.shortName}</div>
            <img className='image' src={slot.item.image} />
          </div>
          <div style-='part-info'>
            <h2 className='glow'>{slot.name}:</h2> {slot.item.name}
          </div>
        </div>

        {slot.item.slots?.map((subSlot, i) => (
          <SlotTree key={`${slot.name}-${i}`} slot={subSlot} />
        ))}
      </div>
    );
  }
};
export default SlotTree;
