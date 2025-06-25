export const WEAPONS_QUERY = `query Weapons {
  items(lang: en, types: [gun]) {
    id
    name
    image8xLink
    category {
      id
      name
    }
    properties {
      ... on ItemPropertiesWeapon {
        slots {
          required
          name
          filters {
            allowedItems {
              id
              name
              image8xLink
              conflictingItems {
                name
                id
              }
            }
          }
        }
      }
    }
  }
}`;

export const MODS_QUERY = `query Mods {
  items(lang: en, types: [mods]) {
    id
    name
    shortName
    image8xLink
    category {
      id
      name
    }
    conflictingItems {
      name
      id
    }
    properties {
      ... on ItemPropertiesWeaponMod {
        slots {
          required
          name
          filters {
            allowedItems {
              name
              shortName
              id
              image8xLink
              conflictingItems {
                name
                id
              }
            }
          }
        }
      }
    }
  }
}`;
