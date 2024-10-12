import { createItem } from '../../models/item';
import { updateNormalItem } from './update-normal-item';

describe('updateNormalItem', () => {
  it('should decrease sellIn by 1', () => {
    const item = createItem('Normal Item', 10, 20);
    const updatedItem = updateNormalItem(item);

    expect(updatedItem.sellIn).toBe(9);
  });

  it('should decrease quality by 1 before sell date', () => {
    const item = createItem('Normal Item', 10, 20);
    const updatedItem = updateNormalItem(item);

    expect(updatedItem.quality).toBe(19);
  });

  it('should decrease quality by 2 after sell date', () => {
    const item = createItem('Normal Item', 0, 20);
    const updatedItem = updateNormalItem(item);

    expect(updatedItem.quality).toBe(18);
  });

  it('should not decrease quality below 0', () => {
    const item = createItem('Normal Item', 5, 0);
    const updatedItem = updateNormalItem(item);

    expect(updatedItem.quality).toBe(0);
  });
});
