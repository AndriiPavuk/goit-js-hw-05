const sortByDescendingFriendCount = users =>
  [...users].sort((a, b) => b.friends.length - a.friends.length);

console.log(
  sortByDescendingFriendCount([
    {
      name: 'Moore Hensley',
      friends: ['Sharron Pace'],
      gender: 'male',
    },
    {
      name: 'Sharlene Bush',
      friends: ['Briana Decker', 'Sharron Pace'],
      gender: 'female',
    },
    {
      name: 'Ross Vazquez',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      gender: 'male',
    },
    {
      name: 'Elma Head',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      gender: 'female',
    },
    {
      name: 'Carey Barr',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      gender: 'male',
    },
    {
      name: 'Blackburn Dotson',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      gender: 'male',
    },
    {
      name: 'Sheree Anthony',
      friends: ['Goldie Gentry', 'Briana Decker'],
      gender: 'female',
    },
  ]),
);
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]


// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const sortbydescendingfriendcount = users => {
//   users.sort((a, b) => b.friends.length - a.friends.length);
//   return users;
// };

// console.log(
//   sortbydescendingfriendcount([
//     {
//       name: 'moore hensley',
//       friends: ['sharron pace'],
//       gender: 'male',
//     },
//     {
//       name: 'sharlene bush',
//       friends: ['briana decker', 'sharron pace'],
//       gender: 'female',
//     },
//     {
//       name: 'ross vazquez',
//       friends: ['marilyn mcintosh', 'padilla garrison', 'naomi buckner'],
//       gender: 'male',
//     },
//     {
//       name: 'elma head',
//       friends: ['goldie gentry', 'aisha tran'],
//       gender: 'female',
//     },
//     {
//       name: 'carey barr',
//       friends: ['jordan sampson', 'eddie strong'],
//       gender: 'male',
//     },
//     {
//       name: 'blackburn dotson',
//       friends: ['jacklyn lucas', 'linda chapman'],
//       gender: 'male',
//     },
//     {
//       name: 'sheree anthony',
//       friends: ['goldie gentry', 'briana decker'],
//       gender: 'female',
//     },
//   ]),
// );