import { Item } from '../../models/item';
import { decrementSellIn, increaseQuality } from './utils/item-updaters-utils';
import { QUALITY } from '../../constants/quality';

export const updateBackstagePass = (item: Item): Item => {
  const updatedItem = decrementSellIn(item);

  if (updatedItem.sellIn < 0) {
    return { ...updatedItem, quality: 0 };
  }

  let qualityIncreaseAmount = QUALITY.BACKSTAGE_PASS_INCREASE_DEFAULT;

  if (updatedItem.sellIn < 10) qualityIncreaseAmount = QUALITY.BACKSTAGE_PASS_INCREASE_LESS_THAN_10_DAYS;
  if (updatedItem.sellIn < 5) qualityIncreaseAmount = QUALITY.BACKSTAGE_PASS_INCREASE_LESS_THAN_5_DAYS;

  return increaseQuality(updatedItem, qualityIncreaseAmount);
};
