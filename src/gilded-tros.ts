import { Item } from '@models/item';
import { updateItems } from '@services/item-updaters/item-updaters';

export const GildedTros = (items: Item[]) => {
  const updatedItems = items;
  return {
    items: updatedItems,
    updateQuality: () => updateItems(updatedItems),
  };
};
