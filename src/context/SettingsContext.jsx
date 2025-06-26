import { createContext, useContext } from "react";
import { useSettings as useSettingsHook } from "../hooks/useSettings";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const settingsHook = useSettingsHook();
  return (
    <SettingsContext.Provider value={settingsHook}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  return useContext(SettingsContext);
};
