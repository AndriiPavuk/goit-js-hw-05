class Storage {
  #items;

  constructor(initialItems) {
    this.#items = initialItems;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    const indexToRemove = this.#items.indexOf(itemToRemove);
    if (indexToRemove !== -1) {
      this.#items.splice(indexToRemove, 1);
    }
  }
}

// class storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getitems() {
//     return this.items;
//   }

//   additem(newitem) {
//     this.items.push(newitem);
//   }

//   removeitem(itemtoremove) {
//     this.items = this.items.filter(item => item !== itemtoremove);
//   }
// }

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
