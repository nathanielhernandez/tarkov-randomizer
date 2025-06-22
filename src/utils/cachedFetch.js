export async function cachedFetch(cacheKey, ttlMs, fetchFunc) {
  // Read cached data and chaced timestamp from LocalStorage
  const cachedData = sessionStorage.getItem(cacheKey);
  const cachedTime = sessionStorage.getItem(`${cacheKey}-time`);

  // Check if cached data exists AND is still fresh
  if (cachedData && cachedTime && Date.now() - cachedTime < ttlMs) {
    // If cache is valid, p[arse and return the cached data
    console.log(`Pulling ` + cacheKey + ` from cache.`);

    return JSON.parse(cachedData);
  }

  console.log("pulling from API");

  // If no valid cache -> call the fetchFunc() to get fresh data
  const freshData = await fetchFunc();

  // Store fresh data in LocalStorage
  sessionStorage.setItem(cacheKey, JSON.stringify(freshData));
  sessionStorage.setItem(`${cacheKey}-time`, Date.now());

  // Return fresh data
  return freshData;
}

export const clearCache = () => {
  localStorage.removeItem(`tarkovWeaponsCache`);
  localStorage.removeItem(`tarkovWeaponsCache-time`);
  localStorage.removeItem(`tarkovModsCache`);
  localStorage.removeItem(`tarkovModsCache-time`);
  window.location.reload();
};
