export const checkForFlares = (weapon, weapons) => {
  while (weapon.name.includes("signal cartridge")) {
    console.log(`${weapon.name} skipped`);
    weapon = weapons[Math.floor(Math.random() * weapons.length)];
  }

  return weapon;
};

export const sanitizeWeapon = (weapon, weapons) => {
  return checkForFlares(weapon, weapons);
};
