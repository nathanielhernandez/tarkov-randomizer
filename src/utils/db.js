import { openDB } from "idb";

export const DB_NAME = "TarkovDB";
export const MODS_STORE_NAME = "ModsCache";
export const WEAPONS_STORE_NAME = "WeaponsCache";

export const initDB = async () => {
  return openDB(DB_NAME, 4, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(WEAPONS_STORE_NAME)) {
        db.createObjectStore(WEAPONS_STORE_NAME);
      }
      if (!db.objectStoreNames.contains(MODS_STORE_NAME)) {
        db.createObjectStore(MODS_STORE_NAME);
      }
    },
  });
};

export const setCache = async (storeName, key, value) => {
  const db = await initDB();
  await db.put(storeName, value, key);
};

export const getCache = async (storeName, key) => {
  const db = await initDB();
  return db.get(storeName, key);
};

export const clearCache = async (storeName) => {
  const db = await initDB();
  return db.clear(storeName);
};
