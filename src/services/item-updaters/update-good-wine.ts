import { Item } from '../../models/item';
import { decrementSellIn, increaseQuality } from './utils/item-updaters-utils';
import { QUALITY } from '../../constants/quality';

export const updateGoodWine = (item: Item): Item => {
  const updatedItem = decrementSellIn(item);

  const qualityIncreaseAmount = QUALITY.WINE_INCREASE;

  return increaseQuality(updatedItem, qualityIncreaseAmount);
};
