import { Item } from '@models/item';
import { decrementSellIn, increaseQuality } from '@services/item-updaters/utils/item-updaters-utils';
import { QUALITY } from '@constants/quality';

export const updateGoodWine = (item: Item): Item => {
  const updatedItem = decrementSellIn(item);

  const qualityIncreaseAmount =
    updatedItem.sellIn < QUALITY.MINIMUM_QUALITY_ITEM
      ? QUALITY.INCREASE_AFTER_SELL_DATE
      : QUALITY.INCREASE_BEFORE_SELL_DATE;

  return increaseQuality(updatedItem, qualityIncreaseAmount);
};
