import { Item } from '../../models/item';
import { decrementSellIn, increaseQuality } from './utils/item-updaters-utils';
import { QUALITY } from '../../constants/quality';

export const updateGoodWine = (item: Item): Item => {
  const updatedItem = decrementSellIn(item);

  const qualityIncreaseAmount =
    updatedItem.sellIn < 0 ? QUALITY.INCREASE_AFTER_SELL_DATE : QUALITY.INCREASE_BEFORE_SELL_DATE;

  return increaseQuality(updatedItem, qualityIncreaseAmount);
};
