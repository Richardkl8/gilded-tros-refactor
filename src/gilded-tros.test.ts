import { createItem, Item } from './models/item';
import { GildedTros } from './gilded-tros';
import { ITEMS } from './constants/items';

describe('GildedTros', () => {
  it('should update quality for all items', () => {
    const items: Item[] = [
      createItem(ITEMS.GOOD_WINE, 5, 20),
      createItem(ITEMS.BACKSTAGE_PASSES_REFACTOR, 15, 20),
      createItem(ITEMS.DUPLICATE_CODE, 10, 20),
      createItem('Normal Item', 10, 20),
    ];
    const gildedTros = GildedTros(items);
    const updatedItems = gildedTros.updateItems();

    expect(updatedItems).toEqual([
      createItem(ITEMS.GOOD_WINE, 4, 21),
      createItem(ITEMS.BACKSTAGE_PASSES_REFACTOR, 14, 21),
      createItem(ITEMS.DUPLICATE_CODE, 9, 18),
      createItem('Normal Item', 9, 19),
    ]);
  });
});
