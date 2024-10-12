import { createItem } from '../../models/item';
import { updateBackstagePass } from './update-backstage-pass';
import { ITEMS } from '../../constants/items';

describe('updateBackstagePass', () => {
  it('should decrease sellIn by 1', () => {
    const item = createItem(ITEMS.BACKSTAGE_PASSES_REFACTOR, 15, 20);
    const updatedItem = updateBackstagePass(item);

    expect(updatedItem.sellIn).toBe(14);
  });

  it('should increase quality by 1 when sellIn is more than 10 days', () => {
    const item = createItem(ITEMS.BACKSTAGE_PASSES_REFACTOR, 15, 20);
    const updatedItem = updateBackstagePass(item);

    expect(updatedItem.quality).toBe(21);
  });

  it('should increase quality by 2 when sellIn is 10 days or less', () => {
    const item = createItem(ITEMS.BACKSTAGE_PASSES_REFACTOR, 10, 20);
    const updatedItem = updateBackstagePass(item);

    expect(updatedItem.quality).toBe(22);
  });

  it('should increase quality by 3 when sellIn is 5 days or less', () => {
    const item = createItem(ITEMS.BACKSTAGE_PASSES_REFACTOR, 5, 20);
    const updatedItem = updateBackstagePass(item);

    expect(updatedItem.quality).toBe(23);
  });

  it('should drop quality to 0 after the event', () => {
    const item = createItem(ITEMS.BACKSTAGE_PASSES_REFACTOR, 0, 20);
    const updatedItem = updateBackstagePass(item);

    expect(updatedItem.quality).toBe(0);
  });

  it('should not increase quality beyond 50', () => {
    const item = createItem(ITEMS.BACKSTAGE_PASSES_REFACTOR, 5, 49);
    const updatedItem = updateBackstagePass(item);

    expect(updatedItem.quality).toBe(50);
  });
});
