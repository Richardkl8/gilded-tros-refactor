import { decrementSellIn, increaseQuality, decreaseQuality } from './item-updaters-utils';
import { ITEMS } from '../../../constants/items';
import { QUALITY } from '../../../constants/quality';

describe('Utils functions', () => {
  describe('decrementSellIn', () => {
    it('should decrement the sellIn value by 1', () => {
      const item = { name: 'Normal Item', sellIn: 10, quality: 20 };
      const updatedItem = decrementSellIn(item);

      expect(updatedItem.sellIn).toBe(9);
      expect(updatedItem.quality).toBe(item.quality);
    });
  });

  describe('increaseQuality', () => {
    it('should increase the quality value by the given amount', () => {
      const item = { name: ITEMS.GOOD_WINE, sellIn: 5, quality: 10 };
      const updatedItem = increaseQuality(item, 5);

      expect(updatedItem.quality).toBe(15);
      expect(updatedItem.sellIn).toBe(item.sellIn);
    });

    it('should not increase the quality beyond the maximum allowed value', () => {
      const item = { name: ITEMS.GOOD_WINE, sellIn: 5, quality: 48 };
      const updatedItem = increaseQuality(item, 5);

      expect(updatedItem.quality).toBe(QUALITY.MAXIMUM_QUALITY_ITEM);
    });
  });

  describe('decreaseQuality', () => {
    it('should decrease the quality value by the given amount', () => {
      const item = { name: 'Normal Item', sellIn: 5, quality: 10 };
      const updatedItem = decreaseQuality(item, 3);

      expect(updatedItem.quality).toBe(7);
      expect(updatedItem.sellIn).toBe(item.sellIn);
    });

    it('should not decrease the quality below the minimum allowed value', () => {
      const item = { name: 'Normal Item', sellIn: 5, quality: 2 };
      const updatedItem = decreaseQuality(item, 5);

      expect(updatedItem.quality).toBe(QUALITY.MINIMUM_QUALITY_ITEM);
    });
  });
});
