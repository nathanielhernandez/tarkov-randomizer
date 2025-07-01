import { useSettings } from "../hooks/useSettings";

const Settings = () => {
  const { settings, toggleSetting } = useSettings();
  return (
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
        <label htmlFor='require-muzzle'> Enforce Muzzle</label>
      </li>
    </ul>
  );
};
export default Settings;
