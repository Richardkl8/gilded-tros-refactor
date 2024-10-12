import { createItem } from '@models/item';
import { updateSmellyItem } from '@services/item-updaters/update-smelly-item';
import { ITEMS } from '@constants/items';

describe('updateSmellyItem', () => {
  it('should decrease sellIn by 1', () => {
    const item = createItem(ITEMS.DUPLICATE_CODE, 10, 20);
    const updatedItem = updateSmellyItem(item);

    expect(updatedItem.sellIn).toBe(9);
  });

  it('should decrease quality by 2 before sell date', () => {
    const item = createItem(ITEMS.LONG_METHODS, 10, 20);
    const updatedItem = updateSmellyItem(item);

    expect(updatedItem.quality).toBe(18);
  });

  it('should decrease quality by 4 after sell date', () => {
    const item = createItem(ITEMS.UGLY_VARIABLE_NAMES, 0, 20);
    const updatedItem = updateSmellyItem(item);

    expect(updatedItem.quality).toBe(16);
  });

  it('should not decrease quality below 0', () => {
    const item = createItem(ITEMS.DUPLICATE_CODE, 5, 1);
    const updatedItem = updateSmellyItem(item);

    expect(updatedItem.quality).toBe(0);
  });
});
