import "../index.css";
import { useSettings } from "../context/SettingsContext";

const Sidebar = ({ onReroll, weaponsLoading, modsLoading }) => {
  const { settings, toggleSetting } = useSettings();
  return (
    <div className='sidebar-container'>
      <div className='sidebar'>
        <div className='logo-container'>
          <div className='logo' />
          <h1 className='logo-text glow'>Random Weapon Builder</h1>
        </div>
        <p>
          Welcome to the Escape from Tarkov random weapon builder! Click
          Generate to generate a completely random weapon that you can build in
          game. Here are few notes:
        </p>
        <ul>
          <li>This is a beta version, there may be bugs </li>
        </ul>
        There will be more features added to future updates:
        <ul>
          <li>Locking specific components or weapons</li>
          <li>Estimated costs of each build</li>
          <li>Minor bug fixes and UI tweaks</li> <li>...and more!</li>
        </ul>
        <p>
          If you have further ideas or feature request, you can reach me here.
        </p>
        <ul className='options'>
          <li>
            <input
              type='checkbox'
              id='require-stock'
              checked={settings.enforceStock}
              onChange={() => toggleSetting("enforceStock")}
            />
            <label htmlFor='require-stock'> Enforce Stock</label>
          </li>
          <li>
            <input
              type='checkbox'
              id='require-scope'
              checked={settings.enforceScope}
              onChange={() => toggleSetting("enforceScope")}
            />
            <label htmlFor='require-scope'> Enforce Scope</label>
          </li>
          <li>
            <input
              type='checkbox'
              id='require-muzzle'
              checked={settings.enforceMuzzle}
              onChange={() => toggleSetting("enforceMuzzle")}
            />
            <label htmlFor='require-scope'> Enforce Scope</label>
          </li>
        </ul>
        <button onClick={onReroll}>generate</button>
      </div>
    </div>
  );
};
export default Sidebar;
