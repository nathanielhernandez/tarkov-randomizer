import "../index.css";
import { useEffect, useState } from "react";
import { CURRENT_VERSION } from "../utils/version";

import SidebarText from "./SidebarText";

const Sidebar = ({ onReroll }) => {
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
          {!isMobileMenuOpen ? (
            <div className='logo-container'>
              <div className='logo' />
              <h1 className='logo-text glow'>Random Weapon Builder</h1>
            </div>
          ) : (
            ""
          )}
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

          <div className='generate-button'>
            {!isMobileMenuOpen ? (
              <button className='main' onClick={onReroll}>
                generate
              </button>
            ) : (
              ""
            )}
            <h4>{CURRENT_VERSION}</h4>
          </div>
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
