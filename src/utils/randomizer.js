const usedItemIds = new Set();
const conflictingItemsIds = new Set();

export const clearIds = () => {
  usedItemIds.clear();
  conflictingItemsIds.clear();
};

const selectAllowedItem = (
  slot,
  allMods,
  status,
  usedItemIds,
  conflictingItemsIds,
  depth,
  settings
) => {
  const allowedItems = slot.filters.allowedItems || [];

  var validItems = allowedItems.filter((item) => {
    return !conflictingItemsIds.has(item.id);
  });

  validItems = validItems.filter((item) => {
    return !item.conflictingItems?.some((conflictItem) =>
      usedItemIds.has(conflictItem.id)
    );
  });

  if (validItems.length > 0) {
    const index = Math.floor(Math.random() * validItems.length);
    const chosenItem = validItems[index];

    usedItemIds?.add(chosenItem.id);
    chosenItem.conflictingItems.forEach((item) =>
      conflictingItemsIds.add(item.id)
    );

    const fullAttachment = allMods.find((mod) => mod.id === chosenItem.id);

    if (!fullAttachment) return null;
    depth++;

    const filledAttachment = randomizeItemWithSlots(
      fullAttachment,
      allMods,
      depth,
      settings
    );

    return {
      name: slot.name,
      item: filledAttachment,
      image: chosenItem.image,
      depth: depth,
    };
  } else {
    return;
  }
};

export const randomizeItemWithSlots = (item, allMods, depth, settings) => {
  const filledSlots = [];
  const slots = item?.properties?.slots || [];
  console.log(settings);

  const enforceScope = settings.enforceScope ?? false;
  const enforceStock = settings.enforceStock ?? false;
  const enforceMuzzle = settings.enforceMuzzle ?? false;

  for (var slot of slots) {
    if (
      (enforceScope && slot.name == "Scope") ||
      (enforceMuzzle && slot.name == "Muzzle") ||
      (enforceStock && slot.name == "Stock")
    ) {
      console.log("setSlot required due to checkbox: ", slot.name);

      slot.required = true;
    }

    if (slot.required) {
      if (slot.filters.allowedItems.length > 0) {
        filledSlots.push(
          selectAllowedItem(
            slot,
            allMods,
            slot.required,
            usedItemIds,
            conflictingItemsIds,
            depth,
            settings
          )
        );
      }
    } else {
      const choice = Math.floor(Math.random() * 2);
      if (choice == 1) {
        if (slot.filters.allowedItems.length > 0) {
          filledSlots.push(
            selectAllowedItem(
              slot,
              allMods,
              slot.required,
              usedItemIds,
              conflictingItemsIds,
              depth,
              settings
            )
          );
        }
      } else {
        // }
      }
    }
  }

  return {
    id: item.id,
    name: item.name,
    shortName: item.shortName,
    image: item.image8xLink,
    conflictingItems: item.conflictingItems,
    slots: filledSlots,
    category: item.category.name,
  };
};
