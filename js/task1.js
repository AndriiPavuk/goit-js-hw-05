// function isEnoughCapacity(products, containersize) {
//   let totalQuantity = 0;
//   for (let product in products) {
//     totalQuantity += products[product];
//   }

//   if (totalQuantity <= containersize) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isEnoughCapacity(products, containersize) {
  let total = 0;
  for (let key in products) {
    total += products[key];
  }

  if (total <= containersize) {
    return true;
  } else {
    return false;
  }
}

// function isEnoughCapacity(products, containerSize) {
//   let quantity = 0;
//   const product = Object.values(products);
//   for (const item of product) {
//     quantity += item;
//   }
//   console.log(quantity <= containerSize ? true : false);
//   console.log('Quantity :' + quantity);
//   console.log('Container Size : ' + containerSize);
//   console.log('--------------------------');
// }

console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)
); // false