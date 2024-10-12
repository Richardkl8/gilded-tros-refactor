import { Item } from '@models/item';
import { decrementSellIn, decreaseQuality } from '@services/item-updaters/utils/utils';
import { QUALITY } from '@constants/quality';

export const updateNormalItem = (item: Item) => {
  const updatedItem = decrementSellIn(item);

  const qualityDecreaseAmount =
    updatedItem.sellIn < QUALITY.MINIMUM_QUALITY_ITEM
      ? QUALITY.DECREASE_AFTER_SELL_DATE
      : QUALITY.DECREASE_BEFORE_SELL_DATE;

  return decreaseQuality(updatedItem, qualityDecreaseAmount);
};
