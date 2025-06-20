import "./GunBuilder.css";
import "../index.css";

const SlotTree = ({ slot, index }) => {
  if (!slot || !slot.item) return null;

  const isFirst = index < 1;

  console.log(isFirst);
  console.log(`${slot.item.name} index = ${index} depth=${slot.depth}`);

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
          <SlotTree key={`${slot.name}-${i}`} slot={subSlot} index={i} />
        ))}
      </div>
    );
  }

  if (slot.depth > 1) {
    return (
      <div className={`part-child-container`}>
        <div className={`part-child-info ${isFirst ? "has-before" : ""}`}>
          <div className='mod-image-wrapper'>
            <div className='mod-short-name'>{slot.item.shortName}</div>
            <img className='image' src={slot.item.image} />
          </div>
          <div style-='part-info'>
            <h2 className='glow'>{slot.name}:</h2> {slot.item.name}
          </div>
        </div>

        {slot.item.slots?.map((subSlot, i) => (
          <SlotTree key={`${slot.name}-${i}`} slot={subSlot} index={i} />
        ))}
      </div>
    );
  }
};
export default SlotTree;
