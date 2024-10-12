import { createItem } from '@models/item';
import { updateItems } from '@services/item-updaters/item-updaters';
import { ITEMS } from '@constants/items';

describe('updateItems', () => {
  it('should update multiple items correctly', () => {
    const items = [
      createItem(ITEMS.GOOD_WINE, 5, 20),
      createItem(ITEMS.BACKSTAGE_PASSES_REFACTOR, 15, 20),
      createItem(ITEMS.DUPLICATE_CODE, 10, 20),
      createItem('Normal Item', 10, 20),
    ];
    const updatedItems = updateItems(items);

    expect(updatedItems).toEqual([
      createItem(ITEMS.GOOD_WINE, 4, 21),
      createItem(ITEMS.BACKSTAGE_PASSES_REFACTOR, 14, 21),
      createItem(ITEMS.DUPLICATE_CODE, 9, 18),
      createItem('Normal Item', 9, 19),
    ]);
  });

  it('should handle unknown items as normal items', () => {
    const items = [createItem('Unknown Item', 10, 20)];
    const updatedItems = updateItems(items);

    expect(updatedItems).toEqual([createItem('Unknown Item', 9, 19)]);
  });
});
