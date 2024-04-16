'use strict';

class Storage {
  #items;
  constructor(params) {
    this.#items = params;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    const indexOfRemovalItem = this.#items.indexOf(itemToRemove);
    if (indexOfRemovalItem !== -1) {
      this.#items.splice(indexOfRemovalItem, 1);
    }
  }
}

console.log('Task 2');

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);

// console.log(storage);

console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scaner');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
