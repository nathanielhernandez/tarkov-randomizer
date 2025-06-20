import { WEAPONS_QUERY, MODS_QUERY } from "./tarkovQueries";
import { WEAPONS_STORE_NAME, MODS_STORE_NAME, setCache, getCache } from "./db";

const TARKOV_API_URL = "https://api.tarkov.dev/graphql";

export const fetchFromTarkovDev = async ({ query, storeName, cacheKey }) => {
  //
  // Try to get from cache, if cached, return the cached data
  //

  const cached = await getCache(storeName, cacheKey);
  if (cached) {
    return cached.data;
  }

  //
  // If not cached, fetch from API
  //

  const response = await fetch(TARKOV_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error("Tarkov.dev API error: ${response.status}");
  }

  const result = await response.json();
  await setCache(storeName, cacheKey, result);

  return result.data.items;
};

export async function fetchWeapons() {
  const data = await fetchFromTarkovDev({
    query: WEAPONS_QUERY,
    storeName: WEAPONS_STORE_NAME,
    cacheKey: "all-weapons",
  });

  return data.items;
}

export async function fetchMods() {
  const data = await fetchFromTarkovDev({
    query: MODS_QUERY,
    storeName: MODS_STORE_NAME,
    cacheKey: "all-mods",
  });
  return data.items;
}
