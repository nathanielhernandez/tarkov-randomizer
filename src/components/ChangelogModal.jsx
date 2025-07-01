import { useEffect, useState } from "react";
import Changelog from "./Changelog";
import { CURRENT_VERSION } from "../utils/version";

const ChangelogModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const seenVersion = localStorage.getItem("changelog_seen");

    if (seenVersion !== CURRENT_VERSION) {
      setShowModal(true);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("changelog_seen", CURRENT_VERSION);
    setShowModal(false);
  };

  if (!showModal) {
    return null;
  }

  return (
    <div onClick={handleDismiss} className='backdrop modal'>
      <div className='modal-container' onClick={(e) => e.stopPropagation()}>
        <Changelog isModal={true} version={CURRENT_VERSION} />
        <div className='right-align mt_1'>
          <button onClick={handleDismiss} className='small'>
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangelogModal;
