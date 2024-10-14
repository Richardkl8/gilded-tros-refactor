import { createItem } from '../../models/item';
import { updateGoodWine } from './update-good-wine';
import { ITEMS } from '../../constants/items';

describe('updateGoodWine', () => {
  it('should decrease sellIn by 1', () => {
    const item = createItem(ITEMS.GOOD_WINE, 10, 20);
    const updatedItem = updateGoodWine(item);

    expect(updatedItem.sellIn).toBe(9);
  });

  it('should increase quality by 1', () => {
    const item = createItem(ITEMS.GOOD_WINE, 10, 20);
    const updatedItem = updateGoodWine(item);

    expect(updatedItem.quality).toBe(21);
  });

  it('should not increase quality beyond 50', () => {
    const item = createItem(ITEMS.GOOD_WINE, 5, 50);
    const updatedItem = updateGoodWine(item);

    expect(updatedItem.quality).toBe(50);
  });
});
