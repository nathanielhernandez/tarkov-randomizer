import "../index.css";

const Sidebar = ({ onReroll, weaponsLoading, modsLoading }) => {
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
          <li>
            There is a known issue where attachments to barrels are not
            considered, this will be fixed in the next update
          </li>
        </ul>
        There will be more features added to future updates:
        <ul>
          <li>Locking specific components or weapons</li>
          <li>Ensuring an optic is generated within the build</li>
          <li>Estimated costs of each build</li>
          <li>Minor bug fixes and UI tweaks</li> <li>...and more!</li>
        </ul>
        <p>
          If you have further ideas or feature request, you can reach me here.
        </p>
        <button onClick={onReroll}>generate</button>
      </div>
    </div>
  );
};
export default Sidebar;
