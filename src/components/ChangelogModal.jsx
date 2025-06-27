import { useEffect, useState } from "react";

const CURRENT_VERSION = "v1.0.0";

const ChangelogModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const seenVersion = localStorage.getItem("changelog_seen");
    if (seenVersion !== CURRENT_VERSION) {
      setShowModal(true);
    }
  }, []);

  return <div>ChangelogModal</div>;
};
export default ChangelogModal;
