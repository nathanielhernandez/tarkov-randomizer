import "./GunBuilder.css";
import "../index.css";

const SlotTree = ({ slot }) => {
  if (!slot || !slot.item) return null;
  return (
    <div>
      <div className='mod-image-wrapper'>
        <div className='mod-short-name'>{slot.item.shortName}</div>
        <img className='image' src={slot.item.image} />
      </div>
      {slot.name}: {slot.item.name}
      {slot.item.slots?.map((subSlot, i) => (
        <SlotTree key={`${slot.name}-${i}`} slot={subSlot} />
      ))}
    </div>
  );
};
export default SlotTree;
