import { createItem } from '../../models/item';
import { updateLegendaryItem } from './update-legendary-item';
import { QUALITY } from '../../constants/quality';
import { ITEMS } from '../../constants/items';

describe('updateLegendaryItem', () => {
  it('should maintain quality at maximum legendary quality', () => {
    const item = createItem(ITEMS.B_DAWG_KEYCHAIN, 5, 70);
    const updatedItem = updateLegendaryItem(item);

    expect(updatedItem.quality).toBe(QUALITY.MAXIMUM_QUALITY_LEGENDARY_ITEM);
  });

  it('should not change sellIn value', () => {
    const item = createItem(ITEMS.B_DAWG_KEYCHAIN, 5, 80);
    const updatedItem = updateLegendaryItem(item);

    expect(updatedItem.sellIn).toBe(5);
  });
});
