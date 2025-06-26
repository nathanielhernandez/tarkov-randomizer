import { useState, useEffect } from "react";

const SETTINGS_KEY = "tarkov_settings";

const defaultSettings = {
  enforceScope: true,
  enforceStock: true,
  enforceMuzzle: true,
};

export const useSettings = () => {
  const [settings, setSettings] = useState(() => {
    if (typeof window === "undefined") return defaultSettings;

    try {
      const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY));
      return { ...defaultSettings, ...saved };
    } catch {
      return defaultSettings;
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
      } catch (e) {
        console.warn("Failed to save settings to localStorage", e);
      }
    }
  }, [settings]);

  const toggleSetting = (key) => {
    if (!(key in defaultSettings)) {
      console.warn(`Unknown setting: ${key}`);
      return;
    }

    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return { settings, toggleSetting };
};
