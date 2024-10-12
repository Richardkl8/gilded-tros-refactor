import { Item, createItem, itemToString } from '../src/models/item';
import { GildedTros } from '../src/gilded-tros';
import { ITEMS } from '../src/constants/items';

console.log('AXXES CODE KATA - GILDED TROS');

const items: Item[] = [
  createItem('Ring of Cleansening Code', 10, 20),
  createItem('Elixir of the SOLID', 5, 7),
  createItem(ITEMS.GOOD_WINE, 2, 0),
  createItem(ITEMS.B_DAWG_KEYCHAIN, 0, 80),
  createItem(ITEMS.B_DAWG_KEYCHAIN, -1, 80),
  createItem(ITEMS.BACKSTAGE_PASSES_REFACTOR, 15, 20),
  createItem(ITEMS.BACKSTAGE_PASSES_REFACTOR, 10, 49),
  createItem(ITEMS.BACKSTAGE_PASSES_HAXX, 5, 49),
  createItem(ITEMS.DUPLICATE_CODE, 3, 6),
  createItem(ITEMS.LONG_METHODS, 3, 6),
  createItem(ITEMS.UGLY_VARIABLE_NAMES, 3, 6),
];

const runSimulationRecursive = (app: ReturnType<typeof GildedTros>, days: number, currentDay: number = 0): void => {
  if (days <= 0) return;

  console.log('-------- day ' + currentDay + ' --------');
  console.log('name, sellIn, quality');
  app.items.forEach((item) => console.log(itemToString(item)));
  console.log();

  const updatedApp = GildedTros(app.updateItems());
  runSimulationRecursive(updatedApp, days - 1, currentDay + 1);
};

const setAmountOfDays = () => {
  let days = 4;
  const args = process.argv.slice(2);
  if (args.length > 0) {
    days = +args[0] + 1;
  }
  return days;
};

const app = GildedTros(items);
runSimulationRecursive(app, setAmountOfDays());
