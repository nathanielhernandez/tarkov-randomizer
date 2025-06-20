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
  depth
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

    // console.log("valid items: ", validItems);

    // console.log("chosen item: ", chosenItem);
    // console.log("conflictingItemIds: ", conflictingItemsIds);
    // console.log("usedItemIds: ", usedItemIds);

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
      depth
    );

    // console.log(`${slot.name}: ${chosenItem.name} Required: ${status}`);
    return {
      name: slot.name,
      item: filledAttachment,
      image: chosenItem.image,
      depth: depth,
    };
  } else {
    // console.log("allowedItems: ", allowedItems);
    // console.log("filtered validItems: ", validItems);

    // console.log("\n//\n//no valid items\n//");
    return;
  }
};

export const randomizeItemWithSlots = (item, allMods, depth) => {
  const filledSlots = [];
  const slots = item?.properties?.slots || [];

  for (var slot of slots) {
    if (slot.required) {
      if (slot.filters.allowedItems.length > 0) {
        filledSlots.push(
          selectAllowedItem(
            slot,
            allMods,
            slot.required,
            usedItemIds,
            conflictingItemsIds,
            depth
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
              depth
            )
          );
        }
      } else {
        // console.log(`${slot.name}: SKIPPED NOT REQUIRED`);
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
  };
};
