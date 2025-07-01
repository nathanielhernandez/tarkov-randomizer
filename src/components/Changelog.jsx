const Changelog = ({ isModal, version }) => {
  return (
    <div>
      {isModal ? <h3>Whats new in {version}</h3> : ""}
      <ul>
        <li>Added changelog modal</li>
        <li>
          Removed attachment enforcements until algorithms could be improved.
        </li>
        <li>Small visual improvements</li>
      </ul>
    </div>
  );
};
export default Changelog;
