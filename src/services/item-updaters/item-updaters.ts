import { Item } from '../../models/item';
import { ITEMS } from '../../constants/items';
import { updateNormalItem } from './update-normal-item';
import { updateGoodWine } from './update-good-wine';
import { updateBackstagePass } from './update-backstage-pass';
import { updateLegendaryItem } from './update-legendary-item';
import { updateSmellyItem } from './update-smelly-item';

type ItemUpdater = (item: Item) => Item;
type ItemNames = (typeof ITEMS)[keyof typeof ITEMS];

const itemUpdaters: Record<ItemNames, ItemUpdater> = {
  [ITEMS.GOOD_WINE]: updateGoodWine,
  [ITEMS.BACKSTAGE_PASSES_REFACTOR]: updateBackstagePass,
  [ITEMS.BACKSTAGE_PASSES_HAXX]: updateBackstagePass,
  [ITEMS.B_DAWG_KEYCHAIN]: updateLegendaryItem,
  [ITEMS.DUPLICATE_CODE]: updateSmellyItem,
  [ITEMS.LONG_METHODS]: updateSmellyItem,
  [ITEMS.UGLY_VARIABLE_NAMES]: updateSmellyItem,
};

export const getItemUpdater = (itemName: ItemNames): ItemUpdater => {
  return itemUpdaters[itemName] || updateNormalItem;
};

export const updateItems = (items: Item[]): Item[] => {
  return items.map((item) => getItemUpdater(item.name as ItemNames)(item));
};
