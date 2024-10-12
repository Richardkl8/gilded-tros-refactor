import { createItem, itemToString } from './item';

describe('Item', () => {
  describe('createItem', () => {
    it('should create an item with the given properties', () => {
      const item = createItem('Test Item', 10, 20);
      expect(item).toEqual({ name: 'Test Item', sellIn: 10, quality: 20 });
    });
  });

  describe('itemToString', () => {
    it('should return a string representation of the item', () => {
      const item = createItem('Test Item', 10, 20);
      expect(itemToString(item)).toBe('Test Item, 10, 20');
    });
  });
});
