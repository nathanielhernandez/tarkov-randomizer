import "../index.css";
import { useEffect, useState } from "react";
import { useSettings } from "../context/SettingsContext";

import SidebarText from "./SidebarText";

const Sidebar = ({ onReroll }) => {
  const { settings, toggleSetting } = useSettings();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  return (
    <>
      <button
        className='hamburger'
        onClick={() => {
          setIsMobileMenuOpen(!isMobileMenuOpen);
          console.log("ham clicked, open value: ", !isMobileMenuOpen);
        }}
      >
        ☰
      </button>
      <aside className={`sidebar-container ${isMobileMenuOpen ? "open" : ""}`}>
        <div className='sidebar'>
          <div className='logo-container'>
            <div className='logo' />
            <h1 className='logo-text glow'>Random Weapon Builder</h1>
          </div>
          <div className='attention-notification-container'>
            <div className='warning-icon' />
            <div>
              <h3>Attention! Fan made website.</h3>
              <span className='attention-text'>
                Escape the Meta has no affiliation with Battlestate Games or
                it's products.
              </span>
            </div>
          </div>
          <SidebarText />
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
          {!isMobileMenuOpen ? (
            <button className='main' onClick={onReroll}>
              generate
            </button>
          ) : (
            ""
          )}
        </div>
      </aside>
      {isMobileMenuOpen && (
        <div
          className='backdrop'
          onClick={() => {
            console.log("backdrop clicked");
            setIsMobileMenuOpen(false);
          }}
        />
      )}
    </>
  );
};
export default Sidebar;
