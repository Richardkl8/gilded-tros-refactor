import { Item } from '@models/item';
import { QUALITY } from '@constants/quality';

export const updateLegendaryItem = (item: Item): Item => ({
  ...item,
  quality: QUALITY.MAXIMUM_QUALITY_LEGENDARY_ITEM,
});
