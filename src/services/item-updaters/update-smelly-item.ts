import { Item } from '../../models/item';
import { decrementSellIn, decreaseQuality } from './utils/item-updaters-utils';
import { QUALITY } from '../../constants/quality';

export const updateSmellyItem = (item: Item): Item => {
  const updatedItem = decrementSellIn(item);

  const qualityDecreaseAmount =
    updatedItem.sellIn < 0
      ? QUALITY.SMELLY_ITEM_DECREASE_AFTER_SELL_DATE
      : QUALITY.SMELLY_ITEM_DECREASE_BEFORE_SELL_DATE;

  return decreaseQuality(updatedItem, qualityDecreaseAmount);
};
