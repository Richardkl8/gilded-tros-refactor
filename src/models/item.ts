export interface Item {
  name: string;
  sellIn: number;
  quality: number;
}

export const createItem = (name: string, sellIn: number, quality: number): Item => ({
  name,
  sellIn,
  quality,
});

export const itemToString = (item: Item): string => {
  return `${item.name}, ${item.sellIn}, ${item.quality}`;
};
