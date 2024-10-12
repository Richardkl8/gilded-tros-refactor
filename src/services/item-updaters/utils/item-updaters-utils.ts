import { Item } from '../../../models/item';
import { QUALITY } from '../../../constants/quality';

export const decrementSellIn = (item: Item): Item => ({
  ...item,
  sellIn: item.sellIn - 1,
});

export const increaseQuality = (item: Item, amount: number = 1): Item => ({
  ...item,
  quality: Math.min(QUALITY.MAXIMUM_QUALITY_ITEM, item.quality + amount),
});

export const decreaseQuality = (item: Item, amount: number = 1): Item => ({
  ...item,
  quality: Math.max(QUALITY.MINIMUM_QUALITY_ITEM, item.quality - amount),
});
